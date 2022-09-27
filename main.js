// @ts-nocheck
/* eslint-disable quotes */
"use strict";
/*
 * Created with @iobroker/create-adapter v1.12.1
 */

const utils = require("@iobroker/adapter-core");
const request = require("request");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios").default;
const WebSocket = require("ws");

// const Eventpush = require("./Proto/eventpush_pb");
// const UserEvents = require("./Proto/user-events_pb");
const VehicleCommands = require("./Proto/vehicle-commands_pb");
const VehicleEvents = require("./Proto/vehicle-events_pb");
const Client = require("./Proto/client_pb");
class Mercedesme extends utils.Adapter {
  /**
   * @param {Partial<ioBroker.AdapterOptions>} [options={}]
   */
  constructor(options) {
    super({
      ...options,
      name: "mercedesme",
    });
    this.on("ready", this.onReady.bind(this));
    this.on("stateChange", this.onStateChange.bind(this));
    this.on("unload", this.onUnload.bind(this));
    this.jar = request.jar();
    this.vinArray = [];
    this.refreshTokenInterval = null;
    this.retryTimeout = null;
    this.tenant = "";
    this.statusEtag = "";
    this.locationEtag = "";
    this.ws = null;
    this.wsHeartbeatTimeout = null;

    this.reconnectInterval = null;
    this.xSession = uuidv4();
    this.xTracking = uuidv4();
    this.deviceuuid = uuidv4();
  }

  /**
   * Is called when databases are connected and adapter received configuration.
   */
  async onReady() {
    // Initialize your adapter here
    //Delete old states
    const pre = this.name + "." + this.instance;
    this.getStates(pre + ".*", (err, states) => {
      if (states) {
        const allIds = Object.keys(states);
        allIds.forEach((keyName) => {
          if (keyName.split(".")[3] === "status" || keyName.split(".")[3] === "location" || keyName.split(".")[3] === "lastJourney") {
            this.delObject(keyName.split(".").slice(2).join("."));
          }
        });
      }
    });
    this.config.acceptLanguage = this.config.acceptLanguage ? this.config.acceptLanguage : "de-DE";
    this.baseHeader = {
      "RIS-OS-Version": "14.6",
      "X-TrackingId": this.xTracking,
      "RIS-OS-Name": "ios",
      "X-SessionId": this.xSession,
      Accept: "*/*",
      "X-ApplicationName": "mycar-store-ece",
      "Accept-Language": "de-DE;q=1.0",
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      "X-Request-Id": this.xTracking,
      "RIS-SDK-Version": "2.43.0",
      "User-Agent": "MyCar/1.11.0 (com.daimler.ris.mercedesme.ece.ios; build:1051; iOS 12.5.1) Alamofire/5.4.0",
      "ris-application-version": "1.11.0 (1051)",
      "device-uuid": this.deviceuuid,
      "X-Locale": this.config.acceptLanguage,
    };

    if (this.config.resetAccess) {
      this.log.info("Reset access");
      this.atoken = "";
      this.rtoken = "";
      this.setState("auth.access_token", "", true);
      this.setState("auth.refresh_token", "", true);
      const adapterConfig = "system.adapter." + pre;
      this.getForeignObject(adapterConfig, (error, obj) => {
        if (obj) {
          obj.native.resetAccess = false;
          this.setForeignObject(adapterConfig, obj);
        }
      });
      return;
    }

    this.initLoading();

    this.subscribeStates("*");
  }

  async initLoading() {
    await this.setObjectNotExistsAsync("auth", {
      type: "state",
      common: {
        name: "Auth Information for login",
        write: true,
        role: "indicator",
        read: true,
      },
      native: {},
    });
    await this.setObjectNotExistsAsync("auth.access_token", {
      type: "state",
      common: {
        name: "Access Token",
        type: "string",
        write: true,
        role: "indicator",
        read: true,
      },
      native: {},
    });
    await this.setObjectNotExistsAsync("auth.refresh_token", {
      type: "state",
      common: {
        name: "Refresh Token",
        type: "string",
        write: true,
        role: "indicator",
        read: true,
      },
      native: {},
    });
    await this.setObjectNotExistsAsync("auth.loginNonce", {
      type: "state",
      common: {
        name: "Login Nonce",
        type: "string",
        write: true,
        role: "indicator",
        read: true,
      },
      native: {},
    });
    const aTokenState = await this.getStateAsync("auth.access_token");
    const rTokenState = await this.getStateAsync("auth.refresh_token");
    if (aTokenState) {
      this.atoken = aTokenState.val;
    }
    if (rTokenState) {
      this.rtoken = rTokenState.val;
    }
    await this.login()
      .then(async () => {
        this.log.debug("Login successful");
        this.setState("info.connection", true, true);
        this.log.debug("start refresh interval");
        this.refreshTokenInterval = setInterval(() => {
          this.log.debug("Refresh Token");
          this.refreshToken(true).catch(() => {
            this.log.error("Refresh Token Failed do a relogin");
            this.initLoading().catch(() => {
              this.log.error("Relogin failed");
            });
          });
        }, 60 * 60 * 1000); // 60min
        await this.getVehicles()
          .then(() => {
            this.getCommands().catch(() => {
              this.log.error("Error getting Commands");
            });
            this.getGeoFence().catch(() => {
              this.log.error("Error getting GeoFence");
            });
            this.getUserInformation().catch(() => {
              this.log.error("Error getting user infos");
            });
            this.log.info("Start Websocket Connection");
            this.connectWS();
          })
          .catch(() => {
            this.log.error("Error getting Vehicles");
          });
      })
      .catch(() => {
        this.log.error("Login was not successful.");
        this.setState("info.connection", false, true);
        return;
      });
  }

  /**
   * Is called when adapter shuts down - callback has to be called under any circumstances!
   * @param {() => void} callback
   */
  onUnload(callback) {
    try {
      clearInterval(this.refreshTokenInterval);
      clearInterval(this.reconnectInterval);
      clearTimeout(this.retryTimeout);
      clearTimeout(this.reLoginTimeout);
      clearTimeout(this.wsHeartbeatTimeout);

      callback();
    } catch (e) {
      callback();
    }
  }

  /**
   * Is called if a subscribed state changes
   * @param {string} id
   * @param {ioBroker.State | null | undefined} state
   */
  async onStateChange(id, state) {
    if (state) {
      const vin = id.split(".")[2];
      if (!state.ack) {
        if (id.indexOf("commands") !== -1) {
          const commandId = id.split(".").splice(-2, 1)[0].toLocaleLowerCase();

          try {
            const commandIdCC = this.toCamel("_" + commandId.replace("zev", "ZEV"));
            const setCommandIdCC = this.toCamel("set_" + commandId);
            const command = new VehicleCommands.CommandRequest();
            command.setBackend(1);
            command.setVin(vin);
            command.setRequestId(uuidv4());
            const vc = new VehicleCommands[commandIdCC]();
            if (vc.setPin) {
              vc.setPin(this.config.pin);
            }
            if (commandId.indexOf("zev") !== -1) {
              //VorklimaDelay

              const delayState = await this.getStateAsync(vin + ".remote.VorklimaDelay");
              if (delayState && delayState.val > 0) {
                if (vc.setType) {
                  vc.setType(2);
                }
                if (vc.setDepartureTime) {
                  const now = new Date();
                  vc.setDepartureTime(now.getHours() * 60 + now.getMinutes() + parseInt(delayState.val));
                }
              } else {
                if (vc.setType) {
                  vc.setType(3);
                }
                if (vc.setDepartureTime) {
                  vc.setDepartureTime(-1);
                }
              }
            }
            command[setCommandIdCC](vc);
            this.log.debug(JSON.stringify(command.toObject()));
            const clientMessage = new Client.ClientMessage();

            clientMessage.setCommandrequest(command);
            // clientMessage.setTrackingId(this.xTracking);
            this.log.debug(JSON.stringify(clientMessage.toObject()));
            this.ws.send(clientMessage.serializeBinary());
            return;
          } catch (error) {
            this.log.error("Cannot start " + commandId);
            this.log.error(error);
            return;
          }
        }
        if (id.indexOf("remote") !== -1) {
          if (id.indexOf("Vorklimatisierung") !== -1) {
            if (!state.val || state.val === "false") {
              this.setState(vin + ".commands.ZEV_PRECONDITIONING_STOP.start", true, false);
            } else {
              this.setState(vin + ".commands.ZEV_PRECONDITIONING_START.start", true, false);
            }
          }
          if (id.indexOf("DoorLock") !== -1) {
            if (!state.val || state.val === "false") {
              this.setState(vin + ".commands.DOORS_UNLOCK.start", true, false);
            } else {
              this.setState(vin + ".commands.DOORS_LOCK.start", true, false);
            }
          }

          if (id.indexOf("DoorOpen") !== -1) {
            if (!state.val || state.val === "false") {
              this.setState(vin + ".commands.DOORS_LOCK.start", true, false);
            } else {
              this.setState(vin + ".commands.DOORS_UNLOCK.start", true, false);
            }
          }
          if (id.indexOf("WindowsOpen") !== -1) {
            if (!state.val || state.val === "false") {
              this.setState(vin + ".commands.WINDOWS_CLOSE.start", true, false);
            } else {
              this.setState(vin + ".commands.WINDOWS_OPEN.start", true, false);
            }
          }
          if (id.indexOf("Auxheat") !== -1) {
            if (!state.val || state.val === "false") {
              this.setState(vin + ".commands.AUXHEAT_STOP.start", true, false);
            } else {
              this.setState(vin + ".commands.AUXHEAT_START.start", true, false);
            }
          }
        }
      } else {
        //ACK Values
        if (id.indexOf("state.tanklevelpercent.intValue") !== -1 || id.indexOf("state.soc.intValue") !== -1) {
          let lastTankeLevel = "tankLevelLast";
          let status = "tankLevelStatus";
          let beforeFueling = "tankLevelBeforeFueling";
          let jsonString = "tankLevelJSON";
          let startDate = "tankStart";
          let changedState = await this.getStateAsync(vin + ".state.tanklevelpercent.changed");
          if (id.indexOf("state.soc.intValue") !== -1) {
            lastTankeLevel = "socLevelLast";
            status = "socStatus";
            beforeFueling = "socLevelBeforeFueling";
            jsonString = "socJSON";

            startDate = "socStart";
            changedState = await this.getStateAsync(vin + ".state.soc.changed");
          }
          if (changedState && changedState.val === false) {
            return;
          }
          const statusState = await this.getStateAsync(vin + ".history." + status);
          if (!statusState) {
            await this.setStateAsync(vin + ".history." + status, false, true);
          }

          const lastTankLevelState = await this.getStateAsync(vin + ".history." + lastTankeLevel);
          if (!lastTankLevelState) {
            await this.setStateAsync(vin + ".history." + lastTankeLevel, state.val, true);
          }
          const beforeFuelingState = await this.getStateAsync(vin + ".history." + beforeFueling);
          const odoState = (await this.getStateAsync(vin + ".state.odo.intValue")) || { val: 0 };

          if (statusState && lastTankLevelState) {
            if (state.val === lastTankLevelState.val && statusState.val) {
              await this.setStateAsync(vin + ".history." + status, false, true);
              this.log.debug("Tank/Soc is not increased set loading on false");
            }
            if (state.val > lastTankLevelState.val && !statusState.val) {
              //check is charging via power plug
              if (status === "socStatus") {
                const chargingstatus = await this.getStateAsync(vin + ".state.chargingstatus.intValue");
                if (chargingstatus && chargingstatus.val >= 2) {
                  return;
                }
              }
              await this.setStateAsync(vin + ".history." + beforeFueling, lastTankLevelState.val, true);
              await this.setStateAsync(vin + ".history." + status, true, true);
              const d = new Date();
              const dateFormatted =
                [d.getDate(), d.getMonth() + 1, d.getFullYear()].join(".") +
                " " +
                [
                  d.getHours().toString().length < 2 ? "0" + d.getHours() : d.getHours(),
                  d.getMinutes().toString().length < 2 ? "0" + d.getMinutes() : d.getMinutes(),
                ].join(":");

              await this.setStateAsync(vin + ".history." + startDate, dateFormatted, true);
            }
            if (state.val === 100 || (state.val < lastTankLevelState.val && statusState.val)) {
              this.setState(vin + ".history." + status, false, true);
              const d = new Date();
              const dformat =
                [d.getDate(), d.getMonth() + 1, d.getFullYear()].join(".") +
                " " +
                [
                  d.getHours().toString().length < 2 ? "0" + d.getHours() : d.getHours(),
                  d.getMinutes().toString().length < 2 ? "0" + d.getMinutes() : d.getMinutes(),
                ].join(":");
              const beforeValue = beforeFuelingState ? beforeFuelingState.val : 0;
              const diff = state.val - parseInt(beforeValue);
              let quantity = 0;
              let price = 0;
              const odo = odoState.val;
              let basicPrice = 0;
              if (id.indexOf("state.soc.intValue") !== -1) {
                if (this.config.capacity) {
                  const capacityArray = this.config.capacity.replace(/ /g, "").split(",");
                  const capacity = parseFloat(capacityArray[this.vinArray.indexOf(vin)]);
                  quantity = (diff * capacity) / 100;
                  quantity = quantity.toFixed(2);
                  if (this.config.kwprice) {
                    basicPrice = parseFloat(this.config.kwprice);
                    price = parseFloat(this.config.kwprice) * quantity;
                  }
                }
              } else {
                if (this.config.tank) {
                  const tankArray = this.config.tank.replace(/ /g, "").split(", ");
                  const tank = parseInt(tankArray[this.vinArray.indexOf(vin)]);
                  quantity = (diff * tank) / 100;
                  quantity = quantity.toFixed(2);

                  if (this.config.apiKey) {
                    price = await this.getGasPrice(vin);
                    basicPrice = price;
                    price = price * quantity;
                  }
                }
                if (this.config.isAdapter) {
                  quantity = diff;
                  if (this.config.apiKey) {
                    price = await this.getGasPrice(vin);
                    basicPrice = price;
                    price = price * quantity;
                  }
                }
              }
              if (beforeValue < 99 && diff > 0) {
                const startState = (await this.getStateAsync(vin + ".history." + startDate)) || { val: "" };
                const startDateValue = startState.val;
                const startDateArray = startDateValue.split(".");
                const startDateValueDate = new Date(startDateArray[1] + "-" + startDateArray[0] + "-" + startDateArray[2]);
                const diffTime = Math.abs(d - startDateValueDate);
                const diff = Math.ceil(diffTime / (1000 * 60));

                const fuelObject = {
                  start: beforeValue,
                  end: state.val,
                  date: dformat,
                  diff: diff,
                  quantity: quantity,
                  price: price.toFixed(2),
                  odo: odo,
                  basicPrice: basicPrice,
                  startDate: startState.val,
                  duration: diff,
                  perHour: quantity / diff / 60,
                };
                const currenJsonHistoryState = (await this.getStateAsync(vin + ".history." + jsonString)) || { val: {} };

                let currenJsonHistory = [];
                if (currenJsonHistory) {
                  try {
                    currenJsonHistory = JSON.parse(currenJsonHistoryState.val);
                  } catch (error) {
                    currenJsonHistory = [];
                  }
                }
                const newJsonHistory = [fuelObject].concat(currenJsonHistory);
                await this.setStateAsync(vin + ".history." + jsonString, JSON.stringify(newJsonHistory), true);
              }
            }
          }
          await this.setStateAsync(vin + ".history." + lastTankeLevel, state.val, true);
        }
        if (id.indexOf(".state.doorLockStatusOverall.intValue") !== -1) {
          if (state.ts !== state.lc) {
            return;
          }

          if (id.indexOf(".state.doorLockStatusOverall.intValue") !== -1) {
            this.setState(vin + ".remote.DoorLock", state.val ? 0 : 1, true);
            this.setState(vin + ".remote.DoorOpen", state.val, true);
          }
        }
        if (id.indexOf(".state.windowStatusOverall.intValue") !== -1) {
          if (state.ts !== state.lc) {
            return;
          }

          this.setState(vin + ".remote.WindowsOpen", state.val === 2 ? 1 : 0, true);
        }
        if (id.indexOf("state.precondActive.boolValue") !== -1 || id.indexOf("state.precondNow.boolValue") !== -1) {
          this.setState(vin + ".remote.Vorklimatisierung", state.val, true);
        }
        if (id.indexOf("state.auxheatActive.boolValue") !== -1) {
          this.setState(vin + ".remote.Auxheat", state.val, true);
        }
      }
    } else {
      // The state was deleted
    }
  }

  toCamel(s) {
    return s.replace(/([-_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace("-", "").replace("_", "");
    });
  }
  async getGasPrice(vin) {
    return new Promise(async (resolve) => {
      const pre = this.name + "." + this.instance;

      const lat = await this.getStateAsync(pre + "." + vin + ".state.positionLat.doubleValue");
      const long = await this.getStateAsync(pre + "." + vin + ".state.positionLong.doubleValue");
      if (!long || !lat) {
        this.log.warn("No Location available to receive the gas price");
        resolve(0);
        return;
      }
      this.log.debug(
        "https://creativecommons.tankerkoenig.de/json/list.php?lat=" +
          lat.val +
          "&lng=" +
          long.val +
          "&rad=4&sort=dist&type=" +
          this.config.gas +
          "&apikey=" +
          this.config.apiKey
      );
      request.get(
        {
          url:
            "https://creativecommons.tankerkoenig.de/json/list.php?lat=" +
            lat.val +
            "&lng=" +
            long.val +
            "&rad=4&sort=dist&type=" +
            this.config.gas +
            "&apikey=" +
            this.config.apiKey,
          followAllRedirects: true,
        },
        (err, resp, body) => {
          if (err || resp.statusCode >= 400 || !body) {
            resolve(0);
          }
          try {
            this.log.debug(body);
            const tankk = JSON.parse(body);
            if (tankk.status === "error") {
              resolve(0);
            }
            this.log.debug(tankk.stations[0].price);
            resolve(tankk.stations[0].price);
          } catch (error) {
            resolve(0);
          }
        }
      );
    });
  }
  extractUnit(value, element) {
    let unit = "";
    if (value !== null && value !== false && value !== "null" && !isNaN(value)) {
      if (
        element.toLowerCase().indexOf("odo") !== -1 ||
        element.toLowerCase().indexOf("range") !== -1 ||
        element.toLowerCase().indexOf("distance") !== -1 ||
        element.toLowerCase().indexOf("ecoscore") !== -1
      ) {
        unit = "km";
      }
      if (element.toLowerCase().indexOf("speed") !== -1) {
        unit = "km/h";
      }
      if (element.indexOf("tirepressure") !== -1) {
        unit = "kPa";
      }
      if (element.toLowerCase().indexOf("driventime") !== -1) {
        unit = "min";
      }
      if (element.toLowerCase().indexOf("driventime") !== -1) {
        unit = "min";
      }
      if (element.toLowerCase().indexOf("emperature") !== -1) {
        unit = "°c";
      }
      if (element.toLowerCase().indexOf("level") !== -1 || element.toLowerCase().indexOf("percent") !== -1 || element === "soc") {
        unit = "%";
      }
    }
    return unit;
  }
  async getVehicles() {
    const headers = this.baseHeader;
    headers.Authorization = this.atoken;
    await axios({
      method: "get",
      headers: headers,
      jar: this.jar,
      url: "https://bff-prod.risingstars.daimler.com/v2/vehicles?locale=" + this.config.acceptLanguage,
    })
      .then(async (res) => {
        const body = res.data;
        this.log.debug(JSON.stringify(body));
        try {
          if (body.assignedVehicles.length === 0) {
            this.log.warn("No vehicles found");
          }
          const vehicles = body.assignedVehicles.concat(body.fleets);
          this.log.info("Found " + vehicles.length + " vehicles");
          for (const element of vehicles) {
            if ((element.fin && element.fin !== "null") || (element.vin && element.vin !== "null")) {
              const fin = element.vin || element.fin;
              this.vinArray.push(fin);
              this.log.info(`Creating vehicle ${fin} with ${element.licensePlate}`);
              await this.setObjectNotExistsAsync(fin, {
                type: "device",
                common: {
                  name: element.licensePlate || element.licencePlateNumber,
                },
                native: {},
              });
              await this.setObjectNotExistsAsync(fin + ".masterdata", {
                type: "state",
                common: {
                  name: "Masterdata of the new mercedesMe App",
                  role: "indicator",
                  type: "mixed",
                  write: false,
                  read: true,
                },
                native: {},
              });
              this.extractKeys(fin + ".masterdata", element);
            } else {
              this.log.warn("No fin or vin found for vehicle");
              this.log.warn(JSON.stringify(element));
            }
          }
        } catch (error) {
          this.log.warn("Vehicles not found please start the mercedes me app: " + error);
        }
      })
      .catch((error) => {
        this.log.error(error);
        error.response && this.log.error(JSON.stringify(error.response.data));
      });
    this.vinArray = [...new Set(this.vinArray)];
    this.vinArray.forEach(async (element) => {
      await this.setObjectNotExistsAsync(element + ".history", {
        type: "state",
        common: {
          name: "Fuel/Energy Tank/Lade History",
          write: true,
          role: "indicator",
          read: true,
        },
        native: {},
      });

      await this.setObjectNotExistsAsync(element + ".history.tankLevelLast", {
        type: "state",
        common: {
          name: "Last Tanklevel value",
          type: "number",
          role: "number",
          write: false,
          read: true,
          unit: "%",
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".history.tankLevelBeforeFueling", {
        type: "state",
        common: {
          name: "Last Tanklevel before fueling",
          type: "number",
          role: "number",
          write: false,
          read: true,
          unit: "%",
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".history.tankLevelStatus", {
        type: "state",
        common: {
          name: "Refueling/Tanken",
          type: "boolean",
          role: "boolean",
          write: false,
          read: true,
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".history.tankLevelJSON", {
        type: "state",
        common: {
          name: "Tanklevel history as json",
          type: "object",
          role: "history",
          write: true,
          read: true,
        },
        native: {},
      });

      await this.setObjectNotExistsAsync(element + ".history.socLevelLast", {
        type: "state",
        common: {
          name: "Last Charging value",
          type: "number",
          role: "number",
          write: false,
          read: true,
          unit: "%",
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".history.socLevelBeforeFueling", {
        type: "state",
        common: {
          name: "Last Charging value before charging",
          type: "number",
          role: "number",
          write: false,
          read: true,
          unit: "%",
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".history.socStatus", {
        type: "state",
        common: {
          name: "Charging/Laden",
          type: "boolean",
          role: "boolean",
          write: false,
          read: true,
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".history.socJSON", {
        type: "state",
        common: {
          name: "Charging history as json",
          type: "object",
          role: "history",
          write: true,
          read: true,
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".history.socStart", {
        type: "state",
        common: {
          name: "Start Date of soc charging",
          type: "object",
          role: "string",
          write: false,
          read: true,
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".history.tankStart", {
        type: "state",
        common: {
          name: "Start Date of fueling",
          type: "object",
          role: "string",
          write: false,
          read: true,
        },
        native: {},
      });

      await this.setObjectNotExistsAsync(element + ".remote", {
        type: "state",
        common: {
          name: "Remote controls",
          write: true,
          role: "indicator",
          read: true,
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".remote.Vorklimatisierung", {
        type: "state",
        common: {
          name: "Precondition",
          type: "boolean",
          role: "switch.enable",
          write: true,
          read: true,
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".remote.VorklimaDelay", {
        type: "state",
        common: {
          name: "PreconditionDelay in Minutes needed by old models",
          type: "number",
          role: "level",
          write: true,
          read: true,
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".remote.Auxheat", {
        type: "state",
        common: {
          name: "Standheizung",
          type: "boolean",
          role: "switch.enable",
          write: true,
          read: true,
        },
        native: {},
      });

      await this.setObjectNotExistsAsync(element + ".remote.DoorLock", {
        type: "state",
        common: {
          name: "Door Lock 1 = Locked Doors / 0 = Open Doors",
          type: "number",
          role: "switch.lock",
          write: true,
          read: true,
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".remote.DoorOpen", {
        type: "state",
        common: {
          name: "Door Open 1 = Open Doors / 0 = Locked Doors",
          type: "number",
          role: "switch.lock.door",
          write: true,
          read: true,
        },
        native: {},
      });
      await this.setObjectNotExistsAsync(element + ".remote.WindowsOpen", {
        type: "state",
        common: {
          name: "Door Open 1 = Open Windows / 0 = Locked Windows",
          type: "number",
          role: "switch.lock.window",
          write: true,
          read: true,
        },
        native: {},
      });
    });
  }

  getCommands() {
    return new Promise((resolve, reject) => {
      const headers = this.baseHeader;
      headers.Authorization = this.atoken;
      this.vinArray.forEach((vin) => {
        this.log.debug("https://bff-prod.risingstars.daimler.com/v1/vehicle/" + vin + "/capabilities/commands");
        request.get(
          {
            jar: this.jar,
            gzip: true,
            url: "https://bff-prod.risingstars.daimler.com/v1/vehicle/" + vin + "/capabilities/commands",
            headers: headers,
            json: true,
          },
          (err, resp, body) => {
            if (err || resp.statusCode >= 400 || !body) {
              this.log.error("Getting commands for " + vin + " failed");
              err && this.log.error(JSON.stringify(err));
              resp && this.log.error(resp.statusCode.toString());
              body && this.log.error(JSON.stringify(body));
              reject();
              return;
            }
            this.log.debug(JSON.stringify(body));
            try {
              this.setObjectNotExists(vin + ".commands", {
                type: "state",
                common: {
                  name: "Commands of the new mercedesMe App",
                  role: "indicator",
                  type: "mixed",
                  write: false,
                  read: true,
                },
                native: {},
              });
              body.commands.forEach(async (command) => {
                await this.setObjectNotExistsAsync(vin + ".commands." + command.commandName, {
                  type: "state",
                  common: {
                    name: command.commandName,
                    role: "indicator",
                    type: "mixed",
                    write: false,
                    read: true,
                  },
                  native: {},
                });
                Object.keys(command).forEach(async (key) => {
                  if (key === "parameters") {
                    await this.setObjectNotExistsAsync(vin + ".commands." + command.commandName + ".parameters", {
                      type: "state",
                      common: {
                        name: command.commandName + " parameters",
                        role: "indicator",
                        type: "mixed",
                        write: false,
                        read: true,
                      },
                      native: {},
                    });
                    command["parameters"] &&
                      command["parameters"].forEach(async (parameter) => {
                        Object.keys(parameter).forEach(async (pKey) => {
                          await this.setObjectNotExistsAsync(
                            vin + ".commands." + command.commandName + ".parameters." + parameter.parameterName + "." + pKey,
                            {
                              type: "state",
                              common: {
                                name: pKey,
                                role: "indicator",
                                type: "mixed",
                                write: false,
                                read: true,
                              },
                              native: {},
                            }
                          );
                          this.setState(
                            vin + ".commands." + command.commandName + ".parameters." + parameter.parameterName + "." + pKey,
                            JSON.stringify(parameter[pKey]),
                            true
                          );
                        });
                      });
                  } else {
                    await this.setObjectNotExistsAsync(vin + ".commands." + command.commandName + "." + key, {
                      type: "state",
                      common: {
                        name: key,
                        role: "indicator",
                        type: "mixed",
                        write: false,
                        read: true,
                      },
                      native: {},
                    });
                    this.setState(vin + ".commands." + command.commandName + "." + key, command[key], true);
                    if (key === "isAvailable" && command[key] === true) {
                      await this.setObjectNotExistsAsync(vin + ".commands." + command.commandName + ".start", {
                        type: "state",
                        common: {
                          name: "Start the command",
                          role: "button",
                          type: "boolean",
                          write: true,
                          read: true,
                        },
                        native: {},
                      });
                      this.setState(vin + ".commands." + command.commandName + ".start", false, true);
                    }
                  }
                });
                resolve();
              });
            } catch (error) {
              this.log.warn("Commands not found ");
              this.log.error(error);
              reject();
            }
          }
        );
      });
    });
  }
  getGeoFence() {
    return new Promise((resolve, reject) => {
      const headers = this.baseHeader;
      headers.Authorization = this.atoken;
      this.vinArray.forEach((vin) => {
        request.get(
          {
            jar: this.jar,
            gzip: true,
            url: "https://bff-prod.risingstars.daimler.com/v1/geofencing/fences/?vin=" + vin,
            headers: headers,
            json: true,
          },
          (err, resp, body) => {
            if (err || resp.statusCode >= 400 || !body) {
              err && this.log.error(JSON.stringify(err));
              resp && this.log.error(resp.statusCode.toString());
              body && this.log.error(JSON.stringify(body));
              reject();
              return;
            }
            this.log.debug(JSON.stringify(body));
            try {
              this.setObjectNotExists(vin + ".geofencing", {
                type: "state",
                common: {
                  name: "GeoFencing of the new mercedesMe App",
                  role: "indicator",
                  type: "mixed",
                  write: false,
                  read: true,
                },
                native: {},
              });
              body.forEach(async (element) => {
                this.extractKeys(vin + ".geofencing." + element.name, element);
              });
              resolve();
            } catch (error) {
              this.log.warn("Geofence not found");
              this.log.error(error);
              reject();
            }
          }
        );
      });
    });
  }
  getUserInformation() {
    return new Promise((resolve, reject) => {
      const headers = this.baseHeader;
      headers.Authorization = this.atoken;
      this.vinArray.forEach((vin) => {
        request.get(
          {
            jar: this.jar,
            gzip: true,
            url: "https://bff-prod.risingstars.daimler.com/v1/user/self",
            headers: headers,
            json: true,
          },
          (err, resp, body) => {
            if (err || resp.statusCode >= 400 || !body) {
              err && this.log.error(JSON.stringify(err));
              resp && this.log.error(resp.statusCode.toString());
              body && this.log.error(JSON.stringify(body));
              reject();
              return;
            }
            this.log.debug(JSON.stringify(body));
            try {
              this.setObjectNotExists(vin + ".user", {
                type: "state",
                common: {
                  name: "User Information of the new mercedesMe App",
                  role: "indicator",
                  type: "mixed",
                  write: false,
                  read: true,
                },
                native: {},
              });
              this.extractKeys(vin + ".user", body);
              resolve();
            } catch (error) {
              this.log.warn("User Information not found");
              this.log.error(error);
              reject();
            }
          }
        );
      });
    });
  }
  extractKeys(path, element) {
    //v1.2
    try {
      if (element === null || element === undefined) {
        this.log.debug("Cannot extract: " + path);
        return;
      }
      const objectKeys = Object.keys(element);
      const write = false;
      if (Array.isArray(element)) {
        this.extractArray(element, "", path, write);
        return;
      }
      // if (path.endsWith("Settings")) {
      //     await this.setObjectNotExistsAsync(path, {
      //         type: "state",
      //         common: {
      //             name: "Einstellungen sind hier änderbar / You can change the settings here",
      //             role: "indicator",
      //             write: false,
      //             read: true,
      //         },
      //         native: {},
      //     });
      //     write = true;
      // }

      if (typeof element === "string") {
        this.setObjectNotExistsAsync(path, {
          type: "state",
          common: {
            name: element,
            role: "indicator",
            type: typeof element,
            write: write,
            read: true,
          },
          native: {},
        })
          .then(() => {
            this.setState(path, element, true);
          })
          .catch((error) => {
            this.log.error(error);
          });
        return;
      }
      objectKeys.forEach((key) => {
        if (this.isJsonString(element[key])) {
          element[key] = JSON.parse(element[key]);
        }

        if (Array.isArray(element[key])) {
          this.extractArray(element, key, path, write);
        } else if (element[key] !== null && typeof element[key] === "object") {
          this.extractKeys(path + "." + key, element[key]);
        } else {
          this.setObjectNotExistsAsync(path + "." + key, {
            type: "state",
            common: {
              name: key,
              role: "indicator",
              type: typeof element[key],
              write: write,
              read: true,
            },
            native: {},
          })
            .then(() => {
              this.setState(path + "." + key, element[key], true);
            })
            .catch((error) => {
              this.log.error(error);
            });
        }
      });
    } catch (error) {
      this.log.error("Error extract keys: " + path + " " + JSON.stringify(element));
      this.log.error(error);
    }
  }
  extractArray(element, key, path, write) {
    if (key) {
      element = element[key];
    }
    element.forEach((arrayElement, index) => {
      index = index + 1;
      if (index < 10) {
        index = "0" + index;
      }
      let arrayPath = key + index;

      if (typeof arrayElement !== "string" && typeof arrayElement[Object.keys(arrayElement)[0]] === "string") {
        arrayPath = arrayElement[Object.keys(arrayElement)[0]];
      }
      Object.keys(arrayElement).forEach((keyName) => {
        if (keyName.endsWith("Id")) {
          arrayPath = arrayElement[keyName];
        }
      });
      Object.keys(arrayElement).forEach((keyName) => {
        if (keyName.endsWith("Name")) {
          arrayPath = arrayElement[keyName];
        }
      });
      if (arrayElement.id) {
        arrayPath = arrayElement.id;
      }
      if (arrayElement.name) {
        arrayPath = arrayElement.name;
      }
      //special case array with 2 string objects
      if (
        Object.keys(arrayElement).length === 2 &&
        typeof Object.keys(arrayElement)[0] === "string" &&
        typeof Object.keys(arrayElement)[1] === "string"
      ) {
        let subKey = arrayElement[Object.keys(arrayElement)[0]];
        const subValue = arrayElement[Object.keys(arrayElement)[1]];
        const subName = Object.keys(arrayElement)[0] + " " + Object.keys(arrayElement)[1];
        if (key) {
          subKey = key + "." + subKey;
        }
        this.setObjectNotExistsAsync(path + "." + subKey, {
          type: "state",
          common: {
            name: subName,
            role: "indicator",
            type: typeof subValue,
            write: write,
            read: true,
          },
          native: {},
        })
          .then(() => {
            this.setState(path + "." + subKey, subValue, true);
          })
          .catch((error) => {
            this.log.error(error);
          });

        return;
      }
      this.extractKeys(path + "." + arrayPath, arrayElement);
    });
  }
  isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  refreshToken(reconnect) {
    return new Promise((resolve, reject) => {
      this.log.debug("refreshToken");

      const headers = this.baseHeader;
      request.post(
        {
          jar: this.jar,
          gzip: true,
          url: "https://id.mercedes-benz.com/as/token.oauth2",
          headers: headers,
          followAllRedirects: false,
          body: "grant_type=refresh_token&refresh_token=" + this.rtoken,
        },
        (err, resp, body) => {
          if (err || (resp && resp.statusCode >= 400) || !body) {
            err && this.log.error(err);
            if (resp && resp.statusCode >= 400 && resp.statusCode < 500) {
              resp && this.log.error(resp.statusCode.toString());
              body && this.log.error(JSON.stringify(body));
              this.log.error("RefreshToken: " + this.rtoken);
              reject();
              return;
            } else {
              resolve();
              return;
            }
          }
          try {
            const token = JSON.parse(body);

            this.log.debug(JSON.stringify(token));
            this.atoken = token.access_token;

            this.setState("auth.access_token", token.access_token, true);
            if (token.refresh_token) {
              this.rtoken = token.refresh_token;
              this.log.debug("setRefrehToken: " + token.refresh_token);
              this.setState("auth.refresh_token", token.refresh_token, true);
            }

            if (reconnect) {
              this.log.debug("Reconnect after refreshtoken");
              this.ws.close();
              setTimeout(() => {
                this.connectWS();
              }, 2000);
            }
            resolve();
          } catch (error) {
            this.log.error("Error refresh token");
            this.log.error(error);
            this.log.error("refresh result: " + body);
            this.atoken = "";
            this.rtoken = "";
            this.setState("auth.access_token", "", true);
            this.setState("auth.refresh_token", "", true);
            reject();
          }
        }
      );
    });
  }
  login() {
    return new Promise(async (resolve, reject) => {
      this.log.debug("Login");

      if (this.atoken) {
        await this.refreshToken()
          .then(() => {
            resolve();

            return;
          })
          .catch((error) => {
            if (error) {
              this.log.error("Connection error no login possible. Relogin in 5min");
              this.reLoginTimeout = setTimeout(() => {
                this.initLoading();
              }, 5 * 60 * 1000);
              reject();
            } else {
              reject();
              this.log.error("No Login possible. Deleting auth tokens. Please enter new email code.");
              this.atoken = "";
              this.rtoken = "";
              this.setState("auth.access_token", "", true);
              this.setState("auth.refresh_token", "", true);
            }
          });
      }

      const loginNonceState = await this.getStateAsync("auth.loginNonce");
      if (this.config.loginCode && !this.atoken && loginNonceState && loginNonceState.val) {
        const headers = this.baseHeader;
        await axios({
          method: "post",
          // jar: this.jar,
          // gzip: true,
          // followAllRedirects: true,
          url: "https://id.mercedes-benz.com/as/token.oauth2",
          headers: headers,
          data:
            "client_id=01398c1c-dc45-4b42-882b-9f5ba9f175f1&grant_type=password&password=" +
            loginNonceState.val +
            ":" +
            this.config.loginCode +
            "&scope=openid%20email%20phone%20profile%20offline_access%20ciam-uid&username=" +
            encodeURIComponent(this.config.mail),
        })
          .then((response) => {
            this.log.debug(JSON.stringify(response.status));
            this.log.debug(JSON.stringify(response.data));

            this.atoken = response.data.access_token;
            this.rtoken = response.data.refresh_token;
            this.setState("auth.access_token", response.data.access_token, true);
            this.setState("auth.refresh_token", response.data.refresh_token, true);
            this.setState("auth.loginNonce", "", true);
            resolve();

            return;
          })
          .catch((error) => {
            this.log.error("Wrong Sicherheitscode please enter the new code you received via mail");
            this.log.error(error);
            error.response && this.log.error(JSON.stringify(error.response.data));
            const adapterConfig = "system.adapter." + this.name + "." + this.instance;
            this.getForeignObject(adapterConfig, (error, obj) => {
              if (obj.native && obj.native.loginCode) {
                obj.native.loginCode = "";
                this.setForeignObject(adapterConfig, obj);
              }
            });
            return;
          });
      }
      if (!this.atoken) {
        const loginNonce = uuidv4();
        const headers = this.baseHeader;
        headers["X-Authmode"] = "KEYCLOAK";
        headers["Content-Type"] = "application/json";
        await this.setStateAsync("auth.loginNonce", loginNonce, true);
        axios({
          method: "post",
          // jar: this.jar,
          // gzip: true,
          url: "https://bff-prod.risingstars.daimler.com/v1/login",
          // followAllRedirects: true,
          headers: headers,
          data: JSON.stringify({
            nonce: loginNonce,
            locale: this.config.acceptLanguage,
            emailOrPhoneNumber: this.config.mail,
            countryCode: this.config.countryC,
          }),
        })
          .then((response) => {
            this.log.debug(JSON.stringify(response.status));
            this.log.debug(JSON.stringify(response.data));
            if (response.status === 200 && response.data.isEmail) {
              this.log.info("Please enter the code you received via mail in the instance settings");
            } else {
              this.log.error("Email not found");
            }
            reject();
          })
          .catch((error) => {
            this.log.error("Not able to request login code");
            this.log.error(error);
            error.response && this.log.error(JSON.stringify(error.response.data));
            reject();
          });
      }
    });
  }
  connectWS() {
    const headers = this.baseHeader;
    headers.Authorization = this.atoken;
    this.log.debug("Connect to WebSocket");
    try {
      clearInterval(this.reconnectInterval);
      this.reconnectInterval = setInterval(() => {
        this.log.info("Try to reconnect");
        this.connectWS();
      }, 5 * 60 * 1000); // 5min
      this.ws = new WebSocket("wss://websocket-prod.risingstars.daimler.com/ws", {
        headers: headers,
      });
    } catch (error) {
      this.log.error(error);
      this.log.error("No WebSocketConnection possible");
    }

    this.ws.on("open", () => {
      this.log.debug("WebSocket connected");
      this.setState("info.connection", true, true);
      clearInterval(this.reconnectInterval);
    });
    this.ws.on("error", (data) => {
      this.log.error("WS error:" + data);

      this.setState("info.connection", false, true);
      try {
        if (data.message.indexOf("403") !== -1) {
          this.refreshToken(true).catch(() => {
            this.log.error("Refresh Token Failed ");
          });
        }
      } catch (error) {
        this.log.error(error);
      }
    });
    this.ws.on("close", (data) => {
      this.log.debug(data);

      this.setState("info.connection", false, true);
      this.log.debug("Websocket closed");
    });
    this.ws.on("message", async (data, isBinary) => {
      data = isBinary ? data : data.toString();
      // const hexString = ""
      // let parsed = new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
      // const foo =Client.ClientMessage.deserializeBinary(parsed).toObject()
      this.log.silly("WS Message Length: " + data.length);
      if (this.wsHeartbeatTimeout) {
        clearTimeout(this.wsHeartbeatTimeout);
        clearInterval(this.reconnectInterval);
      }
      this.wsHeartbeatTimeout = setTimeout(() => {
        this.log.info("Lost WebSocket connection. Reconnect WebSocket");
        this.ws.close();
        setTimeout(() => {
          this.connectWS();
        }, 2000);
      }, 1 * 60 * 1000); //1min
      try {
        const message = VehicleEvents.PushMessage.deserializeBinary(data).toObject();
        if (message.debugmessage) {
          this.log.debug(JSON.stringify(message.debugmessage));
        }
        if (message.apptwinCommandStatusUpdatesByVin) {
          this.log.debug(JSON.stringify(message.apptwinCommandStatusUpdatesByVin));

          const ackCommand = new Client.AcknowledgeAppTwinCommandStatusUpdatesByVIN();
          ackCommand.setSequenceNumber(message.apptwinCommandStatusUpdatesByVin.sequenceNumber);
          const clientMessage = new Client.ClientMessage();
          clientMessage.setAcknowledgeApptwinCommandStatusUpdateByVin(ackCommand);
          this.ws.send(clientMessage.serializeBinary());
          try {
            if (message.apptwinCommandStatusUpdatesByVin.updatesByVinMap[0][1].updatesByPidMap[0][1].errorsList.length)
              this.log.error(JSON.stringify(message.apptwinCommandStatusUpdatesByVin.updatesByVinMap[0][1].updatesByPidMap[0][1].errorsList));
          } catch (error) {
            this.log.error(error);
          }
        }
        if (message.assignedVehicles) {
          this.log.debug(JSON.stringify(message.assignedVehicles));
          this.vinArray = message.assignedVehicles.vinsList;
          const ackCommand = new Client.AcknowledgeAssignedVehicles();
          const clientMessage = new Client.ClientMessage();
          clientMessage.setAcknowledgeAssignedVehicles(ackCommand);
          this.ws.send(clientMessage.serializeBinary());
        }
        if (message.apptwinPendingCommandRequest) {
          this.log.silly("apptwinPendingCommandRequest: " + JSON.stringify(message.apptwinPendingCommandRequest));
        }
        if (message.vepupdates) {
          this.log.silly(JSON.stringify(message.vepupdates));
          this.log.debug("Received State Updated");
          this.currentSequenceNumber = message.vepupdates.sequenceNumber;
          const ackCommand = new Client.AcknowledgeVEPUpdatesByVIN();
          ackCommand.setSequenceNumber(message.vepupdates.sequenceNumber);
          const clientMessage = new Client.ClientMessage();
          clientMessage.setAcknowledgeVepUpdatesByVin(ackCommand);
          this.ws.send(clientMessage.serializeBinary());
          message.vepupdates.updatesMap.forEach(async (update) => {
            const vin = update[0];
            await this.setObjectNotExistsAsync(vin + ".state", {
              type: "state",
              common: {
                name: "State of the new mercedesMe App",
                role: "indicator",
                type: "mixed",
                write: false,
                read: true,
              },
              native: {},
            });
            this.log.debug("update for " + vin + ": " + message.vepupdates.sequenceNumber);
            const adapter = this;
            update[1].attributesMap.forEach(async (element) => {
              await adapter.setObjectNotExistsAsync(vin + ".state." + element[0], {
                type: "state",
                common: {
                  name: element[0],
                  role: "indicator",
                  type: "mixed",
                  write: false,
                  read: true,
                },
                native: {},
              });
              Object.keys(element[1]).forEach(async (state) => {
                if (
                  state === "displayValue" ||
                  state === "status" ||
                  state === "changed" ||
                  state === "boolValue" ||
                  state === "doubleValue" ||
                  state === "intValue" ||
                  state === "nilValue" ||
                  state === "stringValue" ||
                  state === "unsupportedValue" ||
                  element[1][state]
                ) {
                  await adapter.setObjectNotExistsAsync(vin + ".state." + element[0] + "." + state, {
                    type: "state",
                    common: {
                      name: state,
                      role: "indicator",
                      type: typeof element[1][state],
                      write: false,
                      read: true,
                    },
                    native: {},
                  });
                  let value = element[1][state];
                  if (typeof value === "object") {
                    value = JSON.stringify(value);
                  }
                  adapter.setState(vin + ".state." + element[0] + "." + state, value, true);
                }
              });
            });
          });
        }
      } catch (error) {
        this.log.error("Websocket parse error");
        this.log.error(error);
        // this.log.error(data);
        this.ws.close();
        setTimeout(() => {
          this.connectWS();
        }, 5000);
      }
    });
  }
}

if (module.parent) {
  // Export the constructor in compact mode
  /**
   * @param {Partial<utils.AdapterOptions>} [options={}]
   */
  module.exports = (options) => new Mercedesme(options);
} else {
  // otherwise start the instance directly
  new Mercedesme();
}

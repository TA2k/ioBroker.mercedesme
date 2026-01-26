// @ts-nocheck

"use strict";
/*
 * Created with @iobroker/create-adapter v1.12.1
 */

const utils = require("@iobroker/adapter-core");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios").default;
const WebSocket = require("ws");
const Json2iob = require("json2iob");
const qs = require("qs");
const { CookieJar } = require("tough-cookie");
const { HttpsCookieAgent } = require("http-cookie-agent/http");
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

    this.vinArray = [];
    this.refreshTokenInterval = null;
    this.retryTimeout = null;
    this.tenant = "";
    this.statusEtag = "";
    this.locationEtag = "";
    this.ws = null;
    this.wsHeartbeatTimeout = null;
    this.wsPingInterval = null;
    this.wsReconnectCounter = 0;

    this.reconnectInterval = null;
    this.lastHardRelogin = 0;
    this.xSession = uuidv4();
    this.xTracking = uuidv4();
    this.deviceuuid = uuidv4();
    this.Json2iob = new Json2iob(this);
    this.vinStates = {};
    const jar = new CookieJar();

    this.requestClient = axios.create({
      httpsAgent: new HttpsCookieAgent({ cookies: { jar } }),
    });
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
          if (
            keyName.split(".")[3] === "status" ||
            keyName.split(".")[3] === "location" ||
            keyName.split(".")[3] === "lastJourney"
          ) {
            this.delObject(keyName.split(".").slice(2).join("."));
          }
        });
      }
    });
    if (!this.config.mail || !this.config.password) {
      this.log.error("No credentials found please enter your credentials in the instance settings");
      return;
    }
    this.config.acceptLanguage = this.config.acceptLanguage ? this.config.acceptLanguage : "de-DE";
    this.baseHeader = {
      "ris-os-version": "14",
      "X-TrackingId": this.xTracking,
      "ris-os-name": "android",
      "X-SessionId": this.xSession,
      Accept: "*/*",
      "X-ApplicationName": "mycar-store-ece",
      "Accept-Language": "de-DE;q=1.0",
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      "X-Request-Id": this.xTracking,
      "ris-sdk-version": "3.26.1",
      "User-Agent": "mycar-store-ece v1.63.1, android 14, SDK 3.26.1",
      "ris-application-version": "1.63.1",
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
    this.scheduleDailyTask();
    this.subscribeStates("*.remote.*");
    this.subscribeStates("*.commands.*");
    this.subscribeStates("*.state.tanklevelpercent.intValue");
    this.subscribeStates("*.state.soc.intValue");
    this.subscribeStates("*.state.doorLockStatusOverall.intValue");
    this.subscribeStates("*.state.windowStatusOverall.intValue");
    this.subscribeStates("*.state.precondActive.boolValue");
    this.subscribeStates("*.state.precondNow.boolValue");
    this.subscribeStates("*.state.auxheatActive.boolValue");
  }

  async initLoading() {
    await this.setObjectNotExistsAsync("auth", {
      type: "state",
      common: {
        name: "Auth Information for login",
        write: true,
        role: "channel",
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
        role: "text",
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
        role: "text",
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
        role: "text",
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

    await this.loginNew()
      .then(async () => {
        this.log.debug("Login successful");
        this.setState("info.connection", true, true);
        this.log.debug("start refresh interval");
        const expiresin = this.session.expires_in - 100 || 14399 - 100;
        this.refreshTokenInterval = setInterval(() => {
          this.log.debug("Refresh Token");
          this.refreshToken(true).catch(() => {
            this.log.error("Refresh Token Failed do a relogin");
            this.initLoading().catch(() => {
              this.log.error("Relogin failed");
            });
          });
        }, expiresin * 1000);
        await this.getVehicles()
          .then(() => {
            this.getCommands().catch(() => {
              this.log.error("Error getting Commands");
            });
            this.getGeoFence().catch(() => {
              this.log.info("Error getting GeoFence. Maybe Service is not activated");
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

  scheduleDailyTask() {
    const now = new Date();
    // Create a date for today at 00:01
    const nextRun = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 1, 0);

    // If 00:01 has already passed today, set it for tomorrow.
    if (now > nextRun) {
      nextRun.setDate(nextRun.getDate() + 1);
    }

    // Calculate the delay in milliseconds until nextRun
    const delay = nextRun - now;

    setTimeout(() => {
      // Run your task
      this.wsReconnectCounter = 0;
      // After running the task, schedule it for the next day.
      this.scheduleDailyTask();
    }, delay);
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
      this.log.error("Error onUnload: " + e);
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
                  vc.setDepartureTime(0);
                }
              }
            }
            if (commandId.includes("battery_max_soc_configure")) {
              vc.setBatteryMaxSoc(state.val);
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
                const startDateValueDate = new Date(
                  startDateArray[1] + "-" + startDateArray[0] + "-" + startDateArray[2],
                );
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
                const currenJsonHistoryState = (await this.getStateAsync(vin + ".history." + jsonString)) || {
                  val: {},
                };

                let currenJsonHistory = [];
                if (currenJsonHistory) {
                  try {
                    currenJsonHistory = JSON.parse(currenJsonHistoryState.val);
                  } catch (error) {
                    this.log.debug("Error parsing json " + error);
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
    // eslint-disable-next-line
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
          this.config.apiKey,
      );
      await this.requestClient({
        method: "get",
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
      })
        .then((response) => {
          const body = response.data;
          this.log.debug(body);
          if (body.status === "error") {
            resolve(0);
          } else {
            this.log.debug(body.stations[0].price);
            resolve(body.stations[0].price);
          }
        })
        .catch((error) => {
          this.log.error(error);
          resolve(0);
        });
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
      if (
        element.toLowerCase().indexOf("level") !== -1 ||
        element.toLowerCase().indexOf("percent") !== -1 ||
        element === "soc"
      ) {
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
      url: "https://bff.emea-prod.mobilesdk.mercedes-benz.com/v2/vehicles?locale=" + this.config.acceptLanguage,
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
                type: "channel",
                common: {
                  name: "Masterdata of the new mercedesMe App",
                },
                native: {},
              });
              await this.extendObjectAsync(fin + ".state", {
                type: "channel",
                common: {
                  name: "State of the new mercedesMe App",
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
        this.log.error("Failed to get vehicles");
        this.log.error(error);
        error.response && this.log.error(JSON.stringify(error.response.data));
      });
    this.vinArray = [...new Set(this.vinArray)];
    this.vinArray.forEach(async (element) => {
      await this.setObjectNotExistsAsync(element + ".history", {
        type: "channel",
        common: {
          name: "Fuel/Energy Tank/Lade History",
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
        type: "channel",
        common: {
          name: "Remote controls",
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
        this.log.debug(
          "https://bff.emea-prod.mobilesdk.mercedes-benz.com/v1/vehicle/" + vin + "/capabilities/commands",
        );
        axios({
          method: "get",
          url: "https://bff.emea-prod.mobilesdk.mercedes-benz.com/v1/vehicle/" + vin + "/capabilities/commands",
          headers: headers,
          jar: this.jar,
          gzip: true,
        })
          .then((response) => {
            const body = response.data;
            this.log.debug(JSON.stringify(body));
            try {
              this.setObjectNotExists(vin + ".commands", {
                type: "channel",
                common: {
                  name: "Commands of the new mercedesMe App",
                },
                native: {},
              });
              body.commands.forEach(async (command) => {
                await this.setObjectNotExistsAsync(vin + ".commands." + command.commandName, {
                  type: "channel",
                  common: {
                    name: command.commandName,
                    write: false,
                    read: true,
                  },
                  native: {},
                });
                Object.keys(command).forEach(async (key) => {
                  if (key === "parameters") {
                    await this.setObjectNotExistsAsync(vin + ".commands." + command.commandName + ".parameters", {
                      type: "channel",
                      common: {
                        name: command.commandName + " parameters",
                        write: false,
                        read: true,
                      },
                      native: {},
                    });
                    command["parameters"] &&
                      command["parameters"].forEach(async (parameter) => {
                        Object.keys(parameter).forEach(async (pKey) => {
                          await this.extendObjectAsync(
                            vin +
                              ".commands." +
                              command.commandName +
                              ".parameters." +
                              parameter.parameterName +
                              "." +
                              pKey,
                            {
                              type: "state",
                              common: {
                                name: pKey,
                                role: this.getRole(pKey),
                                type: "mixed",
                                write: false,
                                read: true,
                              },
                              native: {},
                            },
                          );
                          this.setState(
                            vin +
                              ".commands." +
                              command.commandName +
                              ".parameters." +
                              parameter.parameterName +
                              "." +
                              pKey,
                            JSON.stringify(parameter[pKey]),
                            true,
                          );
                        });
                      });
                  } else {
                    await this.extendObjectAsync(vin + ".commands." + command.commandName + "." + key, {
                      type: "state",
                      common: {
                        name: key,
                        role: this.getRole(key),
                        type: "mixed",
                        write: false,
                        read: true,
                      },
                      native: {},
                    });
                    if (typeof command[key] === "object") {
                      this.setState(
                        vin + ".commands." + command.commandName + "." + key,
                        JSON.stringify(command[key]),
                        true,
                      );
                    } else {
                      this.setState(vin + ".commands." + command.commandName + "." + key, command[key], true);
                    }
                    if (key === "isAvailable" && command[key] === true) {
                      let type = "boolean";
                      let role = "button";
                      let def = false;
                      if (command.commandName === "BATTERY_MAX_SOC_CONFIGURE") {
                        type = "number";
                        role = "level.battery";
                        def = 100;
                      }
                      await this.extendObjectAsync(vin + ".commands." + command.commandName + ".start", {
                        type: "state",
                        common: {
                          name: "Start the command",
                          role: role,
                          type: type,
                          write: true,
                          read: true,
                          def: def,
                        },
                        native: {},
                      });
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
          })
          .catch((error) => {
            this.log.error("Getting commands for " + vin + " failed");
            this.log.error(error);
            error.response && this.log.error(JSON.stringify(error.response.data));
            reject();
          });
      });
    });
  }
  getGeoFence() {
    return new Promise((resolve, reject) => {
      const headers = this.baseHeader;
      headers.Authorization = this.atoken;
      this.vinArray.forEach((vin) => {
        axios({
          method: "get",
          url: "https://bff.emea-prod.mobilesdk.mercedes-benz.com/v1/geofencing/fences/?vin=" + vin,
          headers: headers,
          jar: this.jar,
          gzip: true,
        })
          .then((response) => {
            const body = response.data;
            this.log.debug(JSON.stringify(body));
            try {
              this.setObjectNotExists(vin + ".geofencing", {
                type: "channel",
                common: {
                  name: "GeoFencing of the new mercedesMe App",
                },
                native: {},
              });

              this.Json2iob.parse(vin + ".geofencing", body);

              resolve();
            } catch (error) {
              this.log.info("Geofence not found");
              this.log.debug(error);
              reject();
            }
          })
          .catch((error) => {
            this.log.debug(error);
            error.response && this.log.debug(JSON.stringify(error.response.data));
            reject();
          });
      });
    });
  }
  getUserInformation() {
    return new Promise((resolve, reject) => {
      const headers = this.baseHeader;
      headers.Authorization = this.atoken;
      this.vinArray.forEach((vin) => {
        axios({
          method: "get",
          url: "https://bff.emea-prod.mobilesdk.mercedes-benz.com/v1/user",
          headers: headers,
          jar: this.jar,
          gzip: true,
        })
          .then((response) => {
            const body = response.data;
            this.log.debug(JSON.stringify(body));
            try {
              this.setObjectNotExists(vin + ".user", {
                type: "channel",
                common: {
                  name: "User Information of the new mercedesMe App",
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
          })
          .catch((error) => {
            this.log.error(error);
            error.response && this.log.error(JSON.stringify(error.response.data));
            reject();
          });
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
            role: this.getRole(element, write),
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
              role: this.getRole(element[key], write),
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
            role: this.getRole(subValue, write),
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
      // eslint-disable-next-line
    } catch (e) {
      return false;
    }
    return true;
  }
  getRole(element, write) {
    if (typeof element === "boolean" && !write) {
      return "indicator";
    }
    if (typeof element === "boolean" && write) {
      return "switch";
    }
    if (typeof element === "number" && !write) {
      if (element && element.toString().length === 13) {
        if (element > 1500000000000 && element < 2000000000000) {
          return "value.time";
        }
      } else if (element && element.toFixed().toString().length === 10) {
        if (element > 1500000000 && element < 2000000000) {
          return "value.time";
        }
      }
      return "value";
    }
    if (typeof element === "number" && write) {
      return "level";
    }
    if (typeof element === "string") {
      return "text";
    }
    return "state";
  }
  async refreshToken(reconnect) {
    this.log.debug("refreshToken");

    // Check if 6 hours (21600000 ms) have passed since last hard relogin
    const now = Date.now();
    const sixHours = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

    if (now - this.lastHardRelogin >= sixHours) {
      this.log.debug("6 hours passed, doing hard relogin");
      this.lastHardRelogin = now;
      await this.loginNew();
      if (reconnect) {
        this.log.info("Reconnect after refresh token. Count: " + this.wsReconnectCounter);
        this.ws.close();
        setTimeout(() => {
          this.connectWS();
        }, 2000);
        return;
      }
    } else {
      this.log.debug("Less than 6 hours since last hard relogin, using refresh token");
    }

    const headers = this.baseHeader;
    await this.requestClient({
      method: "post",
      url: "https://id.mercedes-benz.com/as/token.oauth2",
      headers: headers,
      data: qs.stringify({
        grant_type: "refresh_token",
        refresh_token: this.rtoken,
      }),
    })
      .then((response) => {
        const token = response.data;
        this.session = token;
        this.log.debug(JSON.stringify(token));
        this.atoken = token.access_token;
        this.setState("auth.access_token", token.access_token, true);
        if (token.refresh_token) {
          this.rtoken = token.refresh_token;
          this.log.debug("setRefreshToken: " + token.refresh_token);
          this.setState("auth.refresh_token", token.refresh_token, true);
        }
        if (reconnect) {
          this.log.info("Reconnect after refresh token. Count: " + this.wsReconnectCounter);
          this.ws.close();
          setTimeout(() => {
            this.connectWS();
          }, 2000);
        }
      })
      .catch((error) => {
        this.log.error("Error refresh token");
        this.log.error(error);
        this.log.error("Please delete object folder mercedesme.0.auth and restart adapter");
        if (error.response) {
          this.log.error(JSON.stringify(error.response.data));
          if (error.response.status >= 400 && error.response.status < 500) {
            this.log.error("RefreshToken: " + this.rtoken);

            return;
          }
        }
        throw error;
      });
  }
  async loginNew() {
    this.log.debug("Login");

    // if (this.atoken) {
    //eslint-disable-next-line
    if (false) {
      this.log.info("Found old session. Try to refresh token");
      await this.refreshToken()
        .then(() => {
          this.log.info("Refresh token successfull");
          return;
        })
        .catch((error) => {
          if (error) {
            this.log.error("Connection error no login possible. Relogin in 5min");
            this.reLoginTimeout = setTimeout(() => {
              this.log.info("Start initial loading");
              this.initLoading();
            }, 5 * 60 * 1000);
          } else {
            this.log.error("No Login possible. Deleting auth tokens. Please enter new email code.");
            this.atoken = "";
            this.rtoken = "";
            this.setState("auth.access_token", "", true);
            this.setState("auth.refresh_token", "", true);
          }
        });
      return;
    }
    this.log.info("Start Login");
    const resumeUrl = await this.requestClient({
      method: "get",
      maxBodyLength: Infinity,
      url: "https://id.mercedes-benz.com/as/authorization.oauth2",
      params: {
        client_id: "62778dc4-1de3-44f4-af95-115f06a3a008",
        code_challenge: "ofGuD7msh1a63x2zoM2ZjbaRldc6LoPme4nCEeZP5RI",
        code_challenge_method: "S256",
        redirect_uri: "rismycar://login-callback",
        response_type: "code",
        scope: "email profile ciam-uid phone openid offline_access",
      },
      headers: {
        "user-agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.6 Mobile/15E148 Safari/604.1",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-language": "de-DE,de;q=0.9",
      },
    })
      .then((response) => {
        this.log.debug(JSON.stringify(response.data));
        //extract paramter resume from url
        const url = response.request.res.responseUrl;
        const parameters = qs.parse(url.split("?")[1]);
        return parameters.resume;
      })
      .catch(async (error) => {
        let code = "";
        if (error.message && error.message.includes("Unsupported protocol")) {
          if (error.config) {
            this.log.debug(JSON.stringify(error.config.url));
            const parameters = qs.parse(error.request._options.path.split("?")[1]);
            this.log.debug(JSON.stringify(parameters));
            code = parameters.code;
          }
          await this.requestClient({
            method: "post",
            maxBodyLength: Infinity,
            url: "https://id.mercedes-benz.com/as/token.oauth2",
            headers: this.baseHeader,
            data: {
              client_id: "62778dc4-1de3-44f4-af95-115f06a3a008",
              code: code,
              code_verifier: "Vg4OnWSQLDHLnDMmAKdURg0Ey_sSPsNRrx75B_losEg",
              grant_type: "authorization_code",
              redirect_uri: "rismycar://login-callback",
            },
          })
            .then((response) => {
              this.log.debug(JSON.stringify(response.status));
              this.log.debug(JSON.stringify(response.data));
              this.session = response.data;
              this.atoken = response.data.access_token;
              this.rtoken = response.data.refresh_token;
              this.lastHardRelogin = Date.now();
              this.setState("auth.access_token", response.data.access_token, true);
              this.setState("auth.refresh_token", response.data.refresh_token, true);
              this.setState("auth.loginNonce", "", true);
            })
            .catch((error) => {
              this.log.error("Token fetching error");
              this.log.error(error);
              error.response && this.log.error(JSON.stringify(error.response.data));
            });
          return "success";
        }
        this.log.error("Not able to get login page");
        this.log.error(error);
      });
    if (resumeUrl === "success") {
      this.log.debug("Login Refresh successful");
      return;
    }
    await this.requestClient({
      method: "post",
      maxBodyLength: Infinity,
      url: "https://id.mercedes-benz.com/ciam/auth/ua",
      headers: {
        accept: "*/*",
        "content-type": "application/json",
        origin: "https://id.mercedes-benz.com",
        "accept-language": "de-DE,de;q=0.9",
        "user-agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.6 Mobile/15E148 Safari/604.1",
      },
      data: {
        browserName: "Mobile Safari",
        browserVersion: "15.6.6",
        osName: "iOS",
      },
    }).catch((error) => {
      this.log.error("Not able to get ua page");
      this.log.error(error);
    });
    await this.requestClient({
      method: "post",
      maxBodyLength: Infinity,
      url: "https://id.mercedes-benz.com/ciam/auth/login/user",
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        origin: "https://id.mercedes-benz.com",
        "accept-language": "de-DE,de;q=0.9",
        "user-agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.6 Mobile/15E148 Safari/604.1",
        referer: "https://id.mercedes-benz.com/ciam/auth/login",
      },
      data: {
        username: this.config.mail,
      },
    })
      .then((response) => {
        this.log.debug(JSON.stringify(response.data));
      })
      .catch((error) => {
        this.log.error("Not able to get userlogin page");
        this.log.error(error);
      });
    //generate random 32 char string
    const rid = this.generateRandomString(32);
    let preLoginData = await this.requestClient({
      method: "post",
      maxBodyLength: Infinity,
      url: "https://id.mercedes-benz.com/ciam/auth/login/pass",
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        origin: "https://id.mercedes-benz.com",
        "accept-language": "de-DE,de;q=0.9",
        "user-agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.6 Mobile/15E148 Safari/604.1",
        referer: "https://id.mercedes-benz.com/ciam/auth/login",
      },
      data: {
        username: this.config.mail,
        password: this.config.password,
        rememberMe: false,
        rid: rid,
      },
    })
      .then((response) => {
        this.log.debug(JSON.stringify(response.data));
        return response.data;
      })
      .catch((error) => {
        this.log.error("Not able to get user password page");
        this.log.error(error);
        error.response && this.log.error(JSON.stringify(error.response.data));
      });

    // Check if legal terms acceptance is required
    if (preLoginData && preLoginData.result === "GOTO_LOGIN_LEGAL_TEXTS") {
      this.log.info("Legal terms acceptance required");
      const homeCountry = preLoginData.homeCountry || "";
      const consentCountry = preLoginData.consentCountry || "";
      preLoginData = await this.submitLegalConsent(homeCountry, consentCountry);
      if (preLoginData.result !== "RESUME2OIDCP") {
        this.log.error("Problem accepting legal terms during login: " + JSON.stringify(preLoginData));
        throw new Error("Legal terms acceptance failed");
      }
    }

    const code = await this.requestClient({
      method: "post",
      maxBodyLength: Infinity,
      url: "https://id.mercedes-benz.com" + resumeUrl,
      headers: {
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "content-type": "application/x-www-form-urlencoded",
        origin: "https://id.mercedes-benz.com",

        "accept-language": "de-DE,de;q=0.9",
        "user-agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.6 Mobile/15E148 Safari/604.1",
        referer: "https://id.mercedes-benz.com/ciam/auth/login",
      },
      data: { token: preLoginData.token },
    })
      .then((response) => {
        this.log.error(JSON.stringify(response.data));
      })
      .catch((error) => {
        const code = "";
        if (error.message && error.message.includes("Unsupported protocol")) {
          if (error.config) {
            this.log.debug(JSON.stringify(error.config.url));
            const parameters = qs.parse(error.request._options.path.split("?")[1]);
            this.log.debug(JSON.stringify(parameters));
            return parameters.code;
          }
          return code;
        }
        this.log.error(error);
        error.response && this.log.error(JSON.stringify(error.response.data));
      });
    await this.requestClient({
      method: "post",
      maxBodyLength: Infinity,
      url: "https://id.mercedes-benz.com/as/token.oauth2",
      // headers: {
      //   "device-uuid": this.deviceuuid,
      //   "x-sessionid": "56A39234",
      //   "user-agent": "MyCar/1.51.0 (com.daimler.ris.mercedesme.ece.ios; build:2578; iOS 15.8.3) Alamofire/5.9.1",
      //   "ris-os-version": "15.8.3",
      //   "ris-application-version": "1.51.0 (2578)",
      //   "x-device-id": "18E6FF44",
      //   "x-trackingid": "4D4831F3",
      //   stage: "prod",
      //   "ris-sdk-version": "2.132.2",
      //   "x-applicationname": "mycar-store-ece",
      //   "ris-os-name": "ios",
      //   "x-locale": "de-DE",
      //   "accept-language": "de-DE;q=1.0",
      //   "x-request-id": "4D4831F3",
      //   accept: "*/*",
      //   "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      // },
      headers: this.baseHeader,

      data: {
        client_id: "62778dc4-1de3-44f4-af95-115f06a3a008",
        code: code,
        code_verifier: "Vg4OnWSQLDHLnDMmAKdURg0Ey_sSPsNRrx75B_losEg",
        grant_type: "authorization_code",
        redirect_uri: "rismycar://login-callback",
      },
    })
      .then((response) => {
        this.log.debug(JSON.stringify(response.status));
        this.log.debug(JSON.stringify(response.data));
        this.session = response.data;
        this.atoken = response.data.access_token;
        this.rtoken = response.data.refresh_token;
        this.lastHardRelogin = Date.now();
        this.setState("auth.access_token", response.data.access_token, true);
        this.setState("auth.refresh_token", response.data.refresh_token, true);
        this.setState("auth.loginNonce", "", true);

        return;
      })
      .catch((error) => {
        this.log.error("Token fetching error");
        this.log.error(error);
        error.response && this.log.error(JSON.stringify(error.response.data));
      });
  }

  async submitLegalConsent(homeCountry, consentCountry) {
    this.log.debug("Submitting legal consent");

    // Generate random request ID (32 hex chars)
    const rid = this.generateRandomString(32);

    const response = await this.requestClient({
      method: "post",
      maxBodyLength: Infinity,
      url: "https://id.mercedes-benz.com/ciam/auth/toas/saveLoginConsent",
      headers: {
        accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        origin: "https://id.mercedes-benz.com",
        "accept-language": "de-DE,de;q=0.9",
        "user-agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.6 Mobile/15E148 Safari/604.1",
        referer: "https://id.mercedes-benz.com/ciam/auth/login",
      },
      data: {
        texts: {},
        homeCountry: homeCountry,
        consentCountry: consentCountry,
        rid: rid,
      },
    })
      .then((response) => {
        this.log.debug("Legal consent response: " + JSON.stringify(response.data));
        return response.data;
      })
      .catch((error) => {
        this.log.error("Legal consent submission failed");
        this.log.error(error);
        error.response && this.log.error(JSON.stringify(error.response.data));
        throw error;
      });

    return response;
  }

  generateRandomString(length) {
    let result = "";
    const characters = "abcdef0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  login() {
    // eslint-disable-next-line
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
                this.log.info("Start initial loading");
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
            this.lastHardRelogin = Date.now();
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
        //deep copy
        const headers = JSON.parse(JSON.stringify(this.baseHeader));
        //config fetch needed to get the login code
        await axios({
          method: "get",
          url: "https://bff.emea-prod.mobilesdk.mercedes-benz.com/v1/config",
          headers: headers,
        })
          .then((response) => {
            this.log.debug(JSON.stringify(response.data));
          })
          .catch((error) => {
            this.log.error("Not able to get config");
            this.log.error(error);
            error.response && this.log.error(JSON.stringify(error.response.data));
          });
        const loginNonce = uuidv4();
        headers["X-Authmode"] = "KEYCLOAK";
        headers["Content-Type"] = "application/json";
        await this.setStateAsync("auth.loginNonce", loginNonce, true);
        await axios({
          method: "post",
          // jar: this.jar,
          // gzip: true,
          url: "https://bff.emea-prod.mobilesdk.mercedes-benz.com/v1/login",
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
    this.wsReconnectCounter++;
    const headers = this.baseHeader;
    headers.Authorization = this.atoken;
    this.log.debug("Connect to WebSocket");
    try {
      clearInterval(this.wsPingInterval);
      this.wsPingInterval = setInterval(() => {
        try {
          this.log.debug("Ping");
          this.ws.ping();
        } catch (error) {
          this.log.error(error);
          this.log.error("Ping failed");
        }
      }, 30 * 1000); //30s
      clearInterval(this.reconnectInterval);
      this.reconnectInterval = setInterval(() => {
        this.log.info("Try to reconnect");
        this.connectWS();
      }, 5 * 60 * 1000); // 5min

      this.ws = new WebSocket("wss://websocket.emea-prod.mobilesdk.mercedes-benz.com/v2/ws", {
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
      this.setState("info.connection", false, true);
      try {
        if (data.message.indexOf("428") !== -1) {
          this.log.warn("Too many requests. Your IP is maybe blocked");
        } else if (data.message.indexOf("429") !== -1) {
          this.log.info(
            "429 Too many requests. The account is blocked until 0:00. Reconnects Today: " + this.wsReconnectCounter,
          );
        } else if (data.message.indexOf("403") !== -1) {
          this.refreshToken(true).catch(() => {
            this.log.error("Refresh Token Failed ");
          });
        } else {
          this.log.error("WS error:" + data);
        }
      } catch (error) {
        this.log.error(error);
      }
    });
    this.ws.on("pong", () => {
      this.log.debug("Pong");
      if (this.wsHeartbeatTimeout) {
        clearTimeout(this.wsHeartbeatTimeout);
      }
      this.wsHeartbeatTimeout = setTimeout(() => {
        this.log.info(
          "No Data since " +
            this.config.reconnectDelay +
            " seconds. Lost WebSocket connection. Reconnect WebSocket. Reconnects Today: " +
            this.wsReconnectCounter,
        );
        this.ws.close();
        setTimeout(() => {
          this.connectWS();
        }, 2000);
      }, this.config.reconnectDelay * 1000);
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
      this.ws.ping();
      if (this.reconnectInterval) {
        clearInterval(this.reconnectInterval);
      }

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
              this.log.error(
                JSON.stringify(
                  message.apptwinCommandStatusUpdatesByVin.updatesByVinMap[0][1].updatesByPidMap[0][1].errorsList,
                ),
              );
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

          for (const update of message.vepupdates.updatesMap) {
            const vin = update[0];

            this.log.debug("update for " + vin + ": " + message.vepupdates.sequenceNumber);
            const adapter = this;

            for (const element of update[1].attributesMap) {
              if (!this.vinStates[vin] || !this.vinStates[vin].includes(element[0])) {
                await adapter.extendObjectAsync(vin + ".state." + element[0], {
                  type: "channel",
                  common: {
                    name: element[0],
                    write: false,
                    read: true,
                  },
                  native: {},
                });
                if (this.vinStates[vin]) {
                  this.vinStates[vin].push(element[0]);
                } else {
                  this.vinStates[vin] = [element[0]];
                }
              }
              this.log.debug("write " + Object.keys(element[1]).length + " states to " + element[0]);
              for (const state of Object.keys(element[1])) {
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
                  if (!this.vinStates[vin] || !this.vinStates[vin].includes(element[0] + state)) {
                    await adapter.extendObjectAsync(vin + ".state." + element[0] + "." + state, {
                      type: "state",
                      common: {
                        name: state,
                        role: this.getRole(element[1][state], false),
                        type: typeof element[1][state],
                        write: false,
                        read: true,
                      },
                      native: {},
                    });
                    if (this.vinStates[vin]) {
                      this.vinStates[vin].push(element[0] + state);
                    } else {
                      this.vinStates[vin] = [element[0] + state];
                    }
                  }
                  let value = element[1][state];
                  if (typeof value === "object") {
                    value = JSON.stringify(value);
                  }

                  await adapter.setStateAsync(vin + ".state." + element[0] + "." + state, value, true);
                }
              }
              this.log.debug("write done");
            }
          }
        }
      } catch (error) {
        this.log.error("Websocket parse error");
        this.log.error(error);
        // this.log.error(data);
        this.log.info("Reconnect WebSocket");
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

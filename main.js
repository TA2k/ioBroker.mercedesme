/* eslint-disable quotes */
"use strict";
/*
 * Created with @iobroker/create-adapter v1.12.1
 */

const utils = require("@iobroker/adapter-core");
const request = require("request");
const jsdom = require("jsdom");
const traverse = require("traverse");
const uuidv4 = require("uuid/v4");
const axios = require("axios").default;
const WebSocket = require("ws");

// const Eventpush = require("./Proto/eventpush_pb");
// const UserEvents = require("./Proto/user-events_pb");
// const VehicleCommands = require("./Proto/vehicle-commands_pb");
const VehicleEvents = require("./Proto/vehicle-events_pb");
const Client = require("./Proto/client_pb");
const { JSDOM } = jsdom;
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
        this.interval = null;
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
        this.baseHeader = {
            "RIS-OS-Version": "14.2",
            "X-TrackingId": this.xTracking,
            "RIS-OS-Name": "ios",
            "X-SessionId": this.xSession,
            Accept: "*/*",
            "X-ApplicationName": "mycar-store-ece",
            "Accept-Language": "de-de",
            "X-AuthMode": "KEYCLOAK",
            "Content-Type": "application/json",
            "RIS-SDK-Version": "2.24.0",
            "User-Agent": "MyCar/855 CFNetwork/1206 Darwin/20.1.0",
            "ris-application-version": "1.5.1 (855)",
            "X-Locale": "de-DE",
        };
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    async onReady() {
        // Initialize your adapter here
        //Delete old states
        const pre = this.name + "." + this.instance;
        this.getStates(pre + ".*", (err, states) => {
            const allIds = Object.keys(states);
            allIds.forEach((keyName) => {
                if (keyName.split(".")[3] === "status" || keyName.split(".")[3] === "location") {
                    this.delObject(keyName.split(".").slice(2).join("."));
                }
            });
        });

        if (this.config.resetAccess) {
            this.log.info("Reset access");
            this.atoken = "";
            this.rtoken = "";
            this.setState("auth.access_token", "", true);
            this.setState("auth.refresh_token", "", true);
            const adapterConfig = "system.adapter." + pre;
            this.getForeignObject(adapterConfig, (error, obj) => {
                obj.native.resetAccess = false;
                this.setForeignObject(adapterConfig, obj);
            });
            return;
        }

        this.login()
            .then(() => {
                this.log.debug("Login successful");
                this.setState("info.connection", true, true);

                this.getVehicles()
                    .then(() => {
                        this.getCommands();

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

        this.subscribeStates("*");
    }

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     * @param {() => void} callback
     */
    onUnload(callback) {
        try {
            clearInterval(this.interval);
            clearInterval(this.refreshTokenInterval);
            clearInterval(this.reconnectInterval);
            clearTimeout(this.retryTimeout);
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
                if (id.indexOf("remote") !== -1) {
                    let url = "https://vhs.meapp.secure.mercedes-benz.com/api/v1/vehicles/" + vin;
                    const headers = {
                        "Accept-Language": this.config.acceptL,
                        Authorization: "Bearer " + this.atoken,
                        country_code: this.config.countryC,
                        "Content-Type": "application/json;charset=UTF-8",
                        "Accept-Encoding": "br, gzip, deflate",
                        "User-Agent": this.userAgent,
                    };
                    let body = "";
                    if (id.indexOf("VorklimaDelay") !== -1) {
                        return;
                    }
                    if (id.indexOf("Vorklimatisierung") !== -1) {
                        if (!state.val || state.val === "false") {
                            url += "/precond/stop";
                        } else {
                            url += "/precond/start";
                        }
                        body = '{"type":"departure"}';
                        const now = new Date();

                        const pre = this.name + "." + this.instance;
                        const delayState = await this.getStateAsync(pre + "." + vin + ".remote.VorklimaDelay");
                        let delay = 0;
                        if (delayState) {
                            delay = delayState.val || 0;
                        }
                        body = '{"departureTime":' + (now.getHours() * 60 + now.getMinutes() + delay) + "}";
                        this.log.debug(body);
                    }
                    if (id.indexOf("DoorLock") !== -1) {
                        if (!this.config.pin) {
                            this.log.warn("Missing pin in settings");
                        }
                        headers["x-pin"] = this.config.pin;
                        if (!state.val || state.val === "false") {
                            url += "/doors/unlock";
                        } else {
                            url += "/doors/lock";
                        }
                    }

                    if (id.indexOf("DoorOpen") !== -1) {
                        if (!this.config.pin) {
                            this.log.warn("Missing pin in settings");
                        }
                        headers["x-pin"] = this.config.pin;
                        if (!state.val || state.val === "false") {
                            url += "/doors/lock";
                        } else {
                            url += "/doors/unlock";
                        }
                    }

                    if (id.indexOf("Auxheat") !== -1) {
                        if (!state.val || state.val === "false") {
                            url += "/auxheat/stop";
                        } else {
                            url += "/auxheat/start";
                        }
                    }
                    this.log.debug(id + " " + url);
                    request.post(
                        {
                            jar: this.jar,
                            gzip: true,
                            url: url,
                            headers: headers,
                            body: body,
                        },
                        (err, resp, body) => {
                            if (err || resp.statusCode >= 400 || !body) {
                                this.log.error(err);
                                return;
                            }

                            try {
                                this.log.info(body);
                                if (body.indexOf("INVALID") !== -1) {
                                    this.log.error("Action was not successful");
                                }
                            } catch (error) {
                                this.log.error("Action not successful " + error);
                            }
                        }
                    );
                }
            } else {
                //ACK Values
                const pre = this.name + "." + this.instance;
                if (id.indexOf("state.tanklevelpercent.intValue") !== -1 || id.indexOf("state.soc.intValue") !== -1) {
                    let lastTankeLevel = "tankLevelLast";
                    let status = "tankLevelStatus";
                    let beforeFueling = "tankLevelBeforeFueling";
                    let jsonString = "tankLevelJSON";
                    if (id.indexOf("state.soc.intValue") !== -1) {
                        lastTankeLevel = "socLevelLast";
                        status = "socStatus";
                        beforeFueling = "socLevelBeforeFueling";
                        jsonString = "socJSON";
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
                        await this.setStateAsync(vin + ".history." + status, false, true);
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
                        }
                        if (state.val === 100 || (state.val < lastTankLevelState.val && statusState.val)) {
                            this.setState(vin + ".history." + status, false, true);
                            this.setState(vin + ".history." + beforeFueling, lastTankLevelState, true);
                            const d = new Date();
                            const dformat =
                                [d.getDate(), d.getMonth() + 1, d.getFullYear()].join(".") +
                                " " +
                                [d.getHours().toString().length < 2 ? "0" + d.getHours() : d.getHours(), d.getMinutes().toString().length < 2 ? "0" + d.getMinutes() : d.getMinutes()].join(":");
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
                                const fuelObject = {
                                    start: beforeValue,
                                    end: state.val,
                                    date: dformat,
                                    diff: diff,
                                    quantity: quantity,
                                    price: price.toFixed(2),
                                    odo: odo,
                                    basicPrice: basicPrice,
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
                if (id.indexOf("status.locked") !== -1) {
                    if (state.ts !== state.lc) {
                        return;
                    }

                    if (id.indexOf("status.locked") !== -1) {
                        this.setState(vin + ".remote.DoorLock", state.val, true);
                        this.setState(vin + ".remote.DoorOpen", !state.val, true);
                    }
                }
                if (id.indexOf("precondActive") !== -1) {
                    this.setState(vin + ".remote.Vorklimatisierung", state.val, true);
                }
            }
        } else {
            // The state was deleted
        }
    }
    async getGasPrice(vin) {
        return new Promise((resolve, reject) => {
            const pre = this.name + "." + this.instance;
            this.getStates(pre + "." + vin + ".location.*", (err, states) => {
                this.log.debug(
                    "https://creativecommons.tankerkoenig.de/json/list.php?lat=" +
                        states[pre + "." + vin + ".location.latitude"].val +
                        "&lng=" +
                        states[pre + "." + vin + ".location.longitude"].val +
                        "&rad=4&sort=dist&type=" +
                        this.config.gas +
                        "&apikey=" +
                        this.config.apiKey
                );
                request.get(
                    {
                        url:
                            "https://creativecommons.tankerkoenig.de/json/list.php?lat=" +
                            states[pre + "." + vin + ".location.latitude"].val +
                            "&lng=" +
                            states[pre + "." + vin + ".location.longitude"].val +
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
    getVehicles() {
        return new Promise((resolve, reject) => {
            var headers = this.baseHeader;
            headers.Authorization = this.atoken;
            request.get(
                {
                    jar: this.jar,
                    gzip: true,
                    url: "https://bff-prod.risingstars.daimler.com/v1/vehicle/self/masterdata?countryCode=" + this.config.countryC + "&locale=" + this.config.acceptL,
                    headers: headers,
                    json: true,
                },
                (err, resp, body) => {
                    if (err || resp.statusCode >= 400 || !body) {
                        err && this.log.error(JSON.stringify(err));
                        resp && this.log.error(resp.statusCode);
                        body && this.log.error(JSON.stringify(body));
                        reject();
                    }
                    this.log.debug(JSON.stringify(body));
                    try {
                        if (body.length === 0) {
                            this.log.warn("No vehicles found");
                        }
                        body.forEach((element) => {
                            if (element.fin !== null && element.fin !== "null") {
                                const fin = element.fin || element.vin;
                                this.vinArray.push(fin);
                                this.setObjectNotExists(fin, {
                                    type: "state",
                                    common: {
                                        name: element.licensePlate || element.licencePlateNumber,
                                        role: "indicator",
                                        type: "mixed",
                                        write: false,
                                        read: true,
                                    },
                                    native: {},
                                });
                                this.setObjectNotExists(fin + ".masterdata", {
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
                                const adapter = this;
                                traverse(element).forEach(function (value) {
                                    if (this.path.length > 0 && this.isLeaf) {
                                        const modPath = this.path;
                                        this.path.forEach((pathElement, pathIndex) => {
                                            if (!isNaN(parseInt(pathElement))) {
                                                let stringPathIndex = parseInt(pathElement) + 1 + "";
                                                while (stringPathIndex.length < 2) stringPathIndex = "0" + stringPathIndex;
                                                const key = this.path[pathIndex - 1] + stringPathIndex;
                                                const parentIndex = modPath.indexOf(pathElement) - 1;
                                                modPath[parentIndex] = key;
                                                modPath.splice(parentIndex + 1, 1);
                                            }
                                        });
                                        let finalPath = modPath.join(".");
                                        let finalValue = value;
                                        if (modPath[0].indexOf("equipments") !== -1) {
                                            finalPath = "equipments." + value;
                                            finalValue = true;
                                            if (modPath[modPath.length - 1] === "origin") {
                                                return;
                                            }
                                        }
                                        if (modPath[0].indexOf("technicalData") !== -1) {
                                            finalPath = "technicalData." + value;
                                            finalValue = "" || this.parent.node.textValue;
                                            if (modPath[modPath.length - 1] === "textValue") {
                                                return;
                                            }
                                        }
                                        adapter.setObjectNotExists(fin + ".masterdata." + finalPath, {
                                            type: "state",
                                            common: {
                                                name: this.key || value,
                                                role: "indicator",
                                                type: "mixed",
                                                write: false,
                                                read: true,
                                            },
                                            native: {},
                                        });
                                        adapter.setState(fin + ".masterdata." + finalPath, finalValue || this.node, true);
                                    }
                                });
                                // for (const key in element) {
                                //     this.setObjectNotExists(fin + ".masterdata." + key, {
                                //         type: "state",
                                //         common: {
                                //             name: key,
                                //             type: "mixed",
                                //             role: "indicator",
                                //             write: false,
                                //             read: true,
                                //         },
                                //         native: {},
                                //     });
                                //     if (Array.isArray(element[key])) {
                                //         this.setState(fin + ".masterdata." + key, JSON.stringify(element[key]), true);
                                //     } else {
                                //         this.setState(fin + ".masterdata." + key, element[key], true);
                                //     }
                                // }
                            }
                        });
                    } catch (error) {
                        this.log.warn("Vehicles not found please start the mercedes me app: " + error);
                    }
                    this.vinArray = [...new Set(this.vinArray)];
                    this.vinArray.forEach(async (element) => {
                        this.setObjectNotExists(element + ".location", {
                            type: "state",
                            common: {
                                name: "Vehiclelocation updated via Interval in Settings",
                                write: true,
                                role: "indicator",
                                read: true,
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".status", {
                            type: "state",
                            common: {
                                name: "Vehiclestatus Fahrzeugstatus updated via Interval in Settings",
                                write: true,
                                role: "indicator",
                                read: true,
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".history", {
                            type: "state",
                            common: {
                                name: "Fuel/Energy Tank/Lade History",
                                write: true,
                                role: "indicator",
                                read: true,
                            },
                            native: {},
                        });

                        this.setObjectNotExists(element + ".history.tankLevelLast", {
                            type: "state",
                            common: {
                                name: "Last Tanklevel value",
                                type: "object",
                                role: "number",
                                write: false,
                                read: true,
                                unit: "%",
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".history.tankLevelBeforeFueling", {
                            type: "state",
                            common: {
                                name: "Last Tanklevel before fueling",
                                type: "object",
                                role: "number",
                                write: false,
                                read: true,
                                unit: "%",
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".history.tankLevelStatus", {
                            type: "state",
                            common: {
                                name: "Refueling/Tanken",
                                type: "object",
                                role: "boolean",
                                write: false,
                                read: true,
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".history.tankLevelJSON", {
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

                        this.setObjectNotExists(element + ".history.socLevelLast", {
                            type: "state",
                            common: {
                                name: "Last Charging value",
                                type: "object",
                                role: "number",
                                write: false,
                                read: true,
                                unit: "%",
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".history.socLevelBeforeFueling", {
                            type: "state",
                            common: {
                                name: "Last Charging value before charging",
                                type: "object",
                                role: "number",
                                write: false,
                                read: true,
                                unit: "%",
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".history.socStatus", {
                            type: "state",
                            common: {
                                name: "Charging/Laden",
                                type: "object",
                                role: "boolean",
                                write: false,
                                read: true,
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".history.socJSON", {
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

                        this.setObjectNotExists(element + ".remote", {
                            type: "state",
                            common: {
                                name: "Remote controls",
                                write: true,
                                role: "indicator",
                                read: true,
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".remote.Vorklimatisierung", {
                            type: "state",
                            common: {
                                name: "Precondition",
                                type: "boolean",
                                role: "switch.enable",
                                write: true,
                                role: "indicator",
                                read: true,
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".remote.VorklimaDelay", {
                            type: "state",
                            common: {
                                name: "PreconditionDelay in Minutes needed by some models",
                                type: "number",
                                role: "level",
                                write: true,
                                role: "indicator",
                                read: true,
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".remote.Auxheat", {
                            type: "state",
                            common: {
                                name: "Standheizung",
                                type: "boolean",
                                role: "switch.enable",
                                write: true,
                                role: "indicator",
                                read: true,
                            },
                            native: {},
                        });

                        this.setObjectNotExists(element + ".remote.DoorLock", {
                            type: "state",
                            common: {
                                name: "Door Lock True = Locked Doors / False = Open Doors",
                                type: "boolean",
                                role: "switch.lock",
                                write: true,
                                role: "indicator",
                                read: true,
                            },
                            native: {},
                        });
                        this.setObjectNotExists(element + ".remote.DoorOpen", {
                            type: "state",
                            common: {
                                name: "Door Open True = Open Doors / False = Locked Doors",
                                type: "boolean",
                                role: "switch.lock.door",
                                write: true,
                                role: "indicator",
                                read: true,
                            },
                            native: {},
                        });
                    });
                    resolve();
                }
            );
        });
    }
    getCommands() {
        return new Promise((resolve, reject) => {
            var headers = this.baseHeader;
            headers.Authorization = this.atoken;
            this.vinArray.forEach((vin) => {
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
                            err && this.log.error(JSON.stringify(err));
                            resp && this.log.error(resp.statusCode);
                            body && this.log.error(JSON.stringify(body));
                            reject();
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
                            const adapter = this;
                            traverse(body).forEach(function (value) {
                                if (this.path.length > 0 && this.isLeaf) {
                                    const modPath = this.path;
                                    this.path.forEach((pathElement, pathIndex) => {
                                        if (!isNaN(parseInt(pathElement))) {
                                            let stringPathIndex = parseInt(pathElement) + 1 + "";
                                            while (stringPathIndex.length < 2) stringPathIndex = "0" + stringPathIndex;
                                            const key = this.path[pathIndex - 1] + stringPathIndex;
                                            const parentIndex = modPath.indexOf(pathElement) - 1;
                                            modPath[parentIndex] = key;
                                            modPath.splice(parentIndex + 1, 1);
                                        }
                                    });
                                    if (this.parent.node.commandName) {
                                        modPath[0] = this.parent.node.commandName;
                                    }
                                    let finalPath = modPath.join(".");

                                    let parentPath = modPath.slice(0, -1).join(".");
                                    let finalValue = String(value);
                                    adapter.setObjectNotExists(vin + ".commands." + parentPath, {
                                        type: "state",
                                        common: {
                                            name: this.parent.node.commandName || this.key,
                                            role: "indicator",
                                            type: "mixed",
                                            write: false,
                                            read: true,
                                        },
                                        native: {},
                                    });
                                    adapter.setObjectNotExists(vin + ".commands." + finalPath, {
                                        type: "state",
                                        common: {
                                            name: this.key || value,
                                            role: "indicator",
                                            type: "mixed",
                                            write: false,
                                            read: true,
                                        },
                                        native: {},
                                    });
                                    adapter.setState(vin + ".commands." + finalPath, finalValue || this.node, true);
                                }
                            });
                        } catch (error) {
                            this.log.warn("Commands not found");
                        }
                    }
                );
            });
        });
    }
    refreshToken() {
        return new Promise((resolve, reject) => {
            this.log.debug("refreshToken");

            request.post(
                {
                    jar: this.jar,
                    gzip: true,
                    url: "https://keycloak.risingstars.daimler.com/auth/realms/Daimler/protocol/openid-connect/token",
                    headers: {
                        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                        "ris-os-version": "14.2",
                        "x-trackingid": this.xTracking,
                        "ris-os-name": "ios",
                        "x-sessionid": this.xSession,
                        accept: "*/*",
                        stage: "prod",
                        "x-applicationname": "mycar-store-ece",
                        "accept-language": "de-de",
                        "RIS-SDK-Version": "2.24.0",
                        "User-Agent": "MyCar/855 CFNetwork/1206 Darwin/20.1.0",
                        "ris-application-version": "1.5.1 (855)",
                        "x-locale": this.config.acceptL,
                    },
                    followAllRedirects: false,
                    body: "client_id=app&grant_type=refresh_token&refresh_token=" + this.rtoken,
                },
                (err, resp, body) => {
                    if (err || resp.statusCode >= 400 || !body) {
                        reject();
                        this.retryTimeout = setTimeout(() => {
                            this.refreshToken();
                        }, 5 * 60 * 1000);
                        err && this.log.error(err);
                        resp && this.log.error(resp.statusCode);
                        body && this.log.error(JSON.stringify(body)); 
                        return
                    }
                    try {
                        const token = JSON.parse(body);
                        if (token.error) {
                            this.log.error("refreshToken Error");
                            this.log.error(body);
                            if (token.error === "invalid_grant") {
                                this.log.error("Invalid Grant. Restarting Adapter.");
                                this.restart();
                            }
                            reject();
                            this.retryTimeout = setTimeout(() => {
                                this.refreshToken();
                            }, 5 * 60 * 1000);
                        }
                        this.log.debug(JSON.stringify(token));
                        this.atoken = token.access_token;
                        this.rtoken = token.refresh_token;

                        this.setState("auth.access_token", token.access_token, true);
                        this.setState("auth.refresh_token", token.refresh_token, true);

                        resolve();
                    } catch (error) {
                        this.log.error("Error refresh token");
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

            await this.setObjectNotExists("auth", {
                type: "state",
                common: {
                    name: "Auth Information for login",
                    write: true,
                    role: "indicator",
                    read: true,
                },
                native: {},
            });
            await this.setObjectNotExists("auth.access_token", {
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
            await this.setObjectNotExists("auth.refresh_token", {
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

            const aTokenState = await this.getStateAsync("auth.access_token");
            const rTokenState = await this.getStateAsync("auth.refresh_token");
            if (aTokenState) {
                this.atoken = aTokenState.val;
            }
            if (rTokenState) {
                this.rtoken = rTokenState.val;
            }
            if (this.atoken) {
                await this.refreshToken()
                    .then(() => {
                        resolve();
                        return;
                    })
                    .catch(() => {
                        this.atoken = "";
                        this.rtoken = "";
                        this.setState("auth.access_token", "", true);
                        this.setState("auth.refresh_token", "", true);
                    });
            }

            if (this.config.loginCode && !this.atoken) {
                await axios({
                    method: "post",
                    // jar: this.jar,
                    // gzip: true,
                    // followAllRedirects: true,
                    url: "https://keycloak.risingstars.daimler.com/auth/realms/Daimler/protocol/openid-connect/token",
                    headers: {
                        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                        "ris-os-version": "14.2",
                        "x-trackingid": this.xTracking,
                        "ris-os-name": "ios",
                        "x-sessionid": this.xSession,
                        accept: "*/*",
                        stage: "prod",
                        "x-applicationname": "mycar-store-ece",
                        "accept-language": "de-de",
                        "RIS-SDK-Version": "2.24.0",
                        "User-Agent": "MyCar/855 CFNetwork/1206 Darwin/20.1.0",
                        "ris-application-version": "1.5.1 (855)",
                        "device-uuid": this.deviceuuid,
                        "x-locale": this.config.acceptL,
                    },
                    data: "client_id=app&grant_type=password&password=" + this.config.loginCode + "&scope=offline_access&username=" + this.config.mail,
                })
                    .then((response) => {
                        this.log.debug(JSON.stringify(response.status));
                        this.log.debug(JSON.stringify(response.data));
                        const adapterConfig = "system.adapter." + this.name + "." + this.instance;

                        this.atoken = response.data.access_token;
                        this.rtoken = response.data.refresh_token;
                        this.setState("auth.access_token", response.data.access_token, true);
                        this.setState("auth.refresh_token", response.data.refresh_token, true);
                        resolve();
                        return;
                    })
                    .catch((error) => {
                        this.log.error("Wrong Sicherheitscode please enter the new code you received via mail");
                        this.log.error(error);
                        const adapterConfig = "system.adapter." + this.name + "." + this.instance;
                        this.getForeignObject(adapterConfig, (error, obj) => {
                            if (obj.native.loginCode) {
                                obj.native.loginCode = "";
                                this.setForeignObject(adapterConfig, obj);
                            }
                        });
                    });
            }
            if (!this.atoken) {
                axios({
                    method: "post",
                    // jar: this.jar,
                    // gzip: true,
                    url: "https://bff-prod.risingstars.daimler.com/v1/login",
                    // followAllRedirects: true,
                    headers: this.baseHeader,
                    data: JSON.stringify({ locale: this.config.acceptL, emailOrPhoneNumber: this.config.mail, countryCode: this.config.countryC }),
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
                        this.log.error(error);
                        reject();
                    });
            }
        });
    }

    connectWS(vin) {
        var headers = this.baseHeader;
        headers.Authorization = this.atoken;
        this.log.info("Connect to WebSocket")
        try {
            clearInterval(this.reconnectInterval)
            this.reconnectInterval = setInterval(() => {
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
            this.log.debug("WS connected");
            clearInterval(this.reconnectInterval)
        });
        this.ws.on("error", (data) => {
            this.log.error(data);
        });
        this.ws.on("close", (data) => {
            this.log.info(data);
            this.log.info("Websocket closed");
        });
        this.ws.on("message", async (data) => {
            this.log.debug("WS Message Length: " + data.length);
            if (this.wsHeartbeatTimeout) {
                clearTimeout(this.wsHeartbeatTimeout);
                clearInterval(this.reconnectInterval)                
            }
            this.wsHeartbeatTimeout = setTimeout(() => {
                this.log.error("Lost WebSocket connection try to reconnect")
                this.ws.close();
                setTimeout(() => {
                    this.connectWS();
                }, 5000);
            }, 1 * 60 * 1000); //1min
            try {
                const message = VehicleEvents.PushMessage.deserializeBinary(data).toObject();
                if (message.debugmessage) {
                    this.log.debug(JSON.stringify(message.debugmessage));
                }
                if (message.assignedVehicles) {
                    this.log.debug(JSON.stringify(message.assignedVehicles));
                    this.vinArray = message.assignedVehicles.vinsList;
                }
                if (message.apptwinPendingCommandRequest) {
                    this.log.debug(JSON.stringify(message.apptwinPendingCommandRequest));
                }
                if (message.vepupdates) {
                    // this.log.debug(JSON.stringify(message.vepupdates))

                    this.currentSequenceNumber = message.vepupdates.sequenceNumber;
                    let ackCommand = new Client.AcknowledgeVEPUpdatesByVIN();
                    ackCommand.setSequenceNumber(message.vepupdates.sequenceNumber);
                    let clientMessage = new Client.ClientMessage();
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
                            Object.keys(element[1]).forEach((state) => {
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
                                    adapter.setObjectNotExistsAsync(vin + ".state." + element[0] + "." + state, {
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
                                    adapter.setState(vin + ".state." + element[0] + "." + state, element[1][state], true);
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

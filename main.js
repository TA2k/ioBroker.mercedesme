/* eslint-disable quotes */
"use strict";
/*
 * Created with @iobroker/create-adapter v1.12.1
 */

const utils = require("@iobroker/adapter-core");
const request = require("request");
const jsdom = require("jsdom");
const crypto = require("crypto");
const { JSDOM } = jsdom;
class Mercedesme extends utils.Adapter {
	/**
     * @param {Partial<ioBroker.AdapterOptions>} [options={}]
     */
	constructor(options) {
		super({
			...options,
			name: "mercedesme"
		});
		this.on("ready", this.onReady.bind(this));
		this.on("stateChange", this.onStateChange.bind(this));
		this.on("unload", this.onUnload.bind(this));
		this.jar = request.jar();
		this.vinArray = [];
		this.interval = null;
		this.refreshTokenInterval = null;
		this.reconnectInterval = null;
		this.retryTimeout = null;
		this.tenant = "";
		this.statusEtag = "";
		this.userAgent = "ioBroker/mercedesMe Adapter 0.0.21";
	}

	/**
     * Is called when databases are connected and adapter received configuration.
     */
	async onReady() {
		// Initialize your adapter here

		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:

		this.login().then(
			() => {
				this.log.debug("Login successful");
				this.setState("info.connection", true, true);

				this.getVehicles().then(
					() => {
						this.interval = setInterval(() => {
							this.getVehicleStatus();
							this.getVehicleLocation();
						}, this.config.interval * 1000);

						this.vinArray.forEach(vin => {
							this.log.debug("Start " + vin);
                         
							//Delete stream states
							const pre = this.name + "." + this.instance;
							this.getStates(pre + "." + vin + ".*", (err, states) => {
								const allIds = Object.keys(states);
								allIds.forEach(keyName => {
									if (
										keyName.indexOf(".CHARGING_DATA") !== -1 ||
                                            keyName.indexOf(".DOORLOCK_STATUS") !== -1 ||
                                            keyName.indexOf(".windowlock") !== -1 ||
                                            keyName.indexOf(".JOURNEYS_DATA") !== -1 ||
                                            keyName.indexOf(".MAINTENANCE_DATA") !== -1 ||
                                            keyName.indexOf(".PRECONDITIONING_DATA") !== -1 ||
                                            keyName.indexOf(".SET_MAP_DATA") !== -1 ||
                                            keyName.indexOf(".SET_ECO_SCORE_DATA") !== -1 ||
                                            keyName.indexOf(".SET_SPEED_ALERT_DATA") !== -1
									) {
										this.delObject(
											keyName
												.split(".")
												.slice(2)
												.join(".")
										);
									}
								});
							});
                            
						});
						this.getVehicleDetails().then(
							() => {},
							() => {
								this.log.error("Error getting Vehicle Details");
							}
						);
						this.getVehicleStatus().then(
							() => {},
							err => {
								this.log.error(err);
								this.log.error(JSON.stringify(err));
								this.log.error("Error getting Vehicle Status");
							}
						);
						this.getVehicleLocation().then(
							() => {},
							() => {
								this.log.error("Error getting Vehicle Location");
							}
						);


						this.refreshTokenInterval = setInterval(() => {
							this.log.debug("Intervall refresh");
							this.refreshToken();
						}, 0.9 * 60 * 60 * 1000); //0.9h

						this.reconnectInterval = setInterval(() => {
							this.log.debug("Intervall restart");
							//Restart
							this.getForeignObject("system.adapter." + this.namespace, (err, obj) => {
								if (obj) this.setForeignObject("system.adapter." + this.namespace, obj);
							});
						}, 6 * 60 * 60 * 1000); //6h
					},
					() => {
						this.log.error("Error getting Vehicles");
					}
				);
			},
			() => {
				this.log.error("Login Failed. Please try to login manually.");
				this.setState("info.connection", false, true);
				this.retryTimeout = setTimeout(() => {
					this.log.info("Restart adapter");
					this.restart();
				}, 5 * 60 * 1000); //5min
			}
		);

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
						Authorization: "Bearer " + this.config.atoken,
						country_code: this.config.countryC,
						"Content-Type": "application/json;charset=UTF-8",
						"Accept-Encoding": "br, gzip, deflate",
						"User-Agent": this.userAgent
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
							body: body
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
				if (id.indexOf("status.tanklevelpercent") !== -1 || id.indexOf("status.soc") !== -1 || id.indexOf("status.vehicleParameterValues.fuelVolume.value") !== -1) {
					this.getStates("*", async (err, states) => {
						let lastString = "tankLevelLast";
						let status = "tankLevelStatus";
						let before = "tankLevelBeforeFueling";
						let jsonString = "tankLevelJSON";
						if (id.indexOf("status.soc") !== -1) {
							lastString = "socLevelLast";
							status = "socStatus";
							before = "socLevelBeforeFueling";
							jsonString = "socJSON";
						}
						if (!states[pre + "." + vin + ".history." + status]) {
							this.setState(vin + ".history." + status, false, true);
						}
						if (!states[pre + "." + vin + ".history." + lastString]) {
							this.setState(vin + ".history." + lastString, state.val, true);
						}
						if (states[pre + "." + vin + ".history." + status] && states[pre + "." + vin + ".history." + lastString]) {
							if (state.val > states[pre + "." + vin + ".history." + lastString].val && !states[pre + "." + vin + ".history." + status].val) {
								//check is charging via power plug
								if (status === "socStatus" && states[pre + "." + vin + ".status.chargingstatus"].val >= 2) {
									return;
								}
								this.setState(vin + ".history." + before, states[pre + "." + vin + ".history." + lastString].val, true);
								this.setState(vin + ".history." + status, true, true);
							}
							if (state.val === 100 || (state.val < states[pre + "." + vin + ".history." + lastString].val && states[pre + "." + vin + ".history." + status].val)) {
								this.setState(vin + ".history." + status, false, true);
								this.setState(vin + ".history." + before, states[pre + "." + vin + ".history." + lastString], true);
								const d = new Date();
								const dformat =
                                    [d.getDate(), d.getMonth() + 1, d.getFullYear()].join(".") +
                                    " " +
                                    [d.getHours().toString().length < 2 ? "0" + d.getHours() : d.getHours(), d.getMinutes().toString().length < 2 ? "0" + d.getMinutes() : d.getMinutes()].join(":");
								const beforeValue = states[pre + "." + vin + ".history." + before] ? states[pre + "." + vin + ".history." + before].val : 0;
								const diff = state.val - parseInt(beforeValue);
								let quantity;
								let price = 0;
								const odo = states[pre + "." + vin + ".status.odo"].val;
								let basicPrice = 0;
								if (id.indexOf("status.soc") !== -1) {
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
										basicPrice: basicPrice
									};

									const currenJsonHistoryState = states[pre + "." + vin + ".history." + jsonString];
									let currenJsonHistory = [];
									if (currenJsonHistory) {
										try {
											currenJsonHistory = JSON.parse(currenJsonHistoryState.val);
										} catch (error) {
											currenJsonHistory = [];
										}
									}
									const newJsonHistory = [fuelObject].concat(currenJsonHistory);
									this.setState(vin + ".history." + jsonString, JSON.stringify(newJsonHistory), true);
								}
							}
						}
						this.setState(vin + ".history." + lastString, state.val, true);
					});
				}
				if (id.indexOf("doorsClosed") !== -1) {
					if (state.ts !== state.lc) {
						return;
					}
				
					if (id.indexOf("doorsClosed") !== -1) {
						this.setState(vin + ".remote.DoorLock", state.val, true);
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
						followAllRedirects: true
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
	getVehicleDetails() {
		return new Promise((resolve, reject) => {
			if (this.config.isAdapter) {
				resolve();
				return;
			}
			this.vinArray.forEach(vin => {
				this.log.debug("Details");
				request.get(
					{
						jar: this.jar,
						gzip: true,
						url: "https://bff.meapp.secure.mercedes-benz.com/api/v2/dashboarddata/" + vin + "/vehicle",
						headers: {
							"Accept-Language": this.config.acceptL,
							Authorization: "Bearer " + this.config.atoken,
							country_code: this.config.countryC,
							"User-Agent": this.userAgent
						}
					},
					(err, resp, body) => {
						if (err || resp.statusCode >= 400 || !body) {
							this.log.debug(err);
							reject();
							return;
						}

						try {
							const data = JSON.parse(body);

							Object.keys(data["staticVehicleData"]).forEach(element => {
								this.setObjectNotExists(vin + ".details." + element, {
									type: "state",
									common: {
										name: element,
										type: "mixed",
										role: "indicator",
										write: false,
										read: true
									},
									native: {}
								});
								const folder = "details";
								let value = data["staticVehicleData"][element];

								if (typeof value === "object") {
									for (const subElement in value) {
										this.setObjectNotExists(vin + "." + folder + "." + element + "." + subElement, {
											type: "state",
											common: {
												name: subElement,
												type: "mixed",
												role: "indicator",
												write: false,
												read: true
											},
											native: {}
										});
										let subValue = value[subElement];
										{
											if (Array.isArray(subValue)) {
												this.setState(vin + "." + folder + "." + element + "." + subElement, JSON.stringify(subValue), true);
											} else {
												if (subValue && subValue.indexOf && subValue.indexOf(":") === -1) {
													subValue = isNaN(parseFloat(subValue)) === true ? subValue : parseFloat(subValue);
												}
											}
											this.setState(vin + "." + folder + "." + element + "." + subElement, subValue, true);
										}
									}
								} else {
									if (Array.isArray(value)) {
										this.setState(vin + "." + folder + "." + element, JSON.stringify(value), true);
									} else {
										if (value && value.indexOf && value.indexOf(":") === -1) {
											value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
										}
									}
									this.setState(vin + "." + folder + "." + element, value, true);
								}
							});

							Object.keys(data["metadata"]["appSections"]).forEach(element => {
								this.setObjectNotExists(vin + ".details." + element, {
									type: "state",
									common: {
										name: element,
										type: "mixed",
										role: "indicator",
										write: false,
										read: true
									},
									native: {}
								});

								let value = data["metadata"]["appSections"][element];
								if (value && value.indexOf && value.indexOf(":") === -1) {
									value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
								}
								this.setState(vin + ".details." + element, value, true);
							});
							data["metadata"]["featureEnablements"].forEach(element => {
								this.setObjectNotExists(vin + ".features." + element.name, {
									type: "state",
									common: {
										name: element.name,
										type: "mixed",
										role: "indicator",
										write: false,
										read: true
									},
									native: {}
								});

								let value = element.enablement;
								if (value && value.indexOf && value.indexOf(":") === -1) {
									value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
								}
								this.setState(vin + ".features." + element.name, value, true);
							});
							resolve();
						} catch (error) {
							this.log.debug(body);
							reject(error);
						}
					}
				);
			});
		});
	}
	getVehicleStatus() {
		return new Promise((resolve, reject) => {
			// this.log.debug("Update started");
			this.vinArray.forEach(vin => {
				let url = "https://vhs.meapp.secure.mercedes-benz.com/api/v1/vehicles/" + vin + "/dynamic?forceRefresh=true";
				let headers = {
					"Accept-Language": this.config.acceptL,
					Authorization: "Bearer " + this.config.atoken,
					country_code: this.config.countryC,
					"User-Agent": this.userAgent
				};
				if (this.statusEtag) {
					headers["If-None-Match"] = this.statusEtag;
				}
				if (this.config.isAdapter) {
					url = "https://connectme-adapter.mercedes-benz.com/services-dg/carlacsappapi/v2/tenants/" + this.tenant + "/vehicles/" + vin + "/status?filter=last";
					headers = {
						Host: "connectme-adapter.mercedes-benz.com",
						"Content-Type": "application/json",
						"X-ClientInformations": "CarlaAppVersion/3.0.50 iOS/13.1 Apple/iPhone11,2",
						Cookie: "",
						"User-Agent": "Live/3 CFNetwork/1107.1 Darwin/19.0.0",
						Accept: "application/json",
						"Accept-Language": "de-de",
						Authorization: "Bearer " + this.config.atoken,
						"Cache-Control": "no-cache",
						"Accept-Encoding": "deflate",
						Connection: "keep-alive",
						"cache-control": "no-cache"
					};
				}
				request.get(
					{
						jar: this.jar,
						gzip: true,
						url: url,
						headers: headers
					},
					(err, resp, body) => {
						if (err) {
							this.log.error(err);
							reject(err);
							return;
						}
						if (resp.statusCode >= 400) {
							if (resp.statusCode === 401) {
								this.log.info("401 Error try to refresh accesstoken.");
								this.log.error(body);
								this.refreshToken();
								return;
							}
							this.log.error(resp.statusCode + " " + resp.statusMessage + " " + body);
							reject();
							return;
						}

						this.log.debug(JSON.stringify(body));
						this.statusEtag = resp.headers.etag;
						if (resp.statusCode === 304) {
							this.log.debug("304 No values updated");
							resolve();
							return;
						}
						try {
							const parsedBody = JSON.parse(body);
							let curObject = parsedBody.dynamic;
							if (this.config.isAdapter) {
								curObject = parsedBody[parsedBody.length - 1];
							}
							if (Object.keys(curObject).length === 0) {
								this.log.info(
									"No Dynamic Information from MercedesMe. Maybe you car is not activated for native mercedes me service. For ODB Adapter you have to activate the option."
								);
								reject();
							}

							Object.keys(curObject).forEach(element => {
								let value = "";
								if (!this.config.isAdapter) {
									value = curObject[element].value;
								} else {
									value = curObject[element] || "";
								}

								if (value && value.indexOf && value.indexOf(":") === -1) {
									value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
								}

								const unit = this.extractUnit(value, element);
								this.setObjectNotExists(vin + ".status." + element, {
									type: "state",
									common: {
										name: element,
										type: "mixed",
										role: "indicator",
										write: true,
										read: true,
										unit: unit
									},
									native: {}
								});
								this.setState(vin + ".status." + element, value, true);
							});

							if (this.config.isAdapter) {
								curObject = parsedBody[parsedBody.length - 1].vehicleParameterValues;
								this.log.debug("Mileage: " + JSON.stringify(curObject.mileage));
								if (curObject) {
									Object.keys(curObject).forEach(element => {
										this.setObjectNotExists(vin + ".status.vehicleParameterValues." + element, {
											type: "state",
											common: {
												name: element,
												type: "mixed",
												role: "indicator",
												write: false,
												read: true
											},
											native: {}
										});

										let value = curObject[element];
										if (typeof value === "object") {
											for (const subElement in value) {
												this.setObjectNotExists(vin + ".status.vehicleParameterValues." + element + "." + subElement, {
													type: "state",
													common: {
														name: subElement,
														type: "mixed",
														role: "indicator",
														write: false,
														read: true
													},
													native: {}
												});
												let subValue = value[subElement];
												{
													if (Array.isArray(subValue)) {
														this.setState(vin + ".status.vehicleParameterValues." + element + "." + subElement, JSON.stringify(subValue), true);
													} else {
														if (subValue && subValue.indexOf && subValue.indexOf(":") === -1) {
															subValue = isNaN(parseFloat(subValue)) === true ? subValue : parseFloat(subValue);
														}
													}
													this.setState(vin + ".status.vehicleParameterValues." + element + "." + subElement, subValue, true);
												}
											}
										}
										if (value && value.indexOf && value.indexOf(":") === -1) {
											value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
										}
										this.setState(vin + ".status.vehicleParameterValues." + element, value, true);
									});
								}
							}
							curObject = JSON.parse(body).aggregated;

							if (curObject && curObject["lastJourney"]) {
								Object.keys(curObject["lastJourney"]).forEach(element => {
									let value = curObject["lastJourney"][element];
									if (value && value.indexOf && value.indexOf(":") === -1) {
										value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
									}

									const unit = this.extractUnit(value, element);
									this.setObjectNotExists(vin + ".lastjourney." + element, {
										type: "state",
										common: {
											name: element,
											type: "mixed",
											role: "indicator",
											write: false,
											read: true,
											unit: unit
										},
										native: {}
									});
									this.setState(vin + ".lastjourney." + element, value, true);
								});
							}

							resolve();
						} catch (error) {
							this.log.error(error);
							this.log.error(JSON.stringify(error));
							reject();
						}
					}
				);
			});
		});
	}
	extractUnit(value, element) {
		let unit = "";
		if (value !== null && value !== false && value !== "null" && !isNaN(value)) {
			if (element.toLowerCase().indexOf("odo") !== -1 || element.toLowerCase().indexOf("range") !== -1 || element.toLowerCase().indexOf("distance") !== -1 || element.toLowerCase().indexOf("ecoscore") !== -1) {
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

	getVehicleLocation() {
		return new Promise((resolve, reject) => {
			if (this.config.isAdapter) {
				resolve();
				return;
			}
			this.vinArray.forEach(vin => {
				request.get(
					{
						jar: this.jar,
						gzip: true,
						url: "https://vhs.meapp.secure.mercedes-benz.com/api/v1/vehicles/" + vin + "/location",
						headers: {
							"Accept-Language": this.config.acceptL,
							Authorization: "Bearer " + this.config.atoken,
							country_code: this.config.countryC,
							"User-Agent": this.userAgent,
							lat: "1",
							lon: "1"
						}
					},
					(err, resp, body) => {
						if (err || resp.statusCode >= 400 || !body) {
							reject();
							return;
						}

						try {
							const data = JSON.parse(body);
							Object.keys(data).forEach(element => {
								this.setObjectNotExists(vin + ".location." + element, {
									type: "state",
									common: {
										name: element,
										type: "mixed",
										role: "indicator",
										write: false,
										read: true
									},
									native: {}
								});

								let value = data[element];
								if (value && value.indexOf && value.indexOf(":") === -1) {
									value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
								}
								this.setState(vin + ".location." + element, value, true);
							});

							resolve();
						} catch (error) {
							reject(error);
						}
					}
				);
			});
		});
	}
	getVehicles() {
		return new Promise((resolve, reject) => {
			let url = "https://bff.meapp.secure.mercedes-benz.com/api/v2/appdata";
			if (this.config.isAdapter) {
				if (!this.config.ciam) {
					this.log.error("Missing ciam ID. You can find the id in your Adapter app. Upper right 'i' -> App Support");
					reject();
				}
				url = "https://connectme-adapter.mercedes-benz.com/services-dg/carlacsappapi/registeredUsers/" + this.config.ciam;
			}
			request.get(
				{
					jar: this.jar,
					gzip: true,
					url: url,
					headers: {
						"Accept-Language": this.config.acceptL,
						Authorization: "Bearer " + this.config.atoken
					}
				},
				(err, resp, body) => {
					if (err || resp.statusCode >= 400 || !body) {
						reject(err);
					}
					this.log.debug(body);
					try {
						if (!JSON.parse(body).vehicles || JSON.parse(body).vehicles.length === 0) {
							this.log.warn("No vehicles found");
						}
						this.tenant = JSON.parse(body).tenantId;
						JSON.parse(body).vehicles.forEach(element => {
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
										read: true
									},
									native: {}
								});
								for (const key in element) {
									this.setObjectNotExists(fin + ".general." + key, {
										type: "state",
										common: {
											name: key,
											type: "mixed",
											role: "indicator",
											write: false,
											read: true
										},
										native: {}
									});
									if (Array.isArray(element[key])) {
										this.setState(fin + ".general." + key, JSON.stringify(element[key]), true);
									} else {
										this.setState(fin + ".general." + key, element[key], true);
									}
								}
							}
						});
					} catch (error) {
						this.log.warn("Vehicles not found please start the mercedes me app: " + error);
					}
					this.vinArray = [...new Set(this.vinArray)];
					this.vinArray.forEach(element => {
						this.setObjectNotExists(element + ".location", {
							type: "state",
							common: {
								name: "Vehiclelocation updated via Interval in Settings",
								write: true
							},
							native: {}
						});
						this.setObjectNotExists(element + ".status", {
							type: "state",
							common: {
								name: "Vehiclestatus Fahrzeugstatus updated via Interval in Settings",
								write: true
							},
							native: {}
						});
						this.setObjectNotExists(element + ".history", {
							type: "state",
							common: {
								name: "Fuel/Energy Tank/Lade History",
								write: true
							},
							native: {}
						});

						this.setObjectNotExists(element + ".history.tankLevelLast", {
							type: "state",
							common: {
								name: "Last Tanklevel value",
								type: "object",
								role: "number",
								write: false,
								read: true,
								unit: "%"
							},
							native: {}
						});
						this.setObjectNotExists(element + ".history.tankLevelBeforeFueling", {
							type: "state",
							common: {
								name: "Last Tanklevel before fueling",
								type: "object",
								role: "number",
								write: false,
								read: true,
								unit: "%"
							},
							native: {}
						});
						this.setObjectNotExists(element + ".history.tankLevelStatus", {
							type: "state",
							common: {
								name: "Refueling/Tanken",
								type: "object",
								role: "boolean",
								write: false,
								read: true
							},
							native: {}
						});
						this.setObjectNotExists(element + ".history.tankLevelJSON", {
							type: "state",
							common: {
								name: "Tanklevel history as json",
								type: "object",
								role: "history",
								write: true,
								read: true
							},
							native: {}
						});

						this.setObjectNotExists(element + ".history.socLevelLast", {
							type: "state",
							common: {
								name: "Last Charging value",
								type: "object",
								role: "number",
								write: false,
								read: true,
								unit: "%"
							},
							native: {}
						});
						this.setObjectNotExists(element + ".history.socLevelBeforeFueling", {
							type: "state",
							common: {
								name: "Last Charging value before charging",
								type: "object",
								role: "number",
								write: false,
								read: true,
								unit: "%"
							},
							native: {}
						});
						this.setObjectNotExists(element + ".history.socStatus", {
							type: "state",
							common: {
								name: "Charging/Laden",
								type: "object",
								role: "boolean",
								write: false,
								read: true
							},
							native: {}
						});
						this.setObjectNotExists(element + ".history.socJSON", {
							type: "state",
							common: {
								name: "Charging history as json",
								type: "object",
								role: "history",
								write: true,
								read: true
							},
							native: {}
						});

						this.setObjectNotExists(element + ".remote", {
							type: "state",
							common: {
								name: "Remote controls",
								write: true
							},
							native: {}
						});
						this.setObjectNotExists(element + ".remote.Vorklimatisierung", {
							type: "state",
							common: {
								name: "Precondition",
								type: "boolean",
								role: "indicator",
								write: true
							},
							native: {}
						});
						this.setObjectNotExists(element + ".remote.VorklimaDelay", {
							type: "state",
							common: {
								name: "PreconditionDelay in Minutes needed by some models",
								type: "number",
								role: "indicator",
								write: true
							},
							native: {}
						});
						this.setObjectNotExists(element + ".remote.Auxheat", {
							type: "state",
							common: {
								name: "Standheizung",
								type: "boolean",
								role: "indicator",
								write: true
							},
							native: {}
						});

						this.setObjectNotExists(element + ".remote.DoorLock", {
							type: "state",
							common: {
								name: "Door Lock",
								type: "boolean",
								role: "switch.lock",
								write: true
							},
							native: {}
						});
					
					});
					resolve();
				}
			);
		});
	}
	login() {
		return new Promise((resolve, reject) => {
			this.loginApp().then(
				() => {
					this.log.debug("Login in App successful. Starting login into website.");
					resolve();
				},
				() => {
					reject();
				}
			);
		});
	}

	refreshToken() {
		return new Promise((resolve, reject) => {
			this.log.debug("refreshToken");
			const clientID = "4390b0db-4be9-40e9-9147-5845df537beb";
			const redirect = "https://cgw.meapp.secure.mercedes-benz.com/endpoint/api/v1/redirect";
			const headers = {
				"Content-Type": "application/x-www-form-urlencoded",
				"User-Agent": "okhttp/3.9.0"
			};
			let url =
                "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/token?grant_type=refresh_token&redirect_uri=" + redirect + "&client_id=" + clientID + "&refresh_token=" + this.config.rtoken;
			if (this.config.isAdapter) {
				url =
                    "https://connectme-adapter.mercedes-benz.com/oauth2/token?&grant_type=refresh_token&redirect_uri=https%3A%2F%2Fconnectme-adapter.mercedes-benz.com%2Fservices-dg%2Fmbfa&scope=acsbasicscope%20carlaApp%20mbfaCarla%20applogcrashlog%20openid&refresh_token=" +
                    this.config.rtoken;
				headers["Authorization"] = "Basic TmYzMGFQUWVSeGwyNGYwRkVydEFMWjZmcF93YTpWQklZUVJQRVVPX2w2bElwN2ZJM0JrVWRaT2Nh";
			}
			request.post(
				{
					jar: this.jar,
					gzip: true,
					url: url,
					headers: headers,
					followAllRedirects: false
				},
				(err, resp, body) => {
					if (err || resp.statusCode >= 400 || !body) {
						reject();
						this.retryTimeout = setTimeout(() => {
							this.refreshToken();
						}, 5 * 60 * 1000);
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
						this.config.atoken = token.access_token;
						this.config.rtoken = token.refresh_token;
						this.config.scope = token.scope;

						const t = new Date();
						t.setSeconds(t.getSeconds() + 3600);
						this.config.expires = t.getTime();
						resolve();
					} catch (error) {
						this.log.error("Error refresh token");
						this.log.error("refresh result: " + body);
						reject();
					}
				}
			);
		});
	}
	loginApp() {
		return new Promise((resolve, reject) => {
			this.log.debug("Login");
			const [code_verifier, codeChallange] = this.getCodeChallenge();

			this.log.debug(codeChallange);
			const clientID = "4390b0db-4be9-40e9-9147-5845df537beb";
			const scope = "mma:backend:all openid ciam-uid profile email";
			const app_id = "MCMAPP.FE_PROD";

			const userAgent = "Mozilla/5.0 (Linux; Android 5.1; Google Nexus 5 Build/LMY47D) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/39.0.0.0 Mobile Safari/537.36";
			const redirect = "https://cgw.meapp.secure.mercedes-benz.com/endpoint/api/v1/redirect";
			let url01 =
                "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/authorize?response_type=code&client_id=" +
                clientID +
                "&code_challenge=" +
                codeChallange +
                "&code_challenge_method=S256&scope=" +
                scope +
                "&redirect_uri=" +
                redirect;
			if (this.config.isAdapter) {
				url01 =
                    "https://connectme-adapter.mercedes-benz.com/oauth2/authorize?client_id=Nf30aPQeRxl24f0FErtALZ6fp_wa&redirect_uri=https%3A%2F%2Fconnectme-adapter.mercedes-benz.com%2Fservices-dg%2Fmbfa&response_type=code&prompt=login&scope=acsbasicscope%20carlaApp%20mbfaCarla%20applogcrashlog%20openid";
			}
			this.log.debug(url01);
			request.get(
				{
					jar: this.jar,
					gzip: true,
					url: url01,
					followAllRedirects: true,
					headers: {
						"Accept-Language": this.config.acceptL,
						"X-Requested-With": "com.daimler.mm.android",
						Accept: "*/*",
						"User-Agent": userAgent
					}
				},
				(err, resp, body) => {
					if (err || resp.statusCode >= 400 || !body) {
						reject();
					}
					if (!this.config.isAdapter) {
						request.get(
							{
								jar: this.jar,
								gzip: true,
								url: "https://login.secure.mercedes-benz.com/wl/third-party-cookie?app-id=" + app_id,
								followAllRedirects: true,
								headers: {
									"Accept-Language": this.config.acceptL,
									"X-Requested-With": "com.daimler.mm.android",
									Accept: "*/*",
									"User-Agent": userAgent,
									Origin: "https://login.secure.mercedes-benz.com",
									"Cache-Control": "max-age=0",
									"Content-Type": "application/x-www-form-urlencoded"
								}
							},
							(err, resp, body) => {
								this.log.debug("third submit result: " + body);
							}
						);
					}
					const dom = new JSDOM(body);
					const form = {};
					const formLogin = dom.window.document.querySelector("#formLogin");
					let url = "https://login.secure.mercedes-benz.com/wl/login";
					if (formLogin) {
						this.log.debug("acLogin");
						for (const formElement of dom.window.document.querySelector("#formLogin").children) {
							if (formElement.type === "hidden") {
								form[formElement.name] = formElement.value;
							}
						}
						form["username"] = this.config.mail;
						form["password"] = this.config.password;
						form["remember-me"] = 1;
						//this.log.debug(JSON.stringify(form));
					} else {
						this.log.debug("accNoForm");
						url = "https://frontend.meapp.secure.mercedes-benz.com/reauthenticate";
					}
					request.post(
						{
							jar: this.jar,
							gzip: true,
							url: url,
							form: form,

							headers: {
								"Accept-Language": this.config.acceptL,
								"X-Requested-With": "com.daimler.mm.android",
								Accept: "*/*",
								"User-Agent": userAgent,
								Origin: "https://login.secure.mercedes-benz.com",
								"Cache-Control": "max-age=0",
								"Content-Type": "application/x-www-form-urlencoded"
							},
							followAllRedirects: true
						},
						(err, resp, body) => {
							if (err || resp.statusCode >= 400 || !body) {
								this.log.error(err);
								reject();
								return;
							}
							//this.log.debug("form submit result: " + body);
							if (body.indexOf("Login failed") !== -1) {
								this.log.error("Logindaten fehlerhaft oder manueller Login auf der Webseite ist erforderlich");
								reject();
							}
							const consentForm = {};
							const dom = new JSDOM(body);
							if (!dom.window.document.querySelector("form")) {
								this.log.debug("No Form found");
								return;
							}
							for (const formElement of dom.window.document.querySelector("form").children) {
								if (formElement.type === "hidden") {
									consentForm[formElement.name] = formElement.value;
								}
							}

							//this.log.debug("consent form: " + JSON.stringify(consentForm));
							request.post(
								{
									jar: this.jar,
									gzip: true,
									url: "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/authorize/consent",
									form: consentForm,
									headers: {
										"Accept-Language": this.config.acceptL,
										Accept: "*/*",
										"Cache-Control": "max-age=0",
										"Content-Type": "application/x-www-form-urlencoded",
										Origin: "https://	login.secure.mercedes-benz.com",
										"User-Agent": userAgent,
										Referer: "https://login.secure.mercedes-benz.com/wl/login",
										"X-Requested-With": "com.daimler.mm.android"
									},
									followAllRedirects: this.config.isAdapter
								},
								(err, resp, body) => {
									if (err) {
										this.log.error(err);
										reject();
										return;
									}
									if (resp.headers.location || this.config.isAdapter) {
										let code = "";
										if (this.config.isAdapter) {
											code = resp.request.path.split("=")[1];
										} else {
											code = resp.headers.location.split("=")[1];
										}
										this.log.debug("consent result: " + code);
										const headers = {
											"Content-Type": "application/x-www-form-urlencoded",
											"User-Agent": "okhttp/3.9.0"
										};
										let url =
                                            "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/token?grant_type=authorization_code&redirect_uri=" +
                                            redirect +
                                            "&client_id=" +
                                            clientID +
                                            "&code_verifier=" +
                                            code_verifier +
                                            "&code=" +
                                            code;
										if (this.config.isAdapter) {
											url =
                                                "https://connectme-adapter.mercedes-benz.com/oauth2/token?code=" +
                                                code +
                                                "&grant_type=authorization_code&redirect_uri=https%3A%2F%2Fconnectme-adapter.mercedes-benz.com%2Fservices-dg%2Fmbfa&scope=acsbasicscope%20carlaApp%20mbfaCarla%20applogcrashlog%20openid";
											headers["Authorization"] = "Basic TmYzMGFQUWVSeGwyNGYwRkVydEFMWjZmcF93YTpWQklZUVJQRVVPX2w2bElwN2ZJM0JrVWRaT2Nh";
										}
										request.post(
											{
												jar: this.jar,
												gzip: true,
												url: url,
												form: consentForm,
												headers: headers,
												followAllRedirects: false
											},
											(err, resp, body) => {
												if (err || resp.statusCode >= 400 || !body) {
													this.log.error(err);
													reject();
													return;
												}
												try {
													const token = JSON.parse(body);
													this.log.debug(JSON.stringify(token));
													this.config.atoken = token.access_token;
													this.config.rtoken = token.refresh_token;
													this.config.scope = token.scope;

													const t = new Date();
													t.setSeconds(t.getSeconds() + 3600);
													this.config.expires = t.getTime();
													resolve();
												} catch (error) {
													this.log.debug("authori result: " + body);
													reject();
												}
											}
										);
									}
								}
							);
						}
					);
				}
			);
		});
	}
	getCodeChallenge() {
		let hash = "";
		let result = "";
		while (hash === "" || hash.indexOf("+") !== -1 || hash.indexOf("/") !== -1 || hash.indexOf("=") !== -1 || result.indexOf("+") !== -1 || result.indexOf("/") !== -1) {
			const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			result = "";
			for (let i = 64; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
			result = Buffer.from(result).toString("base64");
			result = result.replace(/=/g, "");
			hash = crypto
				.createHash("sha256")
				.update(result)
				.digest("base64");
			hash = hash.slice(0, hash.length - 1);
		}
		return [result, hash];
	}
}

if (module.parent) {
	// Export the constructor in compact mode
	/**
     * @param {Partial<ioBroker.AdapterOptions>} [options={}]
     */
	module.exports = options => new Mercedesme(options);
} else {
	// otherwise start the instance directly
	new Mercedesme();
}

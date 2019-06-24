/* eslint-disable quotes */
"use strict";
/*
 * Created with @iobroker/create-adapter v1.12.1
 */

const utils = require("@iobroker/adapter-core");
const io = require("socket.io-client");
const request = require("request");
const jsdom = require("jsdom");
const crypto = require('crypto');
const {
	JSDOM
} = jsdom;
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
		this.on("objectChange", this.onObjectChange.bind(this));
		this.on("stateChange", this.onStateChange.bind(this));
		// this.on("message", this.onMessage.bind(this));
		this.on("unload", this.onUnload.bind(this));
		this.jar = request.jar();
		this.socketIOCookie = "";
		this.vinArray = [];
		this.socketConnections = {};
		this.interval = null;
		this.reAuthInterval = null;
		this.doorInterval = null;
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {
		// Initialize your adapter here

		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:

		this.login().then(() => {
			this.log.debug("Login successful");
			this.setState("info.connection", true, true);


			this.getVehicles().then(() => {

				this.vinArray.forEach((vin) => {
					this.log.debug("Start " + vin);
					this.connectToSocketIo(vin);
				});
				this.getVehicleDetails().then(() => {

				}, () => {
					this.log.error("Error getting Vehicle Details");
				});
				this.getVehicleStatus().then(() => {

				}, () => {
					this.log.error("Error getting Vehicle Status");
				});
				this.getVehicleLocation().then(() => {

				}, () => {
					this.log.error("Error getting Vehicle Location");
				});
				this.reAuthInterval = setInterval(() => {
					this.log.debug("Intervall reconnect");
					this.refreshToken();
					this.reAuth().then(() => {
						this.vinArray.forEach((vin) => {
							this.connectToSocketIo(vin);
						});
					}, () => {});
				}, 6 * 60 * 1000); //6min

				this.interval = setInterval(() => {
					this.getVehicleStatus();
					this.getVehicleLocation();
				}, this.config.interval * 1000);



			}, (

			) => {
				this.log.error("Error getting Vehicles");
			});

		}, () => {
			this.log.error("Login Failed");
			this.setState("info.connection", false, true);
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
			clearInterval(this.reAuthInterval);
			clearInterval(this.doorInterval);
			callback();
		} catch (e) {
			callback();
		}
	}

	/**
	 * Is called if a subscribed object changes
	 * @param {string} id
	 * @param {ioBroker.Object | null | undefined} obj
	 */
	onObjectChange(id, obj) {
		if (obj) {
			// The object was changed
		} else {
			// The object was deleted

		}
	}

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	onStateChange(id, state) {
		if (state) {
			const vin = id.split(".")[2];
			if (!state.ack) {
				if (id.indexOf("remote") !== -1) {
					this.refreshToken().then(() => {
						this.connectDoorSockets(vin); //.then(() => {
						let url = "https://vhs.meapp.secure.mercedes-benz.com/api/v1/vehicles/" + vin;
						let headers = {
							"Accept-Language": "de_DE",
							"Authorization": "Bearer " + this.config.atoken,
							"country_code": "DE",
							"Content-Type": "application/json;charset=UTF-8",
							"Accept-Encoding": "br, gzip, deflate",
							"User-Agent": "MercedesMe/2.13.2+639 (Android 5.1)",
						};
						let body = "";
						if (id.indexOf("Vorklimatisierung") !== -1) {
							if (!state.val || state.val === "false") {
								url += "/precond/stop";
							} else {
								url += "/precond/start";
							}
							body = '{"type":"departure"}';
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

						if (id.indexOf("WindowLock") !== -1) {
							this.reAuth().then(() => {
								if (!state.val || state.val === "false") {
									this.socketConnections[vin]["doorLock"].emit("command", {
										"commandId": "WINDOWS_OPEN",
										"data": {
											"message": "QUERY_STARTED_OPEN",
											"sliderPosition": 1
										}
									});
								} else {
									this.socketConnections[vin]["doorLock"].emit("command", {
										"commandId": "WINDOWS_CLOSE",
										"data": {
											"message": "QUERY_STARTED_CLOSED",
											"sliderPosition": 0
										}
									});

								}
							});
							return;

						}
						if (id.indexOf("Auxheat") !== -1) {
							if (!state.val || state.val === "false") {
								url += "/auxheat/stop";
							} else {
								url += "/auxheat/start";
							}
						}
						this.log.debug(id + " " + url);
						request.post({
							jar: this.jar,
							url: url,
							headers: headers,
							body: body
						}, (err, resp, body) => {
							if (err) {

								return;
							}

							try {
								this.log.debug(body);
								if (body.indexOf("INVALID") !== -1) {
									this.log.error(body);
								}

							} catch (error) {
								this.log.error("Action not successful " + error);
							}
						});
						//	});
					}, () => {
						this.log.error("ReAuth Error");
					});
				}
			} else {
				//ACK Values
				const pre = this.name + "." + this.instance;
				if (id.indexOf("travelDataBlock.tankLevelPercent") !== -1 || id.indexOf("travelDataBlock.soc") !== -1) {
					this.getStates("*", (err, states) => {
						let lastString = "tankLevelLast";
						let status = "tankLevelStatus";
						let before = "tankLevelBeforeFueling";
						let jsonString = "tankLevelJSON";
						if (id.indexOf("travelDataBlock.soc") !== -1) {
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
								this.setState(vin + ".history." + before, states[pre + "." + vin + ".history." + lastString].val, true);
								this.setState(vin + ".history." + status, true, true);
							}
							if (state.val === 100 || (state.val < states[pre + "." + vin + ".history." + lastString].val && states[pre + "." + vin + ".history." + status].val)) {
								this.setState(vin + ".history." + status, false, true);
								this.setState(vin + ".history." + before, states[pre + "." + vin + ".history." + lastString], true);
								const d = new Date;
								const dformat = [
									d.getDate(),
									d.getMonth() + 1,
									d.getFullYear()
								].join(".") + " " + [d.getHours().toString().length < 2 ? "0" + d.getHours() : d.getHours(),
									d.getMinutes().toString().length < 2 ? "0" + d.getMinutes() : d.getMinutes()
								].join(":");
								const beforeValue = states[pre + "." + vin + ".history." + before] ? states[pre + "." + vin + ".history." + before].val : 0;
								const diff = state.val - parseInt(beforeValue);
								let quantity;
								if (id.indexOf("travelDataBlock.soc") !== -1) {
									if (this.config.capacity) {
										const capacityArray = this.config.capacity.split(", ");
										const capacity = parseFloat(capacityArray[this.vinArray.indexOf(vin)]);
										quantity = diff * capacity / 100;
									}
								} else {
									if (this.config.tank) {
										const tankArray = this.config.tank.split(", ");
										const tank = parseInt(tankArray[this.vinArray.indexOf(vin)]);
										quantity = diff * tank / 100;
									}
								}
								if (beforeValue < 99 && diff > 0) {
									const fuelObject = {
										start: beforeValue,
										end: state.val,
										date: dformat,
										diff: diff,
										quantity: quantity

									};

									const currenJsonHistoryState = states[pre + "." + vin + ".history." + jsonString];
									let currenJsonHistory = [];
									if (currenJsonHistory) {
										try {
											currenJsonHistory = JSON.parse(currenJsonHistoryState.val);
										} catch (erro) {
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
				if (id.indexOf("overallLockStatus") !== -1 || id.indexOf("switchDoors.isCommandPending") !== -1) {
					this.getStates("*", (err, states) => {


						if (states[pre + "." + vin + ".DOORLOCK_STATUS.switchDoors.isCommandPending"] && states[pre + "." + vin + ".DOORLOCK_STATUS.switchDoors.isCommandPending"].val) {
							if (states[pre + "." + vin + ".remote.DoorLock"]) {
								// if (states[pre + "." + vin + ".remote.DoorLock"].val) {
								// 	this.setState(vin + ".remote.DoorLockStatus", 3, true);
								// } else {
								// 	this.setState(vin + ".remote.DoorLockStatus", 2, true);
								// }
							}
							return;
						} else {
							if (id.indexOf("overallLockStatus") !== -1) {
								this.setState(vin + ".remote.DoorLock", state.val, true);
								//	this.setState(vin + ".remote.DoorLockStatus", state.val ? 1 : 0, true);
							} else {
								this.setState(vin + ".remote.DoorLock", states[pre + "." + vin + ".DOORLOCK_STATUS.overallLockStatus"], true);
								//	this.setState(vin + ".remote.DoorLockStatus", states[pre + "." + vin + ".DOORLOCK_STATUS.overallLockStatus"] ? 1 : 0, true);
							}
						}
					});
				}
				if (id.indexOf("isPrecondIllustrationActive") !== -1) {
					this.setState(vin + ".remote.Vorklimatisierung", state.val, true);
				}
				if (id.indexOf("DOORLOCK_STATUS.windowStatus") !== -1 || id.indexOf("switchWindows.isCommandPending") !== -1) {
					this.getStates("*", (err, states) => {
						const pre = this.name + "." + this.instance;

						if (states[pre + "." + vin + ".DOORLOCK_STATUS.switchWindows.isCommandPending"] && states[pre + "." + vin + ".DOORLOCK_STATUS.switchWindows.isCommandPending"].val) {
							if (states[pre + "." + vin + ".remote.WindowLock"]) {
								// if (states[pre + "." + vin + ".remote.WindowLock"].val) {
								// 	this.setState(vin + ".remote.WindowLockStatus", 3, true);
								// } else {
								// 	this.setState(vin + ".remote.WindowLockStatus", 2, true);
								// }
							}

							return;
						} else {

							if (states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusFrontLeft"] && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusFrontRight"] && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusRearLeft"] && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusRearRight"]) {
								if (states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusFrontLeft"].val === 2 && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusFrontRight"].val === 2 && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusRearLeft"].val === 2 && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusRearRight"].val === 2) {
									this.setState(vin + ".remote.WindowLock", true, true);
									//this.setState(vin + ".remote.WindowLockStatus", 1, true);
								} else {
									this.setState(vin + ".remote.WindowLock", false, true);
									//this.setState(vin + ".remote.WindowLockStatus", 0, true);
								}
							}
						}
					});

				}
			}
		} else {
			// The state was deleted

		}
	}
	getVehicleDetails() {
		return new Promise((resolve, reject) => {
			this.vinArray.forEach(vin => {

				this.log.debug("Details")
				request.get({
					jar: this.jar,
					url: "https://bff.meapp.secure.mercedes-benz.com/api/v2/dashboarddata/" + vin + "/vehicle",
					headers: {
						"Accept-Language": "de_DE",
						"Authorization": "Bearer " + this.config.atoken,
						"country_code": "DE",
						"User-Agent": "MercedesMe/2.13.2+639 (Android 5.1)"
					}
				}, (err, resp, body) => {
					if (err) {
						reject();
						return;
					}

					try {
						const data = JSON.parse(body);

						Object.keys(data["staticVehicleData"]).forEach((element) => {

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

							let value = data["staticVehicleData"][element];
							if (value && value.indexOf && value.indexOf(":") === -1) {
								value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
							}
							this.setState(vin + ".details." + element, value, true);
						});


						Object.keys(data["metadata"]["appSections"]).forEach((element) => {

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
						data["metadata"]["featureEnablements"].forEach((element) => {

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
						reject();

					}
				});
			});

		});
	}
	getVehicleStatus() {
		return new Promise((resolve, reject) => {
			this.vinArray.forEach(vin => {

				request.get({
					jar: this.jar,
					url: "https://vhs.meapp.secure.mercedes-benz.com/api/v1/vehicles/" + vin + "/dynamic?forceRefresh=true",
					headers: {
						"Accept-Language": "de_DE",
						"Authorization": "Bearer " + this.config.atoken,
						"country_code": "DE",
						"User-Agent": "MercedesMe/2.13.2+639 (Android 5.1)"
					}
				}, (err, resp, body) => {
					if (err) {
						reject();
						return;
					}

					try {

						const data = JSON.parse(body);

						Object.keys(data["dynamic"]).forEach((element) => {

							this.setObjectNotExists(vin + ".status." + element, {
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

							let value = data["dynamic"][element].value;
							if (value && value.indexOf && value.indexOf(":") === -1) {
								value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
							}
							this.setState(vin + ".status." + element, value, true);
						});


						Object.keys(data["aggregated"]["lastJourney"]).forEach((element) => {

							this.setObjectNotExists(vin + ".lastjourney." + element, {
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

							let value = data["aggregated"]["lastJourney"][element];
							if (value && value.indexOf && value.indexOf(":") === -1) {
								value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
							}
							this.setState(vin + ".lastjourney." + element, value, true);
						});

						resolve();

					} catch (error) {
						reject();

					}
				});
			});

		});
	}
	getVehicleLocation() {
		return new Promise((resolve, reject) => {
			this.vinArray.forEach(vin => {

				request.get({
					jar: this.jar,
					url: "https://vhs.meapp.secure.mercedes-benz.com/api/v1/vehicles/" + vin + "/location",
					headers: {
						"Accept-Language": "de_DE",
						"Authorization": "Bearer " + this.config.atoken,
						"country_code": "DE",
						"User-Agent": "MercedesMe/2.13.2+639 (Android 5.1)",
						"lat": "1",
						"lon": "1"
					}
				}, (err, resp, body) => {
					if (err) {
						reject();
						return;
					}

					try {
						const data = JSON.parse(body);
						Object.keys(data).forEach((element) => {
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
						reject();

					}
				});
			});

		});
	}
	getVehicles() {
		return new Promise((resolve, reject) => {
			request.get({
				jar: this.jar,
				url: "https://bff.meapp.secure.mercedes-benz.com/api/v2/appdata",
				headers: {
					"Accept-Language": "en_DE",
					"Authorization": "Bearer " + this.config.atoken
				}

			}, (err, resp, body) => {
				if (err) {
					reject();
				}
				this.log.debug(body);
				try {
					if (!JSON.parse(body).vehicles || JSON.parse(body).vehicles.length === 0) {
						this.log.warn("No vehicles found");
					}
					JSON.parse(body).vehicles.forEach(element => {
						if (element.fin !== null && element.fin !== "null") {
							this.vinArray.push(element.fin);
							this.setObjectNotExists(element.fin, {
								type: "state",
								common: {
									name: element.licensePlate,
									role: "indicator",
									type: "mixed",
									write: false,
									read: true
								},
								native: {}
							});
							for (const key in element) {
								this.setObjectNotExists(element.fin + ".general." + key, {
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
									this.setState(element.fin + ".general." + key, JSON.stringify(element[key]), true);
								} else {

									this.setState(element.fin + ".general." + key, element[key], true);
								}
							}
						}
					});


				} catch (error) {
					this.log.warn("Vehicles not found please start the mercedes me app: " + error);
				}
				this.vinArray = [...new Set(this.vinArray)];
				this.vinArray.forEach(element => {

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
							write: true,
						},
						native: {}
					});
					this.setObjectNotExists(element + ".remote.Vorklimatisierung", {
						type: "state",
						common: {
							name: "Precondition",
							type: "boolean",
							role: "indicator",
							write: true,
						},
						native: {}
					});
					this.setObjectNotExists(element + ".remote.Auxheat", {
						type: "state",
						common: {
							name: "Standheizung",
							type: "boolean",
							role: "indicator",
							write: true,
						},
						native: {}
					});

					this.setObjectNotExists(element + ".remote.DoorLock", {
						type: "state",
						common: {
							name: "Door Lock",
							type: "boolean",
							role: "indicator",
							write: true,
						},
						native: {}
					});
					this.setObjectNotExists(element + ".remote.WindowLock", {
						type: "state",
						common: {
							name: "Window Lock",
							type: "boolean",
							role: "indicator",
							write: true,
						},
						native: {}
					});
					// this.setObjectNotExists(element + ".remote.DoorLockStatus", {
					// 	type: "state",
					// 	common: {
					// 		name: "Door Lock Status",
					// 		type: "number",
					// 		role: "indicator",
					// 		write: false,
					// 	},
					// 	native: {}
					// });
					// this.setObjectNotExists(element + ".remote.WindowLockStatus", {
					// 	type: "state",
					// 	common: {
					// 		name: "Window Lock Status",
					// 		type: "number",
					// 		role: "indicator",
					// 		write: true,
					// 	},
					// 	native: {}
					// });
				});
				resolve();
			});

		});

	}
	login() {
		return new Promise((resolve, reject) => {
			this.loginApp().then(() => {
				//		resolve();
				this.loginSocketIo().then(() => {
					resolve();
				}, () => {
					reject();
				});

			}, () => {
				reject();
			});
		});

	}
	loginSocketIo() {
		return new Promise((resolve, reject) => {
			request.get({
				jar: this.jar,
				url: "https://frontend.meapp.secure.mercedes-benz.com/data-service/socket.io/?transport=polling"


			}, (err, resp, body) => {
				const consentForm = {};
				const dom = new JSDOM(body);
				if (!dom.window.document.querySelector("form")) {
					resolve();
					return;
				}
				for (const formElement of dom.window.document.querySelector("form").children) {
					if (formElement.type === "hidden") {
						consentForm[formElement.name] = formElement.value;
					}
				}


				request.post({
					jar: this.jar,
					url: "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/authorize/consent",
					form: consentForm,
					followAllRedirects: true
				}, (err, resp, body) => {
					if (!err) {
						const cookieLocation = this.jar._jar.store.idx["frontend.meapp.secure.mercedes-benz.com"]["/"];
						for (const key in cookieLocation) {
							this.socketIOCookie += key + "=" + cookieLocation[key].value + ";";
						}
						resolve();
					} else {
						reject();
					}
				});
			});

		});
	}

	connectToSocketIo(vin) {
		for (const sockets in this.socketConnections[vin]) {
			this.socketConnections[vin][sockets].close();
		}
		this.socketConnections[vin] = {};
		const doorSocket = null;
		this.socketIOCookie = "";
		const cookieLocation = this.jar._jar.store.idx["frontend.meapp.secure.mercedes-benz.com"]["/"];
		for (const key in cookieLocation) {
			if (key != "mvpClientId") {
				this.socketIOCookie += key + "=" + cookieLocation[key].value + ";";
			}
		}
		const zevSocket = io("https://frontend.meapp.secure.mercedes-benz.com", {
			path: "/data-service/socket.io",
			query: {
				currentCountryCode: "DE",
				currentVehicleId: vin,
				dp: "zev",
				locale: "de_DE"
			},
			extraHeaders: {
				cookie: this.socketIOCookie
			}
		});
		zevSocket.on("CHARGING_DATA", (data) => {
			this.addSocketData(vin, "CHARGING_DATA", data);
		});
		zevSocket.on("PRECONDITIONING_DATA", (data) => {
			this.addSocketData(vin, "PRECONDITIONING_DATA", data);
		});
		zevSocket.on("connect", () => {
			this.socketConnections[vin]["zev"] = zevSocket;
		});



		const mapSocket = io("https://frontend.meapp.secure.mercedes-benz.com", {
			path: "/data-service/socket.io",
			query: {
				currentCountryCode: "DE",
				currentVehicleId: vin,
				dp: "mapMap",
				locale: "de_DE"
			},
			extraHeaders: {
				cookie: this.socketIOCookie
			}
		});
		mapSocket.on("SET_MAP_DATA", (data) => {
			this.addSocketData(vin, "SET_MAP_DATA", data.vehicle);
		});
		mapSocket.on("connect", () => {
			this.socketConnections[vin]["map"] = mapSocket;
		});



		const remoteStatusJourneys = io("https://frontend.meapp.secure.mercedes-benz.com", {
			path: "/data-service/socket.io",
			query: {
				currentCountryCode: "DE",
				currentVehicleId: vin,
				dp: "remoteStatusJourneys",
				locale: "de_DE"
			},
			extraHeaders: {
				cookie: this.socketIOCookie
			}
		});
		remoteStatusJourneys.on("JOURNEYS_DATA", (data) => {
			this.addSocketData(vin, "JOURNEYS_DATA", data);
		});
		remoteStatusJourneys.on("connect", () => {
			this.socketConnections[vin]["journey"] = remoteStatusJourneys;
		});

		const remoteStatusMaintenance = io("https://frontend.meapp.secure.mercedes-benz.com", {
			path: "/data-service/socket.io",
			query: {
				currentCountryCode: "DE",
				currentVehicleId: vin,
				dp: "remoteStatusMaintenance",
				locale: "de_DE"
			},
			extraHeaders: {
				cookie: this.socketIOCookie
			}
		});
		remoteStatusMaintenance.on("MAINTENANCE_DATA", (data) => {
			this.addSocketData(vin, "MAINTENANCE_DATA", data);
		});
		remoteStatusMaintenance.on("connect", () => {
			this.socketConnections[vin]["remoteStatusMaintenance"] = remoteStatusMaintenance;
		});


		const remoteStatusEcoScore = io("https://frontend.meapp.secure.mercedes-benz.com", {
			path: "/data-service/socket.io",
			query: {
				currentCountryCode: "DE",
				currentVehicleId: vin,
				dp: "remoteStatusEcoScore",
				locale: "de_DE"
			},
			extraHeaders: {
				cookie: this.socketIOCookie
			}
		});
		remoteStatusEcoScore.on("SET_ECO_SCORE_DATA", (data) => {
			this.addSocketData(vin, "SET_ECO_SCORE_DATA", data.ecoDataBlock);
		});
		remoteStatusEcoScore.on("connect", () => {
			this.socketConnections[vin]["remoteStatusEcoScore"] = remoteStatusEcoScore;
		});

		this.connectDoorSockets(vin);

	}

	connectDoorSockets(vin) {
		return new Promise((resolve, reject) => {
			if (this.socketConnections[vin]["doorLock"]) {
				this.socketConnections[vin]["doorLock"].close();
			}
			const preDoorSocket = io("https://frontend.meapp.secure.mercedes-benz.com", {
				path: "/data-service/socket.io",
				query: {
					currentCountryCode: "DE",
					currentVehicleId: vin,
					dp: "remoteStatusDoorlock",
					locale: "de_DE"
				},
				extraHeaders: {
					cookie: this.socketIOCookie
				}
			});
			preDoorSocket.on("connect", () => {
				this.socketConnections[vin]["doorLock"] = preDoorSocket;

			});
			preDoorSocket.on("SET_DOORLOCK_DATA", (data) => {
				this.addSocketData(vin, "DOORLOCK_STATUS", data.doorlockStatus);
				resolve();
			});
			preDoorSocket.on("ACP_ERROR_UNAUTHORIZED", (data) => {
				this.log.debug("ACP_ERROR");
				this.reAuth();
			});
			// NEEDED FOR OPENING DOOR VIA SOCKET
			preDoorSocket.on("CLIENT_ID", (data) => {
				this.log.debug("CLIENT_ID");
				preDoorSocket.close();
				const ck = request.cookie("mvpClientId");
				ck.value = data.id;
				ck.key = "mvpClientId";
				ck.secure = true;
				this.jar.setCookie(ck, "https://frontend.meapp.secure.mercedes-benz.com", function (error, cookie) {});
				this.socketIOCookie += "mvpClientId=" + data.id;
				const doorSocket = io("https://frontend.meapp.secure.mercedes-benz.com", {
					path: "/data-service/socket.io",
					query: {
						currentCountryCode: "DE",
						currentVehicleId: vin,
						dp: "remoteStatusDoorlock",
						locale: "de_DE"
					},
					extraHeaders: {
						cookie: this.socketIOCookie
					}
				});
				request.get({
					jar: this.jar,
					url: "https://frontend.meapp.secure.mercedes-benz.com/reauthenticate",
					followAllRedirects: true
				}, function (err, resp, body) {});
				doorSocket.on("connect", () => {
					this.socketConnections[vin]["doorLock"].close(); //close pre
					this.socketConnections[vin]["doorLock"] = doorSocket;
				});
				doorSocket.on("SET_DOORLOCK_DATA", (data) => {
					this.addSocketData(vin, "DOORLOCK_STATUS", data.doorlockStatus);
					resolve();
				});
				doorSocket.on("ACP_ERROR_UNAUTHORIZED", (data) => {
					this.log.debug("ACP_ERROR");
					this.reAuth();
				});
			});
		});
	}

	addSocketData(vin, name, data) {
		this.log.debug("Parse: " + name + " " + vin);
		try {
			//const data = JSON.parse(dataString);
			this.setObjectNotExists(vin + "." + name, {
				type: "state",
				common: {
					name: "Realtime values via push stream",
					type: "mixed",
					role: "indicator",
				},
				native: {}
			});
			for (const element in data) {

				this.setObjectNotExists(vin + "." + name + "." + element, {
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
				if (typeof value === "object") {

					for (const subElement in value) {

						this.setObjectNotExists(vin + "." + name + "." + element + "." + subElement, {
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
						let subValue = value[subElement]; {
							if (Array.isArray(subValue)) {
								this.setState(vin + "." + name + "." + element + "." + subElement, JSON.stringify(subValue), true);
							} else {
								if (subValue && subValue.indexOf && subValue.indexOf(":") === -1) {
									subValue = isNaN(parseFloat(subValue)) === true ? subValue : parseFloat(subValue);
								}
							}
							this.setState(vin + "." + name + "." + element + "." + subElement, subValue, true);

						}
					}
				} else {
					if (Array.isArray(value)) {
						this.setState(vin + "." + name + "." + element, JSON.stringify(value), true);
					} else {
						if (value && value.indexOf && value.indexOf(":") === -1) {
							value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
						}
					}
					this.setState(vin + "." + name + "." + element, value, true);
				}
			}
		} catch (error) {
			this.log.error(error);
			this.log.debug(JSON.stringify(data));
		}
	}
	reAuth() {
		return new Promise((resolve, reject) => {

			request.get({
				jar: this.jar,
				url: "https://frontend.meapp.secure.mercedes-benz.com/reauthenticate",
				followAllRedirects: true


			}, (err, resp, body) => {
				const dom = new JSDOM(body);
				const form = {};
				const formLogin = dom.window.document.querySelector("#formLogin");
				let url = "https://login.secure.mercedes-benz.com/wl/login";
				if (formLogin) {
					this.log.debug("reAuthLogin");
					for (const formElement of dom.window.document.querySelector("#formLogin").children) {
						if (formElement.type === "hidden") {
							form[formElement.name] = formElement.value;
						}
					}
					form["username"] = this.config.mail;
					form["password"] = this.config.password;
					form["remember-me"] = 1;
				} else {

					this.log.debug("reAuthNoForm");
					url = "https://frontend.meapp.secure.mercedes-benz.com/reauthenticate";
				}
				request.post({
					jar: this.jar,
					url: url,
					form: form,
					followAllRedirects: true
				}, (err, resp, body) => {

					this.log.debug("reAuthConsent");
					if (!this.jar._jar.store.idx["login.secure.mercedes-benz.com"]["/"] || !this.jar._jar.store.idx["login.secure.mercedes-benz.com"]["/"].SSOTOKEN) {
						this.log.error("Login Failed. Password wrong or manual login required.");
						reject();
					}

					const consentForm = {};
					const dom = new JSDOM(body);
					if (!dom.window.document.querySelector("form")) {
						resolve();
						return;
					}
					for (const formElement of dom.window.document.querySelector("form").children) {
						if (formElement.type === "hidden") {
							consentForm[formElement.name] = formElement.value;
						}
					}
					request.post({
						jar: this.jar,
						url: "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/authorize/consent",
						form: consentForm,
						followAllRedirects: true
					}, (err, resp, body) => {
						this.log.debug("SocketIOCookies:" + this.socketIOCookie);
						this.socketIOCookie = "";
						const cookieLocation = this.jar._jar.store.idx["frontend.meapp.secure.mercedes-benz.com"]["/"];
						for (const key in cookieLocation) {
							this.socketIOCookie += key + "=" + cookieLocation[key].value + ";";
						}

						this.log.debug(this.socketIOCookie);
						this.vinArray.forEach(element => {
							if (this.socketConnections[element]["doorLock"]) {
								this.socketConnections[element]["doorLock"].io.engine.extraHeaders.cookie = this.socketIOCookie;
							}
						});

						if (!err) {
							resolve();
						} else {
							reject();
						}
					});
				});

			});
		});
	}
	refreshToken() {
		return new Promise((resolve, reject) => {
			this.log.debug("refreshToken")
			const clientID = "4390b0db-4be9-40e9-9147-5845df537beb";
			const redirect = "https://cgw.meapp.secure.mercedes-benz.com/endpoint/api/v1/redirect";
			request.post({
				jar: this.jar,
				url: "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/token?grant_type=refresh_token&redirect_uri=" + redirect + "&client_id=" + clientID + "&refresh_token=" + this.config.rtoken,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'User-Agent': 'okhttp/3.9.0',
				},
				followAllRedirects: false
			}, (err, resp, body) => {
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
					this.log.debug("refresh result: " + body);
					reject();
				}
				if (!err) {
					resolve();
				} else {
					reject();
				}
			});
		});


	}
	loginApp() {
		return new Promise((resolve, reject) => {
			this.log.debug("Login");
			const [code_verifier, codeChallange] = this.getCodeChallenge();

			this.log.debug(codeChallange);
			const clientID = "4390b0db-4be9-40e9-9147-5845df537beb";
			const scope = 'mma:backend:all openid ciam-uid profile email';
			const app_id = "MCMAPP.FE_PROD";
			const userAgent = 'Mozilla/5.0 (Linux; Android 5.1; Google Nexus 5 Build/LMY47D) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/39.0.0.0 Mobile Safari/537.36';
			const redirect = "https://cgw.meapp.secure.mercedes-benz.com/endpoint/api/v1/redirect";
			const url01 = "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/authorize?response_type=code&client_id=" + clientID + "&code_challenge=" + codeChallange + "&code_challenge_method=S256&scope=" + scope + "&redirect_uri=" + redirect;
			this.log.debug(url01);
			request.get({
				jar: this.jar,
				url: url01,
				headers: {
					'Accept-Language': "en_DE",
					'X-Requested-With': 'com.daimler.mm.android',
					'Accept': '*/*',
					'User-Agent': userAgent
				}

			}, (err, resp, body) => {
				if (err) {
					reject();
				}
				request.get({
					jar: this.jar,
					url: "https://login.secure.mercedes-benz.com/wl/third-party-cookie?app-id=" + app_id,
					followAllRedirects: true,
					headers: {
						'Accept-Language': "en_DE",
						'X-Requested-With': 'com.daimler.mm.android',
						'Accept': '*/*',
						'User-Agent': userAgent,
						'Origin': "https://login.secure.mercedes-benz.com",
						'Cache-Control': 'max-age=0',
						'Content-Type': 'application/x-www-form-urlencoded'
					}


				}, (err, resp, body) => {
					this.log.debug("third submit result: " + body);
				});

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
				request.post({
					jar: this.jar,
					url: url,
					form: form,

					headers: {
						'Accept-Language': "en_DE",
						'X-Requested-With': 'com.daimler.mm.android',
						'Accept': '*/*',
						'User-Agent': userAgent,
						'Origin': "https://login.secure.mercedes-benz.com",
						'Cache-Control': 'max-age=0',
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					followAllRedirects: true
				}, (err, resp, body) => {

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
					request.post({
						jar: this.jar,
						url: "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/authorize/consent",
						form: consentForm,
						headers: {
							'Accept-Language': "en_DE",
							'Accept': '*/*',
							'Cache-Control': 'max-age=0',
							'Content-Type': 'application/x-www-form-urlencoded',
							'Origin': "https://login.secure.mercedes-benz.com",
							'User-Agent': userAgent,
							'Referer': 'https://login.secure.mercedes-benz.com/wl/login',
							'X-Requested-With': 'com.daimler.mm.android'
						},
						followAllRedirects: false
					}, (err, resp, body) => {

						if (resp.headers.location) {
							const code = resp.headers.location.split("=")[1];
							this.log.debug("consent result: " + code);
							request.post({
								jar: this.jar,
								url: "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/token?grant_type=authorization_code&redirect_uri=" + redirect + "&client_id=" + clientID + "&code_verifier=" + code_verifier + "&code=" + code,
								form: consentForm,
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
									'User-Agent': 'okhttp/3.9.0',
								},
								followAllRedirects: false
							}, (err, resp, body) => {
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
							});
						}
					});
				});
			});

		});


	}
	getCodeChallenge() {
		let hash = "";
		let result = "";
		while (hash === "" || hash.indexOf("+") !== -1 || hash.indexOf("/") !== -1 || hash.indexOf("=") !== -1 || result.indexOf("+") !== -1 || result.indexOf("/") !== -1) {
			const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			result = "";
			for (let i = 64; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
			result = Buffer.from(result).toString('base64');
			result = result.replace(/=/g, '');
			hash = crypto.createHash('sha256').update(result).digest('base64');
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
	module.exports = (options) => new Mercedesme(options);
} else {
	// otherwise start the instance directly
	new Mercedesme();
}
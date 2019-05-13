"use strict";
/*
 * Created with @iobroker/create-adapter v1.12.1
 */

const utils = require("@iobroker/adapter-core");
const io = require("socket.io-client");
const request = require("request");
const jsdom = require("jsdom");
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

			if (this.config.manuelvin) {
				this.vinArray = this.config.manuelvin.split(/[ ,]+/);
			}
			this.getVehicles().then(() => {
				this.vinArray.forEach((vin) => {
					this.log.debug("Start " + vin);
					this.connectToSocketIo(vin);
				});
				this.getVehicleDetails().then(() => {

				}, () => {
					this.log.error("Error getting Vehicle Details via VHP");
				});
				this.getVehicleLocation().then(() => {}, () => {
					this.log.error("Error getting Vehicle Location via VHP");
				});
				this.getVehicleInfos().then(() => {}, () => {
					this.log.error("Error getting Vehicle Infos via VHP");
				});
				this.interval = setInterval(() => {
					this.getVehicleInfos().then(() => {}, () => {
						this.log.debug("Error getting Vehicle Infos via VHP");
						this.loginVHPMBCON();
					});
					this.getVehicleLocation().then(() => {}, () => {
						this.log.debug("Error getting Vehicle Location via VHP");
						this.loginVHPMBCON();
					});
				}, this.config.interval * 1000);
				this.reAuthInterval = setInterval(() => {
					this.reAuth().then(() => {
						this.connectToSocketIo();
					}, () => {});
				}, 60 * 60 * 1000); //1h

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
				this.reAuth().then(() => {
					if (id.indexOf("remote") !== -1 && !this.socketConnections[vin]) {
						this.log.warn(JSON.stringify(this.socketConnections));
						this.log.warn("No socket connection found for " + vin);
						return;
					}
					if (id.indexOf("Vorklimatisierung") !== -1) {
						let command = "PRECOND_START";
						if (!state.val || state.val === "false") {
							command = "PRECOND_STOP";
						}

						this.socketConnections[vin]["zev"].emit("command", {
							"commandId": command,
							"data": null
						});
					}
					if (id.indexOf("DoorLock") !== -1) {
						if (!state.val || state.val === "false") {
							this.socketConnections[vin]["doorLock"].emit("command", {
								"commandId": "DOORS_UNLOCK",
								"data": {
									"message": "QUERY_STARTED_UNLOCK",
									"sliderPosition": 1
								}
							});
						} else {
							this.socketConnections[vin]["doorLock"].emit("command", {
								"commandId": "DOORS_LOCK",
								"data": {
									"message": "QUERY_STARTED_LOCK",
									"sliderPosition": 0
								}
							});
						}
					}

					if (id.indexOf("WindowLock") !== -1) {
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
					}
				}, () => {
					this.log.error("ReAuth Error");
				});
			} else {
				//ACK Values
				if (id.indexOf("overallLockStatus") !== -1 || id.indexOf("switchDoors.isCommandPending") !== -1) {
					this.getStates("*", (err, states) => {
						const pre = this.name + "." + this.instance;

						if (states[pre + "." + vin + ".DOORLOCK_STATUS.switchDoors.isCommandPending"] && states[pre + "." + vin + ".DOORLOCK_STATUS.switchDoors.isCommandPending"].val) {
							return;
						} else {
							if (id.indexOf("overallLockStatus") !== -1) {
								this.setState(vin + ".remote.DoorLock", state.val, true);
							} else {
								this.setState(vin + ".remote.DoorLock", states[pre + "." + vin + ".DOORLOCK_STATUS.overallLockStatus"], true);
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
							return;
						} else {

							if (states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusFrontLeft"] && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusFrontRight"] && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusRearLeft"] && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusRearRight"]) {
								if (states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusFrontLeft"].val === 2 && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusFrontRight"].val === 2 && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusRearLeft"].val === 2 && states[pre + "." + vin + ".DOORLOCK_STATUS.windowStatusRearRight"].val === 2) {
									this.setState(vin + ".remote.WindowLock", true, true);
								} else {
									this.setState(vin + ".remote.WindowLock", false, true);
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
	getVehicleInfos() {
		return new Promise((resolve, reject) => {
			this.vinArray.forEach(vin => {
				this.log.debug("Get vehicle status");
				request.get({
					jar: this.jar,
					url: "https://app.secure.mercedes-benz.com/backend/vehicles/" + vin + "/status"
				}, (err, resp, body) => {
					if (err) {
						reject();
					}
					try {
						this.setObjectNotExists(vin + ".data", {
							type: "state",
							common: {
								name: "Values from update interval",
								type: "mixed",
								role: "indicator",
								write: false,
								read: true
							},
							native: {}
						});
						const data = JSON.parse(body).data;
						for (const element in data) {
							if (data[element].status === 4) {
								//return;
							}
							this.setObjectNotExists(vin + ".data." + element, {
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

							let value = data[element].value;
							if (value && value.indexOf && value.indexOf(":") === -1) {
								value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
							}
							this.setState(vin + ".data." + element, value, true);
						}
						resolve();
					} catch (error) {
						this.log.debug(body)
						reject();
					}
				});
			});

		});
	}

	getVehicleDetails() {
		return new Promise((resolve, reject) => {
			this.vinArray.forEach(vin => {


				request.get({
					jar: this.jar,
					url: "https://app.secure.mercedes-benz.com/backend/vehicles/" + vin + "/converant"
				}, (err, resp, body) => {
					if (err) {
						reject();
						return;
					}

					try {
						const data = JSON.parse(body);
						for (const element in data) {
							if (data[element].status === 4) {
								//return;
							}
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

							let value = data[element];
							if (value && value.indexOf && value.indexOf(":") === -1) {
								value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
							}
							this.setState(vin + ".details." + element, value, true);
						}
						resolve();
					} catch (error) {
						reject()

					}
				});
			});

		});
	}

	getVehicleLocation() {
		return new Promise((resolve, reject) => {
			this.vinArray.forEach(vin => {
				this.setObjectNotExists(vin + ".location", {
					type: "state",
					common: {
						name: "Location from update interval",
						type: "mixed",
						role: "indicator",
						write: false,
						read: true
					},
					native: {}
				});
				request.get({
					jar: this.jar,
					url: "https://app.secure.mercedes-benz.com/backend/vehicles/" + vin + "/location/v2"
				}, (err, resp, body) => {
					if (err) {
						reject();
					}
					try {


						const data = JSON.parse(body).data;
						for (const element in data) {
							if (data[element].status === 4) {
								//return;
							}
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

							let value = data[element].value;
							if (value && value.indexOf && value.indexOf(":") === -1) {
								value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
							}
							this.setState(vin + ".location." + element, value, true);
						}
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
				url: "https://app.secure.mercedes-benz.com/backend/users/identity"


			}, (err, resp, body) => {
				if (err) {
					reject();
				}
				this.log.debug(body)
				if (!JSON.parse(body).vehicles || JSON.parse(body).vehicles.length === 0) {
					this.log.warn("No vehicles found");
				}
				JSON.parse(body).vehicles.forEach(element => {
					this.vinArray.push(element.vin);
					this.setObjectNotExists(element.vin, {
						type: "state",
						common: {
							name: element.licenceplate,
							role: "indicator",
							type: "mixed",
							write: false,
							read: true
						},
						native: {}
					});
					this.setObjectNotExists(element.vin + ".remote", {
						type: "state",
						common: {
							name: "Remote controls",
							write: true,
						},
						native: {}
					});
					this.setObjectNotExists(element.vin + ".remote.Vorklimatisierung", {
						type: "state",
						common: {
							name: "Precondition",
							type: "boolean",
							role: "indicator",
							write: true,
						},
						native: {}
					});

					this.setObjectNotExists(element.vin + ".remote.DoorLock", {
						type: "state",
						common: {
							name: "Door Lock",
							type: "boolean",
							role: "indicator",
							write: true,
						},
						native: {}
					});
					this.setObjectNotExists(element.vin + ".remote.WindowLock", {
						type: "state",
						common: {
							name: "Window Lock",
							type: "boolean",
							role: "indicator",
							write: true,
						},
						native: {}
					});

					for (const key in element) {
						this.setObjectNotExists(element.vin + ".general." + key, {
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
							this.setState(element.vin + ".general." + key, JSON.stringify(element[key]), true);
						} else {

							this.setState(element.vin + ".general." + key, element[key], true);
						}
					}

				});
				resolve();
			});
		});

	}
	login() {
		return new Promise((resolve, reject) => {
			this.loginVHPMBCON().then(() => {
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
	loginVHPMBCON() {
		return new Promise((resolve, reject) => {
			this.log.debug("Login")

			request.get({
				jar: this.jar,
				url: "https://app.secure.mercedes-benz.com//session/login?app-id=VHPMBCON.PRODEC",

			}, (err, resp, body) => {
				this.log.debug("app Login: " + body)
				const dom = new JSDOM(body);
				const form = {};
				let url = "https://login.secure.mercedes-benz.com/wl/login";
				if (dom.window.document.querySelector("#formLogin")) {

					for (const formElement of dom.window.document.querySelector("#formLogin").children) {
						if (formElement.type === "hidden") {
							form[formElement.name] = formElement.value;
						}
					}

					if (!this.config.mail || !this.config.password) {
						this.log.error("Missing mail or password");
						reject();
					}
					this.log.debug(JSON.stringify(form));
					form["username"] = this.config.mail;
					form["password"] = this.config.password;
					form["remember-me"] = 1;
				} else {
					url = "https://app.secure.mercedes-benz.com//session/login?app-id=VHPMBCON.PRODEC"
				}
				request.post({
					jar: this.jar,
					url: url,
					form: form,
					followAllRedirects: true
				}, (err, resp, body) => {

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

					this.log.debug("consent form: " + JSON.stringify(consentForm));
					request.post({
						jar: this.jar,
						url: "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/authorize/consent",
						form: consentForm,
						followAllRedirects: true
					}, (err, resp, body) => {
						this.log.debug("consent result: " + body);
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
		let doorSocket = null;
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
			this.socketConnections[vin]["preDoorLock"] = preDoorSocket;
		});

		preDoorSocket.on("CLIENT_ID", (data) => {
			this.log.debug("CLIENT_ID");
			preDoorSocket.close();
			const ck = request.cookie("mvpClientId");
			ck.value = data.id;
			ck.key = "mvpClientId";
			ck.secure = true;
			this.jar.setCookie(ck, "https://frontend.meapp.secure.mercedes-benz.com", function (error, cookie) {

			});
			this.socketIOCookie += "mvpClientId=" + data.id;
			doorSocket = io("https://frontend.meapp.secure.mercedes-benz.com", {
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
				this.socketConnections[vin]["doorLock"] = doorSocket;
			});
			doorSocket.on("SET_DOORLOCK_DATA", (data) => {

				this.addSocketData(vin, "DOORLOCK_STATUS", data.doorlockStatus);
			});
			doorSocket.on("ACP_ERROR_UNAUTHORIZED", (data) => {
				this.log.debug("ACP_ERROR");
				this.reAuth();
			});
		});

	}

	addSocketData(vin, name, data) {
		this.log.debug("Parse: " + name + " " + vin)
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
				if (typeof value === 'object') {

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
			this.log.error(error)
			this.log.debug(JSON.stringify(data))
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
					request.post({
						jar: this.jar,
						url: "https://login.secure.mercedes-benz.com/wl/login",
						form: form,
						followAllRedirects: true
					}, (err, resp, body) => {
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
							this.log.debug(this.socketIOCookie);
							this.socketIOCookie = "";
							const cookieLocation = this.jar._jar.store.idx["frontend.meapp.secure.mercedes-benz.com"]["/"];
							for (const key in cookieLocation) {
								this.socketIOCookie += key + "=" + cookieLocation[key].value + ";";
							}

							this.log.debug(this.socketIOCookie);
							this.socketConnections[this.vinArray[0]]["doorLock"].io.engine.extraHeaders.cookie = this.socketIOCookie;
							if (!err) {
								resolve();
							} else {
								reject();
							}
						});
					});
				} else {
					this.log.debug(body);
					resolve();
				}
			});
		});
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
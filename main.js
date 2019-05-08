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
		this.interval = null;
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
				this.getVehicleDetails().then(() => {}, () => {
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
						this.log.error("Error getting Vehicle Infos via VHP");
					});
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
			// The state was changed

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
					const data = JSON.parse(body).data;
					for (const element in data) {
						if (data[element].status === 4) {
							//return;
						}
						this.setObjectNotExists(vin + ".data." + element, {
							type: 'state',
							common: {
								name: element,
								type: 'mixed',
								role: 'indicator',
								write: false,
								read: true
							},
							native: {}
						});

						let value = data[element].value;
						if (value && value.indexOf && value.indexOf(":") === -1) {
							value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
						}
						this.setState(vin + ".data." + element, value);
					}
					resolve();
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
					}
					const data = JSON.parse(body);
					for (const element in data) {
						if (data[element].status === 4) {
							//return;
						}
						this.setObjectNotExists(vin + ".details." + element, {
							type: 'state',
							common: {
								name: element,
								type: 'mixed',
								role: 'indicator',
								write: false,
								read: true
							},
							native: {}
						});

						let value = data[element];
						if (value && value.indexOf && value.indexOf(":") === -1) {
							value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
						}
						this.setState(vin + ".details." + element, value);
					}
					resolve();
				});
			});

		});
	}

	getVehicleLocation() {
		return new Promise((resolve, reject) => {
			this.vinArray.forEach(vin => {
				request.get({
					jar: this.jar,
					url: "https://app.secure.mercedes-benz.com/backend/vehicles/" + vin + "/location/v2"
				}, (err, resp, body) => {
					if (err) {
						reject();
					}
					const data = JSON.parse(body).data;
					for (const element in data) {
						if (data[element].status === 4) {
							//return;
						}
						this.setObjectNotExists(vin + ".location." + element, {
							type: 'state',
							common: {
								name: element,
								type: 'mixed',
								role: 'indicator',
								write: false,
								read: true
							},
							native: {}
						});

						let value = data[element].value;
						if (value && value.indexOf && value.indexOf(":") === -1) {
							value = isNaN(parseFloat(value)) === true ? value : parseFloat(value);
						}
						this.setState(vin + ".location." + element, value);
					}
					resolve();
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
				if (JSON.parse(body).vehicles.length === 0) {
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
					for (const key in element) {
						this.setObjectNotExists(element.vin + ".general." + key, {
							type: 'state',
							common: {
								name: key,
								type: 'mixed',
								role: 'indicator',
								write: false,
								read: true
							},
							native: {}
						});
						if (Array.isArray(element[key])) {
							this.setState(element.vin + ".general." + key, JSON.stringify(element[key]));
						} else {

							this.setState(element.vin + ".general." + key, element[key]);
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
				resolve();
				// this.loginSocketIo().then(() => {
				// 	resolve();
				// }, () => {
				// 	reject();
				// });
			}, () => {
				reject();
			});
		});

	}
	loginVHPMBCON() {
		return new Promise((resolve, reject) => {
			request.get({
				jar: this.jar,
				url: "https://app.secure.mercedes-benz.com//session/login?app-id=VHPMBCON.PRODEC",

			}, (err, resp, body) => {

				const dom = new JSDOM(body);
				const form = {};
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
					for (const formElement of dom.window.document.querySelector("form").children) {
						if (formElement.type === "hidden") {
							consentForm[formElement.name] = formElement.value;
						}
					}


					this.log.debug(JSON.stringify(consentForm));
					request.post({
						jar: this.jar,
						url: "https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/authorize/consent",
						form: consentForm,
						followAllRedirects: true
					}, (err, resp, body) => {
						this.log.debug(body)
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
						if (cookieLocation && cookieLocation.MVPSESSIONID && cookieLocation.__VCAP_ID__ && cookieLocation["MVP-JSESSIONID"]) {
							this.socketIOCookie = "MVPSESSIONID=" + cookieLocation.MVPSESSIONID.value;
							this.socketIOCookie += ";__VCAP_ID__=" + cookieLocation.__VCAP_ID__.value;
							this.socketIOCookie += ";MVP-JSESSIONID=" + cookieLocation["MVP-JSESSIONID"].value;
						} else {
							reject();
						}
						resolve();
					} else {
						reject();
					}
				});
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
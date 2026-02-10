// source: vehicle-events.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var service$activation_pb = require('./service-activation_pb.js');
goog.object.extend(proto, service$activation_pb);
var user$events_pb = require('./user-events_pb.js');
goog.object.extend(proto, user$events_pb);
var vehicle$commands_pb = require('./vehicle-commands_pb.js');
goog.object.extend(proto, vehicle$commands_pb);
var protos_pb = require('./protos_pb.js');
goog.object.extend(proto, protos_pb);
var vehicleapi_pb = require('./vehicleapi_pb.js');
goog.object.extend(proto, vehicleapi_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.proto.AcknowledgeDataChangeEvent', null, global);
goog.exportSymbol('proto.proto.AcknowledgePreferredDealerChange', null, global);
goog.exportSymbol('proto.proto.AcknowledgeVEPRequest', null, global);
goog.exportSymbol('proto.proto.AcknowledgeVEPUpdatesByVIN', null, global);
goog.exportSymbol('proto.proto.AcknowledgeVehicleUpdated', null, global);
goog.exportSymbol('proto.proto.ActionList', null, global);
goog.exportSymbol('proto.proto.AmgStageModeError', null, global);
goog.exportSymbol('proto.proto.AmgStageModeState', null, global);
goog.exportSymbol('proto.proto.AttributeStatus', null, global);
goog.exportSymbol('proto.proto.BatteryHealth', null, global);
goog.exportSymbol('proto.proto.ChargeFlaps', null, global);
goog.exportSymbol('proto.proto.ChargeFlapsEntry', null, global);
goog.exportSymbol('proto.proto.ChargeFlapsPositionState', null, global);
goog.exportSymbol('proto.proto.ChargeInlets', null, global);
goog.exportSymbol('proto.proto.ChargeInletsEntry', null, global);
goog.exportSymbol('proto.proto.ChargeInletsEntry.ChargeInletsCouplerState', null, global);
goog.exportSymbol('proto.proto.ChargeInletsEntry.ChargeInletsLockState', null, global);
goog.exportSymbol('proto.proto.ChargeProgram', null, global);
goog.exportSymbol('proto.proto.ChargeProgramParameters', null, global);
goog.exportSymbol('proto.proto.ChargeProgramsValue', null, global);
goog.exportSymbol('proto.proto.ChargingBreakClockTimerActivationState', null, global);
goog.exportSymbol('proto.proto.ChargingBreakClockTimerEntry', null, global);
goog.exportSymbol('proto.proto.ChargingBreakClockTimerValue', null, global);
goog.exportSymbol('proto.proto.ChargingCompatibilityError', null, global);
goog.exportSymbol('proto.proto.ChargingFlapErrorDetails', null, global);
goog.exportSymbol('proto.proto.ChargingPowerControl', null, global);
goog.exportSymbol('proto.proto.ChargingPowerControl.ChargingStatusForPowerControl', null, global);
goog.exportSymbol('proto.proto.ChargingPowerRestriction', null, global);
goog.exportSymbol('proto.proto.ChargingPowerRestrictions', null, global);
goog.exportSymbol('proto.proto.ChargingPredictionDepartureTime', null, global);
goog.exportSymbol('proto.proto.ChargingPredictionSoc', null, global);
goog.exportSymbol('proto.proto.ChargingScheduleActive', null, global);
goog.exportSymbol('proto.proto.ChargingScheduleActive.ChargingScheduleActiveOfflineMode', null, global);
goog.exportSymbol('proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule', null, global);
goog.exportSymbol('proto.proto.ChargingScheduleActive.ChargingScheduleActiveUseCaseId', null, global);
goog.exportSymbol('proto.proto.ChargingScheduleRequested', null, global);
goog.exportSymbol('proto.proto.ChargingScheduleRequested.ChargingScheduleUseCaseId', null, global);
goog.exportSymbol('proto.proto.ChargingScheduleRequested.ScheduleIdStatus', null, global);
goog.exportSymbol('proto.proto.ChargingScheduleUseCaseId', null, global);
goog.exportSymbol('proto.proto.ChargingStopErrorDetails', null, global);
goog.exportSymbol('proto.proto.ChargingTimer', null, global);
goog.exportSymbol('proto.proto.ChargingTimerEntry', null, global);
goog.exportSymbol('proto.proto.ChargingTimerEntry.ChargingTimerAction', null, global);
goog.exportSymbol('proto.proto.ChildPresenceDetectionWarningLastEvent', null, global);
goog.exportSymbol('proto.proto.ChildPresenceDetectionWarningLevel', null, global);
goog.exportSymbol('proto.proto.ConfigurePingInterval', null, global);
goog.exportSymbol('proto.proto.DataChangeEvent', null, global);
goog.exportSymbol('proto.proto.DcChargingProfile', null, global);
goog.exportSymbol('proto.proto.DebugMessage', null, global);
goog.exportSymbol('proto.proto.EcoHistogramBin', null, global);
goog.exportSymbol('proto.proto.EcoHistogramValue', null, global);
goog.exportSymbol('proto.proto.EmergencyPowerSupply', null, global);
goog.exportSymbol('proto.proto.EvsePairingState', null, global);
goog.exportSymbol('proto.proto.ExteriorMonitoringStatus', null, global);
goog.exportSymbol('proto.proto.HvBatteryPrecondAvailability', null, global);
goog.exportSymbol('proto.proto.HvBatteryPrecondRequestState', null, global);
goog.exportSymbol('proto.proto.HvBatteryPrecondState', null, global);
goog.exportSymbol('proto.proto.HvBatteryPrecondStatesCharging', null, global);
goog.exportSymbol('proto.proto.HvBatteryPrecondStatesDischarging', null, global);
goog.exportSymbol('proto.proto.InteriorMonitoringStatus', null, global);
goog.exportSymbol('proto.proto.InteriorProtectionActivationStatus', null, global);
goog.exportSymbol('proto.proto.InteriorProtectionSelectionStatus', null, global);
goog.exportSymbol('proto.proto.KeylineActivationStateValue', null, global);
goog.exportSymbol('proto.proto.MainCategory', null, global);
goog.exportSymbol('proto.proto.Method', null, global);
goog.exportSymbol('proto.proto.NextDepartureTimeValue', null, global);
goog.exportSymbol('proto.proto.PanicAlarmActive', null, global);
goog.exportSymbol('proto.proto.ParkCollisionActivationStatus', null, global);
goog.exportSymbol('proto.proto.ParkCollisionInactiveReason', null, global);
goog.exportSymbol('proto.proto.ParkCollisionPictureTransferStatus', null, global);
goog.exportSymbol('proto.proto.ParkCollisionSelectionStatus', null, global);
goog.exportSymbol('proto.proto.ParkEventPictureSelectionStatus', null, global);
goog.exportSymbol('proto.proto.ParkEventPictureTransmissionStatus', null, global);
goog.exportSymbol('proto.proto.PayloadValue', null, global);
goog.exportSymbol('proto.proto.PayloadValue.MsgCase', null, global);
goog.exportSymbol('proto.proto.PerformanceLimitationModeStatus', null, global);
goog.exportSymbol('proto.proto.PictureRecordingStatus', null, global);
goog.exportSymbol('proto.proto.PrecondOperabilityState', null, global);
goog.exportSymbol('proto.proto.PrecondOperabilityState.PrecondErrorState', null, global);
goog.exportSymbol('proto.proto.PrecondState', null, global);
goog.exportSymbol('proto.proto.PrecondStateType', null, global);
goog.exportSymbol('proto.proto.PreferredDealerChange', null, global);
goog.exportSymbol('proto.proto.PushMessage', null, global);
goog.exportSymbol('proto.proto.PushMessage.MsgCase', null, global);
goog.exportSymbol('proto.proto.RemoteUpdateStartStatus', null, global);
goog.exportSymbol('proto.proto.ScheduleIdStatus', null, global);
goog.exportSymbol('proto.proto.Scope', null, global);
goog.exportSymbol('proto.proto.Scopes', null, global);
goog.exportSymbol('proto.proto.SocCalibrationRequest', null, global);
goog.exportSymbol('proto.proto.SohCalibrationNotifications', null, global);
goog.exportSymbol('proto.proto.SohCalibrationPlanned', null, global);
goog.exportSymbol('proto.proto.SohCalibrationRequest', null, global);
goog.exportSymbol('proto.proto.SohCalibrationRequired', null, global);
goog.exportSymbol('proto.proto.SohCalibrationState', null, global);
goog.exportSymbol('proto.proto.SohFavorableConditions', null, global);
goog.exportSymbol('proto.proto.SpecificCategory', null, global);
goog.exportSymbol('proto.proto.SpeedAlertConfiguration', null, global);
goog.exportSymbol('proto.proto.SpeedAlertConfigurationValue', null, global);
goog.exportSymbol('proto.proto.StateOfCharge', null, global);
goog.exportSymbol('proto.proto.StateOfChargeProfileValue', null, global);
goog.exportSymbol('proto.proto.Status', null, global);
goog.exportSymbol('proto.proto.SubCategory', null, global);
goog.exportSymbol('proto.proto.Tariff', null, global);
goog.exportSymbol('proto.proto.TemperaturePoint', null, global);
goog.exportSymbol('proto.proto.TemperaturePointsValue', null, global);
goog.exportSymbol('proto.proto.TowProtectionActivationStatus', null, global);
goog.exportSymbol('proto.proto.TowProtectionSelectionStatus', null, global);
goog.exportSymbol('proto.proto.TrackingEvent', null, global);
goog.exportSymbol('proto.proto.TurnOffEnginePreWarning', null, global);
goog.exportSymbol('proto.proto.VEPUpdate', null, global);
goog.exportSymbol('proto.proto.VEPUpdatesByVIN', null, global);
goog.exportSymbol('proto.proto.VVRTimeProfile', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.AttributeTypeCase', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.ChargingCouplerErrorDetails', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo400V', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo800V', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.ChargingErrorVehicleNoSupport400V', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.ClockHourUnit', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.CombustionConsumptionUnit', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.DisplayUnitCase', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.DistanceUnit', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.ElectricityConsumptionUnit', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.GasConsumptionUnit', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.PressureUnit', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.RatioUnit', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.SpeedDistanceUnit', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.SpeedUnit', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.TcuConnectionStateLowChannelStatus', null, global);
goog.exportSymbol('proto.proto.VehicleAttributeStatus.TemperatureUnit', null, global);
goog.exportSymbol('proto.proto.VehicleStatus', null, global);
goog.exportSymbol('proto.proto.VehicleTheftAlarmInactiveReason', null, global);
goog.exportSymbol('proto.proto.VehicleUpdated', null, global);
goog.exportSymbol('proto.proto.WeekdayTariffValue', null, global);
goog.exportSymbol('proto.proto.WeekendTariffValue', null, global);
goog.exportSymbol('proto.proto.WeeklyProfileScheduleType', null, global);
goog.exportSymbol('proto.proto.WeeklyProfileValue', null, global);
goog.exportSymbol('proto.proto.WeeklySetting', null, global);
goog.exportSymbol('proto.proto.WeeklySettingsHeadUnitValue', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.VEPUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.VEPUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.VEPUpdate.displayName = 'proto.proto.VEPUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.VehicleAttributeStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.VehicleAttributeStatus.repeatedFields_, proto.proto.VehicleAttributeStatus.oneofGroups_);
};
goog.inherits(proto.proto.VehicleAttributeStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.VehicleAttributeStatus.displayName = 'proto.proto.VehicleAttributeStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.AmgStageModeError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AmgStageModeError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AmgStageModeError.displayName = 'proto.proto.AmgStageModeError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.HvBatteryPrecondState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HvBatteryPrecondState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HvBatteryPrecondState.displayName = 'proto.proto.HvBatteryPrecondState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.HvBatteryPrecondRequestState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HvBatteryPrecondRequestState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HvBatteryPrecondRequestState.displayName = 'proto.proto.HvBatteryPrecondRequestState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PrecondOperabilityState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PrecondOperabilityState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PrecondOperabilityState.displayName = 'proto.proto.PrecondOperabilityState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargingScheduleRequested = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargingScheduleRequested, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingScheduleRequested.displayName = 'proto.proto.ChargingScheduleRequested';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargingTimer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChargingTimer.repeatedFields_, null);
};
goog.inherits(proto.proto.ChargingTimer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingTimer.displayName = 'proto.proto.ChargingTimer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargingTimerEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChargingTimerEntry.repeatedFields_, null);
};
goog.inherits(proto.proto.ChargingTimerEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingTimerEntry.displayName = 'proto.proto.ChargingTimerEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargingPredictionSoc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargingPredictionSoc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingPredictionSoc.displayName = 'proto.proto.ChargingPredictionSoc';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargingPredictionDepartureTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargingPredictionDepartureTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingPredictionDepartureTime.displayName = 'proto.proto.ChargingPredictionDepartureTime';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargeInletsEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargeInletsEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeInletsEntry.displayName = 'proto.proto.ChargeInletsEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargeInlets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChargeInlets.repeatedFields_, null);
};
goog.inherits(proto.proto.ChargeInlets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeInlets.displayName = 'proto.proto.ChargeInlets';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargeFlapsEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargeFlapsEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeFlapsEntry.displayName = 'proto.proto.ChargeFlapsEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargeFlaps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChargeFlaps.repeatedFields_, null);
};
goog.inherits(proto.proto.ChargeFlaps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeFlaps.displayName = 'proto.proto.ChargeFlaps';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargingPowerRestrictions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChargingPowerRestrictions.repeatedFields_, null);
};
goog.inherits(proto.proto.ChargingPowerRestrictions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingPowerRestrictions.displayName = 'proto.proto.ChargingPowerRestrictions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargingBreakClockTimerValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChargingBreakClockTimerValue.repeatedFields_, null);
};
goog.inherits(proto.proto.ChargingBreakClockTimerValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingBreakClockTimerValue.displayName = 'proto.proto.ChargingBreakClockTimerValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PrecondState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.PrecondState.repeatedFields_, null);
};
goog.inherits(proto.proto.PrecondState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PrecondState.displayName = 'proto.proto.PrecondState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargingPowerControl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargingPowerControl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingPowerControl.displayName = 'proto.proto.ChargingPowerControl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargingBreakClockTimerEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargingBreakClockTimerEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingBreakClockTimerEntry.displayName = 'proto.proto.ChargingBreakClockTimerEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargeProgramsValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChargeProgramsValue.repeatedFields_, null);
};
goog.inherits(proto.proto.ChargeProgramsValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeProgramsValue.displayName = 'proto.proto.ChargeProgramsValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargeProgramParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargeProgramParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeProgramParameters.displayName = 'proto.proto.ChargeProgramParameters';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.WeeklyProfileValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.WeeklyProfileValue.repeatedFields_, null);
};
goog.inherits(proto.proto.WeeklyProfileValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WeeklyProfileValue.displayName = 'proto.proto.WeeklyProfileValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.VVRTimeProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.VVRTimeProfile.repeatedFields_, null);
};
goog.inherits(proto.proto.VVRTimeProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.VVRTimeProfile.displayName = 'proto.proto.VVRTimeProfile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ActionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ActionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ActionList.displayName = 'proto.proto.ActionList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.EcoHistogramValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.EcoHistogramValue.repeatedFields_, null);
};
goog.inherits(proto.proto.EcoHistogramValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.EcoHistogramValue.displayName = 'proto.proto.EcoHistogramValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.EcoHistogramBin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.EcoHistogramBin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.EcoHistogramBin.displayName = 'proto.proto.EcoHistogramBin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.SpeedAlertConfigurationValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.SpeedAlertConfigurationValue.repeatedFields_, null);
};
goog.inherits(proto.proto.SpeedAlertConfigurationValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpeedAlertConfigurationValue.displayName = 'proto.proto.SpeedAlertConfigurationValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.SpeedAlertConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SpeedAlertConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpeedAlertConfiguration.displayName = 'proto.proto.SpeedAlertConfiguration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.WeeklySettingsHeadUnitValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.WeeklySettingsHeadUnitValue.repeatedFields_, null);
};
goog.inherits(proto.proto.WeeklySettingsHeadUnitValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WeeklySettingsHeadUnitValue.displayName = 'proto.proto.WeeklySettingsHeadUnitValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.WeeklySetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.WeeklySetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WeeklySetting.displayName = 'proto.proto.WeeklySetting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.TemperaturePointsValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.TemperaturePointsValue.repeatedFields_, null);
};
goog.inherits(proto.proto.TemperaturePointsValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TemperaturePointsValue.displayName = 'proto.proto.TemperaturePointsValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.TemperaturePoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TemperaturePoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TemperaturePoint.displayName = 'proto.proto.TemperaturePoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.WeekdayTariffValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.WeekdayTariffValue.repeatedFields_, null);
};
goog.inherits(proto.proto.WeekdayTariffValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WeekdayTariffValue.displayName = 'proto.proto.WeekdayTariffValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.WeekendTariffValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.WeekendTariffValue.repeatedFields_, null);
};
goog.inherits(proto.proto.WeekendTariffValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WeekendTariffValue.displayName = 'proto.proto.WeekendTariffValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Tariff = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Tariff, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Tariff.displayName = 'proto.proto.Tariff';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.StateOfChargeProfileValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.StateOfChargeProfileValue.repeatedFields_, null);
};
goog.inherits(proto.proto.StateOfChargeProfileValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.StateOfChargeProfileValue.displayName = 'proto.proto.StateOfChargeProfileValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.StateOfCharge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.StateOfCharge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.StateOfCharge.displayName = 'proto.proto.StateOfCharge';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.VEPUpdatesByVIN = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.VEPUpdatesByVIN, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.VEPUpdatesByVIN.displayName = 'proto.proto.VEPUpdatesByVIN';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.DebugMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.DebugMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DebugMessage.displayName = 'proto.proto.DebugMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.VehicleStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.VehicleStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.VehicleStatus.displayName = 'proto.proto.VehicleStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PushMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.PushMessage.oneofGroups_);
};
goog.inherits(proto.proto.PushMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PushMessage.displayName = 'proto.proto.PushMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.TrackingEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TrackingEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TrackingEvent.displayName = 'proto.proto.TrackingEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PayloadValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.PayloadValue.oneofGroups_);
};
goog.inherits(proto.proto.PayloadValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PayloadValue.displayName = 'proto.proto.PayloadValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.AcknowledgeVEPRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AcknowledgeVEPRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AcknowledgeVEPRequest.displayName = 'proto.proto.AcknowledgeVEPRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.AcknowledgeVEPUpdatesByVIN = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AcknowledgeVEPUpdatesByVIN, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AcknowledgeVEPUpdatesByVIN.displayName = 'proto.proto.AcknowledgeVEPUpdatesByVIN';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ConfigurePingInterval = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ConfigurePingInterval, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ConfigurePingInterval.displayName = 'proto.proto.ConfigurePingInterval';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.AcknowledgeVehicleUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AcknowledgeVehicleUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AcknowledgeVehicleUpdated.displayName = 'proto.proto.AcknowledgeVehicleUpdated';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.AcknowledgePreferredDealerChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AcknowledgePreferredDealerChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AcknowledgePreferredDealerChange.displayName = 'proto.proto.AcknowledgePreferredDealerChange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.VehicleUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.VehicleUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.VehicleUpdated.displayName = 'proto.proto.VehicleUpdated';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PreferredDealerChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PreferredDealerChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PreferredDealerChange.displayName = 'proto.proto.PreferredDealerChange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.AcknowledgeDataChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AcknowledgeDataChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AcknowledgeDataChangeEvent.displayName = 'proto.proto.AcknowledgeDataChangeEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Scopes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Scopes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.Scopes.displayName = 'proto.proto.Scopes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.DataChangeEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.DataChangeEvent.repeatedFields_, null);
};
goog.inherits(proto.proto.DataChangeEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DataChangeEvent.displayName = 'proto.proto.DataChangeEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.KeylineActivationStateValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.KeylineActivationStateValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.KeylineActivationStateValue.displayName = 'proto.proto.KeylineActivationStateValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.NextDepartureTimeValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.NextDepartureTimeValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.NextDepartureTimeValue.displayName = 'proto.proto.NextDepartureTimeValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChildPresenceDetectionWarningLastEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChildPresenceDetectionWarningLastEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChildPresenceDetectionWarningLastEvent.displayName = 'proto.proto.ChildPresenceDetectionWarningLastEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChildPresenceDetectionWarningLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChildPresenceDetectionWarningLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChildPresenceDetectionWarningLevel.displayName = 'proto.proto.ChildPresenceDetectionWarningLevel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.PerformanceLimitationModeStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.PerformanceLimitationModeStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.PerformanceLimitationModeStatus.displayName = 'proto.proto.PerformanceLimitationModeStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ExteriorMonitoringStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ExteriorMonitoringStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ExteriorMonitoringStatus.displayName = 'proto.proto.ExteriorMonitoringStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.InteriorMonitoringStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.InteriorMonitoringStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.InteriorMonitoringStatus.displayName = 'proto.proto.InteriorMonitoringStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.RemoteUpdateStartStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.RemoteUpdateStartStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.RemoteUpdateStartStatus.displayName = 'proto.proto.RemoteUpdateStartStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.SohCalibrationPlanned = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SohCalibrationPlanned, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SohCalibrationPlanned.displayName = 'proto.proto.SohCalibrationPlanned';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargingScheduleActive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChargingScheduleActive.repeatedFields_, null);
};
goog.inherits(proto.proto.ChargingScheduleActive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingScheduleActive.displayName = 'proto.proto.ChargingScheduleActive';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.displayName = 'proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ScheduleIdStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ScheduleIdStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ScheduleIdStatus.displayName = 'proto.proto.ScheduleIdStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ParkEventPictureTransmissionStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ParkEventPictureTransmissionStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ParkEventPictureTransmissionStatus.displayName = 'proto.proto.ParkEventPictureTransmissionStatus';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.VEPUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.VEPUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.VEPUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VEPUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
vin: jspb.Message.getFieldWithDefault(msg, 2, ""),
fullUpdate: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
emitTimestamp: jspb.Message.getFieldWithDefault(msg, 10, 0),
emitTimestampInMs: jspb.Message.getFieldWithDefault(msg, 14, 0),
attributesMap: (f = msg.getAttributesMap()) ? f.toObject(includeInstance, proto.proto.VehicleAttributeStatus.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.VEPUpdate}
 */
proto.proto.VEPUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.VEPUpdate;
  return proto.proto.VEPUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.VEPUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.VEPUpdate}
 */
proto.proto.VEPUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVin(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFullUpdate(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEmitTimestamp(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEmitTimestampInMs(value);
      break;
    case 11:
      var value = msg.getAttributesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.proto.VehicleAttributeStatus.deserializeBinaryFromReader, "", new proto.proto.VehicleAttributeStatus());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.VEPUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.VEPUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.VEPUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VEPUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getVin();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFullUpdate();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getEmitTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getEmitTimestampInMs();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getAttributesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.proto.VehicleAttributeStatus.serializeBinaryToWriter);
  }
};


/**
 * optional int32 sequence_number = 1;
 * @return {number}
 */
proto.proto.VEPUpdate.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VEPUpdate} returns this
 */
proto.proto.VEPUpdate.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string vin = 2;
 * @return {string}
 */
proto.proto.VEPUpdate.prototype.getVin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.VEPUpdate} returns this
 */
proto.proto.VEPUpdate.prototype.setVin = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool full_update = 15;
 * @return {boolean}
 */
proto.proto.VEPUpdate.prototype.getFullUpdate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.VEPUpdate} returns this
 */
proto.proto.VEPUpdate.prototype.setFullUpdate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional int64 emit_timestamp = 10;
 * @return {number}
 */
proto.proto.VEPUpdate.prototype.getEmitTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VEPUpdate} returns this
 */
proto.proto.VEPUpdate.prototype.setEmitTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 emit_timestamp_in_ms = 14;
 * @return {number}
 */
proto.proto.VEPUpdate.prototype.getEmitTimestampInMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VEPUpdate} returns this
 */
proto.proto.VEPUpdate.prototype.setEmitTimestampInMs = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * map<string, VehicleAttributeStatus> attributes = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.proto.VehicleAttributeStatus>}
 */
proto.proto.VEPUpdate.prototype.getAttributesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.proto.VehicleAttributeStatus>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      proto.proto.VehicleAttributeStatus));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.proto.VEPUpdate} returns this
 */
proto.proto.VEPUpdate.prototype.clearAttributesMap = function() {
  this.getAttributesMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.VehicleAttributeStatus.repeatedFields_ = [30];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.VehicleAttributeStatus.oneofGroups_ = [[12,13,14,15,25,26,16,17,18,19],[4,5,6,7,8,9,20,21,22,23,24,27,28,29,31,32,33,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95]];

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.DisplayUnitCase = {
  DISPLAY_UNIT_NOT_SET: 0,
  COMBUSTION_CONSUMPTION_UNIT: 12,
  GAS_CONSUMPTION_UNIT: 13,
  ELECTRICITY_CONSUMPTION_UNIT: 14,
  SPEED_DISTANCE_UNIT: 15,
  SPEED_UNIT: 25,
  DISTANCE_UNIT: 26,
  TEMPERATURE_UNIT: 16,
  PRESSURE_UNIT: 17,
  RATIO_UNIT: 18,
  CLOCK_HOUR_UNIT: 19
};

/**
 * @return {proto.proto.VehicleAttributeStatus.DisplayUnitCase}
 */
proto.proto.VehicleAttributeStatus.prototype.getDisplayUnitCase = function() {
  return /** @type {proto.proto.VehicleAttributeStatus.DisplayUnitCase} */(jspb.Message.computeOneofCase(this, proto.proto.VehicleAttributeStatus.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.AttributeTypeCase = {
  ATTRIBUTE_TYPE_NOT_SET: 0,
  INT_VALUE: 4,
  BOOL_VALUE: 5,
  STRING_VALUE: 6,
  DOUBLE_VALUE: 7,
  NIL_VALUE: 8,
  UNSUPPORTED_VALUE: 9,
  TEMPERATURE_POINTS_VALUE: 20,
  WEEKDAY_TARIFF_VALUE: 21,
  WEEKEND_TARIFF_VALUE: 22,
  STATE_OF_CHARGE_PROFILE_VALUE: 23,
  WEEKLY_SETTINGS_HEAD_UNIT_VALUE: 24,
  SPEED_ALERT_CONFIGURATION_VALUE: 27,
  ECO_HISTOGRAM_VALUE: 28,
  WEEKLY_PROFILE_VALUE: 29,
  CHARGE_PROGRAMS_VALUE: 31,
  CHARGINGBREAK_CLOCKTIMER_VALUE: 32,
  CHARGING_POWER_CONTROL: 33,
  KEYLINE_ACTIVATION_STATE_VALUE: 36,
  NEXT_DEPARTURE_TIME_VALUE: 37,
  TCU_CONNECTION_STATE_LOW_CHANNEL: 38,
  TURN_OFF_ENGINE_PRE_WARNING: 39,
  CHILD_PRESENCE_DETECTION_WARNING_LAST_EVENT: 40,
  CHILD_PRESENCE_DETECTION_WARNING_LEVEL: 41,
  PERFORMANCE_LIMITATION_MODE_STATUS: 42,
  BATTERY_HEALTH: 43,
  PRECOND_STATE: 44,
  EXTERIOR_MONITORING_STATUS: 45,
  INTERIOR_MONITORING_STATUS: 46,
  REMOTE_UPDATE_START_STATUS: 47,
  SOH_CALIBRATION_REQUIRED: 48,
  SOC_CALIBRATION_REQUEST: 49,
  SOH_CALIBRATION_REQUEST: 50,
  SOH_CALIBRATION_STATE: 51,
  SOH_CALIBRATION_PLANNED: 52,
  SOH_FAVORABLE_CONDITIONS: 53,
  SOH_CALIBRATION_NOTIFICATIONS: 54,
  CHARGING_POWER_RESTRICTIONS: 55,
  CHARGING_COUPLER_ERROR_DETAILS: 56,
  CHARGING_STOP_ERROR_DETAILS: 57,
  CHARGING_ERROR_VEHICLE_NO_SUPPORT_400V: 58,
  CHARGING_ERROR_IMPOSSIBLE_CHANGE_TO_400V: 59,
  CHARGING_ERROR_IMPOSSIBLE_CHANGE_TO_800V: 60,
  PRECOND_OPERABILITY_STATE: 61,
  PICTURE_RECORDING_STATUS: 62,
  PARK_EVENT_PICTURE_SELECTION_STATUS: 63,
  PANIC_ALARM_ACTIVE: 64,
  INTERIOR_PROTECTION_SELECTION_STATUS: 65,
  INTERIOR_PROTECTION_ACTIVATION_STATUS: 66,
  TOW_PROTECTION_SELECTION_STATUS: 67,
  TOW_PROTECTION_ACTIVATION_STATUS: 68,
  VEHICLE_THEFT_ALARM_INACTIVE_REASON: 69,
  PARK_COLLISION_SELECTION_STATUS: 70,
  PARK_COLLISION_ACTIVATION_STATUS: 71,
  PARK_COLLISION_INACTIVE_REASON: 72,
  PARK_COLLISION_PICTURE_TRANSFER_STATUS: 73,
  EMERGENCY_POWER_SUPPLY: 78,
  EVSE_PAIRING_STATE: 79,
  CHARGING_PREDICTION_SOC: 80,
  CHARGING_PREDICTION_DEPARTURE_TIME: 81,
  CHARGING_SCHEDULE_ACTIVE: 82,
  DC_CHARGING_PROFILE: 83,
  CHARGE_FLAPS: 84,
  CHARGE_INLETS: 85,
  CHARGING_TIMER: 86,
  PARK_EVENT_PICTURE_TRANSMISSION_STATUS: 87,
  CHARGING_SCHEDULE_REQUESTED: 88,
  CHARGING_FLAP_ERROR_DETAILS: 89,
  CHARGING_COMPATIBILITY_ERROR: 90,
  HV_BATTERY_PRECOND_AVAILABILITY: 91,
  HV_BATTERY_PRECOND_REQUEST_STATE: 92,
  HV_BATTERY_PRECOND_STATE: 93,
  AMG_STAGE_MODE_STATE: 94,
  AMG_STAGE_MODE_ERROR: 95
};

/**
 * @return {proto.proto.VehicleAttributeStatus.AttributeTypeCase}
 */
proto.proto.VehicleAttributeStatus.prototype.getAttributeTypeCase = function() {
  return /** @type {proto.proto.VehicleAttributeStatus.AttributeTypeCase} */(jspb.Message.computeOneofCase(this, proto.proto.VehicleAttributeStatus.oneofGroups_[1]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.VehicleAttributeStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.VehicleAttributeStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.VehicleAttributeStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VehicleAttributeStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
timestampInMs: jspb.Message.getFieldWithDefault(msg, 10, 0),
changed: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
status: jspb.Message.getFieldWithDefault(msg, 3, 0),
serviceIdsList: (f = jspb.Message.getRepeatedField(msg, 30)) == null ? undefined : f,
displayValue: jspb.Message.getFieldWithDefault(msg, 11, ""),
combustionConsumptionUnit: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
gasConsumptionUnit: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
electricityConsumptionUnit: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
speedDistanceUnit: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
speedUnit: (f = jspb.Message.getField(msg, 25)) == null ? undefined : f,
distanceUnit: (f = jspb.Message.getField(msg, 26)) == null ? undefined : f,
temperatureUnit: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
pressureUnit: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
ratioUnit: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
clockHourUnit: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
intValue: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
boolValue: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
stringValue: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
doubleValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
nilValue: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
unsupportedValue: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
temperaturePointsValue: (f = msg.getTemperaturePointsValue()) && proto.proto.TemperaturePointsValue.toObject(includeInstance, f),
weekdayTariffValue: (f = msg.getWeekdayTariffValue()) && proto.proto.WeekdayTariffValue.toObject(includeInstance, f),
weekendTariffValue: (f = msg.getWeekendTariffValue()) && proto.proto.WeekendTariffValue.toObject(includeInstance, f),
stateOfChargeProfileValue: (f = msg.getStateOfChargeProfileValue()) && proto.proto.StateOfChargeProfileValue.toObject(includeInstance, f),
weeklySettingsHeadUnitValue: (f = msg.getWeeklySettingsHeadUnitValue()) && proto.proto.WeeklySettingsHeadUnitValue.toObject(includeInstance, f),
speedAlertConfigurationValue: (f = msg.getSpeedAlertConfigurationValue()) && proto.proto.SpeedAlertConfigurationValue.toObject(includeInstance, f),
ecoHistogramValue: (f = msg.getEcoHistogramValue()) && proto.proto.EcoHistogramValue.toObject(includeInstance, f),
weeklyProfileValue: (f = msg.getWeeklyProfileValue()) && proto.proto.WeeklyProfileValue.toObject(includeInstance, f),
chargeProgramsValue: (f = msg.getChargeProgramsValue()) && proto.proto.ChargeProgramsValue.toObject(includeInstance, f),
chargingbreakClocktimerValue: (f = msg.getChargingbreakClocktimerValue()) && proto.proto.ChargingBreakClockTimerValue.toObject(includeInstance, f),
chargingPowerControl: (f = msg.getChargingPowerControl()) && proto.proto.ChargingPowerControl.toObject(includeInstance, f),
keylineActivationStateValue: (f = msg.getKeylineActivationStateValue()) && proto.proto.KeylineActivationStateValue.toObject(includeInstance, f),
nextDepartureTimeValue: (f = msg.getNextDepartureTimeValue()) && proto.proto.NextDepartureTimeValue.toObject(includeInstance, f),
tcuConnectionStateLowChannel: (f = jspb.Message.getField(msg, 38)) == null ? undefined : f,
turnOffEnginePreWarning: (f = jspb.Message.getField(msg, 39)) == null ? undefined : f,
childPresenceDetectionWarningLastEvent: (f = msg.getChildPresenceDetectionWarningLastEvent()) && proto.proto.ChildPresenceDetectionWarningLastEvent.toObject(includeInstance, f),
childPresenceDetectionWarningLevel: (f = msg.getChildPresenceDetectionWarningLevel()) && proto.proto.ChildPresenceDetectionWarningLevel.toObject(includeInstance, f),
performanceLimitationModeStatus: (f = msg.getPerformanceLimitationModeStatus()) && proto.proto.PerformanceLimitationModeStatus.toObject(includeInstance, f),
batteryHealth: (f = jspb.Message.getField(msg, 43)) == null ? undefined : f,
precondState: (f = msg.getPrecondState()) && proto.proto.PrecondState.toObject(includeInstance, f),
exteriorMonitoringStatus: (f = msg.getExteriorMonitoringStatus()) && proto.proto.ExteriorMonitoringStatus.toObject(includeInstance, f),
interiorMonitoringStatus: (f = msg.getInteriorMonitoringStatus()) && proto.proto.InteriorMonitoringStatus.toObject(includeInstance, f),
remoteUpdateStartStatus: (f = msg.getRemoteUpdateStartStatus()) && proto.proto.RemoteUpdateStartStatus.toObject(includeInstance, f),
sohCalibrationRequired: (f = jspb.Message.getField(msg, 48)) == null ? undefined : f,
socCalibrationRequest: (f = jspb.Message.getField(msg, 49)) == null ? undefined : f,
sohCalibrationRequest: (f = jspb.Message.getField(msg, 50)) == null ? undefined : f,
sohCalibrationState: (f = jspb.Message.getField(msg, 51)) == null ? undefined : f,
sohCalibrationPlanned: (f = msg.getSohCalibrationPlanned()) && proto.proto.SohCalibrationPlanned.toObject(includeInstance, f),
sohFavorableConditions: (f = jspb.Message.getField(msg, 53)) == null ? undefined : f,
sohCalibrationNotifications: (f = jspb.Message.getField(msg, 54)) == null ? undefined : f,
chargingPowerRestrictions: (f = msg.getChargingPowerRestrictions()) && proto.proto.ChargingPowerRestrictions.toObject(includeInstance, f),
chargingCouplerErrorDetails: (f = jspb.Message.getField(msg, 56)) == null ? undefined : f,
chargingStopErrorDetails: (f = jspb.Message.getField(msg, 57)) == null ? undefined : f,
chargingErrorVehicleNoSupport400v: (f = jspb.Message.getField(msg, 58)) == null ? undefined : f,
chargingErrorImpossibleChangeTo400v: (f = jspb.Message.getField(msg, 59)) == null ? undefined : f,
chargingErrorImpossibleChangeTo800v: (f = jspb.Message.getField(msg, 60)) == null ? undefined : f,
precondOperabilityState: (f = msg.getPrecondOperabilityState()) && proto.proto.PrecondOperabilityState.toObject(includeInstance, f),
pictureRecordingStatus: (f = jspb.Message.getField(msg, 62)) == null ? undefined : f,
parkEventPictureSelectionStatus: (f = jspb.Message.getField(msg, 63)) == null ? undefined : f,
panicAlarmActive: (f = jspb.Message.getField(msg, 64)) == null ? undefined : f,
interiorProtectionSelectionStatus: (f = jspb.Message.getField(msg, 65)) == null ? undefined : f,
interiorProtectionActivationStatus: (f = jspb.Message.getField(msg, 66)) == null ? undefined : f,
towProtectionSelectionStatus: (f = jspb.Message.getField(msg, 67)) == null ? undefined : f,
towProtectionActivationStatus: (f = jspb.Message.getField(msg, 68)) == null ? undefined : f,
vehicleTheftAlarmInactiveReason: (f = jspb.Message.getField(msg, 69)) == null ? undefined : f,
parkCollisionSelectionStatus: (f = jspb.Message.getField(msg, 70)) == null ? undefined : f,
parkCollisionActivationStatus: (f = jspb.Message.getField(msg, 71)) == null ? undefined : f,
parkCollisionInactiveReason: (f = jspb.Message.getField(msg, 72)) == null ? undefined : f,
parkCollisionPictureTransferStatus: (f = jspb.Message.getField(msg, 73)) == null ? undefined : f,
emergencyPowerSupply: (f = jspb.Message.getField(msg, 78)) == null ? undefined : f,
evsePairingState: (f = jspb.Message.getField(msg, 79)) == null ? undefined : f,
chargingPredictionSoc: (f = msg.getChargingPredictionSoc()) && proto.proto.ChargingPredictionSoc.toObject(includeInstance, f),
chargingPredictionDepartureTime: (f = msg.getChargingPredictionDepartureTime()) && proto.proto.ChargingPredictionDepartureTime.toObject(includeInstance, f),
chargingScheduleActive: (f = msg.getChargingScheduleActive()) && proto.proto.ChargingScheduleActive.toObject(includeInstance, f),
dcChargingProfile: (f = jspb.Message.getField(msg, 83)) == null ? undefined : f,
chargeFlaps: (f = msg.getChargeFlaps()) && proto.proto.ChargeFlaps.toObject(includeInstance, f),
chargeInlets: (f = msg.getChargeInlets()) && proto.proto.ChargeInlets.toObject(includeInstance, f),
chargingTimer: (f = msg.getChargingTimer()) && proto.proto.ChargingTimer.toObject(includeInstance, f),
parkEventPictureTransmissionStatus: (f = msg.getParkEventPictureTransmissionStatus()) && proto.proto.ParkEventPictureTransmissionStatus.toObject(includeInstance, f),
chargingScheduleRequested: (f = msg.getChargingScheduleRequested()) && proto.proto.ChargingScheduleRequested.toObject(includeInstance, f),
chargingFlapErrorDetails: (f = jspb.Message.getField(msg, 89)) == null ? undefined : f,
chargingCompatibilityError: (f = jspb.Message.getField(msg, 90)) == null ? undefined : f,
hvBatteryPrecondAvailability: (f = jspb.Message.getField(msg, 91)) == null ? undefined : f,
hvBatteryPrecondRequestState: (f = msg.getHvBatteryPrecondRequestState()) && proto.proto.HvBatteryPrecondRequestState.toObject(includeInstance, f),
hvBatteryPrecondState: (f = msg.getHvBatteryPrecondState()) && proto.proto.HvBatteryPrecondState.toObject(includeInstance, f),
amgStageModeState: (f = jspb.Message.getField(msg, 94)) == null ? undefined : f,
amgStageModeError: (f = msg.getAmgStageModeError()) && proto.proto.AmgStageModeError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.VehicleAttributeStatus}
 */
proto.proto.VehicleAttributeStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.VehicleAttributeStatus;
  return proto.proto.VehicleAttributeStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.VehicleAttributeStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.VehicleAttributeStatus}
 */
proto.proto.VehicleAttributeStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestampInMs(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setChanged(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 30:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addServiceIds(values[i]);
      }
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayValue(value);
      break;
    case 12:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.CombustionConsumptionUnit} */ (reader.readEnum());
      msg.setCombustionConsumptionUnit(value);
      break;
    case 13:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.GasConsumptionUnit} */ (reader.readEnum());
      msg.setGasConsumptionUnit(value);
      break;
    case 14:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.ElectricityConsumptionUnit} */ (reader.readEnum());
      msg.setElectricityConsumptionUnit(value);
      break;
    case 15:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.SpeedDistanceUnit} */ (reader.readEnum());
      msg.setSpeedDistanceUnit(value);
      break;
    case 25:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.SpeedUnit} */ (reader.readEnum());
      msg.setSpeedUnit(value);
      break;
    case 26:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.DistanceUnit} */ (reader.readEnum());
      msg.setDistanceUnit(value);
      break;
    case 16:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.TemperatureUnit} */ (reader.readEnum());
      msg.setTemperatureUnit(value);
      break;
    case 17:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.PressureUnit} */ (reader.readEnum());
      msg.setPressureUnit(value);
      break;
    case 18:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.RatioUnit} */ (reader.readEnum());
      msg.setRatioUnit(value);
      break;
    case 19:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.ClockHourUnit} */ (reader.readEnum());
      msg.setClockHourUnit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIntValue(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolValue(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDoubleValue(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNilValue(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnsupportedValue(value);
      break;
    case 20:
      var value = new proto.proto.TemperaturePointsValue;
      reader.readMessage(value,proto.proto.TemperaturePointsValue.deserializeBinaryFromReader);
      msg.setTemperaturePointsValue(value);
      break;
    case 21:
      var value = new proto.proto.WeekdayTariffValue;
      reader.readMessage(value,proto.proto.WeekdayTariffValue.deserializeBinaryFromReader);
      msg.setWeekdayTariffValue(value);
      break;
    case 22:
      var value = new proto.proto.WeekendTariffValue;
      reader.readMessage(value,proto.proto.WeekendTariffValue.deserializeBinaryFromReader);
      msg.setWeekendTariffValue(value);
      break;
    case 23:
      var value = new proto.proto.StateOfChargeProfileValue;
      reader.readMessage(value,proto.proto.StateOfChargeProfileValue.deserializeBinaryFromReader);
      msg.setStateOfChargeProfileValue(value);
      break;
    case 24:
      var value = new proto.proto.WeeklySettingsHeadUnitValue;
      reader.readMessage(value,proto.proto.WeeklySettingsHeadUnitValue.deserializeBinaryFromReader);
      msg.setWeeklySettingsHeadUnitValue(value);
      break;
    case 27:
      var value = new proto.proto.SpeedAlertConfigurationValue;
      reader.readMessage(value,proto.proto.SpeedAlertConfigurationValue.deserializeBinaryFromReader);
      msg.setSpeedAlertConfigurationValue(value);
      break;
    case 28:
      var value = new proto.proto.EcoHistogramValue;
      reader.readMessage(value,proto.proto.EcoHistogramValue.deserializeBinaryFromReader);
      msg.setEcoHistogramValue(value);
      break;
    case 29:
      var value = new proto.proto.WeeklyProfileValue;
      reader.readMessage(value,proto.proto.WeeklyProfileValue.deserializeBinaryFromReader);
      msg.setWeeklyProfileValue(value);
      break;
    case 31:
      var value = new proto.proto.ChargeProgramsValue;
      reader.readMessage(value,proto.proto.ChargeProgramsValue.deserializeBinaryFromReader);
      msg.setChargeProgramsValue(value);
      break;
    case 32:
      var value = new proto.proto.ChargingBreakClockTimerValue;
      reader.readMessage(value,proto.proto.ChargingBreakClockTimerValue.deserializeBinaryFromReader);
      msg.setChargingbreakClocktimerValue(value);
      break;
    case 33:
      var value = new proto.proto.ChargingPowerControl;
      reader.readMessage(value,proto.proto.ChargingPowerControl.deserializeBinaryFromReader);
      msg.setChargingPowerControl(value);
      break;
    case 36:
      var value = new proto.proto.KeylineActivationStateValue;
      reader.readMessage(value,proto.proto.KeylineActivationStateValue.deserializeBinaryFromReader);
      msg.setKeylineActivationStateValue(value);
      break;
    case 37:
      var value = new proto.proto.NextDepartureTimeValue;
      reader.readMessage(value,proto.proto.NextDepartureTimeValue.deserializeBinaryFromReader);
      msg.setNextDepartureTimeValue(value);
      break;
    case 38:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.TcuConnectionStateLowChannelStatus} */ (reader.readEnum());
      msg.setTcuConnectionStateLowChannel(value);
      break;
    case 39:
      var value = /** @type {!proto.proto.TurnOffEnginePreWarning} */ (reader.readEnum());
      msg.setTurnOffEnginePreWarning(value);
      break;
    case 40:
      var value = new proto.proto.ChildPresenceDetectionWarningLastEvent;
      reader.readMessage(value,proto.proto.ChildPresenceDetectionWarningLastEvent.deserializeBinaryFromReader);
      msg.setChildPresenceDetectionWarningLastEvent(value);
      break;
    case 41:
      var value = new proto.proto.ChildPresenceDetectionWarningLevel;
      reader.readMessage(value,proto.proto.ChildPresenceDetectionWarningLevel.deserializeBinaryFromReader);
      msg.setChildPresenceDetectionWarningLevel(value);
      break;
    case 42:
      var value = new proto.proto.PerformanceLimitationModeStatus;
      reader.readMessage(value,proto.proto.PerformanceLimitationModeStatus.deserializeBinaryFromReader);
      msg.setPerformanceLimitationModeStatus(value);
      break;
    case 43:
      var value = /** @type {!proto.proto.BatteryHealth} */ (reader.readEnum());
      msg.setBatteryHealth(value);
      break;
    case 44:
      var value = new proto.proto.PrecondState;
      reader.readMessage(value,proto.proto.PrecondState.deserializeBinaryFromReader);
      msg.setPrecondState(value);
      break;
    case 45:
      var value = new proto.proto.ExteriorMonitoringStatus;
      reader.readMessage(value,proto.proto.ExteriorMonitoringStatus.deserializeBinaryFromReader);
      msg.setExteriorMonitoringStatus(value);
      break;
    case 46:
      var value = new proto.proto.InteriorMonitoringStatus;
      reader.readMessage(value,proto.proto.InteriorMonitoringStatus.deserializeBinaryFromReader);
      msg.setInteriorMonitoringStatus(value);
      break;
    case 47:
      var value = new proto.proto.RemoteUpdateStartStatus;
      reader.readMessage(value,proto.proto.RemoteUpdateStartStatus.deserializeBinaryFromReader);
      msg.setRemoteUpdateStartStatus(value);
      break;
    case 48:
      var value = /** @type {!proto.proto.SohCalibrationRequired} */ (reader.readEnum());
      msg.setSohCalibrationRequired(value);
      break;
    case 49:
      var value = /** @type {!proto.proto.SocCalibrationRequest} */ (reader.readEnum());
      msg.setSocCalibrationRequest(value);
      break;
    case 50:
      var value = /** @type {!proto.proto.SohCalibrationRequest} */ (reader.readEnum());
      msg.setSohCalibrationRequest(value);
      break;
    case 51:
      var value = /** @type {!proto.proto.SohCalibrationState} */ (reader.readEnum());
      msg.setSohCalibrationState(value);
      break;
    case 52:
      var value = new proto.proto.SohCalibrationPlanned;
      reader.readMessage(value,proto.proto.SohCalibrationPlanned.deserializeBinaryFromReader);
      msg.setSohCalibrationPlanned(value);
      break;
    case 53:
      var value = /** @type {!proto.proto.SohFavorableConditions} */ (reader.readEnum());
      msg.setSohFavorableConditions(value);
      break;
    case 54:
      var value = /** @type {!proto.proto.SohCalibrationNotifications} */ (reader.readEnum());
      msg.setSohCalibrationNotifications(value);
      break;
    case 55:
      var value = new proto.proto.ChargingPowerRestrictions;
      reader.readMessage(value,proto.proto.ChargingPowerRestrictions.deserializeBinaryFromReader);
      msg.setChargingPowerRestrictions(value);
      break;
    case 56:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.ChargingCouplerErrorDetails} */ (reader.readEnum());
      msg.setChargingCouplerErrorDetails(value);
      break;
    case 57:
      var value = /** @type {!proto.proto.ChargingStopErrorDetails} */ (reader.readEnum());
      msg.setChargingStopErrorDetails(value);
      break;
    case 58:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.ChargingErrorVehicleNoSupport400V} */ (reader.readEnum());
      msg.setChargingErrorVehicleNoSupport400v(value);
      break;
    case 59:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo400V} */ (reader.readEnum());
      msg.setChargingErrorImpossibleChangeTo400v(value);
      break;
    case 60:
      var value = /** @type {!proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo800V} */ (reader.readEnum());
      msg.setChargingErrorImpossibleChangeTo800v(value);
      break;
    case 61:
      var value = new proto.proto.PrecondOperabilityState;
      reader.readMessage(value,proto.proto.PrecondOperabilityState.deserializeBinaryFromReader);
      msg.setPrecondOperabilityState(value);
      break;
    case 62:
      var value = /** @type {!proto.proto.PictureRecordingStatus} */ (reader.readEnum());
      msg.setPictureRecordingStatus(value);
      break;
    case 63:
      var value = /** @type {!proto.proto.ParkEventPictureSelectionStatus} */ (reader.readEnum());
      msg.setParkEventPictureSelectionStatus(value);
      break;
    case 64:
      var value = /** @type {!proto.proto.PanicAlarmActive} */ (reader.readEnum());
      msg.setPanicAlarmActive(value);
      break;
    case 65:
      var value = /** @type {!proto.proto.InteriorProtectionSelectionStatus} */ (reader.readEnum());
      msg.setInteriorProtectionSelectionStatus(value);
      break;
    case 66:
      var value = /** @type {!proto.proto.InteriorProtectionActivationStatus} */ (reader.readEnum());
      msg.setInteriorProtectionActivationStatus(value);
      break;
    case 67:
      var value = /** @type {!proto.proto.TowProtectionSelectionStatus} */ (reader.readEnum());
      msg.setTowProtectionSelectionStatus(value);
      break;
    case 68:
      var value = /** @type {!proto.proto.TowProtectionActivationStatus} */ (reader.readEnum());
      msg.setTowProtectionActivationStatus(value);
      break;
    case 69:
      var value = /** @type {!proto.proto.VehicleTheftAlarmInactiveReason} */ (reader.readEnum());
      msg.setVehicleTheftAlarmInactiveReason(value);
      break;
    case 70:
      var value = /** @type {!proto.proto.ParkCollisionSelectionStatus} */ (reader.readEnum());
      msg.setParkCollisionSelectionStatus(value);
      break;
    case 71:
      var value = /** @type {!proto.proto.ParkCollisionActivationStatus} */ (reader.readEnum());
      msg.setParkCollisionActivationStatus(value);
      break;
    case 72:
      var value = /** @type {!proto.proto.ParkCollisionInactiveReason} */ (reader.readEnum());
      msg.setParkCollisionInactiveReason(value);
      break;
    case 73:
      var value = /** @type {!proto.proto.ParkCollisionPictureTransferStatus} */ (reader.readEnum());
      msg.setParkCollisionPictureTransferStatus(value);
      break;
    case 78:
      var value = /** @type {!proto.proto.EmergencyPowerSupply} */ (reader.readEnum());
      msg.setEmergencyPowerSupply(value);
      break;
    case 79:
      var value = /** @type {!proto.proto.EvsePairingState} */ (reader.readEnum());
      msg.setEvsePairingState(value);
      break;
    case 80:
      var value = new proto.proto.ChargingPredictionSoc;
      reader.readMessage(value,proto.proto.ChargingPredictionSoc.deserializeBinaryFromReader);
      msg.setChargingPredictionSoc(value);
      break;
    case 81:
      var value = new proto.proto.ChargingPredictionDepartureTime;
      reader.readMessage(value,proto.proto.ChargingPredictionDepartureTime.deserializeBinaryFromReader);
      msg.setChargingPredictionDepartureTime(value);
      break;
    case 82:
      var value = new proto.proto.ChargingScheduleActive;
      reader.readMessage(value,proto.proto.ChargingScheduleActive.deserializeBinaryFromReader);
      msg.setChargingScheduleActive(value);
      break;
    case 83:
      var value = /** @type {!proto.proto.DcChargingProfile} */ (reader.readEnum());
      msg.setDcChargingProfile(value);
      break;
    case 84:
      var value = new proto.proto.ChargeFlaps;
      reader.readMessage(value,proto.proto.ChargeFlaps.deserializeBinaryFromReader);
      msg.setChargeFlaps(value);
      break;
    case 85:
      var value = new proto.proto.ChargeInlets;
      reader.readMessage(value,proto.proto.ChargeInlets.deserializeBinaryFromReader);
      msg.setChargeInlets(value);
      break;
    case 86:
      var value = new proto.proto.ChargingTimer;
      reader.readMessage(value,proto.proto.ChargingTimer.deserializeBinaryFromReader);
      msg.setChargingTimer(value);
      break;
    case 87:
      var value = new proto.proto.ParkEventPictureTransmissionStatus;
      reader.readMessage(value,proto.proto.ParkEventPictureTransmissionStatus.deserializeBinaryFromReader);
      msg.setParkEventPictureTransmissionStatus(value);
      break;
    case 88:
      var value = new proto.proto.ChargingScheduleRequested;
      reader.readMessage(value,proto.proto.ChargingScheduleRequested.deserializeBinaryFromReader);
      msg.setChargingScheduleRequested(value);
      break;
    case 89:
      var value = /** @type {!proto.proto.ChargingFlapErrorDetails} */ (reader.readEnum());
      msg.setChargingFlapErrorDetails(value);
      break;
    case 90:
      var value = /** @type {!proto.proto.ChargingCompatibilityError} */ (reader.readEnum());
      msg.setChargingCompatibilityError(value);
      break;
    case 91:
      var value = /** @type {!proto.proto.HvBatteryPrecondAvailability} */ (reader.readEnum());
      msg.setHvBatteryPrecondAvailability(value);
      break;
    case 92:
      var value = new proto.proto.HvBatteryPrecondRequestState;
      reader.readMessage(value,proto.proto.HvBatteryPrecondRequestState.deserializeBinaryFromReader);
      msg.setHvBatteryPrecondRequestState(value);
      break;
    case 93:
      var value = new proto.proto.HvBatteryPrecondState;
      reader.readMessage(value,proto.proto.HvBatteryPrecondState.deserializeBinaryFromReader);
      msg.setHvBatteryPrecondState(value);
      break;
    case 94:
      var value = /** @type {!proto.proto.AmgStageModeState} */ (reader.readEnum());
      msg.setAmgStageModeState(value);
      break;
    case 95:
      var value = new proto.proto.AmgStageModeError;
      reader.readMessage(value,proto.proto.AmgStageModeError.deserializeBinaryFromReader);
      msg.setAmgStageModeError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.VehicleAttributeStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.VehicleAttributeStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.VehicleAttributeStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VehicleAttributeStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTimestampInMs();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getChanged();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getServiceIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      30,
      f
    );
  }
  f = message.getDisplayValue();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.CombustionConsumptionUnit} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.GasConsumptionUnit} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.ElectricityConsumptionUnit} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.SpeedDistanceUnit} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.SpeedUnit} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeEnum(
      25,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.DistanceUnit} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeEnum(
      26,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.TemperatureUnit} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.PressureUnit} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.RatioUnit} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeEnum(
      18,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.ClockHourUnit} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTemperaturePointsValue();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.proto.TemperaturePointsValue.serializeBinaryToWriter
    );
  }
  f = message.getWeekdayTariffValue();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.proto.WeekdayTariffValue.serializeBinaryToWriter
    );
  }
  f = message.getWeekendTariffValue();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.proto.WeekendTariffValue.serializeBinaryToWriter
    );
  }
  f = message.getStateOfChargeProfileValue();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.proto.StateOfChargeProfileValue.serializeBinaryToWriter
    );
  }
  f = message.getWeeklySettingsHeadUnitValue();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.proto.WeeklySettingsHeadUnitValue.serializeBinaryToWriter
    );
  }
  f = message.getSpeedAlertConfigurationValue();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.proto.SpeedAlertConfigurationValue.serializeBinaryToWriter
    );
  }
  f = message.getEcoHistogramValue();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.proto.EcoHistogramValue.serializeBinaryToWriter
    );
  }
  f = message.getWeeklyProfileValue();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.proto.WeeklyProfileValue.serializeBinaryToWriter
    );
  }
  f = message.getChargeProgramsValue();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.proto.ChargeProgramsValue.serializeBinaryToWriter
    );
  }
  f = message.getChargingbreakClocktimerValue();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.proto.ChargingBreakClockTimerValue.serializeBinaryToWriter
    );
  }
  f = message.getChargingPowerControl();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.proto.ChargingPowerControl.serializeBinaryToWriter
    );
  }
  f = message.getKeylineActivationStateValue();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.proto.KeylineActivationStateValue.serializeBinaryToWriter
    );
  }
  f = message.getNextDepartureTimeValue();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.proto.NextDepartureTimeValue.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.TcuConnectionStateLowChannelStatus} */ (jspb.Message.getField(message, 38));
  if (f != null) {
    writer.writeEnum(
      38,
      f
    );
  }
  f = /** @type {!proto.proto.TurnOffEnginePreWarning} */ (jspb.Message.getField(message, 39));
  if (f != null) {
    writer.writeEnum(
      39,
      f
    );
  }
  f = message.getChildPresenceDetectionWarningLastEvent();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.proto.ChildPresenceDetectionWarningLastEvent.serializeBinaryToWriter
    );
  }
  f = message.getChildPresenceDetectionWarningLevel();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.proto.ChildPresenceDetectionWarningLevel.serializeBinaryToWriter
    );
  }
  f = message.getPerformanceLimitationModeStatus();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.proto.PerformanceLimitationModeStatus.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.proto.BatteryHealth} */ (jspb.Message.getField(message, 43));
  if (f != null) {
    writer.writeEnum(
      43,
      f
    );
  }
  f = message.getPrecondState();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.proto.PrecondState.serializeBinaryToWriter
    );
  }
  f = message.getExteriorMonitoringStatus();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto.proto.ExteriorMonitoringStatus.serializeBinaryToWriter
    );
  }
  f = message.getInteriorMonitoringStatus();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      proto.proto.InteriorMonitoringStatus.serializeBinaryToWriter
    );
  }
  f = message.getRemoteUpdateStartStatus();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto.proto.RemoteUpdateStartStatus.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.proto.SohCalibrationRequired} */ (jspb.Message.getField(message, 48));
  if (f != null) {
    writer.writeEnum(
      48,
      f
    );
  }
  f = /** @type {!proto.proto.SocCalibrationRequest} */ (jspb.Message.getField(message, 49));
  if (f != null) {
    writer.writeEnum(
      49,
      f
    );
  }
  f = /** @type {!proto.proto.SohCalibrationRequest} */ (jspb.Message.getField(message, 50));
  if (f != null) {
    writer.writeEnum(
      50,
      f
    );
  }
  f = /** @type {!proto.proto.SohCalibrationState} */ (jspb.Message.getField(message, 51));
  if (f != null) {
    writer.writeEnum(
      51,
      f
    );
  }
  f = message.getSohCalibrationPlanned();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      proto.proto.SohCalibrationPlanned.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.proto.SohFavorableConditions} */ (jspb.Message.getField(message, 53));
  if (f != null) {
    writer.writeEnum(
      53,
      f
    );
  }
  f = /** @type {!proto.proto.SohCalibrationNotifications} */ (jspb.Message.getField(message, 54));
  if (f != null) {
    writer.writeEnum(
      54,
      f
    );
  }
  f = message.getChargingPowerRestrictions();
  if (f != null) {
    writer.writeMessage(
      55,
      f,
      proto.proto.ChargingPowerRestrictions.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.ChargingCouplerErrorDetails} */ (jspb.Message.getField(message, 56));
  if (f != null) {
    writer.writeEnum(
      56,
      f
    );
  }
  f = /** @type {!proto.proto.ChargingStopErrorDetails} */ (jspb.Message.getField(message, 57));
  if (f != null) {
    writer.writeEnum(
      57,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.ChargingErrorVehicleNoSupport400V} */ (jspb.Message.getField(message, 58));
  if (f != null) {
    writer.writeEnum(
      58,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo400V} */ (jspb.Message.getField(message, 59));
  if (f != null) {
    writer.writeEnum(
      59,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo800V} */ (jspb.Message.getField(message, 60));
  if (f != null) {
    writer.writeEnum(
      60,
      f
    );
  }
  f = message.getPrecondOperabilityState();
  if (f != null) {
    writer.writeMessage(
      61,
      f,
      proto.proto.PrecondOperabilityState.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.proto.PictureRecordingStatus} */ (jspb.Message.getField(message, 62));
  if (f != null) {
    writer.writeEnum(
      62,
      f
    );
  }
  f = /** @type {!proto.proto.ParkEventPictureSelectionStatus} */ (jspb.Message.getField(message, 63));
  if (f != null) {
    writer.writeEnum(
      63,
      f
    );
  }
  f = /** @type {!proto.proto.PanicAlarmActive} */ (jspb.Message.getField(message, 64));
  if (f != null) {
    writer.writeEnum(
      64,
      f
    );
  }
  f = /** @type {!proto.proto.InteriorProtectionSelectionStatus} */ (jspb.Message.getField(message, 65));
  if (f != null) {
    writer.writeEnum(
      65,
      f
    );
  }
  f = /** @type {!proto.proto.InteriorProtectionActivationStatus} */ (jspb.Message.getField(message, 66));
  if (f != null) {
    writer.writeEnum(
      66,
      f
    );
  }
  f = /** @type {!proto.proto.TowProtectionSelectionStatus} */ (jspb.Message.getField(message, 67));
  if (f != null) {
    writer.writeEnum(
      67,
      f
    );
  }
  f = /** @type {!proto.proto.TowProtectionActivationStatus} */ (jspb.Message.getField(message, 68));
  if (f != null) {
    writer.writeEnum(
      68,
      f
    );
  }
  f = /** @type {!proto.proto.VehicleTheftAlarmInactiveReason} */ (jspb.Message.getField(message, 69));
  if (f != null) {
    writer.writeEnum(
      69,
      f
    );
  }
  f = /** @type {!proto.proto.ParkCollisionSelectionStatus} */ (jspb.Message.getField(message, 70));
  if (f != null) {
    writer.writeEnum(
      70,
      f
    );
  }
  f = /** @type {!proto.proto.ParkCollisionActivationStatus} */ (jspb.Message.getField(message, 71));
  if (f != null) {
    writer.writeEnum(
      71,
      f
    );
  }
  f = /** @type {!proto.proto.ParkCollisionInactiveReason} */ (jspb.Message.getField(message, 72));
  if (f != null) {
    writer.writeEnum(
      72,
      f
    );
  }
  f = /** @type {!proto.proto.ParkCollisionPictureTransferStatus} */ (jspb.Message.getField(message, 73));
  if (f != null) {
    writer.writeEnum(
      73,
      f
    );
  }
  f = /** @type {!proto.proto.EmergencyPowerSupply} */ (jspb.Message.getField(message, 78));
  if (f != null) {
    writer.writeEnum(
      78,
      f
    );
  }
  f = /** @type {!proto.proto.EvsePairingState} */ (jspb.Message.getField(message, 79));
  if (f != null) {
    writer.writeEnum(
      79,
      f
    );
  }
  f = message.getChargingPredictionSoc();
  if (f != null) {
    writer.writeMessage(
      80,
      f,
      proto.proto.ChargingPredictionSoc.serializeBinaryToWriter
    );
  }
  f = message.getChargingPredictionDepartureTime();
  if (f != null) {
    writer.writeMessage(
      81,
      f,
      proto.proto.ChargingPredictionDepartureTime.serializeBinaryToWriter
    );
  }
  f = message.getChargingScheduleActive();
  if (f != null) {
    writer.writeMessage(
      82,
      f,
      proto.proto.ChargingScheduleActive.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.proto.DcChargingProfile} */ (jspb.Message.getField(message, 83));
  if (f != null) {
    writer.writeEnum(
      83,
      f
    );
  }
  f = message.getChargeFlaps();
  if (f != null) {
    writer.writeMessage(
      84,
      f,
      proto.proto.ChargeFlaps.serializeBinaryToWriter
    );
  }
  f = message.getChargeInlets();
  if (f != null) {
    writer.writeMessage(
      85,
      f,
      proto.proto.ChargeInlets.serializeBinaryToWriter
    );
  }
  f = message.getChargingTimer();
  if (f != null) {
    writer.writeMessage(
      86,
      f,
      proto.proto.ChargingTimer.serializeBinaryToWriter
    );
  }
  f = message.getParkEventPictureTransmissionStatus();
  if (f != null) {
    writer.writeMessage(
      87,
      f,
      proto.proto.ParkEventPictureTransmissionStatus.serializeBinaryToWriter
    );
  }
  f = message.getChargingScheduleRequested();
  if (f != null) {
    writer.writeMessage(
      88,
      f,
      proto.proto.ChargingScheduleRequested.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.proto.ChargingFlapErrorDetails} */ (jspb.Message.getField(message, 89));
  if (f != null) {
    writer.writeEnum(
      89,
      f
    );
  }
  f = /** @type {!proto.proto.ChargingCompatibilityError} */ (jspb.Message.getField(message, 90));
  if (f != null) {
    writer.writeEnum(
      90,
      f
    );
  }
  f = /** @type {!proto.proto.HvBatteryPrecondAvailability} */ (jspb.Message.getField(message, 91));
  if (f != null) {
    writer.writeEnum(
      91,
      f
    );
  }
  f = message.getHvBatteryPrecondRequestState();
  if (f != null) {
    writer.writeMessage(
      92,
      f,
      proto.proto.HvBatteryPrecondRequestState.serializeBinaryToWriter
    );
  }
  f = message.getHvBatteryPrecondState();
  if (f != null) {
    writer.writeMessage(
      93,
      f,
      proto.proto.HvBatteryPrecondState.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.proto.AmgStageModeState} */ (jspb.Message.getField(message, 94));
  if (f != null) {
    writer.writeEnum(
      94,
      f
    );
  }
  f = message.getAmgStageModeError();
  if (f != null) {
    writer.writeMessage(
      95,
      f,
      proto.proto.AmgStageModeError.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.CombustionConsumptionUnit = {
  UNSPECIFIED_COMBUSTION_CONSUMPTION_UNIT: 0,
  LITER_PER_100KM: 1,
  KM_PER_LITER: 2,
  MPG_UK: 3,
  MPG_US: 4
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.ElectricityConsumptionUnit = {
  UNSPECIFIED_ELECTRICITY_CONSUMPTION_UNIT: 0,
  KWH_PER_100KM: 1,
  KM_PER_KWH: 2,
  KWH_PER_100MI: 3,
  M_PER_KWH: 4,
  MPGE: 5
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.GasConsumptionUnit = {
  UNSPECIFIED_GAS_CONSUMPTION_UNIT: 0,
  KG_PER_100KM: 1,
  KM_PER_KG: 2,
  M_PER_KG: 3
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.SpeedDistanceUnit = {
  UNSPECIFIED_SPEED_DISTANCE_UNIT: 0,
  KM_PER_H: 1,
  M_PER_H: 2
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.SpeedUnit = {
  UNSPECIFIED_SPEED_UNIT: 0,
  KM_PER_HOUR: 1,
  M_PER_HOUR: 2
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.DistanceUnit = {
  UNSPECIFIED_DISTANCE_UNIT: 0,
  KILOMETERS: 1,
  MILES: 2
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.TemperatureUnit = {
  UNSPECIFIED_TEMPERATURE_UNIT: 0,
  CELSIUS: 1,
  FAHRENHEIT: 2
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.PressureUnit = {
  UNSPECIFIED_PRESSURE_UNIT: 0,
  KPA: 1,
  BAR: 2,
  PSI: 3
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.RatioUnit = {
  UNSPECIFIED_RATIO_UNIT: 0,
  PERCENT: 1
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.ClockHourUnit = {
  UNSPECIFIED_CLOCK_HOUR_UNIT: 0,
  T12H: 1,
  T24H: 2
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.TcuConnectionStateLowChannelStatus = {
  UNKNOWN_TCU_CONNECTION_STATE: 0,
  INITIALLY_CONNECTED: 1,
  RECONNECTED: 2,
  DISCONNECTED: 3,
  UNPLANNED_DISCONNECTED: 4
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.ChargingCouplerErrorDetails = {
  CHARING_COUPLER_ERROR_DETAILS_NO_INFO_OR_ERROR_MESSAGE: 0,
  CHARING_COUPLER_ERROR_DETAILS_RELIEVE_CHARGE_COUPLER_AND_RETRY: 1,
  CHARING_COUPLER_ERROR_DETAILS_CONTACT_SERVICE_HOTLINE_FOR_EMERGENCY_UNLOCK: 2,
  CHARING_COUPLER_ERROR_DETAILS_UNPLUG_AND_REPLUG_CHARGE_COUPLER: 3,
  CHARING_COUPLER_ERROR_DETAILS_CHARGE_COUPLER_LOCK_DEFECT: 4
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo400V = {
  CHARGING_ERROR_IMPOSSIBLE_CHANGE_TO_400V_NO_INFO: 0,
  CHARGING_ERROR_IMPOSSIBLE_CHANGE_TO_400V_400V_IMPOSSIBLE_STUCK_TO_800V: 1
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo800V = {
  CHARGING_ERROR_IMPOSSIBLE_CHANGE_TO_800V_NO_INFO: 0,
  CHARGING_ERROR_IMPOSSIBLE_CHANGE_TO_800V_800V_IMPOSSIBLE_STUCK_TO_400V: 1
};

/**
 * @enum {number}
 */
proto.proto.VehicleAttributeStatus.ChargingErrorVehicleNoSupport400V = {
  CHARGING_ERROR_VEHICLE_NO_SUPPORT_400V_NO_INFO: 0,
  CHARGING_ERROR_VEHICLE_NO_SUPPORT_400V_400V_CHARGING_NOT_POSSIBLE: 1
};

/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.proto.VehicleAttributeStatus.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 timestamp_in_ms = 10;
 * @return {number}
 */
proto.proto.VehicleAttributeStatus.prototype.getTimestampInMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setTimestampInMs = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool changed = 2;
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.getChanged = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setChanged = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 status = 3;
 * @return {number}
 */
proto.proto.VehicleAttributeStatus.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated int32 service_ids = 30;
 * @return {!Array<number>}
 */
proto.proto.VehicleAttributeStatus.prototype.getServiceIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 30));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setServiceIdsList = function(value) {
  return jspb.Message.setField(this, 30, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.addServiceIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 30, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearServiceIdsList = function() {
  return this.setServiceIdsList([]);
};


/**
 * optional string display_value = 11;
 * @return {string}
 */
proto.proto.VehicleAttributeStatus.prototype.getDisplayValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setDisplayValue = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional CombustionConsumptionUnit combustion_consumption_unit = 12;
 * @return {!proto.proto.VehicleAttributeStatus.CombustionConsumptionUnit}
 */
proto.proto.VehicleAttributeStatus.prototype.getCombustionConsumptionUnit = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.CombustionConsumptionUnit} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.CombustionConsumptionUnit} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setCombustionConsumptionUnit = function(value) {
  return jspb.Message.setOneofField(this, 12, proto.proto.VehicleAttributeStatus.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearCombustionConsumptionUnit = function() {
  return jspb.Message.setOneofField(this, 12, proto.proto.VehicleAttributeStatus.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasCombustionConsumptionUnit = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional GasConsumptionUnit gas_consumption_unit = 13;
 * @return {!proto.proto.VehicleAttributeStatus.GasConsumptionUnit}
 */
proto.proto.VehicleAttributeStatus.prototype.getGasConsumptionUnit = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.GasConsumptionUnit} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.GasConsumptionUnit} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setGasConsumptionUnit = function(value) {
  return jspb.Message.setOneofField(this, 13, proto.proto.VehicleAttributeStatus.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearGasConsumptionUnit = function() {
  return jspb.Message.setOneofField(this, 13, proto.proto.VehicleAttributeStatus.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasGasConsumptionUnit = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ElectricityConsumptionUnit electricity_consumption_unit = 14;
 * @return {!proto.proto.VehicleAttributeStatus.ElectricityConsumptionUnit}
 */
proto.proto.VehicleAttributeStatus.prototype.getElectricityConsumptionUnit = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.ElectricityConsumptionUnit} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.ElectricityConsumptionUnit} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setElectricityConsumptionUnit = function(value) {
  return jspb.Message.setOneofField(this, 14, proto.proto.VehicleAttributeStatus.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearElectricityConsumptionUnit = function() {
  return jspb.Message.setOneofField(this, 14, proto.proto.VehicleAttributeStatus.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasElectricityConsumptionUnit = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional SpeedDistanceUnit speed_distance_unit = 15;
 * @return {!proto.proto.VehicleAttributeStatus.SpeedDistanceUnit}
 */
proto.proto.VehicleAttributeStatus.prototype.getSpeedDistanceUnit = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.SpeedDistanceUnit} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.SpeedDistanceUnit} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setSpeedDistanceUnit = function(value) {
  return jspb.Message.setOneofField(this, 15, proto.proto.VehicleAttributeStatus.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearSpeedDistanceUnit = function() {
  return jspb.Message.setOneofField(this, 15, proto.proto.VehicleAttributeStatus.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasSpeedDistanceUnit = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional SpeedUnit speed_unit = 25;
 * @return {!proto.proto.VehicleAttributeStatus.SpeedUnit}
 */
proto.proto.VehicleAttributeStatus.prototype.getSpeedUnit = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.SpeedUnit} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.SpeedUnit} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setSpeedUnit = function(value) {
  return jspb.Message.setOneofField(this, 25, proto.proto.VehicleAttributeStatus.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearSpeedUnit = function() {
  return jspb.Message.setOneofField(this, 25, proto.proto.VehicleAttributeStatus.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasSpeedUnit = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional DistanceUnit distance_unit = 26;
 * @return {!proto.proto.VehicleAttributeStatus.DistanceUnit}
 */
proto.proto.VehicleAttributeStatus.prototype.getDistanceUnit = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.DistanceUnit} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.DistanceUnit} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setDistanceUnit = function(value) {
  return jspb.Message.setOneofField(this, 26, proto.proto.VehicleAttributeStatus.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearDistanceUnit = function() {
  return jspb.Message.setOneofField(this, 26, proto.proto.VehicleAttributeStatus.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasDistanceUnit = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional TemperatureUnit temperature_unit = 16;
 * @return {!proto.proto.VehicleAttributeStatus.TemperatureUnit}
 */
proto.proto.VehicleAttributeStatus.prototype.getTemperatureUnit = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.TemperatureUnit} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.TemperatureUnit} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setTemperatureUnit = function(value) {
  return jspb.Message.setOneofField(this, 16, proto.proto.VehicleAttributeStatus.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearTemperatureUnit = function() {
  return jspb.Message.setOneofField(this, 16, proto.proto.VehicleAttributeStatus.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasTemperatureUnit = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional PressureUnit pressure_unit = 17;
 * @return {!proto.proto.VehicleAttributeStatus.PressureUnit}
 */
proto.proto.VehicleAttributeStatus.prototype.getPressureUnit = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.PressureUnit} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.PressureUnit} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setPressureUnit = function(value) {
  return jspb.Message.setOneofField(this, 17, proto.proto.VehicleAttributeStatus.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearPressureUnit = function() {
  return jspb.Message.setOneofField(this, 17, proto.proto.VehicleAttributeStatus.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasPressureUnit = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional RatioUnit ratio_unit = 18;
 * @return {!proto.proto.VehicleAttributeStatus.RatioUnit}
 */
proto.proto.VehicleAttributeStatus.prototype.getRatioUnit = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.RatioUnit} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.RatioUnit} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setRatioUnit = function(value) {
  return jspb.Message.setOneofField(this, 18, proto.proto.VehicleAttributeStatus.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearRatioUnit = function() {
  return jspb.Message.setOneofField(this, 18, proto.proto.VehicleAttributeStatus.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasRatioUnit = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ClockHourUnit clock_hour_unit = 19;
 * @return {!proto.proto.VehicleAttributeStatus.ClockHourUnit}
 */
proto.proto.VehicleAttributeStatus.prototype.getClockHourUnit = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.ClockHourUnit} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.ClockHourUnit} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setClockHourUnit = function(value) {
  return jspb.Message.setOneofField(this, 19, proto.proto.VehicleAttributeStatus.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearClockHourUnit = function() {
  return jspb.Message.setOneofField(this, 19, proto.proto.VehicleAttributeStatus.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasClockHourUnit = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int64 int_value = 4;
 * @return {number}
 */
proto.proto.VehicleAttributeStatus.prototype.getIntValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setIntValue = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearIntValue = function() {
  return jspb.Message.setOneofField(this, 4, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasIntValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool bool_value = 5;
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.getBoolValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setBoolValue = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearBoolValue = function() {
  return jspb.Message.setOneofField(this, 5, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasBoolValue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string string_value = 6;
 * @return {string}
 */
proto.proto.VehicleAttributeStatus.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearStringValue = function() {
  return jspb.Message.setOneofField(this, 6, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double double_value = 7;
 * @return {number}
 */
proto.proto.VehicleAttributeStatus.prototype.getDoubleValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setDoubleValue = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearDoubleValue = function() {
  return jspb.Message.setOneofField(this, 7, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasDoubleValue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool nil_value = 8;
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.getNilValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setNilValue = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearNilValue = function() {
  return jspb.Message.setOneofField(this, 8, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasNilValue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string unsupported_value = 9;
 * @return {string}
 */
proto.proto.VehicleAttributeStatus.prototype.getUnsupportedValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setUnsupportedValue = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearUnsupportedValue = function() {
  return jspb.Message.setOneofField(this, 9, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasUnsupportedValue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional TemperaturePointsValue temperature_points_value = 20;
 * @return {?proto.proto.TemperaturePointsValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getTemperaturePointsValue = function() {
  return /** @type{?proto.proto.TemperaturePointsValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.TemperaturePointsValue, 20));
};


/**
 * @param {?proto.proto.TemperaturePointsValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setTemperaturePointsValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearTemperaturePointsValue = function() {
  return this.setTemperaturePointsValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasTemperaturePointsValue = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional WeekdayTariffValue weekday_tariff_value = 21;
 * @return {?proto.proto.WeekdayTariffValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getWeekdayTariffValue = function() {
  return /** @type{?proto.proto.WeekdayTariffValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.WeekdayTariffValue, 21));
};


/**
 * @param {?proto.proto.WeekdayTariffValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setWeekdayTariffValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearWeekdayTariffValue = function() {
  return this.setWeekdayTariffValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasWeekdayTariffValue = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional WeekendTariffValue weekend_tariff_value = 22;
 * @return {?proto.proto.WeekendTariffValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getWeekendTariffValue = function() {
  return /** @type{?proto.proto.WeekendTariffValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.WeekendTariffValue, 22));
};


/**
 * @param {?proto.proto.WeekendTariffValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setWeekendTariffValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearWeekendTariffValue = function() {
  return this.setWeekendTariffValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasWeekendTariffValue = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional StateOfChargeProfileValue state_of_charge_profile_value = 23;
 * @return {?proto.proto.StateOfChargeProfileValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getStateOfChargeProfileValue = function() {
  return /** @type{?proto.proto.StateOfChargeProfileValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.StateOfChargeProfileValue, 23));
};


/**
 * @param {?proto.proto.StateOfChargeProfileValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setStateOfChargeProfileValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearStateOfChargeProfileValue = function() {
  return this.setStateOfChargeProfileValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasStateOfChargeProfileValue = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional WeeklySettingsHeadUnitValue weekly_settings_head_unit_value = 24;
 * @return {?proto.proto.WeeklySettingsHeadUnitValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getWeeklySettingsHeadUnitValue = function() {
  return /** @type{?proto.proto.WeeklySettingsHeadUnitValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.WeeklySettingsHeadUnitValue, 24));
};


/**
 * @param {?proto.proto.WeeklySettingsHeadUnitValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setWeeklySettingsHeadUnitValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearWeeklySettingsHeadUnitValue = function() {
  return this.setWeeklySettingsHeadUnitValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasWeeklySettingsHeadUnitValue = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional SpeedAlertConfigurationValue speed_alert_configuration_value = 27;
 * @return {?proto.proto.SpeedAlertConfigurationValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getSpeedAlertConfigurationValue = function() {
  return /** @type{?proto.proto.SpeedAlertConfigurationValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.SpeedAlertConfigurationValue, 27));
};


/**
 * @param {?proto.proto.SpeedAlertConfigurationValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setSpeedAlertConfigurationValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearSpeedAlertConfigurationValue = function() {
  return this.setSpeedAlertConfigurationValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasSpeedAlertConfigurationValue = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional EcoHistogramValue eco_histogram_value = 28;
 * @return {?proto.proto.EcoHistogramValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getEcoHistogramValue = function() {
  return /** @type{?proto.proto.EcoHistogramValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.EcoHistogramValue, 28));
};


/**
 * @param {?proto.proto.EcoHistogramValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setEcoHistogramValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearEcoHistogramValue = function() {
  return this.setEcoHistogramValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasEcoHistogramValue = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional WeeklyProfileValue weekly_profile_value = 29;
 * @return {?proto.proto.WeeklyProfileValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getWeeklyProfileValue = function() {
  return /** @type{?proto.proto.WeeklyProfileValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.WeeklyProfileValue, 29));
};


/**
 * @param {?proto.proto.WeeklyProfileValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setWeeklyProfileValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearWeeklyProfileValue = function() {
  return this.setWeeklyProfileValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasWeeklyProfileValue = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional ChargeProgramsValue charge_programs_value = 31;
 * @return {?proto.proto.ChargeProgramsValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargeProgramsValue = function() {
  return /** @type{?proto.proto.ChargeProgramsValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargeProgramsValue, 31));
};


/**
 * @param {?proto.proto.ChargeProgramsValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChargeProgramsValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargeProgramsValue = function() {
  return this.setChargeProgramsValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargeProgramsValue = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional ChargingBreakClockTimerValue chargingbreak_clocktimer_value = 32;
 * @return {?proto.proto.ChargingBreakClockTimerValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingbreakClocktimerValue = function() {
  return /** @type{?proto.proto.ChargingBreakClockTimerValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargingBreakClockTimerValue, 32));
};


/**
 * @param {?proto.proto.ChargingBreakClockTimerValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChargingbreakClocktimerValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingbreakClocktimerValue = function() {
  return this.setChargingbreakClocktimerValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingbreakClocktimerValue = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional ChargingPowerControl charging_power_control = 33;
 * @return {?proto.proto.ChargingPowerControl}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingPowerControl = function() {
  return /** @type{?proto.proto.ChargingPowerControl} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargingPowerControl, 33));
};


/**
 * @param {?proto.proto.ChargingPowerControl|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChargingPowerControl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingPowerControl = function() {
  return this.setChargingPowerControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingPowerControl = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional KeylineActivationStateValue keyline_activation_state_value = 36;
 * @return {?proto.proto.KeylineActivationStateValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getKeylineActivationStateValue = function() {
  return /** @type{?proto.proto.KeylineActivationStateValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.KeylineActivationStateValue, 36));
};


/**
 * @param {?proto.proto.KeylineActivationStateValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setKeylineActivationStateValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearKeylineActivationStateValue = function() {
  return this.setKeylineActivationStateValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasKeylineActivationStateValue = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional NextDepartureTimeValue next_departure_time_value = 37;
 * @return {?proto.proto.NextDepartureTimeValue}
 */
proto.proto.VehicleAttributeStatus.prototype.getNextDepartureTimeValue = function() {
  return /** @type{?proto.proto.NextDepartureTimeValue} */ (
    jspb.Message.getWrapperField(this, proto.proto.NextDepartureTimeValue, 37));
};


/**
 * @param {?proto.proto.NextDepartureTimeValue|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setNextDepartureTimeValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearNextDepartureTimeValue = function() {
  return this.setNextDepartureTimeValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasNextDepartureTimeValue = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional TcuConnectionStateLowChannelStatus tcu_connection_state_low_channel = 38;
 * @return {!proto.proto.VehicleAttributeStatus.TcuConnectionStateLowChannelStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getTcuConnectionStateLowChannel = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.TcuConnectionStateLowChannelStatus} */ (jspb.Message.getFieldWithDefault(this, 38, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.TcuConnectionStateLowChannelStatus} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setTcuConnectionStateLowChannel = function(value) {
  return jspb.Message.setOneofField(this, 38, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearTcuConnectionStateLowChannel = function() {
  return jspb.Message.setOneofField(this, 38, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasTcuConnectionStateLowChannel = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional TurnOffEnginePreWarning turn_off_engine_pre_warning = 39;
 * @return {!proto.proto.TurnOffEnginePreWarning}
 */
proto.proto.VehicleAttributeStatus.prototype.getTurnOffEnginePreWarning = function() {
  return /** @type {!proto.proto.TurnOffEnginePreWarning} */ (jspb.Message.getFieldWithDefault(this, 39, 0));
};


/**
 * @param {!proto.proto.TurnOffEnginePreWarning} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setTurnOffEnginePreWarning = function(value) {
  return jspb.Message.setOneofField(this, 39, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearTurnOffEnginePreWarning = function() {
  return jspb.Message.setOneofField(this, 39, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasTurnOffEnginePreWarning = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional ChildPresenceDetectionWarningLastEvent child_presence_detection_warning_last_event = 40;
 * @return {?proto.proto.ChildPresenceDetectionWarningLastEvent}
 */
proto.proto.VehicleAttributeStatus.prototype.getChildPresenceDetectionWarningLastEvent = function() {
  return /** @type{?proto.proto.ChildPresenceDetectionWarningLastEvent} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChildPresenceDetectionWarningLastEvent, 40));
};


/**
 * @param {?proto.proto.ChildPresenceDetectionWarningLastEvent|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChildPresenceDetectionWarningLastEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChildPresenceDetectionWarningLastEvent = function() {
  return this.setChildPresenceDetectionWarningLastEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChildPresenceDetectionWarningLastEvent = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional ChildPresenceDetectionWarningLevel child_presence_detection_warning_level = 41;
 * @return {?proto.proto.ChildPresenceDetectionWarningLevel}
 */
proto.proto.VehicleAttributeStatus.prototype.getChildPresenceDetectionWarningLevel = function() {
  return /** @type{?proto.proto.ChildPresenceDetectionWarningLevel} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChildPresenceDetectionWarningLevel, 41));
};


/**
 * @param {?proto.proto.ChildPresenceDetectionWarningLevel|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChildPresenceDetectionWarningLevel = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChildPresenceDetectionWarningLevel = function() {
  return this.setChildPresenceDetectionWarningLevel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChildPresenceDetectionWarningLevel = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional PerformanceLimitationModeStatus performance_limitation_mode_status = 42;
 * @return {?proto.proto.PerformanceLimitationModeStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getPerformanceLimitationModeStatus = function() {
  return /** @type{?proto.proto.PerformanceLimitationModeStatus} */ (
    jspb.Message.getWrapperField(this, proto.proto.PerformanceLimitationModeStatus, 42));
};


/**
 * @param {?proto.proto.PerformanceLimitationModeStatus|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setPerformanceLimitationModeStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearPerformanceLimitationModeStatus = function() {
  return this.setPerformanceLimitationModeStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasPerformanceLimitationModeStatus = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional BatteryHealth battery_health = 43;
 * @return {!proto.proto.BatteryHealth}
 */
proto.proto.VehicleAttributeStatus.prototype.getBatteryHealth = function() {
  return /** @type {!proto.proto.BatteryHealth} */ (jspb.Message.getFieldWithDefault(this, 43, 0));
};


/**
 * @param {!proto.proto.BatteryHealth} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setBatteryHealth = function(value) {
  return jspb.Message.setOneofField(this, 43, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearBatteryHealth = function() {
  return jspb.Message.setOneofField(this, 43, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasBatteryHealth = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional PrecondState precond_state = 44;
 * @return {?proto.proto.PrecondState}
 */
proto.proto.VehicleAttributeStatus.prototype.getPrecondState = function() {
  return /** @type{?proto.proto.PrecondState} */ (
    jspb.Message.getWrapperField(this, proto.proto.PrecondState, 44));
};


/**
 * @param {?proto.proto.PrecondState|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setPrecondState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 44, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearPrecondState = function() {
  return this.setPrecondState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasPrecondState = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional ExteriorMonitoringStatus exterior_monitoring_status = 45;
 * @return {?proto.proto.ExteriorMonitoringStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getExteriorMonitoringStatus = function() {
  return /** @type{?proto.proto.ExteriorMonitoringStatus} */ (
    jspb.Message.getWrapperField(this, proto.proto.ExteriorMonitoringStatus, 45));
};


/**
 * @param {?proto.proto.ExteriorMonitoringStatus|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setExteriorMonitoringStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 45, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearExteriorMonitoringStatus = function() {
  return this.setExteriorMonitoringStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasExteriorMonitoringStatus = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional InteriorMonitoringStatus interior_monitoring_status = 46;
 * @return {?proto.proto.InteriorMonitoringStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getInteriorMonitoringStatus = function() {
  return /** @type{?proto.proto.InteriorMonitoringStatus} */ (
    jspb.Message.getWrapperField(this, proto.proto.InteriorMonitoringStatus, 46));
};


/**
 * @param {?proto.proto.InteriorMonitoringStatus|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setInteriorMonitoringStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 46, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearInteriorMonitoringStatus = function() {
  return this.setInteriorMonitoringStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasInteriorMonitoringStatus = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional RemoteUpdateStartStatus remote_update_start_status = 47;
 * @return {?proto.proto.RemoteUpdateStartStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getRemoteUpdateStartStatus = function() {
  return /** @type{?proto.proto.RemoteUpdateStartStatus} */ (
    jspb.Message.getWrapperField(this, proto.proto.RemoteUpdateStartStatus, 47));
};


/**
 * @param {?proto.proto.RemoteUpdateStartStatus|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setRemoteUpdateStartStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 47, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearRemoteUpdateStartStatus = function() {
  return this.setRemoteUpdateStartStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasRemoteUpdateStartStatus = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional SohCalibrationRequired soh_calibration_required = 48;
 * @return {!proto.proto.SohCalibrationRequired}
 */
proto.proto.VehicleAttributeStatus.prototype.getSohCalibrationRequired = function() {
  return /** @type {!proto.proto.SohCalibrationRequired} */ (jspb.Message.getFieldWithDefault(this, 48, 0));
};


/**
 * @param {!proto.proto.SohCalibrationRequired} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setSohCalibrationRequired = function(value) {
  return jspb.Message.setOneofField(this, 48, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearSohCalibrationRequired = function() {
  return jspb.Message.setOneofField(this, 48, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasSohCalibrationRequired = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional SocCalibrationRequest soc_calibration_request = 49;
 * @return {!proto.proto.SocCalibrationRequest}
 */
proto.proto.VehicleAttributeStatus.prototype.getSocCalibrationRequest = function() {
  return /** @type {!proto.proto.SocCalibrationRequest} */ (jspb.Message.getFieldWithDefault(this, 49, 0));
};


/**
 * @param {!proto.proto.SocCalibrationRequest} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setSocCalibrationRequest = function(value) {
  return jspb.Message.setOneofField(this, 49, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearSocCalibrationRequest = function() {
  return jspb.Message.setOneofField(this, 49, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasSocCalibrationRequest = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional SohCalibrationRequest soh_calibration_request = 50;
 * @return {!proto.proto.SohCalibrationRequest}
 */
proto.proto.VehicleAttributeStatus.prototype.getSohCalibrationRequest = function() {
  return /** @type {!proto.proto.SohCalibrationRequest} */ (jspb.Message.getFieldWithDefault(this, 50, 0));
};


/**
 * @param {!proto.proto.SohCalibrationRequest} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setSohCalibrationRequest = function(value) {
  return jspb.Message.setOneofField(this, 50, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearSohCalibrationRequest = function() {
  return jspb.Message.setOneofField(this, 50, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasSohCalibrationRequest = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional SohCalibrationState soh_calibration_state = 51;
 * @return {!proto.proto.SohCalibrationState}
 */
proto.proto.VehicleAttributeStatus.prototype.getSohCalibrationState = function() {
  return /** @type {!proto.proto.SohCalibrationState} */ (jspb.Message.getFieldWithDefault(this, 51, 0));
};


/**
 * @param {!proto.proto.SohCalibrationState} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setSohCalibrationState = function(value) {
  return jspb.Message.setOneofField(this, 51, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearSohCalibrationState = function() {
  return jspb.Message.setOneofField(this, 51, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasSohCalibrationState = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional SohCalibrationPlanned soh_calibration_planned = 52;
 * @return {?proto.proto.SohCalibrationPlanned}
 */
proto.proto.VehicleAttributeStatus.prototype.getSohCalibrationPlanned = function() {
  return /** @type{?proto.proto.SohCalibrationPlanned} */ (
    jspb.Message.getWrapperField(this, proto.proto.SohCalibrationPlanned, 52));
};


/**
 * @param {?proto.proto.SohCalibrationPlanned|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setSohCalibrationPlanned = function(value) {
  return jspb.Message.setOneofWrapperField(this, 52, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearSohCalibrationPlanned = function() {
  return this.setSohCalibrationPlanned(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasSohCalibrationPlanned = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional SohFavorableConditions soh_favorable_conditions = 53;
 * @return {!proto.proto.SohFavorableConditions}
 */
proto.proto.VehicleAttributeStatus.prototype.getSohFavorableConditions = function() {
  return /** @type {!proto.proto.SohFavorableConditions} */ (jspb.Message.getFieldWithDefault(this, 53, 0));
};


/**
 * @param {!proto.proto.SohFavorableConditions} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setSohFavorableConditions = function(value) {
  return jspb.Message.setOneofField(this, 53, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearSohFavorableConditions = function() {
  return jspb.Message.setOneofField(this, 53, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasSohFavorableConditions = function() {
  return jspb.Message.getField(this, 53) != null;
};


/**
 * optional SohCalibrationNotifications soh_calibration_notifications = 54;
 * @return {!proto.proto.SohCalibrationNotifications}
 */
proto.proto.VehicleAttributeStatus.prototype.getSohCalibrationNotifications = function() {
  return /** @type {!proto.proto.SohCalibrationNotifications} */ (jspb.Message.getFieldWithDefault(this, 54, 0));
};


/**
 * @param {!proto.proto.SohCalibrationNotifications} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setSohCalibrationNotifications = function(value) {
  return jspb.Message.setOneofField(this, 54, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearSohCalibrationNotifications = function() {
  return jspb.Message.setOneofField(this, 54, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasSohCalibrationNotifications = function() {
  return jspb.Message.getField(this, 54) != null;
};


/**
 * optional ChargingPowerRestrictions charging_power_restrictions = 55;
 * @return {?proto.proto.ChargingPowerRestrictions}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingPowerRestrictions = function() {
  return /** @type{?proto.proto.ChargingPowerRestrictions} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargingPowerRestrictions, 55));
};


/**
 * @param {?proto.proto.ChargingPowerRestrictions|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChargingPowerRestrictions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 55, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingPowerRestrictions = function() {
  return this.setChargingPowerRestrictions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingPowerRestrictions = function() {
  return jspb.Message.getField(this, 55) != null;
};


/**
 * optional ChargingCouplerErrorDetails charging_coupler_error_details = 56;
 * @return {!proto.proto.VehicleAttributeStatus.ChargingCouplerErrorDetails}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingCouplerErrorDetails = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.ChargingCouplerErrorDetails} */ (jspb.Message.getFieldWithDefault(this, 56, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.ChargingCouplerErrorDetails} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setChargingCouplerErrorDetails = function(value) {
  return jspb.Message.setOneofField(this, 56, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingCouplerErrorDetails = function() {
  return jspb.Message.setOneofField(this, 56, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingCouplerErrorDetails = function() {
  return jspb.Message.getField(this, 56) != null;
};


/**
 * optional ChargingStopErrorDetails charging_stop_error_details = 57;
 * @return {!proto.proto.ChargingStopErrorDetails}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingStopErrorDetails = function() {
  return /** @type {!proto.proto.ChargingStopErrorDetails} */ (jspb.Message.getFieldWithDefault(this, 57, 0));
};


/**
 * @param {!proto.proto.ChargingStopErrorDetails} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setChargingStopErrorDetails = function(value) {
  return jspb.Message.setOneofField(this, 57, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingStopErrorDetails = function() {
  return jspb.Message.setOneofField(this, 57, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingStopErrorDetails = function() {
  return jspb.Message.getField(this, 57) != null;
};


/**
 * optional ChargingErrorVehicleNoSupport400V charging_error_vehicle_no_support_400v = 58;
 * @return {!proto.proto.VehicleAttributeStatus.ChargingErrorVehicleNoSupport400V}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingErrorVehicleNoSupport400v = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.ChargingErrorVehicleNoSupport400V} */ (jspb.Message.getFieldWithDefault(this, 58, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.ChargingErrorVehicleNoSupport400V} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setChargingErrorVehicleNoSupport400v = function(value) {
  return jspb.Message.setOneofField(this, 58, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingErrorVehicleNoSupport400v = function() {
  return jspb.Message.setOneofField(this, 58, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingErrorVehicleNoSupport400v = function() {
  return jspb.Message.getField(this, 58) != null;
};


/**
 * optional ChargingErrorImpossibleChangeTo400V charging_error_impossible_change_to_400v = 59;
 * @return {!proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo400V}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingErrorImpossibleChangeTo400v = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo400V} */ (jspb.Message.getFieldWithDefault(this, 59, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo400V} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setChargingErrorImpossibleChangeTo400v = function(value) {
  return jspb.Message.setOneofField(this, 59, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingErrorImpossibleChangeTo400v = function() {
  return jspb.Message.setOneofField(this, 59, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingErrorImpossibleChangeTo400v = function() {
  return jspb.Message.getField(this, 59) != null;
};


/**
 * optional ChargingErrorImpossibleChangeTo800V charging_error_impossible_change_to_800v = 60;
 * @return {!proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo800V}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingErrorImpossibleChangeTo800v = function() {
  return /** @type {!proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo800V} */ (jspb.Message.getFieldWithDefault(this, 60, 0));
};


/**
 * @param {!proto.proto.VehicleAttributeStatus.ChargingErrorImpossibleChangeTo800V} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setChargingErrorImpossibleChangeTo800v = function(value) {
  return jspb.Message.setOneofField(this, 60, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingErrorImpossibleChangeTo800v = function() {
  return jspb.Message.setOneofField(this, 60, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingErrorImpossibleChangeTo800v = function() {
  return jspb.Message.getField(this, 60) != null;
};


/**
 * optional PrecondOperabilityState precond_operability_state = 61;
 * @return {?proto.proto.PrecondOperabilityState}
 */
proto.proto.VehicleAttributeStatus.prototype.getPrecondOperabilityState = function() {
  return /** @type{?proto.proto.PrecondOperabilityState} */ (
    jspb.Message.getWrapperField(this, proto.proto.PrecondOperabilityState, 61));
};


/**
 * @param {?proto.proto.PrecondOperabilityState|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setPrecondOperabilityState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 61, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearPrecondOperabilityState = function() {
  return this.setPrecondOperabilityState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasPrecondOperabilityState = function() {
  return jspb.Message.getField(this, 61) != null;
};


/**
 * optional PictureRecordingStatus picture_recording_status = 62;
 * @return {!proto.proto.PictureRecordingStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getPictureRecordingStatus = function() {
  return /** @type {!proto.proto.PictureRecordingStatus} */ (jspb.Message.getFieldWithDefault(this, 62, 0));
};


/**
 * @param {!proto.proto.PictureRecordingStatus} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setPictureRecordingStatus = function(value) {
  return jspb.Message.setOneofField(this, 62, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearPictureRecordingStatus = function() {
  return jspb.Message.setOneofField(this, 62, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasPictureRecordingStatus = function() {
  return jspb.Message.getField(this, 62) != null;
};


/**
 * optional ParkEventPictureSelectionStatus park_event_picture_selection_status = 63;
 * @return {!proto.proto.ParkEventPictureSelectionStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getParkEventPictureSelectionStatus = function() {
  return /** @type {!proto.proto.ParkEventPictureSelectionStatus} */ (jspb.Message.getFieldWithDefault(this, 63, 0));
};


/**
 * @param {!proto.proto.ParkEventPictureSelectionStatus} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setParkEventPictureSelectionStatus = function(value) {
  return jspb.Message.setOneofField(this, 63, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearParkEventPictureSelectionStatus = function() {
  return jspb.Message.setOneofField(this, 63, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasParkEventPictureSelectionStatus = function() {
  return jspb.Message.getField(this, 63) != null;
};


/**
 * optional PanicAlarmActive panic_alarm_active = 64;
 * @return {!proto.proto.PanicAlarmActive}
 */
proto.proto.VehicleAttributeStatus.prototype.getPanicAlarmActive = function() {
  return /** @type {!proto.proto.PanicAlarmActive} */ (jspb.Message.getFieldWithDefault(this, 64, 0));
};


/**
 * @param {!proto.proto.PanicAlarmActive} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setPanicAlarmActive = function(value) {
  return jspb.Message.setOneofField(this, 64, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearPanicAlarmActive = function() {
  return jspb.Message.setOneofField(this, 64, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasPanicAlarmActive = function() {
  return jspb.Message.getField(this, 64) != null;
};


/**
 * optional InteriorProtectionSelectionStatus interior_protection_selection_status = 65;
 * @return {!proto.proto.InteriorProtectionSelectionStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getInteriorProtectionSelectionStatus = function() {
  return /** @type {!proto.proto.InteriorProtectionSelectionStatus} */ (jspb.Message.getFieldWithDefault(this, 65, 0));
};


/**
 * @param {!proto.proto.InteriorProtectionSelectionStatus} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setInteriorProtectionSelectionStatus = function(value) {
  return jspb.Message.setOneofField(this, 65, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearInteriorProtectionSelectionStatus = function() {
  return jspb.Message.setOneofField(this, 65, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasInteriorProtectionSelectionStatus = function() {
  return jspb.Message.getField(this, 65) != null;
};


/**
 * optional InteriorProtectionActivationStatus interior_protection_activation_status = 66;
 * @return {!proto.proto.InteriorProtectionActivationStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getInteriorProtectionActivationStatus = function() {
  return /** @type {!proto.proto.InteriorProtectionActivationStatus} */ (jspb.Message.getFieldWithDefault(this, 66, 0));
};


/**
 * @param {!proto.proto.InteriorProtectionActivationStatus} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setInteriorProtectionActivationStatus = function(value) {
  return jspb.Message.setOneofField(this, 66, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearInteriorProtectionActivationStatus = function() {
  return jspb.Message.setOneofField(this, 66, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasInteriorProtectionActivationStatus = function() {
  return jspb.Message.getField(this, 66) != null;
};


/**
 * optional TowProtectionSelectionStatus tow_protection_selection_status = 67;
 * @return {!proto.proto.TowProtectionSelectionStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getTowProtectionSelectionStatus = function() {
  return /** @type {!proto.proto.TowProtectionSelectionStatus} */ (jspb.Message.getFieldWithDefault(this, 67, 0));
};


/**
 * @param {!proto.proto.TowProtectionSelectionStatus} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setTowProtectionSelectionStatus = function(value) {
  return jspb.Message.setOneofField(this, 67, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearTowProtectionSelectionStatus = function() {
  return jspb.Message.setOneofField(this, 67, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasTowProtectionSelectionStatus = function() {
  return jspb.Message.getField(this, 67) != null;
};


/**
 * optional TowProtectionActivationStatus tow_protection_activation_status = 68;
 * @return {!proto.proto.TowProtectionActivationStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getTowProtectionActivationStatus = function() {
  return /** @type {!proto.proto.TowProtectionActivationStatus} */ (jspb.Message.getFieldWithDefault(this, 68, 0));
};


/**
 * @param {!proto.proto.TowProtectionActivationStatus} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setTowProtectionActivationStatus = function(value) {
  return jspb.Message.setOneofField(this, 68, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearTowProtectionActivationStatus = function() {
  return jspb.Message.setOneofField(this, 68, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasTowProtectionActivationStatus = function() {
  return jspb.Message.getField(this, 68) != null;
};


/**
 * optional VehicleTheftAlarmInactiveReason vehicle_theft_alarm_inactive_reason = 69;
 * @return {!proto.proto.VehicleTheftAlarmInactiveReason}
 */
proto.proto.VehicleAttributeStatus.prototype.getVehicleTheftAlarmInactiveReason = function() {
  return /** @type {!proto.proto.VehicleTheftAlarmInactiveReason} */ (jspb.Message.getFieldWithDefault(this, 69, 0));
};


/**
 * @param {!proto.proto.VehicleTheftAlarmInactiveReason} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setVehicleTheftAlarmInactiveReason = function(value) {
  return jspb.Message.setOneofField(this, 69, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearVehicleTheftAlarmInactiveReason = function() {
  return jspb.Message.setOneofField(this, 69, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasVehicleTheftAlarmInactiveReason = function() {
  return jspb.Message.getField(this, 69) != null;
};


/**
 * optional ParkCollisionSelectionStatus park_collision_selection_status = 70;
 * @return {!proto.proto.ParkCollisionSelectionStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getParkCollisionSelectionStatus = function() {
  return /** @type {!proto.proto.ParkCollisionSelectionStatus} */ (jspb.Message.getFieldWithDefault(this, 70, 0));
};


/**
 * @param {!proto.proto.ParkCollisionSelectionStatus} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setParkCollisionSelectionStatus = function(value) {
  return jspb.Message.setOneofField(this, 70, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearParkCollisionSelectionStatus = function() {
  return jspb.Message.setOneofField(this, 70, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasParkCollisionSelectionStatus = function() {
  return jspb.Message.getField(this, 70) != null;
};


/**
 * optional ParkCollisionActivationStatus park_collision_activation_status = 71;
 * @return {!proto.proto.ParkCollisionActivationStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getParkCollisionActivationStatus = function() {
  return /** @type {!proto.proto.ParkCollisionActivationStatus} */ (jspb.Message.getFieldWithDefault(this, 71, 0));
};


/**
 * @param {!proto.proto.ParkCollisionActivationStatus} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setParkCollisionActivationStatus = function(value) {
  return jspb.Message.setOneofField(this, 71, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearParkCollisionActivationStatus = function() {
  return jspb.Message.setOneofField(this, 71, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasParkCollisionActivationStatus = function() {
  return jspb.Message.getField(this, 71) != null;
};


/**
 * optional ParkCollisionInactiveReason park_collision_inactive_reason = 72;
 * @return {!proto.proto.ParkCollisionInactiveReason}
 */
proto.proto.VehicleAttributeStatus.prototype.getParkCollisionInactiveReason = function() {
  return /** @type {!proto.proto.ParkCollisionInactiveReason} */ (jspb.Message.getFieldWithDefault(this, 72, 0));
};


/**
 * @param {!proto.proto.ParkCollisionInactiveReason} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setParkCollisionInactiveReason = function(value) {
  return jspb.Message.setOneofField(this, 72, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearParkCollisionInactiveReason = function() {
  return jspb.Message.setOneofField(this, 72, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasParkCollisionInactiveReason = function() {
  return jspb.Message.getField(this, 72) != null;
};


/**
 * optional ParkCollisionPictureTransferStatus park_collision_picture_transfer_status = 73;
 * @return {!proto.proto.ParkCollisionPictureTransferStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getParkCollisionPictureTransferStatus = function() {
  return /** @type {!proto.proto.ParkCollisionPictureTransferStatus} */ (jspb.Message.getFieldWithDefault(this, 73, 0));
};


/**
 * @param {!proto.proto.ParkCollisionPictureTransferStatus} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setParkCollisionPictureTransferStatus = function(value) {
  return jspb.Message.setOneofField(this, 73, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearParkCollisionPictureTransferStatus = function() {
  return jspb.Message.setOneofField(this, 73, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasParkCollisionPictureTransferStatus = function() {
  return jspb.Message.getField(this, 73) != null;
};


/**
 * optional EmergencyPowerSupply emergency_power_supply = 78;
 * @return {!proto.proto.EmergencyPowerSupply}
 */
proto.proto.VehicleAttributeStatus.prototype.getEmergencyPowerSupply = function() {
  return /** @type {!proto.proto.EmergencyPowerSupply} */ (jspb.Message.getFieldWithDefault(this, 78, 0));
};


/**
 * @param {!proto.proto.EmergencyPowerSupply} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setEmergencyPowerSupply = function(value) {
  return jspb.Message.setOneofField(this, 78, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearEmergencyPowerSupply = function() {
  return jspb.Message.setOneofField(this, 78, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasEmergencyPowerSupply = function() {
  return jspb.Message.getField(this, 78) != null;
};


/**
 * optional EvsePairingState evse_pairing_state = 79;
 * @return {!proto.proto.EvsePairingState}
 */
proto.proto.VehicleAttributeStatus.prototype.getEvsePairingState = function() {
  return /** @type {!proto.proto.EvsePairingState} */ (jspb.Message.getFieldWithDefault(this, 79, 0));
};


/**
 * @param {!proto.proto.EvsePairingState} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setEvsePairingState = function(value) {
  return jspb.Message.setOneofField(this, 79, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearEvsePairingState = function() {
  return jspb.Message.setOneofField(this, 79, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasEvsePairingState = function() {
  return jspb.Message.getField(this, 79) != null;
};


/**
 * optional ChargingPredictionSoc charging_prediction_soc = 80;
 * @return {?proto.proto.ChargingPredictionSoc}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingPredictionSoc = function() {
  return /** @type{?proto.proto.ChargingPredictionSoc} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargingPredictionSoc, 80));
};


/**
 * @param {?proto.proto.ChargingPredictionSoc|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChargingPredictionSoc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 80, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingPredictionSoc = function() {
  return this.setChargingPredictionSoc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingPredictionSoc = function() {
  return jspb.Message.getField(this, 80) != null;
};


/**
 * optional ChargingPredictionDepartureTime charging_prediction_departure_time = 81;
 * @return {?proto.proto.ChargingPredictionDepartureTime}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingPredictionDepartureTime = function() {
  return /** @type{?proto.proto.ChargingPredictionDepartureTime} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargingPredictionDepartureTime, 81));
};


/**
 * @param {?proto.proto.ChargingPredictionDepartureTime|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChargingPredictionDepartureTime = function(value) {
  return jspb.Message.setOneofWrapperField(this, 81, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingPredictionDepartureTime = function() {
  return this.setChargingPredictionDepartureTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingPredictionDepartureTime = function() {
  return jspb.Message.getField(this, 81) != null;
};


/**
 * optional ChargingScheduleActive charging_schedule_active = 82;
 * @return {?proto.proto.ChargingScheduleActive}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingScheduleActive = function() {
  return /** @type{?proto.proto.ChargingScheduleActive} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargingScheduleActive, 82));
};


/**
 * @param {?proto.proto.ChargingScheduleActive|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChargingScheduleActive = function(value) {
  return jspb.Message.setOneofWrapperField(this, 82, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingScheduleActive = function() {
  return this.setChargingScheduleActive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingScheduleActive = function() {
  return jspb.Message.getField(this, 82) != null;
};


/**
 * optional DcChargingProfile dc_charging_profile = 83;
 * @return {!proto.proto.DcChargingProfile}
 */
proto.proto.VehicleAttributeStatus.prototype.getDcChargingProfile = function() {
  return /** @type {!proto.proto.DcChargingProfile} */ (jspb.Message.getFieldWithDefault(this, 83, 0));
};


/**
 * @param {!proto.proto.DcChargingProfile} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setDcChargingProfile = function(value) {
  return jspb.Message.setOneofField(this, 83, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearDcChargingProfile = function() {
  return jspb.Message.setOneofField(this, 83, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasDcChargingProfile = function() {
  return jspb.Message.getField(this, 83) != null;
};


/**
 * optional ChargeFlaps charge_flaps = 84;
 * @return {?proto.proto.ChargeFlaps}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargeFlaps = function() {
  return /** @type{?proto.proto.ChargeFlaps} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargeFlaps, 84));
};


/**
 * @param {?proto.proto.ChargeFlaps|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChargeFlaps = function(value) {
  return jspb.Message.setOneofWrapperField(this, 84, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargeFlaps = function() {
  return this.setChargeFlaps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargeFlaps = function() {
  return jspb.Message.getField(this, 84) != null;
};


/**
 * optional ChargeInlets charge_inlets = 85;
 * @return {?proto.proto.ChargeInlets}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargeInlets = function() {
  return /** @type{?proto.proto.ChargeInlets} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargeInlets, 85));
};


/**
 * @param {?proto.proto.ChargeInlets|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChargeInlets = function(value) {
  return jspb.Message.setOneofWrapperField(this, 85, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargeInlets = function() {
  return this.setChargeInlets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargeInlets = function() {
  return jspb.Message.getField(this, 85) != null;
};


/**
 * optional ChargingTimer charging_timer = 86;
 * @return {?proto.proto.ChargingTimer}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingTimer = function() {
  return /** @type{?proto.proto.ChargingTimer} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargingTimer, 86));
};


/**
 * @param {?proto.proto.ChargingTimer|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChargingTimer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 86, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingTimer = function() {
  return this.setChargingTimer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingTimer = function() {
  return jspb.Message.getField(this, 86) != null;
};


/**
 * optional ParkEventPictureTransmissionStatus park_event_picture_transmission_status = 87;
 * @return {?proto.proto.ParkEventPictureTransmissionStatus}
 */
proto.proto.VehicleAttributeStatus.prototype.getParkEventPictureTransmissionStatus = function() {
  return /** @type{?proto.proto.ParkEventPictureTransmissionStatus} */ (
    jspb.Message.getWrapperField(this, proto.proto.ParkEventPictureTransmissionStatus, 87));
};


/**
 * @param {?proto.proto.ParkEventPictureTransmissionStatus|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setParkEventPictureTransmissionStatus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 87, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearParkEventPictureTransmissionStatus = function() {
  return this.setParkEventPictureTransmissionStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasParkEventPictureTransmissionStatus = function() {
  return jspb.Message.getField(this, 87) != null;
};


/**
 * optional ChargingScheduleRequested charging_schedule_requested = 88;
 * @return {?proto.proto.ChargingScheduleRequested}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingScheduleRequested = function() {
  return /** @type{?proto.proto.ChargingScheduleRequested} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargingScheduleRequested, 88));
};


/**
 * @param {?proto.proto.ChargingScheduleRequested|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setChargingScheduleRequested = function(value) {
  return jspb.Message.setOneofWrapperField(this, 88, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingScheduleRequested = function() {
  return this.setChargingScheduleRequested(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingScheduleRequested = function() {
  return jspb.Message.getField(this, 88) != null;
};


/**
 * optional ChargingFlapErrorDetails charging_flap_error_details = 89;
 * @return {!proto.proto.ChargingFlapErrorDetails}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingFlapErrorDetails = function() {
  return /** @type {!proto.proto.ChargingFlapErrorDetails} */ (jspb.Message.getFieldWithDefault(this, 89, 0));
};


/**
 * @param {!proto.proto.ChargingFlapErrorDetails} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setChargingFlapErrorDetails = function(value) {
  return jspb.Message.setOneofField(this, 89, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingFlapErrorDetails = function() {
  return jspb.Message.setOneofField(this, 89, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingFlapErrorDetails = function() {
  return jspb.Message.getField(this, 89) != null;
};


/**
 * optional ChargingCompatibilityError charging_compatibility_error = 90;
 * @return {!proto.proto.ChargingCompatibilityError}
 */
proto.proto.VehicleAttributeStatus.prototype.getChargingCompatibilityError = function() {
  return /** @type {!proto.proto.ChargingCompatibilityError} */ (jspb.Message.getFieldWithDefault(this, 90, 0));
};


/**
 * @param {!proto.proto.ChargingCompatibilityError} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setChargingCompatibilityError = function(value) {
  return jspb.Message.setOneofField(this, 90, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearChargingCompatibilityError = function() {
  return jspb.Message.setOneofField(this, 90, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasChargingCompatibilityError = function() {
  return jspb.Message.getField(this, 90) != null;
};


/**
 * optional HvBatteryPrecondAvailability hv_battery_precond_availability = 91;
 * @return {!proto.proto.HvBatteryPrecondAvailability}
 */
proto.proto.VehicleAttributeStatus.prototype.getHvBatteryPrecondAvailability = function() {
  return /** @type {!proto.proto.HvBatteryPrecondAvailability} */ (jspb.Message.getFieldWithDefault(this, 91, 0));
};


/**
 * @param {!proto.proto.HvBatteryPrecondAvailability} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setHvBatteryPrecondAvailability = function(value) {
  return jspb.Message.setOneofField(this, 91, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearHvBatteryPrecondAvailability = function() {
  return jspb.Message.setOneofField(this, 91, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasHvBatteryPrecondAvailability = function() {
  return jspb.Message.getField(this, 91) != null;
};


/**
 * optional HvBatteryPrecondRequestState hv_battery_precond_request_state = 92;
 * @return {?proto.proto.HvBatteryPrecondRequestState}
 */
proto.proto.VehicleAttributeStatus.prototype.getHvBatteryPrecondRequestState = function() {
  return /** @type{?proto.proto.HvBatteryPrecondRequestState} */ (
    jspb.Message.getWrapperField(this, proto.proto.HvBatteryPrecondRequestState, 92));
};


/**
 * @param {?proto.proto.HvBatteryPrecondRequestState|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setHvBatteryPrecondRequestState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 92, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearHvBatteryPrecondRequestState = function() {
  return this.setHvBatteryPrecondRequestState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasHvBatteryPrecondRequestState = function() {
  return jspb.Message.getField(this, 92) != null;
};


/**
 * optional HvBatteryPrecondState hv_battery_precond_state = 93;
 * @return {?proto.proto.HvBatteryPrecondState}
 */
proto.proto.VehicleAttributeStatus.prototype.getHvBatteryPrecondState = function() {
  return /** @type{?proto.proto.HvBatteryPrecondState} */ (
    jspb.Message.getWrapperField(this, proto.proto.HvBatteryPrecondState, 93));
};


/**
 * @param {?proto.proto.HvBatteryPrecondState|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setHvBatteryPrecondState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 93, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearHvBatteryPrecondState = function() {
  return this.setHvBatteryPrecondState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasHvBatteryPrecondState = function() {
  return jspb.Message.getField(this, 93) != null;
};


/**
 * optional AmgStageModeState amg_stage_mode_state = 94;
 * @return {!proto.proto.AmgStageModeState}
 */
proto.proto.VehicleAttributeStatus.prototype.getAmgStageModeState = function() {
  return /** @type {!proto.proto.AmgStageModeState} */ (jspb.Message.getFieldWithDefault(this, 94, 0));
};


/**
 * @param {!proto.proto.AmgStageModeState} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.setAmgStageModeState = function(value) {
  return jspb.Message.setOneofField(this, 94, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearAmgStageModeState = function() {
  return jspb.Message.setOneofField(this, 94, proto.proto.VehicleAttributeStatus.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasAmgStageModeState = function() {
  return jspb.Message.getField(this, 94) != null;
};


/**
 * optional AmgStageModeError amg_stage_mode_error = 95;
 * @return {?proto.proto.AmgStageModeError}
 */
proto.proto.VehicleAttributeStatus.prototype.getAmgStageModeError = function() {
  return /** @type{?proto.proto.AmgStageModeError} */ (
    jspb.Message.getWrapperField(this, proto.proto.AmgStageModeError, 95));
};


/**
 * @param {?proto.proto.AmgStageModeError|undefined} value
 * @return {!proto.proto.VehicleAttributeStatus} returns this
*/
proto.proto.VehicleAttributeStatus.prototype.setAmgStageModeError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 95, proto.proto.VehicleAttributeStatus.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.VehicleAttributeStatus} returns this
 */
proto.proto.VehicleAttributeStatus.prototype.clearAmgStageModeError = function() {
  return this.setAmgStageModeError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.VehicleAttributeStatus.prototype.hasAmgStageModeError = function() {
  return jspb.Message.getField(this, 95) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.AmgStageModeError.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AmgStageModeError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AmgStageModeError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AmgStageModeError.toObject = function(includeInstance, msg) {
  var f, obj = {
rearSpoiler: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
bowWave: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
diffuser: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
light: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
mirror: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
sound: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
airControlSystem: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
venturi: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.AmgStageModeError}
 */
proto.proto.AmgStageModeError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AmgStageModeError;
  return proto.proto.AmgStageModeError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AmgStageModeError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AmgStageModeError}
 */
proto.proto.AmgStageModeError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearSpoiler(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBowWave(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDiffuser(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLight(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMirror(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSound(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAirControlSystem(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVenturi(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.AmgStageModeError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AmgStageModeError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AmgStageModeError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AmgStageModeError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRearSpoiler();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getBowWave();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDiffuser();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getLight();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getMirror();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getSound();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getAirControlSystem();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getVenturi();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional bool rear_spoiler = 1;
 * @return {boolean}
 */
proto.proto.AmgStageModeError.prototype.getRearSpoiler = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.AmgStageModeError} returns this
 */
proto.proto.AmgStageModeError.prototype.setRearSpoiler = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool bow_wave = 2;
 * @return {boolean}
 */
proto.proto.AmgStageModeError.prototype.getBowWave = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.AmgStageModeError} returns this
 */
proto.proto.AmgStageModeError.prototype.setBowWave = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool diffuser = 3;
 * @return {boolean}
 */
proto.proto.AmgStageModeError.prototype.getDiffuser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.AmgStageModeError} returns this
 */
proto.proto.AmgStageModeError.prototype.setDiffuser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool light = 4;
 * @return {boolean}
 */
proto.proto.AmgStageModeError.prototype.getLight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.AmgStageModeError} returns this
 */
proto.proto.AmgStageModeError.prototype.setLight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool mirror = 5;
 * @return {boolean}
 */
proto.proto.AmgStageModeError.prototype.getMirror = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.AmgStageModeError} returns this
 */
proto.proto.AmgStageModeError.prototype.setMirror = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool sound = 6;
 * @return {boolean}
 */
proto.proto.AmgStageModeError.prototype.getSound = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.AmgStageModeError} returns this
 */
proto.proto.AmgStageModeError.prototype.setSound = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool air_control_system = 7;
 * @return {boolean}
 */
proto.proto.AmgStageModeError.prototype.getAirControlSystem = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.AmgStageModeError} returns this
 */
proto.proto.AmgStageModeError.prototype.setAirControlSystem = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool venturi = 8;
 * @return {boolean}
 */
proto.proto.AmgStageModeError.prototype.getVenturi = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.AmgStageModeError} returns this
 */
proto.proto.AmgStageModeError.prototype.setVenturi = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.HvBatteryPrecondState.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HvBatteryPrecondState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HvBatteryPrecondState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HvBatteryPrecondState.toObject = function(includeInstance, msg) {
  var f, obj = {
charging: jspb.Message.getFieldWithDefault(msg, 1, 0),
discharging: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.HvBatteryPrecondState}
 */
proto.proto.HvBatteryPrecondState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HvBatteryPrecondState;
  return proto.proto.HvBatteryPrecondState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HvBatteryPrecondState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HvBatteryPrecondState}
 */
proto.proto.HvBatteryPrecondState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.HvBatteryPrecondStatesCharging} */ (reader.readEnum());
      msg.setCharging(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.HvBatteryPrecondStatesDischarging} */ (reader.readEnum());
      msg.setDischarging(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.HvBatteryPrecondState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HvBatteryPrecondState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HvBatteryPrecondState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HvBatteryPrecondState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCharging();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDischarging();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional HvBatteryPrecondStatesCharging charging = 1;
 * @return {!proto.proto.HvBatteryPrecondStatesCharging}
 */
proto.proto.HvBatteryPrecondState.prototype.getCharging = function() {
  return /** @type {!proto.proto.HvBatteryPrecondStatesCharging} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.HvBatteryPrecondStatesCharging} value
 * @return {!proto.proto.HvBatteryPrecondState} returns this
 */
proto.proto.HvBatteryPrecondState.prototype.setCharging = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional HvBatteryPrecondStatesDischarging discharging = 2;
 * @return {!proto.proto.HvBatteryPrecondStatesDischarging}
 */
proto.proto.HvBatteryPrecondState.prototype.getDischarging = function() {
  return /** @type {!proto.proto.HvBatteryPrecondStatesDischarging} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.HvBatteryPrecondStatesDischarging} value
 * @return {!proto.proto.HvBatteryPrecondState} returns this
 */
proto.proto.HvBatteryPrecondState.prototype.setDischarging = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.HvBatteryPrecondRequestState.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HvBatteryPrecondRequestState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HvBatteryPrecondRequestState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HvBatteryPrecondRequestState.toObject = function(includeInstance, msg) {
  var f, obj = {
mainCategory: jspb.Message.getFieldWithDefault(msg, 1, 0),
subCategory: jspb.Message.getFieldWithDefault(msg, 2, 0),
specificCategory: jspb.Message.getFieldWithDefault(msg, 3, 0),
method: jspb.Message.getFieldWithDefault(msg, 4, 0),
status: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.HvBatteryPrecondRequestState}
 */
proto.proto.HvBatteryPrecondRequestState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HvBatteryPrecondRequestState;
  return proto.proto.HvBatteryPrecondRequestState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HvBatteryPrecondRequestState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HvBatteryPrecondRequestState}
 */
proto.proto.HvBatteryPrecondRequestState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.MainCategory} */ (reader.readEnum());
      msg.setMainCategory(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.SubCategory} */ (reader.readEnum());
      msg.setSubCategory(value);
      break;
    case 3:
      var value = /** @type {!proto.proto.SpecificCategory} */ (reader.readEnum());
      msg.setSpecificCategory(value);
      break;
    case 4:
      var value = /** @type {!proto.proto.Method} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 5:
      var value = /** @type {!proto.proto.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.HvBatteryPrecondRequestState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HvBatteryPrecondRequestState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HvBatteryPrecondRequestState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HvBatteryPrecondRequestState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMainCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSubCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSpecificCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional MainCategory main_category = 1;
 * @return {!proto.proto.MainCategory}
 */
proto.proto.HvBatteryPrecondRequestState.prototype.getMainCategory = function() {
  return /** @type {!proto.proto.MainCategory} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.MainCategory} value
 * @return {!proto.proto.HvBatteryPrecondRequestState} returns this
 */
proto.proto.HvBatteryPrecondRequestState.prototype.setMainCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SubCategory sub_category = 2;
 * @return {!proto.proto.SubCategory}
 */
proto.proto.HvBatteryPrecondRequestState.prototype.getSubCategory = function() {
  return /** @type {!proto.proto.SubCategory} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.SubCategory} value
 * @return {!proto.proto.HvBatteryPrecondRequestState} returns this
 */
proto.proto.HvBatteryPrecondRequestState.prototype.setSubCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SpecificCategory specific_category = 3;
 * @return {!proto.proto.SpecificCategory}
 */
proto.proto.HvBatteryPrecondRequestState.prototype.getSpecificCategory = function() {
  return /** @type {!proto.proto.SpecificCategory} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.proto.SpecificCategory} value
 * @return {!proto.proto.HvBatteryPrecondRequestState} returns this
 */
proto.proto.HvBatteryPrecondRequestState.prototype.setSpecificCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Method method = 4;
 * @return {!proto.proto.Method}
 */
proto.proto.HvBatteryPrecondRequestState.prototype.getMethod = function() {
  return /** @type {!proto.proto.Method} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.proto.Method} value
 * @return {!proto.proto.HvBatteryPrecondRequestState} returns this
 */
proto.proto.HvBatteryPrecondRequestState.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Status status = 5;
 * @return {!proto.proto.Status}
 */
proto.proto.HvBatteryPrecondRequestState.prototype.getStatus = function() {
  return /** @type {!proto.proto.Status} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.proto.Status} value
 * @return {!proto.proto.HvBatteryPrecondRequestState} returns this
 */
proto.proto.HvBatteryPrecondRequestState.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PrecondOperabilityState.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PrecondOperabilityState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PrecondOperabilityState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PrecondOperabilityState.toObject = function(includeInstance, msg) {
  var f, obj = {
precondAvailable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
precondErrorState: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PrecondOperabilityState}
 */
proto.proto.PrecondOperabilityState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PrecondOperabilityState;
  return proto.proto.PrecondOperabilityState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PrecondOperabilityState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PrecondOperabilityState}
 */
proto.proto.PrecondOperabilityState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrecondAvailable(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.PrecondOperabilityState.PrecondErrorState} */ (reader.readEnum());
      msg.setPrecondErrorState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PrecondOperabilityState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PrecondOperabilityState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PrecondOperabilityState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PrecondOperabilityState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrecondAvailable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPrecondErrorState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.PrecondOperabilityState.PrecondErrorState = {
  PRECOND_ERROR_STATE_NO_ERROR: 0,
  PRECOND_ERROR_STATE_PLAY_PROTECTION: 1,
  PRECOND_ERROR_STATE_NO_ENERGY_BUDGET_AVAILABLE: 2,
  PRECOND_ERROR_STATE_LOW_BUDGET: 3,
  PRECOND_ERROR_STATE_SYSTEM_NOT_AVAILABLE: 4,
  PRECOND_ERROR_STATE_PRECONDITIONING_ABORTED: 5,
  PRECOND_ERROR_STATE_REGULAR_CLIMATIZATION_ACTIVE: 6
};

/**
 * optional bool precond_available = 1;
 * @return {boolean}
 */
proto.proto.PrecondOperabilityState.prototype.getPrecondAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.PrecondOperabilityState} returns this
 */
proto.proto.PrecondOperabilityState.prototype.setPrecondAvailable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional PrecondErrorState precond_error_state = 2;
 * @return {!proto.proto.PrecondOperabilityState.PrecondErrorState}
 */
proto.proto.PrecondOperabilityState.prototype.getPrecondErrorState = function() {
  return /** @type {!proto.proto.PrecondOperabilityState.PrecondErrorState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.PrecondOperabilityState.PrecondErrorState} value
 * @return {!proto.proto.PrecondOperabilityState} returns this
 */
proto.proto.PrecondOperabilityState.prototype.setPrecondErrorState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargingScheduleRequested.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingScheduleRequested.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingScheduleRequested} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingScheduleRequested.toObject = function(includeInstance, msg) {
  var f, obj = {
scheduleIdStatus: jspb.Message.getFieldWithDefault(msg, 1, 0),
useCaseId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargingScheduleRequested}
 */
proto.proto.ChargingScheduleRequested.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingScheduleRequested;
  return proto.proto.ChargingScheduleRequested.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingScheduleRequested} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingScheduleRequested}
 */
proto.proto.ChargingScheduleRequested.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.ChargingScheduleRequested.ScheduleIdStatus} */ (reader.readEnum());
      msg.setScheduleIdStatus(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.ChargingScheduleRequested.ChargingScheduleUseCaseId} */ (reader.readEnum());
      msg.setUseCaseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargingScheduleRequested.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingScheduleRequested.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingScheduleRequested} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingScheduleRequested.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduleIdStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUseCaseId();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.ChargingScheduleRequested.ScheduleIdStatus = {
  SCHEDULE_ID_STATUS_DELETED: 0,
  SCHEDULE_ID_STATUS_INITIAL: 1
};

/**
 * @enum {number}
 */
proto.proto.ChargingScheduleRequested.ChargingScheduleUseCaseId = {
  CHARGING_SCHEDULE_USE_CASE_ID_SMART_CHARGING: 0,
  CHARGING_SCHEDULE_USE_CASE_ID_MERCEDES_INTELLIGENT_CHARGING: 1,
  CHARGING_SCHEDULE_USE_CASE_ID_BETA_COMMUNITY_CHARGING: 2,
  CHARGING_SCHEDULE_USE_CASE_ID_SOLAR_CHARGING: 3,
  CHARGING_SCHEDULE_USE_CASE_ID_GREEN_CHARGING: 4,
  CHARGING_SCHEDULE_USE_CASE_ID_EFFICIENT_CHARGING: 5,
  CHARGING_SCHEDULE_USE_CASE_ID_ECO_FRIENDLY_CHARGING: 6,
  CHARGING_SCHEDULE_USE_CASE_ID_SUSTAINABLE_CHARGING: 7,
  CHARGING_SCHEDULE_USE_CASE_ID_INTELLIGENT_CHARGING: 8,
  CHARGING_SCHEDULE_USE_CASE_ID_WORKPLACE_CHARGING_PLAN: 9,
  CHARGING_SCHEDULE_USE_CASE_ID_HOME_CHARGING_PLAN: 10,
  CHARGING_SCHEDULE_USE_CASE_ID_FLEET_MANAGED_CHARGING: 11,
  CHARGING_SCHEDULE_USE_CASE_ID_PRICE_OPTIMIZED_CHARGING: 12,
  CHARGING_SCHEDULE_USE_CASE_ID_BATTERY_FRIENDLY_CHARGING: 13,
  CHARGING_SCHEDULE_USE_CASE_ID_EXTERNAL_NOISE_OPTIMIZED_CHARGING: 14,
  CHARGING_SCHEDULE_USE_CASE_ID_VIDEO_WATCHING_OPTIMIZED_CHARGING: 15,
  CHARGING_SCHEDULE_USE_CASE_ID_TIME_CONTROLLED_CHARGING: 16,
  CHARGING_SCHEDULE_USE_CASE_ID_PEAK_SHAVING_CHARGING: 17,
  CHARGING_SCHEDULE_USE_CASE_ID_DYNAMIC_LOAD_BALANCED_CHARGING: 18,
  CHARGING_SCHEDULE_USE_CASE_ID_BUSINESS_SPECIFIC_CHARGING: 19,
  CHARGING_SCHEDULE_USE_CASE_ID_PREFERRED_CHARGING_TIMES: 20,
  CHARGING_SCHEDULE_USE_CASE_ID_ENPAL: 21,
  CHARGING_SCHEDULE_USE_CASE_ID_TIBBER: 22,
  CHARGING_SCHEDULE_USE_CASE_ID_THE_MOBILITY_HOUSE: 23,
  CHARGING_SCHEDULE_USE_CASE_ID_AWATTAR: 24,
  CHARGING_SCHEDULE_USE_CASE_ID_TRONITY: 25,
  CHARGING_SCHEDULE_USE_CASE_ID_DPD: 26,
  CHARGING_SCHEDULE_USE_CASE_ID_DEUTSCHE_POST: 27,
  CHARGING_SCHEDULE_USE_CASE_ID_HACKATHON: 28,
  CHARGING_SCHEDULE_USE_CASE_ID_SANDBOX_MODE: 29,
  CHARGING_SCHEDULE_USE_CASE_ID_DEVELOPER_MODE: 30,
  CHARGING_SCHEDULE_USE_CASE_ID_TEST_MODE: 31,
  CHARGING_SCHEDULE_USE_CASE_ID_DEBUG_MODE: 32
};

/**
 * optional ScheduleIdStatus schedule_id_status = 1;
 * @return {!proto.proto.ChargingScheduleRequested.ScheduleIdStatus}
 */
proto.proto.ChargingScheduleRequested.prototype.getScheduleIdStatus = function() {
  return /** @type {!proto.proto.ChargingScheduleRequested.ScheduleIdStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.ChargingScheduleRequested.ScheduleIdStatus} value
 * @return {!proto.proto.ChargingScheduleRequested} returns this
 */
proto.proto.ChargingScheduleRequested.prototype.setScheduleIdStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ChargingScheduleUseCaseId use_case_id = 2;
 * @return {!proto.proto.ChargingScheduleRequested.ChargingScheduleUseCaseId}
 */
proto.proto.ChargingScheduleRequested.prototype.getUseCaseId = function() {
  return /** @type {!proto.proto.ChargingScheduleRequested.ChargingScheduleUseCaseId} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.ChargingScheduleRequested.ChargingScheduleUseCaseId} value
 * @return {!proto.proto.ChargingScheduleRequested} returns this
 */
proto.proto.ChargingScheduleRequested.prototype.setUseCaseId = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChargingTimer.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargingTimer.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingTimer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingTimer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingTimer.toObject = function(includeInstance, msg) {
  var f, obj = {
entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.proto.ChargingTimerEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargingTimer}
 */
proto.proto.ChargingTimer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingTimer;
  return proto.proto.ChargingTimer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingTimer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingTimer}
 */
proto.proto.ChargingTimer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ChargingTimerEntry;
      reader.readMessage(value,proto.proto.ChargingTimerEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargingTimer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingTimer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingTimer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingTimer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.ChargingTimerEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChargingTimerEntry entries = 1;
 * @return {!Array<!proto.proto.ChargingTimerEntry>}
 */
proto.proto.ChargingTimer.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.proto.ChargingTimerEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ChargingTimerEntry, 1));
};


/**
 * @param {!Array<!proto.proto.ChargingTimerEntry>} value
 * @return {!proto.proto.ChargingTimer} returns this
*/
proto.proto.ChargingTimer.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.ChargingTimerEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ChargingTimerEntry}
 */
proto.proto.ChargingTimer.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ChargingTimerEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChargingTimer} returns this
 */
proto.proto.ChargingTimer.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChargingTimerEntry.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargingTimerEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingTimerEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingTimerEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingTimerEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
timerid: jspb.Message.getFieldWithDefault(msg, 1, 0),
action: jspb.Message.getFieldWithDefault(msg, 2, 0),
startTimeHour: jspb.Message.getFieldWithDefault(msg, 3, 0),
startTimeMin: jspb.Message.getFieldWithDefault(msg, 4, 0),
endTimeHour: jspb.Message.getFieldWithDefault(msg, 5, 0),
endTimeMin: jspb.Message.getFieldWithDefault(msg, 6, 0),
dayList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargingTimerEntry}
 */
proto.proto.ChargingTimerEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingTimerEntry;
  return proto.proto.ChargingTimerEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingTimerEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingTimerEntry}
 */
proto.proto.ChargingTimerEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimerid(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.ChargingTimerEntry.ChargingTimerAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartTimeHour(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartTimeMin(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndTimeHour(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndTimeMin(value);
      break;
    case 7:
      var values = /** @type {!Array<!proto.proto.TimeProfileDay>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDay(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargingTimerEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingTimerEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingTimerEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingTimerEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimerid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStartTimeHour();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStartTimeMin();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getEndTimeHour();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getEndTimeMin();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getDayList();
  if (f.length > 0) {
    writer.writePackedEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.ChargingTimerEntry.ChargingTimerAction = {
  CHARGING_TIMER_ACTION_UNKNOWN: 0,
  CHARGING_TIMER_ACTION_DEACTIVATED: 1,
  CHARGING_TIMER_ACTION_ACTIVE: 2,
  CHARGING_TIMER_ACTION_DELETED: 3
};

/**
 * optional int64 timerId = 1;
 * @return {number}
 */
proto.proto.ChargingTimerEntry.prototype.getTimerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingTimerEntry} returns this
 */
proto.proto.ChargingTimerEntry.prototype.setTimerid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ChargingTimerAction action = 2;
 * @return {!proto.proto.ChargingTimerEntry.ChargingTimerAction}
 */
proto.proto.ChargingTimerEntry.prototype.getAction = function() {
  return /** @type {!proto.proto.ChargingTimerEntry.ChargingTimerAction} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.ChargingTimerEntry.ChargingTimerAction} value
 * @return {!proto.proto.ChargingTimerEntry} returns this
 */
proto.proto.ChargingTimerEntry.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 start_time_hour = 3;
 * @return {number}
 */
proto.proto.ChargingTimerEntry.prototype.getStartTimeHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingTimerEntry} returns this
 */
proto.proto.ChargingTimerEntry.prototype.setStartTimeHour = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 start_time_min = 4;
 * @return {number}
 */
proto.proto.ChargingTimerEntry.prototype.getStartTimeMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingTimerEntry} returns this
 */
proto.proto.ChargingTimerEntry.prototype.setStartTimeMin = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 end_time_hour = 5;
 * @return {number}
 */
proto.proto.ChargingTimerEntry.prototype.getEndTimeHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingTimerEntry} returns this
 */
proto.proto.ChargingTimerEntry.prototype.setEndTimeHour = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 end_time_min = 6;
 * @return {number}
 */
proto.proto.ChargingTimerEntry.prototype.getEndTimeMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingTimerEntry} returns this
 */
proto.proto.ChargingTimerEntry.prototype.setEndTimeMin = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated TimeProfileDay day = 7;
 * @return {!Array<!proto.proto.TimeProfileDay>}
 */
proto.proto.ChargingTimerEntry.prototype.getDayList = function() {
  return /** @type {!Array<!proto.proto.TimeProfileDay>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<!proto.proto.TimeProfileDay>} value
 * @return {!proto.proto.ChargingTimerEntry} returns this
 */
proto.proto.ChargingTimerEntry.prototype.setDayList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!proto.proto.TimeProfileDay} value
 * @param {number=} opt_index
 * @return {!proto.proto.ChargingTimerEntry} returns this
 */
proto.proto.ChargingTimerEntry.prototype.addDay = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChargingTimerEntry} returns this
 */
proto.proto.ChargingTimerEntry.prototype.clearDayList = function() {
  return this.setDayList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargingPredictionSoc.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingPredictionSoc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingPredictionSoc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingPredictionSoc.toObject = function(includeInstance, msg) {
  var f, obj = {
predictedEndTime: (f = msg.getPredictedEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
predictedElectricalEnergyRange: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargingPredictionSoc}
 */
proto.proto.ChargingPredictionSoc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingPredictionSoc;
  return proto.proto.ChargingPredictionSoc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingPredictionSoc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingPredictionSoc}
 */
proto.proto.ChargingPredictionSoc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPredictedEndTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPredictedElectricalEnergyRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargingPredictionSoc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingPredictionSoc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingPredictionSoc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingPredictionSoc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPredictedEndTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPredictedElectricalEnergyRange();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp predicted_end_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.proto.ChargingPredictionSoc.prototype.getPredictedEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.proto.ChargingPredictionSoc} returns this
*/
proto.proto.ChargingPredictionSoc.prototype.setPredictedEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargingPredictionSoc} returns this
 */
proto.proto.ChargingPredictionSoc.prototype.clearPredictedEndTime = function() {
  return this.setPredictedEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargingPredictionSoc.prototype.hasPredictedEndTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 predicted_electrical_energy_range = 2;
 * @return {number}
 */
proto.proto.ChargingPredictionSoc.prototype.getPredictedElectricalEnergyRange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingPredictionSoc} returns this
 */
proto.proto.ChargingPredictionSoc.prototype.setPredictedElectricalEnergyRange = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargingPredictionDepartureTime.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingPredictionDepartureTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingPredictionDepartureTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingPredictionDepartureTime.toObject = function(includeInstance, msg) {
  var f, obj = {
deprecatedPredictedSoc: jspb.Message.getFieldWithDefault(msg, 1, 0),
predictedElectricalEnergyRange: jspb.Message.getFieldWithDefault(msg, 2, 0),
predictedSoc: (f = msg.getPredictedSoc()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargingPredictionDepartureTime}
 */
proto.proto.ChargingPredictionDepartureTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingPredictionDepartureTime;
  return proto.proto.ChargingPredictionDepartureTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingPredictionDepartureTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingPredictionDepartureTime}
 */
proto.proto.ChargingPredictionDepartureTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeprecatedPredictedSoc(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPredictedElectricalEnergyRange(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setPredictedSoc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargingPredictionDepartureTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingPredictionDepartureTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingPredictionDepartureTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingPredictionDepartureTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeprecatedPredictedSoc();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPredictedElectricalEnergyRange();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPredictedSoc();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 deprecated_predicted_soc = 1;
 * @return {number}
 */
proto.proto.ChargingPredictionDepartureTime.prototype.getDeprecatedPredictedSoc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingPredictionDepartureTime} returns this
 */
proto.proto.ChargingPredictionDepartureTime.prototype.setDeprecatedPredictedSoc = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 predicted_electrical_energy_range = 2;
 * @return {number}
 */
proto.proto.ChargingPredictionDepartureTime.prototype.getPredictedElectricalEnergyRange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingPredictionDepartureTime} returns this
 */
proto.proto.ChargingPredictionDepartureTime.prototype.setPredictedElectricalEnergyRange = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Int32Value predicted_soc = 3;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.ChargingPredictionDepartureTime.prototype.getPredictedSoc = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.ChargingPredictionDepartureTime} returns this
*/
proto.proto.ChargingPredictionDepartureTime.prototype.setPredictedSoc = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargingPredictionDepartureTime} returns this
 */
proto.proto.ChargingPredictionDepartureTime.prototype.clearPredictedSoc = function() {
  return this.setPredictedSoc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargingPredictionDepartureTime.prototype.hasPredictedSoc = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargeInletsEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeInletsEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeInletsEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeInletsEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
couplerState: jspb.Message.getFieldWithDefault(msg, 2, 0),
lockState: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargeInletsEntry}
 */
proto.proto.ChargeInletsEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeInletsEntry;
  return proto.proto.ChargeInletsEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeInletsEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeInletsEntry}
 */
proto.proto.ChargeInletsEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.ChargeInletsEntry.ChargeInletsCouplerState} */ (reader.readEnum());
      msg.setCouplerState(value);
      break;
    case 3:
      var value = /** @type {!proto.proto.ChargeInletsEntry.ChargeInletsLockState} */ (reader.readEnum());
      msg.setLockState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargeInletsEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeInletsEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeInletsEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeInletsEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCouplerState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLockState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.ChargeInletsEntry.ChargeInletsCouplerState = {
  CHARGE_INLETS_COUPLER_STATE_UNKNOWN: 0,
  CHARGE_INLETS_COUPLER_STATE_PLUGGED: 1,
  CHARGE_INLETS_COUPLER_STATE_VEHICLE_PLUGGED: 2,
  CHARGE_INLETS_COUPLER_STATE_VEHICLE_NOT_PLUGGED: 3,
  CHARGE_INLETS_COUPLER_STATE_DEFECT: 4
};

/**
 * @enum {number}
 */
proto.proto.ChargeInletsEntry.ChargeInletsLockState = {
  CHARGE_INLETS_LOCK_STATE_UNKNOWN: 0,
  CHARGE_INLETS_LOCK_STATE_UNLOCKED: 1,
  CHARGE_INLETS_LOCK_STATE_LOCKED: 2,
  CHARGE_INLETS_LOCK_STATE_LOCK_STATE_NOT_CLEAR: 3,
  CHARGE_INLETS_LOCK_STATE_NOT_AVAILABLE: 4
};

/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.proto.ChargeInletsEntry.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargeInletsEntry} returns this
 */
proto.proto.ChargeInletsEntry.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ChargeInletsCouplerState coupler_state = 2;
 * @return {!proto.proto.ChargeInletsEntry.ChargeInletsCouplerState}
 */
proto.proto.ChargeInletsEntry.prototype.getCouplerState = function() {
  return /** @type {!proto.proto.ChargeInletsEntry.ChargeInletsCouplerState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.ChargeInletsEntry.ChargeInletsCouplerState} value
 * @return {!proto.proto.ChargeInletsEntry} returns this
 */
proto.proto.ChargeInletsEntry.prototype.setCouplerState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ChargeInletsLockState lock_state = 3;
 * @return {!proto.proto.ChargeInletsEntry.ChargeInletsLockState}
 */
proto.proto.ChargeInletsEntry.prototype.getLockState = function() {
  return /** @type {!proto.proto.ChargeInletsEntry.ChargeInletsLockState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.proto.ChargeInletsEntry.ChargeInletsLockState} value
 * @return {!proto.proto.ChargeInletsEntry} returns this
 */
proto.proto.ChargeInletsEntry.prototype.setLockState = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChargeInlets.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargeInlets.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeInlets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeInlets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeInlets.toObject = function(includeInstance, msg) {
  var f, obj = {
entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.proto.ChargeInletsEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargeInlets}
 */
proto.proto.ChargeInlets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeInlets;
  return proto.proto.ChargeInlets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeInlets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeInlets}
 */
proto.proto.ChargeInlets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ChargeInletsEntry;
      reader.readMessage(value,proto.proto.ChargeInletsEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargeInlets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeInlets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeInlets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeInlets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.ChargeInletsEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChargeInletsEntry entries = 1;
 * @return {!Array<!proto.proto.ChargeInletsEntry>}
 */
proto.proto.ChargeInlets.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.proto.ChargeInletsEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ChargeInletsEntry, 1));
};


/**
 * @param {!Array<!proto.proto.ChargeInletsEntry>} value
 * @return {!proto.proto.ChargeInlets} returns this
*/
proto.proto.ChargeInlets.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.ChargeInletsEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ChargeInletsEntry}
 */
proto.proto.ChargeInlets.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ChargeInletsEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChargeInlets} returns this
 */
proto.proto.ChargeInlets.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargeFlapsEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeFlapsEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeFlapsEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeFlapsEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
positionState: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargeFlapsEntry}
 */
proto.proto.ChargeFlapsEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeFlapsEntry;
  return proto.proto.ChargeFlapsEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeFlapsEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeFlapsEntry}
 */
proto.proto.ChargeFlapsEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.ChargeFlapsPositionState} */ (reader.readEnum());
      msg.setPositionState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargeFlapsEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeFlapsEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeFlapsEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeFlapsEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPositionState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.proto.ChargeFlapsEntry.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargeFlapsEntry} returns this
 */
proto.proto.ChargeFlapsEntry.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ChargeFlapsPositionState position_state = 2;
 * @return {!proto.proto.ChargeFlapsPositionState}
 */
proto.proto.ChargeFlapsEntry.prototype.getPositionState = function() {
  return /** @type {!proto.proto.ChargeFlapsPositionState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.ChargeFlapsPositionState} value
 * @return {!proto.proto.ChargeFlapsEntry} returns this
 */
proto.proto.ChargeFlapsEntry.prototype.setPositionState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChargeFlaps.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargeFlaps.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeFlaps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeFlaps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeFlaps.toObject = function(includeInstance, msg) {
  var f, obj = {
entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.proto.ChargeFlapsEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargeFlaps}
 */
proto.proto.ChargeFlaps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeFlaps;
  return proto.proto.ChargeFlaps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeFlaps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeFlaps}
 */
proto.proto.ChargeFlaps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ChargeFlapsEntry;
      reader.readMessage(value,proto.proto.ChargeFlapsEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargeFlaps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeFlaps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeFlaps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeFlaps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.ChargeFlapsEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChargeFlapsEntry entries = 1;
 * @return {!Array<!proto.proto.ChargeFlapsEntry>}
 */
proto.proto.ChargeFlaps.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.proto.ChargeFlapsEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ChargeFlapsEntry, 1));
};


/**
 * @param {!Array<!proto.proto.ChargeFlapsEntry>} value
 * @return {!proto.proto.ChargeFlaps} returns this
*/
proto.proto.ChargeFlaps.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.ChargeFlapsEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ChargeFlapsEntry}
 */
proto.proto.ChargeFlaps.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ChargeFlapsEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChargeFlaps} returns this
 */
proto.proto.ChargeFlaps.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChargingPowerRestrictions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargingPowerRestrictions.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingPowerRestrictions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingPowerRestrictions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingPowerRestrictions.toObject = function(includeInstance, msg) {
  var f, obj = {
chargingPowerRestrictionList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargingPowerRestrictions}
 */
proto.proto.ChargingPowerRestrictions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingPowerRestrictions;
  return proto.proto.ChargingPowerRestrictions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingPowerRestrictions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingPowerRestrictions}
 */
proto.proto.ChargingPowerRestrictions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.proto.ChargingPowerRestriction>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addChargingPowerRestriction(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargingPowerRestrictions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingPowerRestrictions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingPowerRestrictions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingPowerRestrictions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChargingPowerRestrictionList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated ChargingPowerRestriction charging_power_restriction = 1;
 * @return {!Array<!proto.proto.ChargingPowerRestriction>}
 */
proto.proto.ChargingPowerRestrictions.prototype.getChargingPowerRestrictionList = function() {
  return /** @type {!Array<!proto.proto.ChargingPowerRestriction>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.proto.ChargingPowerRestriction>} value
 * @return {!proto.proto.ChargingPowerRestrictions} returns this
 */
proto.proto.ChargingPowerRestrictions.prototype.setChargingPowerRestrictionList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.proto.ChargingPowerRestriction} value
 * @param {number=} opt_index
 * @return {!proto.proto.ChargingPowerRestrictions} returns this
 */
proto.proto.ChargingPowerRestrictions.prototype.addChargingPowerRestriction = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChargingPowerRestrictions} returns this
 */
proto.proto.ChargingPowerRestrictions.prototype.clearChargingPowerRestrictionList = function() {
  return this.setChargingPowerRestrictionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChargingBreakClockTimerValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargingBreakClockTimerValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingBreakClockTimerValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingBreakClockTimerValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingBreakClockTimerValue.toObject = function(includeInstance, msg) {
  var f, obj = {
chargingbreakClocktimerEntryList: jspb.Message.toObjectList(msg.getChargingbreakClocktimerEntryList(),
    proto.proto.ChargingBreakClockTimerEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargingBreakClockTimerValue}
 */
proto.proto.ChargingBreakClockTimerValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingBreakClockTimerValue;
  return proto.proto.ChargingBreakClockTimerValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingBreakClockTimerValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingBreakClockTimerValue}
 */
proto.proto.ChargingBreakClockTimerValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ChargingBreakClockTimerEntry;
      reader.readMessage(value,proto.proto.ChargingBreakClockTimerEntry.deserializeBinaryFromReader);
      msg.addChargingbreakClocktimerEntry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargingBreakClockTimerValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingBreakClockTimerValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingBreakClockTimerValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingBreakClockTimerValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChargingbreakClocktimerEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.ChargingBreakClockTimerEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChargingBreakClockTimerEntry chargingbreak_clocktimer_entry = 1;
 * @return {!Array<!proto.proto.ChargingBreakClockTimerEntry>}
 */
proto.proto.ChargingBreakClockTimerValue.prototype.getChargingbreakClocktimerEntryList = function() {
  return /** @type{!Array<!proto.proto.ChargingBreakClockTimerEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ChargingBreakClockTimerEntry, 1));
};


/**
 * @param {!Array<!proto.proto.ChargingBreakClockTimerEntry>} value
 * @return {!proto.proto.ChargingBreakClockTimerValue} returns this
*/
proto.proto.ChargingBreakClockTimerValue.prototype.setChargingbreakClocktimerEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.ChargingBreakClockTimerEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ChargingBreakClockTimerEntry}
 */
proto.proto.ChargingBreakClockTimerValue.prototype.addChargingbreakClocktimerEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ChargingBreakClockTimerEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChargingBreakClockTimerValue} returns this
 */
proto.proto.ChargingBreakClockTimerValue.prototype.clearChargingbreakClocktimerEntryList = function() {
  return this.setChargingbreakClocktimerEntryList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.PrecondState.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PrecondState.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PrecondState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PrecondState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PrecondState.toObject = function(includeInstance, msg) {
  var f, obj = {
activationState: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
precondStateTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
precondImmediateSupport: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PrecondState}
 */
proto.proto.PrecondState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PrecondState;
  return proto.proto.PrecondState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PrecondState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PrecondState}
 */
proto.proto.PrecondState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivationState(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.proto.PrecondStateType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPrecondStateTypes(values[i]);
      }
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrecondImmediateSupport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PrecondState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PrecondState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PrecondState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PrecondState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivationState();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPrecondStateTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getPrecondImmediateSupport();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool activation_state = 1;
 * @return {boolean}
 */
proto.proto.PrecondState.prototype.getActivationState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.PrecondState} returns this
 */
proto.proto.PrecondState.prototype.setActivationState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated PrecondStateType precond_state_types = 2;
 * @return {!Array<!proto.proto.PrecondStateType>}
 */
proto.proto.PrecondState.prototype.getPrecondStateTypesList = function() {
  return /** @type {!Array<!proto.proto.PrecondStateType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.proto.PrecondStateType>} value
 * @return {!proto.proto.PrecondState} returns this
 */
proto.proto.PrecondState.prototype.setPrecondStateTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.proto.PrecondStateType} value
 * @param {number=} opt_index
 * @return {!proto.proto.PrecondState} returns this
 */
proto.proto.PrecondState.prototype.addPrecondStateTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.PrecondState} returns this
 */
proto.proto.PrecondState.prototype.clearPrecondStateTypesList = function() {
  return this.setPrecondStateTypesList([]);
};


/**
 * optional bool precond_immediate_support = 3;
 * @return {boolean}
 */
proto.proto.PrecondState.prototype.getPrecondImmediateSupport = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.PrecondState} returns this
 */
proto.proto.PrecondState.prototype.setPrecondImmediateSupport = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargingPowerControl.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingPowerControl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingPowerControl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingPowerControl.toObject = function(includeInstance, msg) {
  var f, obj = {
chargeStatus: jspb.Message.getFieldWithDefault(msg, 1, 0),
ctrlDuration: jspb.Message.getFieldWithDefault(msg, 2, 0),
ctrlInfo: jspb.Message.getFieldWithDefault(msg, 3, 0),
chargePower: jspb.Message.getFieldWithDefault(msg, 4, 0),
servStat: jspb.Message.getFieldWithDefault(msg, 5, 0),
servAvail: jspb.Message.getFieldWithDefault(msg, 6, 0),
useCase: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargingPowerControl}
 */
proto.proto.ChargingPowerControl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingPowerControl;
  return proto.proto.ChargingPowerControl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingPowerControl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingPowerControl}
 */
proto.proto.ChargingPowerControl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.ChargingPowerControl.ChargingStatusForPowerControl} */ (reader.readEnum());
      msg.setChargeStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCtrlDuration(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCtrlInfo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChargePower(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServStat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setServAvail(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUseCase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargingPowerControl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingPowerControl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingPowerControl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingPowerControl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChargeStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCtrlDuration();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCtrlInfo();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getChargePower();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getServStat();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getServAvail();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getUseCase();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.ChargingPowerControl.ChargingStatusForPowerControl = {
  NOT_DEFINED: 0,
  DEACTIVATED: 1,
  ACTIVATED: 2
};

/**
 * optional ChargingStatusForPowerControl charge_status = 1;
 * @return {!proto.proto.ChargingPowerControl.ChargingStatusForPowerControl}
 */
proto.proto.ChargingPowerControl.prototype.getChargeStatus = function() {
  return /** @type {!proto.proto.ChargingPowerControl.ChargingStatusForPowerControl} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.ChargingPowerControl.ChargingStatusForPowerControl} value
 * @return {!proto.proto.ChargingPowerControl} returns this
 */
proto.proto.ChargingPowerControl.prototype.setChargeStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 ctrl_duration = 2;
 * @return {number}
 */
proto.proto.ChargingPowerControl.prototype.getCtrlDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingPowerControl} returns this
 */
proto.proto.ChargingPowerControl.prototype.setCtrlDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 ctrl_info = 3;
 * @return {number}
 */
proto.proto.ChargingPowerControl.prototype.getCtrlInfo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingPowerControl} returns this
 */
proto.proto.ChargingPowerControl.prototype.setCtrlInfo = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 charge_power = 4;
 * @return {number}
 */
proto.proto.ChargingPowerControl.prototype.getChargePower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingPowerControl} returns this
 */
proto.proto.ChargingPowerControl.prototype.setChargePower = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 serv_stat = 5;
 * @return {number}
 */
proto.proto.ChargingPowerControl.prototype.getServStat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingPowerControl} returns this
 */
proto.proto.ChargingPowerControl.prototype.setServStat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 serv_avail = 6;
 * @return {number}
 */
proto.proto.ChargingPowerControl.prototype.getServAvail = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingPowerControl} returns this
 */
proto.proto.ChargingPowerControl.prototype.setServAvail = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 use_case = 7;
 * @return {number}
 */
proto.proto.ChargingPowerControl.prototype.getUseCase = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingPowerControl} returns this
 */
proto.proto.ChargingPowerControl.prototype.setUseCase = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingBreakClockTimerEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingBreakClockTimerEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingBreakClockTimerEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
activationState: jspb.Message.getFieldWithDefault(msg, 1, 0),
endTimeHour: jspb.Message.getFieldWithDefault(msg, 2, 0),
endTimeMin: jspb.Message.getFieldWithDefault(msg, 3, 0),
startTimeHour: jspb.Message.getFieldWithDefault(msg, 4, 0),
startTimeMin: jspb.Message.getFieldWithDefault(msg, 5, 0),
timerId: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargingBreakClockTimerEntry}
 */
proto.proto.ChargingBreakClockTimerEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingBreakClockTimerEntry;
  return proto.proto.ChargingBreakClockTimerEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingBreakClockTimerEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingBreakClockTimerEntry}
 */
proto.proto.ChargingBreakClockTimerEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.ChargingBreakClockTimerActivationState} */ (reader.readEnum());
      msg.setActivationState(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndTimeHour(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndTimeMin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartTimeHour(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartTimeMin(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingBreakClockTimerEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingBreakClockTimerEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingBreakClockTimerEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActivationState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEndTimeHour();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEndTimeMin();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStartTimeHour();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getStartTimeMin();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTimerId();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional ChargingBreakClockTimerActivationState activation_state = 1;
 * @return {!proto.proto.ChargingBreakClockTimerActivationState}
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.getActivationState = function() {
  return /** @type {!proto.proto.ChargingBreakClockTimerActivationState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.ChargingBreakClockTimerActivationState} value
 * @return {!proto.proto.ChargingBreakClockTimerEntry} returns this
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.setActivationState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 end_time_hour = 2;
 * @return {number}
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.getEndTimeHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingBreakClockTimerEntry} returns this
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.setEndTimeHour = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 end_time_min = 3;
 * @return {number}
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.getEndTimeMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingBreakClockTimerEntry} returns this
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.setEndTimeMin = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 start_time_hour = 4;
 * @return {number}
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.getStartTimeHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingBreakClockTimerEntry} returns this
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.setStartTimeHour = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 start_time_min = 5;
 * @return {number}
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.getStartTimeMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingBreakClockTimerEntry} returns this
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.setStartTimeMin = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 timer_id = 6;
 * @return {number}
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.getTimerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingBreakClockTimerEntry} returns this
 */
proto.proto.ChargingBreakClockTimerEntry.prototype.setTimerId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChargeProgramsValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargeProgramsValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeProgramsValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeProgramsValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeProgramsValue.toObject = function(includeInstance, msg) {
  var f, obj = {
chargeProgramParametersList: jspb.Message.toObjectList(msg.getChargeProgramParametersList(),
    proto.proto.ChargeProgramParameters.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargeProgramsValue}
 */
proto.proto.ChargeProgramsValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeProgramsValue;
  return proto.proto.ChargeProgramsValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeProgramsValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeProgramsValue}
 */
proto.proto.ChargeProgramsValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ChargeProgramParameters;
      reader.readMessage(value,proto.proto.ChargeProgramParameters.deserializeBinaryFromReader);
      msg.addChargeProgramParameters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargeProgramsValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeProgramsValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeProgramsValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeProgramsValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChargeProgramParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.ChargeProgramParameters.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChargeProgramParameters charge_program_parameters = 1;
 * @return {!Array<!proto.proto.ChargeProgramParameters>}
 */
proto.proto.ChargeProgramsValue.prototype.getChargeProgramParametersList = function() {
  return /** @type{!Array<!proto.proto.ChargeProgramParameters>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ChargeProgramParameters, 1));
};


/**
 * @param {!Array<!proto.proto.ChargeProgramParameters>} value
 * @return {!proto.proto.ChargeProgramsValue} returns this
*/
proto.proto.ChargeProgramsValue.prototype.setChargeProgramParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.ChargeProgramParameters=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ChargeProgramParameters}
 */
proto.proto.ChargeProgramsValue.prototype.addChargeProgramParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ChargeProgramParameters, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChargeProgramsValue} returns this
 */
proto.proto.ChargeProgramsValue.prototype.clearChargeProgramParametersList = function() {
  return this.setChargeProgramParametersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargeProgramParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeProgramParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeProgramParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeProgramParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
chargeProgram: jspb.Message.getFieldWithDefault(msg, 1, 0),
maxSoc: jspb.Message.getFieldWithDefault(msg, 2, 0),
autoUnlock: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
locationBasedCharging: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
weeklyProfile: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
clocktimer: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
maxChargingCurrent: jspb.Message.getFieldWithDefault(msg, 7, 0),
ecoCharging: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargeProgramParameters}
 */
proto.proto.ChargeProgramParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeProgramParameters;
  return proto.proto.ChargeProgramParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeProgramParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeProgramParameters}
 */
proto.proto.ChargeProgramParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.ChargeProgram} */ (reader.readEnum());
      msg.setChargeProgram(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxSoc(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoUnlock(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocationBasedCharging(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWeeklyProfile(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClocktimer(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxChargingCurrent(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEcoCharging(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargeProgramParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeProgramParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeProgramParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeProgramParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChargeProgram();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMaxSoc();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getAutoUnlock();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getLocationBasedCharging();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getWeeklyProfile();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getClocktimer();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getMaxChargingCurrent();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getEcoCharging();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional ChargeProgram charge_program = 1;
 * @return {!proto.proto.ChargeProgram}
 */
proto.proto.ChargeProgramParameters.prototype.getChargeProgram = function() {
  return /** @type {!proto.proto.ChargeProgram} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.ChargeProgram} value
 * @return {!proto.proto.ChargeProgramParameters} returns this
 */
proto.proto.ChargeProgramParameters.prototype.setChargeProgram = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 max_soc = 2;
 * @return {number}
 */
proto.proto.ChargeProgramParameters.prototype.getMaxSoc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargeProgramParameters} returns this
 */
proto.proto.ChargeProgramParameters.prototype.setMaxSoc = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool auto_unlock = 3;
 * @return {boolean}
 */
proto.proto.ChargeProgramParameters.prototype.getAutoUnlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ChargeProgramParameters} returns this
 */
proto.proto.ChargeProgramParameters.prototype.setAutoUnlock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool location_based_charging = 4;
 * @return {boolean}
 */
proto.proto.ChargeProgramParameters.prototype.getLocationBasedCharging = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ChargeProgramParameters} returns this
 */
proto.proto.ChargeProgramParameters.prototype.setLocationBasedCharging = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool weekly_profile = 5;
 * @return {boolean}
 */
proto.proto.ChargeProgramParameters.prototype.getWeeklyProfile = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ChargeProgramParameters} returns this
 */
proto.proto.ChargeProgramParameters.prototype.setWeeklyProfile = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool clockTimer = 6;
 * @return {boolean}
 */
proto.proto.ChargeProgramParameters.prototype.getClocktimer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ChargeProgramParameters} returns this
 */
proto.proto.ChargeProgramParameters.prototype.setClocktimer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional int32 max_charging_current = 7;
 * @return {number}
 */
proto.proto.ChargeProgramParameters.prototype.getMaxChargingCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargeProgramParameters} returns this
 */
proto.proto.ChargeProgramParameters.prototype.setMaxChargingCurrent = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool eco_charging = 9;
 * @return {boolean}
 */
proto.proto.ChargeProgramParameters.prototype.getEcoCharging = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ChargeProgramParameters} returns this
 */
proto.proto.ChargeProgramParameters.prototype.setEcoCharging = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.WeeklyProfileValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.WeeklyProfileValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WeeklyProfileValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WeeklyProfileValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeeklyProfileValue.toObject = function(includeInstance, msg) {
  var f, obj = {
timeProfilesList: jspb.Message.toObjectList(msg.getTimeProfilesList(),
    proto.proto.VVRTimeProfile.toObject, includeInstance),
singleTimeProfileEntriesActivatable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
maxNumberOfTimeProfiles: jspb.Message.getFieldWithDefault(msg, 3, 0),
currentNumberOfTimeProfileSlots: jspb.Message.getFieldWithDefault(msg, 4, 0),
currentNumberOfTimeProfiles: jspb.Message.getFieldWithDefault(msg, 5, 0),
maxNumberOfWeeklyTimeProfileSlots: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.WeeklyProfileValue}
 */
proto.proto.WeeklyProfileValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WeeklyProfileValue;
  return proto.proto.WeeklyProfileValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WeeklyProfileValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WeeklyProfileValue}
 */
proto.proto.WeeklyProfileValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.VVRTimeProfile;
      reader.readMessage(value,proto.proto.VVRTimeProfile.deserializeBinaryFromReader);
      msg.addTimeProfiles(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSingleTimeProfileEntriesActivatable(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxNumberOfTimeProfiles(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentNumberOfTimeProfileSlots(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentNumberOfTimeProfiles(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxNumberOfWeeklyTimeProfileSlots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.WeeklyProfileValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WeeklyProfileValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WeeklyProfileValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeeklyProfileValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.VVRTimeProfile.serializeBinaryToWriter
    );
  }
  f = message.getSingleTimeProfileEntriesActivatable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMaxNumberOfTimeProfiles();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCurrentNumberOfTimeProfileSlots();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getCurrentNumberOfTimeProfiles();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getMaxNumberOfWeeklyTimeProfileSlots();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * repeated VVRTimeProfile time_profiles = 1;
 * @return {!Array<!proto.proto.VVRTimeProfile>}
 */
proto.proto.WeeklyProfileValue.prototype.getTimeProfilesList = function() {
  return /** @type{!Array<!proto.proto.VVRTimeProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.VVRTimeProfile, 1));
};


/**
 * @param {!Array<!proto.proto.VVRTimeProfile>} value
 * @return {!proto.proto.WeeklyProfileValue} returns this
*/
proto.proto.WeeklyProfileValue.prototype.setTimeProfilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.VVRTimeProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.VVRTimeProfile}
 */
proto.proto.WeeklyProfileValue.prototype.addTimeProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.VVRTimeProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.WeeklyProfileValue} returns this
 */
proto.proto.WeeklyProfileValue.prototype.clearTimeProfilesList = function() {
  return this.setTimeProfilesList([]);
};


/**
 * optional bool single_time_profile_entries_activatable = 2;
 * @return {boolean}
 */
proto.proto.WeeklyProfileValue.prototype.getSingleTimeProfileEntriesActivatable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.WeeklyProfileValue} returns this
 */
proto.proto.WeeklyProfileValue.prototype.setSingleTimeProfileEntriesActivatable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 max_number_of_time_profiles = 3;
 * @return {number}
 */
proto.proto.WeeklyProfileValue.prototype.getMaxNumberOfTimeProfiles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WeeklyProfileValue} returns this
 */
proto.proto.WeeklyProfileValue.prototype.setMaxNumberOfTimeProfiles = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 current_number_of_time_profile_slots = 4;
 * @return {number}
 */
proto.proto.WeeklyProfileValue.prototype.getCurrentNumberOfTimeProfileSlots = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WeeklyProfileValue} returns this
 */
proto.proto.WeeklyProfileValue.prototype.setCurrentNumberOfTimeProfileSlots = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 current_number_of_time_profiles = 5;
 * @return {number}
 */
proto.proto.WeeklyProfileValue.prototype.getCurrentNumberOfTimeProfiles = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WeeklyProfileValue} returns this
 */
proto.proto.WeeklyProfileValue.prototype.setCurrentNumberOfTimeProfiles = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 max_number_of_weekly_time_profile_slots = 8;
 * @return {number}
 */
proto.proto.WeeklyProfileValue.prototype.getMaxNumberOfWeeklyTimeProfileSlots = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WeeklyProfileValue} returns this
 */
proto.proto.WeeklyProfileValue.prototype.setMaxNumberOfWeeklyTimeProfileSlots = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.VVRTimeProfile.repeatedFields_ = [4,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.VVRTimeProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.VVRTimeProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.VVRTimeProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VVRTimeProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
identifier: jspb.Message.getFieldWithDefault(msg, 1, 0),
daysList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
applicationIdentifier: jspb.Message.getFieldWithDefault(msg, 6, 0),
hour: jspb.Message.getFieldWithDefault(msg, 7, 0),
minute: jspb.Message.getFieldWithDefault(msg, 8, 0),
active: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
isLearnedTime: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
actionListList: jspb.Message.toObjectList(msg.getActionListList(),
    proto.proto.ActionList.toObject, includeInstance),
scheduleType: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.VVRTimeProfile}
 */
proto.proto.VVRTimeProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.VVRTimeProfile;
  return proto.proto.VVRTimeProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.VVRTimeProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.VVRTimeProfile}
 */
proto.proto.VVRTimeProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIdentifier(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.proto.TimeProfileDay>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDays(values[i]);
      }
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationIdentifier(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHour(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinute(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLearnedTime(value);
      break;
    case 11:
      var value = new proto.proto.ActionList;
      reader.readMessage(value,proto.proto.ActionList.deserializeBinaryFromReader);
      msg.addActionList(value);
      break;
    case 12:
      var value = /** @type {!proto.proto.WeeklyProfileScheduleType} */ (reader.readEnum());
      msg.setScheduleType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.VVRTimeProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.VVRTimeProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.VVRTimeProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VVRTimeProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDaysList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getApplicationIdentifier();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHour();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getMinute();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getIsLearnedTime();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getActionListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.proto.ActionList.serializeBinaryToWriter
    );
  }
  f = message.getScheduleType();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
};


/**
 * optional int32 identifier = 1;
 * @return {number}
 */
proto.proto.VVRTimeProfile.prototype.getIdentifier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VVRTimeProfile} returns this
 */
proto.proto.VVRTimeProfile.prototype.setIdentifier = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated TimeProfileDay days = 4;
 * @return {!Array<!proto.proto.TimeProfileDay>}
 */
proto.proto.VVRTimeProfile.prototype.getDaysList = function() {
  return /** @type {!Array<!proto.proto.TimeProfileDay>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.proto.TimeProfileDay>} value
 * @return {!proto.proto.VVRTimeProfile} returns this
 */
proto.proto.VVRTimeProfile.prototype.setDaysList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.proto.TimeProfileDay} value
 * @param {number=} opt_index
 * @return {!proto.proto.VVRTimeProfile} returns this
 */
proto.proto.VVRTimeProfile.prototype.addDays = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.VVRTimeProfile} returns this
 */
proto.proto.VVRTimeProfile.prototype.clearDaysList = function() {
  return this.setDaysList([]);
};


/**
 * optional int32 application_identifier = 6;
 * @return {number}
 */
proto.proto.VVRTimeProfile.prototype.getApplicationIdentifier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VVRTimeProfile} returns this
 */
proto.proto.VVRTimeProfile.prototype.setApplicationIdentifier = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 hour = 7;
 * @return {number}
 */
proto.proto.VVRTimeProfile.prototype.getHour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VVRTimeProfile} returns this
 */
proto.proto.VVRTimeProfile.prototype.setHour = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 minute = 8;
 * @return {number}
 */
proto.proto.VVRTimeProfile.prototype.getMinute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VVRTimeProfile} returns this
 */
proto.proto.VVRTimeProfile.prototype.setMinute = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool active = 9;
 * @return {boolean}
 */
proto.proto.VVRTimeProfile.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.VVRTimeProfile} returns this
 */
proto.proto.VVRTimeProfile.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool is_learned_time = 10;
 * @return {boolean}
 */
proto.proto.VVRTimeProfile.prototype.getIsLearnedTime = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.VVRTimeProfile} returns this
 */
proto.proto.VVRTimeProfile.prototype.setIsLearnedTime = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated ActionList action_list = 11;
 * @return {!Array<!proto.proto.ActionList>}
 */
proto.proto.VVRTimeProfile.prototype.getActionListList = function() {
  return /** @type{!Array<!proto.proto.ActionList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ActionList, 11));
};


/**
 * @param {!Array<!proto.proto.ActionList>} value
 * @return {!proto.proto.VVRTimeProfile} returns this
*/
proto.proto.VVRTimeProfile.prototype.setActionListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.proto.ActionList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ActionList}
 */
proto.proto.VVRTimeProfile.prototype.addActionList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.proto.ActionList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.VVRTimeProfile} returns this
 */
proto.proto.VVRTimeProfile.prototype.clearActionListList = function() {
  return this.setActionListList([]);
};


/**
 * optional WeeklyProfileScheduleType schedule_type = 12;
 * @return {!proto.proto.WeeklyProfileScheduleType}
 */
proto.proto.VVRTimeProfile.prototype.getScheduleType = function() {
  return /** @type {!proto.proto.WeeklyProfileScheduleType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.proto.WeeklyProfileScheduleType} value
 * @return {!proto.proto.VVRTimeProfile} returns this
 */
proto.proto.VVRTimeProfile.prototype.setScheduleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ActionList.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ActionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ActionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ActionList.toObject = function(includeInstance, msg) {
  var f, obj = {
charging: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
precond: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
batteryPrecond: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ActionList}
 */
proto.proto.ActionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ActionList;
  return proto.proto.ActionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ActionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ActionList}
 */
proto.proto.ActionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCharging(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrecond(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBatteryPrecond(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ActionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ActionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ActionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ActionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCharging();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPrecond();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBatteryPrecond();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool charging = 1;
 * @return {boolean}
 */
proto.proto.ActionList.prototype.getCharging = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ActionList} returns this
 */
proto.proto.ActionList.prototype.setCharging = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool precond = 2;
 * @return {boolean}
 */
proto.proto.ActionList.prototype.getPrecond = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ActionList} returns this
 */
proto.proto.ActionList.prototype.setPrecond = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool battery_precond = 3;
 * @return {boolean}
 */
proto.proto.ActionList.prototype.getBatteryPrecond = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ActionList} returns this
 */
proto.proto.ActionList.prototype.setBatteryPrecond = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.EcoHistogramValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.EcoHistogramValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.EcoHistogramValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.EcoHistogramValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.EcoHistogramValue.toObject = function(includeInstance, msg) {
  var f, obj = {
ecoHistogramBinsList: jspb.Message.toObjectList(msg.getEcoHistogramBinsList(),
    proto.proto.EcoHistogramBin.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.EcoHistogramValue}
 */
proto.proto.EcoHistogramValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.EcoHistogramValue;
  return proto.proto.EcoHistogramValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.EcoHistogramValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.EcoHistogramValue}
 */
proto.proto.EcoHistogramValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.EcoHistogramBin;
      reader.readMessage(value,proto.proto.EcoHistogramBin.deserializeBinaryFromReader);
      msg.addEcoHistogramBins(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.EcoHistogramValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.EcoHistogramValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.EcoHistogramValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.EcoHistogramValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEcoHistogramBinsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.EcoHistogramBin.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EcoHistogramBin eco_histogram_bins = 1;
 * @return {!Array<!proto.proto.EcoHistogramBin>}
 */
proto.proto.EcoHistogramValue.prototype.getEcoHistogramBinsList = function() {
  return /** @type{!Array<!proto.proto.EcoHistogramBin>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.EcoHistogramBin, 1));
};


/**
 * @param {!Array<!proto.proto.EcoHistogramBin>} value
 * @return {!proto.proto.EcoHistogramValue} returns this
*/
proto.proto.EcoHistogramValue.prototype.setEcoHistogramBinsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.EcoHistogramBin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.EcoHistogramBin}
 */
proto.proto.EcoHistogramValue.prototype.addEcoHistogramBins = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.EcoHistogramBin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.EcoHistogramValue} returns this
 */
proto.proto.EcoHistogramValue.prototype.clearEcoHistogramBinsList = function() {
  return this.setEcoHistogramBinsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.EcoHistogramBin.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.EcoHistogramBin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.EcoHistogramBin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.EcoHistogramBin.toObject = function(includeInstance, msg) {
  var f, obj = {
interval: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.EcoHistogramBin}
 */
proto.proto.EcoHistogramBin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.EcoHistogramBin;
  return proto.proto.EcoHistogramBin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.EcoHistogramBin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.EcoHistogramBin}
 */
proto.proto.EcoHistogramBin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setInterval(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.EcoHistogramBin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.EcoHistogramBin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.EcoHistogramBin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.EcoHistogramBin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double interval = 1;
 * @return {number}
 */
proto.proto.EcoHistogramBin.prototype.getInterval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.EcoHistogramBin} returns this
 */
proto.proto.EcoHistogramBin.prototype.setInterval = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double value = 2;
 * @return {number}
 */
proto.proto.EcoHistogramBin.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.EcoHistogramBin} returns this
 */
proto.proto.EcoHistogramBin.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.SpeedAlertConfigurationValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.SpeedAlertConfigurationValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpeedAlertConfigurationValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpeedAlertConfigurationValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpeedAlertConfigurationValue.toObject = function(includeInstance, msg) {
  var f, obj = {
speedAlertConfigurationsList: jspb.Message.toObjectList(msg.getSpeedAlertConfigurationsList(),
    proto.proto.SpeedAlertConfiguration.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.SpeedAlertConfigurationValue}
 */
proto.proto.SpeedAlertConfigurationValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpeedAlertConfigurationValue;
  return proto.proto.SpeedAlertConfigurationValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpeedAlertConfigurationValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpeedAlertConfigurationValue}
 */
proto.proto.SpeedAlertConfigurationValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.SpeedAlertConfiguration;
      reader.readMessage(value,proto.proto.SpeedAlertConfiguration.deserializeBinaryFromReader);
      msg.addSpeedAlertConfigurations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.SpeedAlertConfigurationValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpeedAlertConfigurationValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpeedAlertConfigurationValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpeedAlertConfigurationValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpeedAlertConfigurationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.SpeedAlertConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SpeedAlertConfiguration speed_alert_configurations = 1;
 * @return {!Array<!proto.proto.SpeedAlertConfiguration>}
 */
proto.proto.SpeedAlertConfigurationValue.prototype.getSpeedAlertConfigurationsList = function() {
  return /** @type{!Array<!proto.proto.SpeedAlertConfiguration>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.SpeedAlertConfiguration, 1));
};


/**
 * @param {!Array<!proto.proto.SpeedAlertConfiguration>} value
 * @return {!proto.proto.SpeedAlertConfigurationValue} returns this
*/
proto.proto.SpeedAlertConfigurationValue.prototype.setSpeedAlertConfigurationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.SpeedAlertConfiguration=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.SpeedAlertConfiguration}
 */
proto.proto.SpeedAlertConfigurationValue.prototype.addSpeedAlertConfigurations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.SpeedAlertConfiguration, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.SpeedAlertConfigurationValue} returns this
 */
proto.proto.SpeedAlertConfigurationValue.prototype.clearSpeedAlertConfigurationsList = function() {
  return this.setSpeedAlertConfigurationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.SpeedAlertConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpeedAlertConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpeedAlertConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpeedAlertConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
endTimestampInS: jspb.Message.getFieldWithDefault(msg, 1, 0),
thresholdInKph: jspb.Message.getFieldWithDefault(msg, 2, 0),
thresholdDisplayValue: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.SpeedAlertConfiguration}
 */
proto.proto.SpeedAlertConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpeedAlertConfiguration;
  return proto.proto.SpeedAlertConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpeedAlertConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpeedAlertConfiguration}
 */
proto.proto.SpeedAlertConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTimestampInS(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setThresholdInKph(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setThresholdDisplayValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.SpeedAlertConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpeedAlertConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpeedAlertConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpeedAlertConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndTimestampInS();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getThresholdInKph();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getThresholdDisplayValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 end_timestamp_in_s = 1;
 * @return {number}
 */
proto.proto.SpeedAlertConfiguration.prototype.getEndTimestampInS = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpeedAlertConfiguration} returns this
 */
proto.proto.SpeedAlertConfiguration.prototype.setEndTimestampInS = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 threshold_in_kph = 2;
 * @return {number}
 */
proto.proto.SpeedAlertConfiguration.prototype.getThresholdInKph = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpeedAlertConfiguration} returns this
 */
proto.proto.SpeedAlertConfiguration.prototype.setThresholdInKph = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string threshold_display_value = 3;
 * @return {string}
 */
proto.proto.SpeedAlertConfiguration.prototype.getThresholdDisplayValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SpeedAlertConfiguration} returns this
 */
proto.proto.SpeedAlertConfiguration.prototype.setThresholdDisplayValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.WeeklySettingsHeadUnitValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.WeeklySettingsHeadUnitValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WeeklySettingsHeadUnitValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WeeklySettingsHeadUnitValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeeklySettingsHeadUnitValue.toObject = function(includeInstance, msg) {
  var f, obj = {
weeklySettingsList: jspb.Message.toObjectList(msg.getWeeklySettingsList(),
    proto.proto.WeeklySetting.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.WeeklySettingsHeadUnitValue}
 */
proto.proto.WeeklySettingsHeadUnitValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WeeklySettingsHeadUnitValue;
  return proto.proto.WeeklySettingsHeadUnitValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WeeklySettingsHeadUnitValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WeeklySettingsHeadUnitValue}
 */
proto.proto.WeeklySettingsHeadUnitValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.WeeklySetting;
      reader.readMessage(value,proto.proto.WeeklySetting.deserializeBinaryFromReader);
      msg.addWeeklySettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.WeeklySettingsHeadUnitValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WeeklySettingsHeadUnitValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WeeklySettingsHeadUnitValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeeklySettingsHeadUnitValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWeeklySettingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.WeeklySetting.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WeeklySetting weekly_settings = 1;
 * @return {!Array<!proto.proto.WeeklySetting>}
 */
proto.proto.WeeklySettingsHeadUnitValue.prototype.getWeeklySettingsList = function() {
  return /** @type{!Array<!proto.proto.WeeklySetting>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.WeeklySetting, 1));
};


/**
 * @param {!Array<!proto.proto.WeeklySetting>} value
 * @return {!proto.proto.WeeklySettingsHeadUnitValue} returns this
*/
proto.proto.WeeklySettingsHeadUnitValue.prototype.setWeeklySettingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.WeeklySetting=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.WeeklySetting}
 */
proto.proto.WeeklySettingsHeadUnitValue.prototype.addWeeklySettings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.WeeklySetting, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.WeeklySettingsHeadUnitValue} returns this
 */
proto.proto.WeeklySettingsHeadUnitValue.prototype.clearWeeklySettingsList = function() {
  return this.setWeeklySettingsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.WeeklySetting.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WeeklySetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WeeklySetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeeklySetting.toObject = function(includeInstance, msg) {
  var f, obj = {
day: jspb.Message.getFieldWithDefault(msg, 1, 0),
minutesSinceMidnight: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.WeeklySetting}
 */
proto.proto.WeeklySetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WeeklySetting;
  return proto.proto.WeeklySetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WeeklySetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WeeklySetting}
 */
proto.proto.WeeklySetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDay(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinutesSinceMidnight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.WeeklySetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WeeklySetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WeeklySetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeeklySetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDay();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMinutesSinceMidnight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 day = 1;
 * @return {number}
 */
proto.proto.WeeklySetting.prototype.getDay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WeeklySetting} returns this
 */
proto.proto.WeeklySetting.prototype.setDay = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 minutes_since_midnight = 2;
 * @return {number}
 */
proto.proto.WeeklySetting.prototype.getMinutesSinceMidnight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WeeklySetting} returns this
 */
proto.proto.WeeklySetting.prototype.setMinutesSinceMidnight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.TemperaturePointsValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.TemperaturePointsValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TemperaturePointsValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TemperaturePointsValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemperaturePointsValue.toObject = function(includeInstance, msg) {
  var f, obj = {
temperaturePointsList: jspb.Message.toObjectList(msg.getTemperaturePointsList(),
    proto.proto.TemperaturePoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.TemperaturePointsValue}
 */
proto.proto.TemperaturePointsValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TemperaturePointsValue;
  return proto.proto.TemperaturePointsValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TemperaturePointsValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TemperaturePointsValue}
 */
proto.proto.TemperaturePointsValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.TemperaturePoint;
      reader.readMessage(value,proto.proto.TemperaturePoint.deserializeBinaryFromReader);
      msg.addTemperaturePoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.TemperaturePointsValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TemperaturePointsValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TemperaturePointsValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemperaturePointsValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemperaturePointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.TemperaturePoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TemperaturePoint temperature_points = 1;
 * @return {!Array<!proto.proto.TemperaturePoint>}
 */
proto.proto.TemperaturePointsValue.prototype.getTemperaturePointsList = function() {
  return /** @type{!Array<!proto.proto.TemperaturePoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.TemperaturePoint, 1));
};


/**
 * @param {!Array<!proto.proto.TemperaturePoint>} value
 * @return {!proto.proto.TemperaturePointsValue} returns this
*/
proto.proto.TemperaturePointsValue.prototype.setTemperaturePointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.TemperaturePoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.TemperaturePoint}
 */
proto.proto.TemperaturePointsValue.prototype.addTemperaturePoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.TemperaturePoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.TemperaturePointsValue} returns this
 */
proto.proto.TemperaturePointsValue.prototype.clearTemperaturePointsList = function() {
  return this.setTemperaturePointsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.TemperaturePoint.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TemperaturePoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TemperaturePoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemperaturePoint.toObject = function(includeInstance, msg) {
  var f, obj = {
zone: jspb.Message.getFieldWithDefault(msg, 1, ""),
temperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
temperatureDisplayValue: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.TemperaturePoint}
 */
proto.proto.TemperaturePoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TemperaturePoint;
  return proto.proto.TemperaturePoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TemperaturePoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TemperaturePoint}
 */
proto.proto.TemperaturePoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setZone(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTemperature(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTemperatureDisplayValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.TemperaturePoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TemperaturePoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TemperaturePoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemperaturePoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZone();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTemperature();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getTemperatureDisplayValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string zone = 1;
 * @return {string}
 */
proto.proto.TemperaturePoint.prototype.getZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.TemperaturePoint} returns this
 */
proto.proto.TemperaturePoint.prototype.setZone = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double temperature = 2;
 * @return {number}
 */
proto.proto.TemperaturePoint.prototype.getTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TemperaturePoint} returns this
 */
proto.proto.TemperaturePoint.prototype.setTemperature = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string temperature_display_value = 3;
 * @return {string}
 */
proto.proto.TemperaturePoint.prototype.getTemperatureDisplayValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.TemperaturePoint} returns this
 */
proto.proto.TemperaturePoint.prototype.setTemperatureDisplayValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.WeekdayTariffValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.WeekdayTariffValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WeekdayTariffValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WeekdayTariffValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeekdayTariffValue.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffsList: jspb.Message.toObjectList(msg.getTariffsList(),
    proto.proto.Tariff.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.WeekdayTariffValue}
 */
proto.proto.WeekdayTariffValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WeekdayTariffValue;
  return proto.proto.WeekdayTariffValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WeekdayTariffValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WeekdayTariffValue}
 */
proto.proto.WeekdayTariffValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Tariff;
      reader.readMessage(value,proto.proto.Tariff.deserializeBinaryFromReader);
      msg.addTariffs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.WeekdayTariffValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WeekdayTariffValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WeekdayTariffValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeekdayTariffValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTariffsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.Tariff.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Tariff tariffs = 1;
 * @return {!Array<!proto.proto.Tariff>}
 */
proto.proto.WeekdayTariffValue.prototype.getTariffsList = function() {
  return /** @type{!Array<!proto.proto.Tariff>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Tariff, 1));
};


/**
 * @param {!Array<!proto.proto.Tariff>} value
 * @return {!proto.proto.WeekdayTariffValue} returns this
*/
proto.proto.WeekdayTariffValue.prototype.setTariffsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.Tariff=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Tariff}
 */
proto.proto.WeekdayTariffValue.prototype.addTariffs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.Tariff, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.WeekdayTariffValue} returns this
 */
proto.proto.WeekdayTariffValue.prototype.clearTariffsList = function() {
  return this.setTariffsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.WeekendTariffValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.WeekendTariffValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WeekendTariffValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WeekendTariffValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeekendTariffValue.toObject = function(includeInstance, msg) {
  var f, obj = {
tariffsList: jspb.Message.toObjectList(msg.getTariffsList(),
    proto.proto.Tariff.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.WeekendTariffValue}
 */
proto.proto.WeekendTariffValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WeekendTariffValue;
  return proto.proto.WeekendTariffValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WeekendTariffValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WeekendTariffValue}
 */
proto.proto.WeekendTariffValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Tariff;
      reader.readMessage(value,proto.proto.Tariff.deserializeBinaryFromReader);
      msg.addTariffs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.WeekendTariffValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WeekendTariffValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WeekendTariffValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeekendTariffValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTariffsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.Tariff.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Tariff tariffs = 1;
 * @return {!Array<!proto.proto.Tariff>}
 */
proto.proto.WeekendTariffValue.prototype.getTariffsList = function() {
  return /** @type{!Array<!proto.proto.Tariff>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Tariff, 1));
};


/**
 * @param {!Array<!proto.proto.Tariff>} value
 * @return {!proto.proto.WeekendTariffValue} returns this
*/
proto.proto.WeekendTariffValue.prototype.setTariffsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.Tariff=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Tariff}
 */
proto.proto.WeekendTariffValue.prototype.addTariffs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.Tariff, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.WeekendTariffValue} returns this
 */
proto.proto.WeekendTariffValue.prototype.clearTariffsList = function() {
  return this.setTariffsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Tariff.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Tariff.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Tariff} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Tariff.toObject = function(includeInstance, msg) {
  var f, obj = {
rate: jspb.Message.getFieldWithDefault(msg, 1, 0),
time: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Tariff}
 */
proto.proto.Tariff.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Tariff;
  return proto.proto.Tariff.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Tariff} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Tariff}
 */
proto.proto.Tariff.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Tariff.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Tariff.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Tariff} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Tariff.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRate();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 rate = 1;
 * @return {number}
 */
proto.proto.Tariff.prototype.getRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Tariff} returns this
 */
proto.proto.Tariff.prototype.setRate = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 time = 2;
 * @return {number}
 */
proto.proto.Tariff.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.Tariff} returns this
 */
proto.proto.Tariff.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.StateOfChargeProfileValue.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.StateOfChargeProfileValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.StateOfChargeProfileValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.StateOfChargeProfileValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StateOfChargeProfileValue.toObject = function(includeInstance, msg) {
  var f, obj = {
statesOfChargeList: jspb.Message.toObjectList(msg.getStatesOfChargeList(),
    proto.proto.StateOfCharge.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.StateOfChargeProfileValue}
 */
proto.proto.StateOfChargeProfileValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.StateOfChargeProfileValue;
  return proto.proto.StateOfChargeProfileValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.StateOfChargeProfileValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.StateOfChargeProfileValue}
 */
proto.proto.StateOfChargeProfileValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.StateOfCharge;
      reader.readMessage(value,proto.proto.StateOfCharge.deserializeBinaryFromReader);
      msg.addStatesOfCharge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.StateOfChargeProfileValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.StateOfChargeProfileValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.StateOfChargeProfileValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StateOfChargeProfileValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatesOfChargeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.StateOfCharge.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StateOfCharge states_of_charge = 1;
 * @return {!Array<!proto.proto.StateOfCharge>}
 */
proto.proto.StateOfChargeProfileValue.prototype.getStatesOfChargeList = function() {
  return /** @type{!Array<!proto.proto.StateOfCharge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.StateOfCharge, 1));
};


/**
 * @param {!Array<!proto.proto.StateOfCharge>} value
 * @return {!proto.proto.StateOfChargeProfileValue} returns this
*/
proto.proto.StateOfChargeProfileValue.prototype.setStatesOfChargeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.StateOfCharge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.StateOfCharge}
 */
proto.proto.StateOfChargeProfileValue.prototype.addStatesOfCharge = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.StateOfCharge, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.StateOfChargeProfileValue} returns this
 */
proto.proto.StateOfChargeProfileValue.prototype.clearStatesOfChargeList = function() {
  return this.setStatesOfChargeList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.StateOfCharge.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.StateOfCharge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.StateOfCharge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StateOfCharge.toObject = function(includeInstance, msg) {
  var f, obj = {
timestampInS: jspb.Message.getFieldWithDefault(msg, 1, 0),
stateOfCharge: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.StateOfCharge}
 */
proto.proto.StateOfCharge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.StateOfCharge;
  return proto.proto.StateOfCharge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.StateOfCharge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.StateOfCharge}
 */
proto.proto.StateOfCharge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestampInS(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStateOfCharge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.StateOfCharge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.StateOfCharge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.StateOfCharge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.StateOfCharge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestampInS();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStateOfCharge();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 timestamp_in_s = 1;
 * @return {number}
 */
proto.proto.StateOfCharge.prototype.getTimestampInS = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.StateOfCharge} returns this
 */
proto.proto.StateOfCharge.prototype.setTimestampInS = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 state_of_charge = 2;
 * @return {number}
 */
proto.proto.StateOfCharge.prototype.getStateOfCharge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.StateOfCharge} returns this
 */
proto.proto.StateOfCharge.prototype.setStateOfCharge = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.VEPUpdatesByVIN.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.VEPUpdatesByVIN.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.VEPUpdatesByVIN} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VEPUpdatesByVIN.toObject = function(includeInstance, msg) {
  var f, obj = {
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
updatesMap: (f = msg.getUpdatesMap()) ? f.toObject(includeInstance, proto.proto.VEPUpdate.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.VEPUpdatesByVIN}
 */
proto.proto.VEPUpdatesByVIN.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.VEPUpdatesByVIN;
  return proto.proto.VEPUpdatesByVIN.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.VEPUpdatesByVIN} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.VEPUpdatesByVIN}
 */
proto.proto.VEPUpdatesByVIN.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    case 1:
      var value = msg.getUpdatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.proto.VEPUpdate.deserializeBinaryFromReader, "", new proto.proto.VEPUpdate());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.VEPUpdatesByVIN.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.VEPUpdatesByVIN.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.VEPUpdatesByVIN} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VEPUpdatesByVIN.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUpdatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.proto.VEPUpdate.serializeBinaryToWriter);
  }
};


/**
 * optional int32 sequence_number = 2;
 * @return {number}
 */
proto.proto.VEPUpdatesByVIN.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VEPUpdatesByVIN} returns this
 */
proto.proto.VEPUpdatesByVIN.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * map<string, VEPUpdate> updates = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.proto.VEPUpdate>}
 */
proto.proto.VEPUpdatesByVIN.prototype.getUpdatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.proto.VEPUpdate>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.proto.VEPUpdate));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.proto.VEPUpdatesByVIN} returns this
 */
proto.proto.VEPUpdatesByVIN.prototype.clearUpdatesMap = function() {
  this.getUpdatesMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.DebugMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DebugMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DebugMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DebugMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.DebugMessage}
 */
proto.proto.DebugMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DebugMessage;
  return proto.proto.DebugMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DebugMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DebugMessage}
 */
proto.proto.DebugMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.DebugMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DebugMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DebugMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DebugMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.proto.DebugMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DebugMessage} returns this
 */
proto.proto.DebugMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.VehicleStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.VehicleStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.VehicleStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VehicleStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
vin: jspb.Message.getFieldWithDefault(msg, 1, ""),
attributesMap: (f = msg.getAttributesMap()) ? f.toObject(includeInstance, proto.proto.VehicleAttributeStatus.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.VehicleStatus}
 */
proto.proto.VehicleStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.VehicleStatus;
  return proto.proto.VehicleStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.VehicleStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.VehicleStatus}
 */
proto.proto.VehicleStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVin(value);
      break;
    case 2:
      var value = msg.getAttributesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.proto.VehicleAttributeStatus.deserializeBinaryFromReader, "", new proto.proto.VehicleAttributeStatus());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.VehicleStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.VehicleStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.VehicleStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VehicleStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAttributesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.proto.VehicleAttributeStatus.serializeBinaryToWriter);
  }
};


/**
 * optional string vin = 1;
 * @return {string}
 */
proto.proto.VehicleStatus.prototype.getVin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.VehicleStatus} returns this
 */
proto.proto.VehicleStatus.prototype.setVin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, VehicleAttributeStatus> attributes = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.proto.VehicleAttributeStatus>}
 */
proto.proto.VehicleStatus.prototype.getAttributesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.proto.VehicleAttributeStatus>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.proto.VehicleAttributeStatus));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.proto.VehicleStatus} returns this
 */
proto.proto.VehicleStatus.prototype.clearAttributesMap = function() {
  this.getAttributesMap().clear();
  return this;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.PushMessage.oneofGroups_ = [[1,2,3,9,13,10,14,11,12,15,16,17,18,19,21]];

/**
 * @enum {number}
 */
proto.proto.PushMessage.MsgCase = {
  MSG_NOT_SET: 0,
  VEPUPDATE: 1,
  VEPUPDATES: 2,
  DEBUGMESSAGE: 3,
  SERVICE_STATUS_UPDATES: 9,
  SERVICE_STATUS_UPDATE: 13,
  USER_DATA_UPDATE: 10,
  USER_VEHICLE_AUTH_CHANGED_UPDATE: 14,
  USER_PICTURE_UPDATE: 11,
  USER_PIN_UPDATE: 12,
  VEHICLE_UPDATED: 15,
  PREFERRED_DEALER_CHANGE: 16,
  APPTWIN_COMMAND_STATUS_UPDATES_BY_VIN: 17,
  APPTWIN_PENDING_COMMAND_REQUEST: 18,
  ASSIGNED_VEHICLES: 19,
  DATA_CHANGE_EVENT: 21
};

/**
 * @return {proto.proto.PushMessage.MsgCase}
 */
proto.proto.PushMessage.prototype.getMsgCase = function() {
  return /** @type {proto.proto.PushMessage.MsgCase} */(jspb.Message.computeOneofCase(this, proto.proto.PushMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PushMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PushMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PushMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PushMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
trackingId: jspb.Message.getFieldWithDefault(msg, 5, ""),
vepupdate: (f = msg.getVepupdate()) && proto.proto.VEPUpdate.toObject(includeInstance, f),
vepupdates: (f = msg.getVepupdates()) && proto.proto.VEPUpdatesByVIN.toObject(includeInstance, f),
debugmessage: (f = msg.getDebugmessage()) && proto.proto.DebugMessage.toObject(includeInstance, f),
serviceStatusUpdates: (f = msg.getServiceStatusUpdates()) && service$activation_pb.ServiceStatusUpdatesByVIN.toObject(includeInstance, f),
serviceStatusUpdate: (f = msg.getServiceStatusUpdate()) && service$activation_pb.ServiceStatusUpdate.toObject(includeInstance, f),
userDataUpdate: (f = msg.getUserDataUpdate()) && user$events_pb.UserDataUpdate.toObject(includeInstance, f),
userVehicleAuthChangedUpdate: (f = msg.getUserVehicleAuthChangedUpdate()) && user$events_pb.UserVehicleAuthChangedUpdate.toObject(includeInstance, f),
userPictureUpdate: (f = msg.getUserPictureUpdate()) && user$events_pb.UserPictureUpdate.toObject(includeInstance, f),
userPinUpdate: (f = msg.getUserPinUpdate()) && user$events_pb.UserPINUpdate.toObject(includeInstance, f),
vehicleUpdated: (f = msg.getVehicleUpdated()) && proto.proto.VehicleUpdated.toObject(includeInstance, f),
preferredDealerChange: (f = msg.getPreferredDealerChange()) && proto.proto.PreferredDealerChange.toObject(includeInstance, f),
apptwinCommandStatusUpdatesByVin: (f = msg.getApptwinCommandStatusUpdatesByVin()) && vehicleapi_pb.AppTwinCommandStatusUpdatesByVIN.toObject(includeInstance, f),
apptwinPendingCommandRequest: (f = msg.getApptwinPendingCommandRequest()) && vehicleapi_pb.AppTwinPendingCommandsRequest.toObject(includeInstance, f),
assignedVehicles: (f = msg.getAssignedVehicles()) && protos_pb.AssignedVehicles.toObject(includeInstance, f),
dataChangeEvent: (f = msg.getDataChangeEvent()) && proto.proto.DataChangeEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PushMessage}
 */
proto.proto.PushMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PushMessage;
  return proto.proto.PushMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PushMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PushMessage}
 */
proto.proto.PushMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackingId(value);
      break;
    case 1:
      var value = new proto.proto.VEPUpdate;
      reader.readMessage(value,proto.proto.VEPUpdate.deserializeBinaryFromReader);
      msg.setVepupdate(value);
      break;
    case 2:
      var value = new proto.proto.VEPUpdatesByVIN;
      reader.readMessage(value,proto.proto.VEPUpdatesByVIN.deserializeBinaryFromReader);
      msg.setVepupdates(value);
      break;
    case 3:
      var value = new proto.proto.DebugMessage;
      reader.readMessage(value,proto.proto.DebugMessage.deserializeBinaryFromReader);
      msg.setDebugmessage(value);
      break;
    case 9:
      var value = new service$activation_pb.ServiceStatusUpdatesByVIN;
      reader.readMessage(value,service$activation_pb.ServiceStatusUpdatesByVIN.deserializeBinaryFromReader);
      msg.setServiceStatusUpdates(value);
      break;
    case 13:
      var value = new service$activation_pb.ServiceStatusUpdate;
      reader.readMessage(value,service$activation_pb.ServiceStatusUpdate.deserializeBinaryFromReader);
      msg.setServiceStatusUpdate(value);
      break;
    case 10:
      var value = new user$events_pb.UserDataUpdate;
      reader.readMessage(value,user$events_pb.UserDataUpdate.deserializeBinaryFromReader);
      msg.setUserDataUpdate(value);
      break;
    case 14:
      var value = new user$events_pb.UserVehicleAuthChangedUpdate;
      reader.readMessage(value,user$events_pb.UserVehicleAuthChangedUpdate.deserializeBinaryFromReader);
      msg.setUserVehicleAuthChangedUpdate(value);
      break;
    case 11:
      var value = new user$events_pb.UserPictureUpdate;
      reader.readMessage(value,user$events_pb.UserPictureUpdate.deserializeBinaryFromReader);
      msg.setUserPictureUpdate(value);
      break;
    case 12:
      var value = new user$events_pb.UserPINUpdate;
      reader.readMessage(value,user$events_pb.UserPINUpdate.deserializeBinaryFromReader);
      msg.setUserPinUpdate(value);
      break;
    case 15:
      var value = new proto.proto.VehicleUpdated;
      reader.readMessage(value,proto.proto.VehicleUpdated.deserializeBinaryFromReader);
      msg.setVehicleUpdated(value);
      break;
    case 16:
      var value = new proto.proto.PreferredDealerChange;
      reader.readMessage(value,proto.proto.PreferredDealerChange.deserializeBinaryFromReader);
      msg.setPreferredDealerChange(value);
      break;
    case 17:
      var value = new vehicleapi_pb.AppTwinCommandStatusUpdatesByVIN;
      reader.readMessage(value,vehicleapi_pb.AppTwinCommandStatusUpdatesByVIN.deserializeBinaryFromReader);
      msg.setApptwinCommandStatusUpdatesByVin(value);
      break;
    case 18:
      var value = new vehicleapi_pb.AppTwinPendingCommandsRequest;
      reader.readMessage(value,vehicleapi_pb.AppTwinPendingCommandsRequest.deserializeBinaryFromReader);
      msg.setApptwinPendingCommandRequest(value);
      break;
    case 19:
      var value = new protos_pb.AssignedVehicles;
      reader.readMessage(value,protos_pb.AssignedVehicles.deserializeBinaryFromReader);
      msg.setAssignedVehicles(value);
      break;
    case 21:
      var value = new proto.proto.DataChangeEvent;
      reader.readMessage(value,proto.proto.DataChangeEvent.deserializeBinaryFromReader);
      msg.setDataChangeEvent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PushMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PushMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PushMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PushMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getVepupdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.VEPUpdate.serializeBinaryToWriter
    );
  }
  f = message.getVepupdates();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.VEPUpdatesByVIN.serializeBinaryToWriter
    );
  }
  f = message.getDebugmessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.DebugMessage.serializeBinaryToWriter
    );
  }
  f = message.getServiceStatusUpdates();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      service$activation_pb.ServiceStatusUpdatesByVIN.serializeBinaryToWriter
    );
  }
  f = message.getServiceStatusUpdate();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      service$activation_pb.ServiceStatusUpdate.serializeBinaryToWriter
    );
  }
  f = message.getUserDataUpdate();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      user$events_pb.UserDataUpdate.serializeBinaryToWriter
    );
  }
  f = message.getUserVehicleAuthChangedUpdate();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      user$events_pb.UserVehicleAuthChangedUpdate.serializeBinaryToWriter
    );
  }
  f = message.getUserPictureUpdate();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      user$events_pb.UserPictureUpdate.serializeBinaryToWriter
    );
  }
  f = message.getUserPinUpdate();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      user$events_pb.UserPINUpdate.serializeBinaryToWriter
    );
  }
  f = message.getVehicleUpdated();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.proto.VehicleUpdated.serializeBinaryToWriter
    );
  }
  f = message.getPreferredDealerChange();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.proto.PreferredDealerChange.serializeBinaryToWriter
    );
  }
  f = message.getApptwinCommandStatusUpdatesByVin();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      vehicleapi_pb.AppTwinCommandStatusUpdatesByVIN.serializeBinaryToWriter
    );
  }
  f = message.getApptwinPendingCommandRequest();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      vehicleapi_pb.AppTwinPendingCommandsRequest.serializeBinaryToWriter
    );
  }
  f = message.getAssignedVehicles();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      protos_pb.AssignedVehicles.serializeBinaryToWriter
    );
  }
  f = message.getDataChangeEvent();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.proto.DataChangeEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tracking_id = 5;
 * @return {string}
 */
proto.proto.PushMessage.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional VEPUpdate vepUpdate = 1;
 * @return {?proto.proto.VEPUpdate}
 */
proto.proto.PushMessage.prototype.getVepupdate = function() {
  return /** @type{?proto.proto.VEPUpdate} */ (
    jspb.Message.getWrapperField(this, proto.proto.VEPUpdate, 1));
};


/**
 * @param {?proto.proto.VEPUpdate|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setVepupdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearVepupdate = function() {
  return this.setVepupdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasVepupdate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VEPUpdatesByVIN vepUpdates = 2;
 * @return {?proto.proto.VEPUpdatesByVIN}
 */
proto.proto.PushMessage.prototype.getVepupdates = function() {
  return /** @type{?proto.proto.VEPUpdatesByVIN} */ (
    jspb.Message.getWrapperField(this, proto.proto.VEPUpdatesByVIN, 2));
};


/**
 * @param {?proto.proto.VEPUpdatesByVIN|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setVepupdates = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearVepupdates = function() {
  return this.setVepupdates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasVepupdates = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DebugMessage debugMessage = 3;
 * @return {?proto.proto.DebugMessage}
 */
proto.proto.PushMessage.prototype.getDebugmessage = function() {
  return /** @type{?proto.proto.DebugMessage} */ (
    jspb.Message.getWrapperField(this, proto.proto.DebugMessage, 3));
};


/**
 * @param {?proto.proto.DebugMessage|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setDebugmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearDebugmessage = function() {
  return this.setDebugmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasDebugmessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServiceStatusUpdatesByVIN service_status_updates = 9;
 * @return {?proto.proto.ServiceStatusUpdatesByVIN}
 */
proto.proto.PushMessage.prototype.getServiceStatusUpdates = function() {
  return /** @type{?proto.proto.ServiceStatusUpdatesByVIN} */ (
    jspb.Message.getWrapperField(this, service$activation_pb.ServiceStatusUpdatesByVIN, 9));
};


/**
 * @param {?proto.proto.ServiceStatusUpdatesByVIN|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setServiceStatusUpdates = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearServiceStatusUpdates = function() {
  return this.setServiceStatusUpdates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasServiceStatusUpdates = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ServiceStatusUpdate service_status_update = 13;
 * @return {?proto.proto.ServiceStatusUpdate}
 */
proto.proto.PushMessage.prototype.getServiceStatusUpdate = function() {
  return /** @type{?proto.proto.ServiceStatusUpdate} */ (
    jspb.Message.getWrapperField(this, service$activation_pb.ServiceStatusUpdate, 13));
};


/**
 * @param {?proto.proto.ServiceStatusUpdate|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setServiceStatusUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearServiceStatusUpdate = function() {
  return this.setServiceStatusUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasServiceStatusUpdate = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional UserDataUpdate user_data_update = 10;
 * @return {?proto.proto.UserDataUpdate}
 */
proto.proto.PushMessage.prototype.getUserDataUpdate = function() {
  return /** @type{?proto.proto.UserDataUpdate} */ (
    jspb.Message.getWrapperField(this, user$events_pb.UserDataUpdate, 10));
};


/**
 * @param {?proto.proto.UserDataUpdate|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setUserDataUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearUserDataUpdate = function() {
  return this.setUserDataUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasUserDataUpdate = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional UserVehicleAuthChangedUpdate user_vehicle_auth_changed_update = 14;
 * @return {?proto.proto.UserVehicleAuthChangedUpdate}
 */
proto.proto.PushMessage.prototype.getUserVehicleAuthChangedUpdate = function() {
  return /** @type{?proto.proto.UserVehicleAuthChangedUpdate} */ (
    jspb.Message.getWrapperField(this, user$events_pb.UserVehicleAuthChangedUpdate, 14));
};


/**
 * @param {?proto.proto.UserVehicleAuthChangedUpdate|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setUserVehicleAuthChangedUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearUserVehicleAuthChangedUpdate = function() {
  return this.setUserVehicleAuthChangedUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasUserVehicleAuthChangedUpdate = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional UserPictureUpdate user_picture_update = 11;
 * @return {?proto.proto.UserPictureUpdate}
 */
proto.proto.PushMessage.prototype.getUserPictureUpdate = function() {
  return /** @type{?proto.proto.UserPictureUpdate} */ (
    jspb.Message.getWrapperField(this, user$events_pb.UserPictureUpdate, 11));
};


/**
 * @param {?proto.proto.UserPictureUpdate|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setUserPictureUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearUserPictureUpdate = function() {
  return this.setUserPictureUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasUserPictureUpdate = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional UserPINUpdate user_pin_update = 12;
 * @return {?proto.proto.UserPINUpdate}
 */
proto.proto.PushMessage.prototype.getUserPinUpdate = function() {
  return /** @type{?proto.proto.UserPINUpdate} */ (
    jspb.Message.getWrapperField(this, user$events_pb.UserPINUpdate, 12));
};


/**
 * @param {?proto.proto.UserPINUpdate|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setUserPinUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearUserPinUpdate = function() {
  return this.setUserPinUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasUserPinUpdate = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional VehicleUpdated vehicle_updated = 15;
 * @return {?proto.proto.VehicleUpdated}
 */
proto.proto.PushMessage.prototype.getVehicleUpdated = function() {
  return /** @type{?proto.proto.VehicleUpdated} */ (
    jspb.Message.getWrapperField(this, proto.proto.VehicleUpdated, 15));
};


/**
 * @param {?proto.proto.VehicleUpdated|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setVehicleUpdated = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearVehicleUpdated = function() {
  return this.setVehicleUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasVehicleUpdated = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional PreferredDealerChange preferred_dealer_change = 16;
 * @return {?proto.proto.PreferredDealerChange}
 */
proto.proto.PushMessage.prototype.getPreferredDealerChange = function() {
  return /** @type{?proto.proto.PreferredDealerChange} */ (
    jspb.Message.getWrapperField(this, proto.proto.PreferredDealerChange, 16));
};


/**
 * @param {?proto.proto.PreferredDealerChange|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setPreferredDealerChange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearPreferredDealerChange = function() {
  return this.setPreferredDealerChange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasPreferredDealerChange = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional AppTwinCommandStatusUpdatesByVIN apptwin_command_status_updates_by_vin = 17;
 * @return {?proto.proto.AppTwinCommandStatusUpdatesByVIN}
 */
proto.proto.PushMessage.prototype.getApptwinCommandStatusUpdatesByVin = function() {
  return /** @type{?proto.proto.AppTwinCommandStatusUpdatesByVIN} */ (
    jspb.Message.getWrapperField(this, vehicleapi_pb.AppTwinCommandStatusUpdatesByVIN, 17));
};


/**
 * @param {?proto.proto.AppTwinCommandStatusUpdatesByVIN|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setApptwinCommandStatusUpdatesByVin = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearApptwinCommandStatusUpdatesByVin = function() {
  return this.setApptwinCommandStatusUpdatesByVin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasApptwinCommandStatusUpdatesByVin = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional AppTwinPendingCommandsRequest apptwin_pending_command_request = 18;
 * @return {?proto.proto.AppTwinPendingCommandsRequest}
 */
proto.proto.PushMessage.prototype.getApptwinPendingCommandRequest = function() {
  return /** @type{?proto.proto.AppTwinPendingCommandsRequest} */ (
    jspb.Message.getWrapperField(this, vehicleapi_pb.AppTwinPendingCommandsRequest, 18));
};


/**
 * @param {?proto.proto.AppTwinPendingCommandsRequest|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setApptwinPendingCommandRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearApptwinPendingCommandRequest = function() {
  return this.setApptwinPendingCommandRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasApptwinPendingCommandRequest = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional AssignedVehicles assigned_vehicles = 19;
 * @return {?proto.proto.AssignedVehicles}
 */
proto.proto.PushMessage.prototype.getAssignedVehicles = function() {
  return /** @type{?proto.proto.AssignedVehicles} */ (
    jspb.Message.getWrapperField(this, protos_pb.AssignedVehicles, 19));
};


/**
 * @param {?proto.proto.AssignedVehicles|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setAssignedVehicles = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearAssignedVehicles = function() {
  return this.setAssignedVehicles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasAssignedVehicles = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional DataChangeEvent data_change_event = 21;
 * @return {?proto.proto.DataChangeEvent}
 */
proto.proto.PushMessage.prototype.getDataChangeEvent = function() {
  return /** @type{?proto.proto.DataChangeEvent} */ (
    jspb.Message.getWrapperField(this, proto.proto.DataChangeEvent, 21));
};


/**
 * @param {?proto.proto.DataChangeEvent|undefined} value
 * @return {!proto.proto.PushMessage} returns this
*/
proto.proto.PushMessage.prototype.setDataChangeEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.proto.PushMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.PushMessage} returns this
 */
proto.proto.PushMessage.prototype.clearDataChangeEvent = function() {
  return this.setDataChangeEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PushMessage.prototype.hasDataChangeEvent = function() {
  return jspb.Message.getField(this, 21) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.TrackingEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TrackingEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TrackingEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TrackingEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
trackingId: jspb.Message.getFieldWithDefault(msg, 1, ""),
timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
eventType: jspb.Message.getFieldWithDefault(msg, 3, ""),
payloadMap: (f = msg.getPayloadMap()) ? f.toObject(includeInstance, proto.proto.PayloadValue.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.TrackingEvent}
 */
proto.proto.TrackingEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TrackingEvent;
  return proto.proto.TrackingEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TrackingEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TrackingEvent}
 */
proto.proto.TrackingEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackingId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    case 4:
      var value = msg.getPayloadMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.proto.PayloadValue.deserializeBinaryFromReader, "", new proto.proto.PayloadValue());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.TrackingEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TrackingEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TrackingEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TrackingEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEventType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPayloadMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.proto.PayloadValue.serializeBinaryToWriter);
  }
};


/**
 * optional string tracking_id = 1;
 * @return {string}
 */
proto.proto.TrackingEvent.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.TrackingEvent} returns this
 */
proto.proto.TrackingEvent.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.proto.TrackingEvent.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TrackingEvent} returns this
 */
proto.proto.TrackingEvent.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string event_type = 3;
 * @return {string}
 */
proto.proto.TrackingEvent.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.TrackingEvent} returns this
 */
proto.proto.TrackingEvent.prototype.setEventType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, PayloadValue> payload = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.proto.PayloadValue>}
 */
proto.proto.TrackingEvent.prototype.getPayloadMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.proto.PayloadValue>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.proto.PayloadValue));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.proto.TrackingEvent} returns this
 */
proto.proto.TrackingEvent.prototype.clearPayloadMap = function() {
  this.getPayloadMap().clear();
  return this;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.PayloadValue.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.proto.PayloadValue.MsgCase = {
  MSG_NOT_SET: 0,
  STRING_VALUE: 1,
  INT_VALUE: 2,
  BOOL_VALUE: 3,
  DOUBLE_VALUE: 4
};

/**
 * @return {proto.proto.PayloadValue.MsgCase}
 */
proto.proto.PayloadValue.prototype.getMsgCase = function() {
  return /** @type {proto.proto.PayloadValue.MsgCase} */(jspb.Message.computeOneofCase(this, proto.proto.PayloadValue.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PayloadValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PayloadValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PayloadValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PayloadValue.toObject = function(includeInstance, msg) {
  var f, obj = {
stringValue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
intValue: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
boolValue: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
doubleValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PayloadValue}
 */
proto.proto.PayloadValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PayloadValue;
  return proto.proto.PayloadValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PayloadValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PayloadValue}
 */
proto.proto.PayloadValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntValue(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolValue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDoubleValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PayloadValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PayloadValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PayloadValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PayloadValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional string string_value = 1;
 * @return {string}
 */
proto.proto.PayloadValue.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PayloadValue} returns this
 */
proto.proto.PayloadValue.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.proto.PayloadValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PayloadValue} returns this
 */
proto.proto.PayloadValue.prototype.clearStringValue = function() {
  return jspb.Message.setOneofField(this, 1, proto.proto.PayloadValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PayloadValue.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 int_value = 2;
 * @return {number}
 */
proto.proto.PayloadValue.prototype.getIntValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PayloadValue} returns this
 */
proto.proto.PayloadValue.prototype.setIntValue = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.proto.PayloadValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PayloadValue} returns this
 */
proto.proto.PayloadValue.prototype.clearIntValue = function() {
  return jspb.Message.setOneofField(this, 2, proto.proto.PayloadValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PayloadValue.prototype.hasIntValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool bool_value = 3;
 * @return {boolean}
 */
proto.proto.PayloadValue.prototype.getBoolValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.PayloadValue} returns this
 */
proto.proto.PayloadValue.prototype.setBoolValue = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.proto.PayloadValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PayloadValue} returns this
 */
proto.proto.PayloadValue.prototype.clearBoolValue = function() {
  return jspb.Message.setOneofField(this, 3, proto.proto.PayloadValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PayloadValue.prototype.hasBoolValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double double_value = 4;
 * @return {number}
 */
proto.proto.PayloadValue.prototype.getDoubleValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PayloadValue} returns this
 */
proto.proto.PayloadValue.prototype.setDoubleValue = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.proto.PayloadValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.proto.PayloadValue} returns this
 */
proto.proto.PayloadValue.prototype.clearDoubleValue = function() {
  return jspb.Message.setOneofField(this, 4, proto.proto.PayloadValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.PayloadValue.prototype.hasDoubleValue = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.AcknowledgeVEPRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AcknowledgeVEPRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AcknowledgeVEPRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgeVEPRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.AcknowledgeVEPRequest}
 */
proto.proto.AcknowledgeVEPRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AcknowledgeVEPRequest;
  return proto.proto.AcknowledgeVEPRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AcknowledgeVEPRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AcknowledgeVEPRequest}
 */
proto.proto.AcknowledgeVEPRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.AcknowledgeVEPRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AcknowledgeVEPRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AcknowledgeVEPRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgeVEPRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 sequence_number = 1;
 * @return {number}
 */
proto.proto.AcknowledgeVEPRequest.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.AcknowledgeVEPRequest} returns this
 */
proto.proto.AcknowledgeVEPRequest.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.AcknowledgeVEPUpdatesByVIN.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AcknowledgeVEPUpdatesByVIN.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AcknowledgeVEPUpdatesByVIN} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgeVEPUpdatesByVIN.toObject = function(includeInstance, msg) {
  var f, obj = {
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.AcknowledgeVEPUpdatesByVIN}
 */
proto.proto.AcknowledgeVEPUpdatesByVIN.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AcknowledgeVEPUpdatesByVIN;
  return proto.proto.AcknowledgeVEPUpdatesByVIN.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AcknowledgeVEPUpdatesByVIN} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AcknowledgeVEPUpdatesByVIN}
 */
proto.proto.AcknowledgeVEPUpdatesByVIN.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.AcknowledgeVEPUpdatesByVIN.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AcknowledgeVEPUpdatesByVIN.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AcknowledgeVEPUpdatesByVIN} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgeVEPUpdatesByVIN.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 sequence_number = 1;
 * @return {number}
 */
proto.proto.AcknowledgeVEPUpdatesByVIN.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.AcknowledgeVEPUpdatesByVIN} returns this
 */
proto.proto.AcknowledgeVEPUpdatesByVIN.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ConfigurePingInterval.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ConfigurePingInterval.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ConfigurePingInterval} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConfigurePingInterval.toObject = function(includeInstance, msg) {
  var f, obj = {
pingTimeMillis: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ConfigurePingInterval}
 */
proto.proto.ConfigurePingInterval.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ConfigurePingInterval;
  return proto.proto.ConfigurePingInterval.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ConfigurePingInterval} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ConfigurePingInterval}
 */
proto.proto.ConfigurePingInterval.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPingTimeMillis(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ConfigurePingInterval.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ConfigurePingInterval.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ConfigurePingInterval} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ConfigurePingInterval.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPingTimeMillis();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 ping_time_millis = 1;
 * @return {number}
 */
proto.proto.ConfigurePingInterval.prototype.getPingTimeMillis = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ConfigurePingInterval} returns this
 */
proto.proto.ConfigurePingInterval.prototype.setPingTimeMillis = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.AcknowledgeVehicleUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AcknowledgeVehicleUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AcknowledgeVehicleUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgeVehicleUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.AcknowledgeVehicleUpdated}
 */
proto.proto.AcknowledgeVehicleUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AcknowledgeVehicleUpdated;
  return proto.proto.AcknowledgeVehicleUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AcknowledgeVehicleUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AcknowledgeVehicleUpdated}
 */
proto.proto.AcknowledgeVehicleUpdated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.AcknowledgeVehicleUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AcknowledgeVehicleUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AcknowledgeVehicleUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgeVehicleUpdated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 sequence_number = 1;
 * @return {number}
 */
proto.proto.AcknowledgeVehicleUpdated.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.AcknowledgeVehicleUpdated} returns this
 */
proto.proto.AcknowledgeVehicleUpdated.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.AcknowledgePreferredDealerChange.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AcknowledgePreferredDealerChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AcknowledgePreferredDealerChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgePreferredDealerChange.toObject = function(includeInstance, msg) {
  var f, obj = {
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.AcknowledgePreferredDealerChange}
 */
proto.proto.AcknowledgePreferredDealerChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AcknowledgePreferredDealerChange;
  return proto.proto.AcknowledgePreferredDealerChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AcknowledgePreferredDealerChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AcknowledgePreferredDealerChange}
 */
proto.proto.AcknowledgePreferredDealerChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.AcknowledgePreferredDealerChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AcknowledgePreferredDealerChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AcknowledgePreferredDealerChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgePreferredDealerChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 sequence_number = 1;
 * @return {number}
 */
proto.proto.AcknowledgePreferredDealerChange.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.AcknowledgePreferredDealerChange} returns this
 */
proto.proto.AcknowledgePreferredDealerChange.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.VehicleUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.VehicleUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.VehicleUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VehicleUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
ciamId: jspb.Message.getFieldWithDefault(msg, 2, ""),
vin: jspb.Message.getFieldWithDefault(msg, 3, ""),
emitTimestampInMs: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.VehicleUpdated}
 */
proto.proto.VehicleUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.VehicleUpdated;
  return proto.proto.VehicleUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.VehicleUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.VehicleUpdated}
 */
proto.proto.VehicleUpdated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCiamId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVin(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEmitTimestampInMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.VehicleUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.VehicleUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.VehicleUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.VehicleUpdated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCiamId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVin();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmitTimestampInMs();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * optional int32 sequence_number = 1;
 * @return {number}
 */
proto.proto.VehicleUpdated.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VehicleUpdated} returns this
 */
proto.proto.VehicleUpdated.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string ciam_id = 2;
 * @return {string}
 */
proto.proto.VehicleUpdated.prototype.getCiamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.VehicleUpdated} returns this
 */
proto.proto.VehicleUpdated.prototype.setCiamId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string vin = 3;
 * @return {string}
 */
proto.proto.VehicleUpdated.prototype.getVin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.VehicleUpdated} returns this
 */
proto.proto.VehicleUpdated.prototype.setVin = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 emit_timestamp_in_ms = 10;
 * @return {number}
 */
proto.proto.VehicleUpdated.prototype.getEmitTimestampInMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.VehicleUpdated} returns this
 */
proto.proto.VehicleUpdated.prototype.setEmitTimestampInMs = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PreferredDealerChange.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PreferredDealerChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PreferredDealerChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PreferredDealerChange.toObject = function(includeInstance, msg) {
  var f, obj = {
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
ciamId: jspb.Message.getFieldWithDefault(msg, 2, ""),
vin: jspb.Message.getFieldWithDefault(msg, 3, ""),
emitTimestampInMs: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PreferredDealerChange}
 */
proto.proto.PreferredDealerChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PreferredDealerChange;
  return proto.proto.PreferredDealerChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PreferredDealerChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PreferredDealerChange}
 */
proto.proto.PreferredDealerChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCiamId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVin(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEmitTimestampInMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PreferredDealerChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PreferredDealerChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PreferredDealerChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PreferredDealerChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCiamId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVin();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmitTimestampInMs();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * optional int32 sequence_number = 1;
 * @return {number}
 */
proto.proto.PreferredDealerChange.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PreferredDealerChange} returns this
 */
proto.proto.PreferredDealerChange.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string ciam_id = 2;
 * @return {string}
 */
proto.proto.PreferredDealerChange.prototype.getCiamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PreferredDealerChange} returns this
 */
proto.proto.PreferredDealerChange.prototype.setCiamId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string vin = 3;
 * @return {string}
 */
proto.proto.PreferredDealerChange.prototype.getVin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.PreferredDealerChange} returns this
 */
proto.proto.PreferredDealerChange.prototype.setVin = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 emit_timestamp_in_ms = 10;
 * @return {number}
 */
proto.proto.PreferredDealerChange.prototype.getEmitTimestampInMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.PreferredDealerChange} returns this
 */
proto.proto.PreferredDealerChange.prototype.setEmitTimestampInMs = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.AcknowledgeDataChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AcknowledgeDataChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AcknowledgeDataChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgeDataChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.AcknowledgeDataChangeEvent}
 */
proto.proto.AcknowledgeDataChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AcknowledgeDataChangeEvent;
  return proto.proto.AcknowledgeDataChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AcknowledgeDataChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AcknowledgeDataChangeEvent}
 */
proto.proto.AcknowledgeDataChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.AcknowledgeDataChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AcknowledgeDataChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AcknowledgeDataChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgeDataChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 sequence_number = 1;
 * @return {number}
 */
proto.proto.AcknowledgeDataChangeEvent.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.AcknowledgeDataChangeEvent} returns this
 */
proto.proto.AcknowledgeDataChangeEvent.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Scopes.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Scopes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Scopes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Scopes.toObject = function(includeInstance, msg) {
  var f, obj = {
scope: jspb.Message.getFieldWithDefault(msg, 1, 0),
ciamid: jspb.Message.getFieldWithDefault(msg, 2, ""),
vin: jspb.Message.getFieldWithDefault(msg, 3, ""),
additionalResourcesMap: (f = msg.getAdditionalResourcesMap()) ? f.toObject(includeInstance, undefined) : [],
resourceCiamId: jspb.Message.getFieldWithDefault(msg, 5, ""),
resourceVin: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Scopes}
 */
proto.proto.Scopes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Scopes;
  return proto.proto.Scopes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Scopes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Scopes}
 */
proto.proto.Scopes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.Scope} */ (reader.readEnum());
      msg.setScope(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCiamid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVin(value);
      break;
    case 4:
      var value = msg.getAdditionalResourcesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceCiamId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceVin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Scopes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Scopes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Scopes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Scopes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScope();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCiamid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVin();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAdditionalResourcesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getResourceCiamId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getResourceVin();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional Scope scope = 1;
 * @return {!proto.proto.Scope}
 */
proto.proto.Scopes.prototype.getScope = function() {
  return /** @type {!proto.proto.Scope} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.Scope} value
 * @return {!proto.proto.Scopes} returns this
 */
proto.proto.Scopes.prototype.setScope = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string ciamId = 2;
 * @return {string}
 */
proto.proto.Scopes.prototype.getCiamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Scopes} returns this
 */
proto.proto.Scopes.prototype.setCiamid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string vin = 3;
 * @return {string}
 */
proto.proto.Scopes.prototype.getVin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Scopes} returns this
 */
proto.proto.Scopes.prototype.setVin = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> additional_resources = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.proto.Scopes.prototype.getAdditionalResourcesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.proto.Scopes} returns this
 */
proto.proto.Scopes.prototype.clearAdditionalResourcesMap = function() {
  this.getAdditionalResourcesMap().clear();
  return this;
};


/**
 * optional string resource_ciam_id = 5;
 * @return {string}
 */
proto.proto.Scopes.prototype.getResourceCiamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Scopes} returns this
 */
proto.proto.Scopes.prototype.setResourceCiamId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string resource_vin = 6;
 * @return {string}
 */
proto.proto.Scopes.prototype.getResourceVin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.Scopes} returns this
 */
proto.proto.Scopes.prototype.setResourceVin = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.DataChangeEvent.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.DataChangeEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DataChangeEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DataChangeEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DataChangeEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
scopesList: jspb.Message.toObjectList(msg.getScopesList(),
    proto.proto.Scopes.toObject, includeInstance),
trackingId: jspb.Message.getFieldWithDefault(msg, 2, ""),
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.DataChangeEvent}
 */
proto.proto.DataChangeEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DataChangeEvent;
  return proto.proto.DataChangeEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DataChangeEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DataChangeEvent}
 */
proto.proto.DataChangeEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Scopes;
      reader.readMessage(value,proto.proto.Scopes.deserializeBinaryFromReader);
      msg.addScopes(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackingId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.DataChangeEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DataChangeEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DataChangeEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DataChangeEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.Scopes.serializeBinaryToWriter
    );
  }
  f = message.getTrackingId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated Scopes scopes = 1;
 * @return {!Array<!proto.proto.Scopes>}
 */
proto.proto.DataChangeEvent.prototype.getScopesList = function() {
  return /** @type{!Array<!proto.proto.Scopes>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.Scopes, 1));
};


/**
 * @param {!Array<!proto.proto.Scopes>} value
 * @return {!proto.proto.DataChangeEvent} returns this
*/
proto.proto.DataChangeEvent.prototype.setScopesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.Scopes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.Scopes}
 */
proto.proto.DataChangeEvent.prototype.addScopes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.Scopes, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.DataChangeEvent} returns this
 */
proto.proto.DataChangeEvent.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};


/**
 * optional string tracking_id = 2;
 * @return {string}
 */
proto.proto.DataChangeEvent.prototype.getTrackingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DataChangeEvent} returns this
 */
proto.proto.DataChangeEvent.prototype.setTrackingId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 sequence_number = 3;
 * @return {number}
 */
proto.proto.DataChangeEvent.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.DataChangeEvent} returns this
 */
proto.proto.DataChangeEvent.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.KeylineActivationStateValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.KeylineActivationStateValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.KeylineActivationStateValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.KeylineActivationStateValue.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.KeylineActivationStateValue}
 */
proto.proto.KeylineActivationStateValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.KeylineActivationStateValue;
  return proto.proto.KeylineActivationStateValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.KeylineActivationStateValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.KeylineActivationStateValue}
 */
proto.proto.KeylineActivationStateValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.KeylineActivationStateValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.KeylineActivationStateValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.KeylineActivationStateValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.KeylineActivationStateValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.NextDepartureTimeValue.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.NextDepartureTimeValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.NextDepartureTimeValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NextDepartureTimeValue.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.NextDepartureTimeValue}
 */
proto.proto.NextDepartureTimeValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.NextDepartureTimeValue;
  return proto.proto.NextDepartureTimeValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.NextDepartureTimeValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.NextDepartureTimeValue}
 */
proto.proto.NextDepartureTimeValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.NextDepartureTimeValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.NextDepartureTimeValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.NextDepartureTimeValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.NextDepartureTimeValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChildPresenceDetectionWarningLastEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChildPresenceDetectionWarningLastEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChildPresenceDetectionWarningLastEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChildPresenceDetectionWarningLastEvent.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChildPresenceDetectionWarningLastEvent}
 */
proto.proto.ChildPresenceDetectionWarningLastEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChildPresenceDetectionWarningLastEvent;
  return proto.proto.ChildPresenceDetectionWarningLastEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChildPresenceDetectionWarningLastEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChildPresenceDetectionWarningLastEvent}
 */
proto.proto.ChildPresenceDetectionWarningLastEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChildPresenceDetectionWarningLastEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChildPresenceDetectionWarningLastEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChildPresenceDetectionWarningLastEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChildPresenceDetectionWarningLastEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChildPresenceDetectionWarningLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChildPresenceDetectionWarningLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChildPresenceDetectionWarningLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChildPresenceDetectionWarningLevel.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChildPresenceDetectionWarningLevel}
 */
proto.proto.ChildPresenceDetectionWarningLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChildPresenceDetectionWarningLevel;
  return proto.proto.ChildPresenceDetectionWarningLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChildPresenceDetectionWarningLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChildPresenceDetectionWarningLevel}
 */
proto.proto.ChildPresenceDetectionWarningLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChildPresenceDetectionWarningLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChildPresenceDetectionWarningLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChildPresenceDetectionWarningLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChildPresenceDetectionWarningLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.PerformanceLimitationModeStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.PerformanceLimitationModeStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.PerformanceLimitationModeStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PerformanceLimitationModeStatus.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.PerformanceLimitationModeStatus}
 */
proto.proto.PerformanceLimitationModeStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.PerformanceLimitationModeStatus;
  return proto.proto.PerformanceLimitationModeStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.PerformanceLimitationModeStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.PerformanceLimitationModeStatus}
 */
proto.proto.PerformanceLimitationModeStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.PerformanceLimitationModeStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.PerformanceLimitationModeStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.PerformanceLimitationModeStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.PerformanceLimitationModeStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ExteriorMonitoringStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ExteriorMonitoringStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ExteriorMonitoringStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ExteriorMonitoringStatus.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ExteriorMonitoringStatus}
 */
proto.proto.ExteriorMonitoringStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ExteriorMonitoringStatus;
  return proto.proto.ExteriorMonitoringStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ExteriorMonitoringStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ExteriorMonitoringStatus}
 */
proto.proto.ExteriorMonitoringStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ExteriorMonitoringStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ExteriorMonitoringStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ExteriorMonitoringStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ExteriorMonitoringStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.InteriorMonitoringStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.InteriorMonitoringStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.InteriorMonitoringStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.InteriorMonitoringStatus.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.InteriorMonitoringStatus}
 */
proto.proto.InteriorMonitoringStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.InteriorMonitoringStatus;
  return proto.proto.InteriorMonitoringStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.InteriorMonitoringStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.InteriorMonitoringStatus}
 */
proto.proto.InteriorMonitoringStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.InteriorMonitoringStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.InteriorMonitoringStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.InteriorMonitoringStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.InteriorMonitoringStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.RemoteUpdateStartStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.RemoteUpdateStartStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.RemoteUpdateStartStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RemoteUpdateStartStatus.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.RemoteUpdateStartStatus}
 */
proto.proto.RemoteUpdateStartStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.RemoteUpdateStartStatus;
  return proto.proto.RemoteUpdateStartStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.RemoteUpdateStartStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.RemoteUpdateStartStatus}
 */
proto.proto.RemoteUpdateStartStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.RemoteUpdateStartStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.RemoteUpdateStartStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.RemoteUpdateStartStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RemoteUpdateStartStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.SohCalibrationPlanned.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SohCalibrationPlanned.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SohCalibrationPlanned} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SohCalibrationPlanned.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.SohCalibrationPlanned}
 */
proto.proto.SohCalibrationPlanned.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SohCalibrationPlanned;
  return proto.proto.SohCalibrationPlanned.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SohCalibrationPlanned} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SohCalibrationPlanned}
 */
proto.proto.SohCalibrationPlanned.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.SohCalibrationPlanned.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SohCalibrationPlanned.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SohCalibrationPlanned} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SohCalibrationPlanned.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChargingScheduleActive.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargingScheduleActive.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingScheduleActive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingScheduleActive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingScheduleActive.toObject = function(includeInstance, msg) {
  var f, obj = {
scheduleIdDeprecated: jspb.Message.getFieldWithDefault(msg, 1, 0),
useCaseIdDeprecated: jspb.Message.getFieldWithDefault(msg, 2, 0),
startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
offlineMode: jspb.Message.getFieldWithDefault(msg, 4, 0),
scheduleList: jspb.Message.toObjectList(msg.getScheduleList(),
    proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.toObject, includeInstance),
useCaseId: jspb.Message.getFieldWithDefault(msg, 6, 0),
scheduleIdStatus: (f = msg.getScheduleIdStatus()) && proto.proto.ScheduleIdStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargingScheduleActive}
 */
proto.proto.ChargingScheduleActive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingScheduleActive;
  return proto.proto.ChargingScheduleActive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingScheduleActive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingScheduleActive}
 */
proto.proto.ChargingScheduleActive.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduleIdDeprecated(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveUseCaseId} */ (reader.readEnum());
      msg.setUseCaseIdDeprecated(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 4:
      var value = /** @type {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveOfflineMode} */ (reader.readEnum());
      msg.setOfflineMode(value);
      break;
    case 5:
      var value = new proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule;
      reader.readMessage(value,proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.deserializeBinaryFromReader);
      msg.addSchedule(value);
      break;
    case 6:
      var value = /** @type {!proto.proto.ChargingScheduleUseCaseId} */ (reader.readEnum());
      msg.setUseCaseId(value);
      break;
    case 7:
      var value = new proto.proto.ScheduleIdStatus;
      reader.readMessage(value,proto.proto.ScheduleIdStatus.deserializeBinaryFromReader);
      msg.setScheduleIdStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargingScheduleActive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingScheduleActive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingScheduleActive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingScheduleActive.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScheduleIdDeprecated();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUseCaseIdDeprecated();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOfflineMode();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getScheduleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.serializeBinaryToWriter
    );
  }
  f = message.getUseCaseId();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getScheduleIdStatus();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.proto.ScheduleIdStatus.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.ChargingScheduleActive.ChargingScheduleActiveUseCaseId = {
  CHARGING_SCHEDULE_ACTIVE_USE_CASE_ID_UNKNOWN: 0
};

/**
 * @enum {number}
 */
proto.proto.ChargingScheduleActive.ChargingScheduleActiveOfflineMode = {
  CHARGING_SCHEDULE_ACTIVE_OFFLINE_MODE_UNKNOWN: 0
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule}
 */
proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule;
  return proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule}
 */
proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional int64 schedule_id_deprecated = 1;
 * @return {number}
 */
proto.proto.ChargingScheduleActive.prototype.getScheduleIdDeprecated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingScheduleActive} returns this
 */
proto.proto.ChargingScheduleActive.prototype.setScheduleIdDeprecated = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ChargingScheduleActiveUseCaseId use_case_id_deprecated = 2;
 * @return {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveUseCaseId}
 */
proto.proto.ChargingScheduleActive.prototype.getUseCaseIdDeprecated = function() {
  return /** @type {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveUseCaseId} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveUseCaseId} value
 * @return {!proto.proto.ChargingScheduleActive} returns this
 */
proto.proto.ChargingScheduleActive.prototype.setUseCaseIdDeprecated = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.proto.ChargingScheduleActive.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.proto.ChargingScheduleActive} returns this
*/
proto.proto.ChargingScheduleActive.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargingScheduleActive} returns this
 */
proto.proto.ChargingScheduleActive.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargingScheduleActive.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ChargingScheduleActiveOfflineMode offline_mode = 4;
 * @return {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveOfflineMode}
 */
proto.proto.ChargingScheduleActive.prototype.getOfflineMode = function() {
  return /** @type {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveOfflineMode} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveOfflineMode} value
 * @return {!proto.proto.ChargingScheduleActive} returns this
 */
proto.proto.ChargingScheduleActive.prototype.setOfflineMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated ChargingScheduleActiveSchedule schedule = 5;
 * @return {!Array<!proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule>}
 */
proto.proto.ChargingScheduleActive.prototype.getScheduleList = function() {
  return /** @type{!Array<!proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule, 5));
};


/**
 * @param {!Array<!proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule>} value
 * @return {!proto.proto.ChargingScheduleActive} returns this
*/
proto.proto.ChargingScheduleActive.prototype.setScheduleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule}
 */
proto.proto.ChargingScheduleActive.prototype.addSchedule = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.proto.ChargingScheduleActive.ChargingScheduleActiveSchedule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChargingScheduleActive} returns this
 */
proto.proto.ChargingScheduleActive.prototype.clearScheduleList = function() {
  return this.setScheduleList([]);
};


/**
 * optional ChargingScheduleUseCaseId use_case_id = 6;
 * @return {!proto.proto.ChargingScheduleUseCaseId}
 */
proto.proto.ChargingScheduleActive.prototype.getUseCaseId = function() {
  return /** @type {!proto.proto.ChargingScheduleUseCaseId} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.proto.ChargingScheduleUseCaseId} value
 * @return {!proto.proto.ChargingScheduleActive} returns this
 */
proto.proto.ChargingScheduleActive.prototype.setUseCaseId = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional ScheduleIdStatus schedule_id_status = 7;
 * @return {?proto.proto.ScheduleIdStatus}
 */
proto.proto.ChargingScheduleActive.prototype.getScheduleIdStatus = function() {
  return /** @type{?proto.proto.ScheduleIdStatus} */ (
    jspb.Message.getWrapperField(this, proto.proto.ScheduleIdStatus, 7));
};


/**
 * @param {?proto.proto.ScheduleIdStatus|undefined} value
 * @return {!proto.proto.ChargingScheduleActive} returns this
*/
proto.proto.ChargingScheduleActive.prototype.setScheduleIdStatus = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargingScheduleActive} returns this
 */
proto.proto.ChargingScheduleActive.prototype.clearScheduleIdStatus = function() {
  return this.setScheduleIdStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargingScheduleActive.prototype.hasScheduleIdStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ScheduleIdStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ScheduleIdStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ScheduleIdStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ScheduleIdStatus.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ScheduleIdStatus}
 */
proto.proto.ScheduleIdStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ScheduleIdStatus;
  return proto.proto.ScheduleIdStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ScheduleIdStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ScheduleIdStatus}
 */
proto.proto.ScheduleIdStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ScheduleIdStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ScheduleIdStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ScheduleIdStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ScheduleIdStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ParkEventPictureTransmissionStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ParkEventPictureTransmissionStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ParkEventPictureTransmissionStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ParkEventPictureTransmissionStatus.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ParkEventPictureTransmissionStatus}
 */
proto.proto.ParkEventPictureTransmissionStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ParkEventPictureTransmissionStatus;
  return proto.proto.ParkEventPictureTransmissionStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ParkEventPictureTransmissionStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ParkEventPictureTransmissionStatus}
 */
proto.proto.ParkEventPictureTransmissionStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ParkEventPictureTransmissionStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ParkEventPictureTransmissionStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ParkEventPictureTransmissionStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ParkEventPictureTransmissionStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.proto.AmgStageModeState = {
  AMG_STAGE_MODE_STATE_STAGING_NOT_ACTIVE: 0,
  AMG_STAGE_MODE_STATE_REVERTING_IN_PROGRESS: 1,
  AMG_STAGE_MODE_STATE_TRANSFORMING_FINISHED_TRANSFORMED_POS: 2,
  AMG_STAGE_MODE_STATE_TRANSFORMING_FINISHED_DEFAULT_POS: 3,
  AMG_STAGE_MODE_STATE_TRANSFORMATION_ABORTED: 4
};

/**
 * @enum {number}
 */
proto.proto.SocCalibrationRequest = {
  SOC_CALIBRATION_REQUEST_NO_REQUEST: 0,
  SOC_CALIBRATION_REQUEST_LOW_REQUEST: 1,
  SOC_CALIBRATION_REQUEST_HIGH_REQUEST: 2
};

/**
 * @enum {number}
 */
proto.proto.SohFavorableConditions = {
  SOH_FAVORABLE_CONDITIONS_NOT_FAVORABLE: 0,
  SOH_FAVORABLE_CONDITIONS_FAVOURABLE_LEVEL_1: 1,
  SOH_FAVORABLE_CONDITIONS_FAVOURABLE_LEVEL_2: 2
};

/**
 * @enum {number}
 */
proto.proto.ChargingStopErrorDetails = {
  CHARGING_STOP_ERROR_DETAILS_NO_INFO_OR_ERROR_MESSAGE: 0,
  CHARGING_STOP_ERROR_DETAILS_CHARGE_STOP_BUTTON_DEFECT: 1
};

/**
 * @enum {number}
 */
proto.proto.SohCalibrationState = {
  SOH_CALIBRATION_STATE_NOT_ACTIVE: 0,
  SOH_CALIBRATION_STATE_ACTIVE: 1,
  SOH_CALIBRATION_STATE_SUCCESSFUL: 2,
  SOH_CALIBRATION_STATE_BMS_UNDEFINED_ERROR: 3,
  SOH_CALIBRATION_STATE_BMS_TEMPERATURE_ERROR: 4,
  SOH_CALIBRATION_STATE_NO_CUSTOMER_PERMISSION_ERROR: 5,
  SOH_CALIBRATION_STATE_NOT_ENOUGH_TIME_UNTIL_DEPARTURE_ERROR: 6,
  SOH_CALIBRATION_STATE_USER_CANCELLED_ERROR: 7,
  SOH_CALIBRATION_STATE_CHARGING_PROCESS_CANCELLED_ERROR: 8,
  SOH_CALIBRATION_STATE_CHARGING_INFRASTRUCTURE_PROTOCOL_ERROR: 9,
  SOH_CALIBRATION_STATE_CHARGING_INFRASTRUCTURE_POWER_REDUCTION_ERROR: 10,
  SOH_CALIBRATION_STATE_UNDEFINED_ERROR: 11
};

/**
 * @enum {number}
 */
proto.proto.SohCalibrationRequired = {
  SOH_CALIBRATION_NOT_REQUIRED: 0,
  SOH_CALIBRATION_REQUIRED: 1
};

/**
 * @enum {number}
 */
proto.proto.SohCalibrationRequest = {
  SOH_CALIBRATION_REQUEST_NO_REQUEST: 0,
  SOH_CALIBRATION_REQUEST_LOW_REQUEST: 1,
  SOH_CALIBRATION_REQUEST_HIGH_REQUEST: 2
};

/**
 * @enum {number}
 */
proto.proto.TurnOffEnginePreWarning = {
  NO_MESSAGE_ACTIVE: 0,
  VEHICLE_READY_AUTOMATIC_SHUTDOWN_ON_LOCK: 1,
  VEHICLE_READY_AUTOMATIC_SHUTDOWN_ON_TIMEOUT: 2
};

/**
 * @enum {number}
 */
proto.proto.SohCalibrationNotifications = {
  SOH_CALIBRATION_NOTIFICATIONS_NO_SOH_CALIBRATION_NECESSARY: 0,
  SOH_CALIBRATION_NOTIFICATIONS_SEND_NOTIFICATION_LEVEL_1: 1,
  SOH_CALIBRATION_NOTIFICATIONS_SEND_NOTIFICATION_LEVEL_2: 2,
  SOH_CALIBRATION_NOTIFICATIONS_SEND_NOTIFICATION_LEVEL_3: 3,
  SOH_CALIBRATION_NOTIFICATIONS_SEND_NOTIFICATION_LEVEL_4: 4
};

/**
 * @enum {number}
 */
proto.proto.HvBatteryPrecondStatesDischarging = {
  DISCHARGING_INACTIVE: 0,
  DISCHARGING_HEATING_ACTIVE: 1,
  DISCHARGING_HEATING_SUCCESSFUL: 2,
  DISCHARGING_HEATING_NOT_SUFFICIENT: 3,
  DISCHARGING_HEATING_RECOMMENDATION: 4,
  DISCHARGING_COOLING_ACTIVE: 5,
  DISCHARGING_COOLING_SUCCESSFUL: 6,
  DISCHARGING_COOLING_NOT_SUFFICIENT: 7,
  DISCHARGING_COOLING_RECOMMENDATION: 8
};

/**
 * @enum {number}
 */
proto.proto.HvBatteryPrecondStatesCharging = {
  CHARGING_HEATING_INACTIVE: 0,
  CHARGING_HEATING_ACTIVE: 1,
  CHARGING_HEATING_SUCCESSFUL: 2,
  CHARGING_HEATING_NOT_SUFFICIENT: 3,
  CHARGING_HEATING_RECOMMENDATION: 4,
  CHARGING_COOLING_ACTIVE: 5,
  CHARGING_COOLING_SUCCESSFUL: 6,
  CHARGING_COOLING_NOT_SUFFICIENT: 7,
  CHARGING_COOLING_RECOMMENDATION: 8
};

/**
 * @enum {number}
 */
proto.proto.MainCategory = {
  MAIN_CATEGORY_SERVER: 0,
  MAIN_CATEGORY_HMI: 1,
  MAIN_CATEGORY_VEHICLE_SYSTEM: 2,
  MAIN_CATEGORY_DIAGNOSTICS: 3,
  MAIN_CATEGORY_REMOTE: 4,
  MAIN_CATEGORY_CONTAINER_APPLICATION: 5
};

/**
 * @enum {number}
 */
proto.proto.SubCategory = {
  SUB_CATEGORY_UNKNOWN: 0,
  SUB_CATEGORY_BATTERY_CONDITIONING: 1
};

/**
 * @enum {number}
 */
proto.proto.SpecificCategory = {
  SPECIFIC_CATEGORY_UNKNOWN: 0,
  SPECIFIC_CATEGORY_PRECONDITIONING_BUTTON: 1
};

/**
 * @enum {number}
 */
proto.proto.Method = {
  METHOD_COND_REQ_TO_REACH_TARGET_TEMP: 0,
  METHOD_COND_REQ_TO_REACH_TARGET_POWER: 1,
  METHOD_OMIT_CONDITIONING_REQUEST: 2,
  METHOD_SET_CONFIGURATION: 3
};

/**
 * @enum {number}
 */
proto.proto.Status = {
  STATE_OK: 0,
  STATE_UNSPECIFIED_ERROR: 1,
  STATE_CONDITIONING_NOT_NECESSARY: 2,
  STATE_TIME_NOT_SUFFICIENT: 3,
  STATE_BATTERY_LEVEL_LOW: 4
};

/**
 * @enum {number}
 */
proto.proto.HvBatteryPrecondAvailability = {
  HV_BATTERY_PRECOND_AVAILABILITY_NOT_AVAILABLE: 0,
  HV_BATTERY_PRECOND_AVAILABILITY_FULLY_AVAILABLE: 1,
  HV_BATTERY_PRECOND_AVAILABILITY_TEMPORARILY_NOT_AVAILABLE_LOW_SOC: 2,
  HV_BATTERY_PRECOND_AVAILABILITY_TEMPORARILY_NOT_AVAILABLE_MECHATRONICS: 3,
  HV_BATTERY_PRECOND_AVAILABILITY_TEMPORARILY_NOT_AVAILABLE_BATTERY_TEMPERATURE: 4,
  HV_BATTERY_PRECOND_AVAILABILITY_LIMITED_AVAILABLE_LOW_SOC: 5,
  HV_BATTERY_PRECOND_AVAILABILITY_LIMITED_AVAILABLE_MECHATRONICS: 6,
  HV_BATTERY_PRECOND_AVAILABILITY_LIMITED_AVAILABLE_BATTERY_TEMPERATURE: 7
};

/**
 * @enum {number}
 */
proto.proto.EvsePairingState = {
  EVSE_PAIRING_STATE_IDLE: 0,
  EVSE_PAIRING_STATE_FINISHED: 1,
  EVSE_PAIRING_STATE_FAILED_TLS_ERROR: 2,
  EVSE_PAIRING_STATE_FAILED_TIMEOUT: 3,
  EVSE_PAIRING_STATE_FAILED_NO_INDEX_AVAILABLE: 4,
  EVSE_PAIRING_STATE_PROCESS_ONGOING: 5,
  EVSE_PAIRING_STATE_PROCESS_STOPPED: 6,
  EVSE_PAIRING_STATE_CERTIFICATE_NOT_INSTALLED: 7,
  EVSE_PAIRING_STATE_PAIRING_SERVICE_NOT_OFFERED_BY_EVSE: 8,
  EVSE_PAIRING_STATE_BIDIRECTIONAL_POWER_TRANSFER_SERVICE_NOT_OFFERED_BY_EVSE: 9
};

/**
 * @enum {number}
 */
proto.proto.EmergencyPowerSupply = {
  EMERGENCY_POWER_SUPPLY_OFF: 0,
  EMERGENCY_POWER_SUPPLY_ON: 1
};

/**
 * @enum {number}
 */
proto.proto.ParkCollisionPictureTransferStatus = {
  PARK_COLLISION_PICTURE_TRANSFER_STATUS_DESELETED: 0,
  PARK_COLLISION_PICTURE_TRANSFER_STATUS_SELECTED: 1
};

/**
 * @enum {number}
 */
proto.proto.PictureRecordingStatus = {
  PICTURE_RECORDING_STATUS_NOT_ACTIVE: 0,
  PICTURE_RECORDING_STATUS_ACTIVE: 1
};

/**
 * @enum {number}
 */
proto.proto.ParkCollisionInactiveReason = {
  PARK_COLLISION_INACTIVE_REASON_DISABLED: 0,
  PARK_COLLISION_INACTIVE_REASON_WAIT_FOR_SYSTEM_ACTIVATION: 1,
  PARK_COLLISION_INACTIVE_REASON_SYSTEM_ACTIVE: 2,
  PARK_COLLISION_INACTIVE_REASON_TRUNK_OR_DOOR_OPEN: 3,
  PARK_COLLISION_INACTIVE_REASON_DESELECTED: 4,
  PARK_COLLISION_INACTIVE_REASON_COLLISION_LIMIT: 5,
  PARK_COLLISION_INACTIVE_REASON_MONITORING_TIME: 6,
  PARK_COLLISION_INACTIVE_REASON_CONVERTIBLE_TOP_OPEN: 7,
  PARK_COLLISION_INACTIVE_REASON_TEST1: 8,
  PARK_COLLISION_INACTIVE_REASON_TEST2: 9
};

/**
 * @enum {number}
 */
proto.proto.ParkCollisionSelectionStatus = {
  PARK_COLLISION_SELECTION_STATUS_DESELETED: 0,
  PARK_COLLISION_SELECTION_STATUS_SELECTED: 1
};

/**
 * @enum {number}
 */
proto.proto.VehicleTheftAlarmInactiveReason = {
  VEHICLE_THEFT_ALARM_INACTIVE_REASON_NO_ERROR: 0,
  VEHICLE_THEFT_ALARM_INACTIVE_REASON_SIREN_COM: 1,
  VEHICLE_THEFT_ALARM_INACTIVE_REASON_SIREN_BAT: 2,
  VEHICLE_THEFT_ALARM_INACTIVE_REASON_SENSOR: 3
};

/**
 * @enum {number}
 */
proto.proto.TowProtectionActivationStatus = {
  TOW_PROTECTION_ACTIVATION_STATUS_OFF: 0,
  TOW_PROTECTION_ACTIVATION_STATUS_ON: 1,
  TOW_PROTECTION_ACTIVATION_STATUS_INIT: 2
};

/**
 * @enum {number}
 */
proto.proto.TowProtectionSelectionStatus = {
  TOW_PROTECTION_SELECTION_STATUS_DESELETED: 0,
  TOW_PROTECTION_SELECTION_STATUS_SELECTED: 1
};

/**
 * @enum {number}
 */
proto.proto.InteriorProtectionActivationStatus = {
  INTERIOR_PROTECTION_ACTIVATION_STATUS_OFF: 0,
  INTERIOR_PROTECTION_ACTIVATION_STATUS_ON: 1,
  INTERIOR_PROTECTION_ACTIVATION_STATUS_INIT: 2
};

/**
 * @enum {number}
 */
proto.proto.InteriorProtectionSelectionStatus = {
  INTERIOR_PROTECTION_SELECTION_STATUS_DESELETED: 0,
  INTERIOR_PROTECTION_SELECTION_STATUS_SELECTED: 1
};

/**
 * @enum {number}
 */
proto.proto.PanicAlarmActive = {
  PANIC_ALARM_ACTIVE_CONFIRMED: 0,
  PANIC_ALARM_ACTIVE_NOT_YET_CONFIRMED: 1
};

/**
 * @enum {number}
 */
proto.proto.ParkEventPictureSelectionStatus = {
  PARK_EVENT_PICTURE_SELECTION_STATUS_NOT_SELECTED: 0,
  PARK_EVENT_PICTURE_SELECTION_STATUS_SELECTED: 1
};

/**
 * @enum {number}
 */
proto.proto.ParkCollisionActivationStatus = {
  PARK_COLLISION_ACTIVATION_STATUS_OFF: 0,
  PARK_COLLISION_ACTIVATION_STATUS_ON: 1,
  PARK_COLLISION_ACTIVATION_STATUS_INIT: 2
};

/**
 * @enum {number}
 */
proto.proto.ChargingCompatibilityError = {
  CHARGING_COMPATIBILITY_ERROR_DEFAULT: 0,
  CHARGING_COMPATIBILITY_ERROR_FULL_COMPATIBILITY: 1,
  CHARGING_COMPATIBILITY_ERROR_FULL_COMPATIBILITY_WITH_ADDITIONAL_HARDWARE: 2,
  CHARGING_COMPATIBILITY_PARTIAL_COMPATIBILITY: 3,
  CHARGING_COMPATIBILITY_PARTIAL_COMPATIBILITY_WITH_ADDITIONAL_DEVICE: 4,
  CHARGING_COMPATIBILITY_ERROR_NO_COMPATIBILITY: 5
};

/**
 * @enum {number}
 */
proto.proto.ChargingFlapErrorDetails = {
  CHARGING_FLAP_ERROR_DETAILS_NO_INFO_OR_ERROR_MESSAGE: 0,
  CHARGING_FLAP_ERROR_DETAILS_OPENING_DEFECT_SEARCH_WORKSHOP: 1,
  CHARGING_FLAP_ERROR_DETAILS_BLOCKED: 2,
  CHARGING_FLAP_ERROR_DETAILS_DRIVING_POSITION_NOT_PARKING: 3,
  CHARGING_FLAP_ERROR_DETAILS_STATE_UNKNOWN: 4,
  CHARGING_FLAP_ERROR_DETAILS_PRESSED_DETECTION_DEFECT: 5,
  CHARGING_FLAP_ERROR_DETAILS_CLOSING_OF_AUTOMATED_FLAP_DEFECT: 6
};

/**
 * @enum {number}
 */
proto.proto.ChargeFlapsPositionState = {
  CHARGE_FLAPS_POSITION_STATE_DEFAULT: 0,
  CHARGE_FLAPS_POSITION_STATE_OPEN: 1,
  CHARGE_FLAPS_POSITION_STATE_CLOSED: 2,
  CHARGE_FLAPS_POSITION_STATE_FLAP_PRESSED: 3,
  CHARGE_FLAPS_POSITION_STATE_UNKNOWN: 4
};

/**
 * @enum {number}
 */
proto.proto.ChargingPowerRestriction = {
  CHARGING_POWER_RESTRICTION_NO_RESTRICTION: 0,
  CHARGING_POWER_RESTRICTION_ECO_CHARGING_ACTIVE: 1,
  CHARGING_POWER_RESTRICTION_REDUCED_DUE_TO_CUSTOMER_SETTING: 2,
  CHARGING_POWER_RESTRICTION_REDUCED_DUE_TO_VEHICLE_CHARGING_SYSTEM: 3,
  CHARGING_POWER_RESTRICTION_REDUCED_DUE_TO_REMOTE_CONTROL: 4,
  CHARGING_POWER_RESTRICTION_REDUCED_DUE_TO_CHARGING_INFRASTRUCTURE: 5,
  CHARGING_POWER_RESTRICTION_REDUCED_DUE_TO_CHARGING_STRATEGY: 6,
  CHARGING_POWER_RESTRICTION_STATE_OF_CHARGE_TOO_LOW: 7,
  CHARGING_POWER_RESTRICTION_STATE_OF_CHARGE_TOO_HIGH: 8,
  CHARGING_POWER_RESTRICTION_BATTERY_TEMPERATURE_TOO_LOW: 9,
  CHARGING_POWER_RESTRICTION_BATTERY_TEMPERATURE_TOO_HIGH: 10
};

/**
 * @enum {number}
 */
proto.proto.BatteryHealth = {
  BATTERY_GREEN_STATE: 0,
  BATTERY_YELLOW_STATE: 1,
  BATTERY_RED_STATE: 2,
  ISSUE_WITH_DATA_EVALUATION: 3,
  NO_EVALUATION_POSSIBLE: 4,
  BATTERY_CHANGED: 5,
  BATTERY_HEALTH_CANNOT_BE_CALCULATED: 6,
  NO_MB_ORIGINAL_BATTERY: 7,
  TECHNICAL_LIMITATION_FROM_VEHICLE: 8,
  GENERAL_TECHNICAL_ERROR: 9,
  GENERAL_PROCESS_ERROR: 10
};

/**
 * @enum {number}
 */
proto.proto.PrecondStateType = {
  PRECOND_STATE_TYPE_ON_UNLOCK: 0,
  PRECOND_STATE_TYPE_AT_DEPARTURE_TIME: 1,
  PRECOND_STATE_TYPE_IMMEDIATE: 2,
  PRECOND_STATE_TYPE_CHILD_PRESENCE_DETECTION: 3
};

/**
 * @enum {number}
 */
proto.proto.ChargingBreakClockTimerActivationState = {
  CHARGING_BREAK_CLOCK_TIMER_ACTIVATION_STATE_UNKNOWN: 0,
  CHARGING_BREAK_CLOCK_TIMER_ACTIVATION_STATE_INACTIVE: 1,
  CHARGING_BREAK_CLOCK_TIMER_ACTIVATION_STATE_ACTIVE: 2
};

/**
 * @enum {number}
 */
proto.proto.ChargeProgram = {
  DEFAULT_CHARGE_PROGRAM: 0,
  INSTANT_CHARGE_PROGRAM: 1,
  HOME_CHARGE_PROGRAM: 2,
  WORK_CHARGE_PROGRAM: 3
};

/**
 * @enum {number}
 */
proto.proto.AttributeStatus = {
  VALUE_VALID: 0,
  VALUE_NOT_RECEIVED: 1,
  VALUE_INVALID: 3,
  VALUE_NOT_AVAILABLE: 4
};

/**
 * @enum {number}
 */
proto.proto.WeeklyProfileScheduleType = {
  WEEKLY_PROFILE_SCHEDULE_TYPE_NON_RECURRING: 0,
  WEEKLY_PROFILE_SCHEDULE_TYPE_RECURRING: 1,
  WEEKLY_PROFILE_SCHEDULE_TYPE_NON_RECURRING_AUTO_DELETE: 2
};

/**
 * @enum {number}
 */
proto.proto.Scope = {
  USER: 0,
  ONBOARD_FENCES: 1,
  USER_PIN: 3,
  SERVICE_PREREQUISITE: 4,
  USER_PROFILE_PICTURE: 5
};

/**
 * @enum {number}
 */
proto.proto.DcChargingProfile = {
  DC_CHARGING_PROFILE_UNKNOWN: 0,
  DC_CHARGING_PROFILE_STANDARD: 1,
  DC_CHARGING_PROFILE_SILENT_OR_ECO: 2,
  DC_CHARGING_PROFILE_ULTRAFAST: 3,
  DC_CHARGING_PROFILE_PITSTOP: 4,
  DC_CHARGING_PROFILE_FAST_ECO_1: 5,
  DC_CHARGING_PROFILE_FAST_ECO_2: 6
};

/**
 * @enum {number}
 */
proto.proto.ChargingScheduleUseCaseId = {
  CHARGING_SCHEDULE_USE_CASE_ID_UNKNOWN: 0
};

goog.object.extend(exports, proto.proto);

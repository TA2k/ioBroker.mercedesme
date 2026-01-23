// source: vehicle-commands.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var gogo_pb = require('./gogo_pb.js');
goog.object.extend(proto, gogo_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.proto.AcknowledgeCommandRequest', null, global);
goog.exportSymbol('proto.proto.ActivateVehicleKeys', null, global);
goog.exportSymbol('proto.proto.AutomaticValetParkingActivate', null, global);
goog.exportSymbol('proto.proto.AuxheatConfigure', null, global);
goog.exportSymbol('proto.proto.AuxheatConfigure.Selection', null, global);
goog.exportSymbol('proto.proto.AuxheatStart', null, global);
goog.exportSymbol('proto.proto.AuxheatStop', null, global);
goog.exportSymbol('proto.proto.BatteryChargeProgramConfigure', null, global);
goog.exportSymbol('proto.proto.BatteryChargeProgramConfigure.ChargeProgram', null, global);
goog.exportSymbol('proto.proto.BatteryMaxSocConfigure', null, global);
goog.exportSymbol('proto.proto.ChargeControlConfigure', null, global);
goog.exportSymbol('proto.proto.ChargeCouplerUnlock', null, global);
goog.exportSymbol('proto.proto.ChargeOptConfigure', null, global);
goog.exportSymbol('proto.proto.ChargeOptConfigure.Tariff', null, global);
goog.exportSymbol('proto.proto.ChargeOptConfigure.Tariff.Rate', null, global);
goog.exportSymbol('proto.proto.ChargeOptStart', null, global);
goog.exportSymbol('proto.proto.ChargeOptStop', null, global);
goog.exportSymbol('proto.proto.ChargeProgramConfigure', null, global);
goog.exportSymbol('proto.proto.ChargeProgramConfigure.ChargeProgram', null, global);
goog.exportSymbol('proto.proto.ChargingBreakClockTimerConfigureEntry', null, global);
goog.exportSymbol('proto.proto.ChargingBreakClockTimerEntryStatus', null, global);
goog.exportSymbol('proto.proto.ChargingBreakClocktimerConfigure', null, global);
goog.exportSymbol('proto.proto.CommandRequest', null, global);
goog.exportSymbol('proto.proto.CommandRequest.Backend', null, global);
goog.exportSymbol('proto.proto.CommandRequest.CommandCase', null, global);
goog.exportSymbol('proto.proto.DeactivateVehicleKeys', null, global);
goog.exportSymbol('proto.proto.Door', null, global);
goog.exportSymbol('proto.proto.DoorsLock', null, global);
goog.exportSymbol('proto.proto.DoorsUnlock', null, global);
goog.exportSymbol('proto.proto.DriveType', null, global);
goog.exportSymbol('proto.proto.EngineStart', null, global);
goog.exportSymbol('proto.proto.EngineStop', null, global);
goog.exportSymbol('proto.proto.HvBatteryStartConditioning', null, global);
goog.exportSymbol('proto.proto.HvBatteryStopConditioning', null, global);
goog.exportSymbol('proto.proto.SigPosStart', null, global);
goog.exportSymbol('proto.proto.SigPosStart.HornType', null, global);
goog.exportSymbol('proto.proto.SigPosStart.LightType', null, global);
goog.exportSymbol('proto.proto.SigPosStart.SigposType', null, global);
goog.exportSymbol('proto.proto.SpeedalertStart', null, global);
goog.exportSymbol('proto.proto.SpeedalertStop', null, global);
goog.exportSymbol('proto.proto.SunroofClose', null, global);
goog.exportSymbol('proto.proto.SunroofLift', null, global);
goog.exportSymbol('proto.proto.SunroofMove', null, global);
goog.exportSymbol('proto.proto.SunroofOpen', null, global);
goog.exportSymbol('proto.proto.TemperatureConfigure', null, global);
goog.exportSymbol('proto.proto.TemperatureConfigure.TemperaturePoint', null, global);
goog.exportSymbol('proto.proto.TemperatureConfigure.TemperaturePoint.Zone', null, global);
goog.exportSymbol('proto.proto.TheftalarmConfirmDamagedetection', null, global);
goog.exportSymbol('proto.proto.TheftalarmDeselectDamagedetection', null, global);
goog.exportSymbol('proto.proto.TheftalarmDeselectInterior', null, global);
goog.exportSymbol('proto.proto.TheftalarmDeselectTow', null, global);
goog.exportSymbol('proto.proto.TheftalarmSelectDamagedetection', null, global);
goog.exportSymbol('proto.proto.TheftalarmSelectInterior', null, global);
goog.exportSymbol('proto.proto.TheftalarmSelectTow', null, global);
goog.exportSymbol('proto.proto.TheftalarmStart', null, global);
goog.exportSymbol('proto.proto.TheftalarmStop', null, global);
goog.exportSymbol('proto.proto.TimeProfile', null, global);
goog.exportSymbol('proto.proto.TimeProfileDay', null, global);
goog.exportSymbol('proto.proto.WeekProfileConfigure', null, global);
goog.exportSymbol('proto.proto.WeekProfileConfigure.WeeklySetHU', null, global);
goog.exportSymbol('proto.proto.WeekProfileConfigure.WeeklySetHU.Day', null, global);
goog.exportSymbol('proto.proto.WeekProfileConfigureV2', null, global);
goog.exportSymbol('proto.proto.WindowsClose', null, global);
goog.exportSymbol('proto.proto.WindowsMove', null, global);
goog.exportSymbol('proto.proto.WindowsOpen', null, global);
goog.exportSymbol('proto.proto.WindowsVentilate', null, global);
goog.exportSymbol('proto.proto.WiperHealthReset', null, global);
goog.exportSymbol('proto.proto.ZEVPreconditioningConfigure', null, global);
goog.exportSymbol('proto.proto.ZEVPreconditioningConfigure.DepartureTimeMode', null, global);
goog.exportSymbol('proto.proto.ZEVPreconditioningConfigureSeats', null, global);
goog.exportSymbol('proto.proto.ZEVPreconditioningStart', null, global);
goog.exportSymbol('proto.proto.ZEVPreconditioningStop', null, global);
goog.exportSymbol('proto.proto.ZEVPreconditioningType', null, global);
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
proto.proto.AcknowledgeCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AcknowledgeCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AcknowledgeCommandRequest.displayName = 'proto.proto.AcknowledgeCommandRequest';
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
proto.proto.CommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.CommandRequest.oneofGroups_);
};
goog.inherits(proto.proto.CommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.CommandRequest.displayName = 'proto.proto.CommandRequest';
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
proto.proto.HvBatteryStartConditioning = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HvBatteryStartConditioning, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HvBatteryStartConditioning.displayName = 'proto.proto.HvBatteryStartConditioning';
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
proto.proto.HvBatteryStopConditioning = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HvBatteryStopConditioning, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.HvBatteryStopConditioning.displayName = 'proto.proto.HvBatteryStopConditioning';
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
proto.proto.DeactivateVehicleKeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.DeactivateVehicleKeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DeactivateVehicleKeys.displayName = 'proto.proto.DeactivateVehicleKeys';
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
proto.proto.ActivateVehicleKeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ActivateVehicleKeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ActivateVehicleKeys.displayName = 'proto.proto.ActivateVehicleKeys';
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
proto.proto.AuxheatStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AuxheatStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AuxheatStart.displayName = 'proto.proto.AuxheatStart';
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
proto.proto.AuxheatStop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AuxheatStop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AuxheatStop.displayName = 'proto.proto.AuxheatStop';
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
proto.proto.AuxheatConfigure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AuxheatConfigure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AuxheatConfigure.displayName = 'proto.proto.AuxheatConfigure';
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
proto.proto.DoorsLock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.DoorsLock.repeatedFields_, null);
};
goog.inherits(proto.proto.DoorsLock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DoorsLock.displayName = 'proto.proto.DoorsLock';
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
proto.proto.DoorsUnlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.DoorsUnlock.repeatedFields_, null);
};
goog.inherits(proto.proto.DoorsUnlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.DoorsUnlock.displayName = 'proto.proto.DoorsUnlock';
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
proto.proto.EngineStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.EngineStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.EngineStart.displayName = 'proto.proto.EngineStart';
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
proto.proto.EngineStop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.EngineStop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.EngineStop.displayName = 'proto.proto.EngineStop';
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
proto.proto.SunroofOpen = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SunroofOpen, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SunroofOpen.displayName = 'proto.proto.SunroofOpen';
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
proto.proto.SunroofClose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SunroofClose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SunroofClose.displayName = 'proto.proto.SunroofClose';
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
proto.proto.SunroofLift = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SunroofLift, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SunroofLift.displayName = 'proto.proto.SunroofLift';
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
proto.proto.SunroofMove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SunroofMove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SunroofMove.displayName = 'proto.proto.SunroofMove';
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
proto.proto.WindowsOpen = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.WindowsOpen, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WindowsOpen.displayName = 'proto.proto.WindowsOpen';
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
proto.proto.WindowsClose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.WindowsClose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WindowsClose.displayName = 'proto.proto.WindowsClose';
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
proto.proto.WindowsVentilate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.WindowsVentilate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WindowsVentilate.displayName = 'proto.proto.WindowsVentilate';
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
proto.proto.WindowsMove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.WindowsMove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WindowsMove.displayName = 'proto.proto.WindowsMove';
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
proto.proto.SpeedalertStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SpeedalertStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpeedalertStart.displayName = 'proto.proto.SpeedalertStart';
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
proto.proto.SpeedalertStop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SpeedalertStop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SpeedalertStop.displayName = 'proto.proto.SpeedalertStop';
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
proto.proto.ZEVPreconditioningStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ZEVPreconditioningStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ZEVPreconditioningStart.displayName = 'proto.proto.ZEVPreconditioningStart';
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
proto.proto.ZEVPreconditioningStop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ZEVPreconditioningStop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ZEVPreconditioningStop.displayName = 'proto.proto.ZEVPreconditioningStop';
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
proto.proto.ZEVPreconditioningConfigure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ZEVPreconditioningConfigure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ZEVPreconditioningConfigure.displayName = 'proto.proto.ZEVPreconditioningConfigure';
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
proto.proto.ZEVPreconditioningConfigureSeats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ZEVPreconditioningConfigureSeats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ZEVPreconditioningConfigureSeats.displayName = 'proto.proto.ZEVPreconditioningConfigureSeats';
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
proto.proto.BatteryChargeProgramConfigure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.BatteryChargeProgramConfigure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.BatteryChargeProgramConfigure.displayName = 'proto.proto.BatteryChargeProgramConfigure';
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
proto.proto.BatteryMaxSocConfigure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.BatteryMaxSocConfigure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.BatteryMaxSocConfigure.displayName = 'proto.proto.BatteryMaxSocConfigure';
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
proto.proto.ChargeProgramConfigure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargeProgramConfigure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeProgramConfigure.displayName = 'proto.proto.ChargeProgramConfigure';
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
proto.proto.ChargeControlConfigure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargeControlConfigure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeControlConfigure.displayName = 'proto.proto.ChargeControlConfigure';
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
proto.proto.ChargeOptConfigure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChargeOptConfigure.repeatedFields_, null);
};
goog.inherits(proto.proto.ChargeOptConfigure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeOptConfigure.displayName = 'proto.proto.ChargeOptConfigure';
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
proto.proto.ChargeOptConfigure.Tariff = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargeOptConfigure.Tariff, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeOptConfigure.Tariff.displayName = 'proto.proto.ChargeOptConfigure.Tariff';
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
proto.proto.ChargeOptStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargeOptStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeOptStart.displayName = 'proto.proto.ChargeOptStart';
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
proto.proto.ChargeOptStop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargeOptStop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeOptStop.displayName = 'proto.proto.ChargeOptStop';
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
proto.proto.TemperatureConfigure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.TemperatureConfigure.repeatedFields_, null);
};
goog.inherits(proto.proto.TemperatureConfigure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TemperatureConfigure.displayName = 'proto.proto.TemperatureConfigure';
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
proto.proto.TemperatureConfigure.TemperaturePoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TemperatureConfigure.TemperaturePoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TemperatureConfigure.TemperaturePoint.displayName = 'proto.proto.TemperatureConfigure.TemperaturePoint';
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
proto.proto.WeekProfileConfigure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.WeekProfileConfigure.repeatedFields_, null);
};
goog.inherits(proto.proto.WeekProfileConfigure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WeekProfileConfigure.displayName = 'proto.proto.WeekProfileConfigure';
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
proto.proto.WeekProfileConfigure.WeeklySetHU = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.WeekProfileConfigure.WeeklySetHU, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WeekProfileConfigure.WeeklySetHU.displayName = 'proto.proto.WeekProfileConfigure.WeeklySetHU';
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
proto.proto.WeekProfileConfigureV2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.WeekProfileConfigureV2.repeatedFields_, null);
};
goog.inherits(proto.proto.WeekProfileConfigureV2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WeekProfileConfigureV2.displayName = 'proto.proto.WeekProfileConfigureV2';
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
proto.proto.TimeProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.TimeProfile.repeatedFields_, null);
};
goog.inherits(proto.proto.TimeProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TimeProfile.displayName = 'proto.proto.TimeProfile';
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
proto.proto.SigPosStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.SigPosStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.SigPosStart.displayName = 'proto.proto.SigPosStart';
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
proto.proto.TheftalarmConfirmDamagedetection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TheftalarmConfirmDamagedetection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TheftalarmConfirmDamagedetection.displayName = 'proto.proto.TheftalarmConfirmDamagedetection';
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
proto.proto.TheftalarmDeselectDamagedetection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TheftalarmDeselectDamagedetection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TheftalarmDeselectDamagedetection.displayName = 'proto.proto.TheftalarmDeselectDamagedetection';
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
proto.proto.TheftalarmDeselectInterior = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TheftalarmDeselectInterior, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TheftalarmDeselectInterior.displayName = 'proto.proto.TheftalarmDeselectInterior';
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
proto.proto.TheftalarmDeselectTow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TheftalarmDeselectTow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TheftalarmDeselectTow.displayName = 'proto.proto.TheftalarmDeselectTow';
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
proto.proto.TheftalarmSelectDamagedetection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TheftalarmSelectDamagedetection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TheftalarmSelectDamagedetection.displayName = 'proto.proto.TheftalarmSelectDamagedetection';
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
proto.proto.TheftalarmSelectInterior = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TheftalarmSelectInterior, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TheftalarmSelectInterior.displayName = 'proto.proto.TheftalarmSelectInterior';
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
proto.proto.TheftalarmSelectTow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TheftalarmSelectTow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TheftalarmSelectTow.displayName = 'proto.proto.TheftalarmSelectTow';
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
proto.proto.TheftalarmStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TheftalarmStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TheftalarmStart.displayName = 'proto.proto.TheftalarmStart';
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
proto.proto.TheftalarmStop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TheftalarmStop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.TheftalarmStop.displayName = 'proto.proto.TheftalarmStop';
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
proto.proto.AutomaticValetParkingActivate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.AutomaticValetParkingActivate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.AutomaticValetParkingActivate.displayName = 'proto.proto.AutomaticValetParkingActivate';
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
proto.proto.ChargeCouplerUnlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargeCouplerUnlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargeCouplerUnlock.displayName = 'proto.proto.ChargeCouplerUnlock';
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
proto.proto.ChargingBreakClocktimerConfigure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.ChargingBreakClocktimerConfigure.repeatedFields_, null);
};
goog.inherits(proto.proto.ChargingBreakClocktimerConfigure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingBreakClocktimerConfigure.displayName = 'proto.proto.ChargingBreakClocktimerConfigure';
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
proto.proto.ChargingBreakClockTimerConfigureEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChargingBreakClockTimerConfigureEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.ChargingBreakClockTimerConfigureEntry.displayName = 'proto.proto.ChargingBreakClockTimerConfigureEntry';
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
proto.proto.WiperHealthReset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.WiperHealthReset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.WiperHealthReset.displayName = 'proto.proto.WiperHealthReset';
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
proto.proto.AcknowledgeCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AcknowledgeCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AcknowledgeCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgeCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.proto.AcknowledgeCommandRequest}
 */
proto.proto.AcknowledgeCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AcknowledgeCommandRequest;
  return proto.proto.AcknowledgeCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AcknowledgeCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AcknowledgeCommandRequest}
 */
proto.proto.AcknowledgeCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
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
proto.proto.AcknowledgeCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AcknowledgeCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AcknowledgeCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AcknowledgeCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string request_id = 1;
 * @return {string}
 */
proto.proto.AcknowledgeCommandRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.AcknowledgeCommandRequest} returns this
 */
proto.proto.AcknowledgeCommandRequest.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.CommandRequest.oneofGroups_ = [[2,3,4,5,6,9,10,11,47,12,13,43,44,19,20,21,22,25,26,23,24,27,28,34,40,29,30,31,32,33,41,35,14,15,16,17,18,37,38,39,42,46,48,49,50,76,77]];

/**
 * @enum {number}
 */
proto.proto.CommandRequest.CommandCase = {
  COMMAND_NOT_SET: 0,
  AUXHEAT_START: 2,
  AUXHEAT_STOP: 3,
  AUXHEAT_CONFIGURE: 4,
  DOORS_LOCK: 5,
  DOORS_UNLOCK: 6,
  SUNROOF_OPEN: 9,
  SUNROOF_CLOSE: 10,
  SUNROOF_LIFT: 11,
  SUNROOF_MOVE: 47,
  WINDOWS_OPEN: 12,
  WINDOWS_CLOSE: 13,
  WINDOWS_VENTILATE: 43,
  WINDOWS_MOVE: 44,
  ENGINE_START: 19,
  ENGINE_STOP: 20,
  ZEV_PRECONDITIONING_START: 21,
  ZEV_PRECONDITIONING_STOP: 22,
  ZEV_PRECONDITION_CONFIGURE: 25,
  ZEV_PRECONDITION_CONFIGURE_SEATS: 26,
  SPEEDALERT_START: 23,
  SPEEDALERT_STOP: 24,
  BATTERY_CHARGE_PROGRAM: 27,
  BATTERY_MAX_SOC: 28,
  CHARGE_PROGRAM_CONFIGURE: 34,
  CHARGE_CONTROL_CONFIGURE: 40,
  CHARGE_OPT_CONFIGURE: 29,
  CHARGE_OPT_START: 30,
  CHARGE_OPT_STOP: 31,
  TEMPERATURE_CONFIGURE: 32,
  WEEK_PROFILE_CONFIGURE: 33,
  WEEK_PROFILE_CONFIGURE_V2: 41,
  SIGPOS_START: 35,
  THEFTALARM_DESELECT_DAMAGEDETECTION: 14,
  THEFTALARM_DESELECT_INTERIOR: 15,
  THEFTALARM_DESELECT_TOW: 16,
  THEFTALARM_SELECT_DAMAGEDETECTION: 17,
  THEFTALARM_SELECT_INTERIOR: 18,
  THEFTALARM_SELECT_TOW: 37,
  THEFTALARM_START: 38,
  THEFTALARM_STOP: 39,
  AUTOMATIC_VALET_PARKING_ACTIVATE: 42,
  CHARGE_COUPLER_UNLOCK: 46,
  DEACTIVATE_VEHICLE_KEYS: 48,
  ACTIVATE_VEHICLE_KEYS: 49,
  CHARGINGBREAK_CLOCKTIMER_CONFIGURE: 50,
  HV_BATTERY_START_CONDITIONING: 76,
  HV_BATTERY_STOP_CONDITIONING: 77
};

/**
 * @return {proto.proto.CommandRequest.CommandCase}
 */
proto.proto.CommandRequest.prototype.getCommandCase = function() {
  return /** @type {proto.proto.CommandRequest.CommandCase} */(jspb.Message.computeOneofCase(this, proto.proto.CommandRequest.oneofGroups_[0]));
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
proto.proto.CommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.CommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.CommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    vin: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    backend: jspb.Message.getFieldWithDefault(msg, 36, 0),
    auxheatStart: (f = msg.getAuxheatStart()) && proto.proto.AuxheatStart.toObject(includeInstance, f),
    auxheatStop: (f = msg.getAuxheatStop()) && proto.proto.AuxheatStop.toObject(includeInstance, f),
    auxheatConfigure: (f = msg.getAuxheatConfigure()) && proto.proto.AuxheatConfigure.toObject(includeInstance, f),
    doorsLock: (f = msg.getDoorsLock()) && proto.proto.DoorsLock.toObject(includeInstance, f),
    doorsUnlock: (f = msg.getDoorsUnlock()) && proto.proto.DoorsUnlock.toObject(includeInstance, f),
    sunroofOpen: (f = msg.getSunroofOpen()) && proto.proto.SunroofOpen.toObject(includeInstance, f),
    sunroofClose: (f = msg.getSunroofClose()) && proto.proto.SunroofClose.toObject(includeInstance, f),
    sunroofLift: (f = msg.getSunroofLift()) && proto.proto.SunroofLift.toObject(includeInstance, f),
    sunroofMove: (f = msg.getSunroofMove()) && proto.proto.SunroofMove.toObject(includeInstance, f),
    windowsOpen: (f = msg.getWindowsOpen()) && proto.proto.WindowsOpen.toObject(includeInstance, f),
    windowsClose: (f = msg.getWindowsClose()) && proto.proto.WindowsClose.toObject(includeInstance, f),
    windowsVentilate: (f = msg.getWindowsVentilate()) && proto.proto.WindowsVentilate.toObject(includeInstance, f),
    windowsMove: (f = msg.getWindowsMove()) && proto.proto.WindowsMove.toObject(includeInstance, f),
    engineStart: (f = msg.getEngineStart()) && proto.proto.EngineStart.toObject(includeInstance, f),
    engineStop: (f = msg.getEngineStop()) && proto.proto.EngineStop.toObject(includeInstance, f),
    zevPreconditioningStart: (f = msg.getZevPreconditioningStart()) && proto.proto.ZEVPreconditioningStart.toObject(includeInstance, f),
    zevPreconditioningStop: (f = msg.getZevPreconditioningStop()) && proto.proto.ZEVPreconditioningStop.toObject(includeInstance, f),
    zevPreconditionConfigure: (f = msg.getZevPreconditionConfigure()) && proto.proto.ZEVPreconditioningConfigure.toObject(includeInstance, f),
    zevPreconditionConfigureSeats: (f = msg.getZevPreconditionConfigureSeats()) && proto.proto.ZEVPreconditioningConfigureSeats.toObject(includeInstance, f),
    speedalertStart: (f = msg.getSpeedalertStart()) && proto.proto.SpeedalertStart.toObject(includeInstance, f),
    speedalertStop: (f = msg.getSpeedalertStop()) && proto.proto.SpeedalertStop.toObject(includeInstance, f),
    batteryChargeProgram: (f = msg.getBatteryChargeProgram()) && proto.proto.BatteryChargeProgramConfigure.toObject(includeInstance, f),
    batteryMaxSoc: (f = msg.getBatteryMaxSoc()) && proto.proto.BatteryMaxSocConfigure.toObject(includeInstance, f),
    chargeProgramConfigure: (f = msg.getChargeProgramConfigure()) && proto.proto.ChargeProgramConfigure.toObject(includeInstance, f),
    chargeControlConfigure: (f = msg.getChargeControlConfigure()) && proto.proto.ChargeControlConfigure.toObject(includeInstance, f),
    chargeOptConfigure: (f = msg.getChargeOptConfigure()) && proto.proto.ChargeOptConfigure.toObject(includeInstance, f),
    chargeOptStart: (f = msg.getChargeOptStart()) && proto.proto.ChargeOptStart.toObject(includeInstance, f),
    chargeOptStop: (f = msg.getChargeOptStop()) && proto.proto.ChargeOptStop.toObject(includeInstance, f),
    temperatureConfigure: (f = msg.getTemperatureConfigure()) && proto.proto.TemperatureConfigure.toObject(includeInstance, f),
    weekProfileConfigure: (f = msg.getWeekProfileConfigure()) && proto.proto.WeekProfileConfigure.toObject(includeInstance, f),
    weekProfileConfigureV2: (f = msg.getWeekProfileConfigureV2()) && proto.proto.WeekProfileConfigureV2.toObject(includeInstance, f),
    sigposStart: (f = msg.getSigposStart()) && proto.proto.SigPosStart.toObject(includeInstance, f),
    theftalarmDeselectDamagedetection: (f = msg.getTheftalarmDeselectDamagedetection()) && proto.proto.TheftalarmDeselectDamagedetection.toObject(includeInstance, f),
    theftalarmDeselectInterior: (f = msg.getTheftalarmDeselectInterior()) && proto.proto.TheftalarmDeselectInterior.toObject(includeInstance, f),
    theftalarmDeselectTow: (f = msg.getTheftalarmDeselectTow()) && proto.proto.TheftalarmDeselectTow.toObject(includeInstance, f),
    theftalarmSelectDamagedetection: (f = msg.getTheftalarmSelectDamagedetection()) && proto.proto.TheftalarmSelectDamagedetection.toObject(includeInstance, f),
    theftalarmSelectInterior: (f = msg.getTheftalarmSelectInterior()) && proto.proto.TheftalarmSelectInterior.toObject(includeInstance, f),
    theftalarmSelectTow: (f = msg.getTheftalarmSelectTow()) && proto.proto.TheftalarmSelectTow.toObject(includeInstance, f),
    theftalarmStart: (f = msg.getTheftalarmStart()) && proto.proto.TheftalarmStart.toObject(includeInstance, f),
    theftalarmStop: (f = msg.getTheftalarmStop()) && proto.proto.TheftalarmStop.toObject(includeInstance, f),
    automaticValetParkingActivate: (f = msg.getAutomaticValetParkingActivate()) && proto.proto.AutomaticValetParkingActivate.toObject(includeInstance, f),
    chargeCouplerUnlock: (f = msg.getChargeCouplerUnlock()) && proto.proto.ChargeCouplerUnlock.toObject(includeInstance, f),
    deactivateVehicleKeys: (f = msg.getDeactivateVehicleKeys()) && proto.proto.DeactivateVehicleKeys.toObject(includeInstance, f),
    activateVehicleKeys: (f = msg.getActivateVehicleKeys()) && proto.proto.ActivateVehicleKeys.toObject(includeInstance, f),
    chargingbreakClocktimerConfigure: (f = msg.getChargingbreakClocktimerConfigure()) && proto.proto.ChargingBreakClocktimerConfigure.toObject(includeInstance, f),
    hvBatteryStartConditioning: (f = msg.getHvBatteryStartConditioning()) && proto.proto.HvBatteryStartConditioning.toObject(includeInstance, f),
    hvBatteryStopConditioning: (f = msg.getHvBatteryStopConditioning()) && proto.proto.HvBatteryStopConditioning.toObject(includeInstance, f)
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
 * @return {!proto.proto.CommandRequest}
 */
proto.proto.CommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.CommandRequest;
  return proto.proto.CommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.CommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.CommandRequest}
 */
proto.proto.CommandRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 36:
      var value = /** @type {!proto.proto.CommandRequest.Backend} */ (reader.readEnum());
      msg.setBackend(value);
      break;
    case 2:
      var value = new proto.proto.AuxheatStart;
      reader.readMessage(value,proto.proto.AuxheatStart.deserializeBinaryFromReader);
      msg.setAuxheatStart(value);
      break;
    case 3:
      var value = new proto.proto.AuxheatStop;
      reader.readMessage(value,proto.proto.AuxheatStop.deserializeBinaryFromReader);
      msg.setAuxheatStop(value);
      break;
    case 4:
      var value = new proto.proto.AuxheatConfigure;
      reader.readMessage(value,proto.proto.AuxheatConfigure.deserializeBinaryFromReader);
      msg.setAuxheatConfigure(value);
      break;
    case 5:
      var value = new proto.proto.DoorsLock;
      reader.readMessage(value,proto.proto.DoorsLock.deserializeBinaryFromReader);
      msg.setDoorsLock(value);
      break;
    case 6:
      var value = new proto.proto.DoorsUnlock;
      reader.readMessage(value,proto.proto.DoorsUnlock.deserializeBinaryFromReader);
      msg.setDoorsUnlock(value);
      break;
    case 9:
      var value = new proto.proto.SunroofOpen;
      reader.readMessage(value,proto.proto.SunroofOpen.deserializeBinaryFromReader);
      msg.setSunroofOpen(value);
      break;
    case 10:
      var value = new proto.proto.SunroofClose;
      reader.readMessage(value,proto.proto.SunroofClose.deserializeBinaryFromReader);
      msg.setSunroofClose(value);
      break;
    case 11:
      var value = new proto.proto.SunroofLift;
      reader.readMessage(value,proto.proto.SunroofLift.deserializeBinaryFromReader);
      msg.setSunroofLift(value);
      break;
    case 47:
      var value = new proto.proto.SunroofMove;
      reader.readMessage(value,proto.proto.SunroofMove.deserializeBinaryFromReader);
      msg.setSunroofMove(value);
      break;
    case 12:
      var value = new proto.proto.WindowsOpen;
      reader.readMessage(value,proto.proto.WindowsOpen.deserializeBinaryFromReader);
      msg.setWindowsOpen(value);
      break;
    case 13:
      var value = new proto.proto.WindowsClose;
      reader.readMessage(value,proto.proto.WindowsClose.deserializeBinaryFromReader);
      msg.setWindowsClose(value);
      break;
    case 43:
      var value = new proto.proto.WindowsVentilate;
      reader.readMessage(value,proto.proto.WindowsVentilate.deserializeBinaryFromReader);
      msg.setWindowsVentilate(value);
      break;
    case 44:
      var value = new proto.proto.WindowsMove;
      reader.readMessage(value,proto.proto.WindowsMove.deserializeBinaryFromReader);
      msg.setWindowsMove(value);
      break;
    case 19:
      var value = new proto.proto.EngineStart;
      reader.readMessage(value,proto.proto.EngineStart.deserializeBinaryFromReader);
      msg.setEngineStart(value);
      break;
    case 20:
      var value = new proto.proto.EngineStop;
      reader.readMessage(value,proto.proto.EngineStop.deserializeBinaryFromReader);
      msg.setEngineStop(value);
      break;
    case 21:
      var value = new proto.proto.ZEVPreconditioningStart;
      reader.readMessage(value,proto.proto.ZEVPreconditioningStart.deserializeBinaryFromReader);
      msg.setZevPreconditioningStart(value);
      break;
    case 22:
      var value = new proto.proto.ZEVPreconditioningStop;
      reader.readMessage(value,proto.proto.ZEVPreconditioningStop.deserializeBinaryFromReader);
      msg.setZevPreconditioningStop(value);
      break;
    case 25:
      var value = new proto.proto.ZEVPreconditioningConfigure;
      reader.readMessage(value,proto.proto.ZEVPreconditioningConfigure.deserializeBinaryFromReader);
      msg.setZevPreconditionConfigure(value);
      break;
    case 26:
      var value = new proto.proto.ZEVPreconditioningConfigureSeats;
      reader.readMessage(value,proto.proto.ZEVPreconditioningConfigureSeats.deserializeBinaryFromReader);
      msg.setZevPreconditionConfigureSeats(value);
      break;
    case 23:
      var value = new proto.proto.SpeedalertStart;
      reader.readMessage(value,proto.proto.SpeedalertStart.deserializeBinaryFromReader);
      msg.setSpeedalertStart(value);
      break;
    case 24:
      var value = new proto.proto.SpeedalertStop;
      reader.readMessage(value,proto.proto.SpeedalertStop.deserializeBinaryFromReader);
      msg.setSpeedalertStop(value);
      break;
    case 27:
      var value = new proto.proto.BatteryChargeProgramConfigure;
      reader.readMessage(value,proto.proto.BatteryChargeProgramConfigure.deserializeBinaryFromReader);
      msg.setBatteryChargeProgram(value);
      break;
    case 28:
      var value = new proto.proto.BatteryMaxSocConfigure;
      reader.readMessage(value,proto.proto.BatteryMaxSocConfigure.deserializeBinaryFromReader);
      msg.setBatteryMaxSoc(value);
      break;
    case 34:
      var value = new proto.proto.ChargeProgramConfigure;
      reader.readMessage(value,proto.proto.ChargeProgramConfigure.deserializeBinaryFromReader);
      msg.setChargeProgramConfigure(value);
      break;
    case 40:
      var value = new proto.proto.ChargeControlConfigure;
      reader.readMessage(value,proto.proto.ChargeControlConfigure.deserializeBinaryFromReader);
      msg.setChargeControlConfigure(value);
      break;
    case 29:
      var value = new proto.proto.ChargeOptConfigure;
      reader.readMessage(value,proto.proto.ChargeOptConfigure.deserializeBinaryFromReader);
      msg.setChargeOptConfigure(value);
      break;
    case 30:
      var value = new proto.proto.ChargeOptStart;
      reader.readMessage(value,proto.proto.ChargeOptStart.deserializeBinaryFromReader);
      msg.setChargeOptStart(value);
      break;
    case 31:
      var value = new proto.proto.ChargeOptStop;
      reader.readMessage(value,proto.proto.ChargeOptStop.deserializeBinaryFromReader);
      msg.setChargeOptStop(value);
      break;
    case 32:
      var value = new proto.proto.TemperatureConfigure;
      reader.readMessage(value,proto.proto.TemperatureConfigure.deserializeBinaryFromReader);
      msg.setTemperatureConfigure(value);
      break;
    case 33:
      var value = new proto.proto.WeekProfileConfigure;
      reader.readMessage(value,proto.proto.WeekProfileConfigure.deserializeBinaryFromReader);
      msg.setWeekProfileConfigure(value);
      break;
    case 41:
      var value = new proto.proto.WeekProfileConfigureV2;
      reader.readMessage(value,proto.proto.WeekProfileConfigureV2.deserializeBinaryFromReader);
      msg.setWeekProfileConfigureV2(value);
      break;
    case 35:
      var value = new proto.proto.SigPosStart;
      reader.readMessage(value,proto.proto.SigPosStart.deserializeBinaryFromReader);
      msg.setSigposStart(value);
      break;
    case 14:
      var value = new proto.proto.TheftalarmDeselectDamagedetection;
      reader.readMessage(value,proto.proto.TheftalarmDeselectDamagedetection.deserializeBinaryFromReader);
      msg.setTheftalarmDeselectDamagedetection(value);
      break;
    case 15:
      var value = new proto.proto.TheftalarmDeselectInterior;
      reader.readMessage(value,proto.proto.TheftalarmDeselectInterior.deserializeBinaryFromReader);
      msg.setTheftalarmDeselectInterior(value);
      break;
    case 16:
      var value = new proto.proto.TheftalarmDeselectTow;
      reader.readMessage(value,proto.proto.TheftalarmDeselectTow.deserializeBinaryFromReader);
      msg.setTheftalarmDeselectTow(value);
      break;
    case 17:
      var value = new proto.proto.TheftalarmSelectDamagedetection;
      reader.readMessage(value,proto.proto.TheftalarmSelectDamagedetection.deserializeBinaryFromReader);
      msg.setTheftalarmSelectDamagedetection(value);
      break;
    case 18:
      var value = new proto.proto.TheftalarmSelectInterior;
      reader.readMessage(value,proto.proto.TheftalarmSelectInterior.deserializeBinaryFromReader);
      msg.setTheftalarmSelectInterior(value);
      break;
    case 37:
      var value = new proto.proto.TheftalarmSelectTow;
      reader.readMessage(value,proto.proto.TheftalarmSelectTow.deserializeBinaryFromReader);
      msg.setTheftalarmSelectTow(value);
      break;
    case 38:
      var value = new proto.proto.TheftalarmStart;
      reader.readMessage(value,proto.proto.TheftalarmStart.deserializeBinaryFromReader);
      msg.setTheftalarmStart(value);
      break;
    case 39:
      var value = new proto.proto.TheftalarmStop;
      reader.readMessage(value,proto.proto.TheftalarmStop.deserializeBinaryFromReader);
      msg.setTheftalarmStop(value);
      break;
    case 42:
      var value = new proto.proto.AutomaticValetParkingActivate;
      reader.readMessage(value,proto.proto.AutomaticValetParkingActivate.deserializeBinaryFromReader);
      msg.setAutomaticValetParkingActivate(value);
      break;
    case 46:
      var value = new proto.proto.ChargeCouplerUnlock;
      reader.readMessage(value,proto.proto.ChargeCouplerUnlock.deserializeBinaryFromReader);
      msg.setChargeCouplerUnlock(value);
      break;
    case 48:
      var value = new proto.proto.DeactivateVehicleKeys;
      reader.readMessage(value,proto.proto.DeactivateVehicleKeys.deserializeBinaryFromReader);
      msg.setDeactivateVehicleKeys(value);
      break;
    case 49:
      var value = new proto.proto.ActivateVehicleKeys;
      reader.readMessage(value,proto.proto.ActivateVehicleKeys.deserializeBinaryFromReader);
      msg.setActivateVehicleKeys(value);
      break;
    case 50:
      var value = new proto.proto.ChargingBreakClocktimerConfigure;
      reader.readMessage(value,proto.proto.ChargingBreakClocktimerConfigure.deserializeBinaryFromReader);
      msg.setChargingbreakClocktimerConfigure(value);
      break;
    case 76:
      var value = new proto.proto.HvBatteryStartConditioning;
      reader.readMessage(value,proto.proto.HvBatteryStartConditioning.deserializeBinaryFromReader);
      msg.setHvBatteryStartConditioning(value);
      break;
    case 77:
      var value = new proto.proto.HvBatteryStopConditioning;
      reader.readMessage(value,proto.proto.HvBatteryStopConditioning.deserializeBinaryFromReader);
      msg.setHvBatteryStopConditioning(value);
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
proto.proto.CommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.CommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.CommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.CommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBackend();
  if (f !== 0.0) {
    writer.writeEnum(
      36,
      f
    );
  }
  f = message.getAuxheatStart();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.proto.AuxheatStart.serializeBinaryToWriter
    );
  }
  f = message.getAuxheatStop();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.AuxheatStop.serializeBinaryToWriter
    );
  }
  f = message.getAuxheatConfigure();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.proto.AuxheatConfigure.serializeBinaryToWriter
    );
  }
  f = message.getDoorsLock();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.proto.DoorsLock.serializeBinaryToWriter
    );
  }
  f = message.getDoorsUnlock();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.proto.DoorsUnlock.serializeBinaryToWriter
    );
  }
  f = message.getSunroofOpen();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.proto.SunroofOpen.serializeBinaryToWriter
    );
  }
  f = message.getSunroofClose();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.proto.SunroofClose.serializeBinaryToWriter
    );
  }
  f = message.getSunroofLift();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.proto.SunroofLift.serializeBinaryToWriter
    );
  }
  f = message.getSunroofMove();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto.proto.SunroofMove.serializeBinaryToWriter
    );
  }
  f = message.getWindowsOpen();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.proto.WindowsOpen.serializeBinaryToWriter
    );
  }
  f = message.getWindowsClose();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.proto.WindowsClose.serializeBinaryToWriter
    );
  }
  f = message.getWindowsVentilate();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto.proto.WindowsVentilate.serializeBinaryToWriter
    );
  }
  f = message.getWindowsMove();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.proto.WindowsMove.serializeBinaryToWriter
    );
  }
  f = message.getEngineStart();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.proto.EngineStart.serializeBinaryToWriter
    );
  }
  f = message.getEngineStop();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.proto.EngineStop.serializeBinaryToWriter
    );
  }
  f = message.getZevPreconditioningStart();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.proto.ZEVPreconditioningStart.serializeBinaryToWriter
    );
  }
  f = message.getZevPreconditioningStop();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.proto.ZEVPreconditioningStop.serializeBinaryToWriter
    );
  }
  f = message.getZevPreconditionConfigure();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.proto.ZEVPreconditioningConfigure.serializeBinaryToWriter
    );
  }
  f = message.getZevPreconditionConfigureSeats();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.proto.ZEVPreconditioningConfigureSeats.serializeBinaryToWriter
    );
  }
  f = message.getSpeedalertStart();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.proto.SpeedalertStart.serializeBinaryToWriter
    );
  }
  f = message.getSpeedalertStop();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.proto.SpeedalertStop.serializeBinaryToWriter
    );
  }
  f = message.getBatteryChargeProgram();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.proto.BatteryChargeProgramConfigure.serializeBinaryToWriter
    );
  }
  f = message.getBatteryMaxSoc();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.proto.BatteryMaxSocConfigure.serializeBinaryToWriter
    );
  }
  f = message.getChargeProgramConfigure();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.proto.ChargeProgramConfigure.serializeBinaryToWriter
    );
  }
  f = message.getChargeControlConfigure();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.proto.ChargeControlConfigure.serializeBinaryToWriter
    );
  }
  f = message.getChargeOptConfigure();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.proto.ChargeOptConfigure.serializeBinaryToWriter
    );
  }
  f = message.getChargeOptStart();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.proto.ChargeOptStart.serializeBinaryToWriter
    );
  }
  f = message.getChargeOptStop();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.proto.ChargeOptStop.serializeBinaryToWriter
    );
  }
  f = message.getTemperatureConfigure();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.proto.TemperatureConfigure.serializeBinaryToWriter
    );
  }
  f = message.getWeekProfileConfigure();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.proto.WeekProfileConfigure.serializeBinaryToWriter
    );
  }
  f = message.getWeekProfileConfigureV2();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.proto.WeekProfileConfigureV2.serializeBinaryToWriter
    );
  }
  f = message.getSigposStart();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.proto.SigPosStart.serializeBinaryToWriter
    );
  }
  f = message.getTheftalarmDeselectDamagedetection();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.proto.TheftalarmDeselectDamagedetection.serializeBinaryToWriter
    );
  }
  f = message.getTheftalarmDeselectInterior();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.proto.TheftalarmDeselectInterior.serializeBinaryToWriter
    );
  }
  f = message.getTheftalarmDeselectTow();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.proto.TheftalarmDeselectTow.serializeBinaryToWriter
    );
  }
  f = message.getTheftalarmSelectDamagedetection();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.proto.TheftalarmSelectDamagedetection.serializeBinaryToWriter
    );
  }
  f = message.getTheftalarmSelectInterior();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.proto.TheftalarmSelectInterior.serializeBinaryToWriter
    );
  }
  f = message.getTheftalarmSelectTow();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.proto.TheftalarmSelectTow.serializeBinaryToWriter
    );
  }
  f = message.getTheftalarmStart();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.proto.TheftalarmStart.serializeBinaryToWriter
    );
  }
  f = message.getTheftalarmStop();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.proto.TheftalarmStop.serializeBinaryToWriter
    );
  }
  f = message.getAutomaticValetParkingActivate();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.proto.AutomaticValetParkingActivate.serializeBinaryToWriter
    );
  }
  f = message.getChargeCouplerUnlock();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      proto.proto.ChargeCouplerUnlock.serializeBinaryToWriter
    );
  }
  f = message.getDeactivateVehicleKeys();
  if (f != null) {
    writer.writeMessage(
      48,
      f,
      proto.proto.DeactivateVehicleKeys.serializeBinaryToWriter
    );
  }
  f = message.getActivateVehicleKeys();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      proto.proto.ActivateVehicleKeys.serializeBinaryToWriter
    );
  }
  f = message.getChargingbreakClocktimerConfigure();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      proto.proto.ChargingBreakClocktimerConfigure.serializeBinaryToWriter
    );
  }
  f = message.getHvBatteryStartConditioning();
  if (f != null) {
    writer.writeMessage(
      76,
      f,
      proto.proto.HvBatteryStartConditioning.serializeBinaryToWriter
    );
  }
  f = message.getHvBatteryStopConditioning();
  if (f != null) {
    writer.writeMessage(
      77,
      f,
      proto.proto.HvBatteryStopConditioning.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.CommandRequest.Backend = {
  VVA: 0,
  VEHICLEAPI: 1
};

/**
 * optional string vin = 1;
 * @return {string}
 */
proto.proto.CommandRequest.prototype.getVin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.setVin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string request_id = 7;
 * @return {string}
 */
proto.proto.CommandRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Backend backend = 36;
 * @return {!proto.proto.CommandRequest.Backend}
 */
proto.proto.CommandRequest.prototype.getBackend = function() {
  return /** @type {!proto.proto.CommandRequest.Backend} */ (jspb.Message.getFieldWithDefault(this, 36, 0));
};


/**
 * @param {!proto.proto.CommandRequest.Backend} value
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.setBackend = function(value) {
  return jspb.Message.setProto3EnumField(this, 36, value);
};


/**
 * optional AuxheatStart auxheat_start = 2;
 * @return {?proto.proto.AuxheatStart}
 */
proto.proto.CommandRequest.prototype.getAuxheatStart = function() {
  return /** @type{?proto.proto.AuxheatStart} */ (
    jspb.Message.getWrapperField(this, proto.proto.AuxheatStart, 2));
};


/**
 * @param {?proto.proto.AuxheatStart|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setAuxheatStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearAuxheatStart = function() {
  return this.setAuxheatStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasAuxheatStart = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AuxheatStop auxheat_stop = 3;
 * @return {?proto.proto.AuxheatStop}
 */
proto.proto.CommandRequest.prototype.getAuxheatStop = function() {
  return /** @type{?proto.proto.AuxheatStop} */ (
    jspb.Message.getWrapperField(this, proto.proto.AuxheatStop, 3));
};


/**
 * @param {?proto.proto.AuxheatStop|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setAuxheatStop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearAuxheatStop = function() {
  return this.setAuxheatStop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasAuxheatStop = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AuxheatConfigure auxheat_configure = 4;
 * @return {?proto.proto.AuxheatConfigure}
 */
proto.proto.CommandRequest.prototype.getAuxheatConfigure = function() {
  return /** @type{?proto.proto.AuxheatConfigure} */ (
    jspb.Message.getWrapperField(this, proto.proto.AuxheatConfigure, 4));
};


/**
 * @param {?proto.proto.AuxheatConfigure|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setAuxheatConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearAuxheatConfigure = function() {
  return this.setAuxheatConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasAuxheatConfigure = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DoorsLock doors_lock = 5;
 * @return {?proto.proto.DoorsLock}
 */
proto.proto.CommandRequest.prototype.getDoorsLock = function() {
  return /** @type{?proto.proto.DoorsLock} */ (
    jspb.Message.getWrapperField(this, proto.proto.DoorsLock, 5));
};


/**
 * @param {?proto.proto.DoorsLock|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setDoorsLock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearDoorsLock = function() {
  return this.setDoorsLock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasDoorsLock = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional DoorsUnlock doors_unlock = 6;
 * @return {?proto.proto.DoorsUnlock}
 */
proto.proto.CommandRequest.prototype.getDoorsUnlock = function() {
  return /** @type{?proto.proto.DoorsUnlock} */ (
    jspb.Message.getWrapperField(this, proto.proto.DoorsUnlock, 6));
};


/**
 * @param {?proto.proto.DoorsUnlock|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setDoorsUnlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearDoorsUnlock = function() {
  return this.setDoorsUnlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasDoorsUnlock = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SunroofOpen sunroof_open = 9;
 * @return {?proto.proto.SunroofOpen}
 */
proto.proto.CommandRequest.prototype.getSunroofOpen = function() {
  return /** @type{?proto.proto.SunroofOpen} */ (
    jspb.Message.getWrapperField(this, proto.proto.SunroofOpen, 9));
};


/**
 * @param {?proto.proto.SunroofOpen|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setSunroofOpen = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearSunroofOpen = function() {
  return this.setSunroofOpen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasSunroofOpen = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional SunroofClose sunroof_close = 10;
 * @return {?proto.proto.SunroofClose}
 */
proto.proto.CommandRequest.prototype.getSunroofClose = function() {
  return /** @type{?proto.proto.SunroofClose} */ (
    jspb.Message.getWrapperField(this, proto.proto.SunroofClose, 10));
};


/**
 * @param {?proto.proto.SunroofClose|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setSunroofClose = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearSunroofClose = function() {
  return this.setSunroofClose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasSunroofClose = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional SunroofLift sunroof_lift = 11;
 * @return {?proto.proto.SunroofLift}
 */
proto.proto.CommandRequest.prototype.getSunroofLift = function() {
  return /** @type{?proto.proto.SunroofLift} */ (
    jspb.Message.getWrapperField(this, proto.proto.SunroofLift, 11));
};


/**
 * @param {?proto.proto.SunroofLift|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setSunroofLift = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearSunroofLift = function() {
  return this.setSunroofLift(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasSunroofLift = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional SunroofMove sunroof_move = 47;
 * @return {?proto.proto.SunroofMove}
 */
proto.proto.CommandRequest.prototype.getSunroofMove = function() {
  return /** @type{?proto.proto.SunroofMove} */ (
    jspb.Message.getWrapperField(this, proto.proto.SunroofMove, 47));
};


/**
 * @param {?proto.proto.SunroofMove|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setSunroofMove = function(value) {
  return jspb.Message.setOneofWrapperField(this, 47, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearSunroofMove = function() {
  return this.setSunroofMove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasSunroofMove = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional WindowsOpen windows_open = 12;
 * @return {?proto.proto.WindowsOpen}
 */
proto.proto.CommandRequest.prototype.getWindowsOpen = function() {
  return /** @type{?proto.proto.WindowsOpen} */ (
    jspb.Message.getWrapperField(this, proto.proto.WindowsOpen, 12));
};


/**
 * @param {?proto.proto.WindowsOpen|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setWindowsOpen = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearWindowsOpen = function() {
  return this.setWindowsOpen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasWindowsOpen = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional WindowsClose windows_close = 13;
 * @return {?proto.proto.WindowsClose}
 */
proto.proto.CommandRequest.prototype.getWindowsClose = function() {
  return /** @type{?proto.proto.WindowsClose} */ (
    jspb.Message.getWrapperField(this, proto.proto.WindowsClose, 13));
};


/**
 * @param {?proto.proto.WindowsClose|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setWindowsClose = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearWindowsClose = function() {
  return this.setWindowsClose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasWindowsClose = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional WindowsVentilate windows_ventilate = 43;
 * @return {?proto.proto.WindowsVentilate}
 */
proto.proto.CommandRequest.prototype.getWindowsVentilate = function() {
  return /** @type{?proto.proto.WindowsVentilate} */ (
    jspb.Message.getWrapperField(this, proto.proto.WindowsVentilate, 43));
};


/**
 * @param {?proto.proto.WindowsVentilate|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setWindowsVentilate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 43, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearWindowsVentilate = function() {
  return this.setWindowsVentilate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasWindowsVentilate = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional WindowsMove windows_move = 44;
 * @return {?proto.proto.WindowsMove}
 */
proto.proto.CommandRequest.prototype.getWindowsMove = function() {
  return /** @type{?proto.proto.WindowsMove} */ (
    jspb.Message.getWrapperField(this, proto.proto.WindowsMove, 44));
};


/**
 * @param {?proto.proto.WindowsMove|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setWindowsMove = function(value) {
  return jspb.Message.setOneofWrapperField(this, 44, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearWindowsMove = function() {
  return this.setWindowsMove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasWindowsMove = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional EngineStart engine_start = 19;
 * @return {?proto.proto.EngineStart}
 */
proto.proto.CommandRequest.prototype.getEngineStart = function() {
  return /** @type{?proto.proto.EngineStart} */ (
    jspb.Message.getWrapperField(this, proto.proto.EngineStart, 19));
};


/**
 * @param {?proto.proto.EngineStart|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setEngineStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearEngineStart = function() {
  return this.setEngineStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasEngineStart = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional EngineStop engine_stop = 20;
 * @return {?proto.proto.EngineStop}
 */
proto.proto.CommandRequest.prototype.getEngineStop = function() {
  return /** @type{?proto.proto.EngineStop} */ (
    jspb.Message.getWrapperField(this, proto.proto.EngineStop, 20));
};


/**
 * @param {?proto.proto.EngineStop|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setEngineStop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearEngineStop = function() {
  return this.setEngineStop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasEngineStop = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ZEVPreconditioningStart zev_preconditioning_start = 21;
 * @return {?proto.proto.ZEVPreconditioningStart}
 */
proto.proto.CommandRequest.prototype.getZevPreconditioningStart = function() {
  return /** @type{?proto.proto.ZEVPreconditioningStart} */ (
    jspb.Message.getWrapperField(this, proto.proto.ZEVPreconditioningStart, 21));
};


/**
 * @param {?proto.proto.ZEVPreconditioningStart|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setZevPreconditioningStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearZevPreconditioningStart = function() {
  return this.setZevPreconditioningStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasZevPreconditioningStart = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ZEVPreconditioningStop zev_preconditioning_stop = 22;
 * @return {?proto.proto.ZEVPreconditioningStop}
 */
proto.proto.CommandRequest.prototype.getZevPreconditioningStop = function() {
  return /** @type{?proto.proto.ZEVPreconditioningStop} */ (
    jspb.Message.getWrapperField(this, proto.proto.ZEVPreconditioningStop, 22));
};


/**
 * @param {?proto.proto.ZEVPreconditioningStop|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setZevPreconditioningStop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearZevPreconditioningStop = function() {
  return this.setZevPreconditioningStop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasZevPreconditioningStop = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional ZEVPreconditioningConfigure zev_precondition_configure = 25;
 * @return {?proto.proto.ZEVPreconditioningConfigure}
 */
proto.proto.CommandRequest.prototype.getZevPreconditionConfigure = function() {
  return /** @type{?proto.proto.ZEVPreconditioningConfigure} */ (
    jspb.Message.getWrapperField(this, proto.proto.ZEVPreconditioningConfigure, 25));
};


/**
 * @param {?proto.proto.ZEVPreconditioningConfigure|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setZevPreconditionConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearZevPreconditionConfigure = function() {
  return this.setZevPreconditionConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasZevPreconditionConfigure = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional ZEVPreconditioningConfigureSeats zev_precondition_configure_seats = 26;
 * @return {?proto.proto.ZEVPreconditioningConfigureSeats}
 */
proto.proto.CommandRequest.prototype.getZevPreconditionConfigureSeats = function() {
  return /** @type{?proto.proto.ZEVPreconditioningConfigureSeats} */ (
    jspb.Message.getWrapperField(this, proto.proto.ZEVPreconditioningConfigureSeats, 26));
};


/**
 * @param {?proto.proto.ZEVPreconditioningConfigureSeats|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setZevPreconditionConfigureSeats = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearZevPreconditionConfigureSeats = function() {
  return this.setZevPreconditionConfigureSeats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasZevPreconditionConfigureSeats = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional SpeedalertStart speedalert_start = 23;
 * @return {?proto.proto.SpeedalertStart}
 */
proto.proto.CommandRequest.prototype.getSpeedalertStart = function() {
  return /** @type{?proto.proto.SpeedalertStart} */ (
    jspb.Message.getWrapperField(this, proto.proto.SpeedalertStart, 23));
};


/**
 * @param {?proto.proto.SpeedalertStart|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setSpeedalertStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearSpeedalertStart = function() {
  return this.setSpeedalertStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasSpeedalertStart = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional SpeedalertStop speedalert_stop = 24;
 * @return {?proto.proto.SpeedalertStop}
 */
proto.proto.CommandRequest.prototype.getSpeedalertStop = function() {
  return /** @type{?proto.proto.SpeedalertStop} */ (
    jspb.Message.getWrapperField(this, proto.proto.SpeedalertStop, 24));
};


/**
 * @param {?proto.proto.SpeedalertStop|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setSpeedalertStop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearSpeedalertStop = function() {
  return this.setSpeedalertStop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasSpeedalertStop = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional BatteryChargeProgramConfigure battery_charge_program = 27;
 * @return {?proto.proto.BatteryChargeProgramConfigure}
 */
proto.proto.CommandRequest.prototype.getBatteryChargeProgram = function() {
  return /** @type{?proto.proto.BatteryChargeProgramConfigure} */ (
    jspb.Message.getWrapperField(this, proto.proto.BatteryChargeProgramConfigure, 27));
};


/**
 * @param {?proto.proto.BatteryChargeProgramConfigure|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setBatteryChargeProgram = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearBatteryChargeProgram = function() {
  return this.setBatteryChargeProgram(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasBatteryChargeProgram = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional BatteryMaxSocConfigure battery_max_soc = 28;
 * @return {?proto.proto.BatteryMaxSocConfigure}
 */
proto.proto.CommandRequest.prototype.getBatteryMaxSoc = function() {
  return /** @type{?proto.proto.BatteryMaxSocConfigure} */ (
    jspb.Message.getWrapperField(this, proto.proto.BatteryMaxSocConfigure, 28));
};


/**
 * @param {?proto.proto.BatteryMaxSocConfigure|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setBatteryMaxSoc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearBatteryMaxSoc = function() {
  return this.setBatteryMaxSoc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasBatteryMaxSoc = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional ChargeProgramConfigure charge_program_configure = 34;
 * @return {?proto.proto.ChargeProgramConfigure}
 */
proto.proto.CommandRequest.prototype.getChargeProgramConfigure = function() {
  return /** @type{?proto.proto.ChargeProgramConfigure} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargeProgramConfigure, 34));
};


/**
 * @param {?proto.proto.ChargeProgramConfigure|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setChargeProgramConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearChargeProgramConfigure = function() {
  return this.setChargeProgramConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasChargeProgramConfigure = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional ChargeControlConfigure charge_control_configure = 40;
 * @return {?proto.proto.ChargeControlConfigure}
 */
proto.proto.CommandRequest.prototype.getChargeControlConfigure = function() {
  return /** @type{?proto.proto.ChargeControlConfigure} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargeControlConfigure, 40));
};


/**
 * @param {?proto.proto.ChargeControlConfigure|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setChargeControlConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearChargeControlConfigure = function() {
  return this.setChargeControlConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasChargeControlConfigure = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional ChargeOptConfigure charge_opt_configure = 29;
 * @return {?proto.proto.ChargeOptConfigure}
 */
proto.proto.CommandRequest.prototype.getChargeOptConfigure = function() {
  return /** @type{?proto.proto.ChargeOptConfigure} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargeOptConfigure, 29));
};


/**
 * @param {?proto.proto.ChargeOptConfigure|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setChargeOptConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearChargeOptConfigure = function() {
  return this.setChargeOptConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasChargeOptConfigure = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional ChargeOptStart charge_opt_start = 30;
 * @return {?proto.proto.ChargeOptStart}
 */
proto.proto.CommandRequest.prototype.getChargeOptStart = function() {
  return /** @type{?proto.proto.ChargeOptStart} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargeOptStart, 30));
};


/**
 * @param {?proto.proto.ChargeOptStart|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setChargeOptStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearChargeOptStart = function() {
  return this.setChargeOptStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasChargeOptStart = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional ChargeOptStop charge_opt_stop = 31;
 * @return {?proto.proto.ChargeOptStop}
 */
proto.proto.CommandRequest.prototype.getChargeOptStop = function() {
  return /** @type{?proto.proto.ChargeOptStop} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargeOptStop, 31));
};


/**
 * @param {?proto.proto.ChargeOptStop|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setChargeOptStop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearChargeOptStop = function() {
  return this.setChargeOptStop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasChargeOptStop = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional TemperatureConfigure temperature_configure = 32;
 * @return {?proto.proto.TemperatureConfigure}
 */
proto.proto.CommandRequest.prototype.getTemperatureConfigure = function() {
  return /** @type{?proto.proto.TemperatureConfigure} */ (
    jspb.Message.getWrapperField(this, proto.proto.TemperatureConfigure, 32));
};


/**
 * @param {?proto.proto.TemperatureConfigure|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setTemperatureConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearTemperatureConfigure = function() {
  return this.setTemperatureConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasTemperatureConfigure = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional WeekProfileConfigure week_profile_configure = 33;
 * @return {?proto.proto.WeekProfileConfigure}
 */
proto.proto.CommandRequest.prototype.getWeekProfileConfigure = function() {
  return /** @type{?proto.proto.WeekProfileConfigure} */ (
    jspb.Message.getWrapperField(this, proto.proto.WeekProfileConfigure, 33));
};


/**
 * @param {?proto.proto.WeekProfileConfigure|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setWeekProfileConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearWeekProfileConfigure = function() {
  return this.setWeekProfileConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasWeekProfileConfigure = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional WeekProfileConfigureV2 week_profile_configure_v2 = 41;
 * @return {?proto.proto.WeekProfileConfigureV2}
 */
proto.proto.CommandRequest.prototype.getWeekProfileConfigureV2 = function() {
  return /** @type{?proto.proto.WeekProfileConfigureV2} */ (
    jspb.Message.getWrapperField(this, proto.proto.WeekProfileConfigureV2, 41));
};


/**
 * @param {?proto.proto.WeekProfileConfigureV2|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setWeekProfileConfigureV2 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearWeekProfileConfigureV2 = function() {
  return this.setWeekProfileConfigureV2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasWeekProfileConfigureV2 = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional SigPosStart sigpos_start = 35;
 * @return {?proto.proto.SigPosStart}
 */
proto.proto.CommandRequest.prototype.getSigposStart = function() {
  return /** @type{?proto.proto.SigPosStart} */ (
    jspb.Message.getWrapperField(this, proto.proto.SigPosStart, 35));
};


/**
 * @param {?proto.proto.SigPosStart|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setSigposStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearSigposStart = function() {
  return this.setSigposStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasSigposStart = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional TheftalarmDeselectDamagedetection theftalarm_deselect_damagedetection = 14;
 * @return {?proto.proto.TheftalarmDeselectDamagedetection}
 */
proto.proto.CommandRequest.prototype.getTheftalarmDeselectDamagedetection = function() {
  return /** @type{?proto.proto.TheftalarmDeselectDamagedetection} */ (
    jspb.Message.getWrapperField(this, proto.proto.TheftalarmDeselectDamagedetection, 14));
};


/**
 * @param {?proto.proto.TheftalarmDeselectDamagedetection|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setTheftalarmDeselectDamagedetection = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearTheftalarmDeselectDamagedetection = function() {
  return this.setTheftalarmDeselectDamagedetection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasTheftalarmDeselectDamagedetection = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional TheftalarmDeselectInterior theftalarm_deselect_interior = 15;
 * @return {?proto.proto.TheftalarmDeselectInterior}
 */
proto.proto.CommandRequest.prototype.getTheftalarmDeselectInterior = function() {
  return /** @type{?proto.proto.TheftalarmDeselectInterior} */ (
    jspb.Message.getWrapperField(this, proto.proto.TheftalarmDeselectInterior, 15));
};


/**
 * @param {?proto.proto.TheftalarmDeselectInterior|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setTheftalarmDeselectInterior = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearTheftalarmDeselectInterior = function() {
  return this.setTheftalarmDeselectInterior(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasTheftalarmDeselectInterior = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional TheftalarmDeselectTow theftalarm_deselect_tow = 16;
 * @return {?proto.proto.TheftalarmDeselectTow}
 */
proto.proto.CommandRequest.prototype.getTheftalarmDeselectTow = function() {
  return /** @type{?proto.proto.TheftalarmDeselectTow} */ (
    jspb.Message.getWrapperField(this, proto.proto.TheftalarmDeselectTow, 16));
};


/**
 * @param {?proto.proto.TheftalarmDeselectTow|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setTheftalarmDeselectTow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearTheftalarmDeselectTow = function() {
  return this.setTheftalarmDeselectTow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasTheftalarmDeselectTow = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional TheftalarmSelectDamagedetection theftalarm_select_damagedetection = 17;
 * @return {?proto.proto.TheftalarmSelectDamagedetection}
 */
proto.proto.CommandRequest.prototype.getTheftalarmSelectDamagedetection = function() {
  return /** @type{?proto.proto.TheftalarmSelectDamagedetection} */ (
    jspb.Message.getWrapperField(this, proto.proto.TheftalarmSelectDamagedetection, 17));
};


/**
 * @param {?proto.proto.TheftalarmSelectDamagedetection|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setTheftalarmSelectDamagedetection = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearTheftalarmSelectDamagedetection = function() {
  return this.setTheftalarmSelectDamagedetection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasTheftalarmSelectDamagedetection = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional TheftalarmSelectInterior theftalarm_select_interior = 18;
 * @return {?proto.proto.TheftalarmSelectInterior}
 */
proto.proto.CommandRequest.prototype.getTheftalarmSelectInterior = function() {
  return /** @type{?proto.proto.TheftalarmSelectInterior} */ (
    jspb.Message.getWrapperField(this, proto.proto.TheftalarmSelectInterior, 18));
};


/**
 * @param {?proto.proto.TheftalarmSelectInterior|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setTheftalarmSelectInterior = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearTheftalarmSelectInterior = function() {
  return this.setTheftalarmSelectInterior(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasTheftalarmSelectInterior = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional TheftalarmSelectTow theftalarm_select_tow = 37;
 * @return {?proto.proto.TheftalarmSelectTow}
 */
proto.proto.CommandRequest.prototype.getTheftalarmSelectTow = function() {
  return /** @type{?proto.proto.TheftalarmSelectTow} */ (
    jspb.Message.getWrapperField(this, proto.proto.TheftalarmSelectTow, 37));
};


/**
 * @param {?proto.proto.TheftalarmSelectTow|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setTheftalarmSelectTow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearTheftalarmSelectTow = function() {
  return this.setTheftalarmSelectTow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasTheftalarmSelectTow = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional TheftalarmStart theftalarm_start = 38;
 * @return {?proto.proto.TheftalarmStart}
 */
proto.proto.CommandRequest.prototype.getTheftalarmStart = function() {
  return /** @type{?proto.proto.TheftalarmStart} */ (
    jspb.Message.getWrapperField(this, proto.proto.TheftalarmStart, 38));
};


/**
 * @param {?proto.proto.TheftalarmStart|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setTheftalarmStart = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearTheftalarmStart = function() {
  return this.setTheftalarmStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasTheftalarmStart = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional TheftalarmStop theftalarm_stop = 39;
 * @return {?proto.proto.TheftalarmStop}
 */
proto.proto.CommandRequest.prototype.getTheftalarmStop = function() {
  return /** @type{?proto.proto.TheftalarmStop} */ (
    jspb.Message.getWrapperField(this, proto.proto.TheftalarmStop, 39));
};


/**
 * @param {?proto.proto.TheftalarmStop|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setTheftalarmStop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 39, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearTheftalarmStop = function() {
  return this.setTheftalarmStop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasTheftalarmStop = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional AutomaticValetParkingActivate automatic_valet_parking_activate = 42;
 * @return {?proto.proto.AutomaticValetParkingActivate}
 */
proto.proto.CommandRequest.prototype.getAutomaticValetParkingActivate = function() {
  return /** @type{?proto.proto.AutomaticValetParkingActivate} */ (
    jspb.Message.getWrapperField(this, proto.proto.AutomaticValetParkingActivate, 42));
};


/**
 * @param {?proto.proto.AutomaticValetParkingActivate|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setAutomaticValetParkingActivate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearAutomaticValetParkingActivate = function() {
  return this.setAutomaticValetParkingActivate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasAutomaticValetParkingActivate = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional ChargeCouplerUnlock charge_coupler_unlock = 46;
 * @return {?proto.proto.ChargeCouplerUnlock}
 */
proto.proto.CommandRequest.prototype.getChargeCouplerUnlock = function() {
  return /** @type{?proto.proto.ChargeCouplerUnlock} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargeCouplerUnlock, 46));
};


/**
 * @param {?proto.proto.ChargeCouplerUnlock|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setChargeCouplerUnlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 46, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearChargeCouplerUnlock = function() {
  return this.setChargeCouplerUnlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasChargeCouplerUnlock = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional DeactivateVehicleKeys deactivate_vehicle_keys = 48;
 * @return {?proto.proto.DeactivateVehicleKeys}
 */
proto.proto.CommandRequest.prototype.getDeactivateVehicleKeys = function() {
  return /** @type{?proto.proto.DeactivateVehicleKeys} */ (
    jspb.Message.getWrapperField(this, proto.proto.DeactivateVehicleKeys, 48));
};


/**
 * @param {?proto.proto.DeactivateVehicleKeys|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setDeactivateVehicleKeys = function(value) {
  return jspb.Message.setOneofWrapperField(this, 48, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearDeactivateVehicleKeys = function() {
  return this.setDeactivateVehicleKeys(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasDeactivateVehicleKeys = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional ActivateVehicleKeys activate_vehicle_keys = 49;
 * @return {?proto.proto.ActivateVehicleKeys}
 */
proto.proto.CommandRequest.prototype.getActivateVehicleKeys = function() {
  return /** @type{?proto.proto.ActivateVehicleKeys} */ (
    jspb.Message.getWrapperField(this, proto.proto.ActivateVehicleKeys, 49));
};


/**
 * @param {?proto.proto.ActivateVehicleKeys|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setActivateVehicleKeys = function(value) {
  return jspb.Message.setOneofWrapperField(this, 49, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearActivateVehicleKeys = function() {
  return this.setActivateVehicleKeys(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasActivateVehicleKeys = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional ChargingBreakClocktimerConfigure chargingbreak_clocktimer_configure = 50;
 * @return {?proto.proto.ChargingBreakClocktimerConfigure}
 */
proto.proto.CommandRequest.prototype.getChargingbreakClocktimerConfigure = function() {
  return /** @type{?proto.proto.ChargingBreakClocktimerConfigure} */ (
    jspb.Message.getWrapperField(this, proto.proto.ChargingBreakClocktimerConfigure, 50));
};


/**
 * @param {?proto.proto.ChargingBreakClocktimerConfigure|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setChargingbreakClocktimerConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 50, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearChargingbreakClocktimerConfigure = function() {
  return this.setChargingbreakClocktimerConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasChargingbreakClocktimerConfigure = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional HvBatteryStartConditioning hv_battery_start_conditioning = 76;
 * @return {?proto.proto.HvBatteryStartConditioning}
 */
proto.proto.CommandRequest.prototype.getHvBatteryStartConditioning = function() {
  return /** @type{?proto.proto.HvBatteryStartConditioning} */ (
    jspb.Message.getWrapperField(this, proto.proto.HvBatteryStartConditioning, 76));
};


/**
 * @param {?proto.proto.HvBatteryStartConditioning|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setHvBatteryStartConditioning = function(value) {
  return jspb.Message.setOneofWrapperField(this, 76, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearHvBatteryStartConditioning = function() {
  return this.setHvBatteryStartConditioning(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasHvBatteryStartConditioning = function() {
  return jspb.Message.getField(this, 76) != null;
};


/**
 * optional HvBatteryStopConditioning hv_battery_stop_conditioning = 77;
 * @return {?proto.proto.HvBatteryStopConditioning}
 */
proto.proto.CommandRequest.prototype.getHvBatteryStopConditioning = function() {
  return /** @type{?proto.proto.HvBatteryStopConditioning} */ (
    jspb.Message.getWrapperField(this, proto.proto.HvBatteryStopConditioning, 77));
};


/**
 * @param {?proto.proto.HvBatteryStopConditioning|undefined} value
 * @return {!proto.proto.CommandRequest} returns this
*/
proto.proto.CommandRequest.prototype.setHvBatteryStopConditioning = function(value) {
  return jspb.Message.setOneofWrapperField(this, 77, proto.proto.CommandRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.CommandRequest} returns this
 */
proto.proto.CommandRequest.prototype.clearHvBatteryStopConditioning = function() {
  return this.setHvBatteryStopConditioning(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.CommandRequest.prototype.hasHvBatteryStopConditioning = function() {
  return jspb.Message.getField(this, 77) != null;
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
proto.proto.HvBatteryStartConditioning.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HvBatteryStartConditioning.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HvBatteryStartConditioning} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HvBatteryStartConditioning.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.HvBatteryStartConditioning}
 */
proto.proto.HvBatteryStartConditioning.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HvBatteryStartConditioning;
  return proto.proto.HvBatteryStartConditioning.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HvBatteryStartConditioning} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HvBatteryStartConditioning}
 */
proto.proto.HvBatteryStartConditioning.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.HvBatteryStartConditioning.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HvBatteryStartConditioning.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HvBatteryStartConditioning} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HvBatteryStartConditioning.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.HvBatteryStopConditioning.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HvBatteryStopConditioning.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HvBatteryStopConditioning} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HvBatteryStopConditioning.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.HvBatteryStopConditioning}
 */
proto.proto.HvBatteryStopConditioning.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HvBatteryStopConditioning;
  return proto.proto.HvBatteryStopConditioning.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HvBatteryStopConditioning} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HvBatteryStopConditioning}
 */
proto.proto.HvBatteryStopConditioning.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.HvBatteryStopConditioning.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HvBatteryStopConditioning.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HvBatteryStopConditioning} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.HvBatteryStopConditioning.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.DeactivateVehicleKeys.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DeactivateVehicleKeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DeactivateVehicleKeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeactivateVehicleKeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: jspb.Message.getFieldWithDefault(msg, 1, ""),
    expirationUnix: jspb.Message.getFieldWithDefault(msg, 2, 0),
    expirationSeconds: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expirationMilliseconds: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.proto.DeactivateVehicleKeys}
 */
proto.proto.DeactivateVehicleKeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DeactivateVehicleKeys;
  return proto.proto.DeactivateVehicleKeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DeactivateVehicleKeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DeactivateVehicleKeys}
 */
proto.proto.DeactivateVehicleKeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirationUnix(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpirationSeconds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpirationMilliseconds(value);
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
proto.proto.DeactivateVehicleKeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DeactivateVehicleKeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DeactivateVehicleKeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DeactivateVehicleKeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExpirationUnix();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getExpirationSeconds();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpirationMilliseconds();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string pin = 1;
 * @return {string}
 */
proto.proto.DeactivateVehicleKeys.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DeactivateVehicleKeys} returns this
 */
proto.proto.DeactivateVehicleKeys.prototype.setPin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 expiration_unix = 2;
 * @return {number}
 */
proto.proto.DeactivateVehicleKeys.prototype.getExpirationUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.DeactivateVehicleKeys} returns this
 */
proto.proto.DeactivateVehicleKeys.prototype.setExpirationUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string expiration_seconds = 3;
 * @return {string}
 */
proto.proto.DeactivateVehicleKeys.prototype.getExpirationSeconds = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DeactivateVehicleKeys} returns this
 */
proto.proto.DeactivateVehicleKeys.prototype.setExpirationSeconds = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string expiration_milliseconds = 4;
 * @return {string}
 */
proto.proto.DeactivateVehicleKeys.prototype.getExpirationMilliseconds = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DeactivateVehicleKeys} returns this
 */
proto.proto.DeactivateVehicleKeys.prototype.setExpirationMilliseconds = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.proto.ActivateVehicleKeys.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ActivateVehicleKeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ActivateVehicleKeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ActivateVehicleKeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: jspb.Message.getFieldWithDefault(msg, 1, ""),
    expirationUnix: jspb.Message.getFieldWithDefault(msg, 2, 0),
    expirationSeconds: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expirationMilliseconds: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.proto.ActivateVehicleKeys}
 */
proto.proto.ActivateVehicleKeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ActivateVehicleKeys;
  return proto.proto.ActivateVehicleKeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ActivateVehicleKeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ActivateVehicleKeys}
 */
proto.proto.ActivateVehicleKeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirationUnix(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpirationSeconds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpirationMilliseconds(value);
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
proto.proto.ActivateVehicleKeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ActivateVehicleKeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ActivateVehicleKeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ActivateVehicleKeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExpirationUnix();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getExpirationSeconds();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpirationMilliseconds();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string pin = 1;
 * @return {string}
 */
proto.proto.ActivateVehicleKeys.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ActivateVehicleKeys} returns this
 */
proto.proto.ActivateVehicleKeys.prototype.setPin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 expiration_unix = 2;
 * @return {number}
 */
proto.proto.ActivateVehicleKeys.prototype.getExpirationUnix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ActivateVehicleKeys} returns this
 */
proto.proto.ActivateVehicleKeys.prototype.setExpirationUnix = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string expiration_seconds = 3;
 * @return {string}
 */
proto.proto.ActivateVehicleKeys.prototype.getExpirationSeconds = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ActivateVehicleKeys} returns this
 */
proto.proto.ActivateVehicleKeys.prototype.setExpirationSeconds = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string expiration_milliseconds = 4;
 * @return {string}
 */
proto.proto.ActivateVehicleKeys.prototype.getExpirationMilliseconds = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.ActivateVehicleKeys} returns this
 */
proto.proto.ActivateVehicleKeys.prototype.setExpirationMilliseconds = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.proto.AuxheatStart.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AuxheatStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AuxheatStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AuxheatStart.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.AuxheatStart}
 */
proto.proto.AuxheatStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AuxheatStart;
  return proto.proto.AuxheatStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AuxheatStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AuxheatStart}
 */
proto.proto.AuxheatStart.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.AuxheatStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AuxheatStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AuxheatStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AuxheatStart.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.AuxheatStop.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AuxheatStop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AuxheatStop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AuxheatStop.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.AuxheatStop}
 */
proto.proto.AuxheatStop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AuxheatStop;
  return proto.proto.AuxheatStop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AuxheatStop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AuxheatStop}
 */
proto.proto.AuxheatStop.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.AuxheatStop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AuxheatStop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AuxheatStop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AuxheatStop.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.AuxheatConfigure.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AuxheatConfigure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AuxheatConfigure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AuxheatConfigure.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeSelection: jspb.Message.getFieldWithDefault(msg, 1, 0),
    time1: jspb.Message.getFieldWithDefault(msg, 2, 0),
    time2: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time3: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.proto.AuxheatConfigure}
 */
proto.proto.AuxheatConfigure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AuxheatConfigure;
  return proto.proto.AuxheatConfigure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AuxheatConfigure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AuxheatConfigure}
 */
proto.proto.AuxheatConfigure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.AuxheatConfigure.Selection} */ (reader.readEnum());
      msg.setTimeSelection(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTime1(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTime2(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTime3(value);
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
proto.proto.AuxheatConfigure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AuxheatConfigure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AuxheatConfigure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AuxheatConfigure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeSelection();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTime1();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTime2();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTime3();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.AuxheatConfigure.Selection = {
  NO_SELECTION: 0,
  TIME_1: 1,
  TIME_2: 2,
  TIME_3: 3
};

/**
 * optional Selection time_selection = 1;
 * @return {!proto.proto.AuxheatConfigure.Selection}
 */
proto.proto.AuxheatConfigure.prototype.getTimeSelection = function() {
  return /** @type {!proto.proto.AuxheatConfigure.Selection} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.AuxheatConfigure.Selection} value
 * @return {!proto.proto.AuxheatConfigure} returns this
 */
proto.proto.AuxheatConfigure.prototype.setTimeSelection = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 time_1 = 2;
 * @return {number}
 */
proto.proto.AuxheatConfigure.prototype.getTime1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.AuxheatConfigure} returns this
 */
proto.proto.AuxheatConfigure.prototype.setTime1 = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 time_2 = 3;
 * @return {number}
 */
proto.proto.AuxheatConfigure.prototype.getTime2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.AuxheatConfigure} returns this
 */
proto.proto.AuxheatConfigure.prototype.setTime2 = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 time_3 = 4;
 * @return {number}
 */
proto.proto.AuxheatConfigure.prototype.getTime3 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.AuxheatConfigure} returns this
 */
proto.proto.AuxheatConfigure.prototype.setTime3 = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.DoorsLock.repeatedFields_ = [1];



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
proto.proto.DoorsLock.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DoorsLock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DoorsLock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DoorsLock.toObject = function(includeInstance, msg) {
  var f, obj = {
    doorsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.proto.DoorsLock}
 */
proto.proto.DoorsLock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DoorsLock;
  return proto.proto.DoorsLock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DoorsLock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DoorsLock}
 */
proto.proto.DoorsLock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.proto.Door>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDoors(values[i]);
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
proto.proto.DoorsLock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DoorsLock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DoorsLock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DoorsLock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDoorsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated Door doors = 1;
 * @return {!Array<!proto.proto.Door>}
 */
proto.proto.DoorsLock.prototype.getDoorsList = function() {
  return /** @type {!Array<!proto.proto.Door>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.proto.Door>} value
 * @return {!proto.proto.DoorsLock} returns this
 */
proto.proto.DoorsLock.prototype.setDoorsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.proto.Door} value
 * @param {number=} opt_index
 * @return {!proto.proto.DoorsLock} returns this
 */
proto.proto.DoorsLock.prototype.addDoors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.DoorsLock} returns this
 */
proto.proto.DoorsLock.prototype.clearDoorsList = function() {
  return this.setDoorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.DoorsUnlock.repeatedFields_ = [2];



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
proto.proto.DoorsUnlock.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.DoorsUnlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.DoorsUnlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DoorsUnlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: jspb.Message.getFieldWithDefault(msg, 1, ""),
    doorsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.proto.DoorsUnlock}
 */
proto.proto.DoorsUnlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.DoorsUnlock;
  return proto.proto.DoorsUnlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.DoorsUnlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.DoorsUnlock}
 */
proto.proto.DoorsUnlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.proto.Door>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDoors(values[i]);
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
proto.proto.DoorsUnlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.DoorsUnlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.DoorsUnlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.DoorsUnlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDoorsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
};


/**
 * optional string pin = 1;
 * @return {string}
 */
proto.proto.DoorsUnlock.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.DoorsUnlock} returns this
 */
proto.proto.DoorsUnlock.prototype.setPin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Door doors = 2;
 * @return {!Array<!proto.proto.Door>}
 */
proto.proto.DoorsUnlock.prototype.getDoorsList = function() {
  return /** @type {!Array<!proto.proto.Door>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.proto.Door>} value
 * @return {!proto.proto.DoorsUnlock} returns this
 */
proto.proto.DoorsUnlock.prototype.setDoorsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.proto.Door} value
 * @param {number=} opt_index
 * @return {!proto.proto.DoorsUnlock} returns this
 */
proto.proto.DoorsUnlock.prototype.addDoors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.DoorsUnlock} returns this
 */
proto.proto.DoorsUnlock.prototype.clearDoorsList = function() {
  return this.setDoorsList([]);
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
proto.proto.EngineStart.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.EngineStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.EngineStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.EngineStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.proto.EngineStart}
 */
proto.proto.EngineStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.EngineStart;
  return proto.proto.EngineStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.EngineStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.EngineStart}
 */
proto.proto.EngineStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
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
proto.proto.EngineStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.EngineStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.EngineStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.EngineStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pin = 1;
 * @return {string}
 */
proto.proto.EngineStart.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.EngineStart} returns this
 */
proto.proto.EngineStart.prototype.setPin = function(value) {
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
proto.proto.EngineStop.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.EngineStop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.EngineStop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.EngineStop.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.EngineStop}
 */
proto.proto.EngineStop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.EngineStop;
  return proto.proto.EngineStop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.EngineStop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.EngineStop}
 */
proto.proto.EngineStop.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.EngineStop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.EngineStop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.EngineStop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.EngineStop.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.SunroofOpen.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SunroofOpen.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SunroofOpen} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SunroofOpen.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.proto.SunroofOpen}
 */
proto.proto.SunroofOpen.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SunroofOpen;
  return proto.proto.SunroofOpen.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SunroofOpen} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SunroofOpen}
 */
proto.proto.SunroofOpen.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
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
proto.proto.SunroofOpen.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SunroofOpen.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SunroofOpen} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SunroofOpen.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pin = 1;
 * @return {string}
 */
proto.proto.SunroofOpen.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SunroofOpen} returns this
 */
proto.proto.SunroofOpen.prototype.setPin = function(value) {
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
proto.proto.SunroofClose.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SunroofClose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SunroofClose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SunroofClose.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.SunroofClose}
 */
proto.proto.SunroofClose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SunroofClose;
  return proto.proto.SunroofClose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SunroofClose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SunroofClose}
 */
proto.proto.SunroofClose.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.SunroofClose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SunroofClose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SunroofClose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SunroofClose.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.SunroofLift.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SunroofLift.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SunroofLift} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SunroofLift.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.proto.SunroofLift}
 */
proto.proto.SunroofLift.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SunroofLift;
  return proto.proto.SunroofLift.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SunroofLift} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SunroofLift}
 */
proto.proto.SunroofLift.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
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
proto.proto.SunroofLift.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SunroofLift.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SunroofLift} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SunroofLift.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pin = 1;
 * @return {string}
 */
proto.proto.SunroofLift.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SunroofLift} returns this
 */
proto.proto.SunroofLift.prototype.setPin = function(value) {
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
proto.proto.SunroofMove.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SunroofMove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SunroofMove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SunroofMove.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sunroof: (f = msg.getSunroof()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    sunroofBlindFront: (f = msg.getSunroofBlindFront()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    sunroofBlindRear: (f = msg.getSunroofBlindRear()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
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
 * @return {!proto.proto.SunroofMove}
 */
proto.proto.SunroofMove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SunroofMove;
  return proto.proto.SunroofMove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SunroofMove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SunroofMove}
 */
proto.proto.SunroofMove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setSunroof(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setSunroofBlindFront(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setSunroofBlindRear(value);
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
proto.proto.SunroofMove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SunroofMove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SunroofMove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SunroofMove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSunroof();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getSunroofBlindFront();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getSunroofBlindRear();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string pin = 1;
 * @return {string}
 */
proto.proto.SunroofMove.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.SunroofMove} returns this
 */
proto.proto.SunroofMove.prototype.setPin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int32Value sunroof = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.SunroofMove.prototype.getSunroof = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.SunroofMove} returns this
*/
proto.proto.SunroofMove.prototype.setSunroof = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.SunroofMove} returns this
 */
proto.proto.SunroofMove.prototype.clearSunroof = function() {
  return this.setSunroof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SunroofMove.prototype.hasSunroof = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int32Value sunroof_blind_front = 3;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.SunroofMove.prototype.getSunroofBlindFront = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.SunroofMove} returns this
*/
proto.proto.SunroofMove.prototype.setSunroofBlindFront = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.SunroofMove} returns this
 */
proto.proto.SunroofMove.prototype.clearSunroofBlindFront = function() {
  return this.setSunroofBlindFront(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SunroofMove.prototype.hasSunroofBlindFront = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int32Value sunroof_blind_rear = 4;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.SunroofMove.prototype.getSunroofBlindRear = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.SunroofMove} returns this
*/
proto.proto.SunroofMove.prototype.setSunroofBlindRear = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.SunroofMove} returns this
 */
proto.proto.SunroofMove.prototype.clearSunroofBlindRear = function() {
  return this.setSunroofBlindRear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.SunroofMove.prototype.hasSunroofBlindRear = function() {
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
proto.proto.WindowsOpen.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WindowsOpen.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WindowsOpen} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WindowsOpen.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.proto.WindowsOpen}
 */
proto.proto.WindowsOpen.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WindowsOpen;
  return proto.proto.WindowsOpen.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WindowsOpen} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WindowsOpen}
 */
proto.proto.WindowsOpen.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
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
proto.proto.WindowsOpen.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WindowsOpen.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WindowsOpen} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WindowsOpen.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pin = 1;
 * @return {string}
 */
proto.proto.WindowsOpen.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.WindowsOpen} returns this
 */
proto.proto.WindowsOpen.prototype.setPin = function(value) {
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
proto.proto.WindowsClose.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WindowsClose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WindowsClose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WindowsClose.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.WindowsClose}
 */
proto.proto.WindowsClose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WindowsClose;
  return proto.proto.WindowsClose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WindowsClose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WindowsClose}
 */
proto.proto.WindowsClose.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.WindowsClose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WindowsClose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WindowsClose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WindowsClose.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.WindowsVentilate.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WindowsVentilate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WindowsVentilate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WindowsVentilate.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.proto.WindowsVentilate}
 */
proto.proto.WindowsVentilate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WindowsVentilate;
  return proto.proto.WindowsVentilate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WindowsVentilate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WindowsVentilate}
 */
proto.proto.WindowsVentilate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
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
proto.proto.WindowsVentilate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WindowsVentilate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WindowsVentilate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WindowsVentilate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pin = 1;
 * @return {string}
 */
proto.proto.WindowsVentilate.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.WindowsVentilate} returns this
 */
proto.proto.WindowsVentilate.prototype.setPin = function(value) {
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
proto.proto.WindowsMove.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WindowsMove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WindowsMove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WindowsMove.toObject = function(includeInstance, msg) {
  var f, obj = {
    pin: jspb.Message.getFieldWithDefault(msg, 1, ""),
    frontLeft: (f = msg.getFrontLeft()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    frontRight: (f = msg.getFrontRight()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    rearBlind: (f = msg.getRearBlind()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    rearLeft: (f = msg.getRearLeft()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    rearLeftBlind: (f = msg.getRearLeftBlind()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    rearRight: (f = msg.getRearRight()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    rearRightBlind: (f = msg.getRearRightBlind()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
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
 * @return {!proto.proto.WindowsMove}
 */
proto.proto.WindowsMove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WindowsMove;
  return proto.proto.WindowsMove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WindowsMove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WindowsMove}
 */
proto.proto.WindowsMove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPin(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setFrontLeft(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setFrontRight(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setRearBlind(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setRearLeft(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setRearLeftBlind(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setRearRight(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setRearRightBlind(value);
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
proto.proto.WindowsMove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WindowsMove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WindowsMove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WindowsMove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrontLeft();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getFrontRight();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getRearBlind();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getRearLeft();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getRearLeftBlind();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getRearRight();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getRearRightBlind();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string pin = 1;
 * @return {string}
 */
proto.proto.WindowsMove.prototype.getPin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.WindowsMove} returns this
 */
proto.proto.WindowsMove.prototype.setPin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int32Value front_left = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.WindowsMove.prototype.getFrontLeft = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.WindowsMove} returns this
*/
proto.proto.WindowsMove.prototype.setFrontLeft = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.WindowsMove} returns this
 */
proto.proto.WindowsMove.prototype.clearFrontLeft = function() {
  return this.setFrontLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WindowsMove.prototype.hasFrontLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int32Value front_right = 3;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.WindowsMove.prototype.getFrontRight = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.WindowsMove} returns this
*/
proto.proto.WindowsMove.prototype.setFrontRight = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.WindowsMove} returns this
 */
proto.proto.WindowsMove.prototype.clearFrontRight = function() {
  return this.setFrontRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WindowsMove.prototype.hasFrontRight = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int32Value rear_blind = 4;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.WindowsMove.prototype.getRearBlind = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.WindowsMove} returns this
*/
proto.proto.WindowsMove.prototype.setRearBlind = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.WindowsMove} returns this
 */
proto.proto.WindowsMove.prototype.clearRearBlind = function() {
  return this.setRearBlind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WindowsMove.prototype.hasRearBlind = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int32Value rear_left = 5;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.WindowsMove.prototype.getRearLeft = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.WindowsMove} returns this
*/
proto.proto.WindowsMove.prototype.setRearLeft = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.WindowsMove} returns this
 */
proto.proto.WindowsMove.prototype.clearRearLeft = function() {
  return this.setRearLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WindowsMove.prototype.hasRearLeft = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int32Value rear_left_blind = 6;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.WindowsMove.prototype.getRearLeftBlind = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.WindowsMove} returns this
*/
proto.proto.WindowsMove.prototype.setRearLeftBlind = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.WindowsMove} returns this
 */
proto.proto.WindowsMove.prototype.clearRearLeftBlind = function() {
  return this.setRearLeftBlind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WindowsMove.prototype.hasRearLeftBlind = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Int32Value rear_right = 7;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.WindowsMove.prototype.getRearRight = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 7));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.WindowsMove} returns this
*/
proto.proto.WindowsMove.prototype.setRearRight = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.WindowsMove} returns this
 */
proto.proto.WindowsMove.prototype.clearRearRight = function() {
  return this.setRearRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WindowsMove.prototype.hasRearRight = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Int32Value rear_right_blind = 8;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.WindowsMove.prototype.getRearRightBlind = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 8));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.WindowsMove} returns this
*/
proto.proto.WindowsMove.prototype.setRearRightBlind = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.WindowsMove} returns this
 */
proto.proto.WindowsMove.prototype.clearRearRightBlind = function() {
  return this.setRearRightBlind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.WindowsMove.prototype.hasRearRightBlind = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.proto.SpeedalertStart.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpeedalertStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpeedalertStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpeedalertStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    threshold: jspb.Message.getFieldWithDefault(msg, 1, 0),
    alertEndTime: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.proto.SpeedalertStart}
 */
proto.proto.SpeedalertStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpeedalertStart;
  return proto.proto.SpeedalertStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpeedalertStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpeedalertStart}
 */
proto.proto.SpeedalertStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setThreshold(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAlertEndTime(value);
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
proto.proto.SpeedalertStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpeedalertStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpeedalertStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpeedalertStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThreshold();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAlertEndTime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int32 threshold = 1;
 * @return {number}
 */
proto.proto.SpeedalertStart.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpeedalertStart} returns this
 */
proto.proto.SpeedalertStart.prototype.setThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 alert_end_time = 2;
 * @return {number}
 */
proto.proto.SpeedalertStart.prototype.getAlertEndTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SpeedalertStart} returns this
 */
proto.proto.SpeedalertStart.prototype.setAlertEndTime = function(value) {
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
proto.proto.SpeedalertStop.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SpeedalertStop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SpeedalertStop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpeedalertStop.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.SpeedalertStop}
 */
proto.proto.SpeedalertStop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SpeedalertStop;
  return proto.proto.SpeedalertStop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SpeedalertStop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SpeedalertStop}
 */
proto.proto.SpeedalertStop.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.SpeedalertStop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SpeedalertStop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SpeedalertStop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SpeedalertStop.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.ZEVPreconditioningStart.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ZEVPreconditioningStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ZEVPreconditioningStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ZEVPreconditioningStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    departureTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.proto.ZEVPreconditioningStart}
 */
proto.proto.ZEVPreconditioningStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ZEVPreconditioningStart;
  return proto.proto.ZEVPreconditioningStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ZEVPreconditioningStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ZEVPreconditioningStart}
 */
proto.proto.ZEVPreconditioningStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDepartureTime(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.ZEVPreconditioningType} */ (reader.readEnum());
      msg.setType(value);
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
proto.proto.ZEVPreconditioningStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ZEVPreconditioningStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ZEVPreconditioningStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ZEVPreconditioningStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepartureTime();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int32 departure_time = 1;
 * @return {number}
 */
proto.proto.ZEVPreconditioningStart.prototype.getDepartureTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ZEVPreconditioningStart} returns this
 */
proto.proto.ZEVPreconditioningStart.prototype.setDepartureTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ZEVPreconditioningType type = 2;
 * @return {!proto.proto.ZEVPreconditioningType}
 */
proto.proto.ZEVPreconditioningStart.prototype.getType = function() {
  return /** @type {!proto.proto.ZEVPreconditioningType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.ZEVPreconditioningType} value
 * @return {!proto.proto.ZEVPreconditioningStart} returns this
 */
proto.proto.ZEVPreconditioningStart.prototype.setType = function(value) {
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
proto.proto.ZEVPreconditioningStop.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ZEVPreconditioningStop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ZEVPreconditioningStop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ZEVPreconditioningStop.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.proto.ZEVPreconditioningStop}
 */
proto.proto.ZEVPreconditioningStop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ZEVPreconditioningStop;
  return proto.proto.ZEVPreconditioningStop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ZEVPreconditioningStop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ZEVPreconditioningStop}
 */
proto.proto.ZEVPreconditioningStop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.proto.ZEVPreconditioningType} */ (reader.readEnum());
      msg.setType(value);
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
proto.proto.ZEVPreconditioningStop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ZEVPreconditioningStop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ZEVPreconditioningStop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ZEVPreconditioningStop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional ZEVPreconditioningType type = 2;
 * @return {!proto.proto.ZEVPreconditioningType}
 */
proto.proto.ZEVPreconditioningStop.prototype.getType = function() {
  return /** @type {!proto.proto.ZEVPreconditioningType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.ZEVPreconditioningType} value
 * @return {!proto.proto.ZEVPreconditioningStop} returns this
 */
proto.proto.ZEVPreconditioningStop.prototype.setType = function(value) {
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
proto.proto.ZEVPreconditioningConfigure.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ZEVPreconditioningConfigure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ZEVPreconditioningConfigure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ZEVPreconditioningConfigure.toObject = function(includeInstance, msg) {
  var f, obj = {
    departureTimeMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    departureTime: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.proto.ZEVPreconditioningConfigure}
 */
proto.proto.ZEVPreconditioningConfigure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ZEVPreconditioningConfigure;
  return proto.proto.ZEVPreconditioningConfigure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ZEVPreconditioningConfigure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ZEVPreconditioningConfigure}
 */
proto.proto.ZEVPreconditioningConfigure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.ZEVPreconditioningConfigure.DepartureTimeMode} */ (reader.readEnum());
      msg.setDepartureTimeMode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDepartureTime(value);
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
proto.proto.ZEVPreconditioningConfigure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ZEVPreconditioningConfigure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ZEVPreconditioningConfigure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ZEVPreconditioningConfigure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepartureTimeMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDepartureTime();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.ZEVPreconditioningConfigure.DepartureTimeMode = {
  DISABLED: 0,
  SINGLE_DEPARTURE: 1,
  WEEKLY_DEPARTURE: 2
};

/**
 * optional DepartureTimeMode departure_time_mode = 1;
 * @return {!proto.proto.ZEVPreconditioningConfigure.DepartureTimeMode}
 */
proto.proto.ZEVPreconditioningConfigure.prototype.getDepartureTimeMode = function() {
  return /** @type {!proto.proto.ZEVPreconditioningConfigure.DepartureTimeMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.ZEVPreconditioningConfigure.DepartureTimeMode} value
 * @return {!proto.proto.ZEVPreconditioningConfigure} returns this
 */
proto.proto.ZEVPreconditioningConfigure.prototype.setDepartureTimeMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 departure_time = 3;
 * @return {number}
 */
proto.proto.ZEVPreconditioningConfigure.prototype.getDepartureTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ZEVPreconditioningConfigure} returns this
 */
proto.proto.ZEVPreconditioningConfigure.prototype.setDepartureTime = function(value) {
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
proto.proto.ZEVPreconditioningConfigureSeats.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ZEVPreconditioningConfigureSeats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ZEVPreconditioningConfigureSeats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ZEVPreconditioningConfigureSeats.toObject = function(includeInstance, msg) {
  var f, obj = {
    frontLeft: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    frontRight: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    rearLeft: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    rearRight: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.proto.ZEVPreconditioningConfigureSeats}
 */
proto.proto.ZEVPreconditioningConfigureSeats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ZEVPreconditioningConfigureSeats;
  return proto.proto.ZEVPreconditioningConfigureSeats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ZEVPreconditioningConfigureSeats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ZEVPreconditioningConfigureSeats}
 */
proto.proto.ZEVPreconditioningConfigureSeats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrontLeft(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrontRight(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearLeft(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRearRight(value);
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
proto.proto.ZEVPreconditioningConfigureSeats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ZEVPreconditioningConfigureSeats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ZEVPreconditioningConfigureSeats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ZEVPreconditioningConfigureSeats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrontLeft();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFrontRight();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getRearLeft();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRearRight();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool front_left = 1;
 * @return {boolean}
 */
proto.proto.ZEVPreconditioningConfigureSeats.prototype.getFrontLeft = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ZEVPreconditioningConfigureSeats} returns this
 */
proto.proto.ZEVPreconditioningConfigureSeats.prototype.setFrontLeft = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool front_right = 2;
 * @return {boolean}
 */
proto.proto.ZEVPreconditioningConfigureSeats.prototype.getFrontRight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ZEVPreconditioningConfigureSeats} returns this
 */
proto.proto.ZEVPreconditioningConfigureSeats.prototype.setFrontRight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool rear_left = 3;
 * @return {boolean}
 */
proto.proto.ZEVPreconditioningConfigureSeats.prototype.getRearLeft = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ZEVPreconditioningConfigureSeats} returns this
 */
proto.proto.ZEVPreconditioningConfigureSeats.prototype.setRearLeft = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool rear_right = 4;
 * @return {boolean}
 */
proto.proto.ZEVPreconditioningConfigureSeats.prototype.getRearRight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.proto.ZEVPreconditioningConfigureSeats} returns this
 */
proto.proto.ZEVPreconditioningConfigureSeats.prototype.setRearRight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.proto.BatteryChargeProgramConfigure.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.BatteryChargeProgramConfigure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.BatteryChargeProgramConfigure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.BatteryChargeProgramConfigure.toObject = function(includeInstance, msg) {
  var f, obj = {
    chargeProgram: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.proto.BatteryChargeProgramConfigure}
 */
proto.proto.BatteryChargeProgramConfigure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.BatteryChargeProgramConfigure;
  return proto.proto.BatteryChargeProgramConfigure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.BatteryChargeProgramConfigure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.BatteryChargeProgramConfigure}
 */
proto.proto.BatteryChargeProgramConfigure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.BatteryChargeProgramConfigure.ChargeProgram} */ (reader.readEnum());
      msg.setChargeProgram(value);
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
proto.proto.BatteryChargeProgramConfigure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.BatteryChargeProgramConfigure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.BatteryChargeProgramConfigure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.BatteryChargeProgramConfigure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChargeProgram();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.BatteryChargeProgramConfigure.ChargeProgram = {
  DEFAULT: 0,
  INSTANT: 1
};

/**
 * optional ChargeProgram charge_program = 1;
 * @return {!proto.proto.BatteryChargeProgramConfigure.ChargeProgram}
 */
proto.proto.BatteryChargeProgramConfigure.prototype.getChargeProgram = function() {
  return /** @type {!proto.proto.BatteryChargeProgramConfigure.ChargeProgram} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.BatteryChargeProgramConfigure.ChargeProgram} value
 * @return {!proto.proto.BatteryChargeProgramConfigure} returns this
 */
proto.proto.BatteryChargeProgramConfigure.prototype.setChargeProgram = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.proto.BatteryMaxSocConfigure.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.BatteryMaxSocConfigure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.BatteryMaxSocConfigure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.BatteryMaxSocConfigure.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxSoc: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.proto.BatteryMaxSocConfigure}
 */
proto.proto.BatteryMaxSocConfigure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.BatteryMaxSocConfigure;
  return proto.proto.BatteryMaxSocConfigure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.BatteryMaxSocConfigure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.BatteryMaxSocConfigure}
 */
proto.proto.BatteryMaxSocConfigure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxSoc(value);
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
proto.proto.BatteryMaxSocConfigure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.BatteryMaxSocConfigure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.BatteryMaxSocConfigure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.BatteryMaxSocConfigure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxSoc();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 max_soc = 1;
 * @return {number}
 */
proto.proto.BatteryMaxSocConfigure.prototype.getMaxSoc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.BatteryMaxSocConfigure} returns this
 */
proto.proto.BatteryMaxSocConfigure.prototype.setMaxSoc = function(value) {
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
proto.proto.ChargeProgramConfigure.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeProgramConfigure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeProgramConfigure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeProgramConfigure.toObject = function(includeInstance, msg) {
  var f, obj = {
    chargeProgram: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxSoc: (f = msg.getMaxSoc()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    autoUnlock: (f = msg.getAutoUnlock()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    locationBasedCharging: (f = msg.getLocationBasedCharging()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    clockTimer: (f = msg.getClockTimer()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    ecoCharging: (f = msg.getEcoCharging()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.proto.ChargeProgramConfigure}
 */
proto.proto.ChargeProgramConfigure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeProgramConfigure;
  return proto.proto.ChargeProgramConfigure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeProgramConfigure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeProgramConfigure}
 */
proto.proto.ChargeProgramConfigure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.ChargeProgramConfigure.ChargeProgram} */ (reader.readEnum());
      msg.setChargeProgram(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setMaxSoc(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAutoUnlock(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setLocationBasedCharging(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setClockTimer(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
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
proto.proto.ChargeProgramConfigure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeProgramConfigure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeProgramConfigure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeProgramConfigure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChargeProgram();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMaxSoc();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getAutoUnlock();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getLocationBasedCharging();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getClockTimer();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getEcoCharging();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.ChargeProgramConfigure.ChargeProgram = {
  DEFAULT_CHARGE_PROGRAM: 0,
  HOME_CHARGE_PROGRAM: 2,
  WORK_CHARGE_PROGRAM: 3
};

/**
 * optional ChargeProgram charge_program = 1;
 * @return {!proto.proto.ChargeProgramConfigure.ChargeProgram}
 */
proto.proto.ChargeProgramConfigure.prototype.getChargeProgram = function() {
  return /** @type {!proto.proto.ChargeProgramConfigure.ChargeProgram} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.ChargeProgramConfigure.ChargeProgram} value
 * @return {!proto.proto.ChargeProgramConfigure} returns this
 */
proto.proto.ChargeProgramConfigure.prototype.setChargeProgram = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Int32Value max_soc = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.ChargeProgramConfigure.prototype.getMaxSoc = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.ChargeProgramConfigure} returns this
*/
proto.proto.ChargeProgramConfigure.prototype.setMaxSoc = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargeProgramConfigure} returns this
 */
proto.proto.ChargeProgramConfigure.prototype.clearMaxSoc = function() {
  return this.setMaxSoc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargeProgramConfigure.prototype.hasMaxSoc = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.BoolValue auto_unlock = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.proto.ChargeProgramConfigure.prototype.getAutoUnlock = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.proto.ChargeProgramConfigure} returns this
*/
proto.proto.ChargeProgramConfigure.prototype.setAutoUnlock = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargeProgramConfigure} returns this
 */
proto.proto.ChargeProgramConfigure.prototype.clearAutoUnlock = function() {
  return this.setAutoUnlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargeProgramConfigure.prototype.hasAutoUnlock = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.BoolValue location_based_charging = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.proto.ChargeProgramConfigure.prototype.getLocationBasedCharging = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.proto.ChargeProgramConfigure} returns this
*/
proto.proto.ChargeProgramConfigure.prototype.setLocationBasedCharging = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargeProgramConfigure} returns this
 */
proto.proto.ChargeProgramConfigure.prototype.clearLocationBasedCharging = function() {
  return this.setLocationBasedCharging(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargeProgramConfigure.prototype.hasLocationBasedCharging = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.BoolValue clock_timer = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.proto.ChargeProgramConfigure.prototype.getClockTimer = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.proto.ChargeProgramConfigure} returns this
*/
proto.proto.ChargeProgramConfigure.prototype.setClockTimer = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargeProgramConfigure} returns this
 */
proto.proto.ChargeProgramConfigure.prototype.clearClockTimer = function() {
  return this.setClockTimer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargeProgramConfigure.prototype.hasClockTimer = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.BoolValue eco_charging = 7;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.proto.ChargeProgramConfigure.prototype.getEcoCharging = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 7));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.proto.ChargeProgramConfigure} returns this
*/
proto.proto.ChargeProgramConfigure.prototype.setEcoCharging = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargeProgramConfigure} returns this
 */
proto.proto.ChargeProgramConfigure.prototype.clearEcoCharging = function() {
  return this.setEcoCharging(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargeProgramConfigure.prototype.hasEcoCharging = function() {
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
proto.proto.ChargeControlConfigure.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeControlConfigure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeControlConfigure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeControlConfigure.toObject = function(includeInstance, msg) {
  var f, obj = {
    biChargingEnabled: (f = msg.getBiChargingEnabled()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    chargingPower: (f = msg.getChargingPower()) && google_protobuf_wrappers_pb.FloatValue.toObject(includeInstance, f),
    minSoc: (f = msg.getMinSoc()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
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
 * @return {!proto.proto.ChargeControlConfigure}
 */
proto.proto.ChargeControlConfigure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeControlConfigure;
  return proto.proto.ChargeControlConfigure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeControlConfigure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeControlConfigure}
 */
proto.proto.ChargeControlConfigure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setBiChargingEnabled(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.FloatValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.FloatValue.deserializeBinaryFromReader);
      msg.setChargingPower(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setMinSoc(value);
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
proto.proto.ChargeControlConfigure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeControlConfigure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeControlConfigure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeControlConfigure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBiChargingEnabled();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getChargingPower();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.FloatValue.serializeBinaryToWriter
    );
  }
  f = message.getMinSoc();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.BoolValue bi_charging_enabled = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.proto.ChargeControlConfigure.prototype.getBiChargingEnabled = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.proto.ChargeControlConfigure} returns this
*/
proto.proto.ChargeControlConfigure.prototype.setBiChargingEnabled = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargeControlConfigure} returns this
 */
proto.proto.ChargeControlConfigure.prototype.clearBiChargingEnabled = function() {
  return this.setBiChargingEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargeControlConfigure.prototype.hasBiChargingEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FloatValue charging_power = 2;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.proto.ChargeControlConfigure.prototype.getChargingPower = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.FloatValue, 2));
};


/**
 * @param {?proto.google.protobuf.FloatValue|undefined} value
 * @return {!proto.proto.ChargeControlConfigure} returns this
*/
proto.proto.ChargeControlConfigure.prototype.setChargingPower = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargeControlConfigure} returns this
 */
proto.proto.ChargeControlConfigure.prototype.clearChargingPower = function() {
  return this.setChargingPower(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargeControlConfigure.prototype.hasChargingPower = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int32Value min_soc = 3;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.ChargeControlConfigure.prototype.getMinSoc = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.ChargeControlConfigure} returns this
*/
proto.proto.ChargeControlConfigure.prototype.setMinSoc = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.ChargeControlConfigure} returns this
 */
proto.proto.ChargeControlConfigure.prototype.clearMinSoc = function() {
  return this.setMinSoc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.ChargeControlConfigure.prototype.hasMinSoc = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChargeOptConfigure.repeatedFields_ = [1,2];



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
proto.proto.ChargeOptConfigure.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeOptConfigure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeOptConfigure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeOptConfigure.toObject = function(includeInstance, msg) {
  var f, obj = {
    weekdayTariffList: jspb.Message.toObjectList(msg.getWeekdayTariffList(),
    proto.proto.ChargeOptConfigure.Tariff.toObject, includeInstance),
    weekendTariffList: jspb.Message.toObjectList(msg.getWeekendTariffList(),
    proto.proto.ChargeOptConfigure.Tariff.toObject, includeInstance)
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
 * @return {!proto.proto.ChargeOptConfigure}
 */
proto.proto.ChargeOptConfigure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeOptConfigure;
  return proto.proto.ChargeOptConfigure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeOptConfigure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeOptConfigure}
 */
proto.proto.ChargeOptConfigure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ChargeOptConfigure.Tariff;
      reader.readMessage(value,proto.proto.ChargeOptConfigure.Tariff.deserializeBinaryFromReader);
      msg.addWeekdayTariff(value);
      break;
    case 2:
      var value = new proto.proto.ChargeOptConfigure.Tariff;
      reader.readMessage(value,proto.proto.ChargeOptConfigure.Tariff.deserializeBinaryFromReader);
      msg.addWeekendTariff(value);
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
proto.proto.ChargeOptConfigure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeOptConfigure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeOptConfigure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeOptConfigure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWeekdayTariffList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.ChargeOptConfigure.Tariff.serializeBinaryToWriter
    );
  }
  f = message.getWeekendTariffList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.ChargeOptConfigure.Tariff.serializeBinaryToWriter
    );
  }
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
proto.proto.ChargeOptConfigure.Tariff.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeOptConfigure.Tariff.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeOptConfigure.Tariff} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeOptConfigure.Tariff.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.ChargeOptConfigure.Tariff}
 */
proto.proto.ChargeOptConfigure.Tariff.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeOptConfigure.Tariff;
  return proto.proto.ChargeOptConfigure.Tariff.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeOptConfigure.Tariff} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeOptConfigure.Tariff}
 */
proto.proto.ChargeOptConfigure.Tariff.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.ChargeOptConfigure.Tariff.Rate} */ (reader.readEnum());
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
proto.proto.ChargeOptConfigure.Tariff.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeOptConfigure.Tariff.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeOptConfigure.Tariff} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeOptConfigure.Tariff.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRate();
  if (f !== 0.0) {
    writer.writeEnum(
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
 * @enum {number}
 */
proto.proto.ChargeOptConfigure.Tariff.Rate = {
  INVALID_PRICE: 0,
  LOW_PRICE: 33,
  NORMAL_PRICE: 44,
  HIGH_PRICE: 66
};

/**
 * optional Rate rate = 1;
 * @return {!proto.proto.ChargeOptConfigure.Tariff.Rate}
 */
proto.proto.ChargeOptConfigure.Tariff.prototype.getRate = function() {
  return /** @type {!proto.proto.ChargeOptConfigure.Tariff.Rate} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.ChargeOptConfigure.Tariff.Rate} value
 * @return {!proto.proto.ChargeOptConfigure.Tariff} returns this
 */
proto.proto.ChargeOptConfigure.Tariff.prototype.setRate = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 time = 2;
 * @return {number}
 */
proto.proto.ChargeOptConfigure.Tariff.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargeOptConfigure.Tariff} returns this
 */
proto.proto.ChargeOptConfigure.Tariff.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Tariff weekday_tariff = 1;
 * @return {!Array<!proto.proto.ChargeOptConfigure.Tariff>}
 */
proto.proto.ChargeOptConfigure.prototype.getWeekdayTariffList = function() {
  return /** @type{!Array<!proto.proto.ChargeOptConfigure.Tariff>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ChargeOptConfigure.Tariff, 1));
};


/**
 * @param {!Array<!proto.proto.ChargeOptConfigure.Tariff>} value
 * @return {!proto.proto.ChargeOptConfigure} returns this
*/
proto.proto.ChargeOptConfigure.prototype.setWeekdayTariffList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.ChargeOptConfigure.Tariff=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ChargeOptConfigure.Tariff}
 */
proto.proto.ChargeOptConfigure.prototype.addWeekdayTariff = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ChargeOptConfigure.Tariff, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChargeOptConfigure} returns this
 */
proto.proto.ChargeOptConfigure.prototype.clearWeekdayTariffList = function() {
  return this.setWeekdayTariffList([]);
};


/**
 * repeated Tariff weekend_tariff = 2;
 * @return {!Array<!proto.proto.ChargeOptConfigure.Tariff>}
 */
proto.proto.ChargeOptConfigure.prototype.getWeekendTariffList = function() {
  return /** @type{!Array<!proto.proto.ChargeOptConfigure.Tariff>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ChargeOptConfigure.Tariff, 2));
};


/**
 * @param {!Array<!proto.proto.ChargeOptConfigure.Tariff>} value
 * @return {!proto.proto.ChargeOptConfigure} returns this
*/
proto.proto.ChargeOptConfigure.prototype.setWeekendTariffList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.ChargeOptConfigure.Tariff=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ChargeOptConfigure.Tariff}
 */
proto.proto.ChargeOptConfigure.prototype.addWeekendTariff = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.ChargeOptConfigure.Tariff, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChargeOptConfigure} returns this
 */
proto.proto.ChargeOptConfigure.prototype.clearWeekendTariffList = function() {
  return this.setWeekendTariffList([]);
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
proto.proto.ChargeOptStart.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeOptStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeOptStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeOptStart.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.ChargeOptStart}
 */
proto.proto.ChargeOptStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeOptStart;
  return proto.proto.ChargeOptStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeOptStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeOptStart}
 */
proto.proto.ChargeOptStart.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.ChargeOptStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeOptStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeOptStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeOptStart.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.ChargeOptStop.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeOptStop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeOptStop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeOptStop.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.ChargeOptStop}
 */
proto.proto.ChargeOptStop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeOptStop;
  return proto.proto.ChargeOptStop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeOptStop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeOptStop}
 */
proto.proto.ChargeOptStop.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.ChargeOptStop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeOptStop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeOptStop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeOptStop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.TemperatureConfigure.repeatedFields_ = [1];



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
proto.proto.TemperatureConfigure.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TemperatureConfigure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TemperatureConfigure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemperatureConfigure.toObject = function(includeInstance, msg) {
  var f, obj = {
    temperaturePointsList: jspb.Message.toObjectList(msg.getTemperaturePointsList(),
    proto.proto.TemperatureConfigure.TemperaturePoint.toObject, includeInstance)
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
 * @return {!proto.proto.TemperatureConfigure}
 */
proto.proto.TemperatureConfigure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TemperatureConfigure;
  return proto.proto.TemperatureConfigure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TemperatureConfigure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TemperatureConfigure}
 */
proto.proto.TemperatureConfigure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.TemperatureConfigure.TemperaturePoint;
      reader.readMessage(value,proto.proto.TemperatureConfigure.TemperaturePoint.deserializeBinaryFromReader);
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
proto.proto.TemperatureConfigure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TemperatureConfigure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TemperatureConfigure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemperatureConfigure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemperaturePointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.TemperatureConfigure.TemperaturePoint.serializeBinaryToWriter
    );
  }
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
proto.proto.TemperatureConfigure.TemperaturePoint.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TemperatureConfigure.TemperaturePoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TemperatureConfigure.TemperaturePoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemperatureConfigure.TemperaturePoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    zone: jspb.Message.getFieldWithDefault(msg, 1, 0),
    temperatureInCelsius: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.proto.TemperatureConfigure.TemperaturePoint}
 */
proto.proto.TemperatureConfigure.TemperaturePoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TemperatureConfigure.TemperaturePoint;
  return proto.proto.TemperatureConfigure.TemperaturePoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TemperatureConfigure.TemperaturePoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TemperatureConfigure.TemperaturePoint}
 */
proto.proto.TemperatureConfigure.TemperaturePoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.TemperatureConfigure.TemperaturePoint.Zone} */ (reader.readEnum());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTemperatureInCelsius(value);
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
proto.proto.TemperatureConfigure.TemperaturePoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TemperatureConfigure.TemperaturePoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TemperatureConfigure.TemperaturePoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TemperatureConfigure.TemperaturePoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZone();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTemperatureInCelsius();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.TemperatureConfigure.TemperaturePoint.Zone = {
  UNKNOWN: 0,
  FRONTLEFT: 1,
  FRONTRIGHT: 2,
  FRONTCENTER: 3,
  REARLEFT: 4,
  REARRIGHT: 5,
  REARCENTER: 6,
  REAR2LEFT: 7,
  REAR2RIGHT: 8,
  REAR2CENTER: 9,
  UNKNOWN_ZONE: 0,
  FRONT_LEFT: 1,
  FRONT_RIGHT: 2,
  FRONT_CENTER: 3,
  REAR_LEFT: 4,
  REAR_RIGHT: 5,
  REAR_CENTER: 6,
  REAR_2_LEFT: 7,
  REAR_2_RIGHT: 8,
  REAR_2_CENTER: 9
};

/**
 * optional Zone zone = 1;
 * @return {!proto.proto.TemperatureConfigure.TemperaturePoint.Zone}
 */
proto.proto.TemperatureConfigure.TemperaturePoint.prototype.getZone = function() {
  return /** @type {!proto.proto.TemperatureConfigure.TemperaturePoint.Zone} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.TemperatureConfigure.TemperaturePoint.Zone} value
 * @return {!proto.proto.TemperatureConfigure.TemperaturePoint} returns this
 */
proto.proto.TemperatureConfigure.TemperaturePoint.prototype.setZone = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double temperature_in_celsius = 3;
 * @return {number}
 */
proto.proto.TemperatureConfigure.TemperaturePoint.prototype.getTemperatureInCelsius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TemperatureConfigure.TemperaturePoint} returns this
 */
proto.proto.TemperatureConfigure.TemperaturePoint.prototype.setTemperatureInCelsius = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated TemperaturePoint temperature_points = 1;
 * @return {!Array<!proto.proto.TemperatureConfigure.TemperaturePoint>}
 */
proto.proto.TemperatureConfigure.prototype.getTemperaturePointsList = function() {
  return /** @type{!Array<!proto.proto.TemperatureConfigure.TemperaturePoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.TemperatureConfigure.TemperaturePoint, 1));
};


/**
 * @param {!Array<!proto.proto.TemperatureConfigure.TemperaturePoint>} value
 * @return {!proto.proto.TemperatureConfigure} returns this
*/
proto.proto.TemperatureConfigure.prototype.setTemperaturePointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.TemperatureConfigure.TemperaturePoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.TemperatureConfigure.TemperaturePoint}
 */
proto.proto.TemperatureConfigure.prototype.addTemperaturePoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.TemperatureConfigure.TemperaturePoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.TemperatureConfigure} returns this
 */
proto.proto.TemperatureConfigure.prototype.clearTemperaturePointsList = function() {
  return this.setTemperaturePointsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.WeekProfileConfigure.repeatedFields_ = [1];



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
proto.proto.WeekProfileConfigure.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WeekProfileConfigure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WeekProfileConfigure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeekProfileConfigure.toObject = function(includeInstance, msg) {
  var f, obj = {
    weeklySetHuList: jspb.Message.toObjectList(msg.getWeeklySetHuList(),
    proto.proto.WeekProfileConfigure.WeeklySetHU.toObject, includeInstance)
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
 * @return {!proto.proto.WeekProfileConfigure}
 */
proto.proto.WeekProfileConfigure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WeekProfileConfigure;
  return proto.proto.WeekProfileConfigure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WeekProfileConfigure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WeekProfileConfigure}
 */
proto.proto.WeekProfileConfigure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.WeekProfileConfigure.WeeklySetHU;
      reader.readMessage(value,proto.proto.WeekProfileConfigure.WeeklySetHU.deserializeBinaryFromReader);
      msg.addWeeklySetHu(value);
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
proto.proto.WeekProfileConfigure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WeekProfileConfigure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WeekProfileConfigure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeekProfileConfigure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWeeklySetHuList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.WeekProfileConfigure.WeeklySetHU.serializeBinaryToWriter
    );
  }
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
proto.proto.WeekProfileConfigure.WeeklySetHU.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WeekProfileConfigure.WeeklySetHU.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WeekProfileConfigure.WeeklySetHU} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeekProfileConfigure.WeeklySetHU.toObject = function(includeInstance, msg) {
  var f, obj = {
    day: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.proto.WeekProfileConfigure.WeeklySetHU}
 */
proto.proto.WeekProfileConfigure.WeeklySetHU.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WeekProfileConfigure.WeeklySetHU;
  return proto.proto.WeekProfileConfigure.WeeklySetHU.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WeekProfileConfigure.WeeklySetHU} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WeekProfileConfigure.WeeklySetHU}
 */
proto.proto.WeekProfileConfigure.WeeklySetHU.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.WeekProfileConfigure.WeeklySetHU.Day} */ (reader.readEnum());
      msg.setDay(value);
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
proto.proto.WeekProfileConfigure.WeeklySetHU.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WeekProfileConfigure.WeeklySetHU.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WeekProfileConfigure.WeeklySetHU} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeekProfileConfigure.WeeklySetHU.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDay();
  if (f !== 0.0) {
    writer.writeEnum(
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
 * @enum {number}
 */
proto.proto.WeekProfileConfigure.WeeklySetHU.Day = {
  MONDAY: 0,
  TUESDAY: 1,
  WEDNESDAY: 2,
  THURSDAY: 3,
  FRIDAY: 4,
  SATURDAY: 5,
  SUNDAY: 6
};

/**
 * optional Day day = 1;
 * @return {!proto.proto.WeekProfileConfigure.WeeklySetHU.Day}
 */
proto.proto.WeekProfileConfigure.WeeklySetHU.prototype.getDay = function() {
  return /** @type {!proto.proto.WeekProfileConfigure.WeeklySetHU.Day} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.WeekProfileConfigure.WeeklySetHU.Day} value
 * @return {!proto.proto.WeekProfileConfigure.WeeklySetHU} returns this
 */
proto.proto.WeekProfileConfigure.WeeklySetHU.prototype.setDay = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 time = 2;
 * @return {number}
 */
proto.proto.WeekProfileConfigure.WeeklySetHU.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.WeekProfileConfigure.WeeklySetHU} returns this
 */
proto.proto.WeekProfileConfigure.WeeklySetHU.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated WeeklySetHU weekly_set_hu = 1;
 * @return {!Array<!proto.proto.WeekProfileConfigure.WeeklySetHU>}
 */
proto.proto.WeekProfileConfigure.prototype.getWeeklySetHuList = function() {
  return /** @type{!Array<!proto.proto.WeekProfileConfigure.WeeklySetHU>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.WeekProfileConfigure.WeeklySetHU, 1));
};


/**
 * @param {!Array<!proto.proto.WeekProfileConfigure.WeeklySetHU>} value
 * @return {!proto.proto.WeekProfileConfigure} returns this
*/
proto.proto.WeekProfileConfigure.prototype.setWeeklySetHuList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.WeekProfileConfigure.WeeklySetHU=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.WeekProfileConfigure.WeeklySetHU}
 */
proto.proto.WeekProfileConfigure.prototype.addWeeklySetHu = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.WeekProfileConfigure.WeeklySetHU, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.WeekProfileConfigure} returns this
 */
proto.proto.WeekProfileConfigure.prototype.clearWeeklySetHuList = function() {
  return this.setWeeklySetHuList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.WeekProfileConfigureV2.repeatedFields_ = [1];



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
proto.proto.WeekProfileConfigureV2.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WeekProfileConfigureV2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WeekProfileConfigureV2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeekProfileConfigureV2.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeProfilesList: jspb.Message.toObjectList(msg.getTimeProfilesList(),
    proto.proto.TimeProfile.toObject, includeInstance)
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
 * @return {!proto.proto.WeekProfileConfigureV2}
 */
proto.proto.WeekProfileConfigureV2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WeekProfileConfigureV2;
  return proto.proto.WeekProfileConfigureV2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WeekProfileConfigureV2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WeekProfileConfigureV2}
 */
proto.proto.WeekProfileConfigureV2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.TimeProfile;
      reader.readMessage(value,proto.proto.TimeProfile.deserializeBinaryFromReader);
      msg.addTimeProfiles(value);
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
proto.proto.WeekProfileConfigureV2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WeekProfileConfigureV2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WeekProfileConfigureV2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WeekProfileConfigureV2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.TimeProfile.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TimeProfile time_profiles = 1;
 * @return {!Array<!proto.proto.TimeProfile>}
 */
proto.proto.WeekProfileConfigureV2.prototype.getTimeProfilesList = function() {
  return /** @type{!Array<!proto.proto.TimeProfile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.TimeProfile, 1));
};


/**
 * @param {!Array<!proto.proto.TimeProfile>} value
 * @return {!proto.proto.WeekProfileConfigureV2} returns this
*/
proto.proto.WeekProfileConfigureV2.prototype.setTimeProfilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.TimeProfile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.TimeProfile}
 */
proto.proto.WeekProfileConfigureV2.prototype.addTimeProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.TimeProfile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.WeekProfileConfigureV2} returns this
 */
proto.proto.WeekProfileConfigureV2.prototype.clearTimeProfilesList = function() {
  return this.setTimeProfilesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.TimeProfile.repeatedFields_ = [4];



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
proto.proto.TimeProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TimeProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TimeProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TimeProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    identifier: (f = msg.getIdentifier()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    hour: (f = msg.getHour()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    minute: (f = msg.getMinute()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    daysList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    active: (f = msg.getActive()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    applicationIdentifier: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.proto.TimeProfile}
 */
proto.proto.TimeProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TimeProfile;
  return proto.proto.TimeProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TimeProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TimeProfile}
 */
proto.proto.TimeProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setIdentifier(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setHour(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setMinute(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.proto.TimeProfileDay>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDays(values[i]);
      }
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setActive(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setApplicationIdentifier(value);
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
proto.proto.TimeProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TimeProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TimeProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TimeProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getHour();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getMinute();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getDaysList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getActive();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getApplicationIdentifier();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional google.protobuf.Int32Value identifier = 1;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.TimeProfile.prototype.getIdentifier = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.TimeProfile} returns this
*/
proto.proto.TimeProfile.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TimeProfile} returns this
 */
proto.proto.TimeProfile.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TimeProfile.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int32Value hour = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.TimeProfile.prototype.getHour = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.TimeProfile} returns this
*/
proto.proto.TimeProfile.prototype.setHour = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TimeProfile} returns this
 */
proto.proto.TimeProfile.prototype.clearHour = function() {
  return this.setHour(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TimeProfile.prototype.hasHour = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int32Value minute = 3;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.proto.TimeProfile.prototype.getMinute = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.proto.TimeProfile} returns this
*/
proto.proto.TimeProfile.prototype.setMinute = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TimeProfile} returns this
 */
proto.proto.TimeProfile.prototype.clearMinute = function() {
  return this.setMinute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TimeProfile.prototype.hasMinute = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated TimeProfileDay days = 4;
 * @return {!Array<!proto.proto.TimeProfileDay>}
 */
proto.proto.TimeProfile.prototype.getDaysList = function() {
  return /** @type {!Array<!proto.proto.TimeProfileDay>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.proto.TimeProfileDay>} value
 * @return {!proto.proto.TimeProfile} returns this
 */
proto.proto.TimeProfile.prototype.setDaysList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.proto.TimeProfileDay} value
 * @param {number=} opt_index
 * @return {!proto.proto.TimeProfile} returns this
 */
proto.proto.TimeProfile.prototype.addDays = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.TimeProfile} returns this
 */
proto.proto.TimeProfile.prototype.clearDaysList = function() {
  return this.setDaysList([]);
};


/**
 * optional google.protobuf.BoolValue active = 5;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.proto.TimeProfile.prototype.getActive = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 5));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.proto.TimeProfile} returns this
*/
proto.proto.TimeProfile.prototype.setActive = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.proto.TimeProfile} returns this
 */
proto.proto.TimeProfile.prototype.clearActive = function() {
  return this.setActive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.proto.TimeProfile.prototype.hasActive = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 application_identifier = 6;
 * @return {number}
 */
proto.proto.TimeProfile.prototype.getApplicationIdentifier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TimeProfile} returns this
 */
proto.proto.TimeProfile.prototype.setApplicationIdentifier = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.proto.SigPosStart.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.SigPosStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.SigPosStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SigPosStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    hornRepeat: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hornType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lightType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sigposDuration: jspb.Message.getFieldWithDefault(msg, 4, 0),
    sigposType: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.proto.SigPosStart}
 */
proto.proto.SigPosStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.SigPosStart;
  return proto.proto.SigPosStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.SigPosStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.SigPosStart}
 */
proto.proto.SigPosStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHornRepeat(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.SigPosStart.HornType} */ (reader.readEnum());
      msg.setHornType(value);
      break;
    case 3:
      var value = /** @type {!proto.proto.SigPosStart.LightType} */ (reader.readEnum());
      msg.setLightType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSigposDuration(value);
      break;
    case 5:
      var value = /** @type {!proto.proto.SigPosStart.SigposType} */ (reader.readEnum());
      msg.setSigposType(value);
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
proto.proto.SigPosStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.SigPosStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.SigPosStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.SigPosStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHornRepeat();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getHornType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLightType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSigposDuration();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSigposType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.SigPosStart.HornType = {
  HORN_OFF: 0,
  HORN_LOW_VOLUME: 1,
  HORN_HIGH_VOLUME: 2
};

/**
 * @enum {number}
 */
proto.proto.SigPosStart.LightType = {
  LIGHT_OFF: 0,
  DIPPED_HEAD_LIGHT: 1,
  WARNING_LIGHT: 2
};

/**
 * @enum {number}
 */
proto.proto.SigPosStart.SigposType = {
  LIGHT_ONLY: 0,
  HORN_ONLY: 1,
  LIGHT_AND_HORN: 2,
  PANIC_ALARM: 3
};

/**
 * optional int32 horn_repeat = 1;
 * @return {number}
 */
proto.proto.SigPosStart.prototype.getHornRepeat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SigPosStart} returns this
 */
proto.proto.SigPosStart.prototype.setHornRepeat = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional HornType horn_type = 2;
 * @return {!proto.proto.SigPosStart.HornType}
 */
proto.proto.SigPosStart.prototype.getHornType = function() {
  return /** @type {!proto.proto.SigPosStart.HornType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.SigPosStart.HornType} value
 * @return {!proto.proto.SigPosStart} returns this
 */
proto.proto.SigPosStart.prototype.setHornType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional LightType light_type = 3;
 * @return {!proto.proto.SigPosStart.LightType}
 */
proto.proto.SigPosStart.prototype.getLightType = function() {
  return /** @type {!proto.proto.SigPosStart.LightType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.proto.SigPosStart.LightType} value
 * @return {!proto.proto.SigPosStart} returns this
 */
proto.proto.SigPosStart.prototype.setLightType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 sigpos_duration = 4;
 * @return {number}
 */
proto.proto.SigPosStart.prototype.getSigposDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.SigPosStart} returns this
 */
proto.proto.SigPosStart.prototype.setSigposDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional SigposType sigpos_type = 5;
 * @return {!proto.proto.SigPosStart.SigposType}
 */
proto.proto.SigPosStart.prototype.getSigposType = function() {
  return /** @type {!proto.proto.SigPosStart.SigposType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.proto.SigPosStart.SigposType} value
 * @return {!proto.proto.SigPosStart} returns this
 */
proto.proto.SigPosStart.prototype.setSigposType = function(value) {
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
proto.proto.TheftalarmConfirmDamagedetection.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TheftalarmConfirmDamagedetection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TheftalarmConfirmDamagedetection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmConfirmDamagedetection.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.TheftalarmConfirmDamagedetection}
 */
proto.proto.TheftalarmConfirmDamagedetection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TheftalarmConfirmDamagedetection;
  return proto.proto.TheftalarmConfirmDamagedetection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TheftalarmConfirmDamagedetection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TheftalarmConfirmDamagedetection}
 */
proto.proto.TheftalarmConfirmDamagedetection.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.TheftalarmConfirmDamagedetection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TheftalarmConfirmDamagedetection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TheftalarmConfirmDamagedetection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmConfirmDamagedetection.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.TheftalarmDeselectDamagedetection.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TheftalarmDeselectDamagedetection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TheftalarmDeselectDamagedetection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmDeselectDamagedetection.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.TheftalarmDeselectDamagedetection}
 */
proto.proto.TheftalarmDeselectDamagedetection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TheftalarmDeselectDamagedetection;
  return proto.proto.TheftalarmDeselectDamagedetection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TheftalarmDeselectDamagedetection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TheftalarmDeselectDamagedetection}
 */
proto.proto.TheftalarmDeselectDamagedetection.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.TheftalarmDeselectDamagedetection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TheftalarmDeselectDamagedetection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TheftalarmDeselectDamagedetection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmDeselectDamagedetection.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.TheftalarmDeselectInterior.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TheftalarmDeselectInterior.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TheftalarmDeselectInterior} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmDeselectInterior.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.TheftalarmDeselectInterior}
 */
proto.proto.TheftalarmDeselectInterior.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TheftalarmDeselectInterior;
  return proto.proto.TheftalarmDeselectInterior.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TheftalarmDeselectInterior} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TheftalarmDeselectInterior}
 */
proto.proto.TheftalarmDeselectInterior.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.TheftalarmDeselectInterior.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TheftalarmDeselectInterior.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TheftalarmDeselectInterior} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmDeselectInterior.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.TheftalarmDeselectTow.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TheftalarmDeselectTow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TheftalarmDeselectTow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmDeselectTow.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.TheftalarmDeselectTow}
 */
proto.proto.TheftalarmDeselectTow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TheftalarmDeselectTow;
  return proto.proto.TheftalarmDeselectTow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TheftalarmDeselectTow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TheftalarmDeselectTow}
 */
proto.proto.TheftalarmDeselectTow.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.TheftalarmDeselectTow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TheftalarmDeselectTow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TheftalarmDeselectTow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmDeselectTow.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.TheftalarmSelectDamagedetection.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TheftalarmSelectDamagedetection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TheftalarmSelectDamagedetection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmSelectDamagedetection.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.TheftalarmSelectDamagedetection}
 */
proto.proto.TheftalarmSelectDamagedetection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TheftalarmSelectDamagedetection;
  return proto.proto.TheftalarmSelectDamagedetection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TheftalarmSelectDamagedetection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TheftalarmSelectDamagedetection}
 */
proto.proto.TheftalarmSelectDamagedetection.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.TheftalarmSelectDamagedetection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TheftalarmSelectDamagedetection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TheftalarmSelectDamagedetection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmSelectDamagedetection.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.TheftalarmSelectInterior.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TheftalarmSelectInterior.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TheftalarmSelectInterior} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmSelectInterior.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.TheftalarmSelectInterior}
 */
proto.proto.TheftalarmSelectInterior.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TheftalarmSelectInterior;
  return proto.proto.TheftalarmSelectInterior.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TheftalarmSelectInterior} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TheftalarmSelectInterior}
 */
proto.proto.TheftalarmSelectInterior.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.TheftalarmSelectInterior.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TheftalarmSelectInterior.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TheftalarmSelectInterior} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmSelectInterior.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.TheftalarmSelectTow.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TheftalarmSelectTow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TheftalarmSelectTow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmSelectTow.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.TheftalarmSelectTow}
 */
proto.proto.TheftalarmSelectTow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TheftalarmSelectTow;
  return proto.proto.TheftalarmSelectTow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TheftalarmSelectTow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TheftalarmSelectTow}
 */
proto.proto.TheftalarmSelectTow.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.TheftalarmSelectTow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TheftalarmSelectTow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TheftalarmSelectTow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmSelectTow.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.TheftalarmStart.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TheftalarmStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TheftalarmStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    alarmDurationInSeconds: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.proto.TheftalarmStart}
 */
proto.proto.TheftalarmStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TheftalarmStart;
  return proto.proto.TheftalarmStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TheftalarmStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TheftalarmStart}
 */
proto.proto.TheftalarmStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAlarmDurationInSeconds(value);
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
proto.proto.TheftalarmStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TheftalarmStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TheftalarmStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlarmDurationInSeconds();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 alarm_duration_in_seconds = 1;
 * @return {number}
 */
proto.proto.TheftalarmStart.prototype.getAlarmDurationInSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.TheftalarmStart} returns this
 */
proto.proto.TheftalarmStart.prototype.setAlarmDurationInSeconds = function(value) {
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
proto.proto.TheftalarmStop.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TheftalarmStop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TheftalarmStop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmStop.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.TheftalarmStop}
 */
proto.proto.TheftalarmStop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TheftalarmStop;
  return proto.proto.TheftalarmStop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TheftalarmStop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TheftalarmStop}
 */
proto.proto.TheftalarmStop.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.TheftalarmStop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TheftalarmStop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TheftalarmStop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TheftalarmStop.serializeBinaryToWriter = function(message, writer) {
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
proto.proto.AutomaticValetParkingActivate.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.AutomaticValetParkingActivate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.AutomaticValetParkingActivate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AutomaticValetParkingActivate.toObject = function(includeInstance, msg) {
  var f, obj = {
    bookingId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    driveType: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.proto.AutomaticValetParkingActivate}
 */
proto.proto.AutomaticValetParkingActivate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.AutomaticValetParkingActivate;
  return proto.proto.AutomaticValetParkingActivate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.AutomaticValetParkingActivate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.AutomaticValetParkingActivate}
 */
proto.proto.AutomaticValetParkingActivate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBookingId(value);
      break;
    case 2:
      var value = /** @type {!proto.proto.DriveType} */ (reader.readEnum());
      msg.setDriveType(value);
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
proto.proto.AutomaticValetParkingActivate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.AutomaticValetParkingActivate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.AutomaticValetParkingActivate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.AutomaticValetParkingActivate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBookingId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDriveType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string booking_id = 1;
 * @return {string}
 */
proto.proto.AutomaticValetParkingActivate.prototype.getBookingId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.proto.AutomaticValetParkingActivate} returns this
 */
proto.proto.AutomaticValetParkingActivate.prototype.setBookingId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DriveType drive_type = 2;
 * @return {!proto.proto.DriveType}
 */
proto.proto.AutomaticValetParkingActivate.prototype.getDriveType = function() {
  return /** @type {!proto.proto.DriveType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.proto.DriveType} value
 * @return {!proto.proto.AutomaticValetParkingActivate} returns this
 */
proto.proto.AutomaticValetParkingActivate.prototype.setDriveType = function(value) {
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
proto.proto.ChargeCouplerUnlock.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargeCouplerUnlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargeCouplerUnlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeCouplerUnlock.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.ChargeCouplerUnlock}
 */
proto.proto.ChargeCouplerUnlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargeCouplerUnlock;
  return proto.proto.ChargeCouplerUnlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargeCouplerUnlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargeCouplerUnlock}
 */
proto.proto.ChargeCouplerUnlock.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.ChargeCouplerUnlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargeCouplerUnlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargeCouplerUnlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargeCouplerUnlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.ChargingBreakClocktimerConfigure.repeatedFields_ = [1];



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
proto.proto.ChargingBreakClocktimerConfigure.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingBreakClocktimerConfigure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingBreakClocktimerConfigure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingBreakClocktimerConfigure.toObject = function(includeInstance, msg) {
  var f, obj = {
    chargingbreakClocktimerConfigureEntryList: jspb.Message.toObjectList(msg.getChargingbreakClocktimerConfigureEntryList(),
    proto.proto.ChargingBreakClockTimerConfigureEntry.toObject, includeInstance)
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
 * @return {!proto.proto.ChargingBreakClocktimerConfigure}
 */
proto.proto.ChargingBreakClocktimerConfigure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingBreakClocktimerConfigure;
  return proto.proto.ChargingBreakClocktimerConfigure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingBreakClocktimerConfigure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingBreakClocktimerConfigure}
 */
proto.proto.ChargingBreakClocktimerConfigure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.ChargingBreakClockTimerConfigureEntry;
      reader.readMessage(value,proto.proto.ChargingBreakClockTimerConfigureEntry.deserializeBinaryFromReader);
      msg.addChargingbreakClocktimerConfigureEntry(value);
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
proto.proto.ChargingBreakClocktimerConfigure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingBreakClocktimerConfigure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingBreakClocktimerConfigure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingBreakClocktimerConfigure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChargingbreakClocktimerConfigureEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.ChargingBreakClockTimerConfigureEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ChargingBreakClockTimerConfigureEntry chargingbreak_clocktimer_configure_entry = 1;
 * @return {!Array<!proto.proto.ChargingBreakClockTimerConfigureEntry>}
 */
proto.proto.ChargingBreakClocktimerConfigure.prototype.getChargingbreakClocktimerConfigureEntryList = function() {
  return /** @type{!Array<!proto.proto.ChargingBreakClockTimerConfigureEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.ChargingBreakClockTimerConfigureEntry, 1));
};


/**
 * @param {!Array<!proto.proto.ChargingBreakClockTimerConfigureEntry>} value
 * @return {!proto.proto.ChargingBreakClocktimerConfigure} returns this
*/
proto.proto.ChargingBreakClocktimerConfigure.prototype.setChargingbreakClocktimerConfigureEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.ChargingBreakClockTimerConfigureEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.ChargingBreakClockTimerConfigureEntry}
 */
proto.proto.ChargingBreakClocktimerConfigure.prototype.addChargingbreakClocktimerConfigureEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.ChargingBreakClockTimerConfigureEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.proto.ChargingBreakClocktimerConfigure} returns this
 */
proto.proto.ChargingBreakClocktimerConfigure.prototype.clearChargingbreakClocktimerConfigureEntryList = function() {
  return this.setChargingbreakClocktimerConfigureEntryList([]);
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
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChargingBreakClockTimerConfigureEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChargingBreakClockTimerConfigureEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endtimehour: jspb.Message.getFieldWithDefault(msg, 2, 0),
    endtimeminute: jspb.Message.getFieldWithDefault(msg, 3, 0),
    starttimehour: jspb.Message.getFieldWithDefault(msg, 4, 0),
    starttimeminute: jspb.Message.getFieldWithDefault(msg, 5, 0),
    timerid: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.proto.ChargingBreakClockTimerConfigureEntry}
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChargingBreakClockTimerConfigureEntry;
  return proto.proto.ChargingBreakClockTimerConfigureEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChargingBreakClockTimerConfigureEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChargingBreakClockTimerConfigureEntry}
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.ChargingBreakClockTimerEntryStatus} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndtimehour(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndtimeminute(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStarttimehour(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStarttimeminute(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimerid(value);
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
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChargingBreakClockTimerConfigureEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChargingBreakClockTimerConfigureEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEndtimehour();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getEndtimeminute();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getStarttimehour();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getStarttimeminute();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTimerid();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional ChargingBreakClockTimerEntryStatus action = 1;
 * @return {!proto.proto.ChargingBreakClockTimerEntryStatus}
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.getAction = function() {
  return /** @type {!proto.proto.ChargingBreakClockTimerEntryStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.proto.ChargingBreakClockTimerEntryStatus} value
 * @return {!proto.proto.ChargingBreakClockTimerConfigureEntry} returns this
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 endTimeHour = 2;
 * @return {number}
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.getEndtimehour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingBreakClockTimerConfigureEntry} returns this
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.setEndtimehour = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 endTimeMinute = 3;
 * @return {number}
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.getEndtimeminute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingBreakClockTimerConfigureEntry} returns this
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.setEndtimeminute = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 startTimeHour = 4;
 * @return {number}
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.getStarttimehour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingBreakClockTimerConfigureEntry} returns this
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.setStarttimehour = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 startTimeMinute = 5;
 * @return {number}
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.getStarttimeminute = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingBreakClockTimerConfigureEntry} returns this
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.setStarttimeminute = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 timerId = 6;
 * @return {number}
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.getTimerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.proto.ChargingBreakClockTimerConfigureEntry} returns this
 */
proto.proto.ChargingBreakClockTimerConfigureEntry.prototype.setTimerid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.proto.WiperHealthReset.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.WiperHealthReset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.WiperHealthReset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WiperHealthReset.toObject = function(includeInstance, msg) {
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
 * @return {!proto.proto.WiperHealthReset}
 */
proto.proto.WiperHealthReset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.WiperHealthReset;
  return proto.proto.WiperHealthReset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.WiperHealthReset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.WiperHealthReset}
 */
proto.proto.WiperHealthReset.deserializeBinaryFromReader = function(msg, reader) {
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
proto.proto.WiperHealthReset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.WiperHealthReset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.WiperHealthReset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.WiperHealthReset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.proto.Door = {
  UNKNOWN_DOOR: 0,
  FRONTLEFT: 1,
  FRONTRIGHT: 2,
  REARLEFT: 3,
  REARRIGHT: 4,
  TRUNK: 5,
  FUELFLAP: 6,
  CHARGEFLAP: 7,
  CHARGECOUPLER: 8,
  FRONT_LEFT: 1,
  FRONT_RIGHT: 2,
  REAR_LEFT: 3,
  REAR_RIGHT: 4,
  FUEL_FLAP: 6,
  CHARGE_FLAP: 7,
  CHARGE_COUPLER: 8
};

/**
 * @enum {number}
 */
proto.proto.ZEVPreconditioningType = {
  UNKNOWN_ZEV_PRECONDITIONING_COMMAND_TYPE: 0,
  IMMEDIATE: 1,
  DEPARTURE: 2,
  NOW: 3,
  DEPARTUREWEEKLY: 4,
  DEPARTURE_WEEKLY: 4
};

/**
 * @enum {number}
 */
proto.proto.TimeProfileDay = {
  MO: 0,
  TU: 1,
  WE: 2,
  TH: 3,
  FR: 4,
  SA: 5,
  SU: 6,
  MONDAY: 0,
  TUESDAY: 1,
  WEDNESDAY: 2,
  THURSDAY: 3,
  FRIDAY: 4,
  SATURDAY: 5,
  SUNDAY: 6
};

/**
 * @enum {number}
 */
proto.proto.DriveType = {
  UNKNOWN_DRIVE_TYPE: 0,
  PICK_UP: 1,
  DROP_OFF: 2
};

/**
 * @enum {number}
 */
proto.proto.ChargingBreakClockTimerEntryStatus = {
  DELETE: 0,
  INACTIVE: 1,
  ACTIVE: 2
};

goog.object.extend(exports, proto.proto);

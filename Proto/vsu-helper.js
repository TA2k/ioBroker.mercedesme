"use strict";
/**
 * Normalize a VehicleStatusUpdate (VSU) car payload into the legacy VEPUpdate
 * attributesMap structure that processVepAttributes() in main.js already consumes.
 *
 * Background: from RIS SDK >= 4.10.0 Mercedes stops sending the generic vepUpdate
 * (map<string, VehicleAttributeStatus>) over the WebSocket and instead sends a typed
 * VehicleStatusUpdate with ~275 individual fields, each shaped like
 *   { value | valueList, metadata: { timestamp:{seconds,nanos}, status }, unit, displayValue }.
 *
 * protobuf-js .toObject() yields camelCase keys IDENTICAL to the old vepUpdate keys
 * (soc, doorlockstatusvehicle, chargeCouplerACStatus, ...), so no key renaming is
 * needed. Enum values already arrive as integers.
 *
 * IMPORTANT (verified against real vepUpdate data + APK 1.69.0):
 * - The legacy type key (intValue/doubleValue/boolValue) MUST come from the proto
 *   field type, not the runtime value: a DoubleAttribute holding 0 must stay
 *   doubleValue (positions, chargingPower), otherwise getGasPrice etc. break.
 *   -> VSU_FIELD_TYPE provides the static per-field category.
 * - VSU has no "changed" flag. It only sends changed attributes, so we mark every
 *   present attribute changed:true (old flow relied on the protobuf changed bool to
 *   gate soc/tank history in main.js).
 * - Some fields changed representation between the old vepUpdate and VSU (e.g.
 *   precondNow was a bool in vepUpdate but is an enum in VSU). main.js mirrors a few
 *   received values into remote.* states via boolValue / a differently named key;
 *   VSU_LEGACY_ALIASES re-adds those legacy shapes so those mirrors keep working.
 */

const { VSU_FIELD_TYPE } = require("./vsu-field-types");

// Keys that are metadata of the car itself, not vehicle attributes.
const RESERVED_KEYS = new Set(["finOrVin", "fullUpdate"]);

// Fields main.js subscribes to with a specific legacy shape that VSU no longer
// provides natively. We add extra legacy attributes so the existing main.js
// handlers (remote.* mirrors) keep firing.
//
// mergeBool: main.js subscribes to <key>.boolValue but VSU sends the field as an
//   enum (intValue). We additionally set boolValue (0 -> false, else true) on the
//   SAME attribute so the remote.* mirror handlers keep firing.
//   (precondActive is already a BoolAttribute in VSU, so only precondNow needs this.)
const VSU_MERGE_BOOL = new Set(["precondNow"]);

// renameAlias: main.js reads a legacy key that VSU renamed. We emit an ADDITIONAL
//   attribute under the legacy key, copying the normalized value.
const VSU_RENAME_ALIASES = {
  // doorLockStatusOverall.intValue drives remote.DoorLock/DoorOpen; VSU sends
  // doorlockstatusvehicle instead.
  doorlockstatusvehicle: "doorLockStatusOverall",
};

/**
 * Convert VSU metadata into legacy timestamp/status fields.
 * @param {object} legacy - target object
 * @param {object} metadata - { timestamp:{seconds,nanos}, status }
 */
function applyMetadata(legacy, metadata) {
  if (!metadata) {
    return;
  }
  if (metadata.timestamp && metadata.timestamp.seconds != null) {
    const seconds = Number(metadata.timestamp.seconds);
    const nanos = Number(metadata.timestamp.nanos || 0);
    legacy.timestamp = seconds;
    legacy.timestampInMs = seconds * 1000 + Math.floor(nanos / 1e6);
  }
  if (metadata.status != null) {
    legacy.status = metadata.status;
  }
}

/**
 * Emit the correct legacy type key for a scalar value, based on the field's proto
 * type category (NOT the runtime value).
 * @param {object} legacy - target object
 * @param {*} value - scalar value
 * @param {string} category - "int" | "double" | "bool" | undefined
 */
function applyScalarValue(legacy, value, category) {
  if (category === "bool") {
    legacy.boolValue = Boolean(value);
  } else if (category === "double") {
    legacy.doubleValue = value;
  } else if (category === "int") {
    legacy.intValue = value;
  } else {
    // Fallback for uncategorized scalar fields: infer from JS type.
    if (typeof value === "boolean") {
      legacy.boolValue = value;
    } else if (typeof value === "string") {
      legacy.stringValue = value;
    } else if (typeof value === "number") {
      if (Number.isInteger(value)) {
        legacy.intValue = value;
      } else {
        legacy.doubleValue = value;
      }
    }
  }
}

/**
 * Normalize a single VSU attribute entry into a legacy VehicleAttributeStatus dict.
 * @param {string} key - camelCase field name
 * @param {object} vsuAttr - the VSU attribute object from toObject()
 * @returns {object} legacy attribute object
 */
function normalizeAttribute(key, vsuAttr) {
  // VSU only carries changed attributes -> mark changed so history gating in main.js works.
  const legacy = { changed: true };

  if (!vsuAttr || typeof vsuAttr !== "object") {
    return legacy;
  }

  applyMetadata(legacy, vsuAttr.metadata);

  // displayValue: pass through as-is (including empty string, so it can clear state).
  if (Object.prototype.hasOwnProperty.call(vsuAttr, "displayValue")) {
    legacy.displayValue = vsuAttr.displayValue;
  }
  if (vsuAttr.unit != null) {
    legacy.unit = vsuAttr.unit;
  }

  const category = VSU_FIELD_TYPE[key];

  // Array attributes: { valueList, metadata }
  if (Object.prototype.hasOwnProperty.call(vsuAttr, "valueList")) {
    legacy.valueList = vsuAttr.valueList;
    return legacy;
  }

  // Scalar / object attributes: { value, metadata }
  if (Object.prototype.hasOwnProperty.call(vsuAttr, "value")) {
    const value = vsuAttr.value;
    if (value !== null && typeof value === "object") {
      // Object sub-message (chargingPredictionSoc, weeklyProfile, ...) -> pass through.
      legacy.value = value;
    } else if (value != null) {
      applyScalarValue(legacy, value, category);
    } else {
      legacy.nilValue = true;
    }
  } else {
    legacy.nilValue = true;
  }

  // Fields that main.js reads as boolValue but VSU sends as enum -> add boolValue.
  if (VSU_MERGE_BOOL.has(key) && legacy.boolValue == null) {
    const raw = legacy.intValue != null ? legacy.intValue : 0;
    legacy.boolValue = Boolean(raw);
  }

  return legacy;
}

/**
 * Build a renamed-alias attribute entry for a source field, if one is configured
 * (main.js reads a legacy key that VSU renamed). Returns null if no alias.
 * @param {string} key - source camelCase field name
 * @param {object} legacyAttr - the already-normalized attribute for key
 * @returns {[string, object]|null}
 */
function buildRenameAlias(key, legacyAttr) {
  const aliasKey = VSU_RENAME_ALIASES[key];
  if (!aliasKey) {
    return null;
  }
  // Shallow copy so the alias is an independent state entry.
  return [aliasKey, Object.assign({}, legacyAttr)];
}

/**
 * Convert one VSU car payload (from vehicleStatusUpdatesMap) into the legacy
 * { vin, fullUpdate, attributesMap } shape used by processVepAttributes.
 * @param {string} vin
 * @param {object} vsuCar - the VehicleStatusUpdate toObject()
 * @returns {{ vin: string, fullUpdate: boolean, attributesMap: Array }}
 */
function normalizeVsuCar(vin, vsuCar) {
  const attributesMap = [];

  for (const key of Object.keys(vsuCar)) {
    if (RESERVED_KEYS.has(key)) {
      continue;
    }
    const vsuAttr = vsuCar[key];
    if (vsuAttr == null) {
      continue;
    }
    const legacyAttr = normalizeAttribute(key, vsuAttr);
    attributesMap.push([key, legacyAttr]);
    const alias = buildRenameAlias(key, legacyAttr);
    if (alias) {
      attributesMap.push(alias);
    }
  }

  return {
    vin: vin || vsuCar.finOrVin,
    fullUpdate: Boolean(vsuCar.fullUpdate),
    attributesMap: attributesMap,
  };
}

module.exports = { normalizeVsuCar, normalizeAttribute };

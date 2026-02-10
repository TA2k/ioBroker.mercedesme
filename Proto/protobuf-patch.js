/**
 * Runtime patch for google-protobuf to handle unknown fields gracefully.
 * When proto files are outdated, returns partial results instead of errors.
 */

let applied = false;
let warningCallback = null;
let lastError = null; // Deduplicate repeated errors

function setWarningCallback(fn) {
  warningCallback = fn;
}

function logWarning(msg) {
  if (msg === lastError) return; // Skip duplicate
  lastError = msg;
  if (warningCallback) {
    warningCallback(msg);
  } else {
    console.warn(msg);
  }
}

function apply() {
  if (applied) return;
  applied = true;

  const jspb = require('google-protobuf');
  const BinaryReader = jspb.BinaryReader;
  if (!BinaryReader) return;

  const originalNextField = BinaryReader.prototype.nextField;
  const originalSkipField = BinaryReader.prototype.skipField;
  const originalReadMessage = BinaryReader.prototype.readMessage;

  // Patch nextField - silent recovery
  BinaryReader.prototype.nextField = function() {
    try {
      return originalNextField.call(this);
    } catch (e) {
      const msg = e.message || '';
      if (msg.includes('Invalid wire') || msg.includes('Assertion')) {
        try {
          const cursor = this.getCursor();
          if (cursor < this.getEnd()) {
            this.setCursor(cursor + 1);
            return this.nextField();
          }
        } catch (_) {}
        return false;
      }
      throw e;
    }
  };

  // Patch skipField - silent recovery
  BinaryReader.prototype.skipField = function() {
    try {
      return originalSkipField.call(this);
    } catch (_) {
      return false;
    }
  };

  // Patch readMessage - silent recovery
  if (originalReadMessage) {
    BinaryReader.prototype.readMessage = function(msg, reader) {
      try {
        return originalReadMessage.call(this, msg, reader);
      } catch (_) {
        return;
      }
    };
  }
}

function wrapDeserialize(MessageClass) {
  if (!MessageClass || !MessageClass.deserializeBinary) return;
  if (MessageClass.__wrapped__) return;

  const original = MessageClass.deserializeBinary;
  MessageClass.__wrapped__ = true;
  MessageClass._originalDeserializeBinary = original;

  MessageClass.deserializeBinary = function(bytes) {
    try {
      return original.call(this, bytes);
    } catch (e) {
      // Single line log with essential info
      const field = e.message?.match(/field (\d+)/)?.[1] || '?';
      logWarning(`[protobuf] Parse failed at field ${field}, ${bytes.length} bytes - proto may be outdated`);

      try {
        return new MessageClass();
      } catch (_) {
        return null;
      }
    }
  };
}

module.exports = {
  apply,
  wrapDeserialize,
  setWarningCallback
};

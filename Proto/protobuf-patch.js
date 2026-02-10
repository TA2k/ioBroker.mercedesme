/**
 * Runtime patch for google-protobuf to handle unknown fields gracefully.
 * When proto files are outdated, returns partial results instead of errors.
 */

let applied = false;
let warningCallback = null;
let lastErrorKey = null;

const WIRE_TYPES = ['VARINT', 'FIXED64', 'LENGTH_DELIMITED', 'START_GROUP', 'END_GROUP', 'FIXED32'];

function setWarningCallback(fn) {
  warningCallback = fn;
}

function logWarning(msg, key) {
  if (key && key === lastErrorKey) return;
  lastErrorKey = key;
  if (warningCallback) {
    warningCallback(msg);
  } else {
    console.warn(msg);
  }
}

// Store last error context for the final log
let errorContext = null;

function apply() {
  if (applied) return;
  applied = true;

  const jspb = require('google-protobuf');
  const BinaryReader = jspb.BinaryReader;
  if (!BinaryReader) return;

  const originalNextField = BinaryReader.prototype.nextField;
  const originalSkipField = BinaryReader.prototype.skipField;
  const originalReadMessage = BinaryReader.prototype.readMessage;

  BinaryReader.prototype.nextField = function() {
    try {
      return originalNextField.call(this);
    } catch (e) {
      const msg = e.message || '';
      if (msg.includes('Invalid wire') || msg.includes('Assertion')) {
        // Capture context for later
        try {
          const fieldNum = this.getFieldNumber();
          const wireType = this.getWireType();
          const pos = this.getCursor();
          const buf = this.getBuffer();
          const hex = Buffer.from(buf.slice(Math.max(0, pos - 4), Math.min(buf.length, pos + 8))).toString('hex');
          errorContext = { fieldNum, wireType, pos, hex, error: msg };
        } catch (_) {}

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

  BinaryReader.prototype.skipField = function() {
    try {
      return originalSkipField.call(this);
    } catch (_) {
      return false;
    }
  };

  if (originalReadMessage) {
    BinaryReader.prototype.readMessage = function(msg, reader) {
      try {
        return originalReadMessage.call(this, msg, reader);
      } catch (e) {
        // Capture nested message context
        try {
          const fieldNum = this.getFieldNumber();
          const pos = this.getCursor();
          const msgName = msg?.constructor?.name || '?';
          errorContext = { fieldNum, pos, msgName, error: e.message };
        } catch (_) {}
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
    errorContext = null; // Reset

    try {
      return original.call(this, bytes);
    } catch (e) {
      const name = MessageClass.displayName || MessageClass.name || 'PushMessage';
      const ctx = errorContext || {};

      // Build informative single-line message
      let info = `[protobuf] ${name} parse failed`;
      if (ctx.fieldNum) info += ` at field ${ctx.fieldNum}`;
      if (ctx.wireType !== undefined) info += ` (wireType=${WIRE_TYPES[ctx.wireType] || ctx.wireType})`;
      if (ctx.msgName) info += ` in ${ctx.msgName}`;
      if (ctx.pos) info += ` pos=${ctx.pos}`;
      if (ctx.hex) info += ` hex=[${ctx.hex}]`;


      logWarning(info, `${ctx.fieldNum}-${ctx.pos}`);

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

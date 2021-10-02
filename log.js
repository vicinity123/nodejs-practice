const EventEmitter = require("events");
const uuid = require("uuid");

// Create a class
class Logger extends EventEmitter {
  log(message) {
    this.emit("Logg this", { id: uuid.v4(), msg: message });
  }
}

module.exports = Logger;

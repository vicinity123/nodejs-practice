const EventEmitter = require("events");
const uuid = require("uuid");

// Create a class
class Logger extends EventEmitter {
  log(msg) {
    this.emit("Logg this", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

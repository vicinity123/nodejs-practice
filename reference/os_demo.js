const os = require("os")

// Find OS system
console.log(os.platform())

// Find CPU arch
console.log(os.arch())

// Find CPU cores
console.log(os.cpus())

// Free memory
console.log(os.freemem())

// Total memory
console.log(os.totalmem())

// Home Directory
console.log(os.homedir())

// Up time
console.log(os.uptime())

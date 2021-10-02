const path = require("path")

// Finding file folder
console.log(path.dirname(__filename))

// Finding file
console.log(path.basename(__filename))

// Finding file extension
console.log(path.extname(__filename))

// Concatenating files and folders
console.log(path.join(__dirname, "/test"))

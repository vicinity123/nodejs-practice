const fs = require("fs");
const path = require("path");
const Logger = require("./log");

const logger = new Logger();

logger.log("Create...");

logger.on("Logg this", (data) => {
  fs.writeFile(path.join(__dirname, "uuidLog.txt"), "Uuid Logs \n\n", (err) => {
    if (err) throw err;
    console.log("File created");

    fs.appendFile(path.join(__dirname, "uuidLog.txt"), data, (err) => {
      if (err) throw err;
      console.log("File appended to");
    });
  });
});

// fs.writeFile(path.join(__dirname, "uuidLog.txt"), "Uuid Logs \n\n", (err) => {
//   if (err) throw err;
//   console.log("File created");

//   fs.appendFile(path.join(__dirname, "uuidLog.txt"), content, (err) => {
//     if (err) throw err;
//     console.log("File appended to");
//   });
// });

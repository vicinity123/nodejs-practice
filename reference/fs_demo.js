const fs = require("fs")
const path = require("path")

// Folder creation
// fs.mkdir(path.join(__dirname, "/testing"), {}, () => {
//   console.log("Testing folder created.")
// });

// Creating and writing to file
// fs.writeFile(path.join(__dirname, "testing.txt"), "From Node.js\n\n", err => {
//   if (err) throw err;
//   console.log("File created and written to.")

//   fs.appendFile(
//     path.join(__dirname, "testing.txt"),
//     "Another From Node.js",
//     err => {
//       if (err) throw err;
//       console.log("File appended to.")
//     });
// });

// Read from file
fs.readFile(path.join(__dirname, "testing.txt"), "utf8", (err, data) => {
  if (err) throw err
  console.log(data)
})

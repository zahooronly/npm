const fs = require("fs");
console.log(`Current Directory: ${fs.readdirSync("./")}`);
console.log(
  `Current Directory: ${fs.readdir("./", function (err, files) {
    if (err) console.log("Error: ", err);
    else console.log("Results: ", files);
  })}`
);

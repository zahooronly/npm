//  Syncronous way or Blocking way of coding in Javascript
const fs = require("fs");
// const readData = fs.readFileSync("./file.txt", "utf-8");
// console.log(readData);
// const writeData = `This is what we know about lorem ipsum text: ${readData}\n created at ${Date.now()}`;
// fs.writeFileSync("./output.txt", writeData);
// console.log("file has been written");
// console.log(writeData);

// Asyncronous way or non-Blocking way of coding in ES8
fs.readFile("./start.txt", "utf-8", (error, data1) => {
  //   if (error) {
  //     return console.log("ERROR");
  //   }
  fs.readFile(`./${data1}.txt`, "utf-8", (error, data2) => {
    console.log(data2);
  });
  //   console.log(data);
});
console.log("will read");

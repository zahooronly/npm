var url = "https://google.com";
const EventEmitter = require("events");
class Logger extends EventEmitter {
  sayHello(message) {
    console.log(message);
    this.emit("eventMessage", { id: 1, url: "https://" });
  }
}
module.exports = Logger;
// module.exports.url = url;

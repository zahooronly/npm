const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.addListener("event", function () {
  console.log("event called");
});
emitter.emit("event");

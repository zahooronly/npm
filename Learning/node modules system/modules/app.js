const EventEmitter = require("events");
// const logger = require("./logger");
const Logger = require("./logger");
// const emitter = EventEmitter();
const logger = new Logger();

logger.on("eventMessage", (arg) => {
  console.log("message is logged", arg);
});
// console.log(__filname);
// console.log(__dirname);
// logger = 5;
// console.log(logger.log);
// console.log(module);

logger.sayHello("Message: ");

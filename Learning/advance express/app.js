const appDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const Logger = require("./logger");
const helmet = require("helmet");
const courses = require("./routes/courses");
const post = require("./routes/post");
const api = require("./routes/api");
const articles = require("./routes/articles");
const morgan = require("morgan");
const Joi = require("joi");
// throw new Error('Configuration property "' + property + '" is not defined');
const express = require("express");
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");

// Configuration
console.log(`Name: ${config.get("name")}`);
console.log(`Host: ${config.get("mail.host")}`);
console.log(`Auth: ${config.get("mail.auth.user")}`);
// console.log(`username: ${config.get("auth.user")}`);
// console.log(`password: ${config.get("mail.auth.password")}`);
dbDebugger("Connected to database...");
app.use(helmet());
app.use(express.static("public"));
app.use(Logger);
app.use(express.json());

// console.log(`ENV is: ${app.get("env")}`);
// console.log(`ENV is: ${process.env.NODE_ENV}`);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  appDebugger("Morgan enabled...");
}

app.use("/api/courses", courses);
app.use("/post", post);
app.use("/api/articles", articles);
app.use("/api", api);

app.get("/", (req, res) => {
  // res.send("Hello World");
  res.render("app", { title: "My App", message: "Hello", message2: "World" });
});

// get all courses

//  put method to update data

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listening on port ${port}...`));

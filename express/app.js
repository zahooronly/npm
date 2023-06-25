const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.send([1, 2, 3, 4, 5, 6, 7]);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});
// app.get("/api/articles/:year/:month/:day", (req, res) => {
//   res.send(req.params);
// });
app.get("/api/articles/:year/:month/:day", (req, res) => {
  res.send(req.query);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

const express = require("express");
const router = express.Router();

router.get("/:year/:month/:day", (req, res) => {
  res.send(req.params);
});
// app.get("/api/articles/:year/:month/:day", (req, res) => {
//   res.send(req.query);
// });

module.exports = router;

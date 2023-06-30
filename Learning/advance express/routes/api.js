const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send([1, 2, 3, 4, 5, 6, 7]);
});
module.exports = router;

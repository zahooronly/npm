const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/Learning")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Couldn't connected to MongoDB"));

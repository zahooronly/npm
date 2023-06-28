const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());
const vidly = [
  {
    id: 1,
    name: "Pakistani",
  },
  {
    id: 2,
    name: "Turkish",
  },
  {
    id: 3,
    name: "Brazilian",
  },
  {
    id: 4,
    name: "Iranian",
  },
  {
    id: 5,
    name: "Arabic",
  },
];

// Get Requests
app.get("/", (req, res) => {
  res.send("Vidly App Opened");
});

app.get("/vidly/genre", (req, res) => {
  res.send(vidly);
});
// Post Request
app.post("/vidly/post/genre/", (req, res) => {
  validateVidly(req.body);
  const vidl = {
    id: vidly.length + 1,
    name: req.body.name,
  };
  vidly.push(vidl);
  res.send(vidly);
});
// Put Request
// Delete Request

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

// Validation Function
function validateVidly(course) {
  schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });
  const { error } = schema.validate(course);
  if (error) return res.status(400).send(error.details[0].message);
}

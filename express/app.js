const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json());
const courses = [
  {
    id: 1,
    name: "course 1",
  },
  {
    id: 2,
    name: "course 2",
  },
  {
    id: 3,
    name: "course 3",
  },
  {
    id: 4,
    name: "course 4",
  },
  {
    id: 5,
    name: "course 5",
  },
];
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.send([1, 2, 3, 4, 5, 6, 7]);
});

app.get("/api/courses/:id", (req, res) => {
  // res.send(req.params.id);
  const course = courses.find((a) => a.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Course doesn't exist");
  res.send(course);
});
// app.get("/api/articles/:year/:month/:day", (req, res) => {
//   res.send(req.params);
// });
app.get("/api/articles/:year/:month/:day", (req, res) => {
  res.send(req.query);
});

// http post request

app.post("/api/courses", (req, res) => {
  // Input Validation because we don't trust the client, he/she can send any type of input
  validateCourse(req.body);
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});
app.post("/post", (req, res) => {
  res.send("post method");
});

//  put method to update data
app.put("/api/courses/:id", (req, res) => {
  // does course exists?
  const course = courses.find((a) => a.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Course doesn't exist");
  // does the input valid?
  validateCourse(req.body);
  course.name = req.body.name;
  res.send(course);
});
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listening on port ${port}...`));

function validateCourse(course) {
  schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });
  const { error } = schema.validate(course);
  if (error) return res.status(400).send(error.details[0].message);
}

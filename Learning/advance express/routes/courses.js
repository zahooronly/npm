const express = require("express");
const router = express.Router();
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

router.get("/", (req, res) => {
  res.send(courses);
});
router.get("/:id", (req, res) => {
  // res.send(req.params.id);
  const course = courses.find((a) => a.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course doesn't exist");
  res.send(course);
});

router.put("/:id", (req, res) => {
  // does course exists?
  const course = courses.find((a) => a.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course doesn't exist");
  // does the input valid?
  validateCourse(req.body);
  course.name = req.body.name;
  res.send(course);
});

// http post request

router.post("/", (req, res) => {
  // Input Validation because we don't trust the client, he/she can send any type of input
  validateCourse(req.body);
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

// http delete request
router.delete("/:id", (req, res) => {
  const course = courses.find((a) => a.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course doesn't exist");
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

// validate function
function validateCourse(course) {
  schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });
  const { error } = schema.validate(course);
  if (error) return res.status(400).send(error.details[0].message);
}

module.exports = router;

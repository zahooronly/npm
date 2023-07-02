const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/Learning")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Couldn't connected to MongoDB"));

// Schemas

const courseShema = new mongoose.Schema({
  name: String,
  auther: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});
// Models
const Course = mongoose.model("Course", courseShema);
// course Object of Course
// CRUD Operations
// C=> Create
const createCourse = async () => {
  const course = new Course({
    name: "Backend",
    auther: "ZahoorOnly",
    tags: ["backend", "ZahoorOnly", "Prizma", "backend", "mongodb", "mongoose"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
};
// createCourse();
// R=> Read/Retrieve

async function getCourses() {
  const courses = await Course.find({ auther: "ZahoorOnly", isPublished: true })
    .limit(10)
    .select({ name: 1, tags: 1, auther: 1 })
    .sort({ name: 1 });
  console.log("All Courses:\n", courses);
}
getCourses();

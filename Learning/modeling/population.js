const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mongo-exercises")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Couldn't connected to MongoDB"));

const Auther = new mongoose.model(
  "Auther",
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
  })
);
const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    auther: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auther",
    },
  })
);
async function createAuther(name, bio, website) {
  const auther = new Auther({
    name,
    bio,
    website,
  });
  const result = await auther.save();
  console.log(result);
}
async function createCourse(name, auther) {
  const course = new Course({
    name,
    auther,
  });
  const result = await course.save();
  console.log(result);
}
async function listCourses() {
  const courses = await Course.find()
    // .populate("auther", "name -_id")
    .select("name");
  console.log(courses);
}

// createAuther("Zahoor Ahmad", "My bio", "My Website");
createCourse("Node Course", "64c21be3e40f27eb07b92b67");
// listCourses();

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
const createCourse = async () => {
  const course = new Course({
    name: "Node.JS",
    auther: "ZahoorOnly",
    tags: ["node", "ZahoorOnly", "backend", "mongodb", "mongoose"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
};
createCourse();

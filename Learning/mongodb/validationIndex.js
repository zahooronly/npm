const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/Learning")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Couldn't connected to MongoDB"));

// Schemas

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  auther: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});
// Models
const Course = mongoose.model("Course", courseSchema);
// course Object of Course
// CRUD Operations
// C=> Create
const createCourse = async () => {
  const course = new Course({
    name: "Backend",
    auther: "ZahoorOnly",
    tags: ["backend", "ZahoorOnly", "Prisma", "backend", "mongodb", "mongoose"],
    isPublished: true,
  });
  try {
    await course.validate();
    // const result = await course.save();
    // console.log(result);
  } catch (ex) {
    console.log(ex.message);
  }
};
// createCourse();

// R=> Read/Retrieve

// async function getCourses() {
//   const courses = await Course.find({ auther: "ZahoorOnly", isPublished: true })
//     .limit(10)
//     .select({ name: 1, tags: 1, auther: 1 })
//     .sort({ name: 1 });
//   console.log("All Courses:\n", courses);
// }
async function getCourses() {
  const courses = await Course

    // simple find function in Mongoose
    // .find({ auther: "ZahoorOnly", isPublished: true })

    // Comparison Operators {=,<,>,<>,!=,=<,=>}
    // .find({price:{$in:[10,15,20]}})

    // Logical Operators {and,or}
    .find()
    // .or({ auther: "ZahoorOnly" }, { isPublished: true })

    // Regular Expressions
    // Starts with
    // .find({ auther: /^Zahoor/i })
    // Ends with
    // .find({ auther: /Only$/i })
    // Contains
    // .find({ auther: /.*oor.*/i })
    // after slash / character "i" indicates case insensitivity

    .limit(10)
    .select({ name: 1, tags: 1, auther: 1 })
    .sort({ name: 1 });
  console.log("All Courses:\n", courses);
}
getCourses();

// U=> Update
// Query First Approach
async function firstUpdateCourse(id) {
  const course = await Course.findById(id);
  if (!course) return console.log(`No course Exists for this ID ${id}`);
  else {
    course.set({
      auther: "Zahoor Ahmad",
      isPublished: false,
    });
  }
  const result = await course.save();
  console.log("Updated Course is:\n", result);
}

// firstUpdateCourse("64a152a1cb6a55e187aa7ddd");

// directUpdateCourse();
async function directUpdateCourse() {
  const result = await Course.updateMany(
    { auther: "ZahoorOnly" },
    {
      $set: {
        auther: "Zahoor Ahmad",
        isPublished: false,
      },
    }
  );
  console.log("Updated Course is:\n", result);
}

// D=> Delete {CRUD completed}
async function deleteCourse(ID) {
  const result = await Course.deleteOne({ _id: ID });
  // if want to get the deleted course, then we can use
  //  findByIdAndRemove
  // Course.findByIdAndRemove
  console.log("Deleted Course:\n", result);
}
// deleteCourse("64a152a1cb6a55e187aa7ddd");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/Learning")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Couldn't connected to MongoDB"));

// Schemas

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 50 },
  auther: String,
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "desktop"],
  },
  tags: {
    type: Array,
    validate: {
      validator: function (value) {
        return value && value.length > 0;
      },
      message: "A course should have at least one tag",
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: {
      function() {
        return this.isPublished;
      },
    },
  },
});
// Models
const Course = mongoose.model("Course", courseSchema);
// course Object of Course
// CRUD Operations
// C=> Create
const createCourse = async () => {
  const course = new Course({
    name: "Prisma",
    auther: "ZahoorOnly",
    tags: ["Zahoor Ahmad", "Prisma", "backend", "mongodb", "mongoose"],
    isPublished: true,
    price: 23,
    category: "wEb".toLowerCase(),
  });
  try {
    async function Validation() {
      // await course.validate();
      const result = await course.save();
      console.log(result);
    }
    Validation();
  } catch (ex) {
    console.log(ex.message);
  }
};
createCourse();

// R=> Read/Retrieve

async function getCourses() {
  const courses = await Course.find()
    .select({ name: 1, tags: 1, auther: 1 })
    .sort({ name: 1 });
  console.log("All Courses:\n", courses);
}
// getCourses();

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
  console.log("Deleted Course:\n", result);
}
// deleteCourse("64a152a1cb6a55e187aa7ddd");

// Using References (Normalization)=> CONSISTENCY

// Schemas
let auther = {
  name: "Zahoor Ahmad",
};

let course = {
  auther: "id",
};

// Using Embedded Documents (Denormalization) => PERFORMANCE

let Course = {
  auther: {
    name: "Zahoor Ahmad",
  },
};

// So there's a trade off between query consistency and performance

// Hybrid Approach
let Auther = {
  name: "Zahoor Ahmad",
  // 50 other properties
};

let Courses = {
  auther: {
    id: "ref",
    name: "Zahoor Ahmad",
  },
};

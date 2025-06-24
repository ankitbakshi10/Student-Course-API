const mongoose = require("mongoose");

// Ensure the Course model is registered before using .populate('enrolledCourses')
require("./courseModel");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }]
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

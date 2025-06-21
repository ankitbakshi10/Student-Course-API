const express = require('express');
const router = express.Router();
const Course = require('../models/courseModel');

// Create course
router.post('/', async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all courses
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

module.exports = router;

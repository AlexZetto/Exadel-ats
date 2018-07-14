const mongoose = require('mongoose');
const express = require('express');
const Student = require('../models/User');
const dataFunctions = require('../dataFunctions');

const router = express.Router();

router.get('/Tops', async (req, res) => {
  const result = {};
  result.tasksTop = await Student.find({}, { firstName: true, lastName: 1, mediumTaskScore: 1 })
    .sort({ mediumTaskScore: -1 }).limit(10);
  /*console.log(result.tasksTop[0]._id);
  console.log(result.tasksTop[0].id);
  console.log(result.tasksTop[0]);*/
  result.testsTop = await Student.find({}, { firstName: 1, lastName: 1, mediumTestScore: 1 })
    .sort({ mediumTestScore: -1 }).limit(10);
  const studentFields = ['firstName', 'lastName', 'mediumTestScore'];
  result.testsTop = dataFunctions.fieldFilter(studentFields, result.testsTop);
  /*result.testsTop = result.testsTop.map((student) => studentFields.reduce((obj, key) => {
    obj[key] = student[key]
    return obj;
  }, {}));*/
});

module.exports = router;
const express = require('express');

const route = express.Router();

const studentAuth = require('../middleware/student-auth');

const studentController = require('../controllers/student')

const passport = require('passport');

route.post("/add", studentAuth, studentController.postAddStudent)

route.post("/login", studentController.postLogin)

route.delete("/delete/:id", studentController.deleteStudent)

route.put("/update/:id", studentController.updateStudent)

route.get("/", studentController.getStudents)

module.exports = route;
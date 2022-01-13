const student = require("../models/student");
const Student = require("../models/student");
const jwt = require("jsonwebtoken");

exports.postAddStudent = async (req, res, next) => {
  console.log(req.user);
  console.log("SOmething");
  try {
    const student = new Student(req.body);
    await student.save();
    res.send("STUDENT ADDED SUCCESSFULLY");
  } catch (err) {
    res.send(err);
  }
};
exports.getStudents = async (req, res, next) => {
  try {
    const student = await Student.find();
    res.send(student);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await Student.findOneAndDelete({ _id: id });
    console.log("Success");
    res.send("Success");
  } catch (err) {
    res.send(err);
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const student = await Student.findOneAndUpdate(
      { _id: req.params.id },
      { name: req.body.name }
    );
    res.send("updated");
  } catch (err) {
    res.send(err);
  }
};

exports.postLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const student = await Student.findOne({ username });
    if (!student) return res.send("Not Found");

    if (password !== student.password) {
      return res.send("Invalid Username or Password");
    }
    data = {
      username: student.username,
      id: student.id,
    };
    let secret = "this is TCS";
    let token = await jwt.sign(data, secret, { expiresIn: "1d" });
    res.send(token);
  } catch (error) {
    res.send(error);
  }
};

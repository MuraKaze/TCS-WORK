const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session');

//routes
const studentRoutes = require("./routes/student");

const app = express();

app.use(express.json());

app.set('view engine', 'jade');
// app.set('views', 'faizan')

app.use('/about', (req, res, next) => {
    res.send("ABOUT")
})

//student route
app.use("/student", studentRoutes);

app.use('/', (req, res, next) => {
    if (req.url !== '/') {
        return next();
    }

    res.render('index')
});

app.use("*", (req, res, next) => {
    res.send("404 ERROR")
});

mongoose.connect('mongodb+srv://hannan:hannan@tcs.cahgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('Database Connected')
        app.listen(3000, () => {
            console.log("Server started Successfully!")
        });
    }).catch(err => console.log(err));
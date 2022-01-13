const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const studentSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    reg: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('Student', studentSchema);
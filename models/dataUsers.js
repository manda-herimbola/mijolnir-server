const mongoose = require('mongoose')

const dataUsers = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required:[true, "Please enter email"]
    },
    username: {
        type: String,
        unique: false,
        required: [true, "Please enter Username"]
    },
    password: {
        type: String,
        unique: true,
        required: [true, "Please enter password"],
        minLength: [6, "minimum password length is 6 characters"]
    },
}, {timestamps: true})

module.exports = mongoose.model('users', dataUsers)
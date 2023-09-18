const mongoose = require('mongoose')

const dataCategory = new mongoose.Schema({

    image: {
        type: String,
        required: false
    },
    option: {
        type: String,
        required: false
    },
    project: {
      type: String,
      required: false
    },
    users_Id: {
        type: String,
        required: false
    },
    path: {
        type: String,
        required: false
    }

}, {timestamps: true})

module.exports = mongoose.model('category', dataCategory)
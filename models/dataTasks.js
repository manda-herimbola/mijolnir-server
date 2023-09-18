const mongoose = require('mongoose')

const dataTasks = new mongoose.Schema({


    users_Id: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    project: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    option_Id: {
        type: String,
        required: false
    },
    done: {
        type: Boolean,
        required: false
    },
    /*hours: {
        type: String,
        required: false
    },
    day: {
        type: String,
        required: false
    },
    issue: {
        type: Array,
        required: false
    }*/

})

module.exports = mongoose.model('tasks', dataTasks)
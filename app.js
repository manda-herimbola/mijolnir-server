const express = require('express')
const app = express()
const mongoose = require('mongoose')
const [users, tasks, category] = require('./routes/Routes')
const bodyParser = require("body-parser")
const cors = require('./cors/cors')

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb://localhost/db', options)

const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to dataBase'))

app.use(cors)
app.use(bodyParser.json())
app.use(express.json())

app.use( '/users' , users )
app.use( '/tasks' , tasks )
app.use( '/category' , category )

app.listen( 5000 , () => console.log('server run in '+ 5000))
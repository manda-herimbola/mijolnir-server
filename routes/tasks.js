const express = require('express')
const {Request} = require('express')
const dataBase = require("../models/dataTasks");
const jwt = require("jsonwebtoken");
const tasks = express.Router()
const secretKey = 'secretKey';

/**
 *
 * @param {Request} req
 * @param res
 * @param next
 */

tasks.post('/', async (req, res) => {
    try {
        const data = await dataBase.find({userId: req.body.profileId})
        res.json(data)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

tasks.post('/by-user', (req, res) => {
    const {token} = req.body
    jwt.verify(token, secretKey, async (err, authData) => {
        const {_id: userId} = authData.usersFilter

        try {
            const data = await dataBase.find({userId})
            res.json(data)
        } catch (err) {
            console.log(err)
        }
    })
})

tasks.get("/by-category", async (req, res) => {

    try {
        const data = await dataBase.find()
        const category = new Set(data.map((item) => item.category))
        const categoryList = {}

        category.forEach((val) => {
            categoryList[val] = data.filter((item) => item.category === val)
        })

        res.json(categoryList)
    } catch (err) {
        console.log(err)
    }
})

tasks.post('/', async (req, res) => {
    const {nb, userId, work, username, email, title, description} = req.body
    const newDataBase = new dataBase({nb, userId, work, username, email, title, description})

    try {
        const newData = await newDataBase.save()
        res.status(201).json({message: 'data created', newDataBase})
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

tasks.put('/:id', async (req, res) => {
    const id = req.params.id
    const newData = req.body

    try {
        const data = await dataBase.updateOne({_id: id}, {$set: newData})
        const dataFilter = await dataBase.findOne({_id: id})

        res.status(201).json({message: 'data setting', dataFilter})
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

tasks.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const taskDelete = await dataBase.deleteOne({_id: id})
        res.status(200).json({message: 'Data_removed', taskDelete})
    } catch (err) {
        res.status(400).json({message: err})
    }
})

module.exports = tasks
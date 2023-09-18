const express = require('express')
const {Request} = require('express')

const users = express.Router()
const tasks = express.Router()
const category = express.Router()

const {use} = require("express/lib/router");
const UsersController = require("../controller/UsersController");
const TasksController = require("../controller/TasksController");
const CategoryController = require("../controller/CategoryController");

/**
 *
 * @param {Request} req
 * @param res
 * @param next
 */

/*users.get( '/', UsersController.routeGuard, UsersController.getAllUsers )*/
/*users.post( '/login', UsersController.loginUser )
users.post( '/create_account', UsersController.createUser )*/
users.get('/', UsersController.getUsers )

tasks.get('/', TasksController.getTask )
tasks.get('/:id', TasksController.getOneTask )
tasks.post('/', TasksController.postTask )
tasks.put('/:id', TasksController.putTask)
tasks.delete('/:id', TasksController.deleteTask )
tasks.post('/delete-many', TasksController.deleteAllTask )

category.get('/', CategoryController.getCategory )
category.get('/:id', CategoryController.getOneCategory)
category.post('/', CategoryController.postCategory )
category.put('/:id', CategoryController.putCategory )

module.exports = [ users , tasks , category ]
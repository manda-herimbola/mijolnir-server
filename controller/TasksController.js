const Model = require('../models/model')

class TasksController {

    static async getOneTask( req, res ){
        const { status, message } = await Model.findOne( req.params.id, 'tasks' )

        res.status( status ).json( message )
    }

    static async getTask( req, res ){
        const { status, message } = await Model.findAll('tasks')

        res.status( status ).json( message )
    }

    static async postTask ( req, res ) {
        const { status, message } = await Model.add( req.body, 'tasks' )

        res.status( status ).json( message )
    }

    static async deleteTask ( req, res ) {
        const { status, message } = await Model.deleteOne( req.params.id, 'tasks' )

        res.status( status ).json( message )
    }

    static async putTask( req, res ){
        const { status, message } = await Model.setOne( req.params.id, req.body, 'tasks' )

        res.status( status ).json( message )
    }

    static async deleteAllTask( req, res ){
        const { status, message } = await Model.deleteAll( req.body.ids )

        res.status( status ).json( message )
    }

}

module.exports = TasksController
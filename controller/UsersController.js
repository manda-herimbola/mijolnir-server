const jwt = require("jsonwebtoken");
const secretKey = 'secretKey';
const Model = require('../models/model')

class UsersController {

    static async getUsers(req, res){
        const { status, message } = await Model.findAll('users')

        res.status( status ).json( message )
    }

    /*static routeGuard( req, res, next ) {
        const bearerHeader = req.headers['authorization']
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            req.token = bearer[1]
            next()
        }
    }

    static async getAllUsers( req, res ) {
        jwt.verify(req.token, secretKey, (err, authData) => {
            if (err) res.status(403).json({err})
            else res.json(authData)
        })
    }*/

    /*static async loginUser(req, res) {
        const { status, data } = Model.findOne( req.body )
        if ( data ) {
            jwt.sign({ data }, secretKey, (err, token) => {
                if (err) res.status(500).json(err)
                else res.json({ token })
            })
        } else res.status(403).json({ err: "pass or username wrong" })
    }

    static async createUser(req, res) {
        const { status, message } = await Model.add( req.body, 'users')
        res.status( status ).json( message )
    }*/

}
module.exports = UsersController;
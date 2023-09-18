const Model = require('../models/model')
const dataCategory = require("../models/dataCategory");

class CategoryController {
    static async getCategory( req, res ){
        const { status, message } = await Model.findAll('category')

        res.status( status ).json( message )
    }
    static async getOneCategory( req, res ){
        const dataOne = await dataCategory.findOne({ _id: req.params.id })

        res.status( 201 ).json( dataOne )
    }
    static async postCategory( req, res ) {
        const { status, message } = await Model.add( req.body, 'category' )

        res.status( status ).json( message )
    }
   static async putCategory(req, res){
        const { status, message } = await Model.setOne( req.params.id, req.body, 'category' )

        res.status( status ).json( message )
    }
}

module.exports = CategoryController
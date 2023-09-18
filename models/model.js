const dataUsers = require("../models/dataUsers");
const dataTasks = require("../models/dataTasks");
const dataCategory = require("./dataCategory");

class Model {

    static async add( data, dataModels ) {
        if( dataModels === 'users' ){
            const { email, username, password } = data
            const newDataBase = new dataUsers({ email, username, password })

            try {
                const newData = await newDataBase.save()

                return { status: 201, message: { insertedId: newData._id, newData } }
            }catch (err) {

                this.Error404(err)
            }
        }
        else if( dataModels === "category" ){
            const newDataBase = new dataCategory( data )

            try {
                const newData = await newDataBase.save()

                return { status: 201, message: { insertedId: newData._id, newData }}
            }catch (err) {

                this.Error404(err)
            }
        }
        else {
            const newDataBase = new dataTasks( data )

            try {
                const newData = await newDataBase.save()

                return { status: 201, message: { insertedId: newData._id, newData }}
            }catch (err) {

                this.Error404(err)
            }
        }
    }

    static async findOne( data, dataModels ){
        if( dataModels === 'users' ){
            const { email, password } = data

            try{
                const dataOne = dataUsers.findOne({ email, password })

                return { status: 201, data: dataOne }
            }catch (err) {
                this.Error404(err)
            }
        }
        else {
            try{
                const dataOne = await dataTasks.findOne({ _id: data })

                return { status: 201, message: dataOne }
            }catch (err) {
                this.Error404(err)
            }
        }
    }

    static async findAll( dataModels ){
        if( dataModels === 'users' ){
            try {
                const allData = await dataUsers.find()

                return { status: 201, message: allData }
            }catch (err){

                this.Error404(err)
            }
        }
        else if(dataModels === "category"){
            const users_Id = '645a8a8607395c87ed8e6c0b'

            try{
                const allData = await dataCategory.find()
                const data = allData.filter( item => item.users_Id === users_Id)

                return { status: 201, message: data }
            }catch (err){
                this.Error404(err)
            }
        }
        else {
            try {
                const users_Id = "645a8a8607395c87ed8e6c0b"
                const allData = await dataTasks.find()
                const data = allData.filter( item => item.users_Id === users_Id)

                return { status: 201, message: data }
            }catch (err){
                this.Error404(err)
            }
        }
    }

    static async deleteOne( id, dataModels ){
        if( dataModels === 'users' ){
            try {
                const taskDelete = await dataUsers.deleteOne({ _id: id })

                return { status: 200, message: { message: 'Data_removed', taskDelete } }
            } catch (err) {

                this.Error404(err)
            }
        }else {
            try {
                const taskDelete = await dataTasks.deleteOne({ _id: id })

                return { status: 200, message: { message: 'Data_removed', taskDelete } }
            } catch (err) {

                this.Error404(err)
            }
        }
    }

    static async setOne( id, data, dataModels ){
        if( dataModels === 'users' ){
            try {
                const newData = await dataUsers.updateOne({ _id: id }, { $set: data })

                return { status: 201, message: { message: 'data setting', newData }}
            } catch (err) {

                this.Error404(err)
            }
        }
        else if( dataModels === "category" ){
            const newData = await dataCategory.updateOne({ _id: id }, { $set: data })

            return { status: 201, message: { message: 'data setting', insertedId: id }}
        }
        else{
            try {
                const newData = await dataTasks.updateOne({ _id: id }, { $set: data })

                return { status: 201, message: { message: 'data setting', newData }}
            } catch (err) {

                this.Error404(err)
            }
        }
    }

    static async deleteAll( ids ){
        const dataDeleted = await dataTasks.deleteMany({ _id: ids })

        return { status: 201, message: { message: 'data removed', dataDeleted }}
    }

    static Error404(err){
        return { status: 400, message: { message: err } }
    }

}

module.exports = Model;
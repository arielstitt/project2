const mongoose = require('mongoose')
const Schemas = mongoose.Schema
const childSchema = require('./childSchema')

const childSchema = new Schema({
    firstName: string,
    lastName: string,
    age: number
})




module.export = childSchema
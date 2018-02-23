const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shelterSchema = require('./shelterSchema')

const childSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number
})




module.exports = childSchema
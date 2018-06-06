const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shelterSchema = require('./shelterSchema')

const kidSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number, 
    image: String
})




module.exports = kidSchema
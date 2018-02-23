const mongoose = require('mongoose')
const childSchema = require('./childSchema')
const shelterSchema = require('./shelterSchema')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: String,
    password: String,
})




module.exports = userSchema
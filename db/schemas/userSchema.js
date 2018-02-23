const mongoose = require('mongoose')
const userSchema = require('./userSchema')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: String,
    password: String,
})




module.exports = userSchema
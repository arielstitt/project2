const mongoose = require('mongoose')
const childSchema = require('./childSchema')
const Schema = mongoose.Schema

const shelterSchema = new Schema({
    shelterImage: String,
    shelterName: String,
    streetName: String,
    state: String,
    city: String,
    children: [ childSchema ]
})




module.exports = shelterSchema
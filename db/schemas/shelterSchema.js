const mongoose = require('mongoose')
const kidSchema = require('./kidSchema')
const Schema = mongoose.Schema

const shelterSchema = new Schema({
    shelterImage: String,
    shelterName: String,
    streetName: String,
    state: String,
    city: String,
    kids: [ kidSchema ]
})




module.exports = shelterSchema
const mongoose = require('mongoose')
const childSchema = require('./childSchema')
const Schema = mongoose.Schema

const shelterSchema = new Schema({
    shelterName: String,
    addressNumber: Number,
    streetName: String, 
    state: String,
    city: String,  
    // children: [Array]
})




module.exports = shelterSchema
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shelterSchema = require('./shelterSchema')

const shelterSchema = new Schema({
    addressNumber: Number,
    streetName: String, 
    state: String,
    city: String,  
    children: [Array]
})




module.export = shelterSchema
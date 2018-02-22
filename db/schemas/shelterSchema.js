const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shelterSchema = mongoose.Schema

const shelterSchema = new Schema({
    addressNumber: Number,
    streetName: String, 
    state: String,
    city: String,  
    children: [Array]
})




modules.export = shelterSchema
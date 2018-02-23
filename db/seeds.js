require('dotenv').config()
const mongoose = require('mongoose')
const db = mongoose.connection

// MODEL IMPORT: un-comment after models folder is created and test

const Shelter = require('../models/child')
const Child = require('../models/shelter')



// ADD AN ON OPEN PROMISE AND ERR
mongoose.connect(process.env.MONGODB_URI)

const db = on('open', ()=>{
    console.log('Connected to MongoDB')
})
db.on('err', (err)=>{
    console.log(err)
})

// SET UP TEST DATA

// const shelterSchema = new Schema({
//     shelterName: String,
//     addressNumber: Number,
//     streetName: String, 
//     state: String,
//     city: String,  
//      children: [Array]
// })



const athena = new Shelter({
    shelterName: 'Athena',
    addressNumber: 123,
    streetName: 'Mt. Olympous',
    state: 'GA',
    city: 'Atlanta'
})
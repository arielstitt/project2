require('dotenv').config()
const mongoose = require('mongoose')
const db = mongoose.connection

// MODEL IMPORT: un-comment after models folder is created and test

const Shelter = require('../models/shelter')
const Child = require('../models/child')
const User = require('../models/user')

// ADD AN ON OPEN PROMISE AND ERR
mongoose.connect(process.env.MONGODB_URI)

db.on('open', ()=>{
    console.log('Connected to MongoDB')
})
db.on('error', (err)=>{
    console.log(err)
})

// SET UP TEST DATA

// const shelterSchema = new Schema({
//     shelterName: String,
//     streetName: String, 
//     state: String,
//     city: String,  
//      children: [Array]
// })


//test data
const athena = new Shelter({
    shelterImage: '',
    shelterName: 'Athena',
    streetName: 'Mt. Olympous',
    state: 'GA',
    city: 'Atlanta'
})


// remove all shelters
Shelter.remove().then(()=>{
    console.log("removed all things")
    //save multiple shelters to the database
    //return Shelter.insertMany([athena])
    console.log(athena)
    return athena.save()
})
.then(()=>{
    //close the database
    console.log('Saved Successfully')
    db.close()
}).catch((err)=>{
    console.log(err)
    db.close()
})

// // remove all Sodas
// Soda.remove().then(() => {

//     // THEN remove all Companies
//     return Company.remove()
//   }).then(() => {
  
//     // THEN save multiple companies to the database
//     return Company.insertMany([ coke, pepsi ])
//   }).then(() => {
  
//     // THEN close the database
//     console.log('Saved Successfully')
//     db.close()
//   }).catch((err) => {
  
//     // If there are any errors, log it and then close the DB
//     console.log(err)
//     db.close()
//   })
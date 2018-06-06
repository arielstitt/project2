require('dotenv').config()
const mongoose = require('mongoose')
const db = mongoose.connection

// MODEL IMPORT: un-comment after models folder is created and test

const Shelter = require('../models/shelter')
const Child = require('../models/kid')
const User = require('../models/user')

// ADD AN ON OPEN PROMISE AND ERR
mongoose.connect(process.env.MONGODB_URI)

db.on('open', () => {
    console.log('Connected to MongoDB')
})
db.on('error', (err) => {
    console.log(err)
})

const child1 = new Child({
    fistName: "Maria",
    lastName: "Sanchez",
    age: 13,
    image: "https://www.eriefamilyhealth.org/wp-content/uploads/2016/01/teen-contact-hero.jpg"
})

const child2 = new Child({
    fistName: "Eric",
    lastName: "Johnson",
    age: 17,
    image: "https://s-i.huffpost.com/gen/5137348/thumbs/o-TEENAGE-BOY-900.jpg?15"
})
//test data
const athena = new Shelter({
    shelterImage: 'http://trad-build.co.uk/wp-content/uploads/2016/06/farmhouse.jpg',
    shelterName: 'Athena',
    streetName: 'Mt. Olympous',
    state: 'GA',
    city: 'Atlanta',
    kids: [ child1, child2 ]
})


// remove all shelters
Shelter.remove()
    .then(() => {
        console.log("removed all things")
       
        return athena.save()
    })
    .then(() => {
        //close the database
        console.log('Saved Successfully')
        db.close()
    }).catch((err) => {
        console.log(err)
        db.close()
    })

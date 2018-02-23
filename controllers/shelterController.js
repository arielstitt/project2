const express = require('express')
const router = express.Router({mergeParams: true})

const Shelter = require('../models/shelter')
const User = require('../models/user')

//index
router.get('/', (req, res)=>{
    //get all shelters
    Shelter.find().then((shelters)=>{
        // send all the companies to the hbs file called index in the views/shelter directory
        res.render('shelter/index', {
            shelters: shelters
        })
    })
})
// NEW
// GET
router.get('/new', (req, res) => {

    // Just render a view, we don't need to inject any data from our server here
    res.render('shelter/new')
  })
// CREATE
// POST
// save new shelter to the all shelters page
router.post('/', (req, res)=>{
    const newShelter = new Shelter({
        addressNumber: req.body.addressNumber,
        streetName: req.body.streetName,
        state: req.body.state,
        //children: req.body.children???
    })

})
// const shelterSchema = new Schema({
//     addressNumber: Number,
//     streetName: String, 
//     state: String,
//     city: String,  
//     children: [Array]
// })
// SHOW

// EDIT
// GET

// UPDATE
// PUT/PATCH

// DESTROY 
// DELETE


module.exports = router
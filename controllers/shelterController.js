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


router.post('/', (req, res)=>{
    const newShelter = new Shelter({
        addressNumber: req.body.addressNumber,
        streetName: req.body.streetName,
        state: req.body.state
        //children: req.body.children???
    })
// save new shelter to the all shelters page
    newShelter.save()
    .then((savedShelter)=>{
    // THEN redirect to the new shelters page
    // Remember POST/PUT/PATCH/DELETE routes should not render or send anything
    res.redirect(`/shelters/${savedShelter._id}`)
    })
})


// SHOW
//GET

router.get('/:id', (req, res)=>{
    //find a single shelter
    Shelter.findById(req.params.id).then((shelter) =>{
        //render that into handlebars view and pass the shelter from our db into hbs
        res.render('shelter/show', {
            shelter: shelter
        })
    })
})

// EDIT
// GET

router.get('/:id/edit', (req, res)=>{
    Shelter.findByID(req.params.id).then((shelter)=>{
        res.render('shelter/edit', {
            id: req.params.id,
            shelter: shelter
        })
    })
})




// UPDATE
// PUT/PATCH

// DESTROY 
// DELETE


module.exports = router
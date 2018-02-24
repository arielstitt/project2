const express = require('express')
const router = express.Router({mergeParams: true})

const Shelter = require('../models/shelter')
const User = require('../models/user')

//INDEX SHELTER PAGE-----------------------------------//

router.get('/', (req, res)=>{
    //get all shelters
    Shelter.find().then((shelters)=>{
        // send all the companies to the hbs file called index in the views/shelter directory
        res.render('shelter/index', {
            shelters: shelters
        })
    })
})
// NEW SHELTER PAGE----------------------// GET//


router.get('/new', (req, res) => {

    // Just render a view, we don't need to inject any data from our server here
    res.render('shelter/new')
  })

// CREATE SHELTER PAGE--------------------// POST//


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


// SHOW SHELTER PAGE---------------------------//GET//


router.get('/:id', (req, res)=>{
    //find a single shelter
    Shelter.findById(req.params.id).then((shelter) =>{
        //render that into handlebars view and pass the shelter from our db into hbs
        res.render('shelter/show', {
            shelter: shelter
        })
    })
})

// EDIT SHELTER PAGE ----------------------------// GET//


router.get('/:id/edit', (req, res)=>{
    Shelter.findByID(req.params.id).then((shelter)=>{
        res.render('shelters/edit', {
            id: req.params.id,
            shelter: shelter
        })
    })
})


// UPDATE--------------------------------// PUT/PATCH


router.patch('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        addressNumber: req.body.addressNumber,
        streetName: req.body.streetName,
        state: req.body.state
    }, {new: true}).then((updatedShelter) => {
        res.redirect(`/shelters/${updatedShelter._id}`)
    })
})

// DESTROY ------------------------ // DELETE

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/shelters')
    })
  })


module.exports = router
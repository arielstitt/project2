const express = require('express')
const router = express.Router({ mergeParams: true })

const Shelter = require('../models/shelter')
const User = require('../models/user')

//INDEX SHELTER PAGE-----------------------------------//

router.get('/', (req, res) => {
    //get all shelters
    Shelter.find().then((shelters) => {
        // send all the companies to the hbs file called index in the views/shelter directory

        if (req.get('Content-Type') === 'application/json') {
            return res.send(shelters)
        } else {
            res.render('shelter/index', {
                shelters: shelters
            })
        }

    })
})
// NEW SHELTER PAGE----------------------// GET//


router.get('/new', (req, res) => {

    // Just render a view, we don't need to inject any data from our server here
    if (req.get('Content-Type') === 'application/json') {
        return res.send()
    } else {
        res.render('shelter/new')
    }
})

// CREATE SHELTER PAGE--------------------// POST//


router.post('/', (req, res) => {
    const newShelter = new Shelter({
        shelterImage: req.body.shelterImage,
        shelterName: req.body.shelterName,
        streetName: req.body.streetName,
        state: req.body.state,
        city: req.body.city
    })
    console.log(newShelter)
    newShelter.save()
        .then((savedShelter) => {

            res.redirect('/shelters')
        })
})


// SHOW SHELTER PAGE---------------------------//GET//


router.get('/:id', (req, res) => {
    //find a single shelter
    Shelter.findById(req.params.id).then((shelter) => {
        console.log(shelter)
        //render that into handlebars view and pass the shelter from our db into hbs
        if (req.get('Content-Type') === 'application/json') {
            return res.send(shelter)
        } else {
            res.render('shelter/show', {
                shelter: shelter
            })
        }

    })
})

// EDIT SHELTER PAGE ----------------------------// GET//


router.get('/:id/edit', (req, res) => {
    Shelter.findById(req.params.id).then((shelter) => {
        res.render('shelter/edit', {
            id: req.params.id,
            shelter: shelter
        })
    })
})

// UPDATE--------------------------------// PUT/PATCH

router.post('/:id', (req, res) => {
    Shelter.findByIdAndUpdate(req.params.id, {
        shelterImage: req.body.shelterImage,
        shelterName: req.body.shelterName,
        streetName: req.body.streetName,
        state: req.body.state,
    }, { new: true }).then((updatedShelter) => {
        console.log(req.params.id)
        console.log(updatedShelter)
        res.redirect(`/shelters/${updatedShelter._id}`)
    })
        .catch((err) => {
            console.log(err);
        })
})




// DESTROY ------------------------ // DELETE

router.delete('/:id', (req, res) => {
    Shelter.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/shelters')
    })
})





module.exports = router
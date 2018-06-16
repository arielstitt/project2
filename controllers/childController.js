const express = require('express')
const router = express.Router({ mergeParams: true })
const mongoose = require('mongoose')
const Kid = require('../models/kid')
const Shelter = require('../models/shelter')
const User = require('../models/user')


//INDEX kids
router.get('/', (req, res, next) => {
  Shelter.findById(req.params.shelterId)

    .then((shelter) => {
      const kids = shelter.kids
      res.render('kid/index', {
        kids: kids,
        shelterId: req.params.shelterId
      })
    })
})


// NEW-------------------// GET
router.get('/new', (req, res) => {
  if (req.get('Content-Type') === 'application/json') {
    return res.send()
  } else {
    res.render('kid/new')
  }
})

// CREATE----------------// POST






// SHOW
//get the sheleter by ID 
//then get the kid by id
//render the kid show page
router.get('/:id', (req, res) => {
  console.log(req.params)
  Shelter.findById(req.params.shelterId)
    .then((shelter) => {
      const kid = shelter.kids.find((kid) => {
        return kid._id == req.params.id
      })
        res.render('kid/show', {
          shelterId: req.params.shelterId,
          kid: kid
        })
    })
    .catch(err => {
      console.error(err)
    })
})


// EDIT-----------------// GET





// UPDATE---------------// PUT/PATCH






// DESTORY-----------------// DELETE
router.delete('/', (req, res)=>{
  Shelter.findById(req.params.shelterId)
  .then((shelter)=>{
    const kid = shelter.kids.id(req.params.id)
    kid.remove()
    return Shelter.save()
  }).then(()=>{
    res.redirect(`/shelter/${req.params.shelterId}/kids`)
  })
})


module.exports = router
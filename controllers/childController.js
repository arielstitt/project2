const express = require('express')
const router = express.Router({ mergeParams: true })

const Kid = require('../models/kid')
const Shelter = require('../models/shelter')
const User = require('../models/user')


//INDEX CHILDREN
router.get('/', (req, res, next) => {
    Shelter.findById(req.params.shelterId)
    
      .then((shelter) => {
          console.log(shelter)
        const kids = shelter.kids
        res.render('kid/index', {
          kids: kids
        })
      })
  })
  

    // NEW-------------------// GET
  router.get('/new', (req, res)=>{
    
  })





    // CREATE----------------// POST






    // SHOW
  //get the sheleter by ID 
  //then get the child by id
  //render the child show page
router.get('/childId', (req, res)=>{
  Shelter.findById(req.params.id)
  .then((shelter)=>{
    const child = shelter.children.id(req.params.id)
    res.render('kid/show', {
      shelterid: req.params.id,
      child: child
    })
  })
})



    // EDIT-----------------// GET





    // UPDATE---------------// PUT/PATCH






    // DESTORY-----------------// DELETE



    module.exports = router
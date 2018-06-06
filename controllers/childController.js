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






    // CREATE----------------// POST






    // SHOW





    // EDIT-----------------// GET





    // UPDATE---------------// PUT/PATCH






    // DESTORY-----------------// DELETE



    module.exports = router
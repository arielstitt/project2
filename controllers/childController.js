const express = require('express')
const router = express.Router()

const Child = require('../models/child')
const Shelter = require('../models/shelter')
const User = require('../models/user')


//INDEX CHILDREN
router.get('/', (req, res, next)=>{
    Shelter.findById((shelter)=>{
        const children = shelter.children
        res.render('child/index', {
            children: children
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
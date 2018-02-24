const express = require('express')
const router = express.Router()
const Child = require('../models/child')

//INDEX CHILDREN

router.get('/', (req, res)=>{
    Child.find().then((children)=>{
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
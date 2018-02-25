const express = require('express')
const router = express.Router({ mergeParams: true })


// get home page

router.get('/', (req, res)=>{
    res.render('index', {title: 'Mother of Horus'})
})

module.exports = router
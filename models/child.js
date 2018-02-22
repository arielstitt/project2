const mongoose = require('mongoose')
const childSchema = require('../db/schemas/childSchema')



//apply exisiting schema to a mongoose model names company
const Child = mongoose.model('child', childSchema)

//allows methods like findById, create...



module.exports = Child
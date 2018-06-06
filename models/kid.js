const mongoose = require('mongoose')
const kidSchema = require('../db/schemas/kidSchema')



//apply exisiting schema to a mongoose model names company
const Kid = mongoose.model('kid', kidSchema)

//allows methods like findById, create...



module.exports = Kid
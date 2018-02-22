const mongoose = require('mongoose')
const shelterSchema = require('../db/schemas/shelterSchema')

//apply exisiting schema to a mongoose model names company
const Shelter = mongoose.model('shelter', shelterSchema)
//allows methods like findById, create...











module.exports = Shelter
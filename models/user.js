const mongoose = require('mongoose')
const userSchema = require('../db/schemas/userSchema')

//apply exisiting schema to a mongoose model names company
const User = mongoose.model('user', userSchema)
//allows methods like findById, create...











module.exports = User
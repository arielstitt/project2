require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

// MODEL IMPORT: un-comment after models folder is created and test

const Shelter = require('../models/child')
const Child = require('../models/shelter')



// ADD AN ON OPEN PROMISE AND ERR



// SET UP TEST DATA


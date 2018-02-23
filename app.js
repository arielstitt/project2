require('dotenv').config()
const mongoose = require('mongoose')
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// method override 
const methodOverride = require('method-override')

// REQUIRE CONTROLLERS
var index = require('./controllers/index');
const userController = require('./controllers/userController')
const childController = require('./controllers/childController')
const shelterController = require('./controllers/shelterController')

// REQUIRE EXPRESS AND CONNECT MONGOOSE DB
var app = express();
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
// CHECK MONGODB CONNECTION
db.on('open', ()=>{
  console.log('successfully connected to mongoDB')
})
db.on('error', (err)=>{
  console.log(err)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

// FIRST ARGUMENT: entry point for the controller
// SECOND ARGUMENT: the controller itself
app.use('/', index);
app.use('/users', userController);

// catch 404 and forward to error handler
app.use(function(req, res) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

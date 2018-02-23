// require('dotenv').config()
// const mongoose = require('mongoose')
// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// // method override 
// const methodOverride = require('method-override')

// var index = require('./routes/index');
// var users = require('./routes/users');

// var app = express();
// mongoose.connect(process.env.MONGODB_URI)
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(methodOverride('_method'))

// app.use('/', index);
// app.use('/users', users);

// //REQUIRE THE CONTROLLER

// const shelterController = require('./controllers/shelterController')
// const childController = require('./controllers/childController')

// // FIRST ARGUMENT: entry point for the controller
// // SECOND ARGUMENT: the controller itself



// // catch 404 and forward to error handler
// app.use(function(req, res) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const methodOverride = require('method-override')


var index = require('./controllers/index');
// var userController = require('./controllers/userController');
const childController = require('./controllers/childController')
const shelterController = require('./controllers/shelterController')

var app = express();

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection

db.on('open', () => {
    console.log('Successfully connected to MongoDB')
})

db.on('error', (err) => {
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
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));

// Use controllers
app.use('/', index);
// app.use('/users', userController);
app.use('/users/:userId/properties', childController)
app.use('/users/:userId/leases', shelterController)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
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

console.log('Meat sizzling hot on PORT 3000')

module.exports = app;
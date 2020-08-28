var express = require('express');
var ejs = require('ejs');
var todoControllers = require('./controllers/pdmsController');
var multer = require('multer');
var upload = multer();

var app = express();

// set up template engine
app.set('view engine', ejs);

// static files
app.use(express.static('./public')); //remove path to use in every route

// fire controllers
todoControllers(app);

// listen to ports
app.listen(3000);
console.log('you are listening to port 3000');


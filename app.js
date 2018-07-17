var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var rootpage = require('./routes/root');
var users = require('./routes/users');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/canada-parks')
	.then(() => console.log('connection successful'))
	.catch((err)=> console.log(err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rootpage);
app.use('/', rootpage);

app.listen(3003, function () {
  console.log('Example app listening on port 3000!')
});

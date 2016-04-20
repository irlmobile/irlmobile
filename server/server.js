var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();

var port = process.env.PORT || 8000;

app.use(morgan('tiny'));
app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());

app.listen(8000, function() {
  console.log('Server listening on port ' + port);
});

mongoose.connect('mongodb://localhost/irlmobile');

module.exports = app;
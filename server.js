// Disabling eslint because we are in a different version of the language for this one file
/* eslint-disable */
var express = require('express');
var http = require('http');
var favicon = require('express-favicon');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 1337);
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '/public/index.html'));
});

app.get('/projects', function(req, res) {
  res.sendFile(path.join( __dirname, '/public/index.html'));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var path = require('path');
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

var requestHandler = require('./handleRequest');
const requestMockAPI = require('./mockAPI.js');

//Use
app.use(cors());
app.use(bodyParser.json()) ; 
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'));

// Get
app.get('/', function(req, res){
    res.sendFile(path.resolve('dist/index.html'));
    
});
app.get('/test', function (req, res) {
    res.send(requestMockAPI);
});

// Post
app.post('/article', requestHandler.validateInputRequest, requestHandler.PostHandler);

module.exports = app;


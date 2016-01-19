var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ingredientCtrl = require('./controllers/ingredientCtrl');

var app = express();
app.use(bodyParser.json());

var mongoUri = 'mongodb://localhost:27017/tacos';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log('Mongoose is connected');
});

app.post('/api/ingredient', ingredientCtrl.create);
app.get('/api/ingredient', ingredientCtrl.read);

var port = 3000;

app.listen(port, function(){
  console.log('Listening on Port ' + port);
});

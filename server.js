var express = require('express');
var app = express();

app.set('views', __dirname + '/server/views')
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index', {title:"Home", users: ['sonu','dili','binish']});
});

app.get('/me', function(req, res){
  res.send('@dilispersona');
});

app.get('/me/:name?', function(req, res){
  var name = req.params.name;
  res.send(name + ' is here');
});

app.listen(4000);
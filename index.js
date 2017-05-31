var express = require('express');
var app = express();

app.use(express.static('client'));

app.get('/', function (req, res){
  res.sendFile(__dirname +'/client/dancefloor.html')
});

app.listen(3000);

var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('HALLO ALLEMAAL, WAT FIJN DAT JE ER BENT. KARNAVAL TWEEDUIZENDACHTIEN MODDERFOKKER!')
});
 
app.listen(3000);
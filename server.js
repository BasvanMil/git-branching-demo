var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('HALLO ALLEMAAL, WAT FIJN DAT JE ER BENT. KARNAVAL TWEEDUIZENDACHTIEN MODDERFOKKER!')
});

app.get('/api/goodbye', function (req, res) {
  res.status(200).json({
  message:'goodbye my lover'
  }).end()
});

app.listen(3000); 
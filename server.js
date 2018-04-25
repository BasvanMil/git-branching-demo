var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('HALLO ALLEMAAL, WAT FIJN DAT JE ER BENT. KARNAVAL TWEEDUIZENDACHTIEN MODDERFOKKER!')
});
 
app.get('/api/helloworld', function (req, res) {
  res.status(200).json({
    message: 'Hello World!!!!11!'
  }).end()
});
 
app.listen(3000);
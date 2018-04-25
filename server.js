var express = require('express');
var app = express();
const port = 3000;
 
app.get('/', function (req, res) {
  res.send('HALLO ALLEMAAL, WAT FIJN DAT JE ER BENT. KARNAVAL TWEEDUIZENDACHTIEN MODDERFOKKER!')
});
 
app.get('/api/helloworld', function (req, res) {
  res.status(200).json({
    message: 'Hello World!!!!11!'
  }).end()
});
 

app.get('/api/goodbye', function (req, res) {
  res.status(200).json({
  message:'goodbye my lover'
  }).end()
});

app.listen(port, function(req, res){
  console.log("De server luistert aandachtig naar port "+port);
}); 

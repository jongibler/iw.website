var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//start
var port = process.argv[2];
if (port == null) { port = 80;}
app.listen(port, function () { console.log('Listening on port ' + port); });

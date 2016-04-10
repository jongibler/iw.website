var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index-video.html');
});

//start
var port = process.argv[2];
if (port == null) { port = 80;}
app.listen(port, function () { console.log('Listening on port ' + port); });
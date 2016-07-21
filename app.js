var express = require('express');
var app = module.exports = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
var MobileDetect = require('mobile-detect');
require('./pdfUploader.js');

app.get('/', function (req, res) {
  var md = new MobileDetect(req.headers['user-agent']);
  res.render(__dirname + '/public/index.ejs', { mobile : md.mobile() });
});

//start
var port = process.argv[2];
if (port == null) { port = 80;}
app.listen(port, function () { console.log('Listening on port ' + port); });

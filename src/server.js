var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var port = 3000;

app.get('/status', (req,res) => {
  res.json({"status": "We Good"});
});


app.listen(port, () => {
  console.log("Live");
});

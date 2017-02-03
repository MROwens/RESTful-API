// Packages needed
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = 3000;

// Linking to routes
app.use("/api/v1", require('../routes/api.js')(express));

// Listen on specified port
app.listen(port, () => {
  console.log("Live");
});

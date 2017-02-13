// Packages needed
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Linking to routes
app.use('/api/v1', require('./routes/api.js')(express));

// Listen on specified port
app.listen(port, () => {
  console.log('Live');
});

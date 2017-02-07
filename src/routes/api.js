var url = require('../models/url');
var urlGenerator = require('../modules/url-shortener.js');



module.exports = (express) => {

  // Instantiate express Router method
  var router = express.Router();
  // Check if server is connection is good
  router.get('/status', (req,res) => {
    res.json({"status": "Connected"});
  });
  // Entry point for API
  router.post('/url', (req,res) => {
    // Parse the body for origin link
    var url = req.body.origin;

    var generateShortUrl = urlGenerator.urlGen(6);
    // Validation
    if(url === ''){
      res.json({Origin: "No URL Provided", New: "No URL Provided"});
    }else {
      res.json({Origin: url, New: generateShortUrl});
    }
  });

  // Create
  router.post('/urls', (req,res) => {
    var generateShortUrl = urlGenerator.urlGen(6);
    url.create({url: req.body.origin, shortUrl: generateShortUrl}, (err) =>{
      res.status(500).json(err);
    }), (data) => {
      res.status(200).json(data);
    }
  });

  return router;
}

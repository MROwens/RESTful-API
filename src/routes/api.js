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
      res.json({origin: "No URL Provided", new: "No URL Provided"});
    }else {
      res.json({oigin: url, new: generateShortUrl});
    }
  });

  // Create
  router.post('/urls', (req,res) => {
    var generateShortUrl = urlGenerator.urlGen(6);
    var createShortUrl = {url: req.body.origin, shortUrl: generateShortUrl};
    url.create(createShortUrl, (err) =>{
      res.status(500).json(err);
    }), (createdUrl) => {
      res.status(200).json(createdUrl);
    }
  });

  // Find All


  return router;
}

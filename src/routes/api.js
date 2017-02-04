module.exports = (express) => {

  var urlGenerator = require('../modules/url-shortener.js');

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

  return router;
}

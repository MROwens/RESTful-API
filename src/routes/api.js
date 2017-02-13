const url = require('../models/url');
const urlGenerator = require('../modules/url-shortener.js');


module.exports = (express) => {
  // Instantiate express Router method
  const router = express.Router();
  // Entry point for API
  router.post('/url', (req, res) => {
    // Parse the body for origin link
    const bodyUrl = req.body.origin;

    const generateShortUrl = urlGenerator.urlGen(6);
    // Validation
    if (url === '') {
      res.json({ origin: 'No URL Provided", new: "No URL Provided' });
    } else {
      res.json({ oigin: bodyUrl, new: generateShortUrl });
    }
  });

  // Create
  router.post('/urls', (req, res) => {
    const generateShortUrl = urlGenerator.urlGen(6);
    const saveUrl = { url: req.body.origin, shortUrl: generateShortUrl };
    url.create(saveUrl, (createdUrl) => {
      res.status(200).json(createdUrl);
    }), (err) => {
      res.status(500).json(err);
    };
  });

  // Find All

  router.get('/urls', (req, res) => {
    url.findAll({ where: { url: { $like: 'www.%' } } }, (data) => {
      res.status(200).json(data);
    }), (err) => {
      res.status(500).json(err);
    };
  });

  // Find One
  // router.get('/urls/:id', (req, res) => {

  // });


  return router;
};

module.exports = (express) => {
  // Instantiate express Router method
  var router = express.Router();
  // Check if server is connection is good
  router.get('/status', (req,res) => {
    res.json({"status": "Connected"});
  });

  router.post('/url', (req,res) => {


  });


  return router;
}

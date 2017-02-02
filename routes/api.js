module.exports = (express) => {

  var router = express.Router();

  router.get('/status', (req,res) => {
    res.json({"status": "We Good"});
  });


  return router;
}

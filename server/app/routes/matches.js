var express = require('express');
var router = express.Router();

/*-----------------------------*/

let matches = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(matches);
});

router.post('/', function(req, res, next){
  matches.push(req.body);
  res.status(200).send(matches);
  console.log("partida inserida");
});

module.exports = router;
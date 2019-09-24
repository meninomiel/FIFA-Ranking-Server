var express = require('express');
var router = express.Router();

/*-----------------------------*/

let players = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(players);
});

router.post('/', function(req, res, next){
  //console.log(req.body);

  if (players.length == 0){
    players.push(req.body);
  } else {
    let containPlayer = players.find(player => player.nome === req.body.nome);

    if (containPlayer){
      Object.assign(containPlayer, req.body);
      console.log(`Jogador ${req.body.nome} atualizado `);
    } else {
      players.push(req.body);
      console.log(`Jogador ${req.body.nome} inserido `);
    }
  }  
  
  //console.log(players);
  res.status(200).send(players);
  
});

module.exports = router;

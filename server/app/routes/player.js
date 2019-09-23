var express = require('express');
var router = express.Router();

/*-----------------------------*/

let players = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(players);
});

router.post('/', function(req, res, next){
  console.log(req.body);
  if (players.length == 0){
    players.push(req.body);
  } else {
    let contains = false
    players.map(player => {
      if (player.nome == req.body.nome){
        Object.assign(player, req.body);
        contains = true;
        console.log(`Jogador ${req.body.nome} atualizado `);
      } 
    });
    if (contains == false) {
      players.push(req.body);
      console.log(`Jogador ${req.body.nome} inserido `);
    }
  }  
  
  console.log(players);
  res.status(200).send(players);
  
});

module.exports = router;

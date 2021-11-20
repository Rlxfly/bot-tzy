const chess = require('chess');

const gameClient = chess.create();
let move, status;

gameClient.on('check', (attack) => {
  console.log(attack);
});

status = gameClient.getStatus();
move = gameClient.move('a4');
status = gameClient.getStatus();
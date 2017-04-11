function Game(){
  this._score = 0;
}

Game.prototype.roll = function(num){
  this._score += num;
};


exports.Game = Game;

var Game = function(){
  this._score = 0;
};

Game.prototype.roll = function(num){
  this._score += num;
};

Game.prototype.score = function(){
  return this._score;
};

exports.Game = Game;

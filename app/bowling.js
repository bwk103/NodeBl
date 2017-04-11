var Game = function(){
  this._throws = [];
};

Game.prototype.roll = function(num){
  this._throws.push(num);
};

Game.prototype.score = function(){
  var score = 0;
  for (var frameIndex = 0, throwIndex = 0; frameIndex < 10; frameIndex ++, throwIndex += 2){
    score += this._throws[throwIndex];
    score += this._throws[throwIndex + 1];

    if (this._throws[throwIndex] + this._throws[throwIndex + 1] === 10 ||
    this._throws[throwIndex] === 10){
      score += this._throws[throwIndex + 2];
    }

    if (this._throws[throwIndex] === 10){
      throwIndex --;
    }
  }
  return score;
};

exports.Game = Game;

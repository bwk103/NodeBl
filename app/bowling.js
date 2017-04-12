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

    if (isSpare(this._throws[throwIndex], this._throws[throwIndex + 1]) ||
    isStrike(this._throws[throwIndex])){
      score += this._throws[throwIndex + 2];
    }

    if (this._throws[throwIndex] === 10){
      throwIndex -= 1;
    }
  }
  return score;

  function isStrike(score){
    return score === 10;
  }

  function isSpare(score, score2){
    return score + score2 === 10;
  }
};

exports.Game = Game;

var Bowling = require('./bowling');
var game = new Bowling.Game();


// Get input from user
var stringScore = process.argv[2];

// format string to remove last pipe characters if no bonus balls
if (stringScore !== undefined){
  var stringScore = removePipes(stringScore);
}

function removePipes(stringScore){
  if (stringScore[stringScore.length - 1] === '|'){
     return stringScore.substring(0, stringScore.length -2);
  } else {
    return stringScore.replace("||", "|");
  }
}

// Convert any '-' characters to 0
if (stringScore !== undefined){
  var stringScore = replaceDash(stringScore);
}

function replaceDash(stringScore){
  return stringScore.replace(/-/g, '0');
}

// Convert string input to array
if (stringScore !== undefined) {
  var arrayScore = splitScore(stringScore);
}

function splitScore(stringScore){
    return stringScore.split("|");
}

// Convert element of array into integer, add together giving frame score
if (arrayScore !== undefined){
  console.log(arrayScore);
  arrayScore = convertToInt(arrayScore);
}

function convertToInt(array){
  return array.map(function(score){
    var firstScore = parseInt(score[0]);
    var secondScore = parseInt(score[1]);
    return firstScore + secondScore;
  });
}


// Call game.roll using each score and return score
if (arrayScore !== undefined) {
  arrayScore.forEach(function(score){
    game.roll(score);
  });
  console.log(game.score());
}
exports.splitScore = splitScore;
exports.convertToInt = convertToInt;
exports.replaceDash = replaceDash;
exports.removePipes = removePipes;

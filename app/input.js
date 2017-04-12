var Bowling = require('./bowling');
var game = new Bowling.Game();


// Get input from user
var stringScore = process.argv[2];

// format string to remove last pipe characters if no bonus balls
if (stringScore !== undefined){
  var stringScore = removePipes(stringScore);
}

function removePipes(stringScore){
  return stringScore.replace(/(\||,)/g, "");
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
    return stringScore.split("");
}

// replace special characters with numbers

if (stringScore !== undefined) {
  var arrayScore = changeSpecialChars(arrayScore);
}

function changeSpecialChars(arrayScore){
  arrayScore.forEach(function(element, index){
    if(element === "X"){
      arrayScore[index] = "10";
    } else if (element === "/"){
      arrayScore[index] = (10 - parseInt(arrayScore[index -1]));
    }
  });
  return arrayScore;
}


if (stringScore !== undefined) {
  var arrayScore = convertToInt(arrayScore);
}
// convert array to ints

function convertToInt(array){
  return array.map(function(score){
    return parseInt(score);
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

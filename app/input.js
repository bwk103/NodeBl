var getInput = function(){};

getInput.prototype.getScore = function(){
  var score = process.argv[2];
  if (score === undefined){
    return "No string provided. Please provide a string containing the score";
  } else {
    var formatedScore =  this.formatScore(score);
    return formatedScore;
  }
};

getInput.prototype.formatScore = function(scoreString){
  scoreString = removePipes(scoreString);
  this.checkLength(scoreString);
  scoreString = replaceDash(scoreString);
  scoreString = splitScore(scoreString);
  scoreString = changeSpecialChars(scoreString);
  this.checkChars(scoreString);
  scoreString = convertToInt(scoreString);
  return scoreString;
};

getInput.prototype.checkLength = function(scoreString){
  if (scoreString.length < 11){
    throw new Error("The string is too short to be a valid score");
  } else if (scoreString.length > 21){
    throw new Error("The string is too long to be a valid score");
  }
};

getInput.prototype.checkChars = function(scoreArray){
  var check = /^\d+$/;
  scoreArray.forEach(function(score){
    if (check.test(score) === false){
      throw new Error("This string contains invalid characters");
    }
  });
};


function removePipes(stringScore){
  return stringScore.replace(/(\||,)/g, "");
}

function replaceDash(stringScore){
  return stringScore.replace(/-/g, '0');
}

function splitScore(stringScore){
    return stringScore.split("");
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

function convertToInt(array){
  return array.map(function(score){
    return parseInt(score);
  });
}

exports.getInput = getInput;

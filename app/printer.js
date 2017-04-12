function Print(){
  this._responses = ["Better luck next time",
                     "Not too bad!",
                     "Pretty impressive",
                     "A perfect Game!!!"
                   ];
}

Print.prototype.result = function(finalScore){
  if (finalScore === 300){
    console.log("You scored " + finalScore + ". " + this._responses[3]);
  } else if (finalScore > 200){
    console.log("You scored " + finalScore + ". " + this._responses[2]);
  } else if (finalScore > 100){
    console.log("You scored " + finalScore + ". " + this._responses[1]);
  } else
    console.log("You scored " + finalScore + ". " + this._responses[0]);
};

exports.Print = Print;

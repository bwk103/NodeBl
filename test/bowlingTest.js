var expect = require("chai").expect;
var Bowling = require("../app/bowling");

describe("bowling game", function(){

  var identicalRepeatThrows = function(numberThrows, score){
    for (var i = 0; i < numberThrows; i++){
      game.roll(score);
    }
  };

  var differentRepeatThrows = function(numberThrows, score, score2){
    for (var i = 0; i < numberThrows; i++){
      game.roll(score);
      game.roll(score2);
    }
  };

  var game;
  beforeEach(function(){
    game = new Bowling.Game();
  });

  describe("returns an integer when given a bowling score without special characters", function(){

    it("scores a gutter game as 0", function(){
      identicalRepeatThrows(20, 0);
      expect(game.score()).to.equal(0);
    });

    it("scores a game where all shots score 1 as 20", function(){
      identicalRepeatThrows(20, 1);
      expect(game.score()).to.equal(20);
    });

    it("scores a game where all shorts score 4 as 80", function(){
      identicalRepeatThrows(20, 4);
      expect(game.score()).to.equal(80);
    });

    it("Scores a game where all frame scores are 9 as 90", function(){
      differentRepeatThrows(10, 9, 0);
      expect(game.score()).to.equal(90);
    });
  });


  describe("when the player scores a spare", function(){

    it("scores a game with one spare and where remaining shots are gutters", function(){
      identicalRepeatThrows(2, 5);
      identicalRepeatThrows(18, 0);
      expect(game.score()).to.equal(10);
    });

    it("scores a game with a spare and a subsequent score", function(){
      identicalRepeatThrows(2, 5);
      identicalRepeatThrows(18, 4);
      expect(game.score()).to.equal(86);
    });
  });

  describe("when the player scores a strike", function(){

    it("scores a game with a strike and all remaining shots are gutters", function(){
      game.roll(10);
      identicalRepeatThrows(18, 0);
      expect(game.score()).to.equal(10);
    });

    it("scores a game with a strike and two subsequent scoring shots", function(){
      game.roll(10);
      differentRepeatThrows(1, 7, 2);
      identicalRepeatThrows(18, 0);
      expect(game.score()).to.equal(28);
    });

    it("Scores a game where a player scores a strike, followed by a spare", function(){
      game.roll(10);
      differentRepeatThrows(1, 9, 1);
      identicalRepeatThrows(16, 0);
      expect(game.score()).to.equal(30);
    });
  });

  describe("when the player scores a double strike (2 consecutive strikes)", function(){

    it("Scores a game with a double strike and all remaining shots are gutters", function(){
      identicalRepeatThrows(2, 10);
      identicalRepeatThrows(18, 0);
      expect(game.score()).to.equal(30);
    });

    it("scores a game with a double strike with subsequent scores", function(){
      identicalRepeatThrows(2, 10);
      identicalRepeatThrows(16, 4);
      expect(game.score()).to.equal(106);
    });
  });

  describe("when the player scores a 'Turkey'(3 consecutive strikes)", function(){

    it("Scores a game with a Turkey and all remaining shots are gutters", function(){
      identicalRepeatThrows(3, 10);
      identicalRepeatThrows(14, 0);
      expect(game.score()).to.equal(60);
    });

    it("scores a game with a Turkey with subsequent scores", function(){
      identicalRepeatThrows(3, 10);
      identicalRepeatThrows(14, 4);
      expect(game.score()).to.equal(128);
    });
  });

  describe("when the player scores a 'Goose' (4 consecutive strikes)", function(){

    it("scores a game with a Goose and remaining balls are gutters", function(){
      identicalRepeatThrows(4, 10);
      identicalRepeatThrows(12, 0);
      expect(game.score()).to.equal(90);
    });

    it("scores a game with a Goose and subsequent scoring shots", function(){
      identicalRepeatThrows(4, 10);
      identicalRepeatThrows(12, 4);
      expect(game.score()).to.equal(150);
    });
  });

  describe("when the player scores a 'Chicken' (5 consecutive strikes)", function(){

    it("scores a game with a Chicken and remaining balls are gutters", function(){
      identicalRepeatThrows(5, 10);
      identicalRepeatThrows(10, 0);
      expect(game.score()).to.equal(120);
    });

    it("scores a game with a Chicken and subsequent scoring shots", function(){
      identicalRepeatThrows(5, 10);
      identicalRepeatThrows(10, 4);
      expect(game.score()).to.equal(172);
    });
  });

  describe("when the player scores a 'Turducken' (6 consecutive strikes)", function(){

    it("scores a game with a Turducken and remaining balls are gutters", function(){
      identicalRepeatThrows(6, 10);
      identicalRepeatThrows(8, 0);
      expect(game.score()).to.equal(150);
    });

    it("scores a game with a Turducken and subsequent scoring shots", function(){
      identicalRepeatThrows(6, 10);
      identicalRepeatThrows(8, 4);
      expect(game.score()).to.equal(194);
    });
  });

  describe("when the player scores a 'Penguin' (7 consecutive strikes)", function(){

    it("scores a game with a Penguin and remaining balls are gutters", function(){
      identicalRepeatThrows(7, 10);
      identicalRepeatThrows(6, 0);
      expect(game.score()).to.equal(180);
    });

    it("scores a game with a Penguin and subsequent scoring shots", function(){
      identicalRepeatThrows(7, 10);
      identicalRepeatThrows(6, 4);
      expect(game.score()).to.equal(216);
    });
  });

  describe("when the player scores a 'Flamingo' (8 consecutive strikes)", function(){

    it("scores a game with a Flamingo and remaining balls are gutters", function(){
      identicalRepeatThrows(8, 10);
      identicalRepeatThrows(4, 0);
      expect(game.score()).to.equal(210);
    });

    it("scores a game with a Flamingo and subsequent scoring shots", function(){
      identicalRepeatThrows(8, 10);
      identicalRepeatThrows(4, 4);
      expect(game.score()).to.equal(238);
    });
  });

  describe("when the player scores a 'Turkey Vulture' (9 consecutive strikes)", function(){

    it("scores a game with a Turkey Vulture and remaining balls are gutters", function(){
      identicalRepeatThrows(9, 10);
      identicalRepeatThrows(2, 0);
      expect(game.score()).to.equal(240);
    });

    it("scores a game with a Turkey Vulture and subsequent scoring shots", function(){
      identicalRepeatThrows(9, 10);
      identicalRepeatThrows(2, 4);
      expect(game.score()).to.equal(260);
    });
  });

  describe("when the player scores a 'Woodpecker' (10 consecutive strikes)", function(){

    it("scores a game with 10 strikes and two bonus gutters", function(){
      identicalRepeatThrows(10, 10);
      identicalRepeatThrows(2, 0);
      expect(game.score()).to.equal(270);
    });

    it("scores a game with 10 strikes and two scoring bonus shots", function(){
      identicalRepeatThrows(10, 10);
      differentRepeatThrows(1, 4, 2);
      expect(game.score()).to.equal(280);
    });

    it("scores a game with 10 strikes and a spare", function(){
      identicalRepeatThrows(10, 10);
      identicalRepeatThrows(2, 5);
      expect(game.score()).to.equal(285);
    });
  });

  describe("when the player scores an 'Eagle' (11 consecutive strikes)", function(){

    it("scores a game with an Eagle and the remaining ball is a gutter", function(){
      identicalRepeatThrows(11, 10);
      game.roll(0);
      expect(game.score()).to.equal(290);
    });

    it("scores a game with a Eagle and scores with the bonus shot", function(){
      identicalRepeatThrows(11, 10);
      game.roll(4);
      expect(game.score()).to.equal(294);
    });
  });

  describe("when the player bowls a 'Turkey Hawk' (12 consecutive strikes)", function(){
    it("scores 12 consecutive strikes", function(){
      identicalRepeatThrows(12, 10);
      expect(game.score()).to.equal(300);
    });
  });
});

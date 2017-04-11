var expect = require("chai").expect;
var Bowling = require("../app/bowling");

describe("bowling game", function(){

  describe("returns an integer when given a bowling score without special characters", function(){

    var game;
    beforeEach(function(){
      game = new Bowling.Game();
    });

    it("scores a gutter game as 0", function(){
      for (var i = 0; i < 20; i++){
        game.roll(0);
      }
      expect(game._score).to.equal(0);
    });

    it("scores a game where all shots score 1 as 20", function(){
        for (var i = 0; i < 20; i++){
          game.roll(1);
        }
      expect(game.score()).to.equal(20);
    });

    it("scores a game where all shorts score 4 as 80", function(){
      for (var i = 0; i< 20; i++){
        game.roll(4);
      }
      expect(game.score()).to.equal(80);
    });

    it("Scores a game where all frame scores are 9 as 90", function(){
      for (var i = 0; i < 10 ; i++) {
        game.roll(9);
        game.roll(0);
      }
      expect(game.score()).to.equal(90);
    });
  });
});

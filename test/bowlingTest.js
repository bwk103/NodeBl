var expect = require("chai").expect;
var Bowling = require("../app/bowling");

describe("bowling game", function(){
  describe("returns an integer when given a bowling score without special characters", function(){

    it("scores a gutter game as 0", function(){
      var game = new Bowling.Game();
      for (var i = 0; i < 20; i++){
        game.roll(0);
      }
      expect(game._score).to.equal(0);
    });

    it("scores a game of all 1s as 20", function(){
      var game = new Bowling.Game();
        for (var i = 0; i < 20; i++){
          game.roll(1);
        }
      expect(game.score()).to.equal(20);
    });

    it("scores a game of all 4s as 80", function(){
      var game = new Bowling.Game();
      for (var i = 0; i< 20; i++){
        game.roll(4);
      }
      expect(game.score()).to.equal(80);
    });
  });
});

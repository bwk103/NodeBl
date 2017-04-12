var expect = require("chai").expect;
var Bowling = require("../app/bowling");

describe("bowling game", function(){

  var game;
  beforeEach(function(){
    game = new Bowling.Game();
  });

  describe("returns an integer when given a bowling score without special characters", function(){

    it("scores a gutter game as 0", function(){
      for (var i = 0; i < 20; i++){
        game.roll(0);
      }
      expect(game.score()).to.equal(0);
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
  describe("returns an integer when given a score with special characters", function(){

    describe("when the player scores a spare", function(){

      it("scores a game with one spare and where remaining shots are gutters", function(){
        game.roll(7);
        game.roll(3);
        for (var i = 0; i < 18 ; i++) {
          game.roll(0);
        }
        expect(game.score()).to.equal(10);
      });

      it("scores a game with a spare and a subsequent score", function(){
        game.roll(7);
        game.roll(3);
        game.roll(5);
        for (var i = 0; i < 17 ; i++) {
          game.roll(0);
        }
        expect(game.score()).to.equal(20);
      });
    });

    describe("when the player scores a strike", function(){

      it("scores a game with a strike and all remaining shots are gutters", function(){
        game.roll(10);
        for (var i = 0; i < 19 ; i++) {
          game.roll(0);
        }
        expect(game.score()).to.equal(10);
      });

      it("scores a game with a strike and two subsequent scoring shots", function(){
        game.roll(10);
        game.roll(7);
        game.roll(2);
        for (var i = 0; i < 16 ; i++) {
          game.roll(0);
        }
        expect(game.score()).to.equal(28);
      });

      it("Scores a game where a player scores a strike, followed by a spare", function(){
        game.roll(10);
        game.roll(9);
        game.roll(1);
        for (var i = 0; i < 16 ; i++) {
          game.roll(0);
        }
        expect(game.score()).to.equal(30);
      });
    });

    describe("when the player scores a double strike", function(){

      it("Scores a game with a double strike and all remaining shots are gutters", function(){
        game.roll(10);
        game.roll(10);
        for (var i = 0; i < 18 ; i++) {
          game.roll(0);
        }
        expect(game.score()).to.equal(30);
      });

      it("scores a game with a double strike with subsequent scores", function(){
        game.roll(10);
        game.roll(10);
        game.roll(2);
        game.roll(3);
        game.roll(1);
        for (var i = 0; i < 13 ; i++) {
          game.roll(0);
        }
        expect(game.score()).to.equal(43);
      });
    });

    describe("when the player scores a turkey", function(){

      it("Scores a game with a double strike and all remaining shots are gutters", function(){
        game.roll(10);
        game.roll(10);
        game.roll(10);
        for (var i = 0; i < 14 ; i++) {
          game.roll(0);
        }
        expect(game.score()).to.equal(60);
      });

      it("scores a game with a double strike with subsequent scores", function(){
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(2);
        game.roll(3);
        game.roll(1);
        for (var i = 0; i < 11 ; i++) {
          game.roll(0);
        }
        expect(game.score()).to.equal(73);
      });
    });

    describe("when the player bowls ten strikes", function(){

      it("scores a game with 10 strikes and two bonus gutters", function(){
        for (var i = 0; i < 10 ; i++) {
          game.roll(10);
        }
        game.roll(0);
        game.roll(0);
        expect(game.score()).to.equal(270);
      });

      it("scores a game with 10 strikes and two scoring bonus shots", function(){
        for (var i = 0; i < 10 ; i++) {
          game.roll(10);
        }
        game.roll(4);
        game.roll(2);
        expect(game.score()).to.equal(280);
      });

      it("scores a game with 10 strikes and a spare", function(){
        for (var i = 0; i < 10 ; i++) {
          game.roll(10);
        }
        game.roll(5);
        game.roll(5);
        expect(game.score()).to.equal(285);
      });
    });

    describe("when the player bowls a perfect game", function(){
      it("scores 12 consecutive strikes", function(){
        for (var i = 0; i < 12 ; i++) {
          game.roll(10);
        }
        expect(game.score()).to.equal(300);
      });
    });
  });
});

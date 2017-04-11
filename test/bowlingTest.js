var expect = require("chai").expect;
var Bowling = require("../app/bowling");

describe("it scored a bowling game", function(){
  it("scores a gutter game as 0", function(){
    var game = new Bowling.Game();
    for (var i = 0; i < 21; i++){
      game.roll(0);
    }
    expect(game._score).to.equal(0);
  });
});

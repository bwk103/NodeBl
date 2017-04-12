var expect = require("chai").expect;
var Input = require("../app/input");

describe("Input", function(){

  describe ("#splitScore", function(){

    it("splits the string into an array", function(){
      var fakeStringScore = '123';
      expect(Input.splitScore(fakeStringScore)).to.have.members([ '1', '2', '3' ]);
    });
  });

  describe ("#convertToInt", function(){
    it("converts the content of the array into integers", function(){
      var fakeArray = ['1', '2', '3'];
      expect(Input.convertToInt(fakeArray)).to.have.members([1, 2, 3]);
    });
  });

  describe ("#replaceDash", function(){
    it("replaces any - characters in the stringScore with 0s", function(){
      var fakeStringScore = "-1|22|13|-2";
      expect(Input.replaceDash(fakeStringScore)).to.equal("01|22|13|02");
    });
  });

  describe ("#removePipes", function(){
    it("removes pipes within stringScore", function(){
      var fakeStringScore = "-1|35|21|52|35||";
      expect(Input.removePipes(fakeStringScore)).to.equal("-135215235");
    });
  });
});

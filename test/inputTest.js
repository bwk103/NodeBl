var expect = require("chai").expect;
var Input = require("../app/input");

describe("Input", function(){

  describe ("#splitScore", function(){

    it("splits the string using the pipe divider", function(){
      var fakeStringScore = '1|2|3';
      expect(Input.splitScore(fakeStringScore)).to.have.members([ '1', '2', '3' ]);
    });
  });

  describe ("#convertToInt", function(){
    it("converts the content of the array into integers and adds them together to give a frame score", function(){
      var fakeArray = ['11', '22', '33'];
      expect(Input.convertToInt(fakeArray)).to.have.members([2, 4, 6]);
    });
  });

  describe ("#replaceDash", function(){
    it("replaces any - characters in the stringScore with 0s", function(){
      var fakeStringScore = "-1|22|13|-2";
      expect(Input.replaceDash(fakeStringScore)).to.equal("01|22|13|02");
    });
  });

  describe ("#removePipes", function(){
    it("removes pipes at end of string if no bonus balls used", function(){
      var fakeStringScore = "-1|35|21|52|35||";
      expect(Input.removePipes(fakeStringScore)).to.equal("-1|35|21|52|35");
    });
    it("removes the double pipes when bonus balls are thrown", function(){
      var fakeStringScore = "-1|35|21|52|35||32";
      expect(Input.removePipes(fakeStringScore)).to.equal("-1|35|21|52|35|32");
    });
  });
});

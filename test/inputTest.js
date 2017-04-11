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
});

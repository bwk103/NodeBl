var expect = require("chai").expect;
var Input = require("../app/input");

describe("GetInput", function(){

    var getInput;
    beforeEach(function(){
      getInput = new Input.getInput();
    });

  describe ("#formatScore", function(){

    it("removes any pipe characters from the string", function(){
        var fakeStringScore = "21|24|21|41";
        expect(getInput.formatScore(fakeStringScore)).to.not.include("|");
    });

    it("splits the given string into an array of integers", function(){
      var fakeStringScore = '12|32|12';
      expect(getInput.formatScore(fakeStringScore)).to.have.members([ 1, 2, 3, 2, 1, 2 ]);
    });

    it("converts any '-' characters into 0s", function(){
      var fakeStringScore = '-1|21|-3';
      expect(getInput.formatScore(fakeStringScore)).to.have.members([0, 1, 2, 1, 0, 3]);
    });

    it("converts any 'X' characters into 10s", function(){
      var fakeStringScore = 'X|X|X|34|';
      expect(getInput.formatScore(fakeStringScore)).to.have.members([10, 10, 10, 3, 4]);
    });

    it("converts any '/' characters into the appropriate value", function(){
      var fakeStringScore = "2/|5/|1/|9/|";
      expect(getInput.formatScore(fakeStringScore)).to.have.members([2, 8, 5, 5, 1, 9, 9, 1]);
    });
  });

  describe("#checkLength", function(){
    it("raises an error if the string has fewer that 11 characters", function(){
      var fakeStringScore = "X|X|-||";
      expect( () => getInput.checkLength(fakeStringScore)).to.throw(Error, /The string is too short to be a valid score/);
    });

    it("raises an error if the string has more than 21 characters", function(){
      var fakeStringScore = "--|--|--|--|--|--|--|--|--|--|--|--|";
      expect( () => getInput.checkLength(fakeStringScore)).to.throw(Error, /The string is too long to be a valid score/);
    });
  });

  describe("#checkChars", function(){
    it("raises an error if the string contains any invalid characters", function(){
      var fakeArray = ["F", "F", "3", "4", "X", "D", "E", "3", "2", "4", "1", "2", "4", "4", "2", "D", "A"];
      expect( () => getInput.checkChars(fakeArray)).to.throw(Error, /This string contains invalid characters/);
    });
    it("does not raise an error if the string does not contain invalid characters", function(){
      var fakeArray = ["1", "2", "10", "3", "5", "3"];
      expect( () => getInput.checkChars(fakeArray)).to.not.throw(Error, /This string contains invalid characters/);
    });
  });
});

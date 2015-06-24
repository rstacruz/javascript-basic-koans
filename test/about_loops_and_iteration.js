var FILL_ME = require('./fill_me.js');
var expect = require('chai').expect;

describe('loops and iteration', function() {
  describe('for statement', function () {
    it ('repeats until a specified condition evaluates to false', function () {
      var numberArray = [];
      //Make the test pass by using a for loop
      expect(numberArray).to.eql([0, 1, 2, 3, 4, 5]);
    })
  })

  describe('do...while statement', function () {
    it ('repeats until a specified condition evaluates to false', function () {
      var numberArray = [];
      //Make the test pass by using a do...while loop
      expect(numberArray).to.eql([0, 1, 2, 3, 4, 5]);
    })
  })

  describe('while statement', function () {
    it ('executes its statements as long as a specified condition evaluates to true', function () {
      var numberArray = [];
      //Make the test pass by using a while loop
      expect(numberArray).to.eql([0, 1, 2, 3, 4, 5]);
    })
  })

  describe('break', function () {
    it ('terminates a loop', function () {
      var numberArray = [];

      var i = 0;
      while(true) {
        if (i === 3) break;
        numberArray.push(i);
        i++;
      }

      expect(numberArray).to.eql(FILL_ME);
    })
  })

  describe('continue', function () {
    it ('skips the current iteration of a loop', function () {
      var numberArray = [];

      var i = 0;
      while(i < 5) {
        i++;
        if (i === 3) continue;
        numberArray.push(i);
      }

      expect(numberArray).to.eql(FILL_ME);
    })
  })

  describe('for...in', function () {
    it('iterates over properties of objects', function () {
      var myObject = {
        name: 'Object Name',
        description: 'Object Description',
        category: 'Object Category'
      };

      var keys = [];

      for (var key in myObject) {
        keys.push(key);
      }

      expect(keys).to.eql(FILL_ME);
    })
  })
})

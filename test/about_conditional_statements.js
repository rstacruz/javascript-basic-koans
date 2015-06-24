var FILL_ME = require('./fill_me.js');
var expect = require('chai').expect;

describe('conditional statement', function() {
  it('executes the if block when the condition is true', function () {
    var conditionIsTrue = false;

    if (true) {
      conditionIsTrue = true;
    }

    expect(FILL_ME).to.be.true
  })

  it('executes the else block when the condition is false', function () {
    var conditionIsFalse = false;

    if (false) {
    } else {
      conditionIsFalse = true;
    }

    expect(FILL_ME).to.be.true
  })

  describe('falsy values', function () {
    it('includes false', function () {
      var falsyValue = false;
      if (falsyValue) {
      } else {
        falsyValue = 'it is a falsy value';
      }

      expect(falsyValue).to.equal(FILL_ME);
    })

    it('includes undefined', function () {
      var falsyValue = undefined;
      if (falsyValue) {
      } else {
        falsyValue = 'it is a falsy value';
      }

      expect(falsyValue).to.equal(FILL_ME);
    })

    it('includes null', function () {
      var falsyValue = null;
      if (falsyValue) {
      } else {
        falsyValue = 'it is a falsy value';
      }

      expect(falsyValue).to.equal(FILL_ME);
    })

    it('includes 0', function () {
      var falsyValue = 0;
      if (falsyValue) {
      } else {
        falsyValue = 'it is a falsy value';
      }

      expect(falsyValue).to.equal(FILL_ME);
    })

    it('includes NaN', function () {
      var falsyValue = NaN;
      if (falsyValue) {
      } else {
        falsyValue = 'it is a falsy value';
      }

      expect(falsyValue).to.equal(FILL_ME);
    })

    it('includes the empty string', function () {
      var falsyValue = "";
      if (falsyValue) {
      } else {
        falsyValue = 'it is a falsy value';
      }

      expect(falsyValue).to.equal(FILL_ME);
    })
  })
});

var FILL_ME = require('./fill_me.js');
var expect = require('chai').expect;

describe('scopes and closures', function () {
  describe('scope', function () {
    it('limits local variable access within functions', function () {
      expect(function () {
        function myDeclaringFunction() {
          var localVar = 'I am a local variable!';
        }

        localVar;
      }).to.throw(FILL_ME)
    })

    //Please fix me
    it('does not limit local variable access within blocks', function () {
      expect(function () {
        if (true) {
          var localVar = 'I am a local variable!';
        }

        localVar;
      }).to.throw(Error)
    })
  })

  describe('closure', function () {
    it('provides access to variables of the parent function', function () {
      function parent () {
        var aParentVariable = 'I am a parent variable';

        function child () {
          return aParentVariable;
        }

        return child;
      }

      var childFunc = parent();

      expect(childFunc()).to.equal(FILL_ME);
    })
  })
});

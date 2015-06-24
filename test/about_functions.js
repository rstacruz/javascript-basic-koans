var FILL_ME = require('./fill_me.js');
var expect = require('chai').expect;

describe('function', function () {
  describe('declaration', function () {
    it('can be syntastically declared as a statement', function () {
      function sum (a, b) {
        return a + b;
      }

      expect(sum(1 + 2)).to.equal(FILL_ME);
    })

    it('can be declared as an expression', function () {
      var sum = function (a, b) {
        return a + b;
      }

      expect(sum(5 + 6)).to.equal(FILL_ME);
    })

    //Please fix me
    it('hoists function statements', function () {
      expect(function () {
        sum(1 + 2);

        function sum (a, b) {
          return a + b;
        }
      }).to.throw(Error)
    })

    //Please fix me
    it('does not hoist function expressions', function () {
      expect(function () {
        sum(1 + 2);

        var sum = function (a, b) {
          return a + b;
        }
      }).to.not.throw(TypeError)
    })
  });

  describe('parameters', function () {
    it('is passed by value if it is a primitive', function () {
      var primitiveValue = 1;

      function modifierFunction (val) {
        val = val + 20;
      };

      modifierFunction(primitiveValue);
      expect(primitiveValue).to.equal(FILL_ME);
    })

    it('is passed by reference if it is non-primitive', function () {
      var nonPrimitiveValue = { name: 'I am an object' };

      function modifierFunction (val) {
        val['name'] = 'I modified it!';
      }

      modifierFunction(nonPrimitiveValue);
      expect(nonPrimitiveValue).to.eql(FILL_ME);
    })

    it('can be accessed in an array like object called arguments', function () {
      function funcWithArguments(a, b, c) {
        expect(arguments[0]).to.equal(0);
        expect(arguments[1]).to.equal('one');
        expect(arguments[2]).to.equal(2);
      }

      funcWithArguments(FILL_ME);
    })

    it('can accept arbitrary number of arguments', function () {
      function funcWithArguments(a, b, c) {
        expect(arguments.length).to.equal(FILL_ME)
      }

      funcWithArguments(0, 'one', 2, 'three', {four: 'IV'});
    })

    it('accepts other functions', function () {
      function paramFunc () {
        return true;
      }

      function execute(fn) {
        return fn();
      }

      expect(execute(FILL_ME)).to.be.true;
    })
  })
});

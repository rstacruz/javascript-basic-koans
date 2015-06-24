var FILL_ME = require('./fill_me.js');
var expect = require('chai').expect;

describe('exception handling statements', function() {
  describe('throw statement', function () {
    it('throws an exception', function () {
      expect(function () {
        throw new Error('My Custom Error');
      }).to.throw(FILL_ME);
    })
  })

  describe('try...catch Statement', function () {
    it ('executes the catch block when an exception is raised', function () {
      var catchBlockRan = false;

      try {
        throw true;
      } catch (err){
        FILL_ME
      }

      expect(catchBlockRan).to.be.true
    })

    it ('executes the finally block when an exception is raised', function () {
      var finallyRan = false;

      try {
        throw new Error('Custom Error');
      } catch (err){
      } finally {
        FILL_ME
      }

      expect(finallyRan).to.be.true
    })

    it ('executes the finally block even without an exception', function () {
      var finallyRan = false;

      try {
      } catch (err){
      } finally {
        FILL_ME
      }

      expect(finallyRan).to.be.true
    })
  })
});

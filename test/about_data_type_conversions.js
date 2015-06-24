var FILL_ME = require('./fill_me.js');
var expect = require('chai').expect;

describe('data type conversion', function() {
  describe('string concatenation', function () {
    it('converts numeric values to strings', function () {
      var concatenatedString = 'This is number ' + 1;
      expect(concatenatedString).to.equal(FILL_ME);
    })
  })

  describe('parseInt()', function () {
    //Complete the following test cases
    it('returns an integer from string values')
    it('returns NaN from strings without integer values')
    it('can parse integers before non-numeric characters')
    it('cannot parse integers after non-numeric characters')
    it('can parse integers after a whitespace')
  })
});

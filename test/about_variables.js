var FILL_ME = require('./fill_me.js');
var expect = require('chai').expect;

describe('variable', function(){
  it('creates a value holder', function(){
    var valueHolder = 'this is a value';
    expect(valueHolder).to.equal(FILL_ME);
  })

  it('has a value of undefined if no initial value is specified', function () {
    var noInitialValue;
    expect(noInitialValue).to.equal(FILL_ME);
  })

  it('throws a ReferenceError when undeclared but accessed', function () {
    expect(function () {
      FILL_ME
    }).to.throw(ReferenceError);
  })

  it('does not throw a ReferenceError if lazily declared', function () {
    //This is possible because of variable hoisting.
    //This is bad practice though - always declare your variables before using.
    expect(function () {
      lazilyDeclared;
      FILL_ME
    }).to.not.throw(ReferenceError);
  })

  it('has function scope', function () {
    expect(function () {
      function scopeFunction() {
        var insideVar = 'inside the function';
      }

      insideVar;
    }).to.throw(FILL_ME);
  })
});

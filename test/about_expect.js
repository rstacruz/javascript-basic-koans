var FILL_ME = require('./fill_me.js');
var expect = require('chai').expect;

describe('expect', function(){
  it('checks truthfulness', function () {
    expect(FILL_ME).to.be.true
  })

  it('checks equality', function(){
    expect(FILL_ME).to.equal('foo');
  })

  it('checks data type', function(){
    expect(FILL_ME).to.be.a('boolean');
  })

  it('checks length', function () {
    expect(FILL_ME).to.have.length(3);
  })

  it('checks pressence of property', function () {
    expect(FILL_ME).to.have.property('name');
  })
})

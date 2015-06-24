var FILL_ME = require('./fill_me.js');
var expect = require('chai').expect;

describe('data type', function() {
  it('includes Boolean', function(){
    expect(true).to.be.a(FILL_ME);
    expect(false).to.be.a(FILL_ME);
  })

  it('includes Number', function(){
    expect(1).to.be.a(FILL_ME);
  })

  it('includes String', function(){
    expect('test string').to.be.a(FILL_ME);
  })

  it('includes Null', function(){
    expect(null).to.be.a(FILL_ME);
  })

  it('includes Undefined', function(){
    expect(undefined).to.be.a(FILL_ME);
  })

  //Can you fix me?
  it('is dynamic', function () {
    expect(function () {
      var dynamicVariable = 100;
      dynamicVariable = 'this is a dynamic variable';
    }).to.throw(Error);
  })
});

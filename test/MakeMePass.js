var me = require('./Human');
var expect = require('chai').expect;
var MY_NAME = 'YOUR_NAME';

describe('Human', function () {
  beforeEach(function (done) {
    me.reborn();
    done();
  })

  describe('#introduce', function () {
    it('returns an introduction', function () {
      expect(me.introduce(MY_NAME)).to.equal('Hi I am ' + MY_NAME);
    })
  });

  describe('#eat', function () {
    it('increases energy for each item', function () {
      me.eat(['egg', 'bread', 'coffee']);
      expect(me.energy).to.equal(3);
    })

    it('adds to stomach contents', function () {
      me.eat(['coffee']);
      me.eat(['egg', 'bread']);
      expect(me.stomach).to.eql(['coffee', 'egg', 'bread']);
    })
  });

  describe('#run', function () {
    it('decreases energy', function () {
      me.eat(['banana', 'milk']);
      me.run(2);
      expect(me.energy).to.equal(0);
    });
  });

  describe('#poo', function () {
    it('depletes stomach contents', function () {
      me.eat(['burger', 'fries']);
      me.poo();
      expect(me.stomach).to.eql([]);
    })

    it('does not affect energy', function () {
      me.eat(['burger', 'fries']);
      me.poo();
      expect(me.energy).to.eql(2);
    })
  })
})

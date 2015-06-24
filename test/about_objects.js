var FILL_ME = require('./fill_me.js');
var expect = require('chai').expect;

describe('Object', function () {
  it('can be created via object initializer', function () {
    //it is the same as creation via object literal
    var author = { name: 'Brendan Eich' };
    expect(author).to.be.a(FILL_ME);
    expect(author.name).to.equal(FILL_ME);
  })

  it('can be created via a constructor function', function () {
    function Human (name) {
      this.name = name;
    }

    var author = new Human('Brendan Eich');
    expect(author).to.be.a(FILL_ME);
    expect(author.name).to.equal(FILL_ME);
  })

  describe('properties', function () {
    it('can be set via dot notiation', function () {
      var author = { name: 'Brendan Eich' };
      author.description = 'Javascript creator.';

      expect(author.description).to.equal(FILL_ME);
    });

    it('can be set via bracket notiation', function () {
      var author = { name: 'Brendan Eich' };
      author['description'] = 'Javascript creator.';

      expect(author.description).to.equal(FILL_ME);
    });
  })

  describe('this keyword', function () {
    it('refers to the current object instance', function () {
      var author = {
        name : 'Brendan Eich',
        introduce: function () {
          return 'Hi I am ' + this.name + '!';
        }
      };

      expect(author.introduce()).to.equal(FILL_ME);
    })
  })

})

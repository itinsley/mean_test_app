//
// Test Restaurant model, integrating to mongodb
//
var chai = require('chai')
var expect = chai.expect
var mongoose = require('mongoose');
var Restaurant = require("../../app/models/restaurant");
config = require("../../config")

describe('Restaurant', function() {
  before(function(done) {
    if (mongoose.connection.db) return done();
    mongoose.connect(config.url, function(){
      Restaurant.remove(done);
    });
  });

  before(function(done) {
    var original_ronald = new Restaurant({name: 'ronalds restaurant'})

    original_ronald.save(function (err, ronald) {
      if (err) throw(err);
      done();
    });
  });

  it('should not allow duplicate names', function () {
    var ronald = new Restaurant({name: 'ronalds restaurant'})
    ronald.save(function (err, ronald) {
      // Getting a reasonable error message from Mongo for this is not
      // straightforward
      expect(err.code).to.eql(11000);
      expect(err.err).to.match(/duplicate key.*name/);
    });
  })
})

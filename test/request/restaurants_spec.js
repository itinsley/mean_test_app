var chai = require('chai')
var request = require('supertest')
var app = require('../../server')

var expect = chai.expect

var Restaurant = require('../../app/models/restaurant')

describe('API', function () {
  before('Given test data is created', function(done) {
    var fixtures = require('pow-mongodb-fixtures').connect(app.config.url);
    fixtures.clearAndLoad({
      restaurants: [
        { name: 'Chinese Restaurant', description: 'Chinese food' },
        { name: 'Thai Restaurant', description: 'Thai food' },
        { name: 'Japanese Restaurant', description: 'Japanese food' },
      ]
    });
    done();
  });
  describe('Restaurants', function () {
    describe('GET', function () {
      it('returns all records', function (done) {
        request(app).get('/api/restaurants').expect(200).end(function (err, res) {
          if (err) { return done(err) }
          expect(res.body.length).to.eql(3);
          first = res.body[0];
          expect(first.name).to.eql("Chinese Restaurant")
          expect(first.description).to.eql("Chinese food")
          done()
        })
      })
    })
  })
  describe('Restaurant/:id', function () {
    describe('GET', function () {
      it('returns a single record', function (done) {
        //Lookup ID
        Restaurant.find({name: 'Chinese Restaurant'}, function(err, restaurants) {
          //Retrieve using ID
          restaurant=restaurants[0];
          request(app).get('/api/restaurant/'+restaurant.id).expect(200).end(function (err, res) {
            if (err) { throw err }
            expect(res.body.name).to.eql("Chinese Restaurant")
          })
        })
        done()
      })
    })
  })
})


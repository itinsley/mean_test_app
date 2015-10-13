var chai = require('chai')
var request = require('supertest')
var app = require('../../server')

var expect = chai.expect

describe('API', function () {
  before('Given test data is created', function() {

    var fixtures = require('pow-mongodb-fixtures').connect(app.config.url);
    fixtures.clearAndLoad({
        restaurants: [
            { name: 'Chinese Restaurant', description: 'Chinese food' },
            { name: 'Thai Restaurant', description: 'Thai food' },
            { name: 'Japanese Restaurant', description: 'Japanese food' },
        ]
    });
  });
  describe('Restaurants', function () {
    describe('GET', function () {
      it('returns all records', function (done) {
        request(app).get('/api/restaurants').expect(200).end(function (err, res) {
          if (err) { return done(err) }
          console.log(res.body);
          expect(res.body.length).to.eql(3);
          first = res.body[0];
          expect(first.name).to.eql("Chinese Restaurant")
          expect(first.description).to.eql("Chinese food")
          done()
        })
      })
    })
  })
})

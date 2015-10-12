var chai = require('chai')
var request = require('supertest')
var app = require('../../server')

var expect = chai.expect

describe('API', function () {
  describe('Restaurants', function () {
    describe('GET', function () {
      it('returns all records', function (done) {
        request(app).get('/api/restaurants').expect(200).end(function (err, res) {
          if (err) { return done(err) }
          expect(res.body.length).to.eql(4);
          first = res.body[0];
          expect(first.name).to.eql("Din Tai Fung")
          expect(first.description).to.eql("Renowned handmade dumplings, plus noodle dishes and soups, doled out in a modern Taiwanese chain.")
          done()
        })
      })
    })
  })
})

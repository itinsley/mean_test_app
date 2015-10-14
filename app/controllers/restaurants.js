var express = require('express')
  , router = express.Router()
  , Restaurant = require('../models/restaurant')

router.get('/api/restaurants', function(req, res) {
  // use mongoose to get all restaurants in the database
  Restaurant.find(function(err, restaurants) {
    if (err)
      res.send(err);
    res.json(restaurants);
  });
});

router.get('/api/restaurant/:id', function(req, res) {
  Restaurant.findById(req.params.id, function(err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
});

module.exports = router
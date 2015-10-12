var express = require('express')
  , router = express.Router()
  , Restaurant = require('../models/restaurant')

// sample api route
router.get('/api/restaurants', function(req, res) {
  // use mongoose to get all restaurants in the database
  Restaurant.find(function(err, restaurants) {
    if (err)
      res.send(err);
    res.json(restaurants);
  });

});

module.exports = router
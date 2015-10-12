var express = require('express')
  , router = express.Router()
  , Restaurant = require('../models/restaurant')

// sample api route
router.get('/api/restaurants', function(req, res) {
  // use mongoose to get all restaurants in the database
  // res.send("hello world..")
  Restaurant.find(function(err, restaurants) {
    if (err)
      res.send(err);
    res.json(restaurants);
  });


  // Simple proof of connection to db
  // var mongoose = require('mongoose');
  // mongoose.connect('mongodb://localhost/stencil-dev');

  // var restaurantSchema = mongoose.Schema({
  //   name: String,
  //   description: String
  // });

  // var db = mongoose.connection;
  // db.on('error', console.error.bind(console, 'connection error:'));
  // db.once('open', function (callback) {
  //   var Restaurant = mongoose.model('Restaurant', restaurantSchema);
  //   Restaurant.find(function (err, restaurants) {
  //     if (err) return console.error(err);
  //      res.json(restaurants);
  //   });
  // });

});

module.exports = router
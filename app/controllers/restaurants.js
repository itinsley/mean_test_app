Restaurant = require('../models/restaurant')

module.exports =
{
  index: function (req, res) {
    // use mongoose to get all restaurants in the database
    Restaurant.find(function(err, restaurants) {
      if (err)
        res.send(err);
      res.json(restaurants);
    });
  },

  show: function (req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
      if (err)
        res.send(err);
      res.json(restaurant);
    });
  }

};
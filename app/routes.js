var express = require('express')
  , router = express.Router()

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  //Restaurants
  var restaurants = require('./controllers/restaurants')
  app.get('/api/restaurants', restaurants.index)
  app.get('/api/restaurants/:id', restaurants.show)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });

};

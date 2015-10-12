var express = require('express')
  , router = express.Router()
  , Nerd = require('./models/nerd')

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  router.use('/nerds', require('./controllers/nerds'))



  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });

};

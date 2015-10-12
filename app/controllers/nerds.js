var express = require('express')
  , router = express.Router()
  , Nerd = require('../models/nerd')

// sample api route
router.get('/api/nerds', function(req, res) {
  // use mongoose to get all nerds in the database
  Nerd.find(function(err, nerds) {
    if (err)
      res.send(err);
    res.json(nerds);
  });
});

module.exports = router
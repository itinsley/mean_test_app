var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
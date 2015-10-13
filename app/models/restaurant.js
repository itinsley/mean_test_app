var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
  description: {String}
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
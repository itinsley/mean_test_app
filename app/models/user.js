var mongoose = require('mongoose');

var schema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
});

module.exports = mongoose.model('User', schema);
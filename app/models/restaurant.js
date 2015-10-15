var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
  description: {type: String},
  userVotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserVotes'}]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
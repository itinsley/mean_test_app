async = require('async')
Restaurant = require('./app/models/restaurant')
User = require('./app/models/user')

var config = require('./config');
var mongoose = require('mongoose');

var cn = mongoose.connection;
cn.on('error', console.error.bind(console, 'connection error:'));

function createRestaurants(callback){
  User.find({},function(err, users){
    var userIds = users.map(function(u){return u.id})
    var restaurant = new Restaurant({"name": "ian best", "description": "the best", "userVotes": userIds});
    restaurant.save(function (err, result) {
      callback();
    });
  })
}

function createUser(userName, callback){
  var user = new User({"name": userName})
  user.save(callback);
}

function createUsers(callback){
  userData = ['peter','john','paul','mary']
  async.each(userData, createUser, completed=function(err){
    callback();
  });
}

cn.once('open', function(){
  async.series([
    function(callback){ cn.db.dropDatabase(callback) },
    createUsers,
    createRestaurants,
    function(callback){
      cn.close()
      callback();
      console.log("Finished. Database closed")
    }
  ])
});

mongoose.connect(config.url);

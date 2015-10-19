async = require('async')
Restaurant = require('./app/models/restaurant')
User = require('./app/models/user')

var config = require('./config');
var mongoose = require('mongoose');

var cn = mongoose.connection;
cn.on('error', console.error.bind(console, 'connection error:'));

function createRestaurants(crCallback){
  var userIds
  async.series([
    function(callback){
      User.find({},function(err, us){
        userIds = us.map(function(u){return u.id})
        callback()
      })
    },
    function(callback){
      var restaurant = new Restaurant({"name": "ian best", "description": "the best", "userVotes": userIds});
      restaurant.save(function (err, result) {
        return crCallback();
      });
    }
  ])

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


async.series([
  function(callback){ cn.once('open', callback) },
  function(callback){ cn.db.dropDatabase(callback) },
  createUsers,
  createRestaurants,
  function(callback){
    cn.close()
    callback();
    console.log("Finished. Database closed")
  }
]);

mongoose.connect(config.url);

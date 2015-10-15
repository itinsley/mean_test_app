async = require('async')
Restaurant = require('./app/models/restaurant')

var config = require('./config');
var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


//ASYNC TASKS
tasks = []
tasks.push(function(callback){
  var restaurant = new Restaurant({"name": "ian best", "description": "the best"});
  restaurant.save(function (err, result) {
    handleError(err);
    console.log("saved" + result);
    callback();
  });
});

//Open db, then clear the data synchronously before running async tasks and closing db.
db.once('open', function (callback) {
  mongoose.connection.db.dropDatabase(function(err, result) {
    handleError(err);
  });

  async.parallel(tasks, function(){
    db.close()
  });
});

mongoose.connect(config.url);

function handleError(err){
  if (err)
    console.log("EXCEPTION");
    console.log(err);
    process.exit();
}


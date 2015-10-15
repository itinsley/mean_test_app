Restaurant = require('./app/models/restaurant')

var config = require('./config');
var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Nested callback mess - put this into async or equivalent
db.once('open', function (callback) {

  mongoose.connection.db.dropDatabase(function(err, result) {
    console.log("Clearing database");
    if (err) handleError(err);

    var restaurant = new Restaurant({
      "name": "ian8a", "description": "the best"
    });
    restaurant.save(function (err, result) {
      if (err) handleError(err)
      console.log('saved...'+ result)
      db.close();
    });
  });

});

mongoose.connect(config.url);


function handleError(err){
  console.log("EXCEPTION");
  console.log(err);
  process.exit();
}


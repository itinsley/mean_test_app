var env = process.env.NODE_ENV || 'development'
  , cfg = require('./config.'+env);

console.log("starting in " + env + " environment")

module.exports = cfg;

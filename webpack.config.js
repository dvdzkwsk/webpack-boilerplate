// Determine which webpack configuration to use (defaults to using
// the current NODE_ENV if no --config flag is provided).
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const config = require('yargs')
  .default({ make : process.env.NODE_ENV })
  .argv
  .make;

// Compile and export webpack configuration.
require('babel/register');
module.exports = exports = require('./build/webpack/make')(config);

const env   = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const merge = require('../../utils/merge-deep');

// Return default configuration extended based on current environment
module.exports = exports = merge(
  require('./configs/default'),
  require(`./configs/${env}`)
);

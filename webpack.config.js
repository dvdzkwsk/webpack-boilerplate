require('babel/register');

module.exports = [
  require('./build/webpack/client')()
];

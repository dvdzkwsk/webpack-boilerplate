process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = exports = {

  // environment
  NODE_ENV  : process.env.NODE_ENV,
  __DEBUG__ : process.env.NODE_ENV === 'development',
  __DEV__   : process.env.NODE_ENV === 'development',
  __PROD__  : process.env.NODE_ENV === 'production',

  // build system
  VENDOR_DEPENDENCIES : ['react'],
  SRC_DIRNAME  : 'src',
  DIST_DIRNAME : 'dist',

  // server
  WEBPACK_PORT : 2000,
  SERVER_PORT  : 3000
};

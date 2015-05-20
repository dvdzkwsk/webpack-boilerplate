const path = require('path');
const webpack = require('webpack');
const WEBPACK_CONFIG = require('../webpack/make')('development');
const ENTRY = [
  'app/index.js',
  'app/spec.js'
];

module.exports = config => {
  config.set({
    files : [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      ...ENTRY
    ],
    frameworks : ['chai', 'mocha'],
    preprocessors: ENTRY.reduce((memo, file) => {
      memo[file] = ['webpack'];
      return memo;
    }, {}),
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir  : 'dist/coverage/'
    },
    browsers: ['PhantomJS'],
    singleRun : true,
    webpack : {
      resolve : WEBPACK_CONFIG.resolve,
      module : {
        loaders: WEBPACK_CONFIG.module.loaders
      },
      plugins : [WEBPACK_CONFIG.plugins[0]] // global variable definitions
    },
    webpackMiddleware : {
      noInfo : true
    },
    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ]
  });
};

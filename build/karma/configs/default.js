import path from 'path';
import makeWebpackConfig from '../../webpack/make';

const WEBPACK_CONFIG = makeWebpackConfig('development');
const TEST_SUITE_ENTRY = 'app/spec.js';

export default {
  files : [
    './node_modules/phantomjs-polyfill/bind-polyfill.js',
    TEST_SUITE_ENTRY
  ],
  frameworks : ['chai', 'mocha'],
  preprocessors: {
    'app/**/*.js' : ['webpack']
  },
  reporters: ['spec'],
  browsers: ['PhantomJS'],
  webpack : {
    devtool : 'inline-source-map',
    resolve : WEBPACK_CONFIG.resolve,
    module  : {}
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
};

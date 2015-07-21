import { NODE_ENV, SRC_DIRNAME } from '../../config';
import makeWebpackConfig from '../webpack/make-config';

const WEBPACK_CONFIG = makeWebpackConfig(
  require('../webpack/client')
);

function makeDefaultConfig () {
  return {
    files : [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      `${SRC_DIRNAME}/unit-test-entry.js`
    ],
    frameworks : ['chai', 'mocha'],
    preprocessors : {
      [`${SRC_DIRNAME}/**/*.js`] : ['webpack']
    },
    reporters : ['spec'],
    browsers : ['PhantomJS'],
    webpack : {
      devtool : 'inline-source-map',
      resolve : WEBPACK_CONFIG.resolve,
      module  : {
        loaders : WEBPACK_CONFIG.module.loaders
      }
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
}

export default function (karmaConfig) {
  return karmaConfig.set(
    require(`./configs/_${NODE_ENV}`)(makeDefaultConfig())
  );
};

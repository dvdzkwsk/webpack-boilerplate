import makeWebpackConfig from '../../webpack/make';

const WEBPACK_CONFIG = makeWebpackConfig('development');

export default {
  webpack : {
    module : {
      loaders : WEBPACK_CONFIG.module.loaders
    }
  },
  singleRun : false
};

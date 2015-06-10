import webpack from 'webpack';
import config from './default';

export default {
  devtool : 'eval',
  target  : 'web',
  entry   : {
    app : config.entry.app.concat([
      `webpack-dev-server/client?http://localhost:3000`,
      `webpack/hot/dev-server`
    ])
  },
  plugins : config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]),
  loaders : config.module.loaders.map(loader => {
    if (/js/.test(loader.test)) {
      loader.loaders.unshift('react-hot');
    }

    return loader;
  })
};

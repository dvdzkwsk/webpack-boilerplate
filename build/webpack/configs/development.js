const config  = require('./default');
const webpack = require('webpack');

module.exports = exports = {
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
  ])
};

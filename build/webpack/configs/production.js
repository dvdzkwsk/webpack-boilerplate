import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from './default';

export default {
  plugins : config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      output : {
        'comments'  : false
      },
      compress : {
        'unused'    : true,
        'dead_code' : true
      }
    }),
    new ExtractTextPlugin('[name].[contenthash].css')
  ]),
  loaders : config.module.loaders.map(loader => {
    if (/\.scss/.test(loader.test)) {
      loader.loader = ExtractTextPlugin.extract(
        loader.loaders[0], loader.loaders.slice(1).join('!')
      );
    }

    return loader;
  })
};

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// path helpers
const root = path.resolve(__dirname, '../../../');
const resolve = function (localPath) {
  return path.resolve(root, localPath);
};

module.exports = exports = {
  entry : {
    app : [
      resolve('app/index')
    ],
    // vendor : ['react']
  },
  output : {
    path : resolve('public'),
    filename : '[name].js'
  },
  target  : 'web',
  plugins : [
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV' : JSON.stringify(env)
      },
      '__PROD__' : env === 'production',
      '__DEV__'  : env === 'development'
    }),
    new HtmlWebpackPlugin({
      template : resolve('app/index.html'),
      hash : true
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].js'),
    new webpack.optimize.DedupePlugin()
  ],
  resolve : {
    extensions : ['', '.js', '.jsx']
  },
  module : {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint'
    }],
    loaders : [{
      test : [/\.(js|jsx)?$/],
      loaders : ['babel'],
      include : resolve('app')
    }, {
      test : [/\.scss?$/],
      loaders : ['style', 'css', 'sass'],
      include : resolve('app')
    }]
  },
  jshint: {
    emitErrors : false,
    failOnHint : false,
    reporter   : require('jshint-loader-stylish')()
  }
};

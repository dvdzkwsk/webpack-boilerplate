const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Hook into the webpack "hot" option to determine whether we're in
// development or compile mode (NOTE: this cannot rely on the NODE_ENV
// being "development", since we could theoretically compile the application
// to disk with the development configuration).
const HOT_MODE = require('yargs')
  .default({ hot : false }).argv.hot;

const NODE_ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const node_env = NODE_ENV.toLowerCase();

// path helpers
const root = path.resolve(__dirname, '../../../');
const resolve = function (localPath) {
  return path.resolve(root, localPath);
};

// Sass requires different plugins based on the environment -- in development
// we don't want to use ExtractTextPlugin since it breaks HMR, and dynamically
// adding/removing it in other configs is more precarious than simply
// accounting for it here.
const SASS_LOADERS = [
  'style-loader',
  'css-loader',
  'autoprefixer?browsers=last 2 version',
  'sass-loader'
];

module.exports = exports = {
  entry : {
    app : [
      resolve('app/index')
    ]
    // vendor : ['react']
  },
  output : {
    path : resolve('dist'),
    filename : '[name].[hash].js'
  },
  target  : 'web',
  plugins : [
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV' : JSON.stringify(node_env)
      },
      '__PROD__' : node_env === 'production',
      '__DEV__'  : node_env === 'development'
    }),
    new HtmlWebpackPlugin({
      template : resolve('app/index.html'),
      hash : true
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
    // Don't use ExtractTextPlugin if we're in "hot" mode
    HOT_MODE ? undefined : new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.optimize.DedupePlugin()
  ].filter(plugin => typeof plugin !== 'undefined'),
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
      // Don't use ExtractTextPlugin if we're in "hot" mode
      loader : HOT_MODE ?
        SASS_LOADERS.join('!') :
        ExtractTextPlugin.extract(
          SASS_LOADERS[0], SASS_LOADERS.slice(1).join('!')
        ),
      include : resolve('app')
    }]
  },
  jshint: {
    emitErrors : false,
    failOnHint : false,
    reporter   : require('jshint-loader-stylish')()
  }
};

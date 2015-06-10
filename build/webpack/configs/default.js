import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const NODE_ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const node_env = NODE_ENV.toLowerCase();

// path helpers
const root = path.resolve(__dirname, '../../../');
const resolve = function (localPath) {
  return path.resolve(root, localPath);
};

export default {
  entry : {
    app : [
      resolve('app/index')
    ],
    vendor : ['react']
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
    new webpack.optimize.DedupePlugin()
  ],
  resolve : {
    extensions : ['', '.js', '.jsx'],
    alias : {
      actions     : resolve('app/actions'),
      components  : resolve('app/components'),
      config      : resolve('app/config'),
      constants   : resolve('app/constants'),
      dispatchers : resolve('app/dispatchers'),
      models      : resolve('app/models'),
      services    : resolve('app/services'),
      stores      : resolve('app/stores')
    }
  },
  module : {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint'
    }],
    loaders : [{
      test : [/\.(js|jsx)?$/],
      include : resolve('app'),
      loaders : ['babel?optional[]=runtime&stage=0']
    }, {
      test : /\.scss?$/,
      include : resolve('app'),
      loaders : [
        'style-loader',
        'css-loader',
        'autoprefixer?browsers=last 2 version',
        'sass-loader'
      ]
    }]
  },
  jshint: {
    emitErrors : false,
    failOnHint : false,
    reporter   : require('jshint-loader-stylish')()
  }
};

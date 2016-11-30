var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./../webpack.common.js');
var helpers = require('./../webpack.helpers.js');
var argv = require('yargs').argv;

const API = argv.API;

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:4200/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'API': JSON.stringify(API)
      }
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    proxy: {
      '/api/*': {
        target: "http://localhost:8081",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
});

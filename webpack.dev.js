require('dotenv').config()
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const definePlugin = new webpack.DefinePlugin({
});


module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-module-source-map',
  output: {
    path: __dirname + '/dist/dev',
    publicPath: '/'
  },
  devServer: {
    filename: 'index_bundle.js',
    port: 9305,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/DCF_AU': {
        target: 'http://localhost:3945',
        secure: false,
        proxyTimeout: 1000 * 60 * 2,
        changeOrigin: true
      }
    }
  },
  plugins: [
    definePlugin,
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    })
  ]
});

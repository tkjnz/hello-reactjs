const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: "./src/Index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader","sass-loader"]
      },
      {
        test: /\.(pdf|png|jpg|JPG|gif|svg|eot|woff2|woff|ttf|tsv)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
        ],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: 'favicon.ico',
      template: 'index.html'
    })
  ]
};
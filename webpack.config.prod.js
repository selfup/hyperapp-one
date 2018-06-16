const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const OUTPUT_DIR = process.env.OUTPUT_DIR || './build';

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Hyperapp One',
  }),
  new ExtractTextPlugin({
    filename: '[name].[hash].css',
    allChunks: true,
  }),
  new UglifyJsPlugin(),
  new MinifyPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
];

module.exports = () => ({
  entry: [
    './src/index.js',
    './styles/app.css',
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, OUTPUT_DIR),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './'),
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
    ],
  },
  plugins,
});

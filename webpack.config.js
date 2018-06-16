const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Hyperapp One',
    template: './src/index.html',
  }),
  new ExtractTextPlugin({
    filename: './[name].[hash].css',
    allChunks: true,
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
];

module.exports = () => ({
  entry: [
    './src/index.js',
    './styles/app.css',
  ],
  devtool: 'source-map',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './'),
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
  devServer: {
    publicPath: '/',
    open: true,
  },
});

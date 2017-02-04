const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
    './styles/app.css',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './bundle.css',
      allChunks: true,
    }),
  ],
};

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

const plugins = [
  new ExtractTextPlugin({
    filename: './bundle.css',
    allChunks: true,
  }),
];

module.exports = function webpackStuff(env) {
  const bundle = { name: 'bundle.js' };

  if (env && env.minify) plugins.push(new BabiliPlugin());
  if (env && env.hyper) bundle.name = '.bundle.js';

  return {
    entry: [
      './src/index.js',
      './styles/app.css',
    ],
    output: {
      filename: `${bundle.name}`,
      path: path.resolve(__dirname, './'),
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
          ],
          plugins: [],
        },
        include: [
          path.resolve(__dirname, './'),
        ],
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      }],
    },
    plugins,
  };
};

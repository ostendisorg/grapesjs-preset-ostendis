var webpack = require('webpack');
var pkg = require('./package.json');
const path = require('path');
var env = process.env.WEBPACK_ENV;
var plugins = [];

if(env !== 'dev'){
  plugins.push(new webpack.BannerPlugin(pkg.name + ' - ' + pkg.version));
}

module.exports = {
  entry: {
    'grapesjs-preset-ostendis': './src/index.js',
    'grapesjs-preset-ostendis-adv': './src/adv/index.js',
  },
  output: {
    filename: '[name].min.js',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: /src/,
        exclude: /node_modules/
      }
    ],
  },
  externals: {'grapesjs': 'grapesjs'},
  plugins: plugins
};

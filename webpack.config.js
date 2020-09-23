var webpack = require('webpack');
var pkg = require('./package.json');
var name = 'grapesjs-preset-ostendis';
var env = process.env.WEBPACK_ENV;
var plugins = [];

if(env !== 'dev'){
  plugins.push(new webpack.BannerPlugin(pkg.name + ' - ' + pkg.version));
}

module.exports = {
  entry: './src',
  output: {
      filename: name + '.min.js',
      library: name,
      libraryTarget: 'umd',
  },
  optimization: {
    minimize: true
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

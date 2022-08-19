var webpack = require('webpack');
var pkg = require('./package.json');
const path = require('path');
var env = process.env.WEBPACK_ENV;
var plugins = [];

if(env !== 'dev'){
  plugins.push(new webpack.BannerPlugin(pkg.name + ' - ' + pkg.version));
}

plugins.push(new webpack.ProvidePlugin({process: 'process/browser'}));
plugins.push(new webpack.ProvidePlugin({Buffer: ['buffer', 'Buffer']}));

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "."),
      watch: true,
    },
  },
  entry: {
    'grapesjs-preset-ostendis': './src/index.js',
    'grapesjs-preset-ostendis-adv': './src/adv/index.js',
    'grapesjs-preset-ostendis-simple': './src/simple/index.js',
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
  plugins: plugins,
  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      "stream": require.resolve("stream-browserify"),
    }
  }
};

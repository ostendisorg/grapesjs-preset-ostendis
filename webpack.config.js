const isProduction = process.env.NODE_ENV == 'production';
const path = require('path');

const config = {
  entry: {
    'grapesjs-preset-ostendis': './src/index.ts',
    'grapesjs-preset-ostendis-adv': './src/adv/index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "."),
      watch: true,
    },
  },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};

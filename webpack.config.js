const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');

// environment
const env = process.env.NODE_ENV;
const isDev = env !== 'production';

const config = {
  mode: env,
  entry: './src/js/app.js',
  output: {
    filename: 'app.bundle.js',
    path: BUILD_DIR,
  },
  devServer: {
    contentBase: './dist',
    port: 9000,
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(s|c)ss$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      },
    ],
  },
  resolve: {
    alias: {
      'Js': path.resolve(__dirname, 'src/js/'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
};

module.exports = config;
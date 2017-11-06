const config = require('./app.config');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: config.js.entry,
  output: {
    path: path.resolve(__dirname, config.js.dest),
    filename: config.js.bundle
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({sourceMap: true})
  ]
};

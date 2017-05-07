const path = require('path');

module.exports = {
  entry: './entry.js',
  output: {
    path: path.resolve('./'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    alias: {
      'dwayne-html-loader': path.resolve(__dirname, 'lib', 'loader.js')
    }
  },
  module: {
    loaders: [
      { test: /\.png$/, loader: 'file-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.html$/,
        loader: 'dwayne-html-loader',
        exclude: /node_modules/,
        options: {
          keepOriginal: true,
          exportFunction: true
        }
      },
      { test: /\.pug$/, loader: 'babel-loader!dwayne-html-loader!pug-html-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};

var path    = require('path');
var webpack = require('webpack');
var appPath = path.join(__dirname, 'frontend');
var aliases = {
  _app: appPath,
  _components: path.join(appPath, 'components')
};

module.exports = {
  devServer: {
    contentBase: __dirname,
    info: true,
    hot: false,
    inline: true
  },
  entry: path.join(aliases._app, 'app.js'),
  output: {path: __dirname, filename: 'main.js'},
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
    alias: aliases
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: [
            'es2015',
            'stage-1',
            'react'
          ]
        }
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  }
};

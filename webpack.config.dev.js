var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
    ]}, {
      test: /\.json$/,
      loaders: ['json-loader'],
      include: path.join(__dirname, 'src')
    }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};

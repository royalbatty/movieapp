const path = require('path');
const cssPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: path.resolve(__dirname, 'src', 'public', 'main.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [ /node_modules/, /apify_storage/],
        loader: [{
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-react'],
          }
        }]
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new cssPlugin({
      filename:'[name].css',
      chunkFilename: '[id].css'
    })
  ]
}
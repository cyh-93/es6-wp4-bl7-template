const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'helloworld.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        enforce: "pre",
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
    ]
  }
}
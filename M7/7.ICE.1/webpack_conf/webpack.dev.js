const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    main: './src/index.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      // name this file main, so that it does not get automatically requested as a static file
      filename: './main.html',
      template: path.resolve(__dirname, '..', 'src', 'main.html'),
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        // regex to see which files to run babel on
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
});
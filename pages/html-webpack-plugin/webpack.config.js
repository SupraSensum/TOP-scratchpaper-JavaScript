const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 5 Video Tutoirals',
      filename: 'index.html',
      inject: 'body',
      template: './src/index.html',
    }),
  ],
};

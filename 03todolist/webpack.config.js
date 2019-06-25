const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: "development",
  entry: './src/vm.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      {
        test: /\.js$/i,
        exclude:/node_modiles/,
         use: {
           loader:'babel-loader',
           options:{
             presets:['@babel/preset-env'],
             plugins:["@babel/plugin-proposal-class-properties"]
           }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html')
    }),
    //热更新插件
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: [
      path.join(__dirname, './dist')
    ],
    host: "127.0.0.1",
    port: 8800,
    hot: true,
    overlay: true,
  }
}
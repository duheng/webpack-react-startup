var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
    // publicpath是处理你在js中应用文件的路径问题的，
    // 比如如果你需要发布文件到cdn上，那么你需要替换所有开发时使用的相对路径变成cdn的域名
    // 这个时候使用publicpath就能统一解决
    // public配合webpack-dev-serve使用的时候需要注意
    // 如果你的output.path 和 output.publicPath不一样
    // 你指定content-base的时候指向path，但是dev-server会把访问路径映射到publicPath上
    // 开发时并不是必须的，生产环境中，如需进行cdn等的配置可以用这个进行相应的设置

    //publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'templates/index.html'),
      inject: true
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    alias: {
      'style': __dirname + '/styles',
      'component': __dirname + '/components/',
      'module': __dirname + '/modules/'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['react-hot', 'babel'],
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
};
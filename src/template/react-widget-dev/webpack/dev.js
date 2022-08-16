// development config
const {merge} = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: { // 调试模式的入口
    index: [
      '../editor/EditorDemo.jsx',
      '../src/index.jsx',
      '../src/plugin.jsx',
    ],
  },
  // devServer: {
  //   hot: true, // enable HMR on the server
  //   historyApiFallback: true // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  // },
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({template: '../editor/index.html'}),
    new webpack.HotModuleReplacementPlugin() // enable HMR globally
  ]
});

const path = require('path');
// const nodeExternals = require('webpack-node-externals');

// 统一路径解析
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// 构建快应用自定义组件需要
module.exports = {
  // hap命令构建时的配置参数
  cli: {
    enableE2e: false, // 是否开启 e2e 测试
    devtool: 'source-map' // webpack 的devtool选项，默认为 none
  },
  sourceRoot: 'src', // process.env.BUILD_MODE === 'widget' ? 'src/components' : 'src',
  // 采用webpack编译时的配置
  webpack: {
    mode: 'production', // 'development'（开发模式），'production'（生产模式）
    target: ['web', 'es5'], // 使用共同的特性子集
    resolve: {
      extensions: ['.ux', '.js', '.jsx', '.ts', '.tsx', '.vue', '.esm.js', '.umd.js', '.min.js', '.json'], // 用于配置webpack在尝试过程中用到的后缀列表
      alias: {
        '@': resolve('src'),
      }
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            }
          ]
        }
      ]
    },
    plugins: []
  }
}
// 其他编译时配置项见：https://doc.quickapp.cn/ide/toolkit-config.html?h=outputPath
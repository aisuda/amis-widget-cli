'use strict';

const path = require('path');

// 统一路径解析
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// 包括生产和开发的环境配置信息
module.exports = {
  settings: {
    enableESLint: false, // 调试模式是否开启ESLint，默认关闭ESLint检测代码格式
    enableESLintFix: false, // 是否自动修正代码格式，默认不自动修正
    enableStyleLint: false, // 是否开启StyleLint，默认开启ESLint检测代码格式
    enableStyleLintFix: false // 是否需要StyleLint自动修正代码格式
  },
  webpack: {
    entry: {
      // webpack构建入口（优先级低于于dev、build和build2lib中的entry配置）
      index: './src/index.js'
    },
    resolve: {
      // webpack的resolve配置
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'json'], // 用于配置webpack在尝试过程中用到的后缀列表
      alias: {
        '@': resolve('src')
      }
    },
    createDeclaration: false, // 打包时是否创建ts声明文件
    ignoreNodeModules: false, // 打包时是否忽略 node_modules
    allowList: [], // ignoreNodeModules为true时生效
    externals: [], // 从输出的 bundle 中排除依赖
    projectDir: ['src'],
    sassResources: []
  },
  envParams: {
    // 项目系统环境变量
    common: {
      // 通用参数
      '#version#': '20200810.1'
    },
    local: {
      // 本地开发环境
      '#dataApiBase#': 'http://localhost:1024', // 数据接口根地址
      '#assetsPublicPath#': 'http://localhost:1024', // 静态资源根地址
      '#routeBasePath#': '/' // 路由根地址
    },
    online: {
      // 线上正式环境配置参数
      '#dataApiBase#': '/', // 数据接口根地址 "//xxx.cn/"格式
      '#assetsPublicPath#': '', // 静态资源根地址 "//xxx.cn/_spa/projectName"格式
      '#routeBasePath#': '/' // 路由根地址 "/_spa/projectName/"格式
    }
  },
  dev: {
    entry: {
      // webpack构建入口（优先级高于webpack.entry）
      index: './src/index.js'
    },
    // 用于开启本地调试模式的相关配置信息
    NODE_ENV: 'development',
    port: 80,
    autoOpenBrowser: true,
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    proxyTable: {
      '/apiTest': {
        target: 'http://api-test.com.cn', // 不支持跨域的接口根地址
        ws: true,
        changeOrigin: true
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  build: {
    entry: {
      index: './src/index.js'
    },
    // 用于构建生产环境代码的相关配置信息
    NODE_ENV: 'production', // production 模式，会启动UglifyJsPlugin服务
    assetsRoot: resolve('dist'), // 编译完成的文件存放路径
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    productionSourceMap: false,
    // Gzip off by default as many popular public hosts such as
    // Surge or Netlify already gzip all public assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: false
  },
  build2lib: {
    entry: {
      index: './src/index.js'
    },
    // 用于构建第三方功能包的配置文件
    NODE_ENV: 'production',
    libraryName: '', // 构建第三方功能包时最后导出的引用变量名
    assetsRoot: resolve('dist'), // 编译完成的文件存放路径
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    ignoreNodeModules: true, // 打包时是否忽略 node_modules
    allowList: [], // ignoreNodeModules为true时生效
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    bundleAnalyzerReport: false
  },
  build2esm: {
    input: resolve('src/main.js'),
    fileName: 'index'
  }
};

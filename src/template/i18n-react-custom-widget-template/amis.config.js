'use strict';
const path = require('path');
// const i18nLoader = require('webpack-react-i18n');
const i18nConfig = require('./i18nConfig');

// 统一路径解析
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// 包括生产和开发的环境配置信息
module.exports = {
  settings: {
    enableESLint: false, // 调试模式是否开启ESLint，默认开启ESLint检测代码格式
    enableESLintFix: false, // 是否自动修正代码格式，默认不自动修正
    enableStyleLint: false, // 是否开启StyleLint，默认开启ESLint检测代码格式
    enableStyleLintFix: false, // 是否需要StyleLint自动修正代码格式
  },
  webpack: {
    resolve: {
      // webpack的resolve配置
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.umd.js', '.min.js', '.json'], // 用于配置webpack在尝试过程中用到的后缀列表
      alias: {
        '@': resolve('src'),
        $assets: resolve('src/assets'),
        $public: resolve('public'),
      },
      // conditionNames: ['require']
    },
    // sassResources中的sass文件会自动注入每一个sass文件中
    sassResources: [
      resolve('./src/assets/css/common.scss'),
      resolve('./src/assets/css/mixin.scss'),
    ],
    // createDeclaration: true, // 打包时是否创建ts声明文件
    ignoreNodeModules: false, // 打包时是否忽略 node_modules
    allowList: [], // ignoreNodeModules为true时生效
    // externals: ['amis-editor'],
    projectDir: ['src'],
    // template: resolve('./public/template.html'), // dev本地调试时需要html模板
    plugins: [], // 用于添加自定义 plugins
    // cssLoaderUrlDir: 'antd',
    cssLoaderOption: {
      // modules: true
    },
    moduleRules: [
      {
        test: /.*(ts|tsx|js|jsx)$/,
        loader: 'webpack-react-i18n',
        options: i18nConfig
      }
    ],
    babelPlugins: (curBabelPlugins) => {
      curBabelPlugins.shift(); // 剔除掉 babel-plugin-import，antd5 不需要
    },
  },
  dev: {
    entry: {
      // 本地编辑器中预览自定义组件
      index: [
        './src/index.js', // widget/info-card.jsx
        './src/widget/plugin/info-card-plugin.jsx',
      ],
    },
    // 用于开启本地调试模式的相关配置信息
    NODE_ENV: 'development',
    port: 80,
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    proxyTable: {
      '/apiTest': {
        target: 'http://api-test.com.cn', // 不支持跨域的接口根地址
        ws: true,
        changeOrigin: true,
      },
    },
    cssSourceMap: true,
    closeHotReload: false, // 是否关闭热更新
    // closeEditorClient: false, // 是否关闭自动注入editor
    autoOpenBrowser: true,
    // editorClient: 'aipage'
  },
  preview: {
    entry: {
      // 本地预览自定义组件内容
      index: './src/preview.js',
    },
    // 用于开启本地调试模式的相关配置信息
    NODE_ENV: 'development',
    port: 80,
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    proxyTable: {
      '/apiTest': {
        target: 'http://api-test.com.cn', // 不支持跨域的接口根地址
        ws: true,
        changeOrigin: true,
      },
    },
    cssSourceMap: true,
    closeHotReload: false, // 是否关闭热更新
    autoOpenBrowser: true,
  },
  linkDebug: {
    entry: {
      // 外链调试（amis-saas中预览自定义组件）
      index: [
        './src/index.js', // widget/info-card.jsx
        './src/widget/plugin/info-card-plugin.jsx',
      ],
    },
    // 用于开启本地调试模式的相关配置信息
    NODE_ENV: 'development',
    port: 80,
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    proxyTable: {
      '/apiTest': {
        target: 'http://api-test.com.cn', // 不支持跨域的接口根地址
        ws: true,
        changeOrigin: true,
      },
    },
    cssSourceMap: true,
    closeHotReload: true, // 是否关闭热更新
    autoOpenBrowser: false,
    closeHtmlWebpackPlugin: true, // 关闭HtmlWebpackPlugin
  },
  build2lib: {
    entry: {
      // 自定义组件入口文件
      reactInfoCard: './src/index.js', // widget/info-card.jsx
      reactInfoCardPlugin: './src/widget/plugin/info-card-plugin.jsx',
    },
    // 用于构建生产环境代码的相关配置信息
    NODE_ENV: 'production', // production development
    libraryName: 'amisWidget', // 构建第三方功能包时最后导出的引用变量名
    assetsRoot: resolve('./dist'), // 打包后的文件绝对路径（物理路径）
    assetsPublicPath: './', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    ignoreNodeModules: true, // 打包时是否忽略 node_modules
    allowList: [], // ignoreNodeModules为true时生效
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    bundleAnalyzerReport: false,
  },
};

'use strict';
const path = require('path');
// import uni from "@dcloudio/vite-plugin-uni";
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
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.vue',
        '.esm.js',
        '.umd.js',
        '.min.js',
        '.json',
      ], // 用于配置webpack在尝试过程中用到的后缀列表
      alias: {
        '@': resolve('src'),
      },
      conditionNames: ['require'],
    },
    // createDeclaration: true, // 打包时是否创建ts声明文件
    allowList: [], // ignoreNodeModules为true时生效
    externals: [],
    projectDir: ['src'],
    // template: resolve('./index.html'), // 使用自己的html模板
    cssLoaderUrl: true,
    ignoreNodeModules: false, // 打包时是否忽略 node_modules
    moduleRules: [], // 用于配置自定义loaders
    plugins: [], // 用于配置自定义plugins // uni()
  },
  dev: {
    entry: {
      // 本地调试模式的入口
      index: ['./build/linkDebug.js'],
    },
    // 用于开启本地调试模式的相关配置信息
    NODE_ENV: 'development',
    port: 80,
    autoOpenBrowser: true,
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    cssSourceMap: false,
    closeHotReload: false, // 是否关闭热更新
    closeEditorClient: false, // 是否关闭自动注入editor
    editorClient: 'aipage',
  },
  linkDebug: {
    entry: {
      // 外链调试（爱速搭中预览本地自定义组件）
      index: './build/linkDebug.js',
    },
    NODE_ENV: 'production',
    port: 80,
    autoOpenBrowser: false,
    closeHtmlWebpackPlugin: true, // 关闭HtmlWebpackPlugin
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    cssSourceMap: true,
    closeHotReload: true, // 是否关闭热更新
    debugMode: 'aipage-editor',
  },
};

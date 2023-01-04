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
    ignoreNodeModules: false, // 打包时是否忽略 node_modules
    allowList: [], // ignoreNodeModules为true时生效
    externals: [],
    projectDir: ['src'],
    // template: resolve('./index.html'), // 使用自己的html模板
    cssLoaderUrl: true,
    moduleRules: [], // 用于配置自定义loaders
    plugins: [], // 用于配置自定义plugins // uni()
  },
  preview: {
    entry: {
      // 本地预览自定义组件内容
      index: './src/h5components/preview.js',
    },
    // 用于开启本地调试模式的相关配置信息
    NODE_ENV: 'development',
    port: 80,
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    cssSourceMap: true,
    closeHotReload: false, // 是否关闭热更新
    autoOpenBrowser: true,
  },
  dev: {
    entry: {
      // 本地调试模式的入口
      index: [
        './src/h5components/uni-column-chart/renderer.ts',
        './src/h5components/uni-column-chart/plugin.ts',
        './src/h5components/uni-mount-chart/renderer.ts',
        './src/h5components/uni-mount-chart/plugin.ts',
        './src/h5components/uni-line-chart/renderer.ts',
        './src/h5components/uni-line-chart/plugin.ts',
        './src/h5components/uni-area-chart/renderer.ts',
        './src/h5components/uni-area-chart/plugin.ts',
        './src/h5components/uni-pie-chart/renderer.ts',
        './src/h5components/uni-pie-chart/plugin.ts',
        './src/h5components/uni-ring-chart/renderer.ts',
        './src/h5components/uni-ring-chart/plugin.ts',
      ],
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
      index: [
        './src/h5components/uni-column-chart/renderer.ts',
        './src/h5components/uni-column-chart/plugin.ts',
        './src/h5components/uni-mount-chart/renderer.ts',
        './src/h5components/uni-mount-chart/plugin.ts',
        './src/h5components/uni-line-chart/renderer.ts',
        './src/h5components/uni-line-chart/plugin.ts',
        './src/h5components/uni-area-chart/renderer.ts',
        './src/h5components/uni-area-chart/plugin.ts',
        './src/h5components/uni-pie-chart/renderer.ts',
        './src/h5components/uni-pie-chart/plugin.ts',
        './src/h5components/uni-ring-chart/renderer.ts',
        './src/h5components/uni-ring-chart/plugin.ts',
      ],
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
  // build2lib 用于打包生成环境的js模块
  build2lib: {
    entry: {
      uniColumnRenderer: './src/h5components/uni-column-chart/renderer.ts',
      uniColumnPlugin: './src/h5components/uni-column-chart/plugin.ts',
      uniMountRenderer: './src/h5components/uni-mount-chart/renderer.ts',
      uniMountPlugin: './src/h5components/uni-mount-chart/plugin.ts',
      uniLineRenderer: './src/h5components/uni-line-chart/renderer.ts',
      uniLinePlugin: './src/h5components/uni-line-chart/plugin.ts',
      uniAreaRenderer: './src/h5components/uni-area-chart/renderer.ts',
      uniAreaPlugin: './src/h5components/uni-area-chart/plugin.ts',
      uniPieRenderer: './src/h5components/uni-pie-chart/renderer.ts',
      uniPiePlugin: './src/h5components/uni-pie-chart/plugin.ts',
      uniRingRenderer: './src/h5components/uni-ring-chart/renderer.ts',
      uniRingPlugin: './src/h5components/uni-ring-chart/plugin.ts',
    },
    // 用于构建生产环境代码的相关配置信息
    NODE_ENV: 'production', // development / production
    libraryName: 'aipageWidget', // 构建第三方功能包时最后导出的引用变量名
    assetsRoot: resolve('./preview'), // 打包后的文件绝对路径（物理路径）
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    ignoreNodeModules: true, // 打包时是否忽略 node_modules
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    bundleAnalyzerReport: false,
  },
};

// amis 功能模块引用主入口
const akfun = require('akfun');
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const amisInit = require('./amisInit');
const amisInitByCopy = require('./amisInitByCopy');
const inspect = require('./inspect');
const amisConfigInit = require('../utils/amisConfigInit.js');
const curConfig = require('../config/index'); // 获取当前项目根目录下的配置文件
const { consoleTag } = require('../utils/amisParams');
const AmisEditorDebugPlugin = require('../plugins/AmisEditorDebugPlugin');

module.exports = {
  amisInit,
  amisInitByCopy,
  inspect,
  amisConfigInit,
  dev: () => {
    if (!curConfig.dev.closeEditorClient) {
      // 自动注入editor示例
      let editorClientPath = path.resolve(__dirname, '../editor/EditorDemo.jsx');
      // 设置工程有效目录
      let editorClientDir = path.resolve(__dirname, '../editor');
      // 设置css-loader配置项[url]的生效目录，避免editor示例中的字体icon失效
      curConfig.webpack.cssLoaderUrlDir = 'node_modules/amis-widget-cli/editor';

      if (curConfig.dev.editorClient === 'aipage') {
        editorClientPath = path.resolve(__dirname, '../aipage/index.jsx');
        editorClientDir = path.resolve(__dirname, '../aipage');
        curConfig.webpack.cssLoaderUrlDir = 'node_modules/amis-widget-cli/aipage';
      }

      if (curConfig.dev && curConfig.dev.entry && !curConfig.dev.closeEditorClient) {
        Object.keys(curConfig.dev.entry).forEach((name) => {
          curConfig.dev.entry[name] = [editorClientPath].concat(curConfig.dev.entry[name]);
        });
      }

      if (
        curConfig.webpack &&
        curConfig.webpack.projectDir &&
        Array.isArray(curConfig.webpack.projectDir)
      ) {
        curConfig.webpack.projectDir.push(editorClientDir);
      } else {
        curConfig.webpack.projectDir = [editorClientDir];
      }
    }

    // 解决editor代码面板不展示问题
    if (
      curConfig.webpack &&
      curConfig.webpack.plugins &&
      Array.isArray(curConfig.webpack.plugins)
    ) {
      curConfig.webpack.plugins.push(new MonacoWebpackPlugin());
    } else {
      curConfig.webpack.plugins = [new MonacoWebpackPlugin()];
    }
    // 本地开发模式（编辑器内预览模式）
    akfun.dev(curConfig, consoleTag);
  },
  preview: () => {
    // 仅用于预览组件本身内容
    if (!curConfig.preview) {
      console.error('未找到 preview 相关配置。');
      process.exit(1);
    }
    // 将 preview 设置给 dev
    curConfig.dev = curConfig.preview;
    delete curConfig.preview;
    // 本地预览模式（仅预览组件内容）
    akfun.dev(curConfig, consoleTag);
  },
  linkDebug: () => {
    // amis-saas预览模式（通过外链形式添加预览脚本）
    if (!curConfig.linkDebug) {
      console.error('未找到 debug 相关配置。');
      process.exit(1);
    }
    // 将 linkDebug 设置给 dev
    curConfig.dev = curConfig.linkDebug;
    delete curConfig.linkDebug;
    if (!curConfig.dev.debugMode) {
      curConfig.dev.debugMode = 'amis-editor'; // 默认开启amis-editor调试模式
    }
    if (curConfig.dev.debugMode === 'amis-editor') {
      // 添加自定义webpack插件: 对外链进行特殊处理
      if (
        curConfig.webpack &&
        curConfig.webpack.plugins &&
        Array.isArray(curConfig.webpack.plugins)
      ) {
        curConfig.webpack.plugins.push(new AmisEditorDebugPlugin());
      } else {
        curConfig.webpack.plugins = [new AmisEditorDebugPlugin()];
      }
    }

    delete curConfig.dev.ignoreNodeModules;
    curConfig.webpack.ignoreNodeModules = false;
    // 剔除amis和amis-editor，复用amis-saas中的amis和amis-editor等现有模块
    if (curConfig.webpack) {
      curConfig.webpack.externals = {
        amis: 'commonjs2 amis',
        'amis-core': 'commonjs2 amis-core',
        'amis-ui': 'commonjs2 amis-ui',
        'amis-editor': 'commonjs2 amis-editor',
        'amis-editor-core': 'commonjs2 amis-editor-core',
        'amis-formula': 'commonjs2 amis-formula',
        'aipage-editor': 'commonjs2 aipage-editor',
        '@fex/amis': 'commonjs2 @fex/amis',
        '@fex/amis-core': 'commonjs2 @fex/amis-core',
        '@fex/amis-ui': 'commonjs2 @fex/amis-ui',
        '@fex/amis-editor': 'commonjs2 @fex/amis-editor',
        '@fex/aipage-editor': 'commonjs2 @fex/aipage-editor',
        '@fex/amis-formula': 'commonjs2 @fex/amis-formula',
        '@fex/amis-editor-core': 'commonjs2 @fex/amis-editor-core'
      };
    }
    // 本地预览模式（仅预览组件内容）
    akfun.dev(curConfig, consoleTag);
  },
  build: () => akfun.build('build', curConfig, consoleTag), // 构建脚本：生产环境
  build2lib: () => akfun.build('lib', curConfig, consoleTag), // 构建脚本：生产环境
  build2esm: (fileName) => akfun.build2esm(fileName, curConfig, consoleTag) // 构建esm输出模块
};

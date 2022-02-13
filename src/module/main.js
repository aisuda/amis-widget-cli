// amis 功能模块引用主入口
const akfun = require('akfun');
const amisInit = require('./amisInit');
const inspect = require('./inspect');
const amisConfigInit = require('../utils/amisConfigInit.js');
const curConfig = require('../config/index'); // 获取当前项目根目录下的配置文件
const { consoleTag } = require('../utils/amisParams');
const DebugPlugin = require('../plugins/DebugPlugin');
const path = require('path');

module.exports = {
  amisInit,
  inspect,
  amisConfigInit,
  dev: () => {
    // 自动注入editor示例
    const editorClientPath = path.resolve(__dirname, '../editor/EditorDemo.jsx');
    if (curConfig.dev && curConfig.dev.entry && !curConfig.dev.closeEditorClient) {
      Object.keys(curConfig.dev.entry).forEach((name) => {
        curConfig.dev.entry[name] = [editorClientPath].concat(curConfig.dev.entry[name]);
      });
    }
    // 设置工程有效目录
    const editorClientDir = path.resolve(__dirname, '../editor');
    if (
      curConfig.webpack &&
      curConfig.webpack.projectDir &&
      Array.isArray(curConfig.webpack.projectDir)
    ) {
      curConfig.webpack.projectDir.push(editorClientDir);
    } else {
      curConfig.webpack.projectDir = [editorClientDir];
    }
    // 设置css-loader配置项[url]的生效目录，避免editor示例中的字体icon失效
    curConfig.webpack.cssLoaderUrlDir = 'node_modules/amis-widget-cli/editor';
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
    // 添加自定义webpack插件: 对外链进行特殊处理
    if (
      curConfig.webpack &&
      curConfig.webpack.plugins &&
      Array.isArray(curConfig.webpack.plugins)
    ) {
      curConfig.webpack.plugins.push(new DebugPlugin());
    } else {
      curConfig.webpack.plugins = [new DebugPlugin()];
    }
    delete curConfig.dev.ignoreNodeModules;
    curConfig.webpack.ignoreNodeModules = false;
    // 剔除amis和amis-editor，复用amis-saas中的amis和amis-editor模块
    if (curConfig.webpack) {
      curConfig.webpack.externals = {
        amis: 'commonjs2 amis',
        'amis-editor': 'commonjs2 amis-editor'
      };
      // 待进一步完善，需要兼容接收用户自定义的externals
      // curConfig.webpack.externals['amis'] = 'commonjs2 amis';
      // curConfig.webpack.externals['amis-editor'] = 'commonjs2 amis-editor';
    }
    // 本地预览模式（仅预览组件内容）
    akfun.dev(curConfig, consoleTag);
  },
  build: () => akfun.build('build', curConfig, consoleTag), // 构建脚本：生产环境
  build2lib: () => akfun.build('lib', curConfig, consoleTag), // 构建脚本：生产环境
  build2esm: (fileName) => akfun.build2esm(fileName, curConfig, consoleTag) // 构建esm输出模块
};

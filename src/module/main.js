// amis 功能模块引用主入口
const akfun = require('akfun');
const amisInit = require('./amisInit');
const inspect = require('./inspect');
const amisConfigInit = require('../utils/amisConfigInit.js');
const curConfig = require('../config/index'); // 获取当前项目根目录下的配置文件
const { consoleTag } = require('../utils/amisParams');
const DebugPlugin = require('../plugins/DebugPlugin');

module.exports = {
  amisInit,
  inspect,
  amisConfigInit,
  dev: () => {
    // 本地开发模式（编辑器内预览模式）
    akfun.dev(curConfig, consoleTag);
  },
  preview: () => {
    if (!curConfig.preview) {
      console.error('未找到 preview 相关配置。');
      process.exit(1);
    }
    // 将 preview 设置给 dev
    curConfig.dev = curConfig.preview;
    // 本地预览模式（仅预览组件内容）
    akfun.dev(curConfig, consoleTag);
  },
  debug: () => {
    // amis-saas预览模式（通过外链形式添加预览脚本）
    if (!curConfig.debug) {
      console.error('未找到 debug 相关配置。');
      process.exit(1);
    }
    // 将 preview 设置给 dev
    curConfig.dev = curConfig.debug;
    // 本地预览模式（仅预览组件内容）
    akfun.dev(curConfig, consoleTag);
    akfun.dev(curConfig, consoleTag);
  },
  build: () => akfun.build('build', curConfig, consoleTag), // 构建脚本：生产环境
  build2lib: () => akfun.build('lib', curConfig, consoleTag), // 构建脚本：生产环境
  build2esm: (fileName) => akfun.build2esm(fileName, curConfig, consoleTag) // 构建esm输出模块
};

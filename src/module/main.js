// amis 功能模块引用主入口
const akfun = require('akfun');
const amisInit = require('./amisInit');
const inspect = require('./inspect');
const amisConfigInit = require('../utils/amisConfigInit.js');
const curConfig = require('../config/index'); // 获取当前项目根目录下的配置文件
const { consoleTag } = require('../utils/amisParams');

module.exports = {
  amisInit,
  inspect,
  amisConfigInit,
  dev: () => {
    akfun.dev(curConfig, consoleTag);
  },
  build: () => akfun.build('build', curConfig, consoleTag), // 构建脚本：生产环境
  build2lib: () => akfun.build('lib', curConfig, consoleTag), // 构建脚本：生产环境
  build2esm: (fileName) => akfun.build2esm(fileName, curConfig, consoleTag) // 构建esm输出模块
};

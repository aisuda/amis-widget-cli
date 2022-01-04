// amis 功能模块引用主入口
const akfun = require('akfun');
const amisInit = require('./amisInit');
const inspect = require('./inspect');
const amisConfigInit = require('../utils/amisConfigInit.js');
const curConfig = require('../config/index'); // 获取当前项目根目录下的配置文件
const { consoleTag } = require('../utils/amisParams');
const path = require('path'); // 输出标记

module.exports = {
  amisInit,
  inspect,
  amisConfigInit,
  dev: () => {
    const curDevConfig = curConfig;
    /*// 设置editor入口
    const devEditorPath = path.resolve(__dirname, '../editor/EditorDemo.jsx'); // 从akfun中获取
    if (curDevConfig.dev && curDevConfig.dev.entry) {
      Object.keys(curDevConfig.dev.entry).forEach((name) => {
        curDevConfig.dev.entry[name] = [devEditorPath].concat(curDevConfig.dev.entry[name]);
      });
    }
    // 将当前editor添加为工程有效目录
    if (curDevConfig.webpack) {
      curDevConfig.webpack.projectDir = curDevConfig.webpack.projectDir ? curDevConfig.webpack.projectDir : [];
      curDevConfig.webpack.projectDir.push(path.resolve(__dirname, '../editor'));
    }*/
    akfun.dev(curDevConfig, consoleTag);
  }, // 构建脚本：开发环境
  build: () => akfun.build('build', curConfig, consoleTag), // 构建脚本：生产环境
  build2lib: () => akfun.build('lib', curConfig, consoleTag), // 构建脚本：生产环境
  build2esm: (fileName) => akfun.build2esm(fileName, curConfig, consoleTag) // 构建esm输出模块
};

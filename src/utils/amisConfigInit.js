const path = require('path');
const { createFile } = require('@wibetter/akfun');

// 将脚手架的默认配置文件拷贝到当前项目根目录
const createDefaultConfig = function (_configFileName) {
  const configFileName = _configFileName || 'amis.config.js';
  createFile(
    path.resolve(__dirname, `../initData/${configFileName}`),
    path.resolve(process.cwd(), `./${configFileName}`)
  );
};

module.exports = createDefaultConfig;

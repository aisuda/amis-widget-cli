// 统一路径解析：
const { resolve, getConfigObj, deepMergeConfig } = require('@wibetter/akfun');
const defaultAMISConfig = require('./default.config');

// 从项目根目录获取当前项目的配置文件
const curProjectConfig = getConfigObj(resolve('amis.config.js'));

// 备注：数组类型则直接覆盖
module.exports = deepMergeConfig(defaultAMISConfig, curProjectConfig);

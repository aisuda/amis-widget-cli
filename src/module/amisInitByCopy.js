const fs = require('fs-extra');
const path = require('path');
const { consoleTag } = require('../utils/amisParams'); // 输出标记

const templateList = {
  'react-amis': path.resolve(__dirname, '../template/react-custom-widget-template'),
  'react-ts': path.resolve(__dirname, '../template/react-ts-custom-widget-template'),
  'react-dev': path.resolve(__dirname, '../template/react-ts-custom-widget-template'),
  'vue2-amis': path.resolve(__dirname, '../template/vue2-amis-custom-widget'),
  'vue3-amis': path.resolve(__dirname, '../template/vue3-amis-custom-widget'),
  multiple: path.resolve(__dirname, '../template/multiple-custom-widget-template'),
  'react-container': path.resolve(__dirname, '../template/container-custom-widget-template'),
  'vue-container': path.resolve(__dirname, '../template/vue-container-custom-widget-template'),
  'uniapp-aipage-widget': path.resolve(__dirname, '../template/uni-custom-widget-template'),
  'uniapp-h5-aipage-widget': path.resolve(__dirname, '../template/uni-h5-custom-widget-template'),
  'uview-custom-widget': path.resolve(__dirname, '../template/uview-custom-widget'),
  'uchart-custom-widget': path.resolve(__dirname, '../template/uchart-custom-widget'),
  'lottery-custom-widget': path.resolve(__dirname, '../template/lottery-custom-widget'),
  'vue3-aipage-widget': path.resolve(__dirname, '../template/vue3-aipage-custom-widget-template'),
  'vue2-aipage-widget': path.resolve(__dirname, '../template/vue2-aipage-custom-widget'),
  'quick-aipage-widget': path.resolve(__dirname, '../template/quick-custom-widget-template'),
  'qapp-ui-custom-widget': path.resolve(__dirname, '../template/qapp-ui-custom-widget')
};

const amisInitByCopy = function (type, dir, projectName) {
  const currentTemplateDir = templateList[type || 'react'];
  fs.copy(currentTemplateDir, path.resolve(process.cwd(), dir || 'amisWidget'))
    .then(() => console.log(`${consoleTag}已创建自定义组件（${type}）!`))
    .catch((err) => console.error(`${consoleTag}自定义组件模板下载失败：`, err));
};

module.exports = amisInitByCopy;

const { gitClone } = require('akfun');
const { consoleTag } = require('../utils/amisParams'); // 输出标记

const templateList = {
  react: 'git@github.com:aisuda/react-custom-widget-template.git',
  'react-ts': 'git@github.com:aisuda/react-ts-custom-widget-template.git',
  'react-dev': 'git@github.com:aisuda/react-widget-dev.git',
  vue: 'git@github.com:aisuda/vue-custom-widget-template.git',
  multiple: 'git@github.com:aisuda/multiple-custom-widget-template.git',
  'react-container': 'git@github.com:aisuda/container-custom-widget-template.git',
  'vue-container': 'git@github.com:aisuda/vue-container-custom-widget-template.git',
  'uniapp-aipage-widget': 'git@github.com:aisuda/uni-custom-widget-template.git',
  'uniapp-h5-aipage-widget': 'git@github.com:aisuda/uni-h5-custom-widget-template.git',
  'quick-aipage-widget': 'git@github.com:aisuda/quick-custom-widget-template.git',
  'uview-custom-widget': 'git@github.com:wibetter/uview-custom-widget.git',
  'vue3-aipage-widget': 'git@github.com:aisuda/vue3-aipage-custom-widget-template.git',
  'vue2-aipage-widget': 'git@github.com:aisuda/aipage-custom-widget-template.git',
};

const amisInit = function (type, dir, projectName) {
  const currentTemplateUrl = templateList[type || 'react'];
  gitClone(currentTemplateUrl, dir || 'amisWidget', () => {}, consoleTag);
};

module.exports = amisInit;

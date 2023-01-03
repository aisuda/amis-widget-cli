const { gitClone } = require('akfun');
const { consoleTag } = require('../utils/amisParams'); // 输出标记

const templateList = {
  'react-amis': 'git@github.com:aisuda/react-custom-widget-template.git',
  'react-ts': 'git@github.com:aisuda/react-ts-custom-widget-template.git',
  'react-dev': 'git@github.com:aisuda/react-widget-dev.git',
  'vue2-amis': 'git@github.com:aisuda/vue-custom-widget-template.git',
  'vue3-amis': 'git@github.com:aisuda/vue3-amis-custom-widget.git',
  multiple: 'git@github.com:aisuda/multiple-custom-widget-template.git',
  'react-container': 'git@github.com:aisuda/container-custom-widget-template.git',
  'vue-container': 'git@github.com:aisuda/vue-container-custom-widget-template.git',
  'uniapp-aipage-widget': 'git@github.com:aisuda/uni-custom-widget-template.git',
  'uniapp-h5-aipage-widget': 'git@github.com:wibetter/uni-h5-custom-widget-template.git',
  'uview-custom-widget': 'git@github.com:wibetter/uview-custom-widget.git',
  'uchart-custom-widget': 'git@github.com:wibetter/uchart-custom-widget.git',
  'lottery-custom-widget': 'git@github.com:wibetter/lottery-custom-widget.git',
  'vue3-aipage-widget': 'git@github.com:aisuda/vue3-aipage-custom-widget-template.git',
  'vue2-aipage-widget': 'git@github.com:aisuda/aipage-custom-widget-template.git',
  'quick-aipage-widget': 'git@github.com:aisuda/quick-custom-widget-template.git',
  'qapp-ui-custom-widget': 'git@github.com:wibetter/qapp-ui-custom-widget.git'
};

const amisInit = function (type, dir, projectName) {
  const currentTemplateUrl = templateList[type || 'react'];
  gitClone(currentTemplateUrl, dir || 'amisWidget', () => {}, consoleTag);
};

module.exports = amisInit;

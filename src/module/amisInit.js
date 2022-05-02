const { gitClone } = require('akfun');
const { consoleTag } = require('../utils/amisParams'); // 输出标记

const templateList = {
  vue: 'git@github.com:aisuda/vue-custom-widget-template.git',
  react: 'git@github.com:aisuda/react-custom-widget-template.git',
  'react-ts': 'git@github.com:aisuda/react-ts-widget-dev.git',
  'react-dev': 'git@github.com:aisuda/react-widget-dev.git',
  multiple: 'git@github.com:aisuda/multiple-custom-widget-template.git',
  'react-container': 'git@github.com:aisuda/container-custom-widget-template.git',
  'vue-container': 'git@github.com:aisuda/vue-container-custom-widget-template.git'
};

const amisInit = function (type, dir, projectName) {
  const currentTemplateUrl = templateList[type || 'react'];
  gitClone(currentTemplateUrl, dir || 'amisWidget', () => {}, consoleTag);
};

module.exports = amisInit;

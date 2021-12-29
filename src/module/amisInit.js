const {gitClone} = require('akfun');
const {consoleTag} = require('../utils/amisParams'); // 输出标记

const templateList = {
  'vue': 'git@github.com:aisuda/vue-custom-widget-template.git',
  'react': 'git@github.com:aisuda/react-custom-widget-template.git',
  'multiple-widget': 'git@github.com:aisuda/multiple-custom-widget-template.git',
};

const amisInit = function (type, dir, projectName) {
  const currentTemplateUrl = templateList[type || 'react'];
  gitClone(currentTemplateUrl, dir || 'amisWidget', () => {}, consoleTag);
};

module.exports = amisInit;

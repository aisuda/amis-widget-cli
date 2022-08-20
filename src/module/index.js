/**
 * 命令式参数识别
 */
const figlet = require('figlet'); // 用于输出图形文字
const yargs = require('yargs'); // 命令行工具
const chalk = require('chalk'); // 带样式的log输出
const inquirer = require('inquirer'); // 问答式交互

// 引入本地脚本模块
const amisInit = require('./amisInit.js');
const amisInitByCopy = require('./amisInitByCopy.js');
const inspect = require('./inspect.js');
const mainAction = require('./main.js'); // 功能入口
const amisConfigInit = require('../utils/amisConfigInit.js');

// amis的package文件
const amisPackage = require('../../package.json');

const titleTip = function (msg) {
  return chalk.green(chalk.bold(msg));
};

const bigTip = figlet.textSync('amis', {
  font: 'lean'
});

console.log(chalk.green(bigTip));
console.log(chalk.green(`当前版本：v${amisPackage.version}.\n`));

let argv = yargs
  .command(
    'init [options]',
    '创建一个自定义组件',
    (yargs) => {
      yargs
        .reset()
        .usage(titleTip('Usage') + ': $0 init [options]')
        .option('type', {
          alias: 't',
          describe: '自定义组件类型（vue技术栈/react技术栈/多技术栈)'
        })
        .option('dir', {
          alias: 'd',
          describe: '自定义组件项目路径'
        })
        .option('name', {
          alias: 'n',
          describe: '自定义组件项目名称',
          default: 'amisWidget'
        })
        .option('editor', {
          alias: 'e',
          describe: '支持的编辑器类型（amis/aipage)'
        })
        .option('mode', {
          alias: 'm',
          describe: '自定义组件下载模式（github/copy）',
          default: 'github',
        })
        .alias('h', 'help');
    },
    (argv) => {
      if (argv.type && argv.dir) {
        if (argv.mode === 'copy') {
          amisInitByCopy(argv.type, argv.dir, argv.name);
        } else {
          amisInit(argv.type, argv.dir, argv.name);
        }
      } else {
        const questions = [];
        // 初始化项目模板时，当用户未设置项目类型type时，以列表形式展示当前可以使用的项目模板
        const amisWidgetTemplates = [
          {
            name: 'react自定义组件',
            value: 'react',
            short: 'react'
          },
          {
            name: 'react&ts自定义组件',
            value: 'react-ts',
            short: 'react-ts'
          },
          {
            name: 'react自定义组件（含webpack工程）',
            value: 'react-dev',
            short: 'react-dev'
          },
          {
            name: 'vue自定义组件（vue2.0技术栈）',
            value: 'vue',
            short: 'vue'
          },
          {
            name: 'amis自定义组件（多技术栈）',
            value: 'multiple',
            short: 'multiple'
          },
          {
            name: 'react自定义容器类组件',
            value: 'react-container',
            short: 'react-container'
          },
          {
            name: 'vue自定义容器类组件',
            value: 'vue-container',
            short: 'vue-container'
          }
        ];

        const uniappWidgetTemplates = [
          {
            name: '跨端自定义组件(uniapp技术栈/aipage-editor专用)',
            value: 'uniapp-aipage-widget',
            short: 'uniapp-aipage-widget',
          },
          {
            name: 'uniapp+H5版自定义组件模板(aipage-editor专用)',
            value: 'uniapp-h5-aipage-widget',
            short: 'uniapp-h5-aipage-widget',
          },
          {
            name: '图表自定义组件(aipage-editor专用，uniapp+H5版)',
            value: 'uchart-custom-widget',
            short: 'uchart-custom-widget',
          },
          {
            name: 'uview版自定义组件(aipage-editor专用)',
            value: 'uview-custom-widget',
            short: 'uview-custom-widget',
          },
          {
            name: 'vue3自定义组件(aipage-editor专用)',
            value: 'vue3-aipage-widget',
            short: 'vue3-aipage-widget',
          },
          {
            name: 'vue2自定义组件(aipage-editor专用)',
            value: 'vue2-aipage-widget',
            short: 'vue2-aipage-widget',
          },
        ]

        const quickappWidgetTemplates = [
          {
            name: '快应用自定义组件(aipage-editor专用)',
            value: 'quick-aipage-widget',
            short: 'quick-aipage-widget',
          }
        ]

        const aipageWidgetTemplates = [
          ...uniappWidgetTemplates,
          ...quickappWidgetTemplates
        ]

        if (!argv.type && argv.editor === 'aipage') {
          // 创建aipage-editor自定义组件的快捷入口
          questions.push({
            name: 'type',
            type: 'list',
            message: '请选择您要创建的自定义组件类型: ',
            default: 'uniapp-h5-aipage-widget',
            choices: aipageWidgetTemplates
          });
        } else if (!argv.type && argv.editor === 'amis') {
          questions.push({
            name: 'type',
            type: 'list',
            message: '请选择您要创建的自定义组件类型: ',
            default: 'react',
            choices: amisWidgetTemplates
          });
        } else if (!argv.type && argv.editor === 'uniapp') {
          questions.push({
            name: 'type',
            type: 'list',
            message: '请选择您要创建的自定义组件类型: ',
            default: 'uniapp-h5-aipage-widget',
            choices: uniappWidgetTemplates
          });
        } else if (!argv.type && argv.editor === 'quickapp') {
          questions.push({
            name: 'type',
            type: 'list',
            message: '请选择您要创建的自定义组件类型: ',
            default: 'quick-aipage-widget',
            choices: quickappWidgetTemplates
          });
        } else if (!argv.type) {
          questions.push({
            name: 'type',
            type: 'list',
            message: '请选择您要创建的自定义组件类型: ',
            default: 'react',
            choices: amisWidgetTemplates.concat(aipageWidgetTemplates)
          });
        }
        // 当用户未设置存放项目的目录地址时，提示用户
        if (!argv.dir) {
          questions.push({
            name: 'dir',
            type: 'input',
            message: '请输入存放自定义组件的目录名（默认存放在当前路径下）: ',
            default: 'amisProject'
          });
        }
        inquirer.prompt(questions).then((ans) => {
          if (argv.mode === 'copy') {
            amisInitByCopy(ans.type, ans.dir, argv.name);
          } else {
            amisInit(ans.type, ans.dir, argv.name);
          }
        });
      }
    }
  )
  .command(
    'config init',
    '初始化amis配置文件',
    (yargs) => {
      yargs
        .reset()
        .usage(titleTip('Usage') + ': $0 config init')
        .alias('h', 'help');
    },
    () => {
      amisConfigInit('amis.config.js');
    }
  )
  .command(
    'dev',
    '开启本地调试模式（本地editor中调试）',
    (yargs) => {
      yargs
        .reset()
        .usage(titleTip('Usage') + ': $0 dev')
        .alias('h', 'help');
    },
    (argv) => {
      mainAction.dev();
    }
  )
  .command(
    'preview',
    '开启组件预览模式（仅预览组件本身内容）',
    (yargs) => {
      yargs
        .reset()
        .usage(titleTip('Usage') + ': $0 dev')
        .alias('h', 'help');
    },
    (argv) => {
      mainAction.preview();
    }
  )
  .command(
    'linkDebug',
    '开启amis-saas调试模式（需手动添加外链注入到amis-saas中）',
    (yargs) => {
      yargs
        .reset()
        .usage(titleTip('Usage') + ': $0 dev')
        .alias('h', 'help');
    },
    (argv) => {
      mainAction.linkDebug();
    }
  )
  .command(
    'build',
    '构建生产环境代码',
    (yargs) => {
      yargs
        .reset()
        .usage(titleTip('Usage') + ': $0 build')
        .alias('h', 'help');
    },
    (argv) => {
      mainAction.build();
    }
  )
  .command(
    'build2lib',
    '构建lib库',
    (yargs) => {
      yargs
        .reset()
        .usage(titleTip('Usage') + ': $0 build2lib')
        .alias('h', 'help');
    },
    (argv) => {
      mainAction.build2lib(); // 构建library
    }
  )
  .command(
    'build2esm',
    '构建esm模块',
    (yargs) => {
      yargs
        .reset()
        .usage(titleTip('Usage') + ': $0 build2esm')
        .option('fileName', {
          alias: 'n',
          describe: '输出的文件名',
          default: ''
        })
        .alias('h', 'help');
    },
    (argv) => {
      mainAction.build2esm(argv.fileName); // 构建esm
    }
  )
  .command(
    'inspect',
    '输出当前配置文件',
    (yargs) => {
      yargs
        .reset()
        .usage(titleTip('Usage') + ': $0 inspect')
        .option('type', {
          alias: 't',
          describe: '环境类型（本地调试环境/生产环境/library构建环境）',
          default: 'build'
        })
        .alias('h', 'help');
    },
    (argv) => {
      inspect(argv.type);
    }
  )
  .alias('h', 'help')
  .alias('v', 'version')
  .help()
  .updateStrings({
    'Usage:': titleTip('Usage:'),
    'Commands:': titleTip('Commands:'),
    'Options:': titleTip('Options:')
  }).argv;

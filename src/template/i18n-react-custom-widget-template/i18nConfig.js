module.exports = {
  entry: {
    dir: './src/widget'
  },
  file: {
    test: /.*(ts|tsx|js|jsx)$/
  },
  ignore: {
    sameGit: true,
    list: ['src/assets', 'src/locale']
  },
  // md5secretKey: 'custom-amis-widgets',
  importInfo: {
    source: 'i18n-runtime',
    imported: 'i18n',
    local: '_i18n'
  },
  i18nModule: 'i18n-runtime',
  // 可通过 customTpl 自定义语料配置文件模板内容
  customTpl: `import {extendLocale} from '$i18n';extendLocale($name, $data, false);`,
  languages: [
    {
      name: 'en-US',
      path: './src/locale'
    },
    {
      name: 'zh-CN',
      path: './src/locale'
    },
    {
      name: 'ru-RU',
      path: './src/locale'
    }
  ],
  output: {
    fileName: 'custom-widget-i18n',
    fileExtension: 'xlsx',
    path: './'
  },
  // 机器自动翻译：需要配置对应的appId、key
  translate: {
    qps: 10,
    saveLanguages: true, // 是否将翻译后的所有语料数据存储到本地json文件
    // saveLanguagesDir: './src/locale/curLanguages.json',
    appId: '20230324001613652', // 请在百度翻译开发平台申请：http://api.fanyi.baidu.com/manage/developer
    key: 'Sprp7Mz8_yydeyhYrgE1', // 个人翻译资源权限，请勿频繁使用
    host: 'http://api.fanyi.baidu.com'
  }
};

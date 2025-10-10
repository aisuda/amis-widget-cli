# i18n-react-custom-widget-template
> 国际化版amis自定义组件模板（react技术栈）
备注：[NPM扩展包开发端支持国际化](https://github.com/aisuda/amis-widget-cli/wiki/NPM%E6%89%A9%E5%B1%95%E5%8C%85%E5%BC%80%E5%8F%91%E7%AB%AF%E5%A6%82%E4%BD%95%E6%94%AF%E6%8C%81%E5%9B%BD%E9%99%85%E5%8C%96)。

### 目录说明
- src: 自定义组件源码；
- src/assets: 存放组件静态资源，比如 css、img等；
- src/locale: 存放当前国际化语料数据；
- src/widget: 组件源码；
- src/widget/info-card.jsx: 自定义组件代码；
- src/index.js: 用于注册一个amis渲染器，注册成功后编辑器画布区中才会正常展示自定义组件内容；
- src/widget/plugin/info-card-plugin.jsx: 用于注册一个amis-editor插件，注册成功后编辑器左侧组件面板中会展示；
- src/preview.js: 用于本地预览自定义组件内容；
- amis.config.js: amis-widget-cli配置文件，当前项目webpack配置统一在这里设置；
- i18nConfig.js: 国际化配置文件，比如 百度翻译账户需在这里配置；

### 开发说明

1. **安装依赖**
```bash
$ npm i 或者 yarn
```

2. **dev: 本地开发模式（带热更新）**
> dev开发模式：用于在本地editor中调试自定义组件。
```bash
$ npm run dev
```

3. **preview: 组件预览模式（带热更新）**
> preview模式：用于预览自定义组件内容。
```bash
$ npm run preview
```

4. **linkDebug: 外链调试（amis-saas中预览自定义组件）**
> linkDebug模式：用于在amis-saas中预览和调试自定义组件。
```bash
$ npm run linkDebug
```
5. **build2lib: 构建自定义组件输出产物**
> build2lib模式：用于构建发布到 npm 中的文件，默认存放到 当前dist目录中。
```bash
$ npm run build2lib
```
6. **package.json添加自定义组件信息，导入组件扩展包时需要**
> package.json 中添加 amis-widgets 字段，用于放置当前自定义组件信息，有这个amis-widgets 字段才能被识别为amis组件扩展包。
```bash
  ...
    "amis-widgets": [
    {
      "name": "react-info-card", // 自定义组件名称，必填项
      "framework": "react", // 技术栈类型，非必填项，默认为 react 技术栈
      "usage": "renderer", // 渲染器类型，非必填项，默认为 renderer
      "type": "react-info-card", // 自定义组件类型，必填项，同一应用下不允许有重复的自定义组件类型
      "entry": "/dist/reactInfoCard.umd", // 自定义组件入口文件路径，必填项
      "files": [  // 自定义组件依赖资源文件路径，非必填项
        "/dist/reactInfoCard.css"
      ],
      "editorPlugin": {  // amis-editor自定义插件信息
        "name": "react-info-card-plugin", // 自定义插件名称，在编辑器左侧组件面板作为title展示，必填项
        "description": "信息展示卡片", // 自定义插件描述，在编辑器左侧组件面板作为描述信息展示，必填项
        "pluginEntry": "/dist/reactInfoCardPlugin.umd", // 自定义插件的入口文件，必填项
        "tag": [  // 自定义插件的分类，必填项
          "展示"
        ],
        "sort": 100 // 自定义插件的排序，非必填项
      }
    }
  ],
  ...
}
```
7. **发布一个NPM组件扩展包**
> 需要确保package.json中的name值唯一，version值不重复。
```bash
$ npm publish
```
8. **发布到制定的NPM仓库**
> 打开NPM配置文件（src/.npmrc），配置为制定仓库地址即可。
### 配置项说明（amis-widget-cli）
[请查看amis-widget-cli](https://github.com/aisuda/amis-widget-cli)

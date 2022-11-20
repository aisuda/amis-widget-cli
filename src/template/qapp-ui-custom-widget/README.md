# qapp-ui-custom-widget
> qapp-ui自定义组件模板，使用第三方UI库开发快应用自定义组件。

### 目录说明
- src: 自定义组件源码；
- build: quickapp构建后文件存放目录；
- dist: quickapp构建后的rpk文件存放目录；
- web: 自定义组件web预览模块（爱速搭页面编辑器预览需要）；
- src/components: 存放快应用自定义组件源码（quickapp技术栈）；
- src/h5Components: 存放H5版自定义组件源码；
- src/components/info-card/index.ux: 快应用自定义组件内容文件；
- src/components/xxx/assets: 存放自定义组件组件静态资源，比如 css、img等，此处存放的静态资源会经过webpack构建；
- src/pages: 存放项目页面级代码，开发quickapp自定义组件时仅用于充当预览展示页；
- src/app.ux: 快应用入口文件；
- src/manifest.json: 快应用配置文件；
- quickapp.config.js: hap-toolkit配置文件（快应用构建工具配置文件）；
- amis.config.js: amis-widget-cli配置文件（构建H5自定义组件需要）；

### 相关开发文档
- 自定义组件开发工具：[amis-widget-cli](https://github.com/aisuda/amis-widget-cli)
- 快应用开发文档：[https://www.quickapp.cn/](https://www.quickapp.cn/)
- 快应用开发脚手架：[https://github.com/quickappcn/hap-toolkit](https://github.com/quickappcn/hap-toolkit)
- vue3开发文档：[https://v3.cn.vuejs.org/](https://v3.cn.vuejs.org/)
- 自定组件注册器：[vue3-aipage-widget](https://github.com/aisuda/vue3-aipage-widget)

### 开发 aipage-editor 自定义组件 注意事项
- 开发快应用自定义组件时，请将静态资源（img、css等）和自定义组件渲染器放同一个目录，比如：components/info-card/assets 中存放 info-card 自定义组件的静态资源，方便后续动态注入自定义组件源码。

### 开发说明

1. **安装依赖**
```bash
$ npm i 或者 yarn
```

2. **preview: 快应用自定义组件预览模式（带热更新）**
> 预览模式：用于本地预览快应用自定义组件内容。
```bash
$ npm run preview
```

3. **preview:h5: H5自定义组件预览模式（带热更新）**
> H5预览模式：用于本地预览H5自定义组件内容。
```bash
$ npm run preview:h5
```

4. **linkDebug: 外链调试（爱速搭平台预览H5自定义组件）**
> linkDebug模式：用于在爱速搭平台中预览和调试H5自定义组件。
```bash
$ npm run linkDebug
```

5. **build: 构建快应用自定义组件rpk**
> build模式：用于生产快应用自定义组件rpk文件。
```bash
$ npm run build
```

6. **build2lib: 构建H5自定义组件web预览模块**
> build2lib模式：用于构建发布到 npm 中的文件，默认存放到当前 web/ 目录下；
```bash
$ npm run build2lib
```

7. **package.json添加自定义组件信息，导入组件扩展包时需要**
> package.json 中添加 aipage-widgets 字段，用于放置当前自定义组件信息，有这个 aipage-widgets 字段才能被识别为自定义组件扩展包。

```bash
  ...
  "aipage-widgets": [
    {
      "type": "quick-info-card", // 自定义组件类型，必填项，同一应用下不允许有重复的自定义组件类型
      "framework": "vue3", // 技术栈类型，必填项
      "description": "快应用版信息展示卡片", // 描述，在编辑器左侧组件面板作为描述信息展示，必填项
      "entry": "/web/renderer.umd", // 自定义组件入口文件路径，必填项
      "files": [ // 自定义组件依赖资源文件路径，非必填项
        "/web/renderer.css"
      ],
      "editorPlugin": { // aipage-editor自定义组件信息，组件面板需要
        "pluginEntry": "/web/plugin.umd", // 自定义组件的入口文件，必填项
        "tag": [  // 自定义组件的分类，必填项
          "快应用组件"
        ],
        "sort": 100, // 自定义组件的排序，非必填项，越小展示越靠前
        "device": [ // 自定义组件支持的设备类型，必填项
          "mobile",
          "quickapp"
        ]
      }
    },
    {
      "framework": "quickapp", // 快应用技术栈类型，必填项
      "type": "quick-info-card", // 自定义组件类型，必填项，同一应用下不允许有重复的自定义组件类型
      "entry": "/src/components/info-card", // 快应用自定义组件根目录
    },
    ... // 其他自定义组件
  ],
  ...
}
```
7. **发布一个NPM组件扩展包**
> 需要确保package.json中的name值唯一，version值不重复。
> 备注：快应用自定义组件源码也需要发布到npm中（爱速搭平台发布和构建快应用源码时需要）。
```bash
$ npm publish
```

8. **发布到指定的NPM仓库**
> 打开NPM配置文件（src/.npmrc），配置为指定仓库地址即可。

### 配置项说明（amis-widget-cli）
[请查看amis-widget-cli](https://github.com/aisuda/amis-widget-cli)



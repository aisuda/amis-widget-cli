# vue3-amis-custom-widget
> amis 自定义组件模板（vue3.0 技术栈）

### 目录说明
- src: 自定义组件源码；
- src/xxx/plugin.ts: 用于注册一个amis-editor插件，注册成功后编辑器左侧组件面板中会展示；
- src/xxx/renderer.ts: 用于注册一个amis渲染器，注册成功后编辑器画布区中才会正常展示自定义组件内容；
- src/xxx/xxx.vue: vue自定义组件源码；
- src/preview.js: 用于本地预览自定义组件内容；
- amis.config.js: amis-widget-cli配置文件。

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
      "type": "uni-area-chart",
      "framework": "vue3",
      "description": "折线区域图",
      "entry": "/dist/uniAreaRenderer.umd",
      "files": [
        "/dist/uniAreaRenderer.css"
      ],
      "editorPlugin": {
        "pluginEntry": "/dist/uniAreaPlugin.umd",
        "tag": [
          "图表组件"
        ],
        "sort": 100
      }
    }
    ],
  ...
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

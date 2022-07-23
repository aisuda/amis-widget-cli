# AMIS 前端脚手架
> amis-widget-cli 用于开发amis自定义组件的脚手架，其核心是基于AKFun现有的工程能力，为用户提供组件模板下载、编译、预览、多技术栈支持等功能。
（AKFun是一个基于 Webpack 和 rollup 的前端多场景打包工具，支持多种技术栈：Vue技术栈、React技术栈、React&TS技术栈。）

## 特性
- ⚡️ 零配置，开箱即用
- 👏 支持Vue和React自定义组件的调试和构建
- 💪 提供三种构建场景: 本地开发模式(包含热更新、接口代理等功能)、生产环境代码构建、library库构建(支持umd和esm的打包能力)
- ❤️ 开放配置能力: 可配置构建入口文件、开启ESLint代码检测、接口代理等
- 👍 支持 [Autoprefixer](https://github.com/postcss/autoprefixer#readme)、[Sass](https://sass-lang.com/)、[PostCSS](https://postcss.org/)、[ESLint](http://eslint.cn/)、[StyleLint](https://stylelint.io/)
- ❤️ 支持项目系统参数自动批量替换 [params-replace-loader](https://www.npmjs.com/package/params-replace-loader)
- 😀 提供完整的[Vue自定义组件模板](https://github.com/aisuda/vue-custom-widget-template)、[React自定义组件模板](https://github.com/aisuda/react-custom-widget-template)、[多技术栈自定义组件模板](https://github.com/aisuda/multiple-cutom-widget-template)


## 当前已支持的自定义组件模板类型
- react自定义组件([react-custom-widget-template](https://github.com/aisuda/react-custom-widget-template)): react 技术栈的自定义组件模板
- react&ts自定义组件([react-ts-custom-widget-template](https://github.com/aisuda/react-ts-custom-widget-template)): react 和 typescript 技术栈的自定义组件模板
- react自定义组件（含webpack工程）([react-widget-dev](https://github.com/aisuda/react-widget-dev)): 带 webpack 工程的 react 版自定义组件模板
- vue自定义组件（vue2.0技术栈）([vue-custom-widget-template](https://github.com/aisuda/vue-custom-widget-template)): vue2.0 技术栈的自定义组件模板
- amis自定义组件（多技术栈）([multiple-custom-widget-template](https://github.com/aisuda/multiple-custom-widget-template)): 含多种技术栈（vue2.0、react）的自定义组件模板
- react自定义容器类组件([react-custom-widget-template](https://github.com/aisuda/container-custom-widget-template)): react 版容器类自定义组件模板，自定义容器组件内部可插入其他组件
- vue自定义容器类组件([vue-container-custom-widget-template](https://github.com/aisuda/vue-container-custom-widget-template)): vue2.0 版容器类自定义组件模板，自定义容器组件内部可插入其他组件

## 快速开始 / 使用方法一
> 全局安装amis-widget-cli，用于同时管理多个自定义组件代码

1. **全局安装**
```bash
$ yarn global add amis-widget-cli 或者  npm i -g amis-widget-cli
```

2. **创建一个自定义组件**
> 可选择项目类型：vue、react、multiple-widget，默认react技术栈，可通过--dir参数指定存放项目模板的目录
```bash
$ amis init -t=react
```

3. **开始使用：确保已安装项目依赖（yarn install或者npm install）**

dev: 本地开发模式（带热更新）
> dev开发模式：用于在本地editor中调试自定义组件。
```bash
$ npm run dev
```

preview: 组件预览模式（带热更新）
> preview模式：用于预览自定义组件内容。
```bash
$ npm run preview
```

linkDebug: 外链调试（amis-saas中预览自定义组件）
> linkDebug模式：用于在amis-saas中预览和调试自定义组件。
```bash
$ npm run linkDebug
```

build2lib: 构建自定义组件输出产物
> build2lib模式：用于构建发布到 npm 中的文件，默认存放到 当前dist目录中。
```bash
$ npm run build2lib
```

## 快速开始 / 使用方法二
> 在现有组件项目中使用amis-widget-cli

1. **组件项目目录局部安装**

```bash
$ yarn add amis-widget-cli --dev 或者 npm i amis-widget-cli --save-dev
```

2. **在package.json中创建可执行脚本**
> 打开package.json，在scripts中新增三条可执行命令

```bash
# 用于开启本地调试模式
"dev": "amis dev"

# preview模式：用于预览自定义组件内容
"preview": "amis preview"

# linkDebug: 外链调试（amis-saas中预览自定义组件）
"linkDebug": "amis linkDebug"

# build2lib: 构建自定义组件输出产物
"build2lib": "amis build2lib"
```

3. **创建amis-widget-cli的配置文件**
> 需要根据实际情况调整配置文件内（比如：入口文件、路径缩写、接口代理等）

```bash
$ amis config init
```

4. **调试当前组件**

   4.1 开启本地调试模式
    ```bash
    $ npm run dev
    ```
   4.2 预览自定义组件内容
   ```bash
   $ npm run preview
   ```
   4.3 外链调试（amis-saas中预览自定义组件）
   ```bash
   $ npm run linkDebug
   ```
   4.4 构建自定义组件输出产物（以umd格式输出）
   ```bash
   $ npm run build2lib
   ```

## amis-widget-cli使用说明

1. **使用amis-widget-cli创建一个新的自定义组件**

   1.1 创建一个自定义组件
    ```bash
    $ amis init
    ```
   1.2 创建一个vue技术栈自定义组件
    ```bash
    $ amis init -t=vue
    ```
   1.3 在指定的目录中创建一个新的自定义组件
    ```bash
    $ amis init -t=react --dir=myTest1
    ```

2. **创建amis-widget-cli的配置文件**
    ```bash
    $ amis config init
    ```

3. **关于amis-widget-cli提供三种构建场景**

   3.1. **dev**: 本地开发调试模式，用于本地开发和调试项目(包含热更新、接口代理等功能)，编译的代码没有压缩，默认会开启ESLint检测代码规范（可关闭）；  
   3.2. **preview**: 用于预览自定义组件内容；  
   3.3. **linkDebug**: 用于在amis-saas中预览和调试自定义组件；  
   3.4. **build2lib**: 构建自定义组件输出产物（以umd格式输出）。  

4. **关于amis-widget-cli的配置文件**

   4.1. 提供全量的默认配置，实现零配置、开箱即用的能力；  
   4.2. 自定义构建配置，请在当前项目根目录创建amis-widget-cli配置文件（amis.config.js），amis-widget-cli提供初始化配置文件的方法：  
   ```bash
   $ amis config init
   ```
   4.3. amis.config.js为当前项目的配置文件，优先级最高（可覆盖amis-widget-cli提供的默认配置）。  

5. **配置构建入口文件（webpack.entry）**

   5.1. 默认的构建入口文件: ./src/index.js；  
   5.2. 自定义构建入口(amis.config.js中提供对应的配置入口)；  
   5.3. 在webpack.entry配置构建入口，dev\preview\linkDebug\build2lib都会以此为构建入口 ([关于entry的配置方法](https://www.webpackjs.com/configuration/entry-context/#entry))；    
   5.4. 在dev.entry、preview.entry、linkDebug.entry、build2lib.entry中配置对应执行环境的构建入口，优先级高于webpack.entry。  

6. **关于多页面**

   6.1. 当amis.config.js的entry只有一个入口配置，且对应的构建入口文件不存在时，会自动从src/pages中获取构建入口（支持多页面多模板）；  
   6.2. 多页面模式下，会自动将src/pages中以.ts、.tsx、.js、.jsx结尾（对应的匹配正则：/\.[tj]sx?$/）的文件作为构建入口文件，同时将同名的html文件作为当前页面模板。

7. **关于多页面多模板**

   7.1. dev、preview、linkDebug的构建过程中会使用到页面模板，build2lib构建中不会将打包完成的代码输出到页面模板中；  
   7.2. 默认使用./src/index.html作为页面模板；  
   7.3. 当项目中./src/index.html不存在时，会使用默认页面模板；  
   7.4. 多页面模式时，如果pages下存在对应的html页面（与入口文件同名的html文件），会自动将其设置为页面模板。

## amis-widget-cli 配置项使用说明
> amis-widget-cli配置文件（amis.config.js），以下使用AMISConfig代表amis.config.js配置对象
1. 开启/关闭 ESLint代码规范检测: AMISConfig.settings.enableEslint (也可配置StyleLint的使用)
```bash
module.exports = {
  settings: {
    enableESLint: true, // 是否开启ESLint，默认开启ESLint检测代码格式
    enableESLintFix: false, // 是否ESLint自动修正代码格式
    enableStyleLint: true, // 是否开启StyleLint，默认开启ESLint检测代码格式
    enableStyleLintFix: false // 是否需要StyleLint自动修正代码格式
  },
  ...
}
```
2. 配置构建入口文件: 关于配置优先级请查看 amis-widget-cli使用说明 / 配置构建入口文件
> 以下是entry的配置位置，具体配置方法请查看Webpack官网 ([关于entry的配置方法](https://www.webpackjs.com/configuration/entry-context/#entry))
> 备注：建议以key/value形式（object { <key>: string | [string] }）配置entry
```bash
module.exports = {
  ...
  webpack: {
    entry: {
      index: './src/index.js',
    }
  },
  ...
  dev: {
    entry: {}
  },
  preview: {
    entry: {}
  },
  linkDebug: {
    entry: {}
  },
  build2lib: {
    entry: {}
  }
  ...
}
```

3. 解析(resolve) / extensions配置: 自动解析确定的扩展（配置可识别的文件后缀）
> 以下是extensions的配置位置，具体配置方法请查看Webpack官网 ([关于resolve-extensions的配置方法](https://www.webpackjs.com/configuration/resolve/#resolve-extensions))
```bash
module.exports = {
  ...
  webpack: {
    resolve: {
      extensions: ['.js', '.jsx', '.vue', 'json'],
    }
  },
  ...
}
```

4. 解析(resolve) / alias配置: 创建 import 或 require 的别名，来确保模块引入变得更简单
> 以下是alias的配置位置，具体配置方法请查看Webpack官网 ([关于resolve-alias的配置方法](https://www.webpackjs.com/configuration/resolve/#resolve-alias))
```bash
module.exports = {
  ...
  webpack: {
    resolve: {
      alias: {},
    }
  },
  ...
}
```
5. 页面模板路径配置：关于页面模板请查看 amis-widget-cli使用说明 / 关于页面模板
```bash
module.exports = {
  ...
  webpack: {
    template: '',
  }
  ...
}
```

6. 注入公共的SASS文件
> 为项目中每个.scss后缀的样式文件注入公共的SASS内容（变量、mixin、function等）
```bash
module.exports = {
  ...
  webpack: {
    sassResources: [],
  }
  ...
}
```

7. 打包忽略node_modules配置项: ignoreNodeModules（默认为false）
> 打包过程中，忽略node_modules中的依赖文件，不注入到bundle中，减少最后生成代码体积
```bash
module.exports = {
  ...
  webpack: {
    ignoreNodeModules: true,
    allowList: [], // 用于配置会注入bundle中的依赖包（ignoreNodeModules为true时生效）
  }
  ...
}
```

8. 是否生成ts声明文件配置项: createDeclaration（默认为false）
> 构建ts项目中，可以选择是否生成ts声明文件
```bash
module.exports = {
  ...
  webpack: {
    createDeclaration: true,
  }
  ...
}
```

9. 配置项目源码目录（工程有效目录范围）: projectDir
> 构建项目中，设置生效的目录（可同时设置多个目录），用于提高前端工程执行效率。可以不配置，默认为['./src']
```bash
module.exports = {
  ...
  webpack: {
    projectDir: ['./src'],
  }
  ...
}
```

10. 项目源码环境变量批量替换
> [关于params-replace-loader的使用方法](https://www.npmjs.com/package/params-replace-loader)
```bash
module.exports = {
  ...
  envParams: {
    common: { // 通用参数
      '#version#': '20200810.1',
    },
    local: { // 本地开发环境
      '#dataApiBase#': 'http://localhost:1024', // 数据接口根地址
      '#assetsPublicPath#': 'http://localhost:1024', // 静态资源根地址
      '#routeBasePath#': '/', // 路由根地址
    },
  }
  ...
}
```

11. 接口代理配置：目前只有dev本地开发调试模式下会启动
> [关于proxyTable的配置方法](https://www.webpackjs.com/configuration/dev-server/#devserver-proxy)
```bash
module.exports = {
  ...
  dev: {
    proxyTable: {
    },
  }
  ...
}
```

12. 用于开启本地调试模式的相关配置信息
```bash
module.exports = {
  ...
    dev: {
      NODE_ENV: 'development', // development 模式，不会启动UglifyJsPlugin服务
      port: 80, // 启动server服务的端口
      autoOpenBrowser: true, // 是否自动打开页面
      assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
      assetsSubDirectory: '', // 资源引用二级路径
      hostname: 'localhost', // 自动打开的页面主机
      proxyTable: { // 接口代理
        '/apiTest': {
          target: 'http://api-test.com.cn', // 不支持跨域的接口根地址
          ws: true,
          changeOrigin: true
        }
      },
      cssSourceMap: false,
    },
  ...
}
```

13. 用于构建第三方功能包的配置（以umd格式输出）
```bash
module.exports = {
  ...
    build2lib: {
      NODE_ENV: 'production', // production 模式，会启动UglifyJsPlugin服务
      libraryName: '', // 构建第三方功能包时最后导出的引用变量名
      assetsRoot: resolve('dist'), // 编译完成的文件存放路径
      assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
      assetsSubDirectory: '', // 资源引用二级路径
      productionSourceMap: false, // 是否显示原始源代码
      productionGzip: false, // 是否开启Gzip服务
      productionGzipExtensions: ['js', 'css', 'json'], // Gzip识别的文件后缀
      bundleAnalyzerReport: false, // 开启打包分析功能
      ignoreNodeModules: true, // 打包时是否忽略 node_modules
      allowList: [], // ignoreNodeModules为true时生效
    },
  ...
}
```

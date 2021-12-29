# AMIS 前端脚手架
> amis-widget-cli 主要用于开发amis自定义组件的脚手架，其核心是基于AKFun现有的工程能力，为用户提供自定义组件模板下载、编译、预览、多技术栈支持等功能。
（AKFun是一个基于 Webpack4.0 和 rollup 的前端多场景打包工具，支持多种技术栈：Vue技术栈、React技术栈、React&TS技术栈。）

## 特性
- ⚡️ 零配置，开箱即用
- 👏 支持Vue和React自定义组件的调试和构建
- 💪 提供三种构建场景: 本地开发模式(包含热更新、接口代理等功能)、生产环境代码构建、library库构建(支持umd和esm的打包能力)
- ❤️ 开放配置能力: 可配置构建入口文件、开启ESLint代码检测、接口代理等
- 👍 支持 [Autoprefixer](https://github.com/postcss/autoprefixer#readme)、[Sass](https://sass-lang.com/)、[PostCSS](https://postcss.org/)、[ESLint](http://eslint.cn/)、[StyleLint](https://stylelint.io/)
- ❤️ 支持项目系统参数自动批量替换 [params-replace-loader](https://www.npmjs.com/package/params-replace-loader)
- 😀 提供完整的[Vue自定义组件模板](https://github.com/aisuda/vue-custom-widget-template)、[React自定义组件模板](https://github.com/aisuda/react-custom-widget-template)、[多个自定义组件模板](https://github.com/aisuda/multiple-cutom-widget-template)

## 快速开始 / 使用方法一
> 全局安装amis-widget-cli，用于同时管理多个自定义组件代码

1. **全局安装**
```bash
$ yarn global add amis-widget-cli 或者  npm i -g amis-widget-cli
```

2. **初始化一个项目**
> 可选择项目类型：vue、react、multiple-widget，默认react技术栈，也可通过--dir参数指定存放项目模板的目录
```bash
$ amis init -t=vue
```

3. **开始使用：以全局命令方式构建项目（确保已yarn install或者npm install）**

```bash
# 1、开启本地调试模式
$ amis dev
```

```bash
# 2、构建生产环境代码
$ amis build
```

```bash
# 3、构建第三方功能包（以umd格式输出）
$ amis build2lib
```

```bash
# 4、构建第三方功能包的esm输出格式
$ amis build2esm
```

## 快速开始 / 使用方法二
> 在现有项目中局部安装amis-widget-cli，给现有项目赋予amis的前端工程能力

1. **本地安装**

```bash
$ yarn add amis-widget-cli --dev 或者 npm i amis-widget-cli --save-dev
```

2. **在package.json中创建可执行脚本**
> 打开package.json，在scripts中新增三条可执行命令

```bash
# 用于开启本地调试模式
"dev": "amis dev"

# 用于构建生产环境代码
"build": "amis build"

# 用于构建第三方功能包（以umd格式输出）
"build2lib": "amis build2lib"

# 用于构建第三方功能包（以esm格式输出）
"build2esm": "amis build2esm"
```

3. **创建amis-widget-cli的配置文件**
> 需要根据实际情况调整配置文件内（比如：入口文件、路径缩写、接口代理等）

    ```bash
    $ amis config init
    ```

4. **调试&构建自定义组件**

   4.1 开启本地调试模式
    ```bash
    $ npm run dev
    ```
   4.2 构建生产环境代码
   ```bash
   $ npm run build
   ```
   4.3 构建第三方功能包（以umd格式输出）
   ```bash
   $ npm run build2lib
   ```
   4.4 构建第三方功能包（以esm格式输出）
   ```bash
   $ npm run build2esm
   ```

## amis-widget-cli使用说明

1. **使用amis-widget-cli创建一个新的自定义组件**

   1.1 创建一个react技术栈自定义组件
    ```bash
    $ amis init
    ```
   1.2 创建一个vue技术栈自定义组件
    ```bash
    $ amis init -t=vue
    ```
   1.3 在指定的目录中创建一个新的自定义组件
    ```bash
    $ amis init -t=vue --dir=myTest1
    ```

2. **创建amis-widget-cli的配置文件**
    ```bash
    $ amis config init
    ```

3. **关于amis-widget-cli提供三种构建场景**

   3.1. **dev**: 本地开发调试模式，用于本地开发和调试项目(包含热更新、接口代理等功能)，编译的代码没有压缩，默认会开启ESLint检测代码规范（可关闭）；  
   3.2. **build**: 用于构建生产环境代码，编译输出的代码会进行压缩优化；  
   3.3. **build2lib**: 用于构建library库，以umd进行输出；  
   3.4. **build2esm**: 用于构建library库，以esm进行输出。  

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
   5.3. 在webpack.entry配置构建入口，dev\build\build2lib都会以此为构建入口 ([关于entry的配置方法](https://www.webpackjs.com/configuration/entry-context/#entry))；    
   5.4. 在dev.entry、build.entry、build2lib.entry中配置对应执行环境的构建入口，优先级高于webpack.entry。  

6. **关于多页面**

   6.1. 当amis.config.js的entry只有一个入口配置，且对应的构建入口文件不存在时，会自动从src/pages中获取构建入口（支持多页面多模板）；  
   6.2. 多页面模式下，会自动将src/pages中以.ts、.tsx、.js、.jsx结尾（对应的匹配正则：/\.[tj]sx?$/）的文件作为构建入口文件，同时将同名的html文件作为当前页面模板。

7. **关于多页面多模板**

   7.1. 只有dev和build的构建过程中才会使用到页面模板，build2lib构建中不会将打包完成的代码输出到页面模板中；  
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
  }
  build: {
    entry: {}
  }
  build2lib: {
    entry: {}
  }
  build2esm: {
    input: resolve('src/main.js'),
    fileName: 'index',
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

13. 用于构建生产环境代码的相关配置信息
```bash
module.exports = {
  ...
    build: {
      NODE_ENV: 'production', // production 模式，会启动UglifyJsPlugin服务
      assetsRoot: resolve('./dist'), // 打包后的文件绝对路径（物理路径）
      assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
      assetsSubDirectory: '', // 资源引用二级路径
      productionSourceMap: false, // 是否显示原始源代码
      productionGzip: false, // 是否开启Gzip服务
      productionGzipExtensions: ['js', 'css', 'json'], // Gzip识别的文件后缀
      bundleAnalyzerReport: false, // 开启打包分析功能
    }
  ...
}
```

14. 用于构建第三方功能包的配置（以umd格式输出）
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
    },
  ...
}
```

15. 用于构建esm格式的第三方功能包配置
```bash
module.exports = {
  ...
    build2esm: {
      input: resolve('src/main.js'), // 入口文件
      fileName: 'index', // 输出的文件名称
    },
  ...
}
```

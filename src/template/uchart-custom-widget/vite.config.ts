import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
const path = require('path');
/**
 * vite 配置文件
 * 备注: 公共配置 commonConfig 中的配置项大部分是默认配置项，此处列出来是为了方便开发时随时调整
 */
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 公共配置
  const commonConfig = {
    plugins: [uni()],
    server: {
      host: '127.0.0.1',
      port: 3000,
      strictPort: false, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
      // https: false, // 启用 TLS + HTTP/2
      open: true, // 在开发服务器启动时自动在浏览器中打开应用程序
      // 本地开发自定义组件 请求第三方数据接口需要（解决跨域问题）
      // cors: true, // 为开发服务器配置 CORS, 默认启用并允许任何源
    },
  };
  if (command === 'serve') {
    // dev 独有配置
    return {
      ...commonConfig
    }
  } else {
    const curDir =  process.env.UNI_BUILD_DIR ? '/' + process.env.UNI_BUILD_DIR : '';
    const curEntry = path.resolve(__dirname, `./build${curDir}/${ process.env.UNI_BUILD_LIB || 'renderer'}.ts`); // 构建自定组件入口文件
    if (process.env.UNI_BUILD_MODE === 'h5') {
      return {
        //mode: 'development', // 'development'（开发模式），'production'（生产模式）
        ...commonConfig,
        build: {
          // https://vitejs.dev/config/build-options.html#build-minify
          minify: false,
          rollupOptions: {
            // https://rollupjs.org/guide/en/#big-list-of-options
            external: ['react', 'vue'], // 在构建中排除的依赖项
            output: {
              // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
              dir: 'web' + curDir, // 输出构建后文件的目录
              globals: {
                vue: 'vue',
                react: 'react'
              },
              // format: 'amd',
            }
          },
          lib: {
            entry: curEntry,
            formats: ['umd'],
            name: process.env.UNI_BUILD_LIB || 'renderer', // 自定义组件名字
            fileName: (format) => `${process.env.UNI_BUILD_LIB || 'renderer'}.${format}.js`,
          },
          // cssCodeSplit: false, // https://vitejs.cn/config/#build-csscodesplit
        }
      };
    } else {
      return {
        ...commonConfig,
      };
    }
  }
});
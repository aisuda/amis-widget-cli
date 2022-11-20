import { createSSRApp } from 'vue';
import App from './App.vue';
// 引入 uView UI
// @ts-ignore
import uView from 'vk-uview-ui';

export function createApp() {
  const app = createSSRApp(App);

  // 使用 uView UI
  app.use(uView);

  return {
    app,
  };
}

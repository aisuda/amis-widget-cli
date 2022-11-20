// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRenderer } from 'vue3-aipage-widget/dist/index.umd';
// @ts-ignore
import uniRingChart from './uni-ring-chart';

registerRenderer(uniRingChart, {
  type: 'uni-ring-chart',
  framework: 'vue3',
});

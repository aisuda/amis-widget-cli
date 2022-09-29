// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRenderer } from 'vue3-aipage-widget/dist/index.umd';
// @ts-ignore
import uniAreaChart from './uni-area-chart';

registerRenderer(uniAreaChart, {
  type: 'uni-area-chart',
  framework: 'vue3',
});

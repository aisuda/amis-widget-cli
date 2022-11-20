// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRenderer } from 'vue3-aipage-widget/dist/index.umd';
// @ts-ignore
import uniPieChart from './uni-pie-chart';

registerRenderer(uniPieChart, {
  type: 'uni-pie-chart',
  framework: 'vue3',
});

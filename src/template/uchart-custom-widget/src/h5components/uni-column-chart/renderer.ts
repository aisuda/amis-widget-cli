// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRenderer } from 'vue3-aipage-widget/dist/index.umd';
// @ts-ignore
import uniColumnChart from './uni-column-chart';

registerRenderer(uniColumnChart, {
  type: 'uni-column-chart',
  framework: 'vue3',
});

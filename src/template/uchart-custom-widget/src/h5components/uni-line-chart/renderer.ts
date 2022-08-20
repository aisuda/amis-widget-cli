// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRenderer } from 'vue3-aipage-widget';
// @ts-ignore
import uniLineChart from './uni-line-chart';

registerRenderer(uniLineChart, {
  type: 'uni-line-chart',
  framework: 'vue3',
});

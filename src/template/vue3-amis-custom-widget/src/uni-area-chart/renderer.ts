// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRendererByType } from 'vue3-amis-widget';
// @ts-ignore
import uniAreaChart from './uni-area-chart';

registerRendererByType(uniAreaChart, {
  type: 'uni-area-chart',
  framework: 'vue3'
});

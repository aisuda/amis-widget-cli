// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRenderer } from 'vue3-aipage-widget';
// @ts-ignore
import uniMountChart from './uni-mount-chart';

registerRenderer(uniMountChart, {
  type: 'uni-mount-chart',
  framework: 'vue3',
});

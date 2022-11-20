// 注册自定义组件（aipage-editor渲染器需要）
// @ts-ignore
import { registerRenderer } from 'vue3-aipage-widget';
// @ts-ignore
import InfoCard from '../src/components/uni-time-line/uni-time-line';

registerRenderer(InfoCard, {
  type: 'uni-time-line',
  framework: 'vue3',
});

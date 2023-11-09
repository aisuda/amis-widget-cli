import { registerRendererByType } from 'amis-widget';
import InfoCard from './info-card';

registerRendererByType(InfoCard, {
  type: 'vue-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'vue',
  // usage 设置成formitem，可通过detectProps 告知触发更新的变量有哪些
  detectProps: [], // schema变化使视图更新的属性白名单
});

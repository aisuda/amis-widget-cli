import InfoCard from './widget/info-card';
// @ts-ignore
import { registerRendererByType } from 'amis-widget';

/* 引入公共的静态资源 */
import '$public/css/base.css';

registerRendererByType(InfoCard, {
  type: 'vue-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'vue',
});

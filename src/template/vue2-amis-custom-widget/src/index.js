import InfoCard from './widget/info-card';
// @ts-ignore
import { registerRendererByType } from 'amis-widget';

/* 引入公共的静态资源 */
// import '$public/css/base.css'; // 备注: 全局样式要注意不要干扰平台和编辑器端的正常展示

registerRendererByType(InfoCard, {
  type: 'vue-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'vue',
});

import { registerRenderer } from 'vue3-aipage-widget';
import InfoCard from './info-card';

registerRenderer(InfoCard, {
  type: 'quick-info-card',
  framework: 'vue3', // 使用vue3自定义组件充当爱速搭平台预览模块
});

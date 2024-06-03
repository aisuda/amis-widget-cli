import { registerRenderer } from 'vue3-aipage-widget';
import InfoCard from '../src/components/h5-uni-info-card/h5-uni-info-card.vue';

registerRenderer(InfoCard, {
  type: 'h5-uni-info-card',
  framework: 'vue3', // 使用vue3自定义组件充当爱速搭平台预览模块
});

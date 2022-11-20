import { registerRenderer } from 'vue3-aipage-widget';
import FlowCard from './index.vue';

registerRenderer(FlowCard, {
  type: 'qui-flow-card',
  framework: 'vue3', // 使用vue3自定义组件充当爱速搭平台预览模块
});

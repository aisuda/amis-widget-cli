import { registerRenderer } from 'vue3-aipage-widget';
import InfoCard from './info-card';

registerRenderer(InfoCard, {
  type: 'vue-info-card',
  framework: 'vue',
});

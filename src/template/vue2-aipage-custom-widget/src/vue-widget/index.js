import { registerRenderer } from 'aipage-widget';
import InfoCard from './info-card';

registerRenderer(InfoCard, {
  type: 'vue-info-card',
  framework: 'vue',
});

import InfoCard from './info-card';
import { registerRenderer } from 'vue3-aipage-widget';

registerRenderer(InfoCard, {
  type: 'react-info-card',
  framework: 'react',
});

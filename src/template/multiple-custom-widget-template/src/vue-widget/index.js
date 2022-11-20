import { registerRendererByType } from 'amis-widget';
import InfoCard from './info-card';

registerRendererByType(InfoCard, {
  type: 'vue-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'vue',
});

import { registerRendererByType } from 'amis-widget';
import InfoCard from './info-card';

registerRendererByType(InfoCard, {
  type: 'react-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'react',
});

import InfoCard from './widgets/infoCard';
// @ts-ignore
import { registerRendererByType } from 'amis-widget';

registerRendererByType(InfoCard, {
  type: 'react-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'react',
});

import InfoCard from './widget/info-card';
import { registerRendererByType } from 'amis-widget';
import './locale/index';

registerRendererByType(InfoCard, {
  type: 'react-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'react',
});

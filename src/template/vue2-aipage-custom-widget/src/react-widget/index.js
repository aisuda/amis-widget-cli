import InfoCard from './info-card';
import { registerRenderer } from 'aipage-widget';

registerRenderer(InfoCard, {
  type: 'react-info-card',
  framework: 'react',
});

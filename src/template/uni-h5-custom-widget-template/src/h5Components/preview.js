import * as React from 'react';
import ReactDOM from 'react-dom';
import VueInfoCard from './info-card/info-card';
import VueInfoCard2 from './info-card-v2/info-card';
import { createVue3Component } from 'vue3-aipage-widget';

const InfoCard = createVue3Component(VueInfoCard);
const InfoCard2 = createVue3Component(VueInfoCard2);

ReactDOM.render(
  <>
    <InfoCard />
  </>,
  document.getElementById('root'),
);

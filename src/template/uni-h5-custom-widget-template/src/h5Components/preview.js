import * as React from 'react';
import ReactDOM from 'react-dom';
import VueInfoCard from './info-card/info-card';
import { createVue3Component } from 'vue3-aipage-widget';

const InfoCard = createVue3Component(VueInfoCard);

ReactDOM.render(
  <>
    <InfoCard />
  </>,
  document.getElementById('root'),
);

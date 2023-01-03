import * as React from 'react';
import ReactDOM from 'react-dom';
import VueUniArea from './uni-area-chart/uni-area-chart.vue';
import { createVue3Component } from 'vue3-amis-widget';
const UniArea = createVue3Component(VueUniArea);

ReactDOM.render(
  <>
    <UniArea />
  </>,
  document.getElementById('root')
);

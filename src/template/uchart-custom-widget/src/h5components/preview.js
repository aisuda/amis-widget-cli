import * as React from 'react';
import ReactDOM from 'react-dom';
import VueUniColumn from './uni-column-chart/uni-column-chart.vue'; // 导入组件
import VueUniMount from './uni-mount-chart/uni-mount-chart.vue';
import VueUniLine from './uni-line-chart/uni-line-chart.vue';
import VueUniArea from './uni-area-chart/uni-area-chart.vue';
import VueUniPie from './uni-pie-chart/uni-pie-chart.vue';
import VueUniRing from './uni-ring-chart/uni-ring-chart.vue';
import { createVue3Component } from 'vue3-aipage-widget';
const UniColumn = createVue3Component(VueUniColumn);
const UniMount = createVue3Component(VueUniMount);
const UniLine = createVue3Component(VueUniLine);
const UniArea = createVue3Component(VueUniArea);
const UniPie = createVue3Component(VueUniPie);
const UniRing = createVue3Component(VueUniRing);

ReactDOM.render(
  <>
    <UniColumn />
    <UniMount />
    <UniLine />
    <UniArea />
    <UniPie />
    <UniRing />
  </>,
  document.getElementById('root'),
);

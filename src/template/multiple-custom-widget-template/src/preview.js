import * as React from 'react';
import ReactDOM from 'react-dom';
// import InfoCard from './react-widget/info-card'; // react组件

import InfoCard from './vue-widget/info-card'; // vue组件

import { createVue2Component } from 'amis-widget';

// vue组件转react组件
const InfoCardReact = createVue2Component(InfoCard);

ReactDOM.render(<InfoCardReact />, document.getElementById('root'));

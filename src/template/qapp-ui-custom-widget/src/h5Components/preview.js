import * as React from 'react';
import ReactDOM from 'react-dom';
import VueFlowCard from './qui-flow/index.vue';
import { createVue3Component } from 'vue3-aipage-widget';

// 使用react预览vue组件，需要先转换一下
const FlowCard = createVue3Component(VueFlowCard);

ReactDOM.render(<FlowCard />, document.getElementById('root'));

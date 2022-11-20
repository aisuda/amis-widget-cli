import Vue from 'vue';
import InfoCard from './widget/info-card';

/* 引入公共的静态资源 */
import '$public/css/base.css';

new Vue({
  render: (h) => h(InfoCard),
}).$mount('#root');

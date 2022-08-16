import * as React from 'react';
import ReactDOM from 'react-dom';
import InfoCard from './widget/info-card';

/* 引入公共的静态资源 */
import '$public/css/base.css';

ReactDOM.render(<InfoCard {...{
    title: "amis-widget是开发amis自定义组件的工具集，提供注册amis组件和amis-editor插件的方法。",
    backgroundImage: "",
    img_count: 101,
    comment_count: 2022
}}/>, document.getElementById('root'));

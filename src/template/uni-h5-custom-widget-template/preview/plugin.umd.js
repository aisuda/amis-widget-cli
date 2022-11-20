/*! For license information please see plugin.umd.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.aipageWidget = t())
    : (e.aipageWidget = t());
})(this, function () {
  return (function () {
    'use strict';
    var e = {
        d: function (t, n) {
          for (var o in n)
            e.o(n, o) &&
              !e.o(t, o) &&
              Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
        },
        o: function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        },
        r: function (e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        },
      },
      t = {};
    e.r(t),
      e.d(t, {
        default: function () {
          return o;
        },
      });
    var n = {
      name: 'H5信息卡片',
      description: '信息展示卡片',
      componentId: 'h5-uni-info-card',
      id: 'h5-uni-info-card',
      tags: ['自定义组件', '跨端组件'],
      pluginIcon: 'cards-plugin',
      order: 1,
      type: 'element',
      device: ['mobile', 'app', 'quickapp', 'quickapp-card'],
      docLink: '',
      demoProperties: {
        componentId: 'h5-uni-info-card',
        type: 'element',
        componentProperties: { data: {}, style: {} },
      },
      panelControls: {
        type: 'tabs',
        tabs: [
          {
            title: '属性',
            controls: [
              {
                type: 'collapse',
                title: '数据',
                controls: [
                  {
                    type: 'textarea',
                    name: 'data.title',
                    label: '卡片title',
                    value:
                      'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
                    enableDataBinding: !0,
                  },
                  {
                    type: 'text',
                    name: 'data.backgroundImage',
                    label: '展示图片',
                    value:
                      'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg',
                  },
                  {
                    type: 'input-number',
                    name: 'data.img_count',
                    label: '图片数量',
                    value: 3,
                  },
                  {
                    type: 'input-number',
                    name: 'data.comment_count',
                    label: '评论数',
                    value: 2021,
                  },
                ],
              },
            ],
          },
          {
            title: '外观',
            controls: [
              {
                title: '布局',
                type: 'collapse',
                controls: [
                  {
                    type: 'button-icon-group',
                    name: 'style.display',
                    label: '显示',
                    value: 'block',
                    options: [
                      { label: '块级(block)', icon: 'block', value: 'block' },
                      {
                        label: '行内区块(inline-block)',
                        icon: 'inlineBlock',
                        value: 'inline-block',
                      },
                      {
                        label: '行内元素(inline)',
                        icon: 'inline',
                        value: 'inline',
                      },
                    ],
                  },
                  {
                    name: 'style',
                    type: 'whSet',
                    label: '宽度',
                    options: [{ label: '', value: 'width' }],
                  },
                ],
              },
              {
                type: 'collapse',
                title: '边距',
                controls: { name: 'style.box', type: 'boxModel', label: !1 },
              },
            ],
          },
        ],
      },
    };
    (0, require('vue3-aipage-widget').registerPlugin)(n);
    var o = n;
    return t;
  })();
});

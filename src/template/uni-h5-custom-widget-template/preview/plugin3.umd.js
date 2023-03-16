/*! For license information please see plugin3.umd.js.LICENSE.txt */
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
        d: function (t, o) {
          for (var n in o)
            e.o(o, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
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
          return n;
        },
      });
    var o = {
      name: 'JSON数据卡片',
      description: 'JSON数据卡片',
      componentId: 'h5-uni-info-card-v3',
      id: 'h5-uni-info-card-v3',
      tags: ['自定义组件', '跨端组件'],
      pluginIcon: 'cards-plugin',
      order: 1,
      type: 'element',
      device: ['mobile', 'app', 'quickapp', 'quickapp-card'],
      docLink: '',
      demoProperties: {
        componentId: 'h5-uni-info-card-v3',
        type: 'element',
        componentProperties: {
          data: {
            jsonData: {
              componentId: 'h5-uni-info-card-v3',
              type: 'element',
              componentProperties: { data: {}, style: {} },
            },
          },
          style: {},
        },
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
                  { type: 'textarea', name: 'data.title', label: '卡片title' },
                  {
                    type: 'json',
                    name: 'data.jsonData',
                    label: 'JSON数据',
                    enableDataBinding: !0,
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
    (0, require('vue3-aipage-widget').registerPlugin)(o);
    var n = o;
    return t;
  })();
});

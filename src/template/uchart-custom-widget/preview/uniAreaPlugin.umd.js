/*! For license information please see uniAreaPlugin.umd.js.LICENSE.txt */
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
          for (var a in n)
            e.o(n, a) &&
              !e.o(t, a) &&
              Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
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
          return a;
        },
      });
    var n = {
      name: '折线区域图',
      description: '基本折线区域图',
      componentId: 'uni-area-chart',
      id: 'uni-area-chart',
      tags: ['图表组件', '跨端组件'],
      pluginIcon: 'chart-plugin',
      order: 1,
      type: 'element',
      device: ['mobile', 'app'],
      docLink: '',
      demoProperties: {
        componentId: 'uni-area-chart',
        type: 'element',
        componentProperties: {
          data: {
            categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
            series: [
              { name: '成交量A', data: [35, 8, 25, 37, 4, 20] },
              { name: '成交量B', data: [70, 40, 65, 100, 44, 68] },
              { name: '成交量C', data: [100, 80, 95, 150, 112, 132] },
            ],
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
                  {
                    name: 'data.series',
                    type: 'setting-list',
                    label: '图表数据',
                    mode: 'normal',
                    fullSize: !0,
                    setting: [
                      {
                        type: 'input-text',
                        name: 'name',
                        label: '指标',
                        placeholder: '请输入奖品名称',
                      },
                      {
                        type: 'input-array',
                        name: 'data',
                        label: '数值',
                        inline: !0,
                        removable: !0,
                        draggable: !0,
                        items: { type: 'input-number' },
                      },
                    ],
                    enableDataBinding: !0,
                  },
                  {
                    name: 'data.categories',
                    label: '横轴数据',
                    type: 'input-array',
                    mode: 'normal',
                    fullSize: !0,
                    removable: !0,
                    draggable: !0,
                    items: { type: 'input-text' },
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
    (0, require('vue3-aipage-widget/dist/index.umd').registerPlugin)(n);
    var a = n;
    return t;
  })();
});

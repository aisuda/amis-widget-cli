/*! For license information please see uniPiePlugin.umd.js.LICENSE.txt */
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
          for (var l in n)
            e.o(n, l) &&
              !e.o(t, l) &&
              Object.defineProperty(t, l, { enumerable: !0, get: n[l] });
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
          return l;
        },
      });
    var n = {
      name: '饼状图',
      description: '基本饼状图',
      componentId: 'uni-pie-chart',
      id: 'uni-pie-chart',
      tags: ['图表组件', '跨端组件'],
      pluginIcon: 'chart-plugin',
      order: 1,
      type: 'element',
      device: ['mobile', 'app'],
      docLink: '',
      demoProperties: {
        componentId: 'uni-pie-chart',
        type: 'element',
        componentProperties: {
          data: {
            series: [
              {
                data: [
                  { name: '一班', value: 50 },
                  { name: '二班', value: 30 },
                  { name: '三班', value: 20 },
                  { name: '四班', value: 18 },
                  { name: '五班', value: 8 },
                ],
              },
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
                type: 'setting-list',
                name: 'data.series[0].data',
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
                  { type: 'input-number', name: 'value', label: '数值' },
                ],
                enableDataBinding: !0,
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
    var l = n;
    return t;
  })();
});

/*! For license information please see uniRingPlugin.umd.js.LICENSE.txt */
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
        'vue3-aipage-widget/dist/index.umd': function (e) {
          e.exports = require('vue3-aipage-widget/dist/index.umd');
        },
      },
      t = {};
    function n(l) {
      var i = t[l];
      if (void 0 !== i) return i.exports;
      var o = (t[l] = { exports: {} });
      return e[l](o, o.exports, n), o.exports;
    }
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
      (n.d = function (e, t) {
        for (var l in t)
          n.o(t, l) &&
            !n.o(e, l) &&
            Object.defineProperty(e, l, { enumerable: !0, get: t[l] });
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var l = {};
    n.r(l);
    var i = {
      name: '环形图',
      description: '基本环形图',
      componentId: 'uni-ring-chart',
      id: 'uni-ring-chart',
      tags: ['图表组件', '跨端组件'],
      pluginIcon: 'chart-plugin',
      order: 1,
      type: 'element',
      device: ['mobile', 'app'],
      docLink: '',
      demoProperties: {
        componentId: 'uni-ring-chart',
        type: 'element',
        componentProperties: {
          data: {
            title: '收益率',
            subTitle: '70%',
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
                type: 'collapse',
                title: '数据',
                controls: [
                  { type: 'input-text', name: 'data.title', label: '标题' },
                  {
                    type: 'input-text',
                    name: 'data.subTitle',
                    label: '子标题',
                  },
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
    return (
      (0, n('vue3-aipage-widget/dist/index.umd').registerPlugin)(i),
      (l.default = i),
      l
    );
  })();
});

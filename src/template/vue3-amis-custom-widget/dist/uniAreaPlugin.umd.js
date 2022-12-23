/*! For license information please see uniAreaPlugin.umd.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.amisWidget = t())
    : (e.amisWidget = t());
})(this, function () {
  return (function () {
    'use strict';
    var e = {
        d: function (t, a) {
          for (var n in a)
            e.o(a, n) && !e.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
        },
        o: function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        },
        r: function (e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        }
      },
      t = {};
    e.r(t),
      e.d(t, {
        areaChartPlugin: function () {
          return n;
        },
        default: function () {
          return i;
        }
      });
    var a = require('vue3-amis-widget'),
      n = function () {
        (this.rendererName = 'uni-area-chart'),
          (this.$schema = '/schemas/UnkownSchema.json'),
          (this.name = '折线区域图'),
          (this.description = '基本折线区域图'),
          (this.tags = ['自定义图表']),
          (this.icon = 'fa fa-file-code-o'),
          (this.scaffold = {
            type: 'uni-area-chart',
            label: '折线区域图',
            name: '折线区域图',
            categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
            series: [
              { name: '成交量A', data: [35, 8, 25, 37, 4, 20] },
              { name: '成交量B', data: [70, 40, 65, 100, 44, 68] },
              { name: '成交量C', data: [100, 80, 95, 150, 112, 132] }
            ]
          }),
          (this.previewSchema = { type: 'uni-area-chart', label: '折线区域图' }),
          (this.panelTitle = '配置'),
          (this.panelControls = [
            {
              type: 'json',
              name: 'categories',
              label: '横轴数据',
              mutable: !0,
              value: ['2016', '2017', '2018', '2019', '2020', '2021']
            },
            {
              type: 'json',
              name: 'series',
              label: '图表数据',
              mutable: !0,
              value: [
                { name: '成交量A', data: [35, 8, 25, 37, 4, 20] },
                { name: '成交量B', data: [70, 40, 65, 100, 44, 68] },
                { name: '成交量C', data: [100, 80, 95, 150, 112, 132] }
              ]
            }
          ]);
      };
    (0, a.registerAmisEditorPlugin)(n);
    var i = n;
    return t;
  })();
});

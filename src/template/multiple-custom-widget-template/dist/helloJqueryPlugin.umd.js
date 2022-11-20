/*! For license information please see helloJqueryPlugin.umd.js.LICENSE.txt */
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
        d: function (t, o) {
          for (var r in o)
            e.o(o, r) &&
              !e.o(t, r) &&
              Object.defineProperty(t, r, { enumerable: !0, get: o[r] });
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
        HelloJqueryPlugin: function () {
          return r;
        },
        default: function () {
          return n;
        },
      });
    var o = require('amis-widget'),
      r = function () {
        (this.rendererName = 'hello-jquery'),
          (this.$schema = '/schemas/UnkownSchema.json'),
          (this.name = 'hello-jquery'),
          (this.description = 'hello-jquery'),
          (this.tags = ['按钮']),
          (this.icon = 'fa fa-file-code-o'),
          (this.scaffold = {
            type: 'hello-jquery',
            label: 'hello-jquery',
            name: 'hello-jquery',
          }),
          (this.previewSchema = {
            type: 'hello-jquery',
            label: 'hello-jquery',
          }),
          (this.panelTitle = '配置面板'),
          (this.panelControls = [
            { type: 'tpl', tpl: '可根据变量 \\${amisUser} 获取用户数据。' },
          ]);
      };
    (0,
    o.registerAmisEditorPlugin)(r, { rendererName: 'hello-jquery', name: 'hello-jquery', order: 98, panelTitle: '配置面板' });
    var n = r;
    return t;
  })();
});

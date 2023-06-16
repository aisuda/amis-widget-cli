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
        'amis-widget': function (e) {
          e.exports = require('amis-widget');
        },
      },
      t = {};
    function o(r) {
      var n = t[r];
      if (void 0 !== n) return n.exports;
      var i = (t[r] = { exports: {} });
      return e[r](i, i.exports, o), i.exports;
    }
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, { a: t }), t;
    }),
      (o.d = function (e, t) {
        for (var r in t)
          o.o(t, r) &&
            !o.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (o.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var r = {};
    return (
      (function () {
        o.r(r),
          o.d(r, {
            HelloJqueryPlugin: function () {
              return t;
            },
          });
        var e = o('amis-widget'),
          t = function () {
            (this.rendererName = 'hello-jquery'),
              (this.$schema = '/schemas/UnkownSchema.json'),
              (this.name = 'hello-jquery'),
              (this.description = 'hello-jquery'),
              (this.tags = ['自定义']),
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
        (0, e.registerAmisEditorPlugin)(t), (r.default = t);
      })(),
      r
    );
  })();
});

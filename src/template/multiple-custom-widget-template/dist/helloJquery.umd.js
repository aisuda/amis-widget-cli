/*! For license information please see helloJquery.umd.js.LICENSE.txt */
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
        n: function (t) {
          var n =
            t && t.__esModule
              ? function () {
                  return t.default;
                }
              : function () {
                  return t;
                };
          return e.d(n, { a: n }), n;
        },
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
          return u;
        },
      });
    var n = require('jquery'),
      o = e.n(n),
      r = require('amis-widget'),
      i = (function () {
        function e() {
          this.template =
            '\n    <div id="aaa">\n        这是个 jquery 按钮 <button id="btn">点我一下</button>\n    </div>';
        }
        var t = e.prototype;
        return (
          (t.onMount = function (e) {
            o()('#btn').click(this.test.bind(this, e));
          }),
          (t.test = function (e) {
            e.onAction(
              null,
              {
                actionType: 'dialog',
                dialog: { title: '来个弹框', body: 'Bom Bom Bom ${a} ${b}' },
              },
              { a: 1, b: 2 },
            );
          }),
          e
        );
      })();
    (0,
    r.registerRendererByType)(i, { type: 'hello-jquery', usage: 'renderer', weight: 98, framework: 'jquery' });
    var u = i;
    return t;
  })();
});

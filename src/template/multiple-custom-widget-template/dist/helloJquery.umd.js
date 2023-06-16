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
        'amis-widget': function (e) {
          e.exports = require('amis-widget');
        },
        jquery: function (e) {
          e.exports = require('jquery');
        },
      },
      t = {};
    function n(o) {
      var r = t[o];
      if (void 0 !== r) return r.exports;
      var i = (t[o] = { exports: {} });
      return e[o](i, i.exports, n), i.exports;
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
        for (var o in t)
          n.o(t, o) &&
            !n.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
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
    var o = {};
    return (
      (function () {
        n.r(o);
        var e = n('jquery'),
          t = n.n(e),
          r = n('amis-widget'),
          i = (function () {
            function e() {
              this.template =
                '\n    <div id="aaa">\n        这是个 jquery 按钮 <button id="btn">点我一下</button>\n    </div>';
            }
            var n = e.prototype;
            return (
              (n.onMount = function (e) {
                t()('#btn').click(this.test.bind(this, e));
              }),
              (n.test = function (e) {
                e.onAction(
                  null,
                  {
                    actionType: 'dialog',
                    dialog: {
                      title: '来个弹框',
                      body: 'Bom Bom Bom ${a} ${b}',
                    },
                  },
                  { a: 1, b: 2 },
                );
              }),
              e
            );
          })();
        (0, r.registerRendererByType)(i, {
          type: 'hello-jquery',
          usage: 'renderer',
          weight: 98,
          framework: 'jquery',
        }),
          (o.default = i);
      })(),
      o
    );
  })();
});

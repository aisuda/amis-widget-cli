/*! For license information please see infoCardPlugin.umd.js.LICENSE.txt */
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
        n.r(o),
          n.d(o, {
            InfoCardPlugin: function () {
              return t;
            },
          });
        var e = n('amis-widget'),
          t = function () {
            (this.rendererName = 'vue-info-card'),
              (this.$schema = '/schemas/UnkownSchema.json'),
              (this.name = 'vue-info-card'),
              (this.description = '信息展示卡片'),
              (this.tags = ['自定义']),
              (this.icon = 'fa fa-file-code-o'),
              (this.scaffold = {
                type: 'vue-info-card',
                label: 'vue-info-card',
                name: 'vue-info-card',
              }),
              (this.previewSchema = {
                type: 'vue-info-card',
                label: 'vue-info-card',
              }),
              (this.panelTitle = '配置'),
              (this.panelControls = [
                {
                  type: 'textarea',
                  name: 'title',
                  label: '卡片title',
                  value:
                    'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
                },
                {
                  type: 'text',
                  name: 'backgroundImage',
                  label: '展示图片',
                  value:
                    'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg',
                },
                {
                  type: 'input-number',
                  name: 'img_count',
                  label: '图片数量',
                  value: 3,
                },
                {
                  type: 'input-number',
                  name: 'comment_count',
                  label: '评论数',
                  value: 2021,
                },
              ]);
          };
        (0, e.registerAmisEditorPlugin)(t), (o.default = t);
      })(),
      o
    );
  })();
});

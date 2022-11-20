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
        InfoCardPlugin: function () {
          return o;
        },
        default: function () {
          return i;
        },
      });
    var n = require('amis-widget'),
      o = function () {
        (this.rendererName = 'vue-info-card-container'),
          (this.$schema = '/schemas/UnkownSchema.json'),
          (this.name = 'vue-info-card-container'),
          (this.description = '卡片容器'),
          (this.tags = ['容器', '自定义']),
          (this.icon = 'fa fa-file-code-o'),
          (this.scaffold = {
            type: 'vue-info-card-container',
            label: 'vue-info-card-container',
            name: 'vue-info-card-container',
            body: [
              {
                type: 'container',
                body: [{ type: 'tpl', tpl: '自定义容器区', inline: !1 }],
              },
            ],
          }),
          (this.previewSchema = {
            type: 'vue-info-card-container',
            label: 'vue-info-card-container',
            body: '内容',
          }),
          (this.regions = [{ key: 'body', label: '内容区' }]),
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
    (0,
    n.registerAmisEditorPlugin)(o, { rendererName: 'vue-info-card-container', name: 'vue-info-card-container', order: 99 });
    var i = o;
    return t;
  })();
});

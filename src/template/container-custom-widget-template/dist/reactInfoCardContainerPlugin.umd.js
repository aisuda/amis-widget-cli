/*! For license information please see reactInfoCardContainerPlugin.umd.js.LICENSE.txt */
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
          for (var r in n)
            e.o(n, r) &&
              !e.o(t, r) &&
              Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
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
          return r;
        },
        default: function () {
          return a;
        },
      });
    var n = require('amis-widget'),
      r = function () {
        (this.rendererName = 'react-info-card-container'),
          (this.$schema = '/schemas/UnkownSchema.json'),
          (this.name = 'react-info-card-container'),
          (this.description = '卡片容器'),
          (this.tags = ['自定义', '容器']),
          (this.icon = 'fa fa-file-code-o'),
          (this.scaffold = {
            type: 'react-info-card-container',
            label: 'react-info-card-container',
            name: 'react-info-card-container',
            body: [
              {
                type: 'container',
                body: [{ type: 'tpl', tpl: '自定义容器区', inline: !1 }],
              },
            ],
          }),
          (this.previewSchema = {
            type: 'react-info-card-container',
            label: 'react-info-card-container',
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
    n.registerAmisEditorPlugin)(r, { rendererName: 'react-info-card-container', name: 'react-info-card-container', order: 99 });
    var a = r;
    return t;
  })();
});

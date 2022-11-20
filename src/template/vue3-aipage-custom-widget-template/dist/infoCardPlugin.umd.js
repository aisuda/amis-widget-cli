/*! For license information please see infoCardPlugin.umd.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.infoCardPlugin = t())
    : (e.infoCardPlugin = t());
})(this, function () {
  return (function () {
    'use strict';
    var e = {
        'vue3-aipage-widget': function (e) {
          e.exports = require('vue3-aipage-widget');
        },
      },
      t = {};
    function n(o) {
      var l = t[o];
      if (void 0 !== l) return l.exports;
      var a = (t[o] = { exports: {} });
      return e[o](a, a.exports, n), a.exports;
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
        var e = {
          name: 'vue信息卡片',
          description: '信息展示卡片',
          componentId: 'vue-info-card',
          id: 'vue-info-card',
          tags: ['自定义组件'],
          pluginIcon: 'cards-plugin',
          order: 1,
          type: 'element',
          device: ['pc', 'mobile'],
          docLink: '',
          demoProperties: {
            componentId: 'vue-info-card',
            type: 'element',
            componentProperties: { data: {}, style: {} },
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
                      {
                        type: 'textarea',
                        name: 'data.title',
                        label: '卡片title',
                        value:
                          'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
                      },
                      {
                        type: 'text',
                        name: 'data.backgroundImage',
                        label: '展示图片',
                        value:
                          'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg',
                      },
                      {
                        type: 'input-number',
                        name: 'data.img_count',
                        label: '图片数量',
                        value: 3,
                      },
                      {
                        type: 'input-number',
                        name: 'data.comment_count',
                        label: '评论数',
                        value: 2021,
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
                          {
                            label: '块级(block)',
                            icon: 'block',
                            value: 'block',
                          },
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
                    controls: {
                      name: 'style.box',
                      type: 'boxModel',
                      label: !1,
                    },
                  },
                ],
              },
            ],
          },
        };
        (0, n('vue3-aipage-widget').registerPlugin)(e), (o.default = e);
      })(),
      o
    );
  })();
});

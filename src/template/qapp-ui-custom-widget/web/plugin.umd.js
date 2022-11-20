/*! For license information please see plugin.umd.js.LICENSE.txt */
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
        581: function (e) {
          e.exports = require('vue3-aipage-widget');
        },
      },
      t = {};
    function o(l) {
      var a = t[l];
      if (void 0 !== a) return a.exports;
      var n = (t[l] = { exports: {} });
      return e[l](n, n.exports, o), n.exports;
    }
    var l = {};
    return (
      (function () {
        var e = l;
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = void 0);
        var t = {
          name: '流程节点',
          description: '快应用版流程节点展示卡片',
          componentId: 'qui-flow-card',
          id: 'qui-flow-card',
          tags: ['快应用卡片'],
          pluginIcon: 'cards-plugin',
          order: 1,
          type: 'element',
          device: ['mobile', 'quickapp', 'quickapp-card'],
          docLink: '',
          demoProperties: {
            componentId: 'qui-flow-card',
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
        (0, o(581).registerPlugin)(t);
        var a = t;
        e.default = a;
      })(),
      l
    );
  })();
});

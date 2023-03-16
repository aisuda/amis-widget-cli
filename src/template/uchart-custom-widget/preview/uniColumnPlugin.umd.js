/*! For license information please see uniColumnPlugin.umd.js.LICENSE.txt */
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
    var e = {};
    (function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    })(e),
      Object(
        (function () {
          var e = new Error(
            "Cannot find module 'vue3-aipage-widget/dist/index.umd'",
          );
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })(),
      );
    var t = {
      name: '柱状图',
      description: '基本柱状图',
      componentId: 'uni-column-chart',
      id: 'uni-column-chart',
      tags: ['图表组件', '跨端组件'],
      pluginIcon: 'chart-plugin',
      order: 1,
      type: 'element',
      device: ['mobile', 'app'],
      docLink: '',
      demoProperties: {
        componentId: 'uni-column-chart',
        type: 'element',
        componentProperties: {
          data: {
            categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
            series: [
              { name: '目标值', data: [35, 36, 31, 33, 13, 34] },
              { name: '完成量', data: [18, 27, 21, 24, 6, 28] },
            ],
          },
          style: {},
        },
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
                    name: 'data.series',
                    type: 'setting-list',
                    label: '图表数据',
                    mode: 'normal',
                    fullSize: !0,
                    setting: [
                      {
                        type: 'input-text',
                        name: 'name',
                        label: '指标',
                        placeholder: '请输入奖品名称',
                      },
                      {
                        type: 'input-array',
                        name: 'data',
                        label: '数值',
                        inline: !0,
                        removable: !0,
                        draggable: !0,
                        items: { type: 'input-number' },
                      },
                    ],
                    enableDataBinding: !0,
                  },
                  {
                    name: 'data.categories',
                    label: '横轴数据',
                    type: 'input-array',
                    inline: !0,
                    removable: !0,
                    draggable: !0,
                    items: { type: 'input-text' },
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
                      { label: '块级(block)', icon: 'block', value: 'block' },
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
                controls: { name: 'style.box', type: 'boxModel', label: !1 },
              },
            ],
          },
        ],
      },
    };
    return (
      Object(
        (function () {
          var e = new Error(
            "Cannot find module 'vue3-aipage-widget/dist/index.umd'",
          );
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        })(),
      )(t),
      (e.default = t),
      e
    );
  })();
});

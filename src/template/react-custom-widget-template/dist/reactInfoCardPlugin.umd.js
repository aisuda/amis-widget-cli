/*! For license information please see reactInfoCardPlugin.umd.js.LICENSE.txt */
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
        d: function (t, r) {
          for (var o in r)
            e.o(r, o) &&
              !e.o(t, o) &&
              Object.defineProperty(t, o, { enumerable: !0, get: r[o] });
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
          return i;
        },
        default: function () {
          return s;
        },
      });
    var r = require('amis-editor');
    require('amis'), require('react'), require('jquery'), require('vue');
    const o = 'npm-custom';
    var n, a;
    !(function (e) {
      (e.renderer = 'renderer'),
        (e.formitem = 'formitem'),
        (e.options = 'options');
    })(n || (n = {})),
      (function (e) {
        (e.react = 'react'),
          (e.vue2 = 'vue2'),
          (e.vue3 = 'vue3'),
          (e.jquery = 'jquery');
      })(a || (a = {}));
    var i = function () {
      (this.rendererName = 'react-info-card'),
        (this.$schema = '/schemas/UnkownSchema.json'),
        (this.name = 'react-info-card'),
        (this.description = '信息展示卡片'),
        (this.tags = ['自定义']),
        (this.icon = 'fa fa-file-code-o'),
        (this.scaffold = {
          type: 'react-info-card',
          label: 'react-info-card',
          name: 'react-info-card',
        }),
        (this.previewSchema = {
          type: 'react-info-card',
          label: 'react-info-card',
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
    !(function (e, t) {
      class n extends r.BasePlugin {
        constructor(e) {
          super(e);
        }
      }
      if (
        (Object.assign(n.prototype, new e()),
        Object.assign(n.prototype, {
          rendererName: 'react-info-card',
          name: 'react-info-card',
          order: 99,
        }),
        (function (e) {
          let t = !1;
          if (!e) return !1;
          const r = new e();
          return (
            r.rendererName
              ? r.name
                ? r.description
                  ? !r.tags || (Array.isArray(r.tags) && 0 === r.tags.length)
                    ? console.error(
                        '[amis-widget]自定义插件注册失败，自定义组件分类（tags）不能为空。',
                      )
                    : r.panelTitle
                    ? (r.icon ||
                        Object.assign(e.prototype, {
                          icon: 'fa fa-file-code-o',
                        }),
                      (n = e.prototype) &&
                        (n.rendererName &&
                          n.rendererName.indexOf(o) < 0 &&
                          (n.rendererName = `npm-custom-${n.rendererName}`),
                        n.previewSchema &&
                          n.previewSchema.type &&
                          n.previewSchema.type.indexOf(o) < 0 &&
                          (n.previewSchema.type = `npm-custom-${n.previewSchema.type}`),
                        n.scaffold && Array.isArray(n.scaffold)
                          ? n.scaffold.map(
                              (e) => (
                                e.type.indexOf(o) < 0 &&
                                  (e.type = `npm-custom-${e.type}`),
                                e
                              ),
                            )
                          : n.scaffold &&
                            n.scaffold.type &&
                            n.scaffold.type.indexOf(o) < 0 &&
                            (n.scaffold.type = `npm-custom-${n.scaffold.type}`)),
                      (t = !0))
                    : console.error(
                        '[amis-widget]自定义插件注册失败，自定义组件配置面板Title（panelTitle）不能为空。',
                      )
                  : console.error(
                      '[amis-widget]自定义插件注册失败，自定义组件描述（description）不能为空。',
                    )
                : console.error(
                    '[amis-widget]自定义插件注册失败，自定义组件名称（name）不能为空。',
                  )
              : console.error(
                  '[amis-widget]自定义插件注册失败，关联渲染器（rendererName）不能为空。',
                ),
            t
          );
          var n;
        })(n))
      ) {
        Object.assign(n.prototype, { isNpmCustomWidget: !0 });
        const e = n.prototype;
        (0, r.registerEditorPlugin)(n),
          window &&
            window.postMessage &&
            window.postMessage(
              {
                type: 'amis-widget-register-event',
                eventMsg: '[amis-widget]注册一个自定义amis-editor插件',
                editorPluginName: e.name,
              },
              '*',
            ),
          console.info('[amis-widget]注册了一个自定义amis-editor插件:', e);
      }
    })(i);
    var s = i;
    return t;
  })();
});

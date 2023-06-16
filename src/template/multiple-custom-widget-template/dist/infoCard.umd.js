/*! For license information please see infoCard.umd.js.LICENSE.txt */
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
    var e = {
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue-widget/info-card.vue?vue&type=script&lang=js&':
          function (e, t, s) {
            'use strict';
            s.r(t),
              (t.default = {
                props: {
                  title: {
                    type: String,
                    default:
                      'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
                  },
                  backgroundImage: {
                    type: String,
                    default:
                      'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg',
                  },
                  img_count: { type: Number, default: 3 },
                  comment_count: { type: Number, default: 2021 },
                },
                data: function () {
                  return { isAlive: !0, isFirstVisit: !0 };
                },
                mounted: function () {
                  this.isFirstVisit = !1;
                },
                activated: function () {
                  this.isAlive = !0;
                },
                deactivated: function () {
                  this.isAlive = !1;
                },
                methods: {
                  agreeDataFormat: function (e) {
                    return e && e <= 9999
                      ? e
                      : e && e > 9999
                      ? Math.floor(e / 1e3) / 10 + 'w'
                      : void 0;
                  },
                  doAction: function (e, t) {
                    'message' === (e ? e.actionType : '')
                      ? alert('您触发了自定义组件的事件动作[message]')
                      : console.log(
                          '自定义组件中监听到的事件动作：',
                          e,
                          ', 事件参数：',
                          t,
                        );
                  },
                },
              });
          },
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue-widget/info-card.vue?vue&type=template&id=68141a04&scoped=true&':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return o;
                },
                staticRenderFns: function () {
                  return n;
                },
              });
            var o = function () {
                var e = this,
                  t = e._self._c;
                return t('div', { staticClass: 'news-card' }, [
                  t('div', { staticClass: 'news-title' }, [
                    e._v(e._s(e.title)),
                  ]),
                  e._v(' '),
                  t('div', { staticClass: 'item-imgbox' }, [
                    t('div', {
                      staticClass: 'news-img',
                      style: {
                        backgroundImage: 'url(' + e.backgroundImage + ')',
                      },
                    }),
                    e._v(' '),
                    e.img_count > 0
                      ? t('div', { staticClass: 'img-count' }, [
                          e._v('\n      ' + e._s(e.img_count) + '\n    '),
                        ])
                      : e._e(),
                  ]),
                  e._v(' '),
                  t('div', { staticClass: 'news-info' }, [
                    t('div', { staticClass: 'left media-mark' }, [
                      e._v('爱速搭 · 低代码平台'),
                    ]),
                    e._v(' '),
                    e.comment_count && 0 != e.comment_count
                      ? t('div', { staticClass: 'cmt-num right' }, [
                          e._v(
                            '\n      ' +
                              e._s(e.agreeDataFormat(e.comment_count)) +
                              '评\n    ',
                          ),
                        ])
                      : e._e(),
                  ]),
                ]);
              },
              n = [];
            o._withStripped = !0;
          },
        './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true&':
          function () {},
        './src/vue-widget/info-card.vue': function (e, t, s) {
          'use strict';
          s.r(t);
          var o = s(
              './src/vue-widget/info-card.vue?vue&type=template&id=68141a04&scoped=true&',
            ),
            n = s('./src/vue-widget/info-card.vue?vue&type=script&lang=js&'),
            d =
              (s(
                './src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true&',
              ),
              (0,
              s('./node_modules/vue-loader/lib/runtime/componentNormalizer.js')
                .default)(
                n.default,
                o.render,
                o.staticRenderFns,
                !1,
                null,
                '68141a04',
                null,
              ));
          (d.options.__file = 'src/vue-widget/info-card.vue'),
            (t.default = d.exports);
        },
        './src/vue-widget/info-card.vue?vue&type=script&lang=js&': function (
          e,
          t,
          s,
        ) {
          'use strict';
          s.r(t);
          var o = s(
            './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue-widget/info-card.vue?vue&type=script&lang=js&',
          );
          t.default = o.default;
        },
        './src/vue-widget/info-card.vue?vue&type=template&id=68141a04&scoped=true&':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return o.render;
                },
                staticRenderFns: function () {
                  return o.staticRenderFns;
                },
              });
            var o = s(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue-widget/info-card.vue?vue&type=template&id=68141a04&scoped=true&',
            );
          },
        './src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true&':
          function (e, t, s) {
            'use strict';
            s.r(t);
            var o = s(
                './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true&',
              ),
              n = {};
            for (var d in o)
              'default' !== d &&
                (n[d] = function (e) {
                  return o[e];
                }.bind(0, d));
            s.d(t, n);
          },
        './node_modules/vue-loader/lib/runtime/componentNormalizer.js':
          function (e, t, s) {
            'use strict';
            function o(e, t, s, o, n, d, r, i) {
              var l,
                u = 'function' == typeof e ? e.options : e;
              if (
                (t &&
                  ((u.render = t), (u.staticRenderFns = s), (u._compiled = !0)),
                o && (u.functional = !0),
                d && (u._scopeId = 'data-v-' + d),
                r
                  ? ((l = function (e) {
                      (e =
                        e ||
                        (this.$vnode && this.$vnode.ssrContext) ||
                        (this.parent &&
                          this.parent.$vnode &&
                          this.parent.$vnode.ssrContext)) ||
                        'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                        (e = __VUE_SSR_CONTEXT__),
                        n && n.call(this, e),
                        e &&
                          e._registeredComponents &&
                          e._registeredComponents.add(r);
                    }),
                    (u._ssrRegister = l))
                  : n &&
                    (l = i
                      ? function () {
                          n.call(
                            this,
                            (u.functional ? this.parent : this).$root.$options
                              .shadowRoot,
                          );
                        }
                      : n),
                l)
              )
                if (u.functional) {
                  u._injectStyles = l;
                  var a = u.render;
                  u.render = function (e, t) {
                    return l.call(t), a(e, t);
                  };
                } else {
                  var c = u.beforeCreate;
                  u.beforeCreate = c ? [].concat(c, l) : [l];
                }
              return { exports: e, options: u };
            }
            s.r(t),
              s.d(t, {
                default: function () {
                  return o;
                },
              });
          },
        './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true&':
          function (e, t, s) {
            var o = s(
              './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true&',
            );
            o.__esModule && (o = o.default),
              'string' == typeof o && (o = [[e.id, o, '']]),
              o.locals && (e.exports = o.locals),
              (0,
              s('./node_modules/vue-style-loader/lib/addStylesClient.js')
                .default)('15c8684e', o, !1, { sourceMap: !1 });
          },
        './node_modules/vue-style-loader/lib/addStylesClient.js': function (
          e,
          t,
          s,
        ) {
          'use strict';
          s.r(t),
            s.d(t, {
              default: function () {
                return v;
              },
            });
          var o = s('./node_modules/vue-style-loader/lib/listToStyles.js'),
            n = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !n)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var d = {},
            r =
              n && (document.head || document.getElementsByTagName('head')[0]),
            i = null,
            l = 0,
            u = !1,
            a = function () {},
            c = null,
            p = 'data-vue-ssr-id',
            f =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function v(e, t, s, n) {
            (u = s), (c = n || {});
            var r = (0, o.default)(e, t);
            return (
              m(r),
              function (t) {
                for (var s = [], n = 0; n < r.length; n++) {
                  var i = r[n];
                  (l = d[i.id]).refs--, s.push(l);
                }
                for (
                  t ? m((r = (0, o.default)(e, t))) : (r = []), n = 0;
                  n < s.length;
                  n++
                ) {
                  var l;
                  if (0 === (l = s[n]).refs) {
                    for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                    delete d[l.id];
                  }
                }
              }
            );
          }
          function m(e) {
            for (var t = 0; t < e.length; t++) {
              var s = e[t],
                o = d[s.id];
              if (o) {
                o.refs++;
                for (var n = 0; n < o.parts.length; n++) o.parts[n](s.parts[n]);
                for (; n < s.parts.length; n++) o.parts.push(g(s.parts[n]));
                o.parts.length > s.parts.length &&
                  (o.parts.length = s.parts.length);
              } else {
                var r = [];
                for (n = 0; n < s.parts.length; n++) r.push(g(s.parts[n]));
                d[s.id] = { id: s.id, refs: 1, parts: r };
              }
            }
          }
          function _() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), r.appendChild(e), e;
          }
          function g(e) {
            var t,
              s,
              o = document.querySelector('style[' + p + '~="' + e.id + '"]');
            if (o) {
              if (u) return a;
              o.parentNode.removeChild(o);
            }
            if (f) {
              var n = l++;
              (o = i || (i = _())),
                (t = b.bind(null, o, n, !1)),
                (s = b.bind(null, o, n, !0));
            } else
              (o = _()),
                (t = h.bind(null, o)),
                (s = function () {
                  o.parentNode.removeChild(o);
                });
            return (
              t(e),
              function (o) {
                if (o) {
                  if (
                    o.css === e.css &&
                    o.media === e.media &&
                    o.sourceMap === e.sourceMap
                  )
                    return;
                  t((e = o));
                } else s();
              }
            );
          }
          var j,
            y =
              ((j = []),
              function (e, t) {
                return (j[e] = t), j.filter(Boolean).join('\n');
              });
          function b(e, t, s, o) {
            var n = s ? '' : o.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, n);
            else {
              var d = document.createTextNode(n),
                r = e.childNodes;
              r[t] && e.removeChild(r[t]),
                r.length ? e.insertBefore(d, r[t]) : e.appendChild(d);
            }
          }
          function h(e, t) {
            var s = t.css,
              o = t.media,
              n = t.sourceMap;
            if (
              (o && e.setAttribute('media', o),
              c.ssrId && e.setAttribute(p, t.id),
              n &&
                ((s += '\n/*# sourceURL=' + n.sources[0] + ' */'),
                (s +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                  ' */')),
              e.styleSheet)
            )
              e.styleSheet.cssText = s;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(s));
            }
          }
        },
        './node_modules/vue-style-loader/lib/listToStyles.js': function (
          e,
          t,
          s,
        ) {
          'use strict';
          function o(e, t) {
            for (var s = [], o = {}, n = 0; n < t.length; n++) {
              var d = t[n],
                r = d[0],
                i = {
                  id: e + ':' + n,
                  css: d[1],
                  media: d[2],
                  sourceMap: d[3],
                };
              o[r]
                ? o[r].parts.push(i)
                : s.push((o[r] = { id: r, parts: [i] }));
            }
            return s;
          }
          s.r(t),
            s.d(t, {
              default: function () {
                return o;
              },
            });
        },
        'amis-widget': function (e) {
          'use strict';
          e.exports = require('amis-widget');
        },
      },
      t = {};
    function s(o) {
      var n = t[o];
      if (void 0 !== n) return n.exports;
      var d = (t[o] = { id: o, exports: {} });
      return e[o](d, d.exports, s), d.exports;
    }
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, { a: t }), t;
    }),
      (s.d = function (e, t) {
        for (var o in t)
          s.o(t, o) &&
            !s.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      }),
      (s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (s.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var o = {};
    return (
      (function () {
        'use strict';
        s.r(o);
        var e = s('amis-widget'),
          t = s('./src/vue-widget/info-card.vue');
        (0, e.registerRendererByType)(t.default, {
          type: 'vue-info-card',
          usage: 'renderer',
          weight: 99,
          framework: 'vue',
        });
      })(),
      o
    );
  })();
});

/*! For license information please see infoCard.umd.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.infoCard = t())
    : (e.infoCard = t());
})(this, function () {
  return (function () {
    var e = {
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-widget/info-card.vue?vue&type=script&lang=js':
          function (e, t, s) {
            'use strict';
            s.r(t),
              (t.default = {
                props: ['componentProperties', 'id'],
                data: function () {
                  return { isAlive: !0, isFirstVisit: !0 };
                },
                computed: {
                  title: function () {
                    return (
                      (this.componentProperties &&
                        this.componentProperties.data &&
                        this.componentProperties.data.title) ||
                      'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。'
                    );
                  },
                  backgroundImage: function () {
                    return (
                      (this.componentProperties &&
                        this.componentProperties.data &&
                        this.componentProperties.data.backgroundImage) ||
                      'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg'
                    );
                  },
                  img_count: function () {
                    return (
                      this.componentProperties &&
                      this.componentProperties.data &&
                      this.componentProperties.data.img_count
                    );
                  },
                  comment_count: function () {
                    return (
                      this.componentProperties &&
                      this.componentProperties.data &&
                      this.componentProperties.data.comment_count
                    );
                  },
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
                },
              });
          },
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-widget/info-card.vue?vue&type=template&id=68141a04&scoped=true':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return c;
                },
              });
            var o = s('vue'),
              d = { class: 'news-card' },
              n = { class: 'news-title' },
              r = { class: 'item-imgbox' },
              u = { key: 0, class: 'img-count' },
              i = { class: 'news-info' },
              l = (function (e) {
                return (
                  (0, o.pushScopeId)('data-v-68141a04'),
                  (e = e()),
                  (0, o.popScopeId)(),
                  e
                );
              })(function () {
                return (0,
                o.createElementVNode)('div', { class: 'left media-mark' }, '爱速搭 · 低代码平台', -1);
              }),
              a = { class: 'cmt-num right' };
            function c(e, t, s, c, p, f) {
              return (
                (0, o.openBlock)(),
                (0, o.createElementBlock)('div', d, [
                  (0, o.createElementVNode)(
                    'div',
                    n,
                    (0, o.toDisplayString)(f.title),
                    1,
                  ),
                  (0, o.createElementVNode)('div', r, [
                    (0, o.createElementVNode)(
                      'div',
                      {
                        class: 'news-img',
                        style: (0, o.normalizeStyle)({
                          backgroundImage: 'url(' + f.backgroundImage + ')',
                        }),
                      },
                      null,
                      4,
                    ),
                    f.img_count > 0
                      ? ((0, o.openBlock)(),
                        (0, o.createElementBlock)(
                          'div',
                          u,
                          (0, o.toDisplayString)(f.img_count),
                          1,
                        ))
                      : (0, o.createCommentVNode)('v-if', !0),
                  ]),
                  (0, o.createElementVNode)('div', i, [
                    l,
                    (0, o.createElementVNode)(
                      'div',
                      a,
                      (0, o.toDisplayString)(
                        f.agreeDataFormat(f.comment_count) || 0,
                      ) + ' 评 ',
                      1,
                    ),
                  ]),
                ])
              );
            }
          },
        './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true':
          function () {},
        './node_modules/vue-loader/dist/exportHelper.js': function (e, t) {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = (e, t) => {
              const s = e.__vccOpts || e;
              for (const [e, o] of t) s[e] = o;
              return s;
            });
        },
        './src/vue-widget/info-card.vue': function (e, t, s) {
          'use strict';
          s.r(t);
          var o = s(
              './src/vue-widget/info-card.vue?vue&type=template&id=68141a04&scoped=true',
            ),
            d = s('./src/vue-widget/info-card.vue?vue&type=script&lang=js');
          s(
            './src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true',
          );
          const n = (0,
          s('./node_modules/vue-loader/dist/exportHelper.js').default)(
            d.default,
            [
              ['render', o.render],
              ['__scopeId', 'data-v-68141a04'],
              ['__file', 'src/vue-widget/info-card.vue'],
            ],
          );
          t.default = n;
        },
        './src/vue-widget/info-card.vue?vue&type=script&lang=js': function (
          e,
          t,
          s,
        ) {
          'use strict';
          s.r(t),
            s.d(t, {
              default: function () {
                return o.default;
              },
            });
          var o = s(
            './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-widget/info-card.vue?vue&type=script&lang=js',
          );
        },
        './src/vue-widget/info-card.vue?vue&type=template&id=68141a04&scoped=true':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return o.render;
                },
              });
            var o = s(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-widget/info-card.vue?vue&type=template&id=68141a04&scoped=true',
            );
          },
        './src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true':
          function (e, t, s) {
            'use strict';
            s.r(t);
            var o = s(
                './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true',
              ),
              d = {};
            for (var n in o)
              'default' !== n &&
                (d[n] = function (e) {
                  return o[e];
                }.bind(0, n));
            s.d(t, d);
          },
        './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true':
          function (e, t, s) {
            var o = s(
              './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/vue-widget/info-card.vue?vue&type=style&index=0&id=68141a04&lang=scss&scoped=true',
            );
            o.__esModule && (o = o.default),
              'string' == typeof o && (o = [[e.id, o, '']]),
              o.locals && (e.exports = o.locals),
              (0,
              s('./node_modules/vue-style-loader/lib/addStylesClient.js')
                .default)('426a5594', o, !1, { sourceMap: !1 });
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
                return m;
              },
            });
          var o = s('./node_modules/vue-style-loader/lib/listToStyles.js'),
            d = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !d)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var n = {},
            r =
              d && (document.head || document.getElementsByTagName('head')[0]),
            u = null,
            i = 0,
            l = !1,
            a = function () {},
            c = null,
            p = 'data-vue-ssr-id',
            f =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function m(e, t, s, d) {
            (l = s), (c = d || {});
            var r = (0, o.default)(e, t);
            return (
              v(r),
              function (t) {
                for (var s = [], d = 0; d < r.length; d++) {
                  var u = r[d];
                  (i = n[u.id]).refs--, s.push(i);
                }
                for (
                  t ? v((r = (0, o.default)(e, t))) : (r = []), d = 0;
                  d < s.length;
                  d++
                ) {
                  var i;
                  if (0 === (i = s[d]).refs) {
                    for (var l = 0; l < i.parts.length; l++) i.parts[l]();
                    delete n[i.id];
                  }
                }
              }
            );
          }
          function v(e) {
            for (var t = 0; t < e.length; t++) {
              var s = e[t],
                o = n[s.id];
              if (o) {
                o.refs++;
                for (var d = 0; d < o.parts.length; d++) o.parts[d](s.parts[d]);
                for (; d < s.parts.length; d++) o.parts.push(j(s.parts[d]));
                o.parts.length > s.parts.length &&
                  (o.parts.length = s.parts.length);
              } else {
                var r = [];
                for (d = 0; d < s.parts.length; d++) r.push(j(s.parts[d]));
                n[s.id] = { id: s.id, refs: 1, parts: r };
              }
            }
          }
          function g() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), r.appendChild(e), e;
          }
          function j(e) {
            var t,
              s,
              o = document.querySelector('style[' + p + '~="' + e.id + '"]');
            if (o) {
              if (l) return a;
              o.parentNode.removeChild(o);
            }
            if (f) {
              var d = i++;
              (o = u || (u = g())),
                (t = S.bind(null, o, d, !1)),
                (s = S.bind(null, o, d, !0));
            } else
              (o = g()),
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
          var y,
            _ =
              ((y = []),
              function (e, t) {
                return (y[e] = t), y.filter(Boolean).join('\n');
              });
          function S(e, t, s, o) {
            var d = s ? '' : o.css;
            if (e.styleSheet) e.styleSheet.cssText = _(t, d);
            else {
              var n = document.createTextNode(d),
                r = e.childNodes;
              r[t] && e.removeChild(r[t]),
                r.length ? e.insertBefore(n, r[t]) : e.appendChild(n);
            }
          }
          function h(e, t) {
            var s = t.css,
              o = t.media,
              d = t.sourceMap;
            if (
              (o && e.setAttribute('media', o),
              c.ssrId && e.setAttribute(p, t.id),
              d &&
                ((s += '\n/*# sourceURL=' + d.sources[0] + ' */'),
                (s +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(d)))) +
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
            for (var s = [], o = {}, d = 0; d < t.length; d++) {
              var n = t[d],
                r = n[0],
                u = {
                  id: e + ':' + d,
                  css: n[1],
                  media: n[2],
                  sourceMap: n[3],
                };
              o[r]
                ? o[r].parts.push(u)
                : s.push((o[r] = { id: r, parts: [u] }));
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
        vue: function (e) {
          'use strict';
          e.exports = require('vue');
        },
        'vue3-aipage-widget': function (e) {
          'use strict';
          e.exports = require('vue3-aipage-widget');
        },
      },
      t = {};
    function s(o) {
      var d = t[o];
      if (void 0 !== d) return d.exports;
      var n = (t[o] = { id: o, exports: {} });
      return e[o](n, n.exports, s), n.exports;
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
        var e = s('vue3-aipage-widget'),
          t = s('./src/vue-widget/info-card.vue');
        (0, e.registerRenderer)(t.default, {
          type: 'vue-info-card',
          framework: 'vue',
        });
      })(),
      o
    );
  })();
});

/*! For license information please see uniColumnRenderer.umd.js.LICENSE.txt */
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
    var e = {
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=script&lang=js':
          function (e, t, s) {
            'use strict';
            s.r(t);
            var n = s('@qiun/ucharts'),
              o = s.n(n),
              r = {};
            t.default = {
              props: ['componentProperties', 'id'],
              data: function () {
                return {
                  defaultChartData: {
                    categories: [
                      '2016',
                      '2017',
                      '2018',
                      '2019',
                      '2020',
                      '2021',
                    ],
                    series: [
                      { name: '目标值', data: [35, 36, 31, 33, 13, 34] },
                      { name: '完成量', data: [18, 27, 21, 24, 6, 28] },
                    ],
                  },
                };
              },
              computed: {
                chartId: function () {
                  return this.id || 'column-uChart';
                },
                categories: function () {
                  return (
                    (this.componentProperties &&
                      this.componentProperties.data &&
                      this.componentProperties.data.categories) ||
                    this.defaultChartData.categories
                  );
                },
                series: function () {
                  return (
                    (this.componentProperties &&
                      this.componentProperties.data &&
                      this.componentProperties.data.series) ||
                    this.defaultChartData.series
                  );
                },
              },
              mounted: function () {
                this.drawCharts(this.chartId, {
                  categories: this.categories,
                  series: this.series,
                });
              },
              updated: function () {
                this.drawCharts(this.chartId, {
                  categories: this.categories,
                  series: this.series,
                });
              },
              methods: {
                drawCharts: function (e, t) {
                  var s = document.getElementById(e) || this.$refs.uchart;
                  (s.width = s.offsetWidth || '370'),
                    (s.height = s.offsetHeight || '280');
                  var n = s.getContext('2d');
                  r[e] = new (o())({
                    type: 'column',
                    context: n,
                    width: s.width,
                    height: s.height,
                    categories: t.categories,
                    series: t.series,
                    animation: !0,
                    background: '#ffffff',
                    padding: [15, 15, 0, 5],
                    xAxis: { disableGrid: !0 },
                    yAxis: { data: [{ min: 0 }] },
                    color: [
                      '#1890FF',
                      '#91CB74',
                      '#FAC858',
                      '#EE6666',
                      '#73C0DE',
                      '#3CA272',
                      '#FC8452',
                      '#9A60B4',
                      '#ea7ccc',
                    ],
                    legend: {},
                    extra: {
                      column: {
                        type: 'group',
                        width: 30,
                        activeBgColor: '#000000',
                        activeBgOpacity: 0.08,
                      },
                    },
                  });
                },
                tap: function (e) {
                  r[e.target.id].touchLegend(e), r[e.target.id].showToolTip(e);
                },
              },
            };
          },
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=template&id=279349dc&scoped=true':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return d;
                },
              });
            var n = s('vue'),
              o = { class: 'u-charts-container' },
              r = ['canvas-id', 'id'];
            function d(e, t, s, d, u, l) {
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)('div', o, [
                  l.chartId
                    ? ((0, n.openBlock)(),
                      (0, n.createElementBlock)(
                        'canvas',
                        {
                          key: 0,
                          'canvas-id': l.chartId,
                          id: l.chartId,
                          class: 'u-charts',
                          onTouchend:
                            t[0] ||
                            (t[0] = function () {
                              return l.tap && l.tap.apply(l, arguments);
                            }),
                          ref: 'uchart',
                        },
                        null,
                        40,
                        r,
                      ))
                    : (0, n.createCommentVNode)('v-if', !0),
                ])
              );
            }
          },
        './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=style&index=0&id=279349dc&scoped=true&lang=scss':
          function () {},
        './node_modules/vue-loader/dist/exportHelper.js': function (e, t) {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = (e, t) => {
              const s = e.__vccOpts || e;
              for (const [e, n] of t) s[e] = n;
              return s;
            });
        },
        './src/h5components/uni-column-chart/uni-column-chart.vue': function (
          e,
          t,
          s,
        ) {
          'use strict';
          s.r(t);
          var n = s(
              './src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=template&id=279349dc&scoped=true',
            ),
            o = s(
              './src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=script&lang=js',
            );
          s(
            './src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=style&index=0&id=279349dc&scoped=true&lang=scss',
          );
          const r = (0,
          s('./node_modules/vue-loader/dist/exportHelper.js').default)(
            o.default,
            [
              ['render', n.render],
              ['__scopeId', 'data-v-279349dc'],
              [
                '__file',
                'src/h5components/uni-column-chart/uni-column-chart.vue',
              ],
            ],
          );
          t.default = r;
        },
        './src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=script&lang=js':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                default: function () {
                  return n.default;
                },
              });
            var n = s(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=script&lang=js',
            );
          },
        './src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=template&id=279349dc&scoped=true':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return n.render;
                },
              });
            var n = s(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=template&id=279349dc&scoped=true',
            );
          },
        './src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=style&index=0&id=279349dc&scoped=true&lang=scss':
          function (e, t, s) {
            'use strict';
            s.r(t);
            var n = s(
                './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=style&index=0&id=279349dc&scoped=true&lang=scss',
              ),
              o = {};
            for (var r in n)
              'default' !== r &&
                (o[r] = function (e) {
                  return n[e];
                }.bind(0, r));
            s.d(t, o);
          },
        './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=style&index=0&id=279349dc&scoped=true&lang=scss':
          function (e, t, s) {
            var n = s(
              './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-column-chart/uni-column-chart.vue?vue&type=style&index=0&id=279349dc&scoped=true&lang=scss',
            );
            n.__esModule && (n = n.default),
              'string' == typeof n && (n = [[e.id, n, '']]),
              n.locals && (e.exports = n.locals),
              (0,
              s('./node_modules/vue-style-loader/lib/addStylesClient.js')
                .default)('538d59a8', n, !1, { sourceMap: !1 });
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
                return h;
              },
            });
          var n = s('./node_modules/vue-style-loader/lib/listToStyles.js'),
            o = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !o)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var r = {},
            d =
              o && (document.head || document.getElementsByTagName('head')[0]),
            u = null,
            l = 0,
            i = !1,
            c = function () {},
            a = null,
            p = 'data-vue-ssr-id',
            m =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function h(e, t, s, o) {
            (i = s), (a = o || {});
            var d = (0, n.default)(e, t);
            return (
              f(d),
              function (t) {
                for (var s = [], o = 0; o < d.length; o++) {
                  var u = d[o];
                  (l = r[u.id]).refs--, s.push(l);
                }
                for (
                  t ? f((d = (0, n.default)(e, t))) : (d = []), o = 0;
                  o < s.length;
                  o++
                ) {
                  var l;
                  if (0 === (l = s[o]).refs) {
                    for (var i = 0; i < l.parts.length; i++) l.parts[i]();
                    delete r[l.id];
                  }
                }
              }
            );
          }
          function f(e) {
            for (var t = 0; t < e.length; t++) {
              var s = e[t],
                n = r[s.id];
              if (n) {
                n.refs++;
                for (var o = 0; o < n.parts.length; o++) n.parts[o](s.parts[o]);
                for (; o < s.parts.length; o++) n.parts.push(g(s.parts[o]));
                n.parts.length > s.parts.length &&
                  (n.parts.length = s.parts.length);
              } else {
                var d = [];
                for (o = 0; o < s.parts.length; o++) d.push(g(s.parts[o]));
                r[s.id] = { id: s.id, refs: 1, parts: d };
              }
            }
          }
          function v() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), d.appendChild(e), e;
          }
          function g(e) {
            var t,
              s,
              n = document.querySelector('style[' + p + '~="' + e.id + '"]');
            if (n) {
              if (i) return c;
              n.parentNode.removeChild(n);
            }
            if (m) {
              var o = l++;
              (n = u || (u = v())),
                (t = _.bind(null, n, o, !1)),
                (s = _.bind(null, n, o, !0));
            } else
              (n = v()),
                (t = x.bind(null, n)),
                (s = function () {
                  n.parentNode.removeChild(n);
                });
            return (
              t(e),
              function (n) {
                if (n) {
                  if (
                    n.css === e.css &&
                    n.media === e.media &&
                    n.sourceMap === e.sourceMap
                  )
                    return;
                  t((e = n));
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
          function _(e, t, s, n) {
            var o = s ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, o);
            else {
              var r = document.createTextNode(o),
                d = e.childNodes;
              d[t] && e.removeChild(d[t]),
                d.length ? e.insertBefore(r, d[t]) : e.appendChild(r);
            }
          }
          function x(e, t) {
            var s = t.css,
              n = t.media,
              o = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              a.ssrId && e.setAttribute(p, t.id),
              o &&
                ((s += '\n/*# sourceURL=' + o.sources[0] + ' */'),
                (s +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
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
          function n(e, t) {
            for (var s = [], n = {}, o = 0; o < t.length; o++) {
              var r = t[o],
                d = r[0],
                u = {
                  id: e + ':' + o,
                  css: r[1],
                  media: r[2],
                  sourceMap: r[3],
                };
              n[d]
                ? n[d].parts.push(u)
                : s.push((n[d] = { id: d, parts: [u] }));
            }
            return s;
          }
          s.r(t),
            s.d(t, {
              default: function () {
                return n;
              },
            });
        },
        '@qiun/ucharts': function (e) {
          'use strict';
          e.exports = require('@qiun/ucharts');
        },
        vue: function (e) {
          'use strict';
          e.exports = require('vue');
        },
        'vue3-aipage-widget/dist/index.umd': function (e) {
          'use strict';
          e.exports = require('vue3-aipage-widget/dist/index.umd');
        },
      },
      t = {};
    function s(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var r = (t[n] = { id: n, exports: {} });
      return e[n](r, r.exports, s), r.exports;
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
        for (var n in t)
          s.o(t, n) &&
            !s.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
    var n = {};
    return (
      (function () {
        'use strict';
        s.r(n);
        var e = s('vue3-aipage-widget/dist/index.umd'),
          t = s('./src/h5components/uni-column-chart/uni-column-chart.vue');
        (0, e.registerRenderer)(t.default, {
          type: 'uni-column-chart',
          framework: 'vue3',
        });
      })(),
      n
    );
  })();
});

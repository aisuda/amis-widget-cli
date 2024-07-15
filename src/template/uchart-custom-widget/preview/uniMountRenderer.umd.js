/*! For license information please see uniMountRenderer.umd.js.LICENSE.txt */
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
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=script&lang=js':
          function (e, t, s) {
            'use strict';
            s.r(t);
            var n = s('@qiun/ucharts'),
              o = s.n(n),
              u = {};
            t.default = {
              props: ['componentProperties', 'id'],
              data: function () {
                return {
                  defaultChartData: {
                    series: [
                      {
                        data: [
                          { name: '一班', value: 82 },
                          { name: '二班', value: 63 },
                          { name: '三班', value: 86 },
                          { name: '四班', value: 65 },
                          { name: '五班', value: 79 },
                        ],
                      },
                    ],
                  },
                };
              },
              computed: {
                chartId: function () {
                  return this.id || 'mount-uChart';
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
                this.drawCharts(this.chartId, { series: this.series });
              },
              updated: function () {
                this.drawCharts(this.chartId, { series: this.series });
              },
              methods: {
                drawCharts: function (e, t) {
                  var s = document.getElementById(e) || this.$refs.uchart;
                  (s.width = s.offsetWidth || '370'),
                    (s.height = s.offsetHeight || '280');
                  var n = s.getContext('2d');
                  u[e] = new (o())({
                    type: 'mount',
                    context: n,
                    width: s.width,
                    height: s.height,
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
                    extra: { mount: { type: 'mount', widthRatio: 1.5 } },
                  });
                },
                tap: function (e) {
                  u[e.target.id].touchLegend(e), u[e.target.id].showToolTip(e);
                },
              },
            };
          },
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=template&id=5bbe27f8&scoped=true':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return r;
                },
              });
            var n = s('vue'),
              o = { class: 'u-charts-container' },
              u = ['canvas-id', 'id'];
            function r(e, t, s, r, d, i) {
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)('div', o, [
                  i.chartId
                    ? ((0, n.openBlock)(),
                      (0, n.createElementBlock)(
                        'canvas',
                        {
                          key: 0,
                          'canvas-id': i.chartId,
                          id: i.chartId,
                          class: 'u-charts',
                          onTouchend:
                            t[0] ||
                            (t[0] = function () {
                              return i.tap && i.tap.apply(i, arguments);
                            }),
                          ref: 'uchart',
                        },
                        null,
                        40,
                        u,
                      ))
                    : (0, n.createCommentVNode)('v-if', !0),
                ])
              );
            }
          },
        './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=style&index=0&id=5bbe27f8&scoped=true&lang=scss':
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
        './src/h5components/uni-mount-chart/uni-mount-chart.vue': function (
          e,
          t,
          s,
        ) {
          'use strict';
          s.r(t);
          var n = s(
              './src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=template&id=5bbe27f8&scoped=true',
            ),
            o = s(
              './src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=script&lang=js',
            );
          s(
            './src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=style&index=0&id=5bbe27f8&scoped=true&lang=scss',
          );
          const u = (0,
          s('./node_modules/vue-loader/dist/exportHelper.js').default)(
            o.default,
            [
              ['render', n.render],
              ['__scopeId', 'data-v-5bbe27f8'],
              [
                '__file',
                'src/h5components/uni-mount-chart/uni-mount-chart.vue',
              ],
            ],
          );
          t.default = u;
        },
        './src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=script&lang=js':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                default: function () {
                  return n.default;
                },
              });
            var n = s(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=script&lang=js',
            );
          },
        './src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=template&id=5bbe27f8&scoped=true':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return n.render;
                },
              });
            var n = s(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=template&id=5bbe27f8&scoped=true',
            );
          },
        './src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=style&index=0&id=5bbe27f8&scoped=true&lang=scss':
          function (e, t, s) {
            'use strict';
            s.r(t);
            var n = s(
                './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=style&index=0&id=5bbe27f8&scoped=true&lang=scss',
              ),
              o = {};
            for (var u in n)
              'default' !== u &&
                (o[u] = function (e) {
                  return n[e];
                }.bind(0, u));
            s.d(t, o);
          },
        './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=style&index=0&id=5bbe27f8&scoped=true&lang=scss':
          function (e, t, s) {
            var n = s(
              './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-mount-chart/uni-mount-chart.vue?vue&type=style&index=0&id=5bbe27f8&scoped=true&lang=scss',
            );
            n.__esModule && (n = n.default),
              'string' == typeof n && (n = [[e.id, n, '']]),
              n.locals && (e.exports = n.locals),
              (0,
              s('./node_modules/vue-style-loader/lib/addStylesClient.js')
                .default)('1c56400b', n, !1, { sourceMap: !1 });
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
                return f;
              },
            });
          var n = s('./node_modules/vue-style-loader/lib/listToStyles.js'),
            o = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !o)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var u = {},
            r =
              o && (document.head || document.getElementsByTagName('head')[0]),
            d = null,
            i = 0,
            a = !1,
            l = function () {},
            c = null,
            p = 'data-vue-ssr-id',
            m =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function f(e, t, s, o) {
            (a = s), (c = o || {});
            var r = (0, n.default)(e, t);
            return (
              h(r),
              function (t) {
                for (var s = [], o = 0; o < r.length; o++) {
                  var d = r[o];
                  (i = u[d.id]).refs--, s.push(i);
                }
                for (
                  t ? h((r = (0, n.default)(e, t))) : (r = []), o = 0;
                  o < s.length;
                  o++
                ) {
                  var i;
                  if (0 === (i = s[o]).refs) {
                    for (var a = 0; a < i.parts.length; a++) i.parts[a]();
                    delete u[i.id];
                  }
                }
              }
            );
          }
          function h(e) {
            for (var t = 0; t < e.length; t++) {
              var s = e[t],
                n = u[s.id];
              if (n) {
                n.refs++;
                for (var o = 0; o < n.parts.length; o++) n.parts[o](s.parts[o]);
                for (; o < s.parts.length; o++) n.parts.push(j(s.parts[o]));
                n.parts.length > s.parts.length &&
                  (n.parts.length = s.parts.length);
              } else {
                var r = [];
                for (o = 0; o < s.parts.length; o++) r.push(j(s.parts[o]));
                u[s.id] = { id: s.id, refs: 1, parts: r };
              }
            }
          }
          function v() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), r.appendChild(e), e;
          }
          function j(e) {
            var t,
              s,
              n = document.querySelector('style[' + p + '~="' + e.id + '"]');
            if (n) {
              if (a) return l;
              n.parentNode.removeChild(n);
            }
            if (m) {
              var o = i++;
              (n = d || (d = v())),
                (t = b.bind(null, n, o, !1)),
                (s = b.bind(null, n, o, !0));
            } else
              (n = v()),
                (t = _.bind(null, n)),
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
          var y,
            g =
              ((y = []),
              function (e, t) {
                return (y[e] = t), y.filter(Boolean).join('\n');
              });
          function b(e, t, s, n) {
            var o = s ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = g(t, o);
            else {
              var u = document.createTextNode(o),
                r = e.childNodes;
              r[t] && e.removeChild(r[t]),
                r.length ? e.insertBefore(u, r[t]) : e.appendChild(u);
            }
          }
          function _(e, t) {
            var s = t.css,
              n = t.media,
              o = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              c.ssrId && e.setAttribute(p, t.id),
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
              var u = t[o],
                r = u[0],
                d = {
                  id: e + ':' + o,
                  css: u[1],
                  media: u[2],
                  sourceMap: u[3],
                };
              n[r]
                ? n[r].parts.push(d)
                : s.push((n[r] = { id: r, parts: [d] }));
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
      var u = (t[n] = { id: n, exports: {} });
      return e[n](u, u.exports, s), u.exports;
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
          t = s('./src/h5components/uni-mount-chart/uni-mount-chart.vue');
        (0, e.registerRenderer)(t.default, {
          type: 'uni-mount-chart',
          framework: 'vue3',
        });
      })(),
      n
    );
  })();
});

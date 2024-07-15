/*! For license information please see uniPieRenderer.umd.js.LICENSE.txt */
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
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=script&lang=js':
          function (e, t, s) {
            'use strict';
            s.r(t);
            var n = s('@qiun/ucharts'),
              r = s.n(n),
              o = {};
            t.default = {
              props: ['componentProperties', 'id'],
              data: function () {
                return {
                  defaultChartData: {
                    series: [
                      {
                        data: [
                          { name: '一班', value: 50 },
                          { name: '二班', value: 30 },
                          { name: '三班', value: 20 },
                          { name: '四班', value: 18 },
                          { name: '五班', value: 8 },
                        ],
                      },
                    ],
                  },
                };
              },
              computed: {
                chartId: function () {
                  return this.id || 'pie-uChart';
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
                  o[e] = new (r())({
                    type: 'pie',
                    context: n,
                    width: s.width,
                    height: s.height,
                    series: t.series,
                    animation: !0,
                    background: '#ffffff',
                    padding: [5, 5, 5, 5],
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
                      pie: {
                        activeOpacity: 0.5,
                        activeRadius: 10,
                        offsetAngle: 0,
                        labelWidth: 15,
                        border: !1,
                        borderWidth: 3,
                        borderColor: '#FFFFFF',
                      },
                    },
                  });
                },
                tap: function (e) {
                  o[e.target.id].touchLegend(e), o[e.target.id].showToolTip(e);
                },
              },
            };
          },
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=template&id=e4ee6cc4&scoped=true':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return d;
                },
              });
            var n = s('vue'),
              r = { class: 'u-charts-container' },
              o = ['canvas-id', 'id'];
            function d(e, t, s, d, u, i) {
              return (
                (0, n.openBlock)(),
                (0, n.createElementBlock)('div', r, [
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
                        o,
                      ))
                    : (0, n.createCommentVNode)('v-if', !0),
                ])
              );
            }
          },
        './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=style&index=0&id=e4ee6cc4&scoped=true&lang=scss':
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
        './src/h5components/uni-pie-chart/uni-pie-chart.vue': function (
          e,
          t,
          s,
        ) {
          'use strict';
          s.r(t);
          var n = s(
              './src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=template&id=e4ee6cc4&scoped=true',
            ),
            r = s(
              './src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=script&lang=js',
            );
          s(
            './src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=style&index=0&id=e4ee6cc4&scoped=true&lang=scss',
          );
          const o = (0,
          s('./node_modules/vue-loader/dist/exportHelper.js').default)(
            r.default,
            [
              ['render', n.render],
              ['__scopeId', 'data-v-e4ee6cc4'],
              ['__file', 'src/h5components/uni-pie-chart/uni-pie-chart.vue'],
            ],
          );
          t.default = o;
        },
        './src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=script&lang=js':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                default: function () {
                  return n.default;
                },
              });
            var n = s(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=script&lang=js',
            );
          },
        './src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=template&id=e4ee6cc4&scoped=true':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return n.render;
                },
              });
            var n = s(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=template&id=e4ee6cc4&scoped=true',
            );
          },
        './src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=style&index=0&id=e4ee6cc4&scoped=true&lang=scss':
          function (e, t, s) {
            'use strict';
            s.r(t);
            var n = s(
                './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=style&index=0&id=e4ee6cc4&scoped=true&lang=scss',
              ),
              r = {};
            for (var o in n)
              'default' !== o &&
                (r[o] = function (e) {
                  return n[e];
                }.bind(0, o));
            s.d(t, r);
          },
        './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=style&index=0&id=e4ee6cc4&scoped=true&lang=scss':
          function (e, t, s) {
            var n = s(
              './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-pie-chart/uni-pie-chart.vue?vue&type=style&index=0&id=e4ee6cc4&scoped=true&lang=scss',
            );
            n.__esModule && (n = n.default),
              'string' == typeof n && (n = [[e.id, n, '']]),
              n.locals && (e.exports = n.locals),
              (0,
              s('./node_modules/vue-style-loader/lib/addStylesClient.js')
                .default)('705e60de', n, !1, { sourceMap: !1 });
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
          var n = s('./node_modules/vue-style-loader/lib/listToStyles.js'),
            r = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !r)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var o = {},
            d =
              r && (document.head || document.getElementsByTagName('head')[0]),
            u = null,
            i = 0,
            a = !1,
            l = function () {},
            c = null,
            p = 'data-vue-ssr-id',
            f =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function m(e, t, s, r) {
            (a = s), (c = r || {});
            var d = (0, n.default)(e, t);
            return (
              h(d),
              function (t) {
                for (var s = [], r = 0; r < d.length; r++) {
                  var u = d[r];
                  (i = o[u.id]).refs--, s.push(i);
                }
                for (
                  t ? h((d = (0, n.default)(e, t))) : (d = []), r = 0;
                  r < s.length;
                  r++
                ) {
                  var i;
                  if (0 === (i = s[r]).refs) {
                    for (var a = 0; a < i.parts.length; a++) i.parts[a]();
                    delete o[i.id];
                  }
                }
              }
            );
          }
          function h(e) {
            for (var t = 0; t < e.length; t++) {
              var s = e[t],
                n = o[s.id];
              if (n) {
                n.refs++;
                for (var r = 0; r < n.parts.length; r++) n.parts[r](s.parts[r]);
                for (; r < s.parts.length; r++) n.parts.push(j(s.parts[r]));
                n.parts.length > s.parts.length &&
                  (n.parts.length = s.parts.length);
              } else {
                var d = [];
                for (r = 0; r < s.parts.length; r++) d.push(j(s.parts[r]));
                o[s.id] = { id: s.id, refs: 1, parts: d };
              }
            }
          }
          function v() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), d.appendChild(e), e;
          }
          function j(e) {
            var t,
              s,
              n = document.querySelector('style[' + p + '~="' + e.id + '"]');
            if (n) {
              if (a) return l;
              n.parentNode.removeChild(n);
            }
            if (f) {
              var r = i++;
              (n = u || (u = v())),
                (t = _.bind(null, n, r, !1)),
                (s = _.bind(null, n, r, !0));
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
          var y,
            g =
              ((y = []),
              function (e, t) {
                return (y[e] = t), y.filter(Boolean).join('\n');
              });
          function _(e, t, s, n) {
            var r = s ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = g(t, r);
            else {
              var o = document.createTextNode(r),
                d = e.childNodes;
              d[t] && e.removeChild(d[t]),
                d.length ? e.insertBefore(o, d[t]) : e.appendChild(o);
            }
          }
          function x(e, t) {
            var s = t.css,
              n = t.media,
              r = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              c.ssrId && e.setAttribute(p, t.id),
              r &&
                ((s += '\n/*# sourceURL=' + r.sources[0] + ' */'),
                (s +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
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
            for (var s = [], n = {}, r = 0; r < t.length; r++) {
              var o = t[r],
                d = o[0],
                u = {
                  id: e + ':' + r,
                  css: o[1],
                  media: o[2],
                  sourceMap: o[3],
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
      var r = t[n];
      if (void 0 !== r) return r.exports;
      var o = (t[n] = { id: n, exports: {} });
      return e[n](o, o.exports, s), o.exports;
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
          t = s('./src/h5components/uni-pie-chart/uni-pie-chart.vue');
        (0, e.registerRenderer)(t.default, {
          type: 'uni-pie-chart',
          framework: 'vue3',
        });
      })(),
      n
    );
  })();
});

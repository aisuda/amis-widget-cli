/*! For license information please see uniAreaRenderer.umd.js.LICENSE.txt */
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
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=script&lang=js':
          function (e, t, s) {
            'use strict';
            s.r(t);
            var r = s('@qiun/ucharts'),
              n = s.n(r),
              o = {};
            t.default = {
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
                      { name: '成交量A', data: [35, 8, 25, 37, 4, 20] },
                      { name: '成交量B', data: [70, 40, 65, 100, 44, 68] },
                      { name: '成交量C', data: [100, 80, 95, 150, 112, 132] },
                    ],
                  },
                };
              },
              computed: {
                chartId: function () {
                  return this.id || 'area-uChart';
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
                console.log('mounted-drawCharts:', this.chartId),
                  this.drawCharts(this.chartId, {
                    categories: this.categories,
                    series: this.series,
                  });
              },
              updated: function () {
                console.log('updated-drawCharts:', this.chartId),
                  this.drawCharts(this.chartId, {
                    categories: this.categories,
                    series: this.series,
                  });
              },
              methods: {
                drawCharts: function (e, t) {
                  console.log('drawCharts:', e, t, this);
                  var s =
                    document.getElementById(e) ||
                    this.$refs.uchart ||
                    this.$refs.uchartBox;
                  if (
                    (console.log(
                      'document.getElementById(id):',
                      document.getElementById(e),
                    ),
                    console.log('this.$refs:', this.$refs),
                    console.log('this.$refs.uchart:', this.$refs.uchart),
                    s)
                  ) {
                    (s.width = s.offsetWidth || '370'),
                      (s.height = s.offsetHeight || '280');
                    var r = s.getContext('2d');
                    o[e] = new (n())({
                      type: 'area',
                      context: r,
                      width: s.width,
                      height: s.height,
                      categories: this.categories,
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
                        area: {
                          type: 'straight',
                          opacity: 0.2,
                          addLine: !0,
                          width: 2,
                          gradient: !1,
                        },
                      },
                    });
                  }
                },
                tap: function (e) {
                  o[e.target.id].touchLegend(e), o[e.target.id].showToolTip(e);
                },
              },
            };
          },
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=template&id=50c90e3c':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return a;
                },
              });
            var r = s('vue'),
              n = { class: 'u-charts-container', ref: 'uchartBox' },
              o = ['canvas-id', 'id'];
            function a(e, t, s, a, d, u) {
              return (
                (0, r.openBlock)(),
                (0, r.createElementBlock)(
                  'div',
                  n,
                  [
                    (0, r.createElementVNode)(
                      'canvas',
                      {
                        'canvas-id': u.chartId,
                        id: u.chartId,
                        class: 'u-charts',
                        onTouchend:
                          t[0] ||
                          (t[0] = function () {
                            return u.tap && u.tap.apply(u, arguments);
                          }),
                        ref: 'uchart',
                      },
                      null,
                      40,
                      o,
                    ),
                  ],
                  512,
                )
              );
            }
          },
        './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=style&index=0&id=50c90e3c&lang=scss':
          function () {},
        './node_modules/vue-loader/dist/exportHelper.js': function (e, t) {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = (e, t) => {
              const s = e.__vccOpts || e;
              for (const [e, r] of t) s[e] = r;
              return s;
            });
        },
        './src/h5components/uni-area-chart/uni-area-chart.vue': function (
          e,
          t,
          s,
        ) {
          'use strict';
          s.r(t);
          var r = s(
              './src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=template&id=50c90e3c',
            ),
            n = s(
              './src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=script&lang=js',
            );
          s(
            './src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=style&index=0&id=50c90e3c&lang=scss',
          );
          const o = (0,
          s('./node_modules/vue-loader/dist/exportHelper.js').default)(
            n.default,
            [
              ['render', r.render],
              ['__file', 'src/h5components/uni-area-chart/uni-area-chart.vue'],
            ],
          );
          t.default = o;
        },
        './src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=script&lang=js':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                default: function () {
                  return r.default;
                },
              });
            var r = s(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=script&lang=js',
            );
          },
        './src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=template&id=50c90e3c':
          function (e, t, s) {
            'use strict';
            s.r(t),
              s.d(t, {
                render: function () {
                  return r.render;
                },
              });
            var r = s(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=template&id=50c90e3c',
            );
          },
        './src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=style&index=0&id=50c90e3c&lang=scss':
          function (e, t, s) {
            'use strict';
            s.r(t);
            var r = s(
                './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=style&index=0&id=50c90e3c&lang=scss',
              ),
              n = {};
            for (var o in r)
              'default' !== o &&
                (n[o] = function (e) {
                  return r[e];
                }.bind(0, o));
            s.d(t, n);
          },
        './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=style&index=0&id=50c90e3c&lang=scss':
          function (e, t, s) {
            var r = s(
              './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-area-chart/uni-area-chart.vue?vue&type=style&index=0&id=50c90e3c&lang=scss',
            );
            r.__esModule && (r = r.default),
              'string' == typeof r && (r = [[e.id, r, '']]),
              r.locals && (e.exports = r.locals),
              (0,
              s('./node_modules/vue-style-loader/lib/addStylesClient.js')
                .default)('212a76b6', r, !1, { sourceMap: !1 });
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
          var r = s('./node_modules/vue-style-loader/lib/listToStyles.js'),
            n = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !n)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var o = {},
            a =
              n && (document.head || document.getElementsByTagName('head')[0]),
            d = null,
            u = 0,
            i = !1,
            l = function () {},
            c = null,
            p = 'data-vue-ssr-id',
            h =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function f(e, t, s, n) {
            (i = s), (c = n || {});
            var a = (0, r.default)(e, t);
            return (
              m(a),
              function (t) {
                for (var s = [], n = 0; n < a.length; n++) {
                  var d = a[n];
                  (u = o[d.id]).refs--, s.push(u);
                }
                for (
                  t ? m((a = (0, r.default)(e, t))) : (a = []), n = 0;
                  n < s.length;
                  n++
                ) {
                  var u;
                  if (0 === (u = s[n]).refs) {
                    for (var i = 0; i < u.parts.length; i++) u.parts[i]();
                    delete o[u.id];
                  }
                }
              }
            );
          }
          function m(e) {
            for (var t = 0; t < e.length; t++) {
              var s = e[t],
                r = o[s.id];
              if (r) {
                r.refs++;
                for (var n = 0; n < r.parts.length; n++) r.parts[n](s.parts[n]);
                for (; n < s.parts.length; n++) r.parts.push(g(s.parts[n]));
                r.parts.length > s.parts.length &&
                  (r.parts.length = s.parts.length);
              } else {
                var a = [];
                for (n = 0; n < s.parts.length; n++) a.push(g(s.parts[n]));
                o[s.id] = { id: s.id, refs: 1, parts: a };
              }
            }
          }
          function v() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), a.appendChild(e), e;
          }
          function g(e) {
            var t,
              s,
              r = document.querySelector('style[' + p + '~="' + e.id + '"]');
            if (r) {
              if (i) return l;
              r.parentNode.removeChild(r);
            }
            if (h) {
              var n = u++;
              (r = d || (d = v())),
                (t = x.bind(null, r, n, !1)),
                (s = x.bind(null, r, n, !0));
            } else
              (r = v()),
                (t = _.bind(null, r)),
                (s = function () {
                  r.parentNode.removeChild(r);
                });
            return (
              t(e),
              function (r) {
                if (r) {
                  if (
                    r.css === e.css &&
                    r.media === e.media &&
                    r.sourceMap === e.sourceMap
                  )
                    return;
                  t((e = r));
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
          function x(e, t, s, r) {
            var n = s ? '' : r.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, n);
            else {
              var o = document.createTextNode(n),
                a = e.childNodes;
              a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
            }
          }
          function _(e, t) {
            var s = t.css,
              r = t.media,
              n = t.sourceMap;
            if (
              (r && e.setAttribute('media', r),
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
          function r(e, t) {
            for (var s = [], r = {}, n = 0; n < t.length; n++) {
              var o = t[n],
                a = o[0],
                d = {
                  id: e + ':' + n,
                  css: o[1],
                  media: o[2],
                  sourceMap: o[3],
                };
              r[a]
                ? r[a].parts.push(d)
                : s.push((r[a] = { id: a, parts: [d] }));
            }
            return s;
          }
          s.r(t),
            s.d(t, {
              default: function () {
                return r;
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
    function s(r) {
      var n = t[r];
      if (void 0 !== n) return n.exports;
      var o = (t[r] = { id: r, exports: {} });
      return e[r](o, o.exports, s), o.exports;
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
        for (var r in t)
          s.o(t, r) &&
            !s.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
    var r = {};
    return (
      (function () {
        'use strict';
        s.r(r);
        var e = s('vue3-aipage-widget/dist/index.umd'),
          t = s('./src/h5components/uni-area-chart/uni-area-chart.vue');
        (0, e.registerRenderer)(t.default, {
          type: 'uni-area-chart',
          framework: 'vue3',
        });
      })(),
      r
    );
  })();
});

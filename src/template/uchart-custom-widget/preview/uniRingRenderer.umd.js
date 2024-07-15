/*! For license information please see uniRingRenderer.umd.js.LICENSE.txt */
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
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=script&lang=js':
          function (e, t, n) {
            'use strict';
            n.r(t);
            var s = n('@qiun/ucharts'),
              r = n.n(s),
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
                  return this.id || 'ring-uChart';
                },
                title: function () {
                  return (
                    (this.componentProperties &&
                      this.componentProperties.data &&
                      this.componentProperties.data.title) ||
                    '收益率'
                  );
                },
                subTitle: function () {
                  return (
                    (this.componentProperties &&
                      this.componentProperties.data &&
                      this.componentProperties.data.subTitle) ||
                    '70%'
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
                this.drawCharts(this.chartId, { series: this.series });
              },
              updated: function () {
                this.drawCharts(this.chartId, { series: this.series });
              },
              methods: {
                drawCharts: function (e, t) {
                  var n = document.getElementById(e) || this.$refs.uchart;
                  (n.width = n.offsetWidth || '370'),
                    (n.height = n.offsetHeight || '280');
                  var s = n.getContext('2d');
                  o[e] = new (r())({
                    type: 'ring',
                    context: s,
                    width: n.width,
                    height: n.height,
                    series: t.series,
                    animation: !0,
                    background: '#ffffff',
                    rotate: !1,
                    rotateLock: !1,
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
                    padding: [5, 5, 5, 5],
                    dataLabel: !0,
                    legend: { show: !0, position: 'right', lineHeight: 25 },
                    title: { name: this.title, fontSize: 13, color: '#666666' },
                    subtitle: {
                      name: this.subTitle,
                      fontSize: 20,
                      color: '#7cb5ec',
                    },
                    extra: {
                      ring: {
                        ringWidth: 60,
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
        './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=template&id=0669abdc&scoped=true':
          function (e, t, n) {
            'use strict';
            n.r(t),
              n.d(t, {
                render: function () {
                  return d;
                },
              });
            var s = n('vue'),
              r = { class: 'u-charts-container' },
              o = ['canvas-id', 'id'];
            function d(e, t, n, d, i, u) {
              return (
                (0, s.openBlock)(),
                (0, s.createElementBlock)('div', r, [
                  u.chartId
                    ? ((0, s.openBlock)(),
                      (0, s.createElementBlock)(
                        'canvas',
                        {
                          key: 0,
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
                      ))
                    : (0, s.createCommentVNode)('v-if', !0),
                ])
              );
            }
          },
        './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=style&index=0&id=0669abdc&scoped=true&lang=scss':
          function () {},
        './node_modules/vue-loader/dist/exportHelper.js': function (e, t) {
          'use strict';
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = (e, t) => {
              const n = e.__vccOpts || e;
              for (const [e, s] of t) n[e] = s;
              return n;
            });
        },
        './src/h5components/uni-ring-chart/uni-ring-chart.vue': function (
          e,
          t,
          n,
        ) {
          'use strict';
          n.r(t);
          var s = n(
              './src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=template&id=0669abdc&scoped=true',
            ),
            r = n(
              './src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=script&lang=js',
            );
          n(
            './src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=style&index=0&id=0669abdc&scoped=true&lang=scss',
          );
          const o = (0,
          n('./node_modules/vue-loader/dist/exportHelper.js').default)(
            r.default,
            [
              ['render', s.render],
              ['__scopeId', 'data-v-0669abdc'],
              ['__file', 'src/h5components/uni-ring-chart/uni-ring-chart.vue'],
            ],
          );
          t.default = o;
        },
        './src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=script&lang=js':
          function (e, t, n) {
            'use strict';
            n.r(t),
              n.d(t, {
                default: function () {
                  return s.default;
                },
              });
            var s = n(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=script&lang=js',
            );
          },
        './src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=template&id=0669abdc&scoped=true':
          function (e, t, n) {
            'use strict';
            n.r(t),
              n.d(t, {
                render: function () {
                  return s.render;
                },
              });
            var s = n(
              './node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=template&id=0669abdc&scoped=true',
            );
          },
        './src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=style&index=0&id=0669abdc&scoped=true&lang=scss':
          function (e, t, n) {
            'use strict';
            n.r(t);
            var s = n(
                './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=style&index=0&id=0669abdc&scoped=true&lang=scss',
              ),
              r = {};
            for (var o in s)
              'default' !== o &&
                (r[o] = function (e) {
                  return s[e];
                }.bind(0, o));
            n.d(t, r);
          },
        './node_modules/vue-style-loader/index.js??clonedRuleSet-11.use[0]!./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=style&index=0&id=0669abdc&scoped=true&lang=scss':
          function (e, t, n) {
            var s = n(
              './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/params-replace-loader/index.js??clonedRuleSet-7!./src/h5components/uni-ring-chart/uni-ring-chart.vue?vue&type=style&index=0&id=0669abdc&scoped=true&lang=scss',
            );
            s.__esModule && (s = s.default),
              'string' == typeof s && (s = [[e.id, s, '']]),
              s.locals && (e.exports = s.locals),
              (0,
              n('./node_modules/vue-style-loader/lib/addStylesClient.js')
                .default)('e5e01200', s, !1, { sourceMap: !1 });
          },
        './node_modules/vue-style-loader/lib/addStylesClient.js': function (
          e,
          t,
          n,
        ) {
          'use strict';
          n.r(t),
            n.d(t, {
              default: function () {
                return f;
              },
            });
          var s = n('./node_modules/vue-style-loader/lib/listToStyles.js'),
            r = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !r)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var o = {},
            d =
              r && (document.head || document.getElementsByTagName('head')[0]),
            i = null,
            u = 0,
            a = !1,
            l = function () {},
            c = null,
            p = 'data-vue-ssr-id',
            h =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function f(e, t, n, r) {
            (a = n), (c = r || {});
            var d = (0, s.default)(e, t);
            return (
              m(d),
              function (t) {
                for (var n = [], r = 0; r < d.length; r++) {
                  var i = d[r];
                  (u = o[i.id]).refs--, n.push(u);
                }
                for (
                  t ? m((d = (0, s.default)(e, t))) : (d = []), r = 0;
                  r < n.length;
                  r++
                ) {
                  var u;
                  if (0 === (u = n[r]).refs) {
                    for (var a = 0; a < u.parts.length; a++) u.parts[a]();
                    delete o[u.id];
                  }
                }
              }
            );
          }
          function m(e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t],
                s = o[n.id];
              if (s) {
                s.refs++;
                for (var r = 0; r < s.parts.length; r++) s.parts[r](n.parts[r]);
                for (; r < n.parts.length; r++) s.parts.push(g(n.parts[r]));
                s.parts.length > n.parts.length &&
                  (s.parts.length = n.parts.length);
              } else {
                var d = [];
                for (r = 0; r < n.parts.length; r++) d.push(g(n.parts[r]));
                o[n.id] = { id: n.id, refs: 1, parts: d };
              }
            }
          }
          function v() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), d.appendChild(e), e;
          }
          function g(e) {
            var t,
              n,
              s = document.querySelector('style[' + p + '~="' + e.id + '"]');
            if (s) {
              if (a) return l;
              s.parentNode.removeChild(s);
            }
            if (h) {
              var r = u++;
              (s = i || (i = v())),
                (t = _.bind(null, s, r, !1)),
                (n = _.bind(null, s, r, !0));
            } else
              (s = v()),
                (t = b.bind(null, s)),
                (n = function () {
                  s.parentNode.removeChild(s);
                });
            return (
              t(e),
              function (s) {
                if (s) {
                  if (
                    s.css === e.css &&
                    s.media === e.media &&
                    s.sourceMap === e.sourceMap
                  )
                    return;
                  t((e = s));
                } else n();
              }
            );
          }
          var j,
            y =
              ((j = []),
              function (e, t) {
                return (j[e] = t), j.filter(Boolean).join('\n');
              });
          function _(e, t, n, s) {
            var r = n ? '' : s.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, r);
            else {
              var o = document.createTextNode(r),
                d = e.childNodes;
              d[t] && e.removeChild(d[t]),
                d.length ? e.insertBefore(o, d[t]) : e.appendChild(o);
            }
          }
          function b(e, t) {
            var n = t.css,
              s = t.media,
              r = t.sourceMap;
            if (
              (s && e.setAttribute('media', s),
              c.ssrId && e.setAttribute(p, t.id),
              r &&
                ((n += '\n/*# sourceURL=' + r.sources[0] + ' */'),
                (n +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                  ' */')),
              e.styleSheet)
            )
              e.styleSheet.cssText = n;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(n));
            }
          }
        },
        './node_modules/vue-style-loader/lib/listToStyles.js': function (
          e,
          t,
          n,
        ) {
          'use strict';
          function s(e, t) {
            for (var n = [], s = {}, r = 0; r < t.length; r++) {
              var o = t[r],
                d = o[0],
                i = {
                  id: e + ':' + r,
                  css: o[1],
                  media: o[2],
                  sourceMap: o[3],
                };
              s[d]
                ? s[d].parts.push(i)
                : n.push((s[d] = { id: d, parts: [i] }));
            }
            return n;
          }
          n.r(t),
            n.d(t, {
              default: function () {
                return s;
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
    function n(s) {
      var r = t[s];
      if (void 0 !== r) return r.exports;
      var o = (t[s] = { id: s, exports: {} });
      return e[s](o, o.exports, n), o.exports;
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
        for (var s in t)
          n.o(t, s) &&
            !n.o(e, s) &&
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
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
    var s = {};
    return (
      (function () {
        'use strict';
        n.r(s);
        var e = n('vue3-aipage-widget/dist/index.umd'),
          t = n('./src/h5components/uni-ring-chart/uni-ring-chart.vue');
        (0, e.registerRenderer)(t.default, {
          type: 'uni-ring-chart',
          framework: 'vue3',
        });
      })(),
      s
    );
  })();
});

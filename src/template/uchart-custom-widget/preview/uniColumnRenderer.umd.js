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
        45: function () {},
        744: function (e, t) {
          'use strict';
          t.Z = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [e, n] of t) r[e] = n;
            return r;
          };
        },
        675: function (e, t, r) {
          var n = r(45);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(346).Z)('e45276e4', n, !1, { sourceMap: !1 });
        },
        346: function (e, t, r) {
          'use strict';
          function n(e, t) {
            for (var r = [], n = {}, o = 0; o < t.length; o++) {
              var i = t[o],
                a = i[0],
                s = {
                  id: e + ':' + o,
                  css: i[1],
                  media: i[2],
                  sourceMap: i[3],
                };
              n[a]
                ? n[a].parts.push(s)
                : r.push((n[a] = { id: a, parts: [s] }));
            }
            return r;
          }
          r.d(t, {
            Z: function () {
              return h;
            },
          });
          var o = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !o)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var i = {},
            a =
              o && (document.head || document.getElementsByTagName('head')[0]),
            s = null,
            c = 0,
            d = !1,
            u = function () {},
            f = null,
            p = 'data-vue-ssr-id',
            l =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function h(e, t, r, o) {
            (d = r), (f = o || {});
            var a = n(e, t);
            return (
              g(a),
              function (t) {
                for (var r = [], o = 0; o < a.length; o++) {
                  var s = a[o];
                  (c = i[s.id]).refs--, r.push(c);
                }
                for (
                  t ? g((a = n(e, t))) : (a = []), o = 0;
                  o < r.length;
                  o++
                ) {
                  var c;
                  if (0 === (c = r[o]).refs) {
                    for (var d = 0; d < c.parts.length; d++) c.parts[d]();
                    delete i[c.id];
                  }
                }
              }
            );
          }
          function g(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                n = i[r.id];
              if (n) {
                n.refs++;
                for (var o = 0; o < n.parts.length; o++) n.parts[o](r.parts[o]);
                for (; o < r.parts.length; o++) n.parts.push(m(r.parts[o]));
                n.parts.length > r.parts.length &&
                  (n.parts.length = r.parts.length);
              } else {
                var a = [];
                for (o = 0; o < r.parts.length; o++) a.push(m(r.parts[o]));
                i[r.id] = { id: r.id, refs: 1, parts: a };
              }
            }
          }
          function v() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), a.appendChild(e), e;
          }
          function m(e) {
            var t,
              r,
              n = document.querySelector('style[' + p + '~="' + e.id + '"]');
            if (n) {
              if (d) return u;
              n.parentNode.removeChild(n);
            }
            if (l) {
              var o = c++;
              (n = s || (s = v())),
                (t = b.bind(null, n, o, !1)),
                (r = b.bind(null, n, o, !0));
            } else
              (n = v()),
                (t = x.bind(null, n)),
                (r = function () {
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
                } else r();
              }
            );
          }
          var y,
            C =
              ((y = []),
              function (e, t) {
                return (y[e] = t), y.filter(Boolean).join('\n');
              });
          function b(e, t, r, n) {
            var o = r ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = C(t, o);
            else {
              var i = document.createTextNode(o),
                a = e.childNodes;
              a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
            }
          }
          function x(e, t) {
            var r = t.css,
              n = t.media,
              o = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              f.ssrId && e.setAttribute(p, t.id),
              o &&
                ((r += '\n/*# sourceURL=' + o.sources[0] + ' */'),
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                  ' */')),
              e.styleSheet)
            )
              e.styleSheet.cssText = r;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(r));
            }
          }
        },
      },
      t = {};
    function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var i = (t[n] = { id: n, exports: {} });
      return e[n](i, i.exports, r), i.exports;
    }
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, { a: t }), t;
    }),
      (r.d = function (e, t) {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var n = {};
    return (
      (function () {
        'use strict';
        r.r(n);
        var e = require('vue3-aipage-widget/dist/index.umd'),
          t = require('vue'),
          o = { class: 'u-charts-container' },
          i = ['canvas-id', 'id'],
          a = require('@qiun/ucharts'),
          s = r.n(a),
          c = {},
          d = {
            props: ['componentProperties', 'id'],
            data: function () {
              return {
                defaultChartData: {
                  categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
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
                var r = document.getElementById(e) || this.$refs.uchart;
                (r.width = r.offsetWidth), (r.height = r.offsetHeight);
                var n = r.getContext('2d');
                c[e] = new (s())({
                  type: 'column',
                  context: n,
                  width: r.width,
                  height: r.height,
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
                c[e.target.id].touchLegend(e), c[e.target.id].showToolTip(e);
              },
            },
          };
        r(675);
        const u = (0, r(744).Z)(d, [
          [
            'render',
            function (e, r, n, a, s, c) {
              return (
                (0, t.openBlock)(),
                (0, t.createElementBlock)('div', o, [
                  c.chartId
                    ? ((0, t.openBlock)(),
                      (0, t.createElementBlock)(
                        'canvas',
                        {
                          key: 0,
                          'canvas-id': c.chartId,
                          id: c.chartId,
                          class: 'u-charts',
                          onTouchend:
                            r[0] ||
                            (r[0] = function () {
                              return c.tap && c.tap.apply(c, arguments);
                            }),
                          ref: 'uchart',
                        },
                        null,
                        40,
                        i,
                      ))
                    : (0, t.createCommentVNode)('v-if', !0),
                ])
              );
            },
          ],
          ['__scopeId', 'data-v-8d2ca0a6'],
        ]);
        var f = u;
        (0, e.registerRenderer)(f, {
          type: 'uni-column-chart',
          framework: 'vue3',
        });
      })(),
      n
    );
  })();
});

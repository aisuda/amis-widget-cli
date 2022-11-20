/*! For license information please see uniLineRenderer.umd.js.LICENSE.txt */
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
        908: function () {},
        744: function (e, t) {
          'use strict';
          t.Z = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [e, n] of t) r[e] = n;
            return r;
          };
        },
        118: function (e, t, r) {
          var n = r(908);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(346).Z)('7c8e37f4', n, !1, { sourceMap: !1 });
        },
        346: function (e, t, r) {
          'use strict';
          function n(e, t) {
            for (var r = [], n = {}, i = 0; i < t.length; i++) {
              var o = t[i],
                a = o[0],
                s = {
                  id: e + ':' + i,
                  css: o[1],
                  media: o[2],
                  sourceMap: o[3],
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
          var i = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !i)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var o = {},
            a =
              i && (document.head || document.getElementsByTagName('head')[0]),
            s = null,
            d = 0,
            c = !1,
            u = function () {},
            f = null,
            p = 'data-vue-ssr-id',
            l =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function h(e, t, r, i) {
            (c = r), (f = i || {});
            var a = n(e, t);
            return (
              g(a),
              function (t) {
                for (var r = [], i = 0; i < a.length; i++) {
                  var s = a[i];
                  (d = o[s.id]).refs--, r.push(d);
                }
                for (
                  t ? g((a = n(e, t))) : (a = []), i = 0;
                  i < r.length;
                  i++
                ) {
                  var d;
                  if (0 === (d = r[i]).refs) {
                    for (var c = 0; c < d.parts.length; c++) d.parts[c]();
                    delete o[d.id];
                  }
                }
              }
            );
          }
          function g(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                n = o[r.id];
              if (n) {
                n.refs++;
                for (var i = 0; i < n.parts.length; i++) n.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++) n.parts.push(m(r.parts[i]));
                n.parts.length > r.parts.length &&
                  (n.parts.length = r.parts.length);
              } else {
                var a = [];
                for (i = 0; i < r.parts.length; i++) a.push(m(r.parts[i]));
                o[r.id] = { id: r.id, refs: 1, parts: a };
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
              if (c) return u;
              n.parentNode.removeChild(n);
            }
            if (l) {
              var i = d++;
              (n = s || (s = v())),
                (t = C.bind(null, n, i, !1)),
                (r = C.bind(null, n, i, !0));
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
            b =
              ((y = []),
              function (e, t) {
                return (y[e] = t), y.filter(Boolean).join('\n');
              });
          function C(e, t, r, n) {
            var i = r ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, i);
            else {
              var o = document.createTextNode(i),
                a = e.childNodes;
              a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
            }
          }
          function x(e, t) {
            var r = t.css,
              n = t.media,
              i = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              f.ssrId && e.setAttribute(p, t.id),
              i &&
                ((r += '\n/*# sourceURL=' + i.sources[0] + ' */'),
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
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
      var i = t[n];
      if (void 0 !== i) return i.exports;
      var o = (t[n] = { id: n, exports: {} });
      return e[n](o, o.exports, r), o.exports;
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
          i = { class: 'u-charts-container' },
          o = ['canvas-id', 'id'],
          a = require('@qiun/ucharts'),
          s = r.n(a),
          d = {},
          c = {
            props: ['componentProperties', 'id'],
            data: function () {
              return {
                defaultChartData: {
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
                return this.id || 'line-uChart';
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
                d[e] = new (s())({
                  type: 'line',
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
                  extra: { line: { type: 'straight', width: 2 } },
                });
              },
              tap: function (e) {
                d[e.target.id].touchLegend(e), d[e.target.id].showToolTip(e);
              },
            },
          };
        r(118);
        const u = (0, r(744).Z)(c, [
          [
            'render',
            function (e, r, n, a, s, d) {
              return (
                (0, t.openBlock)(),
                (0, t.createElementBlock)('div', i, [
                  d.chartId
                    ? ((0, t.openBlock)(),
                      (0, t.createElementBlock)(
                        'canvas',
                        {
                          key: 0,
                          'canvas-id': d.chartId,
                          id: d.chartId,
                          class: 'u-charts',
                          onTouchend:
                            r[0] ||
                            (r[0] = function () {
                              return d.tap && d.tap.apply(d, arguments);
                            }),
                          ref: 'uchart',
                        },
                        null,
                        40,
                        o,
                      ))
                    : (0, t.createCommentVNode)('v-if', !0),
                ])
              );
            },
          ],
          ['__scopeId', 'data-v-05acbe3b'],
        ]);
        var f = u;
        (0, e.registerRenderer)(f, {
          type: 'uni-line-chart',
          framework: 'vue3',
        });
      })(),
      n
    );
  })();
});

/*! For license information please see uniAreaRenderer.umd.js.LICENSE.txt */
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
        571: function () {},
        744: function (e, t) {
          'use strict';
          t.Z = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [e, n] of t) r[e] = n;
            return r;
          };
        },
        331: function (e, t, r) {
          var n = r(571);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(346).Z)('cf97bc6a', n, !1, { sourceMap: !1 });
        },
        346: function (e, t, r) {
          'use strict';
          function n(e, t) {
            for (var r = [], n = {}, i = 0; i < t.length; i++) {
              var a = t[i],
                s = a[0],
                o = { id: e + ':' + i, css: a[1], media: a[2], sourceMap: a[3] };
              n[s] ? n[s].parts.push(o) : r.push((n[s] = { id: s, parts: [o] }));
            }
            return r;
          }
          r.d(t, {
            Z: function () {
              return p;
            }
          });
          var i = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !i)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
            );
          var a = {},
            s = i && (document.head || document.getElementsByTagName('head')[0]),
            o = null,
            c = 0,
            d = !1,
            u = function () {},
            f = null,
            h = 'data-vue-ssr-id',
            l =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function p(e, t, r, i) {
            (d = r), (f = i || {});
            var s = n(e, t);
            return (
              g(s),
              function (t) {
                for (var r = [], i = 0; i < s.length; i++) {
                  var o = s[i];
                  (c = a[o.id]).refs--, r.push(c);
                }
                for (t ? g((s = n(e, t))) : (s = []), i = 0; i < r.length; i++) {
                  var c;
                  if (0 === (c = r[i]).refs) {
                    for (var d = 0; d < c.parts.length; d++) c.parts[d]();
                    delete a[c.id];
                  }
                }
              }
            );
          }
          function g(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                n = a[r.id];
              if (n) {
                n.refs++;
                for (var i = 0; i < n.parts.length; i++) n.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++) n.parts.push(m(r.parts[i]));
                n.parts.length > r.parts.length && (n.parts.length = r.parts.length);
              } else {
                var s = [];
                for (i = 0; i < r.parts.length; i++) s.push(m(r.parts[i]));
                a[r.id] = { id: r.id, refs: 1, parts: s };
              }
            }
          }
          function v() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), s.appendChild(e), e;
          }
          function m(e) {
            var t,
              r,
              n = document.querySelector('style[' + h + '~="' + e.id + '"]');
            if (n) {
              if (d) return u;
              n.parentNode.removeChild(n);
            }
            if (l) {
              var i = c++;
              (n = o || (o = v())), (t = b.bind(null, n, i, !1)), (r = b.bind(null, n, i, !0));
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
                  if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
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
            var i = r ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = C(t, i);
            else {
              var a = document.createTextNode(i),
                s = e.childNodes;
              s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(a, s[t]) : e.appendChild(a);
            }
          }
          function x(e, t) {
            var r = t.css,
              n = t.media,
              i = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              f.ssrId && e.setAttribute(h, t.id),
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
        }
      },
      t = {};
    function r(n) {
      var i = t[n];
      if (void 0 !== i) return i.exports;
      var a = (t[n] = { id: n, exports: {} });
      return e[n](a, a.exports, r), a.exports;
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
          r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        var e = require('vue3-amis-widget'),
          t = require('vue'),
          i = { class: 'u-charts-container' },
          a = ['canvas-id', 'id'],
          s = require('@qiun/ucharts'),
          o = r.n(s),
          c = {},
          d = {
            data: function () {
              return {
                categories: [],
                series: [],
                defaultChartData: {
                  categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
                  series: [
                    { name: '成交量A', data: [35, 8, 25, 37, 4, 20] },
                    { name: '成交量B', data: [70, 40, 65, 100, 44, 68] },
                    { name: '成交量C', data: [100, 80, 95, 150, 112, 132] }
                  ]
                }
              };
            },
            computed: {
              chartId: function () {
                return this.id || 'area-uChart';
              },
              thisCategories: function () {
                return this.categories && this.categories.length > 0
                  ? this.categories
                  : this.defaultChartData.categories;
              },
              thisSeries: function () {
                return this.series && this.series.length > 0
                  ? this.series
                  : this.defaultChartData.series;
              }
            },
            mounted: function () {
              this.drawCharts(this.chartId, {
                categories: this.thisCategories,
                series: this.thisSeries
              });
            },
            updated: function () {
              console.log('this.thisSeries:', this.thisSeries),
                this.drawCharts(this.chartId, {
                  categories: this.thisCategories,
                  series: this.thisSeries
                });
            },
            methods: {
              drawCharts: function (e, t) {
                var r = document.getElementById(e) || this.$refs.uchart;
                (r.width = r.offsetWidth), (r.height = r.offsetHeight);
                var n = r.getContext('2d');
                c[e] = new (o())({
                  type: 'area',
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
                    '#ea7ccc'
                  ],
                  legend: {},
                  extra: {
                    area: { type: 'straight', opacity: 0.2, addLine: !0, width: 2, gradient: !1 }
                  }
                });
              },
              tap: function (e) {
                c[e.target.id].touchLegend(e), c[e.target.id].showToolTip(e);
              }
            }
          };
        r(331);
        const u = (0, r(744).Z)(d, [
          [
            'render',
            function (e, r, n, s, o, c) {
              return (
                (0, t.openBlock)(),
                (0, t.createElementBlock)('div', i, [
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
                          ref: 'uchart'
                        },
                        null,
                        40,
                        a
                      ))
                    : (0, t.createCommentVNode)('v-if', !0)
                ])
              );
            }
          ],
          ['__scopeId', 'data-v-51273cb3']
        ]);
        var f = u;
        (0, e.registerRendererByType)(f, { type: 'uni-area-chart', framework: 'vue3' });
      })(),
      n
    );
  })();
});

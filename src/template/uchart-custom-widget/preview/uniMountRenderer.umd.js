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
        909: function () {},
        744: function (e, t) {
          'use strict';
          t.Z = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [e, n] of t) r[e] = n;
            return r;
          };
        },
        821: function (e, t, r) {
          var n = r(909);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(346).Z)('5cc009fa', n, !1, { sourceMap: !1 });
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
            u = 0,
            d = !1,
            c = function () {},
            f = null,
            l = 'data-vue-ssr-id',
            p =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function h(e, t, r, o) {
            (d = r), (f = o || {});
            var a = n(e, t);
            return (
              v(a),
              function (t) {
                for (var r = [], o = 0; o < a.length; o++) {
                  var s = a[o];
                  (u = i[s.id]).refs--, r.push(u);
                }
                for (
                  t ? v((a = n(e, t))) : (a = []), o = 0;
                  o < r.length;
                  o++
                ) {
                  var u;
                  if (0 === (u = r[o]).refs) {
                    for (var d = 0; d < u.parts.length; d++) u.parts[d]();
                    delete i[u.id];
                  }
                }
              }
            );
          }
          function v(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                n = i[r.id];
              if (n) {
                n.refs++;
                for (var o = 0; o < n.parts.length; o++) n.parts[o](r.parts[o]);
                for (; o < r.parts.length; o++) n.parts.push(g(r.parts[o]));
                n.parts.length > r.parts.length &&
                  (n.parts.length = r.parts.length);
              } else {
                var a = [];
                for (o = 0; o < r.parts.length; o++) a.push(g(r.parts[o]));
                i[r.id] = { id: r.id, refs: 1, parts: a };
              }
            }
          }
          function m() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), a.appendChild(e), e;
          }
          function g(e) {
            var t,
              r,
              n = document.querySelector('style[' + l + '~="' + e.id + '"]');
            if (n) {
              if (d) return c;
              n.parentNode.removeChild(n);
            }
            if (p) {
              var o = u++;
              (n = s || (s = m())),
                (t = C.bind(null, n, o, !1)),
                (r = C.bind(null, n, o, !0));
            } else
              (n = m()),
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
            var o = r ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, o);
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
              f.ssrId && e.setAttribute(l, t.id),
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
          u = {},
          d = {
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
                var r = document.getElementById(e) || this.$refs.uchart;
                (r.width = r.offsetWidth), (r.height = r.offsetHeight);
                var n = r.getContext('2d');
                u[e] = new (s())({
                  type: 'mount',
                  context: n,
                  width: r.width,
                  height: r.height,
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
        r(821);
        const c = (0, r(744).Z)(d, [
          [
            'render',
            function (e, r, n, a, s, u) {
              return (
                (0, t.openBlock)(),
                (0, t.createElementBlock)('div', o, [
                  u.chartId
                    ? ((0, t.openBlock)(),
                      (0, t.createElementBlock)(
                        'canvas',
                        {
                          key: 0,
                          'canvas-id': u.chartId,
                          id: u.chartId,
                          class: 'u-charts',
                          onTouchend:
                            r[0] ||
                            (r[0] = function () {
                              return u.tap && u.tap.apply(u, arguments);
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
          ['__scopeId', 'data-v-26719652'],
        ]);
        var f = c;
        (0, e.registerRenderer)(f, {
          type: 'uni-mount-chart',
          framework: 'vue3',
        });
      })(),
      n
    );
  })();
});

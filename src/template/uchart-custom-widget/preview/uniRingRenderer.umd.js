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
        625: function () {},
        744: function (e, t) {
          'use strict';
          t.Z = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [e, n] of t) r[e] = n;
            return r;
          };
        },
        572: function (e, t, r) {
          var n = r(625);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(346).Z)('4cecb950', n, !1, { sourceMap: !1 });
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
            u = !1,
            c = function () {},
            f = null,
            l = 'data-vue-ssr-id',
            p =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function h(e, t, r, i) {
            (u = r), (f = i || {});
            var a = n(e, t);
            return (
              v(a),
              function (t) {
                for (var r = [], i = 0; i < a.length; i++) {
                  var s = a[i];
                  (d = o[s.id]).refs--, r.push(d);
                }
                for (
                  t ? v((a = n(e, t))) : (a = []), i = 0;
                  i < r.length;
                  i++
                ) {
                  var d;
                  if (0 === (d = r[i]).refs) {
                    for (var u = 0; u < d.parts.length; u++) d.parts[u]();
                    delete o[d.id];
                  }
                }
              }
            );
          }
          function v(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                n = o[r.id];
              if (n) {
                n.refs++;
                for (var i = 0; i < n.parts.length; i++) n.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++) n.parts.push(g(r.parts[i]));
                n.parts.length > r.parts.length &&
                  (n.parts.length = r.parts.length);
              } else {
                var a = [];
                for (i = 0; i < r.parts.length; i++) a.push(g(r.parts[i]));
                o[r.id] = { id: r.id, refs: 1, parts: a };
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
              if (u) return c;
              n.parentNode.removeChild(n);
            }
            if (p) {
              var i = d++;
              (n = s || (s = m())),
                (t = C.bind(null, n, i, !1)),
                (r = C.bind(null, n, i, !0));
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
          var b,
            y =
              ((b = []),
              function (e, t) {
                return (b[e] = t), b.filter(Boolean).join('\n');
              });
          function C(e, t, r, n) {
            var i = r ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, i);
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
              f.ssrId && e.setAttribute(l, t.id),
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
          u = {
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
                var r = document.getElementById(e) || this.$refs.uchart;
                (r.width = r.offsetWidth || '370'),
                  (r.height = r.offsetHeight || '280');
                var n = r.getContext('2d');
                d[e] = new (s())({
                  type: 'ring',
                  context: n,
                  width: r.width,
                  height: r.height,
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
                d[e.target.id].touchLegend(e), d[e.target.id].showToolTip(e);
              },
            },
          };
        r(572);
        const c = (0, r(744).Z)(u, [
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
          ['__scopeId', 'data-v-b86dfad6'],
        ]);
        var f = c;
        (0, e.registerRenderer)(f, {
          type: 'uni-ring-chart',
          framework: 'vue3',
        });
      })(),
      n
    );
  })();
});

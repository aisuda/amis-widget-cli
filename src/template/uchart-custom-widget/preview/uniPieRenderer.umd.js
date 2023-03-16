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
        72: function (e, t, r) {
          var n = r(52);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(159).Z)('15416112', n, !1, { sourceMap: !1 });
        },
        159: function (e, t, r) {
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
            p = 'data-vue-ssr-id',
            l =
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
              n = document.querySelector('style[' + p + '~="' + e.id + '"]');
            if (n) {
              if (u) return c;
              n.parentNode.removeChild(n);
            }
            if (l) {
              var i = d++;
              (n = s || (s = m())),
                (t = C.bind(null, n, i, !1)),
                (r = C.bind(null, n, i, !0));
            } else
              (n = m()),
                (t = w.bind(null, n)),
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
          function w(e, t) {
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
        52: function () {},
      },
      t = {};
    function r(n) {
      var i = t[n];
      if (void 0 !== i) return i.exports;
      var o = (t[n] = { id: n, exports: {} });
      return e[n](o, o.exports, r), o.exports;
    }
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
        var e = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r('div', { staticClass: 'u-charts-container' }, [
            e.chartId
              ? r('canvas', {
                  ref: 'uchart',
                  staticClass: 'u-charts',
                  attrs: { 'canvas-id': e.chartId, id: e.chartId },
                  on: { touchend: e.tap },
                })
              : e._e(),
          ]);
        };
        (e._withStripped = !0),
          Object(
            (function () {
              var e = new Error("Cannot find module '@qiun/ucharts'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })(),
          );
        var t = {},
          i = {
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
              drawCharts: function (e, r) {
                var n = document.getElementById(e) || this.$refs.uchart;
                (n.width = n.offsetWidth || '370'),
                  (n.height = n.offsetHeight || '280');
                var i = n.getContext('2d');
                t[e] = new Object(
                  (function () {
                    var e = new Error("Cannot find module '@qiun/ucharts'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                  })(),
                )({
                  type: 'pie',
                  context: i,
                  width: n.width,
                  height: n.height,
                  series: r.series,
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
                t[e.target.id].touchLegend(e), t[e.target.id].showToolTip(e);
              },
            },
          };
        r(72);
        var o = (function (e, t, r, n, i, o, a, s) {
            var d,
              u = 'function' == typeof e ? e.options : e;
            if (
              (t &&
                ((u.render = t), (u.staticRenderFns = []), (u._compiled = !0)),
              o && (u._scopeId = 'data-v-' + o),
              d)
            )
              if (u.functional) {
                u._injectStyles = d;
                var c = u.render;
                u.render = function (e, t) {
                  return d.call(t), c(e, t);
                };
              } else {
                var f = u.beforeCreate;
                u.beforeCreate = f ? [].concat(f, d) : [d];
              }
            return { exports: e, options: u };
          })(i, e, 0, 0, 0, '46fb2cf5'),
          a = o.exports;
        Object(
          (function () {
            var e = new Error(
              "Cannot find module 'vue3-aipage-widget/dist/index.umd'",
            );
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          })(),
        ),
          Object(
            (function () {
              var e = new Error(
                "Cannot find module 'vue3-aipage-widget/dist/index.umd'",
              );
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            })(),
          )(a, { type: 'uni-pie-chart', framework: 'vue3' });
      })(),
      n
    );
  })();
});

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
        582: function (e, t, r) {
          var n = r(885);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(159).Z)('43a30672', n, !1, { sourceMap: !1 });
        },
        159: function (e, t, r) {
          'use strict';
          function n(e, t) {
            for (var r = [], n = {}, a = 0; a < t.length; a++) {
              var i = t[a],
                o = i[0],
                s = {
                  id: e + ':' + a,
                  css: i[1],
                  media: i[2],
                  sourceMap: i[3],
                };
              n[o]
                ? n[o].parts.push(s)
                : r.push((n[o] = { id: o, parts: [s] }));
            }
            return r;
          }
          r.d(t, {
            Z: function () {
              return l;
            },
          });
          var a = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !a)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var i = {},
            o =
              a && (document.head || document.getElementsByTagName('head')[0]),
            s = null,
            d = 0,
            c = !1,
            u = function () {},
            f = null,
            p = 'data-vue-ssr-id',
            h =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function l(e, t, r, a) {
            (c = r), (f = a || {});
            var o = n(e, t);
            return (
              g(o),
              function (t) {
                for (var r = [], a = 0; a < o.length; a++) {
                  var s = o[a];
                  (d = i[s.id]).refs--, r.push(d);
                }
                for (
                  t ? g((o = n(e, t))) : (o = []), a = 0;
                  a < r.length;
                  a++
                ) {
                  var d;
                  if (0 === (d = r[a]).refs) {
                    for (var c = 0; c < d.parts.length; c++) d.parts[c]();
                    delete i[d.id];
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
                for (var a = 0; a < n.parts.length; a++) n.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) n.parts.push(m(r.parts[a]));
                n.parts.length > r.parts.length &&
                  (n.parts.length = r.parts.length);
              } else {
                var o = [];
                for (a = 0; a < r.parts.length; a++) o.push(m(r.parts[a]));
                i[r.id] = { id: r.id, refs: 1, parts: o };
              }
            }
          }
          function v() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), o.appendChild(e), e;
          }
          function m(e) {
            var t,
              r,
              n = document.querySelector('style[' + p + '~="' + e.id + '"]');
            if (n) {
              if (c) return u;
              n.parentNode.removeChild(n);
            }
            if (h) {
              var a = d++;
              (n = s || (s = v())),
                (t = b.bind(null, n, a, !1)),
                (r = b.bind(null, n, a, !0));
            } else
              (n = v()),
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
            C =
              ((y = []),
              function (e, t) {
                return (y[e] = t), y.filter(Boolean).join('\n');
              });
          function b(e, t, r, n) {
            var a = r ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = C(t, a);
            else {
              var i = document.createTextNode(a),
                o = e.childNodes;
              o[t] && e.removeChild(o[t]),
                o.length ? e.insertBefore(i, o[t]) : e.appendChild(i);
            }
          }
          function w(e, t) {
            var r = t.css,
              n = t.media,
              a = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              f.ssrId && e.setAttribute(p, t.id),
              a &&
                ((r += '\n/*# sourceURL=' + a.sources[0] + ' */'),
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
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
        885: function () {},
      },
      t = {};
    function r(n) {
      var a = t[n];
      if (void 0 !== a) return a.exports;
      var i = (t[n] = { id: n, exports: {} });
      return e[n](i, i.exports, r), i.exports;
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
          a = {
            props: ['componentProperties', 'id'],
            data: function () {
              return {
                defaultChartData: {
                  categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
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
              drawCharts: function (e, r) {
                var n = document.getElementById(e) || this.$refs.uchart;
                (n.width = n.offsetWidth || '370'),
                  (n.height = n.offsetHeight || '280');
                var a = n.getContext('2d');
                t[e] = new Object(
                  (function () {
                    var e = new Error("Cannot find module '@qiun/ucharts'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                  })(),
                )({
                  type: 'area',
                  context: a,
                  width: n.width,
                  height: n.height,
                  categories: this.categories,
                  series: r.series,
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
              },
              tap: function (e) {
                t[e.target.id].touchLegend(e), t[e.target.id].showToolTip(e);
              },
            },
          };
        r(582);
        var i = (function (e, t, r, n, a, i, o, s) {
            var d,
              c = 'function' == typeof e ? e.options : e;
            if (
              (t &&
                ((c.render = t), (c.staticRenderFns = []), (c._compiled = !0)),
              i && (c._scopeId = 'data-v-' + i),
              d)
            )
              if (c.functional) {
                c._injectStyles = d;
                var u = c.render;
                c.render = function (e, t) {
                  return d.call(t), u(e, t);
                };
              } else {
                var f = c.beforeCreate;
                c.beforeCreate = f ? [].concat(f, d) : [d];
              }
            return { exports: e, options: c };
          })(a, e, 0, 0, 0, '0076da2c'),
          o = i.exports;
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
          )(o, { type: 'uni-area-chart', framework: 'vue3' });
      })(),
      n
    );
  })();
});

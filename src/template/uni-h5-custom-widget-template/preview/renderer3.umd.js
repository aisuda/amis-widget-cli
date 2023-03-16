/*! For license information please see renderer3.umd.js.LICENSE.txt */
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
        161: function () {},
        744: function (e, t) {
          'use strict';
          t.Z = (e, t) => {
            const n = e.__vccOpts || e;
            for (const [e, r] of t) n[e] = r;
            return n;
          };
        },
        377: function (e, t, n) {
          var r = n(161);
          r.__esModule && (r = r.default),
            'string' == typeof r && (r = [[e.id, r, '']]),
            r.locals && (e.exports = r.locals),
            (0, n(346).Z)('eff264ac', r, !1, { sourceMap: !1 });
        },
        346: function (e, t, n) {
          'use strict';
          function r(e, t) {
            for (var n = [], r = {}, o = 0; o < t.length; o++) {
              var i = t[o],
                s = i[0],
                a = {
                  id: e + ':' + o,
                  css: i[1],
                  media: i[2],
                  sourceMap: i[3],
                };
              r[s]
                ? r[s].parts.push(a)
                : n.push((r[s] = { id: s, parts: [a] }));
            }
            return n;
          }
          n.d(t, {
            Z: function () {
              return v;
            },
          });
          var o = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !o)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var i = {},
            s =
              o && (document.head || document.getElementsByTagName('head')[0]),
            a = null,
            d = 0,
            u = !1,
            c = function () {},
            p = null,
            f = 'data-vue-ssr-id',
            l =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function v(e, t, n, o) {
            (u = n), (p = o || {});
            var s = r(e, t);
            return (
              h(s),
              function (t) {
                for (var n = [], o = 0; o < s.length; o++) {
                  var a = s[o];
                  (d = i[a.id]).refs--, n.push(d);
                }
                for (
                  t ? h((s = r(e, t))) : (s = []), o = 0;
                  o < n.length;
                  o++
                ) {
                  var d;
                  if (0 === (d = n[o]).refs) {
                    for (var u = 0; u < d.parts.length; u++) d.parts[u]();
                    delete i[d.id];
                  }
                }
              }
            );
          }
          function h(e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t],
                r = i[n.id];
              if (r) {
                r.refs++;
                for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                for (; o < n.parts.length; o++) r.parts.push(g(n.parts[o]));
                r.parts.length > n.parts.length &&
                  (r.parts.length = n.parts.length);
              } else {
                var s = [];
                for (o = 0; o < n.parts.length; o++) s.push(g(n.parts[o]));
                i[n.id] = { id: n.id, refs: 1, parts: s };
              }
            }
          }
          function m() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), s.appendChild(e), e;
          }
          function g(e) {
            var t,
              n,
              r = document.querySelector('style[' + f + '~="' + e.id + '"]');
            if (r) {
              if (u) return c;
              r.parentNode.removeChild(r);
            }
            if (l) {
              var o = d++;
              (r = a || (a = m())),
                (t = x.bind(null, r, o, !1)),
                (n = x.bind(null, r, o, !0));
            } else
              (r = m()),
                (t = S.bind(null, r)),
                (n = function () {
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
                } else n();
              }
            );
          }
          var y,
            b =
              ((y = []),
              function (e, t) {
                return (y[e] = t), y.filter(Boolean).join('\n');
              });
          function x(e, t, n, r) {
            var o = n ? '' : r.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, o);
            else {
              var i = document.createTextNode(o),
                s = e.childNodes;
              s[t] && e.removeChild(s[t]),
                s.length ? e.insertBefore(i, s[t]) : e.appendChild(i);
            }
          }
          function S(e, t) {
            var n = t.css,
              r = t.media,
              o = t.sourceMap;
            if (
              (r && e.setAttribute('media', r),
              p.ssrId && e.setAttribute(f, t.id),
              o &&
                ((n += '\n/*# sourceURL=' + o.sources[0] + ' */'),
                (n +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
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
      },
      t = {};
    function n(r) {
      var o = t[r];
      if (void 0 !== o) return o.exports;
      var i = (t[r] = { id: r, exports: {} });
      return e[r](i, i.exports, n), i.exports;
    }
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
    var r = {};
    return (
      (function () {
        'use strict';
        n.r(r);
        var e = require('vue3-aipage-widget'),
          t = require('vue'),
          o = { class: 'news-card' },
          i = { class: 'news-title' },
          s = { class: 'item-imgbox' },
          a = {
            props: ['componentProperties', 'id'],
            data: function () {
              return { isAlive: !0, isFirstVisit: !0 };
            },
            computed: {
              title: function () {
                return (
                  (this.componentProperties &&
                    this.componentProperties.data &&
                    this.componentProperties.data.title) ||
                  'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。'
                );
              },
              jsonData: function () {
                return (
                  (this.componentProperties &&
                    this.componentProperties.data &&
                    this.componentProperties.data.jsonData) ||
                  '{ type: "h5-uni-info-card-v3" }'
                );
              },
            },
            mounted: function () {
              this.isFirstVisit = !1;
            },
            activated: function () {
              this.isAlive = !0;
            },
            deactivated: function () {
              this.isAlive = !1;
            },
          };
        n(377);
        var d = (0, n(744).Z)(a, [
          [
            'render',
            function (e, n, r, a, d, u) {
              return (
                (0, t.openBlock)(),
                (0, t.createElementBlock)('div', o, [
                  (0, t.createElementVNode)(
                    'div',
                    i,
                    (0, t.toDisplayString)(u.title),
                    1,
                  ),
                  (0, t.createElementVNode)('div', s, [
                    (0, t.createElementVNode)(
                      'pre',
                      null,
                      (0, t.toDisplayString)(u.jsonData),
                      1,
                    ),
                  ]),
                ])
              );
            },
          ],
          ['__scopeId', 'data-v-1d89d316'],
        ]);
        (0, e.registerRenderer)(d, {
          type: 'h5-uni-info-card-v3',
          framework: 'vue3',
        });
      })(),
      r
    );
  })();
});

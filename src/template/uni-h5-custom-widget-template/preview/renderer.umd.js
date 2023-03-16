/*! For license information please see renderer.umd.js.LICENSE.txt */
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
        642: function () {},
        744: function (e, t) {
          'use strict';
          t.Z = (e, t) => {
            const n = e.__vccOpts || e;
            for (const [e, r] of t) n[e] = r;
            return n;
          };
        },
        240: function (e, t, n) {
          var r = n(642);
          r.__esModule && (r = r.default),
            'string' == typeof r && (r = [[e.id, r, '']]),
            r.locals && (e.exports = r.locals),
            (0, n(346).Z)('d103f586', r, !1, { sourceMap: !1 });
        },
        346: function (e, t, n) {
          'use strict';
          function r(e, t) {
            for (var n = [], r = {}, o = 0; o < t.length; o++) {
              var i = t[o],
                a = i[0],
                s = {
                  id: e + ':' + o,
                  css: i[1],
                  media: i[2],
                  sourceMap: i[3],
                };
              r[a]
                ? r[a].parts.push(s)
                : n.push((r[a] = { id: a, parts: [s] }));
            }
            return n;
          }
          n.d(t, {
            Z: function () {
              return m;
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
            p = null,
            l = 'data-vue-ssr-id',
            f =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function m(e, t, n, o) {
            (d = n), (p = o || {});
            var a = r(e, t);
            return (
              v(a),
              function (t) {
                for (var n = [], o = 0; o < a.length; o++) {
                  var s = a[o];
                  (c = i[s.id]).refs--, n.push(c);
                }
                for (
                  t ? v((a = r(e, t))) : (a = []), o = 0;
                  o < n.length;
                  o++
                ) {
                  var c;
                  if (0 === (c = n[o]).refs) {
                    for (var d = 0; d < c.parts.length; d++) c.parts[d]();
                    delete i[c.id];
                  }
                }
              }
            );
          }
          function v(e) {
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
                var a = [];
                for (o = 0; o < n.parts.length; o++) a.push(g(n.parts[o]));
                i[n.id] = { id: n.id, refs: 1, parts: a };
              }
            }
          }
          function h() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), a.appendChild(e), e;
          }
          function g(e) {
            var t,
              n,
              r = document.querySelector('style[' + l + '~="' + e.id + '"]');
            if (r) {
              if (d) return u;
              r.parentNode.removeChild(r);
            }
            if (f) {
              var o = c++;
              (r = s || (s = h())),
                (t = S.bind(null, r, o, !1)),
                (n = S.bind(null, r, o, !0));
            } else
              (r = h()),
                (t = P.bind(null, r)),
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
          function S(e, t, n, r) {
            var o = n ? '' : r.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, o);
            else {
              var i = document.createTextNode(o),
                a = e.childNodes;
              a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
            }
          }
          function P(e, t) {
            var n = t.css,
              r = t.media,
              o = t.sourceMap;
            if (
              (r && e.setAttribute('media', r),
              p.ssrId && e.setAttribute(l, t.id),
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
          a = { class: 'item-imgbox' },
          s = { key: 0, class: 'img-count' },
          c = { class: 'news-info' },
          d = (function (e) {
            return (
              (0, t.pushScopeId)('data-v-5b0c30db'),
              (e = e()),
              (0, t.popScopeId)(),
              e
            );
          })(function () {
            return (0,
            t.createElementVNode)('div', { class: 'left media-mark' }, '爱速搭 · 低代码平台', -1);
          }),
          u = { class: 'cmt-num right' },
          p = {
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
              backgroundImage: function () {
                return (
                  (this.componentProperties &&
                    this.componentProperties.data &&
                    this.componentProperties.data.backgroundImage) ||
                  'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg'
                );
              },
              img_count: function () {
                return (
                  this.componentProperties &&
                  this.componentProperties.data &&
                  this.componentProperties.data.img_count
                );
              },
              comment_count: function () {
                return (
                  this.componentProperties &&
                  this.componentProperties.data &&
                  this.componentProperties.data.comment_count
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
            methods: {
              agreeDataFormat: function (e) {
                return e && e <= 9999
                  ? e
                  : e && e > 9999
                  ? Math.floor(e / 1e3) / 10 + 'w'
                  : void 0;
              },
            },
          };
        n(240);
        var l = (0, n(744).Z)(p, [
          [
            'render',
            function (e, n, r, p, l, f) {
              return (
                (0, t.openBlock)(),
                (0, t.createElementBlock)('div', o, [
                  (0, t.createElementVNode)(
                    'div',
                    i,
                    (0, t.toDisplayString)(f.title),
                    1,
                  ),
                  (0, t.createElementVNode)('div', a, [
                    (0, t.createElementVNode)(
                      'div',
                      {
                        class: 'news-img',
                        style: (0, t.normalizeStyle)({
                          backgroundImage: 'url(' + f.backgroundImage + ')',
                        }),
                      },
                      null,
                      4,
                    ),
                    f.img_count > 0
                      ? ((0, t.openBlock)(),
                        (0, t.createElementBlock)(
                          'div',
                          s,
                          (0, t.toDisplayString)(f.img_count),
                          1,
                        ))
                      : (0, t.createCommentVNode)('v-if', !0),
                  ]),
                  (0, t.createElementVNode)('div', c, [
                    d,
                    (0, t.createElementVNode)(
                      'div',
                      u,
                      (0, t.toDisplayString)(
                        f.agreeDataFormat(f.comment_count) || 0,
                      ) + ' 评 ',
                      1,
                    ),
                  ]),
                ])
              );
            },
          ],
          ['__scopeId', 'data-v-5b0c30db'],
        ]);
        (0, e.registerRenderer)(l, {
          type: 'h5-uni-info-card',
          framework: 'vue3',
        });
      })(),
      r
    );
  })();
});

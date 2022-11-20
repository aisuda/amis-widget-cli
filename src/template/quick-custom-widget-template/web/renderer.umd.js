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
        365: function (e, t) {
          'use strict';
          Object.defineProperty(t, 'X', { value: !0 }), (t.Z = void 0);
          var n = {
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
          t.Z = n;
        },
        538: function (e, t, n) {
          'use strict';
          t.s = function (e, t, n, p, l, f) {
            return (
              (0, r.openBlock)(),
              (0, r.createElementBlock)('div', o, [
                (0, r.createElementVNode)(
                  'div',
                  i,
                  (0, r.toDisplayString)(f.title),
                  1,
                ),
                (0, r.createElementVNode)('div', s, [
                  (0, r.createElementVNode)(
                    'div',
                    {
                      class: 'news-img',
                      style: (0, r.normalizeStyle)({
                        backgroundImage: 'url(' + f.backgroundImage + ')',
                      }),
                    },
                    null,
                    4,
                  ),
                  f.img_count > 0
                    ? ((0, r.openBlock)(),
                      (0, r.createElementBlock)(
                        'div',
                        a,
                        (0, r.toDisplayString)(f.img_count),
                        1,
                      ))
                    : (0, r.createCommentVNode)('v-if', !0),
                ]),
                (0, r.createElementVNode)('div', c, [
                  u,
                  (0, r.createElementVNode)(
                    'div',
                    d,
                    (0, r.toDisplayString)(
                      f.agreeDataFormat(f.comment_count) || 0,
                    ) + ' 评 ',
                    1,
                  ),
                ]),
              ])
            );
          };
          var r = n(734),
            o = { class: 'news-card' },
            i = { class: 'news-title' },
            s = { class: 'item-imgbox' },
            a = { key: 0, class: 'img-count' },
            c = { class: 'news-info' },
            u = (function (e) {
              return (
                (0, r.pushScopeId)('data-v-5b0c30db'),
                (e = e()),
                (0, r.popScopeId)(),
                e
              );
            })(function () {
              return (0,
              r.createElementVNode)('div', { class: 'left media-mark' }, '爱速搭 · 低代码平台', -1);
            }),
            d = { class: 'cmt-num right' };
        },
        642: function () {},
        744: function (e, t) {
          'use strict';
          t.Z = (e, t) => {
            const n = e.__vccOpts || e;
            for (const [e, r] of t) n[e] = r;
            return n;
          };
        },
        843: function (e, t, n) {
          'use strict';
          n.r(t),
            n.d(t, {
              __esModule: function () {
                return o.X;
              },
              default: function () {
                return i;
              },
            });
          var r = n(538),
            o = n(365);
          n(240);
          var i = (0, n(744).Z)(o.Z, [
            ['render', r.s],
            ['__scopeId', 'data-v-5b0c30db'],
          ]);
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
              return m;
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
            c = 0,
            u = !1,
            d = function () {},
            p = null,
            l = 'data-vue-ssr-id',
            f =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function m(e, t, n, o) {
            (u = n), (p = o || {});
            var s = r(e, t);
            return (
              v(s),
              function (t) {
                for (var n = [], o = 0; o < s.length; o++) {
                  var a = s[o];
                  (c = i[a.id]).refs--, n.push(c);
                }
                for (
                  t ? v((s = r(e, t))) : (s = []), o = 0;
                  o < n.length;
                  o++
                ) {
                  var c;
                  if (0 === (c = n[o]).refs) {
                    for (var u = 0; u < c.parts.length; u++) c.parts[u]();
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
                var s = [];
                for (o = 0; o < n.parts.length; o++) s.push(g(n.parts[o]));
                i[n.id] = { id: n.id, refs: 1, parts: s };
              }
            }
          }
          function h() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), s.appendChild(e), e;
          }
          function g(e) {
            var t,
              n,
              r = document.querySelector('style[' + l + '~="' + e.id + '"]');
            if (r) {
              if (u) return d;
              r.parentNode.removeChild(r);
            }
            if (f) {
              var o = c++;
              (r = a || (a = h())),
                (t = x.bind(null, r, o, !1)),
                (n = x.bind(null, r, o, !0));
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
          var b,
            y =
              ((b = []),
              function (e, t) {
                return (b[e] = t), b.filter(Boolean).join('\n');
              });
          function x(e, t, n, r) {
            var o = n ? '' : r.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, o);
            else {
              var i = document.createTextNode(o),
                s = e.childNodes;
              s[t] && e.removeChild(s[t]),
                s.length ? e.insertBefore(i, s[t]) : e.appendChild(i);
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
        880: function (e) {
          'use strict';
          e.exports = require('@babel/runtime/helpers/interopRequireDefault');
        },
        734: function (e) {
          'use strict';
          e.exports = require('vue');
        },
        581: function (e) {
          'use strict';
          e.exports = require('vue3-aipage-widget');
        },
      },
      t = {};
    function n(r) {
      var o = t[r];
      if (void 0 !== o) return o.exports;
      var i = (t[r] = { id: r, exports: {} });
      return e[r](i, i.exports, n), i.exports;
    }
    return (
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
      }),
      (function () {
        'use strict';
        var e = n(880),
          t = n(581),
          r = e(n(843));
        (0, t.registerRenderer)(r.default, {
          type: 'quick-info-card',
          framework: 'vue3',
        });
      })(),
      {}
    );
  })();
});

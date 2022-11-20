/*! For license information please see infoCard.umd.js.LICENSE.txt */
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
        904: function () {},
        618: function () {},
        773: function (e, t, r) {
          var n = r(904);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(346).Z)('e4be1844', n, !1, { sourceMap: !1 });
        },
        491: function (e, t, r) {
          var n = r(618);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(346).Z)('5389f1ec', n, !1, { sourceMap: !1 });
        },
        346: function (e, t, r) {
          'use strict';
          function n(e, t) {
            for (var r = [], n = {}, i = 0; i < t.length; i++) {
              var o = t[i],
                s = o[0],
                a = {
                  id: e + ':' + i,
                  css: o[1],
                  media: o[2],
                  sourceMap: o[3],
                };
              n[s]
                ? n[s].parts.push(a)
                : r.push((n[s] = { id: s, parts: [a] }));
            }
            return r;
          }
          r.d(t, {
            Z: function () {
              return v;
            },
          });
          var i = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !i)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var o = {},
            s =
              i && (document.head || document.getElementsByTagName('head')[0]),
            a = null,
            u = 0,
            c = !1,
            d = function () {},
            f = null,
            l = 'data-vue-ssr-id',
            p =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function v(e, t, r, i) {
            (c = r), (f = i || {});
            var s = n(e, t);
            return (
              m(s),
              function (t) {
                for (var r = [], i = 0; i < s.length; i++) {
                  var a = s[i];
                  (u = o[a.id]).refs--, r.push(u);
                }
                for (
                  t ? m((s = n(e, t))) : (s = []), i = 0;
                  i < r.length;
                  i++
                ) {
                  var u;
                  if (0 === (u = r[i]).refs) {
                    for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                    delete o[u.id];
                  }
                }
              }
            );
          }
          function m(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                n = o[r.id];
              if (n) {
                n.refs++;
                for (var i = 0; i < n.parts.length; i++) n.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++) n.parts.push(h(r.parts[i]));
                n.parts.length > r.parts.length &&
                  (n.parts.length = r.parts.length);
              } else {
                var s = [];
                for (i = 0; i < r.parts.length; i++) s.push(h(r.parts[i]));
                o[r.id] = { id: r.id, refs: 1, parts: s };
              }
            }
          }
          function g() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), s.appendChild(e), e;
          }
          function h(e) {
            var t,
              r,
              n = document.querySelector('style[' + l + '~="' + e.id + '"]');
            if (n) {
              if (c) return d;
              n.parentNode.removeChild(n);
            }
            if (p) {
              var i = u++;
              (n = a || (a = g())),
                (t = _.bind(null, n, i, !1)),
                (r = _.bind(null, n, i, !0));
            } else
              (n = g()),
                (t = C.bind(null, n)),
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
          function _(e, t, r, n) {
            var i = r ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, i);
            else {
              var o = document.createTextNode(i),
                s = e.childNodes;
              s[t] && e.removeChild(s[t]),
                s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
            }
          }
          function C(e, t) {
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
          return r('div', { staticClass: 'news-card' }, [
            r('div', { staticClass: 'news-title' }, [e._v(e._s(e.title))]),
            e._v(' '),
            r('div', { staticClass: 'item-imgbox' }, [
              r('div', {
                staticClass: 'news-img',
                style: { backgroundImage: 'url(' + e.backgroundImage + ')' },
              }),
              e._v(' '),
              e.img_count > 0
                ? r('div', { staticClass: 'img-count' }, [
                    e._v('\n      ' + e._s(e.img_count) + '\n    '),
                  ])
                : e._e(),
            ]),
            e._v(' '),
            r('div', { staticClass: 'news-info' }, [
              r('div', { staticClass: 'left media-mark' }, [
                e._v('爱速搭 · 低代码平台'),
              ]),
              e._v(' '),
              e.comment_count && 0 != e.comment_count
                ? r('div', { staticClass: 'cmt-num right' }, [
                    e._v(
                      '\n      ' +
                        e._s(e.agreeDataFormat(e.comment_count)) +
                        '评\n    ',
                    ),
                  ])
                : e._e(),
            ]),
          ]);
        };
        e._withStripped = !0;
        var t = {
          props: {
            title: {
              type: String,
              default:
                'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
            },
            backgroundImage: {
              type: String,
              default:
                'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg',
            },
            img_count: { type: Number, default: 3 },
            comment_count: { type: Number, default: 2021 },
          },
          data: function () {
            return { isAlive: !0, isFirstVisit: !0 };
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
        r(773);
        var i = (function (e, t, r, n, i, o, s, a) {
          var u,
            c = 'function' == typeof e ? e.options : e;
          if (
            (t &&
              ((c.render = t), (c.staticRenderFns = []), (c._compiled = !0)),
            u)
          )
            if (c.functional) {
              c._injectStyles = u;
              var d = c.render;
              c.render = function (e, t) {
                return u.call(t), d(e, t);
              };
            } else {
              var f = c.beforeCreate;
              c.beforeCreate = f ? [].concat(f, u) : [u];
            }
          return { exports: e, options: c };
        })(t, e);
        i.options.__file = 'src/widget/info-card.vue';
        var o = i.exports,
          s = require('amis-widget');
        r(491),
          (0, s.registerRendererByType)(o, {
            type: 'vue-info-card',
            usage: 'renderer',
            weight: 99,
            framework: 'vue',
          });
      })(),
      n
    );
  })();
});

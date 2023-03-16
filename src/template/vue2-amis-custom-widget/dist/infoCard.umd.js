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
        492: function () {},
        468: function (e, t, r) {
          var n = r(492);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(346).Z)('5193891b', n, !1, { sourceMap: !1 });
        },
        346: function (e, t, r) {
          'use strict';
          function n(e, t) {
            for (var r = [], n = {}, i = 0; i < t.length; i++) {
              var a = t[i],
                o = a[0],
                s = {
                  id: e + ':' + i,
                  css: a[1],
                  media: a[2],
                  sourceMap: a[3],
                };
              n[o]
                ? n[o].parts.push(s)
                : r.push((n[o] = { id: o, parts: [s] }));
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
          var a = {},
            o =
              i && (document.head || document.getElementsByTagName('head')[0]),
            s = null,
            u = 0,
            c = !1,
            d = function () {},
            l = null,
            f = 'data-vue-ssr-id',
            p =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function v(e, t, r, i) {
            (c = r), (l = i || {});
            var o = n(e, t);
            return (
              m(o),
              function (t) {
                for (var r = [], i = 0; i < o.length; i++) {
                  var s = o[i];
                  (u = a[s.id]).refs--, r.push(u);
                }
                for (
                  t ? m((o = n(e, t))) : (o = []), i = 0;
                  i < r.length;
                  i++
                ) {
                  var u;
                  if (0 === (u = r[i]).refs) {
                    for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                    delete a[u.id];
                  }
                }
              }
            );
          }
          function m(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                n = a[r.id];
              if (n) {
                n.refs++;
                for (var i = 0; i < n.parts.length; i++) n.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++) n.parts.push(h(r.parts[i]));
                n.parts.length > r.parts.length &&
                  (n.parts.length = r.parts.length);
              } else {
                var o = [];
                for (i = 0; i < r.parts.length; i++) o.push(h(r.parts[i]));
                a[r.id] = { id: r.id, refs: 1, parts: o };
              }
            }
          }
          function g() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), o.appendChild(e), e;
          }
          function h(e) {
            var t,
              r,
              n = document.querySelector('style[' + f + '~="' + e.id + '"]');
            if (n) {
              if (c) return d;
              n.parentNode.removeChild(n);
            }
            if (p) {
              var i = u++;
              (n = s || (s = g())),
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
          var b,
            y =
              ((b = []),
              function (e, t) {
                return (b[e] = t), b.filter(Boolean).join('\n');
              });
          function _(e, t, r, n) {
            var i = r ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, i);
            else {
              var a = document.createTextNode(i),
                o = e.childNodes;
              o[t] && e.removeChild(o[t]),
                o.length ? e.insertBefore(a, o[t]) : e.appendChild(a);
            }
          }
          function C(e, t) {
            var r = t.css,
              n = t.media,
              i = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              l.ssrId && e.setAttribute(f, t.id),
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
            t = e._self._c;
          return t(
            'div',
            { staticClass: 'news-card' },
            [
              t('div', { staticClass: 'news-title' }, [
                e._v('\n    ' + e._s(e.title) + '\n  '),
              ]),
              e._v(' '),
              t('div', { staticClass: 'item-imgbox' }, [
                t('div', {
                  staticClass: 'news-img',
                  style: { backgroundImage: 'url(' + e.backgroundImage + ')' },
                }),
                e._v(' '),
                e.img_count > 0
                  ? t('div', { staticClass: 'img-count' }, [
                      e._v('\n      ' + e._s(e.img_count) + '\n    '),
                    ])
                  : e._e(),
              ]),
              e._v(' '),
              t('div', { staticClass: 'news-info' }, [
                t('div', { staticClass: 'left media-mark' }, [
                  e._v('爱速搭 · 低代码平台'),
                ]),
                e._v(' '),
                e.comment_count && 0 != e.comment_count
                  ? t('div', { staticClass: 'cmt-num right' }, [
                      e._v(
                        '\n      ' +
                          e._s(e.agreeDataFormat(e.comment_count)) +
                          '评\n    ',
                      ),
                    ])
                  : e._e(),
              ]),
              e._v(' '),
              t('rate', {
                model: {
                  value: e.rateVal,
                  callback: function (t) {
                    e.rateVal = t;
                  },
                  expression: 'rateVal',
                },
              }),
            ],
            1,
          );
        };
        (e._withStripped = !0),
          require('element-ui/lib/theme-chalk/rate.css'),
          require('element-ui/lib/theme-chalk/base.css');
        var t = require('element-ui/lib/rate'),
          i = {
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
              return { isAlive: !0, isFirstVisit: !0, rateVal: 3 };
            },
            components: { Rate: r.n(t)() },
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
        r(468);
        var a = (function (e, t, r, n, i, a, o, s) {
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
                var l = c.beforeCreate;
                c.beforeCreate = l ? [].concat(l, u) : [u];
              }
            return { exports: e, options: c };
          })(i, e),
          o = a.exports;
        (0, require('amis-widget').registerRendererByType)(o, {
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

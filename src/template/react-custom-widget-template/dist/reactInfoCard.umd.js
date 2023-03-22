/*! For license information please see reactInfoCard.umd.js.LICENSE.txt */
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
        391: function () {},
        325: function (e, t, r) {
          var n = r(391);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(346).Z)('2c1625b5', n, !1, { sourceMap: !1 });
        },
        346: function (e, t, r) {
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
              return m;
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
            u = 0,
            c = !1,
            d = function () {},
            l = null,
            f = 'data-vue-ssr-id',
            p =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function m(e, t, r, a) {
            (c = r), (l = a || {});
            var o = n(e, t);
            return (
              v(o),
              function (t) {
                for (var r = [], a = 0; a < o.length; a++) {
                  var s = o[a];
                  (u = i[s.id]).refs--, r.push(u);
                }
                for (
                  t ? v((o = n(e, t))) : (o = []), a = 0;
                  a < r.length;
                  a++
                ) {
                  var u;
                  if (0 === (u = r[a]).refs) {
                    for (var c = 0; c < u.parts.length; c++) u.parts[c]();
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
                for (var a = 0; a < n.parts.length; a++) n.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) n.parts.push(g(r.parts[a]));
                n.parts.length > r.parts.length &&
                  (n.parts.length = r.parts.length);
              } else {
                var o = [];
                for (a = 0; a < r.parts.length; a++) o.push(g(r.parts[a]));
                i[r.id] = { id: r.id, refs: 1, parts: o };
              }
            }
          }
          function h() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), o.appendChild(e), e;
          }
          function g(e) {
            var t,
              r,
              n = document.querySelector('style[' + f + '~="' + e.id + '"]');
            if (n) {
              if (c) return d;
              n.parentNode.removeChild(n);
            }
            if (p) {
              var a = u++;
              (n = s || (s = h())),
                (t = N.bind(null, n, a, !1)),
                (r = N.bind(null, n, a, !0));
            } else
              (n = h()),
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
          function N(e, t, r, n) {
            var a = r ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, a);
            else {
              var i = document.createTextNode(a),
                o = e.childNodes;
              o[t] && e.removeChild(o[t]),
                o.length ? e.insertBefore(i, o[t]) : e.appendChild(i);
            }
          }
          function x(e, t) {
            var r = t.css,
              n = t.media,
              a = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              l.ssrId && e.setAttribute(f, t.id),
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
      },
      t = {};
    function r(n) {
      var a = t[n];
      if (void 0 !== a) return a.exports;
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
        var e = require('@babel/runtime/helpers/assertThisInitialized'),
          t = r.n(e),
          a = require('@babel/runtime/helpers/inheritsLoose'),
          i = r.n(a),
          o = require('react'),
          s =
            (r(325),
            (function (e) {
              function r() {
                var r;
                return (
                  ((r = e.call(this) || this).agreeDataFormat =
                    r.agreeDataFormat.bind(t()(r))),
                  r
                );
              }
              i()(r, e);
              var n = r.prototype;
              return (
                (n.agreeDataFormat = function (e) {
                  return e && e <= 9999
                    ? e
                    : e && e > 9999
                    ? Math.floor(e / 1e3) / 10 + 'w'
                    : void 0;
                }),
                (n.render = function () {
                  var e = this.props,
                    t = e.title,
                    r = (e.backgroundImage, e.img_count),
                    n = e.comment_count;
                  return o.createElement(
                    'div',
                    { className: 'news-card' },
                    o.createElement(
                      'div',
                      { className: 'news-title' },
                      t ||
                        'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
                    ),
                    o.createElement(
                      'div',
                      { className: 'item-imgbox' },
                      o.createElement('div', { className: 'news-img' }),
                      r > 0 &&
                        o.createElement('div', { className: 'img-count' }, r),
                    ),
                    o.createElement(
                      'div',
                      { className: 'news-info' },
                      o.createElement(
                        'div',
                        { className: 'left media-mark' },
                        '爱速搭 · 低代码平台',
                      ),
                      n &&
                        n > 0 &&
                        o.createElement(
                          'div',
                          { className: 'cmt-num right' },
                          this.agreeDataFormat(n),
                          '评',
                        ),
                    ),
                  );
                }),
                r
              );
            })(o.PureComponent));
        (0, require('amis-widget').registerRendererByType)(s, {
          type: 'react-info-card',
          usage: 'renderer',
          weight: 99,
          framework: 'react',
        });
      })(),
      n
    );
  })();
});

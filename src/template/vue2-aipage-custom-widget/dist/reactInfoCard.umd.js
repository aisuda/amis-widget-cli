/*! For license information please see reactInfoCard.umd.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.reactInfoCard = t())
    : (e.reactInfoCard = t());
})(this, function () {
  return (function () {
    var e = {
        731: function () {},
        387: function (e, t, r) {
          var n = r(731);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(534).A)('dfa2c9b2', n, !1, { sourceMap: !1 });
        },
        534: function (e, t, r) {
          'use strict';
          function n(e, t) {
            for (var r = [], n = {}, a = 0; a < t.length; a++) {
              var o = t[a],
                i = o[0],
                s = {
                  id: e + ':' + a,
                  css: o[1],
                  media: o[2],
                  sourceMap: o[3],
                };
              n[i]
                ? n[i].parts.push(s)
                : r.push((n[i] = { id: i, parts: [s] }));
            }
            return r;
          }
          r.d(t, {
            A: function () {
              return m;
            },
          });
          var a = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !a)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var o = {},
            i =
              a && (document.head || document.getElementsByTagName('head')[0]),
            s = null,
            c = 0,
            u = !1,
            d = function () {},
            l = null,
            f = 'data-vue-ssr-id',
            p =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function m(e, t, r, a) {
            (u = r), (l = a || {});
            var i = n(e, t);
            return (
              v(i),
              function (t) {
                for (var r = [], a = 0; a < i.length; a++) {
                  var s = i[a];
                  (c = o[s.id]).refs--, r.push(c);
                }
                for (
                  t ? v((i = n(e, t))) : (i = []), a = 0;
                  a < r.length;
                  a++
                ) {
                  var c;
                  if (0 === (c = r[a]).refs) {
                    for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                    delete o[c.id];
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
                for (var a = 0; a < n.parts.length; a++) n.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) n.parts.push(g(r.parts[a]));
                n.parts.length > r.parts.length &&
                  (n.parts.length = r.parts.length);
              } else {
                var i = [];
                for (a = 0; a < r.parts.length; a++) i.push(g(r.parts[a]));
                o[r.id] = { id: r.id, refs: 1, parts: i };
              }
            }
          }
          function h() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), i.appendChild(e), e;
          }
          function g(e) {
            var t,
              r,
              n = document.querySelector('style[' + f + '~="' + e.id + '"]');
            if (n) {
              if (u) return d;
              n.parentNode.removeChild(n);
            }
            if (p) {
              var a = c++;
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
              var o = document.createTextNode(a),
                i = e.childNodes;
              i[t] && e.removeChild(i[t]),
                i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
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
        var e = require('@babel/runtime/helpers/inheritsLoose'),
          t = r.n(e),
          a = require('react'),
          o = require('classnames'),
          i = r.n(o),
          s = require('aipage-widget'),
          c =
            (r(387),
            (function (e) {
              function r() {
                var t;
                return (
                  ((t = e.call(this) || this).agreeDataFormat =
                    t.agreeDataFormat.bind(t)),
                  t
                );
              }
              t()(r, e);
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
                    t = e.componentProperties,
                    r = e.id,
                    n = t || {},
                    o = n.data,
                    c = void 0 === o ? {} : o,
                    u = (n.style, (0, s.getClasses)(this.props)),
                    d = c || {},
                    l = d.title,
                    f = d.backgroundImage,
                    p = d.img_count,
                    m = d.comment_count,
                    v =
                      f ||
                      'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg';
                  return a.createElement(
                    'div',
                    { className: i()('news-card', u), 'data-component-id': r },
                    a.createElement(
                      'div',
                      { className: 'news-title' },
                      l ||
                        'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
                    ),
                    a.createElement(
                      'div',
                      { className: 'item-imgbox' },
                      a.createElement('div', {
                        className: 'news-img',
                        style: { backgroundImage: 'url(' + v + ')' },
                      }),
                      p > 0 &&
                        a.createElement('div', { className: 'img-count' }, p),
                    ),
                    a.createElement(
                      'div',
                      { className: 'news-info' },
                      a.createElement(
                        'div',
                        { className: 'left media-mark' },
                        '爱速搭 · 低代码平台',
                      ),
                      a.createElement(
                        'div',
                        { className: 'cmt-num right' },
                        this.agreeDataFormat(m) || 0,
                        ' 评',
                      ),
                    ),
                  );
                }),
                r
              );
            })(a.PureComponent));
        (0, s.registerRenderer)(c, {
          type: 'react-info-card',
          framework: 'react',
        });
      })(),
      n
    );
  })();
});

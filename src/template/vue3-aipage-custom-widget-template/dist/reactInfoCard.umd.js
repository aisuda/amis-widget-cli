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
        './src/react-widget/info-card.jsx': function (e, t, r) {
          'use strict';
          r.r(t),
            r.d(t, {
              default: function () {
                return c;
              },
            });
          var s = r('@babel/runtime/helpers/assertThisInitialized'),
            n = r.n(s),
            o = r('@babel/runtime/helpers/inheritsLoose'),
            a = r.n(o),
            i = r('react'),
            d = r('classnames'),
            l = r.n(d),
            u = r('vue3-aipage-widget'),
            c =
              (r('./src/react-widget/style.scss'),
              (function (e) {
                function t() {
                  var t;
                  return (
                    ((t = e.call(this) || this).agreeDataFormat =
                      t.agreeDataFormat.bind(n()(t))),
                    t
                  );
                }
                a()(t, e);
                var r = t.prototype;
                return (
                  (r.agreeDataFormat = function (e) {
                    return e && e <= 9999
                      ? e
                      : e && e > 9999
                      ? Math.floor(e / 1e3) / 10 + 'w'
                      : void 0;
                  }),
                  (r.render = function () {
                    var e = this.props,
                      t = e.componentProperties,
                      r = e.id,
                      s = t || {},
                      n = s.data,
                      o = void 0 === n ? {} : n,
                      a = (s.style, (0, u.getClasses)(this.props)),
                      d = o || {},
                      c = d.title,
                      f = d.backgroundImage,
                      p = d.img_count,
                      m = d.comment_count,
                      v =
                        f ||
                        'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg';
                    return i.createElement(
                      'div',
                      {
                        className: l()('news-card', a),
                        'data-component-id': r,
                      },
                      i.createElement(
                        'div',
                        { className: 'news-title' },
                        c ||
                          'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
                      ),
                      i.createElement(
                        'div',
                        { className: 'item-imgbox' },
                        i.createElement('div', {
                          className: 'news-img',
                          style: { backgroundImage: 'url(' + v + ')' },
                        }),
                        p > 0 &&
                          i.createElement('div', { className: 'img-count' }, p),
                      ),
                      i.createElement(
                        'div',
                        { className: 'news-info' },
                        i.createElement(
                          'div',
                          { className: 'left media-mark' },
                          '爱速搭 · 低代码平台',
                        ),
                        i.createElement(
                          'div',
                          { className: 'cmt-num right' },
                          this.agreeDataFormat(m) || 0,
                          ' 评',
                        ),
                      ),
                    );
                  }),
                  t
                );
              })(i.PureComponent));
        },
        './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./src/react-widget/style.scss':
          function () {},
        './src/react-widget/style.scss': function (e, t, r) {
          var s = r(
            './node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!./src/react-widget/style.scss',
          );
          s.__esModule && (s = s.default),
            'string' == typeof s && (s = [[e.id, s, '']]),
            s.locals && (e.exports = s.locals),
            (0,
            r('./node_modules/vue-style-loader/lib/addStylesClient.js')
              .default)('dfa2c9b2', s, !1, { sourceMap: !1 });
        },
        './node_modules/vue-style-loader/lib/addStylesClient.js': function (
          e,
          t,
          r,
        ) {
          'use strict';
          r.r(t),
            r.d(t, {
              default: function () {
                return m;
              },
            });
          var s = r('./node_modules/vue-style-loader/lib/listToStyles.js'),
            n = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !n)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var o = {},
            a =
              n && (document.head || document.getElementsByTagName('head')[0]),
            i = null,
            d = 0,
            l = !1,
            u = function () {},
            c = null,
            f = 'data-vue-ssr-id',
            p =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function m(e, t, r, n) {
            (l = r), (c = n || {});
            var a = (0, s.default)(e, t);
            return (
              v(a),
              function (t) {
                for (var r = [], n = 0; n < a.length; n++) {
                  var i = a[n];
                  (d = o[i.id]).refs--, r.push(d);
                }
                for (
                  t ? v((a = (0, s.default)(e, t))) : (a = []), n = 0;
                  n < r.length;
                  n++
                ) {
                  var d;
                  if (0 === (d = r[n]).refs) {
                    for (var l = 0; l < d.parts.length; l++) d.parts[l]();
                    delete o[d.id];
                  }
                }
              }
            );
          }
          function v(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                s = o[r.id];
              if (s) {
                s.refs++;
                for (var n = 0; n < s.parts.length; n++) s.parts[n](r.parts[n]);
                for (; n < r.parts.length; n++) s.parts.push(h(r.parts[n]));
                s.parts.length > r.parts.length &&
                  (s.parts.length = r.parts.length);
              } else {
                var a = [];
                for (n = 0; n < r.parts.length; n++) a.push(h(r.parts[n]));
                o[r.id] = { id: r.id, refs: 1, parts: a };
              }
            }
          }
          function g() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), a.appendChild(e), e;
          }
          function h(e) {
            var t,
              r,
              s = document.querySelector('style[' + f + '~="' + e.id + '"]');
            if (s) {
              if (l) return u;
              s.parentNode.removeChild(s);
            }
            if (p) {
              var n = d++;
              (s = i || (i = g())),
                (t = j.bind(null, s, n, !1)),
                (r = j.bind(null, s, n, !0));
            } else
              (s = g()),
                (t = x.bind(null, s)),
                (r = function () {
                  s.parentNode.removeChild(s);
                });
            return (
              t(e),
              function (s) {
                if (s) {
                  if (
                    s.css === e.css &&
                    s.media === e.media &&
                    s.sourceMap === e.sourceMap
                  )
                    return;
                  t((e = s));
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
          function j(e, t, r, s) {
            var n = r ? '' : s.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, n);
            else {
              var o = document.createTextNode(n),
                a = e.childNodes;
              a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
            }
          }
          function x(e, t) {
            var r = t.css,
              s = t.media,
              n = t.sourceMap;
            if (
              (s && e.setAttribute('media', s),
              c.ssrId && e.setAttribute(f, t.id),
              n &&
                ((r += '\n/*# sourceURL=' + n.sources[0] + ' */'),
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
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
        './node_modules/vue-style-loader/lib/listToStyles.js': function (
          e,
          t,
          r,
        ) {
          'use strict';
          function s(e, t) {
            for (var r = [], s = {}, n = 0; n < t.length; n++) {
              var o = t[n],
                a = o[0],
                i = {
                  id: e + ':' + n,
                  css: o[1],
                  media: o[2],
                  sourceMap: o[3],
                };
              s[a]
                ? s[a].parts.push(i)
                : r.push((s[a] = { id: a, parts: [i] }));
            }
            return r;
          }
          r.r(t),
            r.d(t, {
              default: function () {
                return s;
              },
            });
        },
        '@babel/runtime/helpers/assertThisInitialized': function (e) {
          'use strict';
          e.exports = require('@babel/runtime/helpers/assertThisInitialized');
        },
        '@babel/runtime/helpers/inheritsLoose': function (e) {
          'use strict';
          e.exports = require('@babel/runtime/helpers/inheritsLoose');
        },
        classnames: function (e) {
          'use strict';
          e.exports = require('classnames');
        },
        react: function (e) {
          'use strict';
          e.exports = require('react');
        },
        'vue3-aipage-widget': function (e) {
          'use strict';
          e.exports = require('vue3-aipage-widget');
        },
      },
      t = {};
    function r(s) {
      var n = t[s];
      if (void 0 !== n) return n.exports;
      var o = (t[s] = { id: s, exports: {} });
      return e[s](o, o.exports, r), o.exports;
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
        for (var s in t)
          r.o(t, s) &&
            !r.o(e, s) &&
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
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
    var s = {};
    return (
      (function () {
        'use strict';
        r.r(s);
        var e = r('./src/react-widget/info-card.jsx');
        (0, r('vue3-aipage-widget').registerRenderer)(e.default, {
          type: 'react-info-card',
          framework: 'react',
        });
      })(),
      s
    );
  })();
});

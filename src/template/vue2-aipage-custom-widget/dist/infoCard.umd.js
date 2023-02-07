/*! For license information please see infoCard.umd.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.infoCard = t())
    : (e.infoCard = t());
})(this, function () {
  return (function () {
    var e = {
        562: function () {},
        752: function (e, t, n) {
          var r = n(562);
          r.__esModule && (r = r.default),
            'string' == typeof r && (r = [[e.id, r, '']]),
            r.locals && (e.exports = r.locals),
            (0, n(346).Z)('0f10b55a', r, !1, { sourceMap: !1 });
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
            d = !1,
            u = function () {},
            p = null,
            f = 'data-vue-ssr-id',
            l =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function m(e, t, n, o) {
            (d = n), (p = o || {});
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
              r = document.querySelector('style[' + f + '~="' + e.id + '"]');
            if (r) {
              if (d) return u;
              r.parentNode.removeChild(r);
            }
            if (l) {
              var o = c++;
              (r = a || (a = h())),
                (t = _.bind(null, r, o, !1)),
                (n = _.bind(null, r, o, !0));
            } else
              (r = h()),
                (t = C.bind(null, r)),
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
          function _(e, t, n, r) {
            var o = n ? '' : r.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, o);
            else {
              var i = document.createTextNode(o),
                s = e.childNodes;
              s[t] && e.removeChild(s[t]),
                s.length ? e.insertBefore(i, s[t]) : e.appendChild(i);
            }
          }
          function C(e, t) {
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
        var e = require('aipage-widget'),
          t = function () {
            var e = this,
              t = e._self._c;
            return t('div', { staticClass: 'news-card' }, [
              t('div', { staticClass: 'news-title' }, [e._v(e._s(e.title))]),
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
                t('div', { staticClass: 'cmt-num right' }, [
                  e._v(
                    '\n      ' +
                      e._s(e.agreeDataFormat(e.comment_count) || 0) +
                      ' 评\n    ',
                  ),
                ]),
              ]),
            ]);
          };
        t._withStripped = !0;
        var o = {
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
        n(752);
        var i = (function (e, t, n, r, o, i, s, a) {
            var c,
              d = 'function' == typeof e ? e.options : e;
            if (
              (t &&
                ((d.render = t), (d.staticRenderFns = []), (d._compiled = !0)),
              (d._scopeId = 'data-v-6659d773'),
              c)
            )
              if (d.functional) {
                d._injectStyles = c;
                var u = d.render;
                d.render = function (e, t) {
                  return c.call(t), u(e, t);
                };
              } else {
                var p = d.beforeCreate;
                d.beforeCreate = p ? [].concat(p, c) : [c];
              }
            return { exports: e, options: d };
          })(o, t),
          s = i.exports;
        (0, e.registerRenderer)(s, { type: 'vue-info-card', framework: 'vue' });
      })(),
      r
    );
  })();
});

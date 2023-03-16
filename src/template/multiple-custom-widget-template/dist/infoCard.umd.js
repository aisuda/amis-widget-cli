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
        317: function () {},
        176: function (e, t, n) {
          var r = n(317);
          r.__esModule && (r = r.default),
            'string' == typeof r && (r = [[e.id, r, '']]),
            r.locals && (e.exports = r.locals),
            (0, n(346).Z)('632f244a', r, !1, { sourceMap: !1 });
        },
        346: function (e, t, n) {
          'use strict';
          function r(e, t) {
            for (var n = [], r = {}, i = 0; i < t.length; i++) {
              var o = t[i],
                s = o[0],
                a = {
                  id: e + ':' + i,
                  css: o[1],
                  media: o[2],
                  sourceMap: o[3],
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
          var i = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !i)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var o = {},
            s =
              i && (document.head || document.getElementsByTagName('head')[0]),
            a = null,
            c = 0,
            u = !1,
            d = function () {},
            f = null,
            l = 'data-vue-ssr-id',
            p =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function v(e, t, n, i) {
            (u = n), (f = i || {});
            var s = r(e, t);
            return (
              m(s),
              function (t) {
                for (var n = [], i = 0; i < s.length; i++) {
                  var a = s[i];
                  (c = o[a.id]).refs--, n.push(c);
                }
                for (
                  t ? m((s = r(e, t))) : (s = []), i = 0;
                  i < n.length;
                  i++
                ) {
                  var c;
                  if (0 === (c = n[i]).refs) {
                    for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                    delete o[c.id];
                  }
                }
              }
            );
          }
          function m(e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t],
                r = o[n.id];
              if (r) {
                r.refs++;
                for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
                for (; i < n.parts.length; i++) r.parts.push(h(n.parts[i]));
                r.parts.length > n.parts.length &&
                  (r.parts.length = n.parts.length);
              } else {
                var s = [];
                for (i = 0; i < n.parts.length; i++) s.push(h(n.parts[i]));
                o[n.id] = { id: n.id, refs: 1, parts: s };
              }
            }
          }
          function g() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), s.appendChild(e), e;
          }
          function h(e) {
            var t,
              n,
              r = document.querySelector('style[' + l + '~="' + e.id + '"]');
            if (r) {
              if (u) return d;
              r.parentNode.removeChild(r);
            }
            if (p) {
              var i = c++;
              (r = a || (a = g())),
                (t = _.bind(null, r, i, !1)),
                (n = _.bind(null, r, i, !0));
            } else
              (r = g()),
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
          var y,
            b =
              ((y = []),
              function (e, t) {
                return (y[e] = t), y.filter(Boolean).join('\n');
              });
          function _(e, t, n, r) {
            var i = n ? '' : r.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, i);
            else {
              var o = document.createTextNode(i),
                s = e.childNodes;
              s[t] && e.removeChild(s[t]),
                s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
            }
          }
          function C(e, t) {
            var n = t.css,
              r = t.media,
              i = t.sourceMap;
            if (
              (r && e.setAttribute('media', r),
              f.ssrId && e.setAttribute(l, t.id),
              i &&
                ((n += '\n/*# sourceURL=' + i.sources[0] + ' */'),
                (n +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
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
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = (t[r] = { id: r, exports: {} });
      return e[r](o, o.exports, n), o.exports;
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
        var e = require('amis-widget'),
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
            ]);
          };
        t._withStripped = !0;
        var i = {
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
            doAction: function (e, t) {
              'message' === (e ? e.actionType : '')
                ? alert('您触发了自定义组件的事件动作[message]')
                : console.log(
                    '自定义组件中监听到的事件动作：',
                    e,
                    ', 事件参数：',
                    t,
                  );
            },
          },
        };
        n(176);
        var o = (function (e, t, n, r, i, o, s, a) {
            var c,
              u = 'function' == typeof e ? e.options : e;
            if (
              (t &&
                ((u.render = t), (u.staticRenderFns = []), (u._compiled = !0)),
              o && (u._scopeId = 'data-v-' + o),
              c)
            )
              if (u.functional) {
                u._injectStyles = c;
                var d = u.render;
                u.render = function (e, t) {
                  return c.call(t), d(e, t);
                };
              } else {
                var f = u.beforeCreate;
                u.beforeCreate = f ? [].concat(f, c) : [c];
              }
            return { exports: e, options: u };
          })(i, t, 0, 0, 0, '6f393cf2'),
          s = o.exports;
        (0, e.registerRendererByType)(s, {
          type: 'vue-info-card',
          usage: 'renderer',
          weight: 99,
          framework: 'vue',
        });
      })(),
      r
    );
  })();
});

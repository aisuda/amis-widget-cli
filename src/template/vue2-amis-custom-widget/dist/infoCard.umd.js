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
        75: function () {},
        195: function (e, t, n) {
          var r = n(75);
          r.__esModule && (r = r.default),
            'string' == typeof r && (r = [[e.id, r, '']]),
            r.locals && (e.exports = r.locals),
            (0, n(346).Z)('93fb3e70', r, !1, { sourceMap: !1 });
        },
        346: function (e, t, n) {
          'use strict';
          function r(e, t) {
            for (var n = [], r = {}, i = 0; i < t.length; i++) {
              var a = t[i],
                s = a[0],
                o = {
                  id: e + ':' + i,
                  css: a[1],
                  media: a[2],
                  sourceMap: a[3],
                };
              r[s]
                ? r[s].parts.push(o)
                : n.push((r[s] = { id: s, parts: [o] }));
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
          var a = {},
            s =
              i && (document.head || document.getElementsByTagName('head')[0]),
            o = null,
            u = 0,
            l = !1,
            c = function () {},
            d = null,
            m = 'data-vue-ssr-id',
            f =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function v(e, t, n, i) {
            (l = n), (d = i || {});
            var s = r(e, t);
            return (
              p(s),
              function (t) {
                for (var n = [], i = 0; i < s.length; i++) {
                  var o = s[i];
                  (u = a[o.id]).refs--, n.push(u);
                }
                for (
                  t ? p((s = r(e, t))) : (s = []), i = 0;
                  i < n.length;
                  i++
                ) {
                  var u;
                  if (0 === (u = n[i]).refs) {
                    for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                    delete a[u.id];
                  }
                }
              }
            );
          }
          function p(e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t],
                r = a[n.id];
              if (r) {
                r.refs++;
                for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
                for (; i < n.parts.length; i++) r.parts.push(_(n.parts[i]));
                r.parts.length > n.parts.length &&
                  (r.parts.length = n.parts.length);
              } else {
                var s = [];
                for (i = 0; i < n.parts.length; i++) s.push(_(n.parts[i]));
                a[n.id] = { id: n.id, refs: 1, parts: s };
              }
            }
          }
          function h() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), s.appendChild(e), e;
          }
          function _(e) {
            var t,
              n,
              r = document.querySelector('style[' + m + '~="' + e.id + '"]');
            if (r) {
              if (l) return c;
              r.parentNode.removeChild(r);
            }
            if (f) {
              var i = u++;
              (r = o || (o = h())),
                (t = y.bind(null, r, i, !1)),
                (n = y.bind(null, r, i, !0));
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
          var g,
            b =
              ((g = []),
              function (e, t) {
                return (g[e] = t), g.filter(Boolean).join('\n');
              });
          function y(e, t, n, r) {
            var i = n ? '' : r.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, i);
            else {
              var a = document.createTextNode(i),
                s = e.childNodes;
              s[t] && e.removeChild(s[t]),
                s.length ? e.insertBefore(a, s[t]) : e.appendChild(a);
            }
          }
          function C(e, t) {
            var n = t.css,
              r = t.media,
              i = t.sourceMap;
            if (
              (r && e.setAttribute('media', r),
              d.ssrId && e.setAttribute(m, t.id),
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
      var a = (t[r] = { id: r, exports: {} });
      return e[r](a, a.exports, n), a.exports;
    }
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
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
        var e = function () {
          var e = this,
            t = e._self._c;
          return t('div', [
            t(
              'div',
              { staticClass: 'news-card' },
              [
                t('div', { staticClass: 'news-title' }, [
                  e._v('\n      ' + e._s(e.title) + '\n    '),
                ]),
                e._v(' '),
                t('div', { staticClass: 'item-imgbox' }, [
                  t('div', {
                    staticClass: 'news-img',
                    style: {
                      backgroundImage: 'url(' + e.backgroundImage + ')',
                    },
                  }),
                  e._v(' '),
                  e.img_count > 0
                    ? t('div', { staticClass: 'img-count' }, [
                        e._v('\n        ' + e._s(e.img_count) + '\n      '),
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
                          '\n        ' +
                            e._s(e.agreeDataFormat(e.comment_count)) +
                            '评\n      ',
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
            ),
            e._v(' '),
            t(
              'div',
              { staticClass: 'demo2' },
              [
                t(
                  'Link',
                  {
                    attrs: {
                      href: 'https://element.eleme.io',
                      target: '_blank',
                    },
                  },
                  [e._v('默认链接')],
                ),
                e._v(' '),
                t('Link', { attrs: { type: 'primary' } }, [e._v('主要链接')]),
                e._v(' '),
                t('Link', { attrs: { type: 'success' } }, [e._v('成功链接')]),
                e._v(' '),
                t('Link', { attrs: { type: 'warning' } }, [e._v('警告链接')]),
                e._v(' '),
                t('Link', { attrs: { type: 'danger' } }, [e._v('危险链接')]),
                e._v(' '),
                t('Link', { attrs: { type: 'info' } }, [e._v('信息链接')]),
              ],
              1,
            ),
            e._v(' '),
            t(
              'div',
              { staticClass: 'demo3' },
              [
                t(
                  'Menu',
                  {
                    staticClass: 'el-menu-vertical-demo',
                    attrs: { 'default-active': '2' },
                    on: { open: e.handleOpen, close: e.handleClose },
                  },
                  [
                    t(
                      'Submenu',
                      { attrs: { index: '1' } },
                      [
                        t('template', { slot: 'title' }, [
                          t('i', { staticClass: 'el-icon-location' }),
                          e._v(' '),
                          t('span', [e._v('导航一')]),
                        ]),
                        e._v(' '),
                        t(
                          'MenuItemGroup',
                          [
                            t('template', { slot: 'title' }, [e._v('分组一')]),
                            e._v(' '),
                            t('MenuItem', { attrs: { index: '1-1' } }, [
                              e._v('选项1'),
                            ]),
                            e._v(' '),
                            t('MenuItem', { attrs: { index: '1-2' } }, [
                              e._v('选项2'),
                            ]),
                          ],
                          2,
                        ),
                        e._v(' '),
                        t(
                          'MenuItemGroup',
                          { attrs: { title: '分组2' } },
                          [
                            t('MenuItem', { attrs: { index: '1-3' } }, [
                              e._v('选项3'),
                            ]),
                          ],
                          1,
                        ),
                        e._v(' '),
                        t(
                          'Submenu',
                          { attrs: { index: '1-4' } },
                          [
                            t('template', { slot: 'title' }, [e._v('选项4')]),
                            e._v(' '),
                            t('MenuItem', { attrs: { index: '1-4-1' } }, [
                              e._v('选项1'),
                            ]),
                          ],
                          2,
                        ),
                      ],
                      2,
                    ),
                    e._v(' '),
                    t('MenuItem', { attrs: { index: '2' } }, [
                      t('i', { staticClass: 'el-icon-menu' }),
                      e._v(' '),
                      t('span', { attrs: { slot: 'title' }, slot: 'title' }, [
                        e._v('导航二'),
                      ]),
                    ]),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ]);
        };
        (e._withStripped = !0),
          require('element-ui/lib/theme-chalk/menu-item-group.css'),
          require('element-ui/lib/theme-chalk/base.css');
        var t = require('element-ui/lib/menu-item-group'),
          i = n.n(t),
          a =
            (require('element-ui/lib/theme-chalk/menu-item.css'),
            require('element-ui/lib/menu-item')),
          s = n.n(a),
          o =
            (require('element-ui/lib/theme-chalk/submenu.css'),
            require('element-ui/lib/submenu')),
          u = n.n(o),
          l =
            (require('element-ui/lib/theme-chalk/menu.css'),
            require('element-ui/lib/menu')),
          c = n.n(l),
          d =
            (require('element-ui/lib/theme-chalk/link.css'),
            require('element-ui/lib/link')),
          m = n.n(d),
          f =
            (require('element-ui/lib/theme-chalk/rate.css'),
            require('element-ui/lib/rate')),
          v = {
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
            components: {
              Rate: n.n(f)(),
              Link: m(),
              Menu: c(),
              Submenu: u(),
              MenuItem: s(),
              MenuItemGroup: i(),
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
        n(195);
        var p = (function (e, t, n, r, i, a, s, o) {
            var u,
              l = 'function' == typeof e ? e.options : e;
            if (
              (t &&
                ((l.render = t), (l.staticRenderFns = []), (l._compiled = !0)),
              u)
            )
              if (l.functional) {
                l._injectStyles = u;
                var c = l.render;
                l.render = function (e, t) {
                  return u.call(t), c(e, t);
                };
              } else {
                var d = l.beforeCreate;
                l.beforeCreate = d ? [].concat(d, u) : [u];
              }
            return { exports: e, options: l };
          })(v, e),
          h = p.exports;
        (0, require('amis-widget').registerRendererByType)(h, {
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

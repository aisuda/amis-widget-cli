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
        858: function (e, t) {
          'use strict';
          Object.defineProperty(t, 'X', { value: !0 }),
            (t.Z = void 0),
            (t.Z = {
              props: ['componentProperties', 'id'],
              data: function () {
                return {
                  defaultFlowData: [
                    {
                      time: '2017-05-24 21:10:29',
                      desc: '',
                      highlight: !0,
                      title: '方案已确认',
                    },
                    { highlight: !0, title: '方案已更新' },
                    {
                      highlight: !0,
                      time: '2017-05-24 19:49:03',
                      desc: '测试测试测试测试测试测试测试测试测试测试测试测试测试测',
                      title: '测试标题测试标题测试标题',
                    },
                    { desc: '您以确定了方案', title: '方案已上传' },
                    {
                      time: '2017-05-24 19:49:03',
                      desc: '商家会在2个工作小时内电话联系您',
                      title: '商家已接单',
                    },
                  ],
                  line: '#0f8de8',
                  background: '#fff',
                  border: '#0f8de8',
                  highlightTitle: '#0f8de8',
                  highlightBackground: '#fff',
                  highlightBorder: '#0f8de8',
                };
              },
              computed: {
                flowData: function () {
                  return (
                    (this.componentProperties &&
                      this.componentProperties.data &&
                      this.componentProperties.data.flowData) ||
                    this.defaultFlowData
                  );
                },
                flowLength: function () {
                  return this.flowData.length;
                },
              },
            });
        },
        265: function (e, t, r) {
          'use strict';
          t.s = function (e, t, r, s, a, c) {
            return (
              (0, n.openBlock)(),
              (0, n.createElementBlock)('div', o, [
                ((0, n.openBlock)(!0),
                (0, n.createElementBlock)(
                  n.Fragment,
                  null,
                  (0, n.renderList)(c.flowData, function (e, t) {
                    return (
                      (0, n.openBlock)(),
                      (0, n.createElementBlock)(
                        'div',
                        {
                          class: (0, n.normalizeClass)([
                            'qui-flow-stack',
                            0 === t ? 'qui-flow-stack-first' : '',
                          ]),
                        },
                        [
                          (0, n.createElementVNode)(
                            'div',
                            {
                              class: (0, n.normalizeClass)([
                                'qui-flow-icon',
                                e.highlight ? 'qui-flow-icon-active' : '',
                              ]),
                              style: (0, n.normalizeStyle)({
                                backgroundColor: e.highlight
                                  ? a.highlightBackground
                                  : a.background,
                                borderColor: e.highlight
                                  ? a.highlightBorder
                                  : a.border,
                              }),
                            },
                            null,
                            6,
                          ),
                          t < c.flowLength - 1
                            ? ((0, n.openBlock)(),
                              (0, n.createElementBlock)(
                                'div',
                                {
                                  key: 0,
                                  class: 'qui-flow-line',
                                  style: (0, n.normalizeStyle)({
                                    backgroundColor: a.line,
                                  }),
                                },
                                null,
                                4,
                              ))
                            : (0, n.createCommentVNode)('v-if', !0),
                          (0, n.createElementVNode)(
                            'div',
                            {
                              class: (0, n.normalizeClass)([
                                'qui-flow-item',
                                t === c.flowLength - 1
                                  ? 'qui-flow-item-last'
                                  : '',
                              ]),
                            },
                            [
                              (0, n.createElementVNode)(
                                'div',
                                {
                                  class: 'qui-flow-title',
                                  style: (0, n.normalizeStyle)({
                                    color: e.highlight ? a.highlightTitle : '',
                                  }),
                                },
                                (0, n.toDisplayString)(e.title),
                                5,
                              ),
                              e.desc
                                ? ((0, n.openBlock)(),
                                  (0, n.createElementBlock)(
                                    'div',
                                    i,
                                    (0, n.toDisplayString)(e.desc),
                                    1,
                                  ))
                                : (0, n.createCommentVNode)('v-if', !0),
                              e.time
                                ? ((0, n.openBlock)(),
                                  (0, n.createElementBlock)(
                                    'div',
                                    l,
                                    (0, n.toDisplayString)(e.time),
                                    1,
                                  ))
                                : (0, n.createCommentVNode)('v-if', !0),
                            ],
                            2,
                          ),
                        ],
                        2,
                      )
                    );
                  }),
                  256,
                )),
              ])
            );
          };
          var n = r(734),
            o = { class: 'qui-flow' },
            i = { key: 0, class: 'qui-flow-desc' },
            l = { key: 1, class: 'qui-flow-time' };
        },
        648: function () {},
        744: function (e, t) {
          'use strict';
          t.Z = (e, t) => {
            const r = e.__vccOpts || e;
            for (const [e, n] of t) r[e] = n;
            return r;
          };
        },
        713: function (e, t, r) {
          'use strict';
          r.r(t),
            r.d(t, {
              __esModule: function () {
                return o.X;
              },
              default: function () {
                return i;
              },
            });
          var n = r(265),
            o = r(858);
          r(154);
          var i = (0, r(744).Z)(o.Z, [['render', n.s]]);
        },
        154: function (e, t, r) {
          var n = r(648);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(346).Z)('2717a868', n, !1, { sourceMap: !1 });
        },
        346: function (e, t, r) {
          'use strict';
          function n(e, t) {
            for (var r = [], n = {}, o = 0; o < t.length; o++) {
              var i = t[o],
                l = i[0],
                s = {
                  id: e + ':' + o,
                  css: i[1],
                  media: i[2],
                  sourceMap: i[3],
                };
              n[l]
                ? n[l].parts.push(s)
                : r.push((n[l] = { id: l, parts: [s] }));
            }
            return r;
          }
          r.d(t, {
            Z: function () {
              return h;
            },
          });
          var o = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !o)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var i = {},
            l =
              o && (document.head || document.getElementsByTagName('head')[0]),
            s = null,
            a = 0,
            c = !1,
            u = function () {},
            d = null,
            f = 'data-vue-ssr-id',
            p =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function h(e, t, r, o) {
            (c = r), (d = o || {});
            var l = n(e, t);
            return (
              g(l),
              function (t) {
                for (var r = [], o = 0; o < l.length; o++) {
                  var s = l[o];
                  (a = i[s.id]).refs--, r.push(a);
                }
                for (
                  t ? g((l = n(e, t))) : (l = []), o = 0;
                  o < r.length;
                  o++
                ) {
                  var a;
                  if (0 === (a = r[o]).refs) {
                    for (var c = 0; c < a.parts.length; c++) a.parts[c]();
                    delete i[a.id];
                  }
                }
              }
            );
          }
          function g(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                n = i[r.id];
              if (n) {
                n.refs++;
                for (var o = 0; o < n.parts.length; o++) n.parts[o](r.parts[o]);
                for (; o < r.parts.length; o++) n.parts.push(v(r.parts[o]));
                n.parts.length > r.parts.length &&
                  (n.parts.length = r.parts.length);
              } else {
                var l = [];
                for (o = 0; o < r.parts.length; o++) l.push(v(r.parts[o]));
                i[r.id] = { id: r.id, refs: 1, parts: l };
              }
            }
          }
          function m() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), l.appendChild(e), e;
          }
          function v(e) {
            var t,
              r,
              n = document.querySelector('style[' + f + '~="' + e.id + '"]');
            if (n) {
              if (c) return u;
              n.parentNode.removeChild(n);
            }
            if (p) {
              var o = a++;
              (n = s || (s = m())),
                (t = w.bind(null, n, o, !1)),
                (r = w.bind(null, n, o, !0));
            } else
              (n = m()),
                (t = k.bind(null, n)),
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
          function w(e, t, r, n) {
            var o = r ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, o);
            else {
              var i = document.createTextNode(o),
                l = e.childNodes;
              l[t] && e.removeChild(l[t]),
                l.length ? e.insertBefore(i, l[t]) : e.appendChild(i);
            }
          }
          function k(e, t) {
            var r = t.css,
              n = t.media,
              o = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              d.ssrId && e.setAttribute(f, t.id),
              o &&
                ((r += '\n/*# sourceURL=' + o.sources[0] + ' */'),
                (r +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
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
    function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var i = (t[n] = { id: n, exports: {} });
      return e[n](i, i.exports, r), i.exports;
    }
    return (
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
      }),
      (function () {
        'use strict';
        var e = r(880),
          t = r(581),
          n = e(r(713));
        (0, t.registerRenderer)(n.default, {
          type: 'qui-flow-card',
          framework: 'vue3',
        });
      })(),
      {}
    );
  })();
});

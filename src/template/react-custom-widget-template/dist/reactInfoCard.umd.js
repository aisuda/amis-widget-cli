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
        289: function () {},
        973: function (e, t, r) {
          var n = r(289);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, r(346).Z)('08763ba1', n, !1, { sourceMap: !1 });
        },
        346: function (e, t, r) {
          'use strict';
          function n(e, t) {
            for (var r = [], n = {}, o = 0; o < t.length; o++) {
              var i = t[o],
                s = i[0],
                a = {
                  id: e + ':' + o,
                  css: i[1],
                  media: i[2],
                  sourceMap: i[3],
                };
              n[s]
                ? n[s].parts.push(a)
                : r.push((n[s] = { id: s, parts: [a] }));
            }
            return r;
          }
          r.d(t, {
            Z: function () {
              return l;
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
            f = 'data-vue-ssr-id',
            m =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function l(e, t, r, o) {
            (u = r), (p = o || {});
            var s = n(e, t);
            return (
              h(s),
              function (t) {
                for (var r = [], o = 0; o < s.length; o++) {
                  var a = s[o];
                  (c = i[a.id]).refs--, r.push(c);
                }
                for (
                  t ? h((s = n(e, t))) : (s = []), o = 0;
                  o < r.length;
                  o++
                ) {
                  var c;
                  if (0 === (c = r[o]).refs) {
                    for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                    delete i[c.id];
                  }
                }
              }
            );
          }
          function h(e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                n = i[r.id];
              if (n) {
                n.refs++;
                for (var o = 0; o < n.parts.length; o++) n.parts[o](r.parts[o]);
                for (; o < r.parts.length; o++) n.parts.push(y(r.parts[o]));
                n.parts.length > r.parts.length &&
                  (n.parts.length = r.parts.length);
              } else {
                var s = [];
                for (o = 0; o < r.parts.length; o++) s.push(y(r.parts[o]));
                i[r.id] = { id: r.id, refs: 1, parts: s };
              }
            }
          }
          function v() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), s.appendChild(e), e;
          }
          function y(e) {
            var t,
              r,
              n = document.querySelector('style[' + f + '~="' + e.id + '"]');
            if (n) {
              if (u) return d;
              n.parentNode.removeChild(n);
            }
            if (m) {
              var o = c++;
              (n = a || (a = v())),
                (t = w.bind(null, n, o, !1)),
                (r = w.bind(null, n, o, !0));
            } else
              (n = v()),
                (t = j.bind(null, n)),
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
          var g,
            b =
              ((g = []),
              function (e, t) {
                return (g[e] = t), g.filter(Boolean).join('\n');
              });
          function w(e, t, r, n) {
            var o = r ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = b(t, o);
            else {
              var i = document.createTextNode(o),
                s = e.childNodes;
              s[t] && e.removeChild(s[t]),
                s.length ? e.insertBefore(i, s[t]) : e.appendChild(i);
            }
          }
          function j(e, t) {
            var r = t.css,
              n = t.media,
              o = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              p.ssrId && e.setAttribute(f, t.id),
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
      },
      t = {};
    function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
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
        r.r(n), require('antd/lib/empty/style/css');
        var e = require('antd/lib/empty'),
          t = r.n(e),
          o = require('@babel/runtime/helpers/assertThisInitialized'),
          i = r.n(o),
          s = require('@babel/runtime/helpers/inheritsLoose'),
          a = r.n(s),
          c = require('react'),
          u = r.n(c),
          d =
            (r(973),
            (function (e) {
              function r() {
                var t;
                return (
                  ((t = e.call(this) || this).agreeDataFormat =
                    t.agreeDataFormat.bind(i()(t))),
                  t
                );
              }
              a()(r, e);
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
                    r = e.title,
                    n = e.backgroundImage,
                    o = e.img_count,
                    i = e.comment_count,
                    s =
                      n ||
                      'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg';
                  return c.createElement(
                    'div',
                    { className: 'news-card' },
                    c.createElement(
                      'div',
                      { className: 'news-title' },
                      r ||
                        'amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。',
                    ),
                    c.createElement(
                      'div',
                      { className: 'item-imgbox' },
                      c.createElement('div', {
                        className: 'news-img',
                        style: { backgroundImage: 'url(' + s + ')' },
                      }),
                      o > 0 &&
                        c.createElement('div', { className: 'img-count' }, o),
                    ),
                    c.createElement(
                      'div',
                      { className: 'news-info' },
                      c.createElement(
                        'div',
                        { className: 'left media-mark' },
                        '爱速搭 · 低代码平台',
                      ),
                      i &&
                        i > 0 &&
                        c.createElement(
                          'div',
                          { className: 'cmt-num right' },
                          this.agreeDataFormat(i),
                          '评',
                        ),
                    ),
                    c.createElement(t(), {
                      image: t().PRESENTED_IMAGE_SIMPLE,
                      description: c.createElement(
                        c.Fragment,
                        null,
                        '暂无内容',
                      ),
                    }),
                  );
                }),
                r
              );
            })(c.PureComponent)),
          p = (require('amis-editor'), require('amis')),
          f = (require('jquery'), require('vue')),
          m = r.n(f);
        var l, h;
        function v(e) {
          if (e && ('function' == typeof e || 'object' == typeof e)) {
            class t extends u().Component {
              dom;
              instance;
              constructor(t) {
                super(t),
                  (this.domRef = this.domRef.bind(this)),
                  (this.instance = 'function' == typeof e ? new e() : e);
              }
              componentDidMount() {
                const { onMount: e } = this.instance;
                e && e.apply(this.instance, [this.props]);
              }
              componentDidUpdate(e) {
                const { onUpdate: t } = this.instance;
                t && t.apply(this.instance, [this.props, e]);
              }
              componentWillUnmount() {
                const { onUnmout: e } = this.instance;
                e && e.apply(this.instance, this.props);
              }
              domRef(e) {
                (this.instance.$root = this.dom = e), this._render();
              }
              _render() {
                if (!this.dom) return;
                let e = this.instance.template;
                'string' == typeof e
                  ? (this.dom.innerHTML = e)
                  : 'function' == typeof e &&
                    (this.dom.innerHTML = e(this.props));
              }
              render() {
                return u().createElement('div', { ref: this.domRef });
              }
            }
            return t;
          }
        }
        function y(e) {
          if (e && ('function' == typeof e || 'object' == typeof e)) {
            class t extends u().Component {
              domRef;
              vm;
              constructor(e) {
                super(e),
                  (this.domRef = u().createRef()),
                  (this.resolveAmisProps = this.resolveAmisProps.bind(this));
              }
              componentDidMount() {
                const { amisData: t, amisFunc: r } = this.resolveAmisProps(),
                  { data: n, ...o } = (e =
                    'function' == typeof e ? new e() : e);
                (this.vm = new (m())({
                  data: p.utils.extendObject(
                    t,
                    'function' == typeof n ? n() : n,
                  ),
                  ...o,
                })),
                  Object.keys(r).forEach((e) => {
                    const t = r[e];
                    this.vm.$on(
                      e,
                      (e) => t && t(...(Array.isArray(e) ? e : [e])),
                    );
                  }),
                  this.domRef.current.appendChild(this.vm.$mount().$el);
              }
              componentWillUnmount() {
                this.vm.$destroy();
              }
              resolveAmisProps() {
                let e = {},
                  t = {};
                return (
                  Object.keys(this.props).forEach((r) => {
                    const n = this.props[r];
                    'function' == typeof n ? (e[r] = n) : (t[r] = n);
                  }),
                  { amisData: t, amisFunc: e }
                );
              }
              componentDidUpdate() {
                Object.keys(this.props).forEach(
                  (e) =>
                    'function' != typeof this.props[e] &&
                    (this.vm[e] = this.props[e]),
                );
              }
              render() {
                return u().createElement('div', { ref: this.domRef });
              }
            }
            return t;
          }
        }
        !(function (e) {
          (e.renderer = 'renderer'),
            (e.formitem = 'formitem'),
            (e.options = 'options');
        })(l || (l = {})),
          (function (e) {
            (e.react = 'react'),
              (e.vue2 = 'vue2'),
              (e.vue3 = 'vue3'),
              (e.jquery = 'jquery');
          })(h || (h = {})),
          (function (e, t) {
            if (!e) return;
            const r = {
              type: '',
              usage: l.renderer,
              weight: 0,
              framework: h.react,
            };
            var n;
            if (
              (t &&
              ((n = t),
              'String' === Object.prototype.toString.call(n).slice(8, -1))
                ? Object.assign(r, { type: t })
                : Object.assign(r, t),
              r && !r.type)
            )
              console.error(
                '[amis-widget]自定义组件注册失败，自定义组件类型（type）不能为空。',
              );
            else {
              (r.type = (function (e) {
                let t = e;
                return e
                  ? (e &&
                      e.indexOf('npm-custom') < 0 &&
                      (t = `npm-custom-${e}`),
                    t)
                  : t;
              })(r.type)),
                (r.framework = (function (e) {
                  let t = h.react;
                  if (!e) return t;
                  let r = e.toLowerCase().trim();
                  switch (r) {
                    case 'jquery':
                    case 'jq':
                      r = h.jquery;
                      break;
                    case 'vue':
                    case 'vue2':
                    case 'vue 2':
                    case 'vue2.0':
                    case 'vue 2.0':
                      r = h.vue2;
                      break;
                    case 'vue3':
                    case 'vue 3':
                    case 'vue3.0':
                    case 'vue 3.0':
                      (r = h.vue3),
                        console.error(
                          'amis=widget不支持vue3.0技术栈，请改用vue3-amis-widget支持。',
                        );
                      break;
                    default:
                      r = h.react;
                  }
                  return r;
                })(r.framework)),
                (r.usage = (function (e) {
                  let t = l.renderer;
                  if (!e) return t;
                  let r = e.toLowerCase().trim();
                  switch (r) {
                    case 'renderer':
                    case 'renderers':
                    default:
                      r = l.renderer;
                      break;
                    case 'formitem':
                    case 'form-item':
                    case 'form item':
                      r = l.formitem;
                      break;
                    case 'options':
                    case 'option':
                    case 'formoption':
                    case 'form-option':
                    case 'form option':
                      r = l.options;
                  }
                  return r;
                })(r.usage));
              const t = {
                  renderer: p.Renderer,
                  formitem: p.FormItem,
                  options: p.OptionsControl,
                },
                n = { react: (e) => e, vue2: y, vue3: y, jquery: v }[
                  r.framework
                ](e);
              t[r.usage]
                ? (t[r.usage]({ type: r.type, weight: r.weight })(n),
                  console.info('注册了一个自定义amis组件:', {
                    type: r.type,
                    weight: r.weight,
                    component: n,
                    framework: r.framework,
                    usage: r.usage,
                  }))
                : console.error(
                    `[amis-widget]自定义组件注册失败，不存在${r.usage}自定义组件类型。`,
                  );
            }
          })(d, {
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

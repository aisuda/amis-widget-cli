var o1 = Object.defineProperty;
var i1 = (C, c, E) =>
  c in C
    ? o1(C, c, { enumerable: !0, configurable: !0, writable: !0, value: E })
    : (C[c] = E);
var we = (C, c, E) => (i1(C, typeof c != 'symbol' ? c + '' : c, E), E);
(function (C, c) {
  typeof exports == 'object' && typeof module < 'u'
    ? c(require('react'), require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['react', 'vue'], c)
    : ((C = typeof globalThis < 'u' ? globalThis : C || self),
      c(C.react, C.vue));
})(this, function (C, c) {
  var Ko;
  ('use strict');
  var E =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {};
  function $e(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  function Jo(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var q = Jo;
  const Zo = $e(q);
  window.uni || (window.uni = {});
  const a1 = '',
    w = Object.assign,
    Xo = Object.prototype.hasOwnProperty,
    ue = (e, t) => Xo.call(e, t),
    M = Array.isArray,
    T = (e) => typeof e == 'function',
    N = (e) => typeof e == 'string',
    Qo = (e) => e !== null && typeof e == 'object',
    ei = (e) => Qo(e) && T(e.then) && T(e.catch),
    ti = Object.prototype.toString,
    ni = (e) => ti.call(e),
    B = (e) => ni(e) === '[object Object]',
    Te = `
`,
    ri = 'UNI_LOCALE',
    oi = /^([a-z-]+:)?\/\//i,
    ii = /^data:.*,.*/,
    ai = 'onHide',
    pn = 'onThemeChange',
    si = 'onUnload',
    gn = 'onBackPress',
    ci = 'onNavigationBarChange';
  function li(e) {
    return !!e.appContext;
  }
  function it(e) {
    return e && (li(e) ? e.proxy : e);
  }
  function ui(e = '') {
    return ('' + e).replace(/[^\x00-\xff]/g, '**').length;
  }
  function mn(e) {
    return e.indexOf('/') === 0;
  }
  function at(e) {
    return mn(e) ? e : '/' + e;
  }
  function fi(e) {
    return mn(e) ? e.slice(1) : e;
  }
  const di = (e, t) => {
    let n;
    for (let r = 0; r < e.length; r++) n = e[r](t);
    return n;
  };
  function st(e, t = null) {
    let n;
    return (...r) => (e && ((n = e.apply(t, r)), (e = null)), n);
  }
  function hi(e, t) {
    (e = e || {}),
      N(t) && (t = { errMsg: t }),
      /:ok$/.test(t.errMsg)
        ? T(e.success) && e.success(t)
        : T(e.fail) && e.fail(t),
      T(e.complete) && e.complete(t);
  }
  function pi(e) {
    let t = {};
    return (
      B(e) &&
        Object.keys(e)
          .sort()
          .forEach((n) => {
            const r = n;
            t[r] = e[r];
          }),
      Object.keys(t) ? t : e
    );
  }
  function gi(e) {
    return w({}, e.dataset, e.__uniDataset);
  }
  function mi(e) {
    return { passive: e };
  }
  function bn(e) {
    try {
      return decodeURIComponent('' + e);
    } catch {}
    return '' + e;
  }
  const bi = /\+/g;
  function yi(e) {
    const t = {};
    if (e === '' || e === '?') return t;
    const r = (e[0] === '?' ? e.slice(1) : e).split('&');
    for (let o = 0; o < r.length; ++o) {
      const i = r[o].replace(bi, ' ');
      let a = i.indexOf('='),
        s = bn(a < 0 ? i : i.slice(0, a)),
        l = a < 0 ? null : bn(i.slice(a + 1));
      if (s in t) {
        let u = t[s];
        M(u) || (u = t[s] = [u]), u.push(l);
      } else t[s] = l;
    }
    return t;
  }
  function vi(e) {
    const [t, n] = e.split('?', 2);
    return { path: t, query: yi(n || '') };
  }
  class _i {
    constructor(t, n) {
      (this.id = t),
        (this.listener = {}),
        (this.emitCache = []),
        n &&
          Object.keys(n).forEach((r) => {
            this.on(r, n[r]);
          });
    }
    emit(t, ...n) {
      const r = this.listener[t];
      if (!r) return this.emitCache.push({ eventName: t, args: n });
      r.forEach((o) => {
        o.fn.apply(o.fn, n);
      }),
        (this.listener[t] = r.filter((o) => o.type !== 'once'));
    }
    on(t, n) {
      this._addListener(t, 'on', n), this._clearCache(t);
    }
    once(t, n) {
      this._addListener(t, 'once', n), this._clearCache(t);
    }
    off(t, n) {
      const r = this.listener[t];
      if (r)
        if (n)
          for (let o = 0; o < r.length; )
            r[o].fn === n && (r.splice(o, 1), o--), o++;
        else delete this.listener[t];
    }
    _clearCache(t) {
      for (let n = 0; n < this.emitCache.length; n++) {
        const r = this.emitCache[n],
          o = t ? (r.eventName === t ? t : null) : r.eventName;
        if (!o) continue;
        if (typeof this.emit.apply(this, [o, ...r.args]) == 'number') {
          this.emitCache.pop();
          continue;
        }
        this.emitCache.splice(n, 1), n--;
      }
    }
    _addListener(t, n, r) {
      (this.listener[t] || (this.listener[t] = [])).push({ fn: r, type: n });
    }
  }
  const yn = function () {};
  yn.prototype = {
    on: function (e, t, n) {
      var r = this.e || (this.e = {});
      return (r[e] || (r[e] = [])).push({ fn: t, ctx: n }), this;
    },
    once: function (e, t, n) {
      var r = this;
      function o() {
        r.off(e, o), t.apply(n, arguments);
      }
      return (o._ = t), this.on(e, o, n);
    },
    emit: function (e) {
      var t = [].slice.call(arguments, 1),
        n = ((this.e || (this.e = {}))[e] || []).slice(),
        r = 0,
        o = n.length;
      for (r; r < o; r++) n[r].fn.apply(n[r].ctx, t);
      return this;
    },
    off: function (e, t) {
      var n = this.e || (this.e = {}),
        r = n[e],
        o = [];
      if (r && t)
        for (var i = 0, a = r.length; i < a; i++)
          r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
      return o.length ? (n[e] = o) : delete n[e], this;
    },
  };
  var vn = yn;
  const _n = { black: 'rgba(0,0,0,0.4)', white: 'rgba(255,255,255,0.4)' };
  function wi(e) {
    return e && e in _n ? _n[e] : e;
  }
  function $i(e) {
    return e === 'black' ? '#000000' : '#ffffff';
  }
  function ct(e, t = {}, n = 'light') {
    const r = t[n],
      o = {};
    return r
      ? (Object.keys(e).forEach((i) => {
          let a = e[i];
          o[i] = (() => {
            if (B(a)) return ct(a, t, n);
            if (M(a)) return a.map((s) => (B(s) ? ct(s, t, n) : s));
            if (N(a) && a.startsWith('@')) {
              const s = a.replace('@', '');
              let l = r[s] || a;
              switch (i) {
                case 'titleColor':
                  l = $i(l);
                  break;
                case 'borderStyle':
                  l = wi(l);
                  break;
              }
              return l;
            }
            return a;
          })();
        }),
        o)
      : e;
  }
  const Ti = (e) => e !== null && typeof e == 'object',
    Si = ['{', '}'];
  class Ci {
    constructor() {
      this._caches = Object.create(null);
    }
    interpolate(t, n, r = Si) {
      if (!n) return [t];
      let o = this._caches[t];
      return o || ((o = Ii(t, r)), (this._caches[t] = o)), xi(o, n);
    }
  }
  const Oi = /^(?:\d)+/,
    Ai = /^(?:\w)+/;
  function Ii(e, [t, n]) {
    const r = [];
    let o = 0,
      i = '';
    for (; o < e.length; ) {
      let a = e[o++];
      if (a === t) {
        i && r.push({ type: 'text', value: i }), (i = '');
        let s = '';
        for (a = e[o++]; a !== void 0 && a !== n; ) (s += a), (a = e[o++]);
        const l = a === n,
          u = Oi.test(s) ? 'list' : l && Ai.test(s) ? 'named' : 'unknown';
        r.push({ value: s, type: u });
      } else i += a;
    }
    return i && r.push({ type: 'text', value: i }), r;
  }
  function xi(e, t) {
    const n = [];
    let r = 0;
    const o = Array.isArray(t) ? 'list' : Ti(t) ? 'named' : 'unknown';
    if (o === 'unknown') return n;
    for (; r < e.length; ) {
      const i = e[r];
      switch (i.type) {
        case 'text':
          n.push(i.value);
          break;
        case 'list':
          n.push(t[parseInt(i.value, 10)]);
          break;
        case 'named':
          o === 'named' && n.push(t[i.value]);
          break;
      }
      r++;
    }
    return n;
  }
  const fe = 'zh-Hans',
    Se = 'zh-Hant',
    R = 'en',
    lt = 'fr',
    ut = 'es',
    ki = Object.prototype.hasOwnProperty,
    wn = (e, t) => ki.call(e, t),
    Ei = new Ci();
  function Pi(e, t) {
    return !!t.find((n) => e.indexOf(n) !== -1);
  }
  function Li(e, t) {
    return t.find((n) => e.indexOf(n) === 0);
  }
  function $n(e, t) {
    if (!e) return;
    if (((e = e.trim().replace(/_/g, '-')), t && t[e])) return e;
    if (((e = e.toLowerCase()), e === 'chinese')) return fe;
    if (e.indexOf('zh') === 0)
      return e.indexOf('-hans') > -1
        ? fe
        : e.indexOf('-hant') > -1 || Pi(e, ['-tw', '-hk', '-mo', '-cht'])
        ? Se
        : fe;
    let n = [R, lt, ut];
    t && Object.keys(t).length > 0 && (n = Object.keys(t));
    const r = Li(e, n);
    if (r) return r;
  }
  class ji {
    constructor({
      locale: t,
      fallbackLocale: n,
      messages: r,
      watcher: o,
      formater: i,
    }) {
      (this.locale = R),
        (this.fallbackLocale = R),
        (this.message = {}),
        (this.messages = {}),
        (this.watchers = []),
        n && (this.fallbackLocale = n),
        (this.formater = i || Ei),
        (this.messages = r || {}),
        this.setLocale(t || R),
        o && this.watchLocale(o);
    }
    setLocale(t) {
      const n = this.locale;
      (this.locale = $n(t, this.messages) || this.fallbackLocale),
        this.messages[this.locale] || (this.messages[this.locale] = {}),
        (this.message = this.messages[this.locale]),
        n !== this.locale &&
          this.watchers.forEach((r) => {
            r(this.locale, n);
          });
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(t) {
      const n = this.watchers.push(t) - 1;
      return () => {
        this.watchers.splice(n, 1);
      };
    }
    add(t, n, r = !0) {
      const o = this.messages[t];
      o
        ? r
          ? Object.assign(o, n)
          : Object.keys(n).forEach((i) => {
              wn(o, i) || (o[i] = n[i]);
            })
        : (this.messages[t] = n);
    }
    f(t, n, r) {
      return this.formater.interpolate(t, n, r).join('');
    }
    t(t, n, r) {
      let o = this.message;
      return (
        typeof n == 'string'
          ? ((n = $n(n, this.messages)), n && (o = this.messages[n]))
          : (r = n),
        wn(o, t)
          ? this.formater.interpolate(o[t], r).join('')
          : (console.warn(
              `Cannot translate the value of keypath ${t}. Use the value of keypath as default.`,
            ),
            t)
      );
    }
  }
  function Mi() {
    return typeof uni < 'u' && Pe
      ? Pe()
      : typeof global < 'u' && global.getLocale
      ? global.getLocale()
      : R;
  }
  function Ni(e, t = {}, n, r) {
    typeof e != 'string' && ([e, t] = [t, e]),
      typeof e != 'string' && (e = Mi()),
      typeof n != 'string' &&
        (n = (typeof __uniConfig < 'u' && __uniConfig.fallbackLocale) || R);
    const o = new ji({ locale: e, fallbackLocale: n, messages: t, watcher: r });
    let i = (a, s) => (
      typeof Ve != 'function'
        ? (i = function (l, u) {
            return o.t(l, u);
          })
        : (i = function (l, u) {
            return Ve().$vm, o.t(l, u);
          }),
      i(a, s)
    );
    return {
      i18n: o,
      f(a, s, l) {
        return o.f(a, s, l);
      },
      t(a, s) {
        return i(a, s);
      },
      add(a, s, l = !0) {
        return o.add(a, s, l);
      },
      watch(a) {
        return o.watchLocale(a);
      },
      getLocale() {
        return o.getLocale();
      },
      setLocale(a) {
        return o.setLocale(a);
      },
    };
  }
  /*!
   * vue-router v4.3.2
   * (c) 2024 Eduardo San Martin Morote
   * @license MIT
   */ var Tn;
  (function (e) {
    (e.pop = 'pop'), (e.push = 'push');
  })(Tn || (Tn = {}));
  var Sn;
  (function (e) {
    (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
  })(Sn || (Sn = {}));
  const Bi = Symbol('');
  var Cn;
  (function (e) {
    (e[(e.aborted = 4)] = 'aborted'),
      (e[(e.cancelled = 8)] = 'cancelled'),
      (e[(e.duplicated = 16)] = 'duplicated');
  })(Cn || (Cn = {}));
  function Ri(e, t) {
    return e instanceof Error && Bi in e && (t == null || !!(e.type & t));
  }
  const Vi = st(
    () =>
      typeof __uniConfig < 'u' &&
      __uniConfig.locales &&
      !!Object.keys(__uniConfig.locales).length,
  );
  let de;
  function I() {
    if (!de) {
      let e;
      if (
        ((e =
          (navigator.cookieEnabled &&
            window.localStorage &&
            localStorage[ri]) ||
          __uniConfig.locale ||
          navigator.language),
        (de = Ni(e)),
        Vi())
      ) {
        const t = Object.keys(__uniConfig.locales || {});
        t.length && t.forEach((n) => de.add(n, __uniConfig.locales[n])),
          de.setLocale(e);
      }
    }
    return de;
  }
  function P(e, t, n) {
    return t.reduce((r, o, i) => ((r[e + o] = n[i]), r), {});
  }
  const Di = st(() => {
      const e = 'uni.showToast.',
        t = ['unpaired'];
      I().add(
        R,
        P(e, t, ['Please note showToast must be paired with hideToast']),
        !1,
      ),
        I().add(
          ut,
          P(e, t, [
            'Tenga en cuenta que showToast debe estar emparejado con hideToast',
          ]),
          !1,
        ),
        I().add(
          lt,
          P(e, t, [
            'Veuillez noter que showToast doit être associé à hideToast',
          ]),
          !1,
        ),
        I().add(
          fe,
          P(e, t, ['请注意 showToast 与 hideToast 必须配对使用']),
          !1,
        ),
        I().add(
          Se,
          P(e, t, ['請注意 showToast 與 hideToast 必須配對使用']),
          !1,
        );
    }),
    Hi = st(() => {
      const e = 'uni.showLoading.',
        t = ['unpaired'];
      I().add(
        R,
        P(e, t, ['Please note showLoading must be paired with hideLoading']),
        !1,
      ),
        I().add(
          ut,
          P(e, t, [
            'Tenga en cuenta que showLoading debe estar emparejado con hideLoading',
          ]),
          !1,
        ),
        I().add(
          lt,
          P(e, t, [
            'Veuillez noter que showLoading doit être associé à hideLoading',
          ]),
          !1,
        ),
        I().add(
          fe,
          P(e, t, ['请注意 showLoading 与 hideLoading 必须配对使用']),
          !1,
        ),
        I().add(
          Se,
          P(e, t, ['請注意 showLoading 與 hideLoading 必須配對使用']),
          !1,
        );
    });
  function On(e) {
    const t = new vn();
    return {
      on(n, r) {
        return t.on(n, r);
      },
      once(n, r) {
        return t.once(n, r);
      },
      off(n, r) {
        return t.off(n, r);
      },
      emit(n, ...r) {
        return t.emit(n, ...r);
      },
      subscribe(n, r, o = !1) {
        t[o ? 'once' : 'on'](`${e}.${n}`, r);
      },
      unsubscribe(n, r) {
        t.off(`${e}.${n}`, r);
      },
      subscribeHandler(n, r, o) {
        t.emit(`${e}.${n}`, r, o);
      },
    };
  }
  const ft = 'invokeViewApi',
    An = 'invokeServiceApi';
  let zi = 1;
  const Fi = w(On('service'), {
    invokeServiceMethod: (e, t, n) => {
      const { subscribe: r, publishHandler: o } = jr,
        i = n ? zi++ : 0;
      n && r(An + '.' + i, n, !0), o(An, { id: i, name: e, args: t });
    },
  });
  function qi(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  var In = ['top', 'left', 'right', 'bottom'],
    dt,
    Ce = {},
    x;
  function ht() {
    return (
      !('CSS' in window) || typeof CSS.supports != 'function'
        ? (x = '')
        : CSS.supports('top: env(safe-area-inset-top)')
        ? (x = 'env')
        : CSS.supports('top: constant(safe-area-inset-top)')
        ? (x = 'constant')
        : (x = ''),
      x
    );
  }
  function xn() {
    if (((x = typeof x == 'string' ? x : ht()), !x)) {
      In.forEach(function (s) {
        Ce[s] = 0;
      });
      return;
    }
    function e(s, l) {
      var u = s.style;
      Object.keys(l).forEach(function (h) {
        var f = l[h];
        u[h] = f;
      });
    }
    var t = [];
    function n(s) {
      s
        ? t.push(s)
        : t.forEach(function (l) {
            l();
          });
    }
    var r = !1;
    try {
      var o = Object.defineProperty({}, 'passive', {
        get: function () {
          r = { passive: !0 };
        },
      });
      window.addEventListener('test', null, o);
    } catch {}
    function i(s, l) {
      var u = document.createElement('div'),
        h = document.createElement('div'),
        f = document.createElement('div'),
        d = document.createElement('div'),
        y = 100,
        v = 1e4,
        p = {
          position: 'absolute',
          width: y + 'px',
          height: '200px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          paddingBottom: x + '(safe-area-inset-' + l + ')',
        };
      e(u, p),
        e(h, p),
        e(f, {
          transition: '0s',
          animation: 'none',
          width: '400px',
          height: '400px',
        }),
        e(d, {
          transition: '0s',
          animation: 'none',
          width: '250%',
          height: '250%',
        }),
        u.appendChild(f),
        h.appendChild(d),
        s.appendChild(u),
        s.appendChild(h),
        n(function () {
          u.scrollTop = h.scrollTop = v;
          var A = u.scrollTop,
            le = h.scrollTop;
          function Yo() {
            this.scrollTop !== (this === u ? A : le) &&
              ((u.scrollTop = h.scrollTop = v),
              (A = u.scrollTop),
              (le = h.scrollTop),
              Ui(l));
          }
          u.addEventListener('scroll', Yo, r),
            h.addEventListener('scroll', Yo, r);
        });
      var b = getComputedStyle(u);
      Object.defineProperty(Ce, l, {
        configurable: !0,
        get: function () {
          return parseFloat(b.paddingBottom);
        },
      });
    }
    var a = document.createElement('div');
    e(a, {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '0',
      height: '0',
      zIndex: '-1',
      overflow: 'hidden',
      visibility: 'hidden',
    }),
      In.forEach(function (s) {
        i(a, s);
      }),
      document.body.appendChild(a),
      n(),
      (dt = !0);
  }
  function Oe(e) {
    return dt || xn(), Ce[e];
  }
  var Ae = [];
  function Ui(e) {
    Ae.length ||
      setTimeout(function () {
        var t = {};
        Ae.forEach(function (n) {
          t[n] = Ce[n];
        }),
          (Ae.length = 0),
          Ie.forEach(function (n) {
            n(t);
          });
      }, 0),
      Ae.push(e);
  }
  var Ie = [];
  function Gi(e) {
    ht() && (dt || xn(), typeof e == 'function' && Ie.push(e));
  }
  function Wi(e) {
    var t = Ie.indexOf(e);
    t >= 0 && Ie.splice(t, 1);
  }
  var Ki = {
      get support() {
        return (typeof x == 'string' ? x : ht()).length != 0;
      },
      get top() {
        return Oe('top');
      },
      get left() {
        return Oe('left');
      },
      get right() {
        return Oe('right');
      },
      get bottom() {
        return Oe('bottom');
      },
      onChange: Gi,
      offChange: Wi,
    },
    Yi = Ki;
  const S = qi(Yi),
    pt = c.withModifiers(() => {}, ['prevent']);
  function he(e, t) {
    return parseInt((e.getPropertyValue(t).match(/\d+/) || ['0'])[0]);
  }
  function Ji() {
    const e = document.documentElement.style,
      t = he(e, '--window-top');
    return t ? t + S.top : 0;
  }
  function kn() {
    const e = document.documentElement.style,
      t = Ji(),
      n = he(e, '--window-bottom'),
      r = he(e, '--window-left'),
      o = he(e, '--window-right'),
      i = he(e, '--top-window-height');
    return {
      top: t,
      bottom: n ? n + S.bottom : 0,
      left: r ? r + S.left : 0,
      right: o ? o + S.right : 0,
      topWindowHeight: i || 0,
    };
  }
  function Zi(e) {
    return Symbol(e);
  }
  const Xi =
      'M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z',
    Qi =
      'M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM15.136 8.672h1.728q0.128 0 0.224 0.096t0.096 0.256l-0.384 10.24q0 0.064-0.048 0.112t-0.112 0.048h-1.248q-0.096 0-0.144-0.048t-0.048-0.112l-0.384-10.24q0-0.16 0.096-0.256t0.224-0.096zM16 23.328q-0.48 0-0.832-0.352t-0.352-0.848 0.352-0.848 0.832-0.352 0.832 0.352 0.352 0.848-0.352 0.848-0.832 0.352z';
  function En(e, t = '#000', n = 27) {
    return c.createVNode(
      'svg',
      { width: n, height: n, viewBox: '0 0 32 32' },
      [c.createVNode('path', { d: e, fill: t }, null, 8, ['d', 'fill'])],
      8,
      ['width', 'height'],
    );
  }
  function ea(e) {
    const t = it(e);
    if (t.$page) return t.$page.id;
    if (t.$) {
      const { $pageInstance: n } = t.$;
      return n && n.proxy.$page.id;
    }
  }
  function gt() {
    const e = Z(),
      t = e.length;
    if (t) return e[t - 1];
  }
  function Pn() {
    const e = gt();
    if (e) return e.$page.meta;
  }
  function ta() {
    const e = Pn();
    return e ? e.id : -1;
  }
  function xe() {
    const e = gt();
    if (e) return e.$vm;
  }
  const na = ['navigationBar', 'pullToRefresh'];
  function ra() {
    return JSON.parse(JSON.stringify(__uniConfig.globalStyle || {}));
  }
  function oa(e, t) {
    const n = ra(),
      r = w({ id: t }, n, e);
    na.forEach((i) => {
      r[i] = w({}, n[i], e[i]);
    });
    const { navigationBar: o } = r;
    return o.titleText && o.titleImage && (o.titleText = ''), r;
  }
  function mt(e, t, n) {
    if (N(e)) (n = t), (t = e), (e = xe());
    else if (typeof e == 'number') {
      const o = Z().find((i) => i.$page.id === e);
      o ? (e = o.$vm) : (e = xe());
    }
    if (!e) return;
    const r = e.$[t];
    return r && di(r, n);
  }
  function ia(e) {
    if (e.indexOf('/') === 0) return e;
    let t = '';
    const n = Z();
    return n.length && (t = n[n.length - 1].$page.route), bt(t, e);
  }
  function bt(e, t) {
    if (t.indexOf('/') === 0) return t;
    if (t.indexOf('./') === 0) return bt(e, t.slice(2));
    const n = t.split('/'),
      r = n.length;
    let o = 0;
    for (; o < r && n[o] === '..'; o++);
    n.splice(0, o), (t = n.join('/'));
    const i = e.length > 0 ? e.split('/') : [];
    return i.splice(i.length - o - 1, o + 1), at(i.concat(n).join('/'));
  }
  function aa(e, t = !1) {
    return t
      ? __uniRoutes.find((n) => n.path === e || n.alias === e)
      : __uniRoutes.find((n) => n.path === e);
  }
  const sa = (e, t) => k.emit('api.' + e, t);
  let Ln = 1;
  function jn(e) {
    return (e || ta()) + '.' + ft;
  }
  const ca = w(On('view'), {
    invokeOnCallback: sa,
    invokeViewMethod: (e, t, n, r) => {
      const { subscribe: o, publishHandler: i } = k,
        a = r ? Ln++ : 0;
      r && o(ft + '.' + a, r, !0), i(jn(n), { id: a, name: e, args: t }, n);
    },
    invokeViewMethodKeepAlive: (e, t, n, r) => {
      const { subscribe: o, unsubscribe: i, publishHandler: a } = k,
        s = Ln++,
        l = ft + '.' + s;
      return (
        o(l, n),
        a(jn(r), { id: s, name: e, args: t }, r),
        () => {
          i(l);
        }
      );
    },
  });
  function Mn(e) {
    return /^-?\d+[ur]px$/i.test(e)
      ? e.replace(/(^-?\d+)[ur]px$/i, (t, n) => `${Wa(parseFloat(n))}px`)
      : /^-?[\d\.]+$/.test(e)
      ? `${e}px`
      : e || '';
  }
  function la(e) {
    return e
      .replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)
      .replace('webkit', '-webkit');
  }
  function ua(e) {
    const t = [
        'matrix',
        'matrix3d',
        'scale',
        'scale3d',
        'rotate3d',
        'skew',
        'translate',
        'translate3d',
      ],
      n = [
        'scaleX',
        'scaleY',
        'scaleZ',
        'rotate',
        'rotateX',
        'rotateY',
        'rotateZ',
        'skewX',
        'skewY',
        'translateX',
        'translateY',
        'translateZ',
      ],
      r = ['opacity', 'background-color'],
      o = ['width', 'height', 'left', 'right', 'top', 'bottom'],
      i = e.animates,
      a = e.option,
      s = a.transition,
      l = {},
      u = [];
    return (
      i.forEach((h) => {
        let f = h.type,
          d = [...h.args];
        if (t.concat(n).includes(f))
          f.startsWith('rotate') || f.startsWith('skew')
            ? (d = d.map((y) => parseFloat(y) + 'deg'))
            : f.startsWith('translate') && (d = d.map(Mn)),
            n.indexOf(f) >= 0 && (d.length = 1),
            u.push(`${f}(${d.join(',')})`);
        else if (r.concat(o).includes(d[0])) {
          f = d[0];
          const y = d[1];
          l[f] = o.includes(f) ? Mn(y) : y;
        }
      }),
      (l.transform = l.webkitTransform = u.join(' ')),
      (l.transition = l.webkitTransition =
        Object.keys(l)
          .map(
            (h) => `${la(h)} ${s.duration}ms ${s.timingFunction} ${s.delay}ms`,
          )
          .join(',')),
      (l.transformOrigin = l.webkitTransformOrigin = a.transformOrigin),
      l
    );
  }
  function Nn(e) {
    const t = e.animation;
    if (!t || !t.actions || !t.actions.length) return;
    let n = 0;
    const r = t.actions,
      o = t.actions.length;
    function i() {
      const a = r[n],
        s = a.option.transition,
        l = ua(a);
      Object.keys(l).forEach((u) => {
        e.$el.style[u] = l[u];
      }),
        (n += 1),
        n < o && setTimeout(i, s.duration + s.delay);
    }
    setTimeout(() => {
      i();
    }, 0);
  }
  const fa = {
      props: ['animation'],
      watch: {
        animation: {
          deep: !0,
          handler() {
            Nn(this);
          },
        },
      },
      mounted() {
        Nn(this);
      },
    },
    yt = (e) => {
      e.__reserved = !0;
      const { props: t, mixins: n } = e;
      return (!t || !t.animation) && (n || (e.mixins = [])).push(fa), ke(e);
    },
    ke = (e) => (
      (e.__reserved = !0), (e.compatConfig = { MODE: 3 }), c.defineComponent(e)
    ),
    da = {
      hoverClass: { type: String, default: 'none' },
      hoverStopPropagation: { type: Boolean, default: !1 },
      hoverStartTime: { type: [Number, String], default: 50 },
      hoverStayTime: { type: [Number, String], default: 400 },
    };
  function Bn(e) {
    const t = c.ref(!1);
    let n = !1,
      r,
      o;
    function i() {
      requestAnimationFrame(() => {
        clearTimeout(o),
          (o = setTimeout(() => {
            t.value = !1;
          }, parseInt(e.hoverStayTime)));
      });
    }
    function a(v) {
      v.touches.length > 1 || l(v);
    }
    function s(v) {
      n || (l(v), window.addEventListener('mouseup', d));
    }
    function l(v) {
      v._hoverPropagationStopped ||
        !e.hoverClass ||
        e.hoverClass === 'none' ||
        e.disabled ||
        (e.hoverStopPropagation && (v._hoverPropagationStopped = !0),
        (n = !0),
        (r = setTimeout(() => {
          (t.value = !0), n || i();
        }, parseInt(e.hoverStartTime))));
    }
    function u() {
      f();
    }
    function h() {
      n && d();
    }
    function f() {
      (n = !1), t.value && i();
    }
    function d() {
      f(), window.removeEventListener('mouseup', d);
    }
    function y() {
      (n = !1), (t.value = !1), clearTimeout(r);
    }
    return {
      hovering: t,
      binding: {
        onTouchstartPassive: a,
        onMousedown: s,
        onTouchend: u,
        onMouseup: h,
        onTouchcancel: y,
      },
    };
  }
  function Rn(e) {
    const { base: t } = __uniConfig.router;
    return at(e).indexOf(t) === 0 ? at(e) : t + e;
  }
  function Vn(e) {
    const { base: t, assets: n } = __uniConfig.router;
    if (
      (t === './' &&
        (e.indexOf('./static/') === 0 ||
          (n && e.indexOf('./' + n + '/') === 0)) &&
        (e = e.slice(1)),
      e.indexOf('/') === 0)
    )
      if (e.indexOf('//') === 0) e = 'https:' + e;
      else return Rn(e.slice(1));
    if (oi.test(e) || ii.test(e) || e.indexOf('blob:') === 0) return e;
    const r = Z();
    return r.length ? Rn(bt(r[r.length - 1].$page.route, e).slice(1)) : e;
  }
  const O = navigator.userAgent,
    ha = /android/i.test(O),
    Dn = /iphone|ipad|ipod/i.test(O),
    vt = O.match(/Windows NT ([\d|\d.\d]*)/i),
    _t = /Macintosh|Mac/i.test(O),
    Hn = /Linux|X11/i.test(O),
    pa = _t && navigator.maxTouchPoints > 0;
  function zn() {
    return (
      /^Apple/.test(navigator.vendor) && typeof window.orientation == 'number'
    );
  }
  function Fn(e) {
    return e && Math.abs(window.orientation) === 90;
  }
  function qn(e, t) {
    return e
      ? Math[t ? 'max' : 'min'](screen.width, screen.height)
      : screen.width;
  }
  function ga(e, t) {
    return e
      ? Math[t ? 'min' : 'max'](screen.height, screen.width)
      : screen.height;
  }
  function Un(e) {
    return (
      Math.min(window.innerWidth, document.documentElement.clientWidth, e) || e
    );
  }
  function ma() {
    const e = zn(),
      t = Un(qn(e, Fn(e)));
    return {
      platform: Dn ? 'ios' : 'other',
      pixelRatio: window.devicePixelRatio,
      windowWidth: t,
    };
  }
  function L(e, t, n, r) {
    k.invokeViewMethod('video.' + e, { videoId: e, type: n, data: r }, t);
  }
  function ba(e, t, n, r, o) {
    k.invokeViewMethod('map.' + e, { type: n, data: r }, t, o);
  }
  function ya(e) {
    const t = {};
    if (
      (e.id && (t.id = ''),
      e.dataset && (t.dataset = {}),
      e.rect && ((t.left = 0), (t.right = 0), (t.top = 0), (t.bottom = 0)),
      e.size &&
        ((t.width = document.documentElement.clientWidth),
        (t.height = document.documentElement.clientHeight)),
      e.scrollOffset)
    ) {
      const n = document.documentElement,
        r = document.body;
      (t.scrollLeft = n.scrollLeft || r.scrollLeft || 0),
        (t.scrollTop = n.scrollTop || r.scrollTop || 0),
        (t.scrollHeight = n.scrollHeight || r.scrollHeight || 0),
        (t.scrollWidth = n.scrollWidth || r.scrollWidth || 0);
    }
    return t;
  }
  function wt(e, t) {
    const n = {},
      { top: r, topWindowHeight: o } = kn();
    if (
      (t.id && (n.id = e.id),
      t.dataset && (n.dataset = gi(e)),
      t.rect || t.size)
    ) {
      const i = e.getBoundingClientRect();
      t.rect &&
        ((n.left = i.left),
        (n.right = i.right),
        (n.top = i.top - r - o),
        (n.bottom = i.bottom - r - o)),
        t.size && ((n.width = i.width), (n.height = i.height));
    }
    if (
      (M(t.properties) &&
        t.properties.forEach((i) => {
          i = i.replace(/-([a-z])/g, function (a, s) {
            return s.toUpperCase();
          });
        }),
      t.scrollOffset)
    )
      if (e.tagName === 'UNI-SCROLL-VIEW') {
        const i = e.children[0].children[0];
        (n.scrollLeft = i.scrollLeft),
          (n.scrollTop = i.scrollTop),
          (n.scrollHeight = i.scrollHeight),
          (n.scrollWidth = i.scrollWidth);
      } else
        (n.scrollLeft = 0),
          (n.scrollTop = 0),
          (n.scrollHeight = 0),
          (n.scrollWidth = 0);
    if (M(t.computedStyle)) {
      const i = getComputedStyle(e);
      t.computedStyle.forEach((a) => {
        n[a] = i[a];
      });
    }
    return t.context && (n.contextInfo = nc(e)), n;
  }
  function va(e, t) {
    return e ? e.$el : t.$el;
  }
  function Gn(e, t) {
    return (
      e.matches ||
      e.matchesSelector ||
      e.mozMatchesSelector ||
      e.msMatchesSelector ||
      e.oMatchesSelector ||
      e.webkitMatchesSelector ||
      function (r) {
        const o = this.parentElement.querySelectorAll(r);
        let i = o.length;
        for (; --i >= 0 && o.item(i) !== this; );
        return i > -1;
      }
    ).call(e, t);
  }
  function _a(e, t, n, r, o) {
    const i = va(t, e),
      a = i.parentElement;
    if (!a) return r ? null : [];
    const { nodeType: s } = i,
      l = s === 3 || s === 8;
    if (r) {
      const u = l ? a.querySelector(n) : Gn(i, n) ? i : i.querySelector(n);
      return u ? wt(u, o) : null;
    } else {
      let u = [];
      const h = (l ? a : i).querySelectorAll(n);
      return (
        h &&
          h.length &&
          [].forEach.call(h, (f) => {
            u.push(wt(f, o));
          }),
        !l && Gn(i, n) && u.unshift(wt(i, o)),
        u
      );
    }
  }
  function wa(e, t, n) {
    const r = [];
    t.forEach(({ component: o, selector: i, single: a, fields: s }) => {
      o === null ? r.push(ya(s)) : r.push(_a(e, o, i, a, s));
    }),
      n(r);
  }
  const $t = [
    'GET',
    'OPTIONS',
    'HEAD',
    'POST',
    'PUT',
    'DELETE',
    'TRACE',
    'CONNECT',
    'PATCH',
  ];
  function Wn(e, t) {
    return !e || t.indexOf(e) === -1 ? t[0] : e;
  }
  function $a(e) {
    return function () {
      try {
        return e.apply(e, arguments);
      } catch (t) {
        console.error(t);
      }
    };
  }
  let Ta = 1;
  const Tt = {};
  function Sa(e, t, n, r = !1) {
    return (Tt[e] = { name: t, keepAlive: r, callback: n }), e;
  }
  function Kn(e, t, n) {
    if (typeof e == 'number') {
      const r = Tt[e];
      if (r) return r.keepAlive || delete Tt[e], r.callback(t, n);
    }
    return t;
  }
  const Ca = 'success',
    Oa = 'fail',
    Aa = 'complete';
  function Ia(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      T(r) && ((t[n] = $a(r)), delete e[n]);
    }
    return t;
  }
  function xa(e, t) {
    return !e || e.indexOf(':fail') === -1
      ? t + ':ok'
      : t + e.substring(e.indexOf(':fail'));
  }
  function ka(e, t = {}, { beforeAll: n, beforeSuccess: r } = {}) {
    B(t) || (t = {});
    const { success: o, fail: i, complete: a } = Ia(t),
      s = T(o),
      l = T(i),
      u = T(a),
      h = Ta++;
    return (
      Sa(h, e, (f) => {
        (f = f || {}),
          (f.errMsg = xa(f.errMsg, e)),
          T(n) && n(f),
          f.errMsg === e + ':ok' ? (T(r) && r(f, t), s && o(f)) : l && i(f),
          u && a(f);
      }),
      h
    );
  }
  const Ea = 'success',
    Pa = 'fail',
    La = 'complete',
    Ee = {},
    Yn = {};
  function ja(e, t) {
    return function (n) {
      return e(n, t) || n;
    };
  }
  function Jn(e, t, n) {
    let r = !1;
    for (let o = 0; o < e.length; o++) {
      const i = e[o];
      if (r) r = Promise.resolve(ja(i, n));
      else {
        const a = i(t, n);
        if ((ei(a) && (r = Promise.resolve(a)), a === !1))
          return { then() {}, catch() {} };
      }
    }
    return (
      r || {
        then(o) {
          return o(t);
        },
        catch() {},
      }
    );
  }
  function Zn(e, t = {}) {
    return (
      [Ea, Pa, La].forEach((n) => {
        const r = e[n];
        if (!M(r)) return;
        const o = t[n];
        t[n] = function (a) {
          Jn(r, a, t).then((s) => (T(o) && o(s)) || s);
        };
      }),
      t
    );
  }
  function Xn(e, t) {
    const n = [];
    M(Ee.returnValue) && n.push(...Ee.returnValue);
    const r = Yn[e];
    return (
      r && M(r.returnValue) && n.push(...r.returnValue),
      n.forEach((o) => {
        t = o(t) || t;
      }),
      t
    );
  }
  function Qn(e) {
    const t = Object.create(null);
    Object.keys(Ee).forEach((r) => {
      r !== 'returnValue' && (t[r] = Ee[r].slice());
    });
    const n = Yn[e];
    return (
      n &&
        Object.keys(n).forEach((r) => {
          r !== 'returnValue' && (t[r] = (t[r] || []).concat(n[r]));
        }),
      t
    );
  }
  function er(e, t, n, r) {
    const o = Qn(e);
    return o && Object.keys(o).length
      ? M(o.invoke)
        ? Jn(o.invoke, n).then((a) => t(Zn(Qn(e), a), ...r))
        : t(Zn(o, n), ...r)
      : t(n, ...r);
  }
  function Ma(e) {
    return !!(B(e) && [Ca, Oa, Aa].find((t) => T(e[t])));
  }
  function u1(e) {
    return e;
  }
  function tr(e, t) {
    return (n = {}, ...r) =>
      Ma(n)
        ? Xn(e, er(e, t, n, r))
        : Xn(
            e,
            new Promise((o, i) => {
              er(e, t, w(n, { success: o, fail: i }), r);
            }),
          );
  }
  function Na(e, t) {
    const n = e[0];
    if (!t || (!B(t.formatArgs) && B(n))) return;
    const r = t.formatArgs,
      o = Object.keys(r);
    for (let i = 0; i < o.length; i++) {
      const a = o[i],
        s = r[a];
      if (T(s)) {
        const l = s(e[0][a], n);
        if (N(l)) return l;
      } else ue(n, a) || (n[a] = s);
    }
  }
  function Ba(e, t, n) {
    return Kn(e, w(n || {}, { errMsg: t + ':ok' }));
  }
  function nr(e, t, n, r) {
    return Kn(e, w({ errMsg: t + ':fail' + (n ? ' ' + n : '') }, r));
  }
  function rr(e, t, n, r) {
    if (r && r.beforeInvoke) {
      const i = r.beforeInvoke(t);
      if (N(i)) return i;
    }
    const o = Na(t, r);
    if (o) return o;
  }
  function Ra(e) {
    return !e || N(e)
      ? e
      : e.stack
      ? (console.error(e.message + Te + e.stack), e.message)
      : e;
  }
  function or(e, t, n, r) {
    return (o) => {
      const i = ka(e, o, r),
        a = rr(e, [o], n, r);
      return a
        ? nr(i, e, a)
        : t(o, {
            resolve: (s) => Ba(i, e, s),
            reject: (s, l) => nr(i, e, Ra(s), l),
          });
    };
  }
  function Va(e, t, n, r) {
    return (...o) => {
      const i = rr(e, o, n, r);
      if (i) throw new Error(i);
      return t.apply(null, o);
    };
  }
  function Da(e, t, n, r) {
    return or(e, t, n, r);
  }
  function Ha(e, t, n, r) {
    return tr(e, or(e, t, void 0, r));
  }
  function V(e, t, n, r) {
    return Va(e, t, void 0, r);
  }
  function D(e, t, n, r) {
    return tr(e, Da(e, t, void 0, r));
  }
  const za = 'upx2px',
    Fa = 1e-4,
    qa = 750;
  let ir = !1,
    St = 0,
    ar = 0,
    sr = 960,
    cr = 375,
    lr = 750;
  function Ua() {
    const { platform: e, pixelRatio: t, windowWidth: n } = ma();
    (St = n), (ar = t), (ir = e === 'ios');
  }
  function Ct(e, t) {
    const n = Number(e);
    return isNaN(n) ? t : n;
  }
  function Ga() {
    const e = __uniConfig.globalStyle || {};
    (sr = Ct(e.rpxCalcMaxDeviceWidth, 960)),
      (cr = Ct(e.rpxCalcBaseDeviceWidth, 375)),
      (lr = Ct(e.rpxCalcBaseDeviceWidth, 750));
  }
  const Wa = V(za, (e, t) => {
      if ((St === 0 && (Ua(), Ga()), (e = Number(e)), e === 0)) return 0;
      let n = t || St;
      n = e === lr || n <= sr ? n : cr;
      let r = (e / qa) * n;
      return (
        r < 0 && (r = -r),
        (r = Math.floor(r + Fa)),
        r === 0 && (ar === 1 || !ir ? (r = 1) : (r = 0.5)),
        e < 0 ? -r : r
      );
    }),
    Ka = '$emit',
    Ya = new vn(),
    Ja = V(Ka, (e, ...t) => {
      Ya.emit(e, ...t);
    }),
    Za = [0.5, 0.8, 1, 1.25, 1.5, 2];
  class Xa {
    constructor(t, n) {
      (this.id = t), (this.pageId = n);
    }
    play() {
      L(this.id, this.pageId, 'play');
    }
    pause() {
      L(this.id, this.pageId, 'pause');
    }
    stop() {
      L(this.id, this.pageId, 'stop');
    }
    seek(t) {
      L(this.id, this.pageId, 'seek', { position: t });
    }
    sendDanmu(t) {
      L(this.id, this.pageId, 'sendDanmu', t);
    }
    playbackRate(t) {
      ~Za.indexOf(t) || (t = 1),
        L(this.id, this.pageId, 'playbackRate', { rate: t });
    }
    requestFullScreen(t = {}) {
      L(this.id, this.pageId, 'requestFullScreen', t);
    }
    exitFullScreen() {
      L(this.id, this.pageId, 'exitFullScreen');
    }
    showStatusBar() {
      L(this.id, this.pageId, 'showStatusBar');
    }
    hideStatusBar() {
      L(this.id, this.pageId, 'hideStatusBar');
    }
  }
  const Qa = (e, t) => {
      const n = t.errMsg || '';
      new RegExp('\\:\\s*fail').test(n)
        ? e.fail && e.fail(t)
        : e.success && e.success(t),
        e.complete && e.complete(t);
    },
    $ = (e, t, n, r) => {
      ba(e, t, n, r, (o) => {
        r && Qa(r, o);
      });
    };
  class es {
    constructor(t, n) {
      (this.id = t), (this.pageId = n);
    }
    getCenterLocation(t) {
      $(this.id, this.pageId, 'getCenterLocation', t);
    }
    moveToLocation(t) {
      $(this.id, this.pageId, 'moveToLocation', t);
    }
    getScale(t) {
      $(this.id, this.pageId, 'getScale', t);
    }
    getRegion(t) {
      $(this.id, this.pageId, 'getRegion', t);
    }
    includePoints(t) {
      $(this.id, this.pageId, 'includePoints', t);
    }
    translateMarker(t) {
      $(this.id, this.pageId, 'translateMarker', t);
    }
    $getAppMap() {}
    addCustomLayer(t) {
      $(this.id, this.pageId, 'addCustomLayer', t);
    }
    removeCustomLayer(t) {
      $(this.id, this.pageId, 'removeCustomLayer', t);
    }
    addGroundOverlay(t) {
      $(this.id, this.pageId, 'addGroundOverlay', t);
    }
    removeGroundOverlay(t) {
      $(this.id, this.pageId, 'removeGroundOverlay', t);
    }
    updateGroundOverlay(t) {
      $(this.id, this.pageId, 'updateGroundOverlay', t);
    }
    initMarkerCluster(t) {
      $(this.id, this.pageId, 'initMarkerCluster', t);
    }
    addMarkers(t) {
      $(this.id, this.pageId, 'addMarkers', t);
    }
    removeMarkers(t) {
      $(this.id, this.pageId, 'removeMarkers', t);
    }
    moveAlong(t) {
      $(this.id, this.pageId, 'moveAlong', t);
    }
    setLocMarkerIcon(t) {
      $(this.id, this.pageId, 'setLocMarkerIcon', t);
    }
    openMapApp(t) {
      $(this.id, this.pageId, 'openMapApp', t);
    }
    on(t) {
      $(this.id, this.pageId, 'on', t);
    }
  }
  function ts(e, t, n, r, o) {
    k.invokeViewMethod(`canvas.${e}`, { type: n, data: r }, t, (i) => {
      o && o(i);
    });
  }
  function ns(e, t) {
    const r = document.createElement('canvas').getContext('2d');
    return (r.font = t), r.measureText(e).width || 0;
  }
  const ur = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgrey: '#a9a9a9',
    darkgreen: '#006400',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    grey: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgrey: '#d3d3d3',
    lightgreen: '#90ee90',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
    transparent: '#00000000',
  };
  function rs(e) {
    e = e || '#000000';
    var t = null;
    if ((t = /^#([0-9|A-F|a-f]{6})$/.exec(e)) != null) {
      const r = parseInt(t[1].slice(0, 2), 16),
        o = parseInt(t[1].slice(2, 4), 16),
        i = parseInt(t[1].slice(4), 16);
      return [r, o, i, 255];
    }
    if ((t = /^#([0-9|A-F|a-f]{3})$/.exec(e)) != null) {
      let r = t[1].slice(0, 1),
        o = t[1].slice(1, 2),
        i = t[1].slice(2, 3);
      return (
        (r = parseInt(r + r, 16)),
        (o = parseInt(o + o, 16)),
        (i = parseInt(i + i, 16)),
        [r, o, i, 255]
      );
    }
    if ((t = /^rgb\((.+)\)$/.exec(e)) != null)
      return t[1]
        .split(',')
        .map(function (r) {
          return Math.min(255, parseInt(r.trim()));
        })
        .concat(255);
    if ((t = /^rgba\((.+)\)$/.exec(e)) != null)
      return t[1].split(',').map(function (r, o) {
        return o === 3
          ? Math.floor(255 * parseFloat(r.trim()))
          : Math.min(255, parseInt(r.trim()));
      });
    var n = e.toLowerCase();
    if (ue(ur, n)) {
      t = /^#([0-9|A-F|a-f]{6,8})$/.exec(ur[n]);
      const r = parseInt(t[1].slice(0, 2), 16),
        o = parseInt(t[1].slice(2, 4), 16),
        i = parseInt(t[1].slice(4, 6), 16);
      let a = parseInt(t[1].slice(6, 8), 16);
      return (a = a >= 0 ? a : 255), [r, o, i, a];
    }
    return console.error('unsupported color:' + e), [0, 0, 0, 255];
  }
  class fr {
    constructor(t, n) {
      (this.type = t), (this.data = n), (this.colorStop = []);
    }
    addColorStop(t, n) {
      this.colorStop.push([t, rs(n)]);
    }
  }
  class os {
    constructor(t, n) {
      (this.type = 'pattern'), (this.data = t), (this.colorStop = n);
    }
  }
  class is {
    constructor(t) {
      this.width = t;
    }
  }
  class as {
    constructor(t, n) {
      (this.id = t),
        (this.pageId = n),
        (this.actions = []),
        (this.path = []),
        (this.subpath = []),
        (this.drawingState = []),
        (this.state = {
          lineDash: [0, 0],
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 0,
          shadowColor: [0, 0, 0, 0],
          font: '10px sans-serif',
          fontSize: 10,
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: 'sans-serif',
        });
    }
    draw(t = !1, n) {
      var r = [...this.actions];
      (this.actions = []),
        (this.path = []),
        ts(
          this.id,
          this.pageId,
          'actionsChanged',
          { actions: r, reserve: t },
          n,
        );
    }
    createLinearGradient(t, n, r, o) {
      return new fr('linear', [t, n, r, o]);
    }
    createCircularGradient(t, n, r) {
      return new fr('radial', [t, n, r]);
    }
    createPattern(t, n) {
      if (n === void 0)
        console.error(
          "Failed to execute 'createPattern' on 'CanvasContext': 2 arguments required, but only 1 present.",
        );
      else if (['repeat', 'repeat-x', 'repeat-y', 'no-repeat'].indexOf(n) < 0)
        console.error(
          "Failed to execute 'createPattern' on 'CanvasContext': The provided type ('" +
            n +
            "') is not one of 'repeat', 'no-repeat', 'repeat-x', or 'repeat-y'.",
        );
      else return new os(t, n);
    }
    measureText(t) {
      const n = this.state.font;
      let r = 0;
      return (r = ns(t, n)), new is(r);
    }
    save() {
      this.actions.push({ method: 'save', data: [] }),
        this.drawingState.push(this.state);
    }
    restore() {
      this.actions.push({ method: 'restore', data: [] }),
        (this.state = this.drawingState.pop() || {
          lineDash: [0, 0],
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 0,
          shadowColor: [0, 0, 0, 0],
          font: '10px sans-serif',
          fontSize: 10,
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: 'sans-serif',
        });
    }
    beginPath() {
      (this.path = []),
        (this.subpath = []),
        this.path.push({ method: 'beginPath', data: [] });
    }
    moveTo(t, n) {
      this.path.push({ method: 'moveTo', data: [t, n] }),
        (this.subpath = [[t, n]]);
    }
    lineTo(t, n) {
      this.path.length === 0 && this.subpath.length === 0
        ? this.path.push({ method: 'moveTo', data: [t, n] })
        : this.path.push({ method: 'lineTo', data: [t, n] }),
        this.subpath.push([t, n]);
    }
    quadraticCurveTo(t, n, r, o) {
      this.path.push({ method: 'quadraticCurveTo', data: [t, n, r, o] }),
        this.subpath.push([r, o]);
    }
    bezierCurveTo(t, n, r, o, i, a) {
      this.path.push({ method: 'bezierCurveTo', data: [t, n, r, o, i, a] }),
        this.subpath.push([i, a]);
    }
    arc(t, n, r, o, i, a = !1) {
      this.path.push({ method: 'arc', data: [t, n, r, o, i, a] }),
        this.subpath.push([t, n]);
    }
    rect(t, n, r, o) {
      this.path.push({ method: 'rect', data: [t, n, r, o] }),
        (this.subpath = [[t, n]]);
    }
    arcTo(t, n, r, o, i) {
      this.path.push({ method: 'arcTo', data: [t, n, r, o, i] }),
        this.subpath.push([r, o]);
    }
    clip() {
      this.actions.push({ method: 'clip', data: [...this.path] });
    }
    closePath() {
      this.path.push({ method: 'closePath', data: [] }),
        this.subpath.length && (this.subpath = [this.subpath.shift()]);
    }
    clearActions() {
      (this.actions = []), (this.path = []), (this.subpath = []);
    }
    getActions() {
      var t = [...this.actions];
      return this.clearActions(), t;
    }
    set lineDashOffset(t) {
      this.actions.push({ method: 'setLineDashOffset', data: [t] });
    }
    set globalCompositeOperation(t) {
      this.actions.push({ method: 'setGlobalCompositeOperation', data: [t] });
    }
    set shadowBlur(t) {
      this.actions.push({ method: 'setShadowBlur', data: [t] });
    }
    set shadowColor(t) {
      this.actions.push({ method: 'setShadowColor', data: [t] });
    }
    set shadowOffsetX(t) {
      this.actions.push({ method: 'setShadowOffsetX', data: [t] });
    }
    set shadowOffsetY(t) {
      this.actions.push({ method: 'setShadowOffsetY', data: [t] });
    }
    set font(t) {
      var n = this;
      this.state.font = t;
      var r = t.match(/^(([\w\-]+\s)*)(\d+r?px)(\/(\d+\.?\d*(r?px)?))?\s+(.*)/);
      if (r) {
        var o = r[1].trim().split(/\s/),
          i = parseFloat(r[3]),
          a = r[7],
          s = [];
        o.forEach(function (u, h) {
          ['italic', 'oblique', 'normal'].indexOf(u) > -1
            ? (s.push({ method: 'setFontStyle', data: [u] }),
              (n.state.fontStyle = u))
            : ['bold', 'normal'].indexOf(u) > -1
            ? (s.push({ method: 'setFontWeight', data: [u] }),
              (n.state.fontWeight = u))
            : h === 0
            ? (s.push({ method: 'setFontStyle', data: ['normal'] }),
              (n.state.fontStyle = 'normal'))
            : h === 1 && l();
        }),
          o.length === 1 && l(),
          (o = s
            .map(function (u) {
              return u.data[0];
            })
            .join(' ')),
          (this.state.fontSize = i),
          (this.state.fontFamily = a),
          this.actions.push({ method: 'setFont', data: [`${o} ${i}px ${a}`] });
      } else console.warn("Failed to set 'font' on 'CanvasContext': invalid format.");
      function l() {
        s.push({ method: 'setFontWeight', data: ['normal'] }),
          (n.state.fontWeight = 'normal');
      }
    }
    get font() {
      return this.state.font;
    }
    set fillStyle(t) {
      this.setFillStyle(t);
    }
    set strokeStyle(t) {
      this.setStrokeStyle(t);
    }
    set globalAlpha(t) {
      (t = Math.floor(255 * parseFloat(t))),
        this.actions.push({ method: 'setGlobalAlpha', data: [t] });
    }
    set textAlign(t) {
      this.actions.push({ method: 'setTextAlign', data: [t] });
    }
    set lineCap(t) {
      this.actions.push({ method: 'setLineCap', data: [t] });
    }
    set lineJoin(t) {
      this.actions.push({ method: 'setLineJoin', data: [t] });
    }
    set lineWidth(t) {
      this.actions.push({ method: 'setLineWidth', data: [t] });
    }
    set miterLimit(t) {
      this.actions.push({ method: 'setMiterLimit', data: [t] });
    }
    set textBaseline(t) {
      this.actions.push({ method: 'setTextBaseline', data: [t] });
    }
  }
  let ss = 0,
    Ot = {};
  function cs(e, t, n, r) {
    const o = { options: r },
      i = r && ('success' in r || 'fail' in r || 'complete' in r);
    if (i) {
      const a = String(ss++);
      (o.callbackId = a), (Ot[a] = r);
    }
    k.invokeViewMethod(
      `editor.${e}`,
      { type: n, data: o },
      t,
      ({ callbackId: a, data: s }) => {
        i && (hi(Ot[a], s), delete Ot[a]);
      },
    );
  }
  class ls {
    constructor(t, n) {
      (this.id = t), (this.pageId = n);
    }
    format(t, n) {
      this._exec('format', { name: t, value: n });
    }
    insertDivider() {
      this._exec('insertDivider');
    }
    insertImage(t) {
      this._exec('insertImage', t);
    }
    insertText(t) {
      this._exec('insertText', t);
    }
    setContents(t) {
      this._exec('setContents', t);
    }
    getContents(t) {
      this._exec('getContents', t);
    }
    clear(t) {
      this._exec('clear', t);
    }
    removeFormat(t) {
      this._exec('removeFormat', t);
    }
    undo(t) {
      this._exec('undo', t);
    }
    redo(t) {
      this._exec('redo', t);
    }
    blur(t) {
      this._exec('blur', t);
    }
    getSelectionText(t) {
      this._exec('getSelectionText', t);
    }
    scrollIntoView(t) {
      this._exec('scrollIntoView', t);
    }
    _exec(t, n) {
      cs(this.id, this.pageId, t, n);
    }
  }
  const us = { canvas: as, map: es, video: Xa, editor: ls };
  function dr(e) {
    if (e && e.contextInfo) {
      const { id: t, type: n, page: r } = e.contextInfo,
        o = us[n];
      (e.context = new o(t, r)), delete e.contextInfo;
    }
  }
  class At {
    constructor(t, n, r, o) {
      (this._selectorQuery = t),
        (this._component = n),
        (this._selector = r),
        (this._single = o);
    }
    boundingClientRect(t) {
      return (
        this._selectorQuery._push(
          this._selector,
          this._component,
          this._single,
          { id: !0, dataset: !0, rect: !0, size: !0 },
          t,
        ),
        this._selectorQuery
      );
    }
    fields(t, n) {
      return (
        this._selectorQuery._push(
          this._selector,
          this._component,
          this._single,
          t,
          n,
        ),
        this._selectorQuery
      );
    }
    scrollOffset(t) {
      return (
        this._selectorQuery._push(
          this._selector,
          this._component,
          this._single,
          { id: !0, dataset: !0, scrollOffset: !0 },
          t,
        ),
        this._selectorQuery
      );
    }
    context(t) {
      return (
        this._selectorQuery._push(
          this._selector,
          this._component,
          this._single,
          { context: !0 },
          t,
        ),
        this._selectorQuery
      );
    }
    node(t) {
      return this._selectorQuery;
    }
  }
  class fs {
    constructor(t) {
      (this._component = void 0),
        (this._page = t),
        (this._queue = []),
        (this._queueCb = []);
    }
    exec(t) {
      return (
        wa(this._page, this._queue, (n) => {
          const r = this._queueCb;
          n.forEach((o, i) => {
            M(o) ? o.forEach(dr) : dr(o);
            const a = r[i];
            T(a) && a.call(this, o);
          }),
            T(t) && t.call(this, n);
        }),
        this._nodesRef
      );
    }
    in(t) {
      return (this._component = it(t)), this;
    }
    select(t) {
      return (this._nodesRef = new At(this, this._component, t, !0));
    }
    selectAll(t) {
      return (this._nodesRef = new At(this, this._component, t, !1));
    }
    selectViewport() {
      return (this._nodesRef = new At(this, null, '', !0));
    }
    _push(t, n, r, o, i) {
      this._queue.push({ component: n, selector: t, single: r, fields: o }),
        this._queueCb.push(i);
    }
  }
  const ds = V(
      'createSelectorQuery',
      (e) => ((e = it(e)), e && !ea(e) && (e = null), new fs(e || xe())),
    ),
    Pe = V('getLocale', () => I().getLocale()),
    hs = 'request',
    ps = { JSON: 'json' },
    gs = ['text', 'arraybuffer'],
    ms = 'text',
    hr = encodeURIComponent;
  function bs(e, t) {
    let n = e.split('#');
    const r = n[1] || '';
    n = n[0].split('?');
    let o = n[1] || '';
    e = n[0];
    const i = o.split('&').filter((s) => s),
      a = {};
    i.forEach((s) => {
      const l = s.split('=');
      a[l[0]] = l[1];
    });
    for (const s in t)
      if (ue(t, s)) {
        let l = t[s];
        typeof l > 'u' || l === null
          ? (l = '')
          : B(l) && (l = JSON.stringify(l)),
          (a[hr(s)] = hr(l));
      }
    return (
      (o = Object.keys(a)
        .map((s) => `${s}=${a[s]}`)
        .join('&')),
      e + (o ? '?' + o : '') + (r ? '#' + r : '')
    );
  }
  const ys = {
      method: String,
      data: [Object, String, Array, ArrayBuffer],
      url: { type: String, required: !0 },
      header: Object,
      dataType: String,
      responseType: String,
      withCredentials: Boolean,
    },
    vs = {
      formatArgs: {
        method(e, t) {
          t.method = Wn((e || '').toUpperCase(), $t);
        },
        data(e, t) {
          t.data = e || '';
        },
        url(e, t) {
          t.method === $t[0] &&
            B(t.data) &&
            Object.keys(t.data).length &&
            (t.url = bs(e, t.data));
        },
        header(e, t) {
          const n = (t.header = e || {});
          t.method !== $t[0] &&
            (Object.keys(n).find((r) => r.toLowerCase() === 'content-type') ||
              (n['Content-Type'] = 'application/json'));
        },
        dataType(e, t) {
          t.dataType = (e || ps.JSON).toLowerCase();
        },
        responseType(e, t) {
          (t.responseType = (e || '').toLowerCase()),
            gs.indexOf(t.responseType) === -1 && (t.responseType = ms);
        },
      },
    };
  function _s(e) {
    if (!N(e)) return e;
    const t = e.indexOf('?');
    if (t === -1) return e;
    const n = e
      .slice(t + 1)
      .trim()
      .replace(/^(\?|#|&)/, '');
    if (!n) return e;
    e = e.slice(0, t);
    const r = [];
    return (
      n.split('&').forEach((o) => {
        const i = o.replace(/\+/g, ' ').split('='),
          a = i.shift(),
          s = i.length > 0 ? i.join('=') : '';
        r.push(a + '=' + encodeURIComponent(s));
      }),
      r.length ? e + '?' + r.join('&') : e
    );
  }
  const ws = [
      'slide-in-right',
      'slide-in-left',
      'slide-in-top',
      'slide-in-bottom',
      'fade-in',
      'zoom-out',
      'zoom-fade-out',
      'pop-in',
      'none',
    ],
    $s = [
      'slide-out-right',
      'slide-out-left',
      'slide-out-top',
      'slide-out-bottom',
      'fade-out',
      'zoom-in',
      'zoom-fade-in',
      'pop-out',
      'none',
    ],
    Le = { url: { type: String, required: !0 } },
    je = 'navigateTo',
    Me = 'redirectTo',
    It = 'reLaunch',
    pe = 'switchTab',
    Ts = 'navigateBack',
    pr = 'preloadPage',
    Ss = 'unPreloadPage',
    Cs = w({}, Le, gr(ws)),
    Os = w({ delta: { type: Number } }, gr($s)),
    As = Le,
    Is = Le,
    xs = Le,
    ks = Be(je),
    Es = Be(Me),
    Ps = Be(It),
    Ls = Be(pe),
    js = {
      formatArgs: {
        delta(e, t) {
          (e = parseInt(e + '') || 1), (t.delta = Math.min(Z().length - 1, e));
        },
      },
    };
  function gr(e) {
    return {
      animationType: {
        type: String,
        validator(t) {
          if (t && e.indexOf(t) === -1)
            return (
              '`' +
              t +
              '` is not supported for `animationType` (supported values are: `' +
              e.join('`|`') +
              '`)'
            );
        },
      },
      animationDuration: { type: Number },
    };
  }
  let Ne;
  function Ms() {
    Ne = '';
  }
  function Be(e) {
    return { formatArgs: { url: Ns(e) }, beforeAll: Ms };
  }
  function Ns(e) {
    return function (n, r) {
      if (!n) return 'Missing required args: "url"';
      n = ia(n);
      const o = n.split('?')[0],
        i = aa(o, !0);
      if (!i) return 'page `' + n + '` is not found';
      if (e === je || e === Me) {
        if (i.meta.isTabBar) return `can not ${e} a tabbar page`;
      } else if (e === pe && !i.meta.isTabBar) return 'can not switch to no-tabBar page';
      if (
        ((e === pe || e === pr) &&
          i.meta.isTabBar &&
          r.openType !== 'appLaunch' &&
          (n = o),
        i.meta.isEntry && (n = n.replace(i.alias, '/')),
        (r.url = _s(n)),
        e !== Ss)
      ) {
        if (e === pr) {
          if (i.meta.isTabBar) {
            const a = Z(),
              s = i.path.slice(1);
            if (a.find((l) => l.route === s))
              return 'tabBar page `' + s + '` already exists';
          }
          return;
        }
        if (Ne === n && r.openType !== 'appLaunch') return `${Ne} locked`;
        __uniConfig.ready && (Ne = n);
      }
    };
  }
  const Bs = 'hideLoading',
    Rs = 'showLoading',
    Vs = { title: String, mask: Boolean },
    Ds = { formatArgs: { title: '', mask: !1 } },
    Hs = 'showToast',
    mr = ['success', 'loading', 'none', 'error'],
    zs = {
      title: String,
      icon: String,
      image: String,
      duration: Number,
      mask: Boolean,
    },
    Fs = {
      formatArgs: {
        title: '',
        icon(e, t) {
          t.icon = Wn(e, mr);
        },
        image(e, t) {
          e ? (t.image = Vn(e)) : (t.image = '');
        },
        duration: 1500,
        mask: !1,
      },
    },
    ge = {
      beforeInvoke() {
        const e = Pn();
        if (e && !e.isTabBar) return 'not TabBar page';
      },
      formatArgs: {
        index(e) {
          if (!__uniConfig.tabBar.list[e]) return 'tabbar item not found';
        },
      },
    };
  ge.beforeInvoke, ge.formatArgs;
  const qs = /^(linear|radial)-gradient\(.+?\);?$/;
  ge.beforeInvoke, ge.beforeInvoke, ge.formatArgs;
  const Us = mi(!0),
    br = [];
  let xt = 0,
    yr;
  const vr = (e) => br.forEach((t) => (t.userAction = e));
  function Gs(e = { userAction: !1 }) {
    yr ||
      (['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup'].forEach(
        (n) => {
          document.addEventListener(
            n,
            function () {
              !xt && vr(!0),
                xt++,
                setTimeout(() => {
                  !--xt && vr(!1);
                }, 0);
            },
            Us,
          );
        },
      ),
      (yr = !0)),
      br.push(e);
  }
  const Ws = ['navigate', 'redirect', 'switchTab', 'reLaunch', 'navigateBack'],
    Ks = [
      'slide-in-right',
      'slide-in-left',
      'slide-in-top',
      'slide-in-bottom',
      'fade-in',
      'zoom-out',
      'zoom-fade-out',
      'pop-in',
      'none',
    ],
    Ys = [
      'slide-out-right',
      'slide-out-left',
      'slide-out-top',
      'slide-out-bottom',
      'fade-out',
      'zoom-in',
      'zoom-fade-in',
      'pop-out',
      'none',
    ],
    Js = {
      hoverClass: { type: String, default: 'navigator-hover' },
      url: { type: String, default: '' },
      openType: {
        type: String,
        default: 'navigate',
        validator(e) {
          return !!~Ws.indexOf(e);
        },
      },
      delta: { type: Number, default: 1 },
      hoverStartTime: { type: [Number, String], default: 50 },
      hoverStayTime: { type: [Number, String], default: 600 },
      exists: { type: String, default: '' },
      hoverStopPropagation: { type: Boolean, default: !1 },
      animationType: {
        type: String,
        default: '',
        validator(e) {
          return !e || Ks.concat(Ys).includes(e);
        },
      },
      animationDuration: { type: [String, Number], default: 300 },
    };
  function Zs(e) {
    return () => {
      if (e.openType !== 'navigateBack' && !e.url) {
        console.error(
          '<navigator/> should have url attribute when using navigateTo, redirectTo, reLaunch or switchTab',
        );
        return;
      }
      const t = parseInt(e.animationDuration);
      switch (e.openType) {
        case 'navigate':
          Ar({
            url: e.url,
            animationType: e.animationType || 'pop-in',
            animationDuration: t,
          });
          break;
        case 'redirect':
          Ir({ url: e.url, exists: e.exists });
          break;
        case 'switchTab':
          kr({ url: e.url });
          break;
        case 'reLaunch':
          xr({ url: e.url });
          break;
        case 'navigateBack':
          Or({
            delta: e.delta,
            animationType: e.animationType || 'pop-out',
            animationDuration: t,
          });
          break;
      }
    };
  }
  w({}, Js, { renderLink: { type: Boolean, default: !0 } });
  const me = { ensp: ' ', emsp: ' ', nbsp: ' ' };
  function Xs(e, t) {
    return e
      .replace(/\\n/g, Te)
      .split(Te)
      .map((n) => Qs(n, t));
  }
  function Qs(e, { space: t, decode: n }) {
    return !e || (t && me[t] && (e = e.replace(/ /g, me[t])), !n)
      ? e
      : e
          .replace(/&nbsp;/g, me.nbsp)
          .replace(/&ensp;/g, me.ensp)
          .replace(/&emsp;/g, me.emsp)
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'");
  }
  const ec = yt({
      name: 'Text',
      props: {
        selectable: { type: [Boolean, String], default: !1 },
        space: { type: String, default: '' },
        decode: { type: [Boolean, String], default: !1 },
      },
      setup(e, { slots: t }) {
        return () => {
          const n = [];
          return (
            t.default &&
              t.default().forEach((r) => {
                if (r.shapeFlag & 8 && r.type !== c.Comment) {
                  const o = Xs(r.children, {
                      space: e.space,
                      decode: e.decode,
                    }),
                    i = o.length - 1;
                  o.forEach((a, s) => {
                    (s === 0 && !a) || n.push(c.createTextVNode(a)),
                      s !== i && n.push(c.createVNode('br'));
                  });
                } else n.push(r);
              }),
            c.createVNode(
              'uni-text',
              { selectable: e.selectable ? !0 : null },
              [c.createVNode('span', null, n)],
              8,
              ['selectable'],
            )
          );
        };
      },
    }),
    tc = yt({
      name: 'View',
      props: w({}, da),
      setup(e, { slots: t }) {
        const { hovering: n, binding: r } = Bn(e);
        return () => {
          const o = e.hoverClass;
          return o && o !== 'none'
            ? c.createVNode(
                'uni-view',
                c.mergeProps({ class: n.value ? o : '' }, r),
                [t.default && t.default()],
                16,
              )
            : c.createVNode('uni-view', null, [t.default && t.default()]);
        };
      },
    });
  function nc(e) {
    return e.__uniContextInfo;
  }
  const _r = Zi('upm');
  function rc() {
    return c.inject(_r);
  }
  function oc(e) {
    const t = ic(e);
    return c.provide(_r, t), t;
  }
  function ic(e) {
    return c.reactive(
      ac(JSON.parse(JSON.stringify(oa(__uniRoutes[0].meta, e)))),
    );
  }
  function ac(e) {
    {
      const { navigationBar: t } = e,
        { titleSize: n, titleColor: r, backgroundColor: o } = t;
      (t.titleText = t.titleText || ''),
        (t.type = t.type || 'default'),
        (t.titleSize = n || '16px'),
        (t.titleColor = r || '#000000'),
        (t.backgroundColor = o || '#F8F8F8');
    }
    return e;
  }
  function wr() {
    return (history.state && history.state.__id__) || 1;
  }
  const kt = '$$',
    J = new Map();
  function sc() {
    J.forEach((e, t) => {
      e.$.isUnmounted && J.delete(t);
    });
  }
  function Et() {
    return J;
  }
  function Z() {
    const e = [],
      t = J.values();
    for (const n of t) n.$.__isTabBar ? n.$.__isActive && e.push(n) : e.push(n);
    return e;
  }
  function cc(e) {
    const t = U.get(e);
    t && (U.delete(e), Re.pruneCacheEntry(t));
  }
  function Pt(e, t = !0) {
    const n = J.get(e);
    (n.$.__isUnload = !0), mt(n, si), J.delete(e), t && cc(e);
  }
  let lc = wr();
  function uc(e, t) {
    return { __id__: t || ++lc, __type__: e };
  }
  function fc(e, t) {
    return e + kt + t;
  }
  const U = new Map(),
    Re = {
      get(e) {
        return U.get(e);
      },
      set(e, t) {
        dc(e), U.set(e, t);
      },
      delete(e) {
        U.get(e) && U.delete(e);
      },
      forEach(e) {
        U.forEach(e);
      },
    };
  function dc(e) {
    const t = parseInt(e.split(kt)[1]);
    t &&
      Re.forEach((n, r) => {
        const o = parseInt(r.split(kt)[1]);
        o &&
          o > t &&
          (Re.delete(r), Re.pruneCacheEntry(n), c.nextTick(() => sc()));
      });
  }
  let hc;
  function Ve() {
    return hc;
  }
  const $r = '__DC_STAT_UUID',
    Tr =
      (navigator.cookieEnabled &&
        (window.localStorage || window.sessionStorage)) ||
      {};
  let X;
  function pc() {
    if (((X = X || Tr[$r]), !X)) {
      X = Date.now() + '' + Math.floor(Math.random() * 1e7);
      try {
        Tr[$r] = X;
      } catch {}
    }
    return X;
  }
  function gc() {
    const e = navigator.userAgent,
      t = e.indexOf('compatible') > -1 && e.indexOf('MSIE') > -1,
      n = e.indexOf('Edge') > -1 && !t,
      r = e.indexOf('Trident') > -1 && e.indexOf('rv:11.0') > -1;
    if (t) {
      new RegExp('MSIE (\\d+\\.\\d+);').test(e);
      const i = parseFloat(RegExp.$1);
      return i > 6 ? i : 6;
    } else return n ? -1 : r ? 11 : -1;
  }
  function Lt() {
    if (__uniConfig.darkmode !== !0)
      return N(__uniConfig.darkmode) ? __uniConfig.darkmode : 'light';
    try {
      return window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark';
    } catch {
      return 'light';
    }
  }
  function mc() {
    let e,
      t = '0',
      n = '',
      r = 'phone';
    const o = navigator.language;
    if (Dn) {
      e = 'iOS';
      const f = O.match(/OS\s([\w_]+)\slike/);
      f && (t = f[1].replace(/_/g, '.'));
      const d = O.match(/\(([a-zA-Z]+);/);
      d && (n = d[1]);
    } else if (ha) {
      e = 'Android';
      const f = O.match(/Android[\s/]([\w\.]+)[;\s]/);
      f && (t = f[1]);
      const d = O.match(/\((.+?)\)/),
        y = d ? d[1].split(';') : O.split(' '),
        v = [
          /\bAndroid\b/i,
          /\bLinux\b/i,
          /\bU\b/i,
          /^\s?[a-z][a-z]$/i,
          /^\s?[a-z][a-z]-[a-z][a-z]$/i,
          /\bwv\b/i,
          /\/[\d\.,]+$/,
          /^\s?[\d\.,]+$/,
          /\bBrowser\b/i,
          /\bMobile\b/i,
        ];
      for (let p = 0; p < y.length; p++) {
        const b = y[p];
        if (b.indexOf('Build') > 0) {
          n = b.split('Build')[0].trim();
          break;
        }
        let A;
        for (let le = 0; le < v.length; le++)
          if (v[le].test(b)) {
            A = !0;
            break;
          }
        if (!A) {
          n = b.trim();
          break;
        }
      }
    } else if (pa)
      (n = 'iPad'),
        (e = 'iOS'),
        (r = 'pad'),
        (t = T(window.BigInt) ? '14.0' : '13.0');
    else if (vt || _t || Hn) {
      (n = 'PC'), (e = 'PC'), (r = 'pc'), (t = '0');
      let f = O.match(/\((.+?)\)/)[1];
      if (vt) {
        switch (((e = 'Windows'), vt[1])) {
          case '5.1':
            t = 'XP';
            break;
          case '6.0':
            t = 'Vista';
            break;
          case '6.1':
            t = '7';
            break;
          case '6.2':
            t = '8';
            break;
          case '6.3':
            t = '8.1';
            break;
          case '10.0':
            t = '10';
            break;
        }
        const d = f && f.match(/[Win|WOW]([\d]+)/);
        d && (t += ` x${d[1]}`);
      } else if (_t) {
        e = 'macOS';
        const d = (f && f.match(/Mac OS X (.+)/)) || '';
        t &&
          ((t = d[1].replace(/_/g, '.')),
          t.indexOf(';') !== -1 && (t = t.split(';')[0]));
      } else if (Hn) {
        e = 'Linux';
        const d = (f && f.match(/Linux (.*)/)) || '';
        d && ((t = d[1]), t.indexOf(';') !== -1 && (t = t.split(';')[0]));
      }
    } else (e = 'Other'), (t = '0'), (r = 'unknown');
    const i = `${e} ${t}`,
      a = e.toLocaleLowerCase();
    let s = '',
      l = String(gc());
    if (l !== '-1') s = 'IE';
    else {
      const f = ['Version', 'Firefox', 'Chrome', 'Edge{0,1}'],
        d = ['Safari', 'Firefox', 'Chrome', 'Edge'];
      for (let y = 0; y < f.length; y++) {
        const v = f[y],
          p = new RegExp(`(${v})/(\\S*)\\b`);
        p.test(O) && ((s = d[y]), (l = O.match(p)[2]));
      }
    }
    let u = 'portrait';
    const h =
      typeof window.screen.orientation > 'u'
        ? window.orientation
        : window.screen.orientation.angle;
    return (
      (u = Math.abs(h) === 90 ? 'landscape' : 'portrait'),
      {
        deviceBrand: void 0,
        brand: void 0,
        deviceModel: n,
        deviceOrientation: u,
        model: n,
        system: i,
        platform: a,
        browserName: s.toLocaleLowerCase(),
        browserVersion: l,
        language: o,
        deviceType: r,
        ua: O,
        osname: e,
        osversion: t,
        theme: Lt(),
      }
    );
  }
  const bc = V('getWindowInfo', () => {
    const e = window.devicePixelRatio,
      t = zn(),
      n = Fn(t),
      r = qn(t, n),
      o = ga(t, n),
      i = Un(r);
    let a = window.innerHeight;
    const s = S.top,
      l = {
        left: S.left,
        right: i - S.right,
        top: S.top,
        bottom: a - S.bottom,
        width: i - S.left - S.right,
        height: a - S.top - S.bottom,
      },
      { top: u, bottom: h } = kn();
    return (
      (a -= u),
      (a -= h),
      {
        windowTop: u,
        windowBottom: h,
        windowWidth: i,
        windowHeight: a,
        pixelRatio: e,
        screenWidth: r,
        screenHeight: o,
        statusBarHeight: s,
        safeArea: l,
        safeAreaInsets: {
          top: S.top,
          right: S.right,
          bottom: S.bottom,
          left: S.left,
        },
        screenTop: o - a,
      }
    );
  });
  let De,
    He = !0;
  function jt() {
    He && (De = mc());
  }
  const yc = V('getDeviceInfo', () => {
      jt();
      const {
        deviceBrand: e,
        deviceModel: t,
        brand: n,
        model: r,
        platform: o,
        system: i,
        deviceOrientation: a,
        deviceType: s,
      } = De;
      return {
        brand: n,
        deviceBrand: e,
        deviceModel: t,
        devicePixelRatio: window.devicePixelRatio,
        deviceId: pc(),
        deviceOrientation: a,
        deviceType: s,
        model: r,
        platform: o,
        system: i,
      };
    }),
    vc = V('getAppBaseInfo', () => {
      jt();
      const { theme: e, language: t, browserName: n, browserVersion: r } = De;
      return {
        appId: __uniConfig.appId,
        appName: __uniConfig.appName,
        appVersion: __uniConfig.appVersion,
        appVersionCode: __uniConfig.appVersionCode,
        appLanguage: Pe ? Pe() : t,
        enableDebug: !1,
        hostSDKVersion: void 0,
        hostPackageName: void 0,
        hostFontSizeSetting: void 0,
        hostName: n,
        hostVersion: r,
        hostTheme: e,
        hostLanguage: t,
        language: t,
        SDKVersion: '',
        theme: e,
        version: '',
      };
    }),
    Sr = V('getSystemInfoSync', () => {
      (He = !0), jt(), (He = !1);
      const e = bc(),
        t = yc(),
        n = vc();
      He = !0;
      const {
          ua: r,
          browserName: o,
          browserVersion: i,
          osname: a,
          osversion: s,
        } = De,
        l = w(e, t, n, {
          ua: r,
          browserName: o,
          browserVersion: i,
          uniPlatform: 'web',
          uniCompileVersion: __uniConfig.compilerVersion,
          uniRuntimeVersion: __uniConfig.compilerVersion,
          fontSizeSetting: void 0,
          osName: a.toLocaleLowerCase(),
          osVersion: s,
          osLanguage: void 0,
          osTheme: void 0,
        });
      return (
        delete l.screenTop,
        delete l.enableDebug,
        __uniConfig.darkmode || delete l.theme,
        pi(l)
      );
    });
  Gs();
  const Cr = { esc: ['Esc', 'Escape'], enter: ['Enter'] },
    _c = Object.keys(Cr);
  function wc() {
    const e = c.ref(''),
      t = c.ref(!1),
      n = (r) => {
        if (t.value) return;
        const o = _c.find((i) => Cr[i].indexOf(r.key) !== -1);
        o && (e.value = o), c.nextTick(() => (e.value = ''));
      };
    return (
      c.onMounted(() => {
        document.addEventListener('keyup', n);
      }),
      c.onBeforeUnmount(() => {
        document.removeEventListener('keyup', n);
      }),
      { key: e, disable: t }
    );
  }
  function $c(e, t, n) {
    return (
      (t.onClose = (...r) => ((t.visible = !1), n.apply(null, r))),
      c.createApp(
        c.defineComponent({
          setup() {
            return () => (c.openBlock(), c.createBlock(e, t, null, 16));
          },
        }),
      )
    );
  }
  function Tc(e) {
    let t = document.getElementById(e);
    return (
      t ||
        ((t = document.createElement('div')),
        (t.id = e),
        document.body.append(t)),
      t
    );
  }
  function Sc(e, { onEsc: t, onEnter: n }) {
    const r = c.ref(e.visible),
      { key: o, disable: i } = wc();
    return (
      c.watch(
        () => e.visible,
        (a) => (r.value = a),
      ),
      c.watch(
        () => r.value,
        (a) => (i.value = !a),
      ),
      c.watchEffect(() => {
        const { value: a } = o;
        a === 'esc' ? t && t() : a === 'enter' && n && n();
      }),
      r
    );
  }
  const Cc = Ha(
    hs,
    (
      {
        url: e,
        data: t,
        header: n,
        method: r,
        dataType: o,
        responseType: i,
        withCredentials: a,
        timeout: s = __uniConfig.networkTimeout.request,
      },
      { resolve: l, reject: u },
    ) => {
      let h = null;
      const f = Oc(n);
      if (r !== 'GET')
        if (N(t) || t instanceof ArrayBuffer) h = t;
        else if (f === 'json')
          try {
            h = JSON.stringify(t);
          } catch {
            h = t.toString();
          }
        else if (f === 'urlencoded') {
          const p = [];
          for (const b in t)
            ue(t, b) &&
              p.push(encodeURIComponent(b) + '=' + encodeURIComponent(t[b]));
          h = p.join('&');
        } else h = t.toString();
      const d = new XMLHttpRequest(),
        y = new Ac(d);
      d.open(r, e);
      for (const p in n) ue(n, p) && d.setRequestHeader(p, n[p]);
      const v = setTimeout(function () {
        (d.onload = d.onabort = d.onerror = null), y.abort(), u('timeout');
      }, s);
      return (
        (d.responseType = i),
        (d.onload = function () {
          clearTimeout(v);
          const p = d.status;
          let b = i === 'text' ? d.responseText : d.response;
          if (i === 'text' && o === 'json')
            try {
              b = JSON.parse(b);
            } catch {}
          l({
            data: b,
            statusCode: p,
            header: Ic(d.getAllResponseHeaders()),
            cookies: [],
          });
        }),
        (d.onabort = function () {
          clearTimeout(v), u('abort');
        }),
        (d.onerror = function () {
          clearTimeout(v), u();
        }),
        (d.withCredentials = a),
        d.send(h),
        y
      );
    },
    ys,
    vs,
  );
  function Oc(e) {
    const t = Object.keys(e).find((r) => r.toLowerCase() === 'content-type');
    if (!t) return;
    const n = e[t];
    return n.indexOf('application/json') === 0
      ? 'json'
      : n.indexOf('application/x-www-form-urlencoded') === 0
      ? 'urlencoded'
      : 'string';
  }
  class Ac {
    constructor(t) {
      this._xhr = t;
    }
    abort() {
      this._xhr && (this._xhr.abort(), delete this._xhr);
    }
    onHeadersReceived(t) {
      throw new Error('Method not implemented.');
    }
    offHeadersReceived(t) {
      throw new Error('Method not implemented.');
    }
  }
  function Ic(e) {
    const t = {};
    return (
      e.split(Te).forEach((n) => {
        const r = n.match(/(\S+\s*):\s*(.*)/);
        !r || r.length !== 3 || (t[r[1]] = r[2]);
      }),
      t
    );
  }
  const Or = D(
    Ts,
    (e, { resolve: t, reject: n }) => {
      let r = !0;
      return (
        mt(gn, { from: e.from || 'navigateBack' }) === !0 && (r = !1),
        r ? (Ve().$router.go(-e.delta), t()) : n(gn)
      );
    },
    Os,
    js,
  );
  function ze({ type: e, url: t, tabBarText: n, events: r }, o) {
    const i = Ve().$router,
      { path: a, query: s } = vi(t);
    return new Promise((l, u) => {
      const h = uc(e, o);
      i[e === 'navigateTo' ? 'push' : 'replace']({
        path: a,
        query: s,
        state: h,
        force: !0,
      }).then((f) => {
        if (Ri(f)) return u(f.message);
        if (
          (e === 'switchTab' && (i.currentRoute.value.meta.tabBarText = n),
          e === 'navigateTo')
        ) {
          const d = i.currentRoute.value.meta;
          return (
            d.eventChannel || (d.eventChannel = new _i(h.__id__, r)),
            l({ eventChannel: d.eventChannel })
          );
        }
        return l();
      });
    });
  }
  const Ar = D(
    je,
    ({ url: e, events: t }, { resolve: n, reject: r }) =>
      ze({ type: je, url: e, events: t }).then(n).catch(r),
    Cs,
    ks,
  );
  function xc() {
    const e = gt();
    if (!e) return;
    const t = e.$page;
    Pt(fc(t.path, t.id));
  }
  const Ir = D(
    Me,
    ({ url: e }, { resolve: t, reject: n }) => (
      xc(), ze({ type: Me, url: e }).then(t).catch(n)
    ),
    As,
    Es,
  );
  function kc() {
    const e = Et().keys();
    for (const t of e) Pt(t);
  }
  const xr = D(
    It,
    ({ url: e }, { resolve: t, reject: n }) => (
      kc(), ze({ type: It, url: e }).then(t).catch(n)
    ),
    Is,
    Ps,
  );
  function Ec() {
    const e = xe();
    if (!e) return;
    const t = Et(),
      n = t.keys();
    for (const r of n) {
      const o = t.get(r);
      o.$.__isTabBar ? (o.$.__isActive = !1) : Pt(r);
    }
    e.$.__isTabBar && ((e.$.__isVisible = !1), mt(e, ai));
  }
  function Pc(e, t) {
    return e === t.fullPath || (e === '/' && t.meta.isEntry);
  }
  function Lc(e) {
    const t = Et().values();
    for (const n of t) {
      const r = n.$page;
      if (Pc(e, r)) return (n.$.__isActive = !0), r.id;
    }
  }
  const kr = D(
    pe,
    ({ url: e, tabBarText: t }, { resolve: n, reject: r }) => (
      Ec(), ze({ type: pe, url: e, tabBarText: t }, Lc(e)).then(n).catch(r)
    ),
    xs,
    Ls,
  );
  function Er(e) {
    __uniConfig.darkmode && k.on(pn, e);
  }
  function jc(e) {
    k.off(pn, e);
  }
  function Fe(e) {
    let t = {};
    return (
      __uniConfig.darkmode && (t = ct(e, __uniConfig.themeConfig, Lt())),
      __uniConfig.darkmode ? t : e
    );
  }
  function Mc(e, t) {
    const n = c.isReactive(e),
      r = n ? c.reactive(Fe(e)) : Fe(e);
    return (
      __uniConfig.darkmode &&
        n &&
        c.watch(e, (o) => {
          const i = Fe(o);
          for (const a in i) r[a] = i[a];
        }),
      t && Er(t),
      r
    );
  }
  const Nc = {
      title: { type: String, default: '' },
      icon: {
        default: 'success',
        validator(e) {
          return mr.indexOf(e) !== -1;
        },
      },
      image: { type: String, default: '' },
      duration: { type: Number, default: 1500 },
      mask: { type: Boolean, default: !1 },
      visible: { type: Boolean },
    },
    qe = 'uni-toast__icon',
    Bc = { light: '#fff', dark: 'rgba(255,255,255,0.9)' },
    Pr = (e) => Bc[e],
    Rc = c.defineComponent({
      name: 'Toast',
      props: Nc,
      setup(e) {
        Di(), Hi();
        const { Icon: t } = Vc(e),
          n = Sc(e, {});
        return () => {
          const { mask: r, duration: o, title: i, image: a } = e;
          return c.createVNode(
            c.Transition,
            { name: 'uni-fade' },
            {
              default: () => [
                c.withDirectives(
                  c.createVNode(
                    'uni-toast',
                    { 'data-duration': o },
                    [
                      r
                        ? c.createVNode(
                            'div',
                            {
                              class: 'uni-mask',
                              style: 'background: transparent;',
                              onTouchmove: pt,
                            },
                            null,
                            40,
                            ['onTouchmove'],
                          )
                        : '',
                      !a && !t.value
                        ? c.createVNode('div', { class: 'uni-sample-toast' }, [
                            c.createVNode(
                              'p',
                              { class: 'uni-simple-toast__text' },
                              [i],
                            ),
                          ])
                        : c.createVNode('div', { class: 'uni-toast' }, [
                            a
                              ? c.createVNode(
                                  'img',
                                  { src: a, class: qe },
                                  null,
                                  10,
                                  ['src'],
                                )
                              : t.value,
                            c.createVNode(
                              'p',
                              { class: 'uni-toast__content' },
                              [i],
                            ),
                          ]),
                    ],
                    8,
                    ['data-duration'],
                  ),
                  [[c.vShow, n.value]],
                ),
              ],
            },
          );
        };
      },
    });
  function Vc(e) {
    const t = c.ref(Pr(Lt())),
      n = ({ theme: o }) => (t.value = Pr(o));
    return (
      c.watchEffect(() => {
        e.visible ? Er(n) : jc(n);
      }),
      {
        Icon: c.computed(() => {
          switch (e.icon) {
            case 'success':
              return c.createVNode(En(Xi, t.value, 38), { class: qe });
            case 'error':
              return c.createVNode(En(Qi, t.value, 38), { class: qe });
            case 'loading':
              return c.createVNode(
                'i',
                { class: [qe, 'uni-loading'] },
                null,
                2,
              );
            default:
              return null;
          }
        }),
      }
    );
  }
  let H,
    G = '',
    be;
  const Dc = c.effectScope();
  function Hc() {
    Dc.run(() => {
      c.watch([() => H.visible, () => H.duration], ([e, t]) => {
        if (e) {
          if ((be && clearTimeout(be), G === 'onShowLoading')) return;
          be = setTimeout(() => {
            Mt('onHideToast');
          }, t);
        } else be && clearTimeout(be);
      });
    });
  }
  function Lr(e) {
    H
      ? w(H, e)
      : ((H = c.reactive(w(e, { visible: !1 }))),
        c.nextTick(() => {
          Hc(),
            k.on('onHidePopup', () => Mt('onHidePopup')),
            $c(Rc, H, () => {}).mount(Tc('u-a-t'));
        })),
      setTimeout(() => {
        H.visible = !0;
      }, 10);
  }
  const zc = D(
      Hs,
      (e, { resolve: t, reject: n }) => {
        Lr(e), (G = 'onShowToast'), t();
      },
      zs,
      Fs,
    ),
    Fc = { icon: 'loading', duration: 1e8, image: '' },
    qc = D(
      Rs,
      (e, { resolve: t, reject: n }) => {
        w(e, Fc), Lr(e), (G = 'onShowLoading'), t();
      },
      Vs,
      Ds,
    ),
    Uc = D(Bs, (e, { resolve: t, reject: n }) => {
      Mt('onHideLoading'), t();
    });
  function Mt(e) {
    const { t } = I();
    if (!G) return;
    let n = '';
    if (
      (e === 'onHideToast' && G !== 'onShowToast'
        ? (n = t('uni.showToast.unpaired'))
        : e === 'onHideLoading' &&
          G !== 'onShowLoading' &&
          (n = t('uni.showLoading.unpaired')),
      n)
    )
      return console.warn(n);
    (G = ''),
      setTimeout(() => {
        H.visible = !1;
      }, 10);
  }
  function Gc(e) {
    (document.title = e), k.emit(ci, { titleText: e });
  }
  function Wc(e) {
    function t() {
      Gc(e.navigationBar.titleText);
    }
    c.watchEffect(t), c.onActivated(t);
  }
  const jr = w(Fi, {
      publishHandler(e, t, n) {
        k.subscribeHandler(e, t, n);
      },
    }),
    k = w(ca, {
      publishHandler(e, t, n) {
        jr.subscribeHandler(e, t, n);
      },
    }),
    Kc = ke({
      name: 'PageHead',
      setup() {
        const e = c.ref(null),
          t = rc(),
          n = Mc(t.navigationBar, () => {
            const i = Fe(t.navigationBar);
            (n.backgroundColor = i.backgroundColor),
              (n.titleColor = i.titleColor);
          }),
          { clazz: r, style: o } = Zc(n);
        return () => {
          const a = [],
            s = [],
            l = n.type || 'default',
            u =
              l !== 'transparent' &&
              l !== 'float' &&
              c.createVNode(
                'div',
                {
                  class: {
                    'uni-placeholder': !0,
                    'uni-placeholder-titlePenetrate': n.titlePenetrate,
                  },
                },
                null,
                2,
              );
          return c.createVNode(
            'uni-page-head',
            { 'uni-page-head-type': l },
            [
              c.createVNode(
                'div',
                { ref: e, class: r.value, style: o.value },
                [
                  c.createVNode('div', { class: 'uni-page-head-hd' }, [
                    null,
                    ...a,
                  ]),
                  Yc(n),
                  c.createVNode('div', { class: 'uni-page-head-ft' }, [...s]),
                ],
                6,
              ),
              u,
            ],
            8,
            ['uni-page-head-type'],
          );
        };
      },
    });
  function Yc(e, t) {
    return Jc(e);
  }
  function Jc({
    type: e,
    loading: t,
    titleSize: n,
    titleText: r,
    titleImage: o,
  }) {
    return c.createVNode('div', { class: 'uni-page-head-bd' }, [
      c.createVNode(
        'div',
        {
          style: { fontSize: n, opacity: e === 'transparent' ? 0 : 1 },
          class: 'uni-page-head__title',
        },
        [
          t
            ? c.createVNode('i', { class: 'uni-loading' }, null)
            : o
            ? c.createVNode(
                'img',
                { src: o, class: 'uni-page-head__title_image' },
                null,
                8,
                ['src'],
              )
            : r,
        ],
        4,
      ),
    ]);
  }
  function Zc(e) {
    const t = c.computed(() => {
        const { type: r, titlePenetrate: o, shadowColorType: i } = e,
          a = {
            'uni-page-head': !0,
            'uni-page-head-transparent': r === 'transparent',
            'uni-page-head-titlePenetrate': o === 'YES',
            'uni-page-head-shadow': !!i,
          };
        return i && (a[`uni-page-head-shadow-${i}`] = !0), a;
      }),
      n = c.computed(() => ({
        backgroundColor: e.backgroundColor,
        color: e.titleColor,
        transitionDuration: e.duration,
        transitionTimingFunction: e.timingFunc,
      }));
    return { clazz: t, style: n };
  }
  const Xc = ke({
    name: 'PageBody',
    setup(e, t) {
      return () =>
        c.createVNode(c.Fragment, null, [
          !1,
          c.createVNode(
            'uni-page-wrapper',
            null,
            [
              c.createVNode('uni-page-body', null, [
                c.renderSlot(t.slots, 'default'),
              ]),
            ],
            16,
          ),
        ]);
    },
  });
  ke({
    name: 'Page',
    setup(e, t) {
      const n = oc(wr()),
        r = n.navigationBar;
      return (
        Wc(n),
        () =>
          c.createVNode(
            'uni-page',
            { 'data-page': n.route },
            r.style !== 'custom' ? [c.createVNode(Kc), Mr(t)] : [Mr(t)],
          )
      );
    },
  });
  function Mr(e) {
    return (
      c.openBlock(),
      c.createBlock(
        Xc,
        { key: 0 },
        { default: c.withCtx(() => [c.renderSlot(e.slots, 'page')]), _: 3 },
      )
    );
  }
  const Qc = {
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    methods: {
      $uGetRect(e, t) {
        return new Promise((n) => {
          ds()
            .in(this)
            [t ? 'selectAll' : 'select'](e)
            .boundingClientRect((r) => {
              t && Array.isArray(r) && r.length && n(r), !t && r && n(r);
            })
            .exec();
        });
      },
      getParentData(e = '') {
        this.parent || (this.parent = !1),
          (this.parent = this.$u.$parent.call(this, e)),
          this.parent &&
            (Object.keys(this.parentData).map((t) => {
              this.parentData[t] = this.parent[t];
            }),
            (this.parentData.value = this.parent.modelValue));
      },
      preventEvent(e) {
        e && e.stopPropagation && e.stopPropagation();
      },
    },
    onReachBottom() {
      Ja('uOnReachBottom');
    },
    beforeUnmount() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const e = this.parent.children;
        e.map((t, n) => {
          t === this && e.splice(n, 1);
        });
      }
    },
  };
  function el(e) {
    return Object.prototype.toString.call(e) === '[object Array]';
  }
  function Nt(e) {
    if (
      [null, void 0, NaN, !1].includes(e) ||
      (typeof e != 'object' && typeof e != 'function')
    )
      return e;
    var t = el(e) ? [] : {};
    for (let n in e)
      e.hasOwnProperty(n) && (t[n] = typeof e[n] == 'object' ? Nt(e[n]) : e[n]);
    return t;
  }
  function Bt(e = {}, t = {}) {
    if (((e = Nt(e)), typeof e != 'object' || typeof t != 'object')) return !1;
    for (var n in t)
      t.hasOwnProperty(n) &&
        (n in e
          ? typeof e[n] != 'object' || typeof t[n] != 'object'
            ? (e[n] = t[n])
            : e[n].concat && t[n].concat
            ? (e[n] = e[n].concat(t[n]))
            : (e[n] = Bt(e[n], t[n]))
          : (e[n] = t[n]));
    return e;
  }
  function tl(e) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(
      e,
    );
  }
  function nl(e) {
    return /^1[23456789]\d{9}$/.test(e);
  }
  function rl(e) {
    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(e);
  }
  function ol(e) {
    return !/Invalid|NaN/.test(new Date(e).toString());
  }
  function il(e) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
      e,
    );
  }
  function al(e) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
  }
  function sl(e) {
    return /^\d+$/.test(e);
  }
  function cl(e) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      e,
    );
  }
  function ll(e) {
    const t =
        /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/,
      n =
        /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    return e.length === 7 ? n.test(e) : e.length === 8 ? t.test(e) : !1;
  }
  function ul(e) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(e);
  }
  function fl(e) {
    return /^[\u4e00-\u9fa5]+$/gi.test(e);
  }
  function dl(e) {
    return /^[a-zA-Z]*$/.test(e);
  }
  function hl(e) {
    return /^[0-9a-zA-Z]*$/g.test(e);
  }
  function pl(e, t) {
    return e.indexOf(t) >= 0;
  }
  function gl(e, t) {
    return e >= t[0] && e <= t[1];
  }
  function ml(e, t) {
    return e.length >= t[0] && e.length <= t[1];
  }
  function bl(e) {
    return /^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(e);
  }
  function Nr(e) {
    switch (typeof e) {
      case 'undefined':
        return !0;
      case 'string':
        if (e.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0)
          return !0;
        break;
      case 'boolean':
        if (!e) return !0;
        break;
      case 'number':
        if (e === 0 || isNaN(e)) return !0;
        break;
      case 'object':
        if (e === null || e.length === 0) return !0;
        for (var t in e) return !1;
        return !0;
    }
    return !1;
  }
  function yl(e) {
    if (typeof e == 'string')
      try {
        var t = JSON.parse(e);
        return !!(typeof t == 'object' && t);
      } catch {
        return !1;
      }
    return !1;
  }
  function vl(e) {
    return typeof Array.isArray == 'function'
      ? Array.isArray(e)
      : Object.prototype.toString.call(e) === '[object Array]';
  }
  function Br(e) {
    return Object.prototype.toString.call(e) === '[object Object]';
  }
  function _l(e, t = 6) {
    return new RegExp(`^\\d{${t}}$`).test(e);
  }
  function Rt(e) {
    return typeof e == 'function';
  }
  function wl(e) {
    return Br(e) && Rt(e.then) && Rt(e.catch);
  }
  function $l(e) {
    const t = e.split('?')[0];
    return new RegExp(/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)$/).test(t);
  }
  function Tl(e) {
    const t = e.split('?')[0];
    return new RegExp(
      /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8|3gp)$/,
    ).test(t);
  }
  function Sl(e) {
    return e && Object.prototype.toString.call(e) === '[object RegExp]';
  }
  function Cl(e) {
    return typeof e == 'string';
  }
  const Ue = {
    email: tl,
    mobile: nl,
    url: rl,
    date: ol,
    dateISO: il,
    number: al,
    digits: sl,
    idCard: cl,
    carNo: ll,
    amount: ul,
    chinese: fl,
    letter: dl,
    enOrNum: hl,
    contains: pl,
    range: gl,
    rangeLength: ml,
    empty: Nr,
    isEmpty: Nr,
    jsonString: yl,
    landline: bl,
    object: Br,
    array: vl,
    code: _l,
    func: Rt,
    promise: wl,
    video: Tl,
    image: $l,
    regExp: Sl,
    string: Cl,
  };
  class Ol {
    setConfig(t) {
      this.config = Bt(this.config, t);
    }
    request(t = {}) {
      if (
        this.interceptor.request &&
        typeof this.interceptor.request == 'function'
      ) {
        let n = this.interceptor.request(t);
        if (n === !1) return new Promise(() => {});
        this.options = n;
      }
      return (
        (t.dataType = t.dataType || this.config.dataType),
        (t.responseType = t.responseType || this.config.responseType),
        (t.url = t.url || ''),
        (t.params = t.params || {}),
        (t.header = Object.assign({}, this.config.header, t.header)),
        (t.method = t.method || this.config.method),
        new Promise((n, r) => {
          (t.complete = (o) => {
            if (
              (Uc(),
              clearTimeout(this.config.timer),
              (this.config.timer = null),
              this.config.originalData)
            )
              if (
                this.interceptor.response &&
                typeof this.interceptor.response == 'function'
              ) {
                let i = this.interceptor.response(o);
                i !== !1 ? n(i) : r(o);
              } else n(o);
            else if (o.statusCode == 200)
              if (
                this.interceptor.response &&
                typeof this.interceptor.response == 'function'
              ) {
                let i = this.interceptor.response(o.data);
                i !== !1 ? n(i) : r(o.data);
              } else n(o.data);
            else r(o);
          }),
            (t.url = Ue.url(t.url)
              ? t.url
              : this.config.baseUrl +
                (t.url.indexOf('/') == 0 ? t.url : '/' + t.url)),
            this.config.showLoading &&
              !this.config.timer &&
              (this.config.timer = setTimeout(() => {
                qc({
                  title: this.config.loadingText,
                  mask: this.config.loadingMask,
                }),
                  (this.config.timer = null);
              }, this.config.loadingTime)),
            Cc(t);
        })
      );
    }
    constructor() {
      (this.config = {
        baseUrl: '',
        header: {},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        showLoading: !0,
        loadingText: '请求中...',
        loadingTime: 800,
        timer: null,
        originalData: !1,
        loadingMask: !0,
      }),
        (this.interceptor = { request: null, response: null }),
        (this.get = (t, n = {}, r = {}) =>
          this.request({ method: 'GET', url: t, header: r, data: n })),
        (this.post = (t, n = {}, r = {}) =>
          this.request({ url: t, method: 'POST', header: r, data: n })),
        (this.put = (t, n = {}, r = {}) =>
          this.request({ url: t, method: 'PUT', header: r, data: n })),
        (this.delete = (t, n = {}, r = {}) =>
          this.request({ url: t, method: 'DELETE', header: r, data: n }));
    }
  }
  const ye = new Ol();
  function Al(e = {}, t = !0, n = 'brackets') {
    let r = t ? '?' : '',
      o = [];
    ['indices', 'brackets', 'repeat', 'comma'].indexOf(n) == -1 &&
      (n = 'brackets');
    for (let i in e) {
      let a = e[i];
      if (!(['', void 0, null].indexOf(a) >= 0))
        if (a.constructor === Array)
          switch (n) {
            case 'indices':
              for (let l = 0; l < a.length; l++)
                o.push(i + '[' + l + ']=' + a[l]);
              break;
            case 'brackets':
              a.forEach((l) => {
                o.push(i + '[]=' + l);
              });
              break;
            case 'repeat':
              a.forEach((l) => {
                o.push(i + '=' + l);
              });
              break;
            case 'comma':
              let s = '';
              a.forEach((l) => {
                s += (s ? ',' : '') + l;
              }),
                o.push(i + '=' + s);
              break;
            default:
              a.forEach((l) => {
                o.push(i + '[]=' + l);
              });
          }
        else o.push(i + '=' + a);
    }
    return o.length ? r + o.join('&') : '';
  }
  class Il {
    constructor() {
      (this.config = {
        type: 'navigateTo',
        url: '',
        delta: 1,
        params: {},
        animationType: 'pop-in',
        animationDuration: 300,
        intercept: !1,
      }),
        (this.route = this.route.bind(this));
    }
    addRootPath(t) {
      return t[0] === '/' ? t : `/${t}`;
    }
    mixinParam(t, n) {
      t = t && this.addRootPath(t);
      let r = '';
      return /.*\/.*\?.*=.*/.test(t)
        ? ((r = uni.$u.queryParams(n, !1)), (t += '&' + r))
        : ((r = uni.$u.queryParams(n)), (t += r));
    }
    async route(t = {}, n = {}) {
      let r = {};
      typeof t == 'string'
        ? ((r.url = this.mixinParam(t, n)), (r.type = 'navigateTo'))
        : ((r = uni.$u.deepClone(t, this.config)),
          (r.url = this.mixinParam(t.url, t.params))),
        n.intercept && (this.config.intercept = n.intercept),
        (r.params = n),
        (r = uni.$u.deepMerge(this.config, r)),
        typeof uni.$u.routeIntercept == 'function'
          ? (await new Promise((i, a) => {
              uni.$u.routeIntercept(r, i);
            })) && this.openPage(r)
          : this.openPage(r);
    }
    openPage(t) {
      const {
        url: n,
        type: r,
        delta: o,
        animationType: i,
        animationDuration: a,
      } = t;
      (t.type == 'navigateTo' || t.type == 'to') &&
        Ar({ url: n, animationType: i, animationDuration: a }),
        (t.type == 'redirectTo' || t.type == 'redirect') && Ir({ url: n }),
        (t.type == 'switchTab' || t.type == 'tab') && kr({ url: n }),
        (t.type == 'reLaunch' || t.type == 'launch') && xr({ url: n }),
        (t.type == 'navigateBack' || t.type == 'back') && Or({ delta: o });
    }
  }
  const xl = new Il().route;
  String.prototype.padStart ||
    (String.prototype.padStart = function (e, t = ' ') {
      if (Object.prototype.toString.call(t) !== '[object String]')
        throw new TypeError('fillString must be String');
      let n = this;
      if (n.length >= e) return String(n);
      let r = e - n.length,
        o = Math.ceil(r / t.length);
      for (; (o >>= 1); ) (t += t), o === 1 && (t += t);
      return t.slice(0, r) + n;
    });
  function Vt(e = null, t = 'yyyy-mm-dd') {
    e || (e = Number(new Date())), e.toString().length == 10 && (e *= 1e3);
    let n = new Date(e),
      r,
      o = {
        'y+': n.getFullYear().toString(),
        'm+': (n.getMonth() + 1).toString(),
        'd+': n.getDate().toString(),
        'h+': n.getHours().toString(),
        'M+': n.getMinutes().toString(),
        's+': n.getSeconds().toString(),
      };
    for (let i in o)
      (r = new RegExp('(' + i + ')').exec(t)),
        r &&
          (t = t.replace(
            r[1],
            r[1].length == 1 ? o[i] : o[i].padStart(r[1].length, '0'),
          ));
    return t;
  }
  function kl(e = null, t = 'yyyy-mm-dd') {
    e || (e = Number(new Date())), e.toString().length == 10 && (e *= 1e3);
    let n = +new Date(Number(e)),
      r = (Number(new Date()) - n) / 1e3,
      o = '';
    switch (!0) {
      case r < 300:
        o = '刚刚';
        break;
      case r >= 300 && r < 3600:
        o = parseInt(r / 60) + '分钟前';
        break;
      case r >= 3600 && r < 86400:
        o = parseInt(r / 3600) + '小时前';
        break;
      case r >= 86400 && r < 2592e3:
        o = parseInt(r / 86400) + '天前';
        break;
      default:
        t === !1
          ? r >= 2592e3 && r < 365 * 86400
            ? (o = parseInt(r / (86400 * 30)) + '个月前')
            : (o = parseInt(r / (86400 * 365)) + '年前')
          : (o = Vt(n, t));
    }
    return o;
  }
  function El(e = 'rgb(0, 0, 0)', t = 'rgb(255, 255, 255)', n = 10) {
    let r = Dt(e, !1),
      o = r[0],
      i = r[1],
      a = r[2],
      s = Dt(t, !1),
      l = s[0],
      u = s[1],
      h = s[2],
      f = (l - o) / n,
      d = (u - i) / n,
      y = (h - a) / n,
      v = [];
    for (let p = 0; p < n; p++) {
      let b = Ht(
        'rgb(' +
          Math.round(f * p + o) +
          ',' +
          Math.round(d * p + i) +
          ',' +
          Math.round(y * p + a) +
          ')',
      );
      v.push(b);
    }
    return v;
  }
  function Dt(e, t = !0) {
    let n = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (((e = e.toLowerCase()), e && n.test(e))) {
      if (e.length === 4) {
        let o = '#';
        for (let i = 1; i < 4; i += 1)
          o += e.slice(i, i + 1).concat(e.slice(i, i + 1));
        e = o;
      }
      let r = [];
      for (let o = 1; o < 7; o += 2) r.push(parseInt('0x' + e.slice(o, o + 2)));
      return t ? `rgb(${r[0]},${r[1]},${r[2]})` : r;
    } else
      return /^(rgb|RGB)/.test(e)
        ? e
            .replace(/(?:\(|\)|rgb|RGB)*/g, '')
            .split(',')
            .map((o) => Number(o))
        : e;
  }
  function Ht(e) {
    let t = e,
      n = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(t)) {
      let r = t.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(','),
        o = '#';
      for (let i = 0; i < r.length; i++) {
        let a = Number(r[i]).toString(16);
        (a = String(a).length == 1 ? '0' + a : a),
          a === '0' && (a += a),
          (o += a);
      }
      return o.length !== 7 && (o = t), o;
    } else if (n.test(t)) {
      let r = t.replace(/#/, '').split('');
      if (r.length === 6) return t;
      if (r.length === 3) {
        let o = '#';
        for (let i = 0; i < r.length; i += 1) o += r[i] + r[i];
        return o;
      }
    } else return t;
  }
  function Pl(e, t = 0.3) {
    e = Ht(e);
    var n = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let r = e.toLowerCase();
    if (r && n.test(r)) {
      if (r.length === 4) {
        var o = '#';
        for (let a = 1; a < 4; a += 1)
          o += r.slice(a, a + 1).concat(r.slice(a, a + 1));
        r = o;
      }
      var i = [];
      for (let a = 1; a < 7; a += 2) i.push(parseInt('0x' + r.slice(a, a + 2)));
      return 'rgba(' + i.join(',') + ',' + t + ')';
    } else return r;
  }
  const Ge = { colorGradient: El, hexToRgb: Dt, rgbToHex: Ht, colorToRgba: Pl };
  function Ll(e = 32, t = !0, n = null) {
    let r =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
          '',
        ),
      o = [];
    if (((n = n || r.length), e))
      for (let i = 0; i < e; i++) o[i] = r[0 | (Math.random() * n)];
    else {
      let i;
      (o[8] = o[13] = o[18] = o[23] = '-'), (o[14] = '4');
      for (let a = 0; a < 36; a++)
        o[a] ||
          ((i = 0 | (Math.random() * 16)),
          (o[a] = r[a == 19 ? (i & 3) | 8 : i]));
    }
    return t ? (o.shift(), 'u' + o.join('')) : o.join('');
  }
  let jl = {
    primary: '#2979ff',
    primaryDark: '#2b85e4',
    primaryDisabled: '#a0cfff',
    primaryLight: '#ecf5ff',
    bgColor: '#f3f4f6',
    info: '#909399',
    infoDark: '#82848a',
    infoDisabled: '#c8c9cc',
    infoLight: '#f4f4f5',
    warning: '#ff9900',
    warningDark: '#f29100',
    warningDisabled: '#fcbd71',
    warningLight: '#fdf6ec',
    error: '#fa3534',
    errorDark: '#dd6161',
    errorDisabled: '#fab6b6',
    errorLight: '#fef0f0',
    success: '#19be6b',
    successDark: '#18b566',
    successDisabled: '#71d5a1',
    successLight: '#dbf1e1',
    mainColor: '#303133',
    contentColor: '#606266',
    tipsColor: '#909399',
    lightColor: '#c0c4cc',
    borderColor: '#e4e7ed',
  };
  function Ml(e = 'success', t = !1) {
    ['primary', 'info', 'error', 'warning', 'success'].indexOf(e) == -1 &&
      (e = 'success');
    let n = '';
    switch (e) {
      case 'primary':
        n = 'info-circle';
        break;
      case 'info':
        n = 'info-circle';
        break;
      case 'error':
        n = 'close-circle';
        break;
      case 'warning':
        n = 'error-circle';
        break;
      case 'success':
        n = 'checkmark-circle';
        break;
      default:
        n = 'checkmark-circle';
    }
    return t && (n += '-fill'), n;
  }
  function Nl(e = []) {
    return e.sort(() => Math.random() - 0.5);
  }
  function Bl(e = 'auto', t = 'rpx') {
    return (e = String(e)), Ue.number(e) ? `${e}${t}` : e;
  }
  function Rl(e, t) {
    if (e >= 0 && t > 0 && t >= e) {
      let n = t - e + 1;
      return Math.floor(Math.random() * n + e);
    } else return 0;
  }
  function Vl(e, t = 'both') {
    return t == 'both'
      ? e.replace(/^\s+|\s+$/g, '')
      : t == 'left'
      ? e.replace(/^\s*/, '')
      : t == 'right'
      ? e.replace(/(\s*$)/g, '')
      : t == 'all'
      ? e.replace(/\s+/g, '')
      : e;
  }
  function Dl(e, t = 1500) {
    zc({ title: e, icon: 'none', duration: t });
  }
  function Hl(e, t) {
    let n = this.$parent;
    for (; n; )
      if (n.$options.name !== e) n = n.$parent;
      else {
        let r = {};
        if (Array.isArray(t))
          t.map((o) => {
            r[o] = n[o] ? n[o] : '';
          });
        else
          for (let o in t)
            Array.isArray(t[o])
              ? t[o].length
                ? (r[o] = t[o])
                : (r[o] = n[o])
              : t[o].constructor === Object
              ? Object.keys(t[o]).length
                ? (r[o] = t[o])
                : (r[o] = n[o])
              : (r[o] = t[o] || t[o] === !1 ? t[o] : n[o]);
        return r;
      }
    return {};
  }
  function zl(e = void 0) {
    let t = this.$parent;
    for (; t; )
      if (t.$options && t.$options.name !== e) t = t.$parent;
      else return t;
    return !1;
  }
  function Fl() {
    return Sr().platform;
  }
  function ql() {
    return Sr();
  }
  let Q = null;
  function Ul(e, t = 500, n = !1) {
    if ((Q !== null && clearTimeout(Q), n)) {
      var r = !Q;
      (Q = setTimeout(function () {
        Q = null;
      }, t)),
        r && typeof e == 'function' && e();
    } else
      Q = setTimeout(function () {
        typeof e == 'function' && e();
      }, t);
  }
  let We = [],
    ee = [];
  function Gl(e, t = 500, n = !0, r = 'default') {
    We[r] || (We[r] = null),
      n
        ? ee[r] ||
          ((ee[r] = !0),
          typeof e == 'function' && e(),
          (We[r] = setTimeout(() => {
            ee[r] = !1;
          }, t)))
        : ee[r] ||
          ((ee[r] = !0),
          (We[r] = setTimeout(() => {
            (ee[r] = !1), typeof e == 'function' && e();
          }, t)));
  }
  function Wl(e, t = 'object') {
    if (
      Ue.empty(e) ||
      (typeof e == 'object' && t === 'object') ||
      (t === 'string' && typeof e == 'string')
    )
      return e;
    if (t === 'object') {
      e = trim(e);
      const r = e.split(';'),
        o = {};
      for (let i = 0; i < r.length; i++)
        if (r[i]) {
          const a = r[i].split(':');
          o[trim(a[0])] = trim(a[1]);
        }
      return o;
    }
    let n = '';
    for (const r in e) {
      const o = r.replace(/([A-Z])/g, '-$1').toLowerCase();
      n += `${o}:${e[r]};`;
    }
    return trim(n);
  }
  let Rr = '1.10.1';
  const Kl = {
      v: Rr,
      version: Rr,
      type: ['primary', 'success', 'info', 'error', 'warning'],
    },
    Yl = {
      toast: 10090,
      noNetwork: 10080,
      popup: 10075,
      mask: 10070,
      navbar: 980,
      topTips: 975,
      sticky: 970,
      indexListSticky: 965,
    };
  function Jl(e) {}
  const Vr = {
    queryParams: Al,
    route: xl,
    timeFormat: Vt,
    date: Vt,
    timeFrom: kl,
    colorGradient: Ge.colorGradient,
    colorToRgba: Ge.colorToRgba,
    guid: Ll,
    color: jl,
    sys: ql,
    os: Fl,
    type2icon: Ml,
    randomArray: Nl,
    wranning: Jl,
    get: ye.get,
    post: ye.post,
    put: ye.put,
    delete: ye.delete,
    hexToRgb: Ge.hexToRgb,
    rgbToHex: Ge.rgbToHex,
    test: Ue,
    random: Rl,
    deepClone: Nt,
    deepMerge: Bt,
    getParent: Hl,
    $parent: zl,
    addUnit: Bl,
    trim: Vl,
    type: ['primary', 'success', 'error', 'warning', 'info'],
    http: ye,
    toast: Dl,
    config: Kl,
    zIndex: Yl,
    debounce: Ul,
    throttle: Gl,
    addStyle: Wl,
  };
  uni.$u = Vr;
  const Zl = {
    install: (e) => {
      e.mixin(Qc), (e.config.globalProperties.$u = Vr);
    },
  };
  var Xl = Array.isArray,
    z = Xl,
    Ql = typeof E == 'object' && E && E.Object === Object && E,
    Dr = Ql,
    eu = Dr,
    tu = typeof self == 'object' && self && self.Object === Object && self,
    nu = eu || tu || Function('return this')(),
    j = nu,
    ru = j,
    ou = ru.Symbol,
    ve = ou,
    Hr = ve,
    zr = Object.prototype,
    iu = zr.hasOwnProperty,
    au = zr.toString,
    _e = Hr ? Hr.toStringTag : void 0;
  function su(e) {
    var t = iu.call(e, _e),
      n = e[_e];
    try {
      e[_e] = void 0;
      var r = !0;
    } catch {}
    var o = au.call(e);
    return r && (t ? (e[_e] = n) : delete e[_e]), o;
  }
  var cu = su,
    lu = Object.prototype,
    uu = lu.toString;
  function fu(e) {
    return uu.call(e);
  }
  var du = fu,
    Fr = ve,
    hu = cu,
    pu = du,
    gu = '[object Null]',
    mu = '[object Undefined]',
    qr = Fr ? Fr.toStringTag : void 0;
  function bu(e) {
    return e == null
      ? e === void 0
        ? mu
        : gu
      : qr && qr in Object(e)
      ? hu(e)
      : pu(e);
  }
  var te = bu;
  function yu(e) {
    return e != null && typeof e == 'object';
  }
  var W = yu,
    vu = te,
    _u = W,
    wu = '[object Symbol]';
  function $u(e) {
    return typeof e == 'symbol' || (_u(e) && vu(e) == wu);
  }
  var zt = $u,
    Tu = z,
    Su = zt,
    Cu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Ou = /^\w*$/;
  function Au(e, t) {
    if (Tu(e)) return !1;
    var n = typeof e;
    return n == 'number' ||
      n == 'symbol' ||
      n == 'boolean' ||
      e == null ||
      Su(e)
      ? !0
      : Ou.test(e) || !Cu.test(e) || (t != null && e in Object(t));
  }
  var Iu = Au,
    xu = te,
    ku = q,
    Eu = '[object AsyncFunction]',
    Pu = '[object Function]',
    Lu = '[object GeneratorFunction]',
    ju = '[object Proxy]';
  function Mu(e) {
    if (!ku(e)) return !1;
    var t = xu(e);
    return t == Pu || t == Lu || t == Eu || t == ju;
  }
  var Ur = Mu,
    Nu = j,
    Bu = Nu['__core-js_shared__'],
    Ru = Bu,
    Ft = Ru,
    Gr = (function () {
      var e = /[^.]+$/.exec((Ft && Ft.keys && Ft.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function Vu(e) {
    return !!Gr && Gr in e;
  }
  var Du = Vu,
    Hu = Function.prototype,
    zu = Hu.toString;
  function Fu(e) {
    if (e != null) {
      try {
        return zu.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var Wr = Fu,
    qu = Ur,
    Uu = Du,
    Gu = q,
    Wu = Wr,
    Ku = /[\\^$.*+?()[\]{}|]/g,
    Yu = /^\[object .+?Constructor\]$/,
    Ju = Function.prototype,
    Zu = Object.prototype,
    Xu = Ju.toString,
    Qu = Zu.hasOwnProperty,
    ef = RegExp(
      '^' +
        Xu.call(Qu)
          .replace(Ku, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function tf(e) {
    if (!Gu(e) || Uu(e)) return !1;
    var t = qu(e) ? ef : Yu;
    return t.test(Wu(e));
  }
  var nf = tf;
  function rf(e, t) {
    return e == null ? void 0 : e[t];
  }
  var of = rf,
    af = nf,
    sf = of;
  function cf(e, t) {
    var n = sf(e, t);
    return af(n) ? n : void 0;
  }
  var K = cf,
    lf = K,
    uf = lf(Object, 'create'),
    Ke = uf,
    Kr = Ke;
  function ff() {
    (this.__data__ = Kr ? Kr(null) : {}), (this.size = 0);
  }
  var df = ff;
  function hf(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var pf = hf,
    gf = Ke,
    mf = '__lodash_hash_undefined__',
    bf = Object.prototype,
    yf = bf.hasOwnProperty;
  function vf(e) {
    var t = this.__data__;
    if (gf) {
      var n = t[e];
      return n === mf ? void 0 : n;
    }
    return yf.call(t, e) ? t[e] : void 0;
  }
  var _f = vf,
    wf = Ke,
    $f = Object.prototype,
    Tf = $f.hasOwnProperty;
  function Sf(e) {
    var t = this.__data__;
    return wf ? t[e] !== void 0 : Tf.call(t, e);
  }
  var Cf = Sf,
    Of = Ke,
    Af = '__lodash_hash_undefined__';
  function If(e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = Of && t === void 0 ? Af : t),
      this
    );
  }
  var xf = If,
    kf = df,
    Ef = pf,
    Pf = _f,
    Lf = Cf,
    jf = xf;
  function ne(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (ne.prototype.clear = kf),
    (ne.prototype.delete = Ef),
    (ne.prototype.get = Pf),
    (ne.prototype.has = Lf),
    (ne.prototype.set = jf);
  var Mf = ne;
  function Nf() {
    (this.__data__ = []), (this.size = 0);
  }
  var Bf = Nf;
  function Rf(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var Yr = Rf,
    Vf = Yr;
  function Df(e, t) {
    for (var n = e.length; n--; ) if (Vf(e[n][0], t)) return n;
    return -1;
  }
  var Ye = Df,
    Hf = Ye,
    zf = Array.prototype,
    Ff = zf.splice;
  function qf(e) {
    var t = this.__data__,
      n = Hf(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : Ff.call(t, n, 1), --this.size, !0;
  }
  var Uf = qf,
    Gf = Ye;
  function Wf(e) {
    var t = this.__data__,
      n = Gf(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  var Kf = Wf,
    Yf = Ye;
  function Jf(e) {
    return Yf(this.__data__, e) > -1;
  }
  var Zf = Jf,
    Xf = Ye;
  function Qf(e, t) {
    var n = this.__data__,
      r = Xf(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  var ed = Qf,
    td = Bf,
    nd = Uf,
    rd = Kf,
    od = Zf,
    id = ed;
  function re(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (re.prototype.clear = td),
    (re.prototype.delete = nd),
    (re.prototype.get = rd),
    (re.prototype.has = od),
    (re.prototype.set = id);
  var Je = re,
    ad = K,
    sd = j,
    cd = ad(sd, 'Map'),
    qt = cd,
    Jr = Mf,
    ld = Je,
    ud = qt;
  function fd() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Jr(),
        map: new (ud || ld)(),
        string: new Jr(),
      });
  }
  var dd = fd;
  function hd(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  var pd = hd,
    gd = pd;
  function md(e, t) {
    var n = e.__data__;
    return gd(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
  }
  var Ze = md,
    bd = Ze;
  function yd(e) {
    var t = bd(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var vd = yd,
    _d = Ze;
  function wd(e) {
    return _d(this, e).get(e);
  }
  var $d = wd,
    Td = Ze;
  function Sd(e) {
    return Td(this, e).has(e);
  }
  var Cd = Sd,
    Od = Ze;
  function Ad(e, t) {
    var n = Od(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  var Id = Ad,
    xd = dd,
    kd = vd,
    Ed = $d,
    Pd = Cd,
    Ld = Id;
  function oe(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (oe.prototype.clear = xd),
    (oe.prototype.delete = kd),
    (oe.prototype.get = Ed),
    (oe.prototype.has = Pd),
    (oe.prototype.set = Ld);
  var Zr = oe,
    Xr = Zr,
    jd = 'Expected a function';
  function Ut(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(jd);
    var n = function () {
      var r = arguments,
        o = t ? t.apply(this, r) : r[0],
        i = n.cache;
      if (i.has(o)) return i.get(o);
      var a = e.apply(this, r);
      return (n.cache = i.set(o, a) || i), a;
    };
    return (n.cache = new (Ut.Cache || Xr)()), n;
  }
  Ut.Cache = Xr;
  var Md = Ut,
    Nd = Md,
    Bd = 500;
  function Rd(e) {
    var t = Nd(e, function (r) {
        return n.size === Bd && n.clear(), r;
      }),
      n = t.cache;
    return t;
  }
  var Vd = Rd,
    Dd = Vd,
    Hd =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    zd = /\\(\\)?/g,
    Fd = Dd(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(Hd, function (n, r, o, i) {
          t.push(o ? i.replace(zd, '$1') : r || n);
        }),
        t
      );
    }),
    qd = Fd;
  function Ud(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
      o[n] = t(e[n], n, e);
    return o;
  }
  var Gd = Ud,
    Qr = ve,
    Wd = Gd,
    Kd = z,
    Yd = zt,
    Jd = 1 / 0,
    eo = Qr ? Qr.prototype : void 0,
    to = eo ? eo.toString : void 0;
  function no(e) {
    if (typeof e == 'string') return e;
    if (Kd(e)) return Wd(e, no) + '';
    if (Yd(e)) return to ? to.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -Jd ? '-0' : t;
  }
  var Zd = no,
    Xd = Zd;
  function Qd(e) {
    return e == null ? '' : Xd(e);
  }
  var eh = Qd,
    th = z,
    nh = Iu,
    rh = qd,
    oh = eh;
  function ih(e, t) {
    return th(e) ? e : nh(e, t) ? [e] : rh(oh(e));
  }
  var Xe = ih,
    ah = zt,
    sh = 1 / 0;
  function ch(e) {
    if (typeof e == 'string' || ah(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -sh ? '-0' : t;
  }
  var Gt = ch,
    lh = Xe,
    uh = Gt;
  function fh(e, t) {
    t = lh(t, e);
    for (var n = 0, r = t.length; e != null && n < r; ) e = e[uh(t[n++])];
    return n && n == r ? e : void 0;
  }
  var dh = fh,
    hh = K,
    ph = (function () {
      try {
        var e = hh(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch {}
    })(),
    ro = ph,
    oo = ro;
  function gh(e, t, n) {
    t == '__proto__' && oo
      ? oo(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n);
  }
  var io = gh,
    mh = io,
    bh = Yr,
    yh = Object.prototype,
    vh = yh.hasOwnProperty;
  function _h(e, t, n) {
    var r = e[t];
    (!(vh.call(e, t) && bh(r, n)) || (n === void 0 && !(t in e))) &&
      mh(e, t, n);
  }
  var Wt = _h,
    wh = 9007199254740991,
    $h = /^(?:0|[1-9]\d*)$/;
  function Th(e, t) {
    var n = typeof e;
    return (
      (t = t ?? wh),
      !!t &&
        (n == 'number' || (n != 'symbol' && $h.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var Kt = Th,
    Sh = Wt,
    Ch = Xe,
    Oh = Kt,
    ao = q,
    Ah = Gt;
  function Ih(e, t, n, r) {
    if (!ao(e)) return e;
    t = Ch(t, e);
    for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
      var l = Ah(t[o]),
        u = n;
      if (l === '__proto__' || l === 'constructor' || l === 'prototype')
        return e;
      if (o != a) {
        var h = s[l];
        (u = r ? r(h, l, s) : void 0),
          u === void 0 && (u = ao(h) ? h : Oh(t[o + 1]) ? [] : {});
      }
      Sh(s, l, u), (s = s[l]);
    }
    return e;
  }
  var xh = Ih,
    kh = dh,
    Eh = xh,
    Ph = Xe;
  function Lh(e, t, n) {
    for (var r = -1, o = t.length, i = {}; ++r < o; ) {
      var a = t[r],
        s = kh(e, a);
      n(s, a) && Eh(i, Ph(a, e), s);
    }
    return i;
  }
  var jh = Lh;
  function Mh(e, t) {
    return e != null && t in Object(e);
  }
  var Nh = Mh,
    Bh = te,
    Rh = W,
    Vh = '[object Arguments]';
  function Dh(e) {
    return Rh(e) && Bh(e) == Vh;
  }
  var Hh = Dh,
    so = Hh,
    zh = W,
    co = Object.prototype,
    Fh = co.hasOwnProperty,
    qh = co.propertyIsEnumerable,
    Uh = so(
      (function () {
        return arguments;
      })(),
    )
      ? so
      : function (e) {
          return zh(e) && Fh.call(e, 'callee') && !qh.call(e, 'callee');
        },
    Yt = Uh,
    Gh = 9007199254740991;
  function Wh(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Gh;
  }
  var Jt = Wh,
    Kh = Xe,
    Yh = Yt,
    Jh = z,
    Zh = Kt,
    Xh = Jt,
    Qh = Gt;
  function ep(e, t, n) {
    t = Kh(t, e);
    for (var r = -1, o = t.length, i = !1; ++r < o; ) {
      var a = Qh(t[r]);
      if (!(i = e != null && n(e, a))) break;
      e = e[a];
    }
    return i || ++r != o
      ? i
      : ((o = e == null ? 0 : e.length),
        !!o && Xh(o) && Zh(a, o) && (Jh(e) || Yh(e)));
  }
  var tp = ep,
    np = Nh,
    rp = tp;
  function op(e, t) {
    return e != null && rp(e, t, np);
  }
  var ip = op,
    ap = jh,
    sp = ip;
  function cp(e, t) {
    return ap(e, t, function (n, r) {
      return sp(e, r);
    });
  }
  var lp = cp;
  function up(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
    return e;
  }
  var Zt = up,
    lo = ve,
    fp = Yt,
    dp = z,
    uo = lo ? lo.isConcatSpreadable : void 0;
  function hp(e) {
    return dp(e) || fp(e) || !!(uo && e && e[uo]);
  }
  var pp = hp,
    gp = Zt,
    mp = pp;
  function fo(e, t, n, r, o) {
    var i = -1,
      a = e.length;
    for (n || (n = mp), o || (o = []); ++i < a; ) {
      var s = e[i];
      t > 0 && n(s)
        ? t > 1
          ? fo(s, t - 1, n, r, o)
          : gp(o, s)
        : r || (o[o.length] = s);
    }
    return o;
  }
  var bp = fo,
    yp = bp;
  function vp(e) {
    var t = e == null ? 0 : e.length;
    return t ? yp(e, 1) : [];
  }
  var _p = vp;
  function wp(e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, n[0]);
      case 2:
        return e.call(t, n[0], n[1]);
      case 3:
        return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
  }
  var $p = wp,
    Tp = $p,
    ho = Math.max;
  function Sp(e, t, n) {
    return (
      (t = ho(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var r = arguments, o = -1, i = ho(r.length - t, 0), a = Array(i);
          ++o < i;

        )
          a[o] = r[t + o];
        o = -1;
        for (var s = Array(t + 1); ++o < t; ) s[o] = r[o];
        return (s[t] = n(a)), Tp(e, this, s);
      }
    );
  }
  var Cp = Sp;
  function Op(e) {
    return function () {
      return e;
    };
  }
  var Ap = Op;
  function Ip(e) {
    return e;
  }
  var xp = Ip,
    kp = Ap,
    po = ro,
    Ep = xp,
    Pp = po
      ? function (e, t) {
          return po(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: kp(t),
            writable: !0,
          });
        }
      : Ep,
    Lp = Pp,
    jp = 800,
    Mp = 16,
    Np = Date.now;
  function Bp(e) {
    var t = 0,
      n = 0;
    return function () {
      var r = Np(),
        o = Mp - (r - n);
      if (((n = r), o > 0)) {
        if (++t >= jp) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var Rp = Bp,
    Vp = Lp,
    Dp = Rp,
    Hp = Dp(Vp),
    zp = Hp,
    Fp = _p,
    qp = Cp,
    Up = zp;
  function Gp(e) {
    return Up(qp(e, void 0, Fp), e + '');
  }
  var Wp = Gp,
    Kp = lp,
    Yp = Wp,
    Jp = Yp(function (e, t) {
      return e == null ? {} : Kp(e, t);
    }),
    Zp = Jp;
  const Xt = $e(Zp);
  var Xp = te,
    Qp = W,
    eg = '[object Number]';
  function tg(e) {
    return typeof e == 'number' || (Qp(e) && Xp(e) == eg);
  }
  var ng = tg;
  const go = $e(ng);
  var rg = Je;
  function og() {
    (this.__data__ = new rg()), (this.size = 0);
  }
  var ig = og;
  function ag(e) {
    var t = this.__data__,
      n = t.delete(e);
    return (this.size = t.size), n;
  }
  var sg = ag;
  function cg(e) {
    return this.__data__.get(e);
  }
  var lg = cg;
  function ug(e) {
    return this.__data__.has(e);
  }
  var fg = ug,
    dg = Je,
    hg = qt,
    pg = Zr,
    gg = 200;
  function mg(e, t) {
    var n = this.__data__;
    if (n instanceof dg) {
      var r = n.__data__;
      if (!hg || r.length < gg - 1)
        return r.push([e, t]), (this.size = ++n.size), this;
      n = this.__data__ = new pg(r);
    }
    return n.set(e, t), (this.size = n.size), this;
  }
  var bg = mg,
    yg = Je,
    vg = ig,
    _g = sg,
    wg = lg,
    $g = fg,
    Tg = bg;
  function ie(e) {
    var t = (this.__data__ = new yg(e));
    this.size = t.size;
  }
  (ie.prototype.clear = vg),
    (ie.prototype.delete = _g),
    (ie.prototype.get = wg),
    (ie.prototype.has = $g),
    (ie.prototype.set = Tg);
  var Sg = ie;
  function Cg(e, t) {
    for (
      var n = -1, r = e == null ? 0 : e.length;
      ++n < r && t(e[n], n, e) !== !1;

    );
    return e;
  }
  var Og = Cg,
    Ag = Wt,
    Ig = io;
  function xg(e, t, n, r) {
    var o = !n;
    n || (n = {});
    for (var i = -1, a = t.length; ++i < a; ) {
      var s = t[i],
        l = r ? r(n[s], e[s], s, n, e) : void 0;
      l === void 0 && (l = e[s]), o ? Ig(n, s, l) : Ag(n, s, l);
    }
    return n;
  }
  var Qe = xg;
  function kg(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  var Eg = kg,
    et = { exports: {} };
  function Pg() {
    return !1;
  }
  var Lg = Pg;
  et.exports,
    (function (e, t) {
      var n = j,
        r = Lg,
        o = t && !t.nodeType && t,
        i = o && !0 && e && !e.nodeType && e,
        a = i && i.exports === o,
        s = a ? n.Buffer : void 0,
        l = s ? s.isBuffer : void 0,
        u = l || r;
      e.exports = u;
    })(et, et.exports);
  var mo = et.exports,
    jg = te,
    Mg = Jt,
    Ng = W,
    Bg = '[object Arguments]',
    Rg = '[object Array]',
    Vg = '[object Boolean]',
    Dg = '[object Date]',
    Hg = '[object Error]',
    zg = '[object Function]',
    Fg = '[object Map]',
    qg = '[object Number]',
    Ug = '[object Object]',
    Gg = '[object RegExp]',
    Wg = '[object Set]',
    Kg = '[object String]',
    Yg = '[object WeakMap]',
    Jg = '[object ArrayBuffer]',
    Zg = '[object DataView]',
    Xg = '[object Float32Array]',
    Qg = '[object Float64Array]',
    em = '[object Int8Array]',
    tm = '[object Int16Array]',
    nm = '[object Int32Array]',
    rm = '[object Uint8Array]',
    om = '[object Uint8ClampedArray]',
    im = '[object Uint16Array]',
    am = '[object Uint32Array]',
    m = {};
  (m[Xg] = m[Qg] = m[em] = m[tm] = m[nm] = m[rm] = m[om] = m[im] = m[am] = !0),
    (m[Bg] =
      m[Rg] =
      m[Jg] =
      m[Vg] =
      m[Zg] =
      m[Dg] =
      m[Hg] =
      m[zg] =
      m[Fg] =
      m[qg] =
      m[Ug] =
      m[Gg] =
      m[Wg] =
      m[Kg] =
      m[Yg] =
        !1);
  function sm(e) {
    return Ng(e) && Mg(e.length) && !!m[jg(e)];
  }
  var cm = sm;
  function lm(e) {
    return function (t) {
      return e(t);
    };
  }
  var Qt = lm,
    tt = { exports: {} };
  tt.exports,
    (function (e, t) {
      var n = Dr,
        r = t && !t.nodeType && t,
        o = r && !0 && e && !e.nodeType && e,
        i = o && o.exports === r,
        a = i && n.process,
        s = (function () {
          try {
            var l = o && o.require && o.require('util').types;
            return l || (a && a.binding && a.binding('util'));
          } catch {}
        })();
      e.exports = s;
    })(tt, tt.exports);
  var en = tt.exports,
    um = cm,
    fm = Qt,
    bo = en,
    yo = bo && bo.isTypedArray,
    dm = yo ? fm(yo) : um,
    hm = dm,
    pm = Eg,
    gm = Yt,
    mm = z,
    bm = mo,
    ym = Kt,
    vm = hm,
    _m = Object.prototype,
    wm = _m.hasOwnProperty;
  function $m(e, t) {
    var n = mm(e),
      r = !n && gm(e),
      o = !n && !r && bm(e),
      i = !n && !r && !o && vm(e),
      a = n || r || o || i,
      s = a ? pm(e.length, String) : [],
      l = s.length;
    for (var u in e)
      (t || wm.call(e, u)) &&
        !(
          a &&
          (u == 'length' ||
            (o && (u == 'offset' || u == 'parent')) ||
            (i && (u == 'buffer' || u == 'byteLength' || u == 'byteOffset')) ||
            ym(u, l))
        ) &&
        s.push(u);
    return s;
  }
  var vo = $m,
    Tm = Object.prototype;
  function Sm(e) {
    var t = e && e.constructor,
      n = (typeof t == 'function' && t.prototype) || Tm;
    return e === n;
  }
  var tn = Sm;
  function Cm(e, t) {
    return function (n) {
      return e(t(n));
    };
  }
  var _o = Cm,
    Om = _o,
    Am = Om(Object.keys, Object),
    Im = Am,
    xm = tn,
    km = Im,
    Em = Object.prototype,
    Pm = Em.hasOwnProperty;
  function Lm(e) {
    if (!xm(e)) return km(e);
    var t = [];
    for (var n in Object(e)) Pm.call(e, n) && n != 'constructor' && t.push(n);
    return t;
  }
  var jm = Lm,
    Mm = Ur,
    Nm = Jt;
  function Bm(e) {
    return e != null && Nm(e.length) && !Mm(e);
  }
  var wo = Bm,
    Rm = vo,
    Vm = jm,
    Dm = wo;
  function Hm(e) {
    return Dm(e) ? Rm(e) : Vm(e);
  }
  var nn = Hm,
    zm = Qe,
    Fm = nn;
  function qm(e, t) {
    return e && zm(t, Fm(t), e);
  }
  var Um = qm;
  function Gm(e) {
    var t = [];
    if (e != null) for (var n in Object(e)) t.push(n);
    return t;
  }
  var Wm = Gm,
    Km = q,
    Ym = tn,
    Jm = Wm,
    Zm = Object.prototype,
    Xm = Zm.hasOwnProperty;
  function Qm(e) {
    if (!Km(e)) return Jm(e);
    var t = Ym(e),
      n = [];
    for (var r in e) (r == 'constructor' && (t || !Xm.call(e, r))) || n.push(r);
    return n;
  }
  var eb = Qm,
    tb = vo,
    nb = eb,
    rb = wo;
  function ob(e) {
    return rb(e) ? tb(e, !0) : nb(e);
  }
  var rn = ob,
    ib = Qe,
    ab = rn;
  function sb(e, t) {
    return e && ib(t, ab(t), e);
  }
  var cb = sb,
    nt = { exports: {} };
  nt.exports,
    (function (e, t) {
      var n = j,
        r = t && !t.nodeType && t,
        o = r && !0 && e && !e.nodeType && e,
        i = o && o.exports === r,
        a = i ? n.Buffer : void 0,
        s = a ? a.allocUnsafe : void 0;
      function l(u, h) {
        if (h) return u.slice();
        var f = u.length,
          d = s ? s(f) : new u.constructor(f);
        return u.copy(d), d;
      }
      e.exports = l;
    })(nt, nt.exports);
  var lb = nt.exports;
  function ub(e, t) {
    var n = -1,
      r = e.length;
    for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
    return t;
  }
  var fb = ub;
  function db(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
      var a = e[n];
      t(a, n, e) && (i[o++] = a);
    }
    return i;
  }
  var hb = db;
  function pb() {
    return [];
  }
  var $o = pb,
    gb = hb,
    mb = $o,
    bb = Object.prototype,
    yb = bb.propertyIsEnumerable,
    To = Object.getOwnPropertySymbols,
    vb = To
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              gb(To(e), function (t) {
                return yb.call(e, t);
              }));
        }
      : mb,
    on = vb,
    _b = Qe,
    wb = on;
  function $b(e, t) {
    return _b(e, wb(e), t);
  }
  var Tb = $b,
    Sb = _o,
    Cb = Sb(Object.getPrototypeOf, Object),
    So = Cb,
    Ob = Zt,
    Ab = So,
    Ib = on,
    xb = $o,
    kb = Object.getOwnPropertySymbols,
    Eb = kb
      ? function (e) {
          for (var t = []; e; ) Ob(t, Ib(e)), (e = Ab(e));
          return t;
        }
      : xb,
    Co = Eb,
    Pb = Qe,
    Lb = Co;
  function jb(e, t) {
    return Pb(e, Lb(e), t);
  }
  var Mb = jb,
    Nb = Zt,
    Bb = z;
  function Rb(e, t, n) {
    var r = t(e);
    return Bb(e) ? r : Nb(r, n(e));
  }
  var Oo = Rb,
    Vb = Oo,
    Db = on,
    Hb = nn;
  function zb(e) {
    return Vb(e, Hb, Db);
  }
  var Fb = zb,
    qb = Oo,
    Ub = Co,
    Gb = rn;
  function Wb(e) {
    return qb(e, Gb, Ub);
  }
  var Kb = Wb,
    Yb = K,
    Jb = j,
    Zb = Yb(Jb, 'DataView'),
    Xb = Zb,
    Qb = K,
    e0 = j,
    t0 = Qb(e0, 'Promise'),
    n0 = t0,
    r0 = K,
    o0 = j,
    i0 = r0(o0, 'Set'),
    a0 = i0,
    s0 = K,
    c0 = j,
    l0 = s0(c0, 'WeakMap'),
    u0 = l0,
    an = Xb,
    sn = qt,
    cn = n0,
    ln = a0,
    un = u0,
    Ao = te,
    ae = Wr,
    Io = '[object Map]',
    f0 = '[object Object]',
    xo = '[object Promise]',
    ko = '[object Set]',
    Eo = '[object WeakMap]',
    Po = '[object DataView]',
    d0 = ae(an),
    h0 = ae(sn),
    p0 = ae(cn),
    g0 = ae(ln),
    m0 = ae(un),
    Y = Ao;
  ((an && Y(new an(new ArrayBuffer(1))) != Po) ||
    (sn && Y(new sn()) != Io) ||
    (cn && Y(cn.resolve()) != xo) ||
    (ln && Y(new ln()) != ko) ||
    (un && Y(new un()) != Eo)) &&
    (Y = function (e) {
      var t = Ao(e),
        n = t == f0 ? e.constructor : void 0,
        r = n ? ae(n) : '';
      if (r)
        switch (r) {
          case d0:
            return Po;
          case h0:
            return Io;
          case p0:
            return xo;
          case g0:
            return ko;
          case m0:
            return Eo;
        }
      return t;
    });
  var fn = Y,
    b0 = Object.prototype,
    y0 = b0.hasOwnProperty;
  function v0(e) {
    var t = e.length,
      n = new e.constructor(t);
    return (
      t &&
        typeof e[0] == 'string' &&
        y0.call(e, 'index') &&
        ((n.index = e.index), (n.input = e.input)),
      n
    );
  }
  var _0 = v0,
    w0 = j,
    $0 = w0.Uint8Array,
    T0 = $0,
    Lo = T0;
  function S0(e) {
    var t = new e.constructor(e.byteLength);
    return new Lo(t).set(new Lo(e)), t;
  }
  var dn = S0,
    C0 = dn;
  function O0(e, t) {
    var n = t ? C0(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var A0 = O0,
    I0 = /\w*$/;
  function x0(e) {
    var t = new e.constructor(e.source, I0.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  }
  var k0 = x0,
    jo = ve,
    Mo = jo ? jo.prototype : void 0,
    No = Mo ? Mo.valueOf : void 0;
  function E0(e) {
    return No ? Object(No.call(e)) : {};
  }
  var P0 = E0,
    L0 = dn;
  function j0(e, t) {
    var n = t ? L0(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var M0 = j0,
    N0 = dn,
    B0 = A0,
    R0 = k0,
    V0 = P0,
    D0 = M0,
    H0 = '[object Boolean]',
    z0 = '[object Date]',
    F0 = '[object Map]',
    q0 = '[object Number]',
    U0 = '[object RegExp]',
    G0 = '[object Set]',
    W0 = '[object String]',
    K0 = '[object Symbol]',
    Y0 = '[object ArrayBuffer]',
    J0 = '[object DataView]',
    Z0 = '[object Float32Array]',
    X0 = '[object Float64Array]',
    Q0 = '[object Int8Array]',
    ey = '[object Int16Array]',
    ty = '[object Int32Array]',
    ny = '[object Uint8Array]',
    ry = '[object Uint8ClampedArray]',
    oy = '[object Uint16Array]',
    iy = '[object Uint32Array]';
  function ay(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case Y0:
        return N0(e);
      case H0:
      case z0:
        return new r(+e);
      case J0:
        return B0(e, n);
      case Z0:
      case X0:
      case Q0:
      case ey:
      case ty:
      case ny:
      case ry:
      case oy:
      case iy:
        return D0(e, n);
      case F0:
        return new r();
      case q0:
      case W0:
        return new r(e);
      case U0:
        return R0(e);
      case G0:
        return new r();
      case K0:
        return V0(e);
    }
  }
  var sy = ay,
    cy = q,
    Bo = Object.create,
    ly = (function () {
      function e() {}
      return function (t) {
        if (!cy(t)) return {};
        if (Bo) return Bo(t);
        e.prototype = t;
        var n = new e();
        return (e.prototype = void 0), n;
      };
    })(),
    uy = ly,
    fy = uy,
    dy = So,
    hy = tn;
  function py(e) {
    return typeof e.constructor == 'function' && !hy(e) ? fy(dy(e)) : {};
  }
  var gy = py,
    my = fn,
    by = W,
    yy = '[object Map]';
  function vy(e) {
    return by(e) && my(e) == yy;
  }
  var _y = vy,
    wy = _y,
    $y = Qt,
    Ro = en,
    Vo = Ro && Ro.isMap,
    Ty = Vo ? $y(Vo) : wy,
    Sy = Ty,
    Cy = fn,
    Oy = W,
    Ay = '[object Set]';
  function Iy(e) {
    return Oy(e) && Cy(e) == Ay;
  }
  var xy = Iy,
    ky = xy,
    Ey = Qt,
    Do = en,
    Ho = Do && Do.isSet,
    Py = Ho ? Ey(Ho) : ky,
    Ly = Py,
    jy = Sg,
    My = Og,
    Ny = Wt,
    By = Um,
    Ry = cb,
    Vy = lb,
    Dy = fb,
    Hy = Tb,
    zy = Mb,
    Fy = Fb,
    qy = Kb,
    Uy = fn,
    Gy = _0,
    Wy = sy,
    Ky = gy,
    Yy = z,
    Jy = mo,
    Zy = Sy,
    Xy = q,
    Qy = Ly,
    ev = nn,
    tv = rn,
    nv = 1,
    rv = 2,
    ov = 4,
    zo = '[object Arguments]',
    iv = '[object Array]',
    av = '[object Boolean]',
    sv = '[object Date]',
    cv = '[object Error]',
    Fo = '[object Function]',
    lv = '[object GeneratorFunction]',
    uv = '[object Map]',
    fv = '[object Number]',
    qo = '[object Object]',
    dv = '[object RegExp]',
    hv = '[object Set]',
    pv = '[object String]',
    gv = '[object Symbol]',
    mv = '[object WeakMap]',
    bv = '[object ArrayBuffer]',
    yv = '[object DataView]',
    vv = '[object Float32Array]',
    _v = '[object Float64Array]',
    wv = '[object Int8Array]',
    $v = '[object Int16Array]',
    Tv = '[object Int32Array]',
    Sv = '[object Uint8Array]',
    Cv = '[object Uint8ClampedArray]',
    Ov = '[object Uint16Array]',
    Av = '[object Uint32Array]',
    g = {};
  (g[zo] =
    g[iv] =
    g[bv] =
    g[yv] =
    g[av] =
    g[sv] =
    g[vv] =
    g[_v] =
    g[wv] =
    g[$v] =
    g[Tv] =
    g[uv] =
    g[fv] =
    g[qo] =
    g[dv] =
    g[hv] =
    g[pv] =
    g[gv] =
    g[Sv] =
    g[Cv] =
    g[Ov] =
    g[Av] =
      !0),
    (g[cv] = g[Fo] = g[mv] = !1);
  function rt(e, t, n, r, o, i) {
    var a,
      s = t & nv,
      l = t & rv,
      u = t & ov;
    if ((n && (a = o ? n(e, r, o, i) : n(e)), a !== void 0)) return a;
    if (!Xy(e)) return e;
    var h = Yy(e);
    if (h) {
      if (((a = Gy(e)), !s)) return Dy(e, a);
    } else {
      var f = Uy(e),
        d = f == Fo || f == lv;
      if (Jy(e)) return Vy(e, s);
      if (f == qo || f == zo || (d && !o)) {
        if (((a = l || d ? {} : Ky(e)), !s))
          return l ? zy(e, Ry(a, e)) : Hy(e, By(a, e));
      } else {
        if (!g[f]) return o ? e : {};
        a = Wy(e, f, s);
      }
    }
    i || (i = new jy());
    var y = i.get(e);
    if (y) return y;
    i.set(e, a),
      Qy(e)
        ? e.forEach(function (b) {
            a.add(rt(b, t, n, b, e, i));
          })
        : Zy(e) &&
          e.forEach(function (b, A) {
            a.set(A, rt(b, t, n, A, e, i));
          });
    var v = u ? (l ? qy : Fy) : l ? tv : ev,
      p = h ? void 0 : v(e);
    return (
      My(p || e, function (b, A) {
        p && ((A = b), (b = e[A])), Ny(a, A, rt(b, t, n, A, e, i));
      }),
      a
    );
  }
  var Iv = rt,
    xv = Iv,
    kv = 1,
    Ev = 4;
  function Pv(e) {
    return xv(e, kv | Ev);
  }
  var Lv = Pv;
  const hn = $e(Lv);
  var jv = { exports: {} };
  /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function n() {
        for (var i = '', a = 0; a < arguments.length; a++) {
          var s = arguments[a];
          s && (i = o(i, r(s)));
        }
        return i;
      }
      function r(i) {
        if (typeof i == 'string' || typeof i == 'number') return i;
        if (typeof i != 'object') return '';
        if (Array.isArray(i)) return n.apply(null, i);
        if (
          i.toString !== Object.prototype.toString &&
          !i.toString.toString().includes('[native code]')
        )
          return i.toString();
        var a = '';
        for (var s in i) t.call(i, s) && i[s] && (a = o(a, s));
        return a;
      }
      function o(i, a) {
        return a ? (i ? i + ' ' + a : i + a) : i;
      }
      e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
  })(jv);
  const ot = '[vue3-aipage-widget]';
  function Mv(e) {
    let t = F.react;
    if (!e) return t;
    let n = e.toLowerCase().trim();
    switch (n) {
      case 'jquery':
      case 'jq':
        n = F.jquery;
        break;
      case 'vue2':
      case 'vue 2':
      case 'vue2.0':
      case 'vue 2.0':
        (n = F.vue2),
          console.error(
            'vue3-aipage-widget 不支持 vue2.0 技术栈，请改用aipage-widget支持。',
          );
        break;
      case 'vue':
      case 'vue3':
      case 'vue 3':
      case 'vue3.0':
      case 'vue 3.0':
        n = F.vue3;
        break;
      default:
        n = F.react;
    }
    return n;
  }
  var F;
  (function (e) {
    (e.react = 'react'),
      (e.vue2 = 'vue2'),
      (e.vue3 = 'vue3'),
      (e.jquery = 'jquery');
  })(F || (F = {}));
  function Nv(e) {
    return Object.prototype.toString.call(e).slice(8, -1) === 'String';
  }
  function Bv(e) {
    let t = !1;
    return (
      Object.prototype.toString.call(e).slice(8, -1) === 'Object' && (t = !0), t
    );
  }
  function Uo(e) {
    return parseFloat(String(e)).toString() !== 'NaN';
  }
  function Rv(e) {
    return e.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
  function Vv(e) {
    return `-${e}`.replace(/(-[A-Za-z0-9])/g, (t) =>
      t.toUpperCase().replace('-', ''),
    );
  }
  function Dv(e, t = !0) {
    const n =
      e && e.__super
        ? Object.create(e.__super, {
            __super: { value: e.__super, writable: !1, enumerable: !1 },
          })
        : Object.create(Object.prototype);
    return t && e && Object.keys(e).forEach((r) => (n[r] = e[r])), n;
  }
  function Hv(e, t, n = !0) {
    const r = Dv(e, n);
    return t && Object.keys(t).forEach((o) => (r[o] = t[o])), r;
  }
  const zv = 375,
    se = function (e) {
      return e;
    };
  function _(e) {
    const t = (+[e][e && 0] / 375) * zv;
    return Number.isNaN(t) ? void 0 : `${Math.round(t)}px`;
  }
  function Fv(e = {}) {
    const t = Xt(
      hn(e) || {},
      'backgroundImage',
      'backgroundRepeat',
      'backgroundSize',
      'backgroundPosition',
      'backgroundColor',
    );
    return (
      e.backgroundImage && /linear-gradient/g.test(e.backgroundImage)
        ? (t.backgroundImage = e.backgroundImage)
        : (e.backgroundColor && (t.backgroundColor = se(e.backgroundColor)),
          e.backgroundImage &&
            (t.backgroundImage = `url('${e.backgroundImage}')`)),
      t
    );
  }
  function qv(e = {}) {
    let t = Xt(hn(e) || {}, 'color', 'fontFamily', 'lineHeight', 'textAlign');
    return (
      e.bold && (t.fontWeight = 'bold'),
      e.italic && (t.fontStyle = 'italic'),
      e.underline && (t.textDecoration = 'underline'),
      e.lines && (t.WebkitLineClamp = `${e.lines}`),
      t.lineHeight &&
        (t.lineHeight =
          t.lineHeight >= 12
            ? `${parseInt(t.lineHeight, 10)}px`
            : parseInt(t.lineHeight, 10)),
      (t.fontSize = _(+e.fontSize)),
      (t.letterSpacing = _(+e.letterSpacing)),
      t
    );
  }
  function Uv(e = {}) {
    const t = Xt(
      hn(e) || {},
      'borderLeftStyle',
      'borderRightStyle',
      'borderTopStyle',
      'borderBottomStyle',
      'borderLeftColor',
      'borderRightColor',
      'borderTopColor',
      'borderBottomColor',
    );
    return (
      +e.borderTopWidth > 0
        ? ((t.borderTopWidth = _(+e.borderTopWidth)),
          (t.borderTopColor = se(e.borderTopColor)))
        : delete t.borderTopStyle,
      +e.borderLeftWidth > 0
        ? ((t.borderLeftWidth = _(+e.borderLeftWidth)),
          (t.borderLeftColor = se(e.borderLeftColor)))
        : delete t.borderLeftStyle,
      +e.borderRightWidth > 0
        ? ((t.borderRightWidth = _(+e.borderRightWidth)),
          (t.borderRightColor = se(e.borderRightColor)))
        : delete t.borderRightStyle,
      +e.borderBottomWidth > 0
        ? ((t.borderBottomWidth = _(+e.borderBottomWidth)),
          (t.borderBottomColor = se(e.borderBottomColor)))
        : delete t.borderBottomStyle,
      (t.marginTop = _(+e.marginTop)),
      (t.marginLeft = _(+e.marginLeft)),
      (t.marginRight = _(+e.marginRight)),
      (t.marginBottom = _(+e.marginBottom)),
      (t.paddingTop = _(+e.paddingTop)),
      (t.paddingLeft = _(+e.paddingLeft)),
      (t.paddingRight = _(+e.paddingRight)),
      (t.paddingBottom = _(+e.paddingBottom)),
      (t.borderTopLeftRadius = _(+e.borderTopLeftRadius)),
      (t.borderTopRightRadius = _(+e.borderTopRightRadius)),
      (t.borderBottomLeftRadius = _(+e.borderBottomLeftRadius)),
      (t.borderBottomRightRadius = _(+e.borderBottomRightRadius)),
      t
    );
  }
  function Gv(e = {}) {
    var n, r;
    let t = {};
    if ((e.display && (t.display = e.display), t.display === 'flex')) {
      let o = e.flexSetting || {};
      (t.flexDirection = o.direction || 'row'),
        (t.alignItems = o.align || 'stretch'),
        (t.justifyContent = o.justify || 'flex-start');
    }
    return (
      ((n = e.flexSetting) == null ? void 0 : n.flexShrink) >= 0 &&
        (t.flexShrink = +e.flexSetting.flexShrink),
      ((r = e.flexSetting) == null ? void 0 : r.flex) >= 0 &&
        (t.flex = +e.flexSetting.flex),
      t
    );
  }
  function ce(e, t) {
    const n = e[t + 'Unit'] || 'px';
    return n === 'auto' || e[t] <= 0
      ? 'auto'
      : n === 'px'
      ? _(+e[t])
      : e[t] + n;
  }
  function Wv(e) {
    let { style: t = {}, isFlow: n } =
        (e == null ? void 0 : e.componentProperties) || {},
      r = (t.justification || 'top left').split(' '),
      o = {};
    return (
      n
        ? ((o.height = ce(t, 'height')),
          (o.width = ce(t, 'width')),
          (o.maxWidth = '100%'),
          o.width > 0 && (o.flexShrink = 0))
        : ((o[r[1]] = +t.x + 'px'),
          (o[r[0]] = +t.y + 'px'),
          (o.height = ce(t, 'height') || 'auto'),
          (o.width = ce(t, 'width') || '100%'),
          (o.position = t.position || 'absolute')),
      t.opacity >= 0 && (o.opacity = +t.opacity / 100),
      t.display && (o.display = t.display),
      o
    );
  }
  function Kv(e = {}) {
    const {
        angle: t = 0,
        x: n,
        y: r,
        blur: o,
        size: i,
        color: a,
        distance: s,
      } = e,
      l = typeof n < 'u' ? n : Math.round(Math.sin(t * (Math.PI / 180)) * s),
      u = typeof r < 'u' ? r : -Math.round(Math.cos(t * (Math.PI / 180)) * s);
    return !n && !r && !o && !i && !s
      ? {}
      : go(l) && go(u)
      ? { boxShadow: `${_(l)} ${_(u)} ${_(o || 0)} ${_(i || 0)} ${se(a)}` }
      : {};
  }
  function Yv(e, t) {
    return CSS.supports(e, t);
  }
  function Go(e = {}) {
    let t = {};
    return (
      Object.keys(e).forEach((n) => {
        switch (n) {
          case 'box':
            t = Object.assign(t, Uv(e.box));
            break;
          case 'background':
            t = Object.assign(t, Fv(e.background));
            break;
          case 'font':
            t = Object.assign(t, qv(e.font));
            break;
          case 'lineHeight':
            t.lineHeight =
              e[n] >= 12 ? `${parseInt(e[n], 10)}px` : parseInt(e[n], 10);
            break;
          case 'boxShadow':
            t = Object.assign(t, Kv(e.boxShadow));
            break;
          case 'opacity':
            t.opacity = +e[n] / 100;
            break;
          case 'width':
            t.width = e.autoWidth ? 'auto' : ce(e, 'width');
            break;
          case 'flexSetting':
            t = Object.assign(t, Gv(e));
            break;
          case 'height':
            t.height = ce(e, 'height');
            break;
          default:
            let r = Uo(e[n]) ? `${+e[n]}px` : e[n];
            Bv(e[n])
              ? (t = Object.assign(t, { [n]: Go(e[n]) }))
              : ![
                  'x',
                  'y',
                  'css',
                  'lineClamp',
                  'columns',
                  'flex',
                  'scrollX',
                ].includes(n) &&
                Yv(Rv(n), r) &&
                (t[n] = Uo(e[n]) ? `${+e[n]}px` : e[n]);
            break;
        }
      }),
      t
    );
  }
  (Ko = window.matchMedia) == null ||
    Ko.call(window, '(max-width: 768px)').matches;
  function Jv(e) {
    if (!e || (typeof e != 'function' && typeof e != 'object')) return;
    class t extends C.Component {
      constructor(o) {
        super(o);
        we(this, 'domRef');
        we(this, 'app');
        we(this, 'vm');
        we(this, 'isUnmount');
        (this.domRef = C.createRef()),
          (this.resolveAmisProps = this.resolveAmisProps.bind(this));
      }
      componentDidMount() {
        const { amisData: o, amisFunc: i } = this.resolveAmisProps(),
          { data: a, ...s } = (e = typeof e == 'function' ? new e() : e);
        (this.app = c.createApp({
          data: () => Hv(o, typeof a == 'function' ? a() : a),
          ...s,
          props: s.props || {},
        })),
          this.app && !this.app.prototype && (this.app.prototype = {}),
          this.app && !this.app.filter && (this.app.filter = () => {}),
          this.app.use(Zl),
          Object.keys(i).forEach((l) => {
            this.app.$props[l] = i[l];
          }),
          (this.vm = this.app.mount(this.domRef.current)),
          this.domRef.current.setAttribute('data-component-id', this.props.id);
      }
      componentDidUpdate() {
        if (!this.isUnmount) {
          const { amisData: o } = this.resolveAmisProps();
          this.vm &&
            (Object.keys(o).forEach((i) => {
              this.vm[i] = o[i];
            }),
            this.vm.$forceUpdate());
        }
      }
      componentWillUnmount() {
        (this.isUnmount = !0), this.app.unmount();
      }
      resolveAmisProps() {
        let o = {},
          i = {};
        return (
          Object.keys(this.props).forEach((a) => {
            const s = this.props[a];
            typeof s == 'function'
              ? (o[a] = s)
              : c.isProxy(s)
              ? (i[a] = c.shallowRef(s))
              : Zo(s)
              ? (i[a] = c.ref(s))
              : (i[a] = s);
          }),
          { amisData: i, amisFunc: o }
        );
      }
      render() {
        const { componentProperties: o, node: i } = this.props,
          a = o && o.style ? o.style : {},
          s = { ...Wv(i || this.props), ...Go(a) };
        return C.createElement('div', { ref: this.domRef, style: s });
      }
    }
    return t;
  }
  function Zv(e, t) {
    if (!e) return;
    const n = { type: '', framework: F.react };
    if (
      (t && Nv(t) ? Object.assign(n, { type: t }) : Object.assign(n, t),
      n && !n.type)
    )
      console.error(
        `${ot}自定义组件注册失败，自定义组件类型（type）不能为空。`,
      );
    else {
      n.framework = Mv(n.framework);
      const o = { react: (i) => i, vue3: Jv }[n.framework](e);
      if (window) {
        const i = Xv(n.type, o);
        i &&
          (console.info(`${ot}触发注册自定义渲染器(${n.type})事件:`, {
            type: n.type,
            component: o,
            framework: n.framework,
          }),
          window.postMessage(
            {
              type: 'aipage-editor-register-renderer-event',
              eventMsg: `${ot}注册一个自定义aipage-editor渲染器`,
              customComponentId: i,
            },
            '*',
          ));
      }
    }
  }
  function Xv(e, t) {
    window &&
      !window.AIPageEditorCustomRenderers &&
      (window.AIPageEditorCustomRenderers = {});
    const n = Vv(e);
    if (window.AIPageEditorCustomRenderers[n])
      console.error(`${ot}注册自定义渲染器失败，已存在同名渲染器类型(${e})。`);
    else return (window.AIPageEditorCustomRenderers[n] = t), n;
    return null;
  }
  const h1 = '',
    p1 = '',
    g1 = '',
    Wo = (e, t) => {
      const n = e.__vccOpts || e;
      for (const [r, o] of t) n[r] = o;
      return n;
    },
    Qv = {
      name: 'LotteryMachine',
      data() {
        return {
          delay: 0,
          duration: 0,
          direction: 'up',
          rollState: 'stop',
          prizeList: [],
          translateY: [0, 0, 0],
          shaftList: [],
          lampTimer: !1,
          lamps: [
            { color: '#97eefb' },
            { color: '#fecc6a' },
            { color: '#fb7c84' },
            { color: '#a097ff' },
            { color: '#fd0100' },
          ],
        };
      },
      emits: ['init', 'roll'],
      methods: {
        init({
          prizeList: e,
          defaultResults: t = [],
          delay: n = 200,
          duration: r = 4e3,
          direction: o = 'up',
        }) {
          if (
            (typeof n != 'number' &&
              (console.warn('delay参数应该传入整型'),
              (n = parseInt(n)),
              (n = isNaN(n) ? 200 : n)),
            typeof r != 'number' &&
              (console.warn('duration参数应该传入整型'),
              (r = parseInt(r)),
              (r = isNaN(r) ? 4e3 : r)),
            typeof e != 'object')
          )
            return console.error('prizeList参数应该传入数组对象');
          if (typeof t != 'object')
            return console.error('defaultResults参数应该传入数组');
          if (o != 'up' && o != 'down')
            return console.error('direction参数应该传入"up"或者"down"');
          (this.direction = o),
            r < 4e3 && (r = 4e3),
            (r = r - n * 2),
            (this.prizeList = e);
          let i = [];
          i.length = 3;
          for (let a = 0; a < 3; a++) {
            i[a] = this.shuffle(e);
            for (let s = 0, l = i[a].length; s < l; s++)
              i[a][s].HMSM_id = 'id_' + a + '_' + s;
          }
          if (
            ((this.shaftList = i),
            t.length == 3 &&
              (this.setTranslateY(t),
              setTimeout(() => {
                this.stop();
              }, 50)),
            this.direction == 'down')
          ) {
            let a = (this.shaftList[1].length - 1) * -100;
            this.translateY.splice(0, 3, a, a, a);
          }
          (this.duration = r), (this.delay = n);
        },
        roll({ results: e = null, success: t = null }) {
          if (this.rollState == 'start') return console.warn('正在抽奖哦！');
          if (typeof e != 'object')
            return console.error('请传入正确的开奖结果参数results');
          this.rollState = 'start';
          let n = this.setTranslateY(e);
          this.lampTimer && clearInterval(this.lampTimer),
            this.startSwitchLamp(),
            setTimeout(() => {
              typeof t == 'function' && t(n), this.stop();
            }, this.duration + 1e3);
        },
        setTranslateY(e) {
          let t = { results: [] };
          for (let n = 0, r = e.length; n < r; n++)
            if (this.direction == 'up') {
              for (let o = this.shaftList[n].length - 1; o >= 0; o--)
                if (this.shaftList[n][o].value == e[n]) {
                  t.results.push(
                    JSON.parse(JSON.stringify(this.shaftList[n][o])),
                  ),
                    setTimeout(() => {
                      this.translateY.splice(n, 1, o * -100);
                    }, n * this.delay);
                  break;
                }
            } else
              for (let o = 0, i = this.shaftList[n].length; o < i; o++)
                if (this.shaftList[n][o].value == e[n]) {
                  t.results.push(
                    JSON.parse(JSON.stringify(this.shaftList[n][o])),
                  ),
                    setTimeout(() => {
                      this.translateY.splice(n, 1, o * -100);
                    }, n * this.delay);
                  break;
                }
          return t;
        },
        stop() {
          (this.rollState = 'stop'),
            this.lampTimer && clearInterval(this.lampTimer),
            this.$nextTick(function () {
              let e =
                (this.shaftList[0].length / this.prizeList.length - 1) *
                this.prizeList.length *
                100;
              e = (this.direction == 'up' && e) || -e;
              for (let t = 0, n = this.translateY.length; t < n; t++) {
                let r = this.translateY[t] + e;
                this.translateY.splice(t, 1, r);
              }
            });
        },
        startSwitchLamp() {
          this.lampTimer = setInterval(() => {
            this.rollState != 'stop' &&
              (this.direction == 'up'
                ? this.lamps.push(this.lamps.shift())
                : this.lamps.unshift(this.lamps.pop()));
          }, 50);
        },
        shuffle(e) {
          let t = JSON.parse(JSON.stringify(e));
          for (let o = 1; o < t.length; o++) {
            const i = Math.floor(Math.random() * (o + 1));
            [t[o], t[i]] = [t[i], t[o]];
          }
          let n = Math.ceil(40 / e.length),
            r = [];
          for (; n > 0; ) r.push(...t), n--;
          return JSON.parse(JSON.stringify(r));
        },
      },
    };
  function e1(e, t, n, r, o, i) {
    const a = tc;
    return (
      c.openBlock(),
      c.createElementBlock('div', { class: 'shell' }, [
        c.createElementVNode('div', { class: 'l' }, [
          c.createCommentVNode(' 小灯列表 '),
          (c.openBlock(!0),
          c.createElementBlock(
            c.Fragment,
            null,
            c.renderList(
              o.lamps,
              (s, l) => (
                c.openBlock(),
                c.createElementBlock(
                  'div',
                  {
                    class: 'lamp',
                    key: s.color,
                    style: c.normalizeStyle({
                      'background-color': s.color,
                      'box-shadow': '0 0 5px ' + s.color,
                    }),
                  },
                  null,
                  4,
                )
              ),
            ),
            128,
          )),
        ]),
        c.createElementVNode('div', { class: 'c' }, [
          c.createElementVNode('div', { class: 'HMSM' }, [
            c.createCommentVNode(' 背景 '),
            c.createElementVNode('div', { class: 'HMSM-display-bg' }, [
              (c.openBlock(!0),
              c.createElementBlock(
                c.Fragment,
                null,
                c.renderList(
                  o.shaftList,
                  (s, l) => (
                    c.openBlock(),
                    c.createElementBlock('div', { key: l, class: 'box' })
                  ),
                ),
                128,
              )),
            ]),
            c.createCommentVNode(' 奖品列表 '),
            c.createElementVNode('div', { class: 'HMSM-display' }, [
              (c.openBlock(!0),
              c.createElementBlock(
                c.Fragment,
                null,
                c.renderList(
                  o.shaftList,
                  (s, l) => (
                    c.openBlock(),
                    c.createElementBlock(
                      'div',
                      {
                        key: l,
                        class: c.normalizeClass([
                          'HMSM-shaft',
                          { roll_animation: o.rollState == 'start' },
                        ]),
                        style: c.normalizeStyle({
                          transform:
                            'translate3d(0, ' + o.translateY[l] + '%, 0)',
                          'transition-duration': o.duration + 'ms',
                        }),
                      },
                      [
                        (c.openBlock(!0),
                        c.createElementBlock(
                          c.Fragment,
                          null,
                          c.renderList(
                            s,
                            (u, h) => (
                              c.openBlock(),
                              c.createBlock(
                                a,
                                { class: 'img-view', key: u.HMSM_id },
                                {
                                  default: c.withCtx(() => [
                                    c.createElementVNode(
                                      'img',
                                      { class: 'image', src: u.img },
                                      null,
                                      8,
                                      ['src'],
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              )
                            ),
                          ),
                          128,
                        )),
                      ],
                      6,
                    )
                  ),
                ),
                128,
              )),
            ]),
          ]),
        ]),
        c.createElementVNode('div', { class: 'r' }, [
          c.createCommentVNode(' 小灯列表 '),
          (c.openBlock(!0),
          c.createElementBlock(
            c.Fragment,
            null,
            c.renderList(
              o.lamps,
              (s, l) => (
                c.openBlock(),
                c.createElementBlock(
                  'div',
                  {
                    class: 'lamp',
                    key: s.color,
                    style: c.normalizeStyle({
                      'background-color': s.color,
                      'box-shadow': '0 0 5px ' + s.color,
                    }),
                  },
                  null,
                  4,
                )
              ),
            ),
            128,
          )),
        ]),
      ])
    );
  }
  const t1 = Wo(Qv, [
      ['render', e1],
      ['__scopeId', 'data-v-5a1dd0a0'],
    ]),
    m1 = '',
    n1 = {
      props: ['componentProperties'],
      data() {
        return {
          defaultPrizeList: [
            {
              name: 'iPhone13',
              value: 'iPhone',
              img: 'https://user-images.githubusercontent.com/11958920/184317722-f7a110f8-0084-4b6b-b49d-309ede05b14a.png',
            },
            {
              name: 'airPods3',
              value: 'airPods',
              img: 'https://user-images.githubusercontent.com/11958920/184317817-0d64d28d-20cf-4975-9a07-7a16e70f85bf.png',
            },
            {
              name: '行李箱',
              value: 'luggage',
              img: 'https://user-images.githubusercontent.com/11958920/184317875-20c2df50-6901-4364-b3c7-e086bb717a72.png',
            },
            {
              name: '风筒',
              value: 'dryer',
              img: 'https://user-images.githubusercontent.com/11958920/184317938-03c2cc33-948d-45e6-8eba-1b473966ea1e.png',
            },
            {
              name: '平行车',
              value: 'balanceCar',
              img: 'https://user-images.githubusercontent.com/11958920/184317959-9a38abd1-12da-43fa-b93a-eb3e0fbc1ed1.png',
            },
            {
              name: 'iPad5',
              value: 'iPad',
              img: 'https://user-images.githubusercontent.com/11958920/184317974-d0f9d220-b0eb-4596-9e9b-84767dee8b8c.png',
            },
          ],
        };
      },
      beforeCreate() {
        console.log('beforeCreate:', this.prizeList);
      },
      computed: {
        prizeList() {
          return (
            (this.componentProperties &&
              this.componentProperties.data &&
              this.componentProperties.data.prizeList) ||
            this.defaultPrizeList
          );
        },
        prizeResult() {
          return (
            this.componentProperties &&
            this.componentProperties.data &&
            this.componentProperties.data.prizeResult
          );
        },
      },
      components: { LotteryMachine: t1 },
      mounted() {
        this.$refs.LotteryMachine.init({
          prizeList: this.prizeList,
          defaultResults: ['iPhone', 'airPods', 'luggage'],
          duration: 4e3,
          direction: 'up',
        });
      },
      methods: {
        startLottery() {
          const e = this.prizeResult || this.getResults();
          console.log('当前奖品结果：', e),
            this.$refs.LotteryMachine.roll({
              results: e,
              success: (t) => {
                console.log('success e: ', t);
              },
            });
        },
        getResults() {
          let e = this.prizeList.length - 1,
            t = [
              Math.floor(Math.random() * (e - 1 + 1) + 1),
              Math.floor(Math.random() * (e - 1 + 1) + 1),
              Math.floor(Math.random() * (e - 1 + 1) + 1),
            ];
          return [
            this.prizeList[t[0]].value,
            this.prizeList[t[1]].value,
            this.prizeList[t[2]].value,
          ];
        },
      },
    };
  function r1(e, t, n, r, o, i) {
    const a = c.resolveComponent('LotteryMachine'),
      s = ec;
    return (
      c.openBlock(),
      c.createElementBlock('div', { class: 'content' }, [
        c.createElementVNode('div', { class: 'sm' }, [
          c.createVNode(a, { ref: 'LotteryMachine' }, null, 512),
        ]),
        c.createElementVNode(
          'div',
          {
            class: 'start',
            onClick:
              t[0] ||
              (t[0] = c.withModifiers(
                (...l) => i.startLottery && i.startLottery(...l),
                ['stop'],
              )),
          },
          [
            c.createVNode(
              s,
              { class: 'start-text' },
              { default: c.withCtx(() => [c.createTextVNode('抽奖')]), _: 1 },
            ),
          ],
        ),
      ])
    );
  }
  Zv(
    Wo(n1, [
      ['render', r1],
      ['__scopeId', 'data-v-bb8dcf3d'],
    ]),
    { type: 'uni-lottery-card', framework: 'vue3' },
  );
});

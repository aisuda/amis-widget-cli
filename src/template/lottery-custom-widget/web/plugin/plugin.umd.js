(function (j, u) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = u(require('react'), require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['react', 'vue'], u)
    : ((j = typeof globalThis < 'u' ? globalThis : j || self),
      (j.plugin = u(j.react, j.vue)));
})(this, function (j, u) {
  var Dr;
  ('use strict');
  var se =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {};
  function zr(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var De = zr;
  window.uni || (window.uni = {});
  const Kp = '',
    b = Object.assign,
    qr = Object.prototype.hasOwnProperty,
    ce = (e, t) => qr.call(e, t),
    R = Array.isArray,
    w = (e) => typeof e == 'function',
    A = (e) => typeof e == 'string',
    Fr = (e) => e !== null && typeof e == 'object',
    Ur = (e) => Fr(e) && w(e.then) && w(e.catch),
    Gr = Object.prototype.toString,
    Wr = (e) => Gr.call(e),
    O = (e) => Wr(e) === '[object Object]',
    kt = `
`,
    Kr = 'UNI_LOCALE',
    Zr = /^([a-z-]+:)?\/\//i,
    Jr = /^data:.*,.*/,
    Xr = 'onHide',
    Et = 'onThemeChange',
    Yr = 'onUnload',
    Lt = 'onBackPress',
    Qr = 'onNavigationBarChange';
  function eo(e = '') {
    return ('' + e).replace(/[^\x00-\xff]/g, '**').length;
  }
  function Nt(e) {
    return e.indexOf('/') === 0;
  }
  function He(e) {
    return Nt(e) ? e : '/' + e;
  }
  function to(e) {
    return Nt(e) ? e.slice(1) : e;
  }
  const no = (e, t) => {
    let n;
    for (let r = 0; r < e.length; r++) n = e[r](t);
    return n;
  };
  function ze(e, t = null) {
    let n;
    return (...r) => (e && ((n = e.apply(t, r)), (e = null)), n);
  }
  function ro(e) {
    let t = {};
    return (
      O(e) &&
        Object.keys(e)
          .sort()
          .forEach((n) => {
            const r = n;
            t[r] = e[r];
          }),
      Object.keys(t) ? t : e
    );
  }
  function oo(e) {
    return { passive: e };
  }
  function Mt(e) {
    try {
      return decodeURIComponent('' + e);
    } catch {}
    return '' + e;
  }
  const io = /\+/g;
  function ao(e) {
    const t = {};
    if (e === '' || e === '?') return t;
    const r = (e[0] === '?' ? e.slice(1) : e).split('&');
    for (let o = 0; o < r.length; ++o) {
      const i = r[o].replace(io, ' ');
      let a = i.indexOf('='),
        s = Mt(a < 0 ? i : i.slice(0, a)),
        c = a < 0 ? null : Mt(i.slice(a + 1));
      if (s in t) {
        let l = t[s];
        R(l) || (l = t[s] = [l]), l.push(c);
      } else t[s] = c;
    }
    return t;
  }
  function so(e) {
    const [t, n] = e.split('?', 2);
    return { path: t, query: ao(n || '') };
  }
  class co {
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
  const jt = function () {};
  jt.prototype = {
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
  var uo = jt;
  const Rt = { black: 'rgba(0,0,0,0.4)', white: 'rgba(255,255,255,0.4)' };
  function lo(e) {
    return e && e in Rt ? Rt[e] : e;
  }
  function fo(e) {
    return e === 'black' ? '#000000' : '#ffffff';
  }
  function qe(e, t = {}, n = 'light') {
    const r = t[n],
      o = {};
    return r
      ? (Object.keys(e).forEach((i) => {
          let a = e[i];
          o[i] = (() => {
            if (O(a)) return qe(a, t, n);
            if (R(a)) return a.map((s) => (O(s) ? qe(s, t, n) : s));
            if (A(a) && a.startsWith('@')) {
              const s = a.replace('@', '');
              let c = r[s] || a;
              switch (i) {
                case 'titleColor':
                  c = fo(c);
                  break;
                case 'borderStyle':
                  c = lo(c);
                  break;
              }
              return c;
            }
            return a;
          })();
        }),
        o)
      : e;
  }
  const po = (e) => e !== null && typeof e == 'object',
    ho = ['{', '}'];
  class go {
    constructor() {
      this._caches = Object.create(null);
    }
    interpolate(t, n, r = ho) {
      if (!n) return [t];
      let o = this._caches[t];
      return o || ((o = vo(t, r)), (this._caches[t] = o)), yo(o, n);
    }
  }
  const mo = /^(?:\d)+/,
    bo = /^(?:\w)+/;
  function vo(e, [t, n]) {
    const r = [];
    let o = 0,
      i = '';
    for (; o < e.length; ) {
      let a = e[o++];
      if (a === t) {
        i && r.push({ type: 'text', value: i }), (i = '');
        let s = '';
        for (a = e[o++]; a !== void 0 && a !== n; ) (s += a), (a = e[o++]);
        const c = a === n,
          l = mo.test(s) ? 'list' : c && bo.test(s) ? 'named' : 'unknown';
        r.push({ value: s, type: l });
      } else i += a;
    }
    return i && r.push({ type: 'text', value: i }), r;
  }
  function yo(e, t) {
    const n = [];
    let r = 0;
    const o = Array.isArray(t) ? 'list' : po(t) ? 'named' : 'unknown';
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
  const X = 'zh-Hans',
    ue = 'zh-Hant',
    I = 'en',
    Fe = 'fr',
    Ue = 'es',
    _o = Object.prototype.hasOwnProperty,
    Bt = (e, t) => _o.call(e, t),
    wo = new go();
  function To(e, t) {
    return !!t.find((n) => e.indexOf(n) !== -1);
  }
  function So(e, t) {
    return t.find((n) => e.indexOf(n) === 0);
  }
  function Vt(e, t) {
    if (!e) return;
    if (((e = e.trim().replace(/_/g, '-')), t && t[e])) return e;
    if (((e = e.toLowerCase()), e === 'chinese')) return X;
    if (e.indexOf('zh') === 0)
      return e.indexOf('-hans') > -1
        ? X
        : e.indexOf('-hant') > -1 || To(e, ['-tw', '-hk', '-mo', '-cht'])
        ? ue
        : X;
    let n = [I, Fe, Ue];
    t && Object.keys(t).length > 0 && (n = Object.keys(t));
    const r = So(e, n);
    if (r) return r;
  }
  class $o {
    constructor({
      locale: t,
      fallbackLocale: n,
      messages: r,
      watcher: o,
      formater: i,
    }) {
      (this.locale = I),
        (this.fallbackLocale = I),
        (this.message = {}),
        (this.messages = {}),
        (this.watchers = []),
        n && (this.fallbackLocale = n),
        (this.formater = i || wo),
        (this.messages = r || {}),
        this.setLocale(t || I),
        o && this.watchLocale(o);
    }
    setLocale(t) {
      const n = this.locale;
      (this.locale = Vt(t, this.messages) || this.fallbackLocale),
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
              Bt(o, i) || (o[i] = n[i]);
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
          ? ((n = Vt(n, this.messages)), n && (o = this.messages[n]))
          : (r = n),
        Bt(o, t)
          ? this.formater.interpolate(o[t], r).join('')
          : (console.warn(
              `Cannot translate the value of keypath ${t}. Use the value of keypath as default.`,
            ),
            t)
      );
    }
  }
  function Co() {
    return typeof uni < 'u' && me
      ? me()
      : typeof global < 'u' && global.getLocale
      ? global.getLocale()
      : I;
  }
  function Oo(e, t = {}, n, r) {
    typeof e != 'string' && ([e, t] = [t, e]),
      typeof e != 'string' && (e = Co()),
      typeof n != 'string' &&
        (n = (typeof __uniConfig < 'u' && __uniConfig.fallbackLocale) || I);
    const o = new $o({ locale: e, fallbackLocale: n, messages: t, watcher: r });
    let i = (a, s) => (
      typeof Se != 'function'
        ? (i = function (c, l) {
            return o.t(c, l);
          })
        : (i = function (c, l) {
            return Se().$vm, o.t(c, l);
          }),
      i(a, s)
    );
    return {
      i18n: o,
      f(a, s, c) {
        return o.f(a, s, c);
      },
      t(a, s) {
        return i(a, s);
      },
      add(a, s, c = !0) {
        return o.add(a, s, c);
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
   */ var Dt;
  (function (e) {
    (e.pop = 'pop'), (e.push = 'push');
  })(Dt || (Dt = {}));
  var Ht;
  (function (e) {
    (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
  })(Ht || (Ht = {}));
  const Ao = Symbol('');
  var zt;
  (function (e) {
    (e[(e.aborted = 4)] = 'aborted'),
      (e[(e.cancelled = 8)] = 'cancelled'),
      (e[(e.duplicated = 16)] = 'duplicated');
  })(zt || (zt = {}));
  function Io(e, t) {
    return e instanceof Error && Ao in e && (t == null || !!(e.type & t));
  }
  const Po = ze(
    () =>
      typeof __uniConfig < 'u' &&
      __uniConfig.locales &&
      !!Object.keys(__uniConfig.locales).length,
  );
  let Y;
  function T() {
    if (!Y) {
      let e;
      if (
        ((e =
          (navigator.cookieEnabled &&
            window.localStorage &&
            localStorage[Kr]) ||
          __uniConfig.locale ||
          navigator.language),
        (Y = Oo(e)),
        Po())
      ) {
        const t = Object.keys(__uniConfig.locales || {});
        t.length && t.forEach((n) => Y.add(n, __uniConfig.locales[n])),
          Y.setLocale(e);
      }
    }
    return Y;
  }
  function $(e, t, n) {
    return t.reduce((r, o, i) => ((r[e + o] = n[i]), r), {});
  }
  const xo = ze(() => {
      const e = 'uni.showToast.',
        t = ['unpaired'];
      T().add(
        I,
        $(e, t, ['Please note showToast must be paired with hideToast']),
        !1,
      ),
        T().add(
          Ue,
          $(e, t, [
            'Tenga en cuenta que showToast debe estar emparejado con hideToast',
          ]),
          !1,
        ),
        T().add(
          Fe,
          $(e, t, [
            'Veuillez noter que showToast doit être associé à hideToast',
          ]),
          !1,
        ),
        T().add(X, $(e, t, ['请注意 showToast 与 hideToast 必须配对使用']), !1),
        T().add(
          ue,
          $(e, t, ['請注意 showToast 與 hideToast 必須配對使用']),
          !1,
        );
    }),
    ko = ze(() => {
      const e = 'uni.showLoading.',
        t = ['unpaired'];
      T().add(
        I,
        $(e, t, ['Please note showLoading must be paired with hideLoading']),
        !1,
      ),
        T().add(
          Ue,
          $(e, t, [
            'Tenga en cuenta que showLoading debe estar emparejado con hideLoading',
          ]),
          !1,
        ),
        T().add(
          Fe,
          $(e, t, [
            'Veuillez noter que showLoading doit être associé à hideLoading',
          ]),
          !1,
        ),
        T().add(
          X,
          $(e, t, ['请注意 showLoading 与 hideLoading 必须配对使用']),
          !1,
        ),
        T().add(
          ue,
          $(e, t, ['請注意 showLoading 與 hideLoading 必須配對使用']),
          !1,
        );
    });
  function qt(e) {
    const t = new uo();
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
  const Ge = 'invokeViewApi',
    Ft = 'invokeServiceApi';
  let Eo = 1;
  const Lo = b(qt('service'), {
    invokeServiceMethod: (e, t, n) => {
      const { subscribe: r, publishHandler: o } = Kn,
        i = n ? Eo++ : 0;
      n && r(Ft + '.' + i, n, !0), o(Ft, { id: i, name: e, args: t });
    },
  });
  function No(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  var Ut = ['top', 'left', 'right', 'bottom'],
    We,
    le = {},
    S;
  function Ke() {
    return (
      !('CSS' in window) || typeof CSS.supports != 'function'
        ? (S = '')
        : CSS.supports('top: env(safe-area-inset-top)')
        ? (S = 'env')
        : CSS.supports('top: constant(safe-area-inset-top)')
        ? (S = 'constant')
        : (S = ''),
      S
    );
  }
  function Gt() {
    if (((S = typeof S == 'string' ? S : Ke()), !S)) {
      Ut.forEach(function (s) {
        le[s] = 0;
      });
      return;
    }
    function e(s, c) {
      var l = s.style;
      Object.keys(c).forEach(function (p) {
        var d = c[p];
        l[p] = d;
      });
    }
    var t = [];
    function n(s) {
      s
        ? t.push(s)
        : t.forEach(function (c) {
            c();
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
    function i(s, c) {
      var l = document.createElement('div'),
        p = document.createElement('div'),
        d = document.createElement('div'),
        f = document.createElement('div'),
        m = 100,
        g = 1e4,
        h = {
          position: 'absolute',
          width: m + 'px',
          height: '200px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          paddingBottom: S + '(safe-area-inset-' + c + ')',
        };
      e(l, h),
        e(p, h),
        e(d, {
          transition: '0s',
          animation: 'none',
          width: '400px',
          height: '400px',
        }),
        e(f, {
          transition: '0s',
          animation: 'none',
          width: '250%',
          height: '250%',
        }),
        l.appendChild(d),
        p.appendChild(f),
        s.appendChild(l),
        s.appendChild(p),
        n(function () {
          l.scrollTop = p.scrollTop = g;
          var Z = l.scrollTop,
            J = p.scrollTop;
          function Hr() {
            this.scrollTop !== (this === l ? Z : J) &&
              ((l.scrollTop = p.scrollTop = g),
              (Z = l.scrollTop),
              (J = p.scrollTop),
              Mo(c));
          }
          l.addEventListener('scroll', Hr, r),
            p.addEventListener('scroll', Hr, r);
        });
      var y = getComputedStyle(l);
      Object.defineProperty(le, c, {
        configurable: !0,
        get: function () {
          return parseFloat(y.paddingBottom);
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
      Ut.forEach(function (s) {
        i(a, s);
      }),
      document.body.appendChild(a),
      n(),
      (We = !0);
  }
  function fe(e) {
    return We || Gt(), le[e];
  }
  var de = [];
  function Mo(e) {
    de.length ||
      setTimeout(function () {
        var t = {};
        de.forEach(function (n) {
          t[n] = le[n];
        }),
          (de.length = 0),
          pe.forEach(function (n) {
            n(t);
          });
      }, 0),
      de.push(e);
  }
  var pe = [];
  function jo(e) {
    Ke() && (We || Gt(), typeof e == 'function' && pe.push(e));
  }
  function Ro(e) {
    var t = pe.indexOf(e);
    t >= 0 && pe.splice(t, 1);
  }
  var Bo = {
      get support() {
        return (typeof S == 'string' ? S : Ke()).length != 0;
      },
      get top() {
        return fe('top');
      },
      get left() {
        return fe('left');
      },
      get right() {
        return fe('right');
      },
      get bottom() {
        return fe('bottom');
      },
      onChange: jo,
      offChange: Ro,
    },
    Vo = Bo;
  const v = No(Vo),
    Ze = u.withModifiers(() => {}, ['prevent']);
  function Q(e, t) {
    return parseInt((e.getPropertyValue(t).match(/\d+/) || ['0'])[0]);
  }
  function Do() {
    const e = document.documentElement.style,
      t = Q(e, '--window-top');
    return t ? t + v.top : 0;
  }
  function Ho() {
    const e = document.documentElement.style,
      t = Do(),
      n = Q(e, '--window-bottom'),
      r = Q(e, '--window-left'),
      o = Q(e, '--window-right'),
      i = Q(e, '--top-window-height');
    return {
      top: t,
      bottom: n ? n + v.bottom : 0,
      left: r ? r + v.left : 0,
      right: o ? o + v.right : 0,
      topWindowHeight: i || 0,
    };
  }
  function zo(e) {
    return Symbol(e);
  }
  const qo =
      'M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z',
    Fo =
      'M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM15.136 8.672h1.728q0.128 0 0.224 0.096t0.096 0.256l-0.384 10.24q0 0.064-0.048 0.112t-0.112 0.048h-1.248q-0.096 0-0.144-0.048t-0.048-0.112l-0.384-10.24q0-0.16 0.096-0.256t0.224-0.096zM16 23.328q-0.48 0-0.832-0.352t-0.352-0.848 0.352-0.848 0.832-0.352 0.832 0.352 0.352 0.848-0.352 0.848-0.832 0.352z';
  function Wt(e, t = '#000', n = 27) {
    return u.createVNode(
      'svg',
      { width: n, height: n, viewBox: '0 0 32 32' },
      [u.createVNode('path', { d: e, fill: t }, null, 8, ['d', 'fill'])],
      8,
      ['width', 'height'],
    );
  }
  function Je() {
    const e = D(),
      t = e.length;
    if (t) return e[t - 1];
  }
  function Kt() {
    const e = Je();
    if (e) return e.$page.meta;
  }
  function Uo() {
    const e = Kt();
    return e ? e.id : -1;
  }
  function Xe() {
    const e = Je();
    if (e) return e.$vm;
  }
  const Go = ['navigationBar', 'pullToRefresh'];
  function Wo() {
    return JSON.parse(JSON.stringify(__uniConfig.globalStyle || {}));
  }
  function Ko(e, t) {
    const n = Wo(),
      r = b({ id: t }, n, e);
    Go.forEach((i) => {
      r[i] = b({}, n[i], e[i]);
    });
    const { navigationBar: o } = r;
    return o.titleText && o.titleImage && (o.titleText = ''), r;
  }
  function Ye(e, t, n) {
    if (A(e)) (n = t), (t = e), (e = Xe());
    else if (typeof e == 'number') {
      const o = D().find((i) => i.$page.id === e);
      o ? (e = o.$vm) : (e = Xe());
    }
    if (!e) return;
    const r = e.$[t];
    return r && no(r, n);
  }
  function Zo(e) {
    if (e.indexOf('/') === 0) return e;
    let t = '';
    const n = D();
    return n.length && (t = n[n.length - 1].$page.route), Qe(t, e);
  }
  function Qe(e, t) {
    if (t.indexOf('/') === 0) return t;
    if (t.indexOf('./') === 0) return Qe(e, t.slice(2));
    const n = t.split('/'),
      r = n.length;
    let o = 0;
    for (; o < r && n[o] === '..'; o++);
    n.splice(0, o), (t = n.join('/'));
    const i = e.length > 0 ? e.split('/') : [];
    return i.splice(i.length - o - 1, o + 1), He(i.concat(n).join('/'));
  }
  function Jo(e, t = !1) {
    return t
      ? __uniRoutes.find((n) => n.path === e || n.alias === e)
      : __uniRoutes.find((n) => n.path === e);
  }
  const Xo = (e, t) => k.emit('api.' + e, t);
  let Zt = 1;
  function Jt(e) {
    return (e || Uo()) + '.' + Ge;
  }
  const Yo = b(qt('view'), {
    invokeOnCallback: Xo,
    invokeViewMethod: (e, t, n, r) => {
      const { subscribe: o, publishHandler: i } = k,
        a = r ? Zt++ : 0;
      r && o(Ge + '.' + a, r, !0), i(Jt(n), { id: a, name: e, args: t }, n);
    },
    invokeViewMethodKeepAlive: (e, t, n, r) => {
      const { subscribe: o, unsubscribe: i, publishHandler: a } = k,
        s = Zt++,
        c = Ge + '.' + s;
      return (
        o(c, n),
        a(Jt(r), { id: s, name: e, args: t }, r),
        () => {
          i(c);
        }
      );
    },
  });
  function Xt(e) {
    return /^-?\d+[ur]px$/i.test(e)
      ? e.replace(/(^-?\d+)[ur]px$/i, (t, n) => `${Ei(parseFloat(n))}px`)
      : /^-?[\d\.]+$/.test(e)
      ? `${e}px`
      : e || '';
  }
  function Qo(e) {
    return e
      .replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)
      .replace('webkit', '-webkit');
  }
  function ei(e) {
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
      c = {},
      l = [];
    return (
      i.forEach((p) => {
        let d = p.type,
          f = [...p.args];
        if (t.concat(n).includes(d))
          d.startsWith('rotate') || d.startsWith('skew')
            ? (f = f.map((m) => parseFloat(m) + 'deg'))
            : d.startsWith('translate') && (f = f.map(Xt)),
            n.indexOf(d) >= 0 && (f.length = 1),
            l.push(`${d}(${f.join(',')})`);
        else if (r.concat(o).includes(f[0])) {
          d = f[0];
          const m = f[1];
          c[d] = o.includes(d) ? Xt(m) : m;
        }
      }),
      (c.transform = c.webkitTransform = l.join(' ')),
      (c.transition = c.webkitTransition =
        Object.keys(c)
          .map(
            (p) => `${Qo(p)} ${s.duration}ms ${s.timingFunction} ${s.delay}ms`,
          )
          .join(',')),
      (c.transformOrigin = c.webkitTransformOrigin = a.transformOrigin),
      c
    );
  }
  function Yt(e) {
    const t = e.animation;
    if (!t || !t.actions || !t.actions.length) return;
    let n = 0;
    const r = t.actions,
      o = t.actions.length;
    function i() {
      const a = r[n],
        s = a.option.transition,
        c = ei(a);
      Object.keys(c).forEach((l) => {
        e.$el.style[l] = c[l];
      }),
        (n += 1),
        n < o && setTimeout(i, s.duration + s.delay);
    }
    setTimeout(() => {
      i();
    }, 0);
  }
  const ti = {
      props: ['animation'],
      watch: {
        animation: {
          deep: !0,
          handler() {
            Yt(this);
          },
        },
      },
      mounted() {
        Yt(this);
      },
    },
    Qt = (e) => {
      e.__reserved = !0;
      const { props: t, mixins: n } = e;
      return (!t || !t.animation) && (n || (e.mixins = [])).push(ti), he(e);
    },
    he = (e) => (
      (e.__reserved = !0), (e.compatConfig = { MODE: 3 }), u.defineComponent(e)
    ),
    ni = {
      hoverClass: { type: String, default: 'none' },
      hoverStopPropagation: { type: Boolean, default: !1 },
      hoverStartTime: { type: [Number, String], default: 50 },
      hoverStayTime: { type: [Number, String], default: 400 },
    };
  function en(e) {
    const t = u.ref(!1);
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
    function a(g) {
      g.touches.length > 1 || c(g);
    }
    function s(g) {
      n || (c(g), window.addEventListener('mouseup', f));
    }
    function c(g) {
      g._hoverPropagationStopped ||
        !e.hoverClass ||
        e.hoverClass === 'none' ||
        e.disabled ||
        (e.hoverStopPropagation && (g._hoverPropagationStopped = !0),
        (n = !0),
        (r = setTimeout(() => {
          (t.value = !0), n || i();
        }, parseInt(e.hoverStartTime))));
    }
    function l() {
      d();
    }
    function p() {
      n && f();
    }
    function d() {
      (n = !1), t.value && i();
    }
    function f() {
      d(), window.removeEventListener('mouseup', f);
    }
    function m() {
      (n = !1), (t.value = !1), clearTimeout(r);
    }
    return {
      hovering: t,
      binding: {
        onTouchstartPassive: a,
        onMousedown: s,
        onTouchend: l,
        onMouseup: p,
        onTouchcancel: m,
      },
    };
  }
  function tn(e) {
    const { base: t } = __uniConfig.router;
    return He(e).indexOf(t) === 0 ? He(e) : t + e;
  }
  function nn(e) {
    const { base: t, assets: n } = __uniConfig.router;
    if (
      (t === './' &&
        (e.indexOf('./static/') === 0 ||
          (n && e.indexOf('./' + n + '/') === 0)) &&
        (e = e.slice(1)),
      e.indexOf('/') === 0)
    )
      if (e.indexOf('//') === 0) e = 'https:' + e;
      else return tn(e.slice(1));
    if (Zr.test(e) || Jr.test(e) || e.indexOf('blob:') === 0) return e;
    const r = D();
    return r.length ? tn(Qe(r[r.length - 1].$page.route, e).slice(1)) : e;
  }
  const _ = navigator.userAgent,
    ri = /android/i.test(_),
    rn = /iphone|ipad|ipod/i.test(_),
    et = _.match(/Windows NT ([\d|\d.\d]*)/i),
    tt = /Macintosh|Mac/i.test(_),
    on = /Linux|X11/i.test(_),
    oi = tt && navigator.maxTouchPoints > 0;
  function an() {
    return (
      /^Apple/.test(navigator.vendor) && typeof window.orientation == 'number'
    );
  }
  function sn(e) {
    return e && Math.abs(window.orientation) === 90;
  }
  function cn(e, t) {
    return e
      ? Math[t ? 'max' : 'min'](screen.width, screen.height)
      : screen.width;
  }
  function ii(e, t) {
    return e
      ? Math[t ? 'min' : 'max'](screen.height, screen.width)
      : screen.height;
  }
  function un(e) {
    return (
      Math.min(window.innerWidth, document.documentElement.clientWidth, e) || e
    );
  }
  function ai() {
    const e = an(),
      t = un(cn(e, sn(e)));
    return {
      platform: rn ? 'ios' : 'other',
      pixelRatio: window.devicePixelRatio,
      windowWidth: t,
    };
  }
  const nt = [
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
  function ln(e, t) {
    return !e || t.indexOf(e) === -1 ? t[0] : e;
  }
  function si(e) {
    return function () {
      try {
        return e.apply(e, arguments);
      } catch (t) {
        console.error(t);
      }
    };
  }
  let ci = 1;
  const rt = {};
  function ui(e, t, n, r = !1) {
    return (rt[e] = { name: t, keepAlive: r, callback: n }), e;
  }
  function fn(e, t, n) {
    if (typeof e == 'number') {
      const r = rt[e];
      if (r) return r.keepAlive || delete rt[e], r.callback(t, n);
    }
    return t;
  }
  const li = 'success',
    fi = 'fail',
    di = 'complete';
  function pi(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      w(r) && ((t[n] = si(r)), delete e[n]);
    }
    return t;
  }
  function hi(e, t) {
    return !e || e.indexOf(':fail') === -1
      ? t + ':ok'
      : t + e.substring(e.indexOf(':fail'));
  }
  function gi(e, t = {}, { beforeAll: n, beforeSuccess: r } = {}) {
    O(t) || (t = {});
    const { success: o, fail: i, complete: a } = pi(t),
      s = w(o),
      c = w(i),
      l = w(a),
      p = ci++;
    return (
      ui(p, e, (d) => {
        (d = d || {}),
          (d.errMsg = hi(d.errMsg, e)),
          w(n) && n(d),
          d.errMsg === e + ':ok' ? (w(r) && r(d, t), s && o(d)) : c && i(d),
          l && a(d);
      }),
      p
    );
  }
  const mi = 'success',
    bi = 'fail',
    vi = 'complete',
    ge = {},
    dn = {};
  function yi(e, t) {
    return function (n) {
      return e(n, t) || n;
    };
  }
  function pn(e, t, n) {
    let r = !1;
    for (let o = 0; o < e.length; o++) {
      const i = e[o];
      if (r) r = Promise.resolve(yi(i, n));
      else {
        const a = i(t, n);
        if ((Ur(a) && (r = Promise.resolve(a)), a === !1))
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
  function hn(e, t = {}) {
    return (
      [mi, bi, vi].forEach((n) => {
        const r = e[n];
        if (!R(r)) return;
        const o = t[n];
        t[n] = function (a) {
          pn(r, a, t).then((s) => (w(o) && o(s)) || s);
        };
      }),
      t
    );
  }
  function gn(e, t) {
    const n = [];
    R(ge.returnValue) && n.push(...ge.returnValue);
    const r = dn[e];
    return (
      r && R(r.returnValue) && n.push(...r.returnValue),
      n.forEach((o) => {
        t = o(t) || t;
      }),
      t
    );
  }
  function mn(e) {
    const t = Object.create(null);
    Object.keys(ge).forEach((r) => {
      r !== 'returnValue' && (t[r] = ge[r].slice());
    });
    const n = dn[e];
    return (
      n &&
        Object.keys(n).forEach((r) => {
          r !== 'returnValue' && (t[r] = (t[r] || []).concat(n[r]));
        }),
      t
    );
  }
  function bn(e, t, n, r) {
    const o = mn(e);
    return o && Object.keys(o).length
      ? R(o.invoke)
        ? pn(o.invoke, n).then((a) => t(hn(mn(e), a), ...r))
        : t(hn(o, n), ...r)
      : t(n, ...r);
  }
  function _i(e) {
    return !!(O(e) && [li, fi, di].find((t) => w(e[t])));
  }
  function Yp(e) {
    return e;
  }
  function vn(e, t) {
    return (n = {}, ...r) =>
      _i(n)
        ? gn(e, bn(e, t, n, r))
        : gn(
            e,
            new Promise((o, i) => {
              bn(e, t, b(n, { success: o, fail: i }), r);
            }),
          );
  }
  function wi(e, t) {
    const n = e[0];
    if (!t || (!O(t.formatArgs) && O(n))) return;
    const r = t.formatArgs,
      o = Object.keys(r);
    for (let i = 0; i < o.length; i++) {
      const a = o[i],
        s = r[a];
      if (w(s)) {
        const c = s(e[0][a], n);
        if (A(c)) return c;
      } else ce(n, a) || (n[a] = s);
    }
  }
  function Ti(e, t, n) {
    return fn(e, b(n || {}, { errMsg: t + ':ok' }));
  }
  function yn(e, t, n, r) {
    return fn(e, b({ errMsg: t + ':fail' + (n ? ' ' + n : '') }, r));
  }
  function _n(e, t, n, r) {
    if (r && r.beforeInvoke) {
      const i = r.beforeInvoke(t);
      if (A(i)) return i;
    }
    const o = wi(t, r);
    if (o) return o;
  }
  function Si(e) {
    return !e || A(e)
      ? e
      : e.stack
      ? (console.error(e.message + kt + e.stack), e.message)
      : e;
  }
  function wn(e, t, n, r) {
    return (o) => {
      const i = gi(e, o, r),
        a = _n(e, [o], n, r);
      return a
        ? yn(i, e, a)
        : t(o, {
            resolve: (s) => Ti(i, e, s),
            reject: (s, c) => yn(i, e, Si(s), c),
          });
    };
  }
  function $i(e, t, n, r) {
    return (...o) => {
      const i = _n(e, o, n, r);
      if (i) throw new Error(i);
      return t.apply(null, o);
    };
  }
  function Ci(e, t, n, r) {
    return wn(e, t, n, r);
  }
  function Oi(e, t, n, r) {
    return vn(e, wn(e, t, void 0, r));
  }
  function B(e, t, n, r) {
    return $i(e, t, void 0, r);
  }
  function P(e, t, n, r) {
    return vn(e, Ci(e, t, void 0, r));
  }
  const Ai = 'upx2px',
    Ii = 1e-4,
    Pi = 750;
  let Tn = !1,
    ot = 0,
    Sn = 0,
    $n = 960,
    Cn = 375,
    On = 750;
  function xi() {
    const { platform: e, pixelRatio: t, windowWidth: n } = ai();
    (ot = n), (Sn = t), (Tn = e === 'ios');
  }
  function it(e, t) {
    const n = Number(e);
    return isNaN(n) ? t : n;
  }
  function ki() {
    const e = __uniConfig.globalStyle || {};
    ($n = it(e.rpxCalcMaxDeviceWidth, 960)),
      (Cn = it(e.rpxCalcBaseDeviceWidth, 375)),
      (On = it(e.rpxCalcBaseDeviceWidth, 750));
  }
  const Ei = B(Ai, (e, t) => {
      if ((ot === 0 && (xi(), ki()), (e = Number(e)), e === 0)) return 0;
      let n = t || ot;
      n = e === On || n <= $n ? n : Cn;
      let r = (e / Pi) * n;
      return (
        r < 0 && (r = -r),
        (r = Math.floor(r + Ii)),
        r === 0 && (Sn === 1 || !Tn ? (r = 1) : (r = 0.5)),
        e < 0 ? -r : r
      );
    }),
    me = B('getLocale', () => T().getLocale()),
    Li = 'request',
    Ni = { JSON: 'json' },
    Mi = ['text', 'arraybuffer'],
    ji = 'text',
    An = encodeURIComponent;
  function Ri(e, t) {
    let n = e.split('#');
    const r = n[1] || '';
    n = n[0].split('?');
    let o = n[1] || '';
    e = n[0];
    const i = o.split('&').filter((s) => s),
      a = {};
    i.forEach((s) => {
      const c = s.split('=');
      a[c[0]] = c[1];
    });
    for (const s in t)
      if (ce(t, s)) {
        let c = t[s];
        typeof c > 'u' || c === null
          ? (c = '')
          : O(c) && (c = JSON.stringify(c)),
          (a[An(s)] = An(c));
      }
    return (
      (o = Object.keys(a)
        .map((s) => `${s}=${a[s]}`)
        .join('&')),
      e + (o ? '?' + o : '') + (r ? '#' + r : '')
    );
  }
  const Bi = {
      method: String,
      data: [Object, String, Array, ArrayBuffer],
      url: { type: String, required: !0 },
      header: Object,
      dataType: String,
      responseType: String,
      withCredentials: Boolean,
    },
    Vi = {
      formatArgs: {
        method(e, t) {
          t.method = ln((e || '').toUpperCase(), nt);
        },
        data(e, t) {
          t.data = e || '';
        },
        url(e, t) {
          t.method === nt[0] &&
            O(t.data) &&
            Object.keys(t.data).length &&
            (t.url = Ri(e, t.data));
        },
        header(e, t) {
          const n = (t.header = e || {});
          t.method !== nt[0] &&
            (Object.keys(n).find((r) => r.toLowerCase() === 'content-type') ||
              (n['Content-Type'] = 'application/json'));
        },
        dataType(e, t) {
          t.dataType = (e || Ni.JSON).toLowerCase();
        },
        responseType(e, t) {
          (t.responseType = (e || '').toLowerCase()),
            Mi.indexOf(t.responseType) === -1 && (t.responseType = ji);
        },
      },
    };
  function Di(e) {
    if (!A(e)) return e;
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
  const Hi = [
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
    zi = [
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
    be = { url: { type: String, required: !0 } },
    ve = 'navigateTo',
    ye = 'redirectTo',
    at = 'reLaunch',
    ee = 'switchTab',
    qi = 'navigateBack',
    In = 'preloadPage',
    Fi = 'unPreloadPage',
    Ui = b({}, be, Pn(Hi)),
    Gi = b({ delta: { type: Number } }, Pn(zi)),
    Wi = be,
    Ki = be,
    Zi = be,
    Ji = we(ve),
    Xi = we(ye),
    Yi = we(at),
    Qi = we(ee),
    ea = {
      formatArgs: {
        delta(e, t) {
          (e = parseInt(e + '') || 1), (t.delta = Math.min(D().length - 1, e));
        },
      },
    };
  function Pn(e) {
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
  let _e;
  function ta() {
    _e = '';
  }
  function we(e) {
    return { formatArgs: { url: na(e) }, beforeAll: ta };
  }
  function na(e) {
    return function (n, r) {
      if (!n) return 'Missing required args: "url"';
      n = Zo(n);
      const o = n.split('?')[0],
        i = Jo(o, !0);
      if (!i) return 'page `' + n + '` is not found';
      if (e === ve || e === ye) {
        if (i.meta.isTabBar) return `can not ${e} a tabbar page`;
      } else if (e === ee && !i.meta.isTabBar) return 'can not switch to no-tabBar page';
      if (
        ((e === ee || e === In) &&
          i.meta.isTabBar &&
          r.openType !== 'appLaunch' &&
          (n = o),
        i.meta.isEntry && (n = n.replace(i.alias, '/')),
        (r.url = Di(n)),
        e !== Fi)
      ) {
        if (e === In) {
          if (i.meta.isTabBar) {
            const a = D(),
              s = i.path.slice(1);
            if (a.find((c) => c.route === s))
              return 'tabBar page `' + s + '` already exists';
          }
          return;
        }
        if (_e === n && r.openType !== 'appLaunch') return `${_e} locked`;
        __uniConfig.ready && (_e = n);
      }
    };
  }
  const ra = 'hideLoading',
    oa = 'showLoading',
    ia = { title: String, mask: Boolean },
    aa = { formatArgs: { title: '', mask: !1 } },
    sa = 'showToast',
    xn = ['success', 'loading', 'none', 'error'],
    ca = {
      title: String,
      icon: String,
      image: String,
      duration: Number,
      mask: Boolean,
    },
    ua = {
      formatArgs: {
        title: '',
        icon(e, t) {
          t.icon = ln(e, xn);
        },
        image(e, t) {
          e ? (t.image = nn(e)) : (t.image = '');
        },
        duration: 1500,
        mask: !1,
      },
    },
    te = {
      beforeInvoke() {
        const e = Kt();
        if (e && !e.isTabBar) return 'not TabBar page';
      },
      formatArgs: {
        index(e) {
          if (!__uniConfig.tabBar.list[e]) return 'tabbar item not found';
        },
      },
    };
  te.beforeInvoke, te.formatArgs;
  const la = /^(linear|radial)-gradient\(.+?\);?$/;
  te.beforeInvoke, te.beforeInvoke, te.formatArgs;
  const fa = oo(!0),
    kn = [];
  let st = 0,
    En;
  const Ln = (e) => kn.forEach((t) => (t.userAction = e));
  function da(e = { userAction: !1 }) {
    En ||
      (['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup'].forEach(
        (n) => {
          document.addEventListener(
            n,
            function () {
              !st && Ln(!0),
                st++,
                setTimeout(() => {
                  !--st && Ln(!1);
                }, 0);
            },
            fa,
          );
        },
      ),
      (En = !0)),
      kn.push(e);
  }
  const pa = ['navigate', 'redirect', 'switchTab', 'reLaunch', 'navigateBack'],
    ha = [
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
    ga = [
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
    ma = {
      hoverClass: { type: String, default: 'navigator-hover' },
      url: { type: String, default: '' },
      openType: {
        type: String,
        default: 'navigate',
        validator(e) {
          return !!~pa.indexOf(e);
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
          return !e || ha.concat(ga).includes(e);
        },
      },
      animationDuration: { type: [String, Number], default: 300 },
    };
  function ba(e) {
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
          Hn({
            url: e.url,
            animationType: e.animationType || 'pop-in',
            animationDuration: t,
          });
          break;
        case 'redirect':
          zn({ url: e.url, exists: e.exists });
          break;
        case 'switchTab':
          Fn({ url: e.url });
          break;
        case 'reLaunch':
          qn({ url: e.url });
          break;
        case 'navigateBack':
          Dn({
            delta: e.delta,
            animationType: e.animationType || 'pop-out',
            animationDuration: t,
          });
          break;
      }
    };
  }
  b({}, ma, { renderLink: { type: Boolean, default: !0 } }), b({}, ni);
  const Nn = zo('upm');
  function va() {
    return u.inject(Nn);
  }
  function ya(e) {
    const t = _a(e);
    return u.provide(Nn, t), t;
  }
  function _a(e) {
    return u.reactive(
      wa(JSON.parse(JSON.stringify(Ko(__uniRoutes[0].meta, e)))),
    );
  }
  function wa(e) {
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
  function Mn() {
    return (history.state && history.state.__id__) || 1;
  }
  const ct = '$$',
    V = new Map();
  function Ta() {
    V.forEach((e, t) => {
      e.$.isUnmounted && V.delete(t);
    });
  }
  function ut() {
    return V;
  }
  function D() {
    const e = [],
      t = V.values();
    for (const n of t) n.$.__isTabBar ? n.$.__isActive && e.push(n) : e.push(n);
    return e;
  }
  function Sa(e) {
    const t = L.get(e);
    t && (L.delete(e), Te.pruneCacheEntry(t));
  }
  function lt(e, t = !0) {
    const n = V.get(e);
    (n.$.__isUnload = !0), Ye(n, Yr), V.delete(e), t && Sa(e);
  }
  let $a = Mn();
  function Ca(e, t) {
    return { __id__: t || ++$a, __type__: e };
  }
  function Oa(e, t) {
    return e + ct + t;
  }
  const L = new Map(),
    Te = {
      get(e) {
        return L.get(e);
      },
      set(e, t) {
        Aa(e), L.set(e, t);
      },
      delete(e) {
        L.get(e) && L.delete(e);
      },
      forEach(e) {
        L.forEach(e);
      },
    };
  function Aa(e) {
    const t = parseInt(e.split(ct)[1]);
    t &&
      Te.forEach((n, r) => {
        const o = parseInt(r.split(ct)[1]);
        o &&
          o > t &&
          (Te.delete(r), Te.pruneCacheEntry(n), u.nextTick(() => Ta()));
      });
  }
  let Ia;
  function Se() {
    return Ia;
  }
  const jn = '__DC_STAT_UUID',
    Rn =
      (navigator.cookieEnabled &&
        (window.localStorage || window.sessionStorage)) ||
      {};
  let H;
  function Pa() {
    if (((H = H || Rn[jn]), !H)) {
      H = Date.now() + '' + Math.floor(Math.random() * 1e7);
      try {
        Rn[jn] = H;
      } catch {}
    }
    return H;
  }
  function xa() {
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
  function ft() {
    if (__uniConfig.darkmode !== !0)
      return A(__uniConfig.darkmode) ? __uniConfig.darkmode : 'light';
    try {
      return window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark';
    } catch {
      return 'light';
    }
  }
  function ka() {
    let e,
      t = '0',
      n = '',
      r = 'phone';
    const o = navigator.language;
    if (rn) {
      e = 'iOS';
      const d = _.match(/OS\s([\w_]+)\slike/);
      d && (t = d[1].replace(/_/g, '.'));
      const f = _.match(/\(([a-zA-Z]+);/);
      f && (n = f[1]);
    } else if (ri) {
      e = 'Android';
      const d = _.match(/Android[\s/]([\w\.]+)[;\s]/);
      d && (t = d[1]);
      const f = _.match(/\((.+?)\)/),
        m = f ? f[1].split(';') : _.split(' '),
        g = [
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
      for (let h = 0; h < m.length; h++) {
        const y = m[h];
        if (y.indexOf('Build') > 0) {
          n = y.split('Build')[0].trim();
          break;
        }
        let Z;
        for (let J = 0; J < g.length; J++)
          if (g[J].test(y)) {
            Z = !0;
            break;
          }
        if (!Z) {
          n = y.trim();
          break;
        }
      }
    } else if (oi)
      (n = 'iPad'),
        (e = 'iOS'),
        (r = 'pad'),
        (t = w(window.BigInt) ? '14.0' : '13.0');
    else if (et || tt || on) {
      (n = 'PC'), (e = 'PC'), (r = 'pc'), (t = '0');
      let d = _.match(/\((.+?)\)/)[1];
      if (et) {
        switch (((e = 'Windows'), et[1])) {
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
        const f = d && d.match(/[Win|WOW]([\d]+)/);
        f && (t += ` x${f[1]}`);
      } else if (tt) {
        e = 'macOS';
        const f = (d && d.match(/Mac OS X (.+)/)) || '';
        t &&
          ((t = f[1].replace(/_/g, '.')),
          t.indexOf(';') !== -1 && (t = t.split(';')[0]));
      } else if (on) {
        e = 'Linux';
        const f = (d && d.match(/Linux (.*)/)) || '';
        f && ((t = f[1]), t.indexOf(';') !== -1 && (t = t.split(';')[0]));
      }
    } else (e = 'Other'), (t = '0'), (r = 'unknown');
    const i = `${e} ${t}`,
      a = e.toLocaleLowerCase();
    let s = '',
      c = String(xa());
    if (c !== '-1') s = 'IE';
    else {
      const d = ['Version', 'Firefox', 'Chrome', 'Edge{0,1}'],
        f = ['Safari', 'Firefox', 'Chrome', 'Edge'];
      for (let m = 0; m < d.length; m++) {
        const g = d[m],
          h = new RegExp(`(${g})/(\\S*)\\b`);
        h.test(_) && ((s = f[m]), (c = _.match(h)[2]));
      }
    }
    let l = 'portrait';
    const p =
      typeof window.screen.orientation > 'u'
        ? window.orientation
        : window.screen.orientation.angle;
    return (
      (l = Math.abs(p) === 90 ? 'landscape' : 'portrait'),
      {
        deviceBrand: void 0,
        brand: void 0,
        deviceModel: n,
        deviceOrientation: l,
        model: n,
        system: i,
        platform: a,
        browserName: s.toLocaleLowerCase(),
        browserVersion: c,
        language: o,
        deviceType: r,
        ua: _,
        osname: e,
        osversion: t,
        theme: ft(),
      }
    );
  }
  const Ea = B('getWindowInfo', () => {
    const e = window.devicePixelRatio,
      t = an(),
      n = sn(t),
      r = cn(t, n),
      o = ii(t, n),
      i = un(r);
    let a = window.innerHeight;
    const s = v.top,
      c = {
        left: v.left,
        right: i - v.right,
        top: v.top,
        bottom: a - v.bottom,
        width: i - v.left - v.right,
        height: a - v.top - v.bottom,
      },
      { top: l, bottom: p } = Ho();
    return (
      (a -= l),
      (a -= p),
      {
        windowTop: l,
        windowBottom: p,
        windowWidth: i,
        windowHeight: a,
        pixelRatio: e,
        screenWidth: r,
        screenHeight: o,
        statusBarHeight: s,
        safeArea: c,
        safeAreaInsets: {
          top: v.top,
          right: v.right,
          bottom: v.bottom,
          left: v.left,
        },
        screenTop: o - a,
      }
    );
  });
  let $e,
    Ce = !0;
  function dt() {
    Ce && ($e = ka());
  }
  const La = B('getDeviceInfo', () => {
      dt();
      const {
        deviceBrand: e,
        deviceModel: t,
        brand: n,
        model: r,
        platform: o,
        system: i,
        deviceOrientation: a,
        deviceType: s,
      } = $e;
      return {
        brand: n,
        deviceBrand: e,
        deviceModel: t,
        devicePixelRatio: window.devicePixelRatio,
        deviceId: Pa(),
        deviceOrientation: a,
        deviceType: s,
        model: r,
        platform: o,
        system: i,
      };
    }),
    Na = B('getAppBaseInfo', () => {
      dt();
      const { theme: e, language: t, browserName: n, browserVersion: r } = $e;
      return {
        appId: __uniConfig.appId,
        appName: __uniConfig.appName,
        appVersion: __uniConfig.appVersion,
        appVersionCode: __uniConfig.appVersionCode,
        appLanguage: me ? me() : t,
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
    Bn = B('getSystemInfoSync', () => {
      (Ce = !0), dt(), (Ce = !1);
      const e = Ea(),
        t = La(),
        n = Na();
      Ce = !0;
      const {
          ua: r,
          browserName: o,
          browserVersion: i,
          osname: a,
          osversion: s,
        } = $e,
        c = b(e, t, n, {
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
        delete c.screenTop,
        delete c.enableDebug,
        __uniConfig.darkmode || delete c.theme,
        ro(c)
      );
    });
  da();
  const Vn = { esc: ['Esc', 'Escape'], enter: ['Enter'] },
    Ma = Object.keys(Vn);
  function ja() {
    const e = u.ref(''),
      t = u.ref(!1),
      n = (r) => {
        if (t.value) return;
        const o = Ma.find((i) => Vn[i].indexOf(r.key) !== -1);
        o && (e.value = o), u.nextTick(() => (e.value = ''));
      };
    return (
      u.onMounted(() => {
        document.addEventListener('keyup', n);
      }),
      u.onBeforeUnmount(() => {
        document.removeEventListener('keyup', n);
      }),
      { key: e, disable: t }
    );
  }
  function Ra(e, t, n) {
    return (
      (t.onClose = (...r) => ((t.visible = !1), n.apply(null, r))),
      u.createApp(
        u.defineComponent({
          setup() {
            return () => (u.openBlock(), u.createBlock(e, t, null, 16));
          },
        }),
      )
    );
  }
  function Ba(e) {
    let t = document.getElementById(e);
    return (
      t ||
        ((t = document.createElement('div')),
        (t.id = e),
        document.body.append(t)),
      t
    );
  }
  function Va(e, { onEsc: t, onEnter: n }) {
    const r = u.ref(e.visible),
      { key: o, disable: i } = ja();
    return (
      u.watch(
        () => e.visible,
        (a) => (r.value = a),
      ),
      u.watch(
        () => r.value,
        (a) => (i.value = !a),
      ),
      u.watchEffect(() => {
        const { value: a } = o;
        a === 'esc' ? t && t() : a === 'enter' && n && n();
      }),
      r
    );
  }
  const Da = Oi(
    Li,
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
      { resolve: c, reject: l },
    ) => {
      let p = null;
      const d = Ha(n);
      if (r !== 'GET')
        if (A(t) || t instanceof ArrayBuffer) p = t;
        else if (d === 'json')
          try {
            p = JSON.stringify(t);
          } catch {
            p = t.toString();
          }
        else if (d === 'urlencoded') {
          const h = [];
          for (const y in t)
            ce(t, y) &&
              h.push(encodeURIComponent(y) + '=' + encodeURIComponent(t[y]));
          p = h.join('&');
        } else p = t.toString();
      const f = new XMLHttpRequest(),
        m = new za(f);
      f.open(r, e);
      for (const h in n) ce(n, h) && f.setRequestHeader(h, n[h]);
      const g = setTimeout(function () {
        (f.onload = f.onabort = f.onerror = null), m.abort(), l('timeout');
      }, s);
      return (
        (f.responseType = i),
        (f.onload = function () {
          clearTimeout(g);
          const h = f.status;
          let y = i === 'text' ? f.responseText : f.response;
          if (i === 'text' && o === 'json')
            try {
              y = JSON.parse(y);
            } catch {}
          c({
            data: y,
            statusCode: h,
            header: qa(f.getAllResponseHeaders()),
            cookies: [],
          });
        }),
        (f.onabort = function () {
          clearTimeout(g), l('abort');
        }),
        (f.onerror = function () {
          clearTimeout(g), l();
        }),
        (f.withCredentials = a),
        f.send(p),
        m
      );
    },
    Bi,
    Vi,
  );
  function Ha(e) {
    const t = Object.keys(e).find((r) => r.toLowerCase() === 'content-type');
    if (!t) return;
    const n = e[t];
    return n.indexOf('application/json') === 0
      ? 'json'
      : n.indexOf('application/x-www-form-urlencoded') === 0
      ? 'urlencoded'
      : 'string';
  }
  class za {
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
  function qa(e) {
    const t = {};
    return (
      e.split(kt).forEach((n) => {
        const r = n.match(/(\S+\s*):\s*(.*)/);
        !r || r.length !== 3 || (t[r[1]] = r[2]);
      }),
      t
    );
  }
  const Dn = P(
    qi,
    (e, { resolve: t, reject: n }) => {
      let r = !0;
      return (
        Ye(Lt, { from: e.from || 'navigateBack' }) === !0 && (r = !1),
        r ? (Se().$router.go(-e.delta), t()) : n(Lt)
      );
    },
    Gi,
    ea,
  );
  function Oe({ type: e, url: t, tabBarText: n, events: r }, o) {
    const i = Se().$router,
      { path: a, query: s } = so(t);
    return new Promise((c, l) => {
      const p = Ca(e, o);
      i[e === 'navigateTo' ? 'push' : 'replace']({
        path: a,
        query: s,
        state: p,
        force: !0,
      }).then((d) => {
        if (Io(d)) return l(d.message);
        if (
          (e === 'switchTab' && (i.currentRoute.value.meta.tabBarText = n),
          e === 'navigateTo')
        ) {
          const f = i.currentRoute.value.meta;
          return (
            f.eventChannel || (f.eventChannel = new co(p.__id__, r)),
            c({ eventChannel: f.eventChannel })
          );
        }
        return c();
      });
    });
  }
  const Hn = P(
    ve,
    ({ url: e, events: t }, { resolve: n, reject: r }) =>
      Oe({ type: ve, url: e, events: t }).then(n).catch(r),
    Ui,
    Ji,
  );
  function Fa() {
    const e = Je();
    if (!e) return;
    const t = e.$page;
    lt(Oa(t.path, t.id));
  }
  const zn = P(
    ye,
    ({ url: e }, { resolve: t, reject: n }) => (
      Fa(), Oe({ type: ye, url: e }).then(t).catch(n)
    ),
    Wi,
    Xi,
  );
  function Ua() {
    const e = ut().keys();
    for (const t of e) lt(t);
  }
  const qn = P(
    at,
    ({ url: e }, { resolve: t, reject: n }) => (
      Ua(), Oe({ type: at, url: e }).then(t).catch(n)
    ),
    Ki,
    Yi,
  );
  function Ga() {
    const e = Xe();
    if (!e) return;
    const t = ut(),
      n = t.keys();
    for (const r of n) {
      const o = t.get(r);
      o.$.__isTabBar ? (o.$.__isActive = !1) : lt(r);
    }
    e.$.__isTabBar && ((e.$.__isVisible = !1), Ye(e, Xr));
  }
  function Wa(e, t) {
    return e === t.fullPath || (e === '/' && t.meta.isEntry);
  }
  function Ka(e) {
    const t = ut().values();
    for (const n of t) {
      const r = n.$page;
      if (Wa(e, r)) return (n.$.__isActive = !0), r.id;
    }
  }
  const Fn = P(
    ee,
    ({ url: e, tabBarText: t }, { resolve: n, reject: r }) => (
      Ga(), Oe({ type: ee, url: e, tabBarText: t }, Ka(e)).then(n).catch(r)
    ),
    Zi,
    Qi,
  );
  function Un(e) {
    __uniConfig.darkmode && k.on(Et, e);
  }
  function Za(e) {
    k.off(Et, e);
  }
  function Ae(e) {
    let t = {};
    return (
      __uniConfig.darkmode && (t = qe(e, __uniConfig.themeConfig, ft())),
      __uniConfig.darkmode ? t : e
    );
  }
  function Ja(e, t) {
    const n = u.isReactive(e),
      r = n ? u.reactive(Ae(e)) : Ae(e);
    return (
      __uniConfig.darkmode &&
        n &&
        u.watch(e, (o) => {
          const i = Ae(o);
          for (const a in i) r[a] = i[a];
        }),
      t && Un(t),
      r
    );
  }
  const Xa = {
      title: { type: String, default: '' },
      icon: {
        default: 'success',
        validator(e) {
          return xn.indexOf(e) !== -1;
        },
      },
      image: { type: String, default: '' },
      duration: { type: Number, default: 1500 },
      mask: { type: Boolean, default: !1 },
      visible: { type: Boolean },
    },
    Ie = 'uni-toast__icon',
    Ya = { light: '#fff', dark: 'rgba(255,255,255,0.9)' },
    Gn = (e) => Ya[e],
    Qa = u.defineComponent({
      name: 'Toast',
      props: Xa,
      setup(e) {
        xo(), ko();
        const { Icon: t } = es(e),
          n = Va(e, {});
        return () => {
          const { mask: r, duration: o, title: i, image: a } = e;
          return u.createVNode(
            u.Transition,
            { name: 'uni-fade' },
            {
              default: () => [
                u.withDirectives(
                  u.createVNode(
                    'uni-toast',
                    { 'data-duration': o },
                    [
                      r
                        ? u.createVNode(
                            'div',
                            {
                              class: 'uni-mask',
                              style: 'background: transparent;',
                              onTouchmove: Ze,
                            },
                            null,
                            40,
                            ['onTouchmove'],
                          )
                        : '',
                      !a && !t.value
                        ? u.createVNode('div', { class: 'uni-sample-toast' }, [
                            u.createVNode(
                              'p',
                              { class: 'uni-simple-toast__text' },
                              [i],
                            ),
                          ])
                        : u.createVNode('div', { class: 'uni-toast' }, [
                            a
                              ? u.createVNode(
                                  'img',
                                  { src: a, class: Ie },
                                  null,
                                  10,
                                  ['src'],
                                )
                              : t.value,
                            u.createVNode(
                              'p',
                              { class: 'uni-toast__content' },
                              [i],
                            ),
                          ]),
                    ],
                    8,
                    ['data-duration'],
                  ),
                  [[u.vShow, n.value]],
                ),
              ],
            },
          );
        };
      },
    });
  function es(e) {
    const t = u.ref(Gn(ft())),
      n = ({ theme: o }) => (t.value = Gn(o));
    return (
      u.watchEffect(() => {
        e.visible ? Un(n) : Za(n);
      }),
      {
        Icon: u.computed(() => {
          switch (e.icon) {
            case 'success':
              return u.createVNode(Wt(qo, t.value, 38), { class: Ie });
            case 'error':
              return u.createVNode(Wt(Fo, t.value, 38), { class: Ie });
            case 'loading':
              return u.createVNode(
                'i',
                { class: [Ie, 'uni-loading'] },
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
  let x,
    N = '',
    ne;
  const ts = u.effectScope();
  function ns() {
    ts.run(() => {
      u.watch([() => x.visible, () => x.duration], ([e, t]) => {
        if (e) {
          if ((ne && clearTimeout(ne), N === 'onShowLoading')) return;
          ne = setTimeout(() => {
            pt('onHideToast');
          }, t);
        } else ne && clearTimeout(ne);
      });
    });
  }
  function Wn(e) {
    x
      ? b(x, e)
      : ((x = u.reactive(b(e, { visible: !1 }))),
        u.nextTick(() => {
          ns(),
            k.on('onHidePopup', () => pt('onHidePopup')),
            Ra(Qa, x, () => {}).mount(Ba('u-a-t'));
        })),
      setTimeout(() => {
        x.visible = !0;
      }, 10);
  }
  const rs = P(
      sa,
      (e, { resolve: t, reject: n }) => {
        Wn(e), (N = 'onShowToast'), t();
      },
      ca,
      ua,
    ),
    os = { icon: 'loading', duration: 1e8, image: '' },
    is = P(
      oa,
      (e, { resolve: t, reject: n }) => {
        b(e, os), Wn(e), (N = 'onShowLoading'), t();
      },
      ia,
      aa,
    ),
    as = P(ra, (e, { resolve: t, reject: n }) => {
      pt('onHideLoading'), t();
    });
  function pt(e) {
    const { t } = T();
    if (!N) return;
    let n = '';
    if (
      (e === 'onHideToast' && N !== 'onShowToast'
        ? (n = t('uni.showToast.unpaired'))
        : e === 'onHideLoading' &&
          N !== 'onShowLoading' &&
          (n = t('uni.showLoading.unpaired')),
      n)
    )
      return console.warn(n);
    (N = ''),
      setTimeout(() => {
        x.visible = !1;
      }, 10);
  }
  function ss(e) {
    (document.title = e), k.emit(Qr, { titleText: e });
  }
  function cs(e) {
    function t() {
      ss(e.navigationBar.titleText);
    }
    u.watchEffect(t), u.onActivated(t);
  }
  const Kn = b(Lo, {
      publishHandler(e, t, n) {
        k.subscribeHandler(e, t, n);
      },
    }),
    k = b(Yo, {
      publishHandler(e, t, n) {
        Kn.subscribeHandler(e, t, n);
      },
    }),
    us = he({
      name: 'PageHead',
      setup() {
        const e = u.ref(null),
          t = va(),
          n = Ja(t.navigationBar, () => {
            const i = Ae(t.navigationBar);
            (n.backgroundColor = i.backgroundColor),
              (n.titleColor = i.titleColor);
          }),
          { clazz: r, style: o } = ds(n);
        return () => {
          const a = [],
            s = [],
            c = n.type || 'default',
            l =
              c !== 'transparent' &&
              c !== 'float' &&
              u.createVNode(
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
          return u.createVNode(
            'uni-page-head',
            { 'uni-page-head-type': c },
            [
              u.createVNode(
                'div',
                { ref: e, class: r.value, style: o.value },
                [
                  u.createVNode('div', { class: 'uni-page-head-hd' }, [
                    null,
                    ...a,
                  ]),
                  ls(n),
                  u.createVNode('div', { class: 'uni-page-head-ft' }, [...s]),
                ],
                6,
              ),
              l,
            ],
            8,
            ['uni-page-head-type'],
          );
        };
      },
    });
  function ls(e, t) {
    return fs(e);
  }
  function fs({
    type: e,
    loading: t,
    titleSize: n,
    titleText: r,
    titleImage: o,
  }) {
    return u.createVNode('div', { class: 'uni-page-head-bd' }, [
      u.createVNode(
        'div',
        {
          style: { fontSize: n, opacity: e === 'transparent' ? 0 : 1 },
          class: 'uni-page-head__title',
        },
        [
          t
            ? u.createVNode('i', { class: 'uni-loading' }, null)
            : o
            ? u.createVNode(
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
  function ds(e) {
    const t = u.computed(() => {
        const { type: r, titlePenetrate: o, shadowColorType: i } = e,
          a = {
            'uni-page-head': !0,
            'uni-page-head-transparent': r === 'transparent',
            'uni-page-head-titlePenetrate': o === 'YES',
            'uni-page-head-shadow': !!i,
          };
        return i && (a[`uni-page-head-shadow-${i}`] = !0), a;
      }),
      n = u.computed(() => ({
        backgroundColor: e.backgroundColor,
        color: e.titleColor,
        transitionDuration: e.duration,
        transitionTimingFunction: e.timingFunc,
      }));
    return { clazz: t, style: n };
  }
  const ps = he({
    name: 'PageBody',
    setup(e, t) {
      return () =>
        u.createVNode(u.Fragment, null, [
          !1,
          u.createVNode(
            'uni-page-wrapper',
            null,
            [
              u.createVNode('uni-page-body', null, [
                u.renderSlot(t.slots, 'default'),
              ]),
            ],
            16,
          ),
        ]);
    },
  });
  he({
    name: 'Page',
    setup(e, t) {
      const n = ya(Mn()),
        r = n.navigationBar;
      return (
        cs(n),
        () =>
          u.createVNode(
            'uni-page',
            { 'data-page': n.route },
            r.style !== 'custom' ? [u.createVNode(us), Zn(t)] : [Zn(t)],
          )
      );
    },
  });
  function Zn(e) {
    return (
      u.openBlock(),
      u.createBlock(
        ps,
        { key: 0 },
        { default: u.withCtx(() => [u.renderSlot(e.slots, 'page')]), _: 3 },
      )
    );
  }
  function hs(e) {
    return Object.prototype.toString.call(e) === '[object Array]';
  }
  function ht(e) {
    if (
      [null, void 0, NaN, !1].includes(e) ||
      (typeof e != 'object' && typeof e != 'function')
    )
      return e;
    var t = hs(e) ? [] : {};
    for (let n in e)
      e.hasOwnProperty(n) && (t[n] = typeof e[n] == 'object' ? ht(e[n]) : e[n]);
    return t;
  }
  function gt(e = {}, t = {}) {
    if (((e = ht(e)), typeof e != 'object' || typeof t != 'object')) return !1;
    for (var n in t)
      t.hasOwnProperty(n) &&
        (n in e
          ? typeof e[n] != 'object' || typeof t[n] != 'object'
            ? (e[n] = t[n])
            : e[n].concat && t[n].concat
            ? (e[n] = e[n].concat(t[n]))
            : (e[n] = gt(e[n], t[n]))
          : (e[n] = t[n]));
    return e;
  }
  function gs(e) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(
      e,
    );
  }
  function ms(e) {
    return /^1[23456789]\d{9}$/.test(e);
  }
  function bs(e) {
    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(e);
  }
  function vs(e) {
    return !/Invalid|NaN/.test(new Date(e).toString());
  }
  function ys(e) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
      e,
    );
  }
  function _s(e) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
  }
  function ws(e) {
    return /^\d+$/.test(e);
  }
  function Ts(e) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      e,
    );
  }
  function Ss(e) {
    const t =
        /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/,
      n =
        /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    return e.length === 7 ? n.test(e) : e.length === 8 ? t.test(e) : !1;
  }
  function $s(e) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(e);
  }
  function Cs(e) {
    return /^[\u4e00-\u9fa5]+$/gi.test(e);
  }
  function Os(e) {
    return /^[a-zA-Z]*$/.test(e);
  }
  function As(e) {
    return /^[0-9a-zA-Z]*$/g.test(e);
  }
  function Is(e, t) {
    return e.indexOf(t) >= 0;
  }
  function Ps(e, t) {
    return e >= t[0] && e <= t[1];
  }
  function xs(e, t) {
    return e.length >= t[0] && e.length <= t[1];
  }
  function ks(e) {
    return /^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(e);
  }
  function Jn(e) {
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
  function Es(e) {
    if (typeof e == 'string')
      try {
        var t = JSON.parse(e);
        return !!(typeof t == 'object' && t);
      } catch {
        return !1;
      }
    return !1;
  }
  function Ls(e) {
    return typeof Array.isArray == 'function'
      ? Array.isArray(e)
      : Object.prototype.toString.call(e) === '[object Array]';
  }
  function Xn(e) {
    return Object.prototype.toString.call(e) === '[object Object]';
  }
  function Ns(e, t = 6) {
    return new RegExp(`^\\d{${t}}$`).test(e);
  }
  function mt(e) {
    return typeof e == 'function';
  }
  function Ms(e) {
    return Xn(e) && mt(e.then) && mt(e.catch);
  }
  function js(e) {
    const t = e.split('?')[0];
    return new RegExp(/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)$/).test(t);
  }
  function Rs(e) {
    const t = e.split('?')[0];
    return new RegExp(
      /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8|3gp)$/,
    ).test(t);
  }
  function Bs(e) {
    return e && Object.prototype.toString.call(e) === '[object RegExp]';
  }
  function Vs(e) {
    return typeof e == 'string';
  }
  const Pe = {
    email: gs,
    mobile: ms,
    url: bs,
    date: vs,
    dateISO: ys,
    number: _s,
    digits: ws,
    idCard: Ts,
    carNo: Ss,
    amount: $s,
    chinese: Cs,
    letter: Os,
    enOrNum: As,
    contains: Is,
    range: Ps,
    rangeLength: xs,
    empty: Jn,
    isEmpty: Jn,
    jsonString: Es,
    landline: ks,
    object: Xn,
    array: Ls,
    code: Ns,
    func: mt,
    promise: Ms,
    video: Rs,
    image: js,
    regExp: Bs,
    string: Vs,
  };
  class Ds {
    setConfig(t) {
      this.config = gt(this.config, t);
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
              (as(),
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
            (t.url = Pe.url(t.url)
              ? t.url
              : this.config.baseUrl +
                (t.url.indexOf('/') == 0 ? t.url : '/' + t.url)),
            this.config.showLoading &&
              !this.config.timer &&
              (this.config.timer = setTimeout(() => {
                is({
                  title: this.config.loadingText,
                  mask: this.config.loadingMask,
                }),
                  (this.config.timer = null);
              }, this.config.loadingTime)),
            Da(t);
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
  const re = new Ds();
  function Hs(e = {}, t = !0, n = 'brackets') {
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
              for (let c = 0; c < a.length; c++)
                o.push(i + '[' + c + ']=' + a[c]);
              break;
            case 'brackets':
              a.forEach((c) => {
                o.push(i + '[]=' + c);
              });
              break;
            case 'repeat':
              a.forEach((c) => {
                o.push(i + '=' + c);
              });
              break;
            case 'comma':
              let s = '';
              a.forEach((c) => {
                s += (s ? ',' : '') + c;
              }),
                o.push(i + '=' + s);
              break;
            default:
              a.forEach((c) => {
                o.push(i + '[]=' + c);
              });
          }
        else o.push(i + '=' + a);
    }
    return o.length ? r + o.join('&') : '';
  }
  class zs {
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
        Hn({ url: n, animationType: i, animationDuration: a }),
        (t.type == 'redirectTo' || t.type == 'redirect') && zn({ url: n }),
        (t.type == 'switchTab' || t.type == 'tab') && Fn({ url: n }),
        (t.type == 'reLaunch' || t.type == 'launch') && qn({ url: n }),
        (t.type == 'navigateBack' || t.type == 'back') && Dn({ delta: o });
    }
  }
  const qs = new zs().route;
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
  function bt(e = null, t = 'yyyy-mm-dd') {
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
  function Fs(e = null, t = 'yyyy-mm-dd') {
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
          : (o = bt(n, t));
    }
    return o;
  }
  function Us(e = 'rgb(0, 0, 0)', t = 'rgb(255, 255, 255)', n = 10) {
    let r = vt(e, !1),
      o = r[0],
      i = r[1],
      a = r[2],
      s = vt(t, !1),
      c = s[0],
      l = s[1],
      p = s[2],
      d = (c - o) / n,
      f = (l - i) / n,
      m = (p - a) / n,
      g = [];
    for (let h = 0; h < n; h++) {
      let y = yt(
        'rgb(' +
          Math.round(d * h + o) +
          ',' +
          Math.round(f * h + i) +
          ',' +
          Math.round(m * h + a) +
          ')',
      );
      g.push(y);
    }
    return g;
  }
  function vt(e, t = !0) {
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
  function yt(e) {
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
  function Gs(e, t = 0.3) {
    e = yt(e);
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
  const xe = { colorGradient: Us, hexToRgb: vt, rgbToHex: yt, colorToRgba: Gs };
  function Ws(e = 32, t = !0, n = null) {
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
  let Ks = {
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
  function Zs(e = 'success', t = !1) {
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
  function Js(e = []) {
    return e.sort(() => Math.random() - 0.5);
  }
  function Xs(e = 'auto', t = 'rpx') {
    return (e = String(e)), Pe.number(e) ? `${e}${t}` : e;
  }
  function Ys(e, t) {
    if (e >= 0 && t > 0 && t >= e) {
      let n = t - e + 1;
      return Math.floor(Math.random() * n + e);
    } else return 0;
  }
  function Qs(e, t = 'both') {
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
  function ec(e, t = 1500) {
    rs({ title: e, icon: 'none', duration: t });
  }
  function tc(e, t) {
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
  function nc(e = void 0) {
    let t = this.$parent;
    for (; t; )
      if (t.$options && t.$options.name !== e) t = t.$parent;
      else return t;
    return !1;
  }
  function rc() {
    return Bn().platform;
  }
  function oc() {
    return Bn();
  }
  let z = null;
  function ic(e, t = 500, n = !1) {
    if ((z !== null && clearTimeout(z), n)) {
      var r = !z;
      (z = setTimeout(function () {
        z = null;
      }, t)),
        r && typeof e == 'function' && e();
    } else
      z = setTimeout(function () {
        typeof e == 'function' && e();
      }, t);
  }
  let ke = [],
    q = [];
  function ac(e, t = 500, n = !0, r = 'default') {
    ke[r] || (ke[r] = null),
      n
        ? q[r] ||
          ((q[r] = !0),
          typeof e == 'function' && e(),
          (ke[r] = setTimeout(() => {
            q[r] = !1;
          }, t)))
        : q[r] ||
          ((q[r] = !0),
          (ke[r] = setTimeout(() => {
            (q[r] = !1), typeof e == 'function' && e();
          }, t)));
  }
  function sc(e, t = 'object') {
    if (
      Pe.empty(e) ||
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
  let Yn = '1.10.1';
  const cc = {
      v: Yn,
      version: Yn,
      type: ['primary', 'success', 'info', 'error', 'warning'],
    },
    uc = {
      toast: 10090,
      noNetwork: 10080,
      popup: 10075,
      mask: 10070,
      navbar: 980,
      topTips: 975,
      sticky: 970,
      indexListSticky: 965,
    };
  function lc(e) {}
  const fc = {
    queryParams: Hs,
    route: qs,
    timeFormat: bt,
    date: bt,
    timeFrom: Fs,
    colorGradient: xe.colorGradient,
    colorToRgba: xe.colorToRgba,
    guid: Ws,
    color: Ks,
    sys: oc,
    os: rc,
    type2icon: Zs,
    randomArray: Js,
    wranning: lc,
    get: re.get,
    post: re.post,
    put: re.put,
    delete: re.delete,
    hexToRgb: xe.hexToRgb,
    rgbToHex: xe.rgbToHex,
    test: Pe,
    random: Ys,
    deepClone: ht,
    deepMerge: gt,
    getParent: tc,
    $parent: nc,
    addUnit: Xs,
    trim: Qs,
    type: ['primary', 'success', 'error', 'warning', 'info'],
    http: re,
    toast: ec,
    config: cc,
    zIndex: uc,
    debounce: ic,
    throttle: ac,
    addStyle: sc,
  };
  uni.$u = fc;
  var dc = Array.isArray,
    oe = dc,
    pc = typeof se == 'object' && se && se.Object === Object && se,
    Qn = pc,
    hc = Qn,
    gc = typeof self == 'object' && self && self.Object === Object && self,
    mc = hc || gc || Function('return this')(),
    C = mc,
    bc = C,
    vc = bc.Symbol,
    ie = vc,
    er = ie,
    tr = Object.prototype,
    yc = tr.hasOwnProperty,
    _c = tr.toString,
    ae = er ? er.toStringTag : void 0;
  function wc(e) {
    var t = yc.call(e, ae),
      n = e[ae];
    try {
      e[ae] = void 0;
      var r = !0;
    } catch {}
    var o = _c.call(e);
    return r && (t ? (e[ae] = n) : delete e[ae]), o;
  }
  var Tc = wc,
    Sc = Object.prototype,
    $c = Sc.toString;
  function Cc(e) {
    return $c.call(e);
  }
  var Oc = Cc,
    nr = ie,
    Ac = Tc,
    Ic = Oc,
    Pc = '[object Null]',
    xc = '[object Undefined]',
    rr = nr ? nr.toStringTag : void 0;
  function kc(e) {
    return e == null
      ? e === void 0
        ? xc
        : Pc
      : rr && rr in Object(e)
      ? Ac(e)
      : Ic(e);
  }
  var Ee = kc;
  function Ec(e) {
    return e != null && typeof e == 'object';
  }
  var _t = Ec,
    Lc = Ee,
    Nc = _t,
    Mc = '[object Symbol]';
  function jc(e) {
    return typeof e == 'symbol' || (Nc(e) && Lc(e) == Mc);
  }
  var wt = jc,
    Rc = oe,
    Bc = wt,
    Vc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Dc = /^\w*$/;
  function Hc(e, t) {
    if (Rc(e)) return !1;
    var n = typeof e;
    return n == 'number' ||
      n == 'symbol' ||
      n == 'boolean' ||
      e == null ||
      Bc(e)
      ? !0
      : Dc.test(e) || !Vc.test(e) || (t != null && e in Object(t));
  }
  var zc = Hc,
    qc = Ee,
    Fc = De,
    Uc = '[object AsyncFunction]',
    Gc = '[object Function]',
    Wc = '[object GeneratorFunction]',
    Kc = '[object Proxy]';
  function Zc(e) {
    if (!Fc(e)) return !1;
    var t = qc(e);
    return t == Gc || t == Wc || t == Uc || t == Kc;
  }
  var Jc = Zc,
    Xc = C,
    Yc = Xc['__core-js_shared__'],
    Qc = Yc,
    Tt = Qc,
    or = (function () {
      var e = /[^.]+$/.exec((Tt && Tt.keys && Tt.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function eu(e) {
    return !!or && or in e;
  }
  var tu = eu,
    nu = Function.prototype,
    ru = nu.toString;
  function ou(e) {
    if (e != null) {
      try {
        return ru.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var ir = ou,
    iu = Jc,
    au = tu,
    su = De,
    cu = ir,
    uu = /[\\^$.*+?()[\]{}|]/g,
    lu = /^\[object .+?Constructor\]$/,
    fu = Function.prototype,
    du = Object.prototype,
    pu = fu.toString,
    hu = du.hasOwnProperty,
    gu = RegExp(
      '^' +
        pu
          .call(hu)
          .replace(uu, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function mu(e) {
    if (!su(e) || au(e)) return !1;
    var t = iu(e) ? gu : lu;
    return t.test(cu(e));
  }
  var bu = mu;
  function vu(e, t) {
    return e == null ? void 0 : e[t];
  }
  var yu = vu,
    _u = bu,
    wu = yu;
  function Tu(e, t) {
    var n = wu(e, t);
    return _u(n) ? n : void 0;
  }
  var M = Tu,
    Su = M,
    $u = Su(Object, 'create'),
    Le = $u,
    ar = Le;
  function Cu() {
    (this.__data__ = ar ? ar(null) : {}), (this.size = 0);
  }
  var Ou = Cu;
  function Au(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var Iu = Au,
    Pu = Le,
    xu = '__lodash_hash_undefined__',
    ku = Object.prototype,
    Eu = ku.hasOwnProperty;
  function Lu(e) {
    var t = this.__data__;
    if (Pu) {
      var n = t[e];
      return n === xu ? void 0 : n;
    }
    return Eu.call(t, e) ? t[e] : void 0;
  }
  var Nu = Lu,
    Mu = Le,
    ju = Object.prototype,
    Ru = ju.hasOwnProperty;
  function Bu(e) {
    var t = this.__data__;
    return Mu ? t[e] !== void 0 : Ru.call(t, e);
  }
  var Vu = Bu,
    Du = Le,
    Hu = '__lodash_hash_undefined__';
  function zu(e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = Du && t === void 0 ? Hu : t),
      this
    );
  }
  var qu = zu,
    Fu = Ou,
    Uu = Iu,
    Gu = Nu,
    Wu = Vu,
    Ku = qu;
  function F(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (F.prototype.clear = Fu),
    (F.prototype.delete = Uu),
    (F.prototype.get = Gu),
    (F.prototype.has = Wu),
    (F.prototype.set = Ku);
  var Zu = F;
  function Ju() {
    (this.__data__ = []), (this.size = 0);
  }
  var Xu = Ju;
  function Yu(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var sr = Yu,
    Qu = sr;
  function el(e, t) {
    for (var n = e.length; n--; ) if (Qu(e[n][0], t)) return n;
    return -1;
  }
  var Ne = el,
    tl = Ne,
    nl = Array.prototype,
    rl = nl.splice;
  function ol(e) {
    var t = this.__data__,
      n = tl(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : rl.call(t, n, 1), --this.size, !0;
  }
  var il = ol,
    al = Ne;
  function sl(e) {
    var t = this.__data__,
      n = al(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  var cl = sl,
    ul = Ne;
  function ll(e) {
    return ul(this.__data__, e) > -1;
  }
  var fl = ll,
    dl = Ne;
  function pl(e, t) {
    var n = this.__data__,
      r = dl(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  var hl = pl,
    gl = Xu,
    ml = il,
    bl = cl,
    vl = fl,
    yl = hl;
  function U(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (U.prototype.clear = gl),
    (U.prototype.delete = ml),
    (U.prototype.get = bl),
    (U.prototype.has = vl),
    (U.prototype.set = yl);
  var _l = U,
    wl = M,
    Tl = C,
    Sl = wl(Tl, 'Map'),
    cr = Sl,
    ur = Zu,
    $l = _l,
    Cl = cr;
  function Ol() {
    (this.size = 0),
      (this.__data__ = {
        hash: new ur(),
        map: new (Cl || $l)(),
        string: new ur(),
      });
  }
  var Al = Ol;
  function Il(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  var Pl = Il,
    xl = Pl;
  function kl(e, t) {
    var n = e.__data__;
    return xl(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
  }
  var Me = kl,
    El = Me;
  function Ll(e) {
    var t = El(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var Nl = Ll,
    Ml = Me;
  function jl(e) {
    return Ml(this, e).get(e);
  }
  var Rl = jl,
    Bl = Me;
  function Vl(e) {
    return Bl(this, e).has(e);
  }
  var Dl = Vl,
    Hl = Me;
  function zl(e, t) {
    var n = Hl(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  var ql = zl,
    Fl = Al,
    Ul = Nl,
    Gl = Rl,
    Wl = Dl,
    Kl = ql;
  function G(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (G.prototype.clear = Fl),
    (G.prototype.delete = Ul),
    (G.prototype.get = Gl),
    (G.prototype.has = Wl),
    (G.prototype.set = Kl);
  var Zl = G,
    lr = Zl,
    Jl = 'Expected a function';
  function St(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(Jl);
    var n = function () {
      var r = arguments,
        o = t ? t.apply(this, r) : r[0],
        i = n.cache;
      if (i.has(o)) return i.get(o);
      var a = e.apply(this, r);
      return (n.cache = i.set(o, a) || i), a;
    };
    return (n.cache = new (St.Cache || lr)()), n;
  }
  St.Cache = lr;
  var Xl = St,
    Yl = Xl,
    Ql = 500;
  function ef(e) {
    var t = Yl(e, function (r) {
        return n.size === Ql && n.clear(), r;
      }),
      n = t.cache;
    return t;
  }
  var tf = ef,
    nf = tf,
    rf =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    of = /\\(\\)?/g,
    af = nf(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(rf, function (n, r, o, i) {
          t.push(o ? i.replace(of, '$1') : r || n);
        }),
        t
      );
    }),
    sf = af;
  function cf(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
      o[n] = t(e[n], n, e);
    return o;
  }
  var uf = cf,
    fr = ie,
    lf = uf,
    ff = oe,
    df = wt,
    pf = 1 / 0,
    dr = fr ? fr.prototype : void 0,
    pr = dr ? dr.toString : void 0;
  function hr(e) {
    if (typeof e == 'string') return e;
    if (ff(e)) return lf(e, hr) + '';
    if (df(e)) return pr ? pr.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -pf ? '-0' : t;
  }
  var hf = hr,
    gf = hf;
  function mf(e) {
    return e == null ? '' : gf(e);
  }
  var bf = mf,
    vf = oe,
    yf = zc,
    _f = sf,
    wf = bf;
  function Tf(e, t) {
    return vf(e) ? e : yf(e, t) ? [e] : _f(wf(e));
  }
  var je = Tf,
    Sf = wt,
    $f = 1 / 0;
  function Cf(e) {
    if (typeof e == 'string' || Sf(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -$f ? '-0' : t;
  }
  var $t = Cf,
    Of = je,
    Af = $t;
  function If(e, t) {
    t = Of(t, e);
    for (var n = 0, r = t.length; e != null && n < r; ) e = e[Af(t[n++])];
    return n && n == r ? e : void 0;
  }
  var Pf = If,
    xf = M,
    kf = (function () {
      try {
        var e = xf(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch {}
    })(),
    gr = kf,
    mr = gr;
  function Ef(e, t, n) {
    t == '__proto__' && mr
      ? mr(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n);
  }
  var Lf = Ef,
    Nf = Lf,
    Mf = sr,
    jf = Object.prototype,
    Rf = jf.hasOwnProperty;
  function Bf(e, t, n) {
    var r = e[t];
    (!(Rf.call(e, t) && Mf(r, n)) || (n === void 0 && !(t in e))) &&
      Nf(e, t, n);
  }
  var Vf = Bf,
    Df = 9007199254740991,
    Hf = /^(?:0|[1-9]\d*)$/;
  function zf(e, t) {
    var n = typeof e;
    return (
      (t = t ?? Df),
      !!t &&
        (n == 'number' || (n != 'symbol' && Hf.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var br = zf,
    qf = Vf,
    Ff = je,
    Uf = br,
    vr = De,
    Gf = $t;
  function Wf(e, t, n, r) {
    if (!vr(e)) return e;
    t = Ff(t, e);
    for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
      var c = Gf(t[o]),
        l = n;
      if (c === '__proto__' || c === 'constructor' || c === 'prototype')
        return e;
      if (o != a) {
        var p = s[c];
        (l = r ? r(p, c, s) : void 0),
          l === void 0 && (l = vr(p) ? p : Uf(t[o + 1]) ? [] : {});
      }
      qf(s, c, l), (s = s[c]);
    }
    return e;
  }
  var Kf = Wf,
    Zf = Pf,
    Jf = Kf,
    Xf = je;
  function Yf(e, t, n) {
    for (var r = -1, o = t.length, i = {}; ++r < o; ) {
      var a = t[r],
        s = Zf(e, a);
      n(s, a) && Jf(i, Xf(a, e), s);
    }
    return i;
  }
  var Qf = Yf;
  function ed(e, t) {
    return e != null && t in Object(e);
  }
  var td = ed,
    nd = Ee,
    rd = _t,
    od = '[object Arguments]';
  function id(e) {
    return rd(e) && nd(e) == od;
  }
  var ad = id,
    yr = ad,
    sd = _t,
    _r = Object.prototype,
    cd = _r.hasOwnProperty,
    ud = _r.propertyIsEnumerable,
    ld = yr(
      (function () {
        return arguments;
      })(),
    )
      ? yr
      : function (e) {
          return sd(e) && cd.call(e, 'callee') && !ud.call(e, 'callee');
        },
    wr = ld,
    fd = 9007199254740991;
  function dd(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= fd;
  }
  var pd = dd,
    hd = je,
    gd = wr,
    md = oe,
    bd = br,
    vd = pd,
    yd = $t;
  function _d(e, t, n) {
    t = hd(t, e);
    for (var r = -1, o = t.length, i = !1; ++r < o; ) {
      var a = yd(t[r]);
      if (!(i = e != null && n(e, a))) break;
      e = e[a];
    }
    return i || ++r != o
      ? i
      : ((o = e == null ? 0 : e.length),
        !!o && vd(o) && bd(a, o) && (md(e) || gd(e)));
  }
  var wd = _d,
    Td = td,
    Sd = wd;
  function $d(e, t) {
    return e != null && Sd(e, t, Td);
  }
  var Cd = $d,
    Od = Qf,
    Ad = Cd;
  function Id(e, t) {
    return Od(e, t, function (n, r) {
      return Ad(e, r);
    });
  }
  var Pd = Id;
  function xd(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
    return e;
  }
  var kd = xd,
    Tr = ie,
    Ed = wr,
    Ld = oe,
    Sr = Tr ? Tr.isConcatSpreadable : void 0;
  function Nd(e) {
    return Ld(e) || Ed(e) || !!(Sr && e && e[Sr]);
  }
  var Md = Nd,
    jd = kd,
    Rd = Md;
  function $r(e, t, n, r, o) {
    var i = -1,
      a = e.length;
    for (n || (n = Rd), o || (o = []); ++i < a; ) {
      var s = e[i];
      t > 0 && n(s)
        ? t > 1
          ? $r(s, t - 1, n, r, o)
          : jd(o, s)
        : r || (o[o.length] = s);
    }
    return o;
  }
  var Bd = $r,
    Vd = Bd;
  function Dd(e) {
    var t = e == null ? 0 : e.length;
    return t ? Vd(e, 1) : [];
  }
  var Hd = Dd;
  function zd(e, t, n) {
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
  var qd = zd,
    Fd = qd,
    Cr = Math.max;
  function Ud(e, t, n) {
    return (
      (t = Cr(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var r = arguments, o = -1, i = Cr(r.length - t, 0), a = Array(i);
          ++o < i;

        )
          a[o] = r[t + o];
        o = -1;
        for (var s = Array(t + 1); ++o < t; ) s[o] = r[o];
        return (s[t] = n(a)), Fd(e, this, s);
      }
    );
  }
  var Gd = Ud;
  function Wd(e) {
    return function () {
      return e;
    };
  }
  var Kd = Wd;
  function Zd(e) {
    return e;
  }
  var Jd = Zd,
    Xd = Kd,
    Or = gr,
    Yd = Jd,
    Qd = Or
      ? function (e, t) {
          return Or(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: Xd(t),
            writable: !0,
          });
        }
      : Yd,
    ep = Qd,
    tp = 800,
    np = 16,
    rp = Date.now;
  function op(e) {
    var t = 0,
      n = 0;
    return function () {
      var r = rp(),
        o = np - (r - n);
      if (((n = r), o > 0)) {
        if (++t >= tp) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var ip = op,
    ap = ep,
    sp = ip,
    cp = sp(ap),
    up = cp,
    lp = Hd,
    fp = Gd,
    dp = up;
  function pp(e) {
    return dp(fp(e, void 0, lp), e + '');
  }
  var hp = pp,
    gp = Pd,
    mp = hp;
  mp(function (e, t) {
    return e == null ? {} : gp(e, t);
  });
  var Re = { exports: {} };
  function bp() {
    return !1;
  }
  var vp = bp;
  Re.exports,
    (function (e, t) {
      var n = C,
        r = vp,
        o = t && !t.nodeType && t,
        i = o && !0 && e && !e.nodeType && e,
        a = i && i.exports === o,
        s = a ? n.Buffer : void 0,
        c = s ? s.isBuffer : void 0,
        l = c || r;
      e.exports = l;
    })(Re, Re.exports),
    Re.exports;
  var Be = { exports: {} };
  Be.exports,
    (function (e, t) {
      var n = Qn,
        r = t && !t.nodeType && t,
        o = r && !0 && e && !e.nodeType && e,
        i = o && o.exports === r,
        a = i && n.process,
        s = (function () {
          try {
            var c = o && o.require && o.require('util').types;
            return c || (a && a.binding && a.binding('util'));
          } catch {}
        })();
      e.exports = s;
    })(Be, Be.exports);
  var Ct = Be.exports,
    Ar = Ct;
  Ar && Ar.isTypedArray;
  var Ve = { exports: {} };
  Ve.exports,
    (function (e, t) {
      var n = C,
        r = t && !t.nodeType && t,
        o = r && !0 && e && !e.nodeType && e,
        i = o && o.exports === r,
        a = i ? n.Buffer : void 0,
        s = a ? a.allocUnsafe : void 0;
      function c(l, p) {
        if (p) return l.slice();
        var d = l.length,
          f = s ? s(d) : new l.constructor(d);
        return l.copy(f), f;
      }
      e.exports = c;
    })(Ve, Ve.exports),
    Ve.exports;
  var yp = M,
    _p = C,
    wp = yp(_p, 'DataView'),
    Tp = wp,
    Sp = M,
    $p = C,
    Cp = Sp($p, 'Promise'),
    Op = Cp,
    Ap = M,
    Ip = C,
    Pp = Ap(Ip, 'Set'),
    xp = Pp,
    kp = M,
    Ep = C,
    Lp = kp(Ep, 'WeakMap'),
    Np = Lp,
    Ot = Tp,
    At = cr,
    It = Op,
    Pt = xp,
    xt = Np,
    Ir = Ee,
    W = ir,
    Pr = '[object Map]',
    Mp = '[object Object]',
    xr = '[object Promise]',
    kr = '[object Set]',
    Er = '[object WeakMap]',
    Lr = '[object DataView]',
    jp = W(Ot),
    Rp = W(At),
    Bp = W(It),
    Vp = W(Pt),
    Dp = W(xt),
    K = Ir;
  ((Ot && K(new Ot(new ArrayBuffer(1))) != Lr) ||
    (At && K(new At()) != Pr) ||
    (It && K(It.resolve()) != xr) ||
    (Pt && K(new Pt()) != kr) ||
    (xt && K(new xt()) != Er)) &&
    (K = function (e) {
      var t = Ir(e),
        n = t == Mp ? e.constructor : void 0,
        r = n ? W(n) : '';
      if (r)
        switch (r) {
          case jp:
            return Lr;
          case Rp:
            return Pr;
          case Bp:
            return xr;
          case Vp:
            return kr;
          case Dp:
            return Er;
        }
      return t;
    });
  var Hp = C;
  Hp.Uint8Array;
  var Nr = ie,
    Mr = Nr ? Nr.prototype : void 0;
  Mr && Mr.valueOf;
  var jr = Ct;
  jr && jr.isMap;
  var Rr = Ct;
  Rr && Rr.isSet;
  var zp = { exports: {} };
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
  })(zp);
  const E = '[vue3-aipage-widget]';
  var Br;
  (function (e) {
    (e.react = 'react'),
      (e.vue2 = 'vue2'),
      (e.vue3 = 'vue3'),
      (e.jquery = 'jquery');
  })(Br || (Br = {}));
  function qp(e) {
    let t = !1;
    if (!e || !Fp(e)) return !1;
    const n = e;
    return (
      n.name
        ? n.id
          ? n.componentId
            ? n.description
              ? !n.tags || (Array.isArray(n.tags) && n.tags.length === 0)
                ? console.error(
                    `${E}自定义插件注册失败，插件分类（tags）不能为空。`,
                  )
                : (n.pluginIcon || (n.pluginIcon = 'cards-plugin'),
                  n.type || (n.type = 'element'),
                  (t = !0))
              : console.error(
                  `${E}自定义插件注册失败，插件描述（description）不能为空。`,
                )
            : console.error(
                `${E}自定义插件注册失败，渲染器ID（componentId）不能为空。`,
              )
          : console.error(`${E}自定义插件注册失败，插件ID（id）不能为空。`)
        : console.error(`${E}自定义插件注册失败，插件名称（name）不能为空。`),
      t
    );
  }
  function Fp(e) {
    let t = !1;
    return (
      Object.prototype.toString.call(e).slice(8, -1) === 'Object' && (t = !0), t
    );
  }
  function Up(e) {
    return `-${e}`.replace(/(-[A-Za-z0-9])/g, (t) =>
      t.toUpperCase().replace('-', ''),
    );
  }
  function Gp(e) {
    return (
      qp(e) &&
        window &&
        window.postMessage &&
        Wp(e.id, e) &&
        (console.info(`${E}触发注册自定义插件(${e.name})事件:`, e),
        window.postMessage(
          {
            type: 'aipage-editor-register-plugin-event',
            eventMsg: `${E}注册一个自定义aipage-editor插件`,
            editorPluginName: e.name,
            customEditorPlugin: e,
          },
          '*',
        )),
      e
    );
  }
  function Wp(e, t) {
    window &&
      !window.AIPageEditorCustomPlugins &&
      (window.AIPageEditorCustomPlugins = {});
    const n = Up(e);
    if (window.AIPageEditorCustomPlugins[n])
      console.error(`${E}注册自定义插件失败，已存在同名插件(${e})。`);
    else return (window.AIPageEditorCustomPlugins[n] = t), n;
    return null;
  }
  (Dr = window.matchMedia) == null ||
    Dr.call(window, '(max-width: 768px)').matches;
  const Vr = {
    name: '抽奖卡片',
    description: '抽奖自定义组件',
    componentId: 'uni-lottery-card',
    id: 'uni-lottery-card',
    tags: ['跨端组件'],
    pluginIcon: 'cards-plugin',
    order: 1,
    type: 'element',
    device: ['mobile', 'app'],
    docLink: '',
    demoProperties: {
      componentId: 'uni-lottery-card',
      type: 'element',
      componentProperties: {
        data: {
          prizeList: [
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
              name: '吹风机',
              value: 'dryer',
              img: 'https://user-images.githubusercontent.com/11958920/184317938-03c2cc33-948d-45e6-8eba-1b473966ea1e.png',
            },
            {
              name: '平衡车',
              value: 'balanceCar',
              img: 'https://user-images.githubusercontent.com/11958920/184317959-9a38abd1-12da-43fa-b93a-eb3e0fbc1ed1.png',
            },
            {
              name: 'iPad5',
              value: 'iPad',
              img: 'https://user-images.githubusercontent.com/11958920/184317974-d0f9d220-b0eb-4596-9e9b-84767dee8b8c.png',
            },
          ],
          prizeResult: ['iPhone', 'airPods', 'luggage'],
        },
        style: {},
      },
    },
    panelControls: {
      type: 'tabs',
      tabs: [
        {
          title: '属性',
          controls: [
            {
              type: 'collapse',
              title: '数据',
              controls: [
                {
                  name: 'data.prizeList',
                  type: 'setting-list',
                  label: '奖品列表',
                  mode: 'normal',
                  fullSize: !0,
                  setting: [
                    {
                      type: 'input-text',
                      name: 'name',
                      label: '奖品名称',
                      placeholder: '请输入奖品名称',
                    },
                    {
                      type: 'input-text',
                      name: 'value',
                      label: '奖品ID',
                      placeholder: '请输入奖品ID',
                    },
                    {
                      type: 'input-text',
                      name: 'img',
                      label: '奖品图片',
                      placeholder: '请输入奖品图片地址',
                    },
                  ],
                  enableDataBinding: !0,
                },
                {
                  name: 'data.prizeResult',
                  label: '抽奖结果',
                  type: 'input-array',
                  inline: !0,
                  removable: !1,
                  draggable: !0,
                  addable: !1,
                  items: {
                    type: 'select',
                    labelField: 'name',
                    source: '${data.prizeList}',
                  },
                  enableDataBinding: !0,
                },
              ],
            },
          ],
        },
        {
          title: '外观',
          controls: [
            {
              title: '布局',
              type: 'collapse',
              controls: [
                {
                  type: 'button-icon-group',
                  name: 'style.display',
                  label: '显示',
                  value: 'block',
                  options: [
                    { label: '块级(block)', icon: 'block', value: 'block' },
                    {
                      label: '行内区块(inline-block)',
                      icon: 'inlineBlock',
                      value: 'inline-block',
                    },
                    {
                      label: '行内元素(inline)',
                      icon: 'inline',
                      value: 'inline',
                    },
                  ],
                },
                {
                  name: 'style',
                  type: 'whSet',
                  label: '宽度',
                  options: [{ label: '', value: 'width' }],
                },
              ],
            },
            {
              type: 'collapse',
              title: '边距',
              controls: { name: 'style.box', type: 'boxModel', label: !1 },
            },
          ],
        },
      ],
    },
  };
  return Gp(Vr), Vr;
});

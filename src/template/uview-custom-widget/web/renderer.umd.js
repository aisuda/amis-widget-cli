var Bc = Object.defineProperty;
var Vc = (p, o, _) =>
  o in p
    ? Bc(p, o, { enumerable: !0, configurable: !0, writable: !0, value: _ })
    : (p[o] = _);
var k = (p, o, _) => (Vc(p, typeof o != 'symbol' ? o + '' : o, _), _);
(function (p, o) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? o(require('react'), require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['react', 'vue'], o)
    : ((p = typeof globalThis != 'undefined' ? globalThis : p || self),
      o(p.react, p.vue));
})(this, function (p, o) {
  var yt;
  ('use strict');
  function _(e) {
    return e && typeof e == 'object' && 'default' in e ? e : { default: e };
  }
  var G = _(p),
    A =
      typeof globalThis != 'undefined'
        ? globalThis
        : typeof window != 'undefined'
        ? window
        : typeof global != 'undefined'
        ? global
        : typeof self != 'undefined'
        ? self
        : {},
    vt = Array.isArray,
    x = vt,
    bt = typeof A == 'object' && A && A.Object === Object && A,
    ce = bt,
    St = ce,
    $t = typeof self == 'object' && self && self.Object === Object && self,
    wt = St || $t || Function('return this')(),
    g = wt,
    Ct = g,
    xt = Ct.Symbol,
    T = xt,
    le = T,
    ue = Object.prototype,
    Tt = ue.hasOwnProperty,
    Pt = ue.toString,
    P = le ? le.toStringTag : void 0;
  function Ot(e) {
    var t = Tt.call(e, P),
      n = e[P];
    try {
      e[P] = void 0;
      var r = !0;
    } catch {}
    var a = Pt.call(e);
    return r && (t ? (e[P] = n) : delete e[P]), a;
  }
  var It = Ot,
    Nt = Object.prototype,
    kt = Nt.toString;
  function At(e) {
    return kt.call(e);
  }
  var Et = At,
    fe = T,
    Mt = It,
    zt = Et,
    jt = '[object Null]',
    Bt = '[object Undefined]',
    de = fe ? fe.toStringTag : void 0;
  function Vt(e) {
    return e == null
      ? e === void 0
        ? Bt
        : jt
      : de && de in Object(e)
      ? Mt(e)
      : zt(e);
  }
  var E = Vt;
  function Dt(e) {
    return e != null && typeof e == 'object';
  }
  var W = Dt,
    Rt = E,
    Ft = W,
    Lt = '[object Symbol]';
  function Ut(e) {
    return typeof e == 'symbol' || (Ft(e) && Rt(e) == Lt);
  }
  var q = Ut,
    Ht = x,
    Gt = q,
    Wt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    qt = /^\w*$/;
  function Kt(e, t) {
    if (Ht(e)) return !1;
    var n = typeof e;
    return n == 'number' ||
      n == 'symbol' ||
      n == 'boolean' ||
      e == null ||
      Gt(e)
      ? !0
      : qt.test(e) || !Wt.test(e) || (t != null && e in Object(t));
  }
  var Xt = Kt;
  function Yt(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var K = Yt,
    Jt = E,
    Zt = K,
    Qt = '[object AsyncFunction]',
    en = '[object Function]',
    tn = '[object GeneratorFunction]',
    nn = '[object Proxy]';
  function rn(e) {
    if (!Zt(e)) return !1;
    var t = Jt(e);
    return t == en || t == tn || t == Qt || t == nn;
  }
  var an = rn,
    on = g,
    sn = on['__core-js_shared__'],
    cn = sn,
    X = cn,
    pe = (function () {
      var e = /[^.]+$/.exec((X && X.keys && X.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function ln(e) {
    return !!pe && pe in e;
  }
  var un = ln,
    fn = Function.prototype,
    dn = fn.toString;
  function pn(e) {
    if (e != null) {
      try {
        return dn.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var he = pn,
    hn = an,
    gn = un,
    mn = K,
    _n = he,
    yn = /[\\^$.*+?()[\]{}|]/g,
    vn = /^\[object .+?Constructor\]$/,
    bn = Function.prototype,
    Sn = Object.prototype,
    $n = bn.toString,
    wn = Sn.hasOwnProperty,
    Cn = RegExp(
      '^' +
        $n
          .call(wn)
          .replace(yn, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function xn(e) {
    if (!mn(e) || gn(e)) return !1;
    var t = hn(e) ? Cn : vn;
    return t.test(_n(e));
  }
  var Tn = xn;
  function Pn(e, t) {
    return e == null ? void 0 : e[t];
  }
  var On = Pn,
    In = Tn,
    Nn = On;
  function kn(e, t) {
    var n = Nn(e, t);
    return In(n) ? n : void 0;
  }
  var y = kn,
    An = y,
    En = An(Object, 'create'),
    M = En,
    ge = M;
  function Mn() {
    (this.__data__ = ge ? ge(null) : {}), (this.size = 0);
  }
  var zn = Mn;
  function jn(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var Bn = jn,
    Vn = M,
    Dn = '__lodash_hash_undefined__',
    Rn = Object.prototype,
    Fn = Rn.hasOwnProperty;
  function Ln(e) {
    var t = this.__data__;
    if (Vn) {
      var n = t[e];
      return n === Dn ? void 0 : n;
    }
    return Fn.call(t, e) ? t[e] : void 0;
  }
  var Un = Ln,
    Hn = M,
    Gn = Object.prototype,
    Wn = Gn.hasOwnProperty;
  function qn(e) {
    var t = this.__data__;
    return Hn ? t[e] !== void 0 : Wn.call(t, e);
  }
  var Kn = qn,
    Xn = M,
    Yn = '__lodash_hash_undefined__';
  function Jn(e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = Xn && t === void 0 ? Yn : t),
      this
    );
  }
  var Zn = Jn,
    Qn = zn,
    er = Bn,
    tr = Un,
    nr = Kn,
    rr = Zn;
  function b(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (b.prototype.clear = Qn),
    (b.prototype.delete = er),
    (b.prototype.get = tr),
    (b.prototype.has = nr),
    (b.prototype.set = rr);
  var ar = b;
  function or() {
    (this.__data__ = []), (this.size = 0);
  }
  var ir = or;
  function sr(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var me = sr,
    cr = me;
  function lr(e, t) {
    for (var n = e.length; n--; ) if (cr(e[n][0], t)) return n;
    return -1;
  }
  var z = lr,
    ur = z,
    fr = Array.prototype,
    dr = fr.splice;
  function pr(e) {
    var t = this.__data__,
      n = ur(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : dr.call(t, n, 1), --this.size, !0;
  }
  var hr = pr,
    gr = z;
  function mr(e) {
    var t = this.__data__,
      n = gr(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  var _r = mr,
    yr = z;
  function vr(e) {
    return yr(this.__data__, e) > -1;
  }
  var br = vr,
    Sr = z;
  function $r(e, t) {
    var n = this.__data__,
      r = Sr(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  var wr = $r,
    Cr = ir,
    xr = hr,
    Tr = _r,
    Pr = br,
    Or = wr;
  function S(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (S.prototype.clear = Cr),
    (S.prototype.delete = xr),
    (S.prototype.get = Tr),
    (S.prototype.has = Pr),
    (S.prototype.set = Or);
  var Ir = S,
    Nr = y,
    kr = g,
    Ar = Nr(kr, 'Map'),
    _e = Ar,
    ye = ar,
    Er = Ir,
    Mr = _e;
  function zr() {
    (this.size = 0),
      (this.__data__ = {
        hash: new ye(),
        map: new (Mr || Er)(),
        string: new ye(),
      });
  }
  var jr = zr;
  function Br(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  var Vr = Br,
    Dr = Vr;
  function Rr(e, t) {
    var n = e.__data__;
    return Dr(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
  }
  var j = Rr,
    Fr = j;
  function Lr(e) {
    var t = Fr(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var Ur = Lr,
    Hr = j;
  function Gr(e) {
    return Hr(this, e).get(e);
  }
  var Wr = Gr,
    qr = j;
  function Kr(e) {
    return qr(this, e).has(e);
  }
  var Xr = Kr,
    Yr = j;
  function Jr(e, t) {
    var n = Yr(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  var Zr = Jr,
    Qr = jr,
    ea = Ur,
    ta = Wr,
    na = Xr,
    ra = Zr;
  function $(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  ($.prototype.clear = Qr),
    ($.prototype.delete = ea),
    ($.prototype.get = ta),
    ($.prototype.has = na),
    ($.prototype.set = ra);
  var aa = $,
    ve = aa,
    oa = 'Expected a function';
  function Y(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(oa);
    var n = function () {
      var r = arguments,
        a = t ? t.apply(this, r) : r[0],
        i = n.cache;
      if (i.has(a)) return i.get(a);
      var s = e.apply(this, r);
      return (n.cache = i.set(a, s) || i), s;
    };
    return (n.cache = new (Y.Cache || ve)()), n;
  }
  Y.Cache = ve;
  var ia = Y,
    sa = ia,
    ca = 500;
  function la(e) {
    var t = sa(e, function (r) {
        return n.size === ca && n.clear(), r;
      }),
      n = t.cache;
    return t;
  }
  var ua = la,
    fa = ua,
    da =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    pa = /\\(\\)?/g,
    ha = fa(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(da, function (n, r, a, i) {
          t.push(a ? i.replace(pa, '$1') : r || n);
        }),
        t
      );
    }),
    ga = ha;
  function ma(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
      a[n] = t(e[n], n, e);
    return a;
  }
  var _a = ma,
    be = T,
    ya = _a,
    va = x,
    ba = q,
    Sa = 1 / 0,
    Se = be ? be.prototype : void 0,
    $e = Se ? Se.toString : void 0;
  function we(e) {
    if (typeof e == 'string') return e;
    if (va(e)) return ya(e, we) + '';
    if (ba(e)) return $e ? $e.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -Sa ? '-0' : t;
  }
  var $a = we,
    wa = $a;
  function Ca(e) {
    return e == null ? '' : wa(e);
  }
  var xa = Ca,
    Ta = x,
    Pa = Xt,
    Oa = ga,
    Ia = xa;
  function Na(e, t) {
    return Ta(e) ? e : Pa(e, t) ? [e] : Oa(Ia(e));
  }
  var B = Na,
    ka = q,
    Aa = 1 / 0;
  function Ea(e) {
    if (typeof e == 'string' || ka(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -Aa ? '-0' : t;
  }
  var J = Ea,
    Ma = B,
    za = J;
  function ja(e, t) {
    t = Ma(t, e);
    for (var n = 0, r = t.length; e != null && n < r; ) e = e[za(t[n++])];
    return n && n == r ? e : void 0;
  }
  var Ba = ja,
    Va = y,
    Da = (function () {
      try {
        var e = Va(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch {}
    })(),
    Ce = Da,
    xe = Ce;
  function Ra(e, t, n) {
    t == '__proto__' && xe
      ? xe(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n);
  }
  var Fa = Ra,
    La = Fa,
    Ua = me,
    Ha = Object.prototype,
    Ga = Ha.hasOwnProperty;
  function Wa(e, t, n) {
    var r = e[t];
    (!(Ga.call(e, t) && Ua(r, n)) || (n === void 0 && !(t in e))) &&
      La(e, t, n);
  }
  var qa = Wa,
    Ka = 9007199254740991,
    Xa = /^(?:0|[1-9]\d*)$/;
  function Ya(e, t) {
    var n = typeof e;
    return (
      (t = t == null ? Ka : t),
      !!t &&
        (n == 'number' || (n != 'symbol' && Xa.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var Te = Ya,
    Ja = qa,
    Za = B,
    Qa = Te,
    Pe = K,
    eo = J;
  function to(e, t, n, r) {
    if (!Pe(e)) return e;
    t = Za(t, e);
    for (var a = -1, i = t.length, s = i - 1, c = e; c != null && ++a < i; ) {
      var l = eo(t[a]),
        u = n;
      if (l === '__proto__' || l === 'constructor' || l === 'prototype')
        return e;
      if (a != s) {
        var f = c[l];
        (u = r ? r(f, l, c) : void 0),
          u === void 0 && (u = Pe(f) ? f : Qa(t[a + 1]) ? [] : {});
      }
      Ja(c, l, u), (c = c[l]);
    }
    return e;
  }
  var no = to,
    ro = Ba,
    ao = no,
    oo = B;
  function io(e, t, n) {
    for (var r = -1, a = t.length, i = {}; ++r < a; ) {
      var s = t[r],
        c = ro(e, s);
      n(c, s) && ao(i, oo(s, e), c);
    }
    return i;
  }
  var so = io;
  function co(e, t) {
    return e != null && t in Object(e);
  }
  var lo = co,
    uo = E,
    fo = W,
    po = '[object Arguments]';
  function ho(e) {
    return fo(e) && uo(e) == po;
  }
  var go = ho,
    Oe = go,
    mo = W,
    Ie = Object.prototype,
    _o = Ie.hasOwnProperty,
    yo = Ie.propertyIsEnumerable,
    vo = Oe(
      (function () {
        return arguments;
      })(),
    )
      ? Oe
      : function (e) {
          return mo(e) && _o.call(e, 'callee') && !yo.call(e, 'callee');
        },
    Ne = vo,
    bo = 9007199254740991;
  function So(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= bo;
  }
  var $o = So,
    wo = B,
    Co = Ne,
    xo = x,
    To = Te,
    Po = $o,
    Oo = J;
  function Io(e, t, n) {
    t = wo(t, e);
    for (var r = -1, a = t.length, i = !1; ++r < a; ) {
      var s = Oo(t[r]);
      if (!(i = e != null && n(e, s))) break;
      e = e[s];
    }
    return i || ++r != a
      ? i
      : ((a = e == null ? 0 : e.length),
        !!a && Po(a) && To(s, a) && (xo(e) || Co(e)));
  }
  var No = Io,
    ko = lo,
    Ao = No;
  function Eo(e, t) {
    return e != null && Ao(e, t, ko);
  }
  var Mo = Eo,
    zo = so,
    jo = Mo;
  function Bo(e, t) {
    return zo(e, t, function (n, r) {
      return jo(e, r);
    });
  }
  var Vo = Bo;
  function Do(e, t) {
    for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
    return e;
  }
  var Ro = Do,
    ke = T,
    Fo = Ne,
    Lo = x,
    Ae = ke ? ke.isConcatSpreadable : void 0;
  function Uo(e) {
    return Lo(e) || Fo(e) || !!(Ae && e && e[Ae]);
  }
  var Ho = Uo,
    Go = Ro,
    Wo = Ho;
  function Ee(e, t, n, r, a) {
    var i = -1,
      s = e.length;
    for (n || (n = Wo), a || (a = []); ++i < s; ) {
      var c = e[i];
      t > 0 && n(c)
        ? t > 1
          ? Ee(c, t - 1, n, r, a)
          : Go(a, c)
        : r || (a[a.length] = c);
    }
    return a;
  }
  var qo = Ee,
    Ko = qo;
  function Xo(e) {
    var t = e == null ? 0 : e.length;
    return t ? Ko(e, 1) : [];
  }
  var Yo = Xo;
  function Jo(e, t, n) {
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
  var Zo = Jo,
    Qo = Zo,
    Me = Math.max;
  function ei(e, t, n) {
    return (
      (t = Me(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var r = arguments, a = -1, i = Me(r.length - t, 0), s = Array(i);
          ++a < i;

        )
          s[a] = r[t + a];
        a = -1;
        for (var c = Array(t + 1); ++a < t; ) c[a] = r[a];
        return (c[t] = n(s)), Qo(e, this, c);
      }
    );
  }
  var ti = ei;
  function ni(e) {
    return function () {
      return e;
    };
  }
  var ri = ni;
  function ai(e) {
    return e;
  }
  var oi = ai,
    ii = ri,
    ze = Ce,
    si = oi,
    ci = ze
      ? function (e, t) {
          return ze(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: ii(t),
            writable: !0,
          });
        }
      : si,
    li = ci,
    ui = 800,
    fi = 16,
    di = Date.now;
  function pi(e) {
    var t = 0,
      n = 0;
    return function () {
      var r = di(),
        a = fi - (r - n);
      if (((n = r), a > 0)) {
        if (++t >= ui) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var hi = pi,
    gi = li,
    mi = hi,
    _i = mi(gi),
    yi = _i,
    vi = Yo,
    bi = ti,
    Si = yi;
  function $i(e) {
    return Si(bi(e, void 0, vi), e + '');
  }
  var wi = $i,
    Ci = Vo,
    xi = wi;
  xi(function (e, t) {
    return e == null ? {} : Ci(e, t);
  });
  var je = { exports: {} };
  function Ti() {
    return !1;
  }
  var Pi = Ti;
  (function (e, t) {
    var n = g,
      r = Pi,
      a = t && !t.nodeType && t,
      i = a && !0 && e && !e.nodeType && e,
      s = i && i.exports === a,
      c = s ? n.Buffer : void 0,
      l = c ? c.isBuffer : void 0,
      u = l || r;
    e.exports = u;
  })(je, je.exports);
  var O = { exports: {} };
  (function (e, t) {
    var n = ce,
      r = t && !t.nodeType && t,
      a = r && !0 && e && !e.nodeType && e,
      i = a && a.exports === r,
      s = i && n.process,
      c = (function () {
        try {
          var l = a && a.require && a.require('util').types;
          return l || (s && s.binding && s.binding('util'));
        } catch {}
      })();
    e.exports = c;
  })(O, O.exports);
  var Be = O.exports;
  Be && Be.isTypedArray;
  var Ve = { exports: {} };
  (function (e, t) {
    var n = g,
      r = t && !t.nodeType && t,
      a = r && !0 && e && !e.nodeType && e,
      i = a && a.exports === r,
      s = i ? n.Buffer : void 0,
      c = s ? s.allocUnsafe : void 0;
    function l(u, f) {
      if (f) return u.slice();
      var d = u.length,
        h = c ? c(d) : new u.constructor(d);
      return u.copy(h), h;
    }
    e.exports = l;
  })(Ve, Ve.exports);
  var Oi = y,
    Ii = g,
    Ni = Oi(Ii, 'DataView'),
    ki = Ni,
    Ai = y,
    Ei = g,
    Mi = Ai(Ei, 'Promise'),
    zi = Mi,
    ji = y,
    Bi = g,
    Vi = ji(Bi, 'Set'),
    Di = Vi,
    Ri = y,
    Fi = g,
    Li = Ri(Fi, 'WeakMap'),
    Ui = Li,
    Z = ki,
    Q = _e,
    ee = zi,
    te = Di,
    ne = Ui,
    De = E,
    w = he,
    Re = '[object Map]',
    Hi = '[object Object]',
    Fe = '[object Promise]',
    Le = '[object Set]',
    Ue = '[object WeakMap]',
    He = '[object DataView]',
    Gi = w(Z),
    Wi = w(Q),
    qi = w(ee),
    Ki = w(te),
    Xi = w(ne),
    C = De;
  ((Z && C(new Z(new ArrayBuffer(1))) != He) ||
    (Q && C(new Q()) != Re) ||
    (ee && C(ee.resolve()) != Fe) ||
    (te && C(new te()) != Le) ||
    (ne && C(new ne()) != Ue)) &&
    (C = function (e) {
      var t = De(e),
        n = t == Hi ? e.constructor : void 0,
        r = n ? w(n) : '';
      if (r)
        switch (r) {
          case Gi:
            return He;
          case Wi:
            return Re;
          case qi:
            return Fe;
          case Ki:
            return Le;
          case Xi:
            return Ue;
        }
      return t;
    });
  var Yi = g;
  Yi.Uint8Array;
  var Ge = T,
    We = Ge ? Ge.prototype : void 0;
  We && We.valueOf;
  var qe = O.exports;
  qe && qe.isMap;
  var Ke = O.exports;
  Ke && Ke.isSet;
  var Ji = { exports: {} };
  /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function n() {
        for (var r = [], a = 0; a < arguments.length; a++) {
          var i = arguments[a];
          if (!!i) {
            var s = typeof i;
            if (s === 'string' || s === 'number') r.push(i);
            else if (Array.isArray(i)) {
              if (i.length) {
                var c = n.apply(null, i);
                c && r.push(c);
              }
            } else if (s === 'object')
              if (i.toString === Object.prototype.toString)
                for (var l in i) t.call(i, l) && i[l] && r.push(l);
              else r.push(i.toString());
          }
        }
        return r.join(' ');
      }
      e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
  })(Ji);
  const V = '[vue3-aipage-widget]';
  function Zi(e) {
    let t = m.react;
    if (!e) return t;
    let n = e.toLowerCase().trim();
    switch (n) {
      case 'jquery':
      case 'jq':
        n = m.jquery;
        break;
      case 'vue2':
      case 'vue 2':
      case 'vue2.0':
      case 'vue 2.0':
        (n = m.vue2),
          console.error(
            'vue3-aipage-widget \u4E0D\u652F\u6301 vue2.0 \u6280\u672F\u6808\uFF0C\u8BF7\u6539\u7528aipage-widget\u652F\u6301\u3002',
          );
        break;
      case 'vue':
      case 'vue3':
      case 'vue 3':
      case 'vue3.0':
      case 'vue 3.0':
        n = m.vue3;
        break;
      default:
        n = m.react;
    }
    return n;
  }
  var m;
  (function (e) {
    (e.react = 'react'),
      (e.vue2 = 'vue2'),
      (e.vue3 = 'vue3'),
      (e.jquery = 'jquery');
  })(m || (m = {}));
  function Qi(e) {
    return Object.prototype.toString.call(e).slice(8, -1) === 'String';
  }
  function es(e) {
    return `-${e}`.replace(/(-[A-Za-z0-9])/g, (t) =>
      t.toUpperCase().replace('-', ''),
    );
  }
  function ts(e, t = !0) {
    const n =
      e && e.__super
        ? Object.create(e.__super, {
            __super: { value: e.__super, writable: !1, enumerable: !1 },
          })
        : Object.create(Object.prototype);
    return t && e && Object.keys(e).forEach((r) => (n[r] = e[r])), n;
  }
  function ns(e, t, n = !0) {
    const r = ts(e, n);
    return t && Object.keys(t).forEach((a) => (r[a] = t[a])), r;
  }
  function rs(e) {
    if (!e || (typeof e != 'function' && typeof e != 'object')) return;
    class t extends G.default.Component {
      constructor(a) {
        super(a);
        k(this, 'domRef');
        k(this, 'app');
        k(this, 'vm');
        k(this, 'isUnmount');
        (this.domRef = G.default.createRef()),
          (this.resolveAmisProps = this.resolveAmisProps.bind(this));
      }
      componentDidMount() {
        const { amisData: a, amisFunc: i } = this.resolveAmisProps(),
          { data: s, ...c } = (e = typeof e == 'function' ? new e() : e);
        (this.app = o.createApp({
          data: () => ns(a, typeof s == 'function' ? s() : s),
          ...c,
          props: c.props || {},
        })),
          Object.keys(i).forEach((l) => {
            this.app.$props[l] = i[l];
          }),
          (this.vm = this.app.mount(this.domRef.current)),
          this.domRef.current.setAttribute('data-component-id', this.props.id);
      }
      componentDidUpdate() {
        if (!this.isUnmount) {
          const { amisData: a } = this.resolveAmisProps();
          this.vm &&
            Object.keys(a).forEach((i) => {
              this.vm[i] = a[i];
            });
        }
      }
      componentWillUnmount() {
        (this.isUnmount = !0), this.app.unmount();
      }
      resolveAmisProps() {
        let a = {},
          i = {};
        return (
          Object.keys(this.props).forEach((s) => {
            const c = this.props[s];
            typeof c == 'function' ? (a[s] = c) : (i[s] = c);
          }),
          { amisData: i, amisFunc: a }
        );
      }
      render() {
        return G.default.createElement('div', { ref: this.domRef });
      }
    }
    return t;
  }
  function as(e, t) {
    if (!e) return;
    const n = { type: '', framework: m.react };
    if (
      (t && Qi(t) ? Object.assign(n, { type: t }) : Object.assign(n, t),
      n && !n.type)
    )
      console.error(
        `${V}\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7C7B\u578B\uFF08type\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
      );
    else {
      n.framework = Zi(n.framework);
      const a = { react: (i) => i, vue3: rs }[n.framework](e);
      if (window) {
        const i = os(n.type, a);
        i &&
          (console.info(
            `${V}\u89E6\u53D1\u6CE8\u518C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668(${n.type})\u4E8B\u4EF6:`,
            { type: n.type, component: a, framework: n.framework },
          ),
          window.postMessage(
            {
              type: 'aipage-editor-register-renderer-event',
              eventMsg: `${V}\u6CE8\u518C\u4E00\u4E2A\u81EA\u5B9A\u4E49aipage-editor\u6E32\u67D3\u5668`,
              customComponentId: i,
            },
            '*',
          ));
      }
    }
  }
  function os(e, t) {
    window &&
      !window.AIPageEditorCustomRenderers &&
      (window.AIPageEditorCustomRenderers = {});
    const n = es(e);
    if (window.AIPageEditorCustomRenderers[n])
      console.error(
        `${V}\u6CE8\u518C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\u5931\u8D25\uFF0C\u5DF2\u5B58\u5728\u540C\u540D\u6E32\u67D3\u5668\u7C7B\u578B(${e})\u3002`,
      );
    else return (window.AIPageEditorCustomRenderers[n] = t), n;
    return null;
  }
  (yt = window.matchMedia) == null ||
    yt.call(window, '(max-width: 768px)').matches;
  var Dc = '',
    Rc = '',
    Fc = '';
  const v = Object.assign,
    is = Object.prototype.hasOwnProperty,
    ss = (e, t) => is.call(e, t),
    cs = (e) => typeof e == 'function',
    re = (e) => typeof e == 'string',
    ls = Object.prototype.toString,
    us = (e) => ls.call(e),
    Xe = (e) => us(e) === '[object Object]',
    Ye = `
`,
    fs = /^([a-z-]+:)?\/\//i,
    ds = /^data:.*,.*/;
  function ps(e = '') {
    return ('' + e).replace(/[^\x00-\xff]/g, '**').length;
  }
  function Je(e) {
    return e.indexOf('/') === 0;
  }
  function ae(e) {
    return Je(e) ? e : '/' + e;
  }
  function hs(e) {
    return Je(e) ? e.slice(1) : e;
  }
  function gs(e) {
    return v({}, e.dataset, e.__uniDataset);
  }
  function ms(e) {
    return { passive: e };
  }
  function _s(e) {
    const { id: t, offsetTop: n, offsetLeft: r } = e;
    return { id: t, dataset: gs(e), offsetTop: n, offsetLeft: r };
  }
  /*!
   * vue-router v4.1.3
   * (c) 2022 Eduardo San Martin Morote
   * @license MIT
   */ var Ze;
  (function (e) {
    (e.pop = 'pop'), (e.push = 'push');
  })(Ze || (Ze = {}));
  var Qe;
  (function (e) {
    (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
  })(Qe || (Qe = {}));
  var et;
  (function (e) {
    (e[(e.aborted = 4)] = 'aborted'),
      (e[(e.cancelled = 8)] = 'cancelled'),
      (e[(e.duplicated = 16)] = 'duplicated');
  })(et || (et = {}));
  function ys(e) {
    return Symbol(e);
  }
  function vs() {
    const e = mt(),
      t = e.length;
    if (t) return e[t - 1];
  }
  function bs() {
    const e = vs();
    if (e) return e.$page.meta;
  }
  const Ss = ['navigationBar', 'pullToRefresh'];
  function $s() {
    return JSON.parse(JSON.stringify(__uniConfig.globalStyle || {}));
  }
  function ws(e, t) {
    const n = $s(),
      r = v({ id: t }, n, e);
    Ss.forEach((i) => {
      r[i] = v({}, n[i], e[i]);
    });
    const { navigationBar: a } = r;
    return a.titleText && a.titleImage && (a.titleText = ''), r;
  }
  function tt(e, t) {
    if (t.indexOf('/') === 0) return t;
    if (t.indexOf('./') === 0) return tt(e, t.slice(2));
    const n = t.split('/'),
      r = n.length;
    let a = 0;
    for (; a < r && n[a] === '..'; a++);
    n.splice(0, a), (t = n.join('/'));
    const i = e.length > 0 ? e.split('/') : [];
    return i.splice(i.length - a - 1, a + 1), ae(i.concat(n).join('/'));
  }
  function nt(e) {
    return /^-?\d+[ur]px$/i.test(e)
      ? e.replace(/(^-?\d+)[ur]px$/i, (t, n) => `${qs(parseFloat(n))}px`)
      : /^-?[\d\.]+$/.test(e)
      ? `${e}px`
      : e || '';
  }
  function Cs(e) {
    return e
      .replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)
      .replace('webkit', '-webkit');
  }
  function xs(e) {
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
      a = ['width', 'height', 'left', 'right', 'top', 'bottom'],
      i = e.animates,
      s = e.option,
      c = s.transition,
      l = {},
      u = [];
    return (
      i.forEach((f) => {
        let d = f.type,
          h = [...f.args];
        if (t.concat(n).includes(d))
          d.startsWith('rotate') || d.startsWith('skew')
            ? (h = h.map((H) => parseFloat(H) + 'deg'))
            : d.startsWith('translate') && (h = h.map(nt)),
            n.indexOf(d) >= 0 && (h.length = 1),
            u.push(`${d}(${h.join(',')})`);
        else if (r.concat(a).includes(h[0])) {
          d = h[0];
          const H = h[1];
          l[d] = a.includes(d) ? nt(H) : H;
        }
      }),
      (l.transform = l.webkitTransform = u.join(' ')),
      (l.transition = l.webkitTransition =
        Object.keys(l)
          .map(
            (f) => `${Cs(f)} ${c.duration}ms ${c.timingFunction} ${c.delay}ms`,
          )
          .join(',')),
      (l.transformOrigin = l.webkitTransformOrigin = s.transformOrigin),
      l
    );
  }
  function rt(e) {
    const t = e.animation;
    if (!t || !t.actions || !t.actions.length) return;
    let n = 0;
    const r = t.actions,
      a = t.actions.length;
    function i() {
      const s = r[n],
        c = s.option.transition,
        l = xs(s);
      Object.keys(l).forEach((u) => {
        e.$el.style[u] = l[u];
      }),
        (n += 1),
        n < a && setTimeout(i, c.duration + c.delay);
    }
    setTimeout(() => {
      i();
    }, 0);
  }
  var Ts = {
    props: ['animation'],
    watch: {
      animation: {
        deep: !0,
        handler() {
          rt(this);
        },
      },
    },
    mounted() {
      rt(this);
    },
  };
  const D = (e) => {
      e.__reserved = !0;
      const { props: t, mixins: n } = e;
      return (!t || !t.animation) && (n || (e.mixins = [])).push(Ts), R(e);
    },
    R = (e) => (
      (e.__reserved = !0), (e.compatConfig = { MODE: 3 }), o.defineComponent(e)
    ),
    Ps = {
      hoverClass: { type: String, default: 'none' },
      hoverStopPropagation: { type: Boolean, default: !1 },
      hoverStartTime: { type: [Number, String], default: 50 },
      hoverStayTime: { type: [Number, String], default: 400 },
    };
  function Os(e) {
    const t = o.ref(!1);
    let n = !1,
      r,
      a;
    function i() {
      requestAnimationFrame(() => {
        clearTimeout(a),
          (a = setTimeout(() => {
            t.value = !1;
          }, parseInt(e.hoverStayTime)));
      });
    }
    function s(u) {
      u._hoverPropagationStopped ||
        !e.hoverClass ||
        e.hoverClass === 'none' ||
        e.disabled ||
        u.touches.length > 1 ||
        (e.hoverStopPropagation && (u._hoverPropagationStopped = !0),
        (n = !0),
        (r = setTimeout(() => {
          (t.value = !0), n || i();
        }, parseInt(e.hoverStartTime))));
    }
    function c() {
      (n = !1), t.value && i();
    }
    function l() {
      (n = !1), (t.value = !1), clearTimeout(r);
    }
    return {
      hovering: t,
      binding: { onTouchstartPassive: s, onTouchend: c, onTouchcancel: l },
    };
  }
  function Is(e, t) {
    return (n, r, a) => {
      e.value && t(n, Ns(n, r, e.value, a || {}));
    };
  }
  function Ns(e, t, n, r) {
    const a = _s(n);
    return {
      type: r.type || e,
      timeStamp: t.timeStamp || 0,
      target: a,
      currentTarget: a,
      detail: r,
    };
  }
  const at = '/';
  function ot(e) {
    return ae(e).indexOf(at) === 0 ? ae(e) : at + e;
  }
  function it(e) {
    const { base: t, assets: n } = __uniConfig.router;
    if (
      (t === './' &&
        (e.indexOf('./static/') === 0 ||
          (n && e.indexOf('./' + n + '/') === 0)) &&
        (e = e.slice(1)),
      e.indexOf('/') === 0)
    )
      if (e.indexOf('//') === 0) e = 'https:' + e;
      else return ot(e.slice(1));
    if (fs.test(e) || ds.test(e) || e.indexOf('blob:') === 0) return e;
    const r = mt();
    return r.length ? ot(tt(r[r.length - 1].$page.route, e).slice(1)) : e;
  }
  const ks = navigator.userAgent,
    As = /iphone|ipad|ipod/i.test(ks);
  function Es() {
    return (
      /^Apple/.test(navigator.vendor) && typeof window.orientation == 'number'
    );
  }
  function Ms(e) {
    return e && Math.abs(window.orientation) === 90;
  }
  function zs(e, t) {
    return e
      ? Math[t ? 'max' : 'min'](screen.width, screen.height)
      : screen.width;
  }
  function js(e) {
    return (
      Math.min(window.innerWidth, document.documentElement.clientWidth, e) || e
    );
  }
  function Bs() {
    const e = Es(),
      t = js(zs(e, Ms(e)));
    return {
      platform: As ? 'ios' : 'other',
      pixelRatio: window.devicePixelRatio,
      windowWidth: t,
    };
  }
  function Vs(e, t) {
    const n = e[0];
    if (!t || (!Xe(t.formatArgs) && Xe(n))) return;
    const r = t.formatArgs,
      a = Object.keys(r);
    for (let i = 0; i < a.length; i++) {
      const s = a[i],
        c = r[s];
      if (cs(c)) {
        const l = c(e[0][s], n);
        if (re(l)) return l;
      } else ss(n, s) || (n[s] = c);
    }
  }
  function Ds(e, t, n, r) {
    if (r && r.beforeInvoke) {
      const i = r.beforeInvoke(t);
      if (re(i)) return i;
    }
    const a = Vs(t, r);
    if (a) return a;
  }
  function Rs(e, t, n, r) {
    return (...a) => {
      const i = Ds(e, a, n, r);
      if (i) throw new Error(i);
      return t.apply(null, a);
    };
  }
  function Fs(e, t, n, r) {
    return Rs(e, t, void 0, r);
  }
  const Ls = 'upx2px',
    Us = 1e-4,
    Hs = 750;
  let st = !1,
    oe = 0,
    ct = 0,
    lt = 960,
    ut = 375;
  function Gs() {
    const { platform: e, pixelRatio: t, windowWidth: n } = Bs();
    (oe = n), (ct = t), (st = e === 'ios');
  }
  function ft(e, t) {
    const n = Number(e);
    return isNaN(n) ? t : n;
  }
  function Ws() {
    const e = __uniConfig.globalStyle || {};
    (lt = ft(e.rpxCalcMaxDeviceWidth, 960)),
      (ut = ft(e.rpxCalcBaseDeviceWidth, 375));
  }
  const qs = Fs(Ls, (e, t) => {
    if ((oe === 0 && (Gs(), Ws()), (e = Number(e)), e === 0)) return 0;
    let n = t || oe;
    n = n <= lt ? n : ut;
    let r = (e / Hs) * n;
    return (
      r < 0 && (r = -r),
      (r = Math.floor(r + Us)),
      r === 0 && (ct === 1 || !st ? (r = 1) : (r = 0.5)),
      e < 0 ? -r : r
    );
  });
  [{ name: 'id', type: String, required: !0 }].concat({
    name: 'componentInstance',
    type: Object,
  });
  const I = {
    beforeInvoke() {
      const e = bs();
      if (e && !e.isTabBar) return 'not TabBar page';
    },
    formatArgs: {
      index(e) {
        if (!__uniConfig.tabBar.list[e]) return 'tabbar item not found';
      },
    },
  };
  I.beforeInvoke, I.formatArgs;
  const Ks = /^(linear|radial)-gradient\(.+?\);?$/;
  I.beforeInvoke, I.beforeInvoke, I.formatArgs;
  var Xs = D({
    name: 'ResizeSensor',
    props: { initial: { type: Boolean, default: !1 } },
    emits: ['resize'],
    setup(e, { emit: t }) {
      const n = o.ref(null),
        r = Js(n),
        a = Ys(n, t, r);
      return (
        Zs(n, e, a, r),
        () =>
          o.createVNode(
            'uni-resize-sensor',
            { ref: n, onAnimationstartOnce: a },
            [
              o.createVNode(
                'div',
                { onScroll: a },
                [o.createVNode('div', null, null)],
                40,
                ['onScroll'],
              ),
              o.createVNode(
                'div',
                { onScroll: a },
                [o.createVNode('div', null, null)],
                40,
                ['onScroll'],
              ),
            ],
            40,
            ['onAnimationstartOnce'],
          )
      );
    },
  });
  function Ys(e, t, n) {
    const r = o.reactive({ width: -1, height: -1 });
    return (
      o.watch(
        () => v({}, r),
        (a) => t('resize', a),
      ),
      () => {
        const a = e.value;
        (r.width = a.offsetWidth), (r.height = a.offsetHeight), n();
      }
    );
  }
  function Js(e) {
    return () => {
      const { firstElementChild: t, lastElementChild: n } = e.value;
      (t.scrollLeft = 1e5),
        (t.scrollTop = 1e5),
        (n.scrollLeft = 1e5),
        (n.scrollTop = 1e5);
    };
  }
  function Zs(e, t, n, r) {
    o.onActivated(r),
      o.onMounted(() => {
        t.initial && o.nextTick(n);
        const a = e.value;
        a.offsetParent !== a.parentElement &&
          (a.parentElement.style.position = 'relative'),
          'AnimationEvent' in window || r();
      });
  }
  const Qs = {
      src: { type: String, default: '' },
      mode: { type: String, default: 'scaleToFill' },
      lazyLoad: { type: [Boolean, String], default: !1 },
      draggable: { type: Boolean, default: !1 },
    },
    F = {
      widthFix: ['offsetWidth', 'height', (e, t) => e / t],
      heightFix: ['offsetHeight', 'width', (e, t) => e * t],
    },
    ec = {
      aspectFit: ['center center', 'contain'],
      aspectFill: ['center center', 'cover'],
      widthFix: [, '100% 100%'],
      heightFix: [, '100% 100%'],
      top: ['center top'],
      bottom: ['center bottom'],
      center: ['center center'],
      left: ['left center'],
      right: ['right center'],
      'top left': ['left top'],
      'top right': ['right top'],
      'bottom left': ['left bottom'],
      'bottom right': ['right bottom'],
    };
  var tc = D({
    name: 'Image',
    props: Qs,
    setup(e, { emit: t }) {
      const n = o.ref(null),
        r = nc(n, e),
        a = Is(n, t),
        { fixSize: i } = ic(n, e, r);
      return (
        rc(r, i, a),
        () => {
          const { mode: s } = e,
            { imgSrc: c, modeStyle: l, src: u } = r;
          let f;
          return (
            (f = c
              ? o.createVNode(
                  'img',
                  { src: c, draggable: e.draggable },
                  null,
                  8,
                  ['src', 'draggable'],
                )
              : o.createVNode('img', null, null)),
            o.createVNode(
              'uni-image',
              { ref: n },
              [
                o.createVNode('div', { style: l }, null, 4),
                f,
                F[s]
                  ? o.createVNode(Xs, { onResize: i }, null, 8, ['onResize'])
                  : o.createVNode('span', null, null),
              ],
              512,
            )
          );
        }
      );
    },
  });
  function nc(e, t) {
    const n = o.ref(''),
      r = o.computed(() => {
        let i = 'auto',
          s = '';
        const c = ec[t.mode];
        return (
          c
            ? (c[0] && (s = c[0]), c[1] && (i = c[1]))
            : ((s = '0% 0%'), (i = '100% 100%')),
          `background-image:${
            n.value ? 'url("' + n.value + '")' : 'none'
          };background-position:${s};background-size:${i};`
        );
      }),
      a = o.reactive({
        rootEl: e,
        src: o.computed(() => (t.src ? it(t.src) : '')),
        origWidth: 0,
        origHeight: 0,
        origStyle: { width: '', height: '' },
        modeStyle: r,
        imgSrc: n,
      });
    return (
      o.onMounted(() => {
        const s = e.value.style;
        (a.origWidth = Number(s.width) || 0),
          (a.origHeight = Number(s.height) || 0);
      }),
      a
    );
  }
  function rc(e, t, n) {
    let r;
    const a = (c = 0, l = 0, u = '') => {
        (e.origWidth = c), (e.origHeight = l), (e.imgSrc = u);
      },
      i = (c) => {
        if (!c) {
          s(), a();
          return;
        }
        (r = r || new Image()),
          (r.onload = (l) => {
            const { width: u, height: f } = r;
            a(u, f, c), t(), s(), n('load', l, { width: u, height: f });
          }),
          (r.onerror = (l) => {
            a(), s(), n('error', l, { errMsg: `GET ${e.src} 404 (Not Found)` });
          }),
          (r.src = c);
      },
      s = () => {
        r && ((r.onload = null), (r.onerror = null), (r = null));
      };
    o.watch(
      () => e.src,
      (c) => i(c),
    ),
      o.onMounted(() => i(e.src)),
      o.onBeforeUnmount(() => s());
  }
  const ac = navigator.vendor === 'Google Inc.';
  function oc(e) {
    return ac && e > 10 && (e = Math.round(e / 2) * 2), e;
  }
  function ic(e, t, n) {
    const r = () => {
        const { mode: i } = t,
          s = F[i];
        if (!s) return;
        const { origWidth: c, origHeight: l } = n,
          u = c && l ? c / l : 0;
        if (!u) return;
        const f = e.value,
          d = f[s[0]];
        d && (f.style[s[1]] = oc(s[2](d, u)) + 'px');
      },
      a = () => {
        const { style: i } = e.value,
          {
            origStyle: { width: s, height: c },
          } = n;
        (i.width = s), (i.height = c);
      };
    return (
      o.watch(
        () => t.mode,
        (i, s) => {
          F[s] && a(), F[i] && r();
        },
      ),
      { fixSize: r, resetSize: a }
    );
  }
  const sc = ms(!0),
    dt = [];
  let ie = 0,
    pt;
  const ht = (e) => dt.forEach((t) => (t.userAction = e));
  function cc(e = { userAction: !1 }) {
    pt ||
      (['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup'].forEach(
        (n) => {
          document.addEventListener(
            n,
            function () {
              !ie && ht(!0),
                ie++,
                setTimeout(() => {
                  !--ie && ht(!1);
                }, 0);
            },
            sc,
          );
        },
      ),
      (pt = !0)),
      dt.push(e);
  }
  const N = { ensp: '\u2002', emsp: '\u2003', nbsp: '\xA0' };
  function lc(e, t) {
    return e
      .replace(/\\n/g, Ye)
      .split(Ye)
      .map((n) => uc(n, t));
  }
  function uc(e, { space: t, decode: n }) {
    return !e || (t && N[t] && (e = e.replace(/ /g, N[t])), !n)
      ? e
      : e
          .replace(/&nbsp;/g, N.nbsp)
          .replace(/&ensp;/g, N.ensp)
          .replace(/&emsp;/g, N.emsp)
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'");
  }
  var fc = D({
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
                if (r.shapeFlag & 8 && r.type !== o.Comment) {
                  const a = lc(r.children, {
                      space: e.space,
                      decode: e.decode,
                    }),
                    i = a.length - 1;
                  a.forEach((s, c) => {
                    (c === 0 && !s) || n.push(o.createTextVNode(s)),
                      c !== i && n.push(o.createVNode('br'));
                  });
                } else n.push(r);
              }),
            o.createVNode(
              'uni-text',
              { selectable: e.selectable ? !0 : null },
              [o.createVNode('span', null, n)],
              8,
              ['selectable'],
            )
          );
        };
      },
    }),
    L = D({
      name: 'View',
      props: v({}, Ps),
      setup(e, { slots: t }) {
        const { hovering: n, binding: r } = Os(e);
        return () => {
          const a = e.hoverClass;
          return a && a !== 'none'
            ? o.createVNode(
                'uni-view',
                o.mergeProps({ class: n.value ? a : '' }, r),
                [t.default && t.default()],
                16,
              )
            : o.createVNode('uni-view', null, [t.default && t.default()]);
        };
      },
    });
  const gt = ys('upm');
  function dc() {
    return o.inject(gt);
  }
  function pc(e) {
    const t = hc(e);
    return o.provide(gt, t), t;
  }
  function hc(e) {
    return o.reactive(
      gc(JSON.parse(JSON.stringify(ws(__uniRoutes[0].meta, e)))),
    );
  }
  function gc(e) {
    {
      const { navigationBar: t } = e,
        { titleSize: n, titleColor: r, backgroundColor: a } = t;
      (t.titleText = t.titleText || ''),
        (t.type = t.type || 'default'),
        (t.titleSize = n || '16px'),
        (t.titleColor = r || '#ffffff'),
        (t.backgroundColor = a || '#F7F7F7');
    }
    return e;
  }
  function mc() {
    return (history.state && history.state.__id__) || 1;
  }
  const _c = new Map();
  function mt() {
    const e = [],
      t = _c.values();
    for (const n of t) n.$.__isTabBar ? n.$.__isActive && e.push(n) : e.push(n);
    return e;
  }
  cc();
  function yc(e) {
    document.title = e;
  }
  function vc(e) {
    function t() {
      yc(e.navigationBar.titleText);
    }
    o.watchEffect(t), o.onActivated(t);
  }
  var bc = R({
    name: 'PageHead',
    setup() {
      const e = o.ref(null),
        n = dc().navigationBar,
        { clazz: r, style: a } = wc(n);
      return () => {
        const s = [],
          c = [],
          l = n.type || 'default',
          u =
            l !== 'transparent' &&
            l !== 'float' &&
            o.createVNode(
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
        return o.createVNode(
          'uni-page-head',
          { 'uni-page-head-type': l },
          [
            o.createVNode(
              'div',
              { ref: e, class: r.value, style: a.value },
              [
                o.createVNode('div', { class: 'uni-page-head-hd' }, [
                  null,
                  ...s,
                ]),
                Sc(n),
                o.createVNode('div', { class: 'uni-page-head-ft' }, [...c]),
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
  function Sc(e, t) {
    return $c(e);
  }
  function $c({
    type: e,
    loading: t,
    titleSize: n,
    titleText: r,
    titleImage: a,
  }) {
    return o.createVNode('div', { class: 'uni-page-head-bd' }, [
      o.createVNode(
        'div',
        {
          style: { fontSize: n, opacity: e === 'transparent' ? 0 : 1 },
          class: 'uni-page-head__title',
        },
        [
          t
            ? o.createVNode('i', { class: 'uni-loading' }, null)
            : a
            ? o.createVNode(
                'img',
                { src: a, class: 'uni-page-head__title_image' },
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
  function wc(e) {
    const t = o.computed(() => {
        const { type: r, titlePenetrate: a, shadowColorType: i } = e,
          s = {
            'uni-page-head': !0,
            'uni-page-head-transparent': r === 'transparent',
            'uni-page-head-titlePenetrate': a === 'YES',
            'uni-page-head-shadow': !!i,
          };
        return i && (s[`uni-page-head-shadow-${i}`] = !0), s;
      }),
      n = o.computed(() => ({
        backgroundColor: e.backgroundColor,
        color: e.titleColor,
        transitionDuration: e.duration,
        transitionTimingFunction: e.timingFunc,
      }));
    return { clazz: t, style: n };
  }
  var Cc = R({
    name: 'PageBody',
    setup(e, t) {
      return () =>
        o.createVNode(o.Fragment, null, [
          !1,
          o.createVNode(
            'uni-page-wrapper',
            null,
            [
              o.createVNode('uni-page-body', null, [
                o.renderSlot(t.slots, 'default'),
              ]),
            ],
            16,
          ),
        ]);
    },
  });
  R({
    name: 'Page',
    setup(e, t) {
      const n = pc(mc()),
        r = n.navigationBar;
      return (
        vc(n),
        () =>
          o.createVNode(
            'uni-page',
            { 'data-page': n.route },
            r.style !== 'custom' ? [o.createVNode(bc), _t(t)] : [_t(t)],
          )
      );
    },
  });
  function _t(e) {
    return (
      o.openBlock(),
      o.createBlock(
        Cc,
        { key: 0 },
        { default: o.withCtx(() => [o.renderSlot(e.slots, 'page')]), _: 3 },
      )
    );
  }
  var Uc = '',
    Hc = '',
    Gc = '',
    U = (e, t) => {
      const n = e.__vccOpts || e;
      for (const [r, a] of t) n[r] = a;
      return n;
    };
  const xc = {
    name: 'u-icon',
    emits: ['click', 'touchstart'],
    props: {
      name: { type: String, default: '' },
      color: { type: String, default: '' },
      size: { type: [Number, String], default: 'inherit' },
      bold: { type: Boolean, default: !1 },
      index: { type: [Number, String], default: '' },
      hoverClass: { type: String, default: '' },
      customPrefix: { type: String, default: 'uicon' },
      label: { type: [String, Number], default: '' },
      labelPos: { type: String, default: 'right' },
      labelSize: { type: [String, Number], default: '28' },
      labelColor: { type: String, default: '#606266' },
      marginLeft: { type: [String, Number], default: '6' },
      marginTop: { type: [String, Number], default: '6' },
      marginRight: { type: [String, Number], default: '6' },
      marginBottom: { type: [String, Number], default: '6' },
      imgMode: { type: String, default: 'widthFix' },
      customStyle: {
        type: Object,
        default() {
          return {};
        },
      },
      width: { type: [String, Number], default: '' },
      height: { type: [String, Number], default: '' },
      top: { type: [String, Number], default: 0 },
      showDecimalIcon: { type: Boolean, default: !1 },
      inactiveColor: { type: String, default: '#ececec' },
      percent: { type: [Number, String], default: '50' },
    },
    computed: {
      customClass() {
        let e = [],
          { customPrefix: t, name: n } = this,
          r = n.indexOf('-icon-');
        return (
          r > -1
            ? ((t = n.substring(0, r + 5)), e.push(n))
            : e.push(`${t}-${n}`),
          t === 'uicon' ? e.push('u-iconfont') : e.push(t),
          this.showDecimalIcon &&
          this.inactiveColor &&
          this.$u.config.type.includes(this.inactiveColor)
            ? e.push('u-icon__icon--' + this.inactiveColor)
            : this.color &&
              this.$u.config.type.includes(this.color) &&
              e.push('u-icon__icon--' + this.color),
          e
        );
      },
      iconStyle() {
        let e = {};
        return (
          (e = {
            fontSize:
              this.size == 'inherit' ? 'inherit' : this.$u.addUnit(this.size),
            fontWeight: this.bold ? 'bold' : 'normal',
            top: this.$u.addUnit(this.top),
          }),
          this.showDecimalIcon &&
          this.inactiveColor &&
          !this.$u.config.type.includes(this.inactiveColor)
            ? (e.color = this.inactiveColor)
            : this.color &&
              !this.$u.config.type.includes(this.color) &&
              (e.color = this.color),
          e
        );
      },
      isImg() {
        return this.name.indexOf('/') !== -1;
      },
      imgStyle() {
        let e = {};
        return (
          (e.width = this.width
            ? this.$u.addUnit(this.width)
            : this.$u.addUnit(this.size)),
          (e.height = this.height
            ? this.$u.addUnit(this.height)
            : this.$u.addUnit(this.size)),
          e
        );
      },
      decimalIconStyle() {
        let e = {};
        return (
          (e = {
            fontSize:
              this.size == 'inherit' ? 'inherit' : this.$u.addUnit(this.size),
            fontWeight: this.bold ? 'bold' : 'normal',
            top: this.$u.addUnit(this.top),
            width: this.percent + '%',
          }),
          this.color &&
            !this.$u.config.type.includes(this.color) &&
            (e.color = this.color),
          e
        );
      },
      decimalIconClass() {
        let e = [];
        return (
          e.push(this.customPrefix + '-' + this.name),
          this.customPrefix == 'uicon'
            ? e.push('u-iconfont')
            : e.push(this.customPrefix),
          this.color && this.$u.config.type.includes(this.color)
            ? e.push('u-icon__icon--' + this.color)
            : e.push('u-icon__icon--primary'),
          e
        );
      },
    },
    methods: {
      click() {
        this.$emit('click', this.index);
      },
      touchstart() {
        this.$emit('touchstart', this.index);
      },
    },
  };
  function Tc(e, t, n, r, a, i) {
    const s = tc,
      c = fc,
      l = L;
    return (
      o.openBlock(),
      o.createBlock(
        l,
        {
          style: o.normalizeStyle([n.customStyle]),
          class: o.normalizeClass(['u-icon', ['u-icon--' + n.labelPos]]),
          onClick: i.click,
        },
        {
          default: o.withCtx(() => [
            i.isImg
              ? (o.openBlock(),
                o.createBlock(
                  s,
                  {
                    key: 0,
                    class: 'u-icon__img',
                    src: n.name,
                    mode: n.imgMode,
                    style: o.normalizeStyle([i.imgStyle]),
                  },
                  null,
                  8,
                  ['src', 'mode', 'style'],
                ))
              : (o.openBlock(),
                o.createBlock(
                  l,
                  {
                    key: 1,
                    class: o.normalizeClass(['u-icon__icon', i.customClass]),
                    style: o.normalizeStyle([i.iconStyle]),
                    'hover-class': n.hoverClass,
                    onTouchstart: i.touchstart,
                  },
                  {
                    default: o.withCtx(() => [
                      n.showDecimalIcon
                        ? (o.openBlock(),
                          o.createBlock(
                            c,
                            {
                              key: 0,
                              style: o.normalizeStyle([i.decimalIconStyle]),
                              class: o.normalizeClass([
                                i.decimalIconClass,
                                'u-icon__decimal',
                              ]),
                              'hover-class': n.hoverClass,
                            },
                            null,
                            8,
                            ['style', 'class', 'hover-class'],
                          ))
                        : o.createCommentVNode('v-if', !0),
                    ]),
                    _: 1,
                  },
                  8,
                  ['class', 'style', 'hover-class', 'onTouchstart'],
                )),
            o.createCommentVNode(
              ' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A\uFF0C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0D\u4F20\u503C\u9ED8\u8BA4\u4E3Anull\uFF0C\u6545\u9700\u8981\u589E\u52A0null\u7684\u5224\u65AD ',
            ),
            n.label !== '' && n.label !== null
              ? (o.openBlock(),
                o.createBlock(
                  c,
                  {
                    key: 2,
                    class: 'u-icon__label',
                    style: o.normalizeStyle({
                      color: n.labelColor,
                      fontSize: e.$u.addUnit(n.labelSize),
                      marginLeft:
                        n.labelPos == 'right' ? e.$u.addUnit(n.marginLeft) : 0,
                      marginTop:
                        n.labelPos == 'bottom' ? e.$u.addUnit(n.marginTop) : 0,
                      marginRight:
                        n.labelPos == 'left' ? e.$u.addUnit(n.marginRight) : 0,
                      marginBottom:
                        n.labelPos == 'top' ? e.$u.addUnit(n.marginBottom) : 0,
                    }),
                  },
                  {
                    default: o.withCtx(() => [
                      o.createTextVNode(o.toDisplayString(n.label), 1),
                    ]),
                    _: 1,
                  },
                  8,
                  ['style'],
                ))
              : o.createCommentVNode('v-if', !0),
          ]),
          _: 1,
        },
        8,
        ['style', 'onClick', 'class'],
      )
    );
  }
  var Pc = U(xc, [
    ['render', Tc],
    ['__scopeId', 'data-v-b2a223fe'],
  ]);
  function se(e, t) {
    return re(e) ? t : e;
  }
  var Wc = '';
  const Oc = {
    name: 'u-time-line-item',
    props: {
      bgColor: { type: String, default: '#ffffff' },
      nodeTop: { type: [String, Number], default: '' },
    },
    data() {
      return {};
    },
    computed: {
      nodeStyle() {
        let e = { backgroundColor: this.bgColor };
        return this.nodeTop != '' && (e.top = this.nodeTop + 'rpx'), e;
      },
    },
  };
  function Ic(e, t, n, r, a, i) {
    const s = L;
    return (
      o.openBlock(),
      o.createBlock(
        s,
        { class: 'u-time-axis-item' },
        {
          default: o.withCtx(() => [
            o.renderSlot(e.$slots, 'content', {}, void 0, !0),
            o.createVNode(
              s,
              {
                class: 'u-time-axis-node',
                style: o.normalizeStyle([i.nodeStyle]),
              },
              {
                default: o.withCtx(() => [
                  o.renderSlot(
                    e.$slots,
                    'node',
                    {},
                    () => [o.createVNode(s, { class: 'u-dot' })],
                    !0,
                  ),
                ]),
                _: 3,
              },
              8,
              ['style'],
            ),
          ]),
          _: 3,
        },
      )
    );
  }
  var Nc = U(Oc, [
      ['render', Ic],
      ['__scopeId', 'data-v-20ad8016'],
    ]),
    qc = '';
  const kc = {
    name: 'u-time-line',
    data() {
      return {};
    },
  };
  function Ac(e, t, n, r, a, i) {
    const s = L;
    return (
      o.openBlock(),
      o.createBlock(
        s,
        { class: 'u-time-axis' },
        {
          default: o.withCtx(() => [
            o.renderSlot(e.$slots, 'default', {}, void 0, !0),
          ]),
          _: 3,
        },
      )
    );
  }
  var Ec = U(kc, [
      ['render', Ac],
      ['__scopeId', 'data-v-f8289406'],
    ]),
    Kc = '';
  const Mc = {
    props: ['componentProperties', 'id'],
    data() {
      return {
        show: !0,
        mode: 'date',
        timeLineDemo: [
          {
            status: '\u8FD0\u8F93\u4E2D',
            desc: '\u3010\u6DF1\u5733\u5E02\u3011\u65E5\u7167\u9999\u7089\u751F\u7D2B\u70DF\uFF0C\u9065\u770B\u7011\u5E03\u6302\u524D\u5DDD\uFF0C\u98DE\u6D41\u76F4\u4E0B\u4E09\u5343\u5C3A\uFF0C\u7591\u662F\u94F6\u6CB3\u843D\u4E5D\u5929\u3002',
            time: '2019-05-10 12:12',
          },
          {
            status: '\u8FD0\u8F93\u4E2D',
            desc: '\u3010\u6DF1\u5733\u5E02\u3011\u65E5\u7167\u9999\u7089\u751F\u7D2B\u70DF\uFF0C\u9065\u770B\u7011\u5E03\u6302\u524D\u5DDD\uFF0C\u98DE\u6D41\u76F4\u4E0B\u4E09\u5343\u5C3A\uFF0C\u7591\u662F\u94F6\u6CB3\u843D\u4E5D\u5929\u3002',
            time: '2019-05-08 12:12',
          },
          {
            status: '\u5F85\u53D6\u4EF6',
            desc: '[\u81EA\u63D0\u67DC]\u60A8\u7684\u5FEB\u4EF6\u5DF2\u653E\u5728\u697C\u4E0B\u4FA7\u95E8\uFF0C\u76F4\u8D70\u524D\u65B953.6\u7C73\uFF0C\u5DE6\u62D0\u7EA610\u6B65\uFF0C\u518D\u53F3\u62D0\u76F4\u8D70\uFF0C\u89C1\u4E00\u7EA2\u706F\u7B3C\u505C\u4E0B\uFF0C\u53E9\u95E8\u4E09\u4E0B\uFF0C\u558A\u201C\u829D\u9EBB\u5F00\u95E8\u201D\u5373\u53EF\u3002',
            time: '2019-05-12 12:12',
          },
        ],
      };
    },
    computed: {
      timeLine() {
        return (
          (this.componentProperties &&
            this.componentProperties.data &&
            this.componentProperties.data.timeLine) ||
          this.timeLineDemo
        );
      },
      timeLineReverse() {
        return this.timeLine ? this.timeLine.reverse() : [];
      },
    },
  };
  function zc(e, t, n, r, a, i) {
    const s = se(o.resolveDynamicComponent('u-icon'), Pc),
      c = L,
      l = se(o.resolveDynamicComponent('u-time-line-item'), Nc),
      u = se(o.resolveDynamicComponent('u-time-line'), Ec);
    return (
      o.openBlock(),
      o.createBlock(
        u,
        { class: 'time-line' },
        {
          default: o.withCtx(() => [
            (o.openBlock(!0),
            o.createElementBlock(
              o.Fragment,
              null,
              o.renderList(
                i.timeLineReverse,
                (f, d) => (
                  o.openBlock(),
                  o.createBlock(
                    l,
                    { key: d },
                    o.createSlots(
                      {
                        content: o.withCtx(() => [
                          o.createVNode(
                            c,
                            null,
                            {
                              default: o.withCtx(() => [
                                o.createVNode(
                                  c,
                                  { class: 'u-order-title' },
                                  {
                                    default: o.withCtx(() => [
                                      o.createTextVNode(
                                        o.toDisplayString(f.status),
                                        1,
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ),
                                o.createVNode(
                                  c,
                                  { class: 'u-order-desc' },
                                  {
                                    default: o.withCtx(() => [
                                      o.createTextVNode(
                                        o.toDisplayString(f.desc),
                                        1,
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ),
                                o.createVNode(
                                  c,
                                  { class: 'u-order-time' },
                                  {
                                    default: o.withCtx(() => [
                                      o.createTextVNode(
                                        o.toDisplayString(f.time),
                                        1,
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ),
                              ]),
                              _: 2,
                            },
                            1024,
                          ),
                        ]),
                        _: 2,
                      },
                      [
                        d === 0
                          ? {
                              name: 'node',
                              fn: o.withCtx(() => [
                                o.createVNode(
                                  c,
                                  {
                                    class: 'u-node',
                                    style: { background: '#19be6b' },
                                  },
                                  {
                                    default: o.withCtx(() => [
                                      o.createCommentVNode(
                                        ' \u6B64\u5904\u4E3AuView\u7684icon\u7EC4\u4EF6 ',
                                      ),
                                      o.createVNode(s, {
                                        name: 'pushpin-fill',
                                        color: '#fff',
                                        size: 24,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                            }
                          : void 0,
                      ],
                    ),
                    1024,
                  )
                ),
              ),
              128,
            )),
          ]),
          _: 1,
        },
      )
    );
  }
  var jc = U(Mc, [
    ['render', zc],
    ['__scopeId', 'data-v-cbc7eb8c'],
  ]);
  as(jc, { type: 'uni-time-line', framework: 'vue3' });
});

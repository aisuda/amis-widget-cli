var Oi = Object.defineProperty;
var xi = (l, c, d) =>
  c in l
    ? Oi(l, c, { enumerable: !0, configurable: !0, writable: !0, value: d })
    : (l[c] = d);
var T = (l, c, d) => (xi(l, typeof c != 'symbol' ? c + '' : c, d), d);
(function (l, c) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? c(require('react'), require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['react', 'vue'], c)
    : ((l = typeof globalThis != 'undefined' ? globalThis : l || self),
      c(l.react, l.vue));
})(this, function (l, c) {
  var Me;
  ('use strict');
  function d(e) {
    return e && typeof e == 'object' && 'default' in e ? e : { default: e };
  }
  var N = d(l),
    O =
      typeof globalThis != 'undefined'
        ? globalThis
        : typeof window != 'undefined'
        ? window
        : typeof global != 'undefined'
        ? global
        : typeof self != 'undefined'
        ? self
        : {},
    Fe = Array.isArray,
    b = Fe,
    Re = typeof O == 'object' && O && O.Object === Object && O,
    L = Re,
    Ge = L,
    Ve = typeof self == 'object' && self && self.Object === Object && self,
    He = Ge || Ve || Function('return this')(),
    p = He,
    ze = p,
    ke = ze.Symbol,
    w = ke,
    K = w,
    W = Object.prototype,
    Ue = W.hasOwnProperty,
    Be = W.toString,
    S = K ? K.toStringTag : void 0;
  function qe(e) {
    var t = Ue.call(e, S),
      r = e[S];
    try {
      e[S] = void 0;
      var a = !0;
    } catch {}
    var n = Be.call(e);
    return a && (t ? (e[S] = r) : delete e[S]), n;
  }
  var Le = qe,
    Ke = Object.prototype,
    We = Ke.toString;
  function Je(e) {
    return We.call(e);
  }
  var Xe = Je,
    J = w,
    Ze = Le,
    Ye = Xe,
    Qe = '[object Null]',
    et = '[object Undefined]',
    X = J ? J.toStringTag : void 0;
  function tt(e) {
    return e == null
      ? e === void 0
        ? et
        : Qe
      : X && X in Object(e)
      ? Ze(e)
      : Ye(e);
  }
  var x = tt;
  function rt(e) {
    return e != null && typeof e == 'object';
  }
  var D = rt,
    at = x,
    nt = D,
    ot = '[object Symbol]';
  function it(e) {
    return typeof e == 'symbol' || (nt(e) && at(e) == ot);
  }
  var F = it,
    st = b,
    ct = F,
    ut = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    lt = /^\w*$/;
  function ft(e, t) {
    if (st(e)) return !1;
    var r = typeof e;
    return r == 'number' ||
      r == 'symbol' ||
      r == 'boolean' ||
      e == null ||
      ct(e)
      ? !0
      : lt.test(e) || !ut.test(e) || (t != null && e in Object(t));
  }
  var pt = ft;
  function vt(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var R = vt,
    dt = x,
    ht = R,
    _t = '[object AsyncFunction]',
    mt = '[object Function]',
    gt = '[object GeneratorFunction]',
    $t = '[object Proxy]';
  function yt(e) {
    if (!ht(e)) return !1;
    var t = dt(e);
    return t == mt || t == gt || t == _t || t == $t;
  }
  var bt = yt,
    wt = p,
    St = wt['__core-js_shared__'],
    Ct = St,
    G = Ct,
    Z = (function () {
      var e = /[^.]+$/.exec((G && G.keys && G.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function Pt(e) {
    return !!Z && Z in e;
  }
  var Tt = Pt,
    Ot = Function.prototype,
    xt = Ot.toString;
  function It(e) {
    if (e != null) {
      try {
        return xt.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var Y = It,
    jt = bt,
    At = Tt,
    Et = R,
    Mt = Y,
    Nt = /[\\^$.*+?()[\]{}|]/g,
    Dt = /^\[object .+?Constructor\]$/,
    Ft = Function.prototype,
    Rt = Object.prototype,
    Gt = Ft.toString,
    Vt = Rt.hasOwnProperty,
    Ht = RegExp(
      '^' +
        Gt.call(Vt)
          .replace(Nt, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function zt(e) {
    if (!Et(e) || At(e)) return !1;
    var t = jt(e) ? Ht : Dt;
    return t.test(Mt(e));
  }
  var kt = zt;
  function Ut(e, t) {
    return e == null ? void 0 : e[t];
  }
  var Bt = Ut,
    qt = kt,
    Lt = Bt;
  function Kt(e, t) {
    var r = Lt(e, t);
    return qt(r) ? r : void 0;
  }
  var h = Kt,
    Wt = h,
    Jt = Wt(Object, 'create'),
    I = Jt,
    Q = I;
  function Xt() {
    (this.__data__ = Q ? Q(null) : {}), (this.size = 0);
  }
  var Zt = Xt;
  function Yt(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var Qt = Yt,
    er = I,
    tr = '__lodash_hash_undefined__',
    rr = Object.prototype,
    ar = rr.hasOwnProperty;
  function nr(e) {
    var t = this.__data__;
    if (er) {
      var r = t[e];
      return r === tr ? void 0 : r;
    }
    return ar.call(t, e) ? t[e] : void 0;
  }
  var or = nr,
    ir = I,
    sr = Object.prototype,
    cr = sr.hasOwnProperty;
  function ur(e) {
    var t = this.__data__;
    return ir ? t[e] !== void 0 : cr.call(t, e);
  }
  var lr = ur,
    fr = I,
    pr = '__lodash_hash_undefined__';
  function vr(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = fr && t === void 0 ? pr : t),
      this
    );
  }
  var dr = vr,
    hr = Zt,
    _r = Qt,
    mr = or,
    gr = lr,
    $r = dr;
  function _(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (_.prototype.clear = hr),
    (_.prototype.delete = _r),
    (_.prototype.get = mr),
    (_.prototype.has = gr),
    (_.prototype.set = $r);
  var yr = _;
  function br() {
    (this.__data__ = []), (this.size = 0);
  }
  var wr = br;
  function Sr(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var ee = Sr,
    Cr = ee;
  function Pr(e, t) {
    for (var r = e.length; r--; ) if (Cr(e[r][0], t)) return r;
    return -1;
  }
  var j = Pr,
    Tr = j,
    Or = Array.prototype,
    xr = Or.splice;
  function Ir(e) {
    var t = this.__data__,
      r = Tr(t, e);
    if (r < 0) return !1;
    var a = t.length - 1;
    return r == a ? t.pop() : xr.call(t, r, 1), --this.size, !0;
  }
  var jr = Ir,
    Ar = j;
  function Er(e) {
    var t = this.__data__,
      r = Ar(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var Mr = Er,
    Nr = j;
  function Dr(e) {
    return Nr(this.__data__, e) > -1;
  }
  var Fr = Dr,
    Rr = j;
  function Gr(e, t) {
    var r = this.__data__,
      a = Rr(r, e);
    return a < 0 ? (++this.size, r.push([e, t])) : (r[a][1] = t), this;
  }
  var Vr = Gr,
    Hr = wr,
    zr = jr,
    kr = Mr,
    Ur = Fr,
    Br = Vr;
  function m(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (m.prototype.clear = Hr),
    (m.prototype.delete = zr),
    (m.prototype.get = kr),
    (m.prototype.has = Ur),
    (m.prototype.set = Br);
  var qr = m,
    Lr = h,
    Kr = p,
    Wr = Lr(Kr, 'Map'),
    te = Wr,
    re = yr,
    Jr = qr,
    Xr = te;
  function Zr() {
    (this.size = 0),
      (this.__data__ = {
        hash: new re(),
        map: new (Xr || Jr)(),
        string: new re(),
      });
  }
  var Yr = Zr;
  function Qr(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  var ea = Qr,
    ta = ea;
  function ra(e, t) {
    var r = e.__data__;
    return ta(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
  }
  var A = ra,
    aa = A;
  function na(e) {
    var t = aa(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var oa = na,
    ia = A;
  function sa(e) {
    return ia(this, e).get(e);
  }
  var ca = sa,
    ua = A;
  function la(e) {
    return ua(this, e).has(e);
  }
  var fa = la,
    pa = A;
  function va(e, t) {
    var r = pa(this, e),
      a = r.size;
    return r.set(e, t), (this.size += r.size == a ? 0 : 1), this;
  }
  var da = va,
    ha = Yr,
    _a = oa,
    ma = ca,
    ga = fa,
    $a = da;
  function g(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (g.prototype.clear = ha),
    (g.prototype.delete = _a),
    (g.prototype.get = ma),
    (g.prototype.has = ga),
    (g.prototype.set = $a);
  var ya = g,
    ae = ya,
    ba = 'Expected a function';
  function V(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(ba);
    var r = function () {
      var a = arguments,
        n = t ? t.apply(this, a) : a[0],
        o = r.cache;
      if (o.has(n)) return o.get(n);
      var i = e.apply(this, a);
      return (r.cache = o.set(n, i) || o), i;
    };
    return (r.cache = new (V.Cache || ae)()), r;
  }
  V.Cache = ae;
  var wa = V,
    Sa = wa,
    Ca = 500;
  function Pa(e) {
    var t = Sa(e, function (a) {
        return r.size === Ca && r.clear(), a;
      }),
      r = t.cache;
    return t;
  }
  var Ta = Pa,
    Oa = Ta,
    xa =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Ia = /\\(\\)?/g,
    ja = Oa(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(xa, function (r, a, n, o) {
          t.push(n ? o.replace(Ia, '$1') : a || r);
        }),
        t
      );
    }),
    Aa = ja;
  function Ea(e, t) {
    for (var r = -1, a = e == null ? 0 : e.length, n = Array(a); ++r < a; )
      n[r] = t(e[r], r, e);
    return n;
  }
  var Ma = Ea,
    ne = w,
    Na = Ma,
    Da = b,
    Fa = F,
    Ra = 1 / 0,
    oe = ne ? ne.prototype : void 0,
    ie = oe ? oe.toString : void 0;
  function se(e) {
    if (typeof e == 'string') return e;
    if (Da(e)) return Na(e, se) + '';
    if (Fa(e)) return ie ? ie.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -Ra ? '-0' : t;
  }
  var Ga = se,
    Va = Ga;
  function Ha(e) {
    return e == null ? '' : Va(e);
  }
  var za = Ha,
    ka = b,
    Ua = pt,
    Ba = Aa,
    qa = za;
  function La(e, t) {
    return ka(e) ? e : Ua(e, t) ? [e] : Ba(qa(e));
  }
  var E = La,
    Ka = F,
    Wa = 1 / 0;
  function Ja(e) {
    if (typeof e == 'string' || Ka(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -Wa ? '-0' : t;
  }
  var H = Ja,
    Xa = E,
    Za = H;
  function Ya(e, t) {
    t = Xa(t, e);
    for (var r = 0, a = t.length; e != null && r < a; ) e = e[Za(t[r++])];
    return r && r == a ? e : void 0;
  }
  var Qa = Ya,
    en = h,
    tn = (function () {
      try {
        var e = en(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch {}
    })(),
    ce = tn,
    ue = ce;
  function rn(e, t, r) {
    t == '__proto__' && ue
      ? ue(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  var an = rn,
    nn = an,
    on = ee,
    sn = Object.prototype,
    cn = sn.hasOwnProperty;
  function un(e, t, r) {
    var a = e[t];
    (!(cn.call(e, t) && on(a, r)) || (r === void 0 && !(t in e))) &&
      nn(e, t, r);
  }
  var ln = un,
    fn = 9007199254740991,
    pn = /^(?:0|[1-9]\d*)$/;
  function vn(e, t) {
    var r = typeof e;
    return (
      (t = t == null ? fn : t),
      !!t &&
        (r == 'number' || (r != 'symbol' && pn.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var le = vn,
    dn = ln,
    hn = E,
    _n = le,
    fe = R,
    mn = H;
  function gn(e, t, r, a) {
    if (!fe(e)) return e;
    t = hn(t, e);
    for (var n = -1, o = t.length, i = o - 1, s = e; s != null && ++n < o; ) {
      var u = mn(t[n]),
        f = r;
      if (u === '__proto__' || u === 'constructor' || u === 'prototype')
        return e;
      if (n != i) {
        var P = s[u];
        (f = a ? a(P, u, s) : void 0),
          f === void 0 && (f = fe(P) ? P : _n(t[n + 1]) ? [] : {});
      }
      dn(s, u, f), (s = s[u]);
    }
    return e;
  }
  var $n = gn,
    yn = Qa,
    bn = $n,
    wn = E;
  function Sn(e, t, r) {
    for (var a = -1, n = t.length, o = {}; ++a < n; ) {
      var i = t[a],
        s = yn(e, i);
      r(s, i) && bn(o, wn(i, e), s);
    }
    return o;
  }
  var Cn = Sn;
  function Pn(e, t) {
    return e != null && t in Object(e);
  }
  var Tn = Pn,
    On = x,
    xn = D,
    In = '[object Arguments]';
  function jn(e) {
    return xn(e) && On(e) == In;
  }
  var An = jn,
    pe = An,
    En = D,
    ve = Object.prototype,
    Mn = ve.hasOwnProperty,
    Nn = ve.propertyIsEnumerable,
    Dn = pe(
      (function () {
        return arguments;
      })(),
    )
      ? pe
      : function (e) {
          return En(e) && Mn.call(e, 'callee') && !Nn.call(e, 'callee');
        },
    de = Dn,
    Fn = 9007199254740991;
  function Rn(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Fn;
  }
  var Gn = Rn,
    Vn = E,
    Hn = de,
    zn = b,
    kn = le,
    Un = Gn,
    Bn = H;
  function qn(e, t, r) {
    t = Vn(t, e);
    for (var a = -1, n = t.length, o = !1; ++a < n; ) {
      var i = Bn(t[a]);
      if (!(o = e != null && r(e, i))) break;
      e = e[i];
    }
    return o || ++a != n
      ? o
      : ((n = e == null ? 0 : e.length),
        !!n && Un(n) && kn(i, n) && (zn(e) || Hn(e)));
  }
  var Ln = qn,
    Kn = Tn,
    Wn = Ln;
  function Jn(e, t) {
    return e != null && Wn(e, t, Kn);
  }
  var Xn = Jn,
    Zn = Cn,
    Yn = Xn;
  function Qn(e, t) {
    return Zn(e, t, function (r, a) {
      return Yn(e, a);
    });
  }
  var eo = Qn;
  function to(e, t) {
    for (var r = -1, a = t.length, n = e.length; ++r < a; ) e[n + r] = t[r];
    return e;
  }
  var ro = to,
    he = w,
    ao = de,
    no = b,
    _e = he ? he.isConcatSpreadable : void 0;
  function oo(e) {
    return no(e) || ao(e) || !!(_e && e && e[_e]);
  }
  var io = oo,
    so = ro,
    co = io;
  function me(e, t, r, a, n) {
    var o = -1,
      i = e.length;
    for (r || (r = co), n || (n = []); ++o < i; ) {
      var s = e[o];
      t > 0 && r(s)
        ? t > 1
          ? me(s, t - 1, r, a, n)
          : so(n, s)
        : a || (n[n.length] = s);
    }
    return n;
  }
  var uo = me,
    lo = uo;
  function fo(e) {
    var t = e == null ? 0 : e.length;
    return t ? lo(e, 1) : [];
  }
  var po = fo;
  function vo(e, t, r) {
    switch (r.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, r[0]);
      case 2:
        return e.call(t, r[0], r[1]);
      case 3:
        return e.call(t, r[0], r[1], r[2]);
    }
    return e.apply(t, r);
  }
  var ho = vo,
    _o = ho,
    ge = Math.max;
  function mo(e, t, r) {
    return (
      (t = ge(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var a = arguments, n = -1, o = ge(a.length - t, 0), i = Array(o);
          ++n < o;

        )
          i[n] = a[t + n];
        n = -1;
        for (var s = Array(t + 1); ++n < t; ) s[n] = a[n];
        return (s[t] = r(i)), _o(e, this, s);
      }
    );
  }
  var go = mo;
  function $o(e) {
    return function () {
      return e;
    };
  }
  var yo = $o;
  function bo(e) {
    return e;
  }
  var wo = bo,
    So = yo,
    $e = ce,
    Co = wo,
    Po = $e
      ? function (e, t) {
          return $e(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: So(t),
            writable: !0,
          });
        }
      : Co,
    To = Po,
    Oo = 800,
    xo = 16,
    Io = Date.now;
  function jo(e) {
    var t = 0,
      r = 0;
    return function () {
      var a = Io(),
        n = xo - (a - r);
      if (((r = a), n > 0)) {
        if (++t >= Oo) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var Ao = jo,
    Eo = To,
    Mo = Ao,
    No = Mo(Eo),
    Do = No,
    Fo = po,
    Ro = go,
    Go = Do;
  function Vo(e) {
    return Go(Ro(e, void 0, Fo), e + '');
  }
  var Ho = Vo,
    zo = eo,
    ko = Ho;
  ko(function (e, t) {
    return e == null ? {} : zo(e, t);
  });
  var ye = { exports: {} };
  function Uo() {
    return !1;
  }
  var Bo = Uo;
  (function (e, t) {
    var r = p,
      a = Bo,
      n = t && !t.nodeType && t,
      o = n && !0 && e && !e.nodeType && e,
      i = o && o.exports === n,
      s = i ? r.Buffer : void 0,
      u = s ? s.isBuffer : void 0,
      f = u || a;
    e.exports = f;
  })(ye, ye.exports);
  var C = { exports: {} };
  (function (e, t) {
    var r = L,
      a = t && !t.nodeType && t,
      n = a && !0 && e && !e.nodeType && e,
      o = n && n.exports === a,
      i = o && r.process,
      s = (function () {
        try {
          var u = n && n.require && n.require('util').types;
          return u || (i && i.binding && i.binding('util'));
        } catch {}
      })();
    e.exports = s;
  })(C, C.exports);
  var be = C.exports;
  be && be.isTypedArray;
  var we = { exports: {} };
  (function (e, t) {
    var r = p,
      a = t && !t.nodeType && t,
      n = a && !0 && e && !e.nodeType && e,
      o = n && n.exports === a,
      i = o ? r.Buffer : void 0,
      s = i ? i.allocUnsafe : void 0;
    function u(f, P) {
      if (P) return f.slice();
      var Ne = f.length,
        De = s ? s(Ne) : new f.constructor(Ne);
      return f.copy(De), De;
    }
    e.exports = u;
  })(we, we.exports);
  var qo = h,
    Lo = p,
    Ko = qo(Lo, 'DataView'),
    Wo = Ko,
    Jo = h,
    Xo = p,
    Zo = Jo(Xo, 'Promise'),
    Yo = Zo,
    Qo = h,
    ei = p,
    ti = Qo(ei, 'Set'),
    ri = ti,
    ai = h,
    ni = p,
    oi = ai(ni, 'WeakMap'),
    ii = oi,
    z = Wo,
    k = te,
    U = Yo,
    B = ri,
    q = ii,
    Se = x,
    $ = Y,
    Ce = '[object Map]',
    si = '[object Object]',
    Pe = '[object Promise]',
    Te = '[object Set]',
    Oe = '[object WeakMap]',
    xe = '[object DataView]',
    ci = $(z),
    ui = $(k),
    li = $(U),
    fi = $(B),
    pi = $(q),
    y = Se;
  ((z && y(new z(new ArrayBuffer(1))) != xe) ||
    (k && y(new k()) != Ce) ||
    (U && y(U.resolve()) != Pe) ||
    (B && y(new B()) != Te) ||
    (q && y(new q()) != Oe)) &&
    (y = function (e) {
      var t = Se(e),
        r = t == si ? e.constructor : void 0,
        a = r ? $(r) : '';
      if (a)
        switch (a) {
          case ci:
            return xe;
          case ui:
            return Ce;
          case li:
            return Pe;
          case fi:
            return Te;
          case pi:
            return Oe;
        }
      return t;
    });
  var vi = p;
  vi.Uint8Array;
  var Ie = w,
    je = Ie ? Ie.prototype : void 0;
  je && je.valueOf;
  var Ae = C.exports;
  Ae && Ae.isMap;
  var Ee = C.exports;
  Ee && Ee.isSet;
  var di = { exports: {} };
  /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function r() {
        for (var a = [], n = 0; n < arguments.length; n++) {
          var o = arguments[n];
          if (!!o) {
            var i = typeof o;
            if (i === 'string' || i === 'number') a.push(o);
            else if (Array.isArray(o)) {
              if (o.length) {
                var s = r.apply(null, o);
                s && a.push(s);
              }
            } else if (i === 'object')
              if (o.toString === Object.prototype.toString)
                for (var u in o) t.call(o, u) && o[u] && a.push(u);
              else a.push(o.toString());
          }
        }
        return a.join(' ');
      }
      e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
    })();
  })(di);
  const M = '[vue3-aipage-widget]';
  function hi(e) {
    let t = v.react;
    if (!e) return t;
    let r = e.toLowerCase().trim();
    switch (r) {
      case 'jquery':
      case 'jq':
        r = v.jquery;
        break;
      case 'vue2':
      case 'vue 2':
      case 'vue2.0':
      case 'vue 2.0':
        (r = v.vue2),
          console.error(
            'vue3-aipage-widget \u4E0D\u652F\u6301 vue2.0 \u6280\u672F\u6808\uFF0C\u8BF7\u6539\u7528aipage-widget\u652F\u6301\u3002',
          );
        break;
      case 'vue':
      case 'vue3':
      case 'vue 3':
      case 'vue3.0':
      case 'vue 3.0':
        r = v.vue3;
        break;
      default:
        r = v.react;
    }
    return r;
  }
  var v;
  (function (e) {
    (e.react = 'react'),
      (e.vue2 = 'vue2'),
      (e.vue3 = 'vue3'),
      (e.jquery = 'jquery');
  })(v || (v = {}));
  function _i(e) {
    return Object.prototype.toString.call(e).slice(8, -1) === 'String';
  }
  function mi(e) {
    return `-${e}`.replace(/(-[A-Za-z0-9])/g, (t) =>
      t.toUpperCase().replace('-', ''),
    );
  }
  function gi(e, t = !0) {
    const r =
      e && e.__super
        ? Object.create(e.__super, {
            __super: { value: e.__super, writable: !1, enumerable: !1 },
          })
        : Object.create(Object.prototype);
    return t && e && Object.keys(e).forEach((a) => (r[a] = e[a])), r;
  }
  function $i(e, t, r = !0) {
    const a = gi(e, r);
    return t && Object.keys(t).forEach((n) => (a[n] = t[n])), a;
  }
  function yi(e) {
    if (!e || (typeof e != 'function' && typeof e != 'object')) return;
    class t extends N.default.Component {
      constructor(n) {
        super(n);
        T(this, 'domRef');
        T(this, 'app');
        T(this, 'vm');
        T(this, 'isUnmount');
        (this.domRef = N.default.createRef()),
          (this.resolveAmisProps = this.resolveAmisProps.bind(this));
      }
      componentDidMount() {
        const { amisData: n, amisFunc: o } = this.resolveAmisProps(),
          { data: i, ...s } = (e = typeof e == 'function' ? new e() : e);
        (this.app = c.createApp({
          data: () => $i(n, typeof i == 'function' ? i() : i),
          ...s,
          props: s.props || {},
        })),
          Object.keys(o).forEach((u) => {
            this.app.$props[u] = o[u];
          }),
          (this.vm = this.app.mount(this.domRef.current)),
          this.domRef.current.setAttribute('data-component-id', this.props.id);
      }
      componentDidUpdate() {
        if (!this.isUnmount) {
          const { amisData: n } = this.resolveAmisProps();
          this.vm &&
            Object.keys(n).forEach((o) => {
              this.vm[o] = n[o];
            });
        }
      }
      componentWillUnmount() {
        (this.isUnmount = !0), this.app.unmount();
      }
      resolveAmisProps() {
        let n = {},
          o = {};
        return (
          Object.keys(this.props).forEach((i) => {
            const s = this.props[i];
            typeof s == 'function' ? (n[i] = s) : (o[i] = s);
          }),
          { amisData: o, amisFunc: n }
        );
      }
      render() {
        return N.default.createElement('div', { ref: this.domRef });
      }
    }
    return t;
  }
  function bi(e, t) {
    if (!e) return;
    const r = { type: '', framework: v.react };
    if (
      (t && _i(t) ? Object.assign(r, { type: t }) : Object.assign(r, t),
      r && !r.type)
    )
      console.error(
        `${M}\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7C7B\u578B\uFF08type\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
      );
    else {
      r.framework = hi(r.framework);
      const n = { react: (o) => o, vue3: yi }[r.framework](e);
      if (window) {
        const o = wi(r.type, n);
        o &&
          (console.info(
            `${M}\u89E6\u53D1\u6CE8\u518C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668(${r.type})\u4E8B\u4EF6:`,
            { type: r.type, component: n, framework: r.framework },
          ),
          window.postMessage(
            {
              type: 'aipage-editor-register-renderer-event',
              eventMsg: `${M}\u6CE8\u518C\u4E00\u4E2A\u81EA\u5B9A\u4E49aipage-editor\u6E32\u67D3\u5668`,
              customComponentId: o,
            },
            '*',
          ));
      }
    }
  }
  function wi(e, t) {
    window &&
      !window.AIPageEditorCustomRenderers &&
      (window.AIPageEditorCustomRenderers = {});
    const r = mi(e);
    if (window.AIPageEditorCustomRenderers[r])
      console.error(
        `${M}\u6CE8\u518C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\u5931\u8D25\uFF0C\u5DF2\u5B58\u5728\u540C\u540D\u6E32\u67D3\u5668\u7C7B\u578B(${e})\u3002`,
      );
    else return (window.AIPageEditorCustomRenderers[r] = t), r;
    return null;
  }
  (Me = window.matchMedia) == null ||
    Me.call(window, '(max-width: 768px)').matches;
  var Ii = '',
    Si = (e, t) => {
      const r = e.__vccOpts || e;
      for (const [a, n] of t) r[a] = n;
      return r;
    };
  const Ci = {
    props: ['componentProperties', 'id'],
    data() {
      return { isAlive: !0, isFirstVisit: !0 };
    },
    computed: {
      title() {
        return (
          (this.componentProperties &&
            this.componentProperties.data &&
            this.componentProperties.data.title) ||
          'amis \u662F\u4E00\u4E2A\u4F4E\u4EE3\u7801\u524D\u7AEF\u6846\u67B6\uFF0C\u5B83\u4F7F\u7528 JSON \u914D\u7F6E\u6765\u751F\u6210\u9875\u9762\uFF0C\u53EF\u4EE5\u51CF\u5C11\u9875\u9762\u5F00\u53D1\u5DE5\u4F5C\u91CF\uFF0C\u6781\u5927\u63D0\u5347\u6548\u7387\u3002'
        );
      },
      backgroundImage() {
        return (
          (this.componentProperties &&
            this.componentProperties.data &&
            this.componentProperties.data.backgroundImage) ||
          'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg'
        );
      },
      img_count() {
        return (
          (this.componentProperties &&
            this.componentProperties.data &&
            this.componentProperties.data.img_count) ||
          1
        );
      },
      comment_count() {
        return (
          this.componentProperties &&
          this.componentProperties.data &&
          this.componentProperties.data.comment_count
        );
      },
    },
    mounted() {
      this.isFirstVisit = !1;
    },
    activated() {
      this.isAlive = !0;
    },
    deactivated() {
      this.isAlive = !1;
    },
    methods: {
      agreeDataFormat(e) {
        if (e && e <= 9999) return e;
        if (e && e > 9999) return `${Math.floor(e / 1e3) / 10}w`;
      },
    },
  };
  function Pi(e, t, r, a, n, o) {
    return (
      c.openBlock(),
      c.createElementBlock('div', { class: 'news-card' }, [
        c.createElementVNode(
          'div',
          { class: 'news-title' },
          c.toDisplayString(o.title),
          1,
        ),
        c.createElementVNode('div', { class: 'item-imgbox' }, [
          c.createElementVNode(
            'div',
            {
              class: 'news-img',
              style: c.normalizeStyle({
                backgroundImage: 'url(' + o.backgroundImage + ')',
              }),
            },
            null,
            4,
          ),
          o.img_count > 0
            ? (c.openBlock(),
              c.createElementBlock(
                'div',
                { key: 0, class: 'img-count' },
                c.toDisplayString(o.img_count),
                1,
              ))
            : c.createCommentVNode('v-if', !0),
        ]),
        c.createElementVNode('div', { class: 'news-info' }, [
          c.createElementVNode(
            'div',
            { class: 'left media-mark' },
            '\u7231\u901F\u642D \xB7 \u4F4E\u4EE3\u7801\u5E73\u53F0',
          ),
          c.createElementVNode(
            'div',
            { class: 'cmt-num right' },
            c.toDisplayString(o.agreeDataFormat(o.comment_count) || 0) +
              ' \u8BC4 ',
            1,
          ),
        ]),
      ])
    );
  }
  var Ti = Si(Ci, [
    ['render', Pi],
    ['__scopeId', 'data-v-f30fdfbc'],
  ]);
  bi(Ti, { type: 'uni-info-card', framework: 'vue3' });
});

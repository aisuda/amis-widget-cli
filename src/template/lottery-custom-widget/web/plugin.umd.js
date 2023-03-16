(function (f, $) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? (module.exports = $(require('react'), require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['react', 'vue'], $)
    : ((f = typeof globalThis != 'undefined' ? globalThis : f || self),
      (f.plugin = $()));
})(this, function () {
  var Ae;
  ('use strict');
  var f =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {};
  function $(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var A = $,
    Ee = Array.isArray,
    y = Ee,
    Me = typeof f == 'object' && f && f.Object === Object && f,
    R = Me,
    Fe = R,
    Ne = typeof self == 'object' && self && self.Object === Object && self,
    Be = Fe || Ne || Function('return this')(),
    c = Be,
    ze = c,
    Ge = ze.Symbol,
    m = Ge,
    L = m,
    U = Object.prototype,
    He = U.hasOwnProperty,
    Re = U.toString,
    C = L ? L.toStringTag : void 0;
  function Le(e) {
    var t = He.call(e, C),
      r = e[C];
    try {
      e[C] = void 0;
      var a = !0;
    } catch {}
    var n = Re.call(e);
    return a && (t ? (e[C] = r) : delete e[C]), n;
  }
  var Ue = Le,
    Ke = Object.prototype,
    Ve = Ke.toString;
  function qe(e) {
    return Ve.call(e);
  }
  var ke = qe,
    K = m,
    We = Ue,
    Xe = ke,
    Je = '[object Null]',
    Ze = '[object Undefined]',
    V = K ? K.toStringTag : void 0;
  function Ye(e) {
    return e == null
      ? e === void 0
        ? Ze
        : Je
      : V && V in Object(e)
      ? We(e)
      : Xe(e);
  }
  var w = Ye;
  function Qe(e) {
    return e != null && typeof e == 'object';
  }
  var j = Qe,
    et = w,
    tt = j,
    rt = '[object Symbol]';
  function at(e) {
    return typeof e == 'symbol' || (tt(e) && et(e) == rt);
  }
  var D = at,
    nt = y,
    it = D,
    ot = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    st = /^\w*$/;
  function ut(e, t) {
    if (nt(e)) return !1;
    var r = typeof e;
    return r == 'number' ||
      r == 'symbol' ||
      r == 'boolean' ||
      e == null ||
      it(e)
      ? !0
      : st.test(e) || !ot.test(e) || (t != null && e in Object(t));
  }
  var lt = ut,
    ct = w,
    ft = A,
    pt = '[object AsyncFunction]',
    vt = '[object Function]',
    dt = '[object GeneratorFunction]',
    ht = '[object Proxy]';
  function gt(e) {
    if (!ft(e)) return !1;
    var t = ct(e);
    return t == vt || t == dt || t == pt || t == ht;
  }
  var bt = gt,
    _t = c,
    $t = _t['__core-js_shared__'],
    yt = $t,
    E = yt,
    q = (function () {
      var e = /[^.]+$/.exec((E && E.keys && E.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function mt(e) {
    return !!q && q in e;
  }
  var Ct = mt,
    St = Function.prototype,
    Pt = St.toString;
  function wt(e) {
    if (e != null) {
      try {
        return Pt.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var k = wt,
    Tt = bt,
    Ot = Ct,
    It = A,
    xt = k,
    At = /[\\^$.*+?()[\]{}|]/g,
    jt = /^\[object .+?Constructor\]$/,
    Dt = Function.prototype,
    Et = Object.prototype,
    Mt = Dt.toString,
    Ft = Et.hasOwnProperty,
    Nt = RegExp(
      '^' +
        Mt.call(Ft)
          .replace(At, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function Bt(e) {
    if (!It(e) || Ot(e)) return !1;
    var t = Tt(e) ? Nt : jt;
    return t.test(xt(e));
  }
  var zt = Bt;
  function Gt(e, t) {
    return e == null ? void 0 : e[t];
  }
  var Ht = Gt,
    Rt = zt,
    Lt = Ht;
  function Ut(e, t) {
    var r = Lt(e, t);
    return Rt(r) ? r : void 0;
  }
  var v = Ut,
    Kt = v,
    Vt = Kt(Object, 'create'),
    T = Vt,
    W = T;
  function qt() {
    (this.__data__ = W ? W(null) : {}), (this.size = 0);
  }
  var kt = qt;
  function Wt(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var Xt = Wt,
    Jt = T,
    Zt = '__lodash_hash_undefined__',
    Yt = Object.prototype,
    Qt = Yt.hasOwnProperty;
  function er(e) {
    var t = this.__data__;
    if (Jt) {
      var r = t[e];
      return r === Zt ? void 0 : r;
    }
    return Qt.call(t, e) ? t[e] : void 0;
  }
  var tr = er,
    rr = T,
    ar = Object.prototype,
    nr = ar.hasOwnProperty;
  function ir(e) {
    var t = this.__data__;
    return rr ? t[e] !== void 0 : nr.call(t, e);
  }
  var or = ir,
    sr = T,
    ur = '__lodash_hash_undefined__';
  function lr(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = sr && t === void 0 ? ur : t),
      this
    );
  }
  var cr = lr,
    fr = kt,
    pr = Xt,
    vr = tr,
    dr = or,
    hr = cr;
  function d(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (d.prototype.clear = fr),
    (d.prototype.delete = pr),
    (d.prototype.get = vr),
    (d.prototype.has = dr),
    (d.prototype.set = hr);
  var gr = d;
  function br() {
    (this.__data__ = []), (this.size = 0);
  }
  var _r = br;
  function $r(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var X = $r,
    yr = X;
  function mr(e, t) {
    for (var r = e.length; r--; ) if (yr(e[r][0], t)) return r;
    return -1;
  }
  var O = mr,
    Cr = O,
    Sr = Array.prototype,
    Pr = Sr.splice;
  function wr(e) {
    var t = this.__data__,
      r = Cr(t, e);
    if (r < 0) return !1;
    var a = t.length - 1;
    return r == a ? t.pop() : Pr.call(t, r, 1), --this.size, !0;
  }
  var Tr = wr,
    Or = O;
  function Ir(e) {
    var t = this.__data__,
      r = Or(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var xr = Ir,
    Ar = O;
  function jr(e) {
    return Ar(this.__data__, e) > -1;
  }
  var Dr = jr,
    Er = O;
  function Mr(e, t) {
    var r = this.__data__,
      a = Er(r, e);
    return a < 0 ? (++this.size, r.push([e, t])) : (r[a][1] = t), this;
  }
  var Fr = Mr,
    Nr = _r,
    Br = Tr,
    zr = xr,
    Gr = Dr,
    Hr = Fr;
  function h(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (h.prototype.clear = Nr),
    (h.prototype.delete = Br),
    (h.prototype.get = zr),
    (h.prototype.has = Gr),
    (h.prototype.set = Hr);
  var Rr = h,
    Lr = v,
    Ur = c,
    Kr = Lr(Ur, 'Map'),
    J = Kr,
    Z = gr,
    Vr = Rr,
    qr = J;
  function kr() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Z(),
        map: new (qr || Vr)(),
        string: new Z(),
      });
  }
  var Wr = kr;
  function Xr(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  var Jr = Xr,
    Zr = Jr;
  function Yr(e, t) {
    var r = e.__data__;
    return Zr(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
  }
  var I = Yr,
    Qr = I;
  function ea(e) {
    var t = Qr(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var ta = ea,
    ra = I;
  function aa(e) {
    return ra(this, e).get(e);
  }
  var na = aa,
    ia = I;
  function oa(e) {
    return ia(this, e).has(e);
  }
  var sa = oa,
    ua = I;
  function la(e, t) {
    var r = ua(this, e),
      a = r.size;
    return r.set(e, t), (this.size += r.size == a ? 0 : 1), this;
  }
  var ca = la,
    fa = Wr,
    pa = ta,
    va = na,
    da = sa,
    ha = ca;
  function g(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (g.prototype.clear = fa),
    (g.prototype.delete = pa),
    (g.prototype.get = va),
    (g.prototype.has = da),
    (g.prototype.set = ha);
  var ga = g,
    Y = ga,
    ba = 'Expected a function';
  function M(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(ba);
    var r = function () {
      var a = arguments,
        n = t ? t.apply(this, a) : a[0],
        i = r.cache;
      if (i.has(n)) return i.get(n);
      var o = e.apply(this, a);
      return (r.cache = i.set(n, o) || i), o;
    };
    return (r.cache = new (M.Cache || Y)()), r;
  }
  M.Cache = Y;
  var _a = M,
    $a = _a,
    ya = 500;
  function ma(e) {
    var t = $a(e, function (a) {
        return r.size === ya && r.clear(), a;
      }),
      r = t.cache;
    return t;
  }
  var Ca = ma,
    Sa = Ca,
    Pa =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    wa = /\\(\\)?/g,
    Ta = Sa(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(Pa, function (r, a, n, i) {
          t.push(n ? i.replace(wa, '$1') : a || r);
        }),
        t
      );
    }),
    Oa = Ta;
  function Ia(e, t) {
    for (var r = -1, a = e == null ? 0 : e.length, n = Array(a); ++r < a; )
      n[r] = t(e[r], r, e);
    return n;
  }
  var xa = Ia,
    Q = m,
    Aa = xa,
    ja = y,
    Da = D,
    Ea = 1 / 0,
    ee = Q ? Q.prototype : void 0,
    te = ee ? ee.toString : void 0;
  function re(e) {
    if (typeof e == 'string') return e;
    if (ja(e)) return Aa(e, re) + '';
    if (Da(e)) return te ? te.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -Ea ? '-0' : t;
  }
  var Ma = re,
    Fa = Ma;
  function Na(e) {
    return e == null ? '' : Fa(e);
  }
  var Ba = Na,
    za = y,
    Ga = lt,
    Ha = Oa,
    Ra = Ba;
  function La(e, t) {
    return za(e) ? e : Ga(e, t) ? [e] : Ha(Ra(e));
  }
  var x = La,
    Ua = D,
    Ka = 1 / 0;
  function Va(e) {
    if (typeof e == 'string' || Ua(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -Ka ? '-0' : t;
  }
  var F = Va,
    qa = x,
    ka = F;
  function Wa(e, t) {
    t = qa(t, e);
    for (var r = 0, a = t.length; e != null && r < a; ) e = e[ka(t[r++])];
    return r && r == a ? e : void 0;
  }
  var Xa = Wa,
    Ja = v,
    Za = (function () {
      try {
        var e = Ja(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch {}
    })(),
    ae = Za,
    ne = ae;
  function Ya(e, t, r) {
    t == '__proto__' && ne
      ? ne(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  var Qa = Ya,
    en = Qa,
    tn = X,
    rn = Object.prototype,
    an = rn.hasOwnProperty;
  function nn(e, t, r) {
    var a = e[t];
    (!(an.call(e, t) && tn(a, r)) || (r === void 0 && !(t in e))) &&
      en(e, t, r);
  }
  var on = nn,
    sn = 9007199254740991,
    un = /^(?:0|[1-9]\d*)$/;
  function ln(e, t) {
    var r = typeof e;
    return (
      (t = t == null ? sn : t),
      !!t &&
        (r == 'number' || (r != 'symbol' && un.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var ie = ln,
    cn = on,
    fn = x,
    pn = ie,
    oe = A,
    vn = F;
  function dn(e, t, r, a) {
    if (!oe(e)) return e;
    t = fn(t, e);
    for (var n = -1, i = t.length, o = i - 1, s = e; s != null && ++n < i; ) {
      var u = vn(t[n]),
        l = r;
      if (u === '__proto__' || u === 'constructor' || u === 'prototype')
        return e;
      if (n != o) {
        var P = s[u];
        (l = a ? a(P, u, s) : void 0),
          l === void 0 && (l = oe(P) ? P : pn(t[n + 1]) ? [] : {});
      }
      cn(s, u, l), (s = s[u]);
    }
    return e;
  }
  var hn = dn,
    gn = Xa,
    bn = hn,
    _n = x;
  function $n(e, t, r) {
    for (var a = -1, n = t.length, i = {}; ++a < n; ) {
      var o = t[a],
        s = gn(e, o);
      r(s, o) && bn(i, _n(o, e), s);
    }
    return i;
  }
  var yn = $n;
  function mn(e, t) {
    return e != null && t in Object(e);
  }
  var Cn = mn,
    Sn = w,
    Pn = j,
    wn = '[object Arguments]';
  function Tn(e) {
    return Pn(e) && Sn(e) == wn;
  }
  var On = Tn,
    se = On,
    In = j,
    ue = Object.prototype,
    xn = ue.hasOwnProperty,
    An = ue.propertyIsEnumerable,
    jn = se(
      (function () {
        return arguments;
      })(),
    )
      ? se
      : function (e) {
          return In(e) && xn.call(e, 'callee') && !An.call(e, 'callee');
        },
    le = jn,
    Dn = 9007199254740991;
  function En(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Dn;
  }
  var Mn = En,
    Fn = x,
    Nn = le,
    Bn = y,
    zn = ie,
    Gn = Mn,
    Hn = F;
  function Rn(e, t, r) {
    t = Fn(t, e);
    for (var a = -1, n = t.length, i = !1; ++a < n; ) {
      var o = Hn(t[a]);
      if (!(i = e != null && r(e, o))) break;
      e = e[o];
    }
    return i || ++a != n
      ? i
      : ((n = e == null ? 0 : e.length),
        !!n && Gn(n) && zn(o, n) && (Bn(e) || Nn(e)));
  }
  var Ln = Rn,
    Un = Cn,
    Kn = Ln;
  function Vn(e, t) {
    return e != null && Kn(e, t, Un);
  }
  var qn = Vn,
    kn = yn,
    Wn = qn;
  function Xn(e, t) {
    return kn(e, t, function (r, a) {
      return Wn(e, a);
    });
  }
  var Jn = Xn;
  function Zn(e, t) {
    for (var r = -1, a = t.length, n = e.length; ++r < a; ) e[n + r] = t[r];
    return e;
  }
  var Yn = Zn,
    ce = m,
    Qn = le,
    ei = y,
    fe = ce ? ce.isConcatSpreadable : void 0;
  function ti(e) {
    return ei(e) || Qn(e) || !!(fe && e && e[fe]);
  }
  var ri = ti,
    ai = Yn,
    ni = ri;
  function pe(e, t, r, a, n) {
    var i = -1,
      o = e.length;
    for (r || (r = ni), n || (n = []); ++i < o; ) {
      var s = e[i];
      t > 0 && r(s)
        ? t > 1
          ? pe(s, t - 1, r, a, n)
          : ai(n, s)
        : a || (n[n.length] = s);
    }
    return n;
  }
  var ii = pe,
    oi = ii;
  function si(e) {
    var t = e == null ? 0 : e.length;
    return t ? oi(e, 1) : [];
  }
  var ui = si;
  function li(e, t, r) {
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
  var ci = li,
    fi = ci,
    ve = Math.max;
  function pi(e, t, r) {
    return (
      (t = ve(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var a = arguments, n = -1, i = ve(a.length - t, 0), o = Array(i);
          ++n < i;

        )
          o[n] = a[t + n];
        n = -1;
        for (var s = Array(t + 1); ++n < t; ) s[n] = a[n];
        return (s[t] = r(o)), fi(e, this, s);
      }
    );
  }
  var vi = pi;
  function di(e) {
    return function () {
      return e;
    };
  }
  var hi = di;
  function gi(e) {
    return e;
  }
  var bi = gi,
    _i = hi,
    de = ae,
    $i = bi,
    yi = de
      ? function (e, t) {
          return de(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: _i(t),
            writable: !0,
          });
        }
      : $i,
    mi = yi,
    Ci = 800,
    Si = 16,
    Pi = Date.now;
  function wi(e) {
    var t = 0,
      r = 0;
    return function () {
      var a = Pi(),
        n = Si - (a - r);
      if (((r = a), n > 0)) {
        if (++t >= Ci) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var Ti = wi,
    Oi = mi,
    Ii = Ti,
    xi = Ii(Oi),
    Ai = xi,
    ji = ui,
    Di = vi,
    Ei = Ai;
  function Mi(e) {
    return Ei(Di(e, void 0, ji), e + '');
  }
  var Fi = Mi,
    Ni = Jn,
    Bi = Fi;
  Bi(function (e, t) {
    return e == null ? {} : Ni(e, t);
  });
  var he = { exports: {} };
  function zi() {
    return !1;
  }
  var Gi = zi;
  (function (e, t) {
    var r = c,
      a = Gi,
      n = t && !t.nodeType && t,
      i = n && !0 && e && !e.nodeType && e,
      o = i && i.exports === n,
      s = o ? r.Buffer : void 0,
      u = s ? s.isBuffer : void 0,
      l = u || a;
    e.exports = l;
  })(he, he.exports);
  var S = { exports: {} };
  (function (e, t) {
    var r = R,
      a = t && !t.nodeType && t,
      n = a && !0 && e && !e.nodeType && e,
      i = n && n.exports === a,
      o = i && r.process,
      s = (function () {
        try {
          var u = n && n.require && n.require('util').types;
          return u || (o && o.binding && o.binding('util'));
        } catch {}
      })();
    e.exports = s;
  })(S, S.exports);
  var ge = S.exports;
  ge && ge.isTypedArray;
  var be = { exports: {} };
  (function (e, t) {
    var r = c,
      a = t && !t.nodeType && t,
      n = a && !0 && e && !e.nodeType && e,
      i = n && n.exports === a,
      o = i ? r.Buffer : void 0,
      s = o ? o.allocUnsafe : void 0;
    function u(l, P) {
      if (P) return l.slice();
      var je = l.length,
        De = s ? s(je) : new l.constructor(je);
      return l.copy(De), De;
    }
    e.exports = u;
  })(be, be.exports);
  var Hi = v,
    Ri = c,
    Li = Hi(Ri, 'DataView'),
    Ui = Li,
    Ki = v,
    Vi = c,
    qi = Ki(Vi, 'Promise'),
    ki = qi,
    Wi = v,
    Xi = c,
    Ji = Wi(Xi, 'Set'),
    Zi = Ji,
    Yi = v,
    Qi = c,
    eo = Yi(Qi, 'WeakMap'),
    to = eo,
    N = Ui,
    B = J,
    z = ki,
    G = Zi,
    H = to,
    _e = w,
    b = k,
    $e = '[object Map]',
    ro = '[object Object]',
    ye = '[object Promise]',
    me = '[object Set]',
    Ce = '[object WeakMap]',
    Se = '[object DataView]',
    ao = b(N),
    no = b(B),
    io = b(z),
    oo = b(G),
    so = b(H),
    _ = _e;
  ((N && _(new N(new ArrayBuffer(1))) != Se) ||
    (B && _(new B()) != $e) ||
    (z && _(z.resolve()) != ye) ||
    (G && _(new G()) != me) ||
    (H && _(new H()) != Ce)) &&
    (_ = function (e) {
      var t = _e(e),
        r = t == ro ? e.constructor : void 0,
        a = r ? b(r) : '';
      if (a)
        switch (a) {
          case ao:
            return Se;
          case no:
            return $e;
          case io:
            return ye;
          case oo:
            return me;
          case so:
            return Ce;
        }
      return t;
    });
  var uo = c;
  uo.Uint8Array;
  var Pe = m,
    we = Pe ? Pe.prototype : void 0;
  we && we.valueOf;
  var Te = S.exports;
  Te && Te.isMap;
  var Oe = S.exports;
  Oe && Oe.isSet;
  var lo = { exports: {} };
  /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function r() {
        for (var a = [], n = 0; n < arguments.length; n++) {
          var i = arguments[n];
          if (!!i) {
            var o = typeof i;
            if (o === 'string' || o === 'number') a.push(i);
            else if (Array.isArray(i)) {
              if (i.length) {
                var s = r.apply(null, i);
                s && a.push(s);
              }
            } else if (o === 'object') {
              if (
                i.toString !== Object.prototype.toString &&
                !i.toString.toString().includes('[native code]')
              ) {
                a.push(i.toString());
                continue;
              }
              for (var u in i) t.call(i, u) && i[u] && a.push(u);
            }
          }
        }
        return a.join(' ');
      }
      e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
    })();
  })(lo);
  const p = '[vue3-aipage-widget]';
  var Ie;
  (function (e) {
    (e.react = 'react'),
      (e.vue2 = 'vue2'),
      (e.vue3 = 'vue3'),
      (e.jquery = 'jquery');
  })(Ie || (Ie = {}));
  function co(e) {
    let t = !1;
    if (!e || !fo(e)) return !1;
    const r = e;
    return (
      r.name
        ? r.id
          ? r.componentId
            ? r.description
              ? !r.tags || (Array.isArray(r.tags) && r.tags.length === 0)
                ? console.error(
                    `${p}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6\u5206\u7C7B\uFF08tags\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
                  )
                : (r.pluginIcon || (r.pluginIcon = 'cards-plugin'),
                  r.type || (r.type = 'element'),
                  (t = !0))
              : console.error(
                  `${p}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6\u63CF\u8FF0\uFF08description\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
                )
            : console.error(
                `${p}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u6E32\u67D3\u5668ID\uFF08componentId\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
              )
          : console.error(
              `${p}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6ID\uFF08id\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
            )
        : console.error(
            `${p}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6\u540D\u79F0\uFF08name\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
          ),
      t
    );
  }
  function fo(e) {
    let t = !1;
    return (
      Object.prototype.toString.call(e).slice(8, -1) === 'Object' && (t = !0), t
    );
  }
  function po(e) {
    return `-${e}`.replace(/(-[A-Za-z0-9])/g, (t) =>
      t.toUpperCase().replace('-', ''),
    );
  }
  function vo(e) {
    return (
      co(e) &&
        window &&
        window.postMessage &&
        ho(e.id, e) &&
        (console.info(
          `${p}\u89E6\u53D1\u6CE8\u518C\u81EA\u5B9A\u4E49\u63D2\u4EF6(${e.name})\u4E8B\u4EF6:`,
          e,
        ),
        window.postMessage(
          {
            type: 'aipage-editor-register-plugin-event',
            eventMsg: `${p}\u6CE8\u518C\u4E00\u4E2A\u81EA\u5B9A\u4E49aipage-editor\u63D2\u4EF6`,
            editorPluginName: e.name,
            customEditorPlugin: e,
          },
          '*',
        )),
      e
    );
  }
  function ho(e, t) {
    window &&
      !window.AIPageEditorCustomPlugins &&
      (window.AIPageEditorCustomPlugins = {});
    const r = po(e);
    if (window.AIPageEditorCustomPlugins[r])
      console.error(
        `${p}\u6CE8\u518C\u81EA\u5B9A\u4E49\u63D2\u4EF6\u5931\u8D25\uFF0C\u5DF2\u5B58\u5728\u540C\u540D\u63D2\u4EF6(${e})\u3002`,
      );
    else return (window.AIPageEditorCustomPlugins[r] = t), r;
    return null;
  }
  (Ae = window.matchMedia) == null ||
    Ae.call(window, '(max-width: 768px)').matches;
  const xe = {
    name: '\u62BD\u5956\u5361\u7247',
    description: '\u62BD\u5956\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
    componentId: 'uni-lottery-card',
    id: 'uni-lottery-card',
    tags: ['\u8DE8\u7AEF\u7EC4\u4EF6'],
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
              name: '\u884C\u674E\u7BB1',
              value: 'luggage',
              img: 'https://user-images.githubusercontent.com/11958920/184317875-20c2df50-6901-4364-b3c7-e086bb717a72.png',
            },
            {
              name: '\u5439\u98CE\u673A',
              value: 'dryer',
              img: 'https://user-images.githubusercontent.com/11958920/184317938-03c2cc33-948d-45e6-8eba-1b473966ea1e.png',
            },
            {
              name: '\u5E73\u8861\u8F66',
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
          title: '\u5C5E\u6027',
          controls: [
            {
              type: 'collapse',
              title: '\u6570\u636E',
              controls: [
                {
                  name: 'data.prizeList',
                  type: 'setting-list',
                  label: '\u5956\u54C1\u5217\u8868',
                  mode: 'normal',
                  fullSize: !0,
                  setting: [
                    {
                      type: 'input-text',
                      name: 'name',
                      label: '\u5956\u54C1\u540D\u79F0',
                      placeholder: '\u8BF7\u8F93\u5165\u5956\u54C1\u540D\u79F0',
                    },
                    {
                      type: 'input-text',
                      name: 'value',
                      label: '\u5956\u54C1ID',
                      placeholder: '\u8BF7\u8F93\u5165\u5956\u54C1ID',
                    },
                    {
                      type: 'input-text',
                      name: 'img',
                      label: '\u5956\u54C1\u56FE\u7247',
                      placeholder:
                        '\u8BF7\u8F93\u5165\u5956\u54C1\u56FE\u7247\u5730\u5740',
                    },
                  ],
                  enableDataBinding: !0,
                },
                {
                  name: 'data.prizeResult',
                  label: '\u62BD\u5956\u7ED3\u679C',
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
          title: '\u5916\u89C2',
          controls: [
            {
              title: '\u5E03\u5C40',
              type: 'collapse',
              controls: [
                {
                  type: 'button-icon-group',
                  name: 'style.display',
                  label: '\u663E\u793A',
                  value: 'block',
                  options: [
                    {
                      label: '\u5757\u7EA7(block)',
                      icon: 'block',
                      value: 'block',
                    },
                    {
                      label: '\u884C\u5185\u533A\u5757(inline-block)',
                      icon: 'inlineBlock',
                      value: 'inline-block',
                    },
                    {
                      label: '\u884C\u5185\u5143\u7D20(inline)',
                      icon: 'inline',
                      value: 'inline',
                    },
                  ],
                },
                {
                  name: 'style',
                  type: 'whSet',
                  label: '\u5BBD\u5EA6',
                  options: [{ label: '', value: 'width' }],
                },
              ],
            },
            {
              type: 'collapse',
              title: '\u8FB9\u8DDD',
              controls: { name: 'style.box', type: 'boxModel', label: !1 },
            },
          ],
        },
      ],
    },
  };
  return vo(xe), xe;
});

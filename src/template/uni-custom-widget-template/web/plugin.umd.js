(function (f, b) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? (module.exports = b(require('react'), require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['react', 'vue'], b)
    : ((f = typeof globalThis != 'undefined' ? globalThis : f || self),
      (f.plugin = b()));
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
        : {},
    b = Array.isArray,
    y = b,
    je = typeof f == 'object' && f && f.Object === Object && f,
    R = je,
    Me = R,
    De = typeof self == 'object' && self && self.Object === Object && self,
    Ne = Me || De || Function('return this')(),
    l = Ne,
    Ge = l,
    Be = Ge.Symbol,
    m = Be,
    U = m,
    K = Object.prototype,
    He = K.hasOwnProperty,
    ze = K.toString,
    C = U ? U.toStringTag : void 0;
  function Re(e) {
    var t = He.call(e, C),
      r = e[C];
    try {
      e[C] = void 0;
      var a = !0;
    } catch {}
    var n = ze.call(e);
    return a && (t ? (e[C] = r) : delete e[C]), n;
  }
  var Ue = Re,
    Ke = Object.prototype,
    Le = Ke.toString;
  function Ve(e) {
    return Le.call(e);
  }
  var qe = Ve,
    L = m,
    ke = Ue,
    We = qe,
    Je = '[object Null]',
    Xe = '[object Undefined]',
    V = L ? L.toStringTag : void 0;
  function Ze(e) {
    return e == null
      ? e === void 0
        ? Xe
        : Je
      : V && V in Object(e)
      ? ke(e)
      : We(e);
  }
  var P = Ze;
  function Ye(e) {
    return e != null && typeof e == 'object';
  }
  var A = Ye,
    Qe = P,
    et = A,
    tt = '[object Symbol]';
  function rt(e) {
    return typeof e == 'symbol' || (et(e) && Qe(e) == tt);
  }
  var E = rt,
    at = y,
    nt = E,
    it = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    ot = /^\w*$/;
  function st(e, t) {
    if (at(e)) return !1;
    var r = typeof e;
    return r == 'number' ||
      r == 'symbol' ||
      r == 'boolean' ||
      e == null ||
      nt(e)
      ? !0
      : ot.test(e) || !it.test(e) || (t != null && e in Object(t));
  }
  var ut = st;
  function ct(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var F = ct,
    lt = P,
    ft = F,
    vt = '[object AsyncFunction]',
    pt = '[object Function]',
    ht = '[object GeneratorFunction]',
    dt = '[object Proxy]';
  function gt(e) {
    if (!ft(e)) return !1;
    var t = lt(e);
    return t == pt || t == ht || t == vt || t == dt;
  }
  var _t = gt,
    $t = l,
    bt = $t['__core-js_shared__'],
    yt = bt,
    j = yt,
    q = (function () {
      var e = /[^.]+$/.exec((j && j.keys && j.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function mt(e) {
    return !!q && q in e;
  }
  var Ct = mt,
    St = Function.prototype,
    wt = St.toString;
  function Pt(e) {
    if (e != null) {
      try {
        return wt.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var k = Pt,
    Tt = _t,
    Ot = Ct,
    It = F,
    xt = k,
    At = /[\\^$.*+?()[\]{}|]/g,
    Et = /^\[object .+?Constructor\]$/,
    Ft = Function.prototype,
    jt = Object.prototype,
    Mt = Ft.toString,
    Dt = jt.hasOwnProperty,
    Nt = RegExp(
      '^' +
        Mt.call(Dt)
          .replace(At, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function Gt(e) {
    if (!It(e) || Ot(e)) return !1;
    var t = Tt(e) ? Nt : Et;
    return t.test(xt(e));
  }
  var Bt = Gt;
  function Ht(e, t) {
    return e == null ? void 0 : e[t];
  }
  var zt = Ht,
    Rt = Bt,
    Ut = zt;
  function Kt(e, t) {
    var r = Ut(e, t);
    return Rt(r) ? r : void 0;
  }
  var p = Kt,
    Lt = p,
    Vt = Lt(Object, 'create'),
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
  var Jt = Wt,
    Xt = T,
    Zt = '__lodash_hash_undefined__',
    Yt = Object.prototype,
    Qt = Yt.hasOwnProperty;
  function er(e) {
    var t = this.__data__;
    if (Xt) {
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
  function cr(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = sr && t === void 0 ? ur : t),
      this
    );
  }
  var lr = cr,
    fr = kt,
    vr = Jt,
    pr = tr,
    hr = or,
    dr = lr;
  function h(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (h.prototype.clear = fr),
    (h.prototype.delete = vr),
    (h.prototype.get = pr),
    (h.prototype.has = hr),
    (h.prototype.set = dr);
  var gr = h;
  function _r() {
    (this.__data__ = []), (this.size = 0);
  }
  var $r = _r;
  function br(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var J = br,
    yr = J;
  function mr(e, t) {
    for (var r = e.length; r--; ) if (yr(e[r][0], t)) return r;
    return -1;
  }
  var O = mr,
    Cr = O,
    Sr = Array.prototype,
    wr = Sr.splice;
  function Pr(e) {
    var t = this.__data__,
      r = Cr(t, e);
    if (r < 0) return !1;
    var a = t.length - 1;
    return r == a ? t.pop() : wr.call(t, r, 1), --this.size, !0;
  }
  var Tr = Pr,
    Or = O;
  function Ir(e) {
    var t = this.__data__,
      r = Or(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var xr = Ir,
    Ar = O;
  function Er(e) {
    return Ar(this.__data__, e) > -1;
  }
  var Fr = Er,
    jr = O;
  function Mr(e, t) {
    var r = this.__data__,
      a = jr(r, e);
    return a < 0 ? (++this.size, r.push([e, t])) : (r[a][1] = t), this;
  }
  var Dr = Mr,
    Nr = $r,
    Gr = Tr,
    Br = xr,
    Hr = Fr,
    zr = Dr;
  function d(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (d.prototype.clear = Nr),
    (d.prototype.delete = Gr),
    (d.prototype.get = Br),
    (d.prototype.has = Hr),
    (d.prototype.set = zr);
  var Rr = d,
    Ur = p,
    Kr = l,
    Lr = Ur(Kr, 'Map'),
    X = Lr,
    Z = gr,
    Vr = Rr,
    qr = X;
  function kr() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Z(),
        map: new (qr || Vr)(),
        string: new Z(),
      });
  }
  var Wr = kr;
  function Jr(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  var Xr = Jr,
    Zr = Xr;
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
  function ca(e, t) {
    var r = ua(this, e),
      a = r.size;
    return r.set(e, t), (this.size += r.size == a ? 0 : 1), this;
  }
  var la = ca,
    fa = Wr,
    va = ta,
    pa = na,
    ha = sa,
    da = la;
  function g(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (g.prototype.clear = fa),
    (g.prototype.delete = va),
    (g.prototype.get = pa),
    (g.prototype.has = ha),
    (g.prototype.set = da);
  var ga = g,
    Y = ga,
    _a = 'Expected a function';
  function M(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(_a);
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
  var $a = M,
    ba = $a,
    ya = 500;
  function ma(e) {
    var t = ba(e, function (a) {
        return r.size === ya && r.clear(), a;
      }),
      r = t.cache;
    return t;
  }
  var Ca = ma,
    Sa = Ca,
    wa =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Pa = /\\(\\)?/g,
    Ta = Sa(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(wa, function (r, a, n, i) {
          t.push(n ? i.replace(Pa, '$1') : a || r);
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
    Ea = y,
    Fa = E,
    ja = 1 / 0,
    ee = Q ? Q.prototype : void 0,
    te = ee ? ee.toString : void 0;
  function re(e) {
    if (typeof e == 'string') return e;
    if (Ea(e)) return Aa(e, re) + '';
    if (Fa(e)) return te ? te.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -ja ? '-0' : t;
  }
  var Ma = re,
    Da = Ma;
  function Na(e) {
    return e == null ? '' : Da(e);
  }
  var Ga = Na,
    Ba = y,
    Ha = ut,
    za = Oa,
    Ra = Ga;
  function Ua(e, t) {
    return Ba(e) ? e : Ha(e, t) ? [e] : za(Ra(e));
  }
  var x = Ua,
    Ka = E,
    La = 1 / 0;
  function Va(e) {
    if (typeof e == 'string' || Ka(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -La ? '-0' : t;
  }
  var D = Va,
    qa = x,
    ka = D;
  function Wa(e, t) {
    t = qa(t, e);
    for (var r = 0, a = t.length; e != null && r < a; ) e = e[ka(t[r++])];
    return r && r == a ? e : void 0;
  }
  var Ja = Wa,
    Xa = p,
    Za = (function () {
      try {
        var e = Xa(Object, 'defineProperty');
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
    tn = J,
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
  function cn(e, t) {
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
  var ie = cn,
    ln = on,
    fn = x,
    vn = ie,
    oe = F,
    pn = D;
  function hn(e, t, r, a) {
    if (!oe(e)) return e;
    t = fn(t, e);
    for (var n = -1, i = t.length, o = i - 1, s = e; s != null && ++n < i; ) {
      var u = pn(t[n]),
        c = r;
      if (u === '__proto__' || u === 'constructor' || u === 'prototype')
        return e;
      if (n != o) {
        var w = s[u];
        (c = a ? a(w, u, s) : void 0),
          c === void 0 && (c = oe(w) ? w : vn(t[n + 1]) ? [] : {});
      }
      ln(s, u, c), (s = s[u]);
    }
    return e;
  }
  var dn = hn,
    gn = Ja,
    _n = dn,
    $n = x;
  function bn(e, t, r) {
    for (var a = -1, n = t.length, i = {}; ++a < n; ) {
      var o = t[a],
        s = gn(e, o);
      r(s, o) && _n(i, $n(o, e), s);
    }
    return i;
  }
  var yn = bn;
  function mn(e, t) {
    return e != null && t in Object(e);
  }
  var Cn = mn,
    Sn = P,
    wn = A,
    Pn = '[object Arguments]';
  function Tn(e) {
    return wn(e) && Sn(e) == Pn;
  }
  var On = Tn,
    se = On,
    In = A,
    ue = Object.prototype,
    xn = ue.hasOwnProperty,
    An = ue.propertyIsEnumerable,
    En = se(
      (function () {
        return arguments;
      })(),
    )
      ? se
      : function (e) {
          return In(e) && xn.call(e, 'callee') && !An.call(e, 'callee');
        },
    ce = En,
    Fn = 9007199254740991;
  function jn(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Fn;
  }
  var Mn = jn,
    Dn = x,
    Nn = ce,
    Gn = y,
    Bn = ie,
    Hn = Mn,
    zn = D;
  function Rn(e, t, r) {
    t = Dn(t, e);
    for (var a = -1, n = t.length, i = !1; ++a < n; ) {
      var o = zn(t[a]);
      if (!(i = e != null && r(e, o))) break;
      e = e[o];
    }
    return i || ++a != n
      ? i
      : ((n = e == null ? 0 : e.length),
        !!n && Hn(n) && Bn(o, n) && (Gn(e) || Nn(e)));
  }
  var Un = Rn,
    Kn = Cn,
    Ln = Un;
  function Vn(e, t) {
    return e != null && Ln(e, t, Kn);
  }
  var qn = Vn,
    kn = yn,
    Wn = qn;
  function Jn(e, t) {
    return kn(e, t, function (r, a) {
      return Wn(e, a);
    });
  }
  var Xn = Jn;
  function Zn(e, t) {
    for (var r = -1, a = t.length, n = e.length; ++r < a; ) e[n + r] = t[r];
    return e;
  }
  var Yn = Zn,
    le = m,
    Qn = ce,
    ei = y,
    fe = le ? le.isConcatSpreadable : void 0;
  function ti(e) {
    return ei(e) || Qn(e) || !!(fe && e && e[fe]);
  }
  var ri = ti,
    ai = Yn,
    ni = ri;
  function ve(e, t, r, a, n) {
    var i = -1,
      o = e.length;
    for (r || (r = ni), n || (n = []); ++i < o; ) {
      var s = e[i];
      t > 0 && r(s)
        ? t > 1
          ? ve(s, t - 1, r, a, n)
          : ai(n, s)
        : a || (n[n.length] = s);
    }
    return n;
  }
  var ii = ve,
    oi = ii;
  function si(e) {
    var t = e == null ? 0 : e.length;
    return t ? oi(e, 1) : [];
  }
  var ui = si;
  function ci(e, t, r) {
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
  var li = ci,
    fi = li,
    pe = Math.max;
  function vi(e, t, r) {
    return (
      (t = pe(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var a = arguments, n = -1, i = pe(a.length - t, 0), o = Array(i);
          ++n < i;

        )
          o[n] = a[t + n];
        n = -1;
        for (var s = Array(t + 1); ++n < t; ) s[n] = a[n];
        return (s[t] = r(o)), fi(e, this, s);
      }
    );
  }
  var pi = vi;
  function hi(e) {
    return function () {
      return e;
    };
  }
  var di = hi;
  function gi(e) {
    return e;
  }
  var _i = gi,
    $i = di,
    he = ae,
    bi = _i,
    yi = he
      ? function (e, t) {
          return he(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: $i(t),
            writable: !0,
          });
        }
      : bi,
    mi = yi,
    Ci = 800,
    Si = 16,
    wi = Date.now;
  function Pi(e) {
    var t = 0,
      r = 0;
    return function () {
      var a = wi(),
        n = Si - (a - r);
      if (((r = a), n > 0)) {
        if (++t >= Ci) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var Ti = Pi,
    Oi = mi,
    Ii = Ti,
    xi = Ii(Oi),
    Ai = xi,
    Ei = ui,
    Fi = pi,
    ji = Ai;
  function Mi(e) {
    return ji(Fi(e, void 0, Ei), e + '');
  }
  var Di = Mi,
    Ni = Xn,
    Gi = Di;
  Gi(function (e, t) {
    return e == null ? {} : Ni(e, t);
  });
  var de = { exports: {} };
  function Bi() {
    return !1;
  }
  var Hi = Bi;
  (function (e, t) {
    var r = l,
      a = Hi,
      n = t && !t.nodeType && t,
      i = n && !0 && e && !e.nodeType && e,
      o = i && i.exports === n,
      s = o ? r.Buffer : void 0,
      u = s ? s.isBuffer : void 0,
      c = u || a;
    e.exports = c;
  })(de, de.exports);
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
  var _e = { exports: {} };
  (function (e, t) {
    var r = l,
      a = t && !t.nodeType && t,
      n = a && !0 && e && !e.nodeType && e,
      i = n && n.exports === a,
      o = i ? r.Buffer : void 0,
      s = o ? o.allocUnsafe : void 0;
    function u(c, w) {
      if (w) return c.slice();
      var Ee = c.length,
        Fe = s ? s(Ee) : new c.constructor(Ee);
      return c.copy(Fe), Fe;
    }
    e.exports = u;
  })(_e, _e.exports);
  var zi = p,
    Ri = l,
    Ui = zi(Ri, 'DataView'),
    Ki = Ui,
    Li = p,
    Vi = l,
    qi = Li(Vi, 'Promise'),
    ki = qi,
    Wi = p,
    Ji = l,
    Xi = Wi(Ji, 'Set'),
    Zi = Xi,
    Yi = p,
    Qi = l,
    eo = Yi(Qi, 'WeakMap'),
    to = eo,
    N = Ki,
    G = X,
    B = ki,
    H = Zi,
    z = to,
    $e = P,
    _ = k,
    be = '[object Map]',
    ro = '[object Object]',
    ye = '[object Promise]',
    me = '[object Set]',
    Ce = '[object WeakMap]',
    Se = '[object DataView]',
    ao = _(N),
    no = _(G),
    io = _(B),
    oo = _(H),
    so = _(z),
    $ = $e;
  ((N && $(new N(new ArrayBuffer(1))) != Se) ||
    (G && $(new G()) != be) ||
    (B && $(B.resolve()) != ye) ||
    (H && $(new H()) != me) ||
    (z && $(new z()) != Ce)) &&
    ($ = function (e) {
      var t = $e(e),
        r = t == ro ? e.constructor : void 0,
        a = r ? _(r) : '';
      if (a)
        switch (a) {
          case ao:
            return Se;
          case no:
            return be;
          case io:
            return ye;
          case oo:
            return me;
          case so:
            return Ce;
        }
      return t;
    });
  var uo = l;
  uo.Uint8Array;
  var we = m,
    Pe = we ? we.prototype : void 0;
  Pe && Pe.valueOf;
  var Te = S.exports;
  Te && Te.isMap;
  var Oe = S.exports;
  Oe && Oe.isSet;
  var co = { exports: {} };
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
            } else if (o === 'object')
              if (i.toString === Object.prototype.toString)
                for (var u in i) t.call(i, u) && i[u] && a.push(u);
              else a.push(i.toString());
          }
        }
        return a.join(' ');
      }
      e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
    })();
  })(co);
  const v = '[vue3-aipage-widget]';
  var Ie;
  (function (e) {
    (e.react = 'react'),
      (e.vue2 = 'vue2'),
      (e.vue3 = 'vue3'),
      (e.jquery = 'jquery');
  })(Ie || (Ie = {}));
  function lo(e) {
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
                    `${v}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6\u5206\u7C7B\uFF08tags\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
                  )
                : (r.pluginIcon || (r.pluginIcon = 'cards-plugin'),
                  r.type || (r.type = 'element'),
                  (t = !0))
              : console.error(
                  `${v}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6\u63CF\u8FF0\uFF08description\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
                )
            : console.error(
                `${v}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u6E32\u67D3\u5668ID\uFF08componentId\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
              )
          : console.error(
              `${v}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6ID\uFF08id\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
            )
        : console.error(
            `${v}\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u63D2\u4EF6\u540D\u79F0\uFF08name\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
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
  function vo(e) {
    return `-${e}`.replace(/(-[A-Za-z0-9])/g, (t) =>
      t.toUpperCase().replace('-', ''),
    );
  }
  function po(e) {
    return (
      lo(e) &&
        window &&
        window.postMessage &&
        ho(e.id, e) &&
        (console.info(
          `${v}\u89E6\u53D1\u6CE8\u518C\u81EA\u5B9A\u4E49\u63D2\u4EF6(${e.name})\u4E8B\u4EF6:`,
          e,
        ),
        window.postMessage(
          {
            type: 'aipage-editor-register-plugin-event',
            eventMsg: `${v}\u6CE8\u518C\u4E00\u4E2A\u81EA\u5B9A\u4E49aipage-editor\u63D2\u4EF6`,
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
    const r = vo(e);
    if (window.AIPageEditorCustomPlugins[r])
      console.error(
        `${v}\u6CE8\u518C\u81EA\u5B9A\u4E49\u63D2\u4EF6\u5931\u8D25\uFF0C\u5DF2\u5B58\u5728\u540C\u540D\u63D2\u4EF6(${e})\u3002`,
      );
    else return (window.AIPageEditorCustomPlugins[r] = t), r;
    return null;
  }
  (Ae = window.matchMedia) == null ||
    Ae.call(window, '(max-width: 768px)').matches;
  const xe = {
    name: '\u4FE1\u606F\u5361\u7247',
    description: 'uniapp\u7248\u4FE1\u606F\u5C55\u793A\u5361\u7247',
    componentId: 'uni-info-card',
    id: 'uni-info-card',
    tags: ['\u8DE8\u7AEF\u7EC4\u4EF6'],
    pluginIcon: 'cards-plugin',
    order: 1,
    type: 'element',
    device: ['mobile', 'app'],
    docLink: '',
    demoProperties: {
      componentId: 'uni-info-card',
      type: 'element',
      componentProperties: { data: {}, style: {} },
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
                  type: 'textarea',
                  name: 'data.title',
                  label: 'uni\u5361\u7247title',
                  value:
                    'amis \u662F\u4E00\u4E2A\u4F4E\u4EE3\u7801\u524D\u7AEF\u6846\u67B6\uFF0C\u5B83\u4F7F\u7528 JSON \u914D\u7F6E\u6765\u751F\u6210\u9875\u9762\uFF0C\u53EF\u4EE5\u51CF\u5C11\u9875\u9762\u5F00\u53D1\u5DE5\u4F5C\u91CF\uFF0C\u6781\u5927\u63D0\u5347\u6548\u7387\u3002',
                },
                {
                  type: 'text',
                  name: 'data.backgroundImage',
                  label: '\u5C55\u793A\u56FE\u7247',
                  value:
                    'https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg',
                },
                {
                  type: 'input-number',
                  name: 'data.img_count',
                  label: '\u56FE\u7247\u6570\u91CF',
                  value: 3,
                },
                {
                  type: 'input-number',
                  name: 'data.comment_count',
                  label: '\u8BC4\u8BBA\u6570',
                  value: 2021,
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
  return po(xe), xe;
});

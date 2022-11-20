(function (f, b) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? (module.exports = b(require('react'), require('vue')))
    : typeof define == 'function' && define.amd
    ? define(['react', 'vue'], b)
    : ((f = typeof globalThis != 'undefined' ? globalThis : f || self),
      (f.plugin = b()));
})(this, function () {
  var Oe;
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
    Ae = typeof f == 'object' && f && f.Object === Object && f,
    R = Ae,
    je = R,
    Me = typeof self == 'object' && self && self.Object === Object && self,
    Be = je || Me || Function('return this')(),
    c = Be,
    Ne = c,
    Ge = Ne.Symbol,
    m = Ge,
    L = m,
    U = Object.prototype,
    He = U.hasOwnProperty,
    ze = U.toString,
    C = L ? L.toStringTag : void 0;
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
  var Le = Re,
    Ue = Object.prototype,
    Ke = Ue.toString;
  function Ve(e) {
    return Ke.call(e);
  }
  var qe = Ve,
    K = m,
    ke = Le,
    Ye = qe,
    We = '[object Null]',
    Xe = '[object Undefined]',
    V = K ? K.toStringTag : void 0;
  function Je(e) {
    return e == null
      ? e === void 0
        ? Xe
        : We
      : V && V in Object(e)
      ? ke(e)
      : Ye(e);
  }
  var w = Je;
  function Ze(e) {
    return e != null && typeof e == 'object';
  }
  var O = Ze,
    Qe = w,
    et = O,
    tt = '[object Symbol]';
  function rt(e) {
    return typeof e == 'symbol' || (et(e) && Qe(e) == tt);
  }
  var I = rt,
    at = y,
    nt = I,
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
  function lt(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var x = lt,
    ct = w,
    ft = x,
    vt = '[object AsyncFunction]',
    pt = '[object Function]',
    ht = '[object GeneratorFunction]',
    dt = '[object Proxy]';
  function gt(e) {
    if (!ft(e)) return !1;
    var t = ct(e);
    return t == pt || t == ht || t == vt || t == dt;
  }
  var _t = gt,
    $t = c,
    bt = $t['__core-js_shared__'],
    yt = bt,
    A = yt,
    q = (function () {
      var e = /[^.]+$/.exec((A && A.keys && A.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function mt(e) {
    return !!q && q in e;
  }
  var Ct = mt,
    St = Function.prototype,
    Ft = St.toString;
  function wt(e) {
    if (e != null) {
      try {
        return Ft.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var k = wt,
    Dt = _t,
    Et = Ct,
    Pt = x,
    Tt = k,
    Ot = /[\\^$.*+?()[\]{}|]/g,
    It = /^\[object .+?Constructor\]$/,
    xt = Function.prototype,
    At = Object.prototype,
    jt = xt.toString,
    Mt = At.hasOwnProperty,
    Bt = RegExp(
      '^' +
        jt
          .call(Mt)
          .replace(Ot, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function Nt(e) {
    if (!Pt(e) || Et(e)) return !1;
    var t = Dt(e) ? Bt : It;
    return t.test(Tt(e));
  }
  var Gt = Nt;
  function Ht(e, t) {
    return e == null ? void 0 : e[t];
  }
  var zt = Ht,
    Rt = Gt,
    Lt = zt;
  function Ut(e, t) {
    var r = Lt(e, t);
    return Rt(r) ? r : void 0;
  }
  var p = Ut,
    Kt = p,
    Vt = Kt(Object, 'create'),
    D = Vt,
    Y = D;
  function qt() {
    (this.__data__ = Y ? Y(null) : {}), (this.size = 0);
  }
  var kt = qt;
  function Yt(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var Wt = Yt,
    Xt = D,
    Jt = '__lodash_hash_undefined__',
    Zt = Object.prototype,
    Qt = Zt.hasOwnProperty;
  function er(e) {
    var t = this.__data__;
    if (Xt) {
      var r = t[e];
      return r === Jt ? void 0 : r;
    }
    return Qt.call(t, e) ? t[e] : void 0;
  }
  var tr = er,
    rr = D,
    ar = Object.prototype,
    nr = ar.hasOwnProperty;
  function ir(e) {
    var t = this.__data__;
    return rr ? t[e] !== void 0 : nr.call(t, e);
  }
  var or = ir,
    sr = D,
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
    vr = Wt,
    pr = tr,
    hr = or,
    dr = cr;
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
  var W = br,
    yr = W;
  function mr(e, t) {
    for (var r = e.length; r--; ) if (yr(e[r][0], t)) return r;
    return -1;
  }
  var E = mr,
    Cr = E,
    Sr = Array.prototype,
    Fr = Sr.splice;
  function wr(e) {
    var t = this.__data__,
      r = Cr(t, e);
    if (r < 0) return !1;
    var a = t.length - 1;
    return r == a ? t.pop() : Fr.call(t, r, 1), --this.size, !0;
  }
  var Dr = wr,
    Er = E;
  function Pr(e) {
    var t = this.__data__,
      r = Er(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var Tr = Pr,
    Or = E;
  function Ir(e) {
    return Or(this.__data__, e) > -1;
  }
  var xr = Ir,
    Ar = E;
  function jr(e, t) {
    var r = this.__data__,
      a = Ar(r, e);
    return a < 0 ? (++this.size, r.push([e, t])) : (r[a][1] = t), this;
  }
  var Mr = jr,
    Br = $r,
    Nr = Dr,
    Gr = Tr,
    Hr = xr,
    zr = Mr;
  function d(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  (d.prototype.clear = Br),
    (d.prototype.delete = Nr),
    (d.prototype.get = Gr),
    (d.prototype.has = Hr),
    (d.prototype.set = zr);
  var Rr = d,
    Lr = p,
    Ur = c,
    Kr = Lr(Ur, 'Map'),
    X = Kr,
    J = gr,
    Vr = Rr,
    qr = X;
  function kr() {
    (this.size = 0),
      (this.__data__ = {
        hash: new J(),
        map: new (qr || Vr)(),
        string: new J(),
      });
  }
  var Yr = kr;
  function Wr(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  var Xr = Wr,
    Jr = Xr;
  function Zr(e, t) {
    var r = e.__data__;
    return Jr(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
  }
  var P = Zr,
    Qr = P;
  function ea(e) {
    var t = Qr(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var ta = ea,
    ra = P;
  function aa(e) {
    return ra(this, e).get(e);
  }
  var na = aa,
    ia = P;
  function oa(e) {
    return ia(this, e).has(e);
  }
  var sa = oa,
    ua = P;
  function la(e, t) {
    var r = ua(this, e),
      a = r.size;
    return r.set(e, t), (this.size += r.size == a ? 0 : 1), this;
  }
  var ca = la,
    fa = Yr,
    va = ta,
    pa = na,
    ha = sa,
    da = ca;
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
    Z = ga,
    _a = 'Expected a function';
  function j(e, t) {
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
    return (r.cache = new (j.Cache || Z)()), r;
  }
  j.Cache = Z;
  var $a = j,
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
    Fa =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    wa = /\\(\\)?/g,
    Da = Sa(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(Fa, function (r, a, n, i) {
          t.push(n ? i.replace(wa, '$1') : a || r);
        }),
        t
      );
    }),
    Ea = Da;
  function Pa(e, t) {
    for (var r = -1, a = e == null ? 0 : e.length, n = Array(a); ++r < a; )
      n[r] = t(e[r], r, e);
    return n;
  }
  var Ta = Pa,
    Q = m,
    Oa = Ta,
    Ia = y,
    xa = I,
    Aa = 1 / 0,
    ee = Q ? Q.prototype : void 0,
    te = ee ? ee.toString : void 0;
  function re(e) {
    if (typeof e == 'string') return e;
    if (Ia(e)) return Oa(e, re) + '';
    if (xa(e)) return te ? te.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -Aa ? '-0' : t;
  }
  var ja = re,
    Ma = ja;
  function Ba(e) {
    return e == null ? '' : Ma(e);
  }
  var Na = Ba,
    Ga = y,
    Ha = ut,
    za = Ea,
    Ra = Na;
  function La(e, t) {
    return Ga(e) ? e : Ha(e, t) ? [e] : za(Ra(e));
  }
  var T = La,
    Ua = I,
    Ka = 1 / 0;
  function Va(e) {
    if (typeof e == 'string' || Ua(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -Ka ? '-0' : t;
  }
  var M = Va,
    qa = T,
    ka = M;
  function Ya(e, t) {
    t = qa(t, e);
    for (var r = 0, a = t.length; e != null && r < a; ) e = e[ka(t[r++])];
    return r && r == a ? e : void 0;
  }
  var Wa = Ya,
    Xa = p,
    Ja = (function () {
      try {
        var e = Xa(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch {}
    })(),
    ae = Ja,
    ne = ae;
  function Za(e, t, r) {
    t == '__proto__' && ne
      ? ne(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  var Qa = Za,
    en = Qa,
    tn = W,
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
    fn = T,
    vn = ie,
    oe = x,
    pn = M;
  function hn(e, t, r, a) {
    if (!oe(e)) return e;
    t = fn(t, e);
    for (var n = -1, i = t.length, o = i - 1, s = e; s != null && ++n < i; ) {
      var u = pn(t[n]),
        l = r;
      if (u === '__proto__' || u === 'constructor' || u === 'prototype')
        return e;
      if (n != o) {
        var F = s[u];
        (l = a ? a(F, u, s) : void 0),
          l === void 0 && (l = oe(F) ? F : vn(t[n + 1]) ? [] : {});
      }
      cn(s, u, l), (s = s[u]);
    }
    return e;
  }
  var dn = hn,
    gn = Wa,
    _n = dn,
    $n = T;
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
    Sn = w,
    Fn = O,
    wn = '[object Arguments]';
  function Dn(e) {
    return Fn(e) && Sn(e) == wn;
  }
  var En = Dn,
    se = En,
    Pn = O,
    ue = Object.prototype,
    Tn = ue.hasOwnProperty,
    On = ue.propertyIsEnumerable,
    In = se(
      (function () {
        return arguments;
      })(),
    )
      ? se
      : function (e) {
          return Pn(e) && Tn.call(e, 'callee') && !On.call(e, 'callee');
        },
    le = In,
    xn = 9007199254740991;
  function An(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= xn;
  }
  var jn = An,
    Mn = T,
    Bn = le,
    Nn = y,
    Gn = ie,
    Hn = jn,
    zn = M;
  function Rn(e, t, r) {
    t = Mn(t, e);
    for (var a = -1, n = t.length, i = !1; ++a < n; ) {
      var o = zn(t[a]);
      if (!(i = e != null && r(e, o))) break;
      e = e[o];
    }
    return i || ++a != n
      ? i
      : ((n = e == null ? 0 : e.length),
        !!n && Hn(n) && Gn(o, n) && (Nn(e) || Bn(e)));
  }
  var Ln = Rn,
    Un = Cn,
    Kn = Ln;
  function Vn(e, t) {
    return e != null && Kn(e, t, Un);
  }
  var qn = Vn,
    kn = yn,
    Yn = qn;
  function Wn(e, t) {
    return kn(e, t, function (r, a) {
      return Yn(e, a);
    });
  }
  var Xn = Wn;
  function Jn(e, t) {
    for (var r = -1, a = t.length, n = e.length; ++r < a; ) e[n + r] = t[r];
    return e;
  }
  var Zn = Jn,
    ce = m,
    Qn = le,
    ei = y,
    fe = ce ? ce.isConcatSpreadable : void 0;
  function ti(e) {
    return ei(e) || Qn(e) || !!(fe && e && e[fe]);
  }
  var ri = ti,
    ai = Zn,
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
    Fi = Date.now;
  function wi(e) {
    var t = 0,
      r = 0;
    return function () {
      var a = Fi(),
        n = Si - (a - r);
      if (((r = a), n > 0)) {
        if (++t >= Ci) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var Di = wi,
    Ei = mi,
    Pi = Di,
    Ti = Pi(Ei),
    Oi = Ti,
    Ii = ui,
    xi = pi,
    Ai = Oi;
  function ji(e) {
    return Ai(xi(e, void 0, Ii), e + '');
  }
  var Mi = ji,
    Bi = Xn,
    Ni = Mi;
  Ni(function (e, t) {
    return e == null ? {} : Bi(e, t);
  });
  var de = { exports: {} };
  function Gi() {
    return !1;
  }
  var Hi = Gi;
  (function (e, t) {
    var r = c,
      a = Hi,
      n = t && !t.nodeType && t,
      i = n && !0 && e && !e.nodeType && e,
      o = i && i.exports === n,
      s = o ? r.Buffer : void 0,
      u = s ? s.isBuffer : void 0,
      l = u || a;
    e.exports = l;
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
    var r = c,
      a = t && !t.nodeType && t,
      n = a && !0 && e && !e.nodeType && e,
      i = n && n.exports === a,
      o = i ? r.Buffer : void 0,
      s = o ? o.allocUnsafe : void 0;
    function u(l, F) {
      if (F) return l.slice();
      var Ie = l.length,
        xe = s ? s(Ie) : new l.constructor(Ie);
      return l.copy(xe), xe;
    }
    e.exports = u;
  })(_e, _e.exports);
  var zi = p,
    Ri = c,
    Li = zi(Ri, 'DataView'),
    Ui = Li,
    Ki = p,
    Vi = c,
    qi = Ki(Vi, 'Promise'),
    ki = qi,
    Yi = p,
    Wi = c,
    Xi = Yi(Wi, 'Set'),
    Ji = Xi,
    Zi = p,
    Qi = c,
    eo = Zi(Qi, 'WeakMap'),
    to = eo,
    B = Ui,
    N = X,
    G = ki,
    H = Ji,
    z = to,
    $e = w,
    _ = k,
    be = '[object Map]',
    ro = '[object Object]',
    ye = '[object Promise]',
    me = '[object Set]',
    Ce = '[object WeakMap]',
    Se = '[object DataView]',
    ao = _(B),
    no = _(N),
    io = _(G),
    oo = _(H),
    so = _(z),
    $ = $e;
  ((B && $(new B(new ArrayBuffer(1))) != Se) ||
    (N && $(new N()) != be) ||
    (G && $(G.resolve()) != ye) ||
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
  var uo = c;
  uo.Uint8Array;
  var Fe = m,
    we = Fe ? Fe.prototype : void 0;
  we && we.valueOf;
  var De = S.exports;
  De && De.isMap;
  var Ee = S.exports;
  Ee && Ee.isSet;
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
  })(lo);
  const v = '[vue3-aipage-widget]';
  var Pe;
  (function (e) {
    (e.react = 'react'),
      (e.vue2 = 'vue2'),
      (e.vue3 = 'vue3'),
      (e.jquery = 'jquery');
  })(Pe || (Pe = {}));
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
      co(e) &&
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
  (Oe = window.matchMedia) == null ||
    Oe.call(window, '(max-width: 768px)').matches;
  const Te = {
    name: '\u7269\u6D41\u8282\u70B9',
    description: 'uview\u7248TimeLine\u7EC4\u4EF6\u793A\u4F8B',
    componentId: 'uni-time-line',
    id: 'uni-time-line',
    tags: ['uview\u7EC4\u4EF6'],
    pluginIcon: 'cards-plugin',
    order: 1,
    type: 'element',
    device: ['mobile', 'app'],
    docLink: '',
    demoProperties: {
      componentId: 'uni-time-line',
      type: 'element',
      componentProperties: {
        data: {
          timeLine: [
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
                  name: 'data.timeLine',
                  type: 'setting-list',
                  label: '\u7269\u6D41\u8282\u70B9',
                  mode: 'normal',
                  fullSize: !0,
                  setting: [
                    {
                      type: 'input-text',
                      name: 'status',
                      label: '\u72B6\u6001',
                    },
                    { type: 'textarea', name: 'desc', label: '\u8BE6\u7EC6' },
                    {
                      type: 'input-datetime',
                      name: 'time',
                      label: '\u65F6\u95F4',
                      format: 'YYYY-MM-DD HH:mm',
                    },
                  ],
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
  return po(Te), Te;
});

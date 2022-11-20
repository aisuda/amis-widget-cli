var dc = Object.defineProperty;
var hc = (f, o, v) =>
  o in f
    ? dc(f, o, { enumerable: !0, configurable: !0, writable: !0, value: v })
    : (f[o] = v);
var E = (f, o, v) => (hc(f, typeof o != 'symbol' ? o + '' : o, v), v);
(function (f, o) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? o(require('react'), require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['react', 'vue'], o)
    : ((f = typeof globalThis != 'undefined' ? globalThis : f || self),
      o(f.react, f.vue));
})(this, function (f, o) {
  var ht;
  ('use strict');
  function v(e) {
    return e && typeof e == 'object' && 'default' in e ? e : { default: e };
  }
  var D = v(f),
    N =
      typeof globalThis != 'undefined'
        ? globalThis
        : typeof window != 'undefined'
        ? window
        : typeof global != 'undefined'
        ? global
        : typeof self != 'undefined'
        ? self
        : {},
    gt = Array.isArray,
    T = gt,
    mt = typeof N == 'object' && N && N.Object === Object && N,
    re = mt,
    vt = re,
    _t = typeof self == 'object' && self && self.Object === Object && self,
    bt = vt || _t || Function('return this')(),
    g = bt,
    yt = g,
    $t = yt.Symbol,
    x = $t,
    ne = x,
    ae = Object.prototype,
    St = ae.hasOwnProperty,
    wt = ae.toString,
    C = ne ? ne.toStringTag : void 0;
  function Tt(e) {
    var t = St.call(e, C),
      r = e[C];
    try {
      e[C] = void 0;
      var n = !0;
    } catch {}
    var a = wt.call(e);
    return n && (t ? (e[C] = r) : delete e[C]), a;
  }
  var xt = Tt,
    Ct = Object.prototype,
    Pt = Ct.toString;
  function Ot(e) {
    return Pt.call(e);
  }
  var Mt = Ot,
    oe = x,
    It = xt,
    Et = Mt,
    Nt = '[object Null]',
    kt = '[object Undefined]',
    ie = oe ? oe.toStringTag : void 0;
  function At(e) {
    return e == null
      ? e === void 0
        ? kt
        : Nt
      : ie && ie in Object(e)
      ? It(e)
      : Et(e);
  }
  var k = At;
  function jt(e) {
    return e != null && typeof e == 'object';
  }
  var F = jt,
    Lt = k,
    Bt = F,
    zt = '[object Symbol]';
  function Vt(e) {
    return typeof e == 'symbol' || (Bt(e) && Lt(e) == zt);
  }
  var H = Vt,
    Rt = T,
    Dt = H,
    Ft = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Ht = /^\w*$/;
  function Gt(e, t) {
    if (Rt(e)) return !1;
    var r = typeof e;
    return r == 'number' ||
      r == 'symbol' ||
      r == 'boolean' ||
      e == null ||
      Dt(e)
      ? !0
      : Ht.test(e) || !Ft.test(e) || (t != null && e in Object(t));
  }
  var Ut = Gt;
  function Wt(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var G = Wt,
    Yt = k,
    qt = G,
    Jt = '[object AsyncFunction]',
    Kt = '[object Function]',
    Xt = '[object GeneratorFunction]',
    Zt = '[object Proxy]';
  function Qt(e) {
    if (!qt(e)) return !1;
    var t = Yt(e);
    return t == Kt || t == Xt || t == Jt || t == Zt;
  }
  var er = Qt,
    tr = g,
    rr = tr['__core-js_shared__'],
    nr = rr,
    U = nr,
    se = (function () {
      var e = /[^.]+$/.exec((U && U.keys && U.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function ar(e) {
    return !!se && se in e;
  }
  var or = ar,
    ir = Function.prototype,
    sr = ir.toString;
  function cr(e) {
    if (e != null) {
      try {
        return sr.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var ce = cr,
    lr = er,
    ur = or,
    fr = G,
    pr = ce,
    dr = /[\\^$.*+?()[\]{}|]/g,
    hr = /^\[object .+?Constructor\]$/,
    gr = Function.prototype,
    mr = Object.prototype,
    vr = gr.toString,
    _r = mr.hasOwnProperty,
    br = RegExp(
      '^' +
        vr
          .call(_r)
          .replace(dr, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function yr(e) {
    if (!fr(e) || ur(e)) return !1;
    var t = lr(e) ? br : hr;
    return t.test(pr(e));
  }
  var $r = yr;
  function Sr(e, t) {
    return e == null ? void 0 : e[t];
  }
  var wr = Sr,
    Tr = $r,
    xr = wr;
  function Cr(e, t) {
    var r = xr(e, t);
    return Tr(r) ? r : void 0;
  }
  var _ = Cr,
    Pr = _,
    Or = Pr(Object, 'create'),
    A = Or,
    le = A;
  function Mr() {
    (this.__data__ = le ? le(null) : {}), (this.size = 0);
  }
  var Ir = Mr;
  function Er(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var Nr = Er,
    kr = A,
    Ar = '__lodash_hash_undefined__',
    jr = Object.prototype,
    Lr = jr.hasOwnProperty;
  function Br(e) {
    var t = this.__data__;
    if (kr) {
      var r = t[e];
      return r === Ar ? void 0 : r;
    }
    return Lr.call(t, e) ? t[e] : void 0;
  }
  var zr = Br,
    Vr = A,
    Rr = Object.prototype,
    Dr = Rr.hasOwnProperty;
  function Fr(e) {
    var t = this.__data__;
    return Vr ? t[e] !== void 0 : Dr.call(t, e);
  }
  var Hr = Fr,
    Gr = A,
    Ur = '__lodash_hash_undefined__';
  function Wr(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = Gr && t === void 0 ? Ur : t),
      this
    );
  }
  var Yr = Wr,
    qr = Ir,
    Jr = Nr,
    Kr = zr,
    Xr = Hr,
    Zr = Yr;
  function b(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (b.prototype.clear = qr),
    (b.prototype.delete = Jr),
    (b.prototype.get = Kr),
    (b.prototype.has = Xr),
    (b.prototype.set = Zr);
  var Qr = b;
  function en() {
    (this.__data__ = []), (this.size = 0);
  }
  var tn = en;
  function rn(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var ue = rn,
    nn = ue;
  function an(e, t) {
    for (var r = e.length; r--; ) if (nn(e[r][0], t)) return r;
    return -1;
  }
  var j = an,
    on = j,
    sn = Array.prototype,
    cn = sn.splice;
  function ln(e) {
    var t = this.__data__,
      r = on(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : cn.call(t, r, 1), --this.size, !0;
  }
  var un = ln,
    fn = j;
  function pn(e) {
    var t = this.__data__,
      r = fn(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var dn = pn,
    hn = j;
  function gn(e) {
    return hn(this.__data__, e) > -1;
  }
  var mn = gn,
    vn = j;
  function _n(e, t) {
    var r = this.__data__,
      n = vn(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  var bn = _n,
    yn = tn,
    $n = un,
    Sn = dn,
    wn = mn,
    Tn = bn;
  function y(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (y.prototype.clear = yn),
    (y.prototype.delete = $n),
    (y.prototype.get = Sn),
    (y.prototype.has = wn),
    (y.prototype.set = Tn);
  var xn = y,
    Cn = _,
    Pn = g,
    On = Cn(Pn, 'Map'),
    fe = On,
    pe = Qr,
    Mn = xn,
    In = fe;
  function En() {
    (this.size = 0),
      (this.__data__ = {
        hash: new pe(),
        map: new (In || Mn)(),
        string: new pe(),
      });
  }
  var Nn = En;
  function kn(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  var An = kn,
    jn = An;
  function Ln(e, t) {
    var r = e.__data__;
    return jn(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
  }
  var L = Ln,
    Bn = L;
  function zn(e) {
    var t = Bn(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var Vn = zn,
    Rn = L;
  function Dn(e) {
    return Rn(this, e).get(e);
  }
  var Fn = Dn,
    Hn = L;
  function Gn(e) {
    return Hn(this, e).has(e);
  }
  var Un = Gn,
    Wn = L;
  function Yn(e, t) {
    var r = Wn(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  var qn = Yn,
    Jn = Nn,
    Kn = Vn,
    Xn = Fn,
    Zn = Un,
    Qn = qn;
  function $(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  ($.prototype.clear = Jn),
    ($.prototype.delete = Kn),
    ($.prototype.get = Xn),
    ($.prototype.has = Zn),
    ($.prototype.set = Qn);
  var ea = $,
    de = ea,
    ta = 'Expected a function';
  function W(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(ta);
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        i = r.cache;
      if (i.has(a)) return i.get(a);
      var s = e.apply(this, n);
      return (r.cache = i.set(a, s) || i), s;
    };
    return (r.cache = new (W.Cache || de)()), r;
  }
  W.Cache = de;
  var ra = W,
    na = ra,
    aa = 500;
  function oa(e) {
    var t = na(e, function (n) {
        return r.size === aa && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var ia = oa,
    sa = ia,
    ca =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    la = /\\(\\)?/g,
    ua = sa(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(ca, function (r, n, a, i) {
          t.push(a ? i.replace(la, '$1') : n || r);
        }),
        t
      );
    }),
    fa = ua;
  function pa(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
      a[r] = t(e[r], r, e);
    return a;
  }
  var da = pa,
    he = x,
    ha = da,
    ga = T,
    ma = H,
    va = 1 / 0,
    ge = he ? he.prototype : void 0,
    me = ge ? ge.toString : void 0;
  function ve(e) {
    if (typeof e == 'string') return e;
    if (ga(e)) return ha(e, ve) + '';
    if (ma(e)) return me ? me.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -va ? '-0' : t;
  }
  var _a = ve,
    ba = _a;
  function ya(e) {
    return e == null ? '' : ba(e);
  }
  var $a = ya,
    Sa = T,
    wa = Ut,
    Ta = fa,
    xa = $a;
  function Ca(e, t) {
    return Sa(e) ? e : wa(e, t) ? [e] : Ta(xa(e));
  }
  var B = Ca,
    Pa = H,
    Oa = 1 / 0;
  function Ma(e) {
    if (typeof e == 'string' || Pa(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -Oa ? '-0' : t;
  }
  var Y = Ma,
    Ia = B,
    Ea = Y;
  function Na(e, t) {
    t = Ia(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[Ea(t[r++])];
    return r && r == n ? e : void 0;
  }
  var ka = Na,
    Aa = _,
    ja = (function () {
      try {
        var e = Aa(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch {}
    })(),
    _e = ja,
    be = _e;
  function La(e, t, r) {
    t == '__proto__' && be
      ? be(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  var Ba = La,
    za = Ba,
    Va = ue,
    Ra = Object.prototype,
    Da = Ra.hasOwnProperty;
  function Fa(e, t, r) {
    var n = e[t];
    (!(Da.call(e, t) && Va(n, r)) || (r === void 0 && !(t in e))) &&
      za(e, t, r);
  }
  var Ha = Fa,
    Ga = 9007199254740991,
    Ua = /^(?:0|[1-9]\d*)$/;
  function Wa(e, t) {
    var r = typeof e;
    return (
      (t = t == null ? Ga : t),
      !!t &&
        (r == 'number' || (r != 'symbol' && Ua.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var ye = Wa,
    Ya = Ha,
    qa = B,
    Ja = ye,
    $e = G,
    Ka = Y;
  function Xa(e, t, r, n) {
    if (!$e(e)) return e;
    t = qa(t, e);
    for (var a = -1, i = t.length, s = i - 1, c = e; c != null && ++a < i; ) {
      var l = Ka(t[a]),
        u = r;
      if (l === '__proto__' || l === 'constructor' || l === 'prototype')
        return e;
      if (a != s) {
        var h = c[l];
        (u = n ? n(h, l, c) : void 0),
          u === void 0 && (u = $e(h) ? h : Ja(t[a + 1]) ? [] : {});
      }
      Ya(c, l, u), (c = c[l]);
    }
    return e;
  }
  var Za = Xa,
    Qa = ka,
    eo = Za,
    to = B;
  function ro(e, t, r) {
    for (var n = -1, a = t.length, i = {}; ++n < a; ) {
      var s = t[n],
        c = Qa(e, s);
      r(c, s) && eo(i, to(s, e), c);
    }
    return i;
  }
  var no = ro;
  function ao(e, t) {
    return e != null && t in Object(e);
  }
  var oo = ao,
    io = k,
    so = F,
    co = '[object Arguments]';
  function lo(e) {
    return so(e) && io(e) == co;
  }
  var uo = lo,
    Se = uo,
    fo = F,
    we = Object.prototype,
    po = we.hasOwnProperty,
    ho = we.propertyIsEnumerable,
    go = Se(
      (function () {
        return arguments;
      })(),
    )
      ? Se
      : function (e) {
          return fo(e) && po.call(e, 'callee') && !ho.call(e, 'callee');
        },
    Te = go,
    mo = 9007199254740991;
  function vo(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= mo;
  }
  var _o = vo,
    bo = B,
    yo = Te,
    $o = T,
    So = ye,
    wo = _o,
    To = Y;
  function xo(e, t, r) {
    t = bo(t, e);
    for (var n = -1, a = t.length, i = !1; ++n < a; ) {
      var s = To(t[n]);
      if (!(i = e != null && r(e, s))) break;
      e = e[s];
    }
    return i || ++n != a
      ? i
      : ((a = e == null ? 0 : e.length),
        !!a && wo(a) && So(s, a) && ($o(e) || yo(e)));
  }
  var Co = xo,
    Po = oo,
    Oo = Co;
  function Mo(e, t) {
    return e != null && Oo(e, t, Po);
  }
  var Io = Mo,
    Eo = no,
    No = Io;
  function ko(e, t) {
    return Eo(e, t, function (r, n) {
      return No(e, n);
    });
  }
  var Ao = ko;
  function jo(e, t) {
    for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
    return e;
  }
  var Lo = jo,
    xe = x,
    Bo = Te,
    zo = T,
    Ce = xe ? xe.isConcatSpreadable : void 0;
  function Vo(e) {
    return zo(e) || Bo(e) || !!(Ce && e && e[Ce]);
  }
  var Ro = Vo,
    Do = Lo,
    Fo = Ro;
  function Pe(e, t, r, n, a) {
    var i = -1,
      s = e.length;
    for (r || (r = Fo), a || (a = []); ++i < s; ) {
      var c = e[i];
      t > 0 && r(c)
        ? t > 1
          ? Pe(c, t - 1, r, n, a)
          : Do(a, c)
        : n || (a[a.length] = c);
    }
    return a;
  }
  var Ho = Pe,
    Go = Ho;
  function Uo(e) {
    var t = e == null ? 0 : e.length;
    return t ? Go(e, 1) : [];
  }
  var Wo = Uo;
  function Yo(e, t, r) {
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
  var qo = Yo,
    Jo = qo,
    Oe = Math.max;
  function Ko(e, t, r) {
    return (
      (t = Oe(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var n = arguments, a = -1, i = Oe(n.length - t, 0), s = Array(i);
          ++a < i;

        )
          s[a] = n[t + a];
        a = -1;
        for (var c = Array(t + 1); ++a < t; ) c[a] = n[a];
        return (c[t] = r(s)), Jo(e, this, c);
      }
    );
  }
  var Xo = Ko;
  function Zo(e) {
    return function () {
      return e;
    };
  }
  var Qo = Zo;
  function ei(e) {
    return e;
  }
  var ti = ei,
    ri = Qo,
    Me = _e,
    ni = ti,
    ai = Me
      ? function (e, t) {
          return Me(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: ri(t),
            writable: !0,
          });
        }
      : ni,
    oi = ai,
    ii = 800,
    si = 16,
    ci = Date.now;
  function li(e) {
    var t = 0,
      r = 0;
    return function () {
      var n = ci(),
        a = si - (n - r);
      if (((r = n), a > 0)) {
        if (++t >= ii) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var ui = li,
    fi = oi,
    pi = ui,
    di = pi(fi),
    hi = di,
    gi = Wo,
    mi = Xo,
    vi = hi;
  function _i(e) {
    return vi(mi(e, void 0, gi), e + '');
  }
  var bi = _i,
    yi = Ao,
    $i = bi;
  $i(function (e, t) {
    return e == null ? {} : yi(e, t);
  });
  var Ie = { exports: {} };
  function Si() {
    return !1;
  }
  var wi = Si;
  (function (e, t) {
    var r = g,
      n = wi,
      a = t && !t.nodeType && t,
      i = a && !0 && e && !e.nodeType && e,
      s = i && i.exports === a,
      c = s ? r.Buffer : void 0,
      l = c ? c.isBuffer : void 0,
      u = l || n;
    e.exports = u;
  })(Ie, Ie.exports);
  var P = { exports: {} };
  (function (e, t) {
    var r = re,
      n = t && !t.nodeType && t,
      a = n && !0 && e && !e.nodeType && e,
      i = a && a.exports === n,
      s = i && r.process,
      c = (function () {
        try {
          var l = a && a.require && a.require('util').types;
          return l || (s && s.binding && s.binding('util'));
        } catch {}
      })();
    e.exports = c;
  })(P, P.exports);
  var Ee = P.exports;
  Ee && Ee.isTypedArray;
  var Ne = { exports: {} };
  (function (e, t) {
    var r = g,
      n = t && !t.nodeType && t,
      a = n && !0 && e && !e.nodeType && e,
      i = a && a.exports === n,
      s = i ? r.Buffer : void 0,
      c = s ? s.allocUnsafe : void 0;
    function l(u, h) {
      if (h) return u.slice();
      var p = u.length,
        d = c ? c(p) : new u.constructor(p);
      return u.copy(d), d;
    }
    e.exports = l;
  })(Ne, Ne.exports);
  var Ti = _,
    xi = g,
    Ci = Ti(xi, 'DataView'),
    Pi = Ci,
    Oi = _,
    Mi = g,
    Ii = Oi(Mi, 'Promise'),
    Ei = Ii,
    Ni = _,
    ki = g,
    Ai = Ni(ki, 'Set'),
    ji = Ai,
    Li = _,
    Bi = g,
    zi = Li(Bi, 'WeakMap'),
    Vi = zi,
    q = Pi,
    J = fe,
    K = Ei,
    X = ji,
    Z = Vi,
    ke = k,
    S = ce,
    Ae = '[object Map]',
    Ri = '[object Object]',
    je = '[object Promise]',
    Le = '[object Set]',
    Be = '[object WeakMap]',
    ze = '[object DataView]',
    Di = S(q),
    Fi = S(J),
    Hi = S(K),
    Gi = S(X),
    Ui = S(Z),
    w = ke;
  ((q && w(new q(new ArrayBuffer(1))) != ze) ||
    (J && w(new J()) != Ae) ||
    (K && w(K.resolve()) != je) ||
    (X && w(new X()) != Le) ||
    (Z && w(new Z()) != Be)) &&
    (w = function (e) {
      var t = ke(e),
        r = t == Ri ? e.constructor : void 0,
        n = r ? S(r) : '';
      if (n)
        switch (n) {
          case Di:
            return ze;
          case Fi:
            return Ae;
          case Hi:
            return je;
          case Gi:
            return Le;
          case Ui:
            return Be;
        }
      return t;
    });
  var Wi = g;
  Wi.Uint8Array;
  var Ve = x,
    Re = Ve ? Ve.prototype : void 0;
  Re && Re.valueOf;
  var De = P.exports;
  De && De.isMap;
  var Fe = P.exports;
  Fe && Fe.isSet;
  var Yi = { exports: {} };
  /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function r() {
        for (var n = [], a = 0; a < arguments.length; a++) {
          var i = arguments[a];
          if (!!i) {
            var s = typeof i;
            if (s === 'string' || s === 'number') n.push(i);
            else if (Array.isArray(i)) {
              if (i.length) {
                var c = r.apply(null, i);
                c && n.push(c);
              }
            } else if (s === 'object')
              if (i.toString === Object.prototype.toString)
                for (var l in i) t.call(i, l) && i[l] && n.push(l);
              else n.push(i.toString());
          }
        }
        return n.join(' ');
      }
      e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
    })();
  })(Yi);
  const z = '[vue3-aipage-widget]';
  function qi(e) {
    let t = m.react;
    if (!e) return t;
    let r = e.toLowerCase().trim();
    switch (r) {
      case 'jquery':
      case 'jq':
        r = m.jquery;
        break;
      case 'vue2':
      case 'vue 2':
      case 'vue2.0':
      case 'vue 2.0':
        (r = m.vue2),
          console.error(
            'vue3-aipage-widget \u4E0D\u652F\u6301 vue2.0 \u6280\u672F\u6808\uFF0C\u8BF7\u6539\u7528aipage-widget\u652F\u6301\u3002',
          );
        break;
      case 'vue':
      case 'vue3':
      case 'vue 3':
      case 'vue3.0':
      case 'vue 3.0':
        r = m.vue3;
        break;
      default:
        r = m.react;
    }
    return r;
  }
  var m;
  (function (e) {
    (e.react = 'react'),
      (e.vue2 = 'vue2'),
      (e.vue3 = 'vue3'),
      (e.jquery = 'jquery');
  })(m || (m = {}));
  function Ji(e) {
    return Object.prototype.toString.call(e).slice(8, -1) === 'String';
  }
  function Ki(e) {
    return `-${e}`.replace(/(-[A-Za-z0-9])/g, (t) =>
      t.toUpperCase().replace('-', ''),
    );
  }
  function Xi(e, t = !0) {
    const r =
      e && e.__super
        ? Object.create(e.__super, {
            __super: { value: e.__super, writable: !1, enumerable: !1 },
          })
        : Object.create(Object.prototype);
    return t && e && Object.keys(e).forEach((n) => (r[n] = e[n])), r;
  }
  function Zi(e, t, r = !0) {
    const n = Xi(e, r);
    return t && Object.keys(t).forEach((a) => (n[a] = t[a])), n;
  }
  function Qi(e) {
    if (!e || (typeof e != 'function' && typeof e != 'object')) return;
    class t extends D.default.Component {
      constructor(a) {
        super(a);
        E(this, 'domRef');
        E(this, 'app');
        E(this, 'vm');
        E(this, 'isUnmount');
        (this.domRef = D.default.createRef()),
          (this.resolveAmisProps = this.resolveAmisProps.bind(this));
      }
      componentDidMount() {
        const { amisData: a, amisFunc: i } = this.resolveAmisProps(),
          { data: s, ...c } = (e = typeof e == 'function' ? new e() : e);
        (this.app = o.createApp({
          data: () => Zi(a, typeof s == 'function' ? s() : s),
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
        return D.default.createElement('div', { ref: this.domRef });
      }
    }
    return t;
  }
  function es(e, t) {
    if (!e) return;
    const r = { type: '', framework: m.react };
    if (
      (t && Ji(t) ? Object.assign(r, { type: t }) : Object.assign(r, t),
      r && !r.type)
    )
      console.error(
        `${z}\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7C7B\u578B\uFF08type\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
      );
    else {
      r.framework = qi(r.framework);
      const a = { react: (i) => i, vue3: Qi }[r.framework](e);
      if (window) {
        const i = ts(r.type, a);
        i &&
          (console.info(
            `${z}\u89E6\u53D1\u6CE8\u518C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668(${r.type})\u4E8B\u4EF6:`,
            { type: r.type, component: a, framework: r.framework },
          ),
          window.postMessage(
            {
              type: 'aipage-editor-register-renderer-event',
              eventMsg: `${z}\u6CE8\u518C\u4E00\u4E2A\u81EA\u5B9A\u4E49aipage-editor\u6E32\u67D3\u5668`,
              customComponentId: i,
            },
            '*',
          ));
      }
    }
  }
  function ts(e, t) {
    window &&
      !window.AIPageEditorCustomRenderers &&
      (window.AIPageEditorCustomRenderers = {});
    const r = Ki(e);
    if (window.AIPageEditorCustomRenderers[r])
      console.error(
        `${z}\u6CE8\u518C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\u5931\u8D25\uFF0C\u5DF2\u5B58\u5728\u540C\u540D\u6E32\u67D3\u5668\u7C7B\u578B(${e})\u3002`,
      );
    else return (window.AIPageEditorCustomRenderers[r] = t), r;
    return null;
  }
  (ht = window.matchMedia) == null ||
    ht.call(window, '(max-width: 768px)').matches;
  var gc = '',
    mc = '';
  const O = Object.assign,
    rs = Object.prototype.hasOwnProperty,
    ns = (e, t) => rs.call(e, t),
    as = (e) => typeof e == 'function',
    He = (e) => typeof e == 'string',
    os = Object.prototype.toString,
    is = (e) => os.call(e),
    Ge = (e) => is(e) === '[object Object]',
    Ue = `
`,
    ss = /^([a-z-]+:)?\/\//i,
    cs = /^data:.*,.*/;
  function ls(e = '') {
    return ('' + e).replace(/[^\x00-\xff]/g, '**').length;
  }
  function We(e) {
    return e.indexOf('/') === 0;
  }
  function Q(e) {
    return We(e) ? e : '/' + e;
  }
  function us(e) {
    return We(e) ? e.slice(1) : e;
  }
  function fs(e) {
    return { passive: e };
  }
  /*!
   * vue-router v4.1.3
   * (c) 2022 Eduardo San Martin Morote
   * @license MIT
   */ var Ye;
  (function (e) {
    (e.pop = 'pop'), (e.push = 'push');
  })(Ye || (Ye = {}));
  var qe;
  (function (e) {
    (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
  })(qe || (qe = {}));
  var Je;
  (function (e) {
    (e[(e.aborted = 4)] = 'aborted'),
      (e[(e.cancelled = 8)] = 'cancelled'),
      (e[(e.duplicated = 16)] = 'duplicated');
  })(Je || (Je = {}));
  function ps(e) {
    return Symbol(e);
  }
  function ds() {
    const e = ft(),
      t = e.length;
    if (t) return e[t - 1];
  }
  function hs() {
    const e = ds();
    if (e) return e.$page.meta;
  }
  const gs = ['navigationBar', 'pullToRefresh'];
  function ms() {
    return JSON.parse(JSON.stringify(__uniConfig.globalStyle || {}));
  }
  function vs(e, t) {
    const r = ms(),
      n = O({ id: t }, r, e);
    gs.forEach((i) => {
      n[i] = O({}, r[i], e[i]);
    });
    const { navigationBar: a } = n;
    return a.titleText && a.titleImage && (a.titleText = ''), n;
  }
  function Ke(e, t) {
    if (t.indexOf('/') === 0) return t;
    if (t.indexOf('./') === 0) return Ke(e, t.slice(2));
    const r = t.split('/'),
      n = r.length;
    let a = 0;
    for (; a < n && r[a] === '..'; a++);
    r.splice(0, a), (t = r.join('/'));
    const i = e.length > 0 ? e.split('/') : [];
    return i.splice(i.length - a - 1, a + 1), Q(i.concat(r).join('/'));
  }
  function Xe(e) {
    return /^-?\d+[ur]px$/i.test(e)
      ? e.replace(/(^-?\d+)[ur]px$/i, (t, r) => `${Rs(parseFloat(r))}px`)
      : /^-?[\d\.]+$/.test(e)
      ? `${e}px`
      : e || '';
  }
  function _s(e) {
    return e
      .replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)
      .replace('webkit', '-webkit');
  }
  function bs(e) {
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
      r = [
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
      n = ['opacity', 'background-color'],
      a = ['width', 'height', 'left', 'right', 'top', 'bottom'],
      i = e.animates,
      s = e.option,
      c = s.transition,
      l = {},
      u = [];
    return (
      i.forEach((h) => {
        let p = h.type,
          d = [...h.args];
        if (t.concat(r).includes(p))
          p.startsWith('rotate') || p.startsWith('skew')
            ? (d = d.map((R) => parseFloat(R) + 'deg'))
            : p.startsWith('translate') && (d = d.map(Xe)),
            r.indexOf(p) >= 0 && (d.length = 1),
            u.push(`${p}(${d.join(',')})`);
        else if (n.concat(a).includes(d[0])) {
          p = d[0];
          const R = d[1];
          l[p] = a.includes(p) ? Xe(R) : R;
        }
      }),
      (l.transform = l.webkitTransform = u.join(' ')),
      (l.transition = l.webkitTransition =
        Object.keys(l)
          .map(
            (h) => `${_s(h)} ${c.duration}ms ${c.timingFunction} ${c.delay}ms`,
          )
          .join(',')),
      (l.transformOrigin = l.webkitTransformOrigin = s.transformOrigin),
      l
    );
  }
  function Ze(e) {
    const t = e.animation;
    if (!t || !t.actions || !t.actions.length) return;
    let r = 0;
    const n = t.actions,
      a = t.actions.length;
    function i() {
      const s = n[r],
        c = s.option.transition,
        l = bs(s);
      Object.keys(l).forEach((u) => {
        e.$el.style[u] = l[u];
      }),
        (r += 1),
        r < a && setTimeout(i, c.duration + c.delay);
    }
    setTimeout(() => {
      i();
    }, 0);
  }
  var ys = {
    props: ['animation'],
    watch: {
      animation: {
        deep: !0,
        handler() {
          Ze(this);
        },
      },
    },
    mounted() {
      Ze(this);
    },
  };
  const Qe = (e) => {
      e.__reserved = !0;
      const { props: t, mixins: r } = e;
      return (!t || !t.animation) && (r || (e.mixins = [])).push(ys), V(e);
    },
    V = (e) => (
      (e.__reserved = !0), (e.compatConfig = { MODE: 3 }), o.defineComponent(e)
    ),
    $s = {
      hoverClass: { type: String, default: 'none' },
      hoverStopPropagation: { type: Boolean, default: !1 },
      hoverStartTime: { type: [Number, String], default: 50 },
      hoverStayTime: { type: [Number, String], default: 400 },
    };
  function Ss(e) {
    const t = o.ref(!1);
    let r = !1,
      n,
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
        (r = !0),
        (n = setTimeout(() => {
          (t.value = !0), r || i();
        }, parseInt(e.hoverStartTime))));
    }
    function c() {
      (r = !1), t.value && i();
    }
    function l() {
      (r = !1), (t.value = !1), clearTimeout(n);
    }
    return {
      hovering: t,
      binding: { onTouchstartPassive: s, onTouchend: c, onTouchcancel: l },
    };
  }
  const et = '/';
  function tt(e) {
    return Q(e).indexOf(et) === 0 ? Q(e) : et + e;
  }
  function ws(e) {
    const { base: t, assets: r } = __uniConfig.router;
    if (
      (t === './' &&
        (e.indexOf('./static/') === 0 ||
          (r && e.indexOf('./' + r + '/') === 0)) &&
        (e = e.slice(1)),
      e.indexOf('/') === 0)
    )
      if (e.indexOf('//') === 0) e = 'https:' + e;
      else return tt(e.slice(1));
    if (ss.test(e) || cs.test(e) || e.indexOf('blob:') === 0) return e;
    const n = ft();
    return n.length ? tt(Ke(n[n.length - 1].$page.route, e).slice(1)) : e;
  }
  const Ts = navigator.userAgent,
    xs = /iphone|ipad|ipod/i.test(Ts);
  function Cs() {
    return (
      /^Apple/.test(navigator.vendor) && typeof window.orientation == 'number'
    );
  }
  function Ps(e) {
    return e && Math.abs(window.orientation) === 90;
  }
  function Os(e, t) {
    return e
      ? Math[t ? 'max' : 'min'](screen.width, screen.height)
      : screen.width;
  }
  function Ms(e) {
    return (
      Math.min(window.innerWidth, document.documentElement.clientWidth, e) || e
    );
  }
  function Is() {
    const e = Cs(),
      t = Ms(Os(e, Ps(e)));
    return {
      platform: xs ? 'ios' : 'other',
      pixelRatio: window.devicePixelRatio,
      windowWidth: t,
    };
  }
  function Es(e, t) {
    const r = e[0];
    if (!t || (!Ge(t.formatArgs) && Ge(r))) return;
    const n = t.formatArgs,
      a = Object.keys(n);
    for (let i = 0; i < a.length; i++) {
      const s = a[i],
        c = n[s];
      if (as(c)) {
        const l = c(e[0][s], r);
        if (He(l)) return l;
      } else ns(r, s) || (r[s] = c);
    }
  }
  function Ns(e, t, r, n) {
    if (n && n.beforeInvoke) {
      const i = n.beforeInvoke(t);
      if (He(i)) return i;
    }
    const a = Es(t, n);
    if (a) return a;
  }
  function ks(e, t, r, n) {
    return (...a) => {
      const i = Ns(e, a, r, n);
      if (i) throw new Error(i);
      return t.apply(null, a);
    };
  }
  function As(e, t, r, n) {
    return ks(e, t, void 0, n);
  }
  const js = 'upx2px',
    Ls = 1e-4,
    Bs = 750;
  let rt = !1,
    ee = 0,
    nt = 0,
    at = 960,
    ot = 375;
  function zs() {
    const { platform: e, pixelRatio: t, windowWidth: r } = Is();
    (ee = r), (nt = t), (rt = e === 'ios');
  }
  function it(e, t) {
    const r = Number(e);
    return isNaN(r) ? t : r;
  }
  function Vs() {
    const e = __uniConfig.globalStyle || {};
    (at = it(e.rpxCalcMaxDeviceWidth, 960)),
      (ot = it(e.rpxCalcBaseDeviceWidth, 375));
  }
  const Rs = As(js, (e, t) => {
    if ((ee === 0 && (zs(), Vs()), (e = Number(e)), e === 0)) return 0;
    let r = t || ee;
    r = r <= at ? r : ot;
    let n = (e / Bs) * r;
    return (
      n < 0 && (n = -n),
      (n = Math.floor(n + Ls)),
      n === 0 && (nt === 1 || !rt ? (n = 1) : (n = 0.5)),
      e < 0 ? -n : n
    );
  });
  [{ name: 'id', type: String, required: !0 }].concat({
    name: 'componentInstance',
    type: Object,
  });
  const M = {
    beforeInvoke() {
      const e = hs();
      if (e && !e.isTabBar) return 'not TabBar page';
    },
    formatArgs: {
      index(e) {
        if (!__uniConfig.tabBar.list[e]) return 'tabbar item not found';
      },
    },
  };
  M.beforeInvoke, M.formatArgs;
  const Ds = /^(linear|radial)-gradient\(.+?\);?$/;
  M.beforeInvoke, M.beforeInvoke, M.formatArgs;
  const Fs = fs(!0),
    st = [];
  let te = 0,
    ct;
  const lt = (e) => st.forEach((t) => (t.userAction = e));
  function Hs(e = { userAction: !1 }) {
    ct ||
      (['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup'].forEach(
        (r) => {
          document.addEventListener(
            r,
            function () {
              !te && lt(!0),
                te++,
                setTimeout(() => {
                  !--te && lt(!1);
                }, 0);
            },
            Fs,
          );
        },
      ),
      (ct = !0)),
      st.push(e);
  }
  const I = { ensp: '\u2002', emsp: '\u2003', nbsp: '\xA0' };
  function Gs(e, t) {
    return e
      .replace(/\\n/g, Ue)
      .split(Ue)
      .map((r) => Us(r, t));
  }
  function Us(e, { space: t, decode: r }) {
    return !e || (t && I[t] && (e = e.replace(/ /g, I[t])), !r)
      ? e
      : e
          .replace(/&nbsp;/g, I.nbsp)
          .replace(/&ensp;/g, I.ensp)
          .replace(/&emsp;/g, I.emsp)
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'");
  }
  var Ws = Qe({
      name: 'Text',
      props: {
        selectable: { type: [Boolean, String], default: !1 },
        space: { type: String, default: '' },
        decode: { type: [Boolean, String], default: !1 },
      },
      setup(e, { slots: t }) {
        return () => {
          const r = [];
          return (
            t.default &&
              t.default().forEach((n) => {
                if (n.shapeFlag & 8 && n.type !== o.Comment) {
                  const a = Gs(n.children, {
                      space: e.space,
                      decode: e.decode,
                    }),
                    i = a.length - 1;
                  a.forEach((s, c) => {
                    (c === 0 && !s) || r.push(o.createTextVNode(s)),
                      c !== i && r.push(o.createVNode('br'));
                  });
                } else r.push(n);
              }),
            o.createVNode(
              'uni-text',
              { selectable: e.selectable ? !0 : null },
              [o.createVNode('span', null, r)],
              8,
              ['selectable'],
            )
          );
        };
      },
    }),
    Ys = Qe({
      name: 'View',
      props: O({}, $s),
      setup(e, { slots: t }) {
        const { hovering: r, binding: n } = Ss(e);
        return () => {
          const a = e.hoverClass;
          return a && a !== 'none'
            ? o.createVNode(
                'uni-view',
                o.mergeProps({ class: r.value ? a : '' }, n),
                [t.default && t.default()],
                16,
              )
            : o.createVNode('uni-view', null, [t.default && t.default()]);
        };
      },
    });
  const ut = ps('upm');
  function qs() {
    return o.inject(ut);
  }
  function Js(e) {
    const t = Ks(e);
    return o.provide(ut, t), t;
  }
  function Ks(e) {
    return o.reactive(
      Xs(JSON.parse(JSON.stringify(vs(__uniRoutes[0].meta, e)))),
    );
  }
  function Xs(e) {
    {
      const { navigationBar: t } = e,
        { titleSize: r, titleColor: n, backgroundColor: a } = t;
      (t.titleText = t.titleText || ''),
        (t.type = t.type || 'default'),
        (t.titleSize = r || '16px'),
        (t.titleColor = n || '#ffffff'),
        (t.backgroundColor = a || '#F7F7F7');
    }
    return e;
  }
  function Zs() {
    return (history.state && history.state.__id__) || 1;
  }
  const Qs = new Map();
  function ft() {
    const e = [],
      t = Qs.values();
    for (const r of t) r.$.__isTabBar ? r.$.__isActive && e.push(r) : e.push(r);
    return e;
  }
  Hs();
  function ec(e) {
    document.title = e;
  }
  function tc(e) {
    function t() {
      ec(e.navigationBar.titleText);
    }
    o.watchEffect(t), o.onActivated(t);
  }
  var rc = V({
    name: 'PageHead',
    setup() {
      const e = o.ref(null),
        r = qs().navigationBar,
        { clazz: n, style: a } = oc(r);
      return () => {
        const s = [],
          c = [],
          l = r.type || 'default',
          u =
            l !== 'transparent' &&
            l !== 'float' &&
            o.createVNode(
              'div',
              {
                class: {
                  'uni-placeholder': !0,
                  'uni-placeholder-titlePenetrate': r.titlePenetrate,
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
              { ref: e, class: n.value, style: a.value },
              [
                o.createVNode('div', { class: 'uni-page-head-hd' }, [
                  null,
                  ...s,
                ]),
                nc(r),
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
  function nc(e, t) {
    return ac(e);
  }
  function ac({
    type: e,
    loading: t,
    titleSize: r,
    titleText: n,
    titleImage: a,
  }) {
    return o.createVNode('div', { class: 'uni-page-head-bd' }, [
      o.createVNode(
        'div',
        {
          style: { fontSize: r, opacity: e === 'transparent' ? 0 : 1 },
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
            : n,
        ],
        4,
      ),
    ]);
  }
  function oc(e) {
    const t = o.computed(() => {
        const { type: n, titlePenetrate: a, shadowColorType: i } = e,
          s = {
            'uni-page-head': !0,
            'uni-page-head-transparent': n === 'transparent',
            'uni-page-head-titlePenetrate': a === 'YES',
            'uni-page-head-shadow': !!i,
          };
        return i && (s[`uni-page-head-shadow-${i}`] = !0), s;
      }),
      r = o.computed(() => ({
        backgroundColor: e.backgroundColor,
        color: e.titleColor,
        transitionDuration: e.duration,
        transitionTimingFunction: e.timingFunc,
      }));
    return { clazz: t, style: r };
  }
  var ic = V({
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
  V({
    name: 'Page',
    setup(e, t) {
      const r = Js(Zs()),
        n = r.navigationBar;
      return (
        tc(r),
        () =>
          o.createVNode(
            'uni-page',
            { 'data-page': r.route },
            n.style !== 'custom' ? [o.createVNode(rc), pt(t)] : [pt(t)],
          )
      );
    },
  });
  function pt(e) {
    return (
      o.openBlock(),
      o.createBlock(
        ic,
        { key: 0 },
        { default: o.withCtx(() => [o.renderSlot(e.slots, 'page')]), _: 3 },
      )
    );
  }
  var _c = '',
    bc = '',
    dt = (e, t) => {
      const r = e.__vccOpts || e;
      for (const [n, a] of t) r[n] = a;
      return r;
    };
  const sc = {
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
        delay: r = 200,
        duration: n = 4e3,
        direction: a = 'up',
      }) {
        if (
          (typeof r != 'number' &&
            (console.warn(
              'delay\u53C2\u6570\u5E94\u8BE5\u4F20\u5165\u6574\u578B',
            ),
            (r = parseInt(r)),
            (r = isNaN(r) ? 200 : r)),
          typeof n != 'number' &&
            (console.warn(
              'duration\u53C2\u6570\u5E94\u8BE5\u4F20\u5165\u6574\u578B',
            ),
            (n = parseInt(n)),
            (n = isNaN(n) ? 4e3 : n)),
          typeof e != 'object')
        )
          return console.error(
            'prizeList\u53C2\u6570\u5E94\u8BE5\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61',
          );
        if (typeof t != 'object')
          return console.error(
            'defaultResults\u53C2\u6570\u5E94\u8BE5\u4F20\u5165\u6570\u7EC4',
          );
        if (a != 'up' && a != 'down')
          return console.error(
            'direction\u53C2\u6570\u5E94\u8BE5\u4F20\u5165"up"\u6216\u8005"down"',
          );
        (this.direction = a),
          n < 4e3 && (n = 4e3),
          (n = n - r * 2),
          (this.prizeList = e);
        let i = [];
        i.length = 3;
        for (let s = 0; s < 3; s++) {
          i[s] = this.shuffle(e);
          for (let c = 0, l = i[s].length; c < l; c++)
            i[s][c].HMSM_id = 'id_' + s + '_' + c;
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
          let s = (this.shaftList[1].length - 1) * -100;
          this.translateY.splice(0, 3, s, s, s);
        }
        (this.duration = n), (this.delay = r);
      },
      roll({ results: e = null, success: t = null }) {
        if (this.rollState == 'start')
          return console.warn('\u6B63\u5728\u62BD\u5956\u54E6\uFF01');
        if (typeof e != 'object')
          return console.error(
            '\u8BF7\u4F20\u5165\u6B63\u786E\u7684\u5F00\u5956\u7ED3\u679C\u53C2\u6570results',
          );
        this.rollState = 'start';
        let r = this.setTranslateY(e);
        this.lampTimer && clearInterval(this.lampTimer),
          this.startSwitchLamp(),
          setTimeout(() => {
            typeof t == 'function' && t(r), this.stop();
          }, this.duration + 1e3);
      },
      setTranslateY(e) {
        let t = { results: [] };
        for (let r = 0, n = e.length; r < n; r++)
          if (this.direction == 'up') {
            for (let a = this.shaftList[r].length - 1; a >= 0; a--)
              if (this.shaftList[r][a].value == e[r]) {
                t.results.push(
                  JSON.parse(JSON.stringify(this.shaftList[r][a])),
                ),
                  setTimeout(() => {
                    this.translateY.splice(r, 1, a * -100);
                  }, r * this.delay);
                break;
              }
          } else
            for (let a = 0, i = this.shaftList[r].length; a < i; a++)
              if (this.shaftList[r][a].value == e[r]) {
                t.results.push(
                  JSON.parse(JSON.stringify(this.shaftList[r][a])),
                ),
                  setTimeout(() => {
                    this.translateY.splice(r, 1, a * -100);
                  }, r * this.delay);
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
            for (let t = 0, r = this.translateY.length; t < r; t++) {
              let n = this.translateY[t] + e;
              this.translateY.splice(t, 1, n);
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
        for (let a = 1; a < t.length; a++) {
          const i = Math.floor(Math.random() * (a + 1));
          [t[a], t[i]] = [t[i], t[a]];
        }
        let r = Math.ceil(40 / e.length),
          n = [];
        for (; r > 0; ) n.push(...t), r--;
        return JSON.parse(JSON.stringify(n));
      },
    },
  };
  function cc(e, t, r, n, a, i) {
    const s = Ys;
    return (
      o.openBlock(),
      o.createElementBlock('div', { class: 'shell' }, [
        o.createElementVNode('div', { class: 'l' }, [
          o.createCommentVNode(' \u5C0F\u706F\u5217\u8868 '),
          (o.openBlock(!0),
          o.createElementBlock(
            o.Fragment,
            null,
            o.renderList(
              a.lamps,
              (c, l) => (
                o.openBlock(),
                o.createElementBlock(
                  'div',
                  {
                    class: 'lamp',
                    key: c.color,
                    style: o.normalizeStyle({
                      'background-color': c.color,
                      'box-shadow': '0 0 5px ' + c.color,
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
        o.createElementVNode('div', { class: 'c' }, [
          o.createElementVNode('div', { class: 'HMSM' }, [
            o.createCommentVNode(' \u80CC\u666F '),
            o.createElementVNode('div', { class: 'HMSM-display-bg' }, [
              (o.openBlock(!0),
              o.createElementBlock(
                o.Fragment,
                null,
                o.renderList(
                  a.shaftList,
                  (c, l) => (
                    o.openBlock(),
                    o.createElementBlock('div', { key: l, class: 'box' })
                  ),
                ),
                128,
              )),
            ]),
            o.createCommentVNode(' \u5956\u54C1\u5217\u8868 '),
            o.createElementVNode('div', { class: 'HMSM-display' }, [
              (o.openBlock(!0),
              o.createElementBlock(
                o.Fragment,
                null,
                o.renderList(
                  a.shaftList,
                  (c, l) => (
                    o.openBlock(),
                    o.createElementBlock(
                      'div',
                      {
                        key: l,
                        class: o.normalizeClass([
                          'HMSM-shaft',
                          { roll_animation: a.rollState == 'start' },
                        ]),
                        style: o.normalizeStyle({
                          transform:
                            'translate3d(0, ' + a.translateY[l] + '%, 0)',
                          'transition-duration': a.duration + 'ms',
                        }),
                      },
                      [
                        (o.openBlock(!0),
                        o.createElementBlock(
                          o.Fragment,
                          null,
                          o.renderList(
                            c,
                            (u, h) => (
                              o.openBlock(),
                              o.createBlock(
                                s,
                                { class: 'img-view', key: u.HMSM_id },
                                {
                                  default: o.withCtx(() => [
                                    o.createElementVNode(
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
        o.createElementVNode('div', { class: 'r' }, [
          o.createCommentVNode(' \u5C0F\u706F\u5217\u8868 '),
          (o.openBlock(!0),
          o.createElementBlock(
            o.Fragment,
            null,
            o.renderList(
              a.lamps,
              (c, l) => (
                o.openBlock(),
                o.createElementBlock(
                  'div',
                  {
                    class: 'lamp',
                    key: c.color,
                    style: o.normalizeStyle({
                      'background-color': c.color,
                      'box-shadow': '0 0 5px ' + c.color,
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
  var lc = dt(sc, [
      ['render', cc],
      ['__scopeId', 'data-v-45bc17dd'],
    ]),
    yc = '';
  const uc = {
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
            name: '\u884C\u674E\u7BB1',
            value: 'luggage',
            img: 'https://user-images.githubusercontent.com/11958920/184317875-20c2df50-6901-4364-b3c7-e086bb717a72.png',
          },
          {
            name: '\u98CE\u7B52',
            value: 'dryer',
            img: 'https://user-images.githubusercontent.com/11958920/184317938-03c2cc33-948d-45e6-8eba-1b473966ea1e.png',
          },
          {
            name: '\u5E73\u884C\u8F66',
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
    components: { LotteryMachine: lc },
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
        console.log('\u5F53\u524D\u5956\u54C1\u7ED3\u679C\uFF1A', e),
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
  function fc(e, t, r, n, a, i) {
    const s = o.resolveComponent('LotteryMachine'),
      c = Ws;
    return (
      o.openBlock(),
      o.createElementBlock('div', { class: 'content' }, [
        o.createElementVNode('div', { class: 'sm' }, [
          o.createVNode(s, { ref: 'LotteryMachine' }, null, 512),
        ]),
        o.createElementVNode(
          'div',
          {
            class: 'start',
            onClick:
              t[0] ||
              (t[0] = o.withModifiers(
                (...l) => i.startLottery && i.startLottery(...l),
                ['stop'],
              )),
          },
          [
            o.createVNode(
              c,
              { class: 'start-text' },
              {
                default: o.withCtx(() => [o.createTextVNode('\u62BD\u5956')]),
                _: 1,
              },
            ),
          ],
        ),
      ])
    );
  }
  var pc = dt(uc, [
    ['render', fc],
    ['__scopeId', 'data-v-aa95580a'],
  ]);
  es(pc, { type: 'uni-lottery-card', framework: 'vue3' });
});

var $h = Object.defineProperty;
var _h = (m, i, S) =>
  i in m
    ? $h(m, i, { enumerable: !0, configurable: !0, writable: !0, value: S })
    : (m[i] = S);
var H = (m, i, S) => (_h(m, typeof i != 'symbol' ? i + '' : i, S), S);
(function (m, i) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? i(require('react'), require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['react', 'vue'], i)
    : ((m = typeof globalThis != 'undefined' ? globalThis : m || self),
      i(m.react, m.vue));
})(this, function (m, i) {
  var ir;
  ('use strict');
  function S(e) {
    return e && typeof e == 'object' && 'default' in e ? e : { default: e };
  }
  var te = S(m),
    G =
      typeof globalThis != 'undefined'
        ? globalThis
        : typeof window != 'undefined'
        ? window
        : typeof global != 'undefined'
        ? global
        : typeof self != 'undefined'
        ? self
        : {};
  function cr(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  var T = cr,
    lr = Array.isArray,
    y = lr,
    ur = typeof G == 'object' && G && G.Object === Object && G,
    Ie = ur,
    fr = Ie,
    pr = typeof self == 'object' && self && self.Object === Object && self,
    dr = fr || pr || Function('return this')(),
    v = dr,
    hr = v,
    gr = hr.Symbol,
    B = gr,
    Pe = B,
    Me = Object.prototype,
    br = Me.hasOwnProperty,
    mr = Me.toString,
    R = Pe ? Pe.toStringTag : void 0;
  function vr(e) {
    var t = br.call(e, R),
      r = e[R];
    try {
      e[R] = void 0;
      var n = !0;
    } catch {}
    var a = mr.call(e);
    return n && (t ? (e[R] = r) : delete e[R]), a;
  }
  var yr = vr,
    $r = Object.prototype,
    _r = $r.toString;
  function Sr(e) {
    return _r.call(e);
  }
  var Tr = Sr,
    Le = B,
    wr = yr,
    Ar = Tr,
    Cr = '[object Null]',
    xr = '[object Undefined]',
    Ee = Le ? Le.toStringTag : void 0;
  function Or(e) {
    return e == null
      ? e === void 0
        ? xr
        : Cr
      : Ee && Ee in Object(e)
      ? wr(e)
      : Ar(e);
  }
  var j = Or;
  function jr(e) {
    return e != null && typeof e == 'object';
  }
  var w = jr,
    Ir = j,
    Pr = w,
    Mr = '[object Symbol]';
  function Lr(e) {
    return typeof e == 'symbol' || (Pr(e) && Ir(e) == Mr);
  }
  var re = Lr,
    Er = y,
    kr = re,
    Nr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Br = /^\w*$/;
  function Rr(e, t) {
    if (Er(e)) return !1;
    var r = typeof e;
    return r == 'number' ||
      r == 'symbol' ||
      r == 'boolean' ||
      e == null ||
      kr(e)
      ? !0
      : Br.test(e) || !Nr.test(e) || (t != null && e in Object(t));
  }
  var Dr = Rr,
    Fr = j,
    zr = T,
    Vr = '[object AsyncFunction]',
    Hr = '[object Function]',
    Gr = '[object GeneratorFunction]',
    Ur = '[object Proxy]';
  function Wr(e) {
    if (!zr(e)) return !1;
    var t = Fr(e);
    return t == Hr || t == Gr || t == Vr || t == Ur;
  }
  var ke = Wr,
    Kr = v,
    Yr = Kr['__core-js_shared__'],
    qr = Yr,
    ne = qr,
    Ne = (function () {
      var e = /[^.]+$/.exec((ne && ne.keys && ne.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function Jr(e) {
    return !!Ne && Ne in e;
  }
  var Xr = Jr,
    Zr = Function.prototype,
    Qr = Zr.toString;
  function en(e) {
    if (e != null) {
      try {
        return Qr.call(e);
      } catch {}
      try {
        return e + '';
      } catch {}
    }
    return '';
  }
  var Be = en,
    tn = ke,
    rn = Xr,
    nn = T,
    an = Be,
    on = /[\\^$.*+?()[\]{}|]/g,
    sn = /^\[object .+?Constructor\]$/,
    cn = Function.prototype,
    ln = Object.prototype,
    un = cn.toString,
    fn = ln.hasOwnProperty,
    pn = RegExp(
      '^' +
        un
          .call(fn)
          .replace(on, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function dn(e) {
    if (!nn(e) || rn(e)) return !1;
    var t = tn(e) ? pn : sn;
    return t.test(an(e));
  }
  var hn = dn;
  function gn(e, t) {
    return e == null ? void 0 : e[t];
  }
  var bn = gn,
    mn = hn,
    vn = bn;
  function yn(e, t) {
    var r = vn(e, t);
    return mn(r) ? r : void 0;
  }
  var A = yn,
    $n = A,
    _n = $n(Object, 'create'),
    U = _n,
    Re = U;
  function Sn() {
    (this.__data__ = Re ? Re(null) : {}), (this.size = 0);
  }
  var Tn = Sn;
  function wn(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var An = wn,
    Cn = U,
    xn = '__lodash_hash_undefined__',
    On = Object.prototype,
    jn = On.hasOwnProperty;
  function In(e) {
    var t = this.__data__;
    if (Cn) {
      var r = t[e];
      return r === xn ? void 0 : r;
    }
    return jn.call(t, e) ? t[e] : void 0;
  }
  var Pn = In,
    Mn = U,
    Ln = Object.prototype,
    En = Ln.hasOwnProperty;
  function kn(e) {
    var t = this.__data__;
    return Mn ? t[e] !== void 0 : En.call(t, e);
  }
  var Nn = kn,
    Bn = U,
    Rn = '__lodash_hash_undefined__';
  function Dn(e, t) {
    var r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = Bn && t === void 0 ? Rn : t),
      this
    );
  }
  var Fn = Dn,
    zn = Tn,
    Vn = An,
    Hn = Pn,
    Gn = Nn,
    Un = Fn;
  function I(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (I.prototype.clear = zn),
    (I.prototype.delete = Vn),
    (I.prototype.get = Hn),
    (I.prototype.has = Gn),
    (I.prototype.set = Un);
  var Wn = I;
  function Kn() {
    (this.__data__ = []), (this.size = 0);
  }
  var Yn = Kn;
  function qn(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var De = qn,
    Jn = De;
  function Xn(e, t) {
    for (var r = e.length; r--; ) if (Jn(e[r][0], t)) return r;
    return -1;
  }
  var W = Xn,
    Zn = W,
    Qn = Array.prototype,
    ea = Qn.splice;
  function ta(e) {
    var t = this.__data__,
      r = Zn(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : ea.call(t, r, 1), --this.size, !0;
  }
  var ra = ta,
    na = W;
  function aa(e) {
    var t = this.__data__,
      r = na(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var oa = aa,
    ia = W;
  function sa(e) {
    return ia(this.__data__, e) > -1;
  }
  var ca = sa,
    la = W;
  function ua(e, t) {
    var r = this.__data__,
      n = la(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  var fa = ua,
    pa = Yn,
    da = ra,
    ha = oa,
    ga = ca,
    ba = fa;
  function P(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (P.prototype.clear = pa),
    (P.prototype.delete = da),
    (P.prototype.get = ha),
    (P.prototype.has = ga),
    (P.prototype.set = ba);
  var K = P,
    ma = A,
    va = v,
    ya = ma(va, 'Map'),
    ae = ya,
    Fe = Wn,
    $a = K,
    _a = ae;
  function Sa() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Fe(),
        map: new (_a || $a)(),
        string: new Fe(),
      });
  }
  var Ta = Sa;
  function wa(e) {
    var t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  var Aa = wa,
    Ca = Aa;
  function xa(e, t) {
    var r = e.__data__;
    return Ca(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
  }
  var Y = xa,
    Oa = Y;
  function ja(e) {
    var t = Oa(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  var Ia = ja,
    Pa = Y;
  function Ma(e) {
    return Pa(this, e).get(e);
  }
  var La = Ma,
    Ea = Y;
  function ka(e) {
    return Ea(this, e).has(e);
  }
  var Na = ka,
    Ba = Y;
  function Ra(e, t) {
    var r = Ba(this, e),
      n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  var Da = Ra,
    Fa = Ta,
    za = Ia,
    Va = La,
    Ha = Na,
    Ga = Da;
  function M(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  (M.prototype.clear = Fa),
    (M.prototype.delete = za),
    (M.prototype.get = Va),
    (M.prototype.has = Ha),
    (M.prototype.set = Ga);
  var ze = M,
    Ve = ze,
    Ua = 'Expected a function';
  function oe(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(Ua);
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(a)) return o.get(a);
      var s = e.apply(this, n);
      return (r.cache = o.set(a, s) || o), s;
    };
    return (r.cache = new (oe.Cache || Ve)()), r;
  }
  oe.Cache = Ve;
  var Wa = oe,
    Ka = Wa,
    Ya = 500;
  function qa(e) {
    var t = Ka(e, function (n) {
        return r.size === Ya && r.clear(), n;
      }),
      r = t.cache;
    return t;
  }
  var Ja = qa,
    Xa = Ja,
    Za =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Qa = /\\(\\)?/g,
    eo = Xa(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(Za, function (r, n, a, o) {
          t.push(a ? o.replace(Qa, '$1') : n || r);
        }),
        t
      );
    }),
    to = eo;
  function ro(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
      a[r] = t(e[r], r, e);
    return a;
  }
  var no = ro,
    He = B,
    ao = no,
    oo = y,
    io = re,
    so = 1 / 0,
    Ge = He ? He.prototype : void 0,
    Ue = Ge ? Ge.toString : void 0;
  function We(e) {
    if (typeof e == 'string') return e;
    if (oo(e)) return ao(e, We) + '';
    if (io(e)) return Ue ? Ue.call(e) : '';
    var t = e + '';
    return t == '0' && 1 / e == -so ? '-0' : t;
  }
  var co = We,
    lo = co;
  function uo(e) {
    return e == null ? '' : lo(e);
  }
  var fo = uo,
    po = y,
    ho = Dr,
    go = to,
    bo = fo;
  function mo(e, t) {
    return po(e) ? e : ho(e, t) ? [e] : go(bo(e));
  }
  var q = mo,
    vo = re,
    yo = 1 / 0;
  function $o(e) {
    if (typeof e == 'string' || vo(e)) return e;
    var t = e + '';
    return t == '0' && 1 / e == -yo ? '-0' : t;
  }
  var ie = $o,
    _o = q,
    So = ie;
  function To(e, t) {
    t = _o(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[So(t[r++])];
    return r && r == n ? e : void 0;
  }
  var wo = To,
    Ao = A,
    Co = (function () {
      try {
        var e = Ao(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch {}
    })(),
    Ke = Co,
    Ye = Ke;
  function xo(e, t, r) {
    t == '__proto__' && Ye
      ? Ye(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
      : (e[t] = r);
  }
  var qe = xo,
    Oo = qe,
    jo = De,
    Io = Object.prototype,
    Po = Io.hasOwnProperty;
  function Mo(e, t, r) {
    var n = e[t];
    (!(Po.call(e, t) && jo(n, r)) || (r === void 0 && !(t in e))) &&
      Oo(e, t, r);
  }
  var se = Mo,
    Lo = 9007199254740991,
    Eo = /^(?:0|[1-9]\d*)$/;
  function ko(e, t) {
    var r = typeof e;
    return (
      (t = t == null ? Lo : t),
      !!t &&
        (r == 'number' || (r != 'symbol' && Eo.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var ce = ko,
    No = se,
    Bo = q,
    Ro = ce,
    Je = T,
    Do = ie;
  function Fo(e, t, r, n) {
    if (!Je(e)) return e;
    t = Bo(t, e);
    for (var a = -1, o = t.length, s = o - 1, c = e; c != null && ++a < o; ) {
      var l = Do(t[a]),
        u = r;
      if (l === '__proto__' || l === 'constructor' || l === 'prototype')
        return e;
      if (a != s) {
        var b = c[l];
        (u = n ? n(b, l, c) : void 0),
          u === void 0 && (u = Je(b) ? b : Ro(t[a + 1]) ? [] : {});
      }
      No(c, l, u), (c = c[l]);
    }
    return e;
  }
  var zo = Fo,
    Vo = wo,
    Ho = zo,
    Go = q;
  function Uo(e, t, r) {
    for (var n = -1, a = t.length, o = {}; ++n < a; ) {
      var s = t[n],
        c = Vo(e, s);
      r(c, s) && Ho(o, Go(s, e), c);
    }
    return o;
  }
  var Wo = Uo;
  function Ko(e, t) {
    return e != null && t in Object(e);
  }
  var Yo = Ko,
    qo = j,
    Jo = w,
    Xo = '[object Arguments]';
  function Zo(e) {
    return Jo(e) && qo(e) == Xo;
  }
  var Qo = Zo,
    Xe = Qo,
    ei = w,
    Ze = Object.prototype,
    ti = Ze.hasOwnProperty,
    ri = Ze.propertyIsEnumerable,
    ni = Xe(
      (function () {
        return arguments;
      })(),
    )
      ? Xe
      : function (e) {
          return ei(e) && ti.call(e, 'callee') && !ri.call(e, 'callee');
        },
    le = ni,
    ai = 9007199254740991;
  function oi(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= ai;
  }
  var ue = oi,
    ii = q,
    si = le,
    ci = y,
    li = ce,
    ui = ue,
    fi = ie;
  function pi(e, t, r) {
    t = ii(t, e);
    for (var n = -1, a = t.length, o = !1; ++n < a; ) {
      var s = fi(t[n]);
      if (!(o = e != null && r(e, s))) break;
      e = e[s];
    }
    return o || ++n != a
      ? o
      : ((a = e == null ? 0 : e.length),
        !!a && ui(a) && li(s, a) && (ci(e) || si(e)));
  }
  var di = pi,
    hi = Yo,
    gi = di;
  function bi(e, t) {
    return e != null && gi(e, t, hi);
  }
  var mi = bi,
    vi = Wo,
    yi = mi;
  function $i(e, t) {
    return vi(e, t, function (r, n) {
      return yi(e, n);
    });
  }
  var _i = $i;
  function Si(e, t) {
    for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
    return e;
  }
  var fe = Si,
    Qe = B,
    Ti = le,
    wi = y,
    et = Qe ? Qe.isConcatSpreadable : void 0;
  function Ai(e) {
    return wi(e) || Ti(e) || !!(et && e && e[et]);
  }
  var Ci = Ai,
    xi = fe,
    Oi = Ci;
  function tt(e, t, r, n, a) {
    var o = -1,
      s = e.length;
    for (r || (r = Oi), a || (a = []); ++o < s; ) {
      var c = e[o];
      t > 0 && r(c)
        ? t > 1
          ? tt(c, t - 1, r, n, a)
          : xi(a, c)
        : n || (a[a.length] = c);
    }
    return a;
  }
  var ji = tt,
    Ii = ji;
  function Pi(e) {
    var t = e == null ? 0 : e.length;
    return t ? Ii(e, 1) : [];
  }
  var Mi = Pi;
  function Li(e, t, r) {
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
  var Ei = Li,
    ki = Ei,
    rt = Math.max;
  function Ni(e, t, r) {
    return (
      (t = rt(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var n = arguments, a = -1, o = rt(n.length - t, 0), s = Array(o);
          ++a < o;

        )
          s[a] = n[t + a];
        a = -1;
        for (var c = Array(t + 1); ++a < t; ) c[a] = n[a];
        return (c[t] = r(s)), ki(e, this, c);
      }
    );
  }
  var Bi = Ni;
  function Ri(e) {
    return function () {
      return e;
    };
  }
  var Di = Ri;
  function Fi(e) {
    return e;
  }
  var zi = Fi,
    Vi = Di,
    nt = Ke,
    Hi = zi,
    Gi = nt
      ? function (e, t) {
          return nt(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: Vi(t),
            writable: !0,
          });
        }
      : Hi,
    Ui = Gi,
    Wi = 800,
    Ki = 16,
    Yi = Date.now;
  function qi(e) {
    var t = 0,
      r = 0;
    return function () {
      var n = Yi(),
        a = Ki - (n - r);
      if (((r = n), a > 0)) {
        if (++t >= Wi) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var Ji = qi,
    Xi = Ui,
    Zi = Ji,
    Qi = Zi(Xi),
    es = Qi,
    ts = Mi,
    rs = Bi,
    ns = es;
  function as(e) {
    return ns(rs(e, void 0, ts), e + '');
  }
  var os = as,
    is = _i,
    ss = os,
    cs = ss(function (e, t) {
      return e == null ? {} : is(e, t);
    }),
    pe = cs,
    ls = j,
    us = w,
    fs = '[object Number]';
  function ps(e) {
    return typeof e == 'number' || (us(e) && ls(e) == fs);
  }
  var at = ps,
    ds = K;
  function hs() {
    (this.__data__ = new ds()), (this.size = 0);
  }
  var gs = hs;
  function bs(e) {
    var t = this.__data__,
      r = t.delete(e);
    return (this.size = t.size), r;
  }
  var ms = bs;
  function vs(e) {
    return this.__data__.get(e);
  }
  var ys = vs;
  function $s(e) {
    return this.__data__.has(e);
  }
  var _s = $s,
    Ss = K,
    Ts = ae,
    ws = ze,
    As = 200;
  function Cs(e, t) {
    var r = this.__data__;
    if (r instanceof Ss) {
      var n = r.__data__;
      if (!Ts || n.length < As - 1)
        return n.push([e, t]), (this.size = ++r.size), this;
      r = this.__data__ = new ws(n);
    }
    return r.set(e, t), (this.size = r.size), this;
  }
  var xs = Cs,
    Os = K,
    js = gs,
    Is = ms,
    Ps = ys,
    Ms = _s,
    Ls = xs;
  function L(e) {
    var t = (this.__data__ = new Os(e));
    this.size = t.size;
  }
  (L.prototype.clear = js),
    (L.prototype.delete = Is),
    (L.prototype.get = Ps),
    (L.prototype.has = Ms),
    (L.prototype.set = Ls);
  var Es = L;
  function ks(e, t) {
    for (
      var r = -1, n = e == null ? 0 : e.length;
      ++r < n && t(e[r], r, e) !== !1;

    );
    return e;
  }
  var Ns = ks,
    Bs = se,
    Rs = qe;
  function Ds(e, t, r, n) {
    var a = !r;
    r || (r = {});
    for (var o = -1, s = t.length; ++o < s; ) {
      var c = t[o],
        l = n ? n(r[c], e[c], c, r, e) : void 0;
      l === void 0 && (l = e[c]), a ? Rs(r, c, l) : Bs(r, c, l);
    }
    return r;
  }
  var J = Ds;
  function Fs(e, t) {
    for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
    return n;
  }
  var zs = Fs,
    X = { exports: {} };
  function Vs() {
    return !1;
  }
  var Hs = Vs;
  (function (e, t) {
    var r = v,
      n = Hs,
      a = t && !t.nodeType && t,
      o = a && !0 && e && !e.nodeType && e,
      s = o && o.exports === a,
      c = s ? r.Buffer : void 0,
      l = c ? c.isBuffer : void 0,
      u = l || n;
    e.exports = u;
  })(X, X.exports);
  var Gs = j,
    Us = ue,
    Ws = w,
    Ks = '[object Arguments]',
    Ys = '[object Array]',
    qs = '[object Boolean]',
    Js = '[object Date]',
    Xs = '[object Error]',
    Zs = '[object Function]',
    Qs = '[object Map]',
    ec = '[object Number]',
    tc = '[object Object]',
    rc = '[object RegExp]',
    nc = '[object Set]',
    ac = '[object String]',
    oc = '[object WeakMap]',
    ic = '[object ArrayBuffer]',
    sc = '[object DataView]',
    cc = '[object Float32Array]',
    lc = '[object Float64Array]',
    uc = '[object Int8Array]',
    fc = '[object Int16Array]',
    pc = '[object Int32Array]',
    dc = '[object Uint8Array]',
    hc = '[object Uint8ClampedArray]',
    gc = '[object Uint16Array]',
    bc = '[object Uint32Array]',
    p = {};
  (p[cc] = p[lc] = p[uc] = p[fc] = p[pc] = p[dc] = p[hc] = p[gc] = p[bc] = !0),
    (p[Ks] =
      p[Ys] =
      p[ic] =
      p[qs] =
      p[sc] =
      p[Js] =
      p[Xs] =
      p[Zs] =
      p[Qs] =
      p[ec] =
      p[tc] =
      p[rc] =
      p[nc] =
      p[ac] =
      p[oc] =
        !1);
  function mc(e) {
    return Ws(e) && Us(e.length) && !!p[Gs(e)];
  }
  var vc = mc;
  function yc(e) {
    return function (t) {
      return e(t);
    };
  }
  var de = yc,
    D = { exports: {} };
  (function (e, t) {
    var r = Ie,
      n = t && !t.nodeType && t,
      a = n && !0 && e && !e.nodeType && e,
      o = a && a.exports === n,
      s = o && r.process,
      c = (function () {
        try {
          var l = a && a.require && a.require('util').types;
          return l || (s && s.binding && s.binding('util'));
        } catch {}
      })();
    e.exports = c;
  })(D, D.exports);
  var $c = vc,
    _c = de,
    ot = D.exports,
    it = ot && ot.isTypedArray,
    Sc = it ? _c(it) : $c,
    Tc = Sc,
    wc = zs,
    Ac = le,
    Cc = y,
    xc = X.exports,
    Oc = ce,
    jc = Tc,
    Ic = Object.prototype,
    Pc = Ic.hasOwnProperty;
  function Mc(e, t) {
    var r = Cc(e),
      n = !r && Ac(e),
      a = !r && !n && xc(e),
      o = !r && !n && !a && jc(e),
      s = r || n || a || o,
      c = s ? wc(e.length, String) : [],
      l = c.length;
    for (var u in e)
      (t || Pc.call(e, u)) &&
        !(
          s &&
          (u == 'length' ||
            (a && (u == 'offset' || u == 'parent')) ||
            (o && (u == 'buffer' || u == 'byteLength' || u == 'byteOffset')) ||
            Oc(u, l))
        ) &&
        c.push(u);
    return c;
  }
  var st = Mc,
    Lc = Object.prototype;
  function Ec(e) {
    var t = e && e.constructor,
      r = (typeof t == 'function' && t.prototype) || Lc;
    return e === r;
  }
  var he = Ec;
  function kc(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  var ct = kc,
    Nc = ct,
    Bc = Nc(Object.keys, Object),
    Rc = Bc,
    Dc = he,
    Fc = Rc,
    zc = Object.prototype,
    Vc = zc.hasOwnProperty;
  function Hc(e) {
    if (!Dc(e)) return Fc(e);
    var t = [];
    for (var r in Object(e)) Vc.call(e, r) && r != 'constructor' && t.push(r);
    return t;
  }
  var Gc = Hc,
    Uc = ke,
    Wc = ue;
  function Kc(e) {
    return e != null && Wc(e.length) && !Uc(e);
  }
  var lt = Kc,
    Yc = st,
    qc = Gc,
    Jc = lt;
  function Xc(e) {
    return Jc(e) ? Yc(e) : qc(e);
  }
  var ge = Xc,
    Zc = J,
    Qc = ge;
  function el(e, t) {
    return e && Zc(t, Qc(t), e);
  }
  var tl = el;
  function rl(e) {
    var t = [];
    if (e != null) for (var r in Object(e)) t.push(r);
    return t;
  }
  var nl = rl,
    al = T,
    ol = he,
    il = nl,
    sl = Object.prototype,
    cl = sl.hasOwnProperty;
  function ll(e) {
    if (!al(e)) return il(e);
    var t = ol(e),
      r = [];
    for (var n in e) (n == 'constructor' && (t || !cl.call(e, n))) || r.push(n);
    return r;
  }
  var ul = ll,
    fl = st,
    pl = ul,
    dl = lt;
  function hl(e) {
    return dl(e) ? fl(e, !0) : pl(e);
  }
  var be = hl,
    gl = J,
    bl = be;
  function ml(e, t) {
    return e && gl(t, bl(t), e);
  }
  var vl = ml,
    me = { exports: {} };
  (function (e, t) {
    var r = v,
      n = t && !t.nodeType && t,
      a = n && !0 && e && !e.nodeType && e,
      o = a && a.exports === n,
      s = o ? r.Buffer : void 0,
      c = s ? s.allocUnsafe : void 0;
    function l(u, b) {
      if (b) return u.slice();
      var h = u.length,
        g = c ? c(h) : new u.constructor(h);
      return u.copy(g), g;
    }
    e.exports = l;
  })(me, me.exports);
  function yl(e, t) {
    var r = -1,
      n = e.length;
    for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
    return t;
  }
  var $l = yl;
  function _l(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
      var s = e[r];
      t(s, r, e) && (o[a++] = s);
    }
    return o;
  }
  var Sl = _l;
  function Tl() {
    return [];
  }
  var ut = Tl,
    wl = Sl,
    Al = ut,
    Cl = Object.prototype,
    xl = Cl.propertyIsEnumerable,
    ft = Object.getOwnPropertySymbols,
    Ol = ft
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              wl(ft(e), function (t) {
                return xl.call(e, t);
              }));
        }
      : Al,
    ve = Ol,
    jl = J,
    Il = ve;
  function Pl(e, t) {
    return jl(e, Il(e), t);
  }
  var Ml = Pl,
    Ll = ct,
    El = Ll(Object.getPrototypeOf, Object),
    pt = El,
    kl = fe,
    Nl = pt,
    Bl = ve,
    Rl = ut,
    Dl = Object.getOwnPropertySymbols,
    Fl = Dl
      ? function (e) {
          for (var t = []; e; ) kl(t, Bl(e)), (e = Nl(e));
          return t;
        }
      : Rl,
    dt = Fl,
    zl = J,
    Vl = dt;
  function Hl(e, t) {
    return zl(e, Vl(e), t);
  }
  var Gl = Hl,
    Ul = fe,
    Wl = y;
  function Kl(e, t, r) {
    var n = t(e);
    return Wl(e) ? n : Ul(n, r(e));
  }
  var ht = Kl,
    Yl = ht,
    ql = ve,
    Jl = ge;
  function Xl(e) {
    return Yl(e, Jl, ql);
  }
  var Zl = Xl,
    Ql = ht,
    eu = dt,
    tu = be;
  function ru(e) {
    return Ql(e, tu, eu);
  }
  var nu = ru,
    au = A,
    ou = v,
    iu = au(ou, 'DataView'),
    su = iu,
    cu = A,
    lu = v,
    uu = cu(lu, 'Promise'),
    fu = uu,
    pu = A,
    du = v,
    hu = pu(du, 'Set'),
    gu = hu,
    bu = A,
    mu = v,
    vu = bu(mu, 'WeakMap'),
    yu = vu,
    ye = su,
    $e = ae,
    _e = fu,
    Se = gu,
    Te = yu,
    gt = j,
    E = Be,
    bt = '[object Map]',
    $u = '[object Object]',
    mt = '[object Promise]',
    vt = '[object Set]',
    yt = '[object WeakMap]',
    $t = '[object DataView]',
    _u = E(ye),
    Su = E($e),
    Tu = E(_e),
    wu = E(Se),
    Au = E(Te),
    C = gt;
  ((ye && C(new ye(new ArrayBuffer(1))) != $t) ||
    ($e && C(new $e()) != bt) ||
    (_e && C(_e.resolve()) != mt) ||
    (Se && C(new Se()) != vt) ||
    (Te && C(new Te()) != yt)) &&
    (C = function (e) {
      var t = gt(e),
        r = t == $u ? e.constructor : void 0,
        n = r ? E(r) : '';
      if (n)
        switch (n) {
          case _u:
            return $t;
          case Su:
            return bt;
          case Tu:
            return mt;
          case wu:
            return vt;
          case Au:
            return yt;
        }
      return t;
    });
  var we = C,
    Cu = Object.prototype,
    xu = Cu.hasOwnProperty;
  function Ou(e) {
    var t = e.length,
      r = new e.constructor(t);
    return (
      t &&
        typeof e[0] == 'string' &&
        xu.call(e, 'index') &&
        ((r.index = e.index), (r.input = e.input)),
      r
    );
  }
  var ju = Ou,
    Iu = v,
    Pu = Iu.Uint8Array,
    Mu = Pu,
    _t = Mu;
  function Lu(e) {
    var t = new e.constructor(e.byteLength);
    return new _t(t).set(new _t(e)), t;
  }
  var Ae = Lu,
    Eu = Ae;
  function ku(e, t) {
    var r = t ? Eu(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.byteLength);
  }
  var Nu = ku,
    Bu = /\w*$/;
  function Ru(e) {
    var t = new e.constructor(e.source, Bu.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  }
  var Du = Ru,
    St = B,
    Tt = St ? St.prototype : void 0,
    wt = Tt ? Tt.valueOf : void 0;
  function Fu(e) {
    return wt ? Object(wt.call(e)) : {};
  }
  var zu = Fu,
    Vu = Ae;
  function Hu(e, t) {
    var r = t ? Vu(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  }
  var Gu = Hu,
    Uu = Ae,
    Wu = Nu,
    Ku = Du,
    Yu = zu,
    qu = Gu,
    Ju = '[object Boolean]',
    Xu = '[object Date]',
    Zu = '[object Map]',
    Qu = '[object Number]',
    ef = '[object RegExp]',
    tf = '[object Set]',
    rf = '[object String]',
    nf = '[object Symbol]',
    af = '[object ArrayBuffer]',
    of = '[object DataView]',
    sf = '[object Float32Array]',
    cf = '[object Float64Array]',
    lf = '[object Int8Array]',
    uf = '[object Int16Array]',
    ff = '[object Int32Array]',
    pf = '[object Uint8Array]',
    df = '[object Uint8ClampedArray]',
    hf = '[object Uint16Array]',
    gf = '[object Uint32Array]';
  function bf(e, t, r) {
    var n = e.constructor;
    switch (t) {
      case af:
        return Uu(e);
      case Ju:
      case Xu:
        return new n(+e);
      case of:
        return Wu(e, r);
      case sf:
      case cf:
      case lf:
      case uf:
      case ff:
      case pf:
      case df:
      case hf:
      case gf:
        return qu(e, r);
      case Zu:
        return new n();
      case Qu:
      case rf:
        return new n(e);
      case ef:
        return Ku(e);
      case tf:
        return new n();
      case nf:
        return Yu(e);
    }
  }
  var mf = bf,
    vf = T,
    At = Object.create,
    yf = (function () {
      function e() {}
      return function (t) {
        if (!vf(t)) return {};
        if (At) return At(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
      };
    })(),
    $f = yf,
    _f = $f,
    Sf = pt,
    Tf = he;
  function wf(e) {
    return typeof e.constructor == 'function' && !Tf(e) ? _f(Sf(e)) : {};
  }
  var Af = wf,
    Cf = we,
    xf = w,
    Of = '[object Map]';
  function jf(e) {
    return xf(e) && Cf(e) == Of;
  }
  var If = jf,
    Pf = If,
    Mf = de,
    Ct = D.exports,
    xt = Ct && Ct.isMap,
    Lf = xt ? Mf(xt) : Pf,
    Ef = Lf,
    kf = we,
    Nf = w,
    Bf = '[object Set]';
  function Rf(e) {
    return Nf(e) && kf(e) == Bf;
  }
  var Df = Rf,
    Ff = Df,
    zf = de,
    Ot = D.exports,
    jt = Ot && Ot.isSet,
    Vf = jt ? zf(jt) : Ff,
    Hf = Vf,
    Gf = Es,
    Uf = Ns,
    Wf = se,
    Kf = tl,
    Yf = vl,
    qf = me.exports,
    Jf = $l,
    Xf = Ml,
    Zf = Gl,
    Qf = Zl,
    ep = nu,
    tp = we,
    rp = ju,
    np = mf,
    ap = Af,
    op = y,
    ip = X.exports,
    sp = Ef,
    cp = T,
    lp = Hf,
    up = ge,
    fp = be,
    pp = 1,
    dp = 2,
    hp = 4,
    It = '[object Arguments]',
    gp = '[object Array]',
    bp = '[object Boolean]',
    mp = '[object Date]',
    vp = '[object Error]',
    Pt = '[object Function]',
    yp = '[object GeneratorFunction]',
    $p = '[object Map]',
    _p = '[object Number]',
    Mt = '[object Object]',
    Sp = '[object RegExp]',
    Tp = '[object Set]',
    wp = '[object String]',
    Ap = '[object Symbol]',
    Cp = '[object WeakMap]',
    xp = '[object ArrayBuffer]',
    Op = '[object DataView]',
    jp = '[object Float32Array]',
    Ip = '[object Float64Array]',
    Pp = '[object Int8Array]',
    Mp = '[object Int16Array]',
    Lp = '[object Int32Array]',
    Ep = '[object Uint8Array]',
    kp = '[object Uint8ClampedArray]',
    Np = '[object Uint16Array]',
    Bp = '[object Uint32Array]',
    f = {};
  (f[It] =
    f[gp] =
    f[xp] =
    f[Op] =
    f[bp] =
    f[mp] =
    f[jp] =
    f[Ip] =
    f[Pp] =
    f[Mp] =
    f[Lp] =
    f[$p] =
    f[_p] =
    f[Mt] =
    f[Sp] =
    f[Tp] =
    f[wp] =
    f[Ap] =
    f[Ep] =
    f[kp] =
    f[Np] =
    f[Bp] =
      !0),
    (f[vp] = f[Pt] = f[Cp] = !1);
  function Z(e, t, r, n, a, o) {
    var s,
      c = t & pp,
      l = t & dp,
      u = t & hp;
    if ((r && (s = a ? r(e, n, a, o) : r(e)), s !== void 0)) return s;
    if (!cp(e)) return e;
    var b = op(e);
    if (b) {
      if (((s = rp(e)), !c)) return Jf(e, s);
    } else {
      var h = tp(e),
        g = h == Pt || h == yp;
      if (ip(e)) return qf(e, c);
      if (h == Mt || h == It || (g && !a)) {
        if (((s = l || g ? {} : ap(e)), !c))
          return l ? Zf(e, Yf(s, e)) : Xf(e, Kf(s, e));
      } else {
        if (!f[h]) return a ? e : {};
        s = np(e, h, c);
      }
    }
    o || (o = new Gf());
    var x = o.get(e);
    if (x) return x;
    o.set(e, s),
      lp(e)
        ? e.forEach(function (_) {
            s.add(Z(_, t, r, _, e, o));
          })
        : sp(e) &&
          e.forEach(function (_, O) {
            s.set(O, Z(_, t, r, O, e, o));
          });
    var yh = u ? (l ? ep : Qf) : l ? fp : up,
      sr = b ? void 0 : yh(e);
    return (
      Uf(sr || e, function (_, O) {
        sr && ((O = _), (_ = e[O])), Wf(s, O, Z(_, t, r, O, e, o));
      }),
      s
    );
  }
  var Rp = Z,
    Dp = Rp,
    Fp = 1,
    zp = 4;
  function Vp(e) {
    return Dp(e, Fp | zp);
  }
  var Ce = Vp,
    Hp = { exports: {} };
  /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
    (function () {
      var t = {}.hasOwnProperty;
      function r() {
        for (var n = [], a = 0; a < arguments.length; a++) {
          var o = arguments[a];
          if (!!o) {
            var s = typeof o;
            if (s === 'string' || s === 'number') n.push(o);
            else if (Array.isArray(o)) {
              if (o.length) {
                var c = r.apply(null, o);
                c && n.push(c);
              }
            } else if (s === 'object') {
              if (
                o.toString !== Object.prototype.toString &&
                !o.toString.toString().includes('[native code]')
              ) {
                n.push(o.toString());
                continue;
              }
              for (var l in o) t.call(o, l) && o[l] && n.push(l);
            }
          }
        }
        return n.join(' ');
      }
      e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
    })();
  })(Hp);
  const Q = '[vue3-aipage-widget]';
  function Gp(e) {
    let t = $.react;
    if (!e) return t;
    let r = e.toLowerCase().trim();
    switch (r) {
      case 'jquery':
      case 'jq':
        r = $.jquery;
        break;
      case 'vue2':
      case 'vue 2':
      case 'vue2.0':
      case 'vue 2.0':
        (r = $.vue2),
          console.error(
            'vue3-aipage-widget \u4E0D\u652F\u6301 vue2.0 \u6280\u672F\u6808\uFF0C\u8BF7\u6539\u7528aipage-widget\u652F\u6301\u3002',
          );
        break;
      case 'vue':
      case 'vue3':
      case 'vue 3':
      case 'vue3.0':
      case 'vue 3.0':
        r = $.vue3;
        break;
      default:
        r = $.react;
    }
    return r;
  }
  var $;
  (function (e) {
    (e.react = 'react'),
      (e.vue2 = 'vue2'),
      (e.vue3 = 'vue3'),
      (e.jquery = 'jquery');
  })($ || ($ = {}));
  function Up(e) {
    return Object.prototype.toString.call(e).slice(8, -1) === 'String';
  }
  function Wp(e) {
    let t = !1;
    return (
      Object.prototype.toString.call(e).slice(8, -1) === 'Object' && (t = !0), t
    );
  }
  function Lt(e) {
    return parseFloat(String(e)).toString() !== 'NaN';
  }
  function Kp(e) {
    return e.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
  function Yp(e) {
    return `-${e}`.replace(/(-[A-Za-z0-9])/g, (t) =>
      t.toUpperCase().replace('-', ''),
    );
  }
  function qp(e, t = !0) {
    const r =
      e && e.__super
        ? Object.create(e.__super, {
            __super: { value: e.__super, writable: !1, enumerable: !1 },
          })
        : Object.create(Object.prototype);
    return t && e && Object.keys(e).forEach((n) => (r[n] = e[n])), r;
  }
  function Jp(e, t, r = !0) {
    const n = qp(e, r);
    return t && Object.keys(t).forEach((a) => (n[a] = t[a])), n;
  }
  const Xp = 375,
    k = function (e) {
      return e;
    };
  function d(e) {
    const t = (+[e][e && 0] / 375) * Xp;
    return Number.isNaN(t) ? void 0 : `${Math.round(t)}px`;
  }
  function Zp(e = {}) {
    const t = pe(
      Ce(e) || {},
      'backgroundImage',
      'backgroundRepeat',
      'backgroundSize',
      'backgroundPosition',
      'backgroundColor',
    );
    return (
      e.backgroundImage && /linear-gradient/g.test(e.backgroundImage)
        ? (t.backgroundImage = e.backgroundImage)
        : (e.backgroundColor && (t.backgroundColor = k(e.backgroundColor)),
          e.backgroundImage &&
            (t.backgroundImage = `url('${e.backgroundImage}')`)),
      t
    );
  }
  function Qp(e = {}) {
    let t = pe(Ce(e) || {}, 'color', 'fontFamily', 'lineHeight', 'textAlign');
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
      (t.fontSize = d(+e.fontSize)),
      (t.letterSpacing = d(+e.letterSpacing)),
      t
    );
  }
  function ed(e = {}) {
    const t = pe(
      Ce(e) || {},
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
        ? ((t.borderTopWidth = d(+e.borderTopWidth)),
          (t.borderTopColor = k(e.borderTopColor)))
        : delete t.borderTopStyle,
      +e.borderLeftWidth > 0
        ? ((t.borderLeftWidth = d(+e.borderLeftWidth)),
          (t.borderLeftColor = k(e.borderLeftColor)))
        : delete t.borderLeftStyle,
      +e.borderRightWidth > 0
        ? ((t.borderRightWidth = d(+e.borderRightWidth)),
          (t.borderRightColor = k(e.borderRightColor)))
        : delete t.borderRightStyle,
      +e.borderBottomWidth > 0
        ? ((t.borderBottomWidth = d(+e.borderBottomWidth)),
          (t.borderBottomColor = k(e.borderBottomColor)))
        : delete t.borderBottomStyle,
      (t.marginTop = d(+e.marginTop)),
      (t.marginLeft = d(+e.marginLeft)),
      (t.marginRight = d(+e.marginRight)),
      (t.marginBottom = d(+e.marginBottom)),
      (t.paddingTop = d(+e.paddingTop)),
      (t.paddingLeft = d(+e.paddingLeft)),
      (t.paddingRight = d(+e.paddingRight)),
      (t.paddingBottom = d(+e.paddingBottom)),
      (t.borderTopLeftRadius = d(+e.borderTopLeftRadius)),
      (t.borderTopRightRadius = d(+e.borderTopRightRadius)),
      (t.borderBottomLeftRadius = d(+e.borderBottomLeftRadius)),
      (t.borderBottomRightRadius = d(+e.borderBottomRightRadius)),
      t
    );
  }
  function td(e = {}) {
    var r, n;
    let t = {};
    if ((e.display && (t.display = e.display), t.display === 'flex')) {
      let a = e.flexSetting || {};
      (t.flexDirection = a.direction || 'row'),
        (t.alignItems = a.align || 'stretch'),
        (t.justifyContent = a.justify || 'flex-start');
    }
    return (
      ((r = e.flexSetting) == null ? void 0 : r.flexShrink) >= 0 &&
        (t.flexShrink = +e.flexSetting.flexShrink),
      ((n = e.flexSetting) == null ? void 0 : n.flex) >= 0 &&
        (t.flex = +e.flexSetting.flex),
      t
    );
  }
  function N(e, t) {
    const r = e[t + 'Unit'] || 'px';
    return r === 'auto' || e[t] <= 0
      ? 'auto'
      : r === 'px'
      ? d(+e[t])
      : e[t] + r;
  }
  function rd(e) {
    let { style: t = {}, isFlow: r } =
        (e == null ? void 0 : e.componentProperties) || {},
      n = (t.justification || 'top left').split(' '),
      a = {};
    return (
      r
        ? ((a.height = N(t, 'height')),
          (a.width = N(t, 'width')),
          (a.maxWidth = '100%'),
          a.width > 0 && (a.flexShrink = 0))
        : ((a[n[1]] = +t.x + 'px'),
          (a[n[0]] = +t.y + 'px'),
          (a.height = N(t, 'height') || 'auto'),
          (a.width = N(t, 'width') || '100%'),
          (a.position = t.position || 'absolute')),
      t.opacity >= 0 && (a.opacity = +t.opacity / 100),
      t.display && (a.display = t.display),
      a
    );
  }
  function nd(e = {}) {
    const {
        angle: t = 0,
        x: r,
        y: n,
        blur: a,
        size: o,
        color: s,
        distance: c,
      } = e,
      l =
        typeof r != 'undefined'
          ? r
          : Math.round(Math.sin(t * (Math.PI / 180)) * c),
      u =
        typeof n != 'undefined'
          ? n
          : -Math.round(Math.cos(t * (Math.PI / 180)) * c);
    return !r && !n && !a && !o && !c
      ? {}
      : at(l) && at(u)
      ? { boxShadow: `${d(l)} ${d(u)} ${d(a || 0)} ${d(o || 0)} ${k(s)}` }
      : {};
  }
  function ad(e, t) {
    return CSS.supports(e, t);
  }
  function Et(e = {}) {
    let t = {};
    return (
      Object.keys(e).forEach((r) => {
        switch (r) {
          case 'box':
            t = Object.assign(t, ed(e.box));
            break;
          case 'background':
            t = Object.assign(t, Zp(e.background));
            break;
          case 'font':
            t = Object.assign(t, Qp(e.font));
            break;
          case 'lineHeight':
            t.lineHeight =
              e[r] >= 12 ? `${parseInt(e[r], 10)}px` : parseInt(e[r], 10);
            break;
          case 'boxShadow':
            t = Object.assign(t, nd(e.boxShadow));
            break;
          case 'opacity':
            t.opacity = +e[r] / 100;
            break;
          case 'width':
            t.width = e.autoWidth ? 'auto' : N(e, 'width');
            break;
          case 'flexSetting':
            t = Object.assign(t, td(e));
            break;
          case 'height':
            t.height = N(e, 'height');
            break;
          default:
            let n = Lt(e[r]) ? `${+e[r]}px` : e[r];
            Wp(e[r])
              ? (t = Object.assign(t, { [r]: Et(e[r]) }))
              : ![
                  'x',
                  'y',
                  'css',
                  'lineClamp',
                  'columns',
                  'flex',
                  'scrollX',
                ].includes(r) &&
                ad(Kp(r), n) &&
                (t[r] = Lt(e[r]) ? `${+e[r]}px` : e[r]);
            break;
        }
      }),
      t
    );
  }
  (ir = window.matchMedia) == null ||
    ir.call(window, '(max-width: 768px)').matches;
  function od(e) {
    if (!e || (typeof e != 'function' && typeof e != 'object')) return;
    class t extends te.default.Component {
      constructor(a) {
        super(a);
        H(this, 'domRef');
        H(this, 'app');
        H(this, 'vm');
        H(this, 'isUnmount');
        (this.domRef = te.default.createRef()),
          (this.resolveAmisProps = this.resolveAmisProps.bind(this));
      }
      componentDidMount() {
        const { amisData: a, amisFunc: o } = this.resolveAmisProps(),
          { data: s, ...c } = (e = typeof e == 'function' ? new e() : e);
        (this.app = i.createApp({
          data: () => Jp(a, typeof s == 'function' ? s() : s),
          ...c,
          props: c.props || {},
        })),
          Object.keys(o).forEach((l) => {
            this.app.$props[l] = o[l];
          }),
          (this.vm = this.app.mount(this.domRef.current)),
          this.domRef.current.setAttribute('data-component-id', this.props.id);
      }
      componentDidUpdate() {
        if (!this.isUnmount) {
          const { amisData: a } = this.resolveAmisProps();
          this.vm &&
            Object.keys(a).forEach((o) => {
              this.vm[o] = a[o];
            });
        }
      }
      componentWillUnmount() {
        (this.isUnmount = !0), this.app.unmount();
      }
      resolveAmisProps() {
        let a = {},
          o = {};
        return (
          Object.keys(this.props).forEach((s) => {
            const c = this.props[s];
            typeof c == 'function'
              ? (a[s] = c)
              : i.isProxy(c)
              ? (o[s] = i.shallowRef(c))
              : T(c)
              ? (o[s] = i.ref(c))
              : (o[s] = c);
          }),
          { amisData: o, amisFunc: a }
        );
      }
      render() {
        const { componentProperties: a, node: o } = this.props,
          s = a && a.style ? a.style : {},
          c = { ...rd(o || this.props), ...Et(s) };
        return te.default.createElement('div', { ref: this.domRef, style: c });
      }
    }
    return t;
  }
  function id(e, t) {
    if (!e) return;
    const r = { type: '', framework: $.react };
    if (
      (t && Up(t) ? Object.assign(r, { type: t }) : Object.assign(r, t),
      r && !r.type)
    )
      console.error(
        `${Q}\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u518C\u5931\u8D25\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7C7B\u578B\uFF08type\uFF09\u4E0D\u80FD\u4E3A\u7A7A\u3002`,
      );
    else {
      r.framework = Gp(r.framework);
      const a = { react: (o) => o, vue3: od }[r.framework](e);
      if (window) {
        const o = sd(r.type, a);
        o &&
          (console.info(
            `${Q}\u89E6\u53D1\u6CE8\u518C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668(${r.type})\u4E8B\u4EF6:`,
            { type: r.type, component: a, framework: r.framework },
          ),
          window.postMessage(
            {
              type: 'aipage-editor-register-renderer-event',
              eventMsg: `${Q}\u6CE8\u518C\u4E00\u4E2A\u81EA\u5B9A\u4E49aipage-editor\u6E32\u67D3\u5668`,
              customComponentId: o,
            },
            '*',
          ));
      }
    }
  }
  function sd(e, t) {
    window &&
      !window.AIPageEditorCustomRenderers &&
      (window.AIPageEditorCustomRenderers = {});
    const r = Yp(e);
    if (window.AIPageEditorCustomRenderers[r])
      console.error(
        `${Q}\u6CE8\u518C\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\u5931\u8D25\uFF0C\u5DF2\u5B58\u5728\u540C\u540D\u6E32\u67D3\u5668\u7C7B\u578B(${e})\u3002`,
      );
    else return (window.AIPageEditorCustomRenderers[r] = t), r;
    return null;
  }
  var Sh = '',
    Th = '';
  const F = Object.assign,
    cd = Object.prototype.hasOwnProperty,
    ld = (e, t) => cd.call(e, t),
    ud = (e) => typeof e == 'function',
    kt = (e) => typeof e == 'string',
    fd = Object.prototype.toString,
    pd = (e) => fd.call(e),
    Nt = (e) => pd(e) === '[object Object]',
    Bt = `
`,
    dd = /^([a-z-]+:)?\/\//i,
    hd = /^data:.*,.*/;
  function gd(e = '') {
    return ('' + e).replace(/[^\x00-\xff]/g, '**').length;
  }
  function Rt(e) {
    return e.indexOf('/') === 0;
  }
  function xe(e) {
    return Rt(e) ? e : '/' + e;
  }
  function bd(e) {
    return Rt(e) ? e.slice(1) : e;
  }
  function md(e) {
    return { passive: e };
  }
  /*!
   * vue-router v4.1.6
   * (c) 2022 Eduardo San Martin Morote
   * @license MIT
   */ var Dt;
  (function (e) {
    (e.pop = 'pop'), (e.push = 'push');
  })(Dt || (Dt = {}));
  var Ft;
  (function (e) {
    (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
  })(Ft || (Ft = {}));
  var zt;
  (function (e) {
    (e[(e.aborted = 4)] = 'aborted'),
      (e[(e.cancelled = 8)] = 'cancelled'),
      (e[(e.duplicated = 16)] = 'duplicated');
  })(zt || (zt = {}));
  function vd(e) {
    return Symbol(e);
  }
  function yd() {
    const e = nr(),
      t = e.length;
    if (t) return e[t - 1];
  }
  function $d() {
    const e = yd();
    if (e) return e.$page.meta;
  }
  const _d = ['navigationBar', 'pullToRefresh'];
  function Sd() {
    return JSON.parse(JSON.stringify(__uniConfig.globalStyle || {}));
  }
  function Td(e, t) {
    const r = Sd(),
      n = F({ id: t }, r, e);
    _d.forEach((o) => {
      n[o] = F({}, r[o], e[o]);
    });
    const { navigationBar: a } = n;
    return a.titleText && a.titleImage && (a.titleText = ''), n;
  }
  function Vt(e, t) {
    if (t.indexOf('/') === 0) return t;
    if (t.indexOf('./') === 0) return Vt(e, t.slice(2));
    const r = t.split('/'),
      n = r.length;
    let a = 0;
    for (; a < n && r[a] === '..'; a++);
    r.splice(0, a), (t = r.join('/'));
    const o = e.length > 0 ? e.split('/') : [];
    return o.splice(o.length - a - 1, a + 1), xe(o.concat(r).join('/'));
  }
  function Ht(e) {
    return /^-?\d+[ur]px$/i.test(e)
      ? e.replace(/(^-?\d+)[ur]px$/i, (t, r) => `${Wd(parseFloat(r))}px`)
      : /^-?[\d\.]+$/.test(e)
      ? `${e}px`
      : e || '';
  }
  function wd(e) {
    return e
      .replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)
      .replace('webkit', '-webkit');
  }
  function Ad(e) {
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
      o = e.animates,
      s = e.option,
      c = s.transition,
      l = {},
      u = [];
    return (
      o.forEach((b) => {
        let h = b.type,
          g = [...b.args];
        if (t.concat(r).includes(h))
          h.startsWith('rotate') || h.startsWith('skew')
            ? (g = g.map((x) => parseFloat(x) + 'deg'))
            : h.startsWith('translate') && (g = g.map(Ht)),
            r.indexOf(h) >= 0 && (g.length = 1),
            u.push(`${h}(${g.join(',')})`);
        else if (n.concat(a).includes(g[0])) {
          h = g[0];
          const x = g[1];
          l[h] = a.includes(h) ? Ht(x) : x;
        }
      }),
      (l.transform = l.webkitTransform = u.join(' ')),
      (l.transition = l.webkitTransition =
        Object.keys(l)
          .map(
            (b) => `${wd(b)} ${c.duration}ms ${c.timingFunction} ${c.delay}ms`,
          )
          .join(',')),
      (l.transformOrigin = l.webkitTransformOrigin = s.transformOrigin),
      l
    );
  }
  function Gt(e) {
    const t = e.animation;
    if (!t || !t.actions || !t.actions.length) return;
    let r = 0;
    const n = t.actions,
      a = t.actions.length;
    function o() {
      const s = n[r],
        c = s.option.transition,
        l = Ad(s);
      Object.keys(l).forEach((u) => {
        e.$el.style[u] = l[u];
      }),
        (r += 1),
        r < a && setTimeout(o, c.duration + c.delay);
    }
    setTimeout(() => {
      o();
    }, 0);
  }
  var Cd = {
    props: ['animation'],
    watch: {
      animation: {
        deep: !0,
        handler() {
          Gt(this);
        },
      },
    },
    mounted() {
      Gt(this);
    },
  };
  const Ut = (e) => {
      e.__reserved = !0;
      const { props: t, mixins: r } = e;
      return (!t || !t.animation) && (r || (e.mixins = [])).push(Cd), ee(e);
    },
    ee = (e) => (
      (e.__reserved = !0), (e.compatConfig = { MODE: 3 }), i.defineComponent(e)
    ),
    xd = {
      hoverClass: { type: String, default: 'none' },
      hoverStopPropagation: { type: Boolean, default: !1 },
      hoverStartTime: { type: [Number, String], default: 50 },
      hoverStayTime: { type: [Number, String], default: 400 },
    };
  function Od(e) {
    const t = i.ref(!1);
    let r = !1,
      n,
      a;
    function o() {
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
          (t.value = !0), r || o();
        }, parseInt(e.hoverStartTime))));
    }
    function c() {
      (r = !1), t.value && o();
    }
    function l() {
      (r = !1), (t.value = !1), clearTimeout(n);
    }
    return {
      hovering: t,
      binding: { onTouchstartPassive: s, onTouchend: c, onTouchcancel: l },
    };
  }
  const Wt = '/';
  function Kt(e) {
    return xe(e).indexOf(Wt) === 0 ? xe(e) : Wt + e;
  }
  function jd(e) {
    const { base: t, assets: r } = __uniConfig.router;
    if (
      (t === './' &&
        (e.indexOf('./static/') === 0 ||
          (r && e.indexOf('./' + r + '/') === 0)) &&
        (e = e.slice(1)),
      e.indexOf('/') === 0)
    )
      if (e.indexOf('//') === 0) e = 'https:' + e;
      else return Kt(e.slice(1));
    if (dd.test(e) || hd.test(e) || e.indexOf('blob:') === 0) return e;
    const n = nr();
    return n.length ? Kt(Vt(n[n.length - 1].$page.route, e).slice(1)) : e;
  }
  const Id = navigator.userAgent,
    Pd = /iphone|ipad|ipod/i.test(Id);
  function Md() {
    return (
      /^Apple/.test(navigator.vendor) && typeof window.orientation == 'number'
    );
  }
  function Ld(e) {
    return e && Math.abs(window.orientation) === 90;
  }
  function Ed(e, t) {
    return e
      ? Math[t ? 'max' : 'min'](screen.width, screen.height)
      : screen.width;
  }
  function kd(e) {
    return (
      Math.min(window.innerWidth, document.documentElement.clientWidth, e) || e
    );
  }
  function Nd() {
    const e = Md(),
      t = kd(Ed(e, Ld(e)));
    return {
      platform: Pd ? 'ios' : 'other',
      pixelRatio: window.devicePixelRatio,
      windowWidth: t,
    };
  }
  function Bd(e, t) {
    const r = e[0];
    if (!t || (!Nt(t.formatArgs) && Nt(r))) return;
    const n = t.formatArgs,
      a = Object.keys(n);
    for (let o = 0; o < a.length; o++) {
      const s = a[o],
        c = n[s];
      if (ud(c)) {
        const l = c(e[0][s], r);
        if (kt(l)) return l;
      } else ld(r, s) || (r[s] = c);
    }
  }
  function Rd(e, t, r, n) {
    if (n && n.beforeInvoke) {
      const o = n.beforeInvoke(t);
      if (kt(o)) return o;
    }
    const a = Bd(t, n);
    if (a) return a;
  }
  function Dd(e, t, r, n) {
    return (...a) => {
      const o = Rd(e, a, r, n);
      if (o) throw new Error(o);
      return t.apply(null, a);
    };
  }
  function Fd(e, t, r, n) {
    return Dd(e, t, void 0, n);
  }
  const zd = 'upx2px',
    Vd = 1e-4,
    Hd = 750;
  let Yt = !1,
    Oe = 0,
    qt = 0,
    Jt = 960,
    Xt = 375;
  function Gd() {
    const { platform: e, pixelRatio: t, windowWidth: r } = Nd();
    (Oe = r), (qt = t), (Yt = e === 'ios');
  }
  function Zt(e, t) {
    const r = Number(e);
    return isNaN(r) ? t : r;
  }
  function Ud() {
    const e = __uniConfig.globalStyle || {};
    (Jt = Zt(e.rpxCalcMaxDeviceWidth, 960)),
      (Xt = Zt(e.rpxCalcBaseDeviceWidth, 375));
  }
  const Wd = Fd(zd, (e, t) => {
    if ((Oe === 0 && (Gd(), Ud()), (e = Number(e)), e === 0)) return 0;
    let r = t || Oe;
    r = r <= Jt ? r : Xt;
    let n = (e / Hd) * r;
    return (
      n < 0 && (n = -n),
      (n = Math.floor(n + Vd)),
      n === 0 && (qt === 1 || !Yt ? (n = 1) : (n = 0.5)),
      e < 0 ? -n : n
    );
  });
  [{ name: 'id', type: String, required: !0 }].concat({
    name: 'componentInstance',
    type: Object,
  });
  const z = {
    beforeInvoke() {
      const e = $d();
      if (e && !e.isTabBar) return 'not TabBar page';
    },
    formatArgs: {
      index(e) {
        if (!__uniConfig.tabBar.list[e]) return 'tabbar item not found';
      },
    },
  };
  z.beforeInvoke, z.formatArgs;
  const Kd = /^(linear|radial)-gradient\(.+?\);?$/;
  z.beforeInvoke, z.beforeInvoke, z.formatArgs;
  const Yd = md(!0),
    Qt = [];
  let je = 0,
    er;
  const tr = (e) => Qt.forEach((t) => (t.userAction = e));
  function qd(e = { userAction: !1 }) {
    er ||
      (['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup'].forEach(
        (r) => {
          document.addEventListener(
            r,
            function () {
              !je && tr(!0),
                je++,
                setTimeout(() => {
                  !--je && tr(!1);
                }, 0);
            },
            Yd,
          );
        },
      ),
      (er = !0)),
      Qt.push(e);
  }
  const V = { ensp: '\u2002', emsp: '\u2003', nbsp: '\xA0' };
  function Jd(e, t) {
    return e
      .replace(/\\n/g, Bt)
      .split(Bt)
      .map((r) => Xd(r, t));
  }
  function Xd(e, { space: t, decode: r }) {
    return !e || (t && V[t] && (e = e.replace(/ /g, V[t])), !r)
      ? e
      : e
          .replace(/&nbsp;/g, V.nbsp)
          .replace(/&ensp;/g, V.ensp)
          .replace(/&emsp;/g, V.emsp)
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'");
  }
  var Zd = Ut({
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
                if (n.shapeFlag & 8 && n.type !== i.Comment) {
                  const a = Jd(n.children, {
                      space: e.space,
                      decode: e.decode,
                    }),
                    o = a.length - 1;
                  a.forEach((s, c) => {
                    (c === 0 && !s) || r.push(i.createTextVNode(s)),
                      c !== o && r.push(i.createVNode('br'));
                  });
                } else r.push(n);
              }),
            i.createVNode(
              'uni-text',
              { selectable: e.selectable ? !0 : null },
              [i.createVNode('span', null, r)],
              8,
              ['selectable'],
            )
          );
        };
      },
    }),
    Qd = Ut({
      name: 'View',
      props: F({}, xd),
      setup(e, { slots: t }) {
        const { hovering: r, binding: n } = Od(e);
        return () => {
          const a = e.hoverClass;
          return a && a !== 'none'
            ? i.createVNode(
                'uni-view',
                i.mergeProps({ class: r.value ? a : '' }, n),
                [t.default && t.default()],
                16,
              )
            : i.createVNode('uni-view', null, [t.default && t.default()]);
        };
      },
    });
  const rr = vd('upm');
  function eh() {
    return i.inject(rr);
  }
  function th(e) {
    const t = rh(e);
    return i.provide(rr, t), t;
  }
  function rh(e) {
    return i.reactive(
      nh(JSON.parse(JSON.stringify(Td(__uniRoutes[0].meta, e)))),
    );
  }
  function nh(e) {
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
  function ah() {
    return (history.state && history.state.__id__) || 1;
  }
  const oh = new Map();
  function nr() {
    const e = [],
      t = oh.values();
    for (const r of t) r.$.__isTabBar ? r.$.__isActive && e.push(r) : e.push(r);
    return e;
  }
  qd();
  function ih(e) {
    document.title = e;
  }
  function sh(e) {
    function t() {
      ih(e.navigationBar.titleText);
    }
    i.watchEffect(t), i.onActivated(t);
  }
  var ch = ee({
    name: 'PageHead',
    setup() {
      const e = i.ref(null),
        r = eh().navigationBar,
        { clazz: n, style: a } = fh(r);
      return () => {
        const s = [],
          c = [],
          l = r.type || 'default',
          u =
            l !== 'transparent' &&
            l !== 'float' &&
            i.createVNode(
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
        return i.createVNode(
          'uni-page-head',
          { 'uni-page-head-type': l },
          [
            i.createVNode(
              'div',
              { ref: e, class: n.value, style: a.value },
              [
                i.createVNode('div', { class: 'uni-page-head-hd' }, [
                  null,
                  ...s,
                ]),
                lh(r),
                i.createVNode('div', { class: 'uni-page-head-ft' }, [...c]),
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
  function lh(e, t) {
    return uh(e);
  }
  function uh({
    type: e,
    loading: t,
    titleSize: r,
    titleText: n,
    titleImage: a,
  }) {
    return i.createVNode('div', { class: 'uni-page-head-bd' }, [
      i.createVNode(
        'div',
        {
          style: { fontSize: r, opacity: e === 'transparent' ? 0 : 1 },
          class: 'uni-page-head__title',
        },
        [
          t
            ? i.createVNode('i', { class: 'uni-loading' }, null)
            : a
            ? i.createVNode(
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
  function fh(e) {
    const t = i.computed(() => {
        const { type: n, titlePenetrate: a, shadowColorType: o } = e,
          s = {
            'uni-page-head': !0,
            'uni-page-head-transparent': n === 'transparent',
            'uni-page-head-titlePenetrate': a === 'YES',
            'uni-page-head-shadow': !!o,
          };
        return o && (s[`uni-page-head-shadow-${o}`] = !0), s;
      }),
      r = i.computed(() => ({
        backgroundColor: e.backgroundColor,
        color: e.titleColor,
        transitionDuration: e.duration,
        transitionTimingFunction: e.timingFunc,
      }));
    return { clazz: t, style: r };
  }
  var ph = ee({
    name: 'PageBody',
    setup(e, t) {
      return () =>
        i.createVNode(i.Fragment, null, [
          !1,
          i.createVNode(
            'uni-page-wrapper',
            null,
            [
              i.createVNode('uni-page-body', null, [
                i.renderSlot(t.slots, 'default'),
              ]),
            ],
            16,
          ),
        ]);
    },
  });
  ee({
    name: 'Page',
    setup(e, t) {
      const r = th(ah()),
        n = r.navigationBar;
      return (
        sh(r),
        () =>
          i.createVNode(
            'uni-page',
            { 'data-page': r.route },
            n.style !== 'custom' ? [i.createVNode(ch), ar(t)] : [ar(t)],
          )
      );
    },
  });
  function ar(e) {
    return (
      i.openBlock(),
      i.createBlock(
        ph,
        { key: 0 },
        { default: i.withCtx(() => [i.renderSlot(e.slots, 'page')]), _: 3 },
      )
    );
  }
  var Ah = '',
    Ch = '',
    or = (e, t) => {
      const r = e.__vccOpts || e;
      for (const [n, a] of t) r[n] = a;
      return r;
    };
  const dh = {
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
        let o = [];
        o.length = 3;
        for (let s = 0; s < 3; s++) {
          o[s] = this.shuffle(e);
          for (let c = 0, l = o[s].length; c < l; c++)
            o[s][c].HMSM_id = 'id_' + s + '_' + c;
        }
        if (
          ((this.shaftList = o),
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
            for (let a = 0, o = this.shaftList[r].length; a < o; a++)
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
          const o = Math.floor(Math.random() * (a + 1));
          [t[a], t[o]] = [t[o], t[a]];
        }
        let r = Math.ceil(40 / e.length),
          n = [];
        for (; r > 0; ) n.push(...t), r--;
        return JSON.parse(JSON.stringify(n));
      },
    },
  };
  function hh(e, t, r, n, a, o) {
    const s = Qd;
    return (
      i.openBlock(),
      i.createElementBlock('div', { class: 'shell' }, [
        i.createElementVNode('div', { class: 'l' }, [
          i.createCommentVNode(' \u5C0F\u706F\u5217\u8868 '),
          (i.openBlock(!0),
          i.createElementBlock(
            i.Fragment,
            null,
            i.renderList(
              a.lamps,
              (c, l) => (
                i.openBlock(),
                i.createElementBlock(
                  'div',
                  {
                    class: 'lamp',
                    key: c.color,
                    style: i.normalizeStyle({
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
        i.createElementVNode('div', { class: 'c' }, [
          i.createElementVNode('div', { class: 'HMSM' }, [
            i.createCommentVNode(' \u80CC\u666F '),
            i.createElementVNode('div', { class: 'HMSM-display-bg' }, [
              (i.openBlock(!0),
              i.createElementBlock(
                i.Fragment,
                null,
                i.renderList(
                  a.shaftList,
                  (c, l) => (
                    i.openBlock(),
                    i.createElementBlock('div', { key: l, class: 'box' })
                  ),
                ),
                128,
              )),
            ]),
            i.createCommentVNode(' \u5956\u54C1\u5217\u8868 '),
            i.createElementVNode('div', { class: 'HMSM-display' }, [
              (i.openBlock(!0),
              i.createElementBlock(
                i.Fragment,
                null,
                i.renderList(
                  a.shaftList,
                  (c, l) => (
                    i.openBlock(),
                    i.createElementBlock(
                      'div',
                      {
                        key: l,
                        class: i.normalizeClass([
                          'HMSM-shaft',
                          { roll_animation: a.rollState == 'start' },
                        ]),
                        style: i.normalizeStyle({
                          transform:
                            'translate3d(0, ' + a.translateY[l] + '%, 0)',
                          'transition-duration': a.duration + 'ms',
                        }),
                      },
                      [
                        (i.openBlock(!0),
                        i.createElementBlock(
                          i.Fragment,
                          null,
                          i.renderList(
                            c,
                            (u, b) => (
                              i.openBlock(),
                              i.createBlock(
                                s,
                                { class: 'img-view', key: u.HMSM_id },
                                {
                                  default: i.withCtx(() => [
                                    i.createElementVNode(
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
        i.createElementVNode('div', { class: 'r' }, [
          i.createCommentVNode(' \u5C0F\u706F\u5217\u8868 '),
          (i.openBlock(!0),
          i.createElementBlock(
            i.Fragment,
            null,
            i.renderList(
              a.lamps,
              (c, l) => (
                i.openBlock(),
                i.createElementBlock(
                  'div',
                  {
                    class: 'lamp',
                    key: c.color,
                    style: i.normalizeStyle({
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
  var gh = or(dh, [
      ['render', hh],
      ['__scopeId', 'data-v-45bc17dd'],
    ]),
    xh = '';
  const bh = {
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
    components: { LotteryMachine: gh },
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
  function mh(e, t, r, n, a, o) {
    const s = i.resolveComponent('LotteryMachine'),
      c = Zd;
    return (
      i.openBlock(),
      i.createElementBlock('div', { class: 'content' }, [
        i.createElementVNode('div', { class: 'sm' }, [
          i.createVNode(s, { ref: 'LotteryMachine' }, null, 512),
        ]),
        i.createElementVNode(
          'div',
          {
            class: 'start',
            onClick:
              t[0] ||
              (t[0] = i.withModifiers(
                (...l) => o.startLottery && o.startLottery(...l),
                ['stop'],
              )),
          },
          [
            i.createVNode(
              c,
              { class: 'start-text' },
              {
                default: i.withCtx(() => [i.createTextVNode('\u62BD\u5956')]),
                _: 1,
              },
            ),
          ],
        ),
      ])
    );
  }
  var vh = or(bh, [
    ['render', mh],
    ['__scopeId', 'data-v-f54b6e0a'],
  ]);
  id(vh, { type: 'uni-lottery-card', framework: 'vue3' });
});

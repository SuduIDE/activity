import { a8 as q, a9 as fr, aa as O, ab as x, ac as F, ad as fn, ae as dr, af as cr, ag as hr, ah as Te, ai as lr, aj as vr, ak as dn, al as X, am as gr, an as Le, ao as pr, ap as H, aq as an, ar as Cn, as as br, at as Ln, au as wr, av as mr, aw as U, ax as In, ay as _r, az as Ae, aA as Kn, aB as Er, aC as yr, aD as Ne, aE as V, aF as Oe, aG as xr, aH as Pn, aI as on, aJ as Tr, aK as bn, aL as Lr, aM as B, y as Xn, aN as Vn, aO as An } from "./mermaid-d06ecb0d.js";
var Ar = "[object Symbol]";
function $(n) {
  return typeof n == "symbol" || q(n) && fr(n) == Ar;
}
function R(n, e) {
  for (var r = -1, t = n == null ? 0 : n.length, i = Array(t); ++r < t; )
    i[r] = e(n[r], r, n);
  return i;
}
var Nr = 1 / 0, Zn = O ? O.prototype : void 0, Jn = Zn ? Zn.toString : void 0;
function Ce(n) {
  if (typeof n == "string")
    return n;
  if (x(n))
    return R(n, Ce) + "";
  if ($(n))
    return Jn ? Jn.call(n) : "";
  var e = n + "";
  return e == "0" && 1 / n == -Nr ? "-0" : e;
}
var Or = /\s/;
function Cr(n) {
  for (var e = n.length; e-- && Or.test(n.charAt(e)); )
    ;
  return e;
}
var Ir = /^\s+/;
function Pr(n) {
  return n && n.slice(0, Cr(n) + 1).replace(Ir, "");
}
var Qn = 0 / 0, $r = /^[-+]0x[0-9a-f]+$/i, Sr = /^0b[01]+$/i, Mr = /^0o[0-7]+$/i, Rr = parseInt;
function Fr(n) {
  if (typeof n == "number")
    return n;
  if ($(n))
    return Qn;
  if (F(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = F(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = Pr(n);
  var r = Sr.test(n);
  return r || Mr.test(n) ? Rr(n.slice(2), r ? 2 : 8) : $r.test(n) ? Qn : +n;
}
var zn = 1 / 0, Dr = 17976931348623157e292;
function rn(n) {
  if (!n)
    return n === 0 ? n : 0;
  if (n = Fr(n), n === zn || n === -zn) {
    var e = n < 0 ? -1 : 1;
    return e * Dr;
  }
  return n === n ? n : 0;
}
function kr(n) {
  var e = rn(n), r = e % 1;
  return e === e ? r ? e - r : e : 0;
}
function Gr() {
}
function Ie(n, e) {
  for (var r = -1, t = n == null ? 0 : n.length; ++r < t && e(n[r], r, n) !== !1; )
    ;
  return n;
}
function Pe(n, e, r, t) {
  for (var i = n.length, a = r + (t ? 1 : -1); t ? a-- : ++a < i; )
    if (e(n[a], a, n))
      return a;
  return -1;
}
function Br(n) {
  return n !== n;
}
function Yr(n, e, r) {
  for (var t = r - 1, i = n.length; ++t < i; )
    if (n[t] === e)
      return t;
  return -1;
}
function Ur(n, e, r) {
  return e === e ? Yr(n, e, r) : Pe(n, Br, r);
}
function qr(n, e) {
  var r = n == null ? 0 : n.length;
  return !!r && Ur(n, e, 0) > -1;
}
function T(n) {
  return fn(n) ? dr(n) : cr(n);
}
var Hr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, jr = /^\w*$/;
function $n(n, e) {
  if (x(n))
    return !1;
  var r = typeof n;
  return r == "number" || r == "symbol" || r == "boolean" || n == null || $(n) ? !0 : jr.test(n) || !Hr.test(n) || e != null && n in Object(e);
}
var Wr = 500;
function Kr(n) {
  var e = hr(n, function(t) {
    return r.size === Wr && r.clear(), t;
  }), r = e.cache;
  return e;
}
var Xr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vr = /\\(\\)?/g, Zr = Kr(function(n) {
  var e = [];
  return n.charCodeAt(0) === 46 && e.push(""), n.replace(Xr, function(r, t, i, a) {
    e.push(i ? a.replace(Vr, "$1") : t || r);
  }), e;
});
const Jr = Zr;
function $e(n) {
  return n == null ? "" : Ce(n);
}
function cn(n, e) {
  return x(n) ? n : $n(n, e) ? [n] : Jr($e(n));
}
var Qr = 1 / 0;
function Z(n) {
  if (typeof n == "string" || $(n))
    return n;
  var e = n + "";
  return e == "0" && 1 / n == -Qr ? "-0" : e;
}
function hn(n, e) {
  e = cn(e, n);
  for (var r = 0, t = e.length; n != null && r < t; )
    n = n[Z(e[r++])];
  return r && r == t ? n : void 0;
}
function zr(n, e, r) {
  var t = n == null ? void 0 : hn(n, e);
  return t === void 0 ? r : t;
}
function Sn(n, e) {
  for (var r = -1, t = e.length, i = n.length; ++r < t; )
    n[i + r] = e[r];
  return n;
}
var ne = O ? O.isConcatSpreadable : void 0;
function nt(n) {
  return x(n) || Te(n) || !!(ne && n && n[ne]);
}
function ln(n, e, r, t, i) {
  var a = -1, o = n.length;
  for (r || (r = nt), i || (i = []); ++a < o; ) {
    var s = n[a];
    e > 0 && r(s) ? e > 1 ? ln(s, e - 1, r, t, i) : Sn(i, s) : t || (i[i.length] = s);
  }
  return i;
}
function k(n) {
  var e = n == null ? 0 : n.length;
  return e ? ln(n, 1) : [];
}
function et(n) {
  return lr(vr(n, void 0, k), n + "");
}
function rt(n, e, r, t) {
  var i = -1, a = n == null ? 0 : n.length;
  for (t && a && (r = n[++i]); ++i < a; )
    r = e(r, n[i], i, n);
  return r;
}
function tt(n, e) {
  return n && dn(e, T(e), n);
}
function it(n, e) {
  return n && dn(e, X(e), n);
}
function Se(n, e) {
  for (var r = -1, t = n == null ? 0 : n.length, i = 0, a = []; ++r < t; ) {
    var o = n[r];
    e(o, r, n) && (a[i++] = o);
  }
  return a;
}
function Me() {
  return [];
}
var at = Object.prototype, ot = at.propertyIsEnumerable, ee = Object.getOwnPropertySymbols, st = ee ? function(n) {
  return n == null ? [] : (n = Object(n), Se(ee(n), function(e) {
    return ot.call(n, e);
  }));
} : Me;
const Mn = st;
function ut(n, e) {
  return dn(n, Mn(n), e);
}
var ft = Object.getOwnPropertySymbols, dt = ft ? function(n) {
  for (var e = []; n; )
    Sn(e, Mn(n)), n = gr(n);
  return e;
} : Me;
const Re = dt;
function ct(n, e) {
  return dn(n, Re(n), e);
}
function Fe(n, e, r) {
  var t = e(n);
  return x(n) ? t : Sn(t, r(n));
}
function Nn(n) {
  return Fe(n, T, Mn);
}
function ht(n) {
  return Fe(n, X, Re);
}
var lt = Object.prototype, vt = lt.hasOwnProperty;
function gt(n) {
  var e = n.length, r = new n.constructor(e);
  return e && typeof n[0] == "string" && vt.call(n, "index") && (r.index = n.index, r.input = n.input), r;
}
function pt(n, e) {
  var r = e ? Le(n.buffer) : n.buffer;
  return new n.constructor(r, n.byteOffset, n.byteLength);
}
var bt = /\w*$/;
function wt(n) {
  var e = new n.constructor(n.source, bt.exec(n));
  return e.lastIndex = n.lastIndex, e;
}
var re = O ? O.prototype : void 0, te = re ? re.valueOf : void 0;
function mt(n) {
  return te ? Object(te.call(n)) : {};
}
var _t = "[object Boolean]", Et = "[object Date]", yt = "[object Map]", xt = "[object Number]", Tt = "[object RegExp]", Lt = "[object Set]", At = "[object String]", Nt = "[object Symbol]", Ot = "[object ArrayBuffer]", Ct = "[object DataView]", It = "[object Float32Array]", Pt = "[object Float64Array]", $t = "[object Int8Array]", St = "[object Int16Array]", Mt = "[object Int32Array]", Rt = "[object Uint8Array]", Ft = "[object Uint8ClampedArray]", Dt = "[object Uint16Array]", kt = "[object Uint32Array]";
function Gt(n, e, r) {
  var t = n.constructor;
  switch (e) {
    case Ot:
      return Le(n);
    case _t:
    case Et:
      return new t(+n);
    case Ct:
      return pt(n, r);
    case It:
    case Pt:
    case $t:
    case St:
    case Mt:
    case Rt:
    case Ft:
    case Dt:
    case kt:
      return pr(n, r);
    case yt:
      return new t();
    case xt:
    case At:
      return new t(n);
    case Tt:
      return wt(n);
    case Lt:
      return new t();
    case Nt:
      return mt(n);
  }
}
var Bt = "[object Map]";
function Yt(n) {
  return q(n) && H(n) == Bt;
}
var ie = an && an.isMap, Ut = ie ? Cn(ie) : Yt;
const qt = Ut;
var Ht = "[object Set]";
function jt(n) {
  return q(n) && H(n) == Ht;
}
var ae = an && an.isSet, Wt = ae ? Cn(ae) : jt;
const Kt = Wt;
var Xt = 1, Vt = 2, Zt = 4, De = "[object Arguments]", Jt = "[object Array]", Qt = "[object Boolean]", zt = "[object Date]", ni = "[object Error]", ke = "[object Function]", ei = "[object GeneratorFunction]", ri = "[object Map]", ti = "[object Number]", Ge = "[object Object]", ii = "[object RegExp]", ai = "[object Set]", oi = "[object String]", si = "[object Symbol]", ui = "[object WeakMap]", fi = "[object ArrayBuffer]", di = "[object DataView]", ci = "[object Float32Array]", hi = "[object Float64Array]", li = "[object Int8Array]", vi = "[object Int16Array]", gi = "[object Int32Array]", pi = "[object Uint8Array]", bi = "[object Uint8ClampedArray]", wi = "[object Uint16Array]", mi = "[object Uint32Array]", w = {};
w[De] = w[Jt] = w[fi] = w[di] = w[Qt] = w[zt] = w[ci] = w[hi] = w[li] = w[vi] = w[gi] = w[ri] = w[ti] = w[Ge] = w[ii] = w[ai] = w[oi] = w[si] = w[pi] = w[bi] = w[wi] = w[mi] = !0;
w[ni] = w[ke] = w[ui] = !1;
function tn(n, e, r, t, i, a) {
  var o, s = e & Xt, u = e & Vt, f = e & Zt;
  if (r && (o = i ? r(n, t, i, a) : r(n)), o !== void 0)
    return o;
  if (!F(n))
    return n;
  var d = x(n);
  if (d) {
    if (o = gt(n), !s)
      return br(n, o);
  } else {
    var h = H(n), l = h == ke || h == ei;
    if (Ln(n))
      return wr(n, s);
    if (h == Ge || h == De || l && !i) {
      if (o = u || l ? {} : mr(n), !s)
        return u ? ct(n, it(o, n)) : ut(n, tt(o, n));
    } else {
      if (!w[h])
        return i ? n : {};
      o = Gt(n, h, s);
    }
  }
  a || (a = new U());
  var g = a.get(n);
  if (g)
    return g;
  a.set(n, o), Kt(n) ? n.forEach(function(m) {
    o.add(tn(m, e, r, m, n, a));
  }) : qt(n) && n.forEach(function(m, _) {
    o.set(_, tn(m, e, r, _, n, a));
  });
  var v = f ? u ? ht : Nn : u ? X : T, p = d ? void 0 : v(n);
  return Ie(p || n, function(m, _) {
    p && (_ = m, m = n[_]), In(o, _, tn(m, e, r, _, n, a));
  }), o;
}
var _i = 1, Ei = 4;
function yi(n) {
  return tn(n, _i | Ei);
}
var xi = "__lodash_hash_undefined__";
function Ti(n) {
  return this.__data__.set(n, xi), this;
}
function Li(n) {
  return this.__data__.has(n);
}
function j(n) {
  var e = -1, r = n == null ? 0 : n.length;
  for (this.__data__ = new _r(); ++e < r; )
    this.add(n[e]);
}
j.prototype.add = j.prototype.push = Ti;
j.prototype.has = Li;
function Ai(n, e) {
  for (var r = -1, t = n == null ? 0 : n.length; ++r < t; )
    if (e(n[r], r, n))
      return !0;
  return !1;
}
function Be(n, e) {
  return n.has(e);
}
var Ni = 1, Oi = 2;
function Ye(n, e, r, t, i, a) {
  var o = r & Ni, s = n.length, u = e.length;
  if (s != u && !(o && u > s))
    return !1;
  var f = a.get(n), d = a.get(e);
  if (f && d)
    return f == e && d == n;
  var h = -1, l = !0, g = r & Oi ? new j() : void 0;
  for (a.set(n, e), a.set(e, n); ++h < s; ) {
    var v = n[h], p = e[h];
    if (t)
      var m = o ? t(p, v, h, e, n, a) : t(v, p, h, n, e, a);
    if (m !== void 0) {
      if (m)
        continue;
      l = !1;
      break;
    }
    if (g) {
      if (!Ai(e, function(_, I) {
        if (!Be(g, I) && (v === _ || i(v, _, r, t, a)))
          return g.push(I);
      })) {
        l = !1;
        break;
      }
    } else if (!(v === p || i(v, p, r, t, a))) {
      l = !1;
      break;
    }
  }
  return a.delete(n), a.delete(e), l;
}
function Ci(n) {
  var e = -1, r = Array(n.size);
  return n.forEach(function(t, i) {
    r[++e] = [i, t];
  }), r;
}
function Rn(n) {
  var e = -1, r = Array(n.size);
  return n.forEach(function(t) {
    r[++e] = t;
  }), r;
}
var Ii = 1, Pi = 2, $i = "[object Boolean]", Si = "[object Date]", Mi = "[object Error]", Ri = "[object Map]", Fi = "[object Number]", Di = "[object RegExp]", ki = "[object Set]", Gi = "[object String]", Bi = "[object Symbol]", Yi = "[object ArrayBuffer]", Ui = "[object DataView]", oe = O ? O.prototype : void 0, wn = oe ? oe.valueOf : void 0;
function qi(n, e, r, t, i, a, o) {
  switch (r) {
    case Ui:
      if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
        return !1;
      n = n.buffer, e = e.buffer;
    case Yi:
      return !(n.byteLength != e.byteLength || !a(new Kn(n), new Kn(e)));
    case $i:
    case Si:
    case Fi:
      return Ae(+n, +e);
    case Mi:
      return n.name == e.name && n.message == e.message;
    case Di:
    case Gi:
      return n == e + "";
    case Ri:
      var s = Ci;
    case ki:
      var u = t & Ii;
      if (s || (s = Rn), n.size != e.size && !u)
        return !1;
      var f = o.get(n);
      if (f)
        return f == e;
      t |= Pi, o.set(n, e);
      var d = Ye(s(n), s(e), t, i, a, o);
      return o.delete(n), d;
    case Bi:
      if (wn)
        return wn.call(n) == wn.call(e);
  }
  return !1;
}
var Hi = 1, ji = Object.prototype, Wi = ji.hasOwnProperty;
function Ki(n, e, r, t, i, a) {
  var o = r & Hi, s = Nn(n), u = s.length, f = Nn(e), d = f.length;
  if (u != d && !o)
    return !1;
  for (var h = u; h--; ) {
    var l = s[h];
    if (!(o ? l in e : Wi.call(e, l)))
      return !1;
  }
  var g = a.get(n), v = a.get(e);
  if (g && v)
    return g == e && v == n;
  var p = !0;
  a.set(n, e), a.set(e, n);
  for (var m = o; ++h < u; ) {
    l = s[h];
    var _ = n[l], I = e[l];
    if (t)
      var Wn = o ? t(I, _, l, e, n, a) : t(_, I, l, n, e, a);
    if (!(Wn === void 0 ? _ === I || i(_, I, r, t, a) : Wn)) {
      p = !1;
      break;
    }
    m || (m = l == "constructor");
  }
  if (p && !m) {
    var z = n.constructor, nn = e.constructor;
    z != nn && "constructor" in n && "constructor" in e && !(typeof z == "function" && z instanceof z && typeof nn == "function" && nn instanceof nn) && (p = !1);
  }
  return a.delete(n), a.delete(e), p;
}
var Xi = 1, se = "[object Arguments]", ue = "[object Array]", en = "[object Object]", Vi = Object.prototype, fe = Vi.hasOwnProperty;
function Zi(n, e, r, t, i, a) {
  var o = x(n), s = x(e), u = o ? ue : H(n), f = s ? ue : H(e);
  u = u == se ? en : u, f = f == se ? en : f;
  var d = u == en, h = f == en, l = u == f;
  if (l && Ln(n)) {
    if (!Ln(e))
      return !1;
    o = !0, d = !1;
  }
  if (l && !d)
    return a || (a = new U()), o || Er(n) ? Ye(n, e, r, t, i, a) : qi(n, e, u, r, t, i, a);
  if (!(r & Xi)) {
    var g = d && fe.call(n, "__wrapped__"), v = h && fe.call(e, "__wrapped__");
    if (g || v) {
      var p = g ? n.value() : n, m = v ? e.value() : e;
      return a || (a = new U()), i(p, m, r, t, a);
    }
  }
  return l ? (a || (a = new U()), Ki(n, e, r, t, i, a)) : !1;
}
function Fn(n, e, r, t, i) {
  return n === e ? !0 : n == null || e == null || !q(n) && !q(e) ? n !== n && e !== e : Zi(n, e, r, t, Fn, i);
}
var Ji = 1, Qi = 2;
function zi(n, e, r, t) {
  var i = r.length, a = i, o = !t;
  if (n == null)
    return !a;
  for (n = Object(n); i--; ) {
    var s = r[i];
    if (o && s[2] ? s[1] !== n[s[0]] : !(s[0] in n))
      return !1;
  }
  for (; ++i < a; ) {
    s = r[i];
    var u = s[0], f = n[u], d = s[1];
    if (o && s[2]) {
      if (f === void 0 && !(u in n))
        return !1;
    } else {
      var h = new U();
      if (t)
        var l = t(f, d, u, n, e, h);
      if (!(l === void 0 ? Fn(d, f, Ji | Qi, t, h) : l))
        return !1;
    }
  }
  return !0;
}
function Ue(n) {
  return n === n && !F(n);
}
function na(n) {
  for (var e = T(n), r = e.length; r--; ) {
    var t = e[r], i = n[t];
    e[r] = [t, i, Ue(i)];
  }
  return e;
}
function qe(n, e) {
  return function(r) {
    return r == null ? !1 : r[n] === e && (e !== void 0 || n in Object(r));
  };
}
function ea(n) {
  var e = na(n);
  return e.length == 1 && e[0][2] ? qe(e[0][0], e[0][1]) : function(r) {
    return r === n || zi(r, n, e);
  };
}
function ra(n, e) {
  return n != null && e in Object(n);
}
function He(n, e, r) {
  e = cn(e, n);
  for (var t = -1, i = e.length, a = !1; ++t < i; ) {
    var o = Z(e[t]);
    if (!(a = n != null && r(n, o)))
      break;
    n = n[o];
  }
  return a || ++t != i ? a : (i = n == null ? 0 : n.length, !!i && yr(i) && Ne(o, i) && (x(n) || Te(n)));
}
function je(n, e) {
  return n != null && He(n, e, ra);
}
var ta = 1, ia = 2;
function aa(n, e) {
  return $n(n) && Ue(e) ? qe(Z(n), e) : function(r) {
    var t = zr(r, n);
    return t === void 0 && t === e ? je(r, n) : Fn(e, t, ta | ia);
  };
}
function oa(n) {
  return function(e) {
    return e == null ? void 0 : e[n];
  };
}
function sa(n) {
  return function(e) {
    return hn(e, n);
  };
}
function ua(n) {
  return $n(n) ? oa(Z(n)) : sa(n);
}
function C(n) {
  return typeof n == "function" ? n : n == null ? V : typeof n == "object" ? x(n) ? aa(n[0], n[1]) : ea(n) : ua(n);
}
function Dn(n, e) {
  return n && Oe(n, e, T);
}
function fa(n, e) {
  return function(r, t) {
    if (r == null)
      return r;
    if (!fn(r))
      return n(r, t);
    for (var i = r.length, a = e ? i : -1, o = Object(r); (e ? a-- : ++a < i) && t(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var da = fa(Dn);
const vn = da;
var ca = function() {
  return xr.Date.now();
};
const de = ca;
var We = Object.prototype, ha = We.hasOwnProperty, la = Pn(function(n, e) {
  n = Object(n);
  var r = -1, t = e.length, i = t > 2 ? e[2] : void 0;
  for (i && on(e[0], e[1], i) && (t = 1); ++r < t; )
    for (var a = e[r], o = X(a), s = -1, u = o.length; ++s < u; ) {
      var f = o[s], d = n[f];
      (d === void 0 || Ae(d, We[f]) && !ha.call(n, f)) && (n[f] = a[f]);
    }
  return n;
});
const va = la;
function ga(n, e, r) {
  for (var t = -1, i = n == null ? 0 : n.length; ++t < i; )
    if (r(e, n[t]))
      return !0;
  return !1;
}
function sn(n) {
  var e = n == null ? 0 : n.length;
  return e ? n[e - 1] : void 0;
}
function kn(n) {
  return typeof n == "function" ? n : V;
}
function c(n, e) {
  var r = x(n) ? Ie : vn;
  return r(n, kn(e));
}
function pa(n, e) {
  var r = [];
  return vn(n, function(t, i, a) {
    e(t, i, a) && r.push(t);
  }), r;
}
function A(n, e) {
  var r = x(n) ? Se : pa;
  return r(n, C(e));
}
function ba(n) {
  return function(e, r, t) {
    var i = Object(e);
    if (!fn(e)) {
      var a = C(r);
      e = T(e), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = n(e, r, t);
    return o > -1 ? i[a ? e[o] : o] : void 0;
  };
}
var wa = Math.max;
function ma(n, e, r) {
  var t = n == null ? 0 : n.length;
  if (!t)
    return -1;
  var i = r == null ? 0 : kr(r);
  return i < 0 && (i = wa(t + i, 0)), Pe(n, C(e), i);
}
var _a = ba(ma);
const Gn = _a;
function Ke(n, e) {
  var r = -1, t = fn(n) ? Array(n.length) : [];
  return vn(n, function(i, a, o) {
    t[++r] = e(i, a, o);
  }), t;
}
function E(n, e) {
  var r = x(n) ? R : Ke;
  return r(n, C(e));
}
function Ea(n, e) {
  return n == null ? n : Oe(n, kn(e), X);
}
function ya(n, e) {
  return n && Dn(n, kn(e));
}
function xa(n, e) {
  return n > e;
}
var Ta = Object.prototype, La = Ta.hasOwnProperty;
function Aa(n, e) {
  return n != null && La.call(n, e);
}
function b(n, e) {
  return n != null && He(n, e, Aa);
}
function Na(n, e) {
  return R(e, function(r) {
    return n[r];
  });
}
function N(n) {
  return n == null ? [] : Na(n, T(n));
}
function y(n) {
  return n === void 0;
}
function Xe(n, e) {
  return n < e;
}
function gn(n, e) {
  var r = {};
  return e = C(e), Dn(n, function(t, i, a) {
    Tr(r, i, e(t, i, a));
  }), r;
}
function Bn(n, e, r) {
  for (var t = -1, i = n.length; ++t < i; ) {
    var a = n[t], o = e(a);
    if (o != null && (s === void 0 ? o === o && !$(o) : r(o, s)))
      var s = o, u = a;
  }
  return u;
}
function S(n) {
  return n && n.length ? Bn(n, V, xa) : void 0;
}
function W(n) {
  return n && n.length ? Bn(n, V, Xe) : void 0;
}
function Yn(n, e) {
  return n && n.length ? Bn(n, C(e), Xe) : void 0;
}
function Oa(n, e, r, t) {
  if (!F(n))
    return n;
  e = cn(e, n);
  for (var i = -1, a = e.length, o = a - 1, s = n; s != null && ++i < a; ) {
    var u = Z(e[i]), f = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return n;
    if (i != o) {
      var d = s[u];
      f = t ? t(d, u, s) : void 0, f === void 0 && (f = F(d) ? d : Ne(e[i + 1]) ? [] : {});
    }
    In(s, u, f), s = s[u];
  }
  return n;
}
function Ca(n, e, r) {
  for (var t = -1, i = e.length, a = {}; ++t < i; ) {
    var o = e[t], s = hn(n, o);
    r(s, o) && Oa(a, cn(o, n), s);
  }
  return a;
}
function Ia(n, e) {
  var r = n.length;
  for (n.sort(e); r--; )
    n[r] = n[r].value;
  return n;
}
function Pa(n, e) {
  if (n !== e) {
    var r = n !== void 0, t = n === null, i = n === n, a = $(n), o = e !== void 0, s = e === null, u = e === e, f = $(e);
    if (!s && !f && !a && n > e || a && o && u && !s && !f || t && o && u || !r && u || !i)
      return 1;
    if (!t && !a && !f && n < e || f && r && i && !t && !a || s && r && i || !o && i || !u)
      return -1;
  }
  return 0;
}
function $a(n, e, r) {
  for (var t = -1, i = n.criteria, a = e.criteria, o = i.length, s = r.length; ++t < o; ) {
    var u = Pa(i[t], a[t]);
    if (u) {
      if (t >= s)
        return u;
      var f = r[t];
      return u * (f == "desc" ? -1 : 1);
    }
  }
  return n.index - e.index;
}
function Sa(n, e, r) {
  e.length ? e = R(e, function(a) {
    return x(a) ? function(o) {
      return hn(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : e = [V];
  var t = -1;
  e = R(e, Cn(C));
  var i = Ke(n, function(a, o, s) {
    var u = R(e, function(f) {
      return f(a);
    });
    return { criteria: u, index: ++t, value: a };
  });
  return Ia(i, function(a, o) {
    return $a(a, o, r);
  });
}
function Ma(n, e) {
  return Ca(n, e, function(r, t) {
    return je(n, t);
  });
}
var Ra = et(function(n, e) {
  return n == null ? {} : Ma(n, e);
});
const un = Ra;
var Fa = Math.ceil, Da = Math.max;
function ka(n, e, r, t) {
  for (var i = -1, a = Da(Fa((e - n) / (r || 1)), 0), o = Array(a); a--; )
    o[t ? a : ++i] = n, n += r;
  return o;
}
function Ga(n) {
  return function(e, r, t) {
    return t && typeof t != "number" && on(e, r, t) && (r = t = void 0), e = rn(e), r === void 0 ? (r = e, e = 0) : r = rn(r), t = t === void 0 ? e < r ? 1 : -1 : rn(t), ka(e, r, t, n);
  };
}
var Ba = Ga();
const D = Ba;
function Ya(n, e, r, t, i) {
  return i(n, function(a, o, s) {
    r = t ? (t = !1, a) : e(r, a, o, s);
  }), r;
}
function J(n, e, r) {
  var t = x(n) ? rt : Ya, i = arguments.length < 3;
  return t(n, C(e), r, i, vn);
}
var Ua = Pn(function(n, e) {
  if (n == null)
    return [];
  var r = e.length;
  return r > 1 && on(n, e[0], e[1]) ? e = [] : r > 2 && on(e[0], e[1], e[2]) && (e = [e[0]]), Sa(n, ln(e, 1), []);
});
const Q = Ua;
var qa = 1 / 0, Ha = bn && 1 / Rn(new bn([, -0]))[1] == qa ? function(n) {
  return new bn(n);
} : Gr;
const ja = Ha;
var Wa = 200;
function Ka(n, e, r) {
  var t = -1, i = qr, a = n.length, o = !0, s = [], u = s;
  if (r)
    o = !1, i = ga;
  else if (a >= Wa) {
    var f = e ? null : ja(n);
    if (f)
      return Rn(f);
    o = !1, i = Be, u = new j();
  } else
    u = e ? [] : s;
  n:
    for (; ++t < a; ) {
      var d = n[t], h = e ? e(d) : d;
      if (d = r || d !== 0 ? d : 0, o && h === h) {
        for (var l = u.length; l--; )
          if (u[l] === h)
            continue n;
        e && u.push(h), s.push(d);
      } else
        i(u, h, r) || (u !== s && u.push(h), s.push(d));
    }
  return s;
}
var Xa = Pn(function(n) {
  return Ka(ln(n, 1, Lr, !0));
});
const Va = Xa;
var Za = 0;
function Un(n) {
  var e = ++Za;
  return $e(n) + e;
}
function Ja(n, e, r) {
  for (var t = -1, i = n.length, a = e.length, o = {}; ++t < i; ) {
    var s = t < a ? e[t] : void 0;
    r(o, n[t], s);
  }
  return o;
}
function Qa(n, e) {
  return Ja(n || [], e || [], In);
}
var za = "\0", P = "\0", ce = "";
class L {
  constructor(e = {}) {
    this._isDirected = b(e, "directed") ? e.directed : !0, this._isMultigraph = b(e, "multigraph") ? e.multigraph : !1, this._isCompound = b(e, "compound") ? e.compound : !1, this._label = void 0, this._defaultNodeLabelFn = B(void 0), this._defaultEdgeLabelFn = B(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[P] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  /* === Graph functions ========= */
  isDirected() {
    return this._isDirected;
  }
  isMultigraph() {
    return this._isMultigraph;
  }
  isCompound() {
    return this._isCompound;
  }
  setGraph(e) {
    return this._label = e, this;
  }
  graph() {
    return this._label;
  }
  /* === Node functions ========== */
  setDefaultNodeLabel(e) {
    return Xn(e) || (e = B(e)), this._defaultNodeLabelFn = e, this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return T(this._nodes);
  }
  sources() {
    var e = this;
    return A(this.nodes(), function(r) {
      return Vn(e._in[r]);
    });
  }
  sinks() {
    var e = this;
    return A(this.nodes(), function(r) {
      return Vn(e._out[r]);
    });
  }
  setNodes(e, r) {
    var t = arguments, i = this;
    return c(e, function(a) {
      t.length > 1 ? i.setNode(a, r) : i.setNode(a);
    }), this;
  }
  setNode(e, r) {
    return b(this._nodes, e) ? (arguments.length > 1 && (this._nodes[e] = r), this) : (this._nodes[e] = arguments.length > 1 ? r : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = P, this._children[e] = {}, this._children[P][e] = !0), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
  }
  node(e) {
    return this._nodes[e];
  }
  hasNode(e) {
    return b(this._nodes, e);
  }
  removeNode(e) {
    var r = this;
    if (b(this._nodes, e)) {
      var t = function(i) {
        r.removeEdge(r._edgeObjs[i]);
      };
      delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], c(this.children(e), function(i) {
        r.setParent(i);
      }), delete this._children[e]), c(T(this._in[e]), t), delete this._in[e], delete this._preds[e], c(T(this._out[e]), t), delete this._out[e], delete this._sucs[e], --this._nodeCount;
    }
    return this;
  }
  setParent(e, r) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (y(r))
      r = P;
    else {
      r += "";
      for (var t = r; !y(t); t = this.parent(t))
        if (t === e)
          throw new Error("Setting " + r + " as parent of " + e + " would create a cycle");
      this.setNode(r);
    }
    return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = r, this._children[r][e] = !0, this;
  }
  _removeFromParentsChildList(e) {
    delete this._children[this._parent[e]][e];
  }
  parent(e) {
    if (this._isCompound) {
      var r = this._parent[e];
      if (r !== P)
        return r;
    }
  }
  children(e) {
    if (y(e) && (e = P), this._isCompound) {
      var r = this._children[e];
      if (r)
        return T(r);
    } else {
      if (e === P)
        return this.nodes();
      if (this.hasNode(e))
        return [];
    }
  }
  predecessors(e) {
    var r = this._preds[e];
    if (r)
      return T(r);
  }
  successors(e) {
    var r = this._sucs[e];
    if (r)
      return T(r);
  }
  neighbors(e) {
    var r = this.predecessors(e);
    if (r)
      return Va(r, this.successors(e));
  }
  isLeaf(e) {
    var r;
    return this.isDirected() ? r = this.successors(e) : r = this.neighbors(e), r.length === 0;
  }
  filterNodes(e) {
    var r = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    r.setGraph(this.graph());
    var t = this;
    c(this._nodes, function(o, s) {
      e(s) && r.setNode(s, o);
    }), c(this._edgeObjs, function(o) {
      r.hasNode(o.v) && r.hasNode(o.w) && r.setEdge(o, t.edge(o));
    });
    var i = {};
    function a(o) {
      var s = t.parent(o);
      return s === void 0 || r.hasNode(s) ? (i[o] = s, s) : s in i ? i[s] : a(s);
    }
    return this._isCompound && c(r.nodes(), function(o) {
      r.setParent(o, a(o));
    }), r;
  }
  /* === Edge functions ========== */
  setDefaultEdgeLabel(e) {
    return Xn(e) || (e = B(e)), this._defaultEdgeLabelFn = e, this;
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return N(this._edgeObjs);
  }
  setPath(e, r) {
    var t = this, i = arguments;
    return J(e, function(a, o) {
      return i.length > 1 ? t.setEdge(a, o, r) : t.setEdge(a, o), o;
    }), this;
  }
  /*
   * setEdge(v, w, [value, [name]])
   * setEdge({ v, w, [name] }, [value])
   */
  setEdge() {
    var e, r, t, i, a = !1, o = arguments[0];
    typeof o == "object" && o !== null && "v" in o ? (e = o.v, r = o.w, t = o.name, arguments.length === 2 && (i = arguments[1], a = !0)) : (e = o, r = arguments[1], t = arguments[3], arguments.length > 2 && (i = arguments[2], a = !0)), e = "" + e, r = "" + r, y(t) || (t = "" + t);
    var s = Y(this._isDirected, e, r, t);
    if (b(this._edgeLabels, s))
      return a && (this._edgeLabels[s] = i), this;
    if (!y(t) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(e), this.setNode(r), this._edgeLabels[s] = a ? i : this._defaultEdgeLabelFn(e, r, t);
    var u = no(this._isDirected, e, r, t);
    return e = u.v, r = u.w, Object.freeze(u), this._edgeObjs[s] = u, he(this._preds[r], e), he(this._sucs[e], r), this._in[r][s] = u, this._out[e][s] = u, this._edgeCount++, this;
  }
  edge(e, r, t) {
    var i = arguments.length === 1 ? mn(this._isDirected, arguments[0]) : Y(this._isDirected, e, r, t);
    return this._edgeLabels[i];
  }
  hasEdge(e, r, t) {
    var i = arguments.length === 1 ? mn(this._isDirected, arguments[0]) : Y(this._isDirected, e, r, t);
    return b(this._edgeLabels, i);
  }
  removeEdge(e, r, t) {
    var i = arguments.length === 1 ? mn(this._isDirected, arguments[0]) : Y(this._isDirected, e, r, t), a = this._edgeObjs[i];
    return a && (e = a.v, r = a.w, delete this._edgeLabels[i], delete this._edgeObjs[i], le(this._preds[r], e), le(this._sucs[e], r), delete this._in[r][i], delete this._out[e][i], this._edgeCount--), this;
  }
  inEdges(e, r) {
    var t = this._in[e];
    if (t) {
      var i = N(t);
      return r ? A(i, function(a) {
        return a.v === r;
      }) : i;
    }
  }
  outEdges(e, r) {
    var t = this._out[e];
    if (t) {
      var i = N(t);
      return r ? A(i, function(a) {
        return a.w === r;
      }) : i;
    }
  }
  nodeEdges(e, r) {
    var t = this.inEdges(e, r);
    if (t)
      return t.concat(this.outEdges(e, r));
  }
}
L.prototype._nodeCount = 0;
L.prototype._edgeCount = 0;
function he(n, e) {
  n[e] ? n[e]++ : n[e] = 1;
}
function le(n, e) {
  --n[e] || delete n[e];
}
function Y(n, e, r, t) {
  var i = "" + e, a = "" + r;
  if (!n && i > a) {
    var o = i;
    i = a, a = o;
  }
  return i + ce + a + ce + (y(t) ? za : t);
}
function no(n, e, r, t) {
  var i = "" + e, a = "" + r;
  if (!n && i > a) {
    var o = i;
    i = a, a = o;
  }
  var s = { v: i, w: a };
  return t && (s.name = t), s;
}
function mn(n, e) {
  return Y(n, e.v, e.w, e.name);
}
class eo {
  constructor() {
    var e = {};
    e._next = e._prev = e, this._sentinel = e;
  }
  dequeue() {
    var e = this._sentinel, r = e._prev;
    if (r !== e)
      return ve(r), r;
  }
  enqueue(e) {
    var r = this._sentinel;
    e._prev && e._next && ve(e), e._next = r._next, r._next._prev = e, r._next = e, e._prev = r;
  }
  toString() {
    for (var e = [], r = this._sentinel, t = r._prev; t !== r; )
      e.push(JSON.stringify(t, ro)), t = t._prev;
    return "[" + e.join(", ") + "]";
  }
}
function ve(n) {
  n._prev._next = n._next, n._next._prev = n._prev, delete n._next, delete n._prev;
}
function ro(n, e) {
  if (n !== "_next" && n !== "_prev")
    return e;
}
var to = B(1);
function io(n, e) {
  if (n.nodeCount() <= 1)
    return [];
  var r = oo(n, e || to), t = ao(r.graph, r.buckets, r.zeroIdx);
  return k(
    E(t, function(i) {
      return n.outEdges(i.v, i.w);
    })
  );
}
function ao(n, e, r) {
  for (var t = [], i = e[e.length - 1], a = e[0], o; n.nodeCount(); ) {
    for (; o = a.dequeue(); )
      _n(n, e, r, o);
    for (; o = i.dequeue(); )
      _n(n, e, r, o);
    if (n.nodeCount()) {
      for (var s = e.length - 2; s > 0; --s)
        if (o = e[s].dequeue(), o) {
          t = t.concat(_n(n, e, r, o, !0));
          break;
        }
    }
  }
  return t;
}
function _n(n, e, r, t, i) {
  var a = i ? [] : void 0;
  return c(n.inEdges(t.v), function(o) {
    var s = n.edge(o), u = n.node(o.v);
    i && a.push({ v: o.v, w: o.w }), u.out -= s, On(e, r, u);
  }), c(n.outEdges(t.v), function(o) {
    var s = n.edge(o), u = o.w, f = n.node(u);
    f.in -= s, On(e, r, f);
  }), n.removeNode(t.v), a;
}
function oo(n, e) {
  var r = new L(), t = 0, i = 0;
  c(n.nodes(), function(s) {
    r.setNode(s, { v: s, in: 0, out: 0 });
  }), c(n.edges(), function(s) {
    var u = r.edge(s.v, s.w) || 0, f = e(s), d = u + f;
    r.setEdge(s.v, s.w, d), i = Math.max(i, r.node(s.v).out += f), t = Math.max(t, r.node(s.w).in += f);
  });
  var a = D(i + t + 3).map(function() {
    return new eo();
  }), o = t + 1;
  return c(r.nodes(), function(s) {
    On(a, o, r.node(s));
  }), { graph: r, buckets: a, zeroIdx: o };
}
function On(n, e, r) {
  r.out ? r.in ? n[r.out - r.in + e].enqueue(r) : n[n.length - 1].enqueue(r) : n[0].enqueue(r);
}
function so(n) {
  var e = n.graph().acyclicer === "greedy" ? io(n, r(n)) : uo(n);
  c(e, function(t) {
    var i = n.edge(t);
    n.removeEdge(t), i.forwardName = t.name, i.reversed = !0, n.setEdge(t.w, t.v, i, Un("rev"));
  });
  function r(t) {
    return function(i) {
      return t.edge(i).weight;
    };
  }
}
function uo(n) {
  var e = [], r = {}, t = {};
  function i(a) {
    b(t, a) || (t[a] = !0, r[a] = !0, c(n.outEdges(a), function(o) {
      b(r, o.w) ? e.push(o) : i(o.w);
    }), delete r[a]);
  }
  return c(n.nodes(), i), e;
}
function fo(n) {
  c(n.edges(), function(e) {
    var r = n.edge(e);
    if (r.reversed) {
      n.removeEdge(e);
      var t = r.forwardName;
      delete r.reversed, delete r.forwardName, n.setEdge(e.w, e.v, r, t);
    }
  });
}
function G(n, e, r, t) {
  var i;
  do
    i = Un(t);
  while (n.hasNode(i));
  return r.dummy = e, n.setNode(i, r), i;
}
function co(n) {
  var e = new L().setGraph(n.graph());
  return c(n.nodes(), function(r) {
    e.setNode(r, n.node(r));
  }), c(n.edges(), function(r) {
    var t = e.edge(r.v, r.w) || { weight: 0, minlen: 1 }, i = n.edge(r);
    e.setEdge(r.v, r.w, {
      weight: t.weight + i.weight,
      minlen: Math.max(t.minlen, i.minlen)
    });
  }), e;
}
function Ve(n) {
  var e = new L({ multigraph: n.isMultigraph() }).setGraph(n.graph());
  return c(n.nodes(), function(r) {
    n.children(r).length || e.setNode(r, n.node(r));
  }), c(n.edges(), function(r) {
    e.setEdge(r, n.edge(r));
  }), e;
}
function ge(n, e) {
  var r = n.x, t = n.y, i = e.x - r, a = e.y - t, o = n.width / 2, s = n.height / 2;
  if (!i && !a)
    throw new Error("Not possible to find intersection inside of the rectangle");
  var u, f;
  return Math.abs(a) * o > Math.abs(i) * s ? (a < 0 && (s = -s), u = s * i / a, f = s) : (i < 0 && (o = -o), u = o, f = o * a / i), { x: r + u, y: t + f };
}
function pn(n) {
  var e = E(D(Ze(n) + 1), function() {
    return [];
  });
  return c(n.nodes(), function(r) {
    var t = n.node(r), i = t.rank;
    y(i) || (e[i][t.order] = r);
  }), e;
}
function ho(n) {
  var e = W(
    E(n.nodes(), function(r) {
      return n.node(r).rank;
    })
  );
  c(n.nodes(), function(r) {
    var t = n.node(r);
    b(t, "rank") && (t.rank -= e);
  });
}
function lo(n) {
  var e = W(
    E(n.nodes(), function(a) {
      return n.node(a).rank;
    })
  ), r = [];
  c(n.nodes(), function(a) {
    var o = n.node(a).rank - e;
    r[o] || (r[o] = []), r[o].push(a);
  });
  var t = 0, i = n.graph().nodeRankFactor;
  c(r, function(a, o) {
    y(a) && o % i !== 0 ? --t : t && c(a, function(s) {
      n.node(s).rank += t;
    });
  });
}
function pe(n, e, r, t) {
  var i = {
    width: 0,
    height: 0
  };
  return arguments.length >= 4 && (i.rank = r, i.order = t), G(n, "border", i, e);
}
function Ze(n) {
  return S(
    E(n.nodes(), function(e) {
      var r = n.node(e).rank;
      if (!y(r))
        return r;
    })
  );
}
function vo(n, e) {
  var r = { lhs: [], rhs: [] };
  return c(n, function(t) {
    e(t) ? r.lhs.push(t) : r.rhs.push(t);
  }), r;
}
function go(n, e) {
  var r = de();
  try {
    return e();
  } finally {
    console.log(n + " time: " + (de() - r) + "ms");
  }
}
function po(n, e) {
  return e();
}
function bo(n) {
  function e(r) {
    var t = n.children(r), i = n.node(r);
    if (t.length && c(t, e), b(i, "minRank")) {
      i.borderLeft = [], i.borderRight = [];
      for (var a = i.minRank, o = i.maxRank + 1; a < o; ++a)
        be(n, "borderLeft", "_bl", r, i, a), be(n, "borderRight", "_br", r, i, a);
    }
  }
  c(n.children(), e);
}
function be(n, e, r, t, i, a) {
  var o = { width: 0, height: 0, rank: a, borderType: e }, s = i[e][a - 1], u = G(n, "border", o, r);
  i[e][a] = u, n.setParent(u, t), s && n.setEdge(s, u, { weight: 1 });
}
function wo(n) {
  var e = n.graph().rankdir.toLowerCase();
  (e === "lr" || e === "rl") && Je(n);
}
function mo(n) {
  var e = n.graph().rankdir.toLowerCase();
  (e === "bt" || e === "rl") && _o(n), (e === "lr" || e === "rl") && (Eo(n), Je(n));
}
function Je(n) {
  c(n.nodes(), function(e) {
    we(n.node(e));
  }), c(n.edges(), function(e) {
    we(n.edge(e));
  });
}
function we(n) {
  var e = n.width;
  n.width = n.height, n.height = e;
}
function _o(n) {
  c(n.nodes(), function(e) {
    En(n.node(e));
  }), c(n.edges(), function(e) {
    var r = n.edge(e);
    c(r.points, En), b(r, "y") && En(r);
  });
}
function En(n) {
  n.y = -n.y;
}
function Eo(n) {
  c(n.nodes(), function(e) {
    yn(n.node(e));
  }), c(n.edges(), function(e) {
    var r = n.edge(e);
    c(r.points, yn), b(r, "x") && yn(r);
  });
}
function yn(n) {
  var e = n.x;
  n.x = n.y, n.y = e;
}
function yo(n) {
  n.graph().dummyChains = [], c(n.edges(), function(e) {
    xo(n, e);
  });
}
function xo(n, e) {
  var r = e.v, t = n.node(r).rank, i = e.w, a = n.node(i).rank, o = e.name, s = n.edge(e), u = s.labelRank;
  if (a !== t + 1) {
    n.removeEdge(e);
    var f, d, h;
    for (h = 0, ++t; t < a; ++h, ++t)
      s.points = [], d = {
        width: 0,
        height: 0,
        edgeLabel: s,
        edgeObj: e,
        rank: t
      }, f = G(n, "edge", d, "_d"), t === u && (d.width = s.width, d.height = s.height, d.dummy = "edge-label", d.labelpos = s.labelpos), n.setEdge(r, f, { weight: s.weight }, o), h === 0 && n.graph().dummyChains.push(f), r = f;
    n.setEdge(r, i, { weight: s.weight }, o);
  }
}
function To(n) {
  c(n.graph().dummyChains, function(e) {
    var r = n.node(e), t = r.edgeLabel, i;
    for (n.setEdge(r.edgeObj, t); r.dummy; )
      i = n.successors(e)[0], n.removeNode(e), t.points.push({ x: r.x, y: r.y }), r.dummy === "edge-label" && (t.x = r.x, t.y = r.y, t.width = r.width, t.height = r.height), e = i, r = n.node(e);
  });
}
function qn(n) {
  var e = {};
  function r(t) {
    var i = n.node(t);
    if (b(e, t))
      return i.rank;
    e[t] = !0;
    var a = W(
      E(n.outEdges(t), function(o) {
        return r(o.w) - n.edge(o).minlen;
      })
    );
    return (a === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
    a === void 0 || // return value of _.map([]) for Lodash 4
    a === null) && (a = 0), i.rank = a;
  }
  c(n.sources(), r);
}
function K(n, e) {
  return n.node(e.w).rank - n.node(e.v).rank - n.edge(e).minlen;
}
function Qe(n) {
  var e = new L({ directed: !1 }), r = n.nodes()[0], t = n.nodeCount();
  e.setNode(r, {});
  for (var i, a; Lo(e, n) < t; )
    i = Ao(e, n), a = e.hasNode(i.v) ? K(n, i) : -K(n, i), No(e, n, a);
  return e;
}
function Lo(n, e) {
  function r(t) {
    c(e.nodeEdges(t), function(i) {
      var a = i.v, o = t === a ? i.w : a;
      !n.hasNode(o) && !K(e, i) && (n.setNode(o, {}), n.setEdge(t, o, {}), r(o));
    });
  }
  return c(n.nodes(), r), n.nodeCount();
}
function Ao(n, e) {
  return Yn(e.edges(), function(r) {
    if (n.hasNode(r.v) !== n.hasNode(r.w))
      return K(e, r);
  });
}
function No(n, e, r) {
  c(n.nodes(), function(t) {
    e.node(t).rank += r;
  });
}
function Oo() {
}
Oo.prototype = new Error();
function ze(n, e, r) {
  x(e) || (e = [e]);
  var t = (n.isDirected() ? n.successors : n.neighbors).bind(n), i = [], a = {};
  return c(e, function(o) {
    if (!n.hasNode(o))
      throw new Error("Graph does not have node: " + o);
    nr(n, o, r === "post", a, t, i);
  }), i;
}
function nr(n, e, r, t, i, a) {
  b(t, e) || (t[e] = !0, r || a.push(e), c(i(e), function(o) {
    nr(n, o, r, t, i, a);
  }), r && a.push(e));
}
function Co(n, e) {
  return ze(n, e, "post");
}
function Io(n, e) {
  return ze(n, e, "pre");
}
M.initLowLimValues = jn;
M.initCutValues = Hn;
M.calcCutValue = er;
M.leaveEdge = tr;
M.enterEdge = ir;
M.exchangeEdges = ar;
function M(n) {
  n = co(n), qn(n);
  var e = Qe(n);
  jn(e), Hn(e, n);
  for (var r, t; r = tr(e); )
    t = ir(e, n, r), ar(e, n, r, t);
}
function Hn(n, e) {
  var r = Co(n, n.nodes());
  r = r.slice(0, r.length - 1), c(r, function(t) {
    Po(n, e, t);
  });
}
function Po(n, e, r) {
  var t = n.node(r), i = t.parent;
  n.edge(r, i).cutvalue = er(n, e, r);
}
function er(n, e, r) {
  var t = n.node(r), i = t.parent, a = !0, o = e.edge(r, i), s = 0;
  return o || (a = !1, o = e.edge(i, r)), s = o.weight, c(e.nodeEdges(r), function(u) {
    var f = u.v === r, d = f ? u.w : u.v;
    if (d !== i) {
      var h = f === a, l = e.edge(u).weight;
      if (s += h ? l : -l, So(n, r, d)) {
        var g = n.edge(r, d).cutvalue;
        s += h ? -g : g;
      }
    }
  }), s;
}
function jn(n, e) {
  arguments.length < 2 && (e = n.nodes()[0]), rr(n, {}, 1, e);
}
function rr(n, e, r, t, i) {
  var a = r, o = n.node(t);
  return e[t] = !0, c(n.neighbors(t), function(s) {
    b(e, s) || (r = rr(n, e, r, s, t));
  }), o.low = a, o.lim = r++, i ? o.parent = i : delete o.parent, r;
}
function tr(n) {
  return Gn(n.edges(), function(e) {
    return n.edge(e).cutvalue < 0;
  });
}
function ir(n, e, r) {
  var t = r.v, i = r.w;
  e.hasEdge(t, i) || (t = r.w, i = r.v);
  var a = n.node(t), o = n.node(i), s = a, u = !1;
  a.lim > o.lim && (s = o, u = !0);
  var f = A(e.edges(), function(d) {
    return u === me(n, n.node(d.v), s) && u !== me(n, n.node(d.w), s);
  });
  return Yn(f, function(d) {
    return K(e, d);
  });
}
function ar(n, e, r, t) {
  var i = r.v, a = r.w;
  n.removeEdge(i, a), n.setEdge(t.v, t.w, {}), jn(n), Hn(n, e), $o(n, e);
}
function $o(n, e) {
  var r = Gn(n.nodes(), function(i) {
    return !e.node(i).parent;
  }), t = Io(n, r);
  t = t.slice(1), c(t, function(i) {
    var a = n.node(i).parent, o = e.edge(i, a), s = !1;
    o || (o = e.edge(a, i), s = !0), e.node(i).rank = e.node(a).rank + (s ? o.minlen : -o.minlen);
  });
}
function So(n, e, r) {
  return n.hasEdge(e, r);
}
function me(n, e, r) {
  return r.low <= e.lim && e.lim <= r.lim;
}
function Mo(n) {
  switch (n.graph().ranker) {
    case "network-simplex":
      _e(n);
      break;
    case "tight-tree":
      Fo(n);
      break;
    case "longest-path":
      Ro(n);
      break;
    default:
      _e(n);
  }
}
var Ro = qn;
function Fo(n) {
  qn(n), Qe(n);
}
function _e(n) {
  M(n);
}
function Do(n) {
  var e = G(n, "root", {}, "_root"), r = ko(n), t = S(N(r)) - 1, i = 2 * t + 1;
  n.graph().nestingRoot = e, c(n.edges(), function(o) {
    n.edge(o).minlen *= i;
  });
  var a = Go(n) + 1;
  c(n.children(), function(o) {
    or(n, e, i, a, t, r, o);
  }), n.graph().nodeRankFactor = i;
}
function or(n, e, r, t, i, a, o) {
  var s = n.children(o);
  if (!s.length) {
    o !== e && n.setEdge(e, o, { weight: 0, minlen: r });
    return;
  }
  var u = pe(n, "_bt"), f = pe(n, "_bb"), d = n.node(o);
  n.setParent(u, o), d.borderTop = u, n.setParent(f, o), d.borderBottom = f, c(s, function(h) {
    or(n, e, r, t, i, a, h);
    var l = n.node(h), g = l.borderTop ? l.borderTop : h, v = l.borderBottom ? l.borderBottom : h, p = l.borderTop ? t : 2 * t, m = g !== v ? 1 : i - a[o] + 1;
    n.setEdge(u, g, {
      weight: p,
      minlen: m,
      nestingEdge: !0
    }), n.setEdge(v, f, {
      weight: p,
      minlen: m,
      nestingEdge: !0
    });
  }), n.parent(o) || n.setEdge(e, u, { weight: 0, minlen: i + a[o] });
}
function ko(n) {
  var e = {};
  function r(t, i) {
    var a = n.children(t);
    a && a.length && c(a, function(o) {
      r(o, i + 1);
    }), e[t] = i;
  }
  return c(n.children(), function(t) {
    r(t, 1);
  }), e;
}
function Go(n) {
  return J(
    n.edges(),
    function(e, r) {
      return e + n.edge(r).weight;
    },
    0
  );
}
function Bo(n) {
  var e = n.graph();
  n.removeNode(e.nestingRoot), delete e.nestingRoot, c(n.edges(), function(r) {
    var t = n.edge(r);
    t.nestingEdge && n.removeEdge(r);
  });
}
function Yo(n, e, r) {
  var t = {}, i;
  c(r, function(a) {
    for (var o = n.parent(a), s, u; o; ) {
      if (s = n.parent(o), s ? (u = t[s], t[s] = o) : (u = i, i = o), u && u !== o) {
        e.setEdge(u, o);
        return;
      }
      o = s;
    }
  });
}
function Uo(n, e, r) {
  var t = qo(n), i = new L({ compound: !0 }).setGraph({ root: t }).setDefaultNodeLabel(function(a) {
    return n.node(a);
  });
  return c(n.nodes(), function(a) {
    var o = n.node(a), s = n.parent(a);
    (o.rank === e || o.minRank <= e && e <= o.maxRank) && (i.setNode(a), i.setParent(a, s || t), c(n[r](a), function(u) {
      var f = u.v === a ? u.w : u.v, d = i.edge(f, a), h = y(d) ? 0 : d.weight;
      i.setEdge(f, a, { weight: n.edge(u).weight + h });
    }), b(o, "minRank") && i.setNode(a, {
      borderLeft: o.borderLeft[e],
      borderRight: o.borderRight[e]
    }));
  }), i;
}
function qo(n) {
  for (var e; n.hasNode(e = Un("_root")); )
    ;
  return e;
}
function Ho(n, e) {
  for (var r = 0, t = 1; t < e.length; ++t)
    r += jo(n, e[t - 1], e[t]);
  return r;
}
function jo(n, e, r) {
  for (var t = Qa(
    r,
    E(r, function(f, d) {
      return d;
    })
  ), i = k(
    E(e, function(f) {
      return Q(
        E(n.outEdges(f), function(d) {
          return { pos: t[d.w], weight: n.edge(d).weight };
        }),
        "pos"
      );
    })
  ), a = 1; a < r.length; )
    a <<= 1;
  var o = 2 * a - 1;
  a -= 1;
  var s = E(new Array(o), function() {
    return 0;
  }), u = 0;
  return c(
    // @ts-expect-error
    i.forEach(function(f) {
      var d = f.pos + a;
      s[d] += f.weight;
      for (var h = 0; d > 0; )
        d % 2 && (h += s[d + 1]), d = d - 1 >> 1, s[d] += f.weight;
      u += f.weight * h;
    })
  ), u;
}
function Wo(n) {
  var e = {}, r = A(n.nodes(), function(s) {
    return !n.children(s).length;
  }), t = S(
    E(r, function(s) {
      return n.node(s).rank;
    })
  ), i = E(D(t + 1), function() {
    return [];
  });
  function a(s) {
    if (!b(e, s)) {
      e[s] = !0;
      var u = n.node(s);
      i[u.rank].push(s), c(n.successors(s), a);
    }
  }
  var o = Q(r, function(s) {
    return n.node(s).rank;
  });
  return c(o, a), i;
}
function Ko(n, e) {
  return E(e, function(r) {
    var t = n.inEdges(r);
    if (t.length) {
      var i = J(
        t,
        function(a, o) {
          var s = n.edge(o), u = n.node(o.v);
          return {
            sum: a.sum + s.weight * u.order,
            weight: a.weight + s.weight
          };
        },
        { sum: 0, weight: 0 }
      );
      return {
        v: r,
        barycenter: i.sum / i.weight,
        weight: i.weight
      };
    } else
      return { v: r };
  });
}
function Xo(n, e) {
  var r = {};
  c(n, function(i, a) {
    var o = r[i.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [i.v],
      i: a
    };
    y(i.barycenter) || (o.barycenter = i.barycenter, o.weight = i.weight);
  }), c(e.edges(), function(i) {
    var a = r[i.v], o = r[i.w];
    !y(a) && !y(o) && (o.indegree++, a.out.push(r[i.w]));
  });
  var t = A(r, function(i) {
    return !i.indegree;
  });
  return Vo(t);
}
function Vo(n) {
  var e = [];
  function r(a) {
    return function(o) {
      o.merged || (y(o.barycenter) || y(a.barycenter) || o.barycenter >= a.barycenter) && Zo(a, o);
    };
  }
  function t(a) {
    return function(o) {
      o.in.push(a), --o.indegree === 0 && n.push(o);
    };
  }
  for (; n.length; ) {
    var i = n.pop();
    e.push(i), c(i.in.reverse(), r(i)), c(i.out, t(i));
  }
  return E(
    A(e, function(a) {
      return !a.merged;
    }),
    function(a) {
      return un(a, ["vs", "i", "barycenter", "weight"]);
    }
  );
}
function Zo(n, e) {
  var r = 0, t = 0;
  n.weight && (r += n.barycenter * n.weight, t += n.weight), e.weight && (r += e.barycenter * e.weight, t += e.weight), n.vs = e.vs.concat(n.vs), n.barycenter = r / t, n.weight = t, n.i = Math.min(e.i, n.i), e.merged = !0;
}
function Jo(n, e) {
  var r = vo(n, function(d) {
    return b(d, "barycenter");
  }), t = r.lhs, i = Q(r.rhs, function(d) {
    return -d.i;
  }), a = [], o = 0, s = 0, u = 0;
  t.sort(Qo(!!e)), u = Ee(a, i, u), c(t, function(d) {
    u += d.vs.length, a.push(d.vs), o += d.barycenter * d.weight, s += d.weight, u = Ee(a, i, u);
  });
  var f = { vs: k(a) };
  return s && (f.barycenter = o / s, f.weight = s), f;
}
function Ee(n, e, r) {
  for (var t; e.length && (t = sn(e)).i <= r; )
    e.pop(), n.push(t.vs), r++;
  return r;
}
function Qo(n) {
  return function(e, r) {
    return e.barycenter < r.barycenter ? -1 : e.barycenter > r.barycenter ? 1 : n ? r.i - e.i : e.i - r.i;
  };
}
function sr(n, e, r, t) {
  var i = n.children(e), a = n.node(e), o = a ? a.borderLeft : void 0, s = a ? a.borderRight : void 0, u = {};
  o && (i = A(i, function(v) {
    return v !== o && v !== s;
  }));
  var f = Ko(n, i);
  c(f, function(v) {
    if (n.children(v.v).length) {
      var p = sr(n, v.v, r, t);
      u[v.v] = p, b(p, "barycenter") && ns(v, p);
    }
  });
  var d = Xo(f, r);
  zo(d, u);
  var h = Jo(d, t);
  if (o && (h.vs = k([o, h.vs, s]), n.predecessors(o).length)) {
    var l = n.node(n.predecessors(o)[0]), g = n.node(n.predecessors(s)[0]);
    b(h, "barycenter") || (h.barycenter = 0, h.weight = 0), h.barycenter = (h.barycenter * h.weight + l.order + g.order) / (h.weight + 2), h.weight += 2;
  }
  return h;
}
function zo(n, e) {
  c(n, function(r) {
    r.vs = k(
      r.vs.map(function(t) {
        return e[t] ? e[t].vs : t;
      })
    );
  });
}
function ns(n, e) {
  y(n.barycenter) ? (n.barycenter = e.barycenter, n.weight = e.weight) : (n.barycenter = (n.barycenter * n.weight + e.barycenter * e.weight) / (n.weight + e.weight), n.weight += e.weight);
}
function es(n) {
  var e = Ze(n), r = ye(n, D(1, e + 1), "inEdges"), t = ye(n, D(e - 1, -1, -1), "outEdges"), i = Wo(n);
  xe(n, i);
  for (var a = Number.POSITIVE_INFINITY, o, s = 0, u = 0; u < 4; ++s, ++u) {
    rs(s % 2 ? r : t, s % 4 >= 2), i = pn(n);
    var f = Ho(n, i);
    f < a && (u = 0, o = yi(i), a = f);
  }
  xe(n, o);
}
function ye(n, e, r) {
  return E(e, function(t) {
    return Uo(n, t, r);
  });
}
function rs(n, e) {
  var r = new L();
  c(n, function(t) {
    var i = t.graph().root, a = sr(t, i, r, e);
    c(a.vs, function(o, s) {
      t.node(o).order = s;
    }), Yo(t, r, a.vs);
  });
}
function xe(n, e) {
  c(e, function(r) {
    c(r, function(t, i) {
      n.node(t).order = i;
    });
  });
}
function ts(n) {
  var e = as(n);
  c(n.graph().dummyChains, function(r) {
    for (var t = n.node(r), i = t.edgeObj, a = is(n, e, i.v, i.w), o = a.path, s = a.lca, u = 0, f = o[u], d = !0; r !== i.w; ) {
      if (t = n.node(r), d) {
        for (; (f = o[u]) !== s && n.node(f).maxRank < t.rank; )
          u++;
        f === s && (d = !1);
      }
      if (!d) {
        for (; u < o.length - 1 && n.node(f = o[u + 1]).minRank <= t.rank; )
          u++;
        f = o[u];
      }
      n.setParent(r, f), r = n.successors(r)[0];
    }
  });
}
function is(n, e, r, t) {
  var i = [], a = [], o = Math.min(e[r].low, e[t].low), s = Math.max(e[r].lim, e[t].lim), u, f;
  u = r;
  do
    u = n.parent(u), i.push(u);
  while (u && (e[u].low > o || s > e[u].lim));
  for (f = u, u = t; (u = n.parent(u)) !== f; )
    a.push(u);
  return { path: i.concat(a.reverse()), lca: f };
}
function as(n) {
  var e = {}, r = 0;
  function t(i) {
    var a = r;
    c(n.children(i), t), e[i] = { low: a, lim: r++ };
  }
  return c(n.children(), t), e;
}
function os(n, e) {
  var r = {};
  function t(i, a) {
    var o = 0, s = 0, u = i.length, f = sn(a);
    return c(a, function(d, h) {
      var l = us(n, d), g = l ? n.node(l).order : u;
      (l || d === f) && (c(a.slice(s, h + 1), function(v) {
        c(n.predecessors(v), function(p) {
          var m = n.node(p), _ = m.order;
          (_ < o || g < _) && !(m.dummy && n.node(v).dummy) && ur(r, p, v);
        });
      }), s = h + 1, o = g);
    }), a;
  }
  return J(e, t), r;
}
function ss(n, e) {
  var r = {};
  function t(a, o, s, u, f) {
    var d;
    c(D(o, s), function(h) {
      d = a[h], n.node(d).dummy && c(n.predecessors(d), function(l) {
        var g = n.node(l);
        g.dummy && (g.order < u || g.order > f) && ur(r, l, d);
      });
    });
  }
  function i(a, o) {
    var s = -1, u, f = 0;
    return c(o, function(d, h) {
      if (n.node(d).dummy === "border") {
        var l = n.predecessors(d);
        l.length && (u = n.node(l[0]).order, t(o, f, h, s, u), f = h, s = u);
      }
      t(o, f, o.length, u, a.length);
    }), o;
  }
  return J(e, i), r;
}
function us(n, e) {
  if (n.node(e).dummy)
    return Gn(n.predecessors(e), function(r) {
      return n.node(r).dummy;
    });
}
function ur(n, e, r) {
  if (e > r) {
    var t = e;
    e = r, r = t;
  }
  var i = n[e];
  i || (n[e] = i = {}), i[r] = !0;
}
function fs(n, e, r) {
  if (e > r) {
    var t = e;
    e = r, r = t;
  }
  return b(n[e], r);
}
function ds(n, e, r, t) {
  var i = {}, a = {}, o = {};
  return c(e, function(s) {
    c(s, function(u, f) {
      i[u] = u, a[u] = u, o[u] = f;
    });
  }), c(e, function(s) {
    var u = -1;
    c(s, function(f) {
      var d = t(f);
      if (d.length) {
        d = Q(d, function(p) {
          return o[p];
        });
        for (var h = (d.length - 1) / 2, l = Math.floor(h), g = Math.ceil(h); l <= g; ++l) {
          var v = d[l];
          a[f] === f && u < o[v] && !fs(r, f, v) && (a[v] = f, a[f] = i[f] = i[v], u = o[v]);
        }
      }
    });
  }), { root: i, align: a };
}
function cs(n, e, r, t, i) {
  var a = {}, o = hs(n, e, r, i), s = i ? "borderLeft" : "borderRight";
  function u(h, l) {
    for (var g = o.nodes(), v = g.pop(), p = {}; v; )
      p[v] ? h(v) : (p[v] = !0, g.push(v), g = g.concat(l(v))), v = g.pop();
  }
  function f(h) {
    a[h] = o.inEdges(h).reduce(function(l, g) {
      return Math.max(l, a[g.v] + o.edge(g));
    }, 0);
  }
  function d(h) {
    var l = o.outEdges(h).reduce(function(v, p) {
      return Math.min(v, a[p.w] - o.edge(p));
    }, Number.POSITIVE_INFINITY), g = n.node(h);
    l !== Number.POSITIVE_INFINITY && g.borderType !== s && (a[h] = Math.max(a[h], l));
  }
  return u(f, o.predecessors.bind(o)), u(d, o.successors.bind(o)), c(t, function(h) {
    a[h] = a[r[h]];
  }), a;
}
function hs(n, e, r, t) {
  var i = new L(), a = n.graph(), o = bs(a.nodesep, a.edgesep, t);
  return c(e, function(s) {
    var u;
    c(s, function(f) {
      var d = r[f];
      if (i.setNode(d), u) {
        var h = r[u], l = i.edge(h, d);
        i.setEdge(h, d, Math.max(o(n, f, u), l || 0));
      }
      u = f;
    });
  }), i;
}
function ls(n, e) {
  return Yn(N(e), function(r) {
    var t = Number.NEGATIVE_INFINITY, i = Number.POSITIVE_INFINITY;
    return Ea(r, function(a, o) {
      var s = ws(n, o) / 2;
      t = Math.max(a + s, t), i = Math.min(a - s, i);
    }), t - i;
  });
}
function vs(n, e) {
  var r = N(e), t = W(r), i = S(r);
  c(["u", "d"], function(a) {
    c(["l", "r"], function(o) {
      var s = a + o, u = n[s], f;
      if (u !== e) {
        var d = N(u);
        f = o === "l" ? t - W(d) : i - S(d), f && (n[s] = gn(u, function(h) {
          return h + f;
        }));
      }
    });
  });
}
function gs(n, e) {
  return gn(n.ul, function(r, t) {
    if (e)
      return n[e.toLowerCase()][t];
    var i = Q(E(n, t));
    return (i[1] + i[2]) / 2;
  });
}
function ps(n) {
  var e = pn(n), r = An(os(n, e), ss(n, e)), t = {}, i;
  c(["u", "d"], function(o) {
    i = o === "u" ? e : N(e).reverse(), c(["l", "r"], function(s) {
      s === "r" && (i = E(i, function(h) {
        return N(h).reverse();
      }));
      var u = (o === "u" ? n.predecessors : n.successors).bind(n), f = ds(n, i, r, u), d = cs(n, i, f.root, f.align, s === "r");
      s === "r" && (d = gn(d, function(h) {
        return -h;
      })), t[o + s] = d;
    });
  });
  var a = ls(n, t);
  return vs(t, a), gs(t, n.graph().align);
}
function bs(n, e, r) {
  return function(t, i, a) {
    var o = t.node(i), s = t.node(a), u = 0, f;
    if (u += o.width / 2, b(o, "labelpos"))
      switch (o.labelpos.toLowerCase()) {
        case "l":
          f = -o.width / 2;
          break;
        case "r":
          f = o.width / 2;
          break;
      }
    if (f && (u += r ? f : -f), f = 0, u += (o.dummy ? e : n) / 2, u += (s.dummy ? e : n) / 2, u += s.width / 2, b(s, "labelpos"))
      switch (s.labelpos.toLowerCase()) {
        case "l":
          f = s.width / 2;
          break;
        case "r":
          f = -s.width / 2;
          break;
      }
    return f && (u += r ? f : -f), f = 0, u;
  };
}
function ws(n, e) {
  return n.node(e).width;
}
function ms(n) {
  n = Ve(n), _s(n), ya(ps(n), function(e, r) {
    n.node(r).x = e;
  });
}
function _s(n) {
  var e = pn(n), r = n.graph().ranksep, t = 0;
  c(e, function(i) {
    var a = S(
      E(i, function(o) {
        return n.node(o).height;
      })
    );
    c(i, function(o) {
      n.node(o).y = t + a / 2;
    }), t += a + r;
  });
}
function js(n, e) {
  var r = e && e.debugTiming ? go : po;
  r("layout", function() {
    var t = r("  buildLayoutGraph", function() {
      return Ps(n);
    });
    r("  runLayout", function() {
      Es(t, r);
    }), r("  updateInputGraph", function() {
      ys(n, t);
    });
  });
}
function Es(n, e) {
  e("    makeSpaceForEdgeLabels", function() {
    $s(n);
  }), e("    removeSelfEdges", function() {
    Ys(n);
  }), e("    acyclic", function() {
    so(n);
  }), e("    nestingGraph.run", function() {
    Do(n);
  }), e("    rank", function() {
    Mo(Ve(n));
  }), e("    injectEdgeLabelProxies", function() {
    Ss(n);
  }), e("    removeEmptyRanks", function() {
    lo(n);
  }), e("    nestingGraph.cleanup", function() {
    Bo(n);
  }), e("    normalizeRanks", function() {
    ho(n);
  }), e("    assignRankMinMax", function() {
    Ms(n);
  }), e("    removeEdgeLabelProxies", function() {
    Rs(n);
  }), e("    normalize.run", function() {
    yo(n);
  }), e("    parentDummyChains", function() {
    ts(n);
  }), e("    addBorderSegments", function() {
    bo(n);
  }), e("    order", function() {
    es(n);
  }), e("    insertSelfEdges", function() {
    Us(n);
  }), e("    adjustCoordinateSystem", function() {
    wo(n);
  }), e("    position", function() {
    ms(n);
  }), e("    positionSelfEdges", function() {
    qs(n);
  }), e("    removeBorderNodes", function() {
    Bs(n);
  }), e("    normalize.undo", function() {
    To(n);
  }), e("    fixupEdgeLabelCoords", function() {
    ks(n);
  }), e("    undoCoordinateSystem", function() {
    mo(n);
  }), e("    translateGraph", function() {
    Fs(n);
  }), e("    assignNodeIntersects", function() {
    Ds(n);
  }), e("    reversePoints", function() {
    Gs(n);
  }), e("    acyclic.undo", function() {
    fo(n);
  });
}
function ys(n, e) {
  c(n.nodes(), function(r) {
    var t = n.node(r), i = e.node(r);
    t && (t.x = i.x, t.y = i.y, e.children(r).length && (t.width = i.width, t.height = i.height));
  }), c(n.edges(), function(r) {
    var t = n.edge(r), i = e.edge(r);
    t.points = i.points, b(i, "x") && (t.x = i.x, t.y = i.y);
  }), n.graph().width = e.graph().width, n.graph().height = e.graph().height;
}
var xs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], Ts = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, Ls = ["acyclicer", "ranker", "rankdir", "align"], As = ["width", "height"], Ns = { width: 0, height: 0 }, Os = ["minlen", "weight", "width", "height", "labeloffset"], Cs = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: "r"
}, Is = ["labelpos"];
function Ps(n) {
  var e = new L({ multigraph: !0, compound: !0 }), r = Tn(n.graph());
  return e.setGraph(
    An({}, Ts, xn(r, xs), un(r, Ls))
  ), c(n.nodes(), function(t) {
    var i = Tn(n.node(t));
    e.setNode(t, va(xn(i, As), Ns)), e.setParent(t, n.parent(t));
  }), c(n.edges(), function(t) {
    var i = Tn(n.edge(t));
    e.setEdge(
      t,
      An({}, Cs, xn(i, Os), un(i, Is))
    );
  }), e;
}
function $s(n) {
  var e = n.graph();
  e.ranksep /= 2, c(n.edges(), function(r) {
    var t = n.edge(r);
    t.minlen *= 2, t.labelpos.toLowerCase() !== "c" && (e.rankdir === "TB" || e.rankdir === "BT" ? t.width += t.labeloffset : t.height += t.labeloffset);
  });
}
function Ss(n) {
  c(n.edges(), function(e) {
    var r = n.edge(e);
    if (r.width && r.height) {
      var t = n.node(e.v), i = n.node(e.w), a = { rank: (i.rank - t.rank) / 2 + t.rank, e };
      G(n, "edge-proxy", a, "_ep");
    }
  });
}
function Ms(n) {
  var e = 0;
  c(n.nodes(), function(r) {
    var t = n.node(r);
    t.borderTop && (t.minRank = n.node(t.borderTop).rank, t.maxRank = n.node(t.borderBottom).rank, e = S(e, t.maxRank));
  }), n.graph().maxRank = e;
}
function Rs(n) {
  c(n.nodes(), function(e) {
    var r = n.node(e);
    r.dummy === "edge-proxy" && (n.edge(r.e).labelRank = r.rank, n.removeNode(e));
  });
}
function Fs(n) {
  var e = Number.POSITIVE_INFINITY, r = 0, t = Number.POSITIVE_INFINITY, i = 0, a = n.graph(), o = a.marginx || 0, s = a.marginy || 0;
  function u(f) {
    var d = f.x, h = f.y, l = f.width, g = f.height;
    e = Math.min(e, d - l / 2), r = Math.max(r, d + l / 2), t = Math.min(t, h - g / 2), i = Math.max(i, h + g / 2);
  }
  c(n.nodes(), function(f) {
    u(n.node(f));
  }), c(n.edges(), function(f) {
    var d = n.edge(f);
    b(d, "x") && u(d);
  }), e -= o, t -= s, c(n.nodes(), function(f) {
    var d = n.node(f);
    d.x -= e, d.y -= t;
  }), c(n.edges(), function(f) {
    var d = n.edge(f);
    c(d.points, function(h) {
      h.x -= e, h.y -= t;
    }), b(d, "x") && (d.x -= e), b(d, "y") && (d.y -= t);
  }), a.width = r - e + o, a.height = i - t + s;
}
function Ds(n) {
  c(n.edges(), function(e) {
    var r = n.edge(e), t = n.node(e.v), i = n.node(e.w), a, o;
    r.points ? (a = r.points[0], o = r.points[r.points.length - 1]) : (r.points = [], a = i, o = t), r.points.unshift(ge(t, a)), r.points.push(ge(i, o));
  });
}
function ks(n) {
  c(n.edges(), function(e) {
    var r = n.edge(e);
    if (b(r, "x"))
      switch ((r.labelpos === "l" || r.labelpos === "r") && (r.width -= r.labeloffset), r.labelpos) {
        case "l":
          r.x -= r.width / 2 + r.labeloffset;
          break;
        case "r":
          r.x += r.width / 2 + r.labeloffset;
          break;
      }
  });
}
function Gs(n) {
  c(n.edges(), function(e) {
    var r = n.edge(e);
    r.reversed && r.points.reverse();
  });
}
function Bs(n) {
  c(n.nodes(), function(e) {
    if (n.children(e).length) {
      var r = n.node(e), t = n.node(r.borderTop), i = n.node(r.borderBottom), a = n.node(sn(r.borderLeft)), o = n.node(sn(r.borderRight));
      r.width = Math.abs(o.x - a.x), r.height = Math.abs(i.y - t.y), r.x = a.x + r.width / 2, r.y = t.y + r.height / 2;
    }
  }), c(n.nodes(), function(e) {
    n.node(e).dummy === "border" && n.removeNode(e);
  });
}
function Ys(n) {
  c(n.edges(), function(e) {
    if (e.v === e.w) {
      var r = n.node(e.v);
      r.selfEdges || (r.selfEdges = []), r.selfEdges.push({ e, label: n.edge(e) }), n.removeEdge(e);
    }
  });
}
function Us(n) {
  var e = pn(n);
  c(e, function(r) {
    var t = 0;
    c(r, function(i, a) {
      var o = n.node(i);
      o.order = a + t, c(o.selfEdges, function(s) {
        G(
          n,
          "selfedge",
          {
            width: s.label.width,
            height: s.label.height,
            rank: o.rank,
            order: a + ++t,
            e: s.e,
            label: s.label
          },
          "_se"
        );
      }), delete o.selfEdges;
    });
  });
}
function qs(n) {
  c(n.nodes(), function(e) {
    var r = n.node(e);
    if (r.dummy === "selfedge") {
      var t = n.node(r.e.v), i = t.x + t.width / 2, a = t.y, o = r.x - i, s = t.height / 2;
      n.setEdge(r.e, r.label), n.removeNode(e), r.label.points = [
        { x: i + 2 * o / 3, y: a - s },
        { x: i + 5 * o / 6, y: a - s },
        { x: i + o, y: a },
        { x: i + 5 * o / 6, y: a + s },
        { x: i + 2 * o / 3, y: a + s }
      ], r.label.x = r.x, r.label.y = r.y;
    }
  });
}
function xn(n, e) {
  return gn(un(n, e), Number);
}
function Tn(n) {
  var e = {};
  return c(n, function(r, t) {
    e[t.toLowerCase()] = r;
  }), e;
}
export {
  L as G,
  tn as b,
  va as d,
  c as f,
  b as h,
  y as i,
  js as l,
  E as m,
  un as p,
  D as r,
  Un as u
};

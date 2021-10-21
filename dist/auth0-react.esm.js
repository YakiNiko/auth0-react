import React, {
  createContext,
  useState,
  useReducer,
  useEffect,
  useCallback,
  useContext,
} from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype =
    b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === 'function')
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var e = function (t, n) {
  return (e =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    })(t, n);
};
function t(t, n) {
  if ('function' != typeof n && null !== n)
    throw new TypeError(
      'Class extends value ' + String(n) + ' is not a constructor or null'
    );
  function r() {
    this.constructor = t;
  }
  e(t, n),
    (t.prototype =
      null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
}
var n = function () {
  return (n =
    Object.assign ||
    function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var o in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      return e;
    }).apply(this, arguments);
};
function r(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
function o(e, t, n, r) {
  return new (n || (n = Promise))(function (o, i) {
    function a(e) {
      try {
        s(r.next(e));
      } catch (e) {
        i(e);
      }
    }
    function c(e) {
      try {
        s(r.throw(e));
      } catch (e) {
        i(e);
      }
    }
    function s(e) {
      var t;
      e.done
        ? o(e.value)
        : ((t = e.value),
          t instanceof n
            ? t
            : new n(function (e) {
                e(t);
              })).then(a, c);
    }
    s((r = r.apply(e, t || [])).next());
  });
}
function i(e, t) {
  var n,
    r,
    o,
    i,
    a = {
      label: 0,
      sent: function () {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (i = { next: c(0), throw: c(1), return: c(2) }),
    'function' == typeof Symbol &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function c(i) {
    return function (c) {
      return (function (i) {
        if (n) throw new TypeError('Generator is already executing.');
        for (; a; )
          try {
            if (
              ((n = 1),
              r &&
                (o =
                  2 & i[0]
                    ? r.return
                    : i[0]
                    ? r.throw || ((o = r.return) && o.call(r), 0)
                    : r.next) &&
                !(o = o.call(r, i[1])).done)
            )
              return o;
            switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
              case 0:
              case 1:
                o = i;
                break;
              case 4:
                return a.label++, { value: i[1], done: !1 };
              case 5:
                a.label++, (r = i[1]), (i = [0]);
                continue;
              case 7:
                (i = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  !((o = a.trys),
                  (o = o.length > 0 && o[o.length - 1]) ||
                    (6 !== i[0] && 2 !== i[0]))
                ) {
                  a = 0;
                  continue;
                }
                if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                  a.label = i[1];
                  break;
                }
                if (6 === i[0] && a.label < o[1]) {
                  (a.label = o[1]), (o = i);
                  break;
                }
                if (o && a.label < o[2]) {
                  (a.label = o[2]), a.ops.push(i);
                  break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            i = t.call(e, a);
          } catch (e) {
            (i = [6, e]), (r = 0);
          } finally {
            n = o = 0;
          }
        if (5 & i[0]) throw i[1];
        return { value: i[0] ? i[1] : void 0, done: !0 };
      })([i, c]);
    };
  }
}
function a(e, t) {
  var n = 'function' == typeof Symbol && e[Symbol.iterator];
  if (!n) return e;
  var r,
    o,
    i = n.call(e),
    a = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
  } catch (e) {
    o = { error: e };
  } finally {
    try {
      r && !r.done && (n = i.return) && n.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function c(e, t, n) {
  if (n || 2 === arguments.length)
    for (var r, o = 0, i = t.length; o < i; o++)
      (!r && o in t) ||
        (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
  return e.concat(r || t);
}
var s =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function l(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var f,
  d,
  h = function (e) {
    return e && e.Math == Math && e;
  },
  p =
    h('object' == typeof globalThis && globalThis) ||
    h('object' == typeof window && window) ||
    h('object' == typeof self && self) ||
    h('object' == typeof s && s) ||
    (function () {
      return this;
    })() ||
    Function('return this')(),
  y = function (e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  v = !y(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  m = {}.propertyIsEnumerable,
  g = Object.getOwnPropertyDescriptor,
  b = {
    f:
      g && !m.call({ 1: 2 }, 1)
        ? function (e) {
            var t = g(this, e);
            return !!t && t.enumerable;
          }
        : m,
  },
  w = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t,
    };
  },
  S = {}.toString,
  _ = function (e) {
    return S.call(e).slice(8, -1);
  },
  k = ''.split,
  I = y(function () {
    return !Object('z').propertyIsEnumerable(0);
  })
    ? function (e) {
        return 'String' == _(e) ? k.call(e, '') : Object(e);
      }
    : Object,
  T = function (e) {
    if (null == e) throw TypeError("Can't call method on " + e);
    return e;
  },
  O = function (e) {
    return I(T(e));
  },
  E = function (e) {
    return 'object' == typeof e ? null !== e : 'function' == typeof e;
  },
  x = function (e) {
    return 'function' == typeof e ? e : void 0;
  },
  C = function (e, t) {
    return arguments.length < 2 ? x(p[e]) : p[e] && p[e][t];
  },
  R = C('navigator', 'userAgent') || '',
  j = p.process,
  A = p.Deno,
  F = (j && j.versions) || (A && A.version),
  K = F && F.v8;
K
  ? (d = (f = K.split('.'))[0] < 4 ? 1 : f[0] + f[1])
  : R &&
    (!(f = R.match(/Edge\/(\d+)/)) || f[1] >= 74) &&
    (f = R.match(/Chrome\/(\d+)/)) &&
    (d = f[1]);
var U = d && +d,
  L =
    !!Object.getOwnPropertySymbols &&
    !y(function () {
      var e = Symbol();
      return (
        !String(e) ||
        !(Object(e) instanceof Symbol) ||
        (!Symbol.sham && U && U < 41)
      );
    }),
  P = L && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  W = P
    ? function (e) {
        return 'symbol' == typeof e;
      }
    : function (e) {
        var t = C('Symbol');
        return 'function' == typeof t && Object(e) instanceof t;
      },
  Z = function (e, t) {
    try {
      Object.defineProperty(p, e, { value: t, configurable: !0, writable: !0 });
    } catch (n) {
      p[e] = t;
    }
    return t;
  },
  V = p['__core-js_shared__'] || Z('__core-js_shared__', {}),
  N = l(function (e) {
    (e.exports = function (e, t) {
      return V[e] || (V[e] = void 0 !== t ? t : {});
    })('versions', []).push({
      version: '3.16.3',
      mode: 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
    });
  }),
  X = function (e) {
    return Object(T(e));
  },
  Y = {}.hasOwnProperty,
  z =
    Object.hasOwn ||
    function (e, t) {
      return Y.call(X(e), t);
    },
  D = 0,
  J = Math.random(),
  B = function (e) {
    return (
      'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++D + J).toString(36)
    );
  },
  G = N('wks'),
  M = p.Symbol,
  H = P ? M : (M && M.withoutSetter) || B,
  q = function (e) {
    return (
      (z(G, e) && (L || 'string' == typeof G[e])) ||
        (L && z(M, e) ? (G[e] = M[e]) : (G[e] = H('Symbol.' + e))),
      G[e]
    );
  },
  Q = q('toPrimitive'),
  $ = function (e, t) {
    if (!E(e) || W(e)) return e;
    var n,
      r = e[Q];
    if (void 0 !== r) {
      if ((void 0 === t && (t = 'default'), (n = r.call(e, t)), !E(n) || W(n)))
        return n;
      throw TypeError("Can't convert object to primitive value");
    }
    return (
      void 0 === t && (t = 'number'),
      (function (e, t) {
        var n, r;
        if (
          'string' === t &&
          'function' == typeof (n = e.toString) &&
          !E((r = n.call(e)))
        )
          return r;
        if ('function' == typeof (n = e.valueOf) && !E((r = n.call(e))))
          return r;
        if (
          'string' !== t &&
          'function' == typeof (n = e.toString) &&
          !E((r = n.call(e)))
        )
          return r;
        throw TypeError("Can't convert object to primitive value");
      })(e, t)
    );
  },
  ee = function (e) {
    var t = $(e, 'string');
    return W(t) ? t : String(t);
  },
  te = p.document,
  ne = E(te) && E(te.createElement),
  re = function (e) {
    return ne ? te.createElement(e) : {};
  },
  oe =
    !v &&
    !y(function () {
      return (
        7 !=
        Object.defineProperty(re('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  ie = Object.getOwnPropertyDescriptor,
  ae = {
    f: v
      ? ie
      : function (e, t) {
          if (((e = O(e)), (t = ee(t)), oe))
            try {
              return ie(e, t);
            } catch (e) {}
          if (z(e, t)) return w(!b.f.call(e, t), e[t]);
        },
  },
  ce = function (e) {
    if (!E(e)) throw TypeError(String(e) + ' is not an object');
    return e;
  },
  se = Object.defineProperty,
  ue = {
    f: v
      ? se
      : function (e, t, n) {
          if ((ce(e), (t = ee(t)), ce(n), oe))
            try {
              return se(e, t, n);
            } catch (e) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
        },
  },
  le = v
    ? function (e, t, n) {
        return ue.f(e, t, w(1, n));
      }
    : function (e, t, n) {
        return (e[t] = n), e;
      },
  fe = Function.toString;
'function' != typeof V.inspectSource &&
  (V.inspectSource = function (e) {
    return fe.call(e);
  });
var de,
  he,
  pe,
  ye = V.inspectSource,
  ve = p.WeakMap,
  me = 'function' == typeof ve && /native code/.test(ye(ve)),
  ge = N('keys'),
  be = function (e) {
    return ge[e] || (ge[e] = B(e));
  },
  we = {},
  Se = p.WeakMap;
if (me || V.state) {
  var _e = V.state || (V.state = new Se()),
    ke = _e.get,
    Ie = _e.has,
    Te = _e.set;
  (de = function (e, t) {
    if (Ie.call(_e, e)) throw new TypeError('Object already initialized');
    return (t.facade = e), Te.call(_e, e, t), t;
  }),
    (he = function (e) {
      return ke.call(_e, e) || {};
    }),
    (pe = function (e) {
      return Ie.call(_e, e);
    });
} else {
  var Oe = be('state');
  (we[Oe] = !0),
    (de = function (e, t) {
      if (z(e, Oe)) throw new TypeError('Object already initialized');
      return (t.facade = e), le(e, Oe, t), t;
    }),
    (he = function (e) {
      return z(e, Oe) ? e[Oe] : {};
    }),
    (pe = function (e) {
      return z(e, Oe);
    });
}
var Ee,
  xe = {
    set: de,
    get: he,
    has: pe,
    enforce: function (e) {
      return pe(e) ? he(e) : de(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var n;
        if (!E(t) || (n = he(t)).type !== e)
          throw TypeError('Incompatible receiver, ' + e + ' required');
        return n;
      };
    },
  },
  Ce = l(function (e) {
    var t = xe.get,
      n = xe.enforce,
      r = String(String).split('String');
    (e.exports = function (e, t, o, i) {
      var a,
        c = !!i && !!i.unsafe,
        s = !!i && !!i.enumerable,
        u = !!i && !!i.noTargetGet;
      'function' == typeof o &&
        ('string' != typeof t || z(o, 'name') || le(o, 'name', t),
        (a = n(o)).source ||
          (a.source = r.join('string' == typeof t ? t : ''))),
        e !== p
          ? (c ? !u && e[t] && (s = !0) : delete e[t],
            s ? (e[t] = o) : le(e, t, o))
          : s
          ? (e[t] = o)
          : Z(t, o);
    })(Function.prototype, 'toString', function () {
      return ('function' == typeof this && t(this).source) || ye(this);
    });
  }),
  Re = Math.ceil,
  je = Math.floor,
  Ae = function (e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? je : Re)(e);
  },
  Fe = Math.min,
  Ke = function (e) {
    return e > 0 ? Fe(Ae(e), 9007199254740991) : 0;
  },
  Ue = Math.max,
  Le = Math.min,
  Pe = function (e) {
    return function (t, n, r) {
      var o,
        i = O(t),
        a = Ke(i.length),
        c = (function (e, t) {
          var n = Ae(e);
          return n < 0 ? Ue(n + t, 0) : Le(n, t);
        })(r, a);
      if (e && n != n) {
        for (; a > c; ) if ((o = i[c++]) != o) return !0;
      } else
        for (; a > c; c++) if ((e || c in i) && i[c] === n) return e || c || 0;
      return !e && -1;
    };
  },
  We = { includes: Pe(!0), indexOf: Pe(!1) },
  Ze = We.indexOf,
  Ve = function (e, t) {
    var n,
      r = O(e),
      o = 0,
      i = [];
    for (n in r) !z(we, n) && z(r, n) && i.push(n);
    for (; t.length > o; ) z(r, (n = t[o++])) && (~Ze(i, n) || i.push(n));
    return i;
  },
  Ne = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ],
  Xe = Ne.concat('length', 'prototype'),
  Ye = {
    f:
      Object.getOwnPropertyNames ||
      function (e) {
        return Ve(e, Xe);
      },
  },
  ze = { f: Object.getOwnPropertySymbols },
  De =
    C('Reflect', 'ownKeys') ||
    function (e) {
      var t = Ye.f(ce(e)),
        n = ze.f;
      return n ? t.concat(n(e)) : t;
    },
  Je = function (e, t) {
    for (var n = De(t), r = ue.f, o = ae.f, i = 0; i < n.length; i++) {
      var a = n[i];
      z(e, a) || r(e, a, o(t, a));
    }
  },
  Be = /#|\.prototype\./,
  Ge = function (e, t) {
    var n = He[Me(e)];
    return n == Qe || (n != qe && ('function' == typeof t ? y(t) : !!t));
  },
  Me = (Ge.normalize = function (e) {
    return String(e).replace(Be, '.').toLowerCase();
  }),
  He = (Ge.data = {}),
  qe = (Ge.NATIVE = 'N'),
  Qe = (Ge.POLYFILL = 'P'),
  $e = Ge,
  et = ae.f,
  tt = function (e, t) {
    var n,
      r,
      o,
      i,
      a,
      c = e.target,
      s = e.global,
      u = e.stat;
    if ((n = s ? p : u ? p[c] || Z(c, {}) : (p[c] || {}).prototype))
      for (r in t) {
        if (
          ((i = t[r]),
          (o = e.noTargetGet ? (a = et(n, r)) && a.value : n[r]),
          !$e(s ? r : c + (u ? '.' : '#') + r, e.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          Je(i, o);
        }
        (e.sham || (o && o.sham)) && le(i, 'sham', !0), Ce(n, r, i, e);
      }
  },
  nt = function (e) {
    if (W(e)) throw TypeError('Cannot convert a Symbol value to a string');
    return String(e);
  },
  rt = q('match'),
  ot = function (e) {
    if (
      (function (e) {
        var t;
        return E(e) && (void 0 !== (t = e[rt]) ? !!t : 'RegExp' == _(e));
      })(e)
    )
      throw TypeError("The method doesn't accept regular expressions");
    return e;
  },
  it = q('match'),
  at = function (e) {
    var t = /./;
    try {
      '/./'[e](t);
    } catch (n) {
      try {
        return (t[it] = !1), '/./'[e](t);
      } catch (e) {}
    }
    return !1;
  },
  ct = ae.f,
  st = ''.startsWith,
  ut = Math.min,
  lt = at('startsWith'),
  ft = !(lt || ((Ee = ct(String.prototype, 'startsWith')), !Ee || Ee.writable));
tt(
  { target: 'String', proto: !0, forced: !ft && !lt },
  {
    startsWith: function (e) {
      var t = nt(T(this));
      ot(e);
      var n = Ke(ut(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        r = nt(e);
      return st ? st.call(t, r, n) : t.slice(n, n + r.length) === r;
    },
  }
);
var dt = function (e) {
    if ('function' != typeof e)
      throw TypeError(String(e) + ' is not a function');
    return e;
  },
  ht = function (e, t, n) {
    if ((dt(e), void 0 === t)) return e;
    switch (n) {
      case 0:
        return function () {
          return e.call(t);
        };
      case 1:
        return function (n) {
          return e.call(t, n);
        };
      case 2:
        return function (n, r) {
          return e.call(t, n, r);
        };
      case 3:
        return function (n, r, o) {
          return e.call(t, n, r, o);
        };
    }
    return function () {
      return e.apply(t, arguments);
    };
  },
  pt = Function.call,
  yt = function (e, t, n) {
    return ht(pt, p[e].prototype[t], n);
  };
yt('String', 'startsWith');
var vt,
  mt =
    Array.isArray ||
    function (e) {
      return 'Array' == _(e);
    },
  gt = function (e, t, n) {
    var r = ee(t);
    r in e ? ue.f(e, r, w(0, n)) : (e[r] = n);
  },
  bt = q('species'),
  wt = function (e, t) {
    return new ((function (e) {
      var t;
      return (
        mt(e) &&
          ('function' != typeof (t = e.constructor) ||
          (t !== Array && !mt(t.prototype))
            ? E(t) && null === (t = t[bt]) && (t = void 0)
            : (t = void 0)),
        void 0 === t ? Array : t
      );
    })(e))(0 === t ? 0 : t);
  },
  St = q('species'),
  _t = q('isConcatSpreadable'),
  kt =
    U >= 51 ||
    !y(function () {
      var e = [];
      return (e[_t] = !1), e.concat()[0] !== e;
    }),
  It =
    ((vt = 'concat'),
    U >= 51 ||
      !y(function () {
        var e = [];
        return (
          ((e.constructor = {})[St] = function () {
            return { foo: 1 };
          }),
          1 !== e[vt](Boolean).foo
        );
      })),
  Tt = function (e) {
    if (!E(e)) return !1;
    var t = e[_t];
    return void 0 !== t ? !!t : mt(e);
  };
tt(
  { target: 'Array', proto: !0, forced: !kt || !It },
  {
    concat: function (e) {
      var t,
        n,
        r,
        o,
        i,
        a = X(this),
        c = wt(a, 0),
        s = 0;
      for (t = -1, r = arguments.length; t < r; t++)
        if (Tt((i = -1 === t ? a : arguments[t]))) {
          if (s + (o = Ke(i.length)) > 9007199254740991)
            throw TypeError('Maximum allowed index exceeded');
          for (n = 0; n < o; n++, s++) n in i && gt(c, s, i[n]);
        } else {
          if (s >= 9007199254740991)
            throw TypeError('Maximum allowed index exceeded');
          gt(c, s++, i);
        }
      return (c.length = s), c;
    },
  }
);
var Ot = {};
Ot[q('toStringTag')] = 'z';
var Et = '[object z]' === String(Ot),
  xt = q('toStringTag'),
  Ct =
    'Arguments' ==
    _(
      (function () {
        return arguments;
      })()
    ),
  Rt = Et
    ? _
    : function (e) {
        var t, n, r;
        return void 0 === e
          ? 'Undefined'
          : null === e
          ? 'Null'
          : 'string' ==
            typeof (n = (function (e, t) {
              try {
                return e[t];
              } catch (e) {}
            })((t = Object(e)), xt))
          ? n
          : Ct
          ? _(t)
          : 'Object' == (r = _(t)) && 'function' == typeof t.callee
          ? 'Arguments'
          : r;
      },
  jt = Et
    ? {}.toString
    : function () {
        return '[object ' + Rt(this) + ']';
      };
Et || Ce(Object.prototype, 'toString', jt, { unsafe: !0 });
var At,
  Ft =
    Object.keys ||
    function (e) {
      return Ve(e, Ne);
    },
  Kt = v
    ? Object.defineProperties
    : function (e, t) {
        ce(e);
        for (var n, r = Ft(t), o = r.length, i = 0; o > i; )
          ue.f(e, (n = r[i++]), t[n]);
        return e;
      },
  Ut = C('document', 'documentElement'),
  Lt = be('IE_PROTO'),
  Pt = function () {},
  Wt = function (e) {
    return '<script>' + e + '</script>';
  },
  Zt = function (e) {
    e.write(Wt('')), e.close();
    var t = e.parentWindow.Object;
    return (e = null), t;
  },
  Vt = function () {
    try {
      At = new ActiveXObject('htmlfile');
    } catch (e) {}
    var e, t;
    Vt =
      'undefined' != typeof document
        ? document.domain && At
          ? Zt(At)
          : (((t = re('iframe')).style.display = 'none'),
            Ut.appendChild(t),
            (t.src = String('javascript:')),
            (e = t.contentWindow.document).open(),
            e.write(Wt('document.F=Object')),
            e.close(),
            e.F)
        : Zt(At);
    for (var n = Ne.length; n--; ) delete Vt.prototype[Ne[n]];
    return Vt();
  };
we[Lt] = !0;
var Nt =
    Object.create ||
    function (e, t) {
      var n;
      return (
        null !== e
          ? ((Pt.prototype = ce(e)),
            (n = new Pt()),
            (Pt.prototype = null),
            (n[Lt] = e))
          : (n = Vt()),
        void 0 === t ? n : Kt(n, t)
      );
    },
  Xt = Ye.f,
  Yt = {}.toString,
  zt =
    'object' == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  Dt = {
    f: function (e) {
      return zt && '[object Window]' == Yt.call(e)
        ? (function (e) {
            try {
              return Xt(e);
            } catch (e) {
              return zt.slice();
            }
          })(e)
        : Xt(O(e));
    },
  },
  Jt = { f: q },
  Bt = p,
  Gt = ue.f,
  Mt = function (e) {
    var t = Bt.Symbol || (Bt.Symbol = {});
    z(t, e) || Gt(t, e, { value: Jt.f(e) });
  },
  Ht = ue.f,
  qt = q('toStringTag'),
  Qt = function (e, t, n) {
    e &&
      !z((e = n ? e : e.prototype), qt) &&
      Ht(e, qt, { configurable: !0, value: t });
  },
  $t = [].push,
  en = function (e) {
    var t = 1 == e,
      n = 2 == e,
      r = 3 == e,
      o = 4 == e,
      i = 6 == e,
      a = 7 == e,
      c = 5 == e || i;
    return function (s, u, l, f) {
      for (
        var d,
          h,
          p = X(s),
          y = I(p),
          v = ht(u, l, 3),
          m = Ke(y.length),
          g = 0,
          b = f || wt,
          w = t ? b(s, m) : n || a ? b(s, 0) : void 0;
        m > g;
        g++
      )
        if ((c || g in y) && ((h = v((d = y[g]), g, p)), e))
          if (t) w[g] = h;
          else if (h)
            switch (e) {
              case 3:
                return !0;
              case 5:
                return d;
              case 6:
                return g;
              case 2:
                $t.call(w, d);
            }
          else
            switch (e) {
              case 4:
                return !1;
              case 7:
                $t.call(w, d);
            }
      return i ? -1 : r || o ? o : w;
    };
  },
  tn = {
    forEach: en(0),
    map: en(1),
    filter: en(2),
    some: en(3),
    every: en(4),
    find: en(5),
    findIndex: en(6),
    filterReject: en(7),
  }.forEach,
  nn = be('hidden'),
  rn = q('toPrimitive'),
  on = xe.set,
  an = xe.getterFor('Symbol'),
  cn = Object.prototype,
  sn = p.Symbol,
  un = C('JSON', 'stringify'),
  ln = ae.f,
  fn = ue.f,
  dn = Dt.f,
  hn = b.f,
  pn = N('symbols'),
  yn = N('op-symbols'),
  vn = N('string-to-symbol-registry'),
  mn = N('symbol-to-string-registry'),
  gn = N('wks'),
  bn = p.QObject,
  wn = !bn || !bn.prototype || !bn.prototype.findChild,
  Sn =
    v &&
    y(function () {
      return (
        7 !=
        Nt(
          fn({}, 'a', {
            get: function () {
              return fn(this, 'a', { value: 7 }).a;
            },
          })
        ).a
      );
    })
      ? function (e, t, n) {
          var r = ln(cn, t);
          r && delete cn[t], fn(e, t, n), r && e !== cn && fn(cn, t, r);
        }
      : fn,
  _n = function (e, t) {
    var n = (pn[e] = Nt(sn.prototype));
    return (
      on(n, { type: 'Symbol', tag: e, description: t }),
      v || (n.description = t),
      n
    );
  },
  kn = function (e, t, n) {
    e === cn && kn(yn, t, n), ce(e);
    var r = ee(t);
    return (
      ce(n),
      z(pn, r)
        ? (n.enumerable
            ? (z(e, nn) && e[nn][r] && (e[nn][r] = !1),
              (n = Nt(n, { enumerable: w(0, !1) })))
            : (z(e, nn) || fn(e, nn, w(1, {})), (e[nn][r] = !0)),
          Sn(e, r, n))
        : fn(e, r, n)
    );
  },
  In = function (e, t) {
    ce(e);
    var n = O(t),
      r = Ft(n).concat(xn(n));
    return (
      tn(r, function (t) {
        (v && !Tn.call(n, t)) || kn(e, t, n[t]);
      }),
      e
    );
  },
  Tn = function (e) {
    var t = ee(e),
      n = hn.call(this, t);
    return (
      !(this === cn && z(pn, t) && !z(yn, t)) &&
      (!(n || !z(this, t) || !z(pn, t) || (z(this, nn) && this[nn][t])) || n)
    );
  },
  On = function (e, t) {
    var n = O(e),
      r = ee(t);
    if (n !== cn || !z(pn, r) || z(yn, r)) {
      var o = ln(n, r);
      return (
        !o || !z(pn, r) || (z(n, nn) && n[nn][r]) || (o.enumerable = !0), o
      );
    }
  },
  En = function (e) {
    var t = dn(O(e)),
      n = [];
    return (
      tn(t, function (e) {
        z(pn, e) || z(we, e) || n.push(e);
      }),
      n
    );
  },
  xn = function (e) {
    var t = e === cn,
      n = dn(t ? yn : O(e)),
      r = [];
    return (
      tn(n, function (e) {
        !z(pn, e) || (t && !z(cn, e)) || r.push(pn[e]);
      }),
      r
    );
  };
if (
  (L ||
    (Ce(
      (sn = function () {
        if (this instanceof sn) throw TypeError('Symbol is not a constructor');
        var e =
            arguments.length && void 0 !== arguments[0]
              ? nt(arguments[0])
              : void 0,
          t = B(e),
          n = function (e) {
            this === cn && n.call(yn, e),
              z(this, nn) && z(this[nn], t) && (this[nn][t] = !1),
              Sn(this, t, w(1, e));
          };
        return v && wn && Sn(cn, t, { configurable: !0, set: n }), _n(t, e);
      }).prototype,
      'toString',
      function () {
        return an(this).tag;
      }
    ),
    Ce(sn, 'withoutSetter', function (e) {
      return _n(B(e), e);
    }),
    (b.f = Tn),
    (ue.f = kn),
    (ae.f = On),
    (Ye.f = Dt.f = En),
    (ze.f = xn),
    (Jt.f = function (e) {
      return _n(q(e), e);
    }),
    v &&
      (fn(sn.prototype, 'description', {
        configurable: !0,
        get: function () {
          return an(this).description;
        },
      }),
      Ce(cn, 'propertyIsEnumerable', Tn, { unsafe: !0 }))),
  tt({ global: !0, wrap: !0, forced: !L, sham: !L }, { Symbol: sn }),
  tn(Ft(gn), function (e) {
    Mt(e);
  }),
  tt(
    { target: 'Symbol', stat: !0, forced: !L },
    {
      for: function (e) {
        var t = nt(e);
        if (z(vn, t)) return vn[t];
        var n = sn(t);
        return (vn[t] = n), (mn[n] = t), n;
      },
      keyFor: function (e) {
        if (!W(e)) throw TypeError(e + ' is not a symbol');
        if (z(mn, e)) return mn[e];
      },
      useSetter: function () {
        wn = !0;
      },
      useSimple: function () {
        wn = !1;
      },
    }
  ),
  tt(
    { target: 'Object', stat: !0, forced: !L, sham: !v },
    {
      create: function (e, t) {
        return void 0 === t ? Nt(e) : In(Nt(e), t);
      },
      defineProperty: kn,
      defineProperties: In,
      getOwnPropertyDescriptor: On,
    }
  ),
  tt(
    { target: 'Object', stat: !0, forced: !L },
    { getOwnPropertyNames: En, getOwnPropertySymbols: xn }
  ),
  tt(
    {
      target: 'Object',
      stat: !0,
      forced: y(function () {
        ze.f(1);
      }),
    },
    {
      getOwnPropertySymbols: function (e) {
        return ze.f(X(e));
      },
    }
  ),
  un)
) {
  var Cn =
    !L ||
    y(function () {
      var e = sn();
      return (
        '[null]' != un([e]) || '{}' != un({ a: e }) || '{}' != un(Object(e))
      );
    });
  tt(
    { target: 'JSON', stat: !0, forced: Cn },
    {
      stringify: function (e, t, n) {
        for (var r, o = [e], i = 1; arguments.length > i; )
          o.push(arguments[i++]);
        if (((r = t), (E(t) || void 0 !== e) && !W(e)))
          return (
            mt(t) ||
              (t = function (e, t) {
                if (('function' == typeof r && (t = r.call(this, e, t)), !W(t)))
                  return t;
              }),
            (o[1] = t),
            un.apply(null, o)
          );
      },
    }
  );
}
sn.prototype[rn] || le(sn.prototype, rn, sn.prototype.valueOf),
  Qt(sn, 'Symbol'),
  (we[nn] = !0),
  Mt('asyncIterator');
var Rn = ue.f,
  jn = p.Symbol;
if (
  v &&
  'function' == typeof jn &&
  (!('description' in jn.prototype) || void 0 !== jn().description)
) {
  var An = {},
    Fn = function () {
      var e =
          arguments.length < 1 || void 0 === arguments[0]
            ? void 0
            : String(arguments[0]),
        t = this instanceof Fn ? new jn(e) : void 0 === e ? jn() : jn(e);
      return '' === e && (An[t] = !0), t;
    };
  Je(Fn, jn);
  var Kn = (Fn.prototype = jn.prototype);
  Kn.constructor = Fn;
  var Un = Kn.toString,
    Ln = 'Symbol(test)' == String(jn('test')),
    Pn = /^Symbol\((.*)\)[^)]+$/;
  Rn(Kn, 'description', {
    configurable: !0,
    get: function () {
      var e = E(this) ? this.valueOf() : this,
        t = Un.call(e);
      if (z(An, e)) return '';
      var n = Ln ? t.slice(7, -1) : t.replace(Pn, '$1');
      return '' === n ? void 0 : n;
    },
  }),
    tt({ global: !0, forced: !0 }, { Symbol: Fn });
}
Mt('hasInstance'),
  Mt('isConcatSpreadable'),
  Mt('iterator'),
  Mt('match'),
  Mt('matchAll'),
  Mt('replace'),
  Mt('search'),
  Mt('species'),
  Mt('split'),
  Mt('toPrimitive'),
  Mt('toStringTag'),
  Mt('unscopables'),
  Qt(p.JSON, 'JSON', !0),
  Qt(Math, 'Math', !0),
  tt({ global: !0 }, { Reflect: {} }),
  Qt(p.Reflect, 'Reflect', !0),
  Bt.Symbol;
var Wn,
  Zn,
  Vn,
  Nn = function (e) {
    return function (t, n) {
      var r,
        o,
        i = nt(T(t)),
        a = Ae(n),
        c = i.length;
      return a < 0 || a >= c
        ? e
          ? ''
          : void 0
        : (r = i.charCodeAt(a)) < 55296 ||
          r > 56319 ||
          a + 1 === c ||
          (o = i.charCodeAt(a + 1)) < 56320 ||
          o > 57343
        ? e
          ? i.charAt(a)
          : r
        : e
        ? i.slice(a, a + 2)
        : o - 56320 + ((r - 55296) << 10) + 65536;
    };
  },
  Xn = { codeAt: Nn(!1), charAt: Nn(!0) },
  Yn = !y(function () {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    );
  }),
  zn = be('IE_PROTO'),
  Dn = Object.prototype,
  Jn = Yn
    ? Object.getPrototypeOf
    : function (e) {
        return (
          (e = X(e)),
          z(e, zn)
            ? e[zn]
            : 'function' == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? Dn
            : null
        );
      },
  Bn = q('iterator'),
  Gn = !1;
[].keys &&
  ('next' in (Vn = [].keys())
    ? (Zn = Jn(Jn(Vn))) !== Object.prototype && (Wn = Zn)
    : (Gn = !0)),
  (null == Wn ||
    y(function () {
      var e = {};
      return Wn[Bn].call(e) !== e;
    })) &&
    (Wn = {}),
  z(Wn, Bn) ||
    le(Wn, Bn, function () {
      return this;
    });
var Mn = { IteratorPrototype: Wn, BUGGY_SAFARI_ITERATORS: Gn },
  Hn = {},
  qn = Mn.IteratorPrototype,
  Qn = function () {
    return this;
  },
  $n =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var e,
            t = !1,
            n = {};
          try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
              .set).call(n, []),
              (t = n instanceof Array);
          } catch (e) {}
          return function (n, r) {
            return (
              ce(n),
              (function (e) {
                if (!E(e) && null !== e)
                  throw TypeError("Can't set " + String(e) + ' as a prototype');
              })(r),
              t ? e.call(n, r) : (n.__proto__ = r),
              n
            );
          };
        })()
      : void 0),
  er = Mn.IteratorPrototype,
  tr = Mn.BUGGY_SAFARI_ITERATORS,
  nr = q('iterator'),
  rr = function () {
    return this;
  },
  or = function (e, t, n, r, o, i, a) {
    !(function (e, t, n) {
      var r = t + ' Iterator';
      (e.prototype = Nt(qn, { next: w(1, n) })), Qt(e, r, !1), (Hn[r] = Qn);
    })(n, t, r);
    var c,
      s,
      u,
      l = function (e) {
        if (e === o && y) return y;
        if (!tr && e in h) return h[e];
        switch (e) {
          case 'keys':
          case 'values':
          case 'entries':
            return function () {
              return new n(this, e);
            };
        }
        return function () {
          return new n(this);
        };
      },
      f = t + ' Iterator',
      d = !1,
      h = e.prototype,
      p = h[nr] || h['@@iterator'] || (o && h[o]),
      y = (!tr && p) || l(o),
      v = ('Array' == t && h.entries) || p;
    if (
      (v &&
        ((c = Jn(v.call(new e()))),
        er !== Object.prototype &&
          c.next &&
          (Jn(c) !== er &&
            ($n ? $n(c, er) : 'function' != typeof c[nr] && le(c, nr, rr)),
          Qt(c, f, !0))),
      'values' == o &&
        p &&
        'values' !== p.name &&
        ((d = !0),
        (y = function () {
          return p.call(this);
        })),
      h[nr] !== y && le(h, nr, y),
      (Hn[t] = y),
      o)
    )
      if (
        ((s = {
          values: l('values'),
          keys: i ? y : l('keys'),
          entries: l('entries'),
        }),
        a)
      )
        for (u in s) (tr || d || !(u in h)) && Ce(h, u, s[u]);
      else tt({ target: t, proto: !0, forced: tr || d }, s);
    return s;
  },
  ir = Xn.charAt,
  ar = xe.set,
  cr = xe.getterFor('String Iterator');
or(
  String,
  'String',
  function (e) {
    ar(this, { type: 'String Iterator', string: nt(e), index: 0 });
  },
  function () {
    var e,
      t = cr(this),
      n = t.string,
      r = t.index;
    return r >= n.length
      ? { value: void 0, done: !0 }
      : ((e = ir(n, r)), (t.index += e.length), { value: e, done: !1 });
  }
);
var sr = function (e) {
    var t = e.return;
    if (void 0 !== t) return ce(t.call(e)).value;
  },
  ur = function (e, t, n, r) {
    try {
      return r ? t(ce(n)[0], n[1]) : t(n);
    } catch (t) {
      throw (sr(e), t);
    }
  },
  lr = q('iterator'),
  fr = Array.prototype,
  dr = function (e) {
    return void 0 !== e && (Hn.Array === e || fr[lr] === e);
  },
  hr = q('iterator'),
  pr = function (e) {
    if (null != e) return e[hr] || e['@@iterator'] || Hn[Rt(e)];
  },
  yr = q('iterator'),
  vr = !1;
try {
  var mr = 0,
    gr = {
      next: function () {
        return { done: !!mr++ };
      },
      return: function () {
        vr = !0;
      },
    };
  (gr[yr] = function () {
    return this;
  }),
    Array.from(gr, function () {
      throw 2;
    });
} catch (e) {}
var br = function (e, t) {
    if (!t && !vr) return !1;
    var n = !1;
    try {
      var r = {};
      (r[yr] = function () {
        return {
          next: function () {
            return { done: (n = !0) };
          },
        };
      }),
        e(r);
    } catch (e) {}
    return n;
  },
  wr = !br(function (e) {
    Array.from(e);
  });
tt(
  { target: 'Array', stat: !0, forced: wr },
  {
    from: function (e) {
      var t,
        n,
        r,
        o,
        i,
        a,
        c = X(e),
        s = 'function' == typeof this ? this : Array,
        u = arguments.length,
        l = u > 1 ? arguments[1] : void 0,
        f = void 0 !== l,
        d = pr(c),
        h = 0;
      if (
        (f && (l = ht(l, u > 2 ? arguments[2] : void 0, 2)),
        null == d || (s == Array && dr(d)))
      )
        for (n = new s((t = Ke(c.length))); t > h; h++)
          (a = f ? l(c[h], h) : c[h]), gt(n, h, a);
      else
        for (i = (o = d.call(c)).next, n = new s(); !(r = i.call(o)).done; h++)
          (a = f ? ur(o, l, [r.value, h], !0) : r.value), gt(n, h, a);
      return (n.length = h), n;
    },
  }
),
  Bt.Array.from;
var Sr,
  _r,
  kr,
  Ir = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
  Tr = ue.f,
  Or = p.Int8Array,
  Er = Or && Or.prototype,
  xr = p.Uint8ClampedArray,
  Cr = xr && xr.prototype,
  Rr = Or && Jn(Or),
  jr = Er && Jn(Er),
  Ar = Object.prototype,
  Fr = Ar.isPrototypeOf,
  Kr = q('toStringTag'),
  Ur = B('TYPED_ARRAY_TAG'),
  Lr = B('TYPED_ARRAY_CONSTRUCTOR'),
  Pr = Ir && !!$n && 'Opera' !== Rt(p.opera),
  Wr = !1,
  Zr = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8,
  },
  Vr = { BigInt64Array: 8, BigUint64Array: 8 },
  Nr = function (e) {
    if (!E(e)) return !1;
    var t = Rt(e);
    return z(Zr, t) || z(Vr, t);
  };
for (Sr in Zr) (kr = (_r = p[Sr]) && _r.prototype) ? le(kr, Lr, _r) : (Pr = !1);
for (Sr in Vr) (kr = (_r = p[Sr]) && _r.prototype) && le(kr, Lr, _r);
if (
  (!Pr || 'function' != typeof Rr || Rr === Function.prototype) &&
  ((Rr = function () {
    throw TypeError('Incorrect invocation');
  }),
  Pr)
)
  for (Sr in Zr) p[Sr] && $n(p[Sr], Rr);
if ((!Pr || !jr || jr === Ar) && ((jr = Rr.prototype), Pr))
  for (Sr in Zr) p[Sr] && $n(p[Sr].prototype, jr);
if ((Pr && Jn(Cr) !== jr && $n(Cr, jr), v && !z(jr, Kr)))
  for (Sr in ((Wr = !0),
  Tr(jr, Kr, {
    get: function () {
      return E(this) ? this[Ur] : void 0;
    },
  }),
  Zr))
    p[Sr] && le(p[Sr], Ur, Sr);
var Xr = {
    NATIVE_ARRAY_BUFFER_VIEWS: Pr,
    TYPED_ARRAY_CONSTRUCTOR: Lr,
    TYPED_ARRAY_TAG: Wr && Ur,
    aTypedArray: function (e) {
      if (Nr(e)) return e;
      throw TypeError('Target is not a typed array');
    },
    aTypedArrayConstructor: function (e) {
      if ($n && !Fr.call(Rr, e))
        throw TypeError('Target is not a typed array constructor');
      return e;
    },
    exportTypedArrayMethod: function (e, t, n) {
      if (v) {
        if (n)
          for (var r in Zr) {
            var o = p[r];
            if (o && z(o.prototype, e))
              try {
                delete o.prototype[e];
              } catch (e) {}
          }
        (jr[e] && !n) || Ce(jr, e, n ? t : (Pr && Er[e]) || t);
      }
    },
    exportTypedArrayStaticMethod: function (e, t, n) {
      var r, o;
      if (v) {
        if ($n) {
          if (n)
            for (r in Zr)
              if ((o = p[r]) && z(o, e))
                try {
                  delete o[e];
                } catch (e) {}
          if (Rr[e] && !n) return;
          try {
            return Ce(Rr, e, n ? t : (Pr && Rr[e]) || t);
          } catch (e) {}
        }
        for (r in Zr) !(o = p[r]) || (o[e] && !n) || Ce(o, e, t);
      }
    },
    isView: function (e) {
      if (!E(e)) return !1;
      var t = Rt(e);
      return 'DataView' === t || z(Zr, t) || z(Vr, t);
    },
    isTypedArray: Nr,
    TypedArray: Rr,
    TypedArrayPrototype: jr,
  },
  Yr = q('species'),
  zr = Xr.TYPED_ARRAY_CONSTRUCTOR,
  Dr = Xr.aTypedArrayConstructor,
  Jr = function (e) {
    return Dr(
      ((t = e),
      (n = e[zr]),
      void 0 === (o = ce(t).constructor) || null == (r = ce(o)[Yr]) ? n : dt(r))
    );
    var t, n, r, o;
  },
  Br = Xr.aTypedArray,
  Gr = [].slice;
(0, Xr.exportTypedArrayMethod)(
  'slice',
  function (e, t) {
    for (
      var n = Gr.call(Br(this), e, t),
        r = Jr(this),
        o = 0,
        i = n.length,
        a = new r(i);
      i > o;

    )
      a[o] = n[o++];
    return a;
  },
  y(function () {
    new Int8Array(1).slice();
  })
);
var Mr = q('unscopables'),
  Hr = Array.prototype;
null == Hr[Mr] && ue.f(Hr, Mr, { configurable: !0, value: Nt(null) });
var qr = function (e) {
    Hr[Mr][e] = !0;
  },
  Qr = We.includes;
tt(
  { target: 'Array', proto: !0 },
  {
    includes: function (e) {
      return Qr(this, e, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
),
  qr('includes'),
  yt('Array', 'includes'),
  tt(
    { target: 'String', proto: !0, forced: !at('includes') },
    {
      includes: function (e) {
        return !!~nt(T(this)).indexOf(
          nt(ot(e)),
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  ),
  yt('String', 'includes');
var $r = xe.set,
  eo = xe.getterFor('Array Iterator');
or(
  Array,
  'Array',
  function (e, t) {
    $r(this, { type: 'Array Iterator', target: O(e), index: 0, kind: t });
  },
  function () {
    var e = eo(this),
      t = e.target,
      n = e.kind,
      r = e.index++;
    return !t || r >= t.length
      ? ((e.target = void 0), { value: void 0, done: !0 })
      : 'keys' == n
      ? { value: r, done: !1 }
      : 'values' == n
      ? { value: t[r], done: !1 }
      : { value: [r, t[r]], done: !1 };
  },
  'values'
),
  (Hn.Arguments = Hn.Array),
  qr('keys'),
  qr('values'),
  qr('entries');
var to = !y(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  no = l(function (e) {
    var t = ue.f,
      n = !1,
      r = B('meta'),
      o = 0,
      i =
        Object.isExtensible ||
        function () {
          return !0;
        },
      a = function (e) {
        t(e, r, { value: { objectID: 'O' + o++, weakData: {} } });
      },
      c = (e.exports = {
        enable: function () {
          (c.enable = function () {}), (n = !0);
          var e = Ye.f,
            t = [].splice,
            o = {};
          (o[r] = 1),
            e(o).length &&
              ((Ye.f = function (n) {
                for (var o = e(n), i = 0, a = o.length; i < a; i++)
                  if (o[i] === r) {
                    t.call(o, i, 1);
                    break;
                  }
                return o;
              }),
              tt(
                { target: 'Object', stat: !0, forced: !0 },
                { getOwnPropertyNames: Dt.f }
              ));
        },
        fastKey: function (e, t) {
          if (!E(e))
            return 'symbol' == typeof e
              ? e
              : ('string' == typeof e ? 'S' : 'P') + e;
          if (!z(e, r)) {
            if (!i(e)) return 'F';
            if (!t) return 'E';
            a(e);
          }
          return e[r].objectID;
        },
        getWeakData: function (e, t) {
          if (!z(e, r)) {
            if (!i(e)) return !0;
            if (!t) return !1;
            a(e);
          }
          return e[r].weakData;
        },
        onFreeze: function (e) {
          return to && n && i(e) && !z(e, r) && a(e), e;
        },
      });
    we[r] = !0;
  });
no.enable, no.fastKey, no.getWeakData, no.onFreeze;
var ro = function (e, t) {
    (this.stopped = e), (this.result = t);
  },
  oo = function (e, t, n) {
    var r,
      o,
      i,
      a,
      c,
      s,
      u,
      l = n && n.that,
      f = !(!n || !n.AS_ENTRIES),
      d = !(!n || !n.IS_ITERATOR),
      h = !(!n || !n.INTERRUPTED),
      p = ht(t, l, 1 + f + h),
      y = function (e) {
        return r && sr(r), new ro(!0, e);
      },
      v = function (e) {
        return f
          ? (ce(e), h ? p(e[0], e[1], y) : p(e[0], e[1]))
          : h
          ? p(e, y)
          : p(e);
      };
    if (d) r = e;
    else {
      if ('function' != typeof (o = pr(e)))
        throw TypeError('Target is not iterable');
      if (dr(o)) {
        for (i = 0, a = Ke(e.length); a > i; i++)
          if ((c = v(e[i])) && c instanceof ro) return c;
        return new ro(!1);
      }
      r = o.call(e);
    }
    for (s = r.next; !(u = s.call(r)).done; ) {
      try {
        c = v(u.value);
      } catch (e) {
        throw (sr(r), e);
      }
      if ('object' == typeof c && c && c instanceof ro) return c;
    }
    return new ro(!1);
  },
  io = function (e, t, n) {
    if (!(e instanceof t))
      throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
    return e;
  },
  ao = function (e, t, n) {
    for (var r in t) Ce(e, r, t[r], n);
    return e;
  },
  co = q('species'),
  so = ue.f,
  uo = no.fastKey,
  lo = xe.set,
  fo = xe.getterFor,
  ho = {
    getConstructor: function (e, t, n, r) {
      var o = e(function (e, i) {
          io(e, o, t),
            lo(e, {
              type: t,
              index: Nt(null),
              first: void 0,
              last: void 0,
              size: 0,
            }),
            v || (e.size = 0),
            null != i && oo(i, e[r], { that: e, AS_ENTRIES: n });
        }),
        i = fo(t),
        a = function (e, t, n) {
          var r,
            o,
            a = i(e),
            s = c(e, t);
          return (
            s
              ? (s.value = n)
              : ((a.last = s = {
                  index: (o = uo(t, !0)),
                  key: t,
                  value: n,
                  previous: (r = a.last),
                  next: void 0,
                  removed: !1,
                }),
                a.first || (a.first = s),
                r && (r.next = s),
                v ? a.size++ : e.size++,
                'F' !== o && (a.index[o] = s)),
            e
          );
        },
        c = function (e, t) {
          var n,
            r = i(e),
            o = uo(t);
          if ('F' !== o) return r.index[o];
          for (n = r.first; n; n = n.next) if (n.key == t) return n;
        };
      return (
        ao(o.prototype, {
          clear: function () {
            for (var e = i(this), t = e.index, n = e.first; n; )
              (n.removed = !0),
                n.previous && (n.previous = n.previous.next = void 0),
                delete t[n.index],
                (n = n.next);
            (e.first = e.last = void 0), v ? (e.size = 0) : (this.size = 0);
          },
          delete: function (e) {
            var t = this,
              n = i(t),
              r = c(t, e);
            if (r) {
              var o = r.next,
                a = r.previous;
              delete n.index[r.index],
                (r.removed = !0),
                a && (a.next = o),
                o && (o.previous = a),
                n.first == r && (n.first = o),
                n.last == r && (n.last = a),
                v ? n.size-- : t.size--;
            }
            return !!r;
          },
          forEach: function (e) {
            for (
              var t,
                n = i(this),
                r = ht(e, arguments.length > 1 ? arguments[1] : void 0, 3);
              (t = t ? t.next : n.first);

            )
              for (r(t.value, t.key, this); t && t.removed; ) t = t.previous;
          },
          has: function (e) {
            return !!c(this, e);
          },
        }),
        ao(
          o.prototype,
          n
            ? {
                get: function (e) {
                  var t = c(this, e);
                  return t && t.value;
                },
                set: function (e, t) {
                  return a(this, 0 === e ? 0 : e, t);
                },
              }
            : {
                add: function (e) {
                  return a(this, (e = 0 === e ? 0 : e), e);
                },
              }
        ),
        v &&
          so(o.prototype, 'size', {
            get: function () {
              return i(this).size;
            },
          }),
        o
      );
    },
    setStrong: function (e, t, n) {
      var r = t + ' Iterator',
        o = fo(t),
        i = fo(r);
      or(
        e,
        t,
        function (e, t) {
          lo(this, { type: r, target: e, state: o(e), kind: t, last: void 0 });
        },
        function () {
          for (var e = i(this), t = e.kind, n = e.last; n && n.removed; )
            n = n.previous;
          return e.target && (e.last = n = n ? n.next : e.state.first)
            ? 'keys' == t
              ? { value: n.key, done: !1 }
              : 'values' == t
              ? { value: n.value, done: !1 }
              : { value: [n.key, n.value], done: !1 }
            : ((e.target = void 0), { value: void 0, done: !0 });
        },
        n ? 'entries' : 'values',
        !n,
        !0
      ),
        (function (e) {
          var t = C(e),
            n = ue.f;
          v &&
            t &&
            !t[co] &&
            n(t, co, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        })(t);
    },
  };
function po(e) {
  var t = this.constructor;
  return this.then(
    function (n) {
      return t.resolve(e()).then(function () {
        return n;
      });
    },
    function (n) {
      return t.resolve(e()).then(function () {
        return t.reject(n);
      });
    }
  );
}
function yo(e) {
  return new this(function (t, n) {
    if (!e || void 0 === e.length)
      return n(
        new TypeError(
          typeof e +
            ' ' +
            e +
            ' is not iterable(cannot read property Symbol(Symbol.iterator))'
        )
      );
    var r = Array.prototype.slice.call(e);
    if (0 === r.length) return t([]);
    var o = r.length;
    function i(e, n) {
      if (n && ('object' == typeof n || 'function' == typeof n)) {
        var a = n.then;
        if ('function' == typeof a)
          return void a.call(
            n,
            function (t) {
              i(e, t);
            },
            function (n) {
              (r[e] = { status: 'rejected', reason: n }), 0 == --o && t(r);
            }
          );
      }
      (r[e] = { status: 'fulfilled', value: n }), 0 == --o && t(r);
    }
    for (var a = 0; a < r.length; a++) i(a, r[a]);
  });
}
!(function (e, t, n) {
  var r = -1 !== e.indexOf('Map'),
    o = -1 !== e.indexOf('Weak'),
    i = r ? 'set' : 'add',
    a = p[e],
    c = a && a.prototype,
    s = a,
    u = {},
    l = function (e) {
      var t = c[e];
      Ce(
        c,
        e,
        'add' == e
          ? function (e) {
              return t.call(this, 0 === e ? 0 : e), this;
            }
          : 'delete' == e
          ? function (e) {
              return !(o && !E(e)) && t.call(this, 0 === e ? 0 : e);
            }
          : 'get' == e
          ? function (e) {
              return o && !E(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
            }
          : 'has' == e
          ? function (e) {
              return !(o && !E(e)) && t.call(this, 0 === e ? 0 : e);
            }
          : function (e, n) {
              return t.call(this, 0 === e ? 0 : e, n), this;
            }
      );
    };
  if (
    $e(
      e,
      'function' != typeof a ||
        !(
          o ||
          (c.forEach &&
            !y(function () {
              new a().entries().next();
            }))
        )
    )
  )
    (s = n.getConstructor(t, e, r, i)), no.enable();
  else if ($e(e, !0)) {
    var f = new s(),
      d = f[i](o ? {} : -0, 1) != f,
      h = y(function () {
        f.has(1);
      }),
      v = br(function (e) {
        new a(e);
      }),
      m =
        !o &&
        y(function () {
          for (var e = new a(), t = 5; t--; ) e[i](t, t);
          return !e.has(-0);
        });
    v ||
      (((s = t(function (t, n) {
        io(t, s, e);
        var o = (function (e, t, n) {
          var r, o;
          return (
            $n &&
              'function' == typeof (r = t.constructor) &&
              r !== n &&
              E((o = r.prototype)) &&
              o !== n.prototype &&
              $n(e, o),
            e
          );
        })(new a(), t, s);
        return null != n && oo(n, o[i], { that: o, AS_ENTRIES: r }), o;
      })).prototype = c),
      (c.constructor = s)),
      (h || m) && (l('delete'), l('has'), r && l('get')),
      (m || d) && l(i),
      o && c.clear && delete c.clear;
  }
  (u[e] = s),
    tt({ global: !0, forced: s != a }, u),
    Qt(s, e),
    o || n.setStrong(s, e, r);
})(
  'Set',
  function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  },
  ho
),
  Bt.Set;
var vo = setTimeout;
function mo(e) {
  return Boolean(e && void 0 !== e.length);
}
function go() {}
function bo(e) {
  if (!(this instanceof bo))
    throw new TypeError('Promises must be constructed via new');
  if ('function' != typeof e) throw new TypeError('not a function');
  (this._state = 0),
    (this._handled = !1),
    (this._value = void 0),
    (this._deferreds = []),
    To(e, this);
}
function wo(e, t) {
  for (; 3 === e._state; ) e = e._value;
  0 !== e._state
    ? ((e._handled = !0),
      bo._immediateFn(function () {
        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
        if (null !== n) {
          var r;
          try {
            r = n(e._value);
          } catch (e) {
            return void _o(t.promise, e);
          }
          So(t.promise, r);
        } else (1 === e._state ? So : _o)(t.promise, e._value);
      }))
    : e._deferreds.push(t);
}
function So(e, t) {
  try {
    if (t === e)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (t && ('object' == typeof t || 'function' == typeof t)) {
      var n = t.then;
      if (t instanceof bo) return (e._state = 3), (e._value = t), void ko(e);
      if ('function' == typeof n)
        return void To(
          ((r = n),
          (o = t),
          function () {
            r.apply(o, arguments);
          }),
          e
        );
    }
    (e._state = 1), (e._value = t), ko(e);
  } catch (t) {
    _o(e, t);
  }
  var r, o;
}
function _o(e, t) {
  (e._state = 2), (e._value = t), ko(e);
}
function ko(e) {
  2 === e._state &&
    0 === e._deferreds.length &&
    bo._immediateFn(function () {
      e._handled || bo._unhandledRejectionFn(e._value);
    });
  for (var t = 0, n = e._deferreds.length; t < n; t++) wo(e, e._deferreds[t]);
  e._deferreds = null;
}
function Io(e, t, n) {
  (this.onFulfilled = 'function' == typeof e ? e : null),
    (this.onRejected = 'function' == typeof t ? t : null),
    (this.promise = n);
}
function To(e, t) {
  var n = !1;
  try {
    e(
      function (e) {
        n || ((n = !0), So(t, e));
      },
      function (e) {
        n || ((n = !0), _o(t, e));
      }
    );
  } catch (e) {
    if (n) return;
    (n = !0), _o(t, e);
  }
}
(bo.prototype.catch = function (e) {
  return this.then(null, e);
}),
  (bo.prototype.then = function (e, t) {
    var n = new this.constructor(go);
    return wo(this, new Io(e, t, n)), n;
  }),
  (bo.prototype.finally = po),
  (bo.all = function (e) {
    return new bo(function (t, n) {
      if (!mo(e)) return n(new TypeError('Promise.all accepts an array'));
      var r = Array.prototype.slice.call(e);
      if (0 === r.length) return t([]);
      var o = r.length;
      function i(e, a) {
        try {
          if (a && ('object' == typeof a || 'function' == typeof a)) {
            var c = a.then;
            if ('function' == typeof c)
              return void c.call(
                a,
                function (t) {
                  i(e, t);
                },
                n
              );
          }
          (r[e] = a), 0 == --o && t(r);
        } catch (e) {
          n(e);
        }
      }
      for (var a = 0; a < r.length; a++) i(a, r[a]);
    });
  }),
  (bo.allSettled = yo),
  (bo.resolve = function (e) {
    return e && 'object' == typeof e && e.constructor === bo
      ? e
      : new bo(function (t) {
          t(e);
        });
  }),
  (bo.reject = function (e) {
    return new bo(function (t, n) {
      n(e);
    });
  }),
  (bo.race = function (e) {
    return new bo(function (t, n) {
      if (!mo(e)) return n(new TypeError('Promise.race accepts an array'));
      for (var r = 0, o = e.length; r < o; r++) bo.resolve(e[r]).then(t, n);
    });
  }),
  (bo._immediateFn =
    ('function' == typeof setImmediate &&
      function (e) {
        setImmediate(e);
      }) ||
    function (e) {
      vo(e, 0);
    }),
  (bo._unhandledRejectionFn = function (e) {
    'undefined' != typeof console &&
      console &&
      console.warn('Possible Unhandled Promise Rejection:', e);
  });
var Oo = (function () {
  if ('undefined' != typeof self) return self;
  if ('undefined' != typeof window) return window;
  if ('undefined' != typeof global) return global;
  throw new Error('unable to locate global object');
})();
'function' != typeof Oo.Promise
  ? (Oo.Promise = bo)
  : Oo.Promise.prototype.finally
  ? Oo.Promise.allSettled || (Oo.Promise.allSettled = yo)
  : (Oo.Promise.prototype.finally = po),
  (function (e) {
    function t() {}
    function n(e, t) {
      if (
        ((e = void 0 === e ? 'utf-8' : e),
        (t = void 0 === t ? { fatal: !1 } : t),
        -1 === o.indexOf(e.toLowerCase()))
      )
        throw new RangeError(
          "Failed to construct 'TextDecoder': The encoding label provided ('" +
            e +
            "') is invalid."
        );
      if (t.fatal)
        throw Error(
          "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
        );
    }
    function r(e) {
      for (
        var t = 0,
          n = Math.min(65536, e.length + 1),
          r = new Uint16Array(n),
          o = [],
          i = 0;
        ;

      ) {
        var a = t < e.length;
        if (!a || i >= n - 1) {
          if ((o.push(String.fromCharCode.apply(null, r.subarray(0, i))), !a))
            return o.join('');
          (e = e.subarray(t)), (i = t = 0);
        }
        if (0 == (128 & (a = e[t++]))) r[i++] = a;
        else if (192 == (224 & a)) {
          var c = 63 & e[t++];
          r[i++] = ((31 & a) << 6) | c;
        } else if (224 == (240 & a)) {
          c = 63 & e[t++];
          var s = 63 & e[t++];
          r[i++] = ((31 & a) << 12) | (c << 6) | s;
        } else if (240 == (248 & a)) {
          65535 <
            (a =
              ((7 & a) << 18) |
              ((c = 63 & e[t++]) << 12) |
              ((s = 63 & e[t++]) << 6) |
              (63 & e[t++])) &&
            ((a -= 65536),
            (r[i++] = ((a >>> 10) & 1023) | 55296),
            (a = 56320 | (1023 & a))),
            (r[i++] = a);
        }
      }
    }
    if (e.TextEncoder && e.TextDecoder) return !1;
    var o = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
    Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
      (t.prototype.encode = function (e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        t = 0;
        for (
          var n = e.length,
            r = 0,
            o = Math.max(32, n + (n >>> 1) + 7),
            i = new Uint8Array((o >>> 3) << 3);
          t < n;

        ) {
          var a = e.charCodeAt(t++);
          if (55296 <= a && 56319 >= a) {
            if (t < n) {
              var c = e.charCodeAt(t);
              56320 == (64512 & c) &&
                (++t, (a = ((1023 & a) << 10) + (1023 & c) + 65536));
            }
            if (55296 <= a && 56319 >= a) continue;
          }
          if (
            (r + 4 > i.length &&
              ((o += 8),
              (o = ((o *= 1 + (t / e.length) * 2) >>> 3) << 3),
              (c = new Uint8Array(o)).set(i),
              (i = c)),
            0 == (4294967168 & a))
          )
            i[r++] = a;
          else {
            if (0 == (4294965248 & a)) i[r++] = ((a >>> 6) & 31) | 192;
            else if (0 == (4294901760 & a))
              (i[r++] = ((a >>> 12) & 15) | 224),
                (i[r++] = ((a >>> 6) & 63) | 128);
            else {
              if (0 != (4292870144 & a)) continue;
              (i[r++] = ((a >>> 18) & 7) | 240),
                (i[r++] = ((a >>> 12) & 63) | 128),
                (i[r++] = ((a >>> 6) & 63) | 128);
            }
            i[r++] = (63 & a) | 128;
          }
        }
        return i.slice ? i.slice(0, r) : i.subarray(0, r);
      }),
      Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
      Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
      Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 });
    var i = r;
    'function' == typeof Buffer && Buffer.from
      ? (i = function (e) {
          return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
            'utf-8'
          );
        })
      : 'function' == typeof Blob &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        (i = function (e) {
          var t = URL.createObjectURL(
            new Blob([e], { type: 'text/plain;charset=UTF-8' })
          );
          try {
            var n = new XMLHttpRequest();
            return n.open('GET', t, !1), n.send(), n.responseText;
          } catch (t) {
            return r(e);
          } finally {
            URL.revokeObjectURL(t);
          }
        }),
      (n.prototype.decode = function (e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to decode: the 'stream' option is unsupported.");
        return (
          (e =
            e instanceof Uint8Array
              ? e
              : e.buffer instanceof ArrayBuffer
              ? new Uint8Array(e.buffer)
              : new Uint8Array(e)),
          i(e)
        );
      }),
      (e.TextEncoder = t),
      (e.TextDecoder = n);
  })('undefined' != typeof window ? window : s),
  (function () {
    function e(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function t(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function n(e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    }
    function r(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && i(e, t);
    }
    function o(e) {
      return (o = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function i(e, t) {
      return (i =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function a() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function u(e, t) {
      return !t || ('object' != typeof t && 'function' != typeof t) ? c(e) : t;
    }
    function l(e) {
      var t = a();
      return function () {
        var n,
          r = o(e);
        if (t) {
          var i = o(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return u(this, n);
      };
    }
    function f(e, t) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = o(e));

      );
      return e;
    }
    function d(e, t, n) {
      return (d =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var r = f(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n) : o.value;
              }
            })(e, t, n || e);
    }
    var h = (function () {
        function t() {
          e(this, t),
            Object.defineProperty(this, 'listeners', {
              value: {},
              writable: !0,
              configurable: !0,
            });
        }
        return (
          n(t, [
            {
              key: 'addEventListener',
              value: function (e, t, n) {
                e in this.listeners || (this.listeners[e] = []),
                  this.listeners[e].push({ callback: t, options: n });
              },
            },
            {
              key: 'removeEventListener',
              value: function (e, t) {
                if (e in this.listeners)
                  for (
                    var n = this.listeners[e], r = 0, o = n.length;
                    r < o;
                    r++
                  )
                    if (n[r].callback === t) return void n.splice(r, 1);
              },
            },
            {
              key: 'dispatchEvent',
              value: function (e) {
                if (e.type in this.listeners) {
                  for (
                    var t = this.listeners[e.type].slice(), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var o = t[n];
                    try {
                      o.callback.call(this, e);
                    } catch (e) {
                      Promise.resolve().then(function () {
                        throw e;
                      });
                    }
                    o.options &&
                      o.options.once &&
                      this.removeEventListener(e.type, o.callback);
                  }
                  return !e.defaultPrevented;
                }
              },
            },
          ]),
          t
        );
      })(),
      p = (function (t) {
        r(a, t);
        var i = l(a);
        function a() {
          var t;
          return (
            e(this, a),
            (t = i.call(this)).listeners || h.call(c(t)),
            Object.defineProperty(c(t), 'aborted', {
              value: !1,
              writable: !0,
              configurable: !0,
            }),
            Object.defineProperty(c(t), 'onabort', {
              value: null,
              writable: !0,
              configurable: !0,
            }),
            t
          );
        }
        return (
          n(a, [
            {
              key: 'toString',
              value: function () {
                return '[object AbortSignal]';
              },
            },
            {
              key: 'dispatchEvent',
              value: function (e) {
                'abort' === e.type &&
                  ((this.aborted = !0),
                  'function' == typeof this.onabort &&
                    this.onabort.call(this, e)),
                  d(o(a.prototype), 'dispatchEvent', this).call(this, e);
              },
            },
          ]),
          a
        );
      })(h),
      y = (function () {
        function t() {
          e(this, t),
            Object.defineProperty(this, 'signal', {
              value: new p(),
              writable: !0,
              configurable: !0,
            });
        }
        return (
          n(t, [
            {
              key: 'abort',
              value: function () {
                var e;
                try {
                  e = new Event('abort');
                } catch (t) {
                  'undefined' != typeof document
                    ? document.createEvent
                      ? (e = document.createEvent('Event')).initEvent(
                          'abort',
                          !1,
                          !1
                        )
                      : ((e = document.createEventObject()).type = 'abort')
                    : (e = { type: 'abort', bubbles: !1, cancelable: !1 });
                }
                this.signal.dispatchEvent(e);
              },
            },
            {
              key: 'toString',
              value: function () {
                return '[object AbortController]';
              },
            },
          ]),
          t
        );
      })();
    function v(e) {
      return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
        ? (console.log(
            '__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill'
          ),
          !0)
        : ('function' == typeof e.Request &&
            !e.Request.prototype.hasOwnProperty('signal')) ||
            !e.AbortController;
    }
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      ((y.prototype[Symbol.toStringTag] = 'AbortController'),
      (p.prototype[Symbol.toStringTag] = 'AbortSignal')),
      (function (e) {
        v(e) && ((e.AbortController = y), (e.AbortSignal = p));
      })('undefined' != typeof self ? self : s);
  })();
var Eo = l(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var n = (function () {
    function e() {
      var e = this;
      (this.locked = new Map()),
        (this.addToLocked = function (t, n) {
          var r = e.locked.get(t);
          void 0 === r
            ? void 0 === n
              ? e.locked.set(t, [])
              : e.locked.set(t, [n])
            : void 0 !== n && (r.unshift(n), e.locked.set(t, r));
        }),
        (this.isLocked = function (t) {
          return e.locked.has(t);
        }),
        (this.lock = function (t) {
          return new Promise(function (n, r) {
            e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
          });
        }),
        (this.unlock = function (t) {
          var n = e.locked.get(t);
          if (void 0 !== n && 0 !== n.length) {
            var r = n.pop();
            e.locked.set(t, n), void 0 !== r && setTimeout(r, 0);
          } else e.locked.delete(t);
        });
    }
    return (
      (e.getInstance = function () {
        return void 0 === e.instance && (e.instance = new e()), e.instance;
      }),
      e
    );
  })();
  t.default = function () {
    return n.getInstance();
  };
});
u(Eo);
var xo = u(
    l(function (e, t) {
      var n =
          (s && s.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (o, i) {
              function a(e) {
                try {
                  s(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                try {
                  s(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                e.done
                  ? o(e.value)
                  : new n(function (t) {
                      t(e.value);
                    }).then(a, c);
              }
              s((r = r.apply(e, t || [])).next());
            });
          },
        r =
          (s && s.__generator) ||
          function (e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: c(0), throw: c(1), return: c(2) }),
              'function' == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function c(i) {
              return function (c) {
                return (function (i) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((o = r.return) && o.call(r), 0)
                              : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !((o = a.trys),
                            (o = o.length > 0 && o[o.length - 1]) ||
                              (6 !== i[0] && 2 !== i[0]))
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, c]);
              };
            }
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = 'browser-tabs-lock-key';
      function i(e) {
        return new Promise(function (t) {
          return setTimeout(t, e);
        });
      }
      function a(e) {
        for (
          var t =
              '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
            n = '',
            r = 0;
          r < e;
          r++
        ) {
          n += t[Math.floor(Math.random() * t.length)];
        }
        return n;
      }
      var c = (function () {
        function e() {
          (this.acquiredIatSet = new Set()),
            (this.id = Date.now().toString() + a(15)),
            (this.acquireLock = this.acquireLock.bind(this)),
            (this.releaseLock = this.releaseLock.bind(this)),
            (this.releaseLock__private__ = this.releaseLock__private__.bind(
              this
            )),
            (this.waitForSomethingToChange = this.waitForSomethingToChange.bind(
              this
            )),
            (this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(
              this
            )),
            void 0 === e.waiters && (e.waiters = []);
        }
        return (
          (e.prototype.acquireLock = function (t, c) {
            return (
              void 0 === c && (c = 5e3),
              n(this, void 0, void 0, function () {
                var n, s, u, l, f, d;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      (n = Date.now() + a(4)),
                        (s = Date.now() + c),
                        (u = o + '-' + t),
                        (l = window.localStorage),
                        (r.label = 1);
                    case 1:
                      return Date.now() < s ? [4, i(30)] : [3, 8];
                    case 2:
                      return (
                        r.sent(),
                        null !== l.getItem(u)
                          ? [3, 5]
                          : ((f = this.id + '-' + t + '-' + n),
                            [4, i(Math.floor(25 * Math.random()))])
                      );
                    case 3:
                      return (
                        r.sent(),
                        l.setItem(
                          u,
                          JSON.stringify({
                            id: this.id,
                            iat: n,
                            timeoutKey: f,
                            timeAcquired: Date.now(),
                            timeRefreshed: Date.now(),
                          })
                        ),
                        [4, i(30)]
                      );
                    case 4:
                      return (
                        r.sent(),
                        null !== (d = l.getItem(u)) &&
                        (d = JSON.parse(d)).id === this.id &&
                        d.iat === n
                          ? (this.acquiredIatSet.add(n),
                            this.refreshLockWhileAcquired(u, n),
                            [2, !0])
                          : [3, 7]
                      );
                    case 5:
                      return (
                        e.lockCorrector(), [4, this.waitForSomethingToChange(s)]
                      );
                    case 6:
                      r.sent(), (r.label = 7);
                    case 7:
                      return (n = Date.now() + a(4)), [3, 1];
                    case 8:
                      return [2, !1];
                  }
                });
              })
            );
          }),
          (e.prototype.refreshLockWhileAcquired = function (e, t) {
            return n(this, void 0, void 0, function () {
              var o = this;
              return r(this, function (i) {
                return (
                  setTimeout(function () {
                    return n(o, void 0, void 0, function () {
                      var n, o;
                      return r(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return [4, Eo.default().lock(t)];
                          case 1:
                            return (
                              r.sent(),
                              this.acquiredIatSet.has(t)
                                ? ((n = window.localStorage),
                                  null === (o = n.getItem(e))
                                    ? (Eo.default().unlock(t), [2])
                                    : (((o = JSON.parse(
                                        o
                                      )).timeRefreshed = Date.now()),
                                      n.setItem(e, JSON.stringify(o)),
                                      Eo.default().unlock(t),
                                      this.refreshLockWhileAcquired(e, t),
                                      [2]))
                                : (Eo.default().unlock(t), [2])
                            );
                        }
                      });
                    });
                  }, 1e3),
                  [2]
                );
              });
            });
          }),
          (e.prototype.waitForSomethingToChange = function (t) {
            return n(this, void 0, void 0, function () {
              return r(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (n) {
                        var r = !1,
                          o = Date.now(),
                          i = !1;
                        function a() {
                          if (
                            (i ||
                              (window.removeEventListener('storage', a),
                              e.removeFromWaiting(a),
                              clearTimeout(c),
                              (i = !0)),
                            !r)
                          ) {
                            r = !0;
                            var t = 50 - (Date.now() - o);
                            t > 0 ? setTimeout(n, t) : n();
                          }
                        }
                        window.addEventListener('storage', a),
                          e.addToWaiting(a);
                        var c = setTimeout(a, Math.max(0, t - Date.now()));
                      }),
                    ];
                  case 1:
                    return n.sent(), [2];
                }
              });
            });
          }),
          (e.addToWaiting = function (t) {
            this.removeFromWaiting(t),
              void 0 !== e.waiters && e.waiters.push(t);
          }),
          (e.removeFromWaiting = function (t) {
            void 0 !== e.waiters &&
              (e.waiters = e.waiters.filter(function (e) {
                return e !== t;
              }));
          }),
          (e.notifyWaiters = function () {
            void 0 !== e.waiters &&
              e.waiters.slice().forEach(function (e) {
                return e();
              });
          }),
          (e.prototype.releaseLock = function (e) {
            return n(this, void 0, void 0, function () {
              return r(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.releaseLock__private__(e)];
                  case 1:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype.releaseLock__private__ = function (t) {
            return n(this, void 0, void 0, function () {
              var n, i, a;
              return r(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (n = window.localStorage),
                      (i = o + '-' + t),
                      null === (a = n.getItem(i))
                        ? [2]
                        : (a = JSON.parse(a)).id !== this.id
                        ? [3, 2]
                        : [4, Eo.default().lock(a.iat)]
                    );
                  case 1:
                    r.sent(),
                      this.acquiredIatSet.delete(a.iat),
                      n.removeItem(i),
                      Eo.default().unlock(a.iat),
                      e.notifyWaiters(),
                      (r.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (e.lockCorrector = function () {
            for (
              var t = Date.now() - 5e3,
                n = window.localStorage,
                r = Object.keys(n),
                i = !1,
                a = 0;
              a < r.length;
              a++
            ) {
              var c = r[a];
              if (c.includes(o)) {
                var s = n.getItem(c);
                null !== s &&
                  ((void 0 === (s = JSON.parse(s)).timeRefreshed &&
                    s.timeAcquired < t) ||
                    (void 0 !== s.timeRefreshed && s.timeRefreshed < t)) &&
                  (n.removeItem(c), (i = !0));
              }
            }
            i && e.notifyWaiters();
          }),
          (e.waiters = void 0),
          e
        );
      })();
      t.default = c;
    })
  ),
  Co = { timeoutInSeconds: 60 },
  Ro = [
    'login_required',
    'consent_required',
    'interaction_required',
    'account_selection_required',
    'access_denied',
  ],
  jo = { name: 'auth0-spa-js', version: '1.18.0' },
  Ao = (function (e) {
    function n(t, r) {
      var o = e.call(this, r) || this;
      return (
        (o.error = t),
        (o.error_description = r),
        Object.setPrototypeOf(o, n.prototype),
        o
      );
    }
    return (
      t(n, e),
      (n.fromPayload = function (e) {
        return new n(e.error, e.error_description);
      }),
      n
    );
  })(Error),
  Fo = (function (e) {
    function n(t, r, o, i) {
      void 0 === i && (i = null);
      var a = e.call(this, t, r) || this;
      return (
        (a.state = o),
        (a.appState = i),
        Object.setPrototypeOf(a, n.prototype),
        a
      );
    }
    return t(n, e), n;
  })(Ao),
  Ko = (function (e) {
    function n() {
      var t = e.call(this, 'timeout', 'Timeout') || this;
      return Object.setPrototypeOf(t, n.prototype), t;
    }
    return t(n, e), n;
  })(Ao),
  Uo = (function (e) {
    function n(t) {
      var r = e.call(this) || this;
      return (r.popup = t), Object.setPrototypeOf(r, n.prototype), r;
    }
    return t(n, e), n;
  })(Ko),
  Lo = (function (e) {
    function n(t) {
      var r = e.call(this, 'cancelled', 'Popup closed') || this;
      return (r.popup = t), Object.setPrototypeOf(r, n.prototype), r;
    }
    return t(n, e), n;
  })(Ao),
  Po = (function (e) {
    function n(t, r, o) {
      var i = e.call(this, t, r) || this;
      return (i.mfa_token = o), Object.setPrototypeOf(i, n.prototype), i;
    }
    return t(n, e), n;
  })(Ao),
  Wo = function (e) {
    return new Promise(function (t, n) {
      var r,
        o = setInterval(function () {
          e.popup &&
            e.popup.closed &&
            (clearInterval(o),
            clearTimeout(i),
            window.removeEventListener('message', r, !1),
            n(new Lo(e.popup)));
        }, 1e3),
        i = setTimeout(function () {
          clearInterval(o),
            n(new Uo(e.popup)),
            window.removeEventListener('message', r, !1);
        }, 1e3 * (e.timeoutInSeconds || 60));
      (r = function (a) {
        if (a.data && 'authorization_response' === a.data.type) {
          if (
            (clearTimeout(i),
            clearInterval(o),
            window.removeEventListener('message', r, !1),
            e.popup.close(),
            a.data.response.error)
          )
            return n(Ao.fromPayload(a.data.response));
          t(a.data.response);
        }
      }),
        window.addEventListener('message', r);
    });
  },
  Zo = function () {
    return window.crypto || window.msCrypto;
  },
  Vo = function () {
    var e = Zo();
    return e.subtle || e.webkitSubtle;
  },
  No = function () {
    var e =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
      t = '';
    return (
      Array.from(Zo().getRandomValues(new Uint8Array(43))).forEach(function (
        n
      ) {
        return (t += e[n % e.length]);
      }),
      t
    );
  },
  Xo = function (e) {
    return btoa(e);
  },
  Yo = function (e) {
    return Object.keys(e)
      .filter(function (t) {
        return void 0 !== e[t];
      })
      .map(function (t) {
        return encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
      })
      .join('&');
  },
  zo = function (e) {
    return o(void 0, void 0, void 0, function () {
      var t;
      return i(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = Vo().digest(
                { name: 'SHA-256' },
                new TextEncoder().encode(e)
              )),
              window.msCrypto
                ? [
                    2,
                    new Promise(function (e, n) {
                      (t.oncomplete = function (t) {
                        e(t.target.result);
                      }),
                        (t.onerror = function (e) {
                          n(e.error);
                        }),
                        (t.onabort = function () {
                          n('The digest operation was aborted');
                        });
                    }),
                  ]
                : [4, t]
            );
          case 1:
            return [2, n.sent()];
        }
      });
    });
  },
  Do = function (e) {
    return (function (e) {
      return decodeURIComponent(
        atob(e)
          .split('')
          .map(function (e) {
            return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
    })(e.replace(/_/g, '/').replace(/-/g, '+'));
  },
  Jo = function (e) {
    var t = new Uint8Array(e);
    return (function (e) {
      var t = { '+': '-', '/': '_', '=': '' };
      return e.replace(/[+/=]/g, function (e) {
        return t[e];
      });
    })(window.btoa(String.fromCharCode.apply(String, c([], a(Array.from(t))))));
  };
var Bo = function (e, t) {
    return o(void 0, void 0, void 0, function () {
      var n, r;
      return i(this, function (o) {
        switch (o.label) {
          case 0:
            return [
              4,
              ((i = e),
              (a = t),
              (a = a || {}),
              new Promise(function (e, t) {
                var n = new XMLHttpRequest(),
                  r = [],
                  o = [],
                  c = {},
                  s = function () {
                    return {
                      ok: 2 == ((n.status / 100) | 0),
                      statusText: n.statusText,
                      status: n.status,
                      url: n.responseURL,
                      text: function () {
                        return Promise.resolve(n.responseText);
                      },
                      json: function () {
                        return Promise.resolve(n.responseText).then(JSON.parse);
                      },
                      blob: function () {
                        return Promise.resolve(new Blob([n.response]));
                      },
                      clone: s,
                      headers: {
                        keys: function () {
                          return r;
                        },
                        entries: function () {
                          return o;
                        },
                        get: function (e) {
                          return c[e.toLowerCase()];
                        },
                        has: function (e) {
                          return e.toLowerCase() in c;
                        },
                      },
                    };
                  };
                for (var u in (n.open(a.method || 'get', i, !0),
                (n.onload = function () {
                  n
                    .getAllResponseHeaders()
                    .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (
                      e,
                      t,
                      n
                    ) {
                      r.push((t = t.toLowerCase())),
                        o.push([t, n]),
                        (c[t] = c[t] ? c[t] + ',' + n : n);
                    }),
                    e(s());
                }),
                (n.onerror = t),
                (n.withCredentials = 'include' == a.credentials),
                a.headers))
                  n.setRequestHeader(u, a.headers[u]);
                n.send(a.body || null);
              })),
            ];
          case 1:
            return (n = o.sent()), (r = { ok: n.ok }), [4, n.json()];
          case 2:
            return [2, ((r.json = o.sent()), r)];
        }
        var i, a;
      });
    });
  },
  Go = function (e, t, n) {
    return o(void 0, void 0, void 0, function () {
      var r, o;
      return i(this, function (i) {
        return (
          (r = new AbortController()),
          (t.signal = r.signal),
          [
            2,
            Promise.race([
              Bo(e, t),
              new Promise(function (e, t) {
                o = setTimeout(function () {
                  r.abort(), t(new Error("Timeout when executing 'fetch'"));
                }, n);
              }),
            ]).finally(function () {
              clearTimeout(o);
            }),
          ]
        );
      });
    });
  },
  Mo = function (e, t, n, r, a, c, s) {
    return o(void 0, void 0, void 0, function () {
      return i(this, function (o) {
        return [
          2,
          ((i = {
            auth: { audience: t, scope: n },
            timeout: a,
            fetchUrl: e,
            fetchOptions: r,
            useFormData: s,
          }),
          (u = c),
          new Promise(function (e, t) {
            var n = new MessageChannel();
            (n.port1.onmessage = function (n) {
              n.data.error ? t(new Error(n.data.error)) : e(n.data);
            }),
              u.postMessage(i, [n.port2]);
          })),
        ];
        var i, u;
      });
    });
  },
  Ho = function (e, t, n, r, a, c, s) {
    return (
      void 0 === s && (s = 1e4),
      o(void 0, void 0, void 0, function () {
        return i(this, function (o) {
          return a ? [2, Mo(e, t, n, r, s, a, c)] : [2, Go(e, r, s)];
        });
      })
    );
  };
function qo(e, t, n, a, c, s, u) {
  return o(this, void 0, void 0, function () {
    var o, l, f, d, h, p, y, v, m;
    return i(this, function (i) {
      switch (i.label) {
        case 0:
          (o = null), (f = 0), (i.label = 1);
        case 1:
          if (!(f < 3)) return [3, 6];
          i.label = 2;
        case 2:
          return i.trys.push([2, 4, , 5]), [4, Ho(e, n, a, c, s, u, t)];
        case 3:
          return (l = i.sent()), (o = null), [3, 6];
        case 4:
          return (d = i.sent()), (o = d), [3, 5];
        case 5:
          return f++, [3, 1];
        case 6:
          if (o) throw ((o.message = o.message || 'Failed to fetch'), o);
          if (
            ((h = l.json),
            (p = h.error),
            (y = h.error_description),
            (v = r(h, ['error', 'error_description'])),
            !l.ok)
          ) {
            if (
              ((m = y || 'HTTP error. Unable to fetch ' + e),
              'mfa_required' === p)
            )
              throw new Po(p, m, v.mfa_token);
            throw new Ao(p || 'request_error', m);
          }
          return [2, v];
      }
    });
  });
}
function Qo(e, t) {
  var n = e.baseUrl,
    a = e.timeout,
    c = e.audience,
    s = e.scope,
    u = e.auth0Client,
    l = e.useFormData,
    f = r(e, [
      'baseUrl',
      'timeout',
      'audience',
      'scope',
      'auth0Client',
      'useFormData',
    ]);
  return o(this, void 0, void 0, function () {
    var e;
    return i(this, function (r) {
      switch (r.label) {
        case 0:
          return (
            (e = l ? Yo(f) : JSON.stringify(f)),
            [
              4,
              qo(
                n + '/oauth/token',
                a,
                c || 'default',
                s,
                {
                  method: 'POST',
                  body: e,
                  headers: {
                    'Content-Type': l
                      ? 'application/x-www-form-urlencoded'
                      : 'application/json',
                    'Auth0-Client': btoa(JSON.stringify(u || jo)),
                  },
                },
                t,
                l
              ),
            ]
          );
        case 1:
          return [2, r.sent()];
      }
    });
  });
}
var $o = function (e) {
    return Array.from(new Set(e));
  },
  ei = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return $o(e.join(' ').trim().split(/\s+/)).join(' ');
  },
  ti = (function () {
    function e(e, t) {
      void 0 === t && (t = '@@auth0spajs@@'),
        (this.prefix = t),
        (this.client_id = e.client_id),
        (this.scope = e.scope),
        (this.audience = e.audience);
    }
    return (
      (e.prototype.toKey = function () {
        return (
          this.prefix +
          '::' +
          this.client_id +
          '::' +
          this.audience +
          '::' +
          this.scope
        );
      }),
      (e.fromKey = function (t) {
        var n = a(t.split('::'), 4),
          r = n[0],
          o = n[1],
          i = n[2];
        return new e({ client_id: o, scope: n[3], audience: i }, r);
      }),
      (e.fromCacheEntry = function (t) {
        return new e({
          scope: t.scope,
          audience: t.audience,
          client_id: t.client_id,
        });
      }),
      e
    );
  })(),
  ni = (function () {
    function e() {}
    return (
      (e.prototype.set = function (e, t) {
        localStorage.setItem(e, JSON.stringify(t));
      }),
      (e.prototype.get = function (e) {
        var t = window.localStorage.getItem(e);
        if (t)
          try {
            return JSON.parse(t);
          } catch (e) {
            return;
          }
      }),
      (e.prototype.remove = function (e) {
        localStorage.removeItem(e);
      }),
      (e.prototype.allKeys = function () {
        return Object.keys(window.localStorage).filter(function (e) {
          return e.startsWith('@@auth0spajs@@');
        });
      }),
      e
    );
  })(),
  ri = function () {
    var e;
    this.enclosedCache =
      ((e = {}),
      {
        set: function (t, n) {
          e[t] = n;
        },
        get: function (t) {
          var n = e[t];
          if (n) return n;
        },
        remove: function (t) {
          delete e[t];
        },
        allKeys: function () {
          return Object.keys(e);
        },
      });
  },
  oi = (function () {
    function e(e, t) {
      (this.cache = e), (this.keyManifest = t);
    }
    return (
      (e.prototype.get = function (e, t) {
        var n;
        return (
          void 0 === t && (t = 0),
          o(this, void 0, void 0, function () {
            var r, o, a, c;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, this.cache.get(e.toKey())];
                case 1:
                  return (r = i.sent()) ? [3, 4] : [4, this.getCacheKeys()];
                case 2:
                  return (o = i.sent())
                    ? ((a = this.matchExistingCacheKey(e, o)),
                      [4, this.cache.get(a)])
                    : [2];
                case 3:
                  (r = i.sent()), (i.label = 4);
                case 4:
                  return r
                    ? ((c = Math.floor(Date.now() / 1e3)),
                      r.expiresAt - t < c
                        ? r.body.refresh_token
                          ? ((r.body = { refresh_token: r.body.refresh_token }),
                            [4, this.cache.set(e.toKey(), r)])
                          : [3, 6]
                        : [3, 9])
                    : [2];
                case 5:
                  return i.sent(), [2, r.body];
                case 6:
                  return [4, this.cache.remove(e.toKey())];
                case 7:
                  return (
                    i.sent(),
                    [
                      4,
                      null === (n = this.keyManifest) || void 0 === n
                        ? void 0
                        : n.remove(e.toKey()),
                    ]
                  );
                case 8:
                  return i.sent(), [2];
                case 9:
                  return [2, r.body];
              }
            });
          })
        );
      }),
      (e.prototype.set = function (e) {
        var t;
        return o(this, void 0, void 0, function () {
          var n, r;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (n = new ti({
                    client_id: e.client_id,
                    scope: e.scope,
                    audience: e.audience,
                  })),
                  (r = this.wrapCacheEntry(e)),
                  [4, this.cache.set(n.toKey(), r)]
                );
              case 1:
                return (
                  o.sent(),
                  [
                    4,
                    null === (t = this.keyManifest) || void 0 === t
                      ? void 0
                      : t.add(n.toKey()),
                  ]
                );
              case 2:
                return o.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.clear = function (e) {
        var t;
        return o(this, void 0, void 0, function () {
          var n,
            r = this;
          return i(this, function (a) {
            switch (a.label) {
              case 0:
                return [4, this.getCacheKeys()];
              case 1:
                return (n = a.sent())
                  ? [
                      4,
                      n
                        .filter(function (t) {
                          return !e || t.includes(e);
                        })
                        .reduce(function (e, t) {
                          return o(r, void 0, void 0, function () {
                            return i(this, function (n) {
                              switch (n.label) {
                                case 0:
                                  return [4, e];
                                case 1:
                                  return n.sent(), [4, this.cache.remove(t)];
                                case 2:
                                  return n.sent(), [2];
                              }
                            });
                          });
                        }, Promise.resolve()),
                    ]
                  : [2];
              case 2:
                return (
                  a.sent(),
                  [
                    4,
                    null === (t = this.keyManifest) || void 0 === t
                      ? void 0
                      : t.clear(),
                  ]
                );
              case 3:
                return a.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.clearSync = function (e) {
        var t = this,
          n = this.cache.allKeys();
        n &&
          n
            .filter(function (t) {
              return !e || t.includes(e);
            })
            .forEach(function (e) {
              t.cache.remove(e);
            });
      }),
      (e.prototype.wrapCacheEntry = function (e) {
        var t = Math.floor(Date.now() / 1e3) + e.expires_in;
        return { body: e, expiresAt: Math.min(t, e.decodedToken.claims.exp) };
      }),
      (e.prototype.getCacheKeys = function () {
        var e;
        return o(this, void 0, void 0, function () {
          var t;
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                return this.keyManifest ? [4, this.keyManifest.get()] : [3, 2];
              case 1:
                return (
                  (t =
                    null === (e = n.sent()) || void 0 === e ? void 0 : e.keys),
                  [3, 4]
                );
              case 2:
                return [4, this.cache.allKeys()];
              case 3:
                (t = n.sent()), (n.label = 4);
              case 4:
                return [2, t];
            }
          });
        });
      }),
      (e.prototype.matchExistingCacheKey = function (e, t) {
        return t.filter(function (t) {
          var n = ti.fromKey(t),
            r = new Set(n.scope && n.scope.split(' ')),
            o = e.scope.split(' '),
            i =
              n.scope &&
              o.reduce(function (e, t) {
                return e && r.has(t);
              }, !0);
          return (
            '@@auth0spajs@@' === n.prefix &&
            n.client_id === e.client_id &&
            n.audience === e.audience &&
            i
          );
        })[0];
      }),
      e
    );
  })(),
  ii = (function () {
    function e(e, t) {
      (this.storage = e),
        (this.clientId = t),
        (this.storageKey = 'a0.spajs.txs.' + t),
        (this.transaction = this.storage.get(this.storageKey));
    }
    return (
      (e.prototype.create = function (e) {
        (this.transaction = e),
          this.storage.save(this.storageKey, e, { daysUntilExpire: 1 });
      }),
      (e.prototype.get = function () {
        return this.transaction;
      }),
      (e.prototype.remove = function () {
        delete this.transaction, this.storage.remove(this.storageKey);
      }),
      e
    );
  })(),
  ai = function (e) {
    return 'number' == typeof e;
  },
  ci = [
    'iss',
    'aud',
    'exp',
    'nbf',
    'iat',
    'jti',
    'azp',
    'nonce',
    'auth_time',
    'at_hash',
    'c_hash',
    'acr',
    'amr',
    'sub_jwk',
    'cnf',
    'sip_from_tag',
    'sip_date',
    'sip_callid',
    'sip_cseq_num',
    'sip_via_branch',
    'orig',
    'dest',
    'mky',
    'events',
    'toe',
    'txn',
    'rph',
    'sid',
    'vot',
    'vtm',
  ],
  si = function (e) {
    if (!e.id_token) throw new Error('ID token is required but missing');
    var t = (function (e) {
      var t = e.split('.'),
        n = a(t, 3),
        r = n[0],
        o = n[1],
        i = n[2];
      if (3 !== t.length || !r || !o || !i)
        throw new Error('ID token could not be decoded');
      var c = JSON.parse(Do(o)),
        s = { __raw: e },
        u = {};
      return (
        Object.keys(c).forEach(function (e) {
          (s[e] = c[e]), ci.includes(e) || (u[e] = c[e]);
        }),
        {
          encoded: { header: r, payload: o, signature: i },
          header: JSON.parse(Do(r)),
          claims: s,
          user: u,
        }
      );
    })(e.id_token);
    if (!t.claims.iss)
      throw new Error(
        'Issuer (iss) claim must be a string present in the ID token'
      );
    if (t.claims.iss !== e.iss)
      throw new Error(
        'Issuer (iss) claim mismatch in the ID token; expected "' +
          e.iss +
          '", found "' +
          t.claims.iss +
          '"'
      );
    if (!t.user.sub)
      throw new Error(
        'Subject (sub) claim must be a string present in the ID token'
      );
    if ('RS256' !== t.header.alg)
      throw new Error(
        'Signature algorithm of "' +
          t.header.alg +
          '" is not supported. Expected the ID token to be signed with "RS256".'
      );
    if (
      !t.claims.aud ||
      ('string' != typeof t.claims.aud && !Array.isArray(t.claims.aud))
    )
      throw new Error(
        'Audience (aud) claim must be a string or array of strings present in the ID token'
      );
    if (Array.isArray(t.claims.aud)) {
      if (!t.claims.aud.includes(e.aud))
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            e.aud +
            '" but was not one of "' +
            t.claims.aud.join(', ') +
            '"'
        );
      if (t.claims.aud.length > 1) {
        if (!t.claims.azp)
          throw new Error(
            'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
          );
        if (t.claims.azp !== e.aud)
          throw new Error(
            'Authorized Party (azp) claim mismatch in the ID token; expected "' +
              e.aud +
              '", found "' +
              t.claims.azp +
              '"'
          );
      }
    } else if (t.claims.aud !== e.aud)
      throw new Error(
        'Audience (aud) claim mismatch in the ID token; expected "' +
          e.aud +
          '" but found "' +
          t.claims.aud +
          '"'
      );
    if (e.nonce) {
      if (!t.claims.nonce)
        throw new Error(
          'Nonce (nonce) claim must be a string present in the ID token'
        );
      if (t.claims.nonce !== e.nonce)
        throw new Error(
          'Nonce (nonce) claim mismatch in the ID token; expected "' +
            e.nonce +
            '", found "' +
            t.claims.nonce +
            '"'
        );
    }
    if (e.max_age && !ai(t.claims.auth_time))
      throw new Error(
        'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
      );
    if (!ai(t.claims.exp))
      throw new Error(
        'Expiration Time (exp) claim must be a number present in the ID token'
      );
    if (!ai(t.claims.iat))
      throw new Error(
        'Issued At (iat) claim must be a number present in the ID token'
      );
    var n = e.leeway || 60,
      r = new Date(Date.now()),
      o = new Date(0),
      i = new Date(0),
      c = new Date(0);
    if (
      (c.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n),
      o.setUTCSeconds(t.claims.exp + n),
      i.setUTCSeconds(t.claims.nbf - n),
      r > o)
    )
      throw new Error(
        'Expiration Time (exp) claim error in the ID token; current time (' +
          r +
          ') is after expiration time (' +
          o +
          ')'
      );
    if (ai(t.claims.nbf) && r < i)
      throw new Error(
        "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
          r +
          ') is before ' +
          i
      );
    if (ai(t.claims.auth_time) && r > c)
      throw new Error(
        'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
          r +
          ') is after last auth at ' +
          c
      );
    if (e.organizationId) {
      if (!t.claims.org_id)
        throw new Error(
          'Organization ID (org_id) claim must be a string present in the ID token'
        );
      if (e.organizationId !== t.claims.org_id)
        throw new Error(
          'Organization ID (org_id) claim mismatch in the ID token; expected "' +
            e.organizationId +
            '", found "' +
            t.claims.org_id +
            '"'
        );
    }
    return t;
  },
  ui = l(function (e, t) {
    var n =
      (s && s.__assign) ||
      function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
    function r(e, t) {
      if (!t) return '';
      var n = '; ' + e;
      return !0 === t ? n : n + '=' + t;
    }
    function o(e, t, n) {
      return (
        encodeURIComponent(e)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29') +
        '=' +
        encodeURIComponent(t).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) +
        (function (e) {
          if ('number' == typeof e.expires) {
            var t = new Date();
            t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
              (e.expires = t);
          }
          return (
            r('Expires', e.expires ? e.expires.toUTCString() : '') +
            r('Domain', e.domain) +
            r('Path', e.path) +
            r('Secure', e.secure) +
            r('SameSite', e.sameSite)
          );
        })(n)
      );
    }
    function i(e) {
      for (
        var t = {}, n = e ? e.split('; ') : [], r = /(%[\dA-F]{2})+/gi, o = 0;
        o < n.length;
        o++
      ) {
        var i = n[o].split('='),
          a = i.slice(1).join('=');
        '"' === a.charAt(0) && (a = a.slice(1, -1));
        try {
          t[i[0].replace(r, decodeURIComponent)] = a.replace(
            r,
            decodeURIComponent
          );
        } catch (e) {}
      }
      return t;
    }
    function a() {
      return i(document.cookie);
    }
    function c(e, t, r) {
      document.cookie = o(e, t, n({ path: '/' }, r));
    }
    (t.__esModule = !0),
      (t.encode = o),
      (t.parse = i),
      (t.getAll = a),
      (t.get = function (e) {
        return a()[e];
      }),
      (t.set = c),
      (t.remove = function (e, t) {
        c(e, '', n(n({}, t), { expires: -1 }));
      });
  });
u(ui), ui.encode, ui.parse, ui.getAll;
var li = ui.get,
  fi = ui.set,
  di = ui.remove,
  hi = {
    get: function (e) {
      var t = li(e);
      if (void 0 !== t) return JSON.parse(t);
    },
    save: function (e, t, n) {
      var r = {};
      'https:' === window.location.protocol &&
        (r = { secure: !0, sameSite: 'none' }),
        (null == n ? void 0 : n.daysUntilExpire) &&
          (r.expires = n.daysUntilExpire),
        fi(e, JSON.stringify(t), r);
    },
    remove: function (e) {
      di(e);
    },
  },
  pi = {
    get: function (e) {
      var t = hi.get(e);
      return t || hi.get('_legacy_' + e);
    },
    save: function (e, t, n) {
      var r = {};
      'https:' === window.location.protocol && (r = { secure: !0 }),
        (null == n ? void 0 : n.daysUntilExpire) &&
          (r.expires = n.daysUntilExpire),
        fi('_legacy_' + e, JSON.stringify(t), r),
        hi.save(e, t, n);
    },
    remove: function (e) {
      hi.remove(e), hi.remove('_legacy_' + e);
    },
  },
  yi = {
    get: function (e) {
      if ('undefined' != typeof sessionStorage) {
        var t = sessionStorage.getItem(e);
        if (void 0 !== t) return JSON.parse(t);
      }
    },
    save: function (e, t) {
      sessionStorage.setItem(e, JSON.stringify(t));
    },
    remove: function (e) {
      sessionStorage.removeItem(e);
    },
  };
function vi(e, t, n) {
  var r = void 0 === t ? null : t,
    o = (function (e, t) {
      var n = atob(e);
      if (t) {
        for (var r = new Uint8Array(n.length), o = 0, i = n.length; o < i; ++o)
          r[o] = n.charCodeAt(o);
        return String.fromCharCode.apply(null, new Uint16Array(r.buffer));
      }
      return n;
    })(e, void 0 !== n && n),
    i = o.indexOf('\n', 10) + 1,
    a = o.substring(i) + (r ? '//# sourceMappingURL=' + r : ''),
    c = new Blob([a], { type: 'application/javascript' });
  return URL.createObjectURL(c);
}
var mi,
  gi,
  bi,
  wi,
  Si =
    ((mi =
      'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Ci8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKgogICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uCgogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55CiAgICBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuCgogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgKICAgIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWQogICAgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULAogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NCiAgICBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUgogICAgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUgogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4KICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovdmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4oZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHIsdD0xLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWZvcih2YXIgbyBpbiByPWFyZ3VtZW50c1t0XSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixvKSYmKGVbb109cltvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHIoZSxyLHQsbil7cmV0dXJuIG5ldyh0fHwodD1Qcm9taXNlKSkoKGZ1bmN0aW9uKG8sYSl7ZnVuY3Rpb24gcyhlKXt0cnl7dShuLm5leHQoZSkpfWNhdGNoKGUpe2EoZSl9fWZ1bmN0aW9uIGkoZSl7dHJ5e3Uobi50aHJvdyhlKSl9Y2F0Y2goZSl7YShlKX19ZnVuY3Rpb24gdShlKXt2YXIgcjtlLmRvbmU/byhlLnZhbHVlKToocj1lLnZhbHVlLHIgaW5zdGFuY2VvZiB0P3I6bmV3IHQoKGZ1bmN0aW9uKGUpe2Uocil9KSkpLnRoZW4ocyxpKX11KChuPW4uYXBwbHkoZSxyfHxbXSkpLm5leHQoKSl9KSl9ZnVuY3Rpb24gdChlLHIpe3ZhciB0LG4sbyxhLHM9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIGE9e25leHQ6aSgwKSx0aHJvdzppKDEpLHJldHVybjppKDIpfSwiZnVuY3Rpb24iPT10eXBlb2YgU3ltYm9sJiYoYVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxhO2Z1bmN0aW9uIGkoYSl7cmV0dXJuIGZ1bmN0aW9uKGkpe3JldHVybiBmdW5jdGlvbihhKXtpZih0KXRocm93IG5ldyBUeXBlRXJyb3IoIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy4iKTtmb3IoO3M7KXRyeXtpZih0PTEsbiYmKG89MiZhWzBdP24ucmV0dXJuOmFbMF0/bi50aHJvd3x8KChvPW4ucmV0dXJuKSYmby5jYWxsKG4pLDApOm4ubmV4dCkmJiEobz1vLmNhbGwobixhWzFdKSkuZG9uZSlyZXR1cm4gbztzd2l0Y2gobj0wLG8mJihhPVsyJmFbMF0sby52YWx1ZV0pLGFbMF0pe2Nhc2UgMDpjYXNlIDE6bz1hO2JyZWFrO2Nhc2UgNDpyZXR1cm4gcy5sYWJlbCsrLHt2YWx1ZTphWzFdLGRvbmU6ITF9O2Nhc2UgNTpzLmxhYmVsKyssbj1hWzFdLGE9WzBdO2NvbnRpbnVlO2Nhc2UgNzphPXMub3BzLnBvcCgpLHMudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEobz1zLnRyeXMsKG89by5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSl8fDYhPT1hWzBdJiYyIT09YVswXSkpe3M9MDtjb250aW51ZX1pZigzPT09YVswXSYmKCFvfHxhWzFdPm9bMF0mJmFbMV08b1szXSkpe3MubGFiZWw9YVsxXTticmVha31pZig2PT09YVswXSYmcy5sYWJlbDxvWzFdKXtzLmxhYmVsPW9bMV0sbz1hO2JyZWFrfWlmKG8mJnMubGFiZWw8b1syXSl7cy5sYWJlbD1vWzJdLHMub3BzLnB1c2goYSk7YnJlYWt9b1syXSYmcy5vcHMucG9wKCkscy50cnlzLnBvcCgpO2NvbnRpbnVlfWE9ci5jYWxsKGUscyl9Y2F0Y2goZSl7YT1bNixlXSxuPTB9ZmluYWxseXt0PW89MH1pZig1JmFbMF0pdGhyb3cgYVsxXTtyZXR1cm57dmFsdWU6YVswXT9hWzFdOnZvaWQgMCxkb25lOiEwfX0oW2EsaV0pfX19dmFyIG49e30sbz1mdW5jdGlvbihlLHIpe3JldHVybiBlKyJ8IityfTthZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoZnVuY3Rpb24oYSl7dmFyIHM9YS5kYXRhLGk9cy50aW1lb3V0LHU9cy5hdXRoLGM9cy5mZXRjaFVybCxmPXMuZmV0Y2hPcHRpb25zLGw9cy51c2VGb3JtRGF0YSxoPWZ1bmN0aW9uKGUscil7dmFyIHQ9ImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmZVtTeW1ib2wuaXRlcmF0b3JdO2lmKCF0KXJldHVybiBlO3ZhciBuLG8sYT10LmNhbGwoZSkscz1bXTt0cnl7Zm9yKDsodm9pZCAwPT09cnx8ci0tID4wKSYmIShuPWEubmV4dCgpKS5kb25lOylzLnB1c2gobi52YWx1ZSl9Y2F0Y2goZSl7bz17ZXJyb3I6ZX19ZmluYWxseXt0cnl7biYmIW4uZG9uZSYmKHQ9YS5yZXR1cm4pJiZ0LmNhbGwoYSl9ZmluYWxseXtpZihvKXRocm93IG8uZXJyb3J9fXJldHVybiBzfShhLnBvcnRzLDEpWzBdO3JldHVybiByKHZvaWQgMCx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciByLGEscyxwLHksYixkLHYsdyxnO3JldHVybiB0KHRoaXMsKGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cz0oYT11fHx7fSkuYXVkaWVuY2UscD1hLnNjb3BlLHQubGFiZWw9MTtjYXNlIDE6aWYodC50cnlzLnB1c2goWzEsNywsOF0pLCEoeT1sPyhrPWYuYm9keSxTPW5ldyBVUkxTZWFyY2hQYXJhbXMoayksXz17fSxTLmZvckVhY2goKGZ1bmN0aW9uKGUscil7X1tyXT1lfSkpLF8pOkpTT04ucGFyc2UoZi5ib2R5KSkucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09eS5ncmFudF90eXBlKXtpZighKGI9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gbltvKGUscildfShzLHApKSl0aHJvdyBuZXcgRXJyb3IoIlRoZSB3ZWIgd29ya2VyIGlzIG1pc3NpbmcgdGhlIHJlZnJlc2ggdG9rZW4iKTtmLmJvZHk9bD9uZXcgVVJMU2VhcmNoUGFyYW1zKGUoZSh7fSx5KSx7cmVmcmVzaF90b2tlbjpifSkpLnRvU3RyaW5nKCk6SlNPTi5zdHJpbmdpZnkoZShlKHt9LHkpLHtyZWZyZXNoX3Rva2VuOmJ9KSl9ZD12b2lkIDAsImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixmLnNpZ25hbD1kLnNpZ25hbCksdj12b2lkIDAsdC5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gdC50cnlzLnB1c2goWzIsNCwsNV0pLFs0LFByb21pc2UucmFjZShbKG09aSxuZXcgUHJvbWlzZSgoZnVuY3Rpb24oZSl7cmV0dXJuIHNldFRpbWVvdXQoZSxtKX0pKSksZmV0Y2goYyxlKHt9LGYpKV0pXTtjYXNlIDM6cmV0dXJuIHY9dC5zZW50KCksWzMsNV07Y2FzZSA0OnJldHVybiB3PXQuc2VudCgpLGgucG9zdE1lc3NhZ2Uoe2Vycm9yOncubWVzc2FnZX0pLFsyXTtjYXNlIDU6cmV0dXJuIHY/WzQsdi5qc29uKCldOihkJiZkLmFib3J0KCksaC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KSxbMl0pO2Nhc2UgNjpyZXR1cm4ocj10LnNlbnQoKSkucmVmcmVzaF90b2tlbj8oZnVuY3Rpb24oZSxyLHQpe25bbyhyLHQpXT1lfShyLnJlZnJlc2hfdG9rZW4scyxwKSxkZWxldGUgci5yZWZyZXNoX3Rva2VuKTpmdW5jdGlvbihlLHIpe2RlbGV0ZSBuW28oZSxyKV19KHMscCksaC5wb3N0TWVzc2FnZSh7b2s6di5vayxqc29uOnJ9KSxbMyw4XTtjYXNlIDc6cmV0dXJuIGc9dC5zZW50KCksaC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3JfZGVzY3JpcHRpb246Zy5tZXNzYWdlfX0pLFszLDhdO2Nhc2UgODpyZXR1cm5bMl19dmFyIG0sayxTLF99KSl9KSl9KSl9KCk7Cgo='),
    (gi = null),
    (bi = !1),
    function (e) {
      return (wi = wi || vi(mi, gi, bi)), new Worker(wi, e);
    }),
  _i = {},
  ki = (function () {
    function e(e, t) {
      (this.cache = e),
        (this.clientId = t),
        (this.manifestKey = this.createManifestKeyFrom(this.clientId));
    }
    return (
      (e.prototype.add = function (e) {
        var t;
        return o(this, void 0, void 0, function () {
          var n, r;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                return (r = Set.bind), [4, this.cache.get(this.manifestKey)];
              case 1:
                return (
                  (n = new (r.apply(Set, [
                    void 0,
                    (null === (t = o.sent()) || void 0 === t
                      ? void 0
                      : t.keys) || [],
                  ]))()).add(e),
                  [4, this.cache.set(this.manifestKey, { keys: c([], a(n)) })]
                );
              case 2:
                return o.sent(), [2];
            }
          });
        });
      }),
      (e.prototype.remove = function (e) {
        return o(this, void 0, void 0, function () {
          var t, n;
          return i(this, function (r) {
            switch (r.label) {
              case 0:
                return [4, this.cache.get(this.manifestKey)];
              case 1:
                return (t = r.sent())
                  ? ((n = new Set(t.keys)).delete(e),
                    n.size > 0
                      ? [
                          4,
                          this.cache.set(this.manifestKey, {
                            keys: c([], a(n)),
                          }),
                        ]
                      : [3, 3])
                  : [3, 5];
              case 2:
                return [2, r.sent()];
              case 3:
                return [4, this.cache.remove(this.manifestKey)];
              case 4:
                return [2, r.sent()];
              case 5:
                return [2];
            }
          });
        });
      }),
      (e.prototype.get = function () {
        return this.cache.get(this.manifestKey);
      }),
      (e.prototype.clear = function () {
        return this.cache.remove(this.manifestKey);
      }),
      (e.prototype.createManifestKeyFrom = function (e) {
        return '@@auth0spajs@@::' + e;
      }),
      e
    );
  })(),
  Ii = new xo(),
  Ti = {
    memory: function () {
      return new ri().enclosedCache;
    },
    localstorage: function () {
      return new ni();
    },
  },
  Oi = function (e) {
    return Ti[e];
  },
  Ei = function () {
    return !/Trident.*rv:11\.0/.test(navigator.userAgent);
  },
  xi = (function () {
    function e(e) {
      var t, n, o;
      if (
        ((this.options = e),
        'undefined' != typeof window &&
          (function () {
            if (!Zo())
              throw new Error(
                'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
              );
            if (void 0 === Vo())
              throw new Error(
                '\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    '
              );
          })(),
        e.cache &&
          e.cacheLocation &&
          console.warn(
            'Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`.'
          ),
        e.cache)
      )
        o = e.cache;
      else {
        if (
          ((this.cacheLocation = e.cacheLocation || 'memory'),
          !Oi(this.cacheLocation))
        )
          throw new Error(
            'Invalid cache location "' + this.cacheLocation + '"'
          );
        o = Oi(this.cacheLocation)();
      }
      (this.cookieStorage = !1 === e.legacySameSiteCookie ? hi : pi),
        (this.orgHintCookieName =
          'auth0.' + this.options.client_id + '.organization_hint'),
        (this.isAuthenticatedCookieName = (function (e) {
          return 'auth0.' + e + '.is.authenticated';
        })(this.options.client_id)),
        (this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1);
      var i,
        a = e.useCookiesForTransactions ? this.cookieStorage : yi;
      (this.scope = this.options.scope),
        (this.transactionManager = new ii(a, this.options.client_id)),
        (this.cacheManager = new oi(
          o,
          o.allKeys ? null : new ki(o, this.options.client_id)
        )),
        (this.domainUrl =
          ((i = this.options.domain),
          /^https?:\/\//.test(i) ? i : 'https://' + i)),
        (this.tokenIssuer = (function (e, t) {
          return e
            ? e.startsWith('https://')
              ? e
              : 'https://' + e + '/'
            : t + '/';
        })(this.options.issuer, this.domainUrl)),
        (this.defaultScope = ei(
          'openid',
          void 0 !==
            (null ===
              (n =
                null === (t = this.options) || void 0 === t
                  ? void 0
                  : t.advancedOptions) || void 0 === n
              ? void 0
              : n.defaultScope)
            ? this.options.advancedOptions.defaultScope
            : 'openid profile email'
        )),
        this.options.useRefreshTokens &&
          (this.scope = ei(this.scope, 'offline_access')),
        'undefined' != typeof window &&
          window.Worker &&
          this.options.useRefreshTokens &&
          'memory' === this.cacheLocation &&
          Ei() &&
          (this.worker = new Si()),
        (this.customOptions = (function (e) {
          return (
            e.advancedOptions,
            e.audience,
            e.auth0Client,
            e.authorizeTimeoutInSeconds,
            e.cacheLocation,
            e.client_id,
            e.domain,
            e.issuer,
            e.leeway,
            e.max_age,
            e.redirect_uri,
            e.scope,
            e.useRefreshTokens,
            e.useCookiesForTransactions,
            e.useFormData,
            r(e, [
              'advancedOptions',
              'audience',
              'auth0Client',
              'authorizeTimeoutInSeconds',
              'cacheLocation',
              'client_id',
              'domain',
              'issuer',
              'leeway',
              'max_age',
              'redirect_uri',
              'scope',
              'useRefreshTokens',
              'useCookiesForTransactions',
              'useFormData',
            ])
          );
        })(e));
    }
    return (
      (e.prototype._url = function (e) {
        var t = encodeURIComponent(
          btoa(JSON.stringify(this.options.auth0Client || jo))
        );
        return '' + this.domainUrl + e + '&auth0Client=' + t;
      }),
      (e.prototype._getParams = function (e, t, o, i, a) {
        var c = this.options;
        c.domain,
          c.leeway,
          c.useRefreshTokens,
          c.useCookiesForTransactions,
          c.useFormData,
          c.auth0Client,
          c.cacheLocation,
          c.advancedOptions;
        var s = r(c, [
          'domain',
          'leeway',
          'useRefreshTokens',
          'useCookiesForTransactions',
          'useFormData',
          'auth0Client',
          'cacheLocation',
          'advancedOptions',
        ]);
        return n(n(n({}, s), e), {
          scope: ei(this.defaultScope, this.scope, e.scope),
          response_type: 'code',
          response_mode: 'query',
          state: t,
          nonce: o,
          redirect_uri: a || this.options.redirect_uri,
          code_challenge: i,
          code_challenge_method: 'S256',
        });
      }),
      (e.prototype._authorizeUrl = function (e) {
        return this._url('/authorize?' + Yo(e));
      }),
      (e.prototype._verifyIdToken = function (e, t, n) {
        return si({
          iss: this.tokenIssuer,
          aud: this.options.client_id,
          id_token: e,
          nonce: t,
          organizationId: n,
          leeway: this.options.leeway,
          max_age: this._parseNumber(this.options.max_age),
        });
      }),
      (e.prototype._parseNumber = function (e) {
        return 'string' != typeof e ? e : parseInt(e, 10) || void 0;
      }),
      (e.prototype._processOrgIdHint = function (e) {
        e
          ? this.cookieStorage.save(this.orgHintCookieName, e)
          : this.cookieStorage.remove(this.orgHintCookieName);
      }),
      (e.prototype.buildAuthorizeUrl = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, o, a, c, s, u, l, f, d, h, p, y;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = e.redirect_uri),
                    (o = e.appState),
                    (a = r(e, ['redirect_uri', 'appState'])),
                    (c = Xo(No())),
                    (s = Xo(No())),
                    (u = No()),
                    [4, zo(u)]
                  );
                case 1:
                  return (
                    (l = i.sent()),
                    (f = Jo(l)),
                    (d = e.fragment ? '#' + e.fragment : ''),
                    (h = this._getParams(a, c, s, f, t)),
                    (p = this._authorizeUrl(h)),
                    (y = e.organization || this.options.organization),
                    this.transactionManager.create(
                      n(
                        {
                          nonce: s,
                          code_verifier: u,
                          appState: o,
                          scope: h.scope,
                          audience: h.audience || 'default',
                          redirect_uri: h.redirect_uri,
                        },
                        y && { organizationId: y }
                      )
                    ),
                    [2, p + d]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.loginWithPopup = function (e, t) {
        return o(this, void 0, void 0, function () {
          var o, a, c, s, u, l, f, d, h, p, y, v, m;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e = e || {}),
                  (t = t || {}).popup ||
                    (t.popup = (function (e) {
                      var t = window.screenX + (window.innerWidth - 400) / 2,
                        n = window.screenY + (window.innerHeight - 600) / 2;
                      return window.open(
                        e,
                        'auth0:authorize:popup',
                        'left=' +
                          t +
                          ',top=' +
                          n +
                          ',width=400,height=600,resizable,scrollbars=yes,status=1'
                      );
                    })('')),
                  (o = r(e, [])),
                  (a = Xo(No())),
                  (c = Xo(No())),
                  (s = No()),
                  [4, zo(s)]
                );
              case 1:
                return (
                  (u = i.sent()),
                  (l = Jo(u)),
                  (f = this._getParams(
                    o,
                    a,
                    c,
                    l,
                    this.options.redirect_uri || window.location.origin
                  )),
                  (d = this._authorizeUrl(
                    n(n({}, f), { response_mode: 'web_message' })
                  )),
                  (t.popup.location.href = d),
                  [
                    4,
                    Wo(
                      n(n({}, t), {
                        timeoutInSeconds:
                          t.timeoutInSeconds ||
                          this.options.authorizeTimeoutInSeconds ||
                          60,
                      })
                    ),
                  ]
                );
              case 2:
                if (((h = i.sent()), a !== h.state))
                  throw new Error('Invalid state');
                return [
                  4,
                  Qo(
                    {
                      audience: f.audience,
                      scope: f.scope,
                      baseUrl: this.domainUrl,
                      client_id: this.options.client_id,
                      code_verifier: s,
                      code: h.code,
                      grant_type: 'authorization_code',
                      redirect_uri: f.redirect_uri,
                      auth0Client: this.options.auth0Client,
                      useFormData: this.options.useFormData,
                    },
                    this.worker
                  ),
                ];
              case 3:
                return (
                  (p = i.sent()),
                  (y = e.organization || this.options.organization),
                  (v = this._verifyIdToken(p.id_token, c, y)),
                  (m = n(n({}, p), {
                    decodedToken: v,
                    scope: f.scope,
                    audience: f.audience || 'default',
                    client_id: this.options.client_id,
                  })),
                  [4, this.cacheManager.set(m)]
                );
              case 4:
                return (
                  i.sent(),
                  this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
                    daysUntilExpire: this.sessionCheckExpiryDays,
                  }),
                  this._processOrgIdHint(v.claims.org_id),
                  [2]
                );
            }
          });
        });
      }),
      (e.prototype.getUser = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, n, r;
            return i(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.audience || this.options.audience || 'default'),
                    (n = ei(this.defaultScope, this.scope, e.scope)),
                    [
                      4,
                      this.cacheManager.get(
                        new ti({
                          client_id: this.options.client_id,
                          audience: t,
                          scope: n,
                        })
                      ),
                    ]
                  );
                case 1:
                  return [
                    2,
                    (r = o.sent()) && r.decodedToken && r.decodedToken.user,
                  ];
              }
            });
          })
        );
      }),
      (e.prototype.getIdTokenClaims = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, n, r;
            return i(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.audience || this.options.audience || 'default'),
                    (n = ei(this.defaultScope, this.scope, e.scope)),
                    [
                      4,
                      this.cacheManager.get(
                        new ti({
                          client_id: this.options.client_id,
                          audience: t,
                          scope: n,
                        })
                      ),
                    ]
                  );
                case 1:
                  return [
                    2,
                    (r = o.sent()) && r.decodedToken && r.decodedToken.claims,
                  ];
              }
            });
          })
        );
      }),
      (e.prototype.loginWithRedirect = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t, n, o;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = e.redirectMethod),
                    (n = r(e, ['redirectMethod'])),
                    [4, this.buildAuthorizeUrl(n)]
                  );
                case 1:
                  return (o = i.sent()), window.location[t || 'assign'](o), [2];
              }
            });
          })
        );
      }),
      (e.prototype.handleRedirectCallback = function (e) {
        return (
          void 0 === e && (e = window.location.href),
          o(this, void 0, void 0, function () {
            var t, r, o, c, s, u, l, f, d, h, p;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  if (0 === (t = e.split('?').slice(1)).length)
                    throw new Error(
                      'There are no query params available for parsing.'
                    );
                  if (
                    ((r = (function (e) {
                      e.indexOf('#') > -1 && (e = e.substr(0, e.indexOf('#')));
                      var t = e.split('&'),
                        n = {};
                      return (
                        t.forEach(function (e) {
                          var t = a(e.split('='), 2),
                            r = t[0],
                            o = t[1];
                          n[r] = decodeURIComponent(o);
                        }),
                        n.expires_in && (n.expires_in = parseInt(n.expires_in)),
                        n
                      );
                    })(t.join(''))),
                    (o = r.state),
                    (c = r.code),
                    (s = r.error),
                    (u = r.error_description),
                    !(l = this.transactionManager.get()) || !l.code_verifier)
                  )
                    throw new Error('Invalid state');
                  if ((this.transactionManager.remove(), s))
                    throw new Fo(s, u, o, l.appState);
                  return (
                    (f = {
                      audience: l.audience,
                      scope: l.scope,
                      baseUrl: this.domainUrl,
                      client_id: this.options.client_id,
                      code_verifier: l.code_verifier,
                      grant_type: 'authorization_code',
                      code: c,
                      auth0Client: this.options.auth0Client,
                      useFormData: this.options.useFormData,
                    }),
                    void 0 !== l.redirect_uri &&
                      (f.redirect_uri = l.redirect_uri),
                    [4, Qo(f, this.worker)]
                  );
                case 1:
                  return (
                    (d = i.sent()),
                    (h = this._verifyIdToken(
                      d.id_token,
                      l.nonce,
                      l.organizationId
                    )),
                    (p = n(n({}, d), {
                      decodedToken: h,
                      audience: l.audience,
                      scope: l.scope,
                      client_id: this.options.client_id,
                    })),
                    [4, this.cacheManager.set(p)]
                  );
                case 2:
                  return (
                    i.sent(),
                    this.cookieStorage.save(
                      this.isAuthenticatedCookieName,
                      !0,
                      { daysUntilExpire: this.sessionCheckExpiryDays }
                    ),
                    this._processOrgIdHint(h.claims.org_id),
                    [2, { appState: l.appState }]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.checkSession = function (e) {
        return o(this, void 0, void 0, function () {
          var t;
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
                  if (!this.cookieStorage.get('auth0.is.authenticated'))
                    return [2];
                  this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
                    daysUntilExpire: this.sessionCheckExpiryDays,
                  }),
                    this.cookieStorage.remove('auth0.is.authenticated');
                }
                n.label = 1;
              case 1:
                return n.trys.push([1, 3, , 4]), [4, this.getTokenSilently(e)];
              case 2:
                return n.sent(), [3, 4];
              case 3:
                if (((t = n.sent()), !Ro.includes(t.error))) throw t;
                return [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }),
      (e.prototype.getTokenSilently = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t,
              o,
              a,
              c = this;
            return i(this, function (i) {
              return (
                (t = n(
                  n({ audience: this.options.audience, ignoreCache: !1 }, e),
                  { scope: ei(this.defaultScope, this.scope, e.scope) }
                )),
                (o = t.ignoreCache),
                (a = r(t, ['ignoreCache'])),
                [
                  2,
                  ((s = function () {
                    return c._getTokenSilently(n({ ignoreCache: o }, a));
                  }),
                  (u =
                    this.options.client_id +
                    '::' +
                    a.audience +
                    '::' +
                    a.scope),
                  (l = _i[u]),
                  l ||
                    ((l = s().finally(function () {
                      delete _i[u], (l = null);
                    })),
                    (_i[u] = l)),
                  l),
                ]
              );
              var s, u, l;
            });
          })
        );
      }),
      (e.prototype._getTokenSilently = function (e) {
        return (
          void 0 === e && (e = {}),
          o(this, void 0, void 0, function () {
            var t,
              a,
              c,
              s,
              u,
              l,
              f = this;
            return i(this, function (d) {
              switch (d.label) {
                case 0:
                  return (
                    (t = e.ignoreCache),
                    (a = r(e, ['ignoreCache'])),
                    (c = function () {
                      return o(f, void 0, void 0, function () {
                        var e;
                        return i(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return [
                                4,
                                this.cacheManager.get(
                                  new ti({
                                    scope: a.scope,
                                    audience: a.audience || 'default',
                                    client_id: this.options.client_id,
                                  }),
                                  60
                                ),
                              ];
                            case 1:
                              return [2, (e = t.sent()) && e.access_token];
                          }
                        });
                      });
                    }),
                    t ? [3, 2] : [4, c()]
                  );
                case 1:
                  if ((s = d.sent())) return [2, s];
                  d.label = 2;
                case 2:
                  return [
                    4,
                    ((h = function () {
                      return Ii.acquireLock('auth0.lock.getTokenSilently', 5e3);
                    }),
                    (p = 10),
                    void 0 === p && (p = 3),
                    o(void 0, void 0, void 0, function () {
                      var e;
                      return i(this, function (t) {
                        switch (t.label) {
                          case 0:
                            (e = 0), (t.label = 1);
                          case 1:
                            return e < p ? [4, h()] : [3, 4];
                          case 2:
                            if (t.sent()) return [2, !0];
                            t.label = 3;
                          case 3:
                            return e++, [3, 1];
                          case 4:
                            return [2, !1];
                        }
                      });
                    })),
                  ];
                case 3:
                  if (!d.sent()) return [3, 15];
                  d.label = 4;
                case 4:
                  return d.trys.push([4, , 12, 14]), t ? [3, 6] : [4, c()];
                case 5:
                  if ((s = d.sent())) return [2, s];
                  d.label = 6;
                case 6:
                  return this.options.useRefreshTokens
                    ? [4, this._getTokenUsingRefreshToken(a)]
                    : [3, 8];
                case 7:
                  return (l = d.sent()), [3, 10];
                case 8:
                  return [4, this._getTokenFromIFrame(a)];
                case 9:
                  (l = d.sent()), (d.label = 10);
                case 10:
                  return (
                    (u = l),
                    [
                      4,
                      this.cacheManager.set(
                        n({ client_id: this.options.client_id }, u)
                      ),
                    ]
                  );
                case 11:
                  return (
                    d.sent(),
                    this.cookieStorage.save(
                      this.isAuthenticatedCookieName,
                      !0,
                      { daysUntilExpire: this.sessionCheckExpiryDays }
                    ),
                    [2, u.access_token]
                  );
                case 12:
                  return [4, Ii.releaseLock('auth0.lock.getTokenSilently')];
                case 13:
                  return d.sent(), [7];
                case 14:
                  return [3, 16];
                case 15:
                  throw new Ko();
                case 16:
                  return [2];
              }
              var h, p;
            });
          })
        );
      }),
      (e.prototype.getTokenWithPopup = function (e, t) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          o(this, void 0, void 0, function () {
            return i(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (e.audience = e.audience || this.options.audience),
                    (e.scope = ei(this.defaultScope, this.scope, e.scope)),
                    (t = n(n({}, Co), t)),
                    [4, this.loginWithPopup(e, t)]
                  );
                case 1:
                  return (
                    r.sent(),
                    [
                      4,
                      this.cacheManager.get(
                        new ti({
                          scope: e.scope,
                          audience: e.audience || 'default',
                          client_id: this.options.client_id,
                        })
                      ),
                    ]
                  );
                case 2:
                  return [2, r.sent().access_token];
              }
            });
          })
        );
      }),
      (e.prototype.isAuthenticated = function () {
        return o(this, void 0, void 0, function () {
          return i(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.getUser()];
              case 1:
                return [2, !!e.sent()];
            }
          });
        });
      }),
      (e.prototype.buildLogoutUrl = function (e) {
        void 0 === e && (e = {}),
          null !== e.client_id
            ? (e.client_id = e.client_id || this.options.client_id)
            : delete e.client_id;
        var t = e.federated,
          n = r(e, ['federated']),
          o = t ? '&federated' : '';
        return this._url('/v2/logout?' + Yo(n)) + o;
      }),
      (e.prototype.logout = function (e) {
        var t = this;
        void 0 === e && (e = {});
        var n = e.localOnly,
          o = r(e, ['localOnly']);
        if (n && o.federated)
          throw new Error(
            'It is invalid to set both the `federated` and `localOnly` options to `true`'
          );
        var i = function () {
          if (
            (t.cookieStorage.remove(t.orgHintCookieName),
            t.cookieStorage.remove(t.isAuthenticatedCookieName),
            !n)
          ) {
            var e = t.buildLogoutUrl(o);
            window.location.assign(e);
          }
        };
        if (this.options.cache)
          return this.cacheManager.clear().then(function () {
            return i();
          });
        this.cacheManager.clearSync(), i();
      }),
      (e.prototype._getTokenFromIFrame = function (e) {
        return o(this, void 0, void 0, function () {
          var t, o, a, c, s, u, l, f, d, h, p, y, v, m, g, b;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return (t = Xo(No())), (o = Xo(No())), (a = No()), [4, zo(a)];
              case 1:
                (c = i.sent()),
                  (s = Jo(c)),
                  (u = this._getParams(
                    e,
                    t,
                    o,
                    s,
                    e.redirect_uri ||
                      this.options.redirect_uri ||
                      window.location.origin
                  )),
                  (l = this.cookieStorage.get(this.orgHintCookieName)) &&
                    !u.organization &&
                    (u.organization = l),
                  (f = this._authorizeUrl(
                    n(n({}, u), {
                      prompt: 'none',
                      response_mode: 'web_message',
                    })
                  )),
                  (d =
                    e.timeoutInSeconds ||
                    this.options.authorizeTimeoutInSeconds),
                  (i.label = 2);
              case 2:
                if ((i.trys.push([2, 5, , 6]), window.crossOriginIsolated))
                  throw new Ao(
                    'login_required',
                    'The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.'
                  );
                return [
                  4,
                  ((w = f),
                  (S = this.domainUrl),
                  (_ = d),
                  void 0 === _ && (_ = 60),
                  new Promise(function (e, t) {
                    var n = window.document.createElement('iframe');
                    n.setAttribute('width', '0'),
                      n.setAttribute('height', '0'),
                      (n.style.display = 'none');
                    var r,
                      o = function () {
                        window.document.body.contains(n) &&
                          (window.document.body.removeChild(n),
                          window.removeEventListener('message', r, !1));
                      },
                      i = setTimeout(function () {
                        t(new Ko()), o();
                      }, 1e3 * _);
                    (r = function (n) {
                      if (
                        n.origin == S &&
                        n.data &&
                        'authorization_response' === n.data.type
                      ) {
                        var a = n.source;
                        a && a.close(),
                          n.data.response.error
                            ? t(Ao.fromPayload(n.data.response))
                            : e(n.data.response),
                          clearTimeout(i),
                          window.removeEventListener('message', r, !1),
                          setTimeout(o, 2e3);
                      }
                    }),
                      window.addEventListener('message', r, !1),
                      window.document.body.appendChild(n),
                      n.setAttribute('src', w);
                  })),
                ];
              case 3:
                if (((h = i.sent()), t !== h.state))
                  throw new Error('Invalid state');
                return (
                  (p = e.scope),
                  (y = e.audience),
                  (v = r(e, [
                    'scope',
                    'audience',
                    'redirect_uri',
                    'ignoreCache',
                    'timeoutInSeconds',
                  ])),
                  [
                    4,
                    Qo(
                      n(n(n({}, this.customOptions), v), {
                        scope: p,
                        audience: y,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: a,
                        code: h.code,
                        grant_type: 'authorization_code',
                        redirect_uri: u.redirect_uri,
                        auth0Client: this.options.auth0Client,
                        useFormData: this.options.useFormData,
                      }),
                      this.worker
                    ),
                  ]
                );
              case 4:
                return (
                  (m = i.sent()),
                  (g = this._verifyIdToken(m.id_token, o)),
                  this._processOrgIdHint(g.claims.org_id),
                  [
                    2,
                    n(n({}, m), {
                      decodedToken: g,
                      scope: u.scope,
                      audience: u.audience || 'default',
                    }),
                  ]
                );
              case 5:
                throw (
                  ('login_required' === (b = i.sent()).error &&
                    this.logout({ localOnly: !0 }),
                  b)
                );
              case 6:
                return [2];
            }
            var w, S, _;
          });
        });
      }),
      (e.prototype._getTokenUsingRefreshToken = function (e) {
        return o(this, void 0, void 0, function () {
          var t, o, a, c, s, u, l, f, d;
          return i(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e.scope = ei(
                    this.defaultScope,
                    this.options.scope,
                    e.scope
                  )),
                  [
                    4,
                    this.cacheManager.get(
                      new ti({
                        scope: e.scope,
                        audience: e.audience || 'default',
                        client_id: this.options.client_id,
                      })
                    ),
                  ]
                );
              case 1:
                return ((t = i.sent()) && t.refresh_token) || this.worker
                  ? [3, 3]
                  : [4, this._getTokenFromIFrame(e)];
              case 2:
                return [2, i.sent()];
              case 3:
                (o =
                  e.redirect_uri ||
                  this.options.redirect_uri ||
                  window.location.origin),
                  (c = e.scope),
                  (s = e.audience),
                  (u = r(e, [
                    'scope',
                    'audience',
                    'ignoreCache',
                    'timeoutInSeconds',
                  ])),
                  (l =
                    'number' == typeof e.timeoutInSeconds
                      ? 1e3 * e.timeoutInSeconds
                      : null),
                  (i.label = 4);
              case 4:
                return (
                  i.trys.push([4, 6, , 9]),
                  [
                    4,
                    Qo(
                      n(
                        n(
                          n(n(n({}, this.customOptions), u), {
                            audience: s,
                            scope: c,
                            baseUrl: this.domainUrl,
                            client_id: this.options.client_id,
                            grant_type: 'refresh_token',
                            refresh_token: t && t.refresh_token,
                            redirect_uri: o,
                          }),
                          l && { timeout: l }
                        ),
                        {
                          auth0Client: this.options.auth0Client,
                          useFormData: this.options.useFormData,
                        }
                      ),
                      this.worker
                    ),
                  ]
                );
              case 5:
                return (a = i.sent()), [3, 9];
              case 6:
                return 'The web worker is missing the refresh token' ===
                  (f = i.sent()).message ||
                  (f.message && f.message.indexOf('invalid refresh token') > -1)
                  ? [4, this._getTokenFromIFrame(e)]
                  : [3, 8];
              case 7:
                return [2, i.sent()];
              case 8:
                throw f;
              case 9:
                return (
                  (d = this._verifyIdToken(a.id_token)),
                  [
                    2,
                    n(n({}, a), {
                      decodedToken: d,
                      scope: e.scope,
                      audience: e.audience || 'default',
                    }),
                  ]
                );
            }
          });
        });
      }),
      e
    );
  })(),
  Ci = function () {};

/**
 * The initial auth state.
 */
var initialAuthState = {
  isAuthenticated: false,
  isLoading: true,
};

/**
 * @ignore
 */
var stub = function () {
  throw new Error('You forgot to wrap your component in <Auth0Provider>.');
};
/**
 * @ignore
 */
var initialContext = __assign(__assign({}, initialAuthState), {
  buildAuthorizeUrl: stub,
  buildLogoutUrl: stub,
  getAccessTokenSilently: stub,
  getAccessTokenWithPopup: stub,
  getIdTokenClaims: stub,
  loginWithRedirect: stub,
  loginWithPopup: stub,
  logout: stub,
  handleRedirectCallback: stub,
});
/**
 * The Auth0 Context
 */
var Auth0Context = createContext(initialContext);

/**
 * An OAuth2 error will come from the authorization server and will have at least an `error` property which will
 * be the error code. And possibly an `error_description` property
 *
 * See: https://openid.net/specs/openid-connect-core-1_0.html#rfc.section.3.1.2.6
 */
var OAuthError = /** @class */ (function (_super) {
  __extends(OAuthError, _super);
  function OAuthError(error, error_description) {
    var _this = _super.call(this, error_description || error) || this;
    _this.error = error;
    _this.error_description = error_description;
    return _this;
  }
  return OAuthError;
})(Error);

var CODE_RE = /[?&]code=[^&]+/;
var STATE_RE = /[?&]state=[^&]+/;
var ERROR_RE = /[?&]error=[^&]+/;
var hasAuthParams = function (searchParams) {
  if (searchParams === void 0) {
    searchParams = window.location.search;
  }
  return (
    (CODE_RE.test(searchParams) || ERROR_RE.test(searchParams)) &&
    STATE_RE.test(searchParams)
  );
};
var normalizeErrorFn = function (fallbackMessage) {
  return function (error) {
    if ('error' in error) {
      return new OAuthError(error.error, error.error_description);
    }
    if (error instanceof Error) {
      return error;
    }
    return new Error(fallbackMessage);
  };
};
var loginError = normalizeErrorFn('Login failed');
var tokenError = normalizeErrorFn('Get access token failed');

/**
 * Handles how that state changes in the `useAuth0` hook.
 */
var reducer = function (state, action) {
  var _a, _b;
  switch (action.type) {
    case 'LOGIN_POPUP_STARTED':
      return __assign(__assign({}, state), { isLoading: true });
    case 'LOGIN_POPUP_COMPLETE':
    case 'INITIALISED':
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
        isLoading: false,
        error: undefined,
      });
    case 'HANDLE_REDIRECT_COMPLETE':
    case 'GET_ACCESS_TOKEN_COMPLETE':
      if (
        ((_a = state.user) === null || _a === void 0
          ? void 0
          : _a.updated_at) ===
        ((_b = action.user) === null || _b === void 0 ? void 0 : _b.updated_at)
      ) {
        return state;
      }
      return __assign(__assign({}, state), {
        isAuthenticated: !!action.user,
        user: action.user,
      });
    case 'LOGOUT':
      return __assign(__assign({}, state), {
        isAuthenticated: false,
        user: undefined,
      });
    case 'ERROR':
      return __assign(__assign({}, state), {
        isLoading: false,
        error: action.error,
      });
  }
};

/**
 * @ignore
 */
var toAuth0ClientOptions = function (opts) {
  var clientId = opts.clientId,
    redirectUri = opts.redirectUri,
    maxAge = opts.maxAge,
    validOpts = __rest(opts, ['clientId', 'redirectUri', 'maxAge']);
  return __assign(__assign({}, validOpts), {
    client_id: clientId,
    redirect_uri: redirectUri,
    max_age: maxAge,
    auth0Client: {
      name: 'auth0-react',
      version: '1.8.0',
    },
  });
};
/**
 * @ignore
 */
var toAuth0LoginRedirectOptions = function (opts) {
  if (!opts) {
    return;
  }
  var redirectUri = opts.redirectUri,
    validOpts = __rest(opts, ['redirectUri']);
  return __assign(__assign({}, validOpts), { redirect_uri: redirectUri });
};
/**
 * @ignore
 */
var defaultOnRedirectCallback = function (appState) {
  window.history.replaceState(
    {},
    document.title,
    (appState === null || appState === void 0 ? void 0 : appState.returnTo) ||
      window.location.pathname
  );
};
/**
 * ```jsx
 * <Auth0Provider
 *   domain={domain}
 *   clientId={clientId}
 *   redirectUri={window.location.origin}>
 *   <MyApp />
 * </Auth0Provider>
 * ```
 *
 * Provides the Auth0Context to its child components.
 */
var Auth0Provider = function (opts) {
  var children = opts.children,
    skipRedirectCallback = opts.skipRedirectCallback,
    _a = opts.onRedirectCallback,
    onRedirectCallback = _a === void 0 ? defaultOnRedirectCallback : _a,
    clientOpts = __rest(opts, [
      'children',
      'skipRedirectCallback',
      'onRedirectCallback',
    ]);
  var client = useState(function () {
    return new xi(toAuth0ClientOptions(clientOpts));
  })[0];
  var _b = useReducer(reducer, initialAuthState),
    state = _b[0],
    dispatch = _b[1];
  useEffect(
    function () {
      (function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var appState, user, error_1;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 6, , 7]);
                if (!(hasAuthParams() && !skipRedirectCallback))
                  return [3 /*break*/, 2];
                return [4 /*yield*/, client.handleRedirectCallback()];
              case 1:
                appState = _a.sent().appState;
                onRedirectCallback(appState);
                return [3 /*break*/, 4];
              case 2:
                return [4 /*yield*/, client.checkSession()];
              case 3:
                _a.sent();
                _a.label = 4;
              case 4:
                return [4 /*yield*/, client.getUser()];
              case 5:
                user = _a.sent();
                dispatch({ type: 'INITIALISED', user: user });
                return [3 /*break*/, 7];
              case 6:
                error_1 = _a.sent();
                dispatch({ type: 'ERROR', error: loginError(error_1) });
                return [3 /*break*/, 7];
              case 7:
                return [2 /*return*/];
            }
          });
        });
      })();
    },
    [client, onRedirectCallback, skipRedirectCallback]
  );
  var buildAuthorizeUrl = useCallback(
    function (opts) {
      return client.buildAuthorizeUrl(toAuth0LoginRedirectOptions(opts));
    },
    [client]
  );
  var buildLogoutUrl = useCallback(
    function (opts) {
      return client.buildLogoutUrl(opts);
    },
    [client]
  );
  var loginWithRedirect = useCallback(
    function (opts) {
      return client.loginWithRedirect(toAuth0LoginRedirectOptions(opts));
    },
    [client]
  );
  var loginWithPopup = useCallback(
    function (options, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var error_2, user;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              dispatch({ type: 'LOGIN_POPUP_STARTED' });
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4 /*yield*/, client.loginWithPopup(options, config)];
            case 2:
              _a.sent();
              return [3 /*break*/, 4];
            case 3:
              error_2 = _a.sent();
              dispatch({ type: 'ERROR', error: loginError(error_2) });
              return [2 /*return*/];
            case 4:
              return [4 /*yield*/, client.getUser()];
            case 5:
              user = _a.sent();
              dispatch({ type: 'LOGIN_POPUP_COMPLETE', user: user });
              return [2 /*return*/];
          }
        });
      });
    },
    [client]
  );
  var logout = useCallback(
    function (opts) {
      if (opts === void 0) {
        opts = {};
      }
      var maybePromise = client.logout(opts);
      if (opts.localOnly) {
        if (maybePromise && typeof maybePromise.then === 'function') {
          return maybePromise.then(function () {
            return dispatch({ type: 'LOGOUT' });
          });
        }
        dispatch({ type: 'LOGOUT' });
      }
      return maybePromise;
    },
    [client]
  );
  var getAccessTokenSilently = useCallback(
    function (opts) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_3, _a, _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, 3, 5]);
              return [4 /*yield*/, client.getTokenSilently(opts)];
            case 1:
              token = _c.sent();
              return [3 /*break*/, 5];
            case 2:
              error_3 = _c.sent();
              throw tokenError(error_3);
            case 3:
              _a = dispatch;
              _b = {
                type: 'GET_ACCESS_TOKEN_COMPLETE',
              };
              return [4 /*yield*/, client.getUser()];
            case 4:
              _a.apply(void 0, [((_b.user = _c.sent()), _b)]);
              return [7 /*endfinally*/];
            case 5:
              return [2 /*return*/, token];
          }
        });
      });
    },
    [client]
  );
  var getAccessTokenWithPopup = useCallback(
    function (opts, config) {
      return __awaiter(void 0, void 0, void 0, function () {
        var token, error_4, _a, _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, 3, 5]);
              return [4 /*yield*/, client.getTokenWithPopup(opts, config)];
            case 1:
              token = _c.sent();
              return [3 /*break*/, 5];
            case 2:
              error_4 = _c.sent();
              throw tokenError(error_4);
            case 3:
              _a = dispatch;
              _b = {
                type: 'GET_ACCESS_TOKEN_COMPLETE',
              };
              return [4 /*yield*/, client.getUser()];
            case 4:
              _a.apply(void 0, [((_b.user = _c.sent()), _b)]);
              return [7 /*endfinally*/];
            case 5:
              return [2 /*return*/, token];
          }
        });
      });
    },
    [client]
  );
  var getIdTokenClaims = useCallback(
    function (opts) {
      return client.getIdTokenClaims(opts);
    },
    [client]
  );
  var handleRedirectCallback = useCallback(
    function (url) {
      return __awaiter(void 0, void 0, void 0, function () {
        var error_5, _a, _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, 3, 5]);
              return [4 /*yield*/, client.handleRedirectCallback(url)];
            case 1:
              return [2 /*return*/, _c.sent()];
            case 2:
              error_5 = _c.sent();
              throw tokenError(error_5);
            case 3:
              _a = dispatch;
              _b = {
                type: 'HANDLE_REDIRECT_COMPLETE',
              };
              return [4 /*yield*/, client.getUser()];
            case 4:
              _a.apply(void 0, [((_b.user = _c.sent()), _b)]);
              return [7 /*endfinally*/];
            case 5:
              return [2 /*return*/];
          }
        });
      });
    },
    [client]
  );
  return React.createElement(
    Auth0Context.Provider,
    {
      value: __assign(__assign({}, state), {
        buildAuthorizeUrl: buildAuthorizeUrl,
        buildLogoutUrl: buildLogoutUrl,
        getAccessTokenSilently: getAccessTokenSilently,
        getAccessTokenWithPopup: getAccessTokenWithPopup,
        getIdTokenClaims: getIdTokenClaims,
        loginWithRedirect: loginWithRedirect,
        loginWithPopup: loginWithPopup,
        logout: logout,
        handleRedirectCallback: handleRedirectCallback,
      }),
    },
    children
  );
};

/**
 * ```js
 * const {
 *   // Auth state:
 *   error,
 *   isAuthenticated,
 *   isLoading,
 *   user,
 *   // Auth methods:
 *   getAccessTokenSilently,
 *   getAccessTokenWithPopup,
 *   getIdTokenClaims,
 *   loginWithRedirect,
 *   loginWithPopup,
 *   logout,
 * } = useAuth0<TUser>();
 * ```
 *
 * Use the `useAuth0` hook in your components to access the auth state and methods.
 *
 * TUser is an optional type param to provide a type to the `user` field.
 */
var useAuth0 = function () {
  return useContext(Auth0Context);
};

/**
 * ```jsx
 * class MyComponent extends Component {
 *   render() {
 *     // Access the auth context from the `auth0` prop
 *     const { user } = this.props.auth0;
 *     return <div>Hello {user.name}!</div>
 *   }
 * }
 * // Wrap your class component in withAuth0
 * export default withAuth0(MyComponent);
 * ```
 *
 * Wrap your class components in this Higher Order Component to give them access to the Auth0Context
 */
var withAuth0 = function (Component) {
  return function (props) {
    return React.createElement(Auth0Context.Consumer, null, function (auth) {
      return React.createElement(Component, __assign({ auth0: auth }, props));
    });
  };
};

/**
 * @ignore
 */
var defaultOnRedirecting = function () {
  return React.createElement(React.Fragment, null);
};
/**
 * @ignore
 */
var defaultReturnTo = function () {
  return '' + window.location.pathname + window.location.search;
};
/**
 * ```js
 * const MyProtectedComponent = withAuthenticationRequired(MyComponent);
 * ```
 *
 * When you wrap your components in this Higher Order Component and an anonymous user visits your component
 * they will be redirected to the login page and returned to the page they we're redirected from after login.
 */
var withAuthenticationRequired = function (Component, options) {
  if (options === void 0) {
    options = {};
  }
  return function WithAuthenticationRequired(props) {
    var _this = this;
    var _a = useAuth0(),
      user = _a.user,
      isAuthenticated = _a.isAuthenticated,
      isLoading = _a.isLoading,
      loginWithRedirect = _a.loginWithRedirect;
    var _b = options.returnTo,
      returnTo = _b === void 0 ? defaultReturnTo : _b,
      _c = options.onRedirecting,
      onRedirecting = _c === void 0 ? defaultOnRedirecting : _c,
      _d = options.loginOptions,
      loginOptions = _d === void 0 ? {} : _d,
      _e = options.claimCheck,
      claimCheck =
        _e === void 0
          ? function checkClaim() {
              return true;
            }
          : _e;
    /**
     * The route is authenticated if the user has valid auth and there are no
     * JWT claim mismatches.
     */
    var routeIsAuthenticated = isAuthenticated && claimCheck(user);
    useEffect(
      function () {
        if (isLoading || routeIsAuthenticated) {
          return;
        }
        var opts = __assign(__assign({}, loginOptions), {
          appState: __assign(__assign({}, loginOptions.appState), {
            returnTo: typeof returnTo === 'function' ? returnTo() : returnTo,
          }),
        });
        (function () {
          return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4 /*yield*/, loginWithRedirect(opts)];
                case 1:
                  _a.sent();
                  return [2 /*return*/];
              }
            });
          });
        })();
      },
      [
        isLoading,
        routeIsAuthenticated,
        loginWithRedirect,
        loginOptions,
        returnTo,
      ]
    );
    console.warn('zbeub');
    return routeIsAuthenticated && !isLoading
      ? React.createElement(Component, __assign({}, props))
      : onRedirecting();
  };
};

/**
 * @ignore
 */
//  const defaultOnRedirecting = (): JSX.Element => <></>;
/**
 * @ignore
 */
var defaultReturnTo$1 = function () {
  return '' + window.location.pathname + window.location.search;
};
var useRequiredAuthentication = function (options) {
  var _a = useAuth0(),
    user = _a.user,
    isAuthenticated = _a.isAuthenticated,
    isLoading = _a.isLoading,
    loginWithRedirect = _a.loginWithRedirect;
  var _b = options.returnTo,
    returnTo = _b === void 0 ? defaultReturnTo$1 : _b,
    // onRedirecting = defaultOnRedirecting,
    _c = options.loginOptions,
    // onRedirecting = defaultOnRedirecting,
    loginOptions = _c === void 0 ? {} : _c,
    _d = options.claimCheck,
    claimCheck =
      _d === void 0
        ? function checkClaim() {
            return true;
          }
        : _d;
  /**
   * The route is authenticated if the user has valid auth and there are no
   * JWT claim mismatches.
   */
  var routeIsAuthenticated = isAuthenticated && claimCheck(user);
  useEffect(
    function () {
      if (isLoading || routeIsAuthenticated) {
        return;
      }
      var opts = __assign(__assign({}, loginOptions), {
        appState: __assign(__assign({}, loginOptions.appState), {
          returnTo: typeof returnTo === 'function' ? returnTo() : returnTo,
        }),
      });
      (function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, loginWithRedirect(opts)];
              case 1:
                _a.sent();
                return [2 /*return*/];
            }
          });
        });
      })();
    },
    [isLoading, routeIsAuthenticated, loginWithRedirect, loginOptions, returnTo]
  );
  return routeIsAuthenticated;
};

export {
  Auth0Context,
  Auth0Provider,
  ri as InMemoryCache,
  ni as LocalStorageCache,
  OAuthError,
  Ci as User,
  useAuth0,
  useRequiredAuthentication,
  withAuth0,
  withAuthenticationRequired,
};
//# sourceMappingURL=auth0-react.esm.js.map
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(h, e) {
    function t(e, t) {
        return t.toUpperCase()
    }
    var f = []
      , c = f.slice
      , m = f.concat
      , s = f.push
      , i = f.indexOf
      , n = {}
      , r = n.toString
      , g = n.hasOwnProperty
      , v = {}
      , o = "1.11.1"
      , C = function(e, t) {
        return new C.fn.init(e,t)
    }
      , a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , l = /^-ms-/
      , u = /-([\da-z])/gi;
    function d(e) {
        var t = e.length
          , n = C.type(e);
        return "function" !== n && !C.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
    C.fn = C.prototype = {
        jquery: o,
        constructor: C,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        },
        pushStack: function(e) {
            e = C.merge(this.constructor(), e);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(e, t) {
            return C.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: f.sort,
        splice: f.splice
    },
    C.extend = C.fn.extend = function() {
        var e, t, n, r, i, o = arguments[0] || {}, a = 1, s = arguments.length, l = !1;
        for ("boolean" == typeof o && (l = o,
        o = arguments[a] || {},
        a++),
        "object" == typeof o || C.isFunction(o) || (o = {}),
        a === s && (o = this,
        a--); a < s; a++)
            if (null != (r = arguments[a]))
                for (n in r)
                    i = o[n],
                    o !== (t = r[n]) && (l && t && (C.isPlainObject(t) || (e = C.isArray(t))) ? (i = e ? (e = !1,
                    i && C.isArray(i) ? i : []) : i && C.isPlainObject(i) ? i : {},
                    o[n] = C.extend(l, i, t)) : void 0 !== t && (o[n] = t));
        return o
    }
    ,
    C.extend({
        expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === C.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === C.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !C.isArray(e) && 0 <= e - parseFloat(e)
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            if (!e || "object" !== C.type(e) || e.nodeType || C.isWindow(e))
                return !1;
            try {
                if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            if (v.ownLast)
                for (var t in e)
                    return g.call(e, t);
            for (t in e)
                ;
            return void 0 === t || g.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            e && C.trim(e) && (h.execScript || function(e) {
                h.eval.call(h, e)
            }
            )(e)
        },
        camelCase: function(e) {
            return e.replace(l, "ms-").replace(u, t)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r = 0
              , i = e.length
              , o = d(e);
            if (n) {
                if (o)
                    for (; r < i && !1 !== t.apply(e[r], n); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.apply(e[r], n))
                            break
            } else if (o)
                for (; r < i && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(a, "")
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (d(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : s.call(t, e)),
            t
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (i)
                    return i.call(t, e, n);
                for (r = t.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; )
                e[i++] = t[r++];
            if (n != n)
                for (; void 0 !== t[r]; )
                    e[i++] = t[r++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) != a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, a = [];
            if (d(e))
                for (; i < o; i++)
                    null != (r = t(e[i], i, n)) && a.push(r);
            else
                for (i in e)
                    null != (r = t(e[i], i, n)) && a.push(r);
            return m.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r;
            if ("string" == typeof t && (r = e[t],
            t = e,
            e = r),
            C.isFunction(e))
                return n = c.call(arguments, 2),
                (r = function() {
                    return e.apply(t || this, n.concat(c.call(arguments)))
                }
                ).guid = e.guid = e.guid || C.guid++,
                r
        },
        now: function() {
            return +new Date
        },
        support: v
    }),
    C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function f(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }
        var e, d, b, o, t, p, h, m, C, u, c, g, w, r, v, y, i, a, x, T = "sizzle" + -new Date, E = n.document, N = 0, S = 0, s = ie(), k = ie(), l = ie(), A = function(e, t) {
            return e === t && (c = !0),
            0
        }, L = "undefined", D = {}.hasOwnProperty, H = [], j = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", q = "[\\x20\\t\\r\\n\\f]", B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", P = B.replace("w", "w#"), R = "\\[" + q + "*(" + B + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + q + "*\\]", W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)", $ = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$","g"), z = new RegExp("^" + q + "*," + q + "*"), X = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"), V = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]","g"), U = new RegExp(W), K = new RegExp("^" + P + "$"), G = {
            ID: new RegExp("^#(" + B + ")"),
            CLASS: new RegExp("^\\.(" + B + ")"),
            TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + R),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)","i"),
            bool: new RegExp("^(?:" + I + ")$","i"),
            needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)","i")
        }, Y = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = /'|\\/g, ne = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)","ig");
        try {
            M.apply(H = O.call(E.childNodes), E.childNodes),
            H[E.childNodes.length].nodeType
        } catch (e) {
            M = {
                apply: H.length ? function(e, t) {
                    _.apply(e, O.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function re(e, t, n, r) {
            var i, o, a, s, l, u, c;
            if ((t ? t.ownerDocument || t : E) !== w && g(t),
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (i = (t = t || w).nodeType) && 9 !== i)
                return [];
            if (v && !r) {
                if (u = Z.exec(e))
                    if (c = u[1]) {
                        if (9 === i) {
                            if (!(s = t.getElementById(c)) || !s.parentNode)
                                return n;
                            if (s.id === c)
                                return n.push(s),
                                n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(c)) && x(t, s) && s.id === c)
                            return n.push(s),
                            n
                    } else {
                        if (u[2])
                            return M.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((c = u[3]) && d.getElementsByClassName && t.getElementsByClassName)
                            return M.apply(n, t.getElementsByClassName(c)),
                            n
                    }
                if (d.qsa && (!y || !y.test(e))) {
                    if (l = s = T,
                    u = t,
                    c = 9 === i && e,
                    1 === i && "object" !== t.nodeName.toLowerCase()) {
                        for (a = p(e),
                        (s = t.getAttribute("id")) ? l = s.replace(te, "\\$&") : t.setAttribute("id", l),
                        l = "[id='" + l + "'] ",
                        o = a.length; o--; )
                            a[o] = l + de(a[o]);
                        u = ee.test(e) && ce(t.parentNode) || t,
                        c = a.join(",")
                    }
                    if (c)
                        try {
                            return M.apply(n, u.querySelectorAll(c)),
                            n
                        } catch (e) {} finally {
                            s || t.removeAttribute("id")
                        }
                }
            }
            return m(e.replace($, "$1"), t, n, r)
        }
        function ie() {
            var n = [];
            function r(e, t) {
                return n.push(e + " ") > b.cacheLength && delete r[n.shift()],
                r[e + " "] = t
            }
            return r
        }
        function oe(e) {
            return e[T] = !0,
            e
        }
        function ae(e) {
            var t = w.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function se(e, t) {
            for (var n = e.split("|"), r = e.length; r--; )
                b.attrHandle[n[r]] = t
        }
        function le(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function ue(a) {
            return oe(function(o) {
                return o = +o,
                oe(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ce(e) {
            return e && typeof e.getElementsByTagName !== L && e
        }
        for (e in d = re.support = {},
        t = re.isXML = function(e) {
            e = e && (e.ownerDocument || e).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        g = re.setDocument = function(e) {
            var l = e ? e.ownerDocument || e : E
              , e = l.defaultView;
            return l !== w && 9 === l.nodeType && l.documentElement ? (r = (w = l).documentElement,
            v = !t(l),
            e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", function() {
                g()
            }, !1) : e.attachEvent && e.attachEvent("onunload", function() {
                g()
            })),
            d.attributes = ae(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ae(function(e) {
                return e.appendChild(l.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = Q.test(l.getElementsByClassName) && ae(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            d.getById = ae(function(e) {
                return r.appendChild(e).id = T,
                !l.getElementsByName || !l.getElementsByName(T).length
            }),
            d.getById ? (b.find.ID = function(e, t) {
                if (typeof t.getElementById !== L && v) {
                    e = t.getElementById(e);
                    return e && e.parentNode ? [e] : []
                }
            }
            ,
            b.filter.ID = function(e) {
                var t = e.replace(ne, f);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete b.find.ID,
            b.filter.ID = function(e) {
                var t = e.replace(ne, f);
                return function(e) {
                    e = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== L)
                    return t.getElementsByTagName(e)
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e)
                    return o;
                for (; n = o[i++]; )
                    1 === n.nodeType && r.push(n);
                return r
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== L && v)
                    return t.getElementsByClassName(e)
            }
            ,
            i = [],
            y = [],
            (d.qsa = Q.test(l.querySelectorAll)) && (ae(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowclip^='']").length && y.push("[*^$]=" + q + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || y.push("\\[" + q + "*(?:value|" + I + ")"),
                e.querySelectorAll(":checked").length || y.push(":checked")
            }),
            ae(function(e) {
                var t = l.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && y.push("name" + q + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                y.push(",.*:")
            })),
            (d.matchesSelector = Q.test(a = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && ae(function(e) {
                d.disconnectedMatch = a.call(e, "div"),
                a.call(e, "[s!='']:x"),
                i.push("!=", W)
            }),
            y = y.length && new RegExp(y.join("|")),
            i = i.length && new RegExp(i.join("|")),
            e = Q.test(r.compareDocumentPosition),
            x = e || Q.test(r.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            A = e ? function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === E && x(E, e) ? -1 : t === l || t.ownerDocument === E && x(E, t) ? 1 : u ? F.call(u, e) - F.call(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === l ? -1 : t === l ? 1 : i ? -1 : o ? 1 : u ? F.call(u, e) - F.call(u, t) : 0;
                if (i === o)
                    return le(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? le(a[r], s[r]) : a[r] === E ? -1 : s[r] === E ? 1 : 0
            }
            ,
            l) : w
        }
        ,
        re.matches = function(e, t) {
            return re(e, null, null, t)
        }
        ,
        re.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== w && g(e),
            t = t.replace(V, "='$1']"),
            d.matchesSelector && v && (!i || !i.test(t)) && (!y || !y.test(t)))
                try {
                    var n = a.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return 0 < re(t, w, null, [e]).length
        }
        ,
        re.contains = function(e, t) {
            return (e.ownerDocument || e) !== w && g(e),
            x(e, t)
        }
        ,
        re.attr = function(e, t) {
            (e.ownerDocument || e) !== w && g(e);
            var n = b.attrHandle[t.toLowerCase()]
              , n = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !v) : void 0;
            return void 0 !== n ? n : d.attributes || !v ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        re.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        re.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (c = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(A),
            c) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = re.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += o(t);
            return n
        }
        ,
        (b = re.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ne, f),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ne, f),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ne, f).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = s[e + " "];
                    return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && s(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(e) {
                        e = re.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "",
                        "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(p, e, t, h, m) {
                    var g = "nth" !== p.slice(0, 3)
                      , v = "last" !== p.slice(-4)
                      , y = "of-type" === e;
                    return 1 === h && 0 === m ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, l, u = g != v ? "nextSibling" : "previousSibling", c = e.parentNode, f = y && e.nodeName.toLowerCase(), d = !n && !y;
                        if (c) {
                            if (g) {
                                for (; u; ) {
                                    for (o = e; o = o[u]; )
                                        if (y ? o.nodeName.toLowerCase() === f : 1 === o.nodeType)
                                            return !1;
                                    l = u = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? c.firstChild : c.lastChild],
                            v && d) {
                                for (s = (r = (i = c[T] || (c[T] = {}))[p] || [])[0] === N && r[1],
                                a = r[0] === N && r[2],
                                o = s && c.childNodes[s]; o = ++s && o && o[u] || (a = s = 0) || l.pop(); )
                                    if (1 === o.nodeType && ++a && o === e) {
                                        i[p] = [N, s, a];
                                        break
                                    }
                            } else if (d && (r = (e[T] || (e[T] = {}))[p]) && r[0] === N)
                                a = r[1];
                            else
                                for (; (o = ++s && o && o[u] || (a = s = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) || !++a || (d && ((o[T] || (o[T] = {}))[p] = [N, a]),
                                o !== e)); )
                                    ;
                            return (a -= m) === h || a % h == 0 && 0 <= a / h
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                    return a[T] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; )
                            e[n = F.call(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: oe(function(e) {
                    var r = []
                      , i = []
                      , s = h(e.replace($, "$1"));
                    return s[T] ? oe(function(e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--; )
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        !i.pop()
                    }
                }),
                has: oe(function(t) {
                    return function(e) {
                        return 0 < re(t, e).length
                    }
                }),
                contains: oe(function(t) {
                    return function(e) {
                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                    }
                }),
                lang: oe(function(n) {
                    return K.test(n || "") || re.error("unsupported lang: " + n),
                    n = n.replace(ne, f).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = v ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === r
                },
                focus: function(e) {
                    return e === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Y.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: ue(function() {
                    return [0]
                }),
                last: ue(function(e, t) {
                    return [t - 1]
                }),
                eq: ue(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ue(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ue(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ue(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ue(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);
        function fe() {}
        function de(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function pe(a, e, t) {
            var s = e.dir
              , l = t && "parentNode" === s
              , u = S++;
            return e.first ? function(e, t, n) {
                for (; e = e[s]; )
                    if (1 === e.nodeType || l)
                        return a(e, t, n)
            }
            : function(e, t, n) {
                var r, i, o = [N, u];
                if (n) {
                    for (; e = e[s]; )
                        if ((1 === e.nodeType || l) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[s]; )
                        if (1 === e.nodeType || l) {
                            if ((r = (i = e[T] || (e[T] = {}))[s]) && r[0] === N && r[1] === u)
                                return o[2] = r[2];
                            if ((i[s] = o)[2] = a(e, t, n))
                                return !0
                        }
            }
        }
        function he(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function me(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                u && t.push(s)));
            return a
        }
        function ge(p, h, m, g, v, e) {
            return g && !g[T] && (g = ge(g)),
            v && !v[T] && (v = ge(v, e)),
            oe(function(e, t, n, r) {
                var i, o, a, s = [], l = [], u = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        re(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !p || !e && h ? c : me(c, s, p, n, r), d = m ? v || (e ? p : u || g) ? [] : t : f;
                if (m && m(f, d, n, r),
                g)
                    for (i = me(d, l),
                    g(i, [], n, r),
                    o = i.length; o--; )
                        (a = i[o]) && (d[l[o]] = !(f[l[o]] = a));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (i = [],
                            o = d.length; o--; )
                                (a = d[o]) && i.push(f[o] = a);
                            v(null, d = [], i, r)
                        }
                        for (o = d.length; o--; )
                            (a = d[o]) && -1 < (i = v ? F.call(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    d = me(d === t ? d.splice(u, d.length) : d),
                    v ? v(null, t, d, r) : M.apply(t, d)
            })
        }
        function ve(g, v) {
            function e(e, t, n, r, i) {
                var o, a, s, l = 0, u = "0", c = e && [], f = [], d = C, p = e || x && b.find.TAG("*", i), h = N += null == d ? 1 : Math.random() || .1, m = p.length;
                for (i && (C = t !== w && t); u !== m && null != (o = p[u]); u++) {
                    if (x && o) {
                        for (a = 0; s = g[a++]; )
                            if (s(o, t, n)) {
                                r.push(o);
                                break
                            }
                        i && (N = h)
                    }
                    y && ((o = !s && o) && l--,
                    e && c.push(o))
                }
                if (l += u,
                y && u !== l) {
                    for (a = 0; s = v[a++]; )
                        s(c, f, t, n);
                    if (e) {
                        if (0 < l)
                            for (; u--; )
                                c[u] || f[u] || (f[u] = j.call(r));
                        f = me(f)
                    }
                    M.apply(r, f),
                    i && !e && 0 < f.length && 1 < l + v.length && re.uniqueSort(r)
                }
                return i && (N = h,
                C = d),
                c
            }
            var y = 0 < v.length
              , x = 0 < g.length;
            return y ? oe(e) : e
        }
        return fe.prototype = b.filters = b.pseudos,
        b.setFilters = new fe,
        p = re.tokenize = function(e, t) {
            var n, r, i, o, a, s, l, u = k[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (a = e,
            s = [],
            l = b.preFilter; a; ) {
                for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = X.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || l[o] && !(r = l[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? re.error(e) : k(e, s).slice(0)
        }
        ,
        h = re.compile = function(e, t) {
            var n, r = [], i = [], o = l[e + " "];
            if (!o) {
                for (n = (t = t || p(e)).length; n--; )
                    ((o = function e(t) {
                        for (var r, n, i, o = t.length, a = b.relative[t[0].type], s = a || b.relative[" "], l = a ? 1 : 0, u = pe(function(e) {
                            return e === r
                        }, s, !0), c = pe(function(e) {
                            return -1 < F.call(r, e)
                        }, s, !0), f = [function(e, t, n) {
                            return !a && (n || t !== C) || ((r = t).nodeType ? u : c)(e, t, n)
                        }
                        ]; l < o; l++)
                            if (n = b.relative[t[l].type])
                                f = [pe(he(f), n)];
                            else {
                                if ((n = b.filter[t[l].type].apply(null, t[l].matches))[T]) {
                                    for (i = ++l; i < o && !b.relative[t[i].type]; i++)
                                        ;
                                    return ge(1 < l && he(f), 1 < l && de(t.slice(0, l - 1).concat({
                                        value: " " === t[l - 2].type ? "*" : ""
                                    })).replace($, "$1"), n, l < i && e(t.slice(l, i)), i < o && e(t = t.slice(i)), i < o && de(t))
                                }
                                f.push(n)
                            }
                        return he(f)
                    }(t[n]))[T] ? r : i).push(o);
                (o = l(e, ve(i, r))).selector = e
            }
            return o
        }
        ,
        m = re.select = function(e, t, n, r) {
            var i, o, a, s, l, u = "function" == typeof e && e, c = !r && p(e = u.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && d.getById && 9 === t.nodeType && v && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(ne, f), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = G.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !b.relative[s = a.type]); )
                    if ((l = b.find[s]) && (r = l(a.matches[0].replace(ne, f), ee.test(o[0].type) && ce(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && de(o)))
                            return M.apply(n, r),
                            n;
                        break
                    }
            }
            return (u || h(e, c))(r, t, !v, n, ee.test(e) && ce(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = T.split("").sort(A).join("") === T,
        d.detectDuplicates = !!c,
        g(),
        d.sortDetached = ae(function(e) {
            return 1 & e.compareDocumentPosition(w.createElement("div"))
        }),
        ae(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || se("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ae(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || se("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ae(function(e) {
            return null == e.getAttribute("disabled")
        }) || se(I, function(e, t, n) {
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }),
        re
    }(h);
    C.find = p,
    C.expr = p.selectors,
    C.expr[":"] = C.expr.pseudos,
    C.unique = p.uniqueSort,
    C.text = p.getText,
    C.isXMLDoc = p.isXML,
    C.contains = p.contains;
    var y = C.expr.match.needsContext
      , x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , b = /^.[^:#\[\.,]*$/;
    function w(e, n, r) {
        if (C.isFunction(n))
            return C.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r
            });
        if (n.nodeType)
            return C.grep(e, function(e) {
                return e === n !== r
            });
        if ("string" == typeof n) {
            if (b.test(n))
                return C.filter(n, e, r);
            n = C.filter(n, e)
        }
        return C.grep(e, function(e) {
            return 0 <= C.inArray(e, n) !== r
        })
    }
    C.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    C.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (C.contains(r[t], this))
                            return !0
                }));
            for (t = 0; t < i; t++)
                C.find(e, r[t], n);
            return (n = this.pushStack(1 < i ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(w(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(w(this, e || [], !0))
        },
        is: function(e) {
            return !!w(this, "string" == typeof e && y.test(e) ? C(e) : e || [], !1).length
        }
    });
    var T = h.document
      , E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (C.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" != typeof e)
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : C.isFunction(e) ? void 0 !== N.ready ? N.ready(e) : e(C) : (void 0 !== e.selector && (this.selector = e.selector,
            this.context = e.context),
            C.makeArray(e, this));
        if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : E.exec(e)) || !n[1] && t)
            return (!t || t.jquery ? t || N : this.constructor(t)).find(e);
        if (n[1]) {
            if (t = t instanceof C ? t[0] : t,
            C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, !0)),
            x.test(n[1]) && C.isPlainObject(t))
                for (n in t)
                    C.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        if ((r = T.getElementById(n[2])) && r.parentNode) {
            if (r.id !== n[2])
                return N.find(e);
            this.length = 1,
            this[0] = r
        }
        return this.context = T,
        this.selector = e,
        this
    }
    ).prototype = C.fn;
    var N = C(T)
      , S = /^(?:parents|prev(?:Until|All))/
      , k = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function A(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    C.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !C(i).is(n)); )
                1 === i.nodeType && r.push(i),
                i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    C.fn.extend({
        has: function(e) {
            var t, n = C(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (C.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = y.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(1 < o.length ? C.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? C.inArray(this[0], C(e)) : C.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.unique(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    C.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return C.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return C.dir(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return C.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return C.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return C.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return C.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return C.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return C.sibling(e.firstChild)
        },
        contents: function(e) {
            return C.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : C.merge([], e.childNodes)
        }
    }, function(r, i) {
        C.fn[r] = function(e, t) {
            var n = C.map(this, i, e);
            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t, n)),
            1 < this.length && (k[r] || (n = C.unique(n)),
            S.test(r) && (n = n.reverse())),
            this.pushStack(n)
        }
    });
    var L, D = /\S+/g, H = {};
    function j() {
        T.addEventListener ? (T.removeEventListener("DOMContentLoaded", _, !1),
        h.removeEventListener("load", _, !1)) : (T.detachEvent("onreadystatechange", _),
        h.detachEvent("onload", _))
    }
    function _() {
        !T.addEventListener && "load" !== event.type && "complete" !== T.readyState || (j(),
        C.ready())
    }
    C.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? H[i] || (n = H[e = i] = {},
        C.each(e.match(D) || [], function(e, t) {
            n[t] = !0
        }),
        n) : C.extend({}, i);
        var r, t, o, a, s, l, u = [], c = !i.once && [], f = function(e) {
            for (t = i.memory && e,
            o = !0,
            s = l || 0,
            l = 0,
            a = u.length,
            r = !0; u && s < a; s++)
                if (!1 === u[s].apply(e[0], e[1]) && i.stopOnFalse) {
                    t = !1;
                    break
                }
            r = !1,
            u && (c ? c.length && f(c.shift()) : t ? u = [] : d.disable())
        }, d = {
            add: function() {
                var e;
                return u && (e = u.length,
                function r(e) {
                    C.each(e, function(e, t) {
                        var n = C.type(t);
                        "function" === n ? i.unique && d.has(t) || u.push(t) : t && t.length && "string" !== n && r(t)
                    })
                }(arguments),
                r ? a = u.length : t && (l = e,
                f(t))),
                this
            },
            remove: function() {
                return u && C.each(arguments, function(e, t) {
                    for (var n; -1 < (n = C.inArray(t, u, n)); )
                        u.splice(n, 1),
                        r && (n <= a && a--,
                        n <= s && s--)
                }),
                this
            },
            has: function(e) {
                return e ? -1 < C.inArray(e, u) : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                a = 0,
                this
            },
            disable: function() {
                return u = c = t = void 0,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return c = void 0,
                t || d.disable(),
                this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, t) {
                return !u || o && !c || (t = [e, (t = t || []).slice ? t.slice() : t],
                r ? c.push(t) : f(t)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return d
    }
    ,
    C.extend({
        Deferred: function(e) {
            var o = [["resolve", "done", C.Callbacks("once memory"), "resolved"], ["reject", "fail", C.Callbacks("once memory"), "rejected"], ["notify", "progress", C.Callbacks("memory")]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var i = arguments;
                    return C.Deferred(function(r) {
                        C.each(o, function(e, t) {
                            var n = C.isFunction(i[e]) && i[e];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && C.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[t[0] + "With"](this === a ? r.promise() : this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? C.extend(e, a) : a
                }
            }
              , s = {};
            return a.pipe = a.then,
            C.each(o, function(e, t) {
                var n = t[2]
                  , r = t[3];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[1 ^ e][2].disable, o[2][2].lock),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? a : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            function t(t, n, r) {
                return function(e) {
                    n[t] = this,
                    r[t] = 1 < arguments.length ? c.call(arguments) : e,
                    r === i ? u.notifyWith(n, r) : --l || u.resolveWith(n, r)
                }
            }
            var i, n, r, o = 0, a = c.call(arguments), s = a.length, l = 1 !== s || e && C.isFunction(e.promise) ? s : 0, u = 1 === l ? e : C.Deferred();
            if (1 < s)
                for (i = new Array(s),
                n = new Array(s),
                r = new Array(s); o < s; o++)
                    a[o] && C.isFunction(a[o].promise) ? a[o].promise().done(t(o, r, a)).fail(u.reject).progress(t(o, n, i)) : --l;
            return l || u.resolveWith(r, a),
            u.promise()
        }
    }),
    C.fn.ready = function(e) {
        return C.ready.promise().done(e),
        this
    }
    ,
    C.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? C.readyWait++ : C.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? !--C.readyWait : !C.isReady) {
                if (!T.body)
                    return setTimeout(C.ready);
                (C.isReady = !0) !== e && 0 < --C.readyWait || (L.resolveWith(T, [C]),
                C.fn.triggerHandler && (C(T).triggerHandler("ready"),
                C(T).off("ready")))
            }
        }
    }),
    C.ready.promise = function(e) {
        if (!L)
            if (L = C.Deferred(),
            "complete" === T.readyState)
                setTimeout(C.ready);
            else if (T.addEventListener)
                T.addEventListener("DOMContentLoaded", _, !1),
                h.addEventListener("load", _, !1);
            else {
                T.attachEvent("onreadystatechange", _),
                h.attachEvent("onload", _);
                var n = !1;
                try {
                    n = null == h.frameElement && T.documentElement
                } catch (e) {}
                n && n.doScroll && !function t() {
                    if (!C.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        j(),
                        C.ready()
                    }
                }()
            }
        return L.promise(e)
    }
    ;
    var M, O = "undefined";
    for (M in C(v))
        break;
    v.ownLast = "0" !== M,
    v.inlineBlockNeedsLayout = !1,
    C(function() {
        var e, t, n = T.getElementsByTagName("body")[0];
        n && n.style && (e = T.createElement("div"),
        (t = T.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(t).appendChild(e),
        typeof e.style.zoom !== O && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        v.inlineBlockNeedsLayout = e = 3 === e.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(t))
    }),
    function() {
        var e = T.createElement("div");
        if (null == v.deleteExpando) {
            v.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                v.deleteExpando = !1
            }
        }
        e = null
    }(),
    C.acceptData = function(e) {
        var t = C.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }
    ;
    var F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , I = /([A-Z])/g;
    function q(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(I, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : F.test(n) ? C.parseJSON(n) : n)
                } catch (e) {}
                C.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function B(e) {
        for (var t in e)
            if (("data" !== t || !C.isEmptyObject(e[t])) && "toJSON" !== t)
                return;
        return 1
    }
    function P(e, t, n, r) {
        if (C.acceptData(e)) {
            var i, o = C.expando, a = e.nodeType, s = a ? C.cache : e, l = a ? e[o] : e[o] && o;
            if (l && s[l] && (r || s[l].data) || void 0 !== n || "string" != typeof t)
                return s[l = l || (a ? e[o] = f.pop() || C.guid++ : o)] || (s[l] = a ? {} : {
                    toJSON: C.noop
                }),
                "object" != typeof t && "function" != typeof t || (r ? s[l] = C.extend(s[l], t) : s[l].data = C.extend(s[l].data, t)),
                l = s[l],
                r || (l.data || (l.data = {}),
                l = l.data),
                void 0 !== n && (l[C.camelCase(t)] = n),
                "string" == typeof t ? null == (i = l[t]) && (i = l[C.camelCase(t)]) : i = l,
                i
        }
    }
    function R(e, t, n) {
        if (C.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? C.cache : e, s = o ? e[C.expando] : C.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    i = (t = C.isArray(t) ? t.concat(C.map(t, C.camelCase)) : t in r || (t = C.camelCase(t))in r ? [t] : t.split(" ")).length;
                    for (; i--; )
                        delete r[t[i]];
                    if (n ? !B(r) : !C.isEmptyObject(r))
                        return
                }
                (n || (delete a[s].data,
                B(a[s]))) && (o ? C.cleanData([e], !0) : v.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    C.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !B(e)
        },
        data: function(e, t, n) {
            return P(e, t, n)
        },
        removeData: function(e, t) {
            return R(e, t)
        },
        _data: function(e, t, n) {
            return P(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return R(e, t, !0)
        }
    }),
    C.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 !== e)
                return "object" == typeof e ? this.each(function() {
                    C.data(this, e)
                }) : 1 < arguments.length ? this.each(function() {
                    C.data(this, e, t)
                }) : o ? q(o, e, C.data(o, e)) : void 0;
            if (this.length && (i = C.data(o),
            1 === o.nodeType && !C._data(o, "parsedAttrs"))) {
                for (n = a.length; n--; )
                    a[n] && 0 === (r = a[n].name).indexOf("data-") && q(o, r = C.camelCase(r.slice(5)), i[r]);
                C._data(o, "parsedAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                C.removeData(this, e)
            })
        }
    }),
    C.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return r = C._data(e, t = (t || "fx") + "queue"),
                n && (!r || C.isArray(n) ? r = C._data(e, t, C.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            var n = C.queue(e, t = t || "fx")
              , r = n.length
              , i = n.shift()
              , o = C._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                C.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return C._data(e, n) || C._data(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    C._removeData(e, t + "queue"),
                    C._removeData(e, n)
                })
            })
        }
    }),
    C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(a, [a])
            }
            var r, i = 1, o = C.Deferred(), a = this, s = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (r = C._data(a[s], e + "queueHooks")) && r.empty && (i++,
                r.empty.add(n));
            return n(),
            o.promise(t)
        }
    });
    function W(e, t) {
        return "none" === C.css(e = t || e, "display") || !C.contains(e.ownerDocument, e)
    }
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , z = ["Top", "Right", "Bottom", "Left"]
      , X = C.access = function(e, t, n, r, i, o, a) {
        var s = 0
          , l = e.length
          , u = null == n;
        if ("object" === C.type(n))
            for (s in i = !0,
            n)
                C.access(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        C.isFunction(r) || (a = !0),
        t = u ? a ? (t.call(e, r),
        null) : (u = t,
        function(e, t, n) {
            return u.call(C(e), n)
        }
        ) : t))
            for (; s < l; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }
      , V = /^(?:checkbox|radio)$/i;
    !function() {
        var e = T.createElement("input")
          , t = T.createElement("div")
          , n = T.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        v.leadingWhitespace = 3 === t.firstChild.nodeType,
        v.tbody = !t.getElementsByTagName("tbody").length,
        v.htmlSerialize = !!t.getElementsByTagName("link").length,
        v.html5Clone = "<:nav></:nav>" !== T.createElement("nav").cloneNode(!0).outerHTML,
        e.type = "checkbox",
        e.checked = !0,
        n.appendChild(e),
        v.appendChecked = e.checked,
        t.innerHTML = "<textarea>x</textarea>",
        v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        n.appendChild(t),
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        v.noCloneEvent = !0,
        t.attachEvent && (t.attachEvent("onclick", function() {
            v.noCloneEvent = !1
        }),
        t.cloneNode(!0).click()),
        null == v.deleteExpando) {
            v.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                v.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, t, n = T.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            (v[e + "Bubbles"] = (t = "on" + e)in h) || (n.setAttribute(t, "t"),
            v[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null
    }();
    var U = /^(?:input|select|textarea)$/i
      , K = /^key/
      , G = /^(?:mouse|pointer|contextmenu)|click/
      , Y = /^(?:focusinfocus|focusoutblur)$/
      , J = /^([^.]*)(?:\.(.+)|)$/;
    function Q() {
        return !0
    }
    function Z() {
        return !1
    }
    function ee() {
        try {
            return T.activeElement
        } catch (e) {}
    }
    function te(e) {
        var t = ne.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    C.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h = C._data(e);
            if (h) {
                for (n.handler && (n = (s = n).handler,
                i = s.selector),
                n.guid || (n.guid = C.guid++),
                (o = h.events) || (o = h.events = {}),
                (u = h.handle) || ((u = h.handle = function(e) {
                    return typeof C === O || e && C.event.triggered === e.type ? void 0 : C.event.dispatch.apply(u.elem, arguments)
                }
                ).elem = e),
                a = (t = (t || "").match(D) || [""]).length; a--; )
                    f = p = (c = J.exec(t[a]) || [])[1],
                    d = (c[2] || "").split(".").sort(),
                    f && (l = C.event.special[f] || {},
                    f = (i ? l.delegateType : l.bindType) || f,
                    l = C.event.special[f] || {},
                    c = C.extend({
                        type: f,
                        origType: p,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && C.expr.match.needsContext.test(i),
                        namespace: d.join(".")
                    }, s),
                    (p = o[f]) || ((p = o[f] = []).delegateCount = 0,
                    l.setup && !1 !== l.setup.call(e, r, d, u) || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))),
                    l.add && (l.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    C.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, m, g = C.hasData(e) && C._data(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(D) || [""]).length; u--; )
                    if (p = m = (s = J.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (f = C.event.special[p] || {},
                        d = c[p = (r ? f.delegateType : f.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = d.length; o--; )
                            a = d[o],
                            !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1),
                            a.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, a));
                        l && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || C.removeEvent(e, p, g.handle),
                        delete c[p])
                    } else
                        for (p in c)
                            C.event.remove(e, p + t[u], n, r, !0);
                C.isEmptyObject(c) && (delete g.handle,
                C._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, r) {
            var i, o, a, s, l, u, c = [n || T], f = g.call(e, "type") ? e.type : e, d = g.call(e, "namespace") ? e.namespace.split(".") : [], p = l = n = n || T;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Y.test(f + C.event.triggered) && (0 <= f.indexOf(".") && (f = (d = f.split(".")).shift(),
            d.sort()),
            o = f.indexOf(":") < 0 && "on" + f,
            (e = e[C.expando] ? e : new C.Event(f,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = d.join("."),
            e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : C.makeArray(t, [e]),
            s = C.event.special[f] || {},
            r || !s.trigger || !1 !== s.trigger.apply(n, t))) {
                if (!r && !s.noBubble && !C.isWindow(n)) {
                    for (a = s.delegateType || f,
                    Y.test(a + f) || (p = p.parentNode); p; p = p.parentNode)
                        c.push(p),
                        l = p;
                    l === (n.ownerDocument || T) && c.push(l.defaultView || l.parentWindow || h)
                }
                for (u = 0; (p = c[u++]) && !e.isPropagationStopped(); )
                    e.type = 1 < u ? a : s.bindType || f,
                    (i = (C._data(p, "events") || {})[e.type] && C._data(p, "handle")) && i.apply(p, t),
                    (i = o && p[o]) && i.apply && C.acceptData(p) && (e.result = i.apply(p, t),
                    !1 === e.result && e.preventDefault());
                if (e.type = f,
                !r && !e.isDefaultPrevented() && (!s._default || !1 === s._default.apply(c.pop(), t)) && C.acceptData(n) && o && n[f] && !C.isWindow(n)) {
                    (l = n[o]) && (n[o] = null),
                    C.event.triggered = f;
                    try {
                        n[f]()
                    } catch (e) {}
                    C.event.triggered = void 0,
                    l && (n[o] = l)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = C.event.fix(e);
            var t, n, r, i, o, a = c.call(arguments), s = (C._data(this, "events") || {})[e.type] || [], l = C.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (o = C.event.handlers.call(this, e, s),
                t = 0; (r = o[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = r.elem,
                    i = 0; (n = r.handlers[i++]) && !e.isImmediatePropagationStopped(); )
                        e.namespace_re && !e.namespace_re.test(n.namespace) || (e.handleObj = n,
                        e.data = n.data,
                        void 0 !== (n = ((C.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, a)) && !1 === (e.result = n) && (e.preventDefault(),
                        e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [],
                        o = 0; o < s; o++)
                            void 0 === i[n = (r = t[o]).selector + " "] && (i[n] = r.needsContext ? 0 <= C(n, this).index(l) : C.find(n, this, null, [l]).length),
                            i[n] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[C.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = G.test(i) ? this.mouseHooks : K.test(i) ? this.keyHooks : {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new C.Event(o),
            t = r.length; t--; )
                e[n = r[t]] = o[n];
            return e.target || (e.target = o.srcElement || T),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i = t.button, o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || T).documentElement,
                n = n.body,
                e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o),
                e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ee() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ee() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (C.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return C.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            e = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? C.event.trigger(e, null, t) : C.event.dispatch.call(t, e),
            e.isDefaultPrevented() && n.preventDefault()
        }
    },
    C.removeEvent = T.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        t = "on" + t;
        e.detachEvent && (typeof e[t] === O && (e[t] = null),
        e.detachEvent(t, n))
    }
    ,
    C.Event = function(e, t) {
        if (!(this instanceof C.Event))
            return new C.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Q : Z) : this.type = e,
        t && C.extend(this, t),
        this.timeStamp = e && e.timeStamp || C.now(),
        this[C.expando] = !0
    }
    ,
    C.Event.prototype = {
        isDefaultPrevented: Z,
        isPropagationStopped: Z,
        isImmediatePropagationStopped: Z,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Q,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Q,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Q,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        C.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    v.submitBubbles || (C.event.special.submit = {
        setup: function() {
            if (C.nodeName(this, "form"))
                return !1;
            C.event.add(this, "click._submit keypress._submit", function(e) {
                e = e.target,
                e = C.nodeName(e, "input") || C.nodeName(e, "button") ? e.form : void 0;
                e && !C._data(e, "submitBubbles") && (C.event.add(e, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                C._data(e, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && C.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (C.nodeName(this, "form"))
                return !1;
            C.event.remove(this, "._submit")
        }
    }),
    v.changeBubbles || (C.event.special.change = {
        setup: function() {
            if (U.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (C.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }),
                C.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1),
                    C.event.simulate("change", this, e, !0)
                })),
                !1;
            C.event.add(this, "beforeactivate._change", function(e) {
                e = e.target;
                U.test(e.nodeName) && !C._data(e, "changeBubbles") && (C.event.add(e, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || C.event.simulate("change", this.parentNode, e, !0)
                }),
                C._data(e, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return C.event.remove(this, "._change"),
            !U.test(this.nodeName)
        }
    }),
    v.focusinBubbles || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            C.event.simulate(r, e.target, C.event.fix(e), !0)
        }
        C.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = C._data(e, r);
                t || e.addEventListener(n, i, !0),
                C._data(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = C._data(e, r) - 1;
                t ? C._data(e, r, t) : (e.removeEventListener(n, i, !0),
                C._removeData(e, r))
            }
        }
    }),
    C.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                for (o in "string" != typeof t && (n = n || t,
                t = void 0),
                e)
                    this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t,
            n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
            n = void 0) : (r = n,
            n = t,
            t = void 0)),
            !1 === r)
                r = Z;
            else if (!r)
                return this;
            return 1 === i && (a = r,
            (r = function(e) {
                return C().off(e),
                a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = C.guid++)),
            this.each(function() {
                C.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Z),
                this.each(function() {
                    C.event.remove(this, e, n, t)
                });
            for (i in e)
                this.off(i, t, e[i]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return C.event.trigger(e, t, n, !0)
        }
    });
    var ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , re = / jQuery\d+="(?:null|\d+)"/g
      , ie = new RegExp("<(?:" + ne + ")[\\s/>]","i")
      , oe = /^\s+/
      , ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , se = /<([\w:]+)/
      , le = /<tbody/i
      , ue = /<|&#?\w+;/
      , ce = /<(?:script|style|link)/i
      , fe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , de = /^$|\/(?:java|ecma)script/i
      , pe = /^true\/(.*)/
      , he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , me = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , ge = te(T).appendChild(T.createElement("div"));
    function ve(e, t) {
        var n, r, i = 0, o = typeof e.getElementsByTagName !== O ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== O ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [],
            n = e.childNodes || e; null != (r = n[i]); i++)
                !t || C.nodeName(r, t) ? o.push(r) : C.merge(o, ve(r, t));
        return void 0 === t || t && C.nodeName(e, t) ? C.merge([e], o) : o
    }
    function ye(e) {
        V.test(e.type) && (e.defaultChecked = e.checked)
    }
    function xe(e, t) {
        return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function be(e) {
        return e.type = (null !== C.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function Ce(e) {
        var t = pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function we(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            C._data(n, "globalEval", !t || C._data(t[r], "globalEval"))
    }
    function Te(e, t) {
        if (1 === t.nodeType && C.hasData(e)) {
            var n, r, i, o = C._data(e), e = C._data(t, o), a = o.events;
            if (a)
                for (n in delete e.handle,
                e.events = {},
                a)
                    for (r = 0,
                    i = a[n].length; r < i; r++)
                        C.event.add(t, n, a[n][r]);
            e.data && (e.data = C.extend({}, e.data))
        }
    }
    me.optgroup = me.option,
    me.tbody = me.tfoot = me.colgroup = me.caption = me.thead,
    me.th = me.td,
    C.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = C.contains(e.ownerDocument, e);
            if (v.html5Clone || C.isXMLDoc(e) || !ie.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ge.innerHTML = e.outerHTML,
            ge.removeChild(o = ge.firstChild)),
            !(v.noCloneEvent && v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (r = ve(o),
                s = ve(e),
                a = 0; null != (i = s[a]); ++a)
                    r[a] && function(e, t) {
                        var n, r, i;
                        if (1 === t.nodeType) {
                            if (n = t.nodeName.toLowerCase(),
                            !v.noCloneEvent && t[C.expando]) {
                                for (r in (i = C._data(t)).events)
                                    C.removeEvent(t, r, i.handle);
                                t.removeAttribute(C.expando)
                            }
                            "script" === n && t.text !== e.text ? (be(t).text = e.text,
                            Ce(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                            v.html5Clone && e.innerHTML && !C.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && V.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                        }
                    }(i, r[a]);
            if (t)
                if (n)
                    for (s = s || ve(e),
                    r = r || ve(o),
                    a = 0; null != (i = s[a]); a++)
                        Te(i, r[a]);
                else
                    Te(e, o);
            return 0 < (r = ve(o, "script")).length && we(r, !l && ve(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, u, c, f = e.length, d = te(t), p = [], h = 0; h < f; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === C.type(o))
                        C.merge(p, o.nodeType ? [o] : o);
                    else if (ue.test(o)) {
                        for (s = s || d.appendChild(t.createElement("div")),
                        l = (se.exec(o) || ["", ""])[1].toLowerCase(),
                        c = me[l] || me._default,
                        s.innerHTML = c[1] + o.replace(ae, "<$1></$2>") + c[2],
                        i = c[0]; i--; )
                            s = s.lastChild;
                        if (!v.leadingWhitespace && oe.test(o) && p.push(t.createTextNode(oe.exec(o)[0])),
                        !v.tbody)
                            for (i = (o = "table" !== l || le.test(o) ? "<table>" !== c[1] || le.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--; )
                                C.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                        for (C.merge(p, s.childNodes),
                        s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = d.lastChild
                    } else
                        p.push(t.createTextNode(o));
            for (s && d.removeChild(s),
            v.appendChecked || C.grep(ve(p, "input"), ye),
            h = 0; o = p[h++]; )
                if ((!r || -1 === C.inArray(o, r)) && (a = C.contains(o.ownerDocument, o),
                s = ve(d.appendChild(o), "script"),
                a && we(s),
                n))
                    for (i = 0; o = s[i++]; )
                        de.test(o.type || "") && n.push(o);
            return s = null,
            d
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = C.expando, l = C.cache, u = v.deleteExpando, c = C.event.special; null != (n = e[a]); a++)
                if ((t || C.acceptData(n)) && (o = (i = n[s]) && l[i])) {
                    if (o.events)
                        for (r in o.events)
                            c[r] ? C.event.remove(n, r) : C.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i],
                    u ? delete n[s] : typeof n.removeAttribute !== O ? n.removeAttribute(s) : n[s] = null,
                    f.push(i))
                }
        }
    }),
    C.fn.extend({
        text: function(e) {
            return X(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || xe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = xe(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? C.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || C.cleanData(ve(n)),
                n.parentNode && (t && C.contains(n.ownerDocument, n) && we(ve(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && C.cleanData(ve(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && C.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return X(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(re, "") : void 0;
                if ("string" == typeof e && !ce.test(e) && (v.htmlSerialize || !ie.test(e)) && (v.leadingWhitespace || !oe.test(e)) && !me[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ae, "<$1></$2>");
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (C.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode,
                C.cleanData(ve(this)),
                t && t.replaceChild(e, this)
            }),
            t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, r) {
            n = m.apply([], n);
            var e, t, i, o, a, s, l = 0, u = this.length, c = this, f = u - 1, d = n[0], p = C.isFunction(d);
            if (p || 1 < u && "string" == typeof d && !v.checkClone && fe.test(d))
                return this.each(function(e) {
                    var t = c.eq(e);
                    p && (n[0] = d.call(this, e, t.html())),
                    t.domManip(n, r)
                });
            if (u && (e = (s = C.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild,
            1 === s.childNodes.length && (s = e),
            e)) {
                for (i = (o = C.map(ve(s, "script"), be)).length; l < u; l++)
                    t = s,
                    l !== f && (t = C.clone(t, !0, !0),
                    i && C.merge(o, ve(t, "script"))),
                    r.call(this[l], t, l);
                if (i)
                    for (a = o[o.length - 1].ownerDocument,
                    C.map(o, Ce),
                    l = 0; l < i; l++)
                        t = o[l],
                        de.test(t.type || "") && !C._data(t, "globalEval") && C.contains(a, t) && (t.src ? C._evalUrl && C._evalUrl(t.src) : C.globalEval((t.text || t.textContent || t.innerHTML || "").replace(he, "")));
                s = e = null
            }
            return this
        }
    }),
    C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        C.fn[e] = function(e) {
            for (var t, n = 0, r = [], i = C(e), o = i.length - 1; n <= o; n++)
                t = n === o ? this : this.clone(!0),
                C(i[n])[a](t),
                s.apply(r, t.get());
            return this.pushStack(r)
        }
    });
    var Ee, Ne, Se = {};
    function ke(e, t) {
        var t = C(t.createElement(e)).appendTo(t.body)
          , n = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(t[0])) ? n.display : C.css(t[0], "display");
        return t.detach(),
        n
    }
    function Ae(e) {
        var t = T
          , n = Se[e];
        return n || ("none" !== (n = ke(e, t)) && n || ((t = ((Ee = (Ee || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ee[0].contentDocument).document).write(),
        t.close(),
        n = ke(e, t),
        Ee.detach()),
        Se[e] = n),
        n
    }
    v.shrinkWrapBlocks = function() {
        return null != Ne ? Ne : (Ne = !1,
        (t = T.getElementsByTagName("body")[0]) && t.style ? (e = T.createElement("div"),
        (n = T.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        t.appendChild(n).appendChild(e),
        typeof e.style.zoom !== O && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
        e.appendChild(T.createElement("div")).style.width = "5px",
        Ne = 3 !== e.offsetWidth),
        t.removeChild(n),
        Ne) : void 0);
        var e, t, n
    }
    ;
    var Le, De, He, je, _e, Me, Oe = /^margin/, Fe = new RegExp("^(" + $ + ")(?!px)[a-z%]+$","i"), Ie = /^(top|right|bottom|left)$/;
    function qe(t, n) {
        return {
            get: function() {
                var e = t();
                if (null != e) {
                    if (!e)
                        return (this.get = n).apply(this, arguments);
                    delete this.get
                }
            }
        }
    }
    function Be() {
        var e, t, n, r = T.getElementsByTagName("body")[0];
        r && r.style && (e = T.createElement("div"),
        (t = T.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        r.appendChild(t).appendChild(e),
        e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
        He = je = !1,
        Me = !0,
        h.getComputedStyle && (He = "1%" !== (h.getComputedStyle(e, null) || {}).top,
        je = "4px" === (h.getComputedStyle(e, null) || {
            width: "4px"
        }).width,
        (n = e.appendChild(T.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
        n.style.marginRight = n.style.width = "0",
        e.style.width = "1px",
        Me = !parseFloat((h.getComputedStyle(n, null) || {}).marginRight)),
        e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
        (n = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
        (_e = 0 === n[0].offsetHeight) && (n[0].style.display = "",
        n[1].style.display = "none",
        _e = 0 === n[0].offsetHeight),
        r.removeChild(t))
    }
    h.getComputedStyle ? (Le = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }
    ,
    De = function(e, t, n) {
        var r, i = e.style, o = (n = n || Le(e)) ? n.getPropertyValue(t) || n[t] : void 0;
        return n && ("" !== o || C.contains(e.ownerDocument, e) || (o = C.style(e, t)),
        Fe.test(o) && Oe.test(t) && (r = i.width,
        e = i.minWidth,
        t = i.maxWidth,
        i.minWidth = i.maxWidth = i.width = o,
        o = n.width,
        i.width = r,
        i.minWidth = e,
        i.maxWidth = t)),
        void 0 === o ? o : o + ""
    }
    ) : T.documentElement.currentStyle && (Le = function(e) {
        return e.currentStyle
    }
    ,
    De = function(e, t, n) {
        var r, i, o, a = e.style;
        return null == (o = (n = n || Le(e)) ? n[t] : void 0) && a && a[t] && (o = a[t]),
        Fe.test(o) && !Ie.test(t) && (r = a.left,
        (n = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left),
        a.left = "fontSize" === t ? "1em" : o,
        o = a.pixelLeft + "px",
        a.left = r,
        n && (i.left = n)),
        void 0 === o ? o : o + "" || "auto"
    }
    ),
    (nt = T.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    (rt = (rt = nt.getElementsByTagName("a")[0]) && rt.style) && (rt.cssText = "float:left;opacity:.5",
    v.opacity = "0.5" === rt.opacity,
    v.cssFloat = !!rt.cssFloat,
    nt.style.backgroundClip = "content-box",
    nt.cloneNode(!0).style.backgroundClip = "",
    v.clearCloneStyle = "content-box" === nt.style.backgroundClip,
    v.boxSizing = "" === rt.boxSizing || "" === rt.MozBoxSizing || "" === rt.WebkitBoxSizing,
    C.extend(v, {
        reliableHiddenOffsets: function() {
            return null == _e && Be(),
            _e
        },
        boxSizingReliable: function() {
            return null == je && Be(),
            je
        },
        pixelPosition: function() {
            return null == He && Be(),
            He
        },
        reliableMarginRight: function() {
            return null == Me && Be(),
            Me
        }
    })),
    C.swap = function(e, t, n, r) {
        var i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.apply(e, r || []),
        t)
            e.style[i] = o[i];
        return r
    }
    ;
    var Pe = /alpha\([^)]*\)/i
      , Re = /opacity\s*=\s*([^)]*)/
      , We = /^(none|table(?!-c[ea]).+)/
      , $e = new RegExp("^(" + $ + ")(.*)$","i")
      , ze = new RegExp("^([+-])=(" + $ + ")","i")
      , Xe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ue = ["Webkit", "O", "Moz", "ms"];
    function Ke(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Ue.length; i--; )
            if ((t = Ue[i] + n)in e)
                return t;
        return r
    }
    function Ge(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
            (r = e[a]).style && (o[a] = C._data(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && W(r) && (o[a] = C._data(r, "olddisplay", Ae(r.nodeName)))) : (i = W(r),
            (n && "none" !== n || !i) && C._data(r, "olddisplay", i ? n : C.css(r, "display"))));
        for (a = 0; a < s; a++)
            (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function Ye(e, t, n) {
        var r = $e.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function Je(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === n && (a += C.css(e, n + z[o], !0, i)),
            r ? ("content" === n && (a -= C.css(e, "padding" + z[o], !0, i)),
            "margin" !== n && (a -= C.css(e, "border" + z[o] + "Width", !0, i))) : (a += C.css(e, "padding" + z[o], !0, i),
            "padding" !== n && (a += C.css(e, "border" + z[o] + "Width", !0, i)));
        return a
    }
    function Qe(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Le(e)
          , a = v.boxSizing && "border-box" === C.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = De(e, t, o)) < 0 || null == i) && (i = e.style[t]),
            Fe.test(i))
                return i;
            r = a && (v.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + Je(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function Ze(e, t, n, r, i) {
        return new Ze.prototype.init(e,t,n,r,i)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = De(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: v.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = C.camelCase(t), l = e.style;
                if (t = C.cssProps[s] || (C.cssProps[s] = Ke(l, s)),
                a = C.cssHooks[t] || C.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                if ("string" === (o = typeof n) && (i = ze.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(C.css(e, t)),
                o = "number"),
                null != n && n == n && ("number" !== o || C.cssNumber[s] || (n += "px"),
                v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                !(a && "set"in a && void 0 === (n = a.set(e, n, r)))))
                    try {
                        l[t] = n
                    } catch (e) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o = C.camelCase(t);
            return t = C.cssProps[o] || (C.cssProps[o] = Ke(e.style, o)),
            "normal" === (i = void 0 === (i = (o = C.cssHooks[t] || C.cssHooks[o]) && "get"in o ? o.get(e, !0, n) : i) ? De(e, t, r) : i) && t in Ve && (i = Ve[t]),
            "" === n || n ? (t = parseFloat(i),
            !0 === n || C.isNumeric(t) ? t || 0 : i) : i
        }
    }),
    C.each(["height", "width"], function(e, i) {
        C.cssHooks[i] = {
            get: function(e, t, n) {
                if (t)
                    return We.test(C.css(e, "display")) && 0 === e.offsetWidth ? C.swap(e, Xe, function() {
                        return Qe(e, i, n)
                    }) : Qe(e, i, n)
            },
            set: function(e, t, n) {
                var r = n && Le(e);
                return Ye(0, t, n ? Je(e, i, n, v.boxSizing && "border-box" === C.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    v.opacity || (C.cssHooks.opacity = {
        get: function(e, t) {
            return Re.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = C.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , e = r && r.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === C.trim(e.replace(Pe, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = Pe.test(e) ? e.replace(Pe, i) : e + " " + i)
        }
    }),
    C.cssHooks.marginRight = qe(v.reliableMarginRight, function(e, t) {
        if (t)
            return C.swap(e, {
                display: "inline-block"
            }, De, [e, "marginRight"])
    }),
    C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        C.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + z[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        Oe.test(i) || (C.cssHooks[i + o].set = Ye)
    }),
    C.fn.extend({
        css: function(e, t) {
            return X(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (C.isArray(t)) {
                    for (r = Le(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = C.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return Ge(this, !0)
        },
        hide: function() {
            return Ge(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                W(this) ? C(this).show() : C(this).hide()
            })
        }
    }),
    (C.Tween = Ze).prototype = {
        constructor: Ze,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ze.propHooks[this.prop];
            return (e && e.get ? e : Ze.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = Ze.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : Ze.propHooks._default).set(this),
            this
        }
    },
    Ze.prototype.init.prototype = Ze.prototype,
    Ze.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[C.cssProps[e.prop]] || C.cssHooks[e.prop]) ? C.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    C.fx = Ze.prototype.init,
    C.fx.step = {};
    var et, tt, nt, rt, it = /^(?:toggle|show|hide)$/, ot = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$","i"), at = /queueHooks$/, st = [function(t, e, n) {
        var r, i, o, a, s, l, u, c = this, f = {}, d = t.style, p = t.nodeType && W(t), h = C._data(t, "fxshow");
        n.queue || (null == (s = C._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        c.always(function() {
            c.always(function() {
                s.unqueued--,
                C.queue(t, "fx").length || s.empty.fire()
            })
        }));
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        u = C.css(t, "display"),
        "inline" === ("none" === u ? C._data(t, "olddisplay") || Ae(t.nodeName) : u) && "none" === C.css(t, "float") && (v.inlineBlockNeedsLayout && "inline" !== Ae(t.nodeName) ? d.zoom = 1 : d.display = "inline-block"));
        n.overflow && (d.overflow = "hidden",
        v.shrinkWrapBlocks() || c.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (r in e)
            if (i = e[r],
            it.exec(i)) {
                if (delete e[r],
                o = o || "toggle" === i,
                i === (p ? "hide" : "show")) {
                    if ("show" !== i || !h || void 0 === h[r])
                        continue;
                    p = !0
                }
                f[r] = h && h[r] || C.style(t, r)
            } else
                u = void 0;
        if (C.isEmptyObject(f))
            "inline" === ("none" === u ? Ae(t.nodeName) : u) && (d.display = u);
        else
            for (r in h ? "hidden"in h && (p = h.hidden) : h = C._data(t, "fxshow", {}),
            o && (h.hidden = !p),
            p ? C(t).show() : c.done(function() {
                C(t).hide()
            }),
            c.done(function() {
                for (var e in C._removeData(t, "fxshow"),
                f)
                    C.style(t, e, f[e])
            }),
            f)
                a = ft(p ? h[r] : 0, r, c),
                r in h || (h[r] = a.start,
                p && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
    }
    ], lt = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , t = ot.exec(t)
              , i = t && t[3] || (C.cssNumber[e] ? "" : "px")
              , o = (C.cssNumber[e] || "px" !== i && +r) && ot.exec(C.css(n.elem, e))
              , a = 1
              , s = 20;
            if (o && o[3] !== i)
                for (i = i || o[3],
                t = t || [],
                o = +r || 1; o /= a = a || ".5",
                C.style(n.elem, e, o + i),
                a !== (a = n.cur() / r) && 1 !== a && --s; )
                    ;
            return t && (o = n.start = +o || +r || 0,
            n.unit = i,
            n.end = t[1] ? o + (t[1] + 1) * t[2] : +t[2]),
            n
        }
        ]
    };
    function ut() {
        return setTimeout(function() {
            et = void 0
        }),
        et = C.now()
    }
    function ct(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = z[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function ft(e, t, n) {
        for (var r, i = (lt[t] || []).concat(lt["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function dt(i, e, t) {
        var n, o, r = 0, a = st.length, s = C.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var e = et || ut(), e = Math.max(0, u.startTime + u.duration - e), t = 1 - (e / u.duration || 0), n = 0, r = u.tweens.length; n < r; n++)
                u.tweens[n].run(t);
            return s.notifyWith(i, [u, t, e]),
            t < 1 && r ? e : (s.resolveWith(i, [u]),
            !1)
        }, u = s.promise({
            elem: i,
            props: C.extend({}, e),
            opts: C.extend(!0, {
                specialEasing: {}
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: et || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                e = C.Tween(i, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(e),
                e
            },
            stop: function(e) {
                var t = 0
                  , n = e ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; t < n; t++)
                    u.tweens[t].run(1);
                return e ? s.resolveWith(i, [u, e]) : s.rejectWith(i, [u, e]),
                this
            }
        }), c = u.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = C.camelCase(n)],
                o = e[n],
                C.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = C.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, u.opts.specialEasing); r < a; r++)
            if (n = st[r].call(u, i, c, u.opts))
                return n;
        return C.map(c, ft, u),
        C.isFunction(u.opts.start) && u.opts.start.call(i, u),
        C.fx.timer(C.extend(l, {
            elem: i,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    C.Animation = C.extend(dt, {
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = C.isFunction(e) ? (t = e,
            ["*"]) : e.split(" ")).length; r < i; r++)
                n = e[r],
                lt[n] = lt[n] || [],
                lt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? st.unshift(e) : st.push(e)
        }
    }),
    C.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || C.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !C.isFunction(t) && t
        };
        return r.duration = C.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in C.fx.speeds ? C.fx.speeds[r.duration] : C.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            C.isFunction(r.old) && r.old.call(this),
            r.queue && C.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    C.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = C.isEmptyObject(t)
              , o = C.speed(e, n, r)
              , r = function() {
                var e = dt(this, C.extend({}, t), o);
                (i || C._data(this, "finish")) && e.stop(!0)
            };
            return r.finish = r,
            i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(i, e, o) {
            function a(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            }
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = C.timers
                  , r = C._data(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || C.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = C._data(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = C.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                C.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    C.each(["toggle", "show", "hide"], function(e, r) {
        var i = C.fn[r];
        C.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ct(r, !0), e, t, n)
        }
    }),
    C.each({
        slideDown: ct("show"),
        slideUp: ct("hide"),
        slideToggle: ct("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        C.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    C.timers = [],
    C.fx.tick = function() {
        var e, t = C.timers, n = 0;
        for (et = C.now(); n < t.length; n++)
            (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || C.fx.stop(),
        et = void 0
    }
    ,
    C.fx.timer = function(e) {
        C.timers.push(e),
        e() ? C.fx.start() : C.timers.pop()
    }
    ,
    C.fx.interval = 13,
    C.fx.start = function() {
        tt = tt || setInterval(C.fx.tick, C.fx.interval)
    }
    ,
    C.fx.stop = function() {
        clearInterval(tt),
        tt = null
    }
    ,
    C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    C.fn.delay = function(r, e) {
        return r = C.fx && C.fx.speeds[r] || r,
        this.queue(e = e || "fx", function(e, t) {
            var n = setTimeout(e, r);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    }
    ,
    (o = T.createElement("div")).setAttribute("className", "t"),
    o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    p = o.getElementsByTagName("a")[0],
    rt = (nt = T.createElement("select")).appendChild(T.createElement("option")),
    $ = o.getElementsByTagName("input")[0],
    p.style.cssText = "top:1px",
    v.getSetAttribute = "t" !== o.className,
    v.style = /top/.test(p.getAttribute("style")),
    v.hrefNormalized = "/a" === p.getAttribute("href"),
    v.checkOn = !!$.value,
    v.optSelected = rt.selected,
    v.enctype = !!T.createElement("form").enctype,
    nt.disabled = !0,
    v.optDisabled = !rt.disabled,
    ($ = T.createElement("input")).setAttribute("value", ""),
    v.input = "" === $.getAttribute("value"),
    $.value = "t",
    $.setAttribute("type", "radio"),
    v.radioValue = "t" === $.value;
    var pt = /\r/g;
    C.fn.extend({
        val: function(t) {
            var n, e, r, i = this[0];
            return arguments.length ? (r = C.isFunction(t),
            this.each(function(e) {
                1 === this.nodeType && (null == (e = r ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : C.isArray(e) && (e = C.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : i ? (n = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof (e = i.value) ? e.replace(pt, "") : null == e ? "" : e : void 0
        }
    }),
    C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : C.trim(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type || r < 0, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++)
                        if (((t = n[s]).selected || s === r) && (v.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !C.nodeName(t.parentNode, "optgroup"))) {
                            if (t = C(t).val(),
                            i)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--; )
                        if (r = i[a],
                        0 <= C.inArray(C.valHooks.option.get(r), o))
                            try {
                                r.selected = n = !0
                            } catch (e) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (C.isArray(t))
                    return e.checked = 0 <= C.inArray(C(e).val(), t)
            }
        },
        v.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var ht, mt, gt = C.expr.attrHandle, vt = /^(?:checked|selected)$/i, yt = v.getSetAttribute, xt = v.input;
    C.fn.extend({
        attr: function(e, t) {
            return X(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }),
    C.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return typeof e.getAttribute === O ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (t = t.toLowerCase(),
                r = C.attrHooks[t] || (C.expr.match.bool.test(t) ? mt : ht)),
                void 0 === n ? !(r && "get"in r && null !== (i = r.get(e, t))) && null == (i = C.find.attr(e, t)) ? void 0 : i : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : void C.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(D);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = C.propFix[n] || n,
                    C.expr.match.bool.test(n) ? xt && yt || !vt.test(n) ? e[r] = !1 : e[C.camelCase("default-" + n)] = e[r] = !1 : C.attr(e, n, ""),
                    e.removeAttribute(yt ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && C.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    mt = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : xt && yt || !vt.test(n) ? e.setAttribute(!yt && C.propFix[n] || n, n) : e[C.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = gt[t] || C.find.attr;
        gt[t] = xt && yt || !vt.test(t) ? function(e, t, n) {
            var r, i;
            return n || (i = gt[t],
            gt[t] = r,
            r = null != o(e, t, n) ? t.toLowerCase() : null,
            gt[t] = i),
            r
        }
        : function(e, t, n) {
            if (!n)
                return e[C.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    xt && yt || (C.attrHooks.value = {
        set: function(e, t, n) {
            if (!C.nodeName(e, "input"))
                return ht && ht.set(e, t, n);
            e.defaultValue = t
        }
    }),
    yt || (ht = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
            r.value = t += "",
            "value" === n || t === e.getAttribute(n))
                return t
        }
    },
    gt.id = gt.name = gt.coords = function(e, t, n) {
        if (!n)
            return (t = e.getAttributeNode(t)) && "" !== t.value ? t.value : null
    }
    ,
    C.valHooks.button = {
        get: function(e, t) {
            t = e.getAttributeNode(t);
            if (t && t.specified)
                return t.value
        },
        set: ht.set
    },
    C.attrHooks.contenteditable = {
        set: function(e, t, n) {
            ht.set(e, "" !== t && t, n)
        }
    },
    C.each(["width", "height"], function(e, n) {
        C.attrHooks[n] = {
            set: function(e, t) {
                if ("" === t)
                    return e.setAttribute(n, "auto"),
                    t
            }
        }
    })),
    v.style || (C.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var bt = /^(?:input|select|textarea|button|object)$/i
      , Ct = /^(?:a|area)$/i;
    C.fn.extend({
        prop: function(e, t) {
            return X(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = C.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (e) {}
            })
        }
    }),
    C.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return (1 !== o || !C.isXMLDoc(e)) && (t = C.propFix[t] || t,
                i = C.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    v.hrefNormalized || C.each(["href", "src"], function(e, t) {
        C.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    v.optSelected || (C.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex),
            null
        }
    }),
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }),
    v.enctype || (C.propFix.enctype = "encoding");
    var wt = /[\t\r\n\f]/g;
    C.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s = 0, l = this.length, u = "string" == typeof t && t;
            if (C.isFunction(t))
                return this.each(function(e) {
                    C(this).addClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(D) || []; s < l; s++)
                    if (r = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) {
                        for (o = 0; i = e[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = C.trim(r),
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (C.isFunction(t))
                return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(D) || []; s < l; s++)
                    if (r = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) {
                        for (o = 0; i = e[o++]; )
                            for (; 0 <= r.indexOf(" " + i + " "); )
                                r = r.replace(" " + i + " ", " ");
                        a = t ? C.trim(r) : "",
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) : C.isFunction(i) ? this.each(function(e) {
                C(this).toggleClass(i.call(this, e, this.className, t), t)
            }) : this.each(function() {
                if ("string" == o)
                    for (var e, t = 0, n = C(this), r = i.match(D) || []; e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    o !== O && "boolean" != o || (this.className && C._data(this, "__className__", this.className),
                    this.className = !this.className && !1 !== i && C._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(wt, " ").indexOf(t))
                    return !0;
            return !1
        }
    }),
    C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Tt = C.now()
      , Et = /\?/
      , Nt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    C.parseJSON = function(e) {
        if (h.JSON && h.JSON.parse)
            return h.JSON.parse(e + "");
        var i, o = null, t = C.trim(e + "");
        return t && !C.trim(t.replace(Nt, function(e, t, n, r) {
            return 0 === (o = i && t ? 0 : o) ? e : (i = n || t,
            o += !r - !n,
            "")
        })) ? Function("return " + t)() : C.error("Invalid JSON: " + e)
    }
    ,
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            h.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
            t.loadXML(e))
        } catch (e) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e),
        t
    }
    ;
    var St, kt, At = /#.*$/, Lt = /([?&])_=[^&]*/, Dt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ht = /^(?:GET|HEAD)$/, jt = /^\/\//, _t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Mt = {}, Ot = {}, Ft = "*/".concat("*");
    try {
        kt = location.href
    } catch (e) {
        (kt = T.createElement("a")).href = "",
        kt = kt.href
    }
    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(D) || [];
            if (C.isFunction(t))
                for (; n = i[r++]; )
                    "+" === n.charAt(0) ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function qt(t, r, i, o) {
        var a = {}
          , s = t === Ot;
        function l(e) {
            var n;
            return a[e] = !0,
            C.each(t[e] || [], function(e, t) {
                t = t(r, i, o);
                return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t),
                l(t),
                !1)
            }),
            n
        }
        return l(r.dataTypes[0]) || !a["*"] && l("*")
    }
    function Bt(e, t) {
        var n, r, i = C.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((i[r] ? e : n = n || {})[r] = t[r]);
        return n && C.extend(!0, e, n),
        e
    }
    St = _t.exec(kt.toLowerCase()) || [],
    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": C.parseJSON,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, C.ajaxSettings), t) : Bt(C.ajaxSettings, e)
        },
        ajaxPrefilter: It(Mt),
        ajaxTransport: It(Ot),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0);
            var n, l, u, c, f, d, r, p = C.ajaxSetup({}, t = t || {}), h = p.context || p, m = p.context && (h.nodeType || h.jquery) ? C(h) : C.event, g = C.Deferred(), v = C.Callbacks("once memory"), y = p.statusCode || {}, i = {}, o = {}, x = 0, a = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!r)
                            for (r = {}; t = Dt.exec(u); )
                                r[t[1].toLowerCase()] = t[2];
                        t = r[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? u : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = o[n] = o[n] || e,
                    i[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (x < 2)
                            for (var t in e)
                                y[t] = [y[t], e[t]];
                        else
                            b.always(e[b.status]);
                    return this
                },
                abort: function(e) {
                    e = e || a;
                    return d && d.abort(e),
                    s(0, e),
                    this
                }
            };
            if (g.promise(b).complete = v.add,
            b.success = b.done,
            b.error = b.fail,
            p.url = ((e || p.url || kt) + "").replace(At, "").replace(jt, St[1] + "//"),
            p.type = t.method || t.type || p.method || p.type,
            p.dataTypes = C.trim(p.dataType || "*").toLowerCase().match(D) || [""],
            null == p.crossDomain && (e = _t.exec(p.url.toLowerCase()),
            p.crossDomain = !(!e || e[1] === St[1] && e[2] === St[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (St[3] || ("http:" === St[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)),
            qt(Mt, p, t, b),
            2 === x)
                return b;
            for (n in (f = p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Ht.test(p.type),
            l = p.url,
            p.hasContent || (p.data && (l = p.url += (Et.test(l) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (p.url = Lt.test(l) ? l.replace(Lt, "$1_=" + Tt++) : l + (Et.test(l) ? "&" : "?") + "_=" + Tt++)),
            p.ifModified && (C.lastModified[l] && b.setRequestHeader("If-Modified-Since", C.lastModified[l]),
            C.etag[l] && b.setRequestHeader("If-None-Match", C.etag[l])),
            (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && b.setRequestHeader("Content-Type", p.contentType),
            b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                b.setRequestHeader(n, p.headers[n]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, b, p) || 2 === x))
                return b.abort();
            for (n in a = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                b[n](p[n]);
            if (d = qt(Ot, p, t, b)) {
                b.readyState = 1,
                f && m.trigger("ajaxSend", [b, p]),
                p.async && 0 < p.timeout && (c = setTimeout(function() {
                    b.abort("timeout")
                }, p.timeout));
                try {
                    x = 1,
                    d.send(i, s)
                } catch (e) {
                    if (!(x < 2))
                        throw e;
                    s(-1, e)
                }
            } else
                s(-1, "No Transport");
            function s(e, t, n, r) {
                var i, o, a, s = t;
                2 !== x && (x = 2,
                c && clearTimeout(c),
                d = void 0,
                u = r || "",
                b.readyState = 0 < e ? 4 : 0,
                r = 200 <= e && e < 300 || 304 === e,
                n && (a = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (a in s)
                            if (s[a] && s[a].test(i)) {
                                l.unshift(a);
                                break
                            }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (a in n) {
                            if (!l[0] || e.converters[a + " " + l[0]]) {
                                o = a;
                                break
                            }
                            r = r || a
                        }
                        o = o || r
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(p, b, n)),
                a = function(e, t, n, r) {
                    var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = c.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(a = u[l + " " + o] || u["* " + o]))
                                    for (i in u)
                                        if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                            !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, a, b, r),
                r ? (p.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (C.lastModified[l] = n),
                (n = b.getResponseHeader("etag")) && (C.etag[l] = n)),
                204 === e || "HEAD" === p.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state,
                i = a.data,
                r = !(o = a.error))) : (o = s,
                !e && s || (s = "error",
                e < 0 && (e = 0))),
                b.status = e,
                b.statusText = (t || s) + "",
                r ? g.resolveWith(h, [i, s, b]) : g.rejectWith(h, [b, s, o]),
                b.statusCode(y),
                y = void 0,
                f && m.trigger(r ? "ajaxSuccess" : "ajaxError", [b, p, r ? i : o]),
                v.fireWith(h, [b, s]),
                f && (m.trigger("ajaxComplete", [b, p]),
                --C.active || C.event.trigger("ajaxStop")))
            }
            return b
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }),
    C.each(["get", "post"], function(e, i) {
        C[i] = function(e, t, n, r) {
            return C.isFunction(t) && (r = r || n,
            n = t,
            t = void 0),
            C.ajax({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            })
        }
    }),
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    C._evalUrl = function(e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    C.fn.extend({
        wrapAll: function(t) {
            return C.isFunction(t) ? this.each(function(e) {
                C(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = C(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                    e = e.firstChild;
                return e
            }).append(this)),
            this);
            var e
        },
        wrapInner: function(n) {
            return C.isFunction(n) ? this.each(function(e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = C(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = C.isFunction(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    C.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !v.reliableHiddenOffsets() && "none" === (e.style && e.style.display || C.css(e, "display"))
    }
    ,
    C.expr.filters.visible = function(e) {
        return !C.expr.filters.hidden(e)
    }
    ;
    var Pt = /%20/g
      , Rt = /\[\]$/
      , Wt = /\r?\n/g
      , $t = /^(?:submit|button|image|reset|file)$/i
      , zt = /^(?:input|select|textarea|keygen)/i;
    C.param = function(e, t) {
        function n(e, t) {
            t = C.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var r, i = [];
        if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional),
        C.isArray(e) || e.jquery && !C.isPlainObject(e))
            C.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (r in e)
                !function n(r, e, i, o) {
                    if (C.isArray(e))
                        C.each(e, function(e, t) {
                            i || Rt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t ? e : "") + "]", t, i, o)
                        });
                    else if (i || "object" !== C.type(e))
                        o(r, e);
                    else
                        for (var t in e)
                            n(r + "[" + t + "]", e[t], i, o)
                }(r, e[r], t, n);
        return i.join("&").replace(Pt, "+")
    }
    ,
    C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && zt.test(this.nodeName) && !$t.test(e) && (this.checked || !V.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : C.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Wt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Wt, "\r\n")
                }
            }).get()
        }
    }),
    C.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Ut() || function() {
            try {
                return new h.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    }
    : Ut;
    var Xt = 0
      , Vt = {}
      , $ = C.ajaxSettings.xhr();
    function Ut() {
        try {
            return new h.XMLHttpRequest
        } catch (e) {}
    }
    h.ActiveXObject && C(h).on("unload", function() {
        for (var e in Vt)
            Vt[e](void 0, !0)
    }),
    v.cors = !!$ && "withCredentials"in $,
    ($ = v.ajax = !!$) && C.ajaxTransport(function(l) {
        var u;
        if (!l.crossDomain || v.cors)
            return {
                send: function(e, o) {
                    var t, a = l.xhr(), s = ++Xt;
                    if (a.open(l.type, l.url, l.async, l.username, l.password),
                    l.xhrFields)
                        for (t in l.xhrFields)
                            a[t] = l.xhrFields[t];
                    for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType),
                    l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                    a.send(l.hasContent && l.data || null),
                    u = function(e, t) {
                        var n, r, i;
                        if (u && (t || 4 === a.readyState))
                            if (delete Vt[s],
                            u = void 0,
                            a.onreadystatechange = C.noop,
                            t)
                                4 !== a.readyState && a.abort();
                            else {
                                i = {},
                                n = a.status,
                                "string" == typeof a.responseText && (i.text = a.responseText);
                                try {
                                    r = a.statusText
                                } catch (e) {
                                    r = ""
                                }
                                n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                            }
                        i && o(n, r, i, a.getAllResponseHeaders())
                    }
                    ,
                    l.async ? 4 === a.readyState ? setTimeout(u) : a.onreadystatechange = Vt[s] = u : u()
                },
                abort: function() {
                    u && u(void 0, !0)
                }
            }
    }),
    C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e),
                e
            }
        }
    }),
    C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    C.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var r, i = T.head || C("head")[0] || T.documentElement;
            return {
                send: function(e, n) {
                    (r = T.createElement("script")).async = !0,
                    t.scriptCharset && (r.charset = t.scriptCharset),
                    r.src = t.url,
                    r.onload = r.onreadystatechange = function(e, t) {
                        !t && r.readyState && !/loaded|complete/.test(r.readyState) || (r.onload = r.onreadystatechange = null,
                        r.parentNode && r.parentNode.removeChild(r),
                        r = null,
                        t || n(200, "success"))
                    }
                    ,
                    i.insertBefore(r, i.firstChild)
                },
                abort: function() {
                    r && r.onload(void 0, !0)
                }
            }
        }
    });
    var Kt = []
      , Gt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || C.expando + "_" + Tt++;
            return this[e] = !0,
            e
        }
    }),
    C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Gt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || C.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = h[r],
            h[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                h[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Kt.push(r)),
                o && C.isFunction(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    C.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || T;
        var r = x.exec(e)
          , n = !n && [];
        return r ? [t.createElement(r[1])] : (r = C.buildFragment([e], t, n),
        n && n.length && C(n).remove(),
        C.merge([], r.childNodes))
    }
    ;
    var Yt = C.fn.load;
    C.fn.load = function(e, t, n) {
        if ("string" != typeof e && Yt)
            return Yt.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return 0 <= s && (r = C.trim(e.slice(s, e.length)),
        e = e.slice(0, s)),
        C.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        0 < a.length && C.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    C.expr.filters.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    }
    ;
    var Jt = h.document.documentElement;
    function Qt(e) {
        return C.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    C.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s = C.css(e, "position"), l = C(e), u = {};
            "static" === s && (e.style.position = "relative"),
            o = l.offset(),
            r = C.css(e, "top"),
            a = C.css(e, "left"),
            a = ("absolute" === s || "fixed" === s) && -1 < C.inArray("auto", [r, a]) ? (i = (s = l.position()).top,
            s.left) : (i = parseFloat(r) || 0,
            parseFloat(a) || 0),
            null != (t = C.isFunction(t) ? t.call(e, n, o) : t).top && (u.top = t.top - o.top + i),
            null != t.left && (u.left = t.left - o.left + a),
            "using"in t ? t.using.call(e, u) : l.css(u)
        }
    },
    C.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
            var e, n = {
                top: 0,
                left: 0
            }, r = this[0], i = r && r.ownerDocument;
            return i ? (e = i.documentElement,
            C.contains(e, r) ? (typeof r.getBoundingClientRect !== O && (n = r.getBoundingClientRect()),
            i = Qt(i),
            {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === C.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                (n = !C.nodeName(e[0], "html") ? e.offset() : n).top += C.css(e[0], "borderTopWidth", !0),
                n.left += C.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - C.css(r, "marginTop", !0),
                    left: t.left - n.left - C.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Jt; e && !C.nodeName(e, "html") && "static" === C.css(e, "position"); )
                    e = e.offsetParent;
                return e || Jt
            })
        }
    }),
    C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = /Y/.test(i);
        C.fn[t] = function(e) {
            return X(this, function(e, t, n) {
                var r = Qt(e);
                if (void 0 === n)
                    return r ? i in r ? r[i] : r.document.documentElement[t] : e[t];
                r ? r.scrollTo(o ? C(r).scrollLeft() : n, o ? n : C(r).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }),
    C.each(["top", "left"], function(e, n) {
        C.cssHooks[n] = qe(v.pixelPosition, function(e, t) {
            if (t)
                return t = De(e, n),
                Fe.test(t) ? C(e).position()[n] + "px" : t
        })
    }),
    C.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        C.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(r, e) {
            C.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return X(this, function(e, t, n) {
                    var r;
                    return C.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? C.css(e, t, i) : C.style(e, t, n, i)
                }, a, n ? e : void 0, n, null)
            }
        })
    }),
    C.fn.size = function() {
        return this.length
    }
    ,
    C.fn.andSelf = C.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var Zt = h.jQuery
      , en = h.$;
    return C.noConflict = function(e) {
        return h.$ === C && (h.$ = en),
        e && h.jQuery === C && (h.jQuery = Zt),
        C
    }
    ,
    typeof e === O && (h.jQuery = h.$ = C),
    C
});
var whitespace = "[\\x20\\t\\r\\n\\f]"
  , rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$","g");
String.prototype.trim = String.prototype.trim || function() {
    return this.treplace(rtrim, "")
}
;
var pid = "id"
  , at = "@keydatas.com".substring(0, 1)
  , classHighlightMouseHover = "_sd_Highlight_MouseHover"
  , selectedClass = "_sd_Highlight_Select"
  , xr = XPathResult.ORDERED_NODE_SNAPSHOT_TYPE
  , xrf = XPathResult.FIRST_ORDERED_NODE_TYPE
  , classNoNeeded = ["ul"]
  , xg = "*"
  , myEle = "kds";
function HashTable() {
    var n = this
      , i = {}
      , r = 0
      , o = []
      , a = [];
    n.checkKey = function(e) {
        if ("string" == typeof e && "" !== e.trim || "number" == typeof e || "boolean" == typeof e)
            return e;
        throw new Error("Keyå¿…é¡»æ˜¯ä¸€ä¸ªå­˜åœ¨å€¼çš„åŸºæœ¬ç±»åž‹ï¼Œå¹¶ä¸”å€¼ä¸å¯ä¸ºç©º")
    }
    ,
    n.add = function(e, t) {
        return e = this.checkKey(e),
        i[e] = t,
        r++,
        isInArray(o, e) || o.push(e),
        isInArray(a, t) || a.push(t),
        n
    }
    ,
    n.remove = function(e) {
        var t;
        return e = this.checkKey(e),
        i.hasOwnProperty(e) && (t = i[e],
        delete i[e],
        --r < 0 && (r = 0),
        e = o.indexOf(e),
        t = a.indexOf(t),
        -1 != e && o.splice(e, 1),
        -1 != t && a.splice(t, 1)),
        n
    }
    ,
    n.clear = function() {
        for (var e = 0; e < o.length; e++)
            i.hasOwnProperty(o[e]) && delete i[o[e]];
        return o.splice(0, o.length),
        a.splice(0, a.length),
        n
    }
    ,
    n.count = function() {
        return r
    }
    ,
    n.contains = function(e) {
        return isInArray(o, e)
    }
    ,
    n.containsKey = function(e) {
        return isInArray(o, e)
    }
    ,
    n.containsValue = function(e) {
        return isInArray(a, e)
    }
    ,
    n.getKeys = function() {
        return o.concat([])
    }
    ,
    n.getValues = function() {
        return a.concat([])
    }
    ,
    n.getValue = function(e) {
        if (i.hasOwnProperty(e))
            return i[e]
    }
    ,
    n.each = function(e) {
        if ("function" == typeof e)
            for (var t = 0; t < o.length; t++) {
                var n = o[t]
                  , r = i[n];
                if (!1 === e.call({
                    key: n,
                    value: r
                }, n, r))
                    break
            }
    }
    ,
    n.toList = function() {
        for (var e = [], t = 0; t < o.length; t++) {
            var n = o[t]
              , r = i[n];
            e.push({
                key: n,
                value: r
            })
        }
        return e
    }
}
function containsNum(e) {
    return /\d/.test(e)
}
function isInArray(e, t) {
    return 0 <= $.inArray(t, e)
}
Array.prototype.indexOf = function(e) {
    for (var t = 0; t < this.length; t++)
        if (this[t] == e)
            return t;
    return -1
}
,
Array.prototype.remove = function(e) {
    e = this.indexOf(e);
    -1 < e && this.splice(e, 1)
}
,
setTimeout(function() {}, 1e3);
var h = "ht"
  , x = "x"
  , valsArrs = []
  , listType = "1"
  , detailType = "2"
  , pageType = listType
  , groupSelect = !0;
function setPageType(e) {
    pageType = e
}
function setGroupSelect(e) {
    groupSelect = e
}
var g = "/"
  , dontUseLink = !1
  , dontUseMituValue = !1;
function changeFieldName(e) {
    e = e || "æœªé€‰æ‹©å­—æ®µï¼ï¼ï¼",
    $("#tip-field-name").text(e)
}
function clearAll(e) {
    $("*." + selectedClass).removeClass(selectedClass),
    mutiSelected = !(valsArrs = []),
    formatedsCounter = new HashTable,
    dontUseMituValue = dontUseLink = !1
}
function extractElements(e) {
    if (!e)
        return [];
    var t = e.split(";")
      , n = [];
    if (t && 0 < t.length)
        for (var r = 0, i = t.length; r < i; r++) {
            var o = t[r];
            o && ((o = getElementsByIds(o)) && 0 < o.length && (n = n.concat(o)))
        }
    return n
}
function locationSelector(e) {
    if (e) {
        var t = e.split(";");
        if (t && 0 < t.length) {
            for (var n = 0, r = t.length; n < r; n++)
                highlightSelected(t[n]);
            scrollIntoViewSelected(t[0])
        }
    }
}
function highlightSelected(e) {
    if (e) {
        valsArrs.push(e),
        plusFormatedToMap(e);
        var t = getElementsByIds(e);
        if (t && 0 < t.length)
            for (var n = 0, r = t.length; n < r; n++)
                addSelectedClass(t[n])
    }
}
function scrollIntoViewSelected(e) {
    !e || (e = getElementsByIds(e)) && 0 < e.length && (e[0].scrollIntoView(),
    document.documentElement.scrollTop -= 180,
    window.parent.document.documentElement.scrollTop -= 180)
}
function initAfterIframe() {
    var e = parent.getCurrFieldSelectors();
    if (e) {
        e = replacesIndex(e = e.indexOf(myEle) < 0 ? e + "/" + myEle + "[1]" : e);
        valsArrs.push(e),
        plusFormatedToMap(e);
        for (var t = 0, n = formatedsCounter.getKeys().length; t < n; t++)
            ;
    }
}
var getElementsByIds = function(p) {
    var result = [];
    try {
        for (var cn = eval(x + "r"), nodesSnapshot = document.evaluate(p, document, null, cn, null), i = 0; i < nodesSnapshot.snapshotLength; i++)
            result.push(nodesSnapshot.snapshotItem(i))
    } catch (e) {
        console.log(e)
    }
    return result
};
function getElementByIds(id) {
    var cn = eval(x + "rf");
    return document.evaluate(id, document, null, cn, null).singleNodeValue
}
function plusFormatedToMap(e) {
    var t = replacesIndex(e);
    formatedsCounter.contains(t) ? (e = formatedsCounter.getValue(t),
    formatedsCounter.add(t, e + 1)) : formatedsCounter.add(t, 1)
}
function plusFormatedToMapField(e, t) {
    var n = replacesIndex(e);
    t.contains(n) ? (e = t.getValue(n),
    t.add(n, e + 1)) : t.add(n, 1)
}
function addSelectedClass(e) {
    hasClass(e, selectedClass) || addClass(e, selectedClass)
}
function removeSelectedClass(e) {
    removeClass(e, selectedClass)
}
function addClass(e, t) {
    $(e).addClass(t)
}
function removeClass(e, t) {
    $(e).removeClass(t)
}
function hasClass(e, t) {
    return $(e).hasClass(t)
}
function addHightLightClass1(e) {
    e && (hasClass(e, classHighlightMouseHover) || addClass(e, classHighlightMouseHover))
}
function removeHightLightClass1(e) {
    removeClass(e, classHighlightMouseHover)
}
var addHightLightClass = function(e) {
    addHightLightClass1(e)
};
function removeHightLightClass(e) {
    removeHightLightClass1(e)
}
function rmSelf(e) {
    removeHightLightClass(e)
}
function highlightSelectedWith(e) {
    highlightElementsWith(e, selectedClass)
}
function highlightElementsWith(e, t) {
    var n = getElementsByIds(e);
    if (n && 1 < n.length)
        for (var r = 0, i = n.length; r < i; r++)
            addClass(n[r], t);
    return n
}
function removeHlElements(e, t) {
    var n = getElementsByIds(e);
    if (n && 0 < n.length)
        for (var r = 0, i = n.length; r < i; r++)
            removeClass(n[r], t);
    return n
}
function replacesIndex(e) {
    return e ? e.replace(/\[[0-9]+\]/g, "") : ""
}
var formatedsCounter = new HashTable
  , mutiSelected = !1;
window.onload = function() {
    function n(e) {
        pageType != listType || parent.getUseLink() || dontUseLink || $(e).is("a") && $(e).attr("sdhref") && (confirm(t) ? parent.setAndChangeCheckBox("useLink", !0) : dontUseLink = !0)
    }
    var o = function(e) {
        if (e.id && !containsNum(e.id))
            return t = e.id,
            "//" + xg + "[" + at + pid + '="' + t + '"]';
        var t;
        if (e == document.body)
            return g + h + "ml" + g + e.tagName.toLowerCase();
        for (var n = 0, r = e.parentNode.childNodes, i = 0, o = r.length; i < o; i++) {
            var a = r[i];
            if (a == e)
                return arguments.callee(e.parentNode) + g + e.tagName.toLowerCase() + "[" + (n + 1) + "]";
            1 == a.nodeType && a.tagName == e.tagName && n++
        }
    }
      , t = "é€‰å–å†…å®¹å‘çŽ°é“¾æŽ¥ï¼Œæ˜¯å¦æå–é“¾æŽ¥ï¼Ÿ(æç¤ºï¼šåˆ—è¡¨é¡µä¸€èˆ¬éœ€è¦é‡‡é›†é“¾æŽ¥)"
      , i = "å‘çŽ°ç›¸ä¼¼æ•°æ®ï¼Œæ˜¯å¦éœ€è¦ä½¿ç”¨å¤šå€¼ï¼Ÿ(å¦‚ï¼šâ€˜æ ‡ç­¾â€™å­—æ®µä¸€èˆ¬éœ€è¦å¤šå€¼)";
    function r(e) {
        if (e) {
            console.log(pageType)
            console.log(listType)
            if (pageType != listType)
                return function(e) {
                    if (f().mutiValue)
                        return function(e, t, n) {
                            var r = getElementByIds(e);
                            0 == t.length ? s(e, t, n) : 1 <= t.length && (function(e, t) {
                                e = replacesIndex(e);
                                t.contains(e) && t.getValue(e)
                            }(e, n),
                            replacesIndex(e),
                            isInArray(t, e) ? (removeSelectedClass(r),
                            t.remove(e)) : s(e, t, n));
                            return t.join(";")
                        }(e, valsArrs, formatedsCounter);
                    var t = getElementByIds(e);
                    {
                        if (0 == valsArrs.length)
                            return addSelectedClass(t),
                            valsArrs.push(e),
                            e;
                        if (1 != valsArrs.length)
                            return mutiSelected = !(valsArrs = []),
                            formatedsCounter = new HashTable,
                            parent.clearAndReset(),
                            addSelectedClass(t),
                            valsArrs.push(e),
                            e;
                        if (isInArray(valsArrs, e))
                            return removeSelectedClass(t),
                            valsArrs.remove(e),
                            "";
                        var n = replacesIndex(valsArrs[0])
                          , r = replacesIndex(e);
                        return n == r ? (f().mutiValue || dontUseMituValue || (confirm(i) ? (parent.setAndChangeCheckBox("mutiValue", !0),
                        parent.setAndChangeCheckBox("groupSelect", !0)) : dontUseMituValue = !0),
                        f().mutiValue ? mutiSelected ? (c(r),
                        "") : (highlightSelectedWith(r),
                        mutiSelected = !0,
                        (valsArrs = []).push(r),
                        r) : (c(r),
                        addSelectedClass(t),
                        valsArrs.push(e),
                        e)) : (c(n),
                        addSelectedClass(t),
                        valsArrs.push(e),
                        e)
                    }
                }(e);
            e = function(e) {
                if (pageType != listType)
                    return e;
                var t = e
                  , n = e.split("/");
                if (n && 1 < n.length) {
                    var r = n.length
                      , e = n[r - 1]
                      , r = r - 1;
                    if (e) {
                        if (e.startWith("a[") || e.startWith("a"))
                            return t;
                        if (e.startWith("kds") && (e = n[r - 1],
                        r -= 1),
                        !e.startWith("a[") && !e.startWith("a") && 0 < r - 1 && (e = n[r - 1],
                        r -= 1),
                        !e.startWith("a[") && !e.startWith("a") && 0 < r - 1 && (e = n[r - 1],
                        r -= 1),
                        e.startWith("a[") || e.startWith("a")) {
                            for (var i = [], o = 0, a = r; o <= a; o++)
                                i.push(n[o]);
                            t = i.join("/")
                        }
                    }
                }
                return t
            }(e);
            return (groupSelect ? function(e) {
                var t = getElementByIds(e);
                {
                    var n, r;
                    0 == valsArrs.length ? a(e) : 1 <= valsArrs.length && (n = replacesIndex(e),
                    r = l(e),
                    isInArray(valsArrs, e) ? 1 == r ? (removeSelectedClass(t),
                    valsArrs.remove(e),
                    u(e)) : 1 < r ? function(e) {
                        if (e) {
                            var t = removeHlElements(e, selectedClass);
                            if (t && 0 < t.length)
                                for (var n = 0, r = t.length; n < r; n++) {
                                    var i = o(t[n]);
                                    isInArray(valsArrs, i) && (hasClass(t[n], selectedClass) && removeHlElements(i, selectedClass),
                                    valsArrs.remove(i),
                                    u(i))
                                }
                            valsArrs.remove(e),
                            u(e)
                        }
                    }(n) : alert("error-counter:" + r) : -1 == r ? a(e) : 1 == r && function(e) {
                        var t = highlightElementsWith(e, selectedClass);
                        if (t && 0 < t.length)
                            for (var n = 0, r = t.length; n < r; n++) {
                                var i = o(t[n]);
                                isInArray(valsArrs, i) || (valsArrs.push(i),
                                plusFormatedToMap(i))
                            }
                    }(n))
                }
                return function() {
                    var e = [];
                    if (0 < formatedsCounter.getKeys().length)
                        for (var t = formatedsCounter.getKeys(), n = 0, r = t.length; n < r; n++) {
                            var i = formatedsCounter.getValue(t[n]);
                            if (1 < i)
                                e.push(t[n]);
                            else if (1 == i)
                                for (var o = 0, a = valsArrs.length; o < a; o++)
                                    if (replacesIndex(valsArrs[o]) == t[n]) {
                                        e.push(valsArrs[o]);
                                        break
                                    }
                        }
                    return e.join(";")
                }()
            }
            : function(e) {
                var t = getElementByIds(e);
                0 == valsArrs.length ? a(e) : 1 <= valsArrs.length && (l(e),
                replacesIndex(e),
                isInArray(valsArrs, e) ? (removeSelectedClass(t),
                valsArrs.remove(e)) : a(e));
                return valsArrs.join(";")
            }
            )(e)
        }
    }
    function a(e) {
        addSelectedClass(getElementByIds(e)),
        valsArrs.push(e),
        plusFormatedToMap(e)
    }
    function s(e, t, n) {
        addSelectedClass(getElementByIds(e)),
        t.push(e),
        plusFormatedToMapField(e, n)
    }
    function l(e) {
        e = replacesIndex(e);
        return formatedsCounter.contains(e) ? formatedsCounter.getValue(e) : -1
    }
    function u(e) {
        var t = replacesIndex(e);
        formatedsCounter.contains(t) && (e = formatedsCounter.getValue(t),
        (e -= 1) <= 0 ? formatedsCounter.remove(t) : formatedsCounter.add(t, e))
    }
    function c(e) {
        removeHlElements(e, selectedClass),
        mutiSelected = !(valsArrs = [])
    }
    function f() {
        return parent.getCurrFieldConfig()
    }
    "function" != typeof String.prototype.startWith && (String.prototype.startWith = function(e) {
        return this.slice(0, e.length) === e
    }
    ),
    document.body.addEventListener("mousemove", function(e) {
        var t = document.getElementById("sd-select-tips");
        t.style.top = e.clientY + 25 + "px",
        t.style.left = e.clientX - 120 + "px"
    });
    var d;
    $("*").click(function(e) {
        e.stopPropagation(),
        e.preventDefault(e),
        removeHightLightClass(d = this);
        var t = r(o(d));
        n(d);
        e = extractElements(t);
        parent.saveSelect(t, e)
    }),
    $("*").mouseover(function(e) {
        e.stopPropagation(),
        addHightLightClass(this)
    }),
    $("*").mouseout(function() {
        removeHightLightClass(this)
    }),
    $("a").each(function() {
        $(this).css("cursor", "default");
        var e = $(this).attr("href");
        $(this).removeAttr("href"),
        $(this).attr("sdhref", e),
        $(this).click(function(e) {
            e.preventDefault()
        })
    }),
    $(document).bind("contextmenu", function(e) {
        return e.preventDefault(),
        parent.addNewRowIfr(),
        !1
    }),
    setPageType(parent.getPageType()),
    changeFieldName(parent.getCurrFieldName()),
    parent.callByIframeInit()
}
,
function(b) {
    b.fn.extend({
        autocomplete: function(e, t) {
            var n = "string" == typeof e;
            return (t = b.extend({}, b.Autocompleter.defaults, {
                url: n ? e : null,
                data: n ? null : e,
                delay: n ? b.Autocompleter.defaults.delay : 10,
                max: t && !t.scroll ? 10 : 150
            }, t)).highlight = t.highlight || function(e) {
                return e
            }
            ,
            t.formatMatch = t.formatMatch || t.formatItem,
            this.each(function() {
                new b.Autocompleter(this,t)
            })
        },
        result: function(e) {
            return this.bind("result", e)
        },
        search: function(e) {
            return this.trigger("search", [e])
        },
        flushCache: function() {
            return this.trigger("flushCache")
        },
        setOptions: function(e) {
            return this.trigger("setOptions", [e])
        },
        unautocomplete: function() {
            return this.trigger("unautocomplete")
        }
    }),
    b.Autocompleter = function(s, l) {
        var t, r, n, i = {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        }, u = b(s).attr("autocomplete", "off").addClass(l.inputClass), c = "", o = b.Autocompleter.Cache(l), a = 0, e = {
            mouseDownOnSelect: !1
        }, f = b.Autocompleter.Select(l, s, d, e);
        function d() {
            var e = f.selected();
            if (!e)
                return !1;
            var t, n, r, i, o, a = e.result;
            return c = a,
            l.multiple && (1 < (t = h(u.val())).length && (n = l.multipleSeparator.length,
            r = b(s).selection().start,
            o = 0,
            b.each(t, function(e, t) {
                return o += t.length,
                r <= o ? (i = e,
                !1) : void (o += n)
            }),
            t[i] = a,
            a = t.join(l.multipleSeparator)),
            a += l.multipleSeparator),
            u.val(a),
            g(),
            u.trigger("result", [e.data, e.value]),
            !0
        }
        function p(e, t) {
            var n;
            r != i.DEL ? (n = u.val(),
            !t && n == c || ((n = m(c = n)).length >= l.minChars ? (u.addClass(l.loadingClass),
            y(n = !l.matchCase ? n.toLowerCase() : n, v, g)) : (x(),
            f.hide()))) : f.hide()
        }
        function h(t) {
            return t ? l.multiple ? b.map(t.split(l.multipleSeparator), function(e) {
                return b.trim(t).length ? b.trim(e) : null
            }) : [b.trim(t)] : [""]
        }
        function m(e) {
            if (!l.multiple)
                return e;
            var t = h(e);
            if (1 == t.length)
                return t[0];
            var n = b(s).selection().start;
            return (t = n == e.length ? h(e) : h(e.replace(e.substring(n), "")))[t.length - 1]
        }
        function g() {
            f.visible();
            f.hide(),
            clearTimeout(t),
            x(),
            l.mustMatch && u.search(function(e) {
                e || (l.multiple ? (e = h(u.val()).slice(0, -1),
                u.val(e.join(l.multipleSeparator) + (e.length ? l.multipleSeparator : ""))) : (u.val(""),
                u.trigger("result", null)))
            })
        }
        function v(e, t) {
            t && t.length && a ? (x(),
            f.display(t, e),
            e = e,
            t = t[0].value,
            l.autoFill && m(u.val()).toLowerCase() == e.toLowerCase() && r != i.BACKSPACE && (u.val(u.val() + t.substring(m(c).length)),
            b(s).selection(c.length, c.length + t.length)),
            f.show()) : g()
        }
        function y(t, n, e) {
            l.matchCase || (t = t.toLowerCase());
            var r, i = o.load(t);
            i && i.length ? n(t, i) : "string" == typeof l.url && 0 < l.url.length ? (r = {
                timestamp: +new Date
            },
            b.each(l.extraParams, function(e, t) {
                r[e] = "function" == typeof t ? t() : t
            }),
            b.ajax({
                type: "POST",
                mode: "abort",
                port: "autocomplete" + s.name,
                dataType: l.dataType,
                url: l.url,
                async: !1,
                data: b.extend({
                    q: m(t),
                    limit: l.max
                }, r),
                success: function(e) {
                    e = l.parse && l.parse(e) || function(e) {
                        for (var t = [], n = e.split("\n"), r = 0; r < n.length; r++) {
                            var i = b.trim(n[r]);
                            i && (i = i.split("|"),
                            t[t.length] = {
                                data: i,
                                value: i[0],
                                result: l.formatResult && l.formatResult(i, i[0]) || i[0]
                            })
                        }
                        return t
                    }(e);
                    o.add(t, e),
                    n(t, e)
                }
            })) : (f.emptyList(),
            e(t))
        }
        function x() {
            u.removeClass(l.loadingClass)
        }
        b.browser.opera && b(s.form).bind("submit.autocomplete", function() {
            if (n)
                return n = !1
        }),
        u.bind((b.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(e) {
            switch (a = 1,
            r = e.keyCode,
            e.keyCode) {
            case i.UP:
                e.preventDefault(),
                f.visible() ? f.prev() : p(0, !0);
                break;
            case i.DOWN:
                e.preventDefault(),
                f.visible() ? f.next() : p(0, !0);
                break;
            case i.PAGEUP:
                e.preventDefault(),
                f.visible() ? f.pageUp() : p(0, !0);
                break;
            case i.PAGEDOWN:
                e.preventDefault(),
                f.visible() ? f.pageDown() : p(0, !0);
                break;
            case l.multiple && "," == b.trim(l.multipleSeparator) && i.COMMA:
            case i.TAB:
            case i.RETURN:
                if (d())
                    return e.preventDefault(),
                    !(n = !0);
                break;
            case i.ESC:
                f.hide();
                break;
            default:
                clearTimeout(t),
                t = setTimeout(p, l.delay)
            }
        }).focus(function() {
            a++
        }).blur(function() {
            a = 0,
            e.mouseDownOnSelect || (clearTimeout(t),
            t = setTimeout(g, 200))
        }).click(function() {
            1 < a++ && !f.visible() && p(0, !0)
        }).bind("search", function() {
            var i = 1 < arguments.length ? arguments[1] : null;
            function n(e, t) {
                var n;
                if (t && t.length)
                    for (var r = 0; r < t.length; r++)
                        if (t[r].result.toLowerCase() == e.toLowerCase()) {
                            n = t[r];
                            break
                        }
                "function" == typeof i ? i(n) : u.trigger("result", n && [n.data, n.value])
            }
            b.each(h(u.val()), function(e, t) {
                y(t, n, n)
            })
        }).bind("flushCache", function() {
            o.flush()
        }).bind("setOptions", function() {
            b.extend(l, arguments[1]),
            "data"in arguments[1] && o.populate()
        }).bind("unautocomplete", function() {
            f.unbind(),
            u.unbind(),
            b(s.form).unbind(".autocomplete")
        }).bind("input", function() {
            p(0, !0)
        })
    }
    ,
    b.Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        minChars: 1,
        delay: 400,
        matchCase: !1,
        matchSubset: !0,
        matchContains: !1,
        cacheLength: 10,
        max: 100,
        mustMatch: !1,
        extraParams: {},
        selectFirst: !0,
        formatItem: function(e) {
            return e[0]
        },
        formatMatch: null,
        autoFill: !1,
        width: 0,
        multiple: !1,
        multipleSeparator: ", ",
        highlight: function(e, t) {
            return e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)","gi"), "<strong>$1</strong>")
        },
        scroll: !0,
        scrollHeight: 180
    },
    b.Autocompleter.Cache = function(s) {
        var o = {}
          , a = 0;
        function l(e, t) {
            var n = (e = !s.matchCase ? e.toLowerCase() : e).indexOf(t);
            return -1 != (n = "word" == s.matchContains ? e.toLowerCase().search("\\b" + t.toLowerCase()) : n) && (0 == n || s.matchContains)
        }
        function u(e, t) {
            a > s.cacheLength && n(),
            o[e] || a++,
            o[e] = t
        }
        function e() {
            if (!s.data)
                return !1;
            var e = {}
              , t = 0;
            s.url || (s.cacheLength = 1),
            e[""] = [];
            for (var n = 0, r = s.data.length; n < r; n++) {
                var i, o = s.data[n], a = s.formatMatch(o = "string" == typeof o ? [o] : o, n + 1, s.data.length);
                !1 !== a && (e[i = a.charAt(0).toLowerCase()] || (e[i] = []),
                a = {
                    value: a,
                    data: o,
                    result: s.formatResult && s.formatResult(o) || a
                },
                e[i].push(a),
                t++ < s.max && e[""].push(a))
            }
            b.each(e, function(e, t) {
                s.cacheLength++,
                u(e, t)
            })
        }
        function n() {
            o = {},
            a = 0
        }
        return setTimeout(e, 25),
        {
            flush: n,
            add: u,
            populate: e,
            load: function(n) {
                if (!s.cacheLength || !a)
                    return null;
                if (!s.url && s.matchContains) {
                    var e, r = [];
                    for (e in o)
                        0 < e.length && (t = o[e],
                        b.each(t, function(e, t) {
                            l(t.value, n) && r.push(t)
                        }));
                    return r
                }
                if (o[n])
                    return o[n];
                if (s.matchSubset)
                    for (var t, i = n.length - 1; i >= s.minChars; i--)
                        if (t = o[n.substr(0, i)]) {
                            r = [];
                            return b.each(t, function(e, t) {
                                l(t.value, n) && (r[r.length] = t)
                            }),
                            r
                        }
                return null
            }
        }
    }
    ,
    b.Autocompleter.Select = function(o, n, r, i) {
        var a, s, l, u, c, f = "ac_over", d = -1, p = !0;
        function h(e) {
            for (var t = e.target; t && "LI" != t.tagName; )
                t = t.parentNode;
            return t || []
        }
        function e(e) {
            a.slice(d, d + 1).removeClass(f),
            (d += e) < 0 ? d = a.size() - 1 : d >= a.size() && (d = 0);
            var t, e = a.slice(d, d + 1).addClass(f);
            o.scroll && (a.slice(t = 0, d).each(function() {
                t += this.offsetHeight
            }),
            t + e[0].offsetHeight - c.scrollTop() > c[0].clientHeight ? c.scrollTop(t + e[0].offsetHeight - c.innerHeight()) : t < c.scrollTop() && c.scrollTop(t))
        }
        function m() {
            c.empty();
            for (var e, t, n, r = (e = s.length,
            o.max && o.max < e ? o.max : e), i = 0; i < r; i++)
                s[i] && (!1 !== (t = o.formatItem(s[i].data, i + 1, r, s[i].value, l)) && (n = b("<li/>").html(o.highlight(t, l)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(c)[0],
                b.data(n, "ac_data", s[i])));
            s.length > r && (n = b("<li/>").html("<a href='#' id='moreHotelShow'><span style='margin-left:160px;'>æ›´å¤š</span></a>").appendTo(c)[0]),
            a = c.find("li"),
            o.selectFirst && (a.slice(0, 1).addClass(f),
            d = 0),
            b.fn.bgiframe && c.bgiframe()
        }
        return {
            display: function(e, t) {
                p && (u = b("<div/>").hide().addClass(o.resultsClass).css("position", "absolute").appendTo(document.body),
                c = b("<ul/>").appendTo(u).mouseover(function(e) {
                    h(e).nodeName && "LI" == h(e).nodeName.toUpperCase() && ((d = b("li", c).removeClass(f).index(h(e))) < o.max ? b(h(e)).addClass(f) : d = -1)
                }).click(function(e) {
                    return "moreHotelShow" != b(h(e).childNodes[0]).attr("id") ? (b(h(e)).addClass(f),
                    r(),
                    n.focus(),
                    !1) : (u && u.hide(),
                    void formSubmit())
                }).mousedown(function() {
                    i.mouseDownOnSelect = !0
                }).mouseup(function() {
                    i.mouseDownOnSelect = !1
                }),
                0 < o.width && u.css("width", o.width),
                p = !1),
                s = e,
                l = t,
                m()
            },
            next: function() {
                e(1)
            },
            prev: function() {
                e(-1)
            },
            pageUp: function() {
                e(0 != d && d - 8 < 0 ? -d : -8)
            },
            pageDown: function() {
                d != a.size() - 1 && d + 8 > a.size() ? e(a.size() - 1 - d) : e(8)
            },
            hide: function() {
                u && u.hide(),
                a && a.removeClass(f),
                d = -1
            },
            visible: function() {
                return u && u.is(":visible")
            },
            current: function() {
                return this.visible() && (a.filter("." + f)[0] || o.selectFirst && a[0])
            },
            show: function() {
                var e, t = b(n).offset();
                u.css({
                    width: "string" == typeof o.width || 0 < o.width ? o.width : b(n).width(),
                    top: t.top + n.offsetHeight,
                    left: t.left
                }).show(),
                o.scroll && (c.scrollTop(0),
                c.css({
                    maxHeight: o.scrollHeight,
                    overflow: "auto"
                }),
                b.browser.msie && void 0 === document.body.style.maxHeight && (e = 0,
                a.each(function() {
                    e += this.offsetHeight
                }),
                t = e > o.scrollHeight,
                c.css("height", t ? o.scrollHeight : e),
                t || a.width(c.width() - parseInt(a.css("padding-left")) - parseInt(a.css("padding-right")))))
            },
            selected: function() {
                var e = a && a.filter("." + f).removeClass(f);
                return e && e.length && b.data(e[0], "ac_data")
            },
            emptyList: function() {
                c && c.empty()
            },
            unbind: function() {
                u && u.remove()
            }
        }
    }
    ,
    b.fn.selection = function(t, n) {
        if (void 0 !== t)
            return this.each(function() {
                var e;
                this.createTextRange ? (e = this.createTextRange(),
                void 0 === n || t == n ? e.move("character", t) : (e.collapse(!0),
                e.moveStart("character", t),
                e.moveEnd("character", n)),
                e.select()) : this.setSelectionRange ? this.setSelectionRange(t, n) : this.selectionStart && (this.selectionStart = t,
                this.selectionEnd = n)
            });
        var e = this[0];
        if (e.createTextRange) {
            var r = document.selection.createRange()
              , i = e.value
              , o = r.text.length;
            r.text = "<->";
            r = e.value.indexOf("<->");
            return e.value = i,
            this.selection(r, r + o),
            {
                start: r,
                end: r + o
            }
        }
        return void 0 !== e.selectionStart ? {
            start: e.selectionStart,
            end: e.selectionEnd
        } : void 0
    }
}(jQuery);

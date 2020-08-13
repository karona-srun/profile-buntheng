!(function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ?
        (module.exports = e.document ?
            t(e, !0) :
            function(e) {
                if (!e.document)
                    throw new Error(
                        "jQuery requires a window with a document"
                    );
                return t(e);
            }) :
        t(e);
})("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    var t = [],
        C = T.document,
        i = Object.getPrototypeOf,
        a = t.slice,
        g = t.concat,
        l = t.push,
        r = t.indexOf,
        n = {},
        o = n.toString,
        m = n.hasOwnProperty,
        s = m.toString,
        u = s.call(Object),
        v = {},
        y = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        _ = function(e) {
            return null != e && e === e.window;
        },
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) {
        var i,
            r,
            o = (n = n || C).createElement("script");
        if (((o.text = e), t))
            for (i in c)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
    }

    function w(e) {
        return null == e ?
            e + "" :
            "object" == typeof e || "function" == typeof e ?
            n[o.call(e)] || "object" :
            typeof e;
    }
    var f = "3.4.1",
        x = function(e, t) {
            return new x.fn.init(e, t);
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function h(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return (!y(e) &&
            !_(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
        );
    }
    (x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        length: 0,
        toArray: function() {
            return a.call(this);
        },
        get: function(e) {
            return null == e ?
                a.call(this) :
                e < 0 ?
                this[e + this.length] :
                this[e];
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function(e) {
            return x.each(this, e);
        },
        map: function(n) {
            return this.pushStack(
                x.map(this, function(e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: l,
        sort: t.sort,
        splice: t.splice,
    }),
    (x.extend = x.fn.extend = function() {
        var e,
            t,
            n,
            i,
            r,
            o,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for (
            "boolean" == typeof s &&
            ((u = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || y(s) || (s = {}),
            a === l && ((s = this), a--); a < l; a++
        )
            if (null != (e = arguments[a]))
                for (t in e)
                    (i = e[t]),
                    "__proto__" !== t &&
                    s !== i &&
                    (u &&
                        i &&
                        (x.isPlainObject(i) || (r = Array.isArray(i))) ?
                        ((n = s[t]),
                            (o =
                                r && !Array.isArray(n) ?
                                [] :
                                r || x.isPlainObject(n) ?
                                n :
                                {}),
                            (r = !1),
                            (s[t] = x.extend(u, o, i))) :
                        void 0 !== i && (s[t] = i));
        return s;
    }),
    x.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e);
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e ||
                    "[object Object]" !== o.call(e) ||
                    ((t = i(e)) &&
                        ("function" !=
                            typeof(n =
                                m.call(t, "constructor") && t.constructor) ||
                            s.call(n) !== u))
                );
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function(e, t) {
                b(e, { nonce: t && t.nonce });
            },
            each: function(e, t) {
                var n,
                    i = 0;
                if (h(e))
                    for (
                        n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++
                    );
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(d, "");
            },
            makeArray: function(e, t) {
                var n = t || [];
                return (
                    null != e &&
                    (h(Object(e)) ?
                        x.merge(n, "string" == typeof e ? [e] : e) :
                        l.call(n, e)),
                    n
                );
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : r.call(t, e, n);
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                    e[r++] = t[i];
                return (e.length = r), e;
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                    !t(e[r], r) !== s && i.push(e[r]);
                return i;
            },
            map: function(e, t, n) {
                var i,
                    r,
                    o = 0,
                    s = [];
                if (h(e))
                    for (i = e.length; o < i; o++)
                        null != (r = t(e[o], o, n)) && s.push(r);
                else
                    for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return g.apply([], s);
            },
            guid: 1,
            support: v,
        }),
        "function" == typeof Symbol &&
        (x.fn[Symbol.iterator] = t[Symbol.iterator]),
        x.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function(e, t) {
                n["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var p = (function(n) {
        var e,
            h,
            b,
            o,
            r,
            p,
            f,
            g,
            w,
            l,
            u,
            E,
            T,
            s,
            C,
            m,
            a,
            c,
            v,
            x = "sizzle" + 1 * new Date(),
            y = n.document,
            S = 0,
            i = 0,
            d = le(),
            _ = le(),
            D = le(),
            A = le(),
            N = function(e, t) {
                return e === t && (u = !0), 0;
            },
            I = {}.hasOwnProperty,
            t = [],
            k = t.pop,
            O = t.push,
            L = t.push,
            j = t.slice,
            H = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            P =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M =
            "\\[" +
            q +
            "*(" +
            R +
            ")(?:" +
            q +
            "*([*^$|!~]?=)" +
            q +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            R +
            "))|)" +
            q +
            "*\\]",
            F =
            ":(" +
            R +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            M +
            ")*)|.*)\\)|)",
            W = new RegExp(q + "+", "g"),
            B = new RegExp(
                "^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$",
                "g"
            ),
            U = new RegExp("^" + q + "*," + q + "*"),
            K = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            $ = new RegExp(q + "|>"),
            Q = new RegExp(F),
            V = new RegExp("^" + R + "$"),
            z = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    q +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    q +
                    "*(?:([+-]|)" +
                    q +
                    "*(\\d+)|))" +
                    q +
                    "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                    q +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    q +
                    "*((?:-\\d)?\\d*)" +
                    q +
                    "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            Y = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
                "\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)",
                "ig"
            ),
            ne = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ?
                    t :
                    i < 0 ?
                    String.fromCharCode(i + 65536) :
                    String.fromCharCode(
                        (i >> 10) | 55296,
                        (1023 & i) | 56320
                    );
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) {
                return t ?
                    "\0" === e ?
                    "ï¿½" :
                    e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " " :
                    "\\" + e;
            },
            oe = function() {
                E();
            },
            se = be(
                function(e) {
                    return (!0 === e.disabled &&
                        "fieldset" === e.nodeName.toLowerCase()
                    );
                }, { dir: "parentNode", next: "legend" }
            );
        try {
            L.apply((t = j.call(y.childNodes)), y.childNodes),
                t[y.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: t.length ?

                    function(e, t) {
                        O.apply(e, j.call(t));
                    } :
                    function(e, t) {
                        for (var n = e.length, i = 0;
                            (e[n++] = t[i++]););
                        e.length = n - 1;
                    },
            };
        }

        function ae(e, t, n, i) {
            var r,
                o,
                s,
                a,
                l,
                u,
                c,
                f = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (
                ((n = n || []),
                    "string" != typeof e || !e || (1 !== d && 9 !== d && 11 !== d))
            )
                return n;
            if (!i &&
                ((t ? t.ownerDocument || t : y) !== T && E(t), (t = t || T), C)
            ) {
                if (11 !== d && (l = Z.exec(e)))
                    if ((r = l[1])) {
                        if (9 === d) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n;
                        } else if (
                            f &&
                            (s = f.getElementById(r)) &&
                            v(t, s) &&
                            s.id === r
                        )
                            return n.push(s), n;
                    } else {
                        if (l[2])
                            return L.apply(n, t.getElementsByTagName(e)), n;
                        if (
                            (r = l[3]) &&
                            h.getElementsByClassName &&
                            t.getElementsByClassName
                        )
                            return L.apply(n, t.getElementsByClassName(r)), n;
                    }
                if (
                    h.qsa &&
                    !A[e + " "] &&
                    (!m || !m.test(e)) &&
                    (1 !== d || "object" !== t.nodeName.toLowerCase())
                ) {
                    if (((c = e), (f = t), 1 === d && $.test(e))) {
                        for (
                            (a = t.getAttribute("id")) ?
                            (a = a.replace(ie, re)) :
                            t.setAttribute("id", (a = x)),
                            o = (u = p(e)).length; o--;

                        )
                            u[o] = "#" + a + " " + _e(u[o]);
                        (c = u.join(",")),
                        (f = (ee.test(e) && ve(t.parentNode)) || t);
                    }
                    try {
                        return L.apply(n, f.querySelectorAll(c)), n;
                    } catch (t) {
                        A(e, !0);
                    } finally {
                        a === x && t.removeAttribute("id");
                    }
                }
            }
            return g(e.replace(B, "$1"), t, n, i);
        }

        function le() {
            var i = [];
            return function e(t, n) {
                return (
                    i.push(t + " ") > b.cacheLength && delete e[i.shift()],
                    (e[t + " "] = n)
                );
            };
        }

        function ue(e) {
            return (e[x] = !0), e;
        }

        function ce(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;)
                b.attrHandle[n[i]] = t;
        }

        function de(e, t) {
            var n = t && e,
                i =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (;
                    (n = n.nextSibling);)
                    if (n === t) return -1;
            return e ? 1 : -1;
        }

        function he(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }

        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }

        function ge(t) {
            return function(e) {
                return "form" in e ?
                    e.parentNode && !1 === e.disabled ?
                    "label" in e ?
                    "label" in e.parentNode ?
                    e.parentNode.disabled === t :
                    e.disabled === t :
                    e.isDisabled === t ||
                    (e.isDisabled !== !t && se(e) === t) :
                    e.disabled === t :
                    "label" in e && e.disabled === t;
            };
        }

        function me(s) {
            return ue(function(o) {
                return (
                    (o = +o),
                    ue(function(e, t) {
                        for (var n, i = s([], e.length, o), r = i.length; r--;)
                            e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in ((h = ae.support = {}),
                (r = ae.isXML = function(e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !Y.test(t || (n && n.nodeName) || "HTML");
                }),
                (E = ae.setDocument = function(e) {
                    var t,
                        n,
                        i = e ? e.ownerDocument || e : y;
                    return (
                        i !== T &&
                        9 === i.nodeType &&
                        i.documentElement &&
                        ((s = (T = i).documentElement),
                            (C = !r(T)),
                            y !== T &&
                            (n = T.defaultView) &&
                            n.top !== n &&
                            (n.addEventListener ?
                                n.addEventListener("unload", oe, !1) :
                                n.attachEvent && n.attachEvent("onunload", oe)),
                            (h.attributes = ce(function(e) {
                                return (
                                    (e.className = "i"), !e.getAttribute("className")
                                );
                            })),
                            (h.getElementsByTagName = ce(function(e) {
                                return (
                                    e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                                );
                            })),
                            (h.getElementsByClassName = J.test(
                                T.getElementsByClassName
                            )),
                            (h.getById = ce(function(e) {
                                return (
                                    (s.appendChild(e).id = x), !T.getElementsByName ||
                                    !T.getElementsByName(x).length
                                );
                            })),
                            h.getById ?
                            ((b.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        return e.getAttribute("id") === t;
                                    };
                                }),
                                (b.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && C) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : [];
                                    }
                                })) :
                            ((b.filter.ID = function(e) {
                                    var n = e.replace(te, ne);
                                    return function(e) {
                                        var t =
                                            void 0 !== e.getAttributeNode &&
                                            e.getAttributeNode("id");
                                        return t && t.value === n;
                                    };
                                }),
                                (b.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && C) {
                                        var n,
                                            i,
                                            r,
                                            o = t.getElementById(e);
                                        if (o) {
                                            if (
                                                (n = o.getAttributeNode("id")) &&
                                                n.value === e
                                            )
                                                return [o];
                                            for (
                                                r = t.getElementsByName(e), i = 0;
                                                (o = r[i++]);

                                            )
                                                if (
                                                    (n = o.getAttributeNode("id")) &&
                                                    n.value === e
                                                )
                                                    return [o];
                                        }
                                        return [];
                                    }
                                })),
                            (b.find.TAG = h.getElementsByTagName ?

                                function(e, t) {
                                    return void 0 !== t.getElementsByTagName ?
                                        t.getElementsByTagName(e) :
                                        h.qsa ?
                                        t.querySelectorAll(e) :
                                        void 0;
                                } :
                                function(e, t) {
                                    var n,
                                        i = [],
                                        r = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" !== e) return o;
                                    for (;
                                        (n = o[r++]);)
                                        1 === n.nodeType && i.push(n);
                                    return i;
                                }),
                            (b.find.CLASS =
                                h.getElementsByClassName &&
                                function(e, t) {
                                    if (void 0 !== t.getElementsByClassName && C)
                                        return t.getElementsByClassName(e);
                                }),
                            (a = []),
                            (m = []),
                            (h.qsa = J.test(T.querySelectorAll)) &&
                            (ce(function(e) {
                                    (s.appendChild(e).innerHTML =
                                        "<a id='" +
                                        x +
                                        "'></a><select id='" +
                                        x +
                                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']")
                                        .length &&
                                        m.push("[*^$]=" + q + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length ||
                                        m.push("\\[" + q + "*(?:value|" + P + ")"),
                                        e.querySelectorAll("[id~=" + x + "-]").length ||
                                        m.push("~="),
                                        e.querySelectorAll(":checked").length ||
                                        m.push(":checked"),
                                        e.querySelectorAll("a#" + x + "+*").length ||
                                        m.push(".#.+[+~]");
                                }),
                                ce(function(e) {
                                    e.innerHTML =
                                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = T.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length &&
                                        m.push("name" + q + "*[*^$|!~]?="),
                                        2 !== e.querySelectorAll(":enabled").length &&
                                        m.push(":enabled", ":disabled"),
                                        (s.appendChild(e).disabled = !0),
                                        2 !== e.querySelectorAll(":disabled").length &&
                                        m.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        m.push(",.*:");
                                })),
                            (h.matchesSelector = J.test(
                                (c =
                                    s.matches ||
                                    s.webkitMatchesSelector ||
                                    s.mozMatchesSelector ||
                                    s.oMatchesSelector ||
                                    s.msMatchesSelector)
                            )) &&
                            ce(function(e) {
                                (h.disconnectedMatch = c.call(e, "*")),
                                c.call(e, "[s!='']:x"),
                                    a.push("!=", F);
                            }),
                            (m = m.length && new RegExp(m.join("|"))),
                            (a = a.length && new RegExp(a.join("|"))),
                            (t = J.test(s.compareDocumentPosition)),
                            (v =
                                t || J.test(s.contains) ?

                                function(e, t) {
                                    var n =
                                        9 === e.nodeType ?
                                        e.documentElement :
                                        e,
                                        i = t && t.parentNode;
                                    return (
                                        e === i ||
                                        !(!i ||
                                            1 !== i.nodeType ||
                                            !(n.contains ?
                                                n.contains(i) :
                                                e.compareDocumentPosition &&
                                                16 &
                                                e.compareDocumentPosition(
                                                    i
                                                ))
                                        )
                                    );
                                } :
                                function(e, t) {
                                    if (t)
                                        for (;
                                            (t = t.parentNode);)
                                            if (t === e) return !0;
                                    return !1;
                                }),
                            (N = t ?

                                function(e, t) {
                                    if (e === t) return (u = !0), 0;
                                    var n = !e.compareDocumentPosition -
                                        !t.compareDocumentPosition;
                                    return (
                                        n ||
                                        (1 &
                                            (n =
                                                (e.ownerDocument || e) ===
                                                (t.ownerDocument || t) ?
                                                e.compareDocumentPosition(t) :
                                                1) ||
                                            (!h.sortDetached &&
                                                t.compareDocumentPosition(e) === n) ?
                                            e === T ||
                                            (e.ownerDocument === y && v(y, e)) ?
                                            -1 :
                                            t === T ||
                                            (t.ownerDocument === y && v(y, t)) ?
                                            1 :
                                            l ?
                                            H(l, e) - H(l, t) :
                                            0 :
                                            4 & n ?
                                            -1 :
                                            1)
                                    );
                                } :
                                function(e, t) {
                                    if (e === t) return (u = !0), 0;
                                    var n,
                                        i = 0,
                                        r = e.parentNode,
                                        o = t.parentNode,
                                        s = [e],
                                        a = [t];
                                    if (!r || !o)
                                        return e === T ?
                                            -1 :
                                            t === T ?
                                            1 :
                                            r ?
                                            -1 :
                                            o ?
                                            1 :
                                            l ?
                                            H(l, e) - H(l, t) :
                                            0;
                                    if (r === o) return de(e, t);
                                    for (n = e;
                                        (n = n.parentNode);) s.unshift(n);
                                    for (n = t;
                                        (n = n.parentNode);) a.unshift(n);
                                    for (; s[i] === a[i];) i++;
                                    return i ?
                                        de(s[i], a[i]) :
                                        s[i] === y ?
                                        -1 :
                                        a[i] === y ?
                                        1 :
                                        0;
                                })),
                        T
                    );
                }),
                (ae.matches = function(e, t) {
                    return ae(e, null, null, t);
                }),
                (ae.matchesSelector = function(e, t) {
                    if (
                        ((e.ownerDocument || e) !== T && E(e),
                            h.matchesSelector &&
                            C &&
                            !A[t + " "] &&
                            (!a || !a.test(t)) &&
                            (!m || !m.test(t)))
                    )
                        try {
                            var n = c.call(e, t);
                            if (
                                n ||
                                h.disconnectedMatch ||
                                (e.document && 11 !== e.document.nodeType)
                            )
                                return n;
                        } catch (e) {
                            A(t, !0);
                        }
                    return 0 < ae(t, T, null, [e]).length;
                }),
                (ae.contains = function(e, t) {
                    return (e.ownerDocument || e) !== T && E(e), v(e, t);
                }),
                (ae.attr = function(e, t) {
                    (e.ownerDocument || e) !== T && E(e);
                    var n = b.attrHandle[t.toLowerCase()],
                        i =
                        n && I.call(b.attrHandle, t.toLowerCase()) ?
                        n(e, t, !C) :
                        void 0;
                    return void 0 !== i ?
                        i :
                        h.attributes || !C ?
                        e.getAttribute(t) :
                        (i = e.getAttributeNode(t)) && i.specified ?
                        i.value :
                        null;
                }),
                (ae.escape = function(e) {
                    return (e + "").replace(ie, re);
                }),
                (ae.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }),
                (ae.uniqueSort = function(e) {
                    var t,
                        n = [],
                        i = 0,
                        r = 0;
                    if (
                        ((u = !h.detectDuplicates),
                            (l = !h.sortStable && e.slice(0)),
                            e.sort(N),
                            u)
                    ) {
                        for (;
                            (t = e[r++]);) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1);
                    }
                    return (l = null), e;
                }),
                (o = ae.getText = function(e) {
                    var t,
                        n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                        } else if (3 === r || 4 === r) return e.nodeValue;
                    } else
                        for (;
                            (t = e[i++]);) n += o(t);
                    return n;
                }),
                ((b = ae.selectors = {
                    cacheLength: 50,
                    createPseudo: ue,
                    match: z,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": { dir: "parentNode", first: !0 },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: !0 },
                        "~": { dir: "previousSibling" },
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return (
                                (e[1] = e[1].replace(te, ne)),
                                (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                            );
                        },
                        CHILD: function(e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3) ?
                                (e[3] || ae.error(e[0]),
                                    (e[4] = +(e[4] ?
                                        e[5] + (e[6] || 1) :
                                        2 * ("even" === e[3] || "odd" === e[3]))),
                                    (e[5] = +(e[7] + e[8] || "odd" === e[3]))) :
                                e[3] && ae.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function(e) {
                            var t,
                                n = !e[6] && e[2];
                            return z.CHILD.test(e[0]) ?
                                null :
                                (e[3] ?
                                    (e[2] = e[4] || e[5] || "") :
                                    n &&
                                    Q.test(n) &&
                                    (t = p(n, !0)) &&
                                    (t = n.indexOf(")", n.length - t) - n.length) &&
                                    ((e[0] = e[0].slice(0, t)),
                                        (e[2] = n.slice(0, t))),
                                    e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ?

                                function() {
                                    return !0;
                                } :
                                function(e) {
                                    return (
                                        e.nodeName && e.nodeName.toLowerCase() === t
                                    );
                                };
                        },
                        CLASS: function(e) {
                            var t = d[e + " "];
                            return (
                                t ||
                                ((t = new RegExp(
                                        "(^|" + q + ")" + e + "(" + q + "|$)"
                                    )) &&
                                    d(e, function(e) {
                                        return t.test(
                                            ("string" == typeof e.className &&
                                                e.className) ||
                                            (void 0 !== e.getAttribute &&
                                                e.getAttribute("class")) ||
                                            ""
                                        );
                                    }))
                            );
                        },
                        ATTR: function(n, i, r) {
                            return function(e) {
                                var t = ae.attr(e, n);
                                return null == t ?
                                    "!=" === i :
                                    !i ||
                                    ((t += ""),
                                        "=" === i ?
                                        t === r :
                                        "!=" === i ?
                                        t !== r :
                                        "^=" === i ?
                                        r && 0 === t.indexOf(r) :
                                        "*=" === i ?
                                        r && -1 < t.indexOf(r) :
                                        "$=" === i ?
                                        r && t.slice(-r.length) === r :
                                        "~=" === i ?
                                        -1 <
                                        (" " + t.replace(W, " ") + " ").indexOf(
                                            r
                                        ) :
                                        "|=" === i &&
                                        (t === r ||
                                            t.slice(0, r.length + 1) ===
                                            r + "-"));
                            };
                        },
                        CHILD: function(p, e, t, g, m) {
                            var v = "nth" !== p.slice(0, 3),
                                y = "last" !== p.slice(-4),
                                _ = "of-type" === e;
                            return 1 === g && 0 === m ?

                                function(e) {
                                    return !!e.parentNode;
                                } :
                                function(e, t, n) {
                                    var i,
                                        r,
                                        o,
                                        s,
                                        a,
                                        l,
                                        u =
                                        v !== y ?
                                        "nextSibling" :
                                        "previousSibling",
                                        c = e.parentNode,
                                        f = _ && e.nodeName.toLowerCase(),
                                        d = !n && !_,
                                        h = !1;
                                    if (c) {
                                        if (v) {
                                            for (; u;) {
                                                for (s = e;
                                                    (s = s[u]);)
                                                    if (
                                                        _ ?
                                                        s.nodeName.toLowerCase() ===
                                                        f :
                                                        1 === s.nodeType
                                                    )
                                                        return !1;
                                                l = u =
                                                    "only" === p &&
                                                    !l &&
                                                    "nextSibling";
                                            }
                                            return !0;
                                        }
                                        if (
                                            ((l = [y ? c.firstChild : c.lastChild]),
                                                y && d)
                                        ) {
                                            for (
                                                h =
                                                (a =
                                                    (i =
                                                        (r =
                                                            (o =
                                                                (s = c)[x] ||
                                                                (s[x] = {}))[
                                                                s.uniqueID
                                                            ] ||
                                                            (o[s.uniqueID] = {}))[
                                                            p
                                                        ] || [])[0] === S &&
                                                    i[1]) && i[2],
                                                s = a && c.childNodes[a];
                                                (s =
                                                    (++a && s && s[u]) ||
                                                    (h = a = 0) ||
                                                    l.pop());

                                            )
                                                if (
                                                    1 === s.nodeType &&
                                                    ++h &&
                                                    s === e
                                                ) {
                                                    r[p] = [S, a, h];
                                                    break;
                                                }
                                        } else if (
                                            (d &&
                                                (h = a =
                                                    (i =
                                                        (r =
                                                            (o =
                                                                (s = e)[x] ||
                                                                (s[x] = {}))[
                                                                s.uniqueID
                                                            ] ||
                                                            (o[s.uniqueID] = {}))[
                                                            p
                                                        ] || [])[0] === S && i[1]), !1 === h)
                                        )
                                            for (;
                                                (s =
                                                    (++a && s && s[u]) ||
                                                    (h = a = 0) ||
                                                    l.pop()) &&
                                                ((_ ?
                                                        s.nodeName.toLowerCase() !== f :
                                                        1 !== s.nodeType) ||
                                                    !++h ||
                                                    (d &&
                                                        ((r =
                                                            (o = s[x] || (s[x] = {}))[
                                                                s.uniqueID
                                                            ] ||
                                                            (o[s.uniqueID] = {}))[
                                                            p
                                                        ] = [S, h]),
                                                        s !== e));

                                            );
                                        return (
                                            (h -= m) === g ||
                                            (h % g == 0 && 0 <= h / g)
                                        );
                                    }
                                };
                        },
                        PSEUDO: function(e, o) {
                            var t,
                                s =
                                b.pseudos[e] ||
                                b.setFilters[e.toLowerCase()] ||
                                ae.error("unsupported pseudo: " + e);
                            return s[x] ?
                                s(o) :
                                1 < s.length ?
                                ((t = [e, e, "", o]),
                                    b.setFilters.hasOwnProperty(e.toLowerCase()) ?
                                    ue(function(e, t) {
                                        for (
                                            var n, i = s(e, o), r = i.length; r--;

                                        )
                                            e[(n = H(e, i[r]))] = !(t[n] = i[r]);
                                    }) :
                                    function(e) {
                                        return s(e, 0, t);
                                    }) :
                                s;
                        },
                    },
                    pseudos: {
                        not: ue(function(e) {
                            var i = [],
                                r = [],
                                a = f(e.replace(B, "$1"));
                            return a[x] ?
                                ue(function(e, t, n, i) {
                                    for (
                                        var r, o = a(e, null, i, []), s = e.length; s--;

                                    )
                                        (r = o[s]) && (e[s] = !(t[s] = r));
                                }) :
                                function(e, t, n) {
                                    return (
                                        (i[0] = e),
                                        a(i, null, n, r),
                                        (i[0] = null), !r.pop()
                                    );
                                };
                        }),
                        has: ue(function(t) {
                            return function(e) {
                                return 0 < ae(t, e).length;
                            };
                        }),
                        contains: ue(function(t) {
                            return (
                                (t = t.replace(te, ne)),
                                function(e) {
                                    return -1 < (e.textContent || o(e)).indexOf(t);
                                }
                            );
                        }),
                        lang: ue(function(n) {
                            return (
                                V.test(n || "") || ae.error("unsupported lang: " + n),
                                (n = n.replace(te, ne).toLowerCase()),
                                function(e) {
                                    var t;
                                    do {
                                        if (
                                            (t = C ?
                                                e.lang :
                                                e.getAttribute("xml:lang") ||
                                                e.getAttribute("lang"))
                                        )
                                            return (
                                                (t = t.toLowerCase()) === n ||
                                                0 === t.indexOf(n + "-")
                                            );
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id;
                        },
                        root: function(e) {
                            return e === s;
                        },
                        focus: function(e) {
                            return (
                                e === T.activeElement &&
                                (!T.hasFocus || T.hasFocus()) &&
                                !!(e.type || e.href || ~e.tabIndex)
                            );
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ("input" === t && !!e.checked) ||
                                ("option" === t && !!e.selected)
                            );
                        },
                        selected: function(e) {
                            return (
                                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            );
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(e) {
                            return !b.pseudos.empty(e);
                        },
                        header: function(e) {
                            return G.test(e.nodeName);
                        },
                        input: function(e) {
                            return X.test(e.nodeName);
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ("input" === t && "button" === e.type) || "button" === t
                            );
                        },
                        text: function(e) {
                            var t;
                            return (
                                "input" === e.nodeName.toLowerCase() &&
                                "text" === e.type &&
                                (null == (t = e.getAttribute("type")) ||
                                    "text" === t.toLowerCase())
                            );
                        },
                        first: me(function() {
                            return [0];
                        }),
                        last: me(function(e, t) {
                            return [t - 1];
                        }),
                        eq: me(function(e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: me(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: me(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: me(function(e, t, n) {
                            for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;)
                                e.push(i);
                            return e;
                        }),
                        gt: me(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e;
                        }),
                    },
                }).pseudos.nth = b.pseudos.eq), { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            b.pseudos[e] = he(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = pe(e);

        function ye() {}

        function _e(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }

        function be(a, e, t) {
            var l = e.dir,
                u = e.next,
                c = u || l,
                f = t && "parentNode" === c,
                d = i++;
            return e.first ?

                function(e, t, n) {
                    for (;
                        (e = e[l]);)
                        if (1 === e.nodeType || f) return a(e, t, n);
                    return !1;
                } :
                function(e, t, n) {
                    var i,
                        r,
                        o,
                        s = [S, d];
                    if (n) {
                        for (;
                            (e = e[l]);)
                            if ((1 === e.nodeType || f) && a(e, t, n))
                                return !0;
                    } else
                        for (;
                            (e = e[l]);)
                            if (1 === e.nodeType || f)
                                if (
                                    ((r =
                                            (o = e[x] || (e[x] = {}))[
                                                e.uniqueID
                                            ] || (o[e.uniqueID] = {})),
                                        u && u === e.nodeName.toLowerCase())
                                )
                                    e = e[l] || e;
                                else {
                                    if (
                                        (i = r[c]) &&
                                        i[0] === S &&
                                        i[1] === d
                                    )
                                        return (s[2] = i[2]);
                                    if (((r[c] = s)[2] = a(e, t, n)))
                                        return !0;
                                }
                    return !1;
                };
        }

        function we(r) {
            return 1 < r.length ?

                function(e, t, n) {
                    for (var i = r.length; i--;)
                        if (!r[i](e, t, n)) return !1;
                    return !0;
                } :
                r[0];
        }

        function Ee(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
                (o = e[a]) &&
                ((n && !n(o, i, r)) || (s.push(o), u && t.push(a)));
            return s;
        }

        function Te(h, p, g, m, v, e) {
            return (
                m && !m[x] && (m = Te(m)),
                v && !v[x] && (v = Te(v, e)),
                ue(function(e, t, n, i) {
                    var r,
                        o,
                        s,
                        a = [],
                        l = [],
                        u = t.length,
                        c =
                        e ||
                        (function(e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++)
                                ae(e, t[i], n);
                            return n;
                        })(p || "*", n.nodeType ? [n] : n, []),
                        f = !h || (!e && p) ? c : Ee(c, a, h, n, i),
                        d = g ? (v || (e ? h : u || m) ? [] : t) : f;
                    if ((g && g(f, d, n, i), m))
                        for (r = Ee(d, l), m(r, [], n, i), o = r.length; o--;)
                            (s = r[o]) && (d[l[o]] = !(f[l[o]] = s));
                    if (e) {
                        if (v || h) {
                            if (v) {
                                for (r = [], o = d.length; o--;)
                                    (s = d[o]) && r.push((f[o] = s));
                                v(null, (d = []), r, i);
                            }
                            for (o = d.length; o--;)
                                (s = d[o]) &&
                                -1 < (r = v ? H(e, s) : a[o]) &&
                                (e[r] = !(t[r] = s));
                        }
                    } else(d = Ee(d === t ? d.splice(u, d.length) : d)), v ? v(null, t, d, i) : L.apply(t, d);
                })
            );
        }

        function Ce(e) {
            for (
                var r,
                    t,
                    n,
                    i = e.length,
                    o = b.relative[e[0].type],
                    s = o || b.relative[" "],
                    a = o ? 1 : 0,
                    l = be(
                        function(e) {
                            return e === r;
                        },
                        s, !0
                    ),
                    u = be(
                        function(e) {
                            return -1 < H(r, e);
                        },
                        s, !0
                    ),
                    c = [
                        function(e, t, n) {
                            var i =
                                (!o && (n || t !== w)) ||
                                ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                            return (r = null), i;
                        },
                    ]; a < i; a++
            )
                if ((t = b.relative[e[a].type])) c = [be(we(c), t)];
                else {
                    if (
                        (t = b.filter[e[a].type].apply(null, e[a].matches))[x]
                    ) {
                        for (n = ++a; n < i && !b.relative[e[n].type]; n++);
                        return Te(
                            1 < a && we(c),
                            1 < a &&
                            _e(
                                e
                                .slice(0, a - 1)
                                .concat({
                                    value: " " === e[a - 2].type ?
                                        "*" :
                                        "",
                                })
                            ).replace(B, "$1"),
                            t,
                            a < n && Ce(e.slice(a, n)),
                            n < i && Ce((e = e.slice(n))),
                            n < i && _e(e)
                        );
                    }
                    c.push(t);
                }
            return we(c);
        }
        return (
            (ye.prototype = b.filters = b.pseudos),
            (b.setFilters = new ye()),
            (p = ae.tokenize = function(e, t) {
                var n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u = _[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, a = [], l = b.preFilter; s;) {
                    for (o in ((n && !(i = U.exec(s))) ||
                            (i && (s = s.slice(i[0].length) || s),
                                a.push((r = []))),
                            (n = !1),
                            (i = K.exec(s)) &&
                            ((n = i.shift()),
                                r.push({ value: n, type: i[0].replace(B, " ") }),
                                (s = s.slice(n.length))),
                            b.filter))
                        !(i = z[o].exec(s)) ||
                        (l[o] && !(i = l[o](i))) ||
                        ((n = i.shift()),
                            r.push({ value: n, type: o, matches: i }),
                            (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? ae.error(e) : _(e, a).slice(0);
            }),
            (f = ae.compile = function(e, t) {
                var n,
                    m,
                    v,
                    y,
                    _,
                    i,
                    r = [],
                    o = [],
                    s = D[e + " "];
                if (!s) {
                    for (t || (t = p(e)), n = t.length; n--;)
                        (s = Ce(t[n]))[x] ? r.push(s) : o.push(s);
                    (s = D(
                        e,
                        ((m = o),
                            (y = 0 < (v = r).length),
                            (_ = 0 < m.length),
                            (i = function(e, t, n, i, r) {
                                var o,
                                    s,
                                    a,
                                    l = 0,
                                    u = "0",
                                    c = e && [],
                                    f = [],
                                    d = w,
                                    h = e || (_ && b.find.TAG("*", r)),
                                    p = (S += null == d ? 1 : Math.random() || 0.1),
                                    g = h.length;
                                for (
                                    r && (w = t === T || t || r); u !== g && null != (o = h[u]); u++
                                ) {
                                    if (_ && o) {
                                        for (
                                            s = 0,
                                            t ||
                                            o.ownerDocument === T ||
                                            (E(o), (n = !C));
                                            (a = m[s++]);

                                        )
                                            if (a(o, t || T, n)) {
                                                i.push(o);
                                                break;
                                            }
                                        r && (S = p);
                                    }
                                    y && ((o = !a && o) && l--, e && c.push(o));
                                }
                                if (((l += u), y && u !== l)) {
                                    for (s = 0;
                                        (a = v[s++]);) a(c, f, t, n);
                                    if (e) {
                                        if (0 < l)
                                            for (; u--;)
                                                c[u] || f[u] || (f[u] = k.call(i));
                                        f = Ee(f);
                                    }
                                    L.apply(i, f),
                                        r &&
                                        !e &&
                                        0 < f.length &&
                                        1 < l + v.length &&
                                        ae.uniqueSort(i);
                                }
                                return r && ((S = p), (w = d)), c;
                            }),
                            y ? ue(i) : i)
                    )).selector = e;
                }
                return s;
            }),
            (g = ae.select = function(e, t, n, i) {
                var r,
                    o,
                    s,
                    a,
                    l,
                    u = "function" == typeof e && e,
                    c = !i && p((e = u.selector || e));
                if (((n = n || []), 1 === c.length)) {
                    if (
                        2 < (o = c[0] = c[0].slice(0)).length &&
                        "ID" === (s = o[0]).type &&
                        9 === t.nodeType &&
                        C &&
                        b.relative[o[1].type]
                    ) {
                        if (!(t = (b.find.ID(s.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        u && (t = t.parentNode),
                            (e = e.slice(o.shift().value.length));
                    }
                    for (
                        r = z.needsContext.test(e) ? 0 : o.length; r-- && ((s = o[r]), !b.relative[(a = s.type)]);

                    )
                        if (
                            (l = b.find[a]) &&
                            (i = l(
                                s.matches[0].replace(te, ne),
                                (ee.test(o[0].type) && ve(t.parentNode)) || t
                            ))
                        ) {
                            if ((o.splice(r, 1), !(e = i.length && _e(o))))
                                return L.apply(n, i), n;
                            break;
                        }
                }
                return (
                    (u || f(e, c))(
                        i,
                        t, !C,
                        n, !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                );
            }),
            (h.sortStable = x.split("").sort(N).join("") === x),
            (h.detectDuplicates = !!u),
            E(),
            (h.sortDetached = ce(function(e) {
                return (
                    1 & e.compareDocumentPosition(T.createElement("fieldset"))
                );
            })),
            ce(function(e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
            fe("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(
                        t,
                        "type" === t.toLowerCase() ? 1 : 2
                    );
            }),
            (h.attributes &&
                ce(function(e) {
                    return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
            fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
            }),
            ce(function(e) {
                return null == e.getAttribute("disabled");
            }) ||
            fe(P, function(e, t, n) {
                var i;
                if (!n)
                    return !0 === e[t] ?
                        t.toLowerCase() :
                        (i = e.getAttributeNode(t)) && i.specified ?
                        i.value :
                        null;
            }),
            ae
        );
    })(T);
    (x.find = p),
    (x.expr = p.selectors),
    (x.expr[":"] = x.expr.pseudos),
    (x.uniqueSort = x.unique = p.uniqueSort),
    (x.text = p.getText),
    (x.isXMLDoc = p.isXML),
    (x.contains = p.contains),
    (x.escapeSelector = p.escape);
    var E = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && x(e).is(n)) break;
                    i.push(e);
                }
            return i;
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        D = x.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, n, i) {
        return y(n) ?
            x.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i;
            }) :
            n.nodeType ?
            x.grep(e, function(e) {
                return (e === n) !== i;
            }) :
            "string" != typeof n ?
            x.grep(e, function(e) {
                return -1 < r.call(n, e) !== i;
            }) :
            x.filter(n, e, i);
    }
    (x.filter = function(e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ?
            x.find.matchesSelector(i, e) ?
            [i] :
            [] :
            x.find.matches(
                e,
                x.grep(t, function(e) {
                    return 1 === e.nodeType;
                })
            )
        );
    }),
    x.fn.extend({
        find: function(e) {
            var t,
                n,
                i = this.length,
                r = this;
            if ("string" != typeof e)
                return this.pushStack(
                    x(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (x.contains(r[t], this)) return !0;
                    })
                );
            for (n = this.pushStack([]), t = 0; t < i; t++)
                x.find(e, r[t], n);
            return 1 < i ? x.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0));
        },
        is: function(e) {
            return !!I(
                this,
                "string" == typeof e && D.test(e) ? x(e) : e || [], !1
            ).length;
        },
    });
    var k,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((x.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || k), "string" != typeof e))
            return e.nodeType ?
                ((this[0] = e), (this.length = 1), this) :
                y(e) ?
                void 0 !== n.ready ?
                n.ready(e) :
                e(x) :
                x.makeArray(e, this);
        if (!(i =
                "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ?
                [null, e, null] :
                O.exec(e)) ||
            (!i[1] && t)
        )
            return !t || t.jquery ?
                (t || n).find(e) :
                this.constructor(t).find(e);
        if (i[1]) {
            if (
                ((t = t instanceof x ? t[0] : t),
                    x.merge(
                        this,
                        x.parseHTML(
                            i[1],
                            t && t.nodeType ? t.ownerDocument || t : C, !0
                        )
                    ),
                    N.test(i[1]) && x.isPlainObject(t))
            )
                for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
        }
        return (
            (r = C.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
            this
        );
    }).prototype = x.fn),
    (k = x(C));
    var L = /^(?:parents|prev(?:Until|All))/,
        j = { children: !0, contents: !0, next: !0, prev: !0 };

    function H(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e;
    }
    x.fn.extend({
            has: function(e) {
                var t = x(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (x.contains(this, t[e])) return !0;
                });
            },
            closest: function(e, t) {
                var n,
                    i = 0,
                    r = this.length,
                    o = [],
                    s = "string" != typeof e && x(e);
                if (!D.test(e))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (
                                n.nodeType < 11 &&
                                (s ?
                                    -1 < s.index(n) :
                                    1 === n.nodeType &&
                                    x.find.matchesSelector(n, e))
                            ) {
                                o.push(n);
                                break;
                            }
                return this.pushStack(1 < o.length ? x.uniqueSort(o) : o);
            },
            index: function(e) {
                return e ?
                    "string" == typeof e ?
                    r.call(x(e), this[0]) :
                    r.call(this, e.jquery ? e[0] : e) :
                    this[0] && this[0].parentNode ?
                    this.first().prevAll().length :
                    -1;
            },
            add: function(e, t) {
                return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
            },
            addBack: function(e) {
                return this.add(
                    null == e ? this.prevObject : this.prevObject.filter(e)
                );
            },
        }),
        x.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function(e) {
                    return E(e, "parentNode");
                },
                parentsUntil: function(e, t, n) {
                    return E(e, "parentNode", n);
                },
                next: function(e) {
                    return H(e, "nextSibling");
                },
                prev: function(e) {
                    return H(e, "previousSibling");
                },
                nextAll: function(e) {
                    return E(e, "nextSibling");
                },
                prevAll: function(e) {
                    return E(e, "previousSibling");
                },
                nextUntil: function(e, t, n) {
                    return E(e, "nextSibling", n);
                },
                prevUntil: function(e, t, n) {
                    return E(e, "previousSibling", n);
                },
                siblings: function(e) {
                    return S((e.parentNode || {}).firstChild, e);
                },
                children: function(e) {
                    return S(e.firstChild);
                },
                contents: function(e) {
                    return void 0 !== e.contentDocument ?
                        e.contentDocument :
                        (A(e, "template") && (e = e.content || e),
                            x.merge([], e.childNodes));
                },
            },
            function(i, r) {
                x.fn[i] = function(e, t) {
                    var n = x.map(this, r, e);
                    return (
                        "Until" !== i.slice(-5) && (t = e),
                        t && "string" == typeof t && (n = x.filter(t, n)),
                        1 < this.length &&
                        (j[i] || x.uniqueSort(n), L.test(i) && n.reverse()),
                        this.pushStack(n)
                    );
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;

    function q(e) {
        return e;
    }

    function R(e) {
        throw e;
    }

    function M(e, t, n, i) {
        var r;
        try {
            e && y((r = e.promise)) ?
                r.call(e).done(t).fail(n) :
                e && y((r = e.then)) ?
                r.call(e, t, n) :
                t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (x.Callbacks = function(i) {
        var e, n;
        i =
            "string" == typeof i ?
            ((e = i),
                (n = {}),
                x.each(e.match(P) || [], function(e, t) {
                    n[t] = !0;
                }),
                n) :
            x.extend({}, i);
        var r,
            t,
            o,
            s,
            a = [],
            l = [],
            u = -1,
            c = function() {
                for (s = s || i.once, o = r = !0; l.length; u = -1)
                    for (t = l.shift(); ++u < a.length;)
                        !1 === a[u].apply(t[0], t[1]) &&
                        i.stopOnFalse &&
                        ((u = a.length), (t = !1));
                i.memory || (t = !1), (r = !1), s && (a = t ? [] : "");
            },
            f = {
                add: function() {
                    return (
                        a &&
                        (t && !r && ((u = a.length - 1), l.push(t)),
                            (function n(e) {
                                x.each(e, function(e, t) {
                                    y(t) ?
                                        (i.unique && f.has(t)) || a.push(t) :
                                        t &&
                                        t.length &&
                                        "string" !== w(t) &&
                                        n(t);
                                });
                            })(arguments),
                            t && !r && c()),
                        this
                    );
                },
                remove: function() {
                    return (
                        x.each(arguments, function(e, t) {
                            for (var n; - 1 < (n = x.inArray(t, a, n));)
                                a.splice(n, 1), n <= u && u--;
                        }),
                        this
                    );
                },
                has: function(e) {
                    return e ? -1 < x.inArray(e, a) : 0 < a.length;
                },
                empty: function() {
                    return a && (a = []), this;
                },
                disable: function() {
                    return (s = l = []), (a = t = ""), this;
                },
                disabled: function() {
                    return !a;
                },
                lock: function() {
                    return (s = l = []), t || r || (a = t = ""), this;
                },
                locked: function() {
                    return !!s;
                },
                fireWith: function(e, t) {
                    return (
                        s ||
                        ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            l.push(t),
                            r || c()),
                        this
                    );
                },
                fire: function() {
                    return f.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!o;
                },
            };
        return f;
    }),
    x.extend({
        Deferred: function(e) {
            var o = [
                    [
                        "notify",
                        "progress",
                        x.Callbacks("memory"),
                        x.Callbacks("memory"),
                        2,
                    ],
                    [
                        "resolve",
                        "done",
                        x.Callbacks("once memory"),
                        x.Callbacks("once memory"),
                        0,
                        "resolved",
                    ],
                    [
                        "reject",
                        "fail",
                        x.Callbacks("once memory"),
                        x.Callbacks("once memory"),
                        1,
                        "rejected",
                    ],
                ],
                r = "pending",
                s = {
                    state: function() {
                        return r;
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this;
                    },
                    catch: function(e) {
                        return s.then(null, e);
                    },
                    pipe: function() {
                        var r = arguments;
                        return x
                            .Deferred(function(i) {
                                x.each(o, function(e, t) {
                                        var n = y(r[t[4]]) && r[t[4]];
                                        a[t[1]](function() {
                                            var e =
                                                n && n.apply(this, arguments);
                                            e && y(e.promise) ?
                                                e
                                                .promise()
                                                .progress(i.notify)
                                                .done(i.resolve)
                                                .fail(i.reject) :
                                                i[t[0] + "With"](
                                                    this,
                                                    n ? [e] : arguments
                                                );
                                        });
                                    }),
                                    (r = null);
                            })
                            .promise();
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function u(r, o, s, a) {
                            return function() {
                                var n = this,
                                    i = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(r < l)) {
                                            if (
                                                (e = s.apply(n, i)) ===
                                                o.promise()
                                            )
                                                throw new TypeError(
                                                    "Thenable self-resolution"
                                                );
                                            (t =
                                                e &&
                                                ("object" == typeof e ||
                                                    "function" ==
                                                    typeof e) &&
                                                e.then),
                                            y(t) ?
                                                a ?
                                                t.call(
                                                    e,
                                                    u(l, o, q, a),
                                                    u(l, o, R, a)
                                                ) :
                                                (l++,
                                                    t.call(
                                                        e,
                                                        u(l, o, q, a),
                                                        u(l, o, R, a),
                                                        u(
                                                            l,
                                                            o,
                                                            q,
                                                            o.notifyWith
                                                        )
                                                    )) :
                                                (s !== q &&
                                                    ((n = void 0),
                                                        (i = [e])),
                                                    (a || o.resolveWith)(
                                                        n,
                                                        i
                                                    ));
                                        }
                                    },
                                    t = a ?
                                    e :
                                    function() {
                                        try {
                                            e();
                                        } catch (e) {
                                            x.Deferred
                                                .exceptionHook &&
                                                x.Deferred.exceptionHook(
                                                    e,
                                                    t.stackTrace
                                                ),
                                                l <= r + 1 &&
                                                (s !== R &&
                                                    ((n = void 0),
                                                        (i = [e])),
                                                    o.rejectWith(
                                                        n,
                                                        i
                                                    ));
                                        }
                                    };
                                r
                                    ?
                                    t() :
                                    (x.Deferred.getStackHook &&
                                        (t.stackTrace = x.Deferred.getStackHook()),
                                        T.setTimeout(t));
                            };
                        }
                        return x
                            .Deferred(function(e) {
                                o[0][3].add(
                                        u(0, e, y(i) ? i : q, e.notifyWith)
                                    ),
                                    o[1][3].add(u(0, e, y(t) ? t : q)),
                                    o[2][3].add(u(0, e, y(n) ? n : R));
                            })
                            .promise();
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, s) : s;
                    },
                },
                a = {};
            return (
                x.each(o, function(e, t) {
                    var n = t[2],
                        i = t[5];
                    (s[t[1]] = n.add),
                    i &&
                        n.add(
                            function() {
                                r = i;
                            },
                            o[3 - e][2].disable,
                            o[3 - e][3].disable,
                            o[0][2].lock,
                            o[0][3].lock
                        ),
                        n.add(t[3].fire),
                        (a[t[0]] = function() {
                            return (
                                a[t[0] + "With"](
                                    this === a ? void 0 : this,
                                    arguments
                                ),
                                this
                            );
                        }),
                        (a[t[0] + "With"] = n.fireWith);
                }),
                s.promise(a),
                e && e.call(a, a),
                a
            );
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                i = Array(t),
                r = a.call(arguments),
                o = x.Deferred(),
                s = function(t) {
                    return function(e) {
                        (i[t] = this),
                        (r[t] =
                            1 < arguments.length ?
                            a.call(arguments) :
                            e),
                        --n || o.resolveWith(i, r);
                    };
                };
            if (
                n <= 1 &&
                (M(e, o.done(s(t)).resolve, o.reject, !n),
                    "pending" === o.state() || y(r[t] && r[t].then))
            )
                return o.then();
            for (; t--;) M(r[t], s(t), o.reject);
            return o.promise();
        },
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (x.Deferred.exceptionHook = function(e, t) {
        T.console &&
            T.console.warn &&
            e &&
            F.test(e.name) &&
            T.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
            );
    }),
    (x.readyException = function(e) {
        T.setTimeout(function() {
            throw e;
        });
    });
    var W = x.Deferred();

    function B() {
        C.removeEventListener("DOMContentLoaded", B),
            T.removeEventListener("load", B),
            x.ready();
    }
    (x.fn.ready = function(e) {
        return (
            W.then(e).catch(function(e) {
                x.readyException(e);
            }),
            this
        );
    }),
    x.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --x.readyWait : x.isReady) ||
                ((x.isReady = !0) !== e && 0 < --x.readyWait) ||
                W.resolveWith(C, [x]);
            },
        }),
        (x.ready.then = W.then),
        "complete" === C.readyState ||
        ("loading" !== C.readyState && !C.documentElement.doScroll) ?
        T.setTimeout(x.ready) :
        (C.addEventListener("DOMContentLoaded", B),
            T.addEventListener("load", B));
    var U = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === w(n))
                for (a in ((r = !0), n)) U(e, t, a, n[a], !0, o, s);
            else if (
                void 0 !== i &&
                ((r = !0),
                    y(i) || (s = !0),
                    u &&
                    (t = s ?
                        (t.call(e, i), null) :
                        ((u = t),
                            function(e, t, n) {
                                return u.call(x(e), n);
                            })),
                    t)
            )
                for (; a < l; a++)
                    t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
        },
        K = /^-ms-/,
        $ = /-([a-z])/g;

    function Q(e, t) {
        return t.toUpperCase();
    }

    function V(e) {
        return e.replace(K, "ms-").replace($, Q);
    }
    var z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function Y() {
        this.expando = x.expando + Y.uid++;
    }
    (Y.uid = 1),
    (Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return (
                t ||
                ((t = {}),
                    z(e) &&
                    (e.nodeType ?
                        (e[this.expando] = t) :
                        Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                        }))),
                t
            );
        },
        set: function(e, t, n) {
            var i,
                r = this.cache(e);
            if ("string" == typeof t) r[V(t)] = n;
            else
                for (i in t) r[V(i)] = t[i];
            return r;
        },
        get: function(e, t) {
            return void 0 === t ?
                this.cache(e) :
                e[this.expando] && e[this.expando][V(t)];
        },
        access: function(e, t, n) {
            return void 0 === t ||
                (t && "string" == typeof t && void 0 === n) ?
                this.get(e, t) :
                (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n,
                i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ?
                        t.map(V) :
                        (t = V(t)) in i ?
                        [t] :
                        t.match(P) || []).length;
                    for (; n--;) delete i[t[n]];
                }
                (void 0 === t || x.isEmptyObject(i)) &&
                (e.nodeType ?
                    (e[this.expando] = void 0) :
                    delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t);
        },
    });
    var X = new Y(),
        G = new Y(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((i = "data-" + t.replace(Z, "-$&").toLowerCase()),
                    "string" == typeof(n = e.getAttribute(i)))
            ) {
                try {
                    n =
                        "true" === (r = n) ||
                        ("false" !== r &&
                            ("null" === r ?
                                null :
                                r === +r + "" ?
                                +r :
                                J.test(r) ?
                                JSON.parse(r) :
                                r));
                } catch (e) {}
                G.set(e, t, n);
            } else n = void 0;
        return n;
    }
    x.extend({
            hasData: function(e) {
                return G.hasData(e) || X.hasData(e);
            },
            data: function(e, t, n) {
                return G.access(e, t, n);
            },
            removeData: function(e, t) {
                G.remove(e, t);
            },
            _data: function(e, t, n) {
                return X.access(e, t, n);
            },
            _removeData: function(e, t) {
                X.remove(e, t);
            },
        }),
        x.fn.extend({
            data: function(n, e) {
                var t,
                    i,
                    r,
                    o = this[0],
                    s = o && o.attributes;
                if (void 0 !== n)
                    return "object" == typeof n ?
                        this.each(function() {
                            G.set(this, n);
                        }) :
                        U(
                            this,
                            function(e) {
                                var t;
                                if (o && void 0 === e)
                                    return void 0 !== (t = G.get(o, n)) ?
                                        t :
                                        void 0 !== (t = ee(o, n)) ?
                                        t :
                                        void 0;
                                this.each(function() {
                                    G.set(this, n, e);
                                });
                            },
                            null,
                            e,
                            1 < arguments.length,
                            null, !0
                        );
                if (
                    this.length &&
                    ((r = G.get(o)),
                        1 === o.nodeType && !X.get(o, "hasDataAttrs"))
                ) {
                    for (t = s.length; t--;)
                        s[t] &&
                        0 === (i = s[t].name).indexOf("data-") &&
                        ((i = V(i.slice(5))), ee(o, i, r[i]));
                    X.set(o, "hasDataAttrs", !0);
                }
                return r;
            },
            removeData: function(e) {
                return this.each(function() {
                    G.remove(this, e);
                });
            },
        }),
        x.extend({
            queue: function(e, t, n) {
                var i;
                if (e)
                    return (
                        (t = (t || "fx") + "queue"),
                        (i = X.get(e, t)),
                        n &&
                        (!i || Array.isArray(n) ?
                            (i = X.access(e, t, x.makeArray(n))) :
                            i.push(n)),
                        i || []
                    );
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = x.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = x._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                    r &&
                    ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(
                            e,
                            function() {
                                x.dequeue(e, t);
                            },
                            o
                        )), !i && o && o.empty.fire();
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return (
                    X.get(e, n) ||
                    X.access(e, n, {
                        empty: x.Callbacks("once memory").add(function() {
                            X.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        x.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e ?
                    x.queue(this[0], t) :
                    void 0 === n ?
                    this :
                    this.each(function() {
                        var e = x.queue(this, t, n);
                        x._queueHooks(this, t),
                            "fx" === t &&
                            "inprogress" !== e[0] &&
                            x.dequeue(this, t);
                    })
                );
            },
            dequeue: function(e) {
                return this.each(function() {
                    x.dequeue(this, e);
                });
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", []);
            },
            promise: function(e, t) {
                var n,
                    i = 1,
                    r = x.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o]);
                    };
                for (
                    "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx"; s--;

                )
                    (n = X.get(o[s], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), r.promise(t);
            },
        });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = C.documentElement,
        oe = function(e) {
            return x.contains(e.ownerDocument, e);
        },
        se = { composed: !0 };
    re.getRootNode &&
        (oe = function(e) {
            return (
                x.contains(e.ownerDocument, e) ||
                e.getRootNode(se) === e.ownerDocument
            );
        });
    var ae = function(e, t) {
            return (
                "none" === (e = t || e).style.display ||
                ("" === e.style.display &&
                    oe(e) &&
                    "none" === x.css(e, "display"))
            );
        },
        le = function(e, t, n, i) {
            var r,
                o,
                s = {};
            for (o in t)(s[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
            return r;
        };

    function ue(e, t, n, i) {
        var r,
            o,
            s = 20,
            a = i ?

            function() {
                return i.cur();
            } :
            function() {
                return x.css(e, t, "");
            },
            l = a(),
            u = (n && n[3]) || (x.cssNumber[t] ? "" : "px"),
            c =
            e.nodeType &&
            (x.cssNumber[t] || ("px" !== u && +l)) &&
            ne.exec(x.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; s--;)
                x.style(e, t, c + u),
                (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                (c /= o);
            (c *= 2), x.style(e, t, c + u), (n = n || []);
        }
        return (
            n &&
            ((c = +c || +l || 0),
                (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = u), (i.start = c), (i.end = r))),
            r
        );
    }
    var ce = {};

    function fe(e, t) {
        for (var n, i, r, o, s, a, l, u = [], c = 0, f = e.length; c < f; c++)
            (i = e[c]).style &&
            ((n = i.style.display),
                t ?
                ("none" === n &&
                    ((u[c] = X.get(i, "display") || null),
                        u[c] || (i.style.display = "")),
                    "" === i.style.display &&
                    ae(i) &&
                    (u[c] =
                        ((l = s = o = void 0),
                            (s = (r = i).ownerDocument),
                            (a = r.nodeName),
                            (l = ce[a]) ||
                            ((o = s.body.appendChild(s.createElement(a))),
                                (l = x.css(o, "display")),
                                o.parentNode.removeChild(o),
                                "none" === l && (l = "block"),
                                (ce[a] = l))))) :
                "none" !== n &&
                ((u[c] = "none"), X.set(i, "display", n)));
        for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
        return e;
    }
    x.fn.extend({
        show: function() {
            return fe(this, !0);
        },
        hide: function() {
            return fe(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ?
                e ?
                this.show() :
                this.hide() :
                this.each(function() {
                    ae(this) ? x(this).show() : x(this).hide();
                });
        },
    });
    var de = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };

    function me(e, t) {
        var n;
        return (
            (n =
                void 0 !== e.getElementsByTagName ?
                e.getElementsByTagName(t || "*") :
                void 0 !== e.querySelectorAll ?
                e.querySelectorAll(t || "*") :
                []),
            void 0 === t || (t && A(e, t)) ? x.merge([e], n) : n
        );
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"));
    }
    (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
    var ye,
        _e,
        be = /<|&#?\w+;/;

    function we(e, t, n, i, r) {
        for (
            var o,
                s,
                a,
                l,
                u,
                c,
                f = t.createDocumentFragment(),
                d = [],
                h = 0,
                p = e.length; h < p; h++
        )
            if ((o = e[h]) || 0 === o)
                if ("object" === w(o)) x.merge(d, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            for (
                s = s || f.appendChild(t.createElement("div")),
                a = (he.exec(o) || ["", ""])[1].toLowerCase(),
                l = ge[a] || ge._default,
                s.innerHTML = l[1] + x.htmlPrefilter(o) + l[2],
                c = l[0]; c--;

            )
                s = s.lastChild;
            x.merge(d, s.childNodes),
                ((s = f.firstChild).textContent = "");
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0;
            (o = d[h++]);)
            if (i && -1 < x.inArray(o, i)) r && r.push(o);
            else if (
            ((u = oe(o)),
                (s = me(f.appendChild(o), "script")),
                u && ve(s),
                n)
        )
            for (c = 0;
                (o = s[c++]);) pe.test(o.type || "") && n.push(o);
        return f;
    }
    (ye = C.createDocumentFragment().appendChild(C.createElement("div"))),
    (_e = C.createElement("input")).setAttribute("type", "radio"),
        _e.setAttribute("checked", "checked"),
        _e.setAttribute("name", "t"),
        ye.appendChild(_e),
        (v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ye.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
    var Ee = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function xe() {
        return !0;
    }

    function Se() {
        return !1;
    }

    function De(e, t) {
        return (
            (e ===
                (function() {
                    try {
                        return C.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }

    function Ae(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
                Ae(e, a, n, i, t[a], o);
            return e;
        }
        if (
            (null == i && null == r ?
                ((r = n), (i = n = void 0)) :
                null == r &&
                ("string" == typeof n ?
                    ((r = i), (i = void 0)) :
                    ((r = i), (i = n), (n = void 0))), !1 === r)
        )
            r = Se;
        else if (!r) return e;
        return (
            1 === o &&
            ((s = r),
                ((r = function(e) {
                    return x().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = x.guid++))),
            e.each(function() {
                x.event.add(this, t, r, i, n);
            })
        );
    }

    function Ne(e, r, o) {
        o
            ?
            (X.set(e, r, !1),
                x.event.add(e, r, {
                    namespace: !1,
                    handler: function(e) {
                        var t,
                            n,
                            i = X.get(this, r);
                        if (1 & e.isTrigger && this[r]) {
                            if (i.length)
                                (x.event.special[r] || {}).delegateType &&
                                e.stopPropagation();
                            else if (
                                ((i = a.call(arguments)),
                                    X.set(this, r, i),
                                    (t = o(this, r)),
                                    this[r](),
                                    i !== (n = X.get(this, r)) || t ?
                                    X.set(this, r, !1) :
                                    (n = {}),
                                    i !== n)
                            )
                                return (
                                    e.stopImmediatePropagation(),
                                    e.preventDefault(),
                                    n.value
                                );
                        } else
                            i.length &&
                            (X.set(this, r, {
                                    value: x.event.trigger(
                                        x.extend(i[0], x.Event.prototype),
                                        i.slice(1),
                                        this
                                    ),
                                }),
                                e.stopImmediatePropagation());
                    },
                })) :
            void 0 === X.get(e, r) && x.event.add(e, r, xe);
    }
    (x.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o,
                s,
                a,
                l,
                u,
                c,
                f,
                d,
                h,
                p,
                g,
                m = X.get(t);
            if (m)
                for (
                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && x.find.matchesSelector(re, r),
                    n.guid || (n.guid = x.guid++),
                    (l = m.events) || (l = m.events = {}),
                    (s = m.handle) ||
                    (s = m.handle = function(e) {
                        return void 0 !== x &&
                            x.event.triggered !== e.type ?
                            x.event.dispatch.apply(t, arguments) :
                            void 0;
                    }),
                    u = (e = (e || "").match(P) || [""]).length; u--;

                )
                    (h = g = (a = Ce.exec(e[u]) || [])[1]),
                    (p = (a[2] || "").split(".").sort()),
                    h &&
                    ((f = x.event.special[h] || {}),
                        (h = (r ? f.delegateType : f.bindType) || h),
                        (f = x.event.special[h] || {}),
                        (c = x.extend({
                                type: h,
                                origType: g,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: r,
                                needsContext: r && x.expr.match.needsContext.test(r),
                                namespace: p.join("."),
                            },
                            o
                        )),
                        (d = l[h]) ||
                        (((d = l[h] = []).delegateCount = 0),
                            (f.setup && !1 !== f.setup.call(t, i, p, s)) ||
                            (t.addEventListener &&
                                t.addEventListener(h, s))),
                        f.add &&
                        (f.add.call(t, c),
                            c.handler.guid || (c.handler.guid = n.guid)),
                        r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                        (x.event.global[h] = !0));
        },
        remove: function(e, t, n, i, r) {
            var o,
                s,
                a,
                l,
                u,
                c,
                f,
                d,
                h,
                p,
                g,
                m = X.hasData(e) && X.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(P) || [""]).length; u--;)
                    if (
                        ((h = g = (a = Ce.exec(t[u]) || [])[1]),
                            (p = (a[2] || "").split(".").sort()),
                            h)
                    ) {
                        for (
                            f = x.event.special[h] || {},
                            d =
                            l[
                                (h =
                                    (i ? f.delegateType : f.bindType) ||
                                    h)
                            ] || [],
                            a =
                            a[2] &&
                            new RegExp(
                                "(^|\\.)" +
                                p.join("\\.(?:.*\\.|)") +
                                "(\\.|$)"
                            ),
                            s = o = d.length; o--;

                        )
                            (c = d[o]),
                            (!r && g !== c.origType) ||
                            (n && n.guid !== c.guid) ||
                            (a && !a.test(c.namespace)) ||
                            (i &&
                                i !== c.selector &&
                                ("**" !== i || !c.selector)) ||
                            (d.splice(o, 1),
                                c.selector && d.delegateCount--,
                                f.remove && f.remove.call(e, c));
                        s &&
                            !d.length &&
                            ((f.teardown &&
                                    !1 !== f.teardown.call(e, p, m.handle)) ||
                                x.removeEvent(e, h, m.handle),
                                delete l[h]);
                    } else
                        for (h in l) x.event.remove(e, h + t[u], n, i, !0);
                x.isEmptyObject(l) && X.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t,
                n,
                i,
                r,
                o,
                s,
                a = x.event.fix(e),
                l = new Array(arguments.length),
                u = (X.get(this, "events") || {})[a.type] || [],
                c = x.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (
                ((a.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, a))
            ) {
                for (
                    s = x.event.handlers.call(this, a, u), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();

                )
                    for (
                        a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) &&
                        !a.isImmediatePropagationStopped();

                    )
                        (a.rnamespace &&
                            !1 !== o.namespace &&
                            !a.rnamespace.test(o.namespace)) ||
                        ((a.handleObj = o),
                            (a.data = o.data),
                            void 0 !==
                            (i = (
                                (x.event.special[o.origType] || {})
                                .handle || o.handler
                            ).apply(r.elem, l)) &&
                            !1 === (a.result = i) &&
                            (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(e, t) {
            var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (
                        1 === u.nodeType &&
                        ("click" !== e.type || !0 !== u.disabled)
                    ) {
                        for (o = [], s = {}, n = 0; n < l; n++)
                            void 0 === s[(r = (i = t[n]).selector + " ")] &&
                            (s[r] = i.needsContext ?
                                -1 < x(r, this).index(u) :
                                x.find(r, this, null, [u]).length),
                            s[r] && o.push(i);
                        o.length && a.push({ elem: u, handlers: o });
                    }
            return (
                (u = this),
                l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
                a
            );
        },
        addProp: function(t, e) {
            Object.defineProperty(x.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ?

                    function() {
                        if (this.originalEvent) return e(this.originalEvent);
                    } :
                    function() {
                        if (this.originalEvent) return this.originalEvent[t];
                    },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return (
                        de.test(t.type) &&
                        t.click &&
                        A(t, "input") &&
                        Ne(t, "click", xe), !1
                    );
                },
                trigger: function(e) {
                    var t = this || e;
                    return (
                        de.test(t.type) &&
                        t.click &&
                        A(t, "input") &&
                        Ne(t, "click"), !0
                    );
                },
                _default: function(e) {
                    var t = e.target;
                    return (
                        (de.test(t.type) &&
                            t.click &&
                            A(t, "input") &&
                            X.get(t, "click")) ||
                        A(t, "a")
                    );
                },
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
    (x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }),
    (x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ?
            ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue) ?
                    xe :
                    Se),
                (this.target =
                    e.target && 3 === e.target.nodeType ?
                    e.target.parentNode :
                    e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget)) :
            (this.type = e),
            t && x.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[x.expando] = !0);
    }),
    (x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = xe),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = xe),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = xe),
            e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
        },
    }),
    x.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Ee.test(e.type) ?
                        null != e.charCode ?
                        e.charCode :
                        e.keyCode :
                        !e.which && void 0 !== t && Te.test(e.type) ?
                        1 & t ?
                        1 :
                        2 & t ?
                        3 :
                        4 & t ?
                        2 :
                        0 :
                        e.which;
                },
            },
            x.event.addProp
        ),
        x.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            x.event.special[e] = {
                setup: function() {
                    return Ne(this, e, De), !1;
                },
                trigger: function() {
                    return Ne(this, e), !0;
                },
                delegateType: t,
            };
        }),
        x.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function(e, r) {
                x.event.special[e] = {
                    delegateType: r,
                    bindType: r,
                    handle: function(e) {
                        var t,
                            n = e.relatedTarget,
                            i = e.handleObj;
                        return (
                            (n && (n === this || x.contains(this, n))) ||
                            ((e.type = i.origType),
                                (t = i.handler.apply(this, arguments)),
                                (e.type = r)),
                            t
                        );
                    },
                };
            }
        ),
        x.fn.extend({
            on: function(e, t, n, i) {
                return Ae(this, e, t, n, i);
            },
            one: function(e, t, n, i) {
                return Ae(this, e, t, n, i, 1);
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (i = e.handleObj),
                        x(e.delegateTarget).off(
                            i.namespace ?
                            i.origType + "." + i.namespace :
                            i.origType,
                            i.selector,
                            i.handler
                        ),
                        this
                    );
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) ||
                        ((n = t), (t = void 0)), !1 === n && (n = Se),
                        this.each(function() {
                            x.event.remove(this, e, n, t);
                        })
                    );
                for (r in e) this.off(r, t, e[r]);
                return this;
            },
        });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ke = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return (
            (A(e, "table") &&
                A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                x(e).children("tbody")[0]) ||
            e
        );
    }

    function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }

    function Pe(e) {
        return (
            "true/" === (e.type || "").slice(0, 5) ?
            (e.type = e.type.slice(5)) :
            e.removeAttribute("type"),
            e
        );
    }

    function qe(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (
                X.hasData(e) &&
                ((o = X.access(e)), (s = X.set(t, o)), (u = o.events))
            )
                for (r in (delete s.handle, (s.events = {}), u))
                    for (n = 0, i = u[r].length; n < i; n++)
                        x.event.add(t, r, u[r][n]);
            G.hasData(e) &&
                ((a = G.access(e)), (l = x.extend({}, a)), G.set(t, l));
        }
    }

    function Re(n, i, r, o) {
        i = g.apply([], i);
        var e,
            t,
            s,
            a,
            l,
            u,
            c = 0,
            f = n.length,
            d = f - 1,
            h = i[0],
            p = y(h);
        if (p || (1 < f && "string" == typeof h && !v.checkClone && Oe.test(h)))
            return n.each(function(e) {
                var t = n.eq(e);
                p && (i[0] = h.call(this, e, t.html())), Re(t, i, r, o);
            });
        if (
            f &&
            ((t = (e = we(i, n[0].ownerDocument, !1, n, o)).firstChild),
                1 === e.childNodes.length && (e = t),
                t || o)
        ) {
            for (a = (s = x.map(me(e, "script"), He)).length; c < f; c++)
                (l = e),
                c !== d &&
                ((l = x.clone(l, !0, !0)),
                    a && x.merge(s, me(l, "script"))),
                r.call(n[c], l, c);
            if (a)
                for (
                    u = s[s.length - 1].ownerDocument, x.map(s, Pe), c = 0; c < a; c++
                )
                    (l = s[c]),
                    pe.test(l.type || "") &&
                    !X.access(l, "globalEval") &&
                    x.contains(u, l) &&
                    (l.src && "module" !== (l.type || "").toLowerCase() ?
                        x._evalUrl &&
                        !l.noModule &&
                        x._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce"),
                        }) :
                        b(l.textContent.replace(Le, ""), l, u));
        }
        return n;
    }

    function Me(e, t, n) {
        for (var i, r = t ? x.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || x.cleanData(me(i)),
            i.parentNode &&
            (n && oe(i) && ve(me(i, "script")),
                i.parentNode.removeChild(i));
        return e;
    }
    x.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ie, "<$1></$2>");
            },
            clone: function(e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c = e.cloneNode(!0),
                    f = oe(e);
                if (!(
                        v.noCloneChecked ||
                        (1 !== e.nodeType && 11 !== e.nodeType) ||
                        x.isXMLDoc(e)
                    ))
                    for (s = me(c), i = 0, r = (o = me(e)).length; i < r; i++)
                        (a = o[i]),
                        "input" === (u = (l = s[i]).nodeName.toLowerCase()) &&
                        de.test(a.type) ?
                        (l.checked = a.checked) :
                        ("input" !== u && "textarea" !== u) ||
                        (l.defaultValue = a.defaultValue);
                if (t)
                    if (n)
                        for (
                            o = o || me(e), s = s || me(c), i = 0, r = o.length; i < r; i++
                        )
                            qe(o[i], s[i]);
                    else qe(e, c);
                return (
                    0 < (s = me(c, "script")).length &&
                    ve(s, !f && me(e, "script")),
                    c
                );
            },
            cleanData: function(e) {
                for (
                    var t, n, i, r = x.event.special, o = 0; void 0 !== (n = e[o]); o++
                )
                    if (z(n)) {
                        if ((t = n[X.expando])) {
                            if (t.events)
                                for (i in t.events)
                                    r[i] ?
                                    x.event.remove(n, i) :
                                    x.removeEvent(n, i, t.handle);
                            n[X.expando] = void 0;
                        }
                        n[G.expando] && (n[G.expando] = void 0);
                    }
            },
        }),
        x.fn.extend({
            detach: function(e) {
                return Me(this, e, !0);
            },
            remove: function(e) {
                return Me(this, e);
            },
            text: function(e) {
                return U(
                    this,
                    function(e) {
                        return void 0 === e ?
                            x.text(this) :
                            this.empty().each(function() {
                                (1 !== this.nodeType &&
                                    11 !== this.nodeType &&
                                    9 !== this.nodeType) ||
                                (this.textContent = e);
                            });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function() {
                return Re(this, arguments, function(e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                    je(this, e).appendChild(e);
                });
            },
            prepend: function() {
                return Re(this, arguments, function(e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function() {
                return Re(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function() {
                return Re(this, arguments, function(e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                    (x.cleanData(me(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function(e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function() {
                        return x.clone(this, e, t);
                    })
                );
            },
            html: function(e) {
                return U(
                    this,
                    function(e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !ke.test(e) &&
                            !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = x.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                    (x.cleanData(me(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function() {
                var n = [];
                return Re(
                    this,
                    arguments,
                    function(e) {
                        var t = this.parentNode;
                        x.inArray(this, n) < 0 &&
                            (x.cleanData(me(this)),
                                t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        x.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function(e, s) {
                x.fn[e] = function(e) {
                    for (
                        var t, n = [], i = x(e), r = i.length - 1, o = 0; o <= r; o++
                    )
                        (t = o === r ? this : this.clone(!0)),
                        x(i[o])[s](t),
                        l.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );
    var Fe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        We = function(e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = T), t.getComputedStyle(e);
        },
        Be = new RegExp(ie.join("|"), "i");

    function Ue(e, t, n) {
        var i,
            r,
            o,
            s,
            a = e.style;
        return (
            (n = n || We(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                oe(e) ||
                (s = x.style(e, t)), !v.pixelBoxStyles() &&
                Fe.test(s) &&
                Be.test(t) &&
                ((i = a.width),
                    (r = a.minWidth),
                    (o = a.maxWidth),
                    (a.minWidth = a.maxWidth = a.width = s),
                    (s = n.width),
                    (a.width = i),
                    (a.minWidth = r),
                    (a.maxWidth = o))),
            void 0 !== s ? s + "" : s
        );
    }

    function Ke(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }!(function() {
        function e() {
            if (l) {
                (a.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (l.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                re.appendChild(a).appendChild(l);
                var e = T.getComputedStyle(l);
                (n = "1%" !== e.top),
                (s = 12 === t(e.marginLeft)),
                (l.style.right = "60%"),
                (o = 36 === t(e.right)),
                (i = 36 === t(e.width)),
                (l.style.position = "absolute"),
                (r = 12 === t(l.offsetWidth / 3)),
                re.removeChild(a),
                    (l = null);
            }
        }

        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            i,
            r,
            o,
            s,
            a = C.createElement("div"),
            l = C.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
                (l.cloneNode(!0).style.backgroundClip = ""),
                (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
                x.extend(v, {
                    boxSizingReliable: function() {
                        return e(), i;
                    },
                    pixelBoxStyles: function() {
                        return e(), o;
                    },
                    pixelPosition: function() {
                        return e(), n;
                    },
                    reliableMarginLeft: function() {
                        return e(), s;
                    },
                    scrollboxSize: function() {
                        return e(), r;
                    },
                }));
    })();
    var $e = ["Webkit", "Moz", "ms"],
        Qe = C.createElement("div").style,
        Ve = {};

    function ze(e) {
        return (
            x.cssProps[e] ||
            Ve[e] ||
            (e in Qe ?
                e :
                (Ve[e] =
                    (function(e) {
                        for (
                            var t = e[0].toUpperCase() + e.slice(1),
                                n = $e.length; n--;

                        )
                            if ((e = $e[n] + t) in Qe) return e;
                    })(e) || e))
        );
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ge = { position: "absolute", visibility: "hidden", display: "block" },
        Je = { letterSpacing: "0", fontWeight: "400" };

    function Ze(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }

    function et(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += x.css(e, n + ie[s], !0, r)),
            i ?
            ("content" === n &&
                (l -= x.css(e, "padding" + ie[s], !0, r)),
                "margin" !== n &&
                (l -= x.css(e, "border" + ie[s] + "Width", !0, r))) :
            ((l += x.css(e, "padding" + ie[s], !0, r)),
                "padding" !== n ?
                (l += x.css(e, "border" + ie[s] + "Width", !0, r)) :
                (a += x.css(e, "border" + ie[s] + "Width", !0, r)));
        return (!i &&
            0 <= o &&
            (l +=
                Math.max(
                    0,
                    Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        l -
                        a -
                        0.5
                    )
                ) || 0),
            l
        );
    }

    function tt(e, t, n) {
        var i = We(e),
            r =
            (!v.boxSizingReliable() || n) &&
            "border-box" === x.css(e, "boxSizing", !1, i),
            o = r,
            s = Ue(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(s)) {
            if (!n) return s;
            s = "auto";
        }
        return (
            ((!v.boxSizingReliable() && r) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === x.css(e, "display", !1, i))) &&
            e.getClientRects().length &&
            ((r = "border-box" === x.css(e, "boxSizing", !1, i)),
                (o = a in e) && (s = e[a])),
            (s = parseFloat(s) || 0) +
            et(e, t, n || (r ? "border" : "content"), o, i, s) +
            "px"
        );
    }

    function nt(e, t, n, i, r) {
        return new nt.prototype.init(e, t, n, i, r);
    }
    x.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Ue(e, "opacity");
                            return "" === n ? "1" : n;
                        }
                    },
                },
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: {},
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r,
                        o,
                        s,
                        a = V(t),
                        l = Xe.test(t),
                        u = e.style;
                    if (
                        (l || (t = ze(a)),
                            (s = x.cssHooks[t] || x.cssHooks[a]),
                            void 0 === n)
                    )
                        return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ?
                            r :
                            u[t];
                    "string" == (o = typeof n) &&
                    (r = ne.exec(n)) &&
                    r[1] &&
                        ((n = ue(e, t, r)), (o = "number")),
                        null != n &&
                        n == n &&
                        ("number" !== o ||
                            l ||
                            (n += (r && r[3]) || (x.cssNumber[a] ? "" : "px")),
                            v.clearCloneStyle ||
                            "" !== n ||
                            0 !== t.indexOf("background") ||
                            (u[t] = "inherit"),
                            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                            (l ? u.setProperty(t, n) : (u[t] = n)));
                }
            },
            css: function(e, t, n, i) {
                var r,
                    o,
                    s,
                    a = V(t);
                return (
                    Xe.test(t) || (t = ze(a)),
                    (s = x.cssHooks[t] || x.cssHooks[a]) &&
                    "get" in s &&
                    (r = s.get(e, !0, n)),
                    void 0 === r && (r = Ue(e, t, i)),
                    "normal" === r && t in Je && (r = Je[t]),
                    "" === n || n ?
                    ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) :
                    r
                );
            },
        }),
        x.each(["height", "width"], function(e, l) {
            x.cssHooks[l] = {
                get: function(e, t, n) {
                    if (t)
                        return !Ye.test(x.css(e, "display")) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width) ?
                            tt(e, l, n) :
                            le(e, Ge, function() {
                                return tt(e, l, n);
                            });
                },
                set: function(e, t, n) {
                    var i,
                        r = We(e),
                        o = !v.scrollboxSize() && "absolute" === r.position,
                        s =
                        (o || n) &&
                        "border-box" === x.css(e, "boxSizing", !1, r),
                        a = n ? et(e, l, n, s, r) : 0;
                    return (
                        s &&
                        o &&
                        (a -= Math.ceil(
                            e["offset" + l[0].toUpperCase() + l.slice(1)] -
                            parseFloat(r[l]) -
                            et(e, l, "border", !1, r) -
                            0.5
                        )),
                        a &&
                        (i = ne.exec(t)) &&
                        "px" !== (i[3] || "px") &&
                        ((e.style[l] = t), (t = x.css(e, l))),
                        Ze(0, t, a)
                    );
                },
            };
        }),
        (x.cssHooks.marginLeft = Ke(v.reliableMarginLeft, function(e, t) {
            if (t)
                return (
                    (parseFloat(Ue(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                        le(e, { marginLeft: 0 }, function() {
                            return e.getBoundingClientRect().left;
                        })) + "px"
                );
        })),
        x.each({ margin: "", padding: "", border: "Width" }, function(r, o) {
            (x.cssHooks[r + o] = {
                expand: function(e) {
                    for (
                        var t = 0,
                            n = {},
                            i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++
                    )
                        n[r + ie[t] + o] = i[t] || i[t - 2] || i[0];
                    return n;
                },
            }),
            "margin" !== r && (x.cssHooks[r + o].set = Ze);
        }),
        x.fn.extend({
            css: function(e, t) {
                return U(
                    this,
                    function(e, t, n) {
                        var i,
                            r,
                            o = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = We(e), r = t.length; s < r; s++)
                                o[t[s]] = x.css(e, t[s], !1, i);
                            return o;
                        }
                        return void 0 !== n ? x.style(e, t, n) : x.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((x.Tween = nt).prototype = {
            constructor: nt,
            init: function(e, t, n, i, r, o) {
                (this.elem = e),
                (this.prop = n),
                (this.easing = r || x.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = i),
                (this.unit = o || (x.cssNumber[n] ? "" : "px"));
            },
            cur: function() {
                var e = nt.propHooks[this.prop];
                return e && e.get ?
                    e.get(this) :
                    nt.propHooks._default.get(this);
            },
            run: function(e) {
                var t,
                    n = nt.propHooks[this.prop];
                return (
                    this.options.duration ?
                    (this.pos = t = x.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                    )) :
                    (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = nt.prototype),
        ((nt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ?
                        e.elem[e.prop] :
                        (t = x.css(e.elem, e.prop, "")) && "auto" !== t ?
                        t :
                        0;
                },
                set: function(e) {
                    x.fx.step[e.prop] ?
                        x.fx.step[e.prop](e) :
                        1 !== e.elem.nodeType ||
                        (!x.cssHooks[e.prop] &&
                            null == e.elem.style[ze(e.prop)]) ?
                        (e.elem[e.prop] = e.now) :
                        x.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = nt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
            },
        }),
        (x.easing = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (x.fx = nt.prototype.init),
        (x.fx.step = {});
    var it,
        rt,
        ot,
        st,
        at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ut() {
        rt &&
            (!1 === C.hidden && T.requestAnimationFrame ?
                T.requestAnimationFrame(ut) :
                T.setTimeout(ut, x.fx.interval),
                x.fx.tick());
    }

    function ct() {
        return (
            T.setTimeout(function() {
                it = void 0;
            }),
            (it = Date.now())
        );
    }

    function ft(e, t) {
        var n,
            i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }

    function dt(e, t, n) {
        for (
            var i,
                r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
                o = 0,
                s = r.length; o < s; o++
        )
            if ((i = r[o].call(n, t, e))) return i;
    }

    function ht(o, e, t) {
        var n,
            s,
            i = 0,
            r = ht.prefilters.length,
            a = x.Deferred().always(function() {
                delete l.elem;
            }),
            l = function() {
                if (s) return !1;
                for (
                    var e = it || ct(),
                        t = Math.max(0, u.startTime + u.duration - e),
                        n = 1 - (t / u.duration || 0),
                        i = 0,
                        r = u.tweens.length; i < r; i++
                )
                    u.tweens[i].run(n);
                return (
                    a.notifyWith(o, [u, n, t]),
                    n < 1 && r ?
                    t :
                    (r || a.notifyWith(o, [u, 1, 0]),
                        a.resolveWith(o, [u]), !1)
                );
            },
            u = a.promise({
                elem: o,
                props: x.extend({}, e),
                opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default },
                    t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: it || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = x.Tween(
                        o,
                        u.opts,
                        e,
                        t,
                        u.opts.specialEasing[e] || u.opts.easing
                    );
                    return u.tweens.push(n), n;
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) u.tweens[t].run(1);
                    return (
                        e ?
                        (a.notifyWith(o, [u, 1, 0]),
                            a.resolveWith(o, [u, e])) :
                        a.rejectWith(o, [u, e]),
                        this
                    );
                },
            }),
            c = u.props;
        for (
            (function(e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (
                        ((r = t[(i = V(n))]),
                            (o = e[n]),
                            Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                            n !== i && ((e[i] = o), delete e[n]),
                            (s = x.cssHooks[i]) && ("expand" in s))
                    )
                        for (n in ((o = s.expand(o)), delete e[i], o))
                            (n in e) || ((e[n] = o[n]), (t[n] = r));
                    else t[i] = r;
            })(c, u.opts.specialEasing); i < r; i++
        )
            if ((n = ht.prefilters[i].call(u, o, c, u.opts)))
                return (
                    y(n.stop) &&
                    (x._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(
                        n
                    )),
                    n
                );
        return (
            x.map(c, dt, u),
            y(u.opts.start) && u.opts.start.call(o, u),
            u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
            x.fx.timer(x.extend(l, { elem: o, anim: u, queue: u.opts.queue })),
            u
        );
    }
    (x.Animation = x.extend(ht, {
        tweeners: {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ne.exec(t), n), n;
                },
            ],
        },
        tweener: function(e, t) {
            for (
                var n,
                    i = 0,
                    r = (e = y(e) ? ((t = e), ["*"]) : e.match(P)).length; i < r; i++
            )
                (n = e[i]),
                (ht.tweeners[n] = ht.tweeners[n] || []),
                ht.tweeners[n].unshift(t);
        },
        prefilters: [
            function(e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    f = "width" in t || "height" in t,
                    d = this,
                    h = {},
                    p = e.style,
                    g = e.nodeType && ae(e),
                    m = X.get(e, "fxshow");
                for (i in (n.queue ||
                        (null == (s = x._queueHooks(e, "fx")).unqueued &&
                            ((s.unqueued = 0),
                                (a = s.empty.fire),
                                (s.empty.fire = function() {
                                    s.unqueued || a();
                                })),
                            s.unqueued++,
                            d.always(function() {
                                d.always(function() {
                                    s.unqueued--,
                                        x.queue(e, "fx").length || s.empty.fire();
                                });
                            })),
                        t))
                    if (((r = t[i]), at.test(r))) {
                        if (
                            (delete t[i],
                                (o = o || "toggle" === r),
                                r === (g ? "hide" : "show"))
                        ) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            g = !0;
                        }
                        h[i] = (m && m[i]) || x.style(e, i);
                    }
                if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(h))
                    for (i in (f &&
                            1 === e.nodeType &&
                            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                                null == (u = m && m.display) &&
                                (u = X.get(e, "display")),
                                "none" === (c = x.css(e, "display")) &&
                                (u ?
                                    (c = u) :
                                    (fe([e], !0),
                                        (u = e.style.display || u),
                                        (c = x.css(e, "display")),
                                        fe([e]))),
                                ("inline" === c ||
                                    ("inline-block" === c && null != u)) &&
                                "none" === x.css(e, "float") &&
                                (l ||
                                    (d.done(function() {
                                            p.display = u;
                                        }),
                                        null == u &&
                                        ((c = p.display),
                                            (u = "none" === c ? "" : c))),
                                    (p.display = "inline-block"))),
                            n.overflow &&
                            ((p.overflow = "hidden"),
                                d.always(function() {
                                    (p.overflow = n.overflow[0]),
                                    (p.overflowX = n.overflow[1]),
                                    (p.overflowY = n.overflow[2]);
                                })),
                            (l = !1),
                            h))
                        l ||
                        (m ?
                            "hidden" in m && (g = m.hidden) :
                            (m = X.access(e, "fxshow", { display: u })),
                            o && (m.hidden = !g),
                            g && fe([e], !0),
                            d.done(function() {
                                for (i in (g || fe([e]),
                                        X.remove(e, "fxshow"),
                                        h))
                                    x.style(e, i, h[i]);
                            })),
                        (l = dt(g ? m[i] : 0, i, d)),
                        i in m ||
                        ((m[i] = l.start),
                            g && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function(e, t) {
            t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
        },
    })),
    (x.speed = function(e, t, n) {
        var i =
            e && "object" == typeof e ?
            x.extend({}, e) :
            {
                complete: n || (!n && t) || (y(e) && e),
                duration: e,
                easing: (n && t) || (t && !y(t) && t),
            };
        return (
            x.fx.off ?
            (i.duration = 0) :
            "number" != typeof i.duration &&
            (i.duration in x.fx.speeds ?
                (i.duration = x.fx.speeds[i.duration]) :
                (i.duration = x.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function() {
                y(i.old) && i.old.call(this),
                    i.queue && x.dequeue(this, i.queue);
            }),
            i
        );
    }),
    x.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(ae)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, i);
            },
            animate: function(t, e, n, i) {
                var r = x.isEmptyObject(t),
                    o = x.speed(e, n, i),
                    s = function() {
                        var e = ht(this, x.extend({}, t), o);
                        (r || X.get(this, "finish")) && e.stop(!0);
                    };
                return (
                    (s.finish = s),
                    r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
            },
            stop: function(r, e, o) {
                var s = function(e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                };
                return (
                    "string" != typeof r && ((o = e), (e = r), (r = void 0)),
                    e && !1 !== r && this.queue(r || "fx", []),
                    this.each(function() {
                        var e = !0,
                            t = null != r && r + "queueHooks",
                            n = x.timers,
                            i = X.get(this);
                        if (t) i[t] && i[t].stop && s(i[t]);
                        else
                            for (t in i)
                                i[t] && i[t].stop && lt.test(t) && s(i[t]);
                        for (t = n.length; t--;)
                            n[t].elem !== this ||
                            (null != r && n[t].queue !== r) ||
                            (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || x.dequeue(this, r);
                    })
                );
            },
            finish: function(s) {
                return (!1 !== s && (s = s || "fx"),
                    this.each(function() {
                        var e,
                            t = X.get(this),
                            n = t[s + "queue"],
                            i = t[s + "queueHooks"],
                            r = x.timers,
                            o = n ? n.length : 0;
                        for (
                            t.finish = !0,
                            x.queue(this, s, []),
                            i && i.stop && i.stop.call(this, !0),
                            e = r.length; e--;

                        )
                            r[e].elem === this &&
                            r[e].queue === s &&
                            (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        x.each(["toggle", "show", "hide"], function(e, i) {
            var r = x.fn[i];
            x.fn[i] = function(e, t, n) {
                return null == e || "boolean" == typeof e ?
                    r.apply(this, arguments) :
                    this.animate(ft(i, !0), e, t, n);
            };
        }),
        x.each({
                slideDown: ft("show"),
                slideUp: ft("hide"),
                slideToggle: ft("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function(e, i) {
                x.fn[e] = function(e, t, n) {
                    return this.animate(i, e, t, n);
                };
            }
        ),
        (x.timers = []),
        (x.fx.tick = function() {
            var e,
                t = 0,
                n = x.timers;
            for (it = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || x.fx.stop(), (it = void 0);
        }),
        (x.fx.timer = function(e) {
            x.timers.push(e), x.fx.start();
        }),
        (x.fx.interval = 13),
        (x.fx.start = function() {
            rt || ((rt = !0), ut());
        }),
        (x.fx.stop = function() {
            rt = null;
        }),
        (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (x.fn.delay = function(i, e) {
            return (
                (i = (x.fx && x.fx.speeds[i]) || i),
                (e = e || "fx"),
                this.queue(e, function(e, t) {
                    var n = T.setTimeout(e, i);
                    t.stop = function() {
                        T.clearTimeout(n);
                    };
                })
            );
        }),
        (ot = C.createElement("input")),
        (st = C.createElement("select").appendChild(C.createElement("option"))),
        (ot.type = "checkbox"),
        (v.checkOn = "" !== ot.value),
        (v.optSelected = st.selected),
        ((ot = C.createElement("input")).value = "t"),
        (ot.type = "radio"),
        (v.radioValue = "t" === ot.value);
    var pt,
        gt = x.expr.attrHandle;
    x.fn.extend({
            attr: function(e, t) {
                return U(this, x.attr, e, t, 1 < arguments.length);
            },
            removeAttr: function(e) {
                return this.each(function() {
                    x.removeAttr(this, e);
                });
            },
        }),
        x.extend({
            attr: function(e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute ?
                        x.prop(e, t, n) :
                        ((1 === o && x.isXMLDoc(e)) ||
                            (r =
                                x.attrHooks[t.toLowerCase()] ||
                                (x.expr.match.bool.test(t) ? pt : void 0)),
                            void 0 !== n ?
                            null === n ?
                            void x.removeAttr(e, t) :
                            r &&
                            "set" in r &&
                            void 0 !== (i = r.set(e, n, t)) ?
                            i :
                            (e.setAttribute(t, n + ""), n) :
                            r && "get" in r && null !== (i = r.get(e, t)) ?
                            i :
                            null == (i = x.find.attr(e, t)) ?
                            void 0 :
                            i);
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!v.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return (
                                e.setAttribute("type", t), n && (e.value = n), t
                            );
                        }
                    },
                },
            },
            removeAttr: function(e, t) {
                var n,
                    i = 0,
                    r = t && t.match(P);
                if (r && 1 === e.nodeType)
                    for (;
                        (n = r[i++]);) e.removeAttribute(n);
            },
        }),
        (pt = {
            set: function(e, t, n) {
                return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var s = gt[t] || x.find.attr;
            gt[t] = function(e, t, n) {
                var i,
                    r,
                    o = t.toLowerCase();
                return (
                    n ||
                    ((r = gt[o]),
                        (gt[o] = i),
                        (i = null != s(e, t, n) ? o : null),
                        (gt[o] = r)),
                    i
                );
            };
        });
    var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(P) || []).join(" ");
    }

    function _t(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }

    function bt(e) {
        return Array.isArray(e) ?
            e :
            ("string" == typeof e && e.match(P)) || [];
    }
    x.fn.extend({
            prop: function(e, t) {
                return U(this, x.prop, e, t, 1 < arguments.length);
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[x.propFix[e] || e];
                });
            },
        }),
        x.extend({
            prop: function(e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && x.isXMLDoc(e)) ||
                        ((t = x.propFix[t] || t), (r = x.propHooks[t])),
                        void 0 !== n ?
                        r && "set" in r && void 0 !== (i = r.set(e, n, t)) ?
                        i :
                        (e[t] = n) :
                        r && "get" in r && null !== (i = r.get(e, t)) ?
                        i :
                        e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = x.find.attr(e, "tabindex");
                        return t ?
                            parseInt(t, 10) :
                            mt.test(e.nodeName) ||
                            (vt.test(e.nodeName) && e.href) ?
                            0 :
                            -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
        (x.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return (
                    t && t.parentNode && t.parentNode.selectedIndex, null
                );
            },
            set: function(e) {
                var t = e.parentNode;
                t &&
                    (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex);
            },
        }),
        x.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function() {
                x.propFix[this.toLowerCase()] = this;
            }
        ),
        x.fn.extend({
            addClass: function(t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l = 0;
                if (y(t))
                    return this.each(function(e) {
                        x(this).addClass(t.call(this, e, _t(this)));
                    });
                if ((e = bt(t)).length)
                    for (;
                        (n = this[l++]);)
                        if (
                            ((r = _t(n)),
                                (i = 1 === n.nodeType && " " + yt(r) + " "))
                        ) {
                            for (s = 0;
                                (o = e[s++]);)
                                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (a = yt(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            removeClass: function(t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l = 0;
                if (y(t))
                    return this.each(function(e) {
                        x(this).removeClass(t.call(this, e, _t(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = bt(t)).length)
                    for (;
                        (n = this[l++]);)
                        if (
                            ((r = _t(n)),
                                (i = 1 === n.nodeType && " " + yt(r) + " "))
                        ) {
                            for (s = 0;
                                (o = e[s++]);)
                                for (; - 1 < i.indexOf(" " + o + " ");)
                                    i = i.replace(" " + o + " ", " ");
                            r !== (a = yt(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            toggleClass: function(r, t) {
                var o = typeof r,
                    s = "string" === o || Array.isArray(r);
                return "boolean" == typeof t && s ?
                    t ?
                    this.addClass(r) :
                    this.removeClass(r) :
                    y(r) ?
                    this.each(function(e) {
                        x(this).toggleClass(r.call(this, e, _t(this), t), t);
                    }) :
                    this.each(function() {
                        var e, t, n, i;
                        if (s)
                            for (
                                t = 0, n = x(this), i = bt(r);
                                (e = i[t++]);

                            )
                                n.hasClass(e) ?
                                n.removeClass(e) :
                                n.addClass(e);
                        else
                            (void 0 !== r && "boolean" !== o) ||
                            ((e = _t(this)) &&
                                X.set(this, "__className__", e),
                                this.setAttribute &&
                                this.setAttribute(
                                    "class",
                                    e || !1 === r ?
                                    "" :
                                    X.get(this, "__className__") ||
                                    ""
                                ));
                    });
            },
            hasClass: function(e) {
                var t,
                    n,
                    i = 0;
                for (t = " " + e + " ";
                    (n = this[i++]);)
                    if (
                        1 === n.nodeType &&
                        -1 < (" " + yt(_t(n)) + " ").indexOf(t)
                    )
                        return !0;
                return !1;
            },
        });
    var wt = /\r/g;
    x.fn.extend({
            val: function(n) {
                var i,
                    e,
                    r,
                    t = this[0];
                return arguments.length ?
                    ((r = y(n)),
                        this.each(function(e) {
                            var t;
                            1 === this.nodeType &&
                                (null == (t = r ? n.call(this, e, x(this).val()) : n) ?
                                    (t = "") :
                                    "number" == typeof t ?
                                    (t += "") :
                                    Array.isArray(t) &&
                                    (t = x.map(t, function(e) {
                                        return null == e ? "" : e + "";
                                    })),
                                    ((i =
                                            x.valHooks[this.type] ||
                                            x.valHooks[this.nodeName.toLowerCase()]) &&
                                        "set" in i &&
                                        void 0 !== i.set(this, t, "value")) ||
                                    (this.value = t));
                        })) :
                    t ?
                    (i =
                        x.valHooks[t.type] ||
                        x.valHooks[t.nodeName.toLowerCase()]) &&
                    "get" in i &&
                    void 0 !== (e = i.get(t, "value")) ?
                    e :
                    "string" == typeof(e = t.value) ?
                    e.replace(wt, "") :
                    null == e ?
                    "" :
                    e :
                    void 0;
            },
        }),
        x.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = x.find.attr(e, "value");
                        return null != t ? t : yt(x.text(e));
                    },
                },
                select: {
                    get: function(e) {
                        var t,
                            n,
                            i,
                            r = e.options,
                            o = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            l = s ? o + 1 : r.length;
                        for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                            if (
                                ((n = r[i]).selected || i === o) &&
                                !n.disabled &&
                                (!n.parentNode.disabled ||
                                    !A(n.parentNode, "optgroup"))
                            ) {
                                if (((t = x(n).val()), s)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function(e, t) {
                        for (
                            var n,
                                i,
                                r = e.options,
                                o = x.makeArray(t),
                                s = r.length; s--;

                        )
                            ((i = r[s]).selected = -1 < x.inArray(x.valHooks.option.get(i), o)) &&
                            (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        x.each(["radio", "checkbox"], function() {
            (x.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return (e.checked = -1 < x.inArray(x(e).val(), t));
                },
            }),
            v.checkOn ||
                (x.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ?
                        "on" :
                        e.value;
                });
        }),
        (v.focusin = "onfocusin" in T);
    var Et = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) {
            e.stopPropagation();
        };
    x.extend(x.event, {
            trigger: function(e, t, n, i) {
                var r,
                    o,
                    s,
                    a,
                    l,
                    u,
                    c,
                    f,
                    d = [n || C],
                    h = m.call(e, "type") ? e.type : e,
                    p = m.call(e, "namespace") ? e.namespace.split(".") : [];
                if (
                    ((o = f = s = n = n || C),
                        3 !== n.nodeType &&
                        8 !== n.nodeType &&
                        !Et.test(h + x.event.triggered) &&
                        (-1 < h.indexOf(".") &&
                            ((h = (p = h.split(".")).shift()), p.sort()),
                            (l = h.indexOf(":") < 0 && "on" + h),
                            ((e = e[x.expando] ?
                                e :
                                new x.Event(
                                    h,
                                    "object" == typeof e && e
                                )).isTrigger = i ? 2 : 3),
                            (e.namespace = p.join(".")),
                            (e.rnamespace = e.namespace ?
                                new RegExp(
                                    "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                                ) :
                                null),
                            (e.result = void 0),
                            e.target || (e.target = n),
                            (t = null == t ? [e] : x.makeArray(t, [e])),
                            (c = x.event.special[h] || {}),
                            i || !c.trigger || !1 !== c.trigger.apply(n, t)))
                ) {
                    if (!i && !c.noBubble && !_(n)) {
                        for (
                            a = c.delegateType || h,
                            Et.test(a + h) || (o = o.parentNode); o; o = o.parentNode
                        )
                            d.push(o), (s = o);
                        s === (n.ownerDocument || C) &&
                            d.push(s.defaultView || s.parentWindow || T);
                    }
                    for (r = 0;
                        (o = d[r++]) && !e.isPropagationStopped();)
                        (f = o),
                        (e.type = 1 < r ? a : c.bindType || h),
                        (u =
                            (X.get(o, "events") || {})[e.type] &&
                            X.get(o, "handle")) && u.apply(o, t),
                        (u = l && o[l]) &&
                        u.apply &&
                        z(o) &&
                        ((e.result = u.apply(o, t)), !1 === e.result && e.preventDefault());
                    return (
                        (e.type = h),
                        i ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(d.pop(), t)) ||
                        !z(n) ||
                        (l &&
                            y(n[h]) &&
                            !_(n) &&
                            ((s = n[l]) && (n[l] = null),
                                (x.event.triggered = h),
                                e.isPropagationStopped() &&
                                f.addEventListener(h, Tt),
                                n[h](),
                                e.isPropagationStopped() &&
                                f.removeEventListener(h, Tt),
                                (x.event.triggered = void 0),
                                s && (n[l] = s))),
                        e.result
                    );
                }
            },
            simulate: function(e, t, n) {
                var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0 });
                x.event.trigger(i, null, t);
            },
        }),
        x.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    x.event.trigger(e, t, this);
                });
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return x.event.trigger(e, t, n, !0);
            },
        }),
        v.focusin ||
        x.each({ focus: "focusin", blur: "focusout" }, function(n, i) {
            var r = function(e) {
                x.event.simulate(i, e.target, x.event.fix(e));
            };
            x.event.special[i] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = X.access(e, i);
                    t || e.addEventListener(n, r, !0),
                        X.access(e, i, (t || 0) + 1);
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = X.access(e, i) - 1;
                    t
                        ?
                        X.access(e, i, t) :
                        (e.removeEventListener(n, r, !0), X.remove(e, i));
                },
            };
        });
    var Ct = T.location,
        xt = Date.now(),
        St = /\?/;
    x.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new T.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return (
            (t && !t.getElementsByTagName("parsererror").length) ||
            x.error("Invalid XML: " + e),
            t
        );
    };
    var Dt = /\[\]$/,
        At = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;

    function kt(n, e, i, r) {
        var t;
        if (Array.isArray(e))
            x.each(e, function(e, t) {
                i || Dt.test(n) ?
                    r(n, t) :
                    kt(
                        n +
                        "[" +
                        ("object" == typeof t && null != t ? e : "") +
                        "]",
                        t,
                        i,
                        r
                    );
            });
        else if (i || "object" !== w(e)) r(n, e);
        else
            for (t in e) kt(n + "[" + t + "]", e[t], i, r);
    }
    (x.param = function(e, t) {
        var n,
            i = [],
            r = function(e, t) {
                var n = y(t) ? t() : t;
                i[i.length] =
                    encodeURIComponent(e) +
                    "=" +
                    encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !x.isPlainObject(e)))
            x.each(e, function() {
                r(this.name, this.value);
            });
        else
            for (n in e) kt(n, e[n], t, r);
        return i.join("&");
    }),
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                    var e = x.prop(this, "elements");
                    return e ? x.makeArray(e) : this;
                })
                .filter(function() {
                    var e = this.type;
                    return (
                        this.name &&
                        !x(this).is(":disabled") &&
                        It.test(this.nodeName) &&
                        !Nt.test(e) &&
                        (this.checked || !de.test(e))
                    );
                })
                .map(function(e, t) {
                    var n = x(this).val();
                    return null == n ?
                        null :
                        Array.isArray(n) ?
                        x.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(At, "\r\n"),
                            };
                        }) :
                        { name: t.name, value: n.replace(At, "\r\n") };
                })
                .get();
        },
    });
    var Ot = /%20/g,
        Lt = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Rt = {},
        Mt = {},
        Ft = "*/".concat("*"),
        Wt = C.createElement("a");

    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                i = 0,
                r = e.toLowerCase().match(P) || [];
            if (y(t))
                for (;
                    (n = r[i++]);)
                    "+" === n[0] ?
                    ((n = n.slice(1) || "*"),
                        (o[n] = o[n] || []).unshift(t)) :
                    (o[n] = o[n] || []).push(t);
        };
    }

    function Ut(t, r, o, s) {
        var a = {},
            l = t === Mt;

        function u(e) {
            var i;
            return (
                (a[e] = !0),
                x.each(t[e] || [], function(e, t) {
                    var n = t(r, o, s);
                    return "string" != typeof n || l || a[n] ?
                        l ?
                        !(i = n) :
                        void 0 :
                        (r.dataTypes.unshift(n), u(n), !1);
                }),
                i
            );
        }
        return u(r.dataTypes[0]) || (!a["*"] && u("*"));
    }

    function Kt(e, t) {
        var n,
            i,
            r = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && x.extend(!0, e, i), e;
    }
    (Wt.href = Ct.href),
    x.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
                ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ft,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": x.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function(e, t) {
                return t ? Kt(Kt(e, x.ajaxSettings), t) : Kt(x.ajaxSettings, e);
            },
            ajaxPrefilter: Bt(Rt),
            ajaxTransport: Bt(Mt),
            ajax: function(e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var c,
                    f,
                    d,
                    n,
                    h,
                    i,
                    p,
                    g,
                    r,
                    o,
                    m = x.ajaxSetup({}, t),
                    v = m.context || m,
                    y = m.context && (v.nodeType || v.jquery) ? x(v) : x.event,
                    _ = x.Deferred(),
                    b = x.Callbacks("once memory"),
                    w = m.statusCode || {},
                    s = {},
                    a = {},
                    l = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (p) {
                                if (!n)
                                    for (n = {};
                                        (t = Ht.exec(d));)
                                        n[t[1].toLowerCase() + " "] = (
                                            n[t[1].toLowerCase() + " "] || []
                                        ).concat(t[2]);
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return p ? d : null;
                        },
                        setRequestHeader: function(e, t) {
                            return (
                                null == p &&
                                ((e = a[e.toLowerCase()] =
                                        a[e.toLowerCase()] || e),
                                    (s[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function(e) {
                            return null == p && (m.mimeType = e), this;
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (p) E.always(e[E.status]);
                                else
                                    for (t in e) w[t] = [w[t], e[t]];
                            return this;
                        },
                        abort: function(e) {
                            var t = e || l;
                            return c && c.abort(t), u(0, t), this;
                        },
                    };
                if (
                    (_.promise(E),
                        (m.url = ((e || m.url || Ct.href) + "").replace(
                            qt,
                            Ct.protocol + "//"
                        )),
                        (m.type = t.method || t.type || m.method || m.type),
                        (m.dataTypes = (m.dataType || "*")
                            .toLowerCase()
                            .match(P) || [""]),
                        null == m.crossDomain)
                ) {
                    i = C.createElement("a");
                    try {
                        (i.href = m.url),
                        (i.href = i.href),
                        (m.crossDomain =
                            Wt.protocol + "//" + Wt.host !=
                            i.protocol + "//" + i.host);
                    } catch (e) {
                        m.crossDomain = !0;
                    }
                }
                if (
                    (m.data &&
                        m.processData &&
                        "string" != typeof m.data &&
                        (m.data = x.param(m.data, m.traditional)),
                        Ut(Rt, m, t, E),
                        p)
                )
                    return E;
                for (r in ((g = x.event && m.global) &&
                        0 == x.active++ &&
                        x.event.trigger("ajaxStart"),
                        (m.type = m.type.toUpperCase()),
                        (m.hasContent = !Pt.test(m.type)),
                        (f = m.url.replace(Lt, "")),
                        m.hasContent ?
                        m.data &&
                        m.processData &&
                        0 ===
                        (m.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        (m.data = m.data.replace(Ot, "+")) :
                        ((o = m.url.slice(f.length)),
                            m.data &&
                            (m.processData || "string" == typeof m.data) &&
                            ((f += (St.test(f) ? "&" : "?") + m.data),
                                delete m.data), !1 === m.cache &&
                            ((f = f.replace(jt, "$1")),
                                (o = (St.test(f) ? "&" : "?") + "_=" + xt++ + o)),
                            (m.url = f + o)),
                        m.ifModified &&
                        (x.lastModified[f] &&
                            E.setRequestHeader(
                                "If-Modified-Since",
                                x.lastModified[f]
                            ),
                            x.etag[f] &&
                            E.setRequestHeader("If-None-Match", x.etag[f])),
                        ((m.data && m.hasContent && !1 !== m.contentType) ||
                            t.contentType) &&
                        E.setRequestHeader("Content-Type", m.contentType),
                        E.setRequestHeader(
                            "Accept",
                            m.dataTypes[0] && m.accepts[m.dataTypes[0]] ?
                            m.accepts[m.dataTypes[0]] +
                            ("*" !== m.dataTypes[0] ?
                                ", " + Ft + "; q=0.01" :
                                "") :
                            m.accepts["*"]
                        ),
                        m.headers))
                    E.setRequestHeader(r, m.headers[r]);
                if (m.beforeSend && (!1 === m.beforeSend.call(v, E, m) || p))
                    return E.abort();
                if (
                    ((l = "abort"),
                        b.add(m.complete),
                        E.done(m.success),
                        E.fail(m.error),
                        (c = Ut(Mt, m, t, E)))
                ) {
                    if (
                        ((E.readyState = 1),
                            g && y.trigger("ajaxSend", [E, m]),
                            p)
                    )
                        return E;
                    m.async &&
                        0 < m.timeout &&
                        (h = T.setTimeout(function() {
                            E.abort("timeout");
                        }, m.timeout));
                    try {
                        (p = !1), c.send(s, u);
                    } catch (e) {
                        if (p) throw e;
                        u(-1, e);
                    }
                } else u(-1, "No Transport");

                function u(e, t, n, i) {
                    var r,
                        o,
                        s,
                        a,
                        l,
                        u = t;
                    p ||
                        ((p = !0),
                            h && T.clearTimeout(h),
                            (c = void 0),
                            (d = i || ""),
                            (E.readyState = 0 < e ? 4 : 0),
                            (r = (200 <= e && e < 300) || 304 === e),
                            n &&
                            (a = (function(e, t, n) {
                                for (
                                    var i,
                                        r,
                                        o,
                                        s,
                                        a = e.contents,
                                        l = e.dataTypes;
                                    "*" === l[0];

                                )
                                    l.shift(),
                                    void 0 === i &&
                                    (i =
                                        e.mimeType ||
                                        t.getResponseHeader(
                                            "Content-Type"
                                        ));
                                if (i)
                                    for (r in a)
                                        if (a[r] && a[r].test(i)) {
                                            l.unshift(r);
                                            break;
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (r in n) {
                                        if (!l[0] ||
                                            e.converters[r + " " + l[0]]
                                        ) {
                                            o = r;
                                            break;
                                        }
                                        s || (s = r);
                                    }
                                    o = o || s;
                                }
                                if (o) return o !== l[0] && l.unshift(o), n[o];
                            })(m, E, n)),
                            (a = (function(e, t, n, i) {
                                var r,
                                    o,
                                    s,
                                    a,
                                    l,
                                    u = {},
                                    c = e.dataTypes.slice();
                                if (c[1])
                                    for (s in e.converters)
                                        u[s.toLowerCase()] = e.converters[s];
                                for (o = c.shift(); o;)
                                    if (
                                        (e.responseFields[o] &&
                                            (n[e.responseFields[o]] = t), !l &&
                                            i &&
                                            e.dataFilter &&
                                            (t = e.dataFilter(t, e.dataType)),
                                            (l = o),
                                            (o = c.shift()))
                                    )
                                        if ("*" === o) o = l;
                                        else if ("*" !== l && l !== o) {
                                    if (!(s = u[l + " " + o] || u["* " + o]))
                                        for (r in u)
                                            if (
                                                (a = r.split(" "))[1] ===
                                                o &&
                                                (s =
                                                    u[l + " " + a[0]] ||
                                                    u["* " + a[0]])
                                            ) {
                                                !0 === s ?
                                                    (s = u[r]) :
                                                    !0 !== u[r] &&
                                                    ((o = a[0]),
                                                        c.unshift(a[1]));
                                                break;
                                            }
                                    if (!0 !== s)
                                        if (s && e.throws) t = s(t);
                                        else
                                            try {
                                                t = s(t);
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ?
                                                        e :
                                                        "No conversion from " +
                                                        l +
                                                        " to " +
                                                        o,
                                                };
                                            }
                                }
                                return { state: "success", data: t };
                            })(m, a, E, r)),
                            r ?
                            (m.ifModified &&
                                ((l = E.getResponseHeader("Last-Modified")) &&
                                    (x.lastModified[f] = l),
                                    (l = E.getResponseHeader("etag")) &&
                                    (x.etag[f] = l)),
                                204 === e || "HEAD" === m.type ?
                                (u = "nocontent") :
                                304 === e ?
                                (u = "notmodified") :
                                ((u = a.state),
                                    (o = a.data),
                                    (r = !(s = a.error)))) :
                            ((s = u),
                                (!e && u) || ((u = "error"), e < 0 && (e = 0))),
                            (E.status = e),
                            (E.statusText = (t || u) + ""),
                            r ?
                            _.resolveWith(v, [o, u, E]) :
                            _.rejectWith(v, [E, u, s]),
                            E.statusCode(w),
                            (w = void 0),
                            g &&
                            y.trigger(r ? "ajaxSuccess" : "ajaxError", [
                                E,
                                m,
                                r ? o : s,
                            ]),
                            b.fireWith(v, [E, u]),
                            g &&
                            (y.trigger("ajaxComplete", [E, m]),
                                --x.active || x.event.trigger("ajaxStop")));
                }
                return E;
            },
            getJSON: function(e, t, n) {
                return x.get(e, t, n, "json");
            },
            getScript: function(e, t) {
                return x.get(e, void 0, t, "script");
            },
        }),
        x.each(["get", "post"], function(e, r) {
            x[r] = function(e, t, n, i) {
                return (
                    y(t) && ((i = i || n), (n = t), (t = void 0)),
                    x.ajax(
                        x.extend({
                                url: e,
                                type: r,
                                dataType: i,
                                data: t,
                                success: n,
                            },
                            x.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        (x._evalUrl = function(e, t) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function() {} },
                dataFilter: function(e) {
                    x.globalEval(e, t);
                },
            });
        }),
        x.fn.extend({
            wrapAll: function(e) {
                var t;
                return (
                    this[0] &&
                    (y(e) && (e = e.call(this[0])),
                        (t = x(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                        .map(function() {
                            for (var e = this; e.firstElementChild;)
                                e = e.firstElementChild;
                            return e;
                        })
                        .append(this)),
                    this
                );
            },
            wrapInner: function(n) {
                return y(n) ?
                    this.each(function(e) {
                        x(this).wrapInner(n.call(this, e));
                    }) :
                    this.each(function() {
                        var e = x(this),
                            t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n);
                    });
            },
            wrap: function(t) {
                var n = y(t);
                return this.each(function(e) {
                    x(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function(e) {
                return (
                    this.parent(e)
                    .not("body")
                    .each(function() {
                        x(this).replaceWith(this.childNodes);
                    }),
                    this
                );
            },
        }),
        (x.expr.pseudos.hidden = function(e) {
            return !x.expr.pseudos.visible(e);
        }),
        (x.expr.pseudos.visible = function(e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (x.ajaxSettings.xhr = function() {
            try {
                return new T.XMLHttpRequest();
            } catch (e) {}
        });
    var $t = { 0: 200, 1223: 204 },
        Qt = x.ajaxSettings.xhr();
    (v.cors = !!Qt && "withCredentials" in Qt),
    (v.ajax = Qt = !!Qt),
    x.ajaxTransport(function(r) {
            var o, s;
            if (v.cors || (Qt && !r.crossDomain))
                return {
                    send: function(e, t) {
                        var n,
                            i = r.xhr();
                        if (
                            (i.open(
                                    r.type,
                                    r.url,
                                    r.async,
                                    r.username,
                                    r.password
                                ),
                                r.xhrFields)
                        )
                            for (n in r.xhrFields) i[n] = r.xhrFields[n];
                        for (n in (r.mimeType &&
                                i.overrideMimeType &&
                                i.overrideMimeType(r.mimeType),
                                r.crossDomain ||
                                e["X-Requested-With"] ||
                                (e["X-Requested-With"] = "XMLHttpRequest"),
                                e))
                            i.setRequestHeader(n, e[n]);
                        (o = function(e) {
                            return function() {
                                o &&
                                    ((o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null),
                                        "abort" === e ?
                                        i.abort() :
                                        "error" === e ?
                                        "number" != typeof i.status ?
                                        t(0, "error") :
                                        t(i.status, i.statusText) :
                                        t(
                                            $t[i.status] || i.status,
                                            i.statusText,
                                            "text" !==
                                            (i.responseType || "text") ||
                                            "string" !=
                                            typeof i.responseText ?
                                            { binary: i.response } :
                                            { text: i.responseText },
                                            i.getAllResponseHeaders()
                                        ));
                            };
                        }),
                        (i.onload = o()),
                        (s = i.onerror = i.ontimeout = o("error")),
                        void 0 !== i.onabort ?
                            (i.onabort = s) :
                            (i.onreadystatechange = function() {
                                4 === i.readyState &&
                                    T.setTimeout(function() {
                                        o && s();
                                    });
                            }),
                            (o = o("abort"));
                        try {
                            i.send((r.hasContent && r.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function() {
                        o && o();
                    },
                };
        }),
        x.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        x.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function(e) {
                    return x.globalEval(e), e;
                },
            },
        }),
        x.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
        }),
        x.ajaxTransport("script", function(n) {
            var i, r;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function(e, t) {
                        (i = x("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (r = function(e) {
                                    i.remove(),
                                        (r = null),
                                        e &&
                                        t(
                                            "error" === e.type ? 404 : 200,
                                            e.type
                                        );
                                })
                            )),
                        C.head.appendChild(i[0]);
                    },
                    abort: function() {
                        r && r();
                    },
                };
        });
    var Vt,
        zt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = zt.pop() || x.expando + "_" + xt++;
                return (this[e] = !0), e;
            },
        }),
        x.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i,
                r,
                o,
                s = !1 !== e.jsonp &&
                (Yt.test(e.url) ?
                    "url" :
                    "string" == typeof e.data &&
                    0 ===
                    (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                    ) &&
                    Yt.test(e.data) &&
                    "data");
            if (s || "jsonp" === e.dataTypes[0])
                return (
                    (i = e.jsonpCallback = y(e.jsonpCallback) ?
                        e.jsonpCallback() :
                        e.jsonpCallback),
                    s ?
                    (e[s] = e[s].replace(Yt, "$1" + i)) :
                    !1 !== e.jsonp &&
                    (e.url +=
                        (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                    (e.converters["script json"] = function() {
                        return o || x.error(i + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (r = T[i]),
                    (T[i] = function() {
                        o = arguments;
                    }),
                    n.always(function() {
                        void 0 === r ? x(T).removeProp(i) : (T[i] = r),
                            e[i] &&
                            ((e.jsonpCallback = t.jsonpCallback),
                                zt.push(i)),
                            o && y(r) && r(o[0]),
                            (o = r = void 0);
                    }),
                    "script"
                );
        }),
        (v.createHTMLDocument =
            (((Vt = C.implementation.createHTMLDocument("").body).innerHTML =
                    "<form></form><form></form>"),
                2 === Vt.childNodes.length)),
        (x.parseHTML = function(e, t, n) {
            return "string" != typeof e ?
                [] :
                ("boolean" == typeof t && ((n = t), (t = !1)),
                    t ||
                    (v.createHTMLDocument ?
                        (((i = (t = C.implementation.createHTMLDocument(
                                ""
                            )).createElement("base")).href = C.location.href),
                            t.head.appendChild(i)) :
                        (t = C)),
                    (o = !n && []),
                    (r = N.exec(e)) ?
                    [t.createElement(r[1])] :
                    ((r = we([e], t, o)),
                        o && o.length && x(o).remove(),
                        x.merge([], r.childNodes)));
            var i, r, o;
        }),
        (x.fn.load = function(e, t, n) {
            var i,
                r,
                o,
                s = this,
                a = e.indexOf(" ");
            return (-1 < a && ((i = yt(e.slice(a))), (e = e.slice(0, a))),
                y(t) ?
                ((n = t), (t = void 0)) :
                t && "object" == typeof t && (r = "POST"),
                0 < s.length &&
                x
                .ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                })
                .done(function(e) {
                    (o = arguments),
                    s.html(
                        i ?
                        x("<div>")
                        .append(x.parseHTML(e))
                        .find(i) :
                        e
                    );
                })
                .always(
                    n &&
                    function(e, t) {
                        s.each(function() {
                            n.apply(
                                this,
                                o || [e.responseText, t, e]
                            );
                        });
                    }
                ),
                this
            );
        }),
        x.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function(e, t) {
                x.fn[t] = function(e) {
                    return this.on(t, e);
                };
            }
        ),
        (x.expr.pseudos.animated = function(t) {
            return x.grep(x.timers, function(e) {
                return t === e.elem;
            }).length;
        }),
        (x.offset = {
            setOffset: function(e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    u = x.css(e, "position"),
                    c = x(e),
                    f = {};
                "static" === u && (e.style.position = "relative"),
                    (a = c.offset()),
                    (o = x.css(e, "top")),
                    (l = x.css(e, "left")),
                    (r =
                        ("absolute" === u || "fixed" === u) &&
                        -1 < (o + l).indexOf("auto") ?
                        ((s = (i = c.position()).top), i.left) :
                        ((s = parseFloat(o) || 0), parseFloat(l) || 0)),
                    y(t) && (t = t.call(e, n, x.extend({}, a))),
                    null != t.top && (f.top = t.top - a.top + s),
                    null != t.left && (f.left = t.left - a.left + r),
                    "using" in t ? t.using.call(e, f) : c.css(f);
            },
        }),
        x.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ?
                        this :
                        this.each(function(e) {
                            x.offset.setOffset(this, t, e);
                        });
                var e,
                    n,
                    i = this[0];
                return i ?
                    i.getClientRects().length ?
                    ((e = i.getBoundingClientRect()),
                        (n = i.ownerDocument.defaultView), {
                            top: e.top + n.pageYOffset,
                            left: e.left + n.pageXOffset,
                        }) :
                    { top: 0, left: 0 } :
                    void 0;
            },
            position: function() {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        i = this[0],
                        r = { top: 0, left: 0 };
                    if ("fixed" === x.css(i, "position"))
                        t = i.getBoundingClientRect();
                    else {
                        for (
                            t = this.offset(),
                            n = i.ownerDocument,
                            e = i.offsetParent || n.documentElement; e &&
                            (e === n.body || e === n.documentElement) &&
                            "static" === x.css(e, "position");

                        )
                            e = e.parentNode;
                        e &&
                            e !== i &&
                            1 === e.nodeType &&
                            (((r = x(e).offset()).top += x.css(
                                    e,
                                    "borderTopWidth", !0
                                )),
                                (r.left += x.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                        top: t.top - r.top - x.css(i, "marginTop", !0),
                        left: t.left - r.left - x.css(i, "marginLeft", !0),
                    };
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (
                        var e = this.offsetParent; e && "static" === x.css(e, "position");

                    )
                        e = e.offsetParent;
                    return e || re;
                });
            },
        }),
        x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function(t, r) {
                var o = "pageYOffset" === r;
                x.fn[t] = function(e) {
                    return U(
                        this,
                        function(e, t, n) {
                            var i;
                            if (
                                (_(e) ?
                                    (i = e) :
                                    9 === e.nodeType && (i = e.defaultView),
                                    void 0 === n)
                            )
                                return i ? i[r] : e[t];
                            i
                                ?
                                i.scrollTo(
                                    o ? i.pageXOffset : n,
                                    o ? n : i.pageYOffset
                                ) :
                                (e[t] = n);
                        },
                        t,
                        e,
                        arguments.length
                    );
                };
            }
        ),
        x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = Ke(v.pixelPosition, function(e, t) {
                if (t)
                    return (
                        (t = Ue(e, n)),
                        Fe.test(t) ? x(e).position()[n] + "px" : t
                    );
            });
        }),
        x.each({ Height: "height", Width: "width" }, function(s, a) {
            x.each({ padding: "inner" + s, content: a, "": "outer" + s },
                function(i, o) {
                    x.fn[o] = function(e, t) {
                        var n =
                            arguments.length &&
                            (i || "boolean" != typeof e),
                            r =
                            i ||
                            (!0 === e || !0 === t ? "margin" : "border");
                        return U(
                            this,
                            function(e, t, n) {
                                var i;
                                return _(e) ?
                                    0 === o.indexOf("outer") ?
                                    e["inner" + s] :
                                    e.document.documentElement[
                                        "client" + s
                                    ] :
                                    9 === e.nodeType ?
                                    ((i = e.documentElement),
                                        Math.max(
                                            e.body["scroll" + s],
                                            i["scroll" + s],
                                            e.body["offset" + s],
                                            i["offset" + s],
                                            i["client" + s]
                                        )) :
                                    void 0 === n ?
                                    x.css(e, t, r) :
                                    x.style(e, t, n, r);
                            },
                            a,
                            n ? e : void 0,
                            n
                        );
                    };
                }
            );
        }),
        x.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function(e, n) {
                x.fn[n] = function(e, t) {
                    return 0 < arguments.length ?
                        this.on(n, null, e, t) :
                        this.trigger(n);
                };
            }
        ),
        x.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        x.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function(e, t) {
                return this.off(e, null, t);
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ?
                    this.off(e, "**") :
                    this.off(t, e || "**", n);
            },
        }),
        (x.proxy = function(e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
                return (
                    (i = a.call(arguments, 2)),
                    ((r = function() {
                        return e.apply(t || this, i.concat(a.call(arguments)));
                    }).guid = e.guid = e.guid || x.guid++),
                    r
                );
        }),
        (x.holdReady = function(e) {
            e ? x.readyWait++ : x.ready(!0);
        }),
        (x.isArray = Array.isArray),
        (x.parseJSON = JSON.parse),
        (x.nodeName = A),
        (x.isFunction = y),
        (x.isWindow = _),
        (x.camelCase = V),
        (x.type = w),
        (x.now = Date.now),
        (x.isNumeric = function(e) {
            var t = x.type(e);
            return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
        }),
        "function" == typeof define &&
        define.amd &&
        define("jquery", [], function() {
            return x;
        });
    var Xt = T.jQuery,
        Gt = T.$;
    return (
        (x.noConflict = function(e) {
            return (
                T.$ === x && (T.$ = Gt),
                e && T.jQuery === x && (T.jQuery = Xt),
                x
            );
        }),
        e || (T.jQuery = T.$ = x),
        x
    );
}),
(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ?
        (module.exports = t()) :
        "function" == typeof define && define.amd ?
        define(t) :
        (e.Popper = t());
})(this, function() {
    "use strict";

    function s(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }

    function b(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n;
    }

    function h(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }

    function p(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body;
        }
        var t = b(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : p(h(e));
    }

    function g(e) {
        return 11 === e ? F : 10 === e ? W : F || W;
    }

    function O(e) {
        if (!e) return document.documentElement;
        for (
            var t = g(10) ? document.body : null,
                n = e.offsetParent || null; n === t && e.nextElementSibling;

        )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ?
            -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
            "static" === b(n, "position") ?
            O(n) :
            n :
            e ?
            e.ownerDocument.documentElement :
            document.documentElement;
    }

    function c(e) {
        return null === e.parentNode ? e : c(e.parentNode);
    }

    function m(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n =
            e.compareDocumentPosition(t) &
            Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s,
            a,
            l = o.commonAncestorContainer;
        if ((e !== l && t !== l) || i.contains(r))
            return "BODY" === (a = (s = l).nodeName) ||
                ("HTML" !== a && O(s.firstElementChild) !== s) ?
                O(l) :
                l;
        var u = c(e);
        return u.host ? m(u.host, t) : m(e, c(t).host);
    }

    function v(e) {
        var t =
            "top" ===
            (1 < arguments.length && void 0 !== arguments[1] ?
                arguments[1] :
                "top") ?
            "scrollTop" :
            "scrollLeft",
            n = e.nodeName;
        if ("BODY" !== n && "HTML" !== n) return e[t];
        var i = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || i)[t];
    }

    function f(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return (
            parseFloat(e["border" + n + "Width"], 10) +
            parseFloat(e["border" + i + "Width"], 10)
        );
    }

    function r(e, t, n, i) {
        return k(
            t["offset" + e],
            t["scroll" + e],
            n["client" + e],
            n["offset" + e],
            n["scroll" + e],
            g(10) ?
            parseInt(n["offset" + e]) +
            parseInt(
                i["margin" + ("Height" === e ? "Top" : "Left")]
            ) +
            parseInt(
                i[
                    "margin" +
                    ("Height" === e ? "Bottom" : "Right")
                ]
            ) :
            0
        );
    }

    function y(e) {
        var t = e.body,
            n = e.documentElement,
            i = g(10) && getComputedStyle(n);
        return { height: r("Height", t, n, i), width: r("Width", t, n, i) };
    }

    function w(e) {
        return K({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height,
        });
    }

    function L(e) {
        var t = {};
        try {
            if (g(10)) {
                t = e.getBoundingClientRect();
                var n = v(e, "top"),
                    i = v(e, "left");
                (t.top += n),
                (t.left += i),
                (t.bottom += n),
                (t.right += i);
            } else t = e.getBoundingClientRect();
        } catch (e) {}
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top,
            },
            o = "HTML" === e.nodeName ? y(e.ownerDocument) : {},
            s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            u = e.offsetHeight - a;
        if (l || u) {
            var c = b(e);
            (l -= f(c, "x")),
            (u -= f(c, "y")),
            (r.width -= l),
            (r.height -= u);
        }
        return w(r);
    }

    function _(e, t) {
        var n =
            2 < arguments.length &&
            void 0 !== arguments[2] &&
            arguments[2],
            i = g(10),
            r = "HTML" === t.nodeName,
            o = L(e),
            s = L(t),
            a = p(e),
            l = b(t),
            u = parseFloat(l.borderTopWidth, 10),
            c = parseFloat(l.borderLeftWidth, 10);
        n && r && ((s.top = k(s.top, 0)), (s.left = k(s.left, 0)));
        var f = w({
            top: o.top - s.top - u,
            left: o.left - s.left - c,
            width: o.width,
            height: o.height,
        });
        if (((f.marginTop = 0), (f.marginLeft = 0), !i && r)) {
            var d = parseFloat(l.marginTop, 10),
                h = parseFloat(l.marginLeft, 10);
            (f.top -= u - d),
            (f.bottom -= u - d),
            (f.left -= c - h),
            (f.right -= c - h),
            (f.marginTop = d),
            (f.marginLeft = h);
        }
        return (
            (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) &&
            (f = (function(e, t) {
                var n =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                    i = v(t, "top"),
                    r = v(t, "left"),
                    o = n ? -1 : 1;
                return (
                    (e.top += i * o),
                    (e.bottom += i * o),
                    (e.left += r * o),
                    (e.right += r * o),
                    e
                );
            })(f, t)),
            f
        );
    }

    function E(e) {
        if (!e || !e.parentElement || g()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === b(t, "transform");)
            t = t.parentElement;
        return t || document.documentElement;
    }

    function d(e, t, n, i) {
        var r =
            4 < arguments.length &&
            void 0 !== arguments[4] &&
            arguments[4],
            o = { top: 0, left: 0 },
            s = r ? E(e) : m(e, t);
        if ("viewport" === i)
            o = (function(e) {
                var t =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                    n = e.ownerDocument.documentElement,
                    i = _(e, n),
                    r = k(n.clientWidth, window.innerWidth || 0),
                    o = k(n.clientHeight, window.innerHeight || 0),
                    s = t ? 0 : v(n),
                    a = t ? 0 : v(n, "left");
                return w({
                    top: s - i.top + i.marginTop,
                    left: a - i.left + i.marginLeft,
                    width: r,
                    height: o,
                });
            })(s, r);
        else {
            var a;
            "scrollParent" === i
                ?
                "BODY" === (a = p(h(t))).nodeName &&
                (a = e.ownerDocument.documentElement) :
                (a =
                    "window" === i ? e.ownerDocument.documentElement : i);
            var l = _(a, s, r);
            if (
                "HTML" !== a.nodeName ||
                (function e(t) {
                    var n = t.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === b(t, "position")) return !0;
                    var i = h(t);
                    return !!i && e(i);
                })(s)
            )
                o = l;
            else {
                var u = y(e.ownerDocument),
                    c = u.height,
                    f = u.width;
                (o.top += l.top - l.marginTop),
                (o.bottom = c + l.top),
                (o.left += l.left - l.marginLeft),
                (o.right = f + l.left);
            }
        }
        var d = "number" == typeof(n = n || 0);
        return (
            (o.left += d ? n : n.left || 0),
            (o.top += d ? n : n.top || 0),
            (o.right -= d ? n : n.right || 0),
            (o.bottom -= d ? n : n.bottom || 0),
            o
        );
    }

    function a(e, t, i, n, r) {
        var o =
            5 < arguments.length && void 0 !== arguments[5] ?
            arguments[5] :
            0;
        if (-1 === e.indexOf("auto")) return e;
        var s = d(i, n, o, r),
            a = {
                top: { width: s.width, height: t.top - s.top },
                right: { width: s.right - t.right, height: s.height },
                bottom: { width: s.width, height: s.bottom - t.bottom },
                left: { width: t.left - s.left, height: s.height },
            },
            l = Object.keys(a)
            .map(function(e) {
                return K({ key: e }, a[e], {
                    area: ((t = a[e]), t.width * t.height),
                });
                var t;
            })
            .sort(function(e, t) {
                return t.area - e.area;
            }),
            u = l.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight;
            }),
            c = 0 < u.length ? u[0].key : l[0].key,
            f = e.split("-")[1];
        return c + (f ? "-" + f : "");
    }

    function l(e, t, n) {
        var i =
            3 < arguments.length && void 0 !== arguments[3] ?
            arguments[3] :
            null;
        return _(n, i ? E(t) : m(t, n), i);
    }

    function T(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n =
            parseFloat(t.marginTop || 0) +
            parseFloat(t.marginBottom || 0),
            i =
            parseFloat(t.marginLeft || 0) +
            parseFloat(t.marginRight || 0);
        return { width: e.offsetWidth + i, height: e.offsetHeight + n };
    }

    function C(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
        });
    }

    function x(e, t, n) {
        n = n.split("-")[0];
        var i = T(e),
            r = { width: i.width, height: i.height },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
        return (
            (r[s] = t[s] + t[l] / 2 - i[l] / 2),
            (r[a] = n === a ? t[a] - i[u] : t[C(a)]),
            r
        );
    }

    function j(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }

    function S(e, n, t) {
        return (
            (void 0 === t ?
                e :
                e.slice(
                    0,
                    (function(e, t, n) {
                        if (Array.prototype.findIndex)
                            return e.findIndex(function(e) {
                                return e.name === n;
                            });
                        var i = j(e, function(e) {
                            return e.name === n;
                        });
                        return e.indexOf(i);
                    })(e, 0, t)
                )
            ).forEach(function(e) {
                e.function &&
                    console.warn(
                        "`modifier.function` is deprecated, use `modifier.fn`!"
                    );
                var t = e.function || e.fn;
                e.enabled &&
                    s(t) &&
                    ((n.offsets.popper = w(n.offsets.popper)),
                        (n.offsets.reference = w(n.offsets.reference)),
                        (n = t(n, e)));
            }),
            n
        );
    }

    function e(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n;
        });
    }

    function H(e) {
        for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
                n = e.charAt(0).toUpperCase() + e.slice(1),
                i = 0; i < t.length; i++
        ) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o;
        }
        return null;
    }

    function u(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }

    function D(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }

    function A(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = ""; -
            1 !== [
                    "width",
                    "height",
                    "top",
                    "right",
                    "bottom",
                    "left",
                ].indexOf(e) &&
                D(i[e]) &&
                (t = "px"),
                (n.style[e] = i[e] + t);
        });
    }

    function N(e, t, n) {
        var i = j(e, function(e) {
                return e.name === t;
            }),
            r = !!i &&
            e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order;
            });
        if (!r) {
            var o = "`" + t + "`";
            console.warn(
                "`" +
                n +
                "` modifier is required by " +
                o +
                " modifier in order to work, be sure to include it before " +
                o +
                "!"
            );
        }
        return r;
    }

    function t(e) {
        var t =
            1 < arguments.length &&
            void 0 !== arguments[1] &&
            arguments[1],
            n = V.indexOf(e),
            i = V.slice(n + 1).concat(V.slice(0, n));
        return t ? i.reverse() : i;
    }
    for (
        var I = Math.min,
            P = Math.floor,
            q = Math.round,
            k = Math.max,
            n =
            "undefined" != typeof window &&
            "undefined" != typeof document,
            i = ["Edge", "Trident", "Firefox"],
            o = 0,
            R = 0; R < i.length; R += 1
    )
        if (n && 0 <= navigator.userAgent.indexOf(i[R])) {
            o = 1;
            break;
        }
    var M =
        n && window.Promise ?

        function(e) {
            var t = !1;
            return function() {
                t ||
                    ((t = !0),
                        window.Promise.resolve().then(function() {
                            (t = !1), e();
                        }));
            };
        } :
        function(e) {
            var t = !1;
            return function() {
                t ||
                    ((t = !0),
                        setTimeout(function() {
                            (t = !1), e();
                        }, o));
            };
        },
        F = n && !(!window.MSInputMethodContext || !document.documentMode),
        W = n && /MSIE 10/.test(navigator.userAgent),
        B = (function() {
            function i(e, t) {
                for (var n, i = 0; i < t.length; i++)
                    ((n = t[i]).enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
            return function(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e;
            };
        })(),
        U = function(e, t, n) {
            return (
                t in e ?
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                }) :
                (e[t] = n),
                e
            );
        },
        K =
        Object.assign ||
        function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) &&
                    (e[i] = t[i]);
            return e;
        },
        $ = n && /Firefox/i.test(navigator.userAgent),
        Q = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
        ],
        V = Q.slice(3),
        z = (function() {
            function o(e, t) {
                var n = this,
                    i =
                    2 < arguments.length && void 0 !== arguments[2] ?
                    arguments[2] :
                    {};
                (function(e, t) {
                    if (!(e instanceof o))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this),
                (this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update);
                }),
                (this.update = M(this.update.bind(this))),
                (this.options = K({}, o.Defaults, i)),
                (this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: [],
                }),
                (this.reference = e && e.jquery ? e[0] : e),
                (this.popper = t && t.jquery ? t[0] : t),
                (this.options.modifiers = {}),
                Object.keys(
                        K({}, o.Defaults.modifiers, i.modifiers)
                    ).forEach(function(e) {
                        n.options.modifiers[e] = K({},
                            o.Defaults.modifiers[e] || {},
                            i.modifiers ? i.modifiers[e] : {}
                        );
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function(e) {
                            return K({ name: e }, n.options.modifiers[e]);
                        })
                        .sort(function(e, t) {
                            return e.order - t.order;
                        })),
                    this.modifiers.forEach(function(e) {
                        e.enabled &&
                            s(e.onLoad) &&
                            e.onLoad(
                                n.reference,
                                n.popper,
                                n.options,
                                e,
                                n.state
                            );
                    }),
                    this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(),
                    (this.state.eventsEnabled = r);
            }
            return (
                B(o, [{
                        key: "update",
                        value: function() {
                            return function() {
                                if (!this.state.isDestroyed) {
                                    var e = {
                                        instance: this,
                                        styles: {},
                                        arrowStyles: {},
                                        attributes: {},
                                        flipped: !1,
                                        offsets: {},
                                    };
                                    (e.offsets.reference = l(
                                        this.state,
                                        this.popper,
                                        this.reference,
                                        this.options.positionFixed
                                    )),
                                    (e.placement = a(
                                        this.options.placement,
                                        e.offsets.reference,
                                        this.popper,
                                        this.reference,
                                        this.options.modifiers.flip
                                        .boundariesElement,
                                        this.options.modifiers.flip
                                        .padding
                                    )),
                                    (e.originalPlacement = e.placement),
                                    (e.positionFixed = this.options.positionFixed),
                                    (e.offsets.popper = x(
                                        this.popper,
                                        e.offsets.reference,
                                        e.placement
                                    )),
                                    (e.offsets.popper.position = this
                                        .options.positionFixed ?
                                        "fixed" :
                                        "absolute"),
                                    (e = S(this.modifiers, e)),
                                    this.state.isCreated ?
                                        this.options.onUpdate(e) :
                                        ((this.state.isCreated = !0),
                                            this.options.onCreate(e));
                                }
                            }.call(this);
                        },
                    },
                    {
                        key: "destroy",
                        value: function() {
                            return function() {
                                return (
                                    (this.state.isDestroyed = !0),
                                    e(this.modifiers, "applyStyle") &&
                                    (this.popper.removeAttribute(
                                            "x-placement"
                                        ),
                                        (this.popper.style.position = ""),
                                        (this.popper.style.top = ""),
                                        (this.popper.style.left = ""),
                                        (this.popper.style.right = ""),
                                        (this.popper.style.bottom = ""),
                                        (this.popper.style.willChange = ""),
                                        (this.popper.style[H("transform")] =
                                            "")),
                                    this.disableEventListeners(),
                                    this.options.removeOnDestroy &&
                                    this.popper.parentNode.removeChild(
                                        this.popper
                                    ),
                                    this
                                );
                            }.call(this);
                        },
                    },
                    {
                        key: "enableEventListeners",
                        value: function() {
                            return function() {
                                this.state.eventsEnabled ||
                                    (this.state = (function(e, t, n, i) {
                                        (n.updateBound = i),
                                        u(e).addEventListener(
                                            "resize",
                                            n.updateBound, { passive: !0 }
                                        );
                                        var r = p(e);
                                        return (
                                            (function e(t, n, i, r) {
                                                var o =
                                                    "BODY" ===
                                                    t.nodeName,
                                                    s = o ?
                                                    t.ownerDocument
                                                    .defaultView :
                                                    t;
                                                s.addEventListener(n, i, {
                                                        passive: !0,
                                                    }),
                                                    o ||
                                                    e(
                                                        p(s.parentNode),
                                                        n,
                                                        i,
                                                        r
                                                    ),
                                                    r.push(s);
                                            })(
                                                r,
                                                "scroll",
                                                n.updateBound,
                                                n.scrollParents
                                            ),
                                            (n.scrollElement = r),
                                            (n.eventsEnabled = !0),
                                            n
                                        );
                                    })(
                                        this.reference,
                                        this.options,
                                        this.state,
                                        this.scheduleUpdate
                                    ));
                            }.call(this);
                        },
                    },
                    {
                        key: "disableEventListeners",
                        value: function() {
                            return function() {
                                var e, t;
                                this.state.eventsEnabled &&
                                    (cancelAnimationFrame(
                                            this.scheduleUpdate
                                        ),
                                        (this.state =
                                            ((e = this.reference),
                                                (t = this.state),
                                                u(e).removeEventListener(
                                                    "resize",
                                                    t.updateBound
                                                ),
                                                t.scrollParents.forEach(function(
                                                    e
                                                ) {
                                                    e.removeEventListener(
                                                        "scroll",
                                                        t.updateBound
                                                    );
                                                }),
                                                (t.updateBound = null),
                                                (t.scrollParents = []),
                                                (t.scrollElement = null),
                                                (t.eventsEnabled = !1),
                                                t)));
                            }.call(this);
                        },
                    },
                ]),
                o
            );
        })();
    return (
        (z.Utils = ("undefined" == typeof window ?
            global :
            window
        ).PopperUtils),
        (z.placements = Q),
        (z.Defaults = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                u = a ? "width" : "height",
                                c = {
                                    start: U({}, l, o[l]),
                                    end: U({}, l, o[l] + o[u] - s[u]),
                                };
                            e.offsets.popper = K({}, s, c[i]);
                        }
                        return e;
                    },
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n,
                            i = t.offset,
                            r = e.placement,
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = r.split("-")[0];
                        return (
                            (n = D(+i) ?
                                [+i, 0] :
                                (function(e, r, o, t) {
                                    var s = [0, 0],
                                        a = -1 !== ["right", "left"].indexOf(t),
                                        n = e
                                        .split(/(\+|\-)/)
                                        .map(function(e) {
                                            return e.trim();
                                        }),
                                        i = n.indexOf(
                                            j(n, function(e) {
                                                return (-1 !==
                                                    e.search(/,|\s/)
                                                );
                                            })
                                        );
                                    n[i] &&
                                        -1 === n[i].indexOf(",") &&
                                        console.warn(
                                            "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
                                        );
                                    var l = /\s*,\s*|\s+/,
                                        u = -1 === i ?
                                        [n] :
                                        [
                                            n
                                            .slice(0, i)
                                            .concat([
                                                n[i].split(
                                                    l
                                                )[0],
                                            ]), [
                                                n[i].split(
                                                    l
                                                )[1],
                                            ].concat(
                                                n.slice(i + 1)
                                            ),
                                        ];
                                    return (
                                        (u = u.map(function(e, t) {
                                            var n = (1 === t ? !a : a) ?
                                                "height" :
                                                "width",
                                                i = !1;
                                            return e
                                                .reduce(function(e, t) {
                                                    return "" ===
                                                        e[e.length - 1] &&
                                                        -1 !== [
                                                            "+",
                                                            "-",
                                                        ].indexOf(t) ?
                                                        ((e[
                                                                e.length - 1
                                                            ] = t),
                                                            (i = !0),
                                                            e) :
                                                        i ?
                                                        ((e[
                                                                e.length - 1
                                                            ] += t),
                                                            (i = !1),
                                                            e) :
                                                        e.concat(t);
                                                }, [])
                                                .map(function(e) {
                                                    return (function(
                                                        e,
                                                        t,
                                                        n,
                                                        i
                                                    ) {
                                                        var r,
                                                            o = e.match(
                                                                /((?:\-|\+)?\d*\.?\d*)(.*)/
                                                            ),
                                                            s = +o[1],
                                                            a = o[2];
                                                        if (!s) return e;
                                                        if (
                                                            0 !==
                                                            a.indexOf("%")
                                                        )
                                                            return "vh" !==
                                                                a &&
                                                                "vw" !== a ?
                                                                s :
                                                                (("vh" ===
                                                                        a ?
                                                                        k(
                                                                            document
                                                                            .documentElement
                                                                            .clientHeight,
                                                                            window.innerHeight ||
                                                                            0
                                                                        ) :
                                                                        k(
                                                                            document
                                                                            .documentElement
                                                                            .clientWidth,
                                                                            window.innerWidth ||
                                                                            0
                                                                        )) /
                                                                    100) *
                                                                s;
                                                        switch (a) {
                                                            case "%p":
                                                                r = n;
                                                                break;
                                                            case "%":
                                                            case "%r":
                                                            default:
                                                                r = i;
                                                        }
                                                        return (
                                                            (w(r)[t] /
                                                                100) *
                                                            s
                                                        );
                                                    })(e, n, r, o);
                                                });
                                        })).forEach(function(n, i) {
                                            n.forEach(function(e, t) {
                                                D(e) &&
                                                    (s[i] +=
                                                        e *
                                                        ("-" === n[t - 1] ?
                                                            -1 :
                                                            1));
                                            });
                                        }),
                                        s
                                    );
                                })(i, s, a, l)),
                            "left" === l ?
                            ((s.top += n[0]), (s.left -= n[1])) :
                            "right" === l ?
                            ((s.top += n[0]), (s.left += n[1])) :
                            "top" === l ?
                            ((s.left += n[0]), (s.top -= n[1])) :
                            "bottom" === l &&
                            ((s.left += n[0]), (s.top += n[1])),
                            (e.popper = s),
                            e
                        );
                    },
                    offset: 0,
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, i) {
                        var t = i.boundariesElement || O(e.instance.popper);
                        e.instance.reference === t && (t = O(t));
                        var n = H("transform"),
                            r = e.instance.popper.style,
                            o = r.top,
                            s = r.left,
                            a = r[n];
                        (r.top = ""), (r.left = ""), (r[n] = "");
                        var l = d(
                            e.instance.popper,
                            e.instance.reference,
                            i.padding,
                            t,
                            e.positionFixed
                        );
                        (r.top = o),
                        (r.left = s),
                        (r[n] = a),
                        (i.boundaries = l);
                        var u = i.priority,
                            c = e.offsets.popper,
                            f = {
                                primary: function(e) {
                                    var t = c[e];
                                    return (
                                        c[e] < l[e] &&
                                        !i.escapeWithReference &&
                                        (t = k(c[e], l[e])),
                                        U({}, e, t)
                                    );
                                },
                                secondary: function(e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = c[t];
                                    return (
                                        c[e] > l[e] &&
                                        !i.escapeWithReference &&
                                        (n = I(
                                            c[t],
                                            l[e] -
                                            ("right" === e ?
                                                c.width :
                                                c.height)
                                        )),
                                        U({}, t, n)
                                    );
                                },
                            };
                        return (
                            u.forEach(function(e) {
                                var t = -1 === ["left", "top"].indexOf(e) ?
                                    "secondary" :
                                    "primary";
                                c = K({}, c, f[t](e));
                            }),
                            (e.offsets.popper = c),
                            e
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent",
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = P,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            u = s ? "width" : "height";
                        return (
                            n[a] < o(i[l]) &&
                            (e.offsets.popper[l] = o(i[l]) - n[u]),
                            n[l] > o(i[a]) &&
                            (e.offsets.popper[l] = o(i[a])),
                            e
                        );
                    },
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!N(
                                e.instance.modifiers,
                                "arrow",
                                "keepTogether"
                            ))
                            return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i)))
                                return e;
                        } else if (!e.instance.popper.contains(i))
                            return (
                                console.warn(
                                    "WARNING: `arrow.element` must be child of its popper element!"
                                ),
                                e
                            );
                        var r = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            u = l ? "height" : "width",
                            c = l ? "Top" : "Left",
                            f = c.toLowerCase(),
                            d = l ? "left" : "top",
                            h = l ? "bottom" : "right",
                            p = T(i)[u];
                        a[h] - p < s[f] &&
                            (e.offsets.popper[f] -= s[f] - (a[h] - p)),
                            a[f] + p > s[h] &&
                            (e.offsets.popper[f] += a[f] + p - s[h]),
                            (e.offsets.popper = w(e.offsets.popper));
                        var g = a[f] + a[u] / 2 - p / 2,
                            m = b(e.instance.popper),
                            v = parseFloat(m["margin" + c], 10),
                            y = parseFloat(m["border" + c + "Width"], 10),
                            _ = g - e.offsets.popper[f] - v - y;
                        return (
                            (_ = k(I(s[u] - p, _), 0)),
                            (e.arrowElement = i),
                            (e.offsets.arrow =
                                (U((n = {}), f, q(_)), U(n, d, ""), n)),
                            e
                        );
                    },
                    element: "[x-arrow]",
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(m, v) {
                        if (e(m.instance.modifiers, "inner")) return m;
                        if (
                            m.flipped &&
                            m.placement === m.originalPlacement
                        )
                            return m;
                        var y = d(
                                m.instance.popper,
                                m.instance.reference,
                                v.padding,
                                v.boundariesElement,
                                m.positionFixed
                            ),
                            _ = m.placement.split("-")[0],
                            b = C(_),
                            w = m.placement.split("-")[1] || "",
                            E = [];
                        switch (v.behavior) {
                            case "flip":
                                E = [_, b];
                                break;
                            case "clockwise":
                                E = t(_);
                                break;
                            case "counterclockwise":
                                E = t(_, !0);
                                break;
                            default:
                                E = v.behavior;
                        }
                        return (
                            E.forEach(function(e, t) {
                                if (_ !== e || E.length === t + 1) return m;
                                (_ = m.placement.split("-")[0]), (b = C(_));
                                var n,
                                    i = m.offsets.popper,
                                    r = m.offsets.reference,
                                    o = P,
                                    s =
                                    ("left" === _ &&
                                        o(i.right) > o(r.left)) ||
                                    ("right" === _ &&
                                        o(i.left) < o(r.right)) ||
                                    ("top" === _ &&
                                        o(i.bottom) > o(r.top)) ||
                                    ("bottom" === _ &&
                                        o(i.top) < o(r.bottom)),
                                    a = o(i.left) < o(y.left),
                                    l = o(i.right) > o(y.right),
                                    u = o(i.top) < o(y.top),
                                    c = o(i.bottom) > o(y.bottom),
                                    f =
                                    ("left" === _ && a) ||
                                    ("right" === _ && l) ||
                                    ("top" === _ && u) ||
                                    ("bottom" === _ && c),
                                    d = -1 !== ["top", "bottom"].indexOf(_),
                                    h = !!v.flipVariations &&
                                    ((d && "start" === w && a) ||
                                        (d && "end" === w && l) ||
                                        (!d && "start" === w && u) ||
                                        (!d && "end" === w && c)),
                                    p = !!v.flipVariationsByContent &&
                                    ((d && "start" === w && l) ||
                                        (d && "end" === w && a) ||
                                        (!d && "start" === w && c) ||
                                        (!d && "end" === w && u)),
                                    g = h || p;
                                (s || f || g) &&
                                ((m.flipped = !0),
                                    (s || f) && (_ = E[t + 1]),
                                    g &&
                                    (w =
                                        "end" === (n = w) ?
                                        "start" :
                                        "start" === n ?
                                        "end" :
                                        n),
                                    (m.placement = _ + (w ? "-" + w : "")),
                                    (m.offsets.popper = K({},
                                        m.offsets.popper,
                                        x(
                                            m.instance.popper,
                                            m.offsets.reference,
                                            m.placement
                                        )
                                    )),
                                    (m = S(
                                        m.instance.modifiers,
                                        m,
                                        "flip"
                                    )));
                            }),
                            m
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1,
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return (
                            (r[s ? "left" : "top"] =
                                o[n] - (a ? r[s ? "width" : "height"] : 0)),
                            (e.placement = C(t)),
                            (e.offsets.popper = w(r)),
                            e
                        );
                    },
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!N(
                                e.instance.modifiers,
                                "hide",
                                "preventOverflow"
                            ))
                            return e;
                        var t = e.offsets.reference,
                            n = j(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name;
                            }).boundaries;
                        if (
                            t.bottom < n.top ||
                            t.left > n.right ||
                            t.top > n.bottom ||
                            t.right < n.left
                        ) {
                            if (!0 === e.hide) return e;
                            (e.hide = !0),
                            (e.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === e.hide) return e;
                            (e.hide = !1),
                            (e.attributes["x-out-of-boundaries"] = !1);
                        }
                        return e;
                    },
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            o = j(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name;
                            }).gpuAcceleration;
                        void 0 !== o &&
                            console.warn(
                                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                            );
                        var s,
                            a,
                            l,
                            u,
                            c,
                            f,
                            d,
                            h,
                            p,
                            g,
                            m,
                            v,
                            y,
                            _,
                            b,
                            w = void 0 === o ? t.gpuAcceleration : o,
                            E = O(e.instance.popper),
                            T = L(E),
                            C = { position: r.position },
                            x =
                            ((l = e),
                                (u = window.devicePixelRatio < 2 || !$),
                                (f = (c = l.offsets).popper),
                                (d = c.reference),
                                (p = function(e) {
                                    return e;
                                }),
                                (g = (h = q)(d.width)),
                                (m = h(f.width)),
                                (v = -1 !== ["left", "right"].indexOf(l.placement)),
                                (y = -1 !== l.placement.indexOf("-")),
                                (b = u ? h : p), {
                                    left: (_ = u ?
                                        v || y || g % 2 == m % 2 ?
                                        h :
                                        P :
                                        p)(
                                        1 == g % 2 && 1 == m % 2 && !y && u ?
                                        f.left - 1 :
                                        f.left
                                    ),
                                    top: b(f.top),
                                    bottom: b(f.bottom),
                                    right: _(f.right),
                                }),
                            S = "bottom" === n ? "top" : "bottom",
                            D = "right" === i ? "left" : "right",
                            A = H("transform");
                        if (
                            ((a =
                                    "bottom" == S ?
                                    "HTML" === E.nodeName ?
                                    -E.clientHeight + x.bottom :
                                    -T.height + x.bottom :
                                    x.top),
                                (s =
                                    "right" == D ?
                                    "HTML" === E.nodeName ?
                                    -E.clientWidth + x.right :
                                    -T.width + x.right :
                                    x.left),
                                w && A)
                        )
                            (C[A] =
                                "translate3d(" + s + "px, " + a + "px, 0)"),
                            (C[S] = 0),
                            (C[D] = 0),
                            (C.willChange = "transform");
                        else {
                            var N = "bottom" == S ? -1 : 1,
                                I = "right" == D ? -1 : 1;
                            (C[S] = a * N),
                            (C[D] = s * I),
                            (C.willChange = S + ", " + D);
                        }
                        var k = { "x-placement": e.placement };
                        return (
                            (e.attributes = K({}, k, e.attributes)),
                            (e.styles = K({}, C, e.styles)),
                            (e.arrowStyles = K({},
                                e.offsets.arrow,
                                e.arrowStyles
                            )),
                            e
                        );
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right",
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        return (
                            A(e.instance.popper, e.styles),
                            (t = e.instance.popper),
                            (n = e.attributes),
                            Object.keys(n).forEach(function(e) {
                                !1 === n[e] ?
                                    t.removeAttribute(e) :
                                    t.setAttribute(e, n[e]);
                            }),
                            e.arrowElement &&
                            Object.keys(e.arrowStyles).length &&
                            A(e.arrowElement, e.arrowStyles),
                            e
                        );
                        var t, n;
                    },
                    onLoad: function(e, t, n, i, r) {
                        var o = l(r, t, e, n.positionFixed),
                            s = a(
                                n.placement,
                                o,
                                t,
                                e,
                                n.modifiers.flip.boundariesElement,
                                n.modifiers.flip.padding
                            );
                        return (
                            t.setAttribute("x-placement", s),
                            A(t, {
                                position: n.positionFixed ?
                                    "fixed" :
                                    "absolute",
                            }),
                            n
                        );
                    },
                    gpuAcceleration: void 0,
                },
            },
        }),
        z
    );
}),
(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ?
        t(exports, require("jquery"), require("popper.js")) :
        "function" == typeof define && define.amd ?
        define(["exports", "jquery", "popper.js"], t) :
        t(((e = e || self).bootstrap = {}), e.jQuery, e.Popper);
})(this, function(e, p, f) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
        }
    }

    function s(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
    }

    function l(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols &&
                (t = t.concat(
                    Object.getOwnPropertySymbols(o).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(
                            o,
                            e
                        ).enumerable;
                    })
                )),
                t.forEach(function(e) {
                    var t, n, i;
                    (t = r),
                    (i = o[(n = e)]),
                    n in t ?
                        Object.defineProperty(t, n, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                        }) :
                        (t[n] = i);
                });
        }
        return r;
    }
    (p = p && p.hasOwnProperty("default") ? p.default : p),
    (f = f && f.hasOwnProperty("default") ? f.default : f);
    var t = "transitionend",
        g = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                for (;
                    (e += ~~(1e6 * Math.random())),
                    document.getElementById(e);

                );
                return e;
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : "";
                }
                try {
                    return document.querySelector(t) ? t : null;
                } catch (e) {
                    return null;
                }
            },
            getTransitionDurationFromElement: function(e) {
                if (!e) return 0;
                var t = p(e).css("transition-duration"),
                    n = p(e).css("transition-delay"),
                    i = parseFloat(t),
                    r = parseFloat(n);
                return i || r ?
                    ((t = t.split(",")[0]),
                        (n = n.split(",")[0]),
                        1e3 * (parseFloat(t) + parseFloat(n))) :
                    0;
            },
            reflow: function(e) {
                return e.offsetHeight;
            },
            triggerTransitionEnd: function(e) {
                p(e).trigger(t);
            },
            supportsTransitionEnd: function() {
                return Boolean(t);
            },
            isElement: function(e) {
                return (e[0] || e).nodeType;
            },
            typeCheckConfig: function(e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i],
                            o = t[i],
                            s =
                            o && g.isElement(o) ?
                            "element" :
                            ((a = o), {}.toString
                                .call(a)
                                .match(/\s([a-z]+)/i)[1]
                                .toLowerCase());
                        if (!new RegExp(r).test(s))
                            throw new Error(
                                e.toUpperCase() +
                                ': Option "' +
                                i +
                                '" provided type "' +
                                s +
                                '" but expected type "' +
                                r +
                                '".'
                            );
                    }
                var a;
            },
            findShadowRoot: function(e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" != typeof e.getRootNode)
                    return e instanceof ShadowRoot ?
                        e :
                        e.parentNode ?
                        g.findShadowRoot(e.parentNode) :
                        null;
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null;
            },
        };
    (p.fn.emulateTransitionEnd = function(e) {
        var t = this,
            n = !1;
        return (
            p(this).one(g.TRANSITION_END, function() {
                n = !0;
            }),
            setTimeout(function() {
                n || g.triggerTransitionEnd(t);
            }, e),
            this
        );
    }),
    (p.event.special[g.TRANSITION_END] = {
        bindType: t,
        delegateType: t,
        handle: function(e) {
            if (p(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments);
        },
    });
    var n = "alert",
        r = "bs.alert",
        o = "." + r,
        a = p.fn[n],
        u = {
            CLOSE: "close" + o,
            CLOSED: "closed" + o,
            CLICK_DATA_API: "click" + o + ".data-api",
        },
        c = (function() {
            function i(e) {
                this._element = e;
            }
            var e = i.prototype;
            return (
                (e.close = function(e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)),
                        this._triggerCloseEvent(t).isDefaultPrevented() ||
                        this._removeElement(t);
                }),
                (e.dispose = function() {
                    p.removeData(this._element, r), (this._element = null);
                }),
                (e._getRootElement = function(e) {
                    var t = g.getSelectorFromElement(e),
                        n = !1;
                    return (
                        t && (n = document.querySelector(t)),
                        n || (n = p(e).closest(".alert")[0]),
                        n
                    );
                }),
                (e._triggerCloseEvent = function(e) {
                    var t = p.Event(u.CLOSE);
                    return p(e).trigger(t), t;
                }),
                (e._removeElement = function(t) {
                    var n = this;
                    if ((p(t).removeClass("show"), p(t).hasClass("fade"))) {
                        var e = g.getTransitionDurationFromElement(t);
                        p(t)
                            .one(g.TRANSITION_END, function(e) {
                                return n._destroyElement(t, e);
                            })
                            .emulateTransitionEnd(e);
                    } else this._destroyElement(t);
                }),
                (e._destroyElement = function(e) {
                    p(e).detach().trigger(u.CLOSED).remove();
                }),
                (i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = p(this),
                            t = e.data(r);
                        t || ((t = new i(this)), e.data(r, t)),
                            "close" === n && t[n](this);
                    });
                }),
                (i._handleDismiss = function(t) {
                    return function(e) {
                        e && e.preventDefault(), t.close(this);
                    };
                }),
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1";
                    },
                }, ]),
                i
            );
        })();
    p(document).on(
            u.CLICK_DATA_API,
            '[data-dismiss="alert"]',
            c._handleDismiss(new c())
        ),
        (p.fn[n] = c._jQueryInterface),
        (p.fn[n].Constructor = c),
        (p.fn[n].noConflict = function() {
            return (p.fn[n] = a), c._jQueryInterface;
        });
    var d = "button",
        h = "bs.button",
        m = "." + h,
        v = ".data-api",
        y = p.fn[d],
        _ = "active",
        b = '[data-toggle^="button"]',
        w = {
            CLICK_DATA_API: "click" + m + v,
            FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v,
        },
        E = (function() {
            function n(e) {
                this._element = e;
            }
            var e = n.prototype;
            return (
                (e.toggle = function() {
                    var e = !0,
                        t = !0,
                        n = p(this._element).closest(
                            '[data-toggle="buttons"]'
                        )[0];
                    if (n) {
                        var i = this._element.querySelector(
                            'input:not([type="hidden"])'
                        );
                        if (i) {
                            if ("radio" === i.type)
                                if (
                                    i.checked &&
                                    this._element.classList.contains(_)
                                )
                                    e = !1;
                                else {
                                    var r = n.querySelector(".active");
                                    r && p(r).removeClass(_);
                                }
                            if (e) {
                                if (
                                    i.hasAttribute("disabled") ||
                                    n.hasAttribute("disabled") ||
                                    i.classList.contains("disabled") ||
                                    n.classList.contains("disabled")
                                )
                                    return;
                                (i.checked = !this._element.classList.contains(
                                    _
                                )),
                                p(i).trigger("change");
                            }
                            i.focus(), (t = !1);
                        }
                    }
                    t &&
                        this._element.setAttribute(
                            "aria-pressed", !this._element.classList.contains(_)
                        ),
                        e && p(this._element).toggleClass(_);
                }),
                (e.dispose = function() {
                    p.removeData(this._element, h), (this._element = null);
                }),
                (n._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = p(this).data(h);
                        e || ((e = new n(this)), p(this).data(h, e)),
                            "toggle" === t && e[t]();
                    });
                }),
                s(n, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1";
                    },
                }, ]),
                n
            );
        })();
    p(document)
        .on(w.CLICK_DATA_API, b, function(e) {
            e.preventDefault();
            var t = e.target;
            p(t).hasClass("btn") || (t = p(t).closest(".btn")),
                E._jQueryInterface.call(p(t), "toggle");
        })
        .on(w.FOCUS_BLUR_DATA_API, b, function(e) {
            var t = p(e.target).closest(".btn")[0];
            p(t).toggleClass("focus", /^focus(in)?$/.test(e.type));
        }),
        (p.fn[d] = E._jQueryInterface),
        (p.fn[d].Constructor = E),
        (p.fn[d].noConflict = function() {
            return (p.fn[d] = y), E._jQueryInterface;
        });
    var T = "carousel",
        C = "bs.carousel",
        x = "." + C,
        S = ".data-api",
        D = p.fn[T],
        A = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
        },
        N = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
        },
        I = "next",
        k = "prev",
        O = {
            SLIDE: "slide" + x,
            SLID: "slid" + x,
            KEYDOWN: "keydown" + x,
            MOUSEENTER: "mouseenter" + x,
            MOUSELEAVE: "mouseleave" + x,
            TOUCHSTART: "touchstart" + x,
            TOUCHMOVE: "touchmove" + x,
            TOUCHEND: "touchend" + x,
            POINTERDOWN: "pointerdown" + x,
            POINTERUP: "pointerup" + x,
            DRAG_START: "dragstart" + x,
            LOAD_DATA_API: "load" + x + S,
            CLICK_DATA_API: "click" + x + S,
        },
        L = "active",
        j = ".active.carousel-item",
        H = { TOUCH: "touch", PEN: "pen" },
        P = (function() {
            function o(e, t) {
                (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this.touchStartX = 0),
                (this.touchDeltaX = 0),
                (this._config = this._getConfig(t)),
                (this._element = e),
                (this._indicatorsElement = this._element.querySelector(
                    ".carousel-indicators"
                )),
                (this._touchSupported =
                    "ontouchstart" in document.documentElement ||
                    0 < navigator.maxTouchPoints),
                (this._pointerEvent = Boolean(
                    window.PointerEvent || window.MSPointerEvent
                )),
                this._addEventListeners();
            }
            var e = o.prototype;
            return (
                (e.next = function() {
                    this._isSliding || this._slide(I);
                }),
                (e.nextWhenVisible = function() {
                    !document.hidden &&
                        p(this._element).is(":visible") &&
                        "hidden" !== p(this._element).css("visibility") &&
                        this.next();
                }),
                (e.prev = function() {
                    this._isSliding || this._slide(k);
                }),
                (e.pause = function(e) {
                    e || (this._isPaused = !0),
                        this._element.querySelector(
                            ".carousel-item-next, .carousel-item-prev"
                        ) &&
                        (g.triggerTransitionEnd(this._element),
                            this.cycle(!0)),
                        clearInterval(this._interval),
                        (this._interval = null);
                }),
                (e.cycle = function(e) {
                    e || (this._isPaused = !1),
                        this._interval &&
                        (clearInterval(this._interval),
                            (this._interval = null)),
                        this._config.interval &&
                        !this._isPaused &&
                        (this._interval = setInterval(
                            (document.visibilityState ?
                                this.nextWhenVisible :
                                this.next
                            ).bind(this),
                            this._config.interval
                        ));
                }),
                (e.to = function(e) {
                    var t = this;
                    this._activeElement = this._element.querySelector(j);
                    var n = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding)
                            p(this._element).one(O.SLID, function() {
                                return t.to(e);
                            });
                        else {
                            if (n === e)
                                return this.pause(), void this.cycle();
                            var i = n < e ? I : k;
                            this._slide(i, this._items[e]);
                        }
                }),
                (e.dispose = function() {
                    p(this._element).off(x),
                        p.removeData(this._element, C),
                        (this._items = null),
                        (this._config = null),
                        (this._element = null),
                        (this._interval = null),
                        (this._isPaused = null),
                        (this._isSliding = null),
                        (this._activeElement = null),
                        (this._indicatorsElement = null);
                }),
                (e._getConfig = function(e) {
                    return (e = l({}, A, e)), g.typeCheckConfig(T, e, N), e;
                }),
                (e._handleSwipe = function() {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= 40)) {
                        var t = e / this.touchDeltaX;
                        0 < t && this.prev(), t < 0 && this.next();
                    }
                }),
                (e._addEventListeners = function() {
                    var t = this;
                    this._config.keyboard &&
                        p(this._element).on(O.KEYDOWN, function(e) {
                            return t._keydown(e);
                        }),
                        "hover" === this._config.pause &&
                        p(this._element)
                        .on(O.MOUSEENTER, function(e) {
                            return t.pause(e);
                        })
                        .on(O.MOUSELEAVE, function(e) {
                            return t.cycle(e);
                        }),
                        this._config.touch &&
                        this._addTouchEventListeners();
                }),
                (e._addTouchEventListeners = function() {
                    var n = this;
                    if (this._touchSupported) {
                        var t = function(e) {
                                n._pointerEvent &&
                                    H[e.originalEvent.pointerType.toUpperCase()] ?
                                    (n.touchStartX =
                                        e.originalEvent.clientX) :
                                    n._pointerEvent ||
                                    (n.touchStartX =
                                        e.originalEvent.touches[0].clientX);
                            },
                            i = function(e) {
                                n._pointerEvent &&
                                    H[
                                        e.originalEvent.pointerType.toUpperCase()
                                    ] &&
                                    (n.touchDeltaX =
                                        e.originalEvent.clientX -
                                        n.touchStartX),
                                    n._handleSwipe(),
                                    "hover" === n._config.pause &&
                                    (n.pause(),
                                        n.touchTimeout &&
                                        clearTimeout(n.touchTimeout),
                                        (n.touchTimeout = setTimeout(
                                            function(e) {
                                                return n.cycle(e);
                                            },
                                            500 + n._config.interval
                                        )));
                            };
                        p(
                                this._element.querySelectorAll(
                                    ".carousel-item img"
                                )
                            ).on(O.DRAG_START, function(e) {
                                return e.preventDefault();
                            }),
                            this._pointerEvent ?
                            (p(this._element).on(
                                    O.POINTERDOWN,
                                    function(e) {
                                        return t(e);
                                    }
                                ),
                                p(this._element).on(
                                    O.POINTERUP,
                                    function(e) {
                                        return i(e);
                                    }
                                ),
                                this._element.classList.add(
                                    "pointer-event"
                                )) :
                            (p(this._element).on(
                                    O.TOUCHSTART,
                                    function(e) {
                                        return t(e);
                                    }
                                ),
                                p(this._element).on(
                                    O.TOUCHMOVE,
                                    function(e) {
                                        var t;
                                        (t = e).originalEvent.touches &&
                                            1 < t.originalEvent.touches.length ?
                                            (n.touchDeltaX = 0) :
                                            (n.touchDeltaX =
                                                t.originalEvent
                                                .touches[0]
                                                .clientX -
                                                n.touchStartX);
                                    }
                                ),
                                p(this._element).on(O.TOUCHEND, function(
                                    e
                                ) {
                                    return i(e);
                                }));
                    }
                }),
                (e._keydown = function(e) {
                    if (!/input|textarea/i.test(e.target.tagName))
                        switch (e.which) {
                            case 37:
                                e.preventDefault(), this.prev();
                                break;
                            case 39:
                                e.preventDefault(), this.next();
                        }
                }),
                (e._getItemIndex = function(e) {
                    return (
                        (this._items =
                            e && e.parentNode ?
                            [].slice.call(
                                e.parentNode.querySelectorAll(
                                    ".carousel-item"
                                )
                            ) :
                            []),
                        this._items.indexOf(e)
                    );
                }),
                (e._getItemByDirection = function(e, t) {
                    var n = e === I,
                        i = e === k,
                        r = this._getItemIndex(t),
                        o = this._items.length - 1;
                    if (
                        ((i && 0 === r) || (n && r === o)) &&
                        !this._config.wrap
                    )
                        return t;
                    var s = (r + (e === k ? -1 : 1)) % this._items.length;
                    return -1 === s ?
                        this._items[this._items.length - 1] :
                        this._items[s];
                }),
                (e._triggerSlideEvent = function(e, t) {
                    var n = this._getItemIndex(e),
                        i = this._getItemIndex(
                            this._element.querySelector(j)
                        ),
                        r = p.Event(O.SLIDE, {
                            relatedTarget: e,
                            direction: t,
                            from: i,
                            to: n,
                        });
                    return p(this._element).trigger(r), r;
                }),
                (e._setActiveIndicatorElement = function(e) {
                    if (this._indicatorsElement) {
                        var t = [].slice.call(
                            this._indicatorsElement.querySelectorAll(
                                ".active"
                            )
                        );
                        p(t).removeClass(L);
                        var n = this._indicatorsElement.children[
                            this._getItemIndex(e)
                        ];
                        n && p(n).addClass(L);
                    }
                }),
                (e._slide = function(e, t) {
                    var n,
                        i,
                        r,
                        o = this,
                        s = this._element.querySelector(j),
                        a = this._getItemIndex(s),
                        l = t || (s && this._getItemByDirection(e, s)),
                        u = this._getItemIndex(l),
                        c = Boolean(this._interval);
                    if (
                        ((r =
                                e === I ?
                                ((n = "carousel-item-left"),
                                    (i = "carousel-item-next"),
                                    "left") :
                                ((n = "carousel-item-right"),
                                    (i = "carousel-item-prev"),
                                    "right")),
                            l && p(l).hasClass(L))
                    )
                        this._isSliding = !1;
                    else if (!this._triggerSlideEvent(
                            l,
                            r
                        ).isDefaultPrevented() &&
                        s &&
                        l
                    ) {
                        (this._isSliding = !0),
                        c && this.pause(),
                            this._setActiveIndicatorElement(l);
                        var f = p.Event(O.SLID, {
                            relatedTarget: l,
                            direction: r,
                            from: a,
                            to: u,
                        });
                        if (p(this._element).hasClass("slide")) {
                            p(l).addClass(i),
                                g.reflow(l),
                                p(s).addClass(n),
                                p(l).addClass(n);
                            var d = parseInt(
                                l.getAttribute("data-interval"),
                                10
                            );
                            this._config.interval = d ?
                                ((this._config.defaultInterval =
                                        this._config.defaultInterval ||
                                        this._config.interval),
                                    d) :
                                this._config.defaultInterval ||
                                this._config.interval;
                            var h = g.getTransitionDurationFromElement(s);
                            p(s)
                                .one(g.TRANSITION_END, function() {
                                    p(l)
                                        .removeClass(n + " " + i)
                                        .addClass(L),
                                        p(s).removeClass(
                                            L + " " + i + " " + n
                                        ),
                                        (o._isSliding = !1),
                                        setTimeout(function() {
                                            return p(o._element).trigger(f);
                                        }, 0);
                                })
                                .emulateTransitionEnd(h);
                        } else
                            p(s).removeClass(L),
                            p(l).addClass(L),
                            (this._isSliding = !1),
                            p(this._element).trigger(f);
                        c && this.cycle();
                    }
                }),
                (o._jQueryInterface = function(i) {
                    return this.each(function() {
                        var e = p(this).data(C),
                            t = l({}, A, p(this).data());
                        "object" == typeof i && (t = l({}, t, i));
                        var n = "string" == typeof i ? i : t.slide;
                        if (
                            (e ||
                                ((e = new o(this, t)), p(this).data(C, e)),
                                "number" == typeof i)
                        )
                            e.to(i);
                        else if ("string" == typeof n) {
                            if (void 0 === e[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            e[n]();
                        } else
                            t.interval && t.ride && (e.pause(), e.cycle());
                    });
                }),
                (o._dataApiClickHandler = function(e) {
                    var t = g.getSelectorFromElement(this);
                    if (t) {
                        var n = p(t)[0];
                        if (n && p(n).hasClass("carousel")) {
                            var i = l({}, p(n).data(), p(this).data()),
                                r = this.getAttribute("data-slide-to");
                            r && (i.interval = !1),
                                o._jQueryInterface.call(p(n), i),
                                r && p(n).data(C).to(r),
                                e.preventDefault();
                        }
                    }
                }),
                s(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function() {
                            return A;
                        },
                    },
                ]),
                o
            );
        })();
    p(document).on(
            O.CLICK_DATA_API,
            "[data-slide], [data-slide-to]",
            P._dataApiClickHandler
        ),
        p(window).on(O.LOAD_DATA_API, function() {
            for (
                var e = [].slice.call(
                        document.querySelectorAll('[data-ride="carousel"]')
                    ),
                    t = 0,
                    n = e.length; t < n; t++
            ) {
                var i = p(e[t]);
                P._jQueryInterface.call(i, i.data());
            }
        }),
        (p.fn[T] = P._jQueryInterface),
        (p.fn[T].Constructor = P),
        (p.fn[T].noConflict = function() {
            return (p.fn[T] = D), P._jQueryInterface;
        });
    var q = "collapse",
        R = "bs.collapse",
        M = "." + R,
        F = p.fn[q],
        W = { toggle: !0, parent: "" },
        B = { toggle: "boolean", parent: "(string|element)" },
        U = {
            SHOW: "show" + M,
            SHOWN: "shown" + M,
            HIDE: "hide" + M,
            HIDDEN: "hidden" + M,
            CLICK_DATA_API: "click" + M + ".data-api",
        },
        K = "show",
        $ = "collapse",
        Q = "collapsing",
        V = "collapsed",
        z = '[data-toggle="collapse"]',
        Y = (function() {
            function a(t, e) {
                (this._isTransitioning = !1),
                (this._element = t),
                (this._config = this._getConfig(e)),
                (this._triggerArray = [].slice.call(
                    document.querySelectorAll(
                        '[data-toggle="collapse"][href="#' +
                        t.id +
                        '"],[data-toggle="collapse"][data-target="#' +
                        t.id +
                        '"]'
                    )
                ));
                for (
                    var n = [].slice.call(document.querySelectorAll(z)),
                        i = 0,
                        r = n.length; i < r; i++
                ) {
                    var o = n[i],
                        s = g.getSelectorFromElement(o),
                        a = [].slice
                        .call(document.querySelectorAll(s))
                        .filter(function(e) {
                            return e === t;
                        });
                    null !== s &&
                        0 < a.length &&
                        ((this._selector = s), this._triggerArray.push(o));
                }
                (this._parent = this._config.parent ?
                    this._getParent() :
                    null),
                this._config.parent ||
                    this._addAriaAndCollapsedClass(
                        this._element,
                        this._triggerArray
                    ),
                    this._config.toggle && this.toggle();
            }
            var e = a.prototype;
            return (
                (e.toggle = function() {
                    p(this._element).hasClass(K) ?
                        this.hide() :
                        this.show();
                }),
                (e.show = function() {
                    var e,
                        t,
                        n = this;
                    if (!(
                            this._isTransitioning ||
                            p(this._element).hasClass(K) ||
                            (this._parent &&
                                0 ===
                                (e = [].slice
                                    .call(
                                        this._parent.querySelectorAll(
                                            ".show, .collapsing"
                                        )
                                    )
                                    .filter(function(e) {
                                        return "string" ==
                                            typeof n._config.parent ?
                                            e.getAttribute(
                                                "data-parent"
                                            ) === n._config.parent :
                                            e.classList.contains($);
                                    })).length &&
                                (e = null),
                                e &&
                                (t = p(e).not(this._selector).data(R)) &&
                                t._isTransitioning)
                        )) {
                        var i = p.Event(U.SHOW);
                        if (
                            (p(this._element).trigger(i), !i.isDefaultPrevented())
                        ) {
                            e &&
                                (a._jQueryInterface.call(
                                        p(e).not(this._selector),
                                        "hide"
                                    ),
                                    t || p(e).data(R, null));
                            var r = this._getDimension();
                            p(this._element).removeClass($).addClass(Q),
                                (this._element.style[r] = 0),
                                this._triggerArray.length &&
                                p(this._triggerArray)
                                .removeClass(V)
                                .attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var o =
                                "scroll" +
                                (r[0].toUpperCase() + r.slice(1)),
                                s = g.getTransitionDurationFromElement(
                                    this._element
                                );
                            p(this._element)
                                .one(g.TRANSITION_END, function() {
                                    p(n._element)
                                        .removeClass(Q)
                                        .addClass($)
                                        .addClass(K),
                                        (n._element.style[r] = ""),
                                        n.setTransitioning(!1),
                                        p(n._element).trigger(U.SHOWN);
                                })
                                .emulateTransitionEnd(s),
                                (this._element.style[r] =
                                    this._element[o] + "px");
                        }
                    }
                }),
                (e.hide = function() {
                    var e = this;
                    if (!this._isTransitioning &&
                        p(this._element).hasClass(K)
                    ) {
                        var t = p.Event(U.HIDE);
                        if (
                            (p(this._element).trigger(t), !t.isDefaultPrevented())
                        ) {
                            var n = this._getDimension();
                            (this._element.style[n] =
                                this._element.getBoundingClientRect()[n] +
                                "px"),
                            g.reflow(this._element),
                                p(this._element)
                                .addClass(Q)
                                .removeClass($)
                                .removeClass(K);
                            var i = this._triggerArray.length;
                            if (0 < i)
                                for (var r = 0; r < i; r++) {
                                    var o = this._triggerArray[r],
                                        s = g.getSelectorFromElement(o);
                                    null !== s &&
                                        (p(
                                                [].slice.call(
                                                    document.querySelectorAll(s)
                                                )
                                            ).hasClass(K) ||
                                            p(o)
                                            .addClass(V)
                                            .attr("aria-expanded", !1));
                                }
                            this.setTransitioning(!0),
                                (this._element.style[n] = "");
                            var a = g.getTransitionDurationFromElement(
                                this._element
                            );
                            p(this._element)
                                .one(g.TRANSITION_END, function() {
                                    e.setTransitioning(!1),
                                        p(e._element)
                                        .removeClass(Q)
                                        .addClass($)
                                        .trigger(U.HIDDEN);
                                })
                                .emulateTransitionEnd(a);
                        }
                    }
                }),
                (e.setTransitioning = function(e) {
                    this._isTransitioning = e;
                }),
                (e.dispose = function() {
                    p.removeData(this._element, R),
                        (this._config = null),
                        (this._parent = null),
                        (this._element = null),
                        (this._triggerArray = null),
                        (this._isTransitioning = null);
                }),
                (e._getConfig = function(e) {
                    return (
                        ((e = l({}, W, e)).toggle = Boolean(e.toggle)),
                        g.typeCheckConfig(q, e, B),
                        e
                    );
                }),
                (e._getDimension = function() {
                    return p(this._element).hasClass("width") ?
                        "width" :
                        "height";
                }),
                (e._getParent = function() {
                    var e,
                        n = this;
                    g.isElement(this._config.parent) ?
                        ((e = this._config.parent),
                            void 0 !== this._config.parent.jquery &&
                            (e = this._config.parent[0])) :
                        (e = document.querySelector(this._config.parent));
                    var t =
                        '[data-toggle="collapse"][data-parent="' +
                        this._config.parent +
                        '"]',
                        i = [].slice.call(e.querySelectorAll(t));
                    return (
                        p(i).each(function(e, t) {
                            n._addAriaAndCollapsedClass(
                                a._getTargetFromElement(t), [t]
                            );
                        }),
                        e
                    );
                }),
                (e._addAriaAndCollapsedClass = function(e, t) {
                    var n = p(e).hasClass(K);
                    t.length &&
                        p(t).toggleClass(V, !n).attr("aria-expanded", n);
                }),
                (a._getTargetFromElement = function(e) {
                    var t = g.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null;
                }),
                (a._jQueryInterface = function(i) {
                    return this.each(function() {
                        var e = p(this),
                            t = e.data(R),
                            n = l({},
                                W,
                                e.data(),
                                "object" == typeof i && i ? i : {}
                            );
                        if (
                            (!t &&
                                n.toggle &&
                                /show|hide/.test(i) &&
                                (n.toggle = !1),
                                t || ((t = new a(this, n)), e.data(R, t)),
                                "string" == typeof i)
                        ) {
                            if (void 0 === t[i])
                                throw new TypeError(
                                    'No method named "' + i + '"'
                                );
                            t[i]();
                        }
                    });
                }),
                s(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function() {
                            return W;
                        },
                    },
                ]),
                a
            );
        })();
    p(document).on(U.CLICK_DATA_API, z, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = p(this),
                t = g.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(t));
            p(i).each(function() {
                var e = p(this),
                    t = e.data(R) ? "toggle" : n.data();
                Y._jQueryInterface.call(e, t);
            });
        }),
        (p.fn[q] = Y._jQueryInterface),
        (p.fn[q].Constructor = Y),
        (p.fn[q].noConflict = function() {
            return (p.fn[q] = F), Y._jQueryInterface;
        });
    var X = "dropdown",
        G = "bs.dropdown",
        J = "." + G,
        Z = ".data-api",
        ee = p.fn[X],
        te = new RegExp("38|40|27"),
        ne = {
            HIDE: "hide" + J,
            HIDDEN: "hidden" + J,
            SHOW: "show" + J,
            SHOWN: "shown" + J,
            CLICK: "click" + J,
            CLICK_DATA_API: "click" + J + Z,
            KEYDOWN_DATA_API: "keydown" + J + Z,
            KEYUP_DATA_API: "keyup" + J + Z,
        },
        ie = "disabled",
        re = "show",
        oe = "dropdown-menu-right",
        se = '[data-toggle="dropdown"]',
        ae = ".dropdown-menu",
        le = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
        },
        ue = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
        },
        ce = (function() {
            function u(e, t) {
                (this._element = e),
                (this._popper = null),
                (this._config = this._getConfig(t)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar()),
                this._addEventListeners();
            }
            var e = u.prototype;
            return (
                (e.toggle = function() {
                    if (!this._element.disabled &&
                        !p(this._element).hasClass(ie)
                    ) {
                        var e = u._getParentFromElement(this._element),
                            t = p(this._menu).hasClass(re);
                        if ((u._clearMenus(), !t)) {
                            var n = { relatedTarget: this._element },
                                i = p.Event(ne.SHOW, n);
                            if (
                                (p(e).trigger(i), !i.isDefaultPrevented())
                            ) {
                                if (!this._inNavbar) {
                                    if (void 0 === f)
                                        throw new TypeError(
                                            "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                                        );
                                    var r = this._element;
                                    "parent" === this._config.reference ?
                                        (r = e) :
                                        g.isElement(
                                            this._config.reference
                                        ) &&
                                        ((r = this._config.reference),
                                            void 0 !==
                                            this._config.reference
                                            .jquery &&
                                            (r = this._config
                                                .reference[0])),
                                        "scrollParent" !==
                                        this._config.boundary &&
                                        p(e).addClass(
                                            "position-static"
                                        ),
                                        (this._popper = new f(
                                            r,
                                            this._menu,
                                            this._getPopperConfig()
                                        ));
                                }
                                "ontouchstart" in
                                document.documentElement &&
                                    0 ===
                                    p(e).closest(".navbar-nav")
                                    .length &&
                                    p(document.body)
                                    .children()
                                    .on("mouseover", null, p.noop),
                                    this._element.focus(),
                                    this._element.setAttribute(
                                        "aria-expanded", !0
                                    ),
                                    p(this._menu).toggleClass(re),
                                    p(e)
                                    .toggleClass(re)
                                    .trigger(p.Event(ne.SHOWN, n));
                            }
                        }
                    }
                }),
                (e.show = function() {
                    if (!(
                            this._element.disabled ||
                            p(this._element).hasClass(ie) ||
                            p(this._menu).hasClass(re)
                        )) {
                        var e = { relatedTarget: this._element },
                            t = p.Event(ne.SHOW, e),
                            n = u._getParentFromElement(this._element);
                        p(n).trigger(t),
                            t.isDefaultPrevented() ||
                            (p(this._menu).toggleClass(re),
                                p(n)
                                .toggleClass(re)
                                .trigger(p.Event(ne.SHOWN, e)));
                    }
                }),
                (e.hide = function() {
                    if (!this._element.disabled &&
                        !p(this._element).hasClass(ie) &&
                        p(this._menu).hasClass(re)
                    ) {
                        var e = { relatedTarget: this._element },
                            t = p.Event(ne.HIDE, e),
                            n = u._getParentFromElement(this._element);
                        p(n).trigger(t),
                            t.isDefaultPrevented() ||
                            (p(this._menu).toggleClass(re),
                                p(n)
                                .toggleClass(re)
                                .trigger(p.Event(ne.HIDDEN, e)));
                    }
                }),
                (e.dispose = function() {
                    p.removeData(this._element, G),
                        p(this._element).off(J),
                        (this._element = null),
                        (this._menu = null) !== this._popper &&
                        (this._popper.destroy(), (this._popper = null));
                }),
                (e.update = function() {
                    (this._inNavbar = this._detectNavbar()),
                    null !== this._popper &&
                        this._popper.scheduleUpdate();
                }),
                (e._addEventListeners = function() {
                    var t = this;
                    p(this._element).on(ne.CLICK, function(e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle();
                    });
                }),
                (e._getConfig = function(e) {
                    return (
                        (e = l({},
                            this.constructor.Default,
                            p(this._element).data(),
                            e
                        )),
                        g.typeCheckConfig(
                            X,
                            e,
                            this.constructor.DefaultType
                        ),
                        e
                    );
                }),
                (e._getMenuElement = function() {
                    if (!this._menu) {
                        var e = u._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(ae));
                    }
                    return this._menu;
                }),
                (e._getPlacement = function() {
                    var e = p(this._element.parentNode),
                        t = "bottom-start";
                    return (
                        e.hasClass("dropup") ?
                        ((t = "top-start"),
                            p(this._menu).hasClass(oe) && (t = "top-end")) :
                        e.hasClass("dropright") ?
                        (t = "right-start") :
                        e.hasClass("dropleft") ?
                        (t = "left-start") :
                        p(this._menu).hasClass(oe) &&
                        (t = "bottom-end"),
                        t
                    );
                }),
                (e._detectNavbar = function() {
                    return 0 < p(this._element).closest(".navbar").length;
                }),
                (e._getOffset = function() {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this._config.offset ?
                        (e.fn = function(e) {
                            return (
                                (e.offsets = l({},
                                    e.offsets,
                                    t._config.offset(
                                        e.offsets,
                                        t._element
                                    ) || {}
                                )),
                                e
                            );
                        }) :
                        (e.offset = this._config.offset),
                        e
                    );
                }),
                (e._getPopperConfig = function() {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: { enabled: this._config.flip },
                            preventOverflow: {
                                boundariesElement: this._config.boundary,
                            },
                        },
                    };
                    return (
                        "static" === this._config.display &&
                        (e.modifiers.applyStyle = { enabled: !1 }),
                        e
                    );
                }),
                (u._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = p(this).data(G);
                        if (
                            (e ||
                                ((e = new u(
                                        this,
                                        "object" == typeof t ? t : null
                                    )),
                                    p(this).data(G, e)),
                                "string" == typeof t)
                        ) {
                            if (void 0 === e[t])
                                throw new TypeError(
                                    'No method named "' + t + '"'
                                );
                            e[t]();
                        }
                    });
                }),
                (u._clearMenus = function(e) {
                    if (!e ||
                        (3 !== e.which &&
                            ("keyup" !== e.type || 9 === e.which))
                    )
                        for (
                            var t = [].slice.call(
                                    document.querySelectorAll(se)
                                ),
                                n = 0,
                                i = t.length; n < i; n++
                        ) {
                            var r = u._getParentFromElement(t[n]),
                                o = p(t[n]).data(G),
                                s = { relatedTarget: t[n] };
                            if (
                                (e &&
                                    "click" === e.type &&
                                    (s.clickEvent = e),
                                    o)
                            ) {
                                var a = o._menu;
                                if (
                                    p(r).hasClass(re) &&
                                    !(
                                        e &&
                                        (("click" === e.type &&
                                                /input|textarea/i.test(
                                                    e.target.tagName
                                                )) ||
                                            ("keyup" === e.type &&
                                                9 === e.which)) &&
                                        p.contains(r, e.target)
                                    )
                                ) {
                                    var l = p.Event(ne.HIDE, s);
                                    p(r).trigger(l),
                                        l.isDefaultPrevented() ||
                                        ("ontouchstart" in
                                            document.documentElement &&
                                            p(document.body)
                                            .children()
                                            .off(
                                                "mouseover",
                                                null,
                                                p.noop
                                            ),
                                            t[n].setAttribute(
                                                "aria-expanded",
                                                "false"
                                            ),
                                            p(a).removeClass(re),
                                            p(r)
                                            .removeClass(re)
                                            .trigger(
                                                p.Event(ne.HIDDEN, s)
                                            ));
                                }
                            }
                        }
                }),
                (u._getParentFromElement = function(e) {
                    var t,
                        n = g.getSelectorFromElement(e);
                    return (
                        n && (t = document.querySelector(n)),
                        t || e.parentNode
                    );
                }),
                (u._dataApiKeydownHandler = function(e) {
                    if (
                        (/input|textarea/i.test(e.target.tagName) ?
                            !(
                                32 === e.which ||
                                (27 !== e.which &&
                                    ((40 !== e.which && 38 !== e.which) ||
                                        p(e.target).closest(ae).length))
                            ) :
                            te.test(e.which)) &&
                        (e.preventDefault(),
                            e.stopPropagation(), !this.disabled && !p(this).hasClass(ie))
                    ) {
                        var t = u._getParentFromElement(this),
                            n = p(t).hasClass(re);
                        if (
                            n &&
                            (!n || (27 !== e.which && 32 !== e.which))
                        ) {
                            var i = [].slice.call(
                                t.querySelectorAll(
                                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                                )
                            );
                            if (0 !== i.length) {
                                var r = i.indexOf(e.target);
                                38 === e.which && 0 < r && r--,
                                    40 === e.which &&
                                    r < i.length - 1 &&
                                    r++,
                                    r < 0 && (r = 0),
                                    i[r].focus();
                            }
                        } else {
                            if (27 === e.which) {
                                var o = t.querySelector(se);
                                p(o).trigger("focus");
                            }
                            p(this).trigger("click");
                        }
                    }
                }),
                s(u, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function() {
                            return le;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function() {
                            return ue;
                        },
                    },
                ]),
                u
            );
        })();
    p(document)
        .on(ne.KEYDOWN_DATA_API, se, ce._dataApiKeydownHandler)
        .on(ne.KEYDOWN_DATA_API, ae, ce._dataApiKeydownHandler)
        .on(ne.CLICK_DATA_API + " " + ne.KEYUP_DATA_API, ce._clearMenus)
        .on(ne.CLICK_DATA_API, se, function(e) {
            e.preventDefault(),
                e.stopPropagation(),
                ce._jQueryInterface.call(p(this), "toggle");
        })
        .on(ne.CLICK_DATA_API, ".dropdown form", function(e) {
            e.stopPropagation();
        }),
        (p.fn[X] = ce._jQueryInterface),
        (p.fn[X].Constructor = ce),
        (p.fn[X].noConflict = function() {
            return (p.fn[X] = ee), ce._jQueryInterface;
        });
    var fe = "modal",
        de = "bs.modal",
        he = "." + de,
        pe = p.fn[fe],
        ge = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        me = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean",
        },
        ve = {
            HIDE: "hide" + he,
            HIDDEN: "hidden" + he,
            SHOW: "show" + he,
            SHOWN: "shown" + he,
            FOCUSIN: "focusin" + he,
            RESIZE: "resize" + he,
            CLICK_DISMISS: "click.dismiss" + he,
            KEYDOWN_DISMISS: "keydown.dismiss" + he,
            MOUSEUP_DISMISS: "mouseup.dismiss" + he,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + he,
            CLICK_DATA_API: "click" + he + ".data-api",
        },
        ye = "modal-open",
        _e = "fade",
        be = "show",
        we = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Ee = ".sticky-top",
        Te = (function() {
            function r(e, t) {
                (this._config = this._getConfig(t)),
                (this._element = e),
                (this._dialog = e.querySelector(".modal-dialog")),
                (this._backdrop = null),
                (this._isShown = !1),
                (this._isBodyOverflowing = !1),
                (this._ignoreBackdropClick = !1),
                (this._isTransitioning = !1),
                (this._scrollbarWidth = 0);
            }
            var e = r.prototype;
            return (
                (e.toggle = function(e) {
                    return this._isShown ? this.hide() : this.show(e);
                }),
                (e.show = function(e) {
                    var t = this;
                    if (!this._isShown && !this._isTransitioning) {
                        p(this._element).hasClass(_e) &&
                            (this._isTransitioning = !0);
                        var n = p.Event(ve.SHOW, { relatedTarget: e });
                        p(this._element).trigger(n),
                            this._isShown ||
                            n.isDefaultPrevented() ||
                            ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                p(this._element).on(
                                    ve.CLICK_DISMISS,
                                    '[data-dismiss="modal"]',
                                    function(e) {
                                        return t.hide(e);
                                    }
                                ),
                                p(this._dialog).on(
                                    ve.MOUSEDOWN_DISMISS,
                                    function() {
                                        p(t._element).one(
                                            ve.MOUSEUP_DISMISS,
                                            function(e) {
                                                p(e.target).is(
                                                        t._element
                                                    ) &&
                                                    (t._ignoreBackdropClick = !0);
                                            }
                                        );
                                    }
                                ),
                                this._showBackdrop(function() {
                                    return t._showElement(e);
                                }));
                    }
                }),
                (e.hide = function(e) {
                    var t = this;
                    if (
                        (e && e.preventDefault(),
                            this._isShown && !this._isTransitioning)
                    ) {
                        var n = p.Event(ve.HIDE);
                        if (
                            (p(this._element).trigger(n),
                                this._isShown && !n.isDefaultPrevented())
                        ) {
                            this._isShown = !1;
                            var i = p(this._element).hasClass(_e);
                            if (
                                (i && (this._isTransitioning = !0),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    p(document).off(ve.FOCUSIN),
                                    p(this._element).removeClass(be),
                                    p(this._element).off(ve.CLICK_DISMISS),
                                    p(this._dialog).off(ve.MOUSEDOWN_DISMISS),
                                    i)
                            ) {
                                var r = g.getTransitionDurationFromElement(
                                    this._element
                                );
                                p(this._element)
                                    .one(g.TRANSITION_END, function(e) {
                                        return t._hideModal(e);
                                    })
                                    .emulateTransitionEnd(r);
                            } else this._hideModal();
                        }
                    }
                }),
                (e.dispose = function() {
                    [window, this._element, this._dialog].forEach(function(
                            e
                        ) {
                            return p(e).off(he);
                        }),
                        p(document).off(ve.FOCUSIN),
                        p.removeData(this._element, de),
                        (this._config = null),
                        (this._element = null),
                        (this._dialog = null),
                        (this._backdrop = null),
                        (this._isShown = null),
                        (this._isBodyOverflowing = null),
                        (this._ignoreBackdropClick = null),
                        (this._isTransitioning = null),
                        (this._scrollbarWidth = null);
                }),
                (e.handleUpdate = function() {
                    this._adjustDialog();
                }),
                (e._getConfig = function(e) {
                    return (
                        (e = l({}, ge, e)), g.typeCheckConfig(fe, e, me), e
                    );
                }),
                (e._showElement = function(e) {
                    var t = this,
                        n = p(this._element).hasClass(_e);
                    (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                        Node.ELEMENT_NODE) ||
                    document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        p(this._dialog).hasClass("modal-dialog-scrollable") ?
                        (this._dialog.querySelector(
                            ".modal-body"
                        ).scrollTop = 0) :
                        (this._element.scrollTop = 0),
                        n && g.reflow(this._element),
                        p(this._element).addClass(be),
                        this._config.focus && this._enforceFocus();
                    var i = p.Event(ve.SHOWN, { relatedTarget: e }),
                        r = function() {
                            t._config.focus && t._element.focus(),
                                (t._isTransitioning = !1),
                                p(t._element).trigger(i);
                        };
                    if (n) {
                        var o = g.getTransitionDurationFromElement(
                            this._dialog
                        );
                        p(this._dialog)
                            .one(g.TRANSITION_END, r)
                            .emulateTransitionEnd(o);
                    } else r();
                }),
                (e._enforceFocus = function() {
                    var t = this;
                    p(document)
                        .off(ve.FOCUSIN)
                        .on(ve.FOCUSIN, function(e) {
                            document !== e.target &&
                                t._element !== e.target &&
                                0 === p(t._element).has(e.target).length &&
                                t._element.focus();
                        });
                }),
                (e._setEscapeEvent = function() {
                    var t = this;
                    this._isShown && this._config.keyboard ?
                        p(this._element).on(ve.KEYDOWN_DISMISS, function(
                            e
                        ) {
                            27 === e.which &&
                                (e.preventDefault(), t.hide());
                        }) :
                        this._isShown ||
                        p(this._element).off(ve.KEYDOWN_DISMISS);
                }),
                (e._setResizeEvent = function() {
                    var t = this;
                    this._isShown ?
                        p(window).on(ve.RESIZE, function(e) {
                            return t.handleUpdate(e);
                        }) :
                        p(window).off(ve.RESIZE);
                }),
                (e._hideModal = function() {
                    var e = this;
                    (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        (this._isTransitioning = !1),
                        this._showBackdrop(function() {
                            p(document.body).removeClass(ye),
                                e._resetAdjustments(),
                                e._resetScrollbar(),
                                p(e._element).trigger(ve.HIDDEN);
                        });
                }),
                (e._removeBackdrop = function() {
                    this._backdrop &&
                        (p(this._backdrop).remove(),
                            (this._backdrop = null));
                }),
                (e._showBackdrop = function(e) {
                    var t = this,
                        n = p(this._element).hasClass(_e) ? _e : "";
                    if (this._isShown && this._config.backdrop) {
                        if (
                            ((this._backdrop = document.createElement(
                                    "div"
                                )),
                                (this._backdrop.className = "modal-backdrop"),
                                n && this._backdrop.classList.add(n),
                                p(this._backdrop).appendTo(document.body),
                                p(this._element).on(ve.CLICK_DISMISS, function(
                                    e
                                ) {
                                    t._ignoreBackdropClick ?
                                        (t._ignoreBackdropClick = !1) :
                                        e.target === e.currentTarget &&
                                        ("static" === t._config.backdrop ?
                                            t._element.focus() :
                                            t.hide());
                                }),
                                n && g.reflow(this._backdrop),
                                p(this._backdrop).addClass(be), !e)
                        )
                            return;
                        if (!n) return void e();
                        var i = g.getTransitionDurationFromElement(
                            this._backdrop
                        );
                        p(this._backdrop)
                            .one(g.TRANSITION_END, e)
                            .emulateTransitionEnd(i);
                    } else if (!this._isShown && this._backdrop) {
                        p(this._backdrop).removeClass(be);
                        var r = function() {
                            t._removeBackdrop(), e && e();
                        };
                        if (p(this._element).hasClass(_e)) {
                            var o = g.getTransitionDurationFromElement(
                                this._backdrop
                            );
                            p(this._backdrop)
                                .one(g.TRANSITION_END, r)
                                .emulateTransitionEnd(o);
                        } else r();
                    } else e && e();
                }),
                (e._adjustDialog = function() {
                    var e =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight;
                    !this._isBodyOverflowing &&
                        e &&
                        (this._element.style.paddingLeft =
                            this._scrollbarWidth + "px"),
                        this._isBodyOverflowing &&
                        !e &&
                        (this._element.style.paddingRight =
                            this._scrollbarWidth + "px");
                }),
                (e._resetAdjustments = function() {
                    (this._element.style.paddingLeft = ""),
                    (this._element.style.paddingRight = "");
                }),
                (e._checkScrollbar = function() {
                    var e = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing =
                        e.left + e.right < window.innerWidth),
                    (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (e._setScrollbar = function() {
                    var r = this;
                    if (this._isBodyOverflowing) {
                        var e = [].slice.call(
                                document.querySelectorAll(we)
                            ),
                            t = [].slice.call(
                                document.querySelectorAll(Ee)
                            );
                        p(e).each(function(e, t) {
                                var n = t.style.paddingRight,
                                    i = p(t).css("padding-right");
                                p(t)
                                    .data("padding-right", n)
                                    .css(
                                        "padding-right",
                                        parseFloat(i) + r._scrollbarWidth + "px"
                                    );
                            }),
                            p(t).each(function(e, t) {
                                var n = t.style.marginRight,
                                    i = p(t).css("margin-right");
                                p(t)
                                    .data("margin-right", n)
                                    .css(
                                        "margin-right",
                                        parseFloat(i) -
                                        r._scrollbarWidth +
                                        "px"
                                    );
                            });
                        var n = document.body.style.paddingRight,
                            i = p(document.body).css("padding-right");
                        p(document.body)
                            .data("padding-right", n)
                            .css(
                                "padding-right",
                                parseFloat(i) + this._scrollbarWidth + "px"
                            );
                    }
                    p(document.body).addClass(ye);
                }),
                (e._resetScrollbar = function() {
                    var e = [].slice.call(document.querySelectorAll(we));
                    p(e).each(function(e, t) {
                        var n = p(t).data("padding-right");
                        p(t).removeData("padding-right"),
                            (t.style.paddingRight = n || "");
                    });
                    var t = [].slice.call(
                        document.querySelectorAll("" + Ee)
                    );
                    p(t).each(function(e, t) {
                        var n = p(t).data("margin-right");
                        void 0 !== n &&
                            p(t)
                            .css("margin-right", n)
                            .removeData("margin-right");
                    });
                    var n = p(document.body).data("padding-right");
                    p(document.body).removeData("padding-right"),
                        (document.body.style.paddingRight = n || "");
                }),
                (e._getScrollbarWidth = function() {
                    var e = document.createElement("div");
                    (e.className = "modal-scrollbar-measure"),
                    document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t;
                }),
                (r._jQueryInterface = function(n, i) {
                    return this.each(function() {
                        var e = p(this).data(de),
                            t = l({},
                                ge,
                                p(this).data(),
                                "object" == typeof n && n ? n : {}
                            );
                        if (
                            (e ||
                                ((e = new r(this, t)), p(this).data(de, e)),
                                "string" == typeof n)
                        ) {
                            if (void 0 === e[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            e[n](i);
                        } else t.show && e.show(i);
                    });
                }),
                s(r, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function() {
                            return ge;
                        },
                    },
                ]),
                r
            );
        })();
    p(document).on(ve.CLICK_DATA_API, '[data-toggle="modal"]', function(
            e
        ) {
            var t,
                n = this,
                i = g.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var r = p(t).data(de) ?
                "toggle" :
                l({}, p(t).data(), p(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) ||
            e.preventDefault();
            var o = p(t).one(ve.SHOW, function(e) {
                e.isDefaultPrevented() ||
                    o.one(ve.HIDDEN, function() {
                        p(n).is(":visible") && n.focus();
                    });
            });
            Te._jQueryInterface.call(p(t), r, this);
        }),
        (p.fn[fe] = Te._jQueryInterface),
        (p.fn[fe].Constructor = Te),
        (p.fn[fe].noConflict = function() {
            return (p.fn[fe] = pe), Te._jQueryInterface;
        });
    var Ce = [
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ],
        xe = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Se = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function De(e, s, t) {
        if (0 === e.length) return e;
        if (t && "function" == typeof t) return t(e);
        for (
            var n = new window.DOMParser().parseFromString(e, "text/html"),
                a = Object.keys(s),
                l = [].slice.call(n.body.querySelectorAll("*")),
                i = function(e, t) {
                    var n = l[e],
                        i = n.nodeName.toLowerCase();
                    if (-1 === a.indexOf(n.nodeName.toLowerCase()))
                        return n.parentNode.removeChild(n), "continue";
                    var r = [].slice.call(n.attributes),
                        o = [].concat(s["*"] || [], s[i] || []);
                    r.forEach(function(e) {
                        (function(e, t) {
                            var n = e.nodeName.toLowerCase();
                            if (-1 !== t.indexOf(n))
                                return (-1 === Ce.indexOf(n) ||
                                    Boolean(
                                        e.nodeValue.match(xe) ||
                                        e.nodeValue.match(Se)
                                    )
                                );
                            for (
                                var i = t.filter(function(e) {
                                        return e instanceof RegExp;
                                    }),
                                    r = 0,
                                    o = i.length; r < o; r++
                            )
                                if (n.match(i[r])) return !0;
                            return !1;
                        })(e, o) || n.removeAttribute(e.nodeName);
                    });
                },
                r = 0,
                o = l.length; r < o; r++
        )
            i(r);
        return n.body.innerHTML;
    }
    var Ae = "tooltip",
        Ne = "bs.tooltip",
        Ie = "." + Ne,
        ke = p.fn[Ae],
        Oe = "bs-tooltip",
        Le = new RegExp("(^|\\s)" + Oe + "\\S+", "g"),
        je = ["sanitize", "whiteList", "sanitizeFn"],
        He = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
        },
        Pe = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
        },
        qe = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": [
                    "class",
                    "dir",
                    "id",
                    "lang",
                    "role",
                    /^aria-[\w-]*$/i,
                ],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
        },
        Re = "show",
        Me = {
            HIDE: "hide" + Ie,
            HIDDEN: "hidden" + Ie,
            SHOW: "show" + Ie,
            SHOWN: "shown" + Ie,
            INSERTED: "inserted" + Ie,
            CLICK: "click" + Ie,
            FOCUSIN: "focusin" + Ie,
            FOCUSOUT: "focusout" + Ie,
            MOUSEENTER: "mouseenter" + Ie,
            MOUSELEAVE: "mouseleave" + Ie,
        },
        Fe = "fade",
        We = "show",
        Be = "hover",
        Ue = "focus",
        Ke = (function() {
            function i(e, t) {
                if (void 0 === f)
                    throw new TypeError(
                        "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                    );
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this.element = e),
                (this.config = this._getConfig(t)),
                (this.tip = null),
                this._setListeners();
            }
            var e = i.prototype;
            return (
                (e.enable = function() {
                    this._isEnabled = !0;
                }),
                (e.disable = function() {
                    this._isEnabled = !1;
                }),
                (e.toggleEnabled = function() {
                    this._isEnabled = !this._isEnabled;
                }),
                (e.toggle = function(e) {
                    if (this._isEnabled)
                        if (e) {
                            var t = this.constructor.DATA_KEY,
                                n = p(e.currentTarget).data(t);
                            n ||
                                ((n = new this.constructor(
                                        e.currentTarget,
                                        this._getDelegateConfig()
                                    )),
                                    p(e.currentTarget).data(t, n)),
                                (n._activeTrigger.click = !n._activeTrigger
                                    .click),
                                n._isWithActiveTrigger() ?
                                n._enter(null, n) :
                                n._leave(null, n);
                        } else {
                            if (p(this.getTipElement()).hasClass(We))
                                return void this._leave(null, this);
                            this._enter(null, this);
                        }
                }),
                (e.dispose = function() {
                    clearTimeout(this._timeout),
                        p.removeData(
                            this.element,
                            this.constructor.DATA_KEY
                        ),
                        p(this.element).off(this.constructor.EVENT_KEY),
                        p(this.element)
                        .closest(".modal")
                        .off("hide.bs.modal"),
                        this.tip && p(this.tip).remove(),
                        (this._isEnabled = null),
                        (this._timeout = null),
                        (this._hoverState = null),
                        (this._activeTrigger = null) !== this._popper &&
                        this._popper.destroy(),
                        (this._popper = null),
                        (this.element = null),
                        (this.config = null),
                        (this.tip = null);
                }),
                (e.show = function() {
                    var t = this;
                    if ("none" === p(this.element).css("display"))
                        throw new Error(
                            "Please use show on visible elements"
                        );
                    var e = p.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        p(this.element).trigger(e);
                        var n = g.findShadowRoot(this.element),
                            i = p.contains(
                                null !== n ?
                                n :
                                this.element.ownerDocument
                                .documentElement,
                                this.element
                            );
                        if (e.isDefaultPrevented() || !i) return;
                        var r = this.getTipElement(),
                            o = g.getUID(this.constructor.NAME);
                        r.setAttribute("id", o),
                            this.element.setAttribute(
                                "aria-describedby",
                                o
                            ),
                            this.setContent(),
                            this.config.animation && p(r).addClass(Fe);
                        var s =
                            "function" == typeof this.config.placement ?
                            this.config.placement.call(
                                this,
                                r,
                                this.element
                            ) :
                            this.config.placement,
                            a = this._getAttachment(s);
                        this.addAttachmentClass(a);
                        var l = this._getContainer();
                        p(r).data(this.constructor.DATA_KEY, this),
                            p.contains(
                                this.element.ownerDocument.documentElement,
                                this.tip
                            ) || p(r).appendTo(l),
                            p(this.element).trigger(
                                this.constructor.Event.INSERTED
                            ),
                            (this._popper = new f(this.element, r, {
                                placement: a,
                                modifiers: {
                                    offset: this._getOffset(),
                                    flip: {
                                        behavior: this.config
                                            .fallbackPlacement,
                                    },
                                    arrow: { element: ".arrow" },
                                    preventOverflow: {
                                        boundariesElement: this.config
                                            .boundary,
                                    },
                                },
                                onCreate: function(e) {
                                    e.originalPlacement !== e.placement &&
                                        t._handlePopperPlacementChange(e);
                                },
                                onUpdate: function(e) {
                                    return t._handlePopperPlacementChange(
                                        e
                                    );
                                },
                            })),
                            p(r).addClass(We),
                            "ontouchstart" in document.documentElement &&
                            p(document.body)
                            .children()
                            .on("mouseover", null, p.noop);
                        var u = function() {
                            t.config.animation && t._fixTransition();
                            var e = t._hoverState;
                            (t._hoverState = null),
                            p(t.element).trigger(
                                    t.constructor.Event.SHOWN
                                ),
                                "out" === e && t._leave(null, t);
                        };
                        if (p(this.tip).hasClass(Fe)) {
                            var c = g.getTransitionDurationFromElement(
                                this.tip
                            );
                            p(this.tip)
                                .one(g.TRANSITION_END, u)
                                .emulateTransitionEnd(c);
                        } else u();
                    }
                }),
                (e.hide = function(e) {
                    var t = this,
                        n = this.getTipElement(),
                        i = p.Event(this.constructor.Event.HIDE),
                        r = function() {
                            t._hoverState !== Re &&
                                n.parentNode &&
                                n.parentNode.removeChild(n),
                                t._cleanTipClass(),
                                t.element.removeAttribute(
                                    "aria-describedby"
                                ),
                                p(t.element).trigger(
                                    t.constructor.Event.HIDDEN
                                ),
                                null !== t._popper && t._popper.destroy(),
                                e && e();
                        };
                    if (
                        (p(this.element).trigger(i), !i.isDefaultPrevented())
                    ) {
                        if (
                            (p(n).removeClass(We),
                                "ontouchstart" in document.documentElement &&
                                p(document.body)
                                .children()
                                .off("mouseover", null, p.noop),
                                (this._activeTrigger.click = !1),
                                (this._activeTrigger[Ue] = !1),
                                (this._activeTrigger[Be] = !1),
                                p(this.tip).hasClass(Fe))
                        ) {
                            var o = g.getTransitionDurationFromElement(n);
                            p(n)
                                .one(g.TRANSITION_END, r)
                                .emulateTransitionEnd(o);
                        } else r();
                        this._hoverState = "";
                    }
                }),
                (e.update = function() {
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (e.isWithContent = function() {
                    return Boolean(this.getTitle());
                }),
                (e.addAttachmentClass = function(e) {
                    p(this.getTipElement()).addClass(Oe + "-" + e);
                }),
                (e.getTipElement = function() {
                    return (
                        (this.tip = this.tip || p(this.config.template)[0]),
                        this.tip
                    );
                }),
                (e.setContent = function() {
                    var e = this.getTipElement();
                    this.setElementContent(
                            p(e.querySelectorAll(".tooltip-inner")),
                            this.getTitle()
                        ),
                        p(e).removeClass(Fe + " " + We);
                }),
                (e.setElementContent = function(e, t) {
                    "object" != typeof t || (!t.nodeType && !t.jquery) ?
                        this.config.html ?
                        (this.config.sanitize &&
                            (t = De(
                                t,
                                this.config.whiteList,
                                this.config.sanitizeFn
                            )),
                            e.html(t)) :
                        e.text(t) :
                        this.config.html ?
                        p(t).parent().is(e) || e.empty().append(t) :
                        e.text(p(t).text());
                }),
                (e.getTitle = function() {
                    var e = this.element.getAttribute(
                        "data-original-title"
                    );
                    return (
                        e ||
                        (e =
                            "function" == typeof this.config.title ?
                            this.config.title.call(this.element) :
                            this.config.title),
                        e
                    );
                }),
                (e._getOffset = function() {
                    var t = this,
                        e = {};
                    return (
                        "function" == typeof this.config.offset ?
                        (e.fn = function(e) {
                            return (
                                (e.offsets = l({},
                                    e.offsets,
                                    t.config.offset(
                                        e.offsets,
                                        t.element
                                    ) || {}
                                )),
                                e
                            );
                        }) :
                        (e.offset = this.config.offset),
                        e
                    );
                }),
                (e._getContainer = function() {
                    return !1 === this.config.container ?
                        document.body :
                        g.isElement(this.config.container) ?
                        p(this.config.container) :
                        p(document).find(this.config.container);
                }),
                (e._getAttachment = function(e) {
                    return Pe[e.toUpperCase()];
                }),
                (e._setListeners = function() {
                    var i = this;
                    this.config.trigger.split(" ").forEach(function(e) {
                            if ("click" === e)
                                p(i.element).on(
                                    i.constructor.Event.CLICK,
                                    i.config.selector,
                                    function(e) {
                                        return i.toggle(e);
                                    }
                                );
                            else if ("manual" !== e) {
                                var t =
                                    e === Be ?
                                    i.constructor.Event.MOUSEENTER :
                                    i.constructor.Event.FOCUSIN,
                                    n =
                                    e === Be ?
                                    i.constructor.Event.MOUSELEAVE :
                                    i.constructor.Event.FOCUSOUT;
                                p(i.element)
                                    .on(t, i.config.selector, function(e) {
                                        return i._enter(e);
                                    })
                                    .on(n, i.config.selector, function(e) {
                                        return i._leave(e);
                                    });
                            }
                        }),
                        p(this.element)
                        .closest(".modal")
                        .on("hide.bs.modal", function() {
                            i.element && i.hide();
                        }),
                        this.config.selector ?
                        (this.config = l({}, this.config, {
                            trigger: "manual",
                            selector: "",
                        })) :
                        this._fixTitle();
                }),
                (e._fixTitle = function() {
                    var e = typeof this.element.getAttribute(
                        "data-original-title"
                    );
                    (this.element.getAttribute("title") ||
                        "string" !== e) &&
                    (this.element.setAttribute(
                            "data-original-title",
                            this.element.getAttribute("title") || ""
                        ),
                        this.element.setAttribute("title", ""));
                }),
                (e._enter = function(e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || p(e.currentTarget).data(n)) ||
                    ((t = new this.constructor(
                            e.currentTarget,
                            this._getDelegateConfig()
                        )),
                        p(e.currentTarget).data(n, t)),
                    e &&
                        (t._activeTrigger[
                            "focusin" === e.type ? Ue : Be
                        ] = !0),
                        p(t.getTipElement()).hasClass(We) ||
                        t._hoverState === Re ?
                        (t._hoverState = Re) :
                        (clearTimeout(t._timeout),
                            (t._hoverState = Re),
                            t.config.delay && t.config.delay.show ?
                            (t._timeout = setTimeout(function() {
                                t._hoverState === Re && t.show();
                            }, t.config.delay.show)) :
                            t.show());
                }),
                (e._leave = function(e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || p(e.currentTarget).data(n)) ||
                    ((t = new this.constructor(
                            e.currentTarget,
                            this._getDelegateConfig()
                        )),
                        p(e.currentTarget).data(n, t)),
                    e &&
                        (t._activeTrigger[
                            "focusout" === e.type ? Ue : Be
                        ] = !1),
                        t._isWithActiveTrigger() ||
                        (clearTimeout(t._timeout),
                            (t._hoverState = "out"),
                            t.config.delay && t.config.delay.hide ?
                            (t._timeout = setTimeout(function() {
                                "out" === t._hoverState && t.hide();
                            }, t.config.delay.hide)) :
                            t.hide());
                }),
                (e._isWithActiveTrigger = function() {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1;
                }),
                (e._getConfig = function(e) {
                    var t = p(this.element).data();
                    return (
                        Object.keys(t).forEach(function(e) {
                            -1 !== je.indexOf(e) && delete t[e];
                        }),
                        "number" ==
                        typeof(e = l({},
                            this.constructor.Default,
                            t,
                            "object" == typeof e && e ? e : {}
                        )).delay &&
                        (e.delay = { show: e.delay, hide: e.delay }),
                        "number" == typeof e.title &&
                        (e.title = e.title.toString()),
                        "number" == typeof e.content &&
                        (e.content = e.content.toString()),
                        g.typeCheckConfig(
                            Ae,
                            e,
                            this.constructor.DefaultType
                        ),
                        e.sanitize &&
                        (e.template = De(
                            e.template,
                            e.whiteList,
                            e.sanitizeFn
                        )),
                        e
                    );
                }),
                (e._getDelegateConfig = function() {
                    var e = {};
                    if (this.config)
                        for (var t in this.config)
                            this.constructor.Default[t] !==
                            this.config[t] && (e[t] = this.config[t]);
                    return e;
                }),
                (e._cleanTipClass = function() {
                    var e = p(this.getTipElement()),
                        t = e.attr("class").match(Le);
                    null !== t && t.length && e.removeClass(t.join(""));
                }),
                (e._handlePopperPlacementChange = function(e) {
                    var t = e.instance;
                    (this.tip = t.popper),
                    this._cleanTipClass(),
                        this.addAttachmentClass(
                            this._getAttachment(e.placement)
                        );
                }),
                (e._fixTransition = function() {
                    var e = this.getTipElement(),
                        t = this.config.animation;
                    null === e.getAttribute("x-placement") &&
                        (p(e).removeClass(Fe),
                            (this.config.animation = !1),
                            this.hide(),
                            this.show(),
                            (this.config.animation = t));
                }),
                (i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = p(this).data(Ne),
                            t = "object" == typeof n && n;
                        if (
                            (e || !/dispose|hide/.test(n)) &&
                            (e ||
                                ((e = new i(this, t)), p(this).data(Ne, e)),
                                "string" == typeof n)
                        ) {
                            if (void 0 === e[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            e[n]();
                        }
                    });
                }),
                s(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function() {
                            return qe;
                        },
                    },
                    {
                        key: "NAME",
                        get: function() {
                            return Ae;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function() {
                            return Ne;
                        },
                    },
                    {
                        key: "Event",
                        get: function() {
                            return Me;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function() {
                            return Ie;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function() {
                            return He;
                        },
                    },
                ]),
                i
            );
        })();
    (p.fn[Ae] = Ke._jQueryInterface),
    (p.fn[Ae].Constructor = Ke),
    (p.fn[Ae].noConflict = function() {
        return (p.fn[Ae] = ke), Ke._jQueryInterface;
    });
    var $e = "popover",
        Qe = "bs.popover",
        Ve = "." + Qe,
        ze = p.fn[$e],
        Ye = "bs-popover",
        Xe = new RegExp("(^|\\s)" + Ye + "\\S+", "g"),
        Ge = l({}, Ke.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        Je = l({}, Ke.DefaultType, {
            content: "(string|element|function)",
        }),
        Ze = {
            HIDE: "hide" + Ve,
            HIDDEN: "hidden" + Ve,
            SHOW: "show" + Ve,
            SHOWN: "shown" + Ve,
            INSERTED: "inserted" + Ve,
            CLICK: "click" + Ve,
            FOCUSIN: "focusin" + Ve,
            FOCUSOUT: "focusout" + Ve,
            MOUSEENTER: "mouseenter" + Ve,
            MOUSELEAVE: "mouseleave" + Ve,
        },
        et = (function(e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this;
            }
            (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            ((t.prototype.constructor = t).__proto__ = n);
            var r = i.prototype;
            return (
                (r.isWithContent = function() {
                    return this.getTitle() || this._getContent();
                }),
                (r.addAttachmentClass = function(e) {
                    p(this.getTipElement()).addClass(Ye + "-" + e);
                }),
                (r.getTipElement = function() {
                    return (
                        (this.tip = this.tip || p(this.config.template)[0]),
                        this.tip
                    );
                }),
                (r.setContent = function() {
                    var e = p(this.getTipElement());
                    this.setElementContent(
                        e.find(".popover-header"),
                        this.getTitle()
                    );
                    var t = this._getContent();
                    "function" == typeof t && (t = t.call(this.element)),
                        this.setElementContent(e.find(".popover-body"), t),
                        e.removeClass("fade show");
                }),
                (r._getContent = function() {
                    return (
                        this.element.getAttribute("data-content") ||
                        this.config.content
                    );
                }),
                (r._cleanTipClass = function() {
                    var e = p(this.getTipElement()),
                        t = e.attr("class").match(Xe);
                    null !== t && 0 < t.length && e.removeClass(t.join(""));
                }),
                (i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = p(this).data(Qe),
                            t = "object" == typeof n ? n : null;
                        if (
                            (e || !/dispose|hide/.test(n)) &&
                            (e ||
                                ((e = new i(this, t)), p(this).data(Qe, e)),
                                "string" == typeof n)
                        ) {
                            if (void 0 === e[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            e[n]();
                        }
                    });
                }),
                s(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function() {
                            return Ge;
                        },
                    },
                    {
                        key: "NAME",
                        get: function() {
                            return $e;
                        },
                    },
                    {
                        key: "DATA_KEY",
                        get: function() {
                            return Qe;
                        },
                    },
                    {
                        key: "Event",
                        get: function() {
                            return Ze;
                        },
                    },
                    {
                        key: "EVENT_KEY",
                        get: function() {
                            return Ve;
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function() {
                            return Je;
                        },
                    },
                ]),
                i
            );
        })(Ke);
    (p.fn[$e] = et._jQueryInterface),
    (p.fn[$e].Constructor = et),
    (p.fn[$e].noConflict = function() {
        return (p.fn[$e] = ze), et._jQueryInterface;
    });
    var tt = "scrollspy",
        nt = "bs.scrollspy",
        it = "." + nt,
        rt = p.fn[tt],
        ot = { offset: 10, method: "auto", target: "" },
        st = {
            offset: "number",
            method: "string",
            target: "(string|element)",
        },
        at = {
            ACTIVATE: "activate" + it,
            SCROLL: "scroll" + it,
            LOAD_DATA_API: "load" + it + ".data-api",
        },
        lt = "active",
        ut = ".nav, .list-group",
        ct = ".nav-link",
        ft = ".list-group-item",
        dt = "position",
        ht = (function() {
            function n(e, t) {
                var n = this;
                (this._element = e),
                (this._scrollElement =
                    "BODY" === e.tagName ? window : e),
                (this._config = this._getConfig(t)),
                (this._selector =
                    this._config.target +
                    " " +
                    ct +
                    "," +
                    this._config.target +
                    " " +
                    ft +
                    "," +
                    this._config.target +
                    " .dropdown-item"),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                p(this._scrollElement).on(at.SCROLL, function(e) {
                        return n._process(e);
                    }),
                    this.refresh(),
                    this._process();
            }
            var e = n.prototype;
            return (
                (e.refresh = function() {
                    var t = this,
                        e =
                        this._scrollElement ===
                        this._scrollElement.window ?
                        "offset" :
                        dt,
                        r =
                        "auto" === this._config.method ?
                        e :
                        this._config.method,
                        o = r === dt ? this._getScrollTop() : 0;
                    (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight()), [].slice
                        .call(document.querySelectorAll(this._selector))
                        .map(function(e) {
                            var t,
                                n = g.getSelectorFromElement(e);
                            if (
                                (n && (t = document.querySelector(n)),
                                    t)
                            ) {
                                var i = t.getBoundingClientRect();
                                if (i.width || i.height)
                                    return [p(t)[r]().top + o, n];
                            }
                            return null;
                        })
                        .filter(function(e) {
                            return e;
                        })
                        .sort(function(e, t) {
                            return e[0] - t[0];
                        })
                        .forEach(function(e) {
                            t._offsets.push(e[0]),
                                t._targets.push(e[1]);
                        });
                }),
                (e.dispose = function() {
                    p.removeData(this._element, nt),
                        p(this._scrollElement).off(it),
                        (this._element = null),
                        (this._scrollElement = null),
                        (this._config = null),
                        (this._selector = null),
                        (this._offsets = null),
                        (this._targets = null),
                        (this._activeTarget = null),
                        (this._scrollHeight = null);
                }),
                (e._getConfig = function(e) {
                    if (
                        "string" !=
                        typeof(e = l({},
                            ot,
                            "object" == typeof e && e ? e : {}
                        )).target
                    ) {
                        var t = p(e.target).attr("id");
                        t ||
                            ((t = g.getUID(tt)), p(e.target).attr("id", t)),
                            (e.target = "#" + t);
                    }
                    return g.typeCheckConfig(tt, e, st), e;
                }),
                (e._getScrollTop = function() {
                    return this._scrollElement === window ?
                        this._scrollElement.pageYOffset :
                        this._scrollElement.scrollTop;
                }),
                (e._getScrollHeight = function() {
                    return (
                        this._scrollElement.scrollHeight ||
                        Math.max(
                            document.body.scrollHeight,
                            document.documentElement.scrollHeight
                        )
                    );
                }),
                (e._getOffsetHeight = function() {
                    return this._scrollElement === window ?
                        window.innerHeight :
                        this._scrollElement.getBoundingClientRect()
                        .height;
                }),
                (e._process = function() {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n =
                        this._config.offset +
                        t -
                        this._getOffsetHeight();
                    if (
                        (this._scrollHeight !== t && this.refresh(), n <= e)
                    ) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                    } else {
                        if (
                            this._activeTarget &&
                            e < this._offsets[0] &&
                            0 < this._offsets[0]
                        )
                            return (
                                (this._activeTarget = null),
                                void this._clear()
                            );
                        for (var r = this._offsets.length; r--;)
                            this._activeTarget !== this._targets[r] &&
                            e >= this._offsets[r] &&
                            (void 0 === this._offsets[r + 1] ||
                                e < this._offsets[r + 1]) &&
                            this._activate(this._targets[r]);
                    }
                }),
                (e._activate = function(t) {
                    (this._activeTarget = t), this._clear();
                    var e = this._selector.split(",").map(function(e) {
                            return (
                                e +
                                '[data-target="' +
                                t +
                                '"],' +
                                e +
                                '[href="' +
                                t +
                                '"]'
                            );
                        }),
                        n = p(
                            [].slice.call(
                                document.querySelectorAll(e.join(","))
                            )
                        );
                    n.hasClass("dropdown-item") ?
                        (n
                            .closest(".dropdown")
                            .find(".dropdown-toggle")
                            .addClass(lt),
                            n.addClass(lt)) :
                        (n.addClass(lt),
                            n
                            .parents(ut)
                            .prev(ct + ", " + ft)
                            .addClass(lt),
                            n
                            .parents(ut)
                            .prev(".nav-item")
                            .children(ct)
                            .addClass(lt)),
                        p(this._scrollElement).trigger(at.ACTIVATE, {
                            relatedTarget: t,
                        });
                }),
                (e._clear = function() {
                    [].slice
                        .call(document.querySelectorAll(this._selector))
                        .filter(function(e) {
                            return e.classList.contains(lt);
                        })
                        .forEach(function(e) {
                            return e.classList.remove(lt);
                        });
                }),
                (n._jQueryInterface = function(t) {
                    return this.each(function() {
                        var e = p(this).data(nt);
                        if (
                            (e ||
                                ((e = new n(
                                        this,
                                        "object" == typeof t && t
                                    )),
                                    p(this).data(nt, e)),
                                "string" == typeof t)
                        ) {
                            if (void 0 === e[t])
                                throw new TypeError(
                                    'No method named "' + t + '"'
                                );
                            e[t]();
                        }
                    });
                }),
                s(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "Default",
                        get: function() {
                            return ot;
                        },
                    },
                ]),
                n
            );
        })();
    p(window).on(at.LOAD_DATA_API, function() {
            for (
                var e = [].slice.call(
                        document.querySelectorAll('[data-spy="scroll"]')
                    ),
                    t = e.length; t--;

            ) {
                var n = p(e[t]);
                ht._jQueryInterface.call(n, n.data());
            }
        }),
        (p.fn[tt] = ht._jQueryInterface),
        (p.fn[tt].Constructor = ht),
        (p.fn[tt].noConflict = function() {
            return (p.fn[tt] = rt), ht._jQueryInterface;
        });
    var pt = "bs.tab",
        gt = "." + pt,
        mt = p.fn.tab,
        vt = {
            HIDE: "hide" + gt,
            HIDDEN: "hidden" + gt,
            SHOW: "show" + gt,
            SHOWN: "shown" + gt,
            CLICK_DATA_API: "click" + gt + ".data-api",
        },
        yt = "active",
        _t = ".active",
        bt = "> li > .active",
        wt = (function() {
            function i(e) {
                this._element = e;
            }
            var e = i.prototype;
            return (
                (e.show = function() {
                    var n = this;
                    if (!(
                            (this._element.parentNode &&
                                this._element.parentNode.nodeType ===
                                Node.ELEMENT_NODE &&
                                p(this._element).hasClass(yt)) ||
                            p(this._element).hasClass("disabled")
                        )) {
                        var e,
                            i,
                            t = p(this._element).closest(
                                ".nav, .list-group"
                            )[0],
                            r = g.getSelectorFromElement(this._element);
                        if (t) {
                            var o =
                                "UL" === t.nodeName || "OL" === t.nodeName ?
                                bt :
                                _t;
                            i = (i = p.makeArray(p(t).find(o)))[
                                i.length - 1
                            ];
                        }
                        var s = p.Event(vt.HIDE, {
                                relatedTarget: this._element,
                            }),
                            a = p.Event(vt.SHOW, { relatedTarget: i });
                        if (
                            (i && p(i).trigger(s),
                                p(this._element).trigger(a), !a.isDefaultPrevented() &&
                                !s.isDefaultPrevented())
                        ) {
                            r && (e = document.querySelector(r)),
                                this._activate(this._element, t);
                            var l = function() {
                                var e = p.Event(vt.HIDDEN, {
                                        relatedTarget: n._element,
                                    }),
                                    t = p.Event(vt.SHOWN, {
                                        relatedTarget: i,
                                    });
                                p(i).trigger(e), p(n._element).trigger(t);
                            };
                            e ? this._activate(e, e.parentNode, l) : l();
                        }
                    }
                }),
                (e.dispose = function() {
                    p.removeData(this._element, pt), (this._element = null);
                }),
                (e._activate = function(e, t, n) {
                    var i = this,
                        r = (!t ||
                            ("UL" !== t.nodeName && "OL" !== t.nodeName) ?
                            p(t).children(_t) :
                            p(t).find(bt))[0],
                        o = n && r && p(r).hasClass("fade"),
                        s = function() {
                            return i._transitionComplete(e, r, n);
                        };
                    if (r && o) {
                        var a = g.getTransitionDurationFromElement(r);
                        p(r)
                            .removeClass("show")
                            .one(g.TRANSITION_END, s)
                            .emulateTransitionEnd(a);
                    } else s();
                }),
                (e._transitionComplete = function(e, t, n) {
                    if (t) {
                        p(t).removeClass(yt);
                        var i = p(t.parentNode).find(
                            "> .dropdown-menu .active"
                        )[0];
                        i && p(i).removeClass(yt),
                            "tab" === t.getAttribute("role") &&
                            t.setAttribute("aria-selected", !1);
                    }
                    if (
                        (p(e).addClass(yt),
                            "tab" === e.getAttribute("role") &&
                            e.setAttribute("aria-selected", !0),
                            g.reflow(e),
                            e.classList.contains("fade") &&
                            e.classList.add("show"),
                            e.parentNode &&
                            p(e.parentNode).hasClass("dropdown-menu"))
                    ) {
                        var r = p(e).closest(".dropdown")[0];
                        if (r) {
                            var o = [].slice.call(
                                r.querySelectorAll(".dropdown-toggle")
                            );
                            p(o).addClass(yt);
                        }
                        e.setAttribute("aria-expanded", !0);
                    }
                    n && n();
                }),
                (i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = p(this),
                            t = e.data(pt);
                        if (
                            (t || ((t = new i(this)), e.data(pt, t)),
                                "string" == typeof n)
                        ) {
                            if (void 0 === t[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            t[n]();
                        }
                    });
                }),
                s(i, null, [{
                    key: "VERSION",
                    get: function() {
                        return "4.3.1";
                    },
                }, ]),
                i
            );
        })();
    p(document).on(
            vt.CLICK_DATA_API,
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            function(e) {
                e.preventDefault(), wt._jQueryInterface.call(p(this), "show");
            }
        ),
        (p.fn.tab = wt._jQueryInterface),
        (p.fn.tab.Constructor = wt),
        (p.fn.tab.noConflict = function() {
            return (p.fn.tab = mt), wt._jQueryInterface;
        });
    var Et = "toast",
        Tt = "bs.toast",
        Ct = "." + Tt,
        xt = p.fn[Et],
        St = {
            CLICK_DISMISS: "click.dismiss" + Ct,
            HIDE: "hide" + Ct,
            HIDDEN: "hidden" + Ct,
            SHOW: "show" + Ct,
            SHOWN: "shown" + Ct,
        },
        Dt = "show",
        At = "showing",
        Nt = { animation: "boolean", autohide: "boolean", delay: "number" },
        It = { animation: !0, autohide: !0, delay: 500 },
        kt = (function() {
            function i(e, t) {
                (this._element = e),
                (this._config = this._getConfig(t)),
                (this._timeout = null),
                this._setListeners();
            }
            var e = i.prototype;
            return (
                (e.show = function() {
                    var e = this;
                    p(this._element).trigger(St.SHOW),
                        this._config.animation &&
                        this._element.classList.add("fade");
                    var t = function() {
                        e._element.classList.remove(At),
                            e._element.classList.add(Dt),
                            p(e._element).trigger(St.SHOWN),
                            e._config.autohide && e.hide();
                    };
                    if (
                        (this._element.classList.remove("hide"),
                            this._element.classList.add(At),
                            this._config.animation)
                    ) {
                        var n = g.getTransitionDurationFromElement(
                            this._element
                        );
                        p(this._element)
                            .one(g.TRANSITION_END, t)
                            .emulateTransitionEnd(n);
                    } else t();
                }),
                (e.hide = function(e) {
                    var t = this;
                    this._element.classList.contains(Dt) &&
                        (p(this._element).trigger(St.HIDE),
                            e ?
                            this._close() :
                            (this._timeout = setTimeout(function() {
                                t._close();
                            }, this._config.delay)));
                }),
                (e.dispose = function() {
                    clearTimeout(this._timeout),
                        (this._timeout = null),
                        this._element.classList.contains(Dt) &&
                        this._element.classList.remove(Dt),
                        p(this._element).off(St.CLICK_DISMISS),
                        p.removeData(this._element, Tt),
                        (this._element = null),
                        (this._config = null);
                }),
                (e._getConfig = function(e) {
                    return (
                        (e = l({},
                            It,
                            p(this._element).data(),
                            "object" == typeof e && e ? e : {}
                        )),
                        g.typeCheckConfig(
                            Et,
                            e,
                            this.constructor.DefaultType
                        ),
                        e
                    );
                }),
                (e._setListeners = function() {
                    var e = this;
                    p(this._element).on(
                        St.CLICK_DISMISS,
                        '[data-dismiss="toast"]',
                        function() {
                            return e.hide(!0);
                        }
                    );
                }),
                (e._close = function() {
                    var e = this,
                        t = function() {
                            e._element.classList.add("hide"),
                                p(e._element).trigger(St.HIDDEN);
                        };
                    if (
                        (this._element.classList.remove(Dt),
                            this._config.animation)
                    ) {
                        var n = g.getTransitionDurationFromElement(
                            this._element
                        );
                        p(this._element)
                            .one(g.TRANSITION_END, t)
                            .emulateTransitionEnd(n);
                    } else t();
                }),
                (i._jQueryInterface = function(n) {
                    return this.each(function() {
                        var e = p(this),
                            t = e.data(Tt);
                        if (
                            (t ||
                                ((t = new i(
                                        this,
                                        "object" == typeof n && n
                                    )),
                                    e.data(Tt, t)),
                                "string" == typeof n)
                        ) {
                            if (void 0 === t[n])
                                throw new TypeError(
                                    'No method named "' + n + '"'
                                );
                            t[n](this);
                        }
                    });
                }),
                s(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.3.1";
                        },
                    },
                    {
                        key: "DefaultType",
                        get: function() {
                            return Nt;
                        },
                    },
                    {
                        key: "Default",
                        get: function() {
                            return It;
                        },
                    },
                ]),
                i
            );
        })();
    (p.fn[Et] = kt._jQueryInterface),
    (p.fn[Et].Constructor = kt),
    (p.fn[Et].noConflict = function() {
        return (p.fn[Et] = xt), kt._jQueryInterface;
    }),
    (function() {
        if (void 0 === p)
            throw new TypeError(
                "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
            );
        var e = p.fn.jquery.split(" ")[0].split(".");
        if (
            (e[0] < 2 && e[1] < 9) ||
            (1 === e[0] && 9 === e[1] && e[2] < 1) ||
            4 <= e[0]
        )
            throw new Error(
                "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
            );
    })(),
    (e.Util = g),
    (e.Alert = c),
    (e.Button = E),
    (e.Carousel = P),
    (e.Collapse = Y),
    (e.Dropdown = ce),
    (e.Modal = Te),
    (e.Popover = et),
    (e.Scrollspy = ht),
    (e.Tab = wt),
    (e.Toast = kt),
    (e.Tooltip = Ke),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
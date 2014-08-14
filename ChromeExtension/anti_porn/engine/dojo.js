/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

//>>built
(function (a, l) {
    var g, p = function () { }, m = function (b) { for (var c in b) return 0; return 1 }, n = {}.toString, q = function (b) { return "[object Function]" == n.call(b) }, h = function (b) { return "[object String]" == n.call(b) }, k = function (b) { return "[object Array]" == n.call(b) }, b = function (b, c) { if (b) for (var a = 0; a < b.length;) c(b[a++]) }, f = function (b, c) { for (var a in c) b[a] = c[a]; return b }, d = function (b, c) { return f(Error(b), { src: "dojoLoader", info: c }) }, c = 1, e = function () { return "_" + c++ }, s = function (b, c, a) { return La(b, c, a, 0, s) }, v = this, t = v.document,
    u = t && t.createElement("DiV"), r = s.has = function (b) { return q(w[b]) ? w[b] = w[b](v, t, u) : w[b] }, w = r.cache = l.hasCache; r.add = function (b, c, a, d) { (void 0 === w[b] || d) && (w[b] = c); return a && r(b) }; r.add("host-webworker", "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope); r("host-webworker") && (f(l.hasCache, { "host-browser": 0, dom: 0, "dojo-dom-ready-api": 0, "dojo-sniff": 0, "dojo-inject-api": 1, "host-webworker": 1 }), l.loaderPatch = { injectUrl: function (b, c) { try { importScripts(b), c() } catch (a) { console.error(a) } } });
    for (var C in a.has) r.add(C, a.has[C], 0, 1); var x = 0, y = [], K = 0, G = p, N = p, S; s.isXdUrl = p; s.initSyncLoader = function (b, c, a) { K || (K = b, G = c, N = a); return { sync: "sync", requested: 1, arrived: 2, nonmodule: 3, executing: 4, executed: 5, syncExecStack: y, modules: z, execQ: P, getModule: X, injectModule: pa, setArrived: ca, signal: B, finishExec: ga, execModule: ha, dojoRequirePlugin: K, getLegacyMode: function () { return x }, guardCheckComplete: ia } }; var O = location.protocol, I = location.host; s.isXdUrl = function (b) {
        return /^\./.test(b) ? !1 : /^\/\//.test(b) ? !0 :
        (b = b.match(/^([^\/\:]+\:)\/+([^\/]+)/)) && (b[1] != O || I && b[2] != I)
    }; r.add("dojo-force-activex-xhr", !t.addEventListener && "file:" == window.location.protocol); r.add("native-xhr", "undefined" != typeof XMLHttpRequest); if (r("native-xhr") && !r("dojo-force-activex-xhr")) S = function () { return new XMLHttpRequest }; else { var R = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], A; for (g = 0; 3 > g;) try { if (A = R[g++], new ActiveXObject(A)) break } catch (E) { } S = function () { return new ActiveXObject(A) } } s.getXhr = S; r.add("dojo-gettext-api",
    1); s.getText = function (b, c, a) { var f = S(); f.open("GET", qa(b), !1); f.send(null); if (200 == f.status || !location.host && !f.status) a && a(f.responseText, c); else throw d("xhrFailed", f.status); return f.responseText }; var L = new Function("return eval(arguments[0]);"); s.eval = function (b, c) { return L(b + "\r\n////@ sourceURL\x3d" + c) }; var D = {}, B = s.signal = function (c, a) { var d = D[c]; b(d && d.slice(0), function (b) { b.apply(null, k(a) ? a : [a]) }) }, M = s.on = function (b, c) {
        var a = D[b] || (D[b] = []); a.push(c); return {
            remove: function () {
                for (var b = 0; b <
                a.length; b++) if (a[b] === c) { a.splice(b, 1); break }
            }
        }
    }, da = [], Y = {}, $ = [], J = {}, H = s.map = {}, T = [], z = {}, F = "", V = {}, U = {}, ea = {}, W = 0, ra = function (b) { var c, a, d, f; for (c in U) a = U[c], (d = c.match(/^url\:(.+)/)) ? V["url:" + Ma(d[1], b)] = a : "*now" == c ? f = a : "*noref" != c && (d = ja(c, b, !0), V[d.mid] = V["url:" + d.url] = a); f && f(Ba(b)); U = {} }, Na = function (b) { return b.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function (b) { return "\\" + b }) }, Ca = function (b, c) {
        c.splice(0, c.length); for (var a in b) c.push([a, b[a], RegExp("^" + Na(a) + "(/|$)"), a.length]); c.sort(function (b,
        c) { return c[3] - b[3] }); return c
    }, $a = function (c, a) { b(c, function (b) { a.push([h(b[0]) ? RegExp("^" + Na(b[0]) + "$") : b[0], b[1]]) }) }, Oa = function (b) { var c = b.name; c || (c = b, b = { name: c }); b = f({ main: "main" }, b); b.location = b.location ? b.location : c; b.packageMap && (H[c] = b.packageMap); b.main.indexOf("./") || (b.main = b.main.substring(2)); J[c] = b }, Pa = [], ka = function (c, a, d) {
        for (var e in c) {
            "waitSeconds" == e && (s.waitms = 1E3 * (c[e] || 0)); "cacheBust" == e && (F = c[e] ? h(c[e]) ? c[e] : (new Date).getTime() + "" : ""); if ("baseUrl" == e || "combo" == e) s[e] = c[e];
            if ("async" == e) { var k = c[e]; s.legacyMode = x = h(k) && /sync|legacyAsync/.test(k) ? k : !k ? "sync" : !1; s.async = !x } c[e] !== w && (s.rawConfig[e] = c[e], "has" != e && r.add("config-" + e, c[e], 0, a))
        } s.baseUrl || (s.baseUrl = "./"); /\/$/.test(s.baseUrl) || (s.baseUrl += "/"); for (e in c.has) r.add(e, c.has[e], 0, a); b(c.packages, Oa); for (var n in c.packagePaths) b(c.packagePaths[n], function (b) { var c = n + "/" + b; h(b) && (b = { name: b }); b.location = c; Oa(b) }); Ca(f(H, c.map), T); b(T, function (b) { b[1] = Ca(b[1], []); "*" == b[0] && (T.star = b) }); Ca(f(Y, c.paths), $); $a(c.aliases,
        da); if (a) Pa.push({ config: c.config }); else for (e in c.config) a = X(e, d), a.config = f(a.config || {}, c.config[e]); c.cache && (ra(), U = c.cache, c.cache["*noref"] && ra()); B("config", [c, s.rawConfig])
    }; r("dojo-cdn"); var sa = t.getElementsByTagName("script"); g = 0; for (var Z, ba, ta, la; g < sa.length;) {
        Z = sa[g++]; if ((ta = Z.getAttribute("src")) && (la = ta.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))) ba = la[3] || "", l.baseUrl = l.baseUrl || ba, W = Z; if (ta = Z.getAttribute("data-dojo-config") || Z.getAttribute("djConfig")) ea = s.eval("({ " + ta + " })", "data-dojo-config"),
        W = Z
    } s.rawConfig = {}; ka(l, 1); r("dojo-cdn") && ((J.dojo.location = ba) && (ba += "/"), J.dijit.location = ba + "../dijit/", J.dojox.location = ba + "../dojox/"); ka(a, 1); ka(ea, 1); var ma = function (c) { ia(function () { b(c.deps, pa) }) }, La = function (b, c, a, r, n) {
        var g; if (h(b)) { if ((g = X(b, r, !0)) && g.executed) return g.result; throw d("undefinedModule", b); } k(b) || (ka(b, 0, r), b = c, c = a); if (k(b)) if (b.length) {
            a = "require*" + e(); for (var m, q = [], v = 0; v < b.length;) m = b[v++], q.push(X(m, r)); g = f(ua("", a, 0, ""), {
                injected: 2, deps: q, def: c || p, require: r ? r.require :
                s, gc: 1
            }); z[g.mid] = g; ma(g); var w = na && "sync" != x; ia(function () { ha(g, w) }); g.executed || P.push(g); fa()
        } else c && c(); return n
    }, Ba = function (b) { if (!b) return s; var c = b.require; c || (c = function (a, d, f) { return La(a, d, f, b, c) }, b.require = f(c, s), c.module = b, c.toUrl = function (c) { return Ma(c, b) }, c.toAbsMid = function (c) { return Da(c, b) }, c.syncLoadNls = function (c) { c = ja(c, b); var a = z[c.mid]; if (!a || !a.executed) if (aa = V[c.mid] || V["url:" + c.url]) va(aa), a = z[c.mid]; return a && a.executed && a.result }); return c }, P = [], wa = [], Q = {}, ab = function (b) {
        b.injected =
        1; Q[b.mid] = 1; b.url && (Q[b.url] = b.pack || 1); Qa()
    }, ca = function (b) { b.injected = 2; delete Q[b.mid]; b.url && delete Q[b.url]; m(Q) && (xa(), "xd" == x && (x = "sync")) }, bb = s.idle = function () { return !wa.length && m(Q) && !P.length && !na }, Ea = function (b, c) { if (c) for (var a = 0; a < c.length; a++) if (c[a][2].test(b)) return c[a]; return 0 }, Ra = function (b) { var c = [], a, d; for (b = b.replace(/\\/g, "/").split("/") ; b.length;) a = b.shift(), ".." == a && c.length && ".." != d ? (c.pop(), d = c[c.length - 1]) : "." != a && c.push(d = a); return c.join("/") }, ua = function (b, c, a, d) {
        var f =
        s.isXdUrl(d); return { pid: b, mid: c, pack: a, url: d, executed: 0, def: 0, isXd: f, isAmd: !!(f || J[b] && J[b].isAmd) }
    }, Sa = function (c, a, f, e, s, h, k, n, g) {
        var m, v, w, p; p = /^\./.test(c); if (/(^\/)|(\:)|(\.js$)/.test(c) || p && !a) return ua(0, c, 0, c); c = Ra(p ? a.mid + "/../" + c : c); if (/^\./.test(c)) throw d("irrationalPath", c); a && (w = Ea(a.mid, h)); (w = (w = w || h.star) && Ea(c, w[1])) && (c = w[1] + c.substring(w[3])); a = (la = c.match(/^([^\/]+)(\/(.+))?$/)) ? la[1] : ""; (m = f[a]) ? c = a + "/" + (v = la[3] || m.main) : a = ""; var u = 0; b(n, function (b) {
            var a = c.match(b[0]); a && 0 <
            a.length && (u = q(b[1]) ? c.replace(b[0], b[1]) : b[1])
        }); if (u) return Sa(u, 0, f, e, s, h, k, n, g); if (f = e[c]) return g ? ua(f.pid, f.mid, f.pack, f.url) : e[c]; e = (w = Ea(c, k)) ? w[1] + c.substring(w[3]) : a ? m.location + "/" + v : r("config-tlmSiblingOfDojo") ? "../" + c : c; /(^\/)|(\:)/.test(e) || (e = s + e); return ua(a, c, m, Ra(e + ".js"))
    }, ja = function (b, c, a) { return Sa(b, c, J, z, s.baseUrl, a ? [] : T, a ? [] : $, a ? [] : da) }, Ta = function (b, c, a) { return b.normalize ? b.normalize(c, function (b) { return Da(b, a) }) : Da(c, a) }, Ua = 0, X = function (b, c, a) {
        var d, f; (d = b.match(/^(.+?)\!(.*)$/)) ?
        (f = X(d[1], c, a), "sync" == x && !f.executed && (pa(f), 2 === f.injected && !f.executed && ia(function () { ha(f) }), f.executed ? ya(f) : P.unshift(f)), 5 === f.executed && !f.load && ya(f), f.load ? (d = Ta(f, d[2], c), b = f.mid + "!" + (f.dynamic ? ++Ua + "!" : "") + d) : (d = d[2], b = f.mid + "!" + ++Ua + "!waitingForPlugin"), b = { plugin: f, mid: b, req: Ba(c), prid: d }) : b = ja(b, c); return z[b.mid] || !a && (z[b.mid] = b)
    }, Da = s.toAbsMid = function (b, c) { return ja(b, c).mid }, Ma = s.toUrl = function (b, c) { var a = ja(b + "/x", c), d = a.url; return qa(0 === a.pid ? b : d.substring(0, d.length - 5)) }, Va =
    { injected: 2, executed: 5, def: 3, result: 3 }, Fa = function (b) { return z[b] = f({ mid: b }, Va) }, cb = Fa("require"), db = Fa("exports"), eb = Fa("module"), za = {}, Ga = 0, ya = function (b) { var c = b.result; b.dynamic = c.dynamic; b.normalize = c.normalize; b.load = c.load; return b }, fb = function (c) {
        var a = {}; b(c.loadQ, function (b) { var d = Ta(c, b.prid, b.req.module), e = c.dynamic ? b.mid.replace(/waitingForPlugin$/, d) : c.mid + "!" + d, d = f(f({}, b), { mid: e, prid: d, injected: 0 }); z[e] || Wa(z[e] = d); a[b.mid] = z[e]; ca(b); delete z[b.mid] }); c.loadQ = 0; var d = function (b) {
            for (var c =
            b.deps || [], d = 0; d < c.length; d++) (b = a[c[d].mid]) && (c[d] = b)
        }, e; for (e in z) d(z[e]); b(P, d)
    }, ga = function (c) { s.trace("loader-finish-exec", [c.mid]); c.executed = 5; c.defOrder = Ga++; b(c.provides, function (b) { b() }); c.loadQ && (ya(c), fb(c)); for (g = 0; g < P.length;) P[g] === c ? P.splice(g, 1) : g++; /^require\*/.test(c.mid) && delete z[c.mid] }, gb = [], ha = function (b, c) {
        if (4 === b.executed) return s.trace("loader-circular-dependency", [gb.concat(b.mid).join("-\x3e")]), !b.def || c ? za : b.cjs && b.cjs.exports; if (!b.executed) {
            if (!b.def) return za;
            var a = b.mid, f = b.deps || [], e, h = [], k = 0; for (b.executed = 4; e = f[k++];) { e = e === cb ? Ba(b) : e === db ? b.cjs.exports : e === eb ? b.cjs : ha(e, c); if (e === za) return b.executed = 0, s.trace("loader-exec-module", ["abort", a]), za; h.push(e) } s.trace("loader-run-factory", [b.mid]); var a = b.def, n; y.unshift(b); if (r("config-dojo-loader-catches")) try { n = q(a) ? a.apply(null, h) : a } catch (g) { B("error", b.result = d("factoryThrew", [b, g])) } else n = q(a) ? a.apply(null, h) : a; b.result = void 0 === n && b.cjs ? b.cjs.exports : n; y.shift(b); ga(b)
        } return b.result
    }, na = 0, ia =
    function (b) { try { na++, b() } finally { na-- } bb() && B("idle", []) }, fa = function () { na || ia(function () { G(); for (var b, c, a = 0; a < P.length;) b = Ga, c = P[a], ha(c), b != Ga ? (G(), a = 0) : a++ }) }; void 0 === r("dojo-loader-eval-hint-url") && r.add("dojo-loader-eval-hint-url", 1); var qa = "function" == typeof a.fixupUrl ? a.fixupUrl : function (b) { b += ""; return b + (F ? (/\?/.test(b) ? "\x26" : "?") + F : "") }, Wa = function (b) {
        var c = b.plugin; 5 === c.executed && !c.load && ya(c); var a = function (c) { b.result = c; ca(b); ga(b); fa() }; c.load ? c.load(b.prid, b.req, a) : c.loadQ ? c.loadQ.push(b) :
        (c.loadQ = [b], P.unshift(c), pa(c))
    }, aa = 0, oa = 0, Ha = 0, va = function (b, c) { r("config-stripStrict") && (b = b.replace(/"use strict"/g, "")); Ha = 1; if (r("config-dojo-loader-catches")) try { b === aa ? aa.call(null) : s.eval(b, r("dojo-loader-eval-hint-url") ? c.url : c.mid) } catch (a) { B("error", d("evalModuleThrew", c)) } else b === aa ? aa.call(null) : s.eval(b, r("dojo-loader-eval-hint-url") ? c.url : c.mid); Ha = 0 }, pa = function (c) {
        var a = c.mid, e = c.url; if (!c.executed && !c.injected && !(Q[a] || c.url && (c.pack && Q[c.url] === c.pack || 1 == Q[c.url]))) if (ab(c),
        c.plugin) Wa(c); else {
            var h = function () { Xa(c); if (2 !== c.injected) { if (r("dojo-enforceDefine")) { B("error", d("noDefine", c)); return } ca(c); f(c, Va); s.trace("loader-define-nonmodule", [c.url]) } x ? !y.length && fa() : fa() }; if (aa = V[a] || V["url:" + c.url]) s.trace("loader-inject", ["cache", c.mid, e]), va(aa, c), h(); else {
                if (x) if (c.isXd) "sync" == x && (x = "xd"); else if (!(c.isAmd && "sync" != x)) {
                    var k = function (d) {
                        if ("sync" == x) {
                            y.unshift(c); va(d, c); y.shift(); Xa(c); c.cjs || (ca(c), ga(c)); if (c.finish) {
                                d = a + "*finish"; var f = c.finish; delete c.finish;
                                Ia(d, ["dojo", ("dojo/require!" + f.join(",")).replace(/\./g, "/")], function (c) { b(f, function (b) { c.require(b) }) }); P.unshift(X(d))
                            } h()
                        } else (d = N(c, d)) ? (va(d, c), h()) : (oa = c, s.injectUrl(qa(e), h, c), oa = 0)
                    }; s.trace("loader-inject", ["xhr", c.mid, e, "sync" != x]); if (r("config-dojo-loader-catches")) try { s.getText(e, "sync" != x, k) } catch (n) { B("error", d("xhrInjectFailed", [c, n])) } else s.getText(e, "sync" != x, k); return
                } s.trace("loader-inject", ["script", c.mid, e]); oa = c; s.injectUrl(qa(e), h, c); oa = 0
            }
        }
    }, Ja = function (b, c, a) {
        s.trace("loader-define-module",
        [b.mid, c]); var e = b.mid; if (2 === b.injected) return B("error", d("multipleDefine", b)), b; f(b, { deps: c, def: a, cjs: { id: b.mid, uri: b.url, exports: b.result = {}, setExports: function (c) { b.cjs.exports = c }, config: function () { return b.config } } }); for (var r = 0; c[r]; r++) c[r] = X(c[r], b); x && !Q[e] && (ma(b), P.push(b), fa()); ca(b); !q(a) && !c.length && (b.result = a, ga(b)); return b
    }, Xa = function (c, a) {
        for (var d = [], f, e; wa.length;) e = wa.shift(), a && (e[0] = a.shift()), f = e[0] && X(e[0]) || c, d.push([f, e[1], e[2]]); ra(c); b(d, function (b) {
            ma(Ja.apply(null,
            b))
        })
    }, Aa = 0, xa = p, Qa = p, xa = function () { Aa && clearTimeout(Aa); Aa = 0 }, Qa = function () { xa(); s.waitms && (Aa = v.setTimeout(function () { xa(); B("error", d("timeout", Q)) }, s.waitms)) }; r.add("ie-event-behavior", t.attachEvent && "undefined" === typeof Windows && ("undefined" === typeof opera || "[object Opera]" != opera.toString())); var Ka = function (b, c, a, d) { if (r("ie-event-behavior")) return b.attachEvent(a, d), function () { b.detachEvent(a, d) }; b.addEventListener(c, d, !1); return function () { b.removeEventListener(c, d, !1) } }, hb = Ka(window, "load",
    "onload", function () { s.pageLoaded = 1; "complete" != t.readyState && (t.readyState = "complete"); hb() }), sa = t.getElementsByTagName("script"); for (g = 0; !W;) if (!/^dojo/.test((Z = sa[g++]) && Z.type)) W = Z; s.injectUrl = function (b, c, a) {
        a = a.node = t.createElement("script"); var f = Ka(a, "load", "onreadystatechange", function (b) { b = b || window.event; var a = b.target || b.srcElement; if ("load" === b.type || /complete|loaded/.test(a.readyState)) f(), e(), c && c() }), e = Ka(a, "error", "onerror", function (c) { f(); e(); B("error", d("scriptError", [b, c])) }); a.type =
        "text/javascript"; a.charset = "utf-8"; a.src = b; W.parentNode.insertBefore(a, W); return a
    }; s.log = function () { try { for (var b = 0; b < arguments.length; b++); } catch (c) { } }; s.trace = p; var Ia = function (b, c, a) {
        var f = arguments.length, e = ["require", "exports", "module"], k = [0, b, c]; 1 == f ? k = [0, q(b) ? e : [], b] : 2 == f && h(b) ? k = [b, q(c) ? e : [], c] : 3 == f && (k = [b, c, a]); s.trace("loader-define", k.slice(0, 2)); if ((f = k[0] && X(k[0])) && !Q[f.mid]) ma(Ja(f, k[1], k[2])); else if (!r("ie-event-behavior") || Ha) wa.push(k); else {
            f = f || oa; if (!f) for (b in Q) if ((e = z[b]) &&
            e.node && "interactive" === e.node.readyState) { f = e; break } f ? (ra(f), ma(Ja(f, k[1], k[2]))) : B("error", d("ieDefineFailed", k[0])); fa()
        }
    }; Ia.amd = { vendor: "dojotoolkit.org" }; f(f(s, l.loaderPatch), a.loaderPatch); M("error", function (b) { try { if (console.error(b), b instanceof Error) for (var c in b); } catch (a) { } }); f(s, { uid: e, cache: V, packs: J }); if (v.define) B("error", d("defineAlreadyDefined", 0)); else {
        v.define = Ia; v.require = s; b(Pa, function (b) { ka(b) }); var Ya = ea.deps || a.deps || l.deps, Za = ea.callback || a.callback || l.callback; s.boot =
        Ya || Za ? [Ya || [], Za] : 0
    }
})(this.dojoConfig || this.djConfig || this.require || {}, { async: 0, cdn: "//ajax.googleapis.com/ajax/libs/dojo/1.8.0/", hasCache: { "config-selectorEngine": "acme", "config-tlmSiblingOfDojo": 1, "dojo-built": 1, "dojo-loader": 1, dom: 1, "host-browser": 1 }, packages: [{ location: ".", name: "dojo" }, { location: "../dijit", name: "dijit" }, { location: "../dojox", name: "dojox" }, { location: "../docs", main: "guide", name: "docs" }, { location: "../util/doh", name: "doh" }] });
require({
    cache: {
        "dojo/main": function () { define("./_base/kernel ./has require ./sniff ./_base/lang ./_base/array ./_base/config ./ready ./_base/declare ./_base/connect ./_base/Deferred ./_base/json ./_base/Color require ./_base/browser ./_base/loader".split(" "), function (a, l, g, p, m, n, q, h) { q.isDebug && g(["./_firebug/firebug"]); var k = q.require; k && (k = n.map(m.isArray(k) ? k : [k], function (b) { return b.replace(/\./g, "/") }), a.isAsync ? g(k) : h(1, function () { g(k) })); return a }) }, "dojo/_base/kernel": function () {
            define(["../has",
            "./config", "require", "module"], function (a, l, g, p) {
                var m, n = {}, q = {}, h = { config: l, global: this, dijit: n, dojox: q }, n = { dojo: ["dojo", h], dijit: ["dijit", n], dojox: ["dojox", q] }; p = g.map && g.map[p.id.match(/[^\/]+/)[0]]; for (m in p) n[m] ? n[m][0] = p[m] : n[m] = [p[m], {}]; for (m in n) p = n[m], p[1]._scopeName = p[0], l.noGlobals || (this[p[0]] = p[1]); h.scopeMap = n; h.baseUrl = h.config.baseUrl = g.baseUrl; h.isAsync = g.async; h.locale = l.locale; p = "$Rev$".match(/[0-9a-f]{7,}/); h.version = {
                    major: 1, minor: 10, patch: 0, flag: "-pre", revision: p ? p[0] : NaN,
                    toString: function () { var b = h.version; return b.major + "." + b.minor + "." + b.patch + b.flag + " (" + b.revision + ")" }
                }; Function("d", "d.eval \x3d function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(h); h.exit = function () { }; "undefined" != typeof console || (console = {}); var n = "assert count debug dir dirxml error group groupEnd info profile profileEnd time timeEnd trace warn log".split(" "), k; for (p = 0; k = n[p++];) console[k] || function () {
                    var b = k + ""; console[b] = "log" in console ? function () {
                        var a =
                        Array.prototype.slice.call(arguments); a.unshift(b + ":"); console.log(a.join(" "))
                    } : function () { }; console[b]._fake = !0
                }(); a.add("dojo-debug-messages", !!l.isDebug); h.deprecated = h.experimental = function () { }; a("dojo-debug-messages") && (h.deprecated = function (b, a, d) { b = "DEPRECATED: " + b; a && (b += " " + a); d && (b += " -- will be removed in version: " + d); console.warn(b) }, h.experimental = function (b, a) { var d = "EXPERIMENTAL: " + b + " -- APIs subject to change without notice."; a && (d += " " + a); console.warn(d) }); if (l.modulePaths) {
                    h.deprecated("dojo.modulePaths",
                    "use paths configuration"); a = {}; for (m in l.modulePaths) a[m.replace(/\./g, "/")] = l.modulePaths[m]; g({ paths: a })
                } h.moduleUrl = function (b, a) { h.deprecated("dojo.moduleUrl()", "use require.toUrl", "2.0"); var d = null; b && (d = g.toUrl(b.replace(/\./g, "/") + (a ? "/" + a : "") + "/*.*").replace(/\/\*\.\*/, "") + (a ? "" : "/")); return d }; h._hasResource = {}; return h
            })
        }, "dojo/has": function () {
            define(["require", "module"], function (a, l) {
                var g = a.has || function () { }; g.add("dom-addeventlistener", !!document.addEventListener); g.add("touch", "ontouchstart" in
                document || "onpointerdown" in document && 0 < navigator.maxTouchPoints || window.navigator.msMaxTouchPoints); g.add("touch-events", "ontouchstart" in document); g.add("pointer-events", "onpointerdown" in document); g.add("MSPointer", "msMaxTouchPoints" in navigator); g.add("device-width", screen.availWidth || innerWidth); var p = document.createElement("form"); g.add("dom-attributes-explicit", 0 == p.attributes.length); g.add("dom-attributes-specified-flag", 0 < p.attributes.length && 40 > p.attributes.length); g.clearElement = function (a) {
                    a.innerHTML =
                    ""; return a
                }; g.normalize = function (a, n) { var q = a.match(/[\?:]|[^:\?]*/g), h = 0, k = function (b) { var a = q[h++]; if (":" == a) return 0; if ("?" == q[h++]) { if (!b && g(a)) return k(); k(!0); return k(b) } return a || 0 }; return (a = k()) && n(a) }; g.load = function (a, n, g) { a ? n([a], g) : g() }; return g
            })
        }, "dojo/_base/config": function () { define(["../has", "require"], function (a, l) { var g = {}, p = l.rawConfig, m; for (m in p) g[m] = p[m]; if (!g.locale && "undefined" != typeof navigator && (p = navigator.language || navigator.userLanguage)) g.locale = p.toLowerCase(); return g }) },
        "dojo/sniff": function () {
            define(["./has"], function (a) {
                var l = navigator, g = l.userAgent, l = l.appVersion, p = parseFloat(l); a.add("air", 0 <= g.indexOf("AdobeAIR")); a.add("msapp", parseFloat(g.split("MSAppHost/")[1]) || void 0); a.add("khtml", 0 <= l.indexOf("Konqueror") ? p : void 0); a.add("webkit", parseFloat(g.split("WebKit/")[1]) || void 0); a.add("chrome", parseFloat(g.split("Chrome/")[1]) || void 0); a.add("safari", 0 <= l.indexOf("Safari") && !a("chrome") ? parseFloat(l.split("Version/")[1]) : void 0); a.add("mac", 0 <= l.indexOf("Macintosh"));
                a.add("quirks", "BackCompat" == document.compatMode); if (g.match(/(iPhone|iPod|iPad)/)) { var m = RegExp.$1.replace(/P/, "p"), n = g.match(/OS ([\d_]+)/) ? RegExp.$1 : "1", n = parseFloat(n.replace(/_/, ".").replace(/_/g, "")); a.add(m, n); a.add("ios", n) } a.add("android", parseFloat(g.split("Android ")[1]) || void 0); a.add("bb", (0 <= g.indexOf("BlackBerry") || 0 <= g.indexOf("BB10")) && parseFloat(g.split("Version/")[1]) || void 0); a.add("trident", parseFloat(l.split("Trident/")[1]) || void 0); a.add("svg", "undefined" !== typeof SVGAngle);
                a("webkit") || (0 <= g.indexOf("Opera") && a.add("opera", 9.8 <= p ? parseFloat(g.split("Version/")[1]) || p : p), 0 <= g.indexOf("Gecko") && (!a("khtml") && !a("webkit") && !a("trident")) && a.add("mozilla", p), a("mozilla") && a.add("ff", parseFloat(g.split("Firefox/")[1] || g.split("Minefield/")[1]) || void 0), document.all && !a("opera") && (g = parseFloat(l.split("MSIE ")[1]) || void 0, (l = document.documentMode) && (5 != l && Math.floor(g) != l) && (g = l), a.add("ie", g)), a.add("wii", "undefined" != typeof opera && opera.wiiremote)); return a
            })
        }, "dojo/_base/lang": function () {
            define(["./kernel",
            "../has", "../sniff"], function (a, l) {
                l.add("bug-for-in-skips-shadowed", function () { for (var b in { toString: 1 }) return 0; return 1 }); var g = l("bug-for-in-skips-shadowed") ? "hasOwnProperty valueOf isPrototypeOf propertyIsEnumerable toLocaleString toString constructor".split(" ") : [], p = g.length, m = function (b, f, d) { d || (d = b[0] && a.scopeMap[b[0]] ? a.scopeMap[b.shift()][1] : a.global); try { for (var c = 0; c < b.length; c++) { var e = b[c]; if (!(e in d)) if (f) d[e] = {}; else return; d = d[e] } return d } catch (k) { } }, n = Object.prototype.toString,
                q = function (b, a, d) { return (d || []).concat(Array.prototype.slice.call(b, a || 0)) }, h = /\{([^\}]+)\}/g, k = {
                    _extraNames: g, _mixin: function (b, a, d) { var c, e, k, h = {}; for (c in a) if (e = a[c], !(c in b) || b[c] !== e && (!(c in h) || h[c] !== e)) b[c] = d ? d(e) : e; if (l("bug-for-in-skips-shadowed") && a) for (k = 0; k < p; ++k) if (c = g[k], e = a[c], !(c in b) || b[c] !== e && (!(c in h) || h[c] !== e)) b[c] = d ? d(e) : e; return b }, mixin: function (b, a) { b || (b = {}); for (var d = 1, c = arguments.length; d < c; d++) k._mixin(b, arguments[d]); return b }, setObject: function (b, a, d) {
                        var c = b.split(".");
                        b = c.pop(); return (d = m(c, !0, d)) && b ? d[b] = a : void 0
                    }, getObject: function (b, a, d) { return m(b ? b.split(".") : [], a, d) }, exists: function (b, a) { return void 0 !== k.getObject(b, !1, a) }, isString: function (b) { return "string" == typeof b || b instanceof String }, isArray: function (b) { return b && (b instanceof Array || "array" == typeof b) }, isFunction: function (b) { return "[object Function]" === n.call(b) }, isObject: function (b) { return void 0 !== b && (null === b || "object" == typeof b || k.isArray(b) || k.isFunction(b)) }, isArrayLike: function (b) {
                        return b &&
                        void 0 !== b && !k.isString(b) && !k.isFunction(b) && !(b.tagName && "form" == b.tagName.toLowerCase()) && (k.isArray(b) || isFinite(b.length))
                    }, isAlien: function (b) { return b && !k.isFunction(b) && /\{\s*\[native code\]\s*\}/.test(String(b)) }, extend: function (b, a) { for (var d = 1, c = arguments.length; d < c; d++) k._mixin(b.prototype, arguments[d]); return b }, _hitchArgs: function (b, f) { var d = k._toArray(arguments, 2), c = k.isString(f); return function () { var e = k._toArray(arguments), h = c ? (b || a.global)[f] : f; return h && h.apply(b || this, d.concat(e)) } },
                    hitch: function (b, f) { if (2 < arguments.length) return k._hitchArgs.apply(a, arguments); f || (f = b, b = null); if (k.isString(f)) { b = b || a.global; if (!b[f]) throw ['lang.hitch: scope["', f, '"] is null (scope\x3d"', b, '")'].join(""); return function () { return b[f].apply(b, arguments || []) } } return !b ? f : function () { return f.apply(b, arguments || []) } }, delegate: function () { function b() { } return function (a, d) { b.prototype = a; var c = new b; b.prototype = null; d && k._mixin(c, d); return c } }(), _toArray: l("ie") ? function () {
                        function b(b, a, c) {
                            c = c || [];
                            for (a = a || 0; a < b.length; a++) c.push(b[a]); return c
                        } return function (a) { return (a.item ? b : q).apply(this, arguments) }
                    }() : q, partial: function (b) { return k.hitch.apply(a, [null].concat(k._toArray(arguments))) }, clone: function (b) {
                        if (!b || "object" != typeof b || k.isFunction(b)) return b; if (b.nodeType && "cloneNode" in b) return b.cloneNode(!0); if (b instanceof Date) return new Date(b.getTime()); if (b instanceof RegExp) return RegExp(b); var a, d, c; if (k.isArray(b)) { a = []; d = 0; for (c = b.length; d < c; ++d) d in b && a.push(k.clone(b[d])) } else a =
                        b.constructor ? new b.constructor : {}; return k._mixin(a, b, k.clone)
                    }, trim: String.prototype.trim ? function (b) { return b.trim() } : function (b) { return b.replace(/^\s\s*/, "").replace(/\s\s*$/, "") }, replace: function (b, a, d) { return b.replace(d || h, k.isFunction(a) ? a : function (b, d) { return k.getObject(d, !1, a) }) }
                }; k.mixin(a, k); return k
            })
        }, "dojo/_base/array": function () {
            define(["./kernel", "../has", "./lang"], function (a, l, g) {
                function p(b) { return q[b] = new Function("item", "index", "array", b) } function m(b) {
                    var a = !b; return function (d,
                    c, e) { var h = 0, k = d && d.length || 0, n; k && "string" == typeof d && (d = d.split("")); "string" == typeof c && (c = q[c] || p(c)); if (e) for (; h < k; ++h) { if (n = !c.call(e, d[h], h, d), b ^ n) return !n } else for (; h < k; ++h) if (n = !c(d[h], h, d), b ^ n) return !n; return a }
                } function n(b) { var a = 1, d = 0, c = 0; b || (a = d = c = -1); return function (e, n, g, m) { if (m && 0 < a) return k.lastIndexOf(e, n, g); m = e && e.length || 0; var q = b ? m + c : d; g === h ? g = b ? d : m + c : 0 > g ? (g = m + g, 0 > g && (g = d)) : g = g >= m ? m + c : g; for (m && "string" == typeof e && (e = e.split("")) ; g != q; g += a) if (e[g] == n) return g; return -1 } } var q =
                {}, h, k = {
                    every: m(!1), some: m(!0), indexOf: n(!0), lastIndexOf: n(!1), forEach: function (b, a, d) { var c = 0, e = b && b.length || 0; e && "string" == typeof b && (b = b.split("")); "string" == typeof a && (a = q[a] || p(a)); if (d) for (; c < e; ++c) a.call(d, b[c], c, b); else for (; c < e; ++c) a(b[c], c, b) }, map: function (b, a, d, c) { var e = 0, h = b && b.length || 0; c = new (c || Array)(h); h && "string" == typeof b && (b = b.split("")); "string" == typeof a && (a = q[a] || p(a)); if (d) for (; e < h; ++e) c[e] = a.call(d, b[e], e, b); else for (; e < h; ++e) c[e] = a(b[e], e, b); return c }, filter: function (b, a,
                    d) { var c = 0, e = b && b.length || 0, h = [], k; e && "string" == typeof b && (b = b.split("")); "string" == typeof a && (a = q[a] || p(a)); if (d) for (; c < e; ++c) k = b[c], a.call(d, k, c, b) && h.push(k); else for (; c < e; ++c) k = b[c], a(k, c, b) && h.push(k); return h }, clearCache: function () { q = {} }
                }; g.mixin(a, k); return k
            })
        }, "dojo/ready": function () {
            define(["./_base/kernel", "./has", "require", "./domReady", "./_base/lang"], function (a, l, g, p, m) {
                var n = 0, q = [], h = 0; l = function () { n = 1; a._postLoad = a.config.afterOnLoad = !0; k() }; var k = function () {
                    if (!h) {
                        for (h = 1; n && (!p ||
                        0 == p._Q.length) && (g.idle ? g.idle() : 1) && q.length;) { var b = q.shift(); try { b() } catch (c) { if (c.info = c.message, g.signal) g.signal("error", c); else throw c; } } h = 0
                    }
                }; g.on && g.on("idle", k); p && (p._onQEmpty = k); var b = a.ready = a.addOnLoad = function (b, c, e) { var f = m._toArray(arguments); "number" != typeof b ? (e = c, c = b, b = 1E3) : f.shift(); e = e ? m.hitch.apply(a, f) : function () { c() }; e.priority = b; for (f = 0; f < q.length && b >= q[f].priority; f++); q.splice(f, 0, e); k() }, f = a.config.addOnLoad; if (f) b[m.isArray(f) ? "apply" : "call"](a, f); a.config.parseOnLoad &&
                !a.isAsync && b(99, function () { a.parser || (a.deprecated("Add explicit require(['dojo/parser']);", "", "2.0"), g(["dojo/parser"])) }); p ? p(l) : l(); return b
            })
        }, "dojo/domReady": function () {
            define(["./has"], function (a) {
                function l(b) { k.push(b); h && g() } function g() { if (!b) { for (b = !0; k.length;) try { k.shift()(m) } catch (c) { } b = !1; l._onQEmpty() } } var p = this, m = document, n = { loaded: 1, complete: 1 }, q = "string" != typeof m.readyState, h = !!n[m.readyState], k = [], b; l.load = function (b, c, a) { l(a) }; l._Q = k; l._onQEmpty = function () { }; q && (m.readyState =
                "loading"); if (!h) {
                    var f = [], d = function (b) { b = b || p.event; h || "readystatechange" == b.type && !n[m.readyState] || (q && (m.readyState = "complete"), h = 1, g()) }, c = function (b, c) { b.addEventListener(c, d, !1); k.push(function () { b.removeEventListener(c, d, !1) }) }; if (!a("dom-addeventlistener")) { var c = function (b, c) { c = "on" + c; b.attachEvent(c, d); k.push(function () { b.detachEvent(c, d) }) }, e = m.createElement("div"); try { e.doScroll && null === p.frameElement && f.push(function () { try { return e.doScroll("left"), 1 } catch (b) { } }) } catch (s) { } } c(m, "DOMContentLoaded");
                    c(p, "load"); "onreadystatechange" in m ? c(m, "readystatechange") : q || f.push(function () { return n[m.readyState] }); if (f.length) { var v = function () { if (!h) { for (var b = f.length; b--;) if (f[b]()) { d("poller"); return } setTimeout(v, 30) } }; v() }
                } return l
            })
        }, "dojo/_base/declare": function () {
            define(["./kernel", "../has", "./lang"], function (a, l, g) {
                function p(b, c) { throw Error("declare" + (c ? " " + c : "") + ": " + b); } function m(b, c, a) {
                    var d, e, f, h, k, r, g, n = this._inherited = this._inherited || {}; "string" == typeof b && (d = b, b = c, c = a); a = 0; h = b.callee;
                    (d = d || h.nom) || p("can't deduce a name to call inherited()", this.declaredClass); k = this.constructor._meta; f = k.bases; g = n.p; if (d != K) {
                        if (n.c !== h && (g = 0, r = f[0], k = r._meta, k.hidden[d] !== h)) { (e = k.chains) && "string" == typeof e[d] && p("calling chained method with inherited: " + d, this.declaredClass); do if (k = r._meta, e = r.prototype, k && (e[d] === h && e.hasOwnProperty(d) || k.hidden[d] === h)) break; while (r = f[++g]); g = r ? g : -1 } if (r = f[++g]) if (e = r.prototype, r._meta && e.hasOwnProperty(d)) a = e[d]; else {
                            h = w[d]; do if (e = r.prototype, (a = e[d]) &&
                            (r._meta ? e.hasOwnProperty(d) : a !== h)) break; while (r = f[++g])
                        } a = r && a || w[d]
                    } else { if (n.c !== h && (g = 0, (k = f[0]._meta) && k.ctor !== h)) { e = k.chains; for ((!e || "manual" !== e.constructor) && p("calling chained constructor with inherited", this.declaredClass) ; (r = f[++g]) && !((k = r._meta) && k.ctor === h) ;); g = r ? g : -1 } for (; (r = f[++g]) && !(a = (k = r._meta) ? k.ctor : r) ;); a = r && a } n.c = a; n.p = g; if (a) return !0 === c ? a : a.apply(this, c || b)
                } function n(b, c) { return "string" == typeof b ? this.__inherited(b, c, !0) : this.__inherited(b, !0) } function q(b, c, a) {
                    var d =
                    this.getInherited(b, c); if (d) return d.apply(this, a || c || b)
                } function h(b) { for (var c = this.constructor._meta.bases, a = 0, d = c.length; a < d; ++a) if (c[a] === b) return !0; return this instanceof b } function k(b, c) { for (var a in c) a != K && c.hasOwnProperty(a) && (b[a] = c[a]); if (l("bug-for-in-skips-shadowed")) for (var d = g._extraNames, e = d.length; e;) a = d[--e], a != K && c.hasOwnProperty(a) && (b[a] = c[a]) } function b(b) { u.safeMixin(this.prototype, b); return this } function f(b, c) {
                    b instanceof Array || "function" == typeof b || (c = b, b = void 0); c = c ||
                    {}; b = b || []; return u([this].concat(b), c)
                } function d(b, c) {
                    return function () {
                        var a = arguments, d = a, e = a[0], f, h; h = b.length; var r; if (!(this instanceof a.callee)) return t(a); if (c && (e && e.preamble || this.preamble)) { r = Array(b.length); r[0] = a; for (f = 0; ;) { if (e = a[0]) (e = e.preamble) && (a = e.apply(this, a) || a); e = b[f].prototype; (e = e.hasOwnProperty("preamble") && e.preamble) && (a = e.apply(this, a) || a); if (++f == h) break; r[f] = a } } for (f = h - 1; 0 <= f; --f) e = b[f], (e = (h = e._meta) ? h.ctor : e) && e.apply(this, r ? r[f] : a); (e = this.postscript) && e.apply(this,
                        d)
                    }
                } function c(b, c) { return function () { var a = arguments, d = a, e = a[0]; if (!(this instanceof a.callee)) return t(a); c && (e && (e = e.preamble) && (d = e.apply(this, d) || d), (e = this.preamble) && e.apply(this, d)); b && b.apply(this, a); (e = this.postscript) && e.apply(this, a) } } function e(b) { return function () { var c = arguments, a = 0, d, e; if (!(this instanceof c.callee)) return t(c); for (; d = b[a]; ++a) if (d = (e = d._meta) ? e.ctor : d) { d.apply(this, c); break } (d = this.postscript) && d.apply(this, c) } } function s(b, c, a) {
                    return function () {
                        var d, e, f = 0, h = 1;
                        a && (f = c.length - 1, h = -1); for (; d = c[f]; f += h) e = d._meta, (d = (e ? e.hidden : d.prototype)[b]) && d.apply(this, arguments)
                    }
                } function v(b) { x.prototype = b.prototype; b = new x; x.prototype = null; return b } function t(b) { var c = b.callee, a = v(c); c.apply(a, b); return a } function u(a, q, l) {
                    "string" != typeof a && (l = q, q = a, a = ""); l = l || {}; var t, x, A, E, L, D, B, M = 1, da = q; if ("[object Array]" == C.call(q)) {
                        M = a; A = []; E = [{ cls: 0, refs: [] }]; D = {}; for (var Y = 1, $ = q.length, J = 0, H, T, z, F; J < $; ++J) {
                            (H = q[J]) ? "[object Function]" != C.call(H) && p("mixin #" + J + " is not a callable constructor.",
                            M) : p("mixin #" + J + " is unknown. Did you use dojo.require to pull it in?", M); T = H._meta ? H._meta.bases : [H]; z = 0; for (H = T.length - 1; 0 <= H; --H) F = T[H].prototype, F.hasOwnProperty("declaredClass") || (F.declaredClass = "uniqName_" + y++), F = F.declaredClass, D.hasOwnProperty(F) || (D[F] = { count: 0, refs: [], cls: T[H] }, ++Y), F = D[F], z && z !== F && (F.refs.push(z), ++z.count), z = F; ++z.count; E[0].refs.push(z)
                        } for (; E.length;) {
                            z = E.pop(); A.push(z.cls); for (--Y; x = z.refs, 1 == x.length;) { z = x[0]; if (!z || --z.count) { z = 0; break } A.push(z.cls); --Y } if (z) {
                                J =
                                0; for ($ = x.length; J < $; ++J) z = x[J], --z.count || E.push(z)
                            }
                        } Y && p("can't build consistent linearization", M); H = q[0]; A[0] = H ? H._meta && H === A[A.length - H._meta.bases.length] ? H._meta.bases.length : 1 : 0; D = A; A = D[0]; M = D.length - A; q = D[M]
                    } else D = [0], q ? "[object Function]" == C.call(q) ? (A = q._meta, D = D.concat(A ? A.bases : q)) : p("base class is not a callable constructor.", a) : null !== q && p("unknown base class. Did you use dojo.require to pull it in?", a); if (q) for (x = M - 1; ; --x) {
                        t = v(q); if (!x) break; A = D[x]; (A._meta ? k : r)(t, A.prototype); E =
                        new Function; E.superclass = q; E.prototype = t; q = t.constructor = E
                    } else t = {}; u.safeMixin(t, l); A = l.constructor; A !== w.constructor && (A.nom = K, t.constructor = A); for (x = M - 1; x; --x) (A = D[x]._meta) && A.chains && (B = r(B || {}, A.chains)); t["-chains-"] && (B = r(B || {}, t["-chains-"])); A = !B || !B.hasOwnProperty(K); D[0] = E = B && "manual" === B.constructor ? e(D) : 1 == D.length ? c(l.constructor, A) : d(D, A); E._meta = { bases: D, hidden: l, chains: B, parents: da, ctor: l.constructor }; E.superclass = q && q.prototype; E.extend = b; E.createSubclass = f; E.prototype = t; t.constructor =
                    E; t.getInherited = n; t.isInstanceOf = h; t.inherited = G; t.__inherited = m; a && (t.declaredClass = a, g.setObject(a, E)); if (B) for (L in B) t[L] && ("string" == typeof B[L] && L != K) && (A = t[L] = s(L, D, "after" === B[L]), A.nom = L); return E
                } var r = g.mixin, w = Object.prototype, C = w.toString, x = new Function, y = 0, K = "constructor", G = a.config.isDebug ? q : m; a.safeMixin = u.safeMixin = function (b, c) {
                    var a, d; for (a in c) if (d = c[a], (d !== w[a] || !(a in w)) && a != K) "[object Function]" == C.call(d) && (d.nom = a), b[a] = d; if (l("bug-for-in-skips-shadowed")) for (var e = g._extraNames,
                    f = e.length; f;) if (a = e[--f], d = c[a], (d !== w[a] || !(a in w)) && a != K) "[object Function]" == C.call(d) && (d.nom = a), b[a] = d; return b
                }; return a.declare = u
            })
        }, "dojo/_base/connect": function () {
            define("./kernel ../on ../topic ../aspect ./event ../mouse ./sniff ./lang ../keys".split(" "), function (a, l, g, p, m, n, q, h) {
                function k(b, c, d, f, k) {
                    f = h.hitch(d, f); if (!b || !b.addEventListener && !b.attachEvent) return p.after(b || a.global, c, f, !0); "string" == typeof c && "on" == c.substring(0, 2) && (c = c.substring(2)); b || (b = a.global); if (!k) switch (c) {
                        case "keypress": c =
                        e; break; case "mouseenter": c = n.enter; break; case "mouseleave": c = n.leave
                    } return l(b, c, f, k)
                } function b(b) { b.keyChar = b.charCode ? String.fromCharCode(b.charCode) : ""; b.charOrCode = b.keyChar || b.keyCode } q.add("events-keypress-typed", function () { var b = { charCode: 0 }; try { b = document.createEvent("KeyboardEvent"), (b.initKeyboardEvent || b.initKeyEvent).call(b, "keypress", !0, !0, null, !1, !1, !1, !1, 9, 3) } catch (c) { } return 0 == b.charCode && !q("opera") }); var f = {
                    106: 42, 111: 47, 186: 59, 187: 43, 188: 44, 189: 45, 190: 46, 191: 47, 192: 96, 219: 91,
                    220: 92, 221: 93, 222: 39, 229: 113
                }, d = q("mac") ? "metaKey" : "ctrlKey", c = function (c, a) { var d = h.mixin({}, c, a); b(d); d.preventDefault = function () { c.preventDefault() }; d.stopPropagation = function () { c.stopPropagation() }; return d }, e; e = q("events-keypress-typed") ? function (b, a) {
                    var d = l(b, "keydown", function (b) {
                        var d = b.keyCode, e = 13 != d && 32 != d && (27 != d || !q("ie")) && (48 > d || 90 < d) && (96 > d || 111 < d) && (186 > d || 192 < d) && (219 > d || 222 < d) && 229 != d; if (e || b.ctrlKey) {
                            e = e ? 0 : d; if (b.ctrlKey) {
                                if (3 == d || 13 == d) return a.call(b.currentTarget, b); e = 95 < e &&
                                106 > e ? e - 48 : !b.shiftKey && 65 <= e && 90 >= e ? e + 32 : f[e] || e
                            } d = c(b, { type: "keypress", faux: !0, charCode: e }); a.call(b.currentTarget, d); if (q("ie")) try { b.keyCode = d.keyCode } catch (h) { }
                        }
                    }), e = l(b, "keypress", function (b) { var d = b.charCode; b = c(b, { charCode: 32 <= d ? d : 0, faux: !0 }); return a.call(this, b) }); return { remove: function () { d.remove(); e.remove() } }
                } : q("opera") ? function (b, a) {
                    return l(b, "keypress", function (b) {
                        var d = b.which; 3 == d && (d = 99); d = 32 > d && !b.shiftKey ? 0 : d; b.ctrlKey && (!b.shiftKey && 65 <= d && 90 >= d) && (d += 32); return a.call(this,
                        c(b, { charCode: d }))
                    })
                } : function (c, a) { return l(c, "keypress", function (c) { b(c); return a.call(this, c) }) }; var s = {
                    _keypress: e, connect: function (b, c, a, d, e) { var f = arguments, h = [], g = 0; h.push("string" == typeof f[0] ? null : f[g++], f[g++]); var n = f[g + 1]; h.push("string" == typeof n || "function" == typeof n ? f[g++] : null, f[g++]); for (n = f.length; g < n; g++) h.push(f[g]); return k.apply(this, h) }, disconnect: function (b) { b && b.remove() }, subscribe: function (b, c, a) { return g.subscribe(b, h.hitch(c, a)) }, publish: function (b, c) {
                        return g.publish.apply(g,
                        [b].concat(c))
                    }, connectPublisher: function (b, c, a) { var d = function () { s.publish(b, arguments) }; return a ? s.connect(c, a, d) : s.connect(c, d) }, isCopyKey: function (b) { return b[d] }
                }; s.unsubscribe = s.disconnect; h.mixin(a, s); return s
            })
        }, "dojo/on": function () {
            define(["./has!dom-addeventlistener?:./aspect", "./_base/kernel", "./sniff"], function (a, l, g) {
                function p(b, c, a, f, r) {
                    if (f = c.match(/(.*):(.*)/)) return c = f[2], f = f[1], h.selector(f, c).call(r, b, a); g("touch") && (k.test(c) && (a = y(a)), !g("event-orientationchange") && "orientationchange" ==
                    c && (c = "resize", b = window, a = y(a))); e && (a = e(a)); if (b.addEventListener) { var n = c in d, q = n ? d[c] : c; b.addEventListener(q, a, n); return { remove: function () { b.removeEventListener(q, a, n) } } } if (u && b.attachEvent) return u(b, "on" + c, a); throw Error("Target must be an event emitter");
                } function m() { this.cancelable = !1; this.defaultPrevented = !0 } function n() { this.bubbles = !1 } var q = window.ScriptEngineMajorVersion; g.add("jscript", q && q() + ScriptEngineMinorVersion() / 10); g.add("event-orientationchange", g("touch") && !g("android")); g.add("event-stopimmediatepropagation",
                window.Event && !!window.Event.prototype && !!window.Event.prototype.stopImmediatePropagation); g.add("event-focusin", function (b, c, a) { return "onfocusin" in a }); var h = function (b, c, a, d) { return "function" == typeof b.on && "function" != typeof c && !b.nodeType ? b.on(c, a) : h.parse(b, c, a, p, d, this) }; h.pausable = function (b, c, a, d) { var e; b = h(b, c, function () { if (!e) return a.apply(this, arguments) }, d); b.pause = function () { e = !0 }; b.resume = function () { e = !1 }; return b }; h.once = function (b, c, a, d) {
                    var e = h(b, c, function () {
                        e.remove(); return a.apply(this,
                        arguments)
                    }); return e
                }; h.parse = function (b, c, a, d, e, f) { if (c.call) return c.call(f, b, a); if (c instanceof Array) k = c; else if (-1 < c.indexOf(",")) var k = c.split(/\s*,\s*/); if (k) { var r = []; c = 0; for (var g; g = k[c++];) r.push(h.parse(b, g, a, d, e, f)); r.remove = function () { for (var b = 0; b < r.length; b++) r[b].remove() }; return r } return d(b, c, a, e, f) }; var k = /^touch/; h.matches = function (b, c, a, d, e) {
                    e = e && e.matches ? e : l.query; d = !1 !== d; 1 != b.nodeType && (b = b.parentNode); for (; !e.matches(b, c, a) ;) if (b == a || !1 === d || !(b = b.parentNode) || 1 != b.nodeType) return !1;
                    return b
                }; h.selector = function (b, c, a) { return function (d, e) { function f(c) { return h.matches(c, b, d, a, k) } var k = "function" == typeof b ? { matches: b } : this, r = c.bubble; return r ? h(d, r(f), e) : h(d, c, function (b) { var c = f(b.target); return c && e.call(c, b) }) } }; var b = [].slice, f = h.emit = function (c, a, d) {
                    var e = b.call(arguments, 2), f = "on" + a; if ("parentNode" in c) { var h = e[0] = {}, k; for (k in d) h[k] = d[k]; h.preventDefault = m; h.stopPropagation = n; h.target = c; h.type = a; d = h } do c[f] && c[f].apply(c, e); while (d && d.bubbles && (c = c.parentNode)); return d &&
                    d.cancelable && d
                }, d = g("event-focusin") ? {} : { focusin: "focus", focusout: "blur" }; if (!g("event-stopimmediatepropagation")) var c = function () { this.modified = this.immediatelyStopped = !0 }, e = function (b) { return function (a) { if (!a.immediatelyStopped) return a.stopImmediatePropagation = c, b.apply(this, arguments) } }; if (g("dom-addeventlistener")) h.emit = function (b, c, a) {
                    if (b.dispatchEvent && document.createEvent) {
                        var d = (b.ownerDocument || document).createEvent("HTMLEvents"); d.initEvent(c, !!a.bubbles, !!a.cancelable); for (var e in a) e in
                        d || (d[e] = a[e]); return b.dispatchEvent(d) && d
                    } return f.apply(h, arguments)
                }; else {
                    h._fixEvent = function (b, c) {
                        b || (b = (c && (c.ownerDocument || c.document || c).parentWindow || window).event); if (!b) return b; try { s && (b.type == s.type && b.srcElement == s.target) && (b = s) } catch (a) { } if (!b.target) switch (b.target = b.srcElement, b.currentTarget = c || b.srcElement, "mouseover" == b.type && (b.relatedTarget = b.fromElement), "mouseout" == b.type && (b.relatedTarget = b.toElement), b.stopPropagation || (b.stopPropagation = r, b.preventDefault = w), b.type) {
                            case "keypress": var d =
                            "charCode" in b ? b.charCode : b.keyCode; 10 == d ? (d = 0, b.keyCode = 13) : 13 == d || 27 == d ? d = 0 : 3 == d && (d = 99); b.charCode = d; d = b; d.keyChar = d.charCode ? String.fromCharCode(d.charCode) : ""; d.charOrCode = d.keyChar || d.keyCode
                        } return b
                    }; var s, v = function (b) { this.handle = b }; v.prototype.remove = function () { delete _dojoIEListeners_[this.handle] }; var t = function (b) { return function (c) { c = h._fixEvent(c, this); var a = b.call(this, c); c.modified && (s || setTimeout(function () { s = null }), s = c); return a } }, u = function (b, c, d) {
                        d = t(d); if (((b.ownerDocument ?
                        b.ownerDocument.parentWindow : b.parentWindow || b.window || window) != top || 5.8 > g("jscript")) && !g("config-_allow_leaks")) {
                            "undefined" == typeof _dojoIEListeners_ && (_dojoIEListeners_ = []); var e = b[c]; if (!e || !e.listeners) {
                                var f = e, e = Function("event", "var callee \x3d arguments.callee; for(var i \x3d 0; i\x3ccallee.listeners.length; i++){var listener \x3d _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}"); e.listeners = []; b[c] = e; e.global = this; f && e.listeners.push(_dojoIEListeners_.push(f) -
                                1)
                            } e.listeners.push(b = e.global._dojoIEListeners_.push(d) - 1); return new v(b)
                        } return a.after(b, c, d, !0)
                    }, r = function () { this.cancelBubble = !0 }, w = h._preventDefault = function () { this.bubbledKeyCode = this.keyCode; if (this.ctrlKey) try { this.keyCode = 0 } catch (b) { } this.defaultPrevented = !0; this.returnValue = !1; this.modified = !0 }
                } if (g("touch")) var C = function () { }, x = window.orientation, y = function (b) {
                    return function (c) {
                        var a = c.corrected; if (!a) {
                            var d = c.type; try { delete c.type } catch (e) { } if (c.type) {
                                if (g("mozilla")) {
                                    var a = {}, f;
                                    for (f in c) a[f] = c[f]
                                } else C.prototype = c, a = new C; a.preventDefault = function () { c.preventDefault() }; a.stopPropagation = function () { c.stopPropagation() }
                            } else a = c, a.type = d; c.corrected = a; if ("resize" == d) { if (x == window.orientation) return null; x = window.orientation; a.type = "orientationchange"; return b.call(this, a) } "rotation" in a || (a.rotation = 0, a.scale = 1); var d = a.changedTouches[0], h; for (h in d) delete a[h], a[h] = d[h]
                        } return b.call(this, a)
                    }
                }; return h
            })
        }, "dojo/topic": function () {
            define(["./Evented"], function (a) {
                var l =
                new a; return { publish: function (a, p) { return l.emit.apply(l, arguments) }, subscribe: function (a, p) { return l.on.apply(l, arguments) } }
            })
        }, "dojo/Evented": function () { define(["./aspect", "./on"], function (a, l) { function g() { } var p = a.after; g.prototype = { on: function (a, g) { return l.parse(this, a, g, function (a, h) { return p(a, "on" + h, g, !0) }) }, emit: function (a, g) { var q = [this]; q.push.apply(q, arguments); return l.emit.apply(l, q) } }; return g }) }, "dojo/aspect": function () {
            define([], function () {
                function a(a, k, b, f) {
                    var d = a[k], c = "around" ==
                    k, e; if (c) { var g = b(function () { return d.advice(this, arguments) }); e = { remove: function () { g && (g = a = b = null) }, advice: function (b, c) { return g ? g.apply(b, c) : d.advice(b, c) } } } else e = { remove: function () { if (e.advice) { var c = e.previous, d = e.next; !d && !c ? delete a[k] : (c ? c.next = d : a[k] = d, d && (d.previous = c)); a = b = e.advice = null } }, id: p++, advice: b, receiveArguments: f }; if (d && !c) if ("after" == k) { for (; d.next && (d = d.next) ;); d.next = e; e.previous = d } else "before" == k && (a[k] = e, e.next = d, d.previous = e); else a[k] = e; return e
                } function l(h) {
                    return function (k,
                    b, f, d) { var c = k[b], e; if (!c || c.target != k) k[b] = e = function () { for (var b = p, c = arguments, a = e.before; a;) c = a.advice.apply(this, c) || c, a = a.next; if (e.around) var d = e.around.advice(this, c); for (a = e.after; a && a.id < b;) { if (a.receiveArguments) var f = a.advice.apply(this, c), d = f === g ? d : f; else d = a.advice.call(this, d, c); a = a.next } return d }, c && (e.around = { advice: function (b, a) { return c.apply(b, a) } }), e.target = k; k = a(e || c, h, f, d); f = null; return k }
                } var g, p = 0, m = l("after"), n = l("before"), q = l("around"); return { before: n, around: q, after: m }
            })
        },
        "dojo/_base/event": function () { define(["./kernel", "../on", "../has", "../dom-geometry"], function (a, l, g, p) { if (l._fixEvent) { var m = l._fixEvent; l._fixEvent = function (a, h) { (a = m(a, h)) && p.normalizeEvent(a); return a } } var n = { fix: function (a, h) { return l._fixEvent ? l._fixEvent(a, h) : a }, stop: function (a) { g("dom-addeventlistener") || a && a.preventDefault ? (a.preventDefault(), a.stopPropagation()) : (a = a || window.event, a.cancelBubble = !0, l._preventDefault.call(a)) } }; a.fixEvent = n.fix; a.stopEvent = n.stop; return n }) }, "dojo/dom-geometry": function () {
            define(["./sniff",
            "./_base/window", "./dom", "./dom-style"], function (a, l, g, p) {
                function m(b, a, d, c, e, h) { h = h || "px"; b = b.style; isNaN(a) || (b.left = a + h); isNaN(d) || (b.top = d + h); 0 <= c && (b.width = c + h); 0 <= e && (b.height = e + h) } function n(b) { return "button" == b.tagName.toLowerCase() || "input" == b.tagName.toLowerCase() && "button" == (b.getAttribute("type") || "").toLowerCase() } function q(b) { return "border-box" == h.boxModel || "table" == b.tagName.toLowerCase() || n(b) } var h = { boxModel: "content-box" }; a("ie") && (h.boxModel = "BackCompat" == document.compatMode ?
                "border-box" : "content-box"); h.getPadExtents = function (b, a) { b = g.byId(b); var d = a || p.getComputedStyle(b), c = p.toPixelValue, e = c(b, d.paddingLeft), h = c(b, d.paddingTop), k = c(b, d.paddingRight), d = c(b, d.paddingBottom); return { l: e, t: h, r: k, b: d, w: e + k, h: h + d } }; h.getBorderExtents = function (b, a) {
                    b = g.byId(b); var d = p.toPixelValue, c = a || p.getComputedStyle(b), e = "none" != c.borderLeftStyle ? d(b, c.borderLeftWidth) : 0, h = "none" != c.borderTopStyle ? d(b, c.borderTopWidth) : 0, k = "none" != c.borderRightStyle ? d(b, c.borderRightWidth) : 0, d = "none" !=
                    c.borderBottomStyle ? d(b, c.borderBottomWidth) : 0; return { l: e, t: h, r: k, b: d, w: e + k, h: h + d }
                }; h.getPadBorderExtents = function (b, a) { b = g.byId(b); var d = a || p.getComputedStyle(b), c = h.getPadExtents(b, d), d = h.getBorderExtents(b, d); return { l: c.l + d.l, t: c.t + d.t, r: c.r + d.r, b: c.b + d.b, w: c.w + d.w, h: c.h + d.h } }; h.getMarginExtents = function (b, a) { b = g.byId(b); var d = a || p.getComputedStyle(b), c = p.toPixelValue, e = c(b, d.marginLeft), h = c(b, d.marginTop), k = c(b, d.marginRight), d = c(b, d.marginBottom); return { l: e, t: h, r: k, b: d, w: e + k, h: h + d } }; h.getMarginBox =
                function (b, f) {
                    b = g.byId(b); var d = f || p.getComputedStyle(b), c = h.getMarginExtents(b, d), e = b.offsetLeft - c.l, k = b.offsetTop - c.t, n = b.parentNode, m = p.toPixelValue; if (a("mozilla")) { var q = parseFloat(d.left), d = parseFloat(d.top); !isNaN(q) && !isNaN(d) ? (e = q, k = d) : n && n.style && (n = p.getComputedStyle(n), "visible" != n.overflow && (e += "none" != n.borderLeftStyle ? m(b, n.borderLeftWidth) : 0, k += "none" != n.borderTopStyle ? m(b, n.borderTopWidth) : 0)) } else if ((a("opera") || 8 == a("ie") && !a("quirks")) && n) n = p.getComputedStyle(n), e -= "none" != n.borderLeftStyle ?
                    m(b, n.borderLeftWidth) : 0, k -= "none" != n.borderTopStyle ? m(b, n.borderTopWidth) : 0; return { l: e, t: k, w: b.offsetWidth + c.w, h: b.offsetHeight + c.h }
                }; h.getContentBox = function (b, f) { b = g.byId(b); var d = f || p.getComputedStyle(b), c = b.clientWidth, e = h.getPadExtents(b, d), k = h.getBorderExtents(b, d); c ? (d = b.clientHeight, k.w = k.h = 0) : (c = b.offsetWidth, d = b.offsetHeight); a("opera") && (e.l += k.l, e.t += k.t); return { l: e.l, t: e.t, w: c - e.w - k.w, h: d - e.h - k.h } }; h.setContentSize = function (b, a, d) {
                    b = g.byId(b); var c = a.w; a = a.h; q(b) && (d = h.getPadBorderExtents(b,
                    d), 0 <= c && (c += d.w), 0 <= a && (a += d.h)); m(b, NaN, NaN, c, a)
                }; var k = { l: 0, t: 0, w: 0, h: 0 }; h.setMarginBox = function (b, f, d) { b = g.byId(b); var c = d || p.getComputedStyle(b); d = f.w; var e = f.h, s = q(b) ? k : h.getPadBorderExtents(b, c), c = h.getMarginExtents(b, c); if (a("webkit") && n(b)) { var l = b.style; 0 <= d && !l.width && (l.width = "4px"); 0 <= e && !l.height && (l.height = "4px") } 0 <= d && (d = Math.max(d - s.w - c.w, 0)); 0 <= e && (e = Math.max(e - s.h - c.h, 0)); m(b, f.l, f.t, d, e) }; h.isBodyLtr = function (b) { b = b || l.doc; return "ltr" == (l.body(b).dir || b.documentElement.dir || "ltr").toLowerCase() };
                h.docScroll = function (b) { b = b || l.doc; var f = l.doc.parentWindow || l.doc.defaultView; return "pageXOffset" in f ? { x: f.pageXOffset, y: f.pageYOffset } : (f = a("quirks") ? l.body(b) : b.documentElement) && { x: h.fixIeBiDiScrollLeft(f.scrollLeft || 0, b), y: f.scrollTop || 0 } }; a("ie") && (h.getIeDocumentElementOffset = function (b) { b = b || l.doc; b = b.documentElement; if (8 > a("ie")) { var f = b.getBoundingClientRect(), d = f.left, f = f.top; 7 > a("ie") && (d += b.clientLeft, f += b.clientTop); return { x: 0 > d ? 0 : d, y: 0 > f ? 0 : f } } return { x: 0, y: 0 } }); h.fixIeBiDiScrollLeft =
                function (b, f) { f = f || l.doc; var d = a("ie"); if (d && !h.isBodyLtr(f)) { var c = a("quirks"), e = c ? l.body(f) : f.documentElement, k = l.global; 6 == d && (!c && k.frameElement && e.scrollHeight > e.clientHeight) && (b += e.clientLeft); return 8 > d || c ? b + e.clientWidth - e.scrollWidth : -b } return b }; h.position = function (b, f) {
                    b = g.byId(b); var d = l.body(b.ownerDocument), c = b.getBoundingClientRect(), c = { x: c.left, y: c.top, w: c.right - c.left, h: c.bottom - c.top }; if (9 > a("ie")) {
                        var e = h.getIeDocumentElementOffset(b.ownerDocument); c.x -= e.x + (a("quirks") ? d.clientLeft +
                        d.offsetLeft : 0); c.y -= e.y + (a("quirks") ? d.clientTop + d.offsetTop : 0)
                    } f && (d = h.docScroll(b.ownerDocument), c.x += d.x, c.y += d.y); return c
                }; h.getMarginSize = function (b, a) { b = g.byId(b); var d = h.getMarginExtents(b, a || p.getComputedStyle(b)), c = b.getBoundingClientRect(); return { w: c.right - c.left + d.w, h: c.bottom - c.top + d.h } }; h.normalizeEvent = function (b) {
                    "layerX" in b || (b.layerX = b.offsetX, b.layerY = b.offsetY); if (!a("dom-addeventlistener")) {
                        var f = b.target, f = f && f.ownerDocument || document, d = a("quirks") ? f.body : f.documentElement,
                        c = h.getIeDocumentElementOffset(f); b.pageX = b.clientX + h.fixIeBiDiScrollLeft(d.scrollLeft || 0, f) - c.x; b.pageY = b.clientY + (d.scrollTop || 0) - c.y
                    }
                }; return h
            })
        }, "dojo/_base/window": function () {
            define(["./kernel", "./lang", "../sniff"], function (a, l, g) {
                var p = {
                    global: a.global, doc: this.document || null, body: function (g) { g = g || a.doc; return g.body || g.getElementsByTagName("body")[0] }, setContext: function (g, n) { a.global = p.global = g; a.doc = p.doc = n }, withGlobal: function (g, n, q, h) {
                        var k = a.global; try {
                            return a.global = p.global = g, p.withDoc.call(null,
                            g.document, n, q, h)
                        } finally { a.global = p.global = k }
                    }, withDoc: function (m, n, q, h) {
                        var k = p.doc, b = g("quirks"), f = g("ie"), d, c, e; try { a.doc = p.doc = m; a.isQuirks = g.add("quirks", "BackCompat" == a.doc.compatMode, !0, !0); if (g("ie") && (e = m.parentWindow) && e.navigator) d = parseFloat(e.navigator.appVersion.split("MSIE ")[1]) || void 0, (c = m.documentMode) && (5 != c && Math.floor(d) != c) && (d = c), a.isIE = g.add("ie", d, !0, !0); q && "string" == typeof n && (n = q[n]); return n.apply(q, h || []) } finally {
                            a.doc = p.doc = k, a.isQuirks = g.add("quirks", b, !0, !0), a.isIE =
                            g.add("ie", f, !0, !0)
                        }
                    }
                }; l.mixin(a, p); return p
            })
        }, "dojo/dom": function () {
            define(["./sniff", "./_base/window"], function (a, l) {
                if (7 >= a("ie")) try { document.execCommand("BackgroundImageCache", !1, !0) } catch (g) { } var p = {}; a("ie") ? p.byId = function (a, g) { if ("string" != typeof a) return a; var h = g || l.doc, k = a && h.getElementById(a); if (k && (k.attributes.id.value == a || k.id == a)) return k; h = h.all[a]; if (!h || h.nodeName) h = [h]; for (var b = 0; k = h[b++];) if (k.attributes && k.attributes.id && k.attributes.id.value == a || k.id == a) return k } : p.byId =
                function (a, g) { return ("string" == typeof a ? (g || l.doc).getElementById(a) : a) || null }; p.isDescendant = function (a, g) { try { a = p.byId(a); for (g = p.byId(g) ; a;) { if (a == g) return !0; a = a.parentNode } } catch (h) { } return !1 }; a.add("css-user-select", function (a, g, h) { if (!h) return !1; a = h.style; g = ["Khtml", "O", "Moz", "Webkit"]; h = g.length; var k = "userSelect"; do if ("undefined" !== typeof a[k]) return k; while (h-- && (k = g[h] + "UserSelect")); return !1 }); var m = a("css-user-select"); p.setSelectable = m ? function (a, g) { p.byId(a).style[m] = g ? "" : "none" } : function (a,
                g) { a = p.byId(a); var h = a.getElementsByTagName("*"), k = h.length; if (g) for (a.removeAttribute("unselectable") ; k--;) h[k].removeAttribute("unselectable"); else for (a.setAttribute("unselectable", "on") ; k--;) h[k].setAttribute("unselectable", "on") }; return p
            })
        }, "dojo/dom-style": function () {
            define(["./sniff", "./dom"], function (a, l) {
                function g(c, d, h) {
                    d = d.toLowerCase(); if (a("ie") || a("trident")) {
                        if ("auto" == h) { if ("height" == d) return c.offsetHeight; if ("width" == d) return c.offsetWidth } if ("fontweight" == d) switch (h) {
                            case 700: return "bold";
                            default: return "normal"
                        }
                    } d in b || (b[d] = f.test(d)); return b[d] ? n(c, h) : h
                } var p, m = {}; p = a("webkit") ? function (b) { var a; if (1 == b.nodeType) { var d = b.ownerDocument.defaultView; a = d.getComputedStyle(b, null); !a && b.style && (b.style.display = "", a = d.getComputedStyle(b, null)) } return a || {} } : a("ie") && (9 > a("ie") || a("quirks")) ? function (b) { return 1 == b.nodeType && b.currentStyle ? b.currentStyle : {} } : function (b) { return 1 == b.nodeType ? b.ownerDocument.defaultView.getComputedStyle(b, null) : {} }; m.getComputedStyle = p; var n; n = a("ie") ? function (b,
                a) { if (!a) return 0; if ("medium" == a) return 4; if (a.slice && "px" == a.slice(-2)) return parseFloat(a); var d = b.style, f = b.runtimeStyle, h = d.left, k = f.left; f.left = b.currentStyle.left; try { d.left = a, a = d.pixelLeft } catch (g) { a = 0 } d.left = h; f.left = k; return a } : function (b, a) { return parseFloat(a) || 0 }; m.toPixelValue = n; var q = function (b, a) { try { return b.filters.item("DXImageTransform.Microsoft.Alpha") } catch (d) { return a ? {} : null } }, h = 9 > a("ie") || 10 > a("ie") && a("quirks") ? function (b) { try { return q(b).Opacity / 100 } catch (a) { return 1 } } : function (b) { return p(b).opacity },
                k = 9 > a("ie") || 10 > a("ie") && a("quirks") ? function (b, a) { "" === a && (a = 1); var d = 100 * a; 1 === a ? (b.style.zoom = "", q(b) && (b.style.filter = b.style.filter.replace(/\s*progid:DXImageTransform.Microsoft.Alpha\([^\)]+?\)/i, ""))) : (b.style.zoom = 1, q(b) ? q(b, 1).Opacity = d : b.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d" + d + ")", q(b, 1).Enabled = !0); if ("tr" == b.tagName.toLowerCase()) for (d = b.firstChild; d; d = d.nextSibling) "td" == d.tagName.toLowerCase() && k(d, a); return a } : function (b, a) { return b.style.opacity = a }, b =
                { left: !0, top: !0 }, f = /margin|padding|width|height|max|min|offset/, d = { cssFloat: 1, styleFloat: 1, "float": 1 }; m.get = function (b, a) { var f = l.byId(b), k = arguments.length; if (2 == k && "opacity" == a) return h(f); a = d[a] ? "cssFloat" in f.style ? "cssFloat" : "styleFloat" : a; var n = m.getComputedStyle(f); return 1 == k ? n : g(f, a, n[a] || f.style[a]) }; m.set = function (b, a, f) {
                    var h = l.byId(b), g = arguments.length, n = "opacity" == a; a = d[a] ? "cssFloat" in h.style ? "cssFloat" : "styleFloat" : a; if (3 == g) return n ? k(h, f) : h.style[a] = f; for (var r in a) m.set(b, r, a[r]);
                    return m.getComputedStyle(h)
                }; return m
            })
        }, "dojo/mouse": function () {
            define(["./_base/kernel", "./on", "./has", "./dom", "./_base/window"], function (a, l, g, p, m) {
                function n(a, h) { var k = function (b, f) { return l(b, a, function (a) { if (h) return h(a, f); if (!p.isDescendant(a.relatedTarget, b)) return f.call(this, a) }) }; k.bubble = function (b) { return n(a, function (a, d) { var c = b(a.target), e = a.relatedTarget; if (c && c != (e && 1 == e.nodeType && b(e))) return d.call(c, a) }) }; return k } g.add("dom-quirks", m.doc && "BackCompat" == m.doc.compatMode); g.add("events-mouseenter",
                m.doc && "onmouseenter" in m.doc.createElement("div")); g.add("events-mousewheel", m.doc && "onmousewheel" in m.doc); m = g("dom-quirks") && g("ie") || !g("dom-addeventlistener") ? { LEFT: 1, MIDDLE: 4, RIGHT: 2, isButton: function (a, h) { return a.button & h }, isLeft: function (a) { return a.button & 1 }, isMiddle: function (a) { return a.button & 4 }, isRight: function (a) { return a.button & 2 } } : {
                    LEFT: 0, MIDDLE: 1, RIGHT: 2, isButton: function (a, h) { return a.button == h }, isLeft: function (a) { return 0 == a.button }, isMiddle: function (a) { return 1 == a.button }, isRight: function (a) {
                        return 2 ==
                        a.button
                    }
                }; a.mouseButtons = m; a = g("events-mousewheel") ? "mousewheel" : function (a, h) { return l(a, "DOMMouseScroll", function (a) { a.wheelDelta = -a.detail; h.call(this, a) }) }; return { _eventHandler: n, enter: n("mouseover"), leave: n("mouseout"), wheel: a, isLeft: m.isLeft, isMiddle: m.isMiddle, isRight: m.isRight }
            })
        }, "dojo/_base/sniff": function () {
            define(["./kernel", "./lang", "../sniff"], function (a, l, g) {
                a._name = "browser"; l.mixin(a, {
                    isBrowser: !0, isFF: g("ff"), isIE: g("ie"), isKhtml: g("khtml"), isWebKit: g("webkit"), isMozilla: g("mozilla"),
                    isMoz: g("mozilla"), isOpera: g("opera"), isSafari: g("safari"), isChrome: g("chrome"), isMac: g("mac"), isIos: g("ios"), isAndroid: g("android"), isWii: g("wii"), isQuirks: g("quirks"), isAir: g("air")
                }); return g
            })
        }, "dojo/keys": function () {
            define(["./_base/kernel", "./sniff"], function (a, l) {
                return a.keys = {
                    BACKSPACE: 8, TAB: 9, CLEAR: 12, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, META: l("webkit") ? 91 : 224, PAUSE: 19, CAPS_LOCK: 20, ESCAPE: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT_ARROW: 37, UP_ARROW: 38, RIGHT_ARROW: 39, DOWN_ARROW: 40,
                    INSERT: 45, DELETE: 46, HELP: 47, LEFT_WINDOW: 91, RIGHT_WINDOW: 92, SELECT: 93, NUMPAD_0: 96, NUMPAD_1: 97, NUMPAD_2: 98, NUMPAD_3: 99, NUMPAD_4: 100, NUMPAD_5: 101, NUMPAD_6: 102, NUMPAD_7: 103, NUMPAD_8: 104, NUMPAD_9: 105, NUMPAD_MULTIPLY: 106, NUMPAD_PLUS: 107, NUMPAD_ENTER: 108, NUMPAD_MINUS: 109, NUMPAD_PERIOD: 110, NUMPAD_DIVIDE: 111, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, F13: 124, F14: 125, F15: 126, NUM_LOCK: 144, SCROLL_LOCK: 145, UP_DPAD: 175, DOWN_DPAD: 176, LEFT_DPAD: 177, RIGHT_DPAD: 178, copyKey: l("mac") &&
                    !l("air") ? l("safari") ? 91 : 224 : 17
                }
            })
        }, "dojo/_base/Deferred": function () {
            define("./kernel ../Deferred ../promise/Promise ../errors/CancelError ../has ./lang ../when".split(" "), function (a, l, g, p, m, n, q) {
                var h = function () { }, k = Object.freeze || function () { }, b = a.Deferred = function (a) {
                    function d(b) { if (q) throw Error("This deferred has already been resolved"); e = b; q = !0; c() } function c() {
                        for (var b; !b && w;) {
                            var a = w; w = w.next; if (b = a.progress == h) q = !1; var c = u ? a.error : a.resolved; m("config-useDeferredInstrumentation") && u && l.instrumentRejected &&
                            l.instrumentRejected(e, !!c); if (c) try { var d = c(e); d && "function" === typeof d.then ? d.then(n.hitch(a.deferred, "resolve"), n.hitch(a.deferred, "reject"), n.hitch(a.deferred, "progress")) : (c = b && void 0 === d, b && !c && (u = d instanceof Error), a.deferred[c && u ? "reject" : "resolve"](c ? e : d)) } catch (f) { a.deferred.reject(f) } else u ? a.deferred.reject(e) : a.deferred.resolve(e)
                        }
                    } var e, q, v, t, u, r, w, C = this.promise = new g; this.isResolved = C.isResolved = function () { return 0 == t }; this.isRejected = C.isRejected = function () { return 1 == t }; this.isFulfilled =
                    C.isFulfilled = function () { return 0 <= t }; this.isCanceled = C.isCanceled = function () { return v }; this.resolve = this.callback = function (b) { this.fired = t = 0; this.results = [b, null]; d(b) }; this.reject = this.errback = function (b) { u = !0; this.fired = t = 1; m("config-useDeferredInstrumentation") && l.instrumentRejected && l.instrumentRejected(b, !!w); d(b); this.results = [null, b] }; this.progress = function (b) { for (var a = w; a;) { var c = a.progress; c && c(b); a = a.next } }; this.addCallbacks = function (b, a) { this.then(b, a, h); return this }; C.then = this.then =
                    function (a, d, e) { var f = e == h ? this : new b(C.cancel); a = { resolved: a, error: d, progress: e, deferred: f }; w ? r = r.next = a : w = r = a; q && c(); return f.promise }; var x = this; C.cancel = this.cancel = function () { if (!q) { var b = a && a(x); q || (b instanceof Error || (b = new p(b)), b.log = !1, x.reject(b)) } v = !0 }; k(C)
                }; n.extend(b, {
                    addCallback: function (b) { return this.addCallbacks(n.hitch.apply(a, arguments)) }, addErrback: function (b) { return this.addCallbacks(null, n.hitch.apply(a, arguments)) }, addBoth: function (b) {
                        var d = n.hitch.apply(a, arguments); return this.addCallbacks(d,
                        d)
                    }, fired: -1
                }); b.when = a.when = q; return b
            })
        }, "dojo/Deferred": function () {
            define(["./has", "./_base/lang", "./errors/CancelError", "./promise/Promise", "./promise/instrumentation"], function (a, l, g, p, m) {
                var n = Object.freeze || function () { }, q = function (b, a, e, k, g) { 2 === a && (f.instrumentRejected && 0 === b.length) && f.instrumentRejected(e, !1, k, g); for (g = 0; g < b.length; g++) h(b[g], a, e, k) }, h = function (a, c, e, h) {
                    var g = a[c], n = a.deferred; if (g) try {
                        var m = g(e); if (0 === c) "undefined" !== typeof m && b(n, c, m); else {
                            if (m && "function" === typeof m.then) {
                                a.cancel =
                                m.cancel; m.then(k(n, 1), k(n, 2), k(n, 0)); return
                            } b(n, 1, m)
                        }
                    } catch (r) { b(n, 2, r) } else b(n, c, e); 2 === c && f.instrumentRejected && f.instrumentRejected(e, !!g, h, n.promise)
                }, k = function (a, c) { return function (e) { b(a, c, e) } }, b = function (b, a, e) { if (!b.isCanceled()) switch (a) { case 0: b.progress(e); break; case 1: b.resolve(e); break; case 2: b.reject(e) } }, f = function (b) {
                    var a = this.promise = new p, e = this, k, m, l, u = !1, r = []; Error.captureStackTrace && (Error.captureStackTrace(e, f), Error.captureStackTrace(a, f)); this.isResolved = a.isResolved = function () {
                        return 1 ===
                        k
                    }; this.isRejected = a.isRejected = function () { return 2 === k }; this.isFulfilled = a.isFulfilled = function () { return !!k }; this.isCanceled = a.isCanceled = function () { return u }; this.progress = function (b, d) { if (k) { if (!0 === d) throw Error("This deferred has already been fulfilled."); return a } q(r, 0, b, null, e); return a }; this.resolve = function (b, d) { if (k) { if (!0 === d) throw Error("This deferred has already been fulfilled."); return a } q(r, k = 1, m = b, null, e); r = null; return a }; var w = this.reject = function (b, d) {
                        if (k) {
                            if (!0 === d) throw Error("This deferred has already been fulfilled.");
                            return a
                        } Error.captureStackTrace && Error.captureStackTrace(l = {}, w); q(r, k = 2, m = b, l, e); r = null; return a
                    }; this.then = a.then = function (b, d, e) { var g = [e, b, d]; g.cancel = a.cancel; g.deferred = new f(function (b) { return g.cancel && g.cancel(b) }); k && !r ? h(g, k, m, l) : r.push(g); return g.deferred.promise }; this.cancel = a.cancel = function (a, c) {
                        if (k) { if (!0 === c) throw Error("This deferred has already been fulfilled."); } else {
                            if (b) { var e = b(a); a = "undefined" === typeof e ? a : e } u = !0; if (k) { if (2 === k && m === a) return a } else return "undefined" === typeof a &&
                            (a = new g), w(a), a
                        }
                    }; n(a)
                }; f.prototype.toString = function () { return "[object Deferred]" }; m && m(f); return f
            })
        }, "dojo/errors/CancelError": function () { define(["./create"], function (a) { return a("CancelError", null, null, { dojoType: "cancel" }) }) }, "dojo/errors/create": function () {
            define(["../_base/lang"], function (a) {
                return function (l, g, p, m) {
                    p = p || Error; var n = function (a) {
                        if (p === Error) {
                            Error.captureStackTrace && Error.captureStackTrace(this, n); var h = Error.call(this, a), k; for (k in h) h.hasOwnProperty(k) && (this[k] = h[k]); this.message =
                            a; this.stack = h.stack
                        } else p.apply(this, arguments); g && g.apply(this, arguments)
                    }; n.prototype = a.delegate(p.prototype, m); n.prototype.name = l; return n.prototype.constructor = n
                }
            })
        }, "dojo/promise/Promise": function () {
            define(["../_base/lang"], function (a) {
                function l() { throw new TypeError("abstract"); } return a.extend(function () { }, {
                    then: function (a, p, m) { l() }, cancel: function (a, p) { l() }, isResolved: function () { l() }, isRejected: function () { l() }, isFulfilled: function () { l() }, isCanceled: function () { l() }, always: function (a) {
                        return this.then(a,
                        a)
                    }, otherwise: function (a) { return this.then(null, a) }, trace: function () { return this }, traceRejected: function () { return this }, toString: function () { return "[object Promise]" }
                })
            })
        }, "dojo/promise/instrumentation": function () {
            define(["./tracer", "../has", "../_base/lang", "../_base/array"], function (a, l, g, p) {
                function m(b, a, e) {
                    var f = ""; b && b.stack && (f += b.stack); a && a.stack && (f += "\n    ----------------------------------------\n    rejected" + a.stack.split("\n").slice(1).join("\n").replace(/^\s+/, " ")); e && e.stack && (f +=
                    "\n    ----------------------------------------\n" + e.stack); console.error(b, f)
                } function n(b, a, e, f) { a || m(b, e, f) } function q(a, c, e, g) { c ? p.some(k, function (b, c) { if (b.error === a) return k.splice(c, 1), !0 }) : p.some(k, function (b) { return b.error === a }) || k.push({ error: a, rejection: e, deferred: g, timestamp: (new Date).getTime() }); b || (b = setTimeout(h, f)) } function h() {
                    var a = (new Date).getTime(), c = a - f; k = p.filter(k, function (b) { return b.timestamp < c ? (m(b.error, b.rejection, b.deferred), !1) : !0 }); b = k.length ? setTimeout(h, k[0].timestamp +
                    f - a) : !1
                } l.add("config-useDeferredInstrumentation", "report-unhandled-rejections"); var k = [], b = !1, f = 1E3; return function (b) {
                    var c = l("config-useDeferredInstrumentation"); if (c) {
                        a.on("resolved", g.hitch(console, "log", "resolved")); a.on("rejected", g.hitch(console, "log", "rejected")); a.on("progress", g.hitch(console, "log", "progress")); var e = []; "string" === typeof c && (e = c.split(","), c = e.shift()); if ("report-rejections" === c) b.instrumentRejected = n; else if ("report-unhandled-rejections" === c || !0 === c || 1 === c) b.instrumentRejected =
                        q, f = parseInt(e[0], 10) || f; else throw Error("Unsupported instrumentation usage \x3c" + c + "\x3e");
                    }
                }
            })
        }, "dojo/promise/tracer": function () {
            define(["../_base/lang", "./Promise", "../Evented"], function (a, l, g) {
                function p(a) { setTimeout(function () { n.apply(m, a) }, 0) } var m = new g, n = m.emit; m.emit = null; l.prototype.trace = function () { var g = a._toArray(arguments); this.then(function (a) { p(["resolved", a].concat(g)) }, function (a) { p(["rejected", a].concat(g)) }, function (a) { p(["progress", a].concat(g)) }); return this }; l.prototype.traceRejected =
                function () { var g = a._toArray(arguments); this.otherwise(function (a) { p(["rejected", a].concat(g)) }); return this }; return m
            })
        }, "dojo/when": function () { define(["./Deferred", "./promise/Promise"], function (a, l) { return function (g, p, m, n) { var q = g && "function" === typeof g.then, h = q && g instanceof l; if (q) h || (q = new a(g.cancel), g.then(q.resolve, q.reject, q.progress), g = q.promise); else return 1 < arguments.length ? p ? p(g) : g : (new a).resolve(g); return p || m || n ? g.then(p, m, n) : g } }) }, "dojo/_base/json": function () {
            define(["./kernel",
            "../json"], function (a, l) { a.fromJson = function (a) { return eval("(" + a + ")") }; a._escapeString = l.stringify; a.toJsonIndentStr = "\t"; a.toJson = function (g, p) { return l.stringify(g, function (a, g) { if (g) { var p = g.__json__ || g.json; if ("function" == typeof p) return p.call(g) } return g }, p && a.toJsonIndentStr) }; return a })
        }, "dojo/json": function () {
            define(["./has"], function (a) {
                var l = "undefined" != typeof JSON; a.add("json-parse", l); a.add("json-stringify", l && '{"a":1}' == JSON.stringify({ a: 0 }, function (a, g) { return g || 1 })); if (a("json-stringify")) return JSON;
                var g = function (a) { return ('"' + a.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r") }; return {
                    parse: a("json-parse") ? JSON.parse : function (a, g) { if (g && !/^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(a)) throw new SyntaxError("Invalid characters in JSON"); return eval("(" + a + ")") }, stringify: function (a, m, n) {
                        function l(a, b, f) {
                            m && (a = m(f, a)); var d; d = typeof a; if ("number" ==
                            d) return isFinite(a) ? a + "" : "null"; if ("boolean" == d) return a + ""; if (null === a) return "null"; if ("string" == typeof a) return g(a); if ("function" == d || "undefined" == d) return h; if ("function" == typeof a.toJSON) return l(a.toJSON(f), b, f); if (a instanceof Date) return '"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function (b, c, d) { b = a["getUTC" + c]() + (d ? 1 : 0); return 10 > b ? "0" + b : b }); if (a.valueOf() !== a) return l(a.valueOf(), b, f); var c = n ? b + n : "", e = n ? " " : "", p = n ? "\n" : ""; if (a instanceof Array) {
                                var e =
                                a.length, v = []; for (f = 0; f < e; f++) d = l(a[f], c, f), "string" != typeof d && (d = "null"), v.push(p + c + d); return "[" + v.join(",") + p + b + "]"
                            } v = []; for (f in a) { var t; if (a.hasOwnProperty(f)) { if ("number" == typeof f) t = '"' + f + '"'; else if ("string" == typeof f) t = g(f); else continue; d = l(a[f], c, f); "string" == typeof d && v.push(p + c + t + ":" + e + d) } } return "{" + v.join(",") + p + b + "}"
                        } var h; "string" == typeof m && (n = m, m = null); return l(a, "", "")
                    }
                }
            })
        }, "dojo/_base/Color": function () {
            define(["./kernel", "./lang", "./array", "./config"], function (a, l, g, p) {
                var m =
                a.Color = function (a) { a && this.setColor(a) }; m.named = { black: [0, 0, 0], silver: [192, 192, 192], gray: [128, 128, 128], white: [255, 255, 255], maroon: [128, 0, 0], red: [255, 0, 0], purple: [128, 0, 128], fuchsia: [255, 0, 255], green: [0, 128, 0], lime: [0, 255, 0], olive: [128, 128, 0], yellow: [255, 255, 0], navy: [0, 0, 128], blue: [0, 0, 255], teal: [0, 128, 128], aqua: [0, 255, 255], transparent: p.transparentColor || [0, 0, 0, 0] }; l.extend(m, {
                    r: 255, g: 255, b: 255, a: 1, _set: function (a, g, h, k) { this.r = a; this.g = g; this.b = h; this.a = k }, setColor: function (a) {
                        l.isString(a) ? m.fromString(a,
                        this) : l.isArray(a) ? m.fromArray(a, this) : (this._set(a.r, a.g, a.b, a.a), a instanceof m || this.sanitize()); return this
                    }, sanitize: function () { return this }, toRgb: function () { return [this.r, this.g, this.b] }, toRgba: function () { return [this.r, this.g, this.b, this.a] }, toHex: function () { return "#" + g.map(["r", "g", "b"], function (a) { a = this[a].toString(16); return 2 > a.length ? "0" + a : a }, this).join("") }, toCss: function (a) { var g = this.r + ", " + this.g + ", " + this.b; return (a ? "rgba(" + g + ", " + this.a : "rgb(" + g) + ")" }, toString: function () { return this.toCss(!0) }
                });
                m.blendColors = a.blendColors = function (a, l, h, k) { var b = k || new m; g.forEach(["r", "g", "b", "a"], function (f) { b[f] = a[f] + (l[f] - a[f]) * h; "a" != f && (b[f] = Math.round(b[f])) }); return b.sanitize() }; m.fromRgb = a.colorFromRgb = function (a, g) { var h = a.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/); return h && m.fromArray(h[1].split(/\s*,\s*/), g) }; m.fromHex = a.colorFromHex = function (a, l) {
                    var h = l || new m, k = 4 == a.length ? 4 : 8, b = (1 << k) - 1; a = Number("0x" + a.substr(1)); if (isNaN(a)) return null; g.forEach(["b", "g", "r"], function (f) {
                        var d = a & b;
                        a >>= k; h[f] = 4 == k ? 17 * d : d
                    }); h.a = 1; return h
                }; m.fromArray = a.colorFromArray = function (a, g) { var h = g || new m; h._set(Number(a[0]), Number(a[1]), Number(a[2]), Number(a[3])); isNaN(h.a) && (h.a = 1); return h.sanitize() }; m.fromString = a.colorFromString = function (a, g) { var h = m.named[a]; return h && m.fromArray(h, g) || m.fromRgb(a, g) || m.fromHex(a, g) }; return m
            })
        }, "dojo/_base/browser": function () {
            require.has && require.has.add("config-selectorEngine", "acme"); define("../ready ./kernel ./connect ./unload ./window ./event ./html ./NodeList ../query ./xhr ./fx".split(" "),
            function (a) { return a })
        }, "dojo/_base/unload": function () { define(["./kernel", "./lang", "../on"], function (a, l, g) { var p = window, m = { addOnWindowUnload: function (n, m) { a.windowUnloaded || g(p, "unload", a.windowUnloaded = function () { }); g(p, "unload", l.hitch(n, m)) }, addOnUnload: function (a, m) { g(p, "beforeunload", l.hitch(a, m)) } }; a.addOnWindowUnload = m.addOnWindowUnload; a.addOnUnload = m.addOnUnload; return m }) }, "dojo/_base/html": function () {
            define("./kernel ../dom ../dom-style ../dom-attr ../dom-prop ../dom-class ../dom-construct ../dom-geometry".split(" "),
            function (a, l, g, p, m, n, q, h) {
                a.byId = l.byId; a.isDescendant = l.isDescendant; a.setSelectable = l.setSelectable; a.getAttr = p.get; a.setAttr = p.set; a.hasAttr = p.has; a.removeAttr = p.remove; a.getNodeProp = p.getNodeProp; a.attr = function (a, b, f) { return 2 == arguments.length ? p["string" == typeof b ? "get" : "set"](a, b) : p.set(a, b, f) }; a.hasClass = n.contains; a.addClass = n.add; a.removeClass = n.remove; a.toggleClass = n.toggle; a.replaceClass = n.replace; a._toDom = a.toDom = q.toDom; a.place = q.place; a.create = q.create; a.empty = function (a) { q.empty(a) };
                a._destroyElement = a.destroy = function (a) { q.destroy(a) }; a._getPadExtents = a.getPadExtents = h.getPadExtents; a._getBorderExtents = a.getBorderExtents = h.getBorderExtents; a._getPadBorderExtents = a.getPadBorderExtents = h.getPadBorderExtents; a._getMarginExtents = a.getMarginExtents = h.getMarginExtents; a._getMarginSize = a.getMarginSize = h.getMarginSize; a._getMarginBox = a.getMarginBox = h.getMarginBox; a.setMarginBox = h.setMarginBox; a._getContentBox = a.getContentBox = h.getContentBox; a.setContentSize = h.setContentSize; a._isBodyLtr =
                a.isBodyLtr = h.isBodyLtr; a._docScroll = a.docScroll = h.docScroll; a._getIeDocumentElementOffset = a.getIeDocumentElementOffset = h.getIeDocumentElementOffset; a._fixIeBiDiScrollLeft = a.fixIeBiDiScrollLeft = h.fixIeBiDiScrollLeft; a.position = h.position; a.marginBox = function (a, b) { return b ? h.setMarginBox(a, b) : h.getMarginBox(a) }; a.contentBox = function (a, b) { return b ? h.setContentSize(a, b) : h.getContentBox(a) }; a.coords = function (k, b) {
                    a.deprecated("dojo.coords()", "Use dojo.position() or dojo.marginBox()."); k = l.byId(k); var f =
                    g.getComputedStyle(k), f = h.getMarginBox(k, f), d = h.position(k, b); f.x = d.x; f.y = d.y; return f
                }; a.getProp = m.get; a.setProp = m.set; a.prop = function (a, b, f) { return 2 == arguments.length ? m["string" == typeof b ? "get" : "set"](a, b) : m.set(a, b, f) }; a.getStyle = g.get; a.setStyle = g.set; a.getComputedStyle = g.getComputedStyle; a.__toPixelValue = a.toPixelValue = g.toPixelValue; a.style = function (a, b, f) { switch (arguments.length) { case 1: return g.get(a); case 2: return g["string" == typeof b ? "get" : "set"](a, b) } return g.set(a, b, f) }; return a
            })
        }, "dojo/dom-attr": function () {
            define("exports ./sniff ./_base/lang ./dom ./dom-style ./dom-prop".split(" "),
            function (a, l, g, p, m, n) {
                function q(a, f) { var d = a.getAttributeNode && a.getAttributeNode(f); return d && d.specified } var h = { innerHTML: 1, textContent: 1, className: 1, htmlFor: l("ie"), value: 1 }, k = { classname: "class", htmlfor: "for", tabindex: "tabIndex", readonly: "readOnly" }; a.has = function (a, f) { var d = f.toLowerCase(); return h[n.names[d] || f] || q(p.byId(a), k[d] || f) }; a.get = function (a, f) {
                    a = p.byId(a); var d = f.toLowerCase(), c = n.names[d] || f, e = a[c]; if (h[c] && "undefined" != typeof e) return e; if ("textContent" == c) return n.get(a, c); if ("href" !=
                    c && ("boolean" == typeof e || g.isFunction(e))) return e; d = k[d] || f; return q(a, d) ? a.getAttribute(d) : null
                }; a.set = function (b, f, d) { b = p.byId(b); if (2 == arguments.length) { for (var c in f) a.set(b, c, f[c]); return b } c = f.toLowerCase(); var e = n.names[c] || f, l = h[e]; if ("style" == e && "string" != typeof d) return m.set(b, d), b; if (l || "boolean" == typeof d || g.isFunction(d)) return n.set(b, f, d); b.setAttribute(k[c] || f, d); return b }; a.remove = function (a, f) { p.byId(a).removeAttribute(k[f.toLowerCase()] || f) }; a.getNodeProp = function (a, f) {
                    a = p.byId(a);
                    var d = f.toLowerCase(), c = n.names[d] || f; if (c in a && "href" != c) return a[c]; d = k[d] || f; return q(a, d) ? a.getAttribute(d) : null
                }
            })
        }, "dojo/dom-prop": function () {
            define("exports ./_base/kernel ./sniff ./_base/lang ./dom ./dom-style ./dom-construct ./_base/connect".split(" "), function (a, l, g, p, m, n, q, h) {
                function k(a) { var b = ""; a = a.childNodes; for (var d = 0, f; f = a[d]; d++) 8 != f.nodeType && (b = 1 == f.nodeType ? b + k(f) : b + f.nodeValue); return b } var b = {}, f = 0, d = l._scopeName + "attrid"; g.add("dom-textContent", function (a, b, d) {
                    return "textContent" in
                    d
                }); a.names = { "class": "className", "for": "htmlFor", tabindex: "tabIndex", readonly: "readOnly", colspan: "colSpan", frameborder: "frameBorder", rowspan: "rowSpan", textcontent: "textContent", valuetype: "valueType" }; a.get = function (b, d) { b = m.byId(b); var f = d.toLowerCase(), f = a.names[f] || d; return "textContent" == f && !g("dom-textContent") ? k(b) : b[f] }; a.set = function (c, e, k) {
                    c = m.byId(c); if (2 == arguments.length && "string" != typeof e) { for (var l in e) a.set(c, l, e[l]); return c } l = e.toLowerCase(); l = a.names[l] || e; if ("style" == l && "string" !=
                    typeof k) return n.set(c, k), c; if ("innerHTML" == l) return g("ie") && c.tagName.toLowerCase() in { col: 1, colgroup: 1, table: 1, tbody: 1, tfoot: 1, thead: 1, tr: 1, title: 1 } ? (q.empty(c), c.appendChild(q.toDom(k, c.ownerDocument))) : c[l] = k, c; if ("textContent" == l && !g("dom-textContent")) return q.empty(c), c.appendChild(c.ownerDocument.createTextNode(k)), c; if (p.isFunction(k)) { var t = c[d]; t || (t = f++, c[d] = t); b[t] || (b[t] = {}); var u = b[t][l]; if (u) h.disconnect(u); else try { delete c[l] } catch (r) { } k ? b[t][l] = h.connect(c, l, k) : c[l] = null; return c } c[l] =
                    k; return c
                }
            })
        }, "dojo/dom-construct": function () {
            define("exports ./_base/kernel ./sniff ./_base/window ./dom ./dom-attr".split(" "), function (a, l, g, p, m, n) {
                function q(a, b) { var c = b.parentNode; c && c.insertBefore(a, b) } function h(a) { if ("innerHTML" in a) try { a.innerHTML = ""; return } catch (b) { } for (var c; c = a.lastChild;) a.removeChild(c) } var k = {
                    option: ["select"], tbody: ["table"], thead: ["table"], tfoot: ["table"], tr: ["table", "tbody"], td: ["table", "tbody", "tr"], th: ["table", "thead", "tr"], legend: ["fieldset"], caption: ["table"],
                    colgroup: ["table"], col: ["table", "colgroup"], li: ["ul"]
                }, b = /<\s*([\w\:]+)/, f = {}, d = 0, c = "__" + l._scopeName + "ToDomId", e; for (e in k) k.hasOwnProperty(e) && (l = k[e], l.pre = "option" == e ? '\x3cselect multiple\x3d"multiple"\x3e' : "\x3c" + l.join("\x3e\x3c") + "\x3e", l.post = "\x3c/" + l.reverse().join("\x3e\x3c/") + "\x3e"); var s; 8 >= g("ie") && (s = function (a) {
                    a.__dojo_html5_tested = "yes"; var b = v("div", { innerHTML: "\x3cnav\x3ea\x3c/nav\x3e", style: { visibility: "hidden" } }, a.body); 1 !== b.childNodes.length && "abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\b\w+\b/g,
                    function (b) { a.createElement(b) }); t(b)
                }); a.toDom = function (a, e) { e = e || p.doc; var h = e[c]; h || (e[c] = h = ++d + "", f[h] = e.createElement("div")); 8 >= g("ie") && !e.__dojo_html5_tested && e.body && s(e); a += ""; var m = a.match(b), n = m ? m[1].toLowerCase() : "", h = f[h]; if (m && k[n]) { m = k[n]; h.innerHTML = m.pre + a + m.post; for (m = m.length; m; --m) h = h.firstChild } else h.innerHTML = a; if (1 == h.childNodes.length) return h.removeChild(h.firstChild); for (n = e.createDocumentFragment() ; m = h.firstChild;) n.appendChild(m); return n }; a.place = function (b, c, d) {
                    c = m.byId(c);
                    "string" == typeof b && (b = /^\s*</.test(b) ? a.toDom(b, c.ownerDocument) : m.byId(b)); if ("number" == typeof d) { var e = c.childNodes; !e.length || e.length <= d ? c.appendChild(b) : q(b, e[0 > d ? 0 : d]) } else switch (d) { case "before": q(b, c); break; case "after": d = b; (e = c.parentNode) && (e.lastChild == c ? e.appendChild(d) : e.insertBefore(d, c.nextSibling)); break; case "replace": c.parentNode.replaceChild(b, c); break; case "only": a.empty(c); c.appendChild(b); break; case "first": if (c.firstChild) { q(b, c.firstChild); break } default: c.appendChild(b) } return b
                };
                var v = a.create = function (b, c, d, e) { var f = p.doc; d && (d = m.byId(d), f = d.ownerDocument); "string" == typeof b && (b = f.createElement(b)); c && n.set(b, c); d && a.place(b, d, e); return b }; a.empty = function (a) { h(m.byId(a)) }; var t = a.destroy = function (a) { if (a = m.byId(a)) { var b = a; a = a.parentNode; b.firstChild && h(b); a && (g("ie") && a.canHaveChildren && "removeNode" in b ? b.removeNode(!1) : a.removeChild(b)) } }
            })
        }, "dojo/dom-class": function () {
            define(["./_base/lang", "./_base/array", "./dom"], function (a, l, g) {
                function p(a) {
                    if ("string" == typeof a ||
                    a instanceof String) { if (a && !n.test(a)) return q[0] = a, q; a = a.split(n); a.length && !a[0] && a.shift(); a.length && !a[a.length - 1] && a.pop(); return a } return !a ? [] : l.filter(a, function (a) { return a })
                } var m, n = /\s+/, q = [""], h = {}; return m = {
                    contains: function (a, b) { return 0 <= (" " + g.byId(a).className + " ").indexOf(" " + b + " ") }, add: function (a, b) {
                        a = g.byId(a); b = p(b); var f = a.className, d, f = f ? " " + f + " " : " "; d = f.length; for (var c = 0, e = b.length, h; c < e; ++c) (h = b[c]) && 0 > f.indexOf(" " + h + " ") && (f += h + " "); d < f.length && (a.className = f.substr(1,
                        f.length - 2))
                    }, remove: function (h, b) { h = g.byId(h); var f; if (void 0 !== b) { b = p(b); f = " " + h.className + " "; for (var d = 0, c = b.length; d < c; ++d) f = f.replace(" " + b[d] + " ", " "); f = a.trim(f) } else f = ""; h.className != f && (h.className = f) }, replace: function (a, b, f) { a = g.byId(a); h.className = a.className; m.remove(h, f); m.add(h, b); a.className !== h.className && (a.className = h.className) }, toggle: function (a, b, f) {
                        a = g.byId(a); if (void 0 === f) { b = p(b); for (var d = 0, c = b.length, e; d < c; ++d) e = b[d], m[m.contains(a, e) ? "remove" : "add"](a, e) } else m[f ? "add" :
                        "remove"](a, b); return f
                    }
                }
            })
        }, "dojo/_base/NodeList": function () {
            define(["./kernel", "../query", "./array", "./html", "../NodeList-dom"], function (a, l, g) {
                l = l.NodeList; var p = l.prototype; p.connect = l._adaptAsForEach(function () { return a.connect.apply(this, arguments) }); p.coords = l._adaptAsMap(a.coords); l.events = "blur focus change click error keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup submit".split(" "); g.forEach(l.events, function (a) {
                    var g = "on" + a; p[g] = function (a,
                    h) { return this.connect(g, a, h) }
                }); return a.NodeList = l
            })
        }, "dojo/query": function () {
            define("./_base/kernel ./has ./dom ./on ./_base/array ./_base/lang ./selector/_loader ./selector/_loader!default".split(" "), function (a, l, g, p, m, n, q, h) {
                function k(a, b) {
                    var c = function (c, d) { if ("string" == typeof d && (d = g.byId(d), !d)) return new b([]); var e = "string" == typeof c ? a(c, d) : c ? c.end && c.on ? c : [c] : []; return e.end && e.on ? e : new b(e) }; c.matches = a.match || function (a, b, d) { return 0 < c.filter([a], b, d).length }; c.filter = a.filter || function (a,
                    b, d) { return c(b, d).filter(function (b) { return -1 < m.indexOf(a, b) }) }; if ("function" != typeof a) { var d = a.search; a = function (a, b) { return d(b || document, a) } } return c
                } l.add("array-extensible", function () { return 1 == n.delegate([], { length: 1 }).length && !l("bug-for-in-skips-shadowed") }); var b = Array.prototype, f = b.slice, d = b.concat, c = m.forEach, e = function (b, c, d) { c = [0].concat(f.call(c, 0)); d = d || a.global; return function (a) { c[0] = a; return b.apply(d, c) } }, s = function (a) {
                    var b = this instanceof v && l("array-extensible"); "number" ==
                    typeof a && (a = Array(a)); var c = a && "length" in a ? a : arguments; if (b || !c.sort) { for (var d = b ? this : [], e = d.length = c.length, f = 0; f < e; f++) d[f] = c[f]; if (b) return d; c = d } n._mixin(c, t); c._NodeListCtor = function (a) { return v(a) }; return c
                }, v = s, t = v.prototype = l("array-extensible") ? [] : {}; v._wrap = t._wrap = function (a, b, c) { a = new (c || this._NodeListCtor || v)(a); return b ? a._stash(b) : a }; v._adaptAsMap = function (a, b) { return function () { return this.map(e(a, arguments, b)) } }; v._adaptAsForEach = function (a, b) {
                    return function () {
                        this.forEach(e(a,
                        arguments, b)); return this
                    }
                }; v._adaptAsFilter = function (a, b) { return function () { return this.filter(e(a, arguments, b)) } }; v._adaptWithCondition = function (b, c, d) { return function () { var f = arguments, h = e(b, f, d); if (c.call(d || a.global, f)) return this.map(h); this.forEach(h); return this } }; c(["slice", "splice"], function (a) { var c = b[a]; t[a] = function () { return this._wrap(c.apply(this, arguments), "slice" == a ? this : null) } }); c(["indexOf", "lastIndexOf", "every", "some"], function (b) {
                    var c = m[b]; t[b] = function () {
                        return c.apply(a, [this].concat(f.call(arguments,
                        0)))
                    }
                }); n.extend(s, {
                    constructor: v, _NodeListCtor: v, toString: function () { return this.join(",") }, _stash: function (a) { this._parent = a; return this }, on: function (a, b) { var c = this.map(function (c) { return p(c, a, b) }); c.remove = function () { for (var a = 0; a < c.length; a++) c[a].remove() }; return c }, end: function () { return this._parent ? this._parent : new this._NodeListCtor(0) }, concat: function (a) { var b = f.call(this, 0), c = m.map(arguments, function (a) { return f.call(a, 0) }); return this._wrap(d.apply(b, c), this) }, map: function (a, b) {
                        return this._wrap(m.map(this,
                        a, b), this)
                    }, forEach: function (a, b) { c(this, a, b); return this }, filter: function (a) { var b = arguments, c = this, d = 0; if ("string" == typeof a) { c = u._filterResult(this, b[0]); if (1 == b.length) return c._stash(this); d = 1 } return this._wrap(m.filter(c, b[d], b[d + 1]), this) }, instantiate: function (a, b) { var c = n.isFunction(a) ? a : n.getObject(a); b = b || {}; return this.forEach(function (a) { new c(b, a) }) }, at: function () { var a = new this._NodeListCtor(0); c(arguments, function (b) { 0 > b && (b = this.length + b); this[b] && a.push(this[b]) }, this); return a._stash(this) }
                });
                var u = k(h, s); a.query = k(h, function (a) { return s(a) }); u.load = function (a, b, c) { q.load(a, b, function (a) { c(k(a, s)) }) }; a._filterQueryResult = u._filterResult = function (a, b, c) { return new s(u.filter(a, b, c)) }; a.NodeList = u.NodeList = s; return u
            })
        }, "dojo/selector/_loader": function () {
            define(["../has", "require"], function (a, l) {
                var g = document.createElement("div"); a.add("dom-qsa2.1", !!g.querySelectorAll); a.add("dom-qsa3", function () { try { return g.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e", 1 == g.querySelectorAll(".TEST:empty").length } catch (a) { } });
                var p; return { load: function (g, n, q, h) { h = l; g = "default" == g ? a("config-selectorEngine") || "css3" : g; g = "css2" == g || "lite" == g ? "./lite" : "css2.1" == g ? a("dom-qsa2.1") ? "./lite" : "./acme" : "css3" == g ? a("dom-qsa3") ? "./lite" : "./acme" : "acme" == g ? "./acme" : (h = n) && g; if ("?" == g.charAt(g.length - 1)) { g = g.substring(0, g.length - 1); var k = !0 } if (k && (a("dom-compliant-qsa") || p)) return q(p); h([g], function (a) { "./lite" != g && (p = a); q(a) }) } }
            })
        }, "dojo/selector/acme": function () {
            define(["../dom", "../sniff", "../_base/array", "../_base/lang", "../_base/window"],
            function (a, l, g, p, m) {
                var n = p.trim, q = g.forEach, h = "BackCompat" == m.doc.compatMode, k = !1, b = function () { return !0 }, f = function (a) {
                    a = 0 <= "\x3e~+".indexOf(a.slice(-1)) ? a + " * " : a + " "; for (var b = function (b, c) { return n(a.slice(b, c)) }, c = [], d = -1, e = -1, f = -1, g = -1, h = -1, m = -1, l = -1, r, p = "", q = "", s, y = 0, w = a.length, t = null, u = null, v = function () { 0 <= m && (t.id = b(m, y).replace(/\\/g, ""), m = -1); if (0 <= l) { var a = l == y ? null : b(l, y); t[0 > "\x3e~+".indexOf(a) ? "tag" : "oper"] = a; l = -1 } 0 <= h && (t.classes.push(b(h + 1, y).replace(/\\/g, "")), h = -1) }; p = q, q = a.charAt(y),
                    y < w; y++) if ("\\" != p) if (t || (s = y, t = { query: null, pseudos: [], attrs: [], classes: [], tag: null, oper: null, id: null, getTag: function () { return k ? this.otag : this.tag } }, l = y), r) q == r && (r = null); else if ("'" == q || '"' == q) r = q; else if (0 <= d) if ("]" == q) { u.attr ? u.matchFor = b(f || d + 1, y) : u.attr = b(d + 1, y); if ((d = u.matchFor) && ('"' == d.charAt(0) || "'" == d.charAt(0))) u.matchFor = d.slice(1, -1); u.matchFor && (u.matchFor = u.matchFor.replace(/\\/g, "")); t.attrs.push(u); u = null; d = f = -1 } else "\x3d" == q && (f = 0 <= "|~^$*".indexOf(p) ? p : "", u.type = f + q, u.attr = b(d +
                    1, y - f.length), f = y + 1); else 0 <= e ? ")" == q && (0 <= g && (u.value = b(e + 1, y)), g = e = -1) : "#" == q ? (v(), m = y + 1) : "." == q ? (v(), h = y) : ":" == q ? (v(), g = y) : "[" == q ? (v(), d = y, u = {}) : "(" == q ? (0 <= g && (u = { name: b(g + 1, y), value: null }, t.pseudos.push(u)), e = y) : " " == q && p != q && (v(), 0 <= g && t.pseudos.push({ name: b(g + 1, y) }), t.loops = t.pseudos.length || t.attrs.length || t.classes.length, t.oquery = t.query = b(s, y), t.otag = t.tag = t.oper ? null : t.tag || "*", t.tag && (t.tag = t.tag.toUpperCase()), c.length && c[c.length - 1].oper && (t.infixOper = c.pop(), t.query = t.infixOper.query +
                    " " + t.query), c.push(t), t = null); return c
                }, d = function (a, b) { return !a ? b : !b ? a : function () { return a.apply(window, arguments) && b.apply(window, arguments) } }, c = function (a, b) { var c = b || []; a && c.push(a); return c }, e = function (a) { return 1 == a.nodeType }, s = function (a, b) { return !a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (k ? a.getAttribute(b) : a.getAttribute(b, 2)) || "" }, v = {
                    "*\x3d": function (a, b) { return function (c) { return 0 <= s(c, a).indexOf(b) } }, "^\x3d": function (a, b) {
                        return function (c) {
                            return 0 ==
                            s(c, a).indexOf(b)
                        }
                    }, "$\x3d": function (a, b) { return function (c) { c = " " + s(c, a); var d = c.lastIndexOf(b); return -1 < d && d == c.length - b.length } }, "~\x3d": function (a, b) { var c = " " + b + " "; return function (b) { return 0 <= (" " + s(b, a) + " ").indexOf(c) } }, "|\x3d": function (a, b) { var c = b + "-"; return function (d) { d = s(d, a); return d == b || 0 == d.indexOf(c) } }, "\x3d": function (a, b) { return function (c) { return s(c, a) == b } }
                }, t = "undefined" == typeof m.doc.firstChild.nextElementSibling, u = !t ? "nextElementSibling" : "nextSibling", r = !t ? "previousElementSibling" :
                "previousSibling", w = t ? e : b, C = function (a) { for (; a = a[r];) if (w(a)) return !1; return !0 }, x = function (a) { for (; a = a[u];) if (w(a)) return !1; return !0 }, y = function (a) {
                    var b = a.parentNode, b = 7 != b.nodeType ? b : b.nextSibling, c = 0, d = b.children || b.childNodes, e = a._i || a.getAttribute("_i") || -1, f = b._l || ("undefined" !== typeof b.getAttribute ? b.getAttribute("_l") : -1); if (!d) return -1; d = d.length; if (f == d && 0 <= e && 0 <= f) return e; l("ie") && "undefined" !== typeof b.setAttribute ? b.setAttribute("_l", d) : b._l = d; e = -1; for (b = b.firstElementChild || b.firstChild; b; b =
                    b[u]) w(b) && (l("ie") ? b.setAttribute("_i", ++c) : b._i = ++c, a === b && (e = c)); return e
                }, K = function (a) { return !(y(a) % 2) }, G = function (a) { return y(a) % 2 }, N = {
                    checked: function (a, b) { return function (a) { return !!("checked" in a ? a.checked : a.selected) } }, disabled: function (a, b) { return function (a) { return a.disabled } }, enabled: function (a, b) { return function (a) { return !a.disabled } }, "first-child": function () { return C }, "last-child": function () { return x }, "only-child": function (a, b) { return function (a) { return C(a) && x(a) } }, empty: function (a,
                    b) { return function (a) { var b = a.childNodes; for (a = a.childNodes.length - 1; 0 <= a; a--) { var c = b[a].nodeType; if (1 === c || 3 == c) return !1 } return !0 } }, contains: function (a, b) { var c = b.charAt(0); if ('"' == c || "'" == c) b = b.slice(1, -1); return function (a) { return 0 <= a.innerHTML.indexOf(b) } }, not: function (a, b) { var c = f(b)[0], d = { el: 1 }; "*" != c.tag && (d.tag = 1); c.classes.length || (d.classes = 1); var e = O(c, d); return function (a) { return !e(a) } }, "nth-child": function (a, b) {
                        var c = parseInt; if ("odd" == b) return G; if ("even" == b) return K; if (-1 != b.indexOf("n")) {
                            var d =
                            b.split("n", 2), e = d[0] ? "-" == d[0] ? -1 : c(d[0]) : 1, f = d[1] ? c(d[1]) : 0, g = 0, h = -1; 0 < e ? 0 > f ? f = f % e && e + f % e : 0 < f && (f >= e && (g = f - f % e), f %= e) : 0 > e && (e *= -1, 0 < f && (h = f, f %= e)); if (0 < e) return function (a) { a = y(a); return a >= g && (0 > h || a <= h) && a % e == f }; b = f
                        } var k = c(b); return function (a) { return y(a) == k }
                    }
                }, S = 9 > l("ie") || 9 == l("ie") && l("quirks") ? function (a) { var b = a.toLowerCase(); "class" == b && (a = "className"); return function (c) { return k ? c.getAttribute(a) : c[a] || c[b] } } : function (a) { return function (b) { return b && b.getAttribute && b.hasAttribute(a) } },
                O = function (a, c) {
                    if (!a) return b; c = c || {}; var f = null; "el" in c || (f = d(f, e)); "tag" in c || "*" != a.tag && (f = d(f, function (b) { return b && (k ? b.tagName : b.tagName.toUpperCase()) == a.getTag() })); "classes" in c || q(a.classes, function (a, b, c) { var e = RegExp("(?:^|\\s)" + a + "(?:\\s|$)"); f = d(f, function (a) { return e.test(a.className) }); f.count = b }); "pseudos" in c || q(a.pseudos, function (a) { var b = a.name; N[b] && (f = d(f, N[b](b, a.value))) }); "attrs" in c || q(a.attrs, function (a) {
                        var b, c = a.attr; a.type && v[a.type] ? b = v[a.type](c, a.matchFor) : c.length &&
                        (b = S(c)); b && (f = d(f, b))
                    }); "id" in c || a.id && (f = d(f, function (b) { return !!b && b.id == a.id })); f || "default" in c || (f = b); return f
                }, I = function (a) { return function (b, c, d) { for (; b = b[u];) if (!t || e(b)) { (!d || U(b, d)) && a(b) && c.push(b); break } return c } }, R = function (a) { return function (b, c, d) { for (b = b[u]; b;) { if (w(b)) { if (d && !U(b, d)) break; a(b) && c.push(b) } b = b[u] } return c } }, A = function (a) { a = a || b; return function (b, c, d) { for (var f = 0, e = b.children || b.childNodes; b = e[f++];) w(b) && ((!d || U(b, d)) && a(b, f)) && c.push(b); return c } }, E = {}, L = function (d) {
                    var f =
                    E[d.query]; if (f) return f; var e = d.infixOper, e = e ? e.oper : "", g = O(d, { el: 1 }), k = "*" == d.tag, n = m.doc.getElementsByClassName; if (e) n = { el: 1 }, k && (n.tag = 1), g = O(d, n), "+" == e ? f = I(g) : "~" == e ? f = R(g) : "\x3e" == e && (f = A(g)); else if (d.id) g = !d.loops && k ? b : O(d, { el: 1, id: 1 }), f = function (b, f) { var e = a.byId(d.id, b.ownerDocument || b); if (e && g(e)) { if (9 == b.nodeType) return c(e, f); for (var h = e.parentNode; h && h != b;) h = h.parentNode; if (h) return c(e, f) } }; else if (n && /\{\s*\[native code\]\s*\}/.test(String(n)) && d.classes.length && !h) var g = O(d, {
                        el: 1,
                        classes: 1, id: 1
                    }), l = d.classes.join(" "), f = function (a, b, d) { b = c(0, b); for (var f, e = 0, h = a.getElementsByClassName(l) ; f = h[e++];) g(f, a) && U(f, d) && b.push(f); return b }; else !k && !d.loops ? f = function (a, b, f) { b = c(0, b); for (var e = 0, g = d.getTag(), g = g ? a.getElementsByTagName(g) : []; a = g[e++];) U(a, f) && b.push(a); return b } : (g = O(d, { el: 1, tag: 1, id: 1 }), f = function (a, b, f) { b = c(0, b); for (var e, h = 0, k = (e = d.getTag()) ? a.getElementsByTagName(e) : []; e = k[h++];) g(e, a) && U(e, f) && b.push(e); return b }); return E[d.query] = f
                }, D = {}, B = {}, M = function (a) {
                    var b =
                    f(n(a)); if (1 == b.length) { var d = L(b[0]); return function (a) { if (a = d(a, [])) a.nozip = !0; return a } } return function (a) { a = c(a); for (var d, f, e = b.length, g, h, k = 0; k < e; k++) { h = []; d = b[k]; f = a.length - 1; 0 < f && (g = {}, h.nozip = !0); f = L(d); for (var n = 0; d = a[n]; n++) f(d, h, g); if (!h.length) break; a = h } return h }
                }, da = l("ie") ? "commentStrip" : "nozip", Y = !!m.doc.querySelectorAll, $ = /\\[>~+]|n\+\d|([^ \\])?([>~+])([^ =])?/g, J = function (a, b, c, d) { return c ? (b ? b + " " : "") + c + (d ? " " + d : "") : a }, H = /([^[]*)([^\]]*])?/g, T = function (a, b, c) {
                    return b.replace($,
                    J) + (c || "")
                }, z = function (a, b) {
                    a = a.replace(H, T); if (Y) { var c = B[a]; if (c && !b) return c } if (c = D[a]) return c; var c = a.charAt(0), d = -1 == a.indexOf(" "); 0 <= a.indexOf("#") && d && (b = !0); if (Y && !b && -1 == "\x3e~+".indexOf(c) && (!l("ie") || -1 == a.indexOf(":")) && !(h && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf(":checked") && -1 == a.indexOf("|\x3d")) {
                        var f = 0 <= "\x3e~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a; return B[a] = function (b) {
                            try { if (!(9 == b.nodeType || d)) throw ""; var c = b.querySelectorAll(f); c[da] = !0; return c } catch (e) {
                                return z(a,
                                !0)(b)
                            }
                        }
                    } var e = a.match(/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g); return D[a] = 2 > e.length ? M(a) : function (a) { for (var b = 0, c = [], d; d = e[b++];) c = c.concat(M(d)(a)); return c }
                }, F = 0, V = l("ie") ? function (a) { return k ? a.getAttribute("_uid") || a.setAttribute("_uid", ++F) || F : a.uniqueID } : function (a) { return a._uid || (a._uid = ++F) }, U = function (a, b) { if (!b) return 1; var c = V(a); return !b[c] ? b[c] = 1 : 0 }, ea = function (a) {
                    if (a && a.nozip) return a; if (!a || !a.length) return []; if (2 > a.length) return [a[0]]; var b = []; F++; var c, d; if (l("ie") &&
                    k) { var f = F + ""; for (c = 0; c < a.length; c++) if ((d = a[c]) && d.getAttribute("_zipIdx") != f) b.push(d), d.setAttribute("_zipIdx", f) } else if (l("ie") && a.commentStrip) try { for (c = 0; c < a.length; c++) (d = a[c]) && e(d) && b.push(d) } catch (g) { } else for (c = 0; c < a.length; c++) if ((d = a[c]) && d._zipIdx != F) b.push(d), d._zipIdx = F; return b
                }, W = function (a, b) { b = b || m.doc; k = "div" === (b.ownerDocument || b).createElement("div").tagName; var c = z(a)(b); return c && c.nozip ? c : ea(c) }; W.filter = function (b, c, d) {
                    for (var e = [], h = f(c), h = 1 == h.length && !/[^\w#\.]/.test(c) ?
                    O(h[0]) : function (b) { return -1 != g.indexOf(W(c, a.byId(d)), b) }, k = 0, n; n = b[k]; k++) h(n) && e.push(n); return e
                }; return W
            })
        }, "dojo/NodeList-dom": function () {
            define("./_base/kernel ./query ./_base/array ./_base/lang ./dom-class ./dom-construct ./dom-geometry ./dom-attr ./dom-style".split(" "), function (a, l, g, p, m, n, q, h, k) {
                function b(a) { return function (b, c, d) { return 2 == arguments.length ? a["string" == typeof c ? "get" : "set"](b, c) : a.set(b, c, d) } } var f = function (a) { return 1 == a.length && "string" == typeof a[0] }, d = function (a) {
                    var b =
                    a.parentNode; b && b.removeChild(a)
                }, c = l.NodeList, e = c._adaptWithCondition, s = c._adaptAsForEach, v = c._adaptAsMap; p.extend(c, {
                    _normalize: function (b, c) { var d = !0 === b.parse; if ("string" == typeof b.template) { var f = b.templateFunc || a.string && a.string.substitute; b = f ? f(b.template, b) : b } f = typeof b; "string" == f || "number" == f ? (b = n.toDom(b, c && c.ownerDocument), b = 11 == b.nodeType ? p._toArray(b.childNodes) : [b]) : p.isArrayLike(b) ? p.isArray(b) || (b = p._toArray(b)) : b = [b]; d && (b._runParse = !0); return b }, _cloneNode: function (a) { return a.cloneNode(!0) },
                    _place: function (b, c, d, f) { if (!(1 != c.nodeType && "only" == d)) for (var e, g = b.length, h = g - 1; 0 <= h; h--) { var k = f ? this._cloneNode(b[h]) : b[h]; if (b._runParse && a.parser && a.parser.parse) { e || (e = c.ownerDocument.createElement("div")); e.appendChild(k); a.parser.parse(e); for (k = e.firstChild; e.firstChild;) e.removeChild(e.firstChild) } h == g - 1 ? n.place(k, c, d) : c.parentNode.insertBefore(k, c); c = k } }, position: v(q.position), attr: e(b(h), f), style: e(b(k), f), addClass: s(m.add), removeClass: s(m.remove), toggleClass: s(m.toggle), replaceClass: s(m.replace),
                    empty: s(n.empty), removeAttr: s(h.remove), marginBox: v(q.getMarginBox), place: function (a, b) { var c = l(a)[0]; return this.forEach(function (a) { n.place(a, c, b) }) }, orphan: function (a) { return (a ? l._filterResult(this, a) : this).forEach(d) }, adopt: function (a, b) { return l(a).place(this[0], b)._stash(this) }, query: function (a) { if (!a) return this; var b = new c; this.map(function (c) { l(a, c).forEach(function (a) { void 0 !== a && b.push(a) }) }); return b._stash(this) }, filter: function (a) {
                        var b = arguments, c = this, d = 0; if ("string" == typeof a) {
                            c =
                            l._filterResult(this, b[0]); if (1 == b.length) return c._stash(this); d = 1
                        } return this._wrap(g.filter(c, b[d], b[d + 1]), this)
                    }, addContent: function (a, b) { a = this._normalize(a, this[0]); for (var c = 0, d; d = this[c]; c++) a.length ? this._place(a, d, b, 0 < c) : n.empty(d); return this }
                }); return c
            })
        }, "dojo/_base/xhr": function () {
            define("./kernel ./sniff require ../io-query ../dom ../dom-form ./Deferred ./config ./json ./lang ./array ../on ../aspect ../request/watch ../request/xhr ../request/util".split(" "), function (a, l, g, p, m, n, q,
            h, k, b, f, d, c, e, s, v) {
                a._xhrObj = s._create; var t = a.config; a.objectToQuery = p.objectToQuery; a.queryToObject = p.queryToObject; a.fieldToObject = n.fieldToObject; a.formToObject = n.toObject; a.formToQuery = n.toQuery; a.formToJson = n.toJson; a._blockAsync = !1; var u = a._contentHandlers = a.contentHandlers = {
                    text: function (a) { return a.responseText }, json: function (a) { return k.fromJson(a.responseText || null) }, "json-comment-filtered": function (a) {
                        h.useCommentedJson || console.warn("Consider using the standard mimetype:application/json. json-commenting can introduce security issues. To decrease the chances of hijacking, use the standard the 'json' handler and prefix your json with: {}\x26\x26\nUse djConfig.useCommentedJson\x3dtrue to turn off this message.");
                        a = a.responseText; var b = a.indexOf("/*"), c = a.lastIndexOf("*/"); if (-1 == b || -1 == c) throw Error("JSON was not comment filtered"); return k.fromJson(a.substring(b + 2, c))
                    }, javascript: function (b) { return a.eval(b.responseText) }, xml: function (a) {
                        var b = a.responseXML; b && (l("dom-qsa2.1") && !b.querySelectorAll && l("dom-parser")) && (b = (new DOMParser).parseFromString(a.responseText, "application/xml")); if (l("ie") && (!b || !b.documentElement)) {
                            var c = function (a) { return "MSXML" + a + ".DOMDocument" }, c = ["Microsoft.XMLDOM", c(6), c(4),
                            c(3), c(2)]; f.some(c, function (c) { try { var d = new ActiveXObject(c); d.async = !1; d.loadXML(a.responseText); b = d } catch (f) { return !1 } return !0 })
                        } return b
                    }, "json-comment-optional": function (a) { return a.responseText && /^[^{\[]*\/\*/.test(a.responseText) ? u["json-comment-filtered"](a) : u.json(a) }
                }; a._ioSetArgs = function (c, d, f, e) {
                    var g = { args: c, url: c.url }, h = null; if (c.form) { var h = m.byId(c.form), k = h.getAttributeNode("action"); g.url = g.url || (k ? k.value : null); h = n.toObject(h) } k = [{}]; h && k.push(h); c.content && k.push(c.content);
                    c.preventCache && k.push({ "dojo.preventCache": (new Date).valueOf() }); g.query = p.objectToQuery(b.mixin.apply(null, k)); g.handleAs = c.handleAs || "text"; var l = new q(function (a) { a.canceled = !0; d && d(a); var b = a.ioArgs.error; b || (b = Error("request cancelled"), b.dojoType = "cancel", a.ioArgs.error = b); return b }); l.addCallback(f); var r = c.load; r && b.isFunction(r) && l.addCallback(function (a) { return r.call(c, a, g) }); var s = c.error; s && b.isFunction(s) && l.addErrback(function (a) { return s.call(c, a, g) }); var w = c.handle; w && b.isFunction(w) &&
                    l.addBoth(function (a) { return w.call(c, a, g) }); l.addErrback(function (a) { return e(a, l) }); t.ioPublish && (a.publish && !1 !== g.args.ioPublish) && (l.addCallbacks(function (b) { a.publish("/dojo/io/load", [l, b]); return b }, function (b) { a.publish("/dojo/io/error", [l, b]); return b }), l.addBoth(function (b) { a.publish("/dojo/io/done", [l, b]); return b })); l.ioArgs = g; return l
                }; var r = function (a) { a = u[a.ioArgs.handleAs](a.ioArgs.xhr); return void 0 === a ? null : a }, w = function (a, b) { b.ioArgs.args.failOk || console.error(a); return a }, C = function (b) {
                    0 >=
                    x && (x = 0, t.ioPublish && (a.publish && (!b || b && !1 !== b.ioArgs.args.ioPublish)) && a.publish("/dojo/io/stop"))
                }, x = 0; c.after(e, "_onAction", function () { x -= 1 }); c.after(e, "_onInFlight", C); a._ioCancelAll = e.cancelAll; a._ioNotifyStart = function (b) { t.ioPublish && (a.publish && !1 !== b.ioArgs.args.ioPublish) && (x || a.publish("/dojo/io/start"), x += 1, a.publish("/dojo/io/send", [b])) }; a._ioWatch = function (a, c, d, f) {
                    a.ioArgs.options = a.ioArgs.args; b.mixin(a, {
                        response: a.ioArgs, isValid: function (b) { return c(a) }, isReady: function (b) { return d(a) },
                        handleResponse: function (b) { return f(a) }
                    }); e(a); C(a)
                }; a._ioAddQueryToUrl = function (a) { a.query.length && (a.url += (-1 == a.url.indexOf("?") ? "?" : "\x26") + a.query, a.query = null) }; a.xhr = function (b, c, d) {
                    var f, e = a._ioSetArgs(c, function (a) { f && f.cancel() }, r, w), g = e.ioArgs; "postData" in c ? g.query = c.postData : "putData" in c ? g.query = c.putData : "rawBody" in c ? g.query = c.rawBody : (2 < arguments.length && !d || -1 === "POST|PUT".indexOf(b.toUpperCase())) && a._ioAddQueryToUrl(g); var h = {
                        method: b, handleAs: "text", timeout: c.timeout, withCredentials: c.withCredentials,
                        ioArgs: g
                    }; "undefined" !== typeof c.headers && (h.headers = c.headers); "undefined" !== typeof c.contentType && (h.headers || (h.headers = {}), h.headers["Content-Type"] = c.contentType); "undefined" !== typeof g.query && (h.data = g.query); "undefined" !== typeof c.sync && (h.sync = c.sync); a._ioNotifyStart(e); try { f = s(g.url, h, !0) } catch (k) { return e.cancel(), e } e.ioArgs.xhr = f.response.xhr; f.then(function () { e.resolve(e) }).otherwise(function (a) {
                        g.error = a; a.response && (a.status = a.response.status, a.responseText = a.response.text, a.xhr = a.response.xhr);
                        e.reject(a)
                    }); return e
                }; a.xhrGet = function (b) { return a.xhr("GET", b) }; a.rawXhrPost = a.xhrPost = function (b) { return a.xhr("POST", b, !0) }; a.rawXhrPut = a.xhrPut = function (b) { return a.xhr("PUT", b, !0) }; a.xhrDelete = function (b) { return a.xhr("DELETE", b) }; a._isDocumentOk = function (a) { return v.checkStatus(a.status) }; a._getText = function (b) { var c; a.xhrGet({ url: b, sync: !0, load: function (a) { c = a } }); return c }; b.mixin(a.xhr, {
                    _xhrObj: a._xhrObj, fieldToObject: n.fieldToObject, formToObject: n.toObject, objectToQuery: p.objectToQuery,
                    formToQuery: n.toQuery, formToJson: n.toJson, queryToObject: p.queryToObject, contentHandlers: u, _ioSetArgs: a._ioSetArgs, _ioCancelAll: a._ioCancelAll, _ioNotifyStart: a._ioNotifyStart, _ioWatch: a._ioWatch, _ioAddQueryToUrl: a._ioAddQueryToUrl, _isDocumentOk: a._isDocumentOk, _getText: a._getText, get: a.xhrGet, post: a.xhrPost, put: a.xhrPut, del: a.xhrDelete
                }); return a.xhr
            })
        }, "dojo/io-query": function () {
            define(["./_base/lang"], function (a) {
                var l = {}; return {
                    objectToQuery: function (g) {
                        var p = encodeURIComponent, m = [], n; for (n in g) {
                            var q =
                            g[n]; if (q != l[n]) { var h = p(n) + "\x3d"; if (a.isArray(q)) for (var k = 0, b = q.length; k < b; ++k) m.push(h + p(q[k])); else m.push(h + p(q)) }
                        } return m.join("\x26")
                    }, queryToObject: function (g) { var l = decodeURIComponent; g = g.split("\x26"); for (var m = {}, n, q, h = 0, k = g.length; h < k; ++h) if (q = g[h], q.length) { var b = q.indexOf("\x3d"); 0 > b ? (n = l(q), q = "") : (n = l(q.slice(0, b)), q = l(q.slice(b + 1))); "string" == typeof m[n] && (m[n] = [m[n]]); a.isArray(m[n]) ? m[n].push(q) : m[n] = q } return m }
                }
            })
        }, "dojo/dom-form": function () {
            define(["./_base/lang", "./dom", "./io-query",
            "./json"], function (a, l, g, p) {
                var m = {
                    fieldToObject: function (a) { var g = null; if (a = l.byId(a)) { var h = a.name, k = (a.type || "").toLowerCase(); if (h && k && !a.disabled) if ("radio" == k || "checkbox" == k) a.checked && (g = a.value); else if (a.multiple) { g = []; for (a = [a.firstChild]; a.length;) for (h = a.pop() ; h; h = h.nextSibling) if (1 == h.nodeType && "option" == h.tagName.toLowerCase()) h.selected && g.push(h.value); else { h.nextSibling && a.push(h.nextSibling); h.firstChild && a.push(h.firstChild); break } } else g = a.value } return g }, toObject: function (g) {
                        var p =
                        {}; g = l.byId(g).elements; for (var h = 0, k = g.length; h < k; ++h) { var b = g[h], f = b.name, d = (b.type || "").toLowerCase(); if (f && d && 0 > "file|submit|image|reset|button".indexOf(d) && !b.disabled) { var c = p, e = f, b = m.fieldToObject(b); if (null !== b) { var s = c[e]; "string" == typeof s ? c[e] = [s, b] : a.isArray(s) ? s.push(b) : c[e] = b } "image" == d && (p[f + ".x"] = p[f + ".y"] = p[f].x = p[f].y = 0) } } return p
                    }, toQuery: function (a) { return g.objectToQuery(m.toObject(a)) }, toJson: function (a, g) { return p.stringify(m.toObject(a), null, g ? 4 : 0) }
                }; return m
            })
        }, "dojo/request/watch": function () {
            define("./util ../errors/RequestTimeoutError ../errors/CancelError ../_base/array ../_base/window ../has!host-browser?dom-addeventlistener?:../on:".split(" "),
            function (a, l, g, p, m, n) {
                function q() {
                    for (var a = +new Date, d = 0, c; d < b.length && (c = b[d]) ; d++) { var e = c.response, g = e.options; if (c.isCanceled && c.isCanceled() || c.isValid && !c.isValid(e)) b.splice(d--, 1), h._onAction && h._onAction(); else if (c.isReady && c.isReady(e)) b.splice(d--, 1), c.handleResponse(e), h._onAction && h._onAction(); else if (c.startTime && c.startTime + (g.timeout || 0) < a) b.splice(d--, 1), c.cancel(new l("Timeout exceeded", e)), h._onAction && h._onAction() } h._onInFlight && h._onInFlight(c); b.length || (clearInterval(k),
                    k = null)
                } function h(a) { a.response.options.timeout && (a.startTime = +new Date); a.isFulfilled() || (b.push(a), k || (k = setInterval(q, 50)), a.response.options.sync && q()) } var k = null, b = []; h.cancelAll = function () { try { p.forEach(b, function (a) { try { a.cancel(new g("All requests canceled.")) } catch (b) { } }) } catch (a) { } }; m && (n && m.doc.attachEvent) && n(m.global, "unload", function () { h.cancelAll() }); return h
            })
        }, "dojo/request/util": function () {
            define("exports ../errors/RequestError ../errors/CancelError ../Deferred ../io-query ../_base/array ../_base/lang ../promise/Promise".split(" "),
            function (a, l, g, p, m, n, q, h) {
                function k(a) { return f(a) } function b(a) { return a.data || a.text } a.deepCopy = function (b, c) { for (var e in c) { var f = b[e], g = c[e]; f !== g && (f && "object" === typeof f && g && "object" === typeof g ? a.deepCopy(f, g) : b[e] = g) } return b }; a.deepCreate = function (b, c) { c = c || {}; var e = q.delegate(b), f, g; for (f in b) (g = b[f]) && "object" === typeof g && (e[f] = a.deepCreate(g, c[f])); return a.deepCopy(e, c) }; var f = Object.freeze || function (a) { return a }; a.deferred = function (d, c, e, m, n, t) {
                    var u = new p(function (a) {
                        c && c(u, d); return !a ||
                        !(a instanceof l) && !(a instanceof g) ? new g("Request canceled", d) : a
                    }); u.response = d; u.isValid = e; u.isReady = m; u.handleResponse = n; e = u.then(k).otherwise(function (a) { a.response = d; throw a; }); a.notify && e.then(q.hitch(a.notify, "emit", "load"), q.hitch(a.notify, "emit", "error")); m = e.then(b); n = new h; for (var r in m) m.hasOwnProperty(r) && (n[r] = m[r]); n.response = e; f(n); t && u.then(function (a) { t.call(u, a) }, function (a) { t.call(u, d, a) }); u.promise = n; u.then = n.then; return u
                }; a.addCommonMethods = function (a, b) {
                    n.forEach(b || ["GET",
                    "POST", "PUT", "DELETE"], function (b) { a[("DELETE" === b ? "DEL" : b).toLowerCase()] = function (c, f) { f = q.delegate(f || {}); f.method = b; return a(c, f) } })
                }; a.parseArgs = function (a, b, f) { var g = b.data, h = b.query; g && !f && "object" === typeof g && (b.data = m.objectToQuery(g)); h ? ("object" === typeof h && (h = m.objectToQuery(h)), b.preventCache && (h += (h ? "\x26" : "") + "request.preventCache\x3d" + +new Date)) : b.preventCache && (h = "request.preventCache\x3d" + +new Date); a && h && (a += (~a.indexOf("?") ? "\x26" : "?") + h); return { url: a, options: b, getHeader: function (a) { return null } } };
                a.checkStatus = function (a) { a = a || 0; return 200 <= a && 300 > a || 304 === a || 1223 === a || !a }
            })
        }, "dojo/errors/RequestError": function () { define(["./create"], function (a) { return a("RequestError", function (a, g) { this.response = g }) }) }, "dojo/errors/RequestTimeoutError": function () { define(["./create", "./RequestError"], function (a, l) { return a("RequestTimeoutError", null, l, { dojoType: "timeout" }) }) }, "dojo/request/xhr": function () {
            define(["../errors/RequestError", "./watch", "./handlers", "./util", "../has"], function (a, l, g, p, m) {
                function n(b,
                c) { var d = b.xhr; b.status = b.xhr.status; try { b.text = d.responseText } catch (f) { } "xml" === b.options.handleAs && (b.data = d.responseXML); if (!c) try { g(b) } catch (e) { c = e } c ? this.reject(c) : p.checkStatus(d.status) ? this.resolve(b) : (c = new a("Unable to load " + b.url + " status: " + d.status, b), this.reject(c)) } function q(a) { return this.xhr.getResponseHeader(a) } function h(g, r, w) {
                    var t = m("native-formdata") && r && r.data && r.data instanceof FormData, x = p.parseArgs(g, p.deepCreate(s, r), t); g = x.url; r = x.options; var y, v = p.deferred(x, c, b, f,
                    n, function () { y && y() }), G = x.xhr = h._create(); if (!G) return v.cancel(new a("XHR was not created")), w ? v : v.promise; x.getHeader = q; d && (y = d(G, v, x)); var N = r.data, S = !r.sync, O = r.method; try {
                        G.open(O, g, S, r.user || e, r.password || e); r.withCredentials && (G.withCredentials = r.withCredentials); m("native-response-type") && r.handleAs in k && (G.responseType = r.handleAs); var I = r.headers; g = t ? !1 : "application/x-www-form-urlencoded"; if (I) for (var R in I) "content-type" === R.toLowerCase() ? g = I[R] : I[R] && G.setRequestHeader(R, I[R]); g && !1 !==
                        g && G.setRequestHeader("Content-Type", g); (!I || !("X-Requested-With" in I)) && G.setRequestHeader("X-Requested-With", "XMLHttpRequest"); p.notify && p.notify.emit("send", x, v.promise.cancel); G.send(N)
                    } catch (A) { v.reject(A) } l(v); G = null; return w ? v : v.promise
                } m.add("native-xhr", function () { return "undefined" !== typeof XMLHttpRequest }); m.add("dojo-force-activex-xhr", function () { return m("activex") && !document.addEventListener && "file:" === window.location.protocol }); m.add("native-xhr2", function () {
                    if (m("native-xhr")) {
                        var a =
                        new XMLHttpRequest; return "undefined" !== typeof a.addEventListener && ("undefined" === typeof opera || "undefined" !== typeof a.upload)
                    }
                }); m.add("native-formdata", function () { return "undefined" !== typeof FormData }); m.add("native-response-type", function () { return m("native-xhr") && "undefined" !== typeof (new XMLHttpRequest).responseType }); var k = { blob: 1, document: 1, arraybuffer: 1 }, b, f, d, c; m("native-xhr2") ? (b = function (a) { return !this.isFulfilled() }, c = function (a, b) { b.xhr.abort() }, d = function (b, c, d) {
                    function f(a) { c.handleResponse(d) }
                    function e(b) { b = new a("Unable to load " + d.url + " status: " + b.target.status, d); c.handleResponse(d, b) } function g(a) { a.lengthComputable ? (d.loaded = a.loaded, d.total = a.total, c.progress(d)) : 3 === d.xhr.readyState && (d.loaded = a.position, c.progress(d)) } b.addEventListener("load", f, !1); b.addEventListener("error", e, !1); b.addEventListener("progress", g, !1); return function () { b.removeEventListener("load", f, !1); b.removeEventListener("error", e, !1); b.removeEventListener("progress", g, !1); b = null }
                }) : (b = function (a) { return a.xhr.readyState },
                f = function (a) { return 4 === a.xhr.readyState }, c = function (a, b) { var c = b.xhr, d = typeof c.abort; ("function" === d || "object" === d || "unknown" === d) && c.abort() }); var e, s = { data: null, query: null, sync: !1, method: "GET" }; h._create = function () { throw Error("XMLHTTP not available"); }; if (m("native-xhr") && !m("dojo-force-activex-xhr")) h._create = function () { return new XMLHttpRequest }; else if (m("activex")) try { new ActiveXObject("Msxml2.XMLHTTP"), h._create = function () { return new ActiveXObject("Msxml2.XMLHTTP") } } catch (v) {
                    try {
                        new ActiveXObject("Microsoft.XMLHTTP"),
                        h._create = function () { return new ActiveXObject("Microsoft.XMLHTTP") }
                    } catch (t) { }
                } p.addCommonMethods(h); return h
            })
        }, "dojo/request/handlers": function () {
            define(["../json", "../_base/kernel", "../_base/array", "../has", "../selector/_loader"], function (a, l, g, p) {
                function m(a) { var d = b[a.options.handleAs]; a.data = d ? d(a) : a.data || a.text; return a } p.add("activex", "undefined" !== typeof ActiveXObject); p.add("dom-parser", function (a) { return "DOMParser" in a }); var n; if (p("activex")) {
                    var q = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.4.0",
                    "MSXML2.DOMDocument.3.0", "MSXML.DOMDocument"], h; n = function (a) { function b(a) { try { var d = new ActiveXObject(a); d.async = !1; d.loadXML(e); c = d; h = a } catch (f) { return !1 } return !0 } var c = a.data, e = a.text; c && (p("dom-qsa2.1") && !c.querySelectorAll && p("dom-parser")) && (c = (new DOMParser).parseFromString(e, "application/xml")); if (!c || !c.documentElement) (!h || !b(h)) && g.some(q, b); return c }
                } var k = function (a) { return a.xhr.response }, b = {
                    javascript: function (a) { return l.eval(a.text || "") }, json: function (b) { return a.parse(b.text || null) },
                    xml: n, blob: k, arraybuffer: k, document: k
                }; m.register = function (a, d) { b[a] = d }; return m
            })
        }, "dojo/_base/fx": function () {
            define("./kernel ./config ./lang ../Evented ./Color ../aspect ../sniff ../dom ../dom-style".split(" "), function (a, l, g, p, m, n, q, h, k) {
                var b = g.mixin, f = {}, d = f._Line = function (a, b) { this.start = a; this.end = b }; d.prototype.getValue = function (a) { return (this.end - this.start) * a + this.start }; var c = f.Animation = function (a) { b(this, a); g.isArray(this.curve) && (this.curve = new d(this.curve[0], this.curve[1])) }; c.prototype =
                new p; g.extend(c, {
                    duration: 350, repeat: 0, rate: 20, _percent: 0, _startRepeatCount: 0, _getStep: function () { var a = this._percent, b = this.easing; return b ? b(a) : a }, _fire: function (a, b) { var c = b || []; if (this[a]) if (l.debugAtAllCosts) this[a].apply(this, c); else try { this[a].apply(this, c) } catch (d) { console.error("exception in animation handler for:", a), console.error(d) } return this }, play: function (a, b) {
                        this._delayTimer && this._clearTimer(); if (b) this._stopTimer(), this._active = this._paused = !1, this._percent = 0; else if (this._active &&
                        !this._paused) return this; this._fire("beforeBegin", [this.node]); var c = a || this.delay, d = g.hitch(this, "_play", b); if (0 < c) return this._delayTimer = setTimeout(d, c), this; d(); return this
                    }, _play: function (a) {
                        this._delayTimer && this._clearTimer(); this._startTime = (new Date).valueOf(); this._paused && (this._startTime -= this.duration * this._percent); this._active = !0; this._paused = !1; a = this.curve.getValue(this._getStep()); this._percent || (this._startRepeatCount || (this._startRepeatCount = this.repeat), this._fire("onBegin",
                        [a])); this._fire("onPlay", [a]); this._cycle(); return this
                    }, pause: function () { this._delayTimer && this._clearTimer(); this._stopTimer(); if (!this._active) return this; this._paused = !0; this._fire("onPause", [this.curve.getValue(this._getStep())]); return this }, gotoPercent: function (a, b) { this._stopTimer(); this._active = this._paused = !0; this._percent = a; b && this.play(); return this }, stop: function (a) {
                        this._delayTimer && this._clearTimer(); if (!this._timer) return this; this._stopTimer(); a && (this._percent = 1); this._fire("onStop",
                        [this.curve.getValue(this._getStep())]); this._active = this._paused = !1; return this
                    }, destroy: function () { this.stop() }, status: function () { return this._active ? this._paused ? "paused" : "playing" : "stopped" }, _cycle: function () {
                        if (this._active) {
                            var a = (new Date).valueOf(), a = 0 === this.duration ? 1 : (a - this._startTime) / this.duration; 1 <= a && (a = 1); this._percent = a; this.easing && (a = this.easing(a)); this._fire("onAnimate", [this.curve.getValue(a)]); 1 > this._percent ? this._startTimer() : (this._active = !1, 0 < this.repeat ? (this.repeat--,
                            this.play(null, !0)) : -1 == this.repeat ? this.play(null, !0) : this._startRepeatCount && (this.repeat = this._startRepeatCount, this._startRepeatCount = 0), this._percent = 0, this._fire("onEnd", [this.node]), !this.repeat && this._stopTimer())
                        } return this
                    }, _clearTimer: function () { clearTimeout(this._delayTimer); delete this._delayTimer }
                }); var e = 0, s = null, v = { run: function () { } }; g.extend(c, {
                    _startTimer: function () { this._timer || (this._timer = n.after(v, "run", g.hitch(this, "_cycle"), !0), e++); s || (s = setInterval(g.hitch(v, "run"), this.rate)) },
                    _stopTimer: function () { this._timer && (this._timer.remove(), this._timer = null, e--); 0 >= e && (clearInterval(s), s = null, e = 0) }
                }); var t = q("ie") ? function (a) { var b = a.style; !b.width.length && "auto" == k.get(a, "width") && (b.width = "auto") } : function () { }; f._fade = function (a) { a.node = h.byId(a.node); var c = b({ properties: {} }, a); a = c.properties.opacity = {}; a.start = !("start" in c) ? function () { return +k.get(c.node, "opacity") || 0 } : c.start; a.end = c.end; a = f.animateProperty(c); n.after(a, "beforeBegin", g.partial(t, c.node), !0); return a }; f.fadeIn =
                function (a) { return f._fade(b({ end: 1 }, a)) }; f.fadeOut = function (a) { return f._fade(b({ end: 0 }, a)) }; f._defaultEasing = function (a) { return 0.5 + Math.sin((a + 1.5) * Math.PI) / 2 }; var u = function (a) { this._properties = a; for (var b in a) { var c = a[b]; c.start instanceof m && (c.tempColor = new m) } }; u.prototype.getValue = function (a) {
                    var b = {}, c; for (c in this._properties) {
                        var d = this._properties[c], e = d.start; e instanceof m ? b[c] = m.blendColors(e, d.end, a, d.tempColor).toCss() : g.isArray(e) || (b[c] = (d.end - e) * a + e + ("opacity" != c ? d.units || "px" :
                        0))
                    } return b
                }; f.animateProperty = function (d) {
                    var e = d.node = h.byId(d.node); d.easing || (d.easing = a._defaultEasing); d = new c(d); n.after(d, "beforeBegin", g.hitch(d, function () {
                        var a = {}, c; for (c in this.properties) {
                            if ("width" == c || "height" == c) this.node.display = "block"; var d = this.properties[c]; g.isFunction(d) && (d = d(e)); d = a[c] = b({}, g.isObject(d) ? d : { end: d }); g.isFunction(d.start) && (d.start = d.start(e)); g.isFunction(d.end) && (d.end = d.end(e)); var f = 0 <= c.toLowerCase().indexOf("color"), h = function (a, b) {
                                var c = {
                                    height: a.offsetHeight,
                                    width: a.offsetWidth
                                }[b]; if (void 0 !== c) return c; c = k.get(a, b); return "opacity" == b ? +c : f ? c : parseFloat(c)
                            }; "end" in d ? "start" in d || (d.start = h(e, c)) : d.end = h(e, c); f ? (d.start = new m(d.start), d.end = new m(d.end)) : d.start = "opacity" == c ? +d.start : parseFloat(d.start)
                        } this.curve = new u(a)
                    }), !0); n.after(d, "onAnimate", g.hitch(k, "set", d.node), !0); return d
                }; f.anim = function (a, b, d, e, g, h) { return f.animateProperty({ node: a, duration: d || c.prototype.duration, properties: b, easing: e, onEnd: g }).play(h || 0) }; b(a, f); a._Animation = c; return f
            })
        },
        "dojo/_base/loader": function () {
            define("./kernel ../has require module ../json ./lang ./array".split(" "), function (a, l, g, p, m, n, q) {
                var h = function (a) { return a.replace(/\./g, "/") }, k = /\/\/>>built/, b = [], f = [], d = function (a, d, e) { b.push(e); q.forEach(a.split(","), function (a) { a = I(a, d.module); f.push(a); R(a) }); c() }, c = function () {
                    var a, c; for (c in S) if (a = S[c], void 0 === a.noReqPluginCheck && (a.noReqPluginCheck = /loadInit\!/.test(c) || /require\!/.test(c) ? 1 : 0), !a.executed && !a.noReqPluginCheck && a.injected == C) return; M(function () {
                        var a =
                        b; b = []; q.forEach(a, function (a) { a(1) })
                    })
                }, e = function (b, c, d) { var e = /\(|\)/g, f = 1; for (e.lastIndex = c; (c = e.exec(b)) && !(f = ")" == c[0] ? f - 1 : f + 1, 0 == f) ;); if (0 != f) throw "unmatched paren around character " + e.lastIndex + " in: " + b; return [a.trim(b.substring(d, e.lastIndex)) + ";\n", e.lastIndex] }, s = /(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg, v = /(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg, t = /(^|\s)(require|define)\s*\(/m, u = function (a, b) {
                    var c, d, f, g = [], h = []; c = []; for (b =
                    b || a.replace(s, function (a) { v.lastIndex = t.lastIndex = 0; return v.test(a) || t.test(a) ? "" : a }) ; c = v.exec(b) ;) d = v.lastIndex, f = d - c[0].length, d = e(b, d, f), "loadInit" == c[2] ? g.push(d[0]) : h.push(d[0]), v.lastIndex = d[1]; c = g.concat(h); return c.length || !t.test(b) ? [a.replace(/(^|\s)dojo\.loadInit\s*\(/g, "\n0 \x26\x26 dojo.loadInit("), c.join(""), c] : 0
                }, r = g.initSyncLoader(d, c, function (a, b) {
                    var c, d, e = [], f = []; if (k.test(b) || !(c = u(b))) return 0; d = a.mid + "-*loadInit"; for (var g in I("dojo", a).result.scopeMap) e.push(g), f.push('"' +
                    g + '"'); return "// xdomain rewrite of " + a.mid + "\ndefine('" + d + "',{\n\tnames:" + m.stringify(e) + ",\n\tdef:function(" + e.join(",") + "){" + c[1] + "}});\n\ndefine(" + m.stringify(e.concat(["dojo/loadInit!" + d])) + ", function(" + e.join(",") + "){\n" + c[0] + "});"
                }), w = r.sync, C = r.requested, x = r.arrived, y = r.nonmodule, K = r.executing, G = r.executed, N = r.syncExecStack, S = r.modules, O = r.execQ, I = r.getModule, R = r.injectModule, A = r.setArrived, E = r.signal, L = r.finishExec, D = r.execModule, B = r.getLegacyMode, M = r.guardCheckComplete, d = r.dojoRequirePlugin;
                a.provide = function (a) { var b = N[0], c = n.mixin(I(h(a), g.module), { executed: K, result: n.getObject(a, !0) }); A(c); b && (b.provides || (b.provides = [])).push(function () { c.result = n.getObject(a); delete c.provides; c.executed !== G && L(c) }); return c.result }; l.add("config-publishRequireResult", 1, 0, 0); a.require = function (a, b) {
                    var c = function (a, b) {
                        var c = I(h(a), g.module); if (N.length && N[0].finish) N[0].finish.push(a); else {
                            if (c.executed) return c.result; b && (c.result = y); var d = B(); R(c); d = B(); c.executed !== G && c.injected === x && r.guardCheckComplete(function () { D(c) });
                            if (c.executed) return c.result; d == w ? c.cjs ? O.unshift(c) : N.length && (N[0].finish = [a]) : O.push(c)
                        }
                    }(a, b); l("config-publishRequireResult") && (!n.exists(a) && void 0 !== c) && n.setObject(a, c); return c
                }; a.loadInit = function (a) { a() }; a.registerModulePath = function (a, b) { var c = {}; c[a.replace(/\./g, "/")] = b; g({ paths: c }) }; a.platformRequire = function (b) { b = (b.common || []).concat(b[a._name] || b["default"] || []); for (var c; b.length;) n.isArray(c = b.shift()) ? a.require.apply(a, c) : a.require(c) }; a.requireIf = a.requireAfterIf = function (b,
                c, d) { b && a.require(c, d) }; a.requireLocalization = function (a, b, c) { g(["../i18n"], function (d) { d.getLocalization(a, b, c) }) }; return {
                    extractLegacyApiApplications: u, require: d, loadInit: function (b, c, e) {
                        c([b], function (b) {
                            c(b.names, function () {
                                for (var f = "", g = [], k = 0; k < arguments.length; k++) f += "var " + b.names[k] + "\x3d arguments[" + k + "]; ", g.push(arguments[k]); eval(f); var l = c.module, m = [], n, f = {
                                    provide: function (a) { a = h(a); a = I(a, l); a !== l && A(a) }, require: function (a, b) { a = h(a); b && (I(a, l).result = y); m.push(a) }, requireLocalization: function (b,
                                    c, d) { n || (n = ["dojo/i18n"]); d = (d || a.locale).toLowerCase(); b = h(b) + "/nls/" + (/root/i.test(d) ? "" : d + "/") + h(c); I(b, l).isXd && n.push("dojo/i18n!" + b) }, loadInit: function (a) { a() }
                                }, k = {}, q; try { for (q in f) k[q] = a[q], a[q] = f[q]; b.def.apply(null, g) } catch (r) { E("error", [{ src: p.id, id: "failedDojoLoadInit" }, r]) } finally { for (q in f) a[q] = k[q] } n && (m = m.concat(n)); m.length ? d(m.join(","), c, e) : e()
                            })
                        })
                    }
                }
            })
        }
    }
}); (function () { var a = this.require; a({ cache: {} }); !a.async && a(["dojo"]); a.boot && a.apply(null, a.boot) })();
//# sourceMappingURL=dojo.js.map// JavaScript source code

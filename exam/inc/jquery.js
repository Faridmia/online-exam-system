/*! jQuery v3.3.1 | (c) JS Foundation and other contributors |
jquery.org/license */ !function(e,t){"use strict";"object"==typeof
module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):functi
on(e){if(!e.document)throw new Error("jQuery requires a window with a
document");return t(e)}:t(e)}("undefined"!=typeof
window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.get
PrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasO
wnProperty,p=f.toString,d=p.call(Object),h={},g=function
e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function
e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function
m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in
v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function
x(e){return null==e?e+"":"object"==typeof e||"function"==typeof
e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.
init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.
1",constructor:w,length:0,toArray:function(){return
o.call(this)},get:function(e){return
null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var
t=w.merge(this.constructor(),e);return
t.prevObject=this,t},each:function(e){return
w.each(this,e)},map:function(e){return
this.pushStack(w.map(this,function(t,n){return
e.call(t,n,t)}))},slice:function(){return
this.pushStack(o.apply(this,arguments))},first:function(){return
this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var
t=this.length,n=+e+(e<0?t:0);return
this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||t
his.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=func
tion(){var
e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof
a&&(l=a,a=arguments[s]||{},s++),"object"==typeof
a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e
)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1
,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):
void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random(
)).replace(/\D/g,""),isReady:!0,error:function(e){throw new
Error(e)},noop:function(){},isPlainObject:function(e){var
t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n
=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function
(e){var t;for(t in
e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var
n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else
for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return
null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return
null!=e&&(C(Object(e))?w.merge(n,"string"==typeof
e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return
null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var
n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return
e.length=i,e},grep:function(e,t,n){for(var
r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return
i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=
t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return
a.apply([],s)},guid:1,support:h}),"function"==typeof
Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String
Function Array Date RegExp Object Error Symbol".split("
"),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var
t=!!e&&"length"in
e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof
t&&t>0&&t-1 in e)}var E=function(e){var
t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new
Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=
!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e
,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|sel
ected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multipl
e|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0
-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])
*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\
.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\
\)|)",$=new RegExp(M+"+","g"),B=new
RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new
RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new
RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new
RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new
RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new
RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth
|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|
)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new
RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt
|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(
?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native
\w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new
RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var
r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCha
rCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uF
FFF\w-]/g,ne=function(e,t){return
t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+"
":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in
e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childN
odes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?f
unction(e,t){q.apply(e,H.call(t))}:function(e,t){var
n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var
o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof
e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),
t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById
(o)))return r;if(l.id===o)return r.push(l),r}else
if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return
r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3
])&&n.getElementsByClassName&&t.getElementsByClassName)return
L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+"
"]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase
()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(
e)).length;while(s--)h[s]="#"+c+"
"+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.appl
y(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}
return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return
e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function
se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{retu
rn!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=n
ull}}function le(e,t){var
n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=
t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)retur
n r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function
fe(e){return
function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function
pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"but
ton"===n)&&t.type===e}}function de(e){return function(t){return"form"in
t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.
disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.dis
abled===e:"label"in t&&t.disabled===e}}function he(e){return
se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;
while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return
e&&"undefined"!=typeof
e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.own
erDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=
function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.doc
umentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==
i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attac
hEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.get
Attribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendCh
ild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByCl
assName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appen
dChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?
(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return
e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof
t.getElementById&&g){var n=t.getElementById(e);return
n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return
function(e){var n="undefined"!=typeof
e.getAttributeNode&&e.getAttributeNode("id");return
n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof
t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeN
ode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if
((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.ge
tElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagNam
e?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void
0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=
o[i++])1===n.nodeType&&r.push(n);return r}return
o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof
t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa
=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a
id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></o
ption></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$
]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*
(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.quer
ySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+
*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href=''
disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.
createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttri
bute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!
~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled")
,h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push
(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matches
Selector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oM
atchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call
(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new
RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocume
ntPosition),x=t||Q.test(h.contains)?function(e,t){var
n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r
.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDoc
umentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;re
turn!1},D=t?function(e,t){if(e===t)return f=!0,0;var
r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.owner
Document||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDeta
ched&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t==
=d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(
e===t)return f=!0,0;var
n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return
e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=
n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r
])r++;return
r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return
oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&
&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+"
"]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnecte
dMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,nu
ll,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e)
,x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle
[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void
0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t
))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)}
,oe.error=function(e){throw new Error("Syntax error, unrecognized expression:
"+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n
.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));whil
e(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var
t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof
e.textContent)return
e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else
if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.s
electors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:
{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSiblin
g",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1
]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3
]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"
nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even
"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e
},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[
2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.leng
th)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:functi
on(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:fun
ction(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var
t=E[e+" "];return t||(t=new
RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return
t.test("string"==typeof e.className&&e.className||"undefined"!=typeof
e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return
function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:
"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t
?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|=
"===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var
o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return
1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g
=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCas
e(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerC
ase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(
h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.unique
ID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(
p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];bre
ak}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}
))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.n
odeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.un
iqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/
r>=0}}},PSEUDO:function(e,t){var
n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo:
"+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toL
owerCase())?se(function(e,n){var
r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return
i(e,0,n)}):i}},pseudos:{not:se(function(e){var
t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,nu
ll,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){retur
n t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return
function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replac
e(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),la
ng:se(function(e){return U.test(e||"")||oe.error("unsupported lang:
"+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAtt
ribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.
indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:functi
on(t){var n=e.location&&e.location.hash;return
n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e=
==d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)}
,enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase
();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function
(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:funct
ion(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},p
arent:function(e){return!r.pseudos.empty(e)},header:function(e){return
Y.test(e.nodeName)},input:function(e){return
G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"inp
ut"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"==
=e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"
text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){
return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){fo
r(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var
n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var
r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var
r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t
in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t
in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function
ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new
ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.sl
ice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].le
ngth)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[
0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[
a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.le
ngth));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function
ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function
me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return
t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return
e(t,n,i);return!1}:function(t,n,u){var
l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else
while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uni
queID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&
&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function
xe(e){return e.length>1?function(t,n,r){var
i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function
be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function
we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o
,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return
r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=
[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=
n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;whil
e(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;whil
e(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(
l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else
v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function
Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative["
"],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return
O(t,e)>-1},s,!0),p=[function(e,n,r){var
i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)i
f(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(n
ull,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return
Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).r
eplace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(
n)}return xe(p)}function Ee(e,t){var
n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[]
,w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c
&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d
||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&
&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(
v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>
0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return
s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.len
gth;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}re
turn o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=
!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length
>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.fi
nd.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.sl
ice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=
u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee
),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)
))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.p
arentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicat
es=!!f,p(),n.sortDetached=ue(function(e){return
1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return
e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("ty
pe|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.t
oLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e
.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||
le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return
e.defaultValue}),ue(function(e){return
null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===
e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e
);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E
.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSe
lector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==
e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return
r},S=function(e,t){for(var
n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return
n},D=w.expr.match.needsContext;function N(e,t){return
e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var
A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function
j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeTy
pe?w.grep(e,function(e){return e===t!==n}):"string"!=typeof
t?w.grep(e,function(e){return
u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return
n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r
]:[]:w.find.matches(e,w.grep(t,function(e){return
1===e.nodeType}))},w.fn.extend({find:function(e){var
t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter
(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.push
Stack([]),t=0;t<r;t++)w.find(e,i[t],n);return
r>1?w.uniqueSort(n):n},filter:function(e){return
this.pushStack(j(this,e||[],!1))},not:function(e){return
this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof
e&&D.test(e)?w(e):e||[],!1).length}});var
q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var
i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e
.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t
||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.m
erge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&
&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return
this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return
e.nodeType?(this[0]=e,this.length=1,this):g(e)?void
0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^
(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.
extend({has:function(e){var t=w(e,this),n=t.length;return
this.filter(function(){for(var
e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var
n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)f
or(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.no
deType&&w.find.matchesSelector(n,e))){o.push(n);break}return
this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return
e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&
this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return th
is.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){retu
rn this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function
P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var
t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return
k(e,"parentNode")},parentsUntil:function(e,t,n){return
k(e,"parentNode",n)},next:function(e){return
P(e,"nextSibling")},prev:function(e){return
P(e,"previousSibling")},nextAll:function(e){return
k(e,"nextSibling")},prevAll:function(e){return
k(e,"previousSibling")},nextUntil:function(e,t,n){return
k(e,"nextSibling",n)},prevUntil:function(e,t,n){return
k(e,"previousSibling",n)},siblings:function(e){return
S((e.parentNode||{}).firstChild,e)},children:function(e){return
S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(
e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e
]=function(n,r){var
i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w
.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this
.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(
e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typ
eof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.onc
e,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1]
)&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add
:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,fu
nction(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r
)})}(arguments),n&&!t&&u()),this},remove:function(){return
w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1)
,n<=s&&s--}),this},has:function(e){return
e?w.inArray(e,o)>-1:o.length>0},empty:function(){return
o&&(o=[]),this},disable:function(){return
i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],
n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return
i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){re
turn l.fireWith(this,arguments),this},fired:function(){return!!r}};return
l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&
&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(v
oid 0,[e].slice(r))}catch(e){n.apply(void
0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("
memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once
memory"),w.Callbacks("once
memory"),0,"resolved"],["reject","fail",w.Callbacks("once
memory"),w.Callbacks("once
memory"),1,"rejected"]],r="pending",i={state:function(){return
r},always:function(){return
o.done(arguments).fail(arguments),this},"catch":function(e){return
i.then(null,e)},pipe:function(){var e=arguments;return
w.Deferred(function(t){w.each(n,function(n,r){var
i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e
.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"
With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var
o=0;function a(t,n,r,i){return function(){var
s=this,u=arguments,l=function(){var
e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable
self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i
?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.n
otifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(
){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackT
race),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.ge
tStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.
Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e
,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return
null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i
[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2
].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return
o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith})
,i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Ar
ray(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return
function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolve
With(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state(
)||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return
a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.
Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name
)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyExc
eption=function(t){e.setTimeout(function(){throw t})};var
F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.re
adyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0==
=e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--
w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.remov
eEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"
complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?
e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListen
er("load",_));var z=function(e,t,n,r,i,o,a){var
s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in
n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r)
,t=null):(l=t,t=function(e,t,n){return
l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return
i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return
t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var
Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function
Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var
t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.def
ineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){v
ar r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in
t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[thi
s.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void
0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void
0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void
0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in
r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void
0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete
e[this.expando])}},hasData:function(e){var t=e[this.expando];return void
0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new
Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e|
|"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function
ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").t
oLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(
e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return
K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeD
ata:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_
removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var
n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1==
=o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].n
ame).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)
}return i}return"object"==typeof
e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void
0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else
this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},remo
veData:function(e){return
this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var
r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.acce
ss(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w
.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e
,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),d
elete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var
n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory
").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e
,t){var n=2;return"string"!=typeof
e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void
0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"f
x"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return
this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return
this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=
this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof
e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(
r++,n.empty.add(s));return s(),i.promise(t)}});var
re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+r
e+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"
none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument
,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in
t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in
t)e.style[o]=a[o];return i};function ue(e,t,n,r){var
i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l
=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.c
ss(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)
*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c|
|+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var
le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n
.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeCh
ild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,
a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get
(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[
o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!
=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return
fe(this,!0)},hide:function(){return
fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide()
:this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:ch
eckbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|e
cma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,
"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<
table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></ta
ble>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=g
e.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return
n="undefined"!=typeof
e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof
e.querySelectorAll?e.querySelectorAll(t||"*"):[],void
0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var
n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var
me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFrag
ment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge
(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div
")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[
1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes
),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent
="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains
(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c+
+])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFra
gment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttr
ibute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name",
"t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.check
ed,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastC
hild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|co
ntextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function
Ee(){return!0}function ke(){return!1}function Se(){try{return
r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof
t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return
e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void
0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return
1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.gu
id||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={gl
obal:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.han
dler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.
guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(
t){return"undefined"!=typeof
w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=
(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"
").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType
)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,gui
d:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:
h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.cal
l(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c)
,c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.pu
sh(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h
,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).len
gth;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){
f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new
RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o
],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.sele
ctor&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.re
move&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.
handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in
u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle
events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arg
uments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type
]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarge
t=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(
this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.ele
m,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace
&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.
event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.resu
lt=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDi
spatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.del
egateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!
==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disable
d)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needs
Context?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.
length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,han
dlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.protot
ype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)r
eturn t(this.originalEvent)}:function(){if(this.originalEvent)return this.origin
alEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configur
able:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Ev
ent(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&th
is.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(
){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},clic
k:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))ret
urn this.click(),!1},_default:function(e){return
N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.or
iginalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e
,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){i
f(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEve
nt=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.def
aultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeT
ype?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.related
Target=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.time
Stamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isD
efaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSi
mulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrev
ented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){va
r e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stop
Propagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this
.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagati
on(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changed
Touches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shift
Key:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clie
ntX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,s
creenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var
t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.k
eyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.eve
nt.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"p
ointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegat
eType:t,bindType:t,handle:function(e){var
n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.
type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({o
n:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return
De(this,e,t,n,r,1)},off:function(e,t,n){var
r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget)
.off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),thi
s;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return
this}return!1!==t&&"function"!=typeof t||(n=t,t=void
0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<
(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[
^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe
=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")
&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function
He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){
return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute
("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(
e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i
in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.a
ccess(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLower
Case();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!
==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var
i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof
y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.
call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=
i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script")
,He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))
),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f+
+)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src
&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textCo
ntent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,
e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&
(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r
));return e}w.extend({htmlPrefilter:function(e){return
e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u
=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nod
eType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);i
f(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(
e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:fu
nction(e){for(var t,n,r,i=w.event.special,o=0;void
0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in
t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void
0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return
Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return
z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1
!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})}
,null,e,arguments.length)},append:function(){return Re(this,arguments,function(e
){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChi
ld(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nod
eType||11===this.nodeType||9===this.nodeType){var
t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this
,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},
after:function(){return Re(this,arguments,function(e){this.parentNode&&this.pare
ntNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=
(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return
this},clone:function(e,t){return
e=null!=e&&e,t=null==t?e:t,this.map(function(){return
w.clone(this,e,t)})},html:function(e){return z(this,function(e){var
t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return
t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toL
owerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&
&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}
,null,e,arguments.length)},replaceWith:function(){var e=[];return
Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.clea
nData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prep
endTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWit
h"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=
o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return
this.pushStack(r)}});var We=new
RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var
n=t.ownerDocument.defaultView;return
n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new
RegExp(oe.join("|"),"i");!function(){function
t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-
top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block
;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:
60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!
==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.
width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChi
ld(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.c
reateElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip
="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle
="content-
box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return
t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return
t(),i},reliableMarginLeft:function(){return
t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o
,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contai
ns(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test
(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.wi
dth,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){ret
urn{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete
this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",v
isibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=[
"Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in
Ye)return e;var
t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return
e}function Je(e){var t=w.cssProps[e];return
t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return
r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var
a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"
margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+
oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(
e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+
=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(
e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var
r=$e(e),i=Fe(e,t,r),o="border-
box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return
i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!par
seFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase(
)+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)
+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity")
;return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fil
lOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,ord
er:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r
){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l
=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return
a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.ex
ec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3
]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("backgroun
d")||(l[t]="inherit"),a&&"set"in a&&void
0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var
i,o,a,s=G(t);return
Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in
a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),
""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","wi
dth"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css
(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,
t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a
="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollb
oxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-p
arseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px"
)&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliable
MarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundi
ngClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRec
t().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.
cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof
n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!=
=e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return
z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.len
gth;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void
0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function
tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={c
onstructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||
w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.
unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var
e=tt.propHooks[this.prop];return
e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var
t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[thi
s.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this
.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.cal
l(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),
this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:func
tion(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.sty
le[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:funct
ion(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.
style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.el
em,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:f
unction(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing
={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}
,_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var
nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hid
den&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.in
terval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void
0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t
)i["margin"+(n=oe[r])]=i["padding"+n]=e;return
t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).c
oncat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return
r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={}
,h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHo
oks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.un
queued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,
w.queue(e,"fx").length||a.empty.fire()})}));for(r in
t)if(i=t[r],it.test(i)){if(delete
t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])c
ontinue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyOb
ject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],nul
l==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?
c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===
c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function
(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-blo
ck")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow
[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in
d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidd
en=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in
d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in
y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var
n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[
0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in
a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else
t[r]=i}function pt(e,t,n){var
r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete
u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+
l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].ru
n(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resol
veWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{sp
ecialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions
:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){va
r r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return
l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return
this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.res
olveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.speci
alEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return
g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.m
ap(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).d
one(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.ti
mer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{t
weeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.ex
ec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=
0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].uns
hift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.p
refilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.exten
d({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return
w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.
duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&
&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r
.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:functio
n(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity
:t},e,n,r)},animate:function(e,t,n,r){var
i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var
t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.fini
sh=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){va
r r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof
e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var
t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(
a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o
[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1))
;!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.e
ach(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers
,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!
0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splic
e(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete
n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var
n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(th
is,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slide
Up:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:
"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){ret
urn this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.time
rs;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.leng
th||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()}
,w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){r
t=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){re
turn t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var
i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.c
reateElement("input"),t=r.createElement("select").appendChild(r.createElement("o
ption"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.
createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();v
ar dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return
z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(f
unction(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var
r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute
?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.m
atch.bool.test(t)?dt:void 0)),void 0!==n?null===n?void
w.removeAttr(e,t):i&&"set"in i&&void
0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in
i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type
:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var
n=e.value;return
e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0
,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt=
{set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.ea
ch(w.expr.match.bool.source.match(/\w+/g),function(e,t){var
n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return
r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|sele
ct|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return
z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return
this.each(function(){delete
this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var
r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return
1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in
i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in
i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var
t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test
(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.o
ptSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return
t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parent
Node;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["t
abIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan",
"useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase(
)]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return
e.getAttribute&&e.getAttribute("class")||""}function xt(e){return
Array.isArray(e)?e:"string"==typeof
e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var
t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(t
his,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.node
Type&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+"
");i!==(s=vt(r))&&n.setAttribute("class",s)}return
this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(fun
ction(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)ret
urn this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1==
=n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+"
")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return
this},toggleClass:function(e,t){var n=typeof
e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(
e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(thi
s,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e
);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"
boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&th
is.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasCla
ss:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&("
"+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var
bt=/\r/g;w.fn.extend({val:function(e){var
t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1
===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typ
eof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(
t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in
t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.
type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"va
lue"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend(
{valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return
null!=t?t:vt(w.text(e))}},select:{get:function(e){var
t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:
i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(
!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return
t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i
.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&
(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],functio
n(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.i
nArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return
null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt
=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(
w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type
")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!
==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&
&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]
?t:new w.Event(m,"object"==typeof
t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new
RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.targe
t||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.
trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegate
Type||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.own
erDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!
t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{
})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.resu
lt=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaul
tPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!
y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.add
EventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt)
,w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var
r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w
.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,
t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigge
r(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t)
{var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[
t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEven
tListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDo
cument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),
J.remove(r,t))}}});var
Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var
n;if(!t||"string"!=typeof t)return null;try{n=(new
e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return
n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML:
"+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At
=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArra
y(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof
i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in
t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var
n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?""
:n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(th
is.name,this.value)});else for(n in e)jt(n,e[n],t,i);return
r.join("&")},w.fn.extend({serialize:function(){return
w.param(this.serializeArray())},serializeArray:function(){return
this.map(function(){var e=w.prop(this,"elements");return
e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(t
his).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.te
st(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray
(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t
.name,value:n.replace(Dt,"\r\n")}}).get()}});var
qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[
\t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$
/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElem
ent("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof
t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"
+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return
i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof
l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return
a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var
n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void
0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function
Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void
0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in
s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in
n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return
o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var
i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCa
se()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseF
ields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift()
)if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in
l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!
==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else
try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from
"+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{}
,etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),globa
l:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; cha
rset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/
xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/
,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"response
Text",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text
json":JSON.parse,"text
xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return
t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTran
sport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i
,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||
g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCod
e||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t
;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCa
se()]}return null==t?null:t},getAllResponseHeaders:function(){return
c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T
[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return
null==c&&(h.mimeType=e),this},statusCode:function(e){var
t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return
this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promi
se(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.metho
d||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)
||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.hre
f,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.cros
sDomain=!0}}if(h.data&&h.processData&&"string"!=typeof
h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.even
t&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperC
ase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&
h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencode
d")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.process
Data||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!
1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d
),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-
Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o
])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeade
r("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.ac
cepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+";
q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]
);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abo
rt",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.rea
dyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.s
etTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(
e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var
l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:
0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E
.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHead
er("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="no
tmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0
))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,
[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,
l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--
w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return
w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}
),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return
g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,succ
ess:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,ty
pe:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.exten
d({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,th
is[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0])
,t.map(function(){var
e=this;while(e.firstElementChild)e=e.firstElementChild;return
e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){
w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.conte
nts();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return th
is.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){re
turn this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNo
des)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e
)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.
getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new
e.XMLHttpRequest}catch(e){}};var
Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in
Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var
n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s
.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFiel
ds)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mime
Type),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-
With"]="XMLHttpRequest");for(a in
i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.
onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"e
rror"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s
.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typ
eof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHea
ders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.
onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(functio
n(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)
throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&
&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript,
application/javascript, application/ecmascript, application/x-ecmascript"},conte
nts:{script:/\b(?:java|ecma)script\b/},converters:{"text
script":function(e){return
w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.
cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){i
f(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset
:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&
o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){
n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonp
Callback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return
this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var
i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof
t.data&&0===(t.contentType||"").indexOf("application/x-www-form-
urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t
.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].
replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i)
,t.converters["script json"]=function(){return a||w.error(i+" was not called"),a
[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function
(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Y
t.push(i)),a&&g(o)&&o(a[0]),a=o=void
0}),"script"}),h.createHTMLDocument=function(){var
e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form>
<form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string
"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.crea
teHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("ba
se")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t
.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.chi
ldNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return
s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof
t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).d
one(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e
)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,
e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuc
cess","ajaxSend"],function(e,t){w.fn[t]=function(e){return
this.on(t,e)}}),w.expr.pseudos.animated=function(e){return
w.grep(w.timers,function(t){return
e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.c
ss(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.off
set(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u)
.indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=par
seFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.
top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.cs
s(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void
0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var
t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect()
,n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffse
t}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0
,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=thi
s.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n
.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&
e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.le
ft+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0
),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return
this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"positio
n"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTo
p:"pageYOffset"},function(e,t){var
n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var
o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?
o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}})
,w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e
,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Heigh
t:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"
outer"+e},function(n,r){w.fn[r]=function(i,o){var
a=arguments.length&&(n||"boolean"!=typeof
i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var
o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["cl
ient"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scro
ll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void
0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus
focusin focusout resize scroll click dblclick mousedown mouseup mousemove
mouseover mouseout mouseenter mouseleave change select submit keydown keypress
keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return argumen
ts.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e
,t){return
this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return
this.on(e,null,t,n)},unbind:function(e,t){return
this.off(e,null,t)},delegate:function(e,t,n,r){return
this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.of
f(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var
n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return
r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(argume
nts)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait+
+:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isF
unction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=functio
n(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))
},"function"==typeof define&&define.amd&&define("jquery",[],function(){return
w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return
e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});/*!
jQuery v2.2.2 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module
.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery
requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof
window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=
c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.2",n=funct
ion(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/
^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototy
pe={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return
e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e
.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return
b.prevObject=this,b.context=this.context,b},each:function(a){return
n.each(this,a)},map:function(a){return
this.pushStack(n.map(this,function(b,c){return
a.call(b,c,b)}))},slice:function(){return
this.pushStack(e.apply(this,arguments))},first:function(){return
this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var
b=this.length,c=+a+(0>a?b:0);return
this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject|
|this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=
function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(
"boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunc
tion(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in
a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,
f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):voi d
0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).repl
ace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function()
{},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,
isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b
=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:func
tion(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a
.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"i
sPrototypeOf"))return!1;for(b in a);return void
0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in
a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof
a||"function"==typeof a?i[j.call(a)]||"object":typeof
a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use stri
ct")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.re
moveChild(b)):c(a))},camelCase:function(a){return
a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return
a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var
c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else
for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return
null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return
null!=a&&(s(Object(a))?n.merge(c,"string"==typeof
a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return
null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var
c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return
a.length=e,a},grep:function(a,b,c){for(var
d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return
e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g
],g,c),null!=e&&h.push(e);else for(g in
a)e=b(a[g],g,c),null!=e&&h.push(e);return
f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof
b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return
a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f
):void 0},now:Date.now,support:l}),"function"==typeof
Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String
Function Array Date RegExp Object Error Symbol".split("
"),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var
b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?
!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new
Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(
l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,
J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},
K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|is
map|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?
:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*
(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O="
:("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|
[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new
RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new
RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new
RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new
RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new
RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new
RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth
|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|
(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new
RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|
gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X
=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native
\w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new
RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var
d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromC
harCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.c
hildNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.
length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var
c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,
h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeo f
a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m
(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getEleme
ntById(f)))return d;if(j.id===f)return d.push(j),d}else
if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return
d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o
[3])&&c.getElementsByClassName&&b.getElementsByClassName)return
H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+"
"]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCa
se()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u)
,r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+"
"+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.ap
ply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id"
)}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function
b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return
b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createEle
ment("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentN
ode.removeChild(b),b=null}}function ja(a,b){var
c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var
c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceInde
x||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return
a?1:-1}function la(a){return function(b){var
c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return
function(b){var c=b.nodeName.toLowerCase();return("input"===c||"b
utton"===c)&&b.type===a}}function na(a){return ha(function(b){return
b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&
&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof
a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var
b=a&&(a.ownerDocument||a).documentElement;return
b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var
b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(
n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListe
ner?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload"
,da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("clas
sName")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createC
omment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.t
est(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a)
.id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find
.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var
c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var
b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete
d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var
c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return
c&&c.value===b}}),d.find.T
AG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElement
sByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void
0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(
c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElemen
tsByClassName&&function(a,b){return"undefined"!=typeof
b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.q
sa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a
id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''><
/option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("
[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\[
"+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="
),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll
("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElemen
t("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name
","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a
.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySe
lectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.w
ebkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSel
ector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:
x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegEx
p(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?fun
ction(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a
===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPositi
on&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode
)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var
d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.owner
Document||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sor
tDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)
?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function
(a,b){if(a===b)return l=!0,0;var
c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return
a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(
c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]==
=h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=fu
nction(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.o
wnerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+ "
"]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconn
ectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(
b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!=
=n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.
attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p
):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttrib
uteNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new
Error("Syntax error, unrecognized expression:
"+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=
!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));
while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var
b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof
a.textContent)return
a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else
if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.
selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relati
ve:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousS
ibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){ret
urn a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="==
=a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].to
LowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[
6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&
&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(
a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf("
)",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3
))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===
a?function(){return!0}:function(a){return
a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+"
"];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return
b.test("string"==typeof a.className&&a.className||"undefined"!=typeof
a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return
function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:
"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="==
=b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1
:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d
,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return
1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o
,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowe
rCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.to
LowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}retu
rn!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqu
eID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNod
es[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[
a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniq
ueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0
)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u
]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;retu
rn t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var
c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo:
"+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.t
oLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g])
,a[d]=!(c[d]=f[g])}):function(a){return
e(a,0,c)}):e}},pseudos:{not:ha(function(a){var
b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,
null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){r
eturn b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return
function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.repl
ace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}
}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang:
"+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do
if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.to
LowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType
);return!1}}),target:function(b){var c=a.location&&a.location.hash;return
c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return
a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabInd
ex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return
a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"inp
ut"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return
a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){fo
r(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:f
unction(a){return!d.pseudos.empty(a)},header:function(a){return
Y.test(a.nodeName)},input:function(a){return
X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"i
nput"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"inpu
t"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type
"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(functi
on(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(functi
on(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var
c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var
d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var
d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b
in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b
in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function
pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new
pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.
slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0
].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,t
ype:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec
(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.
slice(c.length));if(!c)break}return
b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var
b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var
d=b.dir,e=c&&"parentNode"===d,f=x++;return
b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return
a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeT
ype||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||
(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)ret
urn k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return
a.length>1?function(b,c,d){var
e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function
ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function
ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c
(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return
d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],
n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i
),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.lengt
h;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.len
gth;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(
l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else
r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function
wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative["
"],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return
J(b,a)>-1},h,!0),m=[function(a,c,d){var
e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++
)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].appl
y(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;re
turn va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":
""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a)
)}m.push(c)}return sa(m)}function xa(a,b){var
c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=
[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;f
or(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocume
nt===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&
&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h)
;if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!
f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return
c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){
b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(
e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var
i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.
length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9
===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(
ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.le
ngth)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.
type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].typ
e)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.appl
y(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b
),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),
c.sortDetached=ia(function(a){return
1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return
a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("
type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type
"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<i
nput/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("
value")})||ja("value",function(a,b,c){return
c||"input"!==a.nodeName.toLowerCase()?void
0:a.defaultValue}),ia(function(a){return
null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0
:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=
n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contain
s;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)i
f(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return
d},v=function(a,b){for(var
c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.mat
ch.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function
z(a,b,c){if(n.isFunction(b))return
n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return
n.grep(a,function(a){return a===b!==c});if("string"==typeof
b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return
n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var
d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matches
Selector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return
1===a.nodeType}))},n.fn.extend({find:function(a){var
b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).f
ilter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;
c>b;b++)n.find(a,e[b],d);return
d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+"
"+a:a,d},filter:function(a){return
this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this
,a||[],!0))},is:function(a){return!!z(this,"string"==typeof
a&&w.test(a)?n(a):a||[],!1).length}});var
A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var
e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a
.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquer
y?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]
:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.tes
t(e[1])&&n.isPlainObject(b))for(e in
b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d
.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=
d,this.selector=a,this}return
a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void
0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,th
is.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?
:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.
extend({has:function(a){var b=n(a,this),c=b.length;return
this.filter(function(){for(var
a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var
c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):
0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c
)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return
this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return
a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]
&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){retur n
this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a
){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function
F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var
b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return
u(a,"parentNode")},parentsUntil:function(a,b,c){return
u(a,"parentNode",c)},next:function(a){return
F(a,"nextSibling")},prev:function(a){return
F(a,"previousSibling")},nextAll:function(a){return
u(a,"nextSibling")},prevAll:function(a){return
u(a,"previousSibling")},nextUntil:function(a,b,c){return
u(a,"nextSibling",c)},prevUntil:function(a,b,c){return
u(a,"previousSibling",c)},siblings:function(a){return
v((a.parentNode||{}).firstChild,a)},children:function(a){return
v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.c
hildNodes)}},function(a,b){n.fn[a]=function(c,d){var
e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e
=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),
this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match
(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof
a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b
=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&
a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:
function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,f
unction(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"strin
g"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return
n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,
1),h>=c&&h--}),this},has:function(a){return
a?n.inArray(a,f)>-1:f.length>0},empty:function(){return
f&&(f=[]),this},disable:function(){return
e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[
],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return
e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){
return j.fireWith(this,arguments),this},fired:function(){return!!d}};return
j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once
memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],[
"notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){re
turn c},always:function(){return
e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return
n.Deferred(function(c){n.each(b,function(b,f){var
g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments)
;a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fai
l(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=nu
ll}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return
d.pipe=d.then,n.each(b,function(a,f){var
g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2]
.lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),thi
s},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a)
{var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:
0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=a
rguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWi
th(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b+
+)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,
k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var
I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isRe
ady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:fu
nction(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWai
t>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),
n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",
J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){retur n
I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.d
ocumentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentL
oaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var
K=function(a,b,c,d,e,f,g){var
h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in
c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g
?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;
i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return
e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return
1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expa
ndo+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.n
odeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writab
le:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};v
ar b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Objec
t.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a
,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in
b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this
.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void
0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void
0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void
0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void
0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.cam
elCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in
f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void
0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete
a[this.expando])}},hasData:function(a){var b=a[this.expando];return void
0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new
M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void
0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAtt
ribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?nu
ll:+c+""===c?+c:P.test(c)?n.parseJSON(c):c; }catch(e){}O.set(a,b,c)}else c=void
0;return c}n.extend({hasData:function(a){return
O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},remov
eData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c
)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){
var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(
f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[
c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set
(f,"hasDataAttrs",!0)}return e}return"object"==typeof
a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void
0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void
0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return
c;if(c=R(f,d,void 0),void 0!==c)return c}else
d=n.camelCase(a),this.each(function(){var
c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)
})},null,b,arguments.length>1,null,!0)},removeData:function(a){return
this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var
d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a
,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var
c=n.queue(a,b),d=c.length,e=c.shift(),f
=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(
),d--),e&&("fx"===b&&c.unshift("inprogress"),delete
f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var
c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memo
ry").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:functi
on(a,b){var c=2;return"string"!=typeof
a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void
0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),
"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return
this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return
this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,
g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof
a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&
&(d++,c.empty.add(h));return h(),e.promise(b)}});var
S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S
+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return
a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function
W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.c
ss(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!
==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do
f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=
+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var
X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={opti
on:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>
"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","<
/tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default
:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$
.th=$.td;function _(a,b){var c="undefined"!=typeof
a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof
a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void
0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.le
ngth;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var
ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFr
agment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f
))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createE
lement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.in
nerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,
g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f))
;l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else
if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){
k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.
createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createEle
ment("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked
"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cl
oneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneCh
ecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|
pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function
ga(){return!0}function ha(){return!1}function ia(){try{return
d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof
b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return
a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void
0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return
1===f&&(g=e,e=function(a){return n(
).off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(fun
ction(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e)
{var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.se
lector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||
(g=r.handle=function(b){return"undefined"!=typeof
n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(
b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2
]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bi
ndType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handl
er:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),
namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.se
tup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l
.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateC
ount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f
,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").ma
tch(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"")
.split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)
||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)")
,g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.t
est(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k
.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.te
ardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete
i[o])}else for(o in
i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle
events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(a
rguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||
{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!
==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagation
Stopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediat
ePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handle
Obj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).ap
ply(f.elem,i),void
0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.p
ostDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var
c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type|
|isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.node
Type&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.sel
ector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,t
his,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}re
turn h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey
bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget
shiftKey target timeStamp view which".split("
"),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split("
"),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.char
Code:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX
offsetY pageX pageY screenX screenY toElement".split("
"),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.cli
entX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clie
ntX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0
),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.
clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:func
tion(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||
(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=
h.props?this.props.concat(h.props):this.props,a=new
n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d)
,3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):
a},special:{load:{noBubble:!0},focus:{trigger:function(){return
this!==ia()&&this.focus?(this.focus(),!1):void
0},delegateType:"focusin"},blur:{trigger:function(){return
this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click
:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this
,"input")?(this.click(),!1):void 0},_default:function(a){return
n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.r
esult&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEve
nt=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=
function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,
this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaul
tPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.tim
eStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.E
vent.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped
:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.orig
inalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:fu
nction(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropag
ation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isI
mmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropaga
tion()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"po
interover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delega
teType:b,bindType:b,handle:function(a){var
c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(
a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.exten
d({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return
ja(this,a,b,c,d,1)},off:function(a,b,c){var
d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarge
t).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler)
,this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return
b!==!1&&"function"!=typeof b||(c=b,b=void
0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=
/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=
/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)
/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.node
Name(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElements
ByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function qa(a){return
a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var
b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function
sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a)
,g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[
e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.ex
tend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input
"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defa
ultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,
m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof
q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=
q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d
),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script
"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"scr
ipt"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=
0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j
)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,
"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e
[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.o
wnerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return
a}n.extend({htmlPrefilter:function(a){return
a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0)
,i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a
.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d
]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else
sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanDat
a:function(a){for(var b,c,d,e=n.event.special,f=0;void
0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d
]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void
0}c[O.expando]&&(c[O.expando]=void
0)}}}),n.fn.extend({domManip:ua,detach:function(a){return
va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return
K(this,function(a){return void 0===a?n.text(this):this.empty().each(function()
{1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a
)})},null,a,arguments.length)},append:function(){return ua(this,arguments,func
tion(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var
b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,
function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var
b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(th
is,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})},after:function(){return ua(this,arguments,function(a){this.parentNode&&thi
s.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=
0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent=""
);return this},clone:function(a,b){return
a=null==a?!1:a,b=null==b?a:b,this.map(function(){return
n.clone(this,a,b)})},html:function(a){return K(this,function(a){var
b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return
b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toL
owerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeTyp
e&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(
a)},null,a,arguments.length)},replaceWith:function(){var a=[];return
ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cl
eanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",p
rependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"repla
ceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,
h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());retu
rn this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function
ya(a,b){var
c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return
c.detach(),d}function za(a){var b=d,c=xa[a];return
c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' hei
ght='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.c
lose(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new
RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var
c=b.ownerDocument.defaultView;return
c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var
e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in
b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=
d.createElement("div"),h=d.createElement("div");if(h.style){h.style.background
Clip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle
="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;he
ight:0;top:0;left:-9999px;padding:0;margin-
top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText
="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-b
ox;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;w
idth:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!
==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="
4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){re
turn i(),b},boxSizingReliable:function(){return
null==c&&i(),c},pixelMarginRight:function(){return
null==c&&i(),e},reliableMarginLeft:function(){return
null==c&&i(),f},reliableMarginRight:function(){var
b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText
="-webkit-box-sizing:content-box;box-sizing :content-
box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.
style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getCompu
tedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function
Fa(a,b,c){var d,e,f,g,h=a.style;return
c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contai
ns(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&
Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width
=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function
Ga(a,b){return{get:function(){return a()?void delete
this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+
)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpac
ing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div
").style;function Ma(a){if(a in La)return a;var
b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in
La)return a}function Na(a,b,c){var d=T.exec(b);return
d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===
(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(
a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!=
=c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e)
,"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function
Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i
="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&
&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0
>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return
g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return
g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=
[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.styl
e.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)
&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set
(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&
"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"n
one"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(
a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,colu
mnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!
0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float
":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.
style){var e,f,g,h=n.camelCase(b),i=a.style;return
b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void
0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f
&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&
(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexO
f("background")||(i[b]="inherit"),g&&"set"in g&&void
0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var
e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cs
sHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void
0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(
e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.
cssHooks[b]={get:function(a,c,d){return
c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return
Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d
,"border-box"===n.css(a,"boxSizing",!1,f),f);return
g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}
}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return
b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-
Da(a,{marginLeft:0},function(){return
a.getBoundingClientRect().left}))+"px":void
0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return
b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:
"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c
){for(var d=0,e={},f="string"==typeof c?c.split("
"):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHoo
ks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return
K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.lengt
h;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c)
:n.css(a,b)},a,b,arguments.length>1)},show:function(){return
Qa(this,!0)},hide:function(){return
Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide
():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function
Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype=
{constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing
=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d
,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var
a=Ra.propHooks[this.prop];return
a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var
b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[t
his.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,
this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.st
ep.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.se
t(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default
:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null
==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b
?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeT
ype||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop
]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propH
ooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a
.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){retur
n.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step=
{};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return
a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={h
eight:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return
b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[])
.concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return
d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V
(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h
.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueue
d++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").lengt
h||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflo
w=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get
(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o
.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function()
{o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}
));for(d in b)if(e=b[d],Ua.exec(e)){if(delete
b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void
0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyOb
ject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden
"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l
.done(function(){n(a).hide()}),l.done(function(){var
b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in
m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"==
=d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camel
Case(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete
a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in
a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var
d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete
i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTim
e+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens
[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},
j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},ea
sing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa
||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var
d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return
j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return
this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.r
esolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.s
pecialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunc
tion(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;re
turn n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.tim
er(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress)
.done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.A
nimation=n.extend(_a,{tweeners:{"*":[function(a,b){var
c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a
,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d+
+)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilte
rs:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(
a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{comp
lete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&
&b};return d.duration=n.fx.off?0:"number"==typeof
d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.s
peeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.
complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(t
his,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).c
ss("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,
c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var
b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.fi
nish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c
){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof
a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var
b=!0,e=null!=a&&
a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e
in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!
==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c|
|n.dequeue(this,a)})},finish:function(a){return
a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=
c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[])
,e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue=
==a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b
].finish.call(this);delete
c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var
c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(
this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),s
lideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{op
acity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,
c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=
0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,
1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a(
)?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=
a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(
Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(
b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var
e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d
.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createEl
ement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.sele
cted,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.valu
e="t",a.type="radio",l.radioValue="t"===a.value}();var
ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return
K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each
(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var
d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribu
te?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(
n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void
n.removeAttr(a,b):e&&"set"in e&&void
0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in
e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{
type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){
var c=a.value;return
a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d
,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.e
xpr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b
,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.matc
h.bool.source.match(/\w+/g),function(a,b){var
c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return
d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb
=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:fu
nction(a,b){return
K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return
this.each(function(){delete
this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var
d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return
1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b, e=n.propHooks[b]),void
0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in
e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var
b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.te
st(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}})
,l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return
b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.pare
ntNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each
(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","col
Span","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLo
werCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a
.getAttribute("class")||""}n.fn.extend({addClass:function(a){var
b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addC
lass(a.call(this,b,fb(this)))});if("string"==typeof
a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+"
").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+"
");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return
this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return
this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!argum
ents.length)return this.attr("class","");if("string"==typeof
a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+"
").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+"
")>-1)d=d.replace(" "+f+" ","
");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return
this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"str
ing"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(func
tion(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(
){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e
.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b
=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribut
e("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(
a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+"
").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var
gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var
b,c,d,e=this[0];{if(arguments.length)return
d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(t
his,c,n(this).val()):a,null==e?e="":"number"==typeof
e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.val
Hooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void
0!==b.set(this,e,"value")||(this.value=e))});if(e)return
b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void
0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null
==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var
b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb,"
")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f
="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++
)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribu
te("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup")
)){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=
a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n
.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n
.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){retu
rn n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void
0}},l.checkOn||(n.valHooks[this].get=function(a){return
null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focus
outblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e|
|d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split(".")
:[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered
)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<
0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof
b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new
RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.tar
get||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f|
|!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){f
or(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(
h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;
while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.ge
t(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.a
pply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b
.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!
1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.even
t.triggered=q,e[q](),n.event.triggered=void
0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,
c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c
.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(funct
ion(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var
c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus
focusin focusout load resize scroll unload click dblclick mousedown mouseup
mousemove mouseover mouseout mouseenter mouseleave change select submit keydown
keypress keyup error contextmenu".split("
"),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,nul
l,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return
this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in
a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=func
tion(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup
:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListen
er(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocumen
t||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.r
emove(d,b))}}});var
jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return
JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return
null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void
0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML:
"+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[
\t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget)
:$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.create
Element("a");vb.href=jb.href;function wb(a){return
function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().matc
h(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]
=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var
e={},f=a===tb;function g(h){var i;return
e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof
j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return
g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var
c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void
0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function
zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void
0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in
h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in
c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return
f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var
e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLower
Case()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.respo
nseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.s
hift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["*
"+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])
){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["t
hrows"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No
conversion from "+i+" to
"+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:
{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),g
lobal:!0,processData:!0,async:!0,contentType:"application/x-www-form-
urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",
xml:"application/xml, text/xml",json:"application/json, text/javascript"},cont
ents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"respon
seXML",text:"responseText",json:"responseJSON"},converters:{"*
text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},fla
tOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxS
ettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),aj
ax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,
l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):
n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u=
{},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2==
=v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCas
e()]}return null==b?null:b},getAllResponseHeaders:function(){return
2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return
v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return
v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in
a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var
b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.pro
mise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.hr
ef)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m
.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||["
"],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,
m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.cros
sDomain=!0}}if(m.data&&m.processData&&"string"!=typeof
m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n
.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type
.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f
=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.tes
t(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified
&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-
Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag
[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestH
eader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]
&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?",
"+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.
headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return
x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(
tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.a
sync&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));
try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No
Transport");function z(b,c,d,h){var
j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b
>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified
&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResp
onseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":30
4===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="err
or",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):
q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":
"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m
]),--n.active||n.event.trigger("ajaxStop")))}return
x},getJSON:function(a,b,c){return
n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")
}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return
n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:
e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n
.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.
fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function
(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).
eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){v
ar a=this;while(a.firstElementChild)a=a.firstElementChild;return
a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.eac
h(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n
(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){va r
b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this
,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(th
is,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hid
den=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=funct
ion(a){return
a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,
Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:inpu
t|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(
b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof
e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e
in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=functio
n(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"=
"+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.trad
itional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(thi
s.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return
d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return
n.param(this.serializeArray())},serializeArray:function(){return
this.map(function(){var a=n.prop(this,"elements");return
a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n
(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X
.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArra
y(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{nam
e:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){
try{return new a.XMLHttpRequest}catch(b){}};var
Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in
Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return
l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.typ
e,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b
.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b
.crossDomain||e["X-Requested-With"]||(e["X-Requested-
With"]="XMLHttpRequest");for(g in
e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=
h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===
a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.statu
s]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof
h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeade
rs()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.
onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()
})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw
i}},abort:function(){c&&c()}}:void
0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript,
application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java
|ecma)script\b/},converters:{"text script":function(a){return
n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(
a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(
a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({c
harset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=
null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:f
unction(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"cal
lback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return
this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var
e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof
b.data&&0===(b.contentType||"").indexOf("application/x-www-form-
urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b
.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback
,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")
+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was
not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=argument
s},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCall
back=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void
0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof
a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var
e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.leng
th&&n(f).remove(),n.merge([],e.childNodes))};var
Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return
Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return
h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void
0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",d
ataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").appen
d(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.app
ly(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxCo
mplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a
){return this.on(b,a)}}),n.expr.filters.animated=function(a){return
n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return
n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b
,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style
.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("abso
lute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=
d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c
,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.l
eft-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:fun
ction(a){if(arguments.length)return void
0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var
b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentEl
ement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYO
ffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:functio
n(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"po
sition")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.
nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d
.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",
!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){ret
urn this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"p
osition"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",
scrollTop:"pageYOffset"},function(a,b){var
c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var
f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:
f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],functio
n(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return
c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"
height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"o
uter"+a},function(c,d){n.fn[d]=function(d,e){var
f=arguments.length&&(c||"boolean"!=typeof
d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var
e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(
e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+
a],e["offset"+a],e["client"+a])):void
0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void
0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return
this.on(a,null,b,c)},unbind:function(a,b){return
this.off(a,null,b)},delegate:function(a,b,c,d){return
this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.
off(a,"**"):this.off(b,a||"**",c)},size:function(){return
this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof
define&&define.amd&&define("jquery",[],function(){return n});var
Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return
a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});/*!
jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license //@
sourceMappingURL=jquery-1.10.2.min.map */ (function(e,t){var n,r,i=typeof t,o=e.
location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",
d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.tr
im,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]
?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W
]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|
:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|fa
lse|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=functio
n(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.typ
e||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?
(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!
1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.pr
ototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return
this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&
e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(
e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,
x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlain
Object(n))for(i in
n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return
this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return
r.find(e);this.length=1,this[0]=o}return
this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,th
is.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.s
elector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArr
ay:function(){return g.call(this)},get:function(e){return null==e?this.toArray()
:0>e?this[this.length+e]:this[e]},pushStack:function(e){var
t=x.merge(this.constructor(),e);return
t.prevObject=this,t.context=this.context,t},each:function(e,t){return
x.each(this,e,t)},ready:function(e){return
x.ready.promise().done(e),this},slice:function(){return
this.pushStack(g.apply(this,arguments))},first:function(){return
this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var
t=this.length,n=+e+(0>e?t:0);return
this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return
this.pushStack(x.map(this,function(t,n){return
e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)}
,push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.ex
tend=function(){var
e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof
s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof
s||x.isFunction(s)||(s={}),u===l&&(s=this,--
l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.i
sPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPla
inObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expa
ndo:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e
.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdRead
y:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--
x.readyWait:!x.isReady){if(!a.body)return
setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),
x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){retur
n"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.ty
pe(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){r
eturn!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return
null==e?e+"":"object"==typeof e||"function"==typeof
e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"objec
t"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call
(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}cat
ch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in
e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in
e)return!1;return!0},error:function(e){throw
Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return
null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t
.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.
childNodes))},parseJSON:function(n){return
e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n)
,n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return
"+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var
r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new
DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XML
DOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r
.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:
function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.e
val.call(e,t)})(t)},camelCase:function(e){return
e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return
e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var
r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)bre
ak}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else
if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in
e)if(r=t.call(e[i],i,e[i]),r===!1)break;return
e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return
null==e?"":b.call(e)}:function(e){return
null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return
null!=e&&(M(Object(e))?x.merge(n,"string"==typeof
e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return
m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in
t&&t[n]===e)return n}return-1},merge:function(e,n){var
r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else
while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var
r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return
i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[
i],i,n),null!=r&&(s[s.length]=r);else for(i in
e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return
d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof
n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e
.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t
},access:function(e,n,r,i,o,a,s){var
l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in
r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s
?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return
c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return
o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new
Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in
t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in
t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(
),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.add
EventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.at
tachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null=
=e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function
o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return
setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number
String Function Array Date RegExp Object Error".split("
"),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var
t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n|
|"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in
e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new
Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return
e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M
=H.push,O=H.slice,F=H.indexOf||function(e){var
t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|sele
cted|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple
|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x
00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"
*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\
"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)
|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"
+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+
P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#
("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),A
TTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-
last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+
"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp(
"^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+
"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\
w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegE
xp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var
r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCha
rCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes
),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.ap
ply(e,O.call(t))}:function(e,t){var
n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,
s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string
"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec
(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return
n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.get
ElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply
(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElem
entsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!
g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){
c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m
="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode|
|t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}fi
nally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function
st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete
t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var 
t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode
&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var
n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=
t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D
);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return
e?1:-1}function ft(e){return function(t){var
n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return
function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.
type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var 
i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=a
t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return
t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var
n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documen
tElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachE
vent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.clas
sName="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){r
eturn e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r
.getElementsByClassName=ut(function(e){return e.innerHTML="<div
class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getEle
mentsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).
id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID
=function(e,t){if(typeof t.getElementById!==j&&h){var
n=t.getElementById(e);return
n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return
function(e){return e.getAttribute("id")===t}}):(delete
o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var
n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return
n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof
n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[]
,i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.pu
sh(n);return r}return
o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getEleme
ntsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.q
uerySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></op
tion></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:val
ue|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(funct
ion(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendCh
ild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]=
"+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":d
isabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test
(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatche
sSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!=''
]:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join
("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var
n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r
.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDoc
umentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;re
turn!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t
.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t
);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?
-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPositio
n?-1:1}:function(e,t){var
r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return
S=!0,0;if(!o||!a)return
e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=
e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(
s[i]===l[i])i++;return
i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return 
at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&
&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(
t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document
.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=funct
ion(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.o
wnerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.att
rHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribut
e(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e)
{throw Error("Syntax error, unrecognized expression:
"+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r
.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));whil
e(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var
t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof
e.textContent)return
e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else
if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.s
electors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:
{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSiblin
g",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1
]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]="
"+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"
===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===
e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PS
EUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!
==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)
&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(
e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:funct
ion(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var
t=N[e+" "];return
t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return
t.test("string"==typeof e.className&&e.className||typeof
e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return
function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!
="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n
&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.sl
ice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var
o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return
1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g
=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCas
e(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()
===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?
m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=
u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1=
==p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else
if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=
0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]|
|(p[b]={}))[e]=[T,f]),p===t))break;return
f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var
n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo:
"+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toL
owerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]
),e[i]=!(n[i]=o[a])}):function(e){return
r(e,0,n)}):r}},pseudos:{not:lt(function(e){var
t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,nu
ll,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){retur
n t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return
at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textCont
ent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return
G.test(e||"")||at.error("unsupported lang:
"+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do
if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLo
werCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);re
turn!1}}),target:function(t){var n=e.location&&e.location.hash;return
n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e=
==f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)}
,enabled:function(e){return e.disabled===!1},disabled:function(e){return
e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input
"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.pa
rentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.
firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)r
eturn!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(
e){return tt.test(e.nodeName)},input:function(e){return
et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"in
put"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"=
==e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||
t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t)
{return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){v
ar n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var
n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var
r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var
r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n
in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n
in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function
gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var
n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while
(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U
.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z,"
")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r)
)||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)br
eak}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var
t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var
r=t.dir,o=n&&"parentNode"===r,a=C++;return
t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return
e(t,n,i)}:function(t,n,s){var l,u,c,p=T+"
"+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[
r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!
0||l===i)return l===!0}else
if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return
e.length>1?function(t,n,r){var
i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function
xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(
o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return
r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=
[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=
n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;whil
e(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;whil
e(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(
u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else
y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function
Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative["
"],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t
,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):
p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.
filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative
[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "=
==e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slic
e(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var
n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s
&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Mat
h.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=
e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(
h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]|
|y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at
.uniqueSort(p)}return w&&(T=k,u=C),x};return
r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(
e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}retu
rn o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return
n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0]
.slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.rela
tive[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)retur
n n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(
a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].re
place(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&
yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sor
tStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached
=ut(function(e){return
1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return
e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("ty
pe|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toL
owerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.f
irstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct
("value",function(e,n,r){return
r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return
null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.g
etAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find
=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text
=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function
F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Call
backs=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s
,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n
=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&
(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var
t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?
e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o
=l.length:r&&(s=t,c(r))}return this},remove:function(){return
l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r
,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return
e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return
l=[],o=0,this},disable:function(){return
l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disa
ble(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||
(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){retur
n p.fireWith(this,arguments),this},fired:function(){return!!i}};return
p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once
memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["n
otify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return
n},always:function(){return
i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return
x.Deferred(function(n){x.each(t,function(t,o){var
a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,argum
ents);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).prog
ress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null
}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return
r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(fu
nction(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"
With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i)
,e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!=
=r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){retu
rn function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.not
ifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=
Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).
fail(o.reject).progress(a(t,l,s)):--i;return
i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f
,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="
<link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElement
sByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)ret
urn t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d
.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5
",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeT
ype,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getEleme
ntsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNo
rmalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.
cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.encty
pe=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElem
ent("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlock
s=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRig
ht=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).check
ed,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteEx
pando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.ge
tAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"=
==o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDoc
umentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneN
ode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",
function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f
in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c
in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-
box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-
box"===d.style.backgroundClip;for(f in x(t))break;return
t.ownLast="0"!==f,x(function(){var
n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-
box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName
("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;heigh
t:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).append
Child(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElemen
tsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",
p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliab
leHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-
sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-
box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolu
te;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d
.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d
,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:
"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cs
sText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarg
inRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.styl
e.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inl
ine;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d
.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d
.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=
r=null)}),n=s=l=u=r=o=null,t }({});var
B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function
R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=
l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(
c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeo
f n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].dat
a,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"str
ing"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function
W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]
:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,
x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split("
")),i=t.length;while(i--)delete
r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(
o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete
a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid
:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?
x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return
R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return
R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){
if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noDat
a[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x
.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.le
ngth&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attribute
s;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),
$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.
each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(
this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return
this.each(function(){x.removeData(this,e)})}});function
$(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase(
);if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:
"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}
else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObjec
t(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var
i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,
n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.q
ueue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t
)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),del
ete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var
n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memor
y").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.ext
end({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>ar
guments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(
this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)
})},dequeue:function(e){return
this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return
e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout
(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return
this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=
this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t
),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.ad
d(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|se
lect|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=
x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){retu
rn x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return
this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return
x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return
e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete
this[e]}catch(n){}})},addClass:function(e){var
t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return th
is.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t
=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?("
"+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+"
")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var
t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof
e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(
this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r
=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U,"
"):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" ","
");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var
n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.remov
eClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,
n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(thi
s),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}
else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.c
lassName),this.className=this.className||e===!1?"":x._data(this,"__className__")
||"")})},hasClass:function(e){var t=" "+e+"
",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&("
"+this[n].className+" ").replace(U,"
").indexOf(t)>=0)return!0;return!1},val:function(e){var
n,r,i,o=this[0];{if(arguments.length)return
i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(thi
s,n,x(this).val()):e,null==o?o="":"number"==typeof
o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHo
oks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in
r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return
r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in
r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null
==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var
t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var
t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i
+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.suppor
t.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabl
ed&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return
t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i
.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return
n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var
o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.pr
op(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.ma
tch.bool.test(n)?X:z)),r===t?o&&"get"in
o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in 
o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},rem
oveAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o
[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.c
amelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHoo
ks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,
"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},pro
pFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var
i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return
a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in
o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in
o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var
t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e
.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e
,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("defaul
t-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){
var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?fu
nction(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i
)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r
?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value
={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set
(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.se
tAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||
n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.a
ttrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!
==i.value?i.value:null},x.valHooks.button={get:function(e,n){var
r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.
contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","h
eight"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttri
bute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],functio
n(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.
style||(x.attrHooks.style={get:function(e){return
e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.o
ptSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&
(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabI
ndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","us
eMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=
this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkb
ox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checke
d=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=functi
on(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|se
lect|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfoc
us|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function
ot(){return!1}function at(){try{return
a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,
c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.g
uid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=f
unction(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch
.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u-
-)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.spec
ial[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.exten
d({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.e
xpr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.
delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEv
entListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(
e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):
h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,
u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)|
|[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".
").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]|
|[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;whi
le(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r
&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegate
Count--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call
(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in
c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete
m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,
d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split
("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.trigge
red)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":
")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2
:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\
\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x
.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!=
=!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||
(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push
(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped
())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"ha
ndle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&
&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._de
fault.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f
&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i
[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[
],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.speci
al[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.cal
l(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPro
pagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isIm
mediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&
&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.han
dler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropag
ation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers
:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(
!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType
&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+
" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u])
.length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l
&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])ret
urn e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i
)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.pro
ps):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.t
arget||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.pare
ntNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles
cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey
target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char
charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.w
hich=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button
buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY
toElement".split(" "),filter:function(e,n){var
r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.tar
get.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scroll
Left||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.client
Y+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.re
latedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.
which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:functi
on(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateT
ype:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur
(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(t
his,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:f
unction(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function
(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,
t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?
x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.p
reventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEv
entListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var
r="on"+t;e.detachEvent&&(typeof
e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this
instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefa
ultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getP
reventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeS
tamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefau
ltPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventD
efault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.prev
entDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var 
e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopP
ropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImme
diatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseove
r",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindT
ype:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i|
|i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),
e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function
(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit
keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName
(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._su
bmit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},pos
tDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode
&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:funct
ion(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x
.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(
this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this
,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&
(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._jus
t_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,
e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.targ
et;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._chan
ge",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("
change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:func
tion(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.
type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:
function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.su
pport.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var
n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.specia
l[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){
0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){v
ar a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in
e)this.on(a,n,r,e[a],o);return
this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof
n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return
1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.gu
id||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:fun
ction(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var
i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget)
.off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),thi
s;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return
this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(fu
nction(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(fu
nction(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var
r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(
?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,conte
nts:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var
t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter
(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++
)x.find(e,r[t],n);return
n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+"
"+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(functio
n(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return
this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(t
his,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof
e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var
n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0
;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index
(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return
this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return
e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):thi
s[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var
n="string"==typeof
e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return
this.pushStack(x.unique(r))},addBack:function(e){return
this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function
pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return
e}x.each({parent:function(e){var t=e.parentNode;return
t&&11!==t.nodeType?t:null},parents:function(e){return
x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return
x.dir(e,"parentNode",n)},next:function(e){return
pt(e,"nextSibling")},prev:function(e){return
pt(e,"previousSibling")},nextAll:function(e){return
x.dir(e,"nextSibling")},prevAll:function(e){return
x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return
x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return
x.dir(e,"previousSibling",n)},siblings:function(e){return
x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return
x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.co
ntentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t)
{x.fn[e]=function(n,r){var
i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x
.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())
),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=
":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x
.find.matches(e,x.grep(t,function(e){return
1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&
(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return
i},sibling:function(e,t){var
n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return
n}});function ft(e,t,n){if(x.isFunction(t))return
x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return
x.grep(e,function(e){return e===t!==n});if("string"==typeof
t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return
x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.spli
t("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createEl
ement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalis
t|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|
section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+
")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param
)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script
|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i
,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\
]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:
[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</
object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table
>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<tab
le><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",
""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At
.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.t
d,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.
text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNod
e(e))},null,e,arguments.length)},append:function(){return this.domManip(argument
s,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var
t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(argume
nts,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var
t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.do
mManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,thi
s)})},after:function(){return this.domManip(arguments,function(e){this.parentNod
e&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var 
n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cle
anData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")
),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null
!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.re
moveChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}
return this},clone:function(e,t){return
e=null==e?!1:e,t=null==t?e:t,this.map(function(){return
x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var
n=this[0]||{},r=0,i=this.length;if(e===t)return
1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)|
|!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)|
|At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{fo
r(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n
=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:f
unction(){var
e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return
this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==
i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.r
emove()},detach:function(e){return
this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,
c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=type
of h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(
r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragmen
t(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(
l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone
(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.lengt
h-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(
i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text|
|i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return
this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType
?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerD
ocument.createElement("tbody")):e}function Ht(e){return
e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var
t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function
_t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r
],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var
n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete
a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[
n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t
.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){
i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.e
xpando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.
parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim
(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaul
tChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?
t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t
.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",ins
ertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x
.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this
:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return
this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof
e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelector
All!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r
[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return
n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.de
faultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contai
ns(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nod
eName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.first
Child)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!=
=e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(
i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);el
se Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=nu
ll,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],
h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType
?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exe
c(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(
vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitesp
ace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="ta
ble"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childN
odes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.lengt
h&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)
s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.
removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h
++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.append
Child(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o
)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache
,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.ac
ceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in
a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle); u[o]&&(delete
u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p
.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"scrip
t",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isF
unction(e))return
this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,th
is[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0])
,t.map(function(){var
e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return
e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.
each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=
x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var
t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):
e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"bo
dy")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^
)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|tab
le(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")
(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={posi
tion:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWei
ght:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];functio
n tn(e,t){if(t in e)return t;var
n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t
in e)return t;return r}function nn(e,t){return
e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function
rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data
(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""=
==r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(
i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));fo
r(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display
||(r.style.display=t?o[a]||"":"none"));return
e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a=
{},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o
);return a}return
r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return
rn(this,!0)},hide:function(){return
rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide()
:this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssH
ooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}
}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity
:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support
.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&
&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l
]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return
s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exe
c(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"==
=a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle
||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in
s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var
o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x
.cssHooks[n]||x.cssHooks[l],s&&"get"in
s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===
r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt
=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var
i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||
x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.wid
th,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i
,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e)
{return e.currentStyle},Wt=function(e,n,r){var
i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(
l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyl
e.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a))
,""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return
r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"bo
rder":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n
+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&
&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"p
adding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function
sn(e,t,n){var
r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing
&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i
||null==i)&&(i=e.style[t]),Yt.test(i))return
i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return
i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var
t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe
frameborder='0' width='0' height='0'/>").css("cssText","display:block !important
")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).d
ocument,t.write("<!doctype
html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function
un(e,t){var
n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove
(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){
return
r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return
sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return
on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),
i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.te
st((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(
RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isN
umeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>
=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribut
e("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)
}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:fun
ction(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}})
,!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.
cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]
+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){retu
rn 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"
===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=functi
on(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Wid
th"},function(e,t){x.cssHooks[e+t]={expand:function(n){var
r=0,i={},o="string"==typeof n?n.split("
"):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return
i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,
dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)
/i;x.fn.extend({serialize:function(){return
x.param(this.serializeArray())},serializeArray:function(){return
this.map(function(){var e=x.prop(this,"elements");return
e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(t
his).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.te
st(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?
x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.nam
e,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=func
tion(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"
="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditiona
l),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,t
his.value)});else for(r in e)gn(r,e[r],n,o);return
i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t
,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof
i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in
t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize
scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout
mouseenter mouseleave change select submit keydown keypress keyup error
contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.len
gth>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){re
turn this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return
this.on(e,null,t,n)},unbind:function(e,t){return
this.off(e,null,t)},delegate:function(e,t,n,r){return
this.on(t,e,n,r)},undelegate:function(e,t,n){return
1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var
mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[
\t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget
):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|
)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.c
reateElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];functio
n Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLow
erCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)
||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function
qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return
o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof
c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return
s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var
r,i,o=x.ajaxSettings.flatOptions||{};for(i in
n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return
r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return
Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.sli
ce(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&
(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(functi
on(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).comple
te(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart
","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){
x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},et
ag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processDa
ta:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",ac
cepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml,
text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/ht
ml/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"res
ponseJSON"},converters:{"* text":String,"text html":!0,"text
json":x.parseJSON,"text
xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return
t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTran
sport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,
a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)
?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={
},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2
===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCas
e()]}return null==t?null:t},getAllResponseHeaders:function(){return
2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return
b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return
b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in
e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var
t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.succe
ss=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[
1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType
||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowe
rCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?
"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"s
tring"!=typeof
p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.g
lobal,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(
),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.tes
t(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn
,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o
]&&C.setRequestHeader("If-Modified-
Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o
])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeade
r("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.ac
cepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+";
q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]
);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return
C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn
,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=
setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(
N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var 
c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=
e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getR
esponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("e
tag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmod
ified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))
),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C
,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v])
,g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--
x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return
x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.e
ach(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&
(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function
Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===
t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in
l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in
r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return
a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var
i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCa
se()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseF
ields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift()
)if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in
u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i
]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else
try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from
"+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text
/javascript, application/javascript, application/ecmascript, application/x-ecmas
cript"},contents:{script:/(?:java|ecma)script/},converters:{"text
script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",functi
on(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.aj
axTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]|
|a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async
=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadys
tatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState)
)&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n)
,n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n
&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callb
ack",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return
this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var
o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof
n.data&&!(n.contentType||"").indexOf("application/x-www-form-
urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.j
sonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n
[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jso
np+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not c
alled"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always
(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFun
ction(a)&&a(s[0]),s=a=t}),"script"):t});var
Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in
Pn)Pn[e](t,!0)};function In(){try{return new
e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Micros
oft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!th
is.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCre
dentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.cros
sDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.
username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,
n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.over
rideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-
With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHead
er(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,
c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&d
elete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllRespon
seHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.sta
tusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?20
0:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r)
:(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},
abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp
("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[functio
n(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumbe
r[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=2
0;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do
s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return
i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function
Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(
Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))ret
urn r}function er(e,t,n){var
r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete
l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.du
ration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a]
.run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.p
romise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),origi
nalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:
[],createTween:function(t,n){var
r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return
u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return
this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejec
tWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[
o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&
u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})
),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail
).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCa
se(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete
e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in
e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t)
{x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)
n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e)
:Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.node
Type&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqu
eued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.u
nqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").l
ength||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overf
low=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"==
=x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?
p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.s
hrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.over
flow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete 
t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)
}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o
&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){
var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in
c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r
||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,
r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.ele
m=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.c
ur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var
e=rr.propHooks[this.prop];return
e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var
t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[thi
s.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this
.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.ele
m,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.
prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){va
r t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.c
ss(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.ste
p[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.pr
op]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.n
ow}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nod
eType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide
"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return
null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i
)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",
0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var
i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var
t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.fi
nish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){
var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof
e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0
,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[
n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n
].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(
t||!r)&&x.dequeue(this,e)})},finish:function(e){return
e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=
n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i
&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&
&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].fini
sh.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t
=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.
width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggl
e"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle
"}},function(e,t){x.fn[e]=function(e,n,r){return
this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.e
xtend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x
.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof
r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.spe
eds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.co
mplete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,
r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-M
ath.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){v
ar e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice
(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)
&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.
tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speed
s={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.
filters.animated=function(e){return x.grep(x.timers,function(t){return
e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return
e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var
n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return
n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.ge
tBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.client
Top||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offse
t={setOffset:function(e,t,n){var
r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i
.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.
inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=pa
rseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.to
p&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in
t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var 
e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundi
ngClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(
n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderL
eftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css
(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=
this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"positio
n"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop
:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return
x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.
documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()
):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e
:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"
width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function
(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof
i),s=r||(i===!0||o===!0?"margin":"border");return
x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElem
ent["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],
o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s
):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return
this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof
module&&module&&"object"==typeof
module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof
define&&define.amd&&define("jquery",[],function(){return x}))})(window);

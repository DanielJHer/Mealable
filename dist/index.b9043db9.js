function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},o={},i=t.parcelRequire83d1;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire83d1=i),i.register("27Lyk",(function(t,n){var r,o;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.b9043db9.js","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,d={};p=!f((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,v=Function.prototype.call;d=p?v.bind(v):function(){return v.apply(v,arguments)};var g={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,y=m&&!g.call({1:2},1);h=y?function(e){var t=m(this,e);return!!t&&t.enumerable}:g;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,O=S.bind,j=S.call,F=p&&O.bind(j,j),$=(E=p?function(e){return e&&F(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),L=E("".slice);w=function(e){return L($(e),8,-1)};var x=Object,M=E("".split);k=f((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?M(e,""):x(e)}:x;var P,T;T=function(e){return null==e};var I=TypeError;P=function(e){if(T(e))throw I("Can't call method on "+e);return e},_=function(e){return k(P(e))};var N,q,A,H={};A=function(e){return"function"==typeof e};var R="object"==typeof document&&document.all;H=void 0===R&&void 0!==R?function(e){return"object"==typeof e?null!==e:A(e)||e===R}:function(e){return"object"==typeof e?null!==e:A(e)};var C,z={},D=function(e){return A(e)?e:void 0};C=function(e,t){return arguments.length<2?D(c[e]):c[e]&&c[e][t]};var G={};G=E({}.isPrototypeOf);var U,B,W,J={};J=C("navigator","userAgent")||"";var V,Y,Q=c.process,K=c.Deno,X=Q&&Q.versions||K&&K.version,Z=X&&X.v8;Z&&(Y=(V=Z.split("."))[0]>0&&V[0]<4?1:+(V[0]+V[1])),!Y&&J&&(!(V=J.match(/Edge\/(\d+)/))||V[1]>=74)&&(V=J.match(/Chrome\/(\d+)/))&&(Y=+V[1]),W=Y,B=!!Object.getOwnPropertySymbols&&!f((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&W&&W<41})),U=B&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ee=Object;z=U?function(e){return"symbol"==typeof e}:function(e){var t=C("Symbol");return A(t)&&G(t.prototype,ee(e))};var te,ne,re,oe=String;re=function(e){try{return oe(e)}catch(e){return"Object"}};var ie=TypeError;ne=function(e){if(A(e))return e;throw ie(re(e)+" is not a function")},te=function(e,t){var n=e[t];return T(n)?void 0:ne(n)};var ae,se=TypeError;ae=function(e,t){var n,r;if("string"===t&&A(n=e.toString)&&!H(r=d(n,e)))return r;if(A(n=e.valueOf)&&!H(r=d(n,e)))return r;if("string"!==t&&A(n=e.toString)&&!H(r=d(n,e)))return r;throw se("Can't convert object to primitive value")};var ce;var ue,le={},fe=Object.defineProperty;ue=function(e,t){try{fe(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var pe=c["__core-js_shared__"]||ue("__core-js_shared__",{});le=pe,(ce=function(e,t){return le[e]||(le[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.25.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE",source:"https://github.com/zloirock/core-js"});var de,he={},ve=Object;de=function(e){return ve(P(e))};var ge=E({}.hasOwnProperty);he=Object.hasOwn||function(e,t){return ge(de(e),t)};var me,ye=0,be=Math.random(),_e=E(1..toString);me=function(e){return"Symbol("+(void 0===e?"":e)+")_"+_e(++ye+be,36)};var we=ce("wks"),ke=c.Symbol,Ee=ke&&ke.for,Se=U?ke:ke&&ke.withoutSetter||me,Oe=TypeError,je=function(e){if(!he(we,e)||!B&&"string"!=typeof we[e]){var t="Symbol."+e;B&&he(ke,e)?we[e]=ke[e]:we[e]=U&&Ee?Ee(t):Se(t)}return we[e]}("toPrimitive");q=function(e,t){if(!H(e)||z(e))return e;var n,r=te(e,je);if(r){if(void 0===t&&(t="default"),n=d(r,e,t),!H(n)||z(n))return n;throw Oe("Can't convert object to primitive value")}return void 0===t&&(t="number"),ae(e,t)},N=function(e){var t=q(e,"string");return z(t)?t:t+""};var Fe,$e,Le=c.document,xe=H(Le)&&H(Le.createElement);$e=function(e){return xe?Le.createElement(e):{}},Fe=!l&&!f((function(){return 7!=Object.defineProperty($e("div"),"a",{get:function(){return 7}}).a}));var Me,Pe,Te=Object.getOwnPropertyDescriptor,Ie=s=l?Te:function(e,t){if(e=_(e),t=N(t),Fe)try{return Te(e,t)}catch(e){}if(he(e,t))return b(!d(h,e,t),e[t])},Ne={};Pe=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var qe,Ae=String,He=TypeError;qe=function(e){if(H(e))return e;throw He(Ae(e)+" is not an object")};var Re=TypeError,Ce=Object.defineProperty,ze=Object.getOwnPropertyDescriptor;Me=l?Pe?function(e,t,n){if(qe(e),t=N(t),qe(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=ze(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ce(e,t,n)}:Ce:function(e,t,n){if(qe(e),t=N(t),qe(n),Fe)try{return Ce(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Re("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Ne=l?function(e,t,n){return Me(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var De,Ge,Ue=Function.prototype,Be=l&&Object.getOwnPropertyDescriptor,We=he(Ue,"name"),Je={EXISTS:We,PROPER:We&&"something"===function(){}.name,CONFIGURABLE:We&&(!l||l&&Be(Ue,"name").configurable)}.CONFIGURABLE,Ve={},Ye=E(Function.toString);A(le.inspectSource)||(le.inspectSource=function(e){return Ye(e)}),Ve=le.inspectSource;var Qe,Ke,Xe=c.WeakMap;Ke=A(Xe)&&/native code/.test(String(Xe));var Ze,et=ce("keys");Ze=function(e){return et[e]||(et[e]=me(e))};var tt={};tt={};var nt,rt,ot,it=c.TypeError,at=c.WeakMap;if(Ke||le.state){var st=le.state||(le.state=new at),ct=E(st.get),ut=E(st.has),lt=E(st.set);nt=function(e,t){if(ut(st,e))throw it("Object already initialized");return t.facade=e,lt(st,e,t),t},rt=function(e){return ct(st,e)||{}},ot=function(e){return ut(st,e)}}else{var ft=Ze("state");tt[ft]=!0,nt=function(e,t){if(he(e,ft))throw it("Object already initialized");return t.facade=e,Ne(e,ft,t),t},rt=function(e){return he(e,ft)?e[ft]:{}},ot=function(e){return he(e,ft)}}var pt=(Qe={set:nt,get:rt,has:ot,enforce:function(e){return ot(e)?rt(e):nt(e,{})},getterFor:function(e){return function(t){var n;if(!H(t)||(n=rt(t)).type!==e)throw it("Incompatible receiver, "+e+" required");return n}}}).enforce,dt=Qe.get,ht=Object.defineProperty,vt=l&&!f((function(){return 8!==ht((function(){}),"length",{value:8}).length})),gt=String(String).split("String"),mt=Ge=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!he(e,"name")||Je&&e.name!==t)&&(l?ht(e,"name",{value:t,configurable:!0}):e.name=t),vt&&n&&he(n,"arity")&&e.length!==n.arity&&ht(e,"length",{value:n.arity});try{n&&he(n,"constructor")&&n.constructor?l&&ht(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=pt(e);return he(r,"source")||(r.source=gt.join("string"==typeof t?t:"")),e};Function.prototype.toString=mt((function(){return A(this)&&dt(this).source||Ve(this)}),"toString"),De=function(e,t,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:t;if(A(n)&&Ge(n,i,r),r.global)o?e[t]=n:ue(t,n);else{try{r.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=n:Me(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var yt,bt,_t,wt,kt,Et={},St={},Ot=Math.ceil,jt=Math.floor;St=Math.trunc||function(e){var t=+e;return(t>0?jt:Ot)(t)},kt=function(e){var t=+e;return t!=t||0===t?0:St(t)};var Ft=Math.max,$t=Math.min;wt=function(e,t){var n=kt(e);return n<0?Ft(n+t,0):$t(n,t)};var Lt,xt,Mt=Math.min;xt=function(e){return e>0?Mt(kt(e),9007199254740991):0},Lt=function(e){return xt(e.length)};var Pt=function(e){return function(t,n,r){var o,i=_(t),a=Lt(i),s=wt(r,a);if(e&&n!=n){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===n)return e||s||0;return!e&&-1}},Tt={includes:Pt(!0),indexOf:Pt(!1)}.indexOf,It=E([].push);_t=function(e,t){var n,r=_(e),o=0,i=[];for(n in r)!he(tt,n)&&he(r,n)&&It(i,n);for(;t.length>o;)he(r,n=t[o++])&&(~Tt(i,n)||It(i,n));return i};var Nt,qt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");bt=Object.getOwnPropertyNames||function(e){return _t(e,qt)},Nt=Object.getOwnPropertySymbols;var At=E([].concat);Et=C("Reflect","ownKeys")||function(e){var t=bt(qe(e));return Nt?At(t,Nt(e)):t},yt=function(e,t,n){for(var r=Et(t),o=Me,i=s,a=0;a<r.length;a++){var c=r[a];he(e,c)||n&&he(n,c)||o(e,c,i(t,c))}};var Ht={},Rt=/#|\.prototype\./,Ct=function(e,t){var n=Dt[zt(e)];return n==Ut||n!=Gt&&(A(t)?f(t):!!t)},zt=Ct.normalize=function(e){return String(e).replace(Rt,".").toLowerCase()},Dt=Ct.data={},Gt=Ct.NATIVE="N",Ut=Ct.POLYFILL="P";Ht=Ct,a=function(e,t){var n,r,o,i,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||ue(s,{}):(c[s]||{}).prototype)for(r in t){if(i=t[r],o=e.dontCallGetSet?(a=Ie(n,r))&&a.value:n[r],!Ht(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;yt(i,o)}(e.sham||o&&o.sham)&&Ne(i,"sham",!0),De(n,r,i,e)}};var Bt,Wt={},Jt=Function.prototype,Vt=Jt.apply,Yt=Jt.call;Wt="object"==typeof Reflect&&Reflect.apply||(p?Yt.bind(Vt):function(){return Yt.apply(Vt,arguments)});var Qt,Kt=E(E.bind);Qt=function(e,t){return ne(e),void 0===t?e:p?Kt(e,t):function(){return e.apply(t,arguments)}};var Xt={};Xt=C("document","documentElement");var Zt={};Zt=E([].slice);var en,tn=TypeError;en=function(e,t){if(e<t)throw tn("Not enough arguments");return e};var nn;nn=/(?:ipad|iphone|ipod).*applewebkit/i.test(J);var rn;rn="process"==w(c.process);var on,an,sn,cn,un=c.setImmediate,ln=c.clearImmediate,fn=c.process,pn=c.Dispatch,dn=c.Function,hn=c.MessageChannel,vn=c.String,gn=0,mn={};try{on=c.location}catch(e){}var yn=function(e){if(he(mn,e)){var t=mn[e];delete mn[e],t()}},bn=function(e){return function(){yn(e)}},_n=function(e){yn(e.data)},wn=function(e){c.postMessage(vn(e),on.protocol+"//"+on.host)};un&&ln||(un=function(e){en(arguments.length,1);var t=A(e)?e:dn(e),n=Zt(arguments,1);return mn[++gn]=function(){Wt(t,void 0,n)},an(gn),gn},ln=function(e){delete mn[e]},rn?an=function(e){fn.nextTick(bn(e))}:pn&&pn.now?an=function(e){pn.now(bn(e))}:hn&&!nn?(cn=(sn=new hn).port2,sn.port1.onmessage=_n,an=Qt(cn.postMessage,cn)):c.addEventListener&&A(c.postMessage)&&!c.importScripts&&on&&"file:"!==on.protocol&&!f(wn)?(an=wn,c.addEventListener("message",_n,!1)):an="onreadystatechange"in $e("script")?function(e){Xt.appendChild($e("script")).onreadystatechange=function(){Xt.removeChild(this),yn(e)}}:function(e){setTimeout(bn(e),0)});var kn=(Bt={set:un,clear:ln}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==kn},{clearImmediate:kn});var En=Bt.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==En},{setImmediate:En});var Sn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new $(r||[]);return i._invoke=function(e,t,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return x()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};c(b,i,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==n&&r.call(w,i)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(o,i,a,s){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;F(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=Sn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Sn:Function("r","regeneratorRuntime = r")(Sn)}const On=async function(e){try{const n=fetch(e),r=await Promise.race([n,(t=10,new Promise((function(e,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${t} second`))}),1e3*t)})))]),o=await r.json();if(!r.ok)throw new Error(`${o.message} (${r.status})`);return o}catch(e){throw e}var t},jn={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},Fn=function(e=jn.search.page){jn.search.page=e;const t=(e-1)*jn.search.resultsPerPage,n=e*jn.search.resultsPerPage;return jn.search.results.slice(t,n)},$n=function(){localStorage.setItem("bookmarks",JSON.stringify(jn.bookmarks))};!function(){const e=localStorage.getItem("bookmarks");e&&(jn.bookmarks=JSON.parse(e))}();var Ln,xn,Mn,Pn;Ln=new URL(i("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Tn{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=o[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${n(Ln)}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${n(Ln)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${n(Ln)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,o=num.split(" ");if(o[0]&&(n=o[0]),o[1]&&(r=o[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var i=n.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(Mn=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},Pn=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(Mn(this.denominator)){var e=Pn(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}Mn(this.numerator)&&(e=Pn(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return r.forEach((function(e){var t=o.indexOf(e);t>=0&&(n.push(e),o.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},xn=Fraction;var In=new class extends Tn{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n(Ln)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n(Ln)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n              <svg>\n                <use href="${n(Ln)}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n              <svg>\n                <use href="${n(Ln)}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${n(Ln)}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${n(Ln)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n      </div>\n\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${n(Ln)}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    `}_generateMarkupIngredient(e){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${n(Ln)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity?new xn(e.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n  `}};var Nn=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var qn=new class extends Tn{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n              <use href="${n(Ln)}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `}};var An=new class extends Tn{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map((e=>qn.render(e,!1))).join("")}};var Hn=new class extends Tn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${n(Ln)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:e===t&&t>1?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${n(Ln)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n      `:e<t?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${n(Ln)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${e+1}</span>\n          <svg class="search__icon">\n            <use href="${n(Ln)}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `:""}};var Rn=new class extends Tn{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>qn.render(e,!1))).join("")}};const Cn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;In.renderSpinner(),An.update(Fn()),Rn.update(jn.bookmarks),await async function(e){try{const t=await On(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=22ff0140-74a9-4eb0-b618-2f487b2f35de`);jn.recipe=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}}(t),jn.bookmarks.some((t=>t.id===e))?jn.recipe.bookmarked=!0:jn.recipe.bookmarked=!1}catch(e){throw e}}(e),In.render(jn.recipe)}catch(e){In.renderError(),console.error(e)}},zn=async function(){try{An.renderSpinner();const e=Nn.getQuery();if(!e)return;await async function(e){try{jn.search.query=e;const t=await On(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=22ff0140-74a9-4eb0-b618-2f487b2f35de`);jn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),jn.search.page=1}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),An.render(Fn()),Hn.render(jn.search)}catch(e){console.log(e)}},Dn=function(e){An.render(Fn(e)),Hn.render(jn.search)},Gn=function(e){!function(e){jn.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/jn.recipe.servings})),jn.recipe.servings=e}(e),In.update(jn.recipe)},Un=function(){var e;jn.recipe.bookmarked?function(e){const t=jn.bookmarks.findIndex((t=>t.id===e));jn.bookmarks.splice(t,1),e===jn.recipe.id&&(jn.recipe.bookmarked=!1),$n()}(jn.recipe.id):(e=jn.recipe,jn.bookmarks.push(e),e.id===jn.recipe.id&&(jn.recipe.bookmarked=!0),$n()),In.update(jn.recipe),Rn.render(jn.bookmarks)},Bn=function(){Rn.render(jn.bookmarks)};Rn.addHandlerRender(Bn),In.addHandlerRender(Cn),In.addHandlerUpdateServings(Gn),In.addHandlerAddBookmark(Un),Nn.addHandlerSearch(zn),Hn.addHandlerClick(Dn),console.log("welcome to the application!");
//# sourceMappingURL=index.b9043db9.js.map

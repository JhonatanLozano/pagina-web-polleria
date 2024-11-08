"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{9691:(O,_,c)=>{c.d(_,{c:()=>r});var f=c(9230),a=c(1086),l=c(8607);const r=(n,i)=>{let t,o;const h=(s,u,E)=>{if(typeof document>"u")return;const w=document.elementFromPoint(s,u);w&&i(w)&&!w.disabled?w!==t&&(e(),d(w,E)):e()},d=(s,u)=>{t=s,o||(o=t);const E=t;(0,f.w)(()=>E.classList.add("ion-activated")),u()},e=(s=!1)=>{if(!t)return;const u=t;(0,f.w)(()=>u.classList.remove("ion-activated")),s&&o!==t&&t.click(),t=void 0};return(0,l.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:s=>h(s.currentX,s.currentY,a.a),onMove:s=>h(s.currentX,s.currentY,a.b),onEnd:()=>{e(!0),(0,a.h)(),o=void 0}})}},8438:(O,_,c)=>{c.d(_,{g:()=>a});var f=c(8476);const a=()=>{if(void 0!==f.w)return f.w.Capacitor}},5572:(O,_,c)=>{c.d(_,{c:()=>f,i:()=>a});const f=(l,r,n)=>"function"==typeof n?n(l,r):"string"==typeof n?l[n]===r[n]:Array.isArray(r)?r.includes(l):l===r,a=(l,r,n)=>void 0!==l&&(Array.isArray(l)?l.some(i=>f(i,r,n)):f(l,r,n))},464:(O,_,c)=>{c.d(_,{E:()=>d,a:()=>f});const f=e=>{try{if(e instanceof t)return e.value;if(!r()||"string"!=typeof e||""===e)return e;if(e.includes("onload="))return"";const s=document.createDocumentFragment(),u=document.createElement("div");s.appendChild(u),u.innerHTML=e,i.forEach(v=>{const m=s.querySelectorAll(v);for(let p=m.length-1;p>=0;p--){const y=m[p];y.parentNode?y.parentNode.removeChild(y):s.removeChild(y);const C=l(y);for(let g=0;g<C.length;g++)a(C[g])}});const E=l(s);for(let v=0;v<E.length;v++)a(E[v]);const w=document.createElement("div");w.appendChild(s);const M=w.querySelector("div");return null!==M?M.innerHTML:w.innerHTML}catch(s){return console.error(s),""}},a=e=>{if(e.nodeType&&1!==e.nodeType)return;if(typeof NamedNodeMap<"u"&&!(e.attributes instanceof NamedNodeMap))return void e.remove();for(let u=e.attributes.length-1;u>=0;u--){const E=e.attributes.item(u),w=E.name;if(!n.includes(w.toLowerCase())){e.removeAttribute(w);continue}const M=E.value,v=e[w];(null!=M&&M.toLowerCase().includes("javascript:")||null!=v&&v.toLowerCase().includes("javascript:"))&&e.removeAttribute(w)}const s=l(e);for(let u=0;u<s.length;u++)a(s[u])},l=e=>null!=e.children?e.children:e.childNodes,r=()=>{var e;const s=window,u=null===(e=null==s?void 0:s.Ionic)||void 0===e?void 0:e.config;return!u||(u.get?u.get("sanitizerEnabled",!0):!0===u.sanitizerEnabled||void 0===u.sanitizerEnabled)},n=["class","id","href","src","name","slot"],i=["script","style","iframe","meta","link","object","embed"];class t{constructor(s){this.value=s}}const d=!1},3351:(O,_,c)=>{c.d(_,{g:()=>f});const f=(i,t,o,h,d)=>l(i[1],t[1],o[1],h[1],d).map(e=>a(i[0],t[0],o[0],h[0],e)),a=(i,t,o,h,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*o*d+3*o+h*d))-i*Math.pow(d-1,3),l=(i,t,o,h,d)=>n((h-=d)-3*(o-=d)+3*(t-=d)-(i-=d),3*o-6*t+3*i,3*t-3*i,i).filter(s=>s>=0&&s<=1),n=(i,t,o,h)=>{if(0===i)return((i,t,o)=>{const h=t*t-4*i*o;return h<0?[]:[(-t+Math.sqrt(h))/(2*i),(-t-Math.sqrt(h))/(2*i)]})(t,o,h);const d=(3*(o/=i)-(t/=i)*t)/3,e=(2*t*t*t-9*t*o+27*(h/=i))/27;if(0===d)return[Math.pow(-e,1/3)];if(0===e)return[Math.sqrt(-d),-Math.sqrt(-d)];const s=Math.pow(e/2,2)+Math.pow(d/3,3);if(0===s)return[Math.pow(e/2,.5)-t/3];if(s>0)return[Math.pow(-e/2+Math.sqrt(s),1/3)-Math.pow(e/2+Math.sqrt(s),1/3)-t/3];const u=Math.sqrt(Math.pow(-d/3,3)),E=Math.acos(-e/(2*Math.sqrt(Math.pow(-d/3,3)))),w=2*Math.pow(u,1/3);return[w*Math.cos(E/3)-t/3,w*Math.cos((E+2*Math.PI)/3)-t/3,w*Math.cos((E+4*Math.PI)/3)-t/3]}},5083:(O,_,c)=>{c.d(_,{i:()=>f});const f=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(O,_,c)=>{c.r(_),c.d(_,{startFocusVisible:()=>r});const f="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=n=>{let i=[],t=!0;const o=n?n.shadowRoot:document,h=n||document.body,d=M=>{i.forEach(v=>v.classList.remove(f)),M.forEach(v=>v.classList.add(f)),i=M},e=()=>{t=!1,d([])},s=M=>{t=l.includes(M.key),t||d([])},u=M=>{if(t&&void 0!==M.composedPath){const v=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));d(v)}},E=()=>{o.activeElement===h&&d([])};return o.addEventListener("keydown",s),o.addEventListener("focusin",u),o.addEventListener("focusout",E),o.addEventListener("touchstart",e,{passive:!0}),o.addEventListener("mousedown",e),{destroy:()=>{o.removeEventListener("keydown",s),o.removeEventListener("focusin",u),o.removeEventListener("focusout",E),o.removeEventListener("touchstart",e),o.removeEventListener("mousedown",e)},setFocus:d}}},1086:(O,_,c)=>{c.d(_,{I:()=>a,a:()=>t,b:()=>o,c:()=>i,d:()=>d,h:()=>h});var f=c(8438),a=function(e){return e.Heavy="HEAVY",e.Medium="MEDIUM",e.Light="LIGHT",e}(a||{});const r={getEngine(){const e=(0,f.g)();if(null!=e&&e.isPluginAvailable("Haptics"))return e.Plugins.Haptics},available(){if(!this.getEngine())return!1;const s=(0,f.g)();return"web"!==(null==s?void 0:s.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(e){const s=this.getEngine();s&&s.impact({style:e.style})},notification(e){const s=this.getEngine();s&&s.notification({type:e.type})},selection(){this.impact({style:a.Light})},selectionStart(){const e=this.getEngine();e&&e.selectionStart()},selectionChanged(){const e=this.getEngine();e&&e.selectionChanged()},selectionEnd(){const e=this.getEngine();e&&e.selectionEnd()}},n=()=>r.available(),i=()=>{n()&&r.selection()},t=()=>{n()&&r.selectionStart()},o=()=>{n()&&r.selectionChanged()},h=()=>{n()&&r.selectionEnd()},d=e=>{n()&&r.impact(e)}},909:(O,_,c)=>{c.d(_,{I:()=>i,a:()=>d,b:()=>n,c:()=>u,d:()=>w,f:()=>e,g:()=>h,i:()=>o,p:()=>E,r:()=>M,s:()=>s});var f=c(467),a=c(4920),l=c(4929);const n="ion-content",i=".ion-content-scroll-host",t=`${n}, ${i}`,o=v=>"ION-CONTENT"===v.tagName,h=function(){var v=(0,f.A)(function*(m){return o(m)?(yield new Promise(p=>(0,a.c)(m,p)),m.getScrollElement()):m});return function(p){return v.apply(this,arguments)}}(),d=v=>v.querySelector(i)||v.querySelector(t),e=v=>v.closest(t),s=(v,m)=>o(v)?v.scrollToTop(m):Promise.resolve(v.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),u=(v,m,p,y)=>o(v)?v.scrollByPoint(m,p,y):Promise.resolve(v.scrollBy({top:p,left:m,behavior:y>0?"smooth":"auto"})),E=v=>(0,l.b)(v,n),w=v=>{if(o(v)){const p=v.scrollY;return v.scrollY=!1,p}return v.style.setProperty("overflow","hidden"),!0},M=(v,m)=>{o(v)?v.scrollY=m:v.style.removeProperty("overflow")}},3992:(O,_,c)=>{c.d(_,{a:()=>f,b:()=>u,c:()=>t,d:()=>E,e:()=>b,f:()=>i,g:()=>w,h:()=>l,i:()=>a,j:()=>g,k:()=>D,l:()=>o,m:()=>e,n:()=>M,o:()=>d,p:()=>n,q:()=>r,r:()=>C,s:()=>L,t:()=>s,u:()=>p,v:()=>y,w:()=>h,x:()=>v,y:()=>m});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(O,_,c)=>{c.d(_,{c:()=>r,g:()=>n});var f=c(8476),a=c(4920),l=c(4929);const r=(t,o,h)=>{let d,e;if(void 0!==f.w&&"MutationObserver"in f.w){const w=Array.isArray(o)?o:[o];d=new MutationObserver(M=>{for(const v of M)for(const m of v.addedNodes)if(m.nodeType===Node.ELEMENT_NODE&&w.includes(m.slot))return h(),void(0,a.r)(()=>s(m))}),d.observe(t,{childList:!0,subtree:!0})}const s=w=>{var M;e&&(e.disconnect(),e=void 0),e=new MutationObserver(v=>{h();for(const m of v)for(const p of m.removedNodes)p.nodeType===Node.ELEMENT_NODE&&p.slot===o&&E()}),e.observe(null!==(M=w.parentElement)&&void 0!==M?M:w,{subtree:!0,childList:!0})},E=()=>{e&&(e.disconnect(),e=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),E()}}},n=(t,o,h)=>{const d=null==t?0:t.toString().length,e=i(d,o);if(void 0===h)return e;try{return h(d,o)}catch(s){return(0,l.a)("Exception in provided `counterFormatter`.",s),e}},i=(t,o)=>`${t} / ${o}`},1622:(O,_,c)=>{c.r(_),c.d(_,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>v,keyboardDidOpen:()=>w,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>E,setKeyboardOpen:()=>u,startKeyboardAssist:()=>e,trackViewportChanges:()=>y});var f=c(4379);c(8438),c(8476);const r="ionKeyboardDidShow",n="ionKeyboardDidHide";let t={},o={},h=!1;const d=()=>{t={},o={},h=!1},e=g=>{if(f.K.getEngine())s(g);else{if(!g.visualViewport)return;o=C(g.visualViewport),g.visualViewport.onresize=()=>{y(g),w()||M(g)?u(g):v(g)&&E(g)}}},s=g=>{g.addEventListener("keyboardDidShow",D=>u(g,D)),g.addEventListener("keyboardDidHide",()=>E(g))},u=(g,D)=>{m(g,D),h=!0},E=g=>{p(g),h=!1},w=()=>!h&&t.width===o.width&&(t.height-o.height)*o.scale>150,M=g=>h&&!v(g),v=g=>h&&o.height===g.innerHeight,m=(g,D)=>{const b=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:g.innerHeight-o.height}});g.dispatchEvent(b)},p=g=>{const D=new CustomEvent(n);g.dispatchEvent(D)},y=g=>{t=Object.assign({},o),o=C(g.visualViewport)},C=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},4379:(O,_,c)=>{c.d(_,{K:()=>r,a:()=>l});var f=c(8438),a=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(a||{}),l=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(l||{});const r={getEngine(){const n=(0,f.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(i=>{if(i.code!==a.Unimplemented)throw i}):Promise.resolve(void 0)}}},4731:(O,_,c)=>{c.d(_,{c:()=>i});var f=c(467),a=c(8476),l=c(4379);const r=t=>{if(void 0===a.d||t===l.a.None||void 0===t)return null;const o=a.d.querySelector("ion-app");return null!=o?o:a.d.body},n=t=>{const o=r(t);return null===o?0:o.clientHeight},i=function(){var t=(0,f.A)(function*(o){let h,d,e,s;const u=function(){var m=(0,f.A)(function*(){const p=yield l.K.getResizeMode(),y=void 0===p?void 0:p.mode;h=()=>{void 0===s&&(s=n(y)),e=!0,E(e,y)},d=()=>{e=!1,E(e,y)},null==a.w||a.w.addEventListener("keyboardWillShow",h),null==a.w||a.w.addEventListener("keyboardWillHide",d)});return function(){return m.apply(this,arguments)}}(),E=(m,p)=>{o&&o(m,w(p))},w=m=>{if(0===s||s===n(m))return;const p=r(m);return null!==p?new Promise(y=>{const g=new ResizeObserver(()=>{p.clientHeight===s&&(g.disconnect(),y())});g.observe(p)}):void 0};return yield u(),{init:u,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",h),null==a.w||a.w.removeEventListener("keyboardWillHide",d),h=d=void 0},isKeyboardVisible:()=>e}});return function(h){return t.apply(this,arguments)}}()},7838:(O,_,c)=>{c.d(_,{c:()=>a});var f=c(467);const a=()=>{let l;return{lock:function(){var n=(0,f.A)(function*(){const i=l;let t;return l=new Promise(o=>t=o),void 0!==i&&(yield i),t});return function(){return n.apply(this,arguments)}}()}}},9001:(O,_,c)=>{c.d(_,{c:()=>l});var f=c(8476),a=c(4920);const l=(r,n,i)=>{let t;const o=()=>!(void 0===n()||void 0!==r.label||null===i()),d=()=>{const s=n();if(void 0===s)return;if(!o())return void s.style.removeProperty("width");const u=i().scrollWidth;if(0===u&&null===s.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==t)return;const E=t=new IntersectionObserver(w=>{1===w[0].intersectionRatio&&(d(),E.disconnect(),t=void 0)},{threshold:.01,root:r});E.observe(s)}else s.style.setProperty("width",.75*u+"px")};return{calculateNotchWidth:()=>{o()&&(0,a.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(O,_,c)=>{c.d(_,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(l,r,n)=>{const i=l*r/n-l+"ms",t=2*Math.PI*r/n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(l,r,n)=>{const i=r/n,t=l*i-l+"ms",o=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,r,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":l*r/n-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":l*r/n-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/n-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/n-l+"ms"}})}}},7166:(O,_,c)=>{c.r(_),c.d(_,{createSwipeBackGesture:()=>n});var f=c(4920),a=c(5083),l=c(8607);c(1970);const n=(i,t,o,h,d)=>{const e=i.ownerDocument.defaultView;let s=(0,a.i)(i);const E=p=>s?-p.deltaX:p.deltaX;return(0,l.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:p=>(s=(0,a.i)(i),(p=>{const{startX:C}=p;return s?C>=e.innerWidth-50:C<=50})(p)&&t()),onStart:o,onMove:p=>{const C=E(p)/e.innerWidth;h(C)},onEnd:p=>{const y=E(p),C=e.innerWidth,g=y/C,D=(p=>s?-p.velocityX:p.velocityX)(p),b=D>=0&&(D>.2||y>C/2),P=(b?1-g:g)*C;let A=0;if(P>5){const T=P/Math.abs(D);A=Math.min(T,540)}d(b,g<=0?.01:(0,f.j)(0,g,.9999),A)}})}},2935:(O,_,c)=>{c.d(_,{w:()=>f});const f=(r,n,i)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(o=>{i(a(o,n))});return t.observe(r,{childList:!0,subtree:!0}),t},a=(r,n)=>{let i;return r.forEach(t=>{for(let o=0;o<t.addedNodes.length;o++)i=l(t.addedNodes[o],n)||i}),i},l=(r,n)=>{if(1!==r.nodeType)return;const i=r;return(i.tagName===n.toUpperCase()?[i]:Array.from(i.querySelectorAll(n))).find(o=>o.value===i.value)}},7428:(O,_,c)=>{c.d(_,{u:()=>l});var f=c(5529),a=c(3953);let l=(()=>{var r;class n{constructor(){this.titulo=""}}return(r=n).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=a.VBU({type:r,selectors:[["app-header-ios"]],inputs:{titulo:"titulo"},standalone:!0,features:[a.aNF],decls:4,vars:1,consts:[["collapse","condense"],["color","rojo"],["size","large"]],template:function(t,o){1&t&&(a.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),a.EFF(3),a.k0s()()()),2&t&&(a.R7$(3),a.JRh(o.titulo))},dependencies:[f.eU,f.ai,f.BC]}),n})()},7988:(O,_,c)=>{c.d(_,{l:()=>l});var f=c(5529),a=c(3953);let l=(()=>{var r;class n{constructor(){this.titulo=""}}return(r=n).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=a.VBU({type:r,selectors:[["app-header"]],inputs:{titulo:"titulo"},standalone:!0,features:[a.aNF],decls:6,vars:2,consts:[[3,"translucent"],["color","rojo"],["slot","start"],["defaultHref","/","color","blanco"]],template:function(t,o){1&t&&(a.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),a.nrm(3,"ion-back-button",3),a.k0s(),a.j41(4,"ion-title"),a.EFF(5),a.k0s()()()),2&t&&(a.Y8G("translucent",!0),a.R7$(5),a.JRh(o.titulo))},dependencies:[f.eU,f.ai,f.BC,f.QW,f.el]}),n})()}}]);
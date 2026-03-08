/*! For license information please see 03d8db5012b9090d70ff.chunk.js.LICENSE.txt */
(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4779],{7452:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},l=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,l=Object.create(i.prototype),a=new Y(n||[]);return o(l,"_invoke",{value:E(e,r,a)}),l}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="suspendedYield",g="executing",f="completed",m={};function y(){}function v(){}function b(){}var w={};s(w,l,(function(){return this}));var S=Object.getPrototypeOf,k=S&&S(S(M([])));k&&k!==r&&n.call(k,l)&&(w=k);var x=b.prototype=y.prototype=Object.create(w);function C(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function A(e,t){function r(o,i,l,a){var c=d(e[o],e,i);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,l,a)}),(function(e){r("throw",e,l,a)})):t.resolve(u).then((function(e){s.value=e,l(s)}),(function(e){return r("throw",e,l,a)}))}a(c.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function E(e,r,n){var o=h;return function(i,l){if(o===g)throw new Error("Generator is already running");if(o===f){if("throw"===i)throw l;return{value:t,done:!0}}for(n.method=i,n.arg=l;;){var a=n.delegate;if(a){var c=N(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?f:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=f,n.method="throw",n.arg=s.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var l=i.arg;return l?l.done?(r[e.resultName]=l.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):l:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Y(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function M(e){if(null!=e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return v.prototype=b,o(x,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:v,configurable:!0}),v.displayName=s(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},C(A.prototype),s(A.prototype,a,(function(){return this})),e.AsyncIterator=A,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var l=new A(u(t,r,n,o),i);return e.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},C(x),s(x,c,"Generator"),s(x,l,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=M,Y.prototype={constructor:Y,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i],a=l.completion;if("root"===l.tryLoc)return o("end");if(l.tryLoc<=this.prev){var c=n.call(l,"catchLoc"),s=n.call(l,"finallyLoc");if(c&&s){if(this.prev<l.catchLoc)return o(l.catchLoc,!0);if(this.prev<l.finallyLoc)return o(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return o(l.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return o(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var l=i?i.completion:{};return l.type=e,l.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},35697:(e,t,r)=>{var n=r(75972).k5;e.exports.X=function(e){return n({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"}}]})(e)}},51545:(e,t,r)=>{"use strict";r.d(t,{Ht:()=>a,cG:()=>i});var n=r(70731),o=r.n(n);const i={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},l=(e,t)=>String(e.rankedValue).localeCompare(String(t.rankedValue));function a(e,t,r){void 0===r&&(r={});const{keys:n,threshold:o=i.MATCHES,baseSort:a=l,sorter:u=e=>e.sort(((e,t)=>s(e,t,a)))}=r,h=e.reduce((function(e,l,a){const s=function(e,t,r,n){if(!t)return{rankedValue:e,rank:c(e,r,n),keyIndex:-1,keyThreshold:n.threshold};const o=function(e,t){const r=[];for(let n=0,o=t.length;n<o;n++){const o=t[n],i=p(o),l=d(e,o);for(let e=0,t=l.length;e<t;e++)r.push({itemValue:l[e],attributes:i})}return r}(e,t);return o.reduce(((e,t,o)=>{let{rank:l,rankedValue:a,keyIndex:s,keyThreshold:u}=e,{itemValue:d,attributes:h}=t,p=c(d,r,n),g=a;const{minRanking:f,maxRanking:m,threshold:y}=h;return p<f&&p>=i.MATCHES?p=f:p>m&&(p=m),p>l&&(l=p,s=o,u=y,g=d),{rankedValue:g,rank:l,keyIndex:s,keyThreshold:u}}),{rankedValue:e,rank:i.NO_MATCH,keyIndex:-1,keyThreshold:n.threshold})}(l,n,t,r),{rank:u,keyThreshold:h=o}=s;return u>=h&&e.push({...s,item:l,index:a}),e}),[]);return u(h).map((e=>{let{item:t}=e;return t}))}function c(e,t,r){return e=u(e,r),(t=u(t,r)).length>e.length?i.NO_MATCH:e===t?i.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(t=t.toLowerCase())?i.EQUAL:e.startsWith(t)?i.STARTS_WITH:e.includes(` ${t}`)?i.WORD_STARTS_WITH:e.includes(t)?i.CONTAINS:1===t.length?i.NO_MATCH:function(e){let t="";return e.split(" ").forEach((e=>{e.split("-").forEach((e=>{t+=e.substr(0,1)}))})),t}(e).includes(t)?i.ACRONYM:function(e,t){let r=0,n=0;function o(e,t,n){for(let o=n,i=t.length;o<i;o++)if(t[o]===e)return r+=1,o+1;return-1}const l=o(t[0],e,0);if(l<0)return i.NO_MATCH;n=l;for(let r=1,l=t.length;r<l;r++)if(n=o(t[r],e,n),!(n>-1))return i.NO_MATCH;return function(e){const n=1/e,o=r/t.length;return i.MATCHES+o*n}(n-l)}(e,t)}function s(e,t,r){const{rank:n,keyIndex:o}=e,{rank:i,keyIndex:l}=t;return n===i?o===l?r(e,t):o<l?-1:1:n>i?-1:1}function u(e,t){let{keepDiacritics:r}=t;return e=`${e}`,r||(e=o()(e)),e}function d(e,t){let r;if("object"==typeof t&&(t=t.key),"function"==typeof t)r=t(e);else if(null==e)r=null;else if(Object.hasOwnProperty.call(e,t))r=e[t];else{if(t.includes("."))return function(e,t){const r=e.split(".");let n=[t];for(let e=0,t=r.length;e<t;e++){const t=r[e];let o=[];for(let e=0,r=n.length;e<r;e++){const r=n[e];if(null!=r)if(Object.hasOwnProperty.call(r,t)){const e=r[t];null!=e&&o.push(e)}else"*"===t&&(o=o.concat(r))}n=o}return Array.isArray(n[0])?[].concat(...n):n}(t,e);r=null}return null==r?[]:Array.isArray(r)?r:[String(r)]}a.rankings=i;const h={maxRanking:1/0,minRanking:-1/0};function p(e){return"string"==typeof e?h:{...h,...e}}},64779:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Ne,sanitizeHeaderId:()=>Se});var n=r(2404),o=r.n(n),i=r(38221),l=r.n(i),a=r(62193),c=r.n(a),s=r(2445),u=r(96540),d=r(21671),h=r(61573),p=r(69856),g=r(77796),f=r(35697),m=r(46942),y=r.n(m),v=r(7683),b=r(50290),w=r(74098),S=r(17437),k=r(58083),x=r(31463),C=r(90924),A=r(7566),E=r(95021),N=r(28392),O=r(17355),T=r(36492),Y=r(28827),M=r(95018),$=r(26067),I=r(13341),P=r(14103),F=r(39822),z=r(35709),R=r(29248),H=r(96254),L=r(85173),D=r(67413),B=r(32885),j=r(51545),U=r(76576);r(7452);const _=new Map;function G({count:e,value:t,onChange:r,onBlur:n,inputRef:o}){return(0,s.FD)(N.A,{direction:"horizontal",size:4,className:"dt-global-filter",children:["Search",(0,s.Y)(O.A,{size:"small",ref:o,placeholder:`${e} records...`,value:t,onChange:r,onBlur:n,className:"form-control input-sm"})]})}const W=(0,u.memo)((function({preGlobalFilteredRows:e,filterValue:t="",searchInput:r,setGlobalFilter:n,id:o="",serverPagination:i,rowCount:l}){const a=i?l:e.length,c=(0,u.useRef)(null),[d,h]=function(e,t,r=200){const[n,o]=(0,u.useState)(e),i=(0,u.useRef)(e),l=(0,B.useAsyncDebounce)(t,r);return i.current!==e&&(i.current=e,n!==e&&o(e)),[n,e=>{o(e),l(e)}]}(t,(e=>{n(e||void 0)}),200);(0,u.useEffect)((()=>{var e;i&&_.get(o)&&document.activeElement!==c.current&&(null==(e=c.current)||e.focus())}),[d,i]);const p=r||G;return(0,s.Y)(p,{count:a,value:d,inputRef:c,onChange:e=>{const t=e.target;e.preventDefault(),_.set(o,!0),h(t.value)},onBlur:()=>{_.set(o,!1)}})}));var V=r(20259);function X({current:e,options:t,onChange:r}){const{Option:n}=T.A;return(0,s.FD)("span",{className:"dt-select-page-size form-inline",children:[(0,w.t)("Show")," ",(0,s.Y)(T.A,{value:e,onChange:e=>r(e),size:"small",css:e=>S.AH`
          width: ${18*e.sizeUnit}px;
        `,children:t.map((e=>{const[t,r]=Array.isArray(e)?e:[e,e],o=0===t?(0,w.t)("all"):t;return(0,s.Y)(n,{value:Number(t),"aria-label":(0,w.t)("Show %s entries",o),children:r},t)}))})," ",(0,w.t)("entries")]})}function K(e){return Array.isArray(e)?e[0]:e}const Q=(0,u.memo)((function({total:e,options:t,current:r,selectRenderer:n,onChange:o}){const i=t.map(K);let l=[...t];void 0===r||r===e&&i.includes(0)||i.includes(r)||(l=[...t],l.splice(i.findIndex((e=>e>r)),0,(0,V.u)([r])[0]));const a=void 0===r?i[0]:r,c=n||X;return(0,s.Y)(c,{current:a,options:l,onChange:o})})),Z=(0,u.memo)((0,u.forwardRef)((function({style:e,pageCount:t,currentPage:r=0,maxPageItemCount:n=9,onPageChange:o},i){const l=function(e,t,r){if(r<7)throw new Error("Must allow at least 7 page items");if(r%2==0)throw new Error("Must allow odd number of page items");if(e<r)return[...new Array(e).keys()];const n=Math.max(0,Math.min(e-r,t-Math.floor(r/2))),o=new Array(r);for(let e=0;e<r;e+=1)o[e]=e+n;"number"==typeof o[0]&&o[0]>0&&(o[0]=0,o[1]="prev-more");const i=o[o.length-1];return"number"==typeof i&&i<e-1&&(o[o.length-1]=e-1,o[o.length-2]="next-more"),o}(t,r,n);return(0,s.Y)("div",{ref:i,className:"dt-pagination",style:e,children:(0,s.Y)("ul",{className:"pagination pagination-sm",children:l.map((e=>"number"==typeof e?(0,s.Y)("li",{className:r===e?"active":void 0,children:(0,s.Y)("a",{href:`#page-${e}`,role:"button",onClick:t=>{t.preventDefault(),o(e)},children:e+1})},e):(0,s.Y)("li",{className:"dt-pagination-ellipsis",children:(0,s.Y)("span",{children:"…"})},e)))})})})));let J;const q=e=>e.join("\n");function ee(e=!1){if("undefined"==typeof document)return 0;if(void 0===J||e){const e=document.createElement("div"),t=document.createElement("div");e.style.cssText=q`
      width: auto;
      height: 100%;
      overflow: scroll;
    `,t.style.cssText=q`
      position: absolute;
      visibility: hidden;
      overflow: hidden;
      width: 100px;
      height: 50px;
    `,t.append(e),document.body.append(t),J=t.clientWidth-e.clientWidth,t.remove()}return J}var te;!function(e){e.Init="init",e.SetStickyState="setStickyState"}(te||(te={}));const re=(e,t)=>e+t,ne=(e,t)=>({style:{...e.props.style,...t}}),oe={tableLayout:"fixed"};function ie({sticky:e={},width:t,height:r,children:n,setStickyState:o}){const i=(0,b.DP)();if(!n||"table"!==n.type)throw new Error("<StickyWrap> must have only one <table> element as child");let l,a,c;if(u.Children.forEach(n.props.children,(e=>{e&&("thead"===e.type?l=e:"tbody"===e.type?a=e:"tfoot"===e.type&&(c=e))})),!l||!a)throw new Error("<table> in <StickyWrap> must contain both thead and tbody.");const d=(0,u.useMemo)((()=>{var e;return u.Children.toArray(null==(e=l)?void 0:e.props.children).pop().props.children.length}),[l]),h=(0,u.useRef)(null),p=(0,u.useRef)(null),g=(0,u.useRef)(null),f=(0,u.useRef)(null),m=(0,u.useRef)(null),y=ee(),{bodyHeight:v,columnWidths:w,hasVerticalScroll:k}=e,x=!w||e.width!==t||e.height!==r||e.setStickyState!==o;let C,A,E,N;(0,u.useLayoutEffect)((()=>{var e,n;if(!h.current)return;const i=h.current,l=i.clientHeight,a=p.current?p.current.clientHeight:0;if(!l)return;const c=i.parentNode.clientHeight,s=null==(e=i.childNodes)?void 0:e[(null==(n=i.childNodes)?void 0:n.length)-1||0].childNodes,u=Array.from(s).map((e=>{var t;return(null==(t=e.getBoundingClientRect())?void 0:t.width)||e.clientWidth})),[d,g]=function({width:e,height:t,innerHeight:r,innerWidth:n,scrollBarSize:o}){const i=r>t;return[i,n>e-(i?o:0)]}({width:t,height:r-l-a,innerHeight:c,innerWidth:u.reduce(re),scrollBarSize:y}),f=Math.min(r,g?c+y:c);o({hasVerticalScroll:d,hasHorizontalScroll:g,setStickyState:o,width:t,height:r,realHeight:f,tableHeight:c,bodyHeight:f-l-a,columnWidths:u})}),[t,r,o,y]);const O=S.AH`
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: ${i.colorFillQuaternary};
    }
    &::-webkit-scrollbar-thumb {
      background: ${i.colorFillSecondary};
      border-radius: ${i.borderRadiusSM}px;
      &:hover {
        background: ${i.colorFillTertiary};
      }
    }
    &::-webkit-scrollbar-corner {
      background: ${i.colorFillQuaternary};
    }
  `;if(x){const e=(0,u.cloneElement)(l,{ref:h}),t=c&&(0,u.cloneElement)(c,{ref:p});C=(0,s.Y)("div",{style:{height:r,overflow:"auto",visibility:"hidden",scrollbarGutter:"stable"},css:O,role:"presentation",children:(0,u.cloneElement)(n,{role:"presentation"},e,a,t)},"sizer")}const T=null==w?void 0:w.slice(0,d);if(T&&v){const r=(0,s.Y)("colgroup",{children:T.map(((e,t)=>(0,s.Y)("col",{width:e},t)))}),o=k?t-y:t;A=(0,s.FD)("div",{ref:g,style:{overflow:"hidden",width:o,boxSizing:"border-box"},role:"presentation",children:[(0,u.cloneElement)((0,u.cloneElement)(n,{role:"presentation"}),ne(n,oe),r,l),A]},"header"),E=c&&(0,s.FD)("div",{ref:f,style:{overflow:"hidden",width:o,boxSizing:"border-box"},role:"presentation",children:[(0,u.cloneElement)((0,u.cloneElement)(n,{role:"presentation"}),ne(n,oe),r,c),E]},"footer");const i=e=>{g.current&&(g.current.scrollLeft=e.currentTarget.scrollLeft),f.current&&(f.current.scrollLeft=e.currentTarget.scrollLeft)};N=(0,s.Y)("div",{ref:m,style:{height:v,overflow:"auto",scrollbarGutter:"stable",width:t,boxSizing:"border-box"},css:O,onScroll:e.hasHorizontalScroll?i:void 0,role:"presentation",children:(0,u.cloneElement)((0,u.cloneElement)(n,{role:"presentation"}),ne(n,oe),r,a)},"body")}return(0,s.FD)("div",{style:{width:t,height:e.realHeight||r,overflow:"hidden"},role:"table",children:[A,N,E,C]})}function le(e){const{dispatch:t,state:{sticky:r},data:n,page:o,rows:i,allColumns:l,getTableSize:a=()=>{}}=e,c=(0,u.useCallback)((e=>{t({type:te.SetStickyState,size:e})}),[t,a,o,i]);Object.assign(e,{setStickyState:c,wrapStickyTable:e=>{const{width:t,height:d}=function(e,t){const r=(0,u.useRef)();return(0,u.useLayoutEffect)((()=>{r.current=e})),(0,u.useMemo)((()=>{if(r.current)return e()}),[r.current,r.current===e,...t||[]])}(a,[a])||r,h=(0,u.useMemo)(e,[o,i,l]);return(0,u.useLayoutEffect)((()=>{t&&d||c()}),[t,d]),t&&d?0===n.length?h:(0,s.Y)(ie,{width:t,height:d,sticky:r,setStickyState:c,children:h}):null}})}function ae(e){e.useInstance.push(le),e.stateReducers.push(((e,t,r)=>{const n=t;if(n.type===te.Init)return{...e,sticky:{...null==r?void 0:r.sticky}};if(n.type===te.SetStickyState){const{size:t}=n;return t?{...e,sticky:{...null==r?void 0:r.sticky,...null==e?void 0:e.sticky,...n.size}}:{...e}}return e}))}ae.pluginName="useSticky";var ce=r(68235);const se=(0,b.I4)(T.A)`
  width: 120px;
  margin-right: 8px;
`,ue=function({value:e,onChange:t,searchOptions:r}){var n,o;return(0,s.Y)(se,{className:"search-select",value:e||(null!=(n=null==r||null==(o=r[0])?void 0:o.value)?n:""),options:r,onChange:t})},de={alphanumeric:(e,t,r)=>{const n=e.values[r],o=t.values[r];return n&&"string"==typeof n?o&&"string"==typeof o?n.localeCompare(o):1:-1}},he=(0,L.v)((function({tableClassName:e,columns:t,data:r,serverPaginationData:n,width:i="100%",height:l=300,pageSize:a=0,initialState:c={},pageSizeOptions:d=ce.x,maxPageItemCount:h=9,sticky:p,searchInput:g=!0,onServerPaginationChange:f,rowCount:m,selectPageSize:y,noResults:v="No data found",hooks:b,serverPagination:w,wrapperRef:S,onColumnOrderChange:k,renderGroupingHeaders:x,renderTimeComparisonDropdown:C,handleSortByChange:A,sortByFromParent:E=[],manualSearch:O=!1,onSearchChange:T,initialSearchText:Y,searchInputId:M,onSearchColChange:$,searchOptions:I,...P}){const F=[B.useGlobalFilter,B.useSortBy,B.usePagination,B.useColumnOrder,p?ae:[],b||[]].flat(),z=Object.keys((null==r?void 0:r[0])||{}),R=(0,D.Z)(z),H=w?m:r.length,L=(0,u.useRef)([]),_=(0,u.useRef)([a,H]),G=a>0&&H>0,V=G||!!g||C,X={...c,sortBy:w?E:L.current,pageSize:a>0?a:H||10},K=(0,u.useRef)(null),J=(0,u.useRef)(null),q=(0,u.useRef)(null),ee=S||K,te=JSON.stringify(n),re=(0,u.useCallback)((()=>{var e,t;if(ee.current)return{width:Number(i)||ee.current.clientWidth,height:(Number(l)||ee.current.clientHeight)-((null==(e=J.current)?void 0:e.clientHeight)||0)-((null==(t=q.current)?void 0:t.clientHeight)||0)}}),[l,i,ee,G,V,q,H,te]),ne=(0,u.useCallback)(((e,t,r)=>(0,j.Ht)(e,r,{keys:[...t,e=>t.map((t=>e.values[t])).join(" ")],threshold:j.cG.ACRONYM})),[]),{getTableProps:oe,getTableBodyProps:ie,prepareRow:le,headerGroups:se,footerGroups:he,page:pe,pageCount:ge,gotoPage:fe,preGlobalFilteredRows:me,setGlobalFilter:ye,setPageSize:ve,wrapStickyTable:be,setColumnOrder:we,allColumns:Se,state:{pageIndex:ke,pageSize:xe,globalFilter:Ce,sticky:Ae={},sortBy:Ee}}=(0,B.useTable)({columns:t,data:r,initialState:X,getTableSize:re,globalFilter:ne,sortTypes:de,autoResetSortBy:!o()(z,R),manualSortBy:!!w,...P},...F),Ne=(0,u.useCallback)((e=>{O&&T?T(e):ye(e)}),[O,T,ye]);(0,u.useEffect)((()=>{const e=(null==n?void 0:n.sortBy)||[];if(w&&!o()(Ee,e))if(Array.isArray(Ee)&&Ee.length>0){const[e]=Ee,r=t.find((t=>(null==t?void 0:t.id)===(null==e?void 0:e.id)));if(r&&"columnKey"in r){const t={...e,key:r.columnKey};A([t])}}else A([])}),[Ee]);const Oe=e=>{w&&f(0,e),(e||0!==H)&&ve(0===e?H:e)},Te="function"==typeof v?v(Ce):v,Ye=()=>(0,s.Y)("div",{className:"dt-no-results",children:Te});if(!t||0===t.length)return be?be(Ye):Ye();const Me=t.some((e=>!!e.Footer));let $e=-1;const Ie=e=>{const t=e.target;$e=Se.findIndex((e=>e.id===t.dataset.columnName)),e.dataTransfer.setData("text/plain",`${$e}`)},Pe=e=>{const t=e.target,r=Se.findIndex((e=>e.id===t.dataset.columnName));if(-1!==r){const e=Se.map((e=>e.id)),t=e.splice($e,1);e.splice(r,0,t[0]),we(e),null==k||k()}e.preventDefault()},Fe=()=>(0,s.FD)("table",{...oe({className:e}),children:[(0,s.FD)("thead",{children:[x?x():null,se.map((e=>{const{key:t,...r}=e.getHeaderGroupProps();return(0,s.Y)("tr",{...r,children:e.headers.map((e=>e.render("Header",{key:e.id,...e.getSortByToggleProps(),onDragStart:Ie,onDrop:Pe})))},t||e.id)}))]}),(0,s.Y)("tbody",{...ie(),children:pe&&pe.length>0?pe.map((e=>{le(e);const{key:t,...r}=e.getRowProps();return(0,s.Y)("tr",{...r,role:"row",children:e.cells.map((e=>e.render("Cell",{key:e.column.id})))},t||e.id)})):(0,s.Y)("tr",{children:(0,s.Y)("td",{className:"dt-no-results",colSpan:t.length,children:Te})})}),Me&&(0,s.Y)("tfoot",{children:he.map((e=>{const{key:t,...r}=e.getHeaderGroupProps();return(0,s.Y)("tr",{...r,role:"row",children:e.headers.map((e=>e.render("Footer",{key:e.id})))},t||e.id)}))})]});(_.current[0]!==a||0===a&&_.current[1]!==H)&&(_.current=[a,H],Oe(a));const ze=Ae.height?{}:{visibility:"hidden"};let Re=ge,He=xe,Le=ke,De=fe;if(w){var Be,je;const e=null!=(Be=null==n?void 0:n.pageSize)?Be:a;Re=Math.ceil(m/e),Number.isFinite(Re)||(Re=0),He=e,-1===d.findIndex((([e])=>e>=He))&&(He=0),Le=null!=(je=null==n?void 0:n.currentPage)?je:0,De=t=>f(t,e)}return(0,s.FD)("div",{ref:ee,style:{width:i,height:l},children:[V?(0,s.Y)("div",{ref:J,className:"form-inline dt-controls",children:(0,s.FD)(U.s,{wrap:!0,className:"row",align:"center",justify:"space-between",gap:"middle",children:[G?(0,s.Y)(Q,{total:H,current:He,options:d,selectRenderer:"boolean"==typeof y?void 0:y,onChange:Oe}):null,(0,s.FD)(U.s,{wrap:!0,align:"center",gap:"middle",children:[w&&(0,s.FD)(N.A,{size:"small",className:"search-select-container",children:[(0,s.Y)("span",{className:"search-by-label",children:"Search by:"}),(0,s.Y)(ue,{searchOptions:I,value:(null==n?void 0:n.searchColumn)||"",onChange:$})]}),g&&(0,s.Y)(W,{searchInput:"boolean"==typeof g?void 0:g,preGlobalFilteredRows:me,setGlobalFilter:O?Ne:ye,filterValue:O?Y:Ce,id:M,serverPagination:!!w,rowCount:m}),C?C():null]})]})}):null,be?be(Fe):Fe(),G&&Re>1?(0,s.Y)(Z,{ref:q,style:ze,maxPageItemCount:h,pageCount:Re,currentPage:Le,onPageChange:De}):null]})})),pe=b.I4.div`
  ${({theme:e})=>S.AH`
    /* Base table styles */
    table {
      width: 100%;
      min-width: auto;
      max-width: none;
      margin: 0;
      border-collapse: collapse;
    }

    /* Cell styling */
    th,
    td {
      min-width: 4.3em;
      padding: 0.75rem;
      vertical-align: top;
    }

    /* Header styling */
    thead > tr > th {
      padding-right: 0;
      position: relative;
      background-color: ${e.colorBgBase};
      text-align: left;
      border-bottom: 2px solid ${e.colorSplit};
      color: ${e.colorText};
      vertical-align: bottom;
    }

    /* Icons in header */
    th svg {
      margin: 1px ${e.sizeUnit/2}px;
      fill-opacity: 0.2;
    }

    th.is-sorted svg {
      color: ${e.colorText};
      fill-opacity: 1;
    }

    /* Table body styling */
    .table > tbody > tr:first-of-type > td,
    .table > tbody > tr:first-of-type > th {
      border-top: 0;
    }

    .table > tbody tr td {
      font-feature-settings: 'tnum' 1;
      border-top: 1px solid ${e.colorSplit};
    }

    /* Bootstrap-like condensed table styles */
    table.table-condensed,
    table.table-sm {
      font-size: ${e.fontSizeSM}px;
    }

    table.table-condensed th,
    table.table-condensed td,
    table.table-sm th,
    table.table-sm td {
      padding: 0.3rem;
    }

    /* Bootstrap-like bordered table styles */
    table.table-bordered {
      border: 1px solid ${e.colorSplit};
    }

    table.table-bordered th,
    table.table-bordered td {
      border: 1px solid ${e.colorSplit};
    }

    /* Bootstrap-like striped table styles */
    table.table-striped tbody tr:nth-of-type(odd) {
      background-color: ${e.colorBgLayout};
    }

    /* Controls and metrics */
    .dt-controls {
      padding-bottom: 0.65em;
    }

    .dt-metric {
      text-align: right;
    }

    .dt-totals {
      font-weight: ${e.fontWeightStrong};
    }

    .dt-is-null {
      color: ${e.colorTextTertiary};
    }

    td.dt-is-filter {
      cursor: pointer;
    }

    td.dt-is-filter:hover {
      background-color: ${e.colorPrimaryBgHover};
    }

    td.dt-is-active-filter,
    td.dt-is-active-filter:hover {
      background-color: ${e.colorPrimaryBgHover};
    }

    .dt-global-filter {
      float: right;
    }

    /* Cell truncation */
    .dt-truncate-cell {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dt-truncate-cell:hover {
      overflow: visible;
      white-space: normal;
      height: auto;
    }

    /* Pagination styling */
    .dt-pagination {
      text-align: right;
      /* use padding instead of margin so clientHeight can capture it */
      padding: ${e.paddingXXS}px 0px;
    }

    .dt-pagination .pagination > li {
      display: inline;
      margin: 0 ${e.marginXXS}px;
    }

    .dt-pagination .pagination > li > a,
    .dt-pagination .pagination > li > span {
      background-color: ${e.colorBgBase};
      color: ${e.colorText};
      border-color: ${e.colorBorderSecondary};
      padding: ${e.paddingXXS}px ${e.paddingXS}px;
      border-radius: ${e.borderRadius}px;
    }

    .dt-pagination .pagination > li.active > a,
    .dt-pagination .pagination > li.active > span,
    .dt-pagination .pagination > li.active > a:focus,
    .dt-pagination .pagination > li.active > a:hover,
    .dt-pagination .pagination > li.active > span:focus,
    .dt-pagination .pagination > li.active > span:hover {
      background-color: ${e.colorPrimary};
      color: ${e.colorBgContainer};
      border-color: ${e.colorBorderSecondary};
    }

    .pagination > li > span.dt-pagination-ellipsis:focus,
    .pagination > li > span.dt-pagination-ellipsis:hover {
      background: ${e.colorBgLayout};
      border-color: ${e.colorBorderSecondary};
    }

    .dt-no-results {
      text-align: center;
      padding: 1em 0.6em;
    }

    .right-border-only {
      border-right: 2px solid ${e.colorSplit};
    }

    table .right-border-only:last-child {
      border-right: none;
    }
  `}
`;var ge=r(40984),fe=r(29898),me=r(42879);function ye(e,t){const{dataType:r,formatter:n,config:o={}}=e,i=r===v.s.Numeric,l=void 0===o.d3SmallNumberFormat?n:o.currencyFormat?new ge.A({d3Format:o.d3SmallNumberFormat,currency:o.currencyFormat}):(0,fe.gV)(o.d3SmallNumberFormat);return function(e,t){return void 0===t?[!1,""]:null===t||t instanceof me.A&&null===t.input?[!1,"N/A"]:e?[!1,e(t)]:"string"==typeof t?(0,A.fE)(t)?[!0,(0,A.pn)(t)]:[!1,t]:[!1,t.toString()]}(i&&"number"==typeof t&&Math.abs(t)<1?l:n,t)}var ve=r(25766);const be={enter:"Enter",spacebar:"Spacebar",space:" "};function we(e){return e===v.s.Temporal?"datetime":e===v.s.String?"alphanumeric":"basic"}function Se(e){return e.replace(/%/g,"percent").replace(/#/g,"hash").replace(/△/g,"delta").replace(/\s+/g,"_").replace(/[^a-zA-Z0-9_-]/g,"_").replace(/_+/g,"_").replace(/^_+|_+$/g,"")}function ke({column:e}){const{isSorted:t,isSortedDesc:r}=e;let n=(0,s.Y)(p.M,{});return t&&(n=r?(0,s.Y)(g.G,{}):(0,s.Y)(f.X,{})),n}const xe=b.I4.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;function Ce({count:e,value:t,onChange:r,onBlur:n,inputRef:o}){return(0,s.FD)(N.A,{direction:"horizontal",size:4,className:"dt-global-filter",children:[(0,w.t)("Search"),(0,s.Y)(O.A,{"aria-label":(0,w.t)("Search %s records",e),placeholder:(0,w.tn)("%s record","%s records...",e,e),value:t,onChange:r,onBlur:n,ref:o})]})}function Ae({options:e,current:t,onChange:r}){const{Option:n}=T.A;return(0,s.FD)("span",{className:"dt-select-page-size",children:[(0,s.Y)(xe,{htmlFor:"pageSizeSelect",children:(0,w.t)("Select page size")}),(0,w.t)("Show")," ",(0,s.Y)(T.A,{id:"pageSizeSelect",value:t,onChange:e=>r(e),size:"small",css:e=>S.AH`
          width: ${18*e.sizeUnit}px;
        `,"aria-label":(0,w.t)("Show entries per page"),children:e.map((e=>{const[t,r]=Array.isArray(e)?e:[e,e];return(0,s.Y)(n,{value:Number(t),children:r},t)}))})," ",(0,w.t)("entries per page")]})}const Ee=e=>e?(0,w.t)("No matching records found"):(0,w.t)("No records found");function Ne(e){const{timeGrain:t,height:r,width:n,data:i,totals:a,isRawRecords:p,rowCount:g=0,columns:f,alignPositiveNegative:m=!1,colorPositiveNegative:v=!1,includeSearch:N=!1,pageSize:O=0,serverPagination:T=!1,serverPaginationData:L,setDataMask:D,showCellBars:B=!0,sortDesc:j=!1,filters:U,sticky:_=!0,columnColorFormatters:G,allowRearrangeColumns:W=!1,allowRenderHtml:V=!0,onContextMenu:X,emitCrossFilters:K,isUsingTimeComparison:Q,basicColorFormatters:Z,basicColorColumnFormatters:J,hasServerPageLengthChanged:q,serverPageLength:te,slice_id:re}=e,ne=(0,u.useMemo)((()=>[{key:"all",label:(0,w.t)("Display all")},{key:"#",label:"#"},{key:"△",label:"△"},{key:"%",label:"%"}]),[]),oe=(0,u.useCallback)((e=>(0,k.PT)(t)(e)),[t]),[ie,le]=(0,u.useState)({width:0,height:0}),[ae,se]=(0,u.useState)(!1),[ue,de]=(0,u.useState)(!1),[ge,fe]=(0,u.useState)([ne[0].key]),[xe,Ne]=(0,u.useState)([]),Oe=(0,b.DP)(),Te=(0,u.useMemo)((()=>(T?ce.D:ce.x).filter((([e])=>T?(e=>e<=g)(e):e<=2*i.length))),[i.length,g,T]),Ye=(0,u.useCallback)((function(e,t){const r=null==i?void 0:i.map((t=>null==t?void 0:t[e])).filter((e=>"number"==typeof e));return i&&r.length===i.length?t?[0,(0,d.A)(r.map(Math.abs))]:(0,h.A)(r):null}),[i]),Me=(0,u.useCallback)((function(e,t){var r;return!!U&&(null==(r=U[e])?void 0:r.includes(t))}),[U]),$e=(0,u.useCallback)(((e,r)=>{let n={...U||{}};n=U&&Me(e,r)?{}:{[e]:[r]},Array.isArray(n[e])&&0===n[e].length&&delete n[e];const o=Object.keys(n),i=Object.values(n),l=[];return o.forEach((e=>{var t;const r=e===x.Tf,o=(0,C.A)(null==(t=n)?void 0:t[e]);if(o.length){const e=o.map((e=>r?oe(e):e));l.push(`${e.join(", ")}`)}})),{dataMask:{extraFormData:{filters:0===o.length?[]:o.map((e=>{var r;const o=(0,C.A)(null==(r=n)?void 0:r[e]);return o.length?{col:e,op:"IN",val:o.map((e=>e instanceof Date?e.getTime():e)),grain:e===x.Tf?t:void 0}:{col:e,op:"IS NULL"}}))},filterState:{label:l.join(", "),value:i.length?i:null,filters:n&&Object.keys(n).length?n:null}},isCurrentValueSelected:Me(e,r)}}),[U,Me,oe,t]),Ie=(0,u.useCallback)((function(e,t){K&&D($e(e,t).dataMask)}),[K,$e,D]),Pe=(0,u.useCallback)((e=>{const{isNumeric:t,config:r={}}=e;return{textAlign:r.horizontalAlign||(t&&!Q?"right":"left")}}),[Q]),Fe=(0,u.useMemo)((()=>[(0,w.t)("Main"),"#","△","%"]),[]),ze=(0,u.useMemo)((()=>{if(!Q)return f;const e=ne[0].key,t=Fe[0],r=ge.includes(e);return f.filter((({label:e,key:n})=>{const o=n.substring(e.length),i=xe.includes(o);return e===t||!i&&(!Fe.includes(e)||r||ge.includes(e))}))}),[f,ne,Fe,Q,xe,ge]),Re=(0,u.useMemo)((()=>{if(X&&!p)return(e,t,r,n)=>{const o=[];ze.forEach((t=>{if(!t.isMetric){let r=e[t.key];r=(0,A.y4)(r),o.push({col:t.key,op:"==",val:r,formattedVal:ye(t,r)[1]})}})),X(r,n,{drillToDetail:o,crossFilter:t.isMetric?void 0:$e(t.key,t.value),drillBy:t.isMetric?void 0:{filters:[{col:t.key,op:"==",val:(0,A.y4)(t.value)}],groupbyFieldName:"groupby"}})}}),[X,p,ze,$e]),He=(0,u.useCallback)(((e,t)=>{const r={};return t?(e.forEach(((e,t)=>{if(Fe.includes(e.label)){const n=e.key.substring(e.label.length);r[n]?r[n].push(t):r[n]=[t]}})),r):r}),[Fe]),Le=(0,u.useMemo)((()=>He(ze,Q)),[ze,He,Q]),De=(0,u.useCallback)(((e,t)=>{var r;const{key:n,label:o,isNumeric:i,dataType:l,isMetric:c,isPercentMetric:u,config:d={}}=e,h=d.customColumnName||o;let g=h;["#","△","%",(0,w.t)("Main")].includes(e.label)&&(e.label===(0,w.t)("Main")?g=d.customColumnName||e.originalLabel||"":d.customColumnName?g=!1!==d.displayTypeIcon?`${e.label} ${d.customColumnName}`:d.customColumnName:!1===d.displayTypeIcon&&(g=""));const f=Number.isNaN(Number(d.columnWidth))?d.columnWidth:Number(d.columnWidth),k=Pe(e),x=void 0===d.alignPositiveNegative?m:d.alignPositiveNegative,C=void 0===d.colorPositiveNegative?v:d.colorPositiveNegative,{truncateLongCells:A}=d,N=i&&Array.isArray(G)&&G.length>0,O=Q&&Array.isArray(Z)&&Z.length>0,T=!O&&!N&&(void 0===d.showCellBars?B:d.showCellBars)&&(c||p||u)&&Ye(n,x);let Y="";if(K&&!c&&(Y+=" dt-is-filter"),c||u){if(Fe.includes(h)){const e=n.substring(h.length),r=Le[e]||[];t===r[r.length-1]&&(Y+=" right-border-only")}}else Y+=" right-border-only";const $=Se(null!=(r=e.originalLabel)?r:e.key);return{id:String(t),columnKey:n,accessor:e=>e[n],Cell:({value:t,row:r})=>{var o;const[i,l]=ye(e,t),a=i&&V?{__html:l}:void 0;let u,d="";const h=e.key.substring(e.label.length).trim();var p,g,m,v;!N&&O&&(u=null==(p=Z[r.index][h])?void 0:p.backgroundColor,d=e.label===Fe[0]?null==(g=Z[r.index][h])?void 0:g.mainArrow:""),N&&G.filter((t=>t.column===e.key)).forEach((e=>{const r=!(!t&&0!==t)&&e.getColorFromValue(t);r&&(u=r)})),J&&(null==J?void 0:J.length)>0&&(u=(null==(m=J[r.index][e.key])?void 0:m.backgroundColor)||u,d=e.label===Fe[0]?null==(v=J[r.index][e.key])?void 0:v.mainArrow:"");const w=b.I4.td`
            color: ${Oe.colorText};
            text-align: ${k.textAlign};
            white-space: ${t instanceof Date?"nowrap":void 0};
            position: relative;
            background: ${u||void 0};
            padding-left: ${e.isChildColumn?5*Oe.sizeUnit+"px":`${Oe.sizeUnit}px`};
          `,M=S.AH`
            position: absolute;
            height: 100%;
            display: block;
            top: 0;
            ${T&&`\n                width: ${function({value:e,valueRange:t,alignPositiveNegative:r}){const[n,o]=t;if(r)return Math.abs(Math.round(e/o*100));const i=Math.abs(Math.max(o,0))+Math.abs(Math.min(n,0));return Math.round(Math.abs(e)/i*100)}({value:t,valueRange:T,alignPositiveNegative:x})}%;\n                left: ${function({value:e,valueRange:t,alignPositiveNegative:r}){if(r)return 0;const[n,o]=t,i=Math.abs(Math.max(o,0)),l=Math.abs(Math.min(n,0)),a=i+l;return Math.round(Math.min(l+e,l)/a*100)}({value:t,valueRange:T,alignPositiveNegative:x})}%;\n                background-color: ${function({value:e,colorPositiveNegative:t=!1,theme:r}){return t?e<0?`${r.colorError}50`:`${r.colorSuccess}50`:`${r.colorFill}`}({value:t,colorPositiveNegative:C,theme:Oe})};\n              `}
          `;let I=S.AH`
            color: ${Z&&(null==(o=Z[r.index][h])?void 0:o.arrowColor)===H.m.Green?Oe.colorSuccess:Oe.colorError};
            margin-right: ${Oe.sizeUnit}px;
          `;var P;J&&(null==J?void 0:J.length)>0&&(I=S.AH`
              color: ${(null==(P=J[r.index][e.key])?void 0:P.arrowColor)===H.m.Green?Oe.colorSuccess:Oe.colorError};
              margin-right: ${Oe.sizeUnit}px;
            `);const F={"aria-labelledby":`header-${$}`,role:"cell",title:"number"==typeof t?String(t):void 0,onClick:!K||T||c?void 0:()=>{(0,E.j)()||Ie(n,t)},onContextMenu:e=>{Re&&(e.preventDefault(),e.stopPropagation(),Re(r.original,{key:n,value:t,isMetric:c},e.nativeEvent.clientX,e.nativeEvent.clientY))},className:[Y,null==t||t instanceof me.A&&null==t.input?"dt-is-null":"",Me(n,t)?" dt-is-active-filter":""].join(" "),tabIndex:0};return a?A?(0,s.Y)(w,{...F,children:(0,s.Y)("div",{className:"dt-truncate-cell",style:f?{width:f}:void 0,dangerouslySetInnerHTML:a})}):(0,s.Y)(w,{...F,dangerouslySetInnerHTML:a}):(0,s.FD)(w,{...F,children:[T&&(0,s.Y)("div",{className:y()("cell-bar","number"==typeof t&&t<0?"negative":"positive"),css:M,role:"presentation"}),A?(0,s.FD)("div",{className:"dt-truncate-cell",style:f?{width:f}:void 0,children:[d&&(0,s.Y)("span",{css:I,children:d}),l]}):(0,s.FD)(s.FK,{children:[d&&(0,s.Y)("span",{css:I,children:d}),l]})]})},Header:({column:e,onClick:t,style:r,onDragStart:n,onDrop:o})=>(0,s.FD)("th",{id:`header-${$}`,title:(0,w.t)("Shift + Click to sort by multiple columns"),className:[Y,e.isSorted?"is-sorted":""].join(" "),style:{...k,...r},onKeyDown:t=>{Object.values(be).includes(t.key)&&e.toggleSortBy()},role:"columnheader button",onClick:t,"data-column-name":e.id,...W&&{draggable:"true",onDragStart:n,onDragOver:e=>e.preventDefault(),onDragEnter:e=>e.preventDefault(),onDrop:o},tabIndex:0,children:[d.columnWidth?(0,s.Y)("div",{style:{width:f,height:.01}}):null,(0,s.FD)("div",{"data-column-name":e.id,css:{display:"inline-flex",alignItems:"flex-end"},children:[(0,s.Y)("span",{"data-column-name":e.id,children:g}),(0,s.Y)(ke,{column:e})]})]}),Footer:a?0===t?(0,s.Y)("th",{children:(0,s.FD)("div",{css:S.AH`
                  display: flex;
                  align-items: center;
                  & svg {
                    margin-left: ${Oe.sizeUnit}px;
                    color: ${Oe.colorBorder} !important;
                  }
                `,children:[(0,w.t)("Summary"),(0,s.Y)(M.m,{overlay:(0,w.t)("Show total aggregations of selected metrics. Note that row limit does not apply to the result."),children:(0,s.Y)(R.A,{})})]})},`footer-summary-${t}`):(0,s.Y)("td",{style:k,children:(0,s.Y)("strong",{children:ye(e,a[n])[1]})},`footer-total-${t}`):void 0,sortDescFirst:j,sortType:we(l)}}),[Pe,m,v,G,Q,Z,B,p,Ye,K,Fe,a,Oe,j,Le,V,J,Me,Ie,Re,W]),Be=(0,u.useMemo)((()=>ze.filter((e=>{var t;return!1!==(null==(t=e.config)?void 0:t.visible)}))),[ze]),je=(0,u.useMemo)((()=>Be.map(De)),[Be,De]),[Ue,_e]=(0,u.useState)([]);(0,u.useEffect)((()=>{const e=je.filter((e=>"alphanumeric"===(null==e?void 0:e.sortType))).map((e=>({value:e.columnKey,label:e.columnKey})));o()(e,Ue)||_e(e||[])}),[je,Ue]);const Ge=(0,u.useCallback)(((e,t)=>{const r={...L,currentPage:e,pageSize:t};(0,ve.F)(D,r)}),[L,D]);(0,u.useEffect)((()=>{if(q){const e={...L,currentPage:0,pageSize:te};(0,ve.F)(D,e)}}),[q,te,L,D]);const We=(0,u.useCallback)((({width:e,height:t})=>{le({width:e,height:t})}),[]);(0,u.useLayoutEffect)((()=>{const e=ee(),{width:t,height:o}=ie;n-t>e||r-o>e?We({width:n-e,height:r-e}):(t-n>e||o-r>e)&&We({width:n,height:r})}),[n,r,We,ie]);const{width:Ve,height:Xe}=ie,Ke=(0,u.useCallback)((e=>{if(!T)return;const t={...L,sortBy:e};(0,ve.F)(D,t)}),[T,L,D]),Qe=l()((e=>{var t;const r={...L||{},searchColumn:(null==L?void 0:L.searchColumn)||(null==(t=Ue[0])?void 0:t.value),searchText:e,currentPage:0};(0,ve.F)(D,r)}),800);return(0,s.Y)(pe,{children:(0,s.Y)(he,{columns:je,data:i,rowCount:g,tableClassName:"table table-striped table-condensed",pageSize:O,serverPaginationData:L,pageSizeOptions:Te,width:Ve,height:Xe,serverPagination:T,onServerPaginationChange:Ge,onColumnOrderChange:()=>se(!ae),initialSearchText:(null==L?void 0:L.searchText)||"",sortByFromParent:(null==L?void 0:L.sortBy)||[],searchInputId:`${re}-search`,maxPageItemCount:n>340?9:7,noResults:Ee,searchInput:N&&Ce,selectPageSize:null!==O&&Ae,sticky:_,renderGroupingHeaders:c()(Le)?void 0:()=>{const e=[];let t=0;return Object.entries(Le||{}).forEach((([r,n])=>{var o;const i=n[0],l=n.length,a=ze[i],c=a&&(null==(o=f.find((e=>e.key===a.key)))?void 0:o.originalLabel)||r;for(let r=t;r<i;r+=1)e.push((0,s.Y)("th",{style:{borderBottom:0},"aria-label":`Header-${r}`},`placeholder-${r}`));e.push((0,s.FD)("th",{colSpan:l,style:{borderBottom:0},children:[c,(0,s.Y)("span",{css:S.AH`
              float: right;
              & svg {
                color: ${Oe.colorIcon} !important;
              }
            `,children:xe.includes(r)?(0,s.Y)(F.A,{onClick:()=>Ne(xe.filter((e=>e!==r)))}):(0,s.Y)(z.A,{onClick:()=>Ne([...xe,r])})})]},`header-${r}`)),t=i+l})),(0,s.Y)("tr",{css:S.AH`
          th {
            border-right: 1px solid ${Oe.colorSplit};
          }
          th:first-child {
            border-left: none;
          }
          th:last-child {
            border-right: none;
          }
        `,children:e})},renderTimeComparisonDropdown:Q?()=>{const e=ne[0].key;return(0,s.Y)(Y.ms,{placement:"bottomRight",open:ue,onOpenChange:e=>{de(e)},menu:{multiple:!0,onClick:t=>{const{key:r}=t;r===e?fe([e]):ge.includes(e)?fe([r]):fe(ge.includes(r)?ge.filter((e=>e!==r)):[...ge,r])},onBlur:()=>{3===ge.length&&fe([ne[0].key])},selectedKeys:ge,items:[{key:"all",label:(0,s.Y)("div",{css:S.AH`
                    max-width: 242px;
                    padding: 0 ${2*Oe.sizeUnit}px;
                    color: ${Oe.colorText};
                    font-size: ${Oe.fontSizeSM}px;
                  `,children:(0,w.t)("Select columns that will be displayed in the table. You can multiselect columns.")}),type:"group",children:ne.map((e=>({key:e.key,label:(0,s.FD)(s.FK,{children:[(0,s.Y)("span",{css:S.AH`
                          color: ${Oe.colorText};
                        `,children:e.label}),(0,s.Y)("span",{css:S.AH`
                          float: right;
                          font-size: ${Oe.fontSizeSM}px;
                        `,children:ge.includes(e.key)&&(0,s.Y)($.A,{})})]})})))}]},trigger:["click"],children:(0,s.FD)("span",{children:[(0,s.Y)(I.A,{})," ",(0,s.Y)(P.A,{})]})})}:void 0,handleSortByChange:Ke,onSearchColChange:e=>{if(!o()(e,null==L?void 0:L.searchColumn)){const t={...L||{},searchColumn:e,searchText:""};(0,ve.F)(D,t)}},manualSearch:T,onSearchChange:Qe,searchOptions:Ue})})}},69856:(e,t,r)=>{var n=r(75972).k5;e.exports.M=function(e){return n({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"}}]})(e)}},70731:e=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ả:"A",Ạ:"A",Ẩ:"A",Ẫ:"A",Ậ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ể:"E",Ễ:"E",Ệ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ỉ:"I",Ị:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ỏ:"O",Ọ:"O",Ổ:"O",Ỗ:"O",Ộ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ớ:"O",Ợ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ủ:"U",Ụ:"U",Ử:"U",Ữ:"U",Ự:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ả:"a",ạ:"a",ẩ:"a",ẫ:"a",ậ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ẻ:"e",ẽ:"e",ẹ:"e",ể:"e",ễ:"e",ệ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ỉ:"i",ị:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ỏ:"o",ọ:"o",ổ:"o",ỗ:"o",ộ:"o",ờ:"o",ở:"o",ỡ:"o",ớ:"o",ợ:"o",ù:"u",ú:"u",û:"u",ü:"u",ủ:"u",ụ:"u",ử:"u",ữ:"u",ự:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z",й:"и",Й:"И",ё:"е",Ё:"Е"},r=Object.keys(t).join("|"),n=new RegExp(r,"g"),o=new RegExp(r,"");function i(e){return t[e]}var l=function(e){return e.replace(n,i)};e.exports=l,e.exports.has=function(e){return!!e.match(o)},e.exports.remove=l},75972:(e,t,r)=>{"use strict";r.d(t,{k5:()=>s});var n=r(96540),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return n.createElement(u,l({attr:l({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,o=e.attr,i=e.size,c=e.title,s=a(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},77796:(e,t,r)=>{var n=r(75972).k5;e.exports.G=function(e){return n({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"}}]})(e)}},85173:(e,t,r)=>{"use strict";r.d(t,{v:()=>n});const n=r(96540).memo},95021:(e,t,r)=>{"use strict";r.d(t,{j:()=>n});const n=()=>{var e;return null==(e=window.getSelection())?void 0:e.toString()}}}]);
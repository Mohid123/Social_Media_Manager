(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ECCn:function(e,t){function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){var i=e[t];"object"!=typeof i||Object.isFrozen(i)||n(i)}),e}var i=n;i.default=n;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...t){const n=Object.create(null);for(const i in e)n[i]=e[i];return t.forEach(function(e){for(const t in e)n[t]=e[t]}),n}const o=e=>!!e.kind;class l{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=a(e)}openNode(e){if(!o(e))return;let t=e.kind;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{c._collapse(e)}))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}const d=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,h="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",f={begin:"\\\\[\\s\\S]",relevance:0},p={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[f]},m={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[f]},b={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},E=function(e,t,n={}){const i=s({className:"comment",begin:e,end:t,contains:[]},n);return i.contains.push(b),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),i},x=E("//","$"),w=E("/\\*","\\*/"),v=E("#","$");var y=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:h,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>g(e)).join("")}(t,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:f,APOS_STRING_MODE:p,QUOTE_STRING_MODE:m,PHRASAL_WORDS_MODE:b,COMMENT:E,C_LINE_COMMENT_MODE:x,C_BLOCK_COMMENT_MODE:w,HASH_COMMENT_MODE:v,NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{className:"number",begin:h,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:"\\b(0b[01]+)",relevance:0},CSS_NUMBER_MODE:{className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[f,{begin:/\[/,end:/\]/,relevance:0,contains:[f]}]}]},TITLE_MODE:{className:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function N(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function R(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=N,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function _(e,t){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map(e=>g(e)).join("|")+")"}(...e.illegal))}function k(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function M(e,t){void 0===e.relevance&&(e.relevance=1)}const O=["of","and","for","in","not","or","if","then","parent","list","value"];function A(e,t,n="keyword"){const i={};return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach(function(n){Object.assign(i,A(e[n],t,n))}),i;function r(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach(function(t){const n=t.split("|");i[n[0]]=[e,L(n[0],n[1])]})}}function L(e,t){return t?Number(t):function(e){return O.includes(e.toLowerCase())}(e)?0:1}function I(e,{}){function t(t,n){return new RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=t(function(e,t="|"){let n=0;return e.map(e=>{n+=1;const t=n;let i=g(e),r="";for(;i.length>0;){const e=d.exec(i);if(!e){r+=i;break}r+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+t):(r+=e[0],"("===e[0]&&n++)}return r}).map(e=>`(${e})`).join(t)}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex((e,t)=>t>0&&void 0!==e),i=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function n(r,a){const o=r;if(r.isCompiled)return o;[k].forEach(e=>e(r,a)),e.compilerExtensions.forEach(e=>e(r,a)),r.__beforeBegin=null,[R,_,M].forEach(e=>e(r,a)),r.isCompiled=!0;let l=null;if("object"==typeof r.keywords&&(l=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=A(r.keywords,e.case_insensitive)),r.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l=l||r.lexemes||/\w+/,o.keywordPatternRe=t(l,!0),a&&(r.begin||(r.begin=/\B|\b/),o.beginRe=t(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(o.endRe=t(r.end)),o.terminatorEnd=g(r.end)||"",r.endsWithParent&&a.terminatorEnd&&(o.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(o.illegalRe=t(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return s(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:j(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?r:e)})),r.contains.forEach(function(e){n(e,o)}),r.starts&&n(r.starts,a),o.matcher=function(e){const t=new i;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(o),o}(e)}function j(e){return!!e&&(e.endsWithParent||j(e.starts))}function B(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,a(this.code);let t={};return this.autoDetect?(t=e.highlightAuto(this.code),this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),t.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const T={"after:highlightElement":({el:e,result:t,text:n})=>{const i=P(e);if(!i.length)return;const r=document.createElement("div");r.innerHTML=t.value,t.value=function(e,t,n){let i=0,r="";const s=[];function o(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){r+="<"+S(e)+[].map.call(e.attributes,function(e){return" "+e.nodeName+'="'+a(e.value)+'"'}).join("")+">"}function c(e){r+="</"+S(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||t.length;){let t=o();if(r+=a(n.substring(i,t[0].offset)),i=t[0].offset,t===e){s.reverse().forEach(c);do{u(t.splice(0,1)[0]),t=o()}while(t===e&&t.length&&t[0].offset===i);s.reverse().forEach(l)}else"start"===t[0].event?s.push(t[0].node):s.pop(),u(t.splice(0,1)[0])}return r+a(n.substr(i))}(i,P(r),n)}};function S(e){return e.nodeName.toLowerCase()}function P(e){const t=[];return function e(n,i){for(let r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?i+=r.nodeValue.length:1===r.nodeType&&(t.push({event:"start",offset:i,node:r}),i=e(r,i),S(r).match(/br|hr|img|input/)||t.push({event:"stop",offset:i,node:r}));return i}(e,0),t}const C={},D=e=>{console.error(e)},H=(e,...t)=>{console.log("WARN: "+e,...t)},$=(e,t)=>{C[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),C[`${e}/${t}`]=!0)},U=a,z=s,K=Symbol("nomatch");var G=function(e){const t=Object.create(null),n=Object.create(null),a=[];let s=!0;const o=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function d(e){return g.noHighlightRe.test(e)}function h(e,t,n,i){let r="",a="";"object"==typeof t?(r=e,n=t.ignoreIllegals,a=t.language,i=void 0):($("10.7.0","highlight(lang, code, ...args) has been deprecated."),$("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),a=e,r=t);const s={code:r,language:a};M("before:highlight",s);const o=s.result?s.result:f(s.language,s.code,n,i);return o.code=s.code,M("after:highlight",o),o}function f(e,n,i,o){function c(e,t){const n=w.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function u(){null!=N.subLanguage?function(){if(""===M)return;let e=null;if("string"==typeof N.subLanguage){if(!t[N.subLanguage])return void k.addText(M);e=f(N.subLanguage,M,!0,_[N.subLanguage]),_[N.subLanguage]=e.top}else e=p(M,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(O+=e.relevance),k.addSublanguage(e.emitter,e.language)}():function(){if(!N.keywords)return void k.addText(M);let e=0;N.keywordPatternRe.lastIndex=0;let t=N.keywordPatternRe.exec(M),n="";for(;t;){n+=M.substring(e,t.index);const i=c(N,t);if(i){const[e,r]=i;k.addText(n),n="",O+=r,e.startsWith("_")?n+=t[0]:k.addKeyword(t[0],w.classNameAliases[e]||e)}else n+=t[0];e=N.keywordPatternRe.lastIndex,t=N.keywordPatternRe.exec(M)}n+=M.substr(e),k.addText(n)}(),M=""}function d(e){return e.className&&k.openNode(w.classNameAliases[e.className]||e.className),N=Object.create(e,{parent:{value:N}}),N}function h(e,t,n){let i=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,n);if(i){if(e["on:end"]){const n=new r(e);e["on:end"](t,n),n.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,t,n)}function m(e){return 0===N.matcher.regexIndex?(M+=e[0],1):(j=!0,0)}function b(e){const t=e[0],i=n.substr(e.index),r=h(N,e,i);if(!r)return K;const a=N;a.skip?M+=t:(a.returnEnd||a.excludeEnd||(M+=t),u(),a.excludeEnd&&(M=t));do{N.className&&k.closeNode(),N.skip||N.subLanguage||(O+=N.relevance),N=N.parent}while(N!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),d(r.starts)),a.returnEnd?0:t.length}let E={};function x(t,a){const o=a&&a[0];if(M+=t,null==o)return u(),0;if("begin"===E.type&&"end"===a.type&&E.index===a.index&&""===o){if(M+=n.slice(a.index,a.index+1),!s){const t=new Error("0 width match regex");throw t.languageName=e,t.badRule=E.rule,t}return 1}if(E=a,"begin"===a.type)return function(e){const t=e[0],n=e.rule,i=new r(n),a=[n.__beforeBegin,n["on:begin"]];for(const r of a)if(r&&(r(e,i),i.isMatchIgnored))return m(t);return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),n.skip?M+=t:(n.excludeBegin&&(M+=t),u(),n.returnBegin||n.excludeBegin||(M=t)),d(n),n.returnBegin?0:t.length}(a);if("illegal"===a.type&&!i){const e=new Error('Illegal lexeme "'+o+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===a.type){const e=b(a);if(e!==K)return e}if("illegal"===a.type&&""===o)return 1;if(L>1e5&&L>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return M+=o,o.length}const w=R(e);if(!w)throw D(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');const v=I(w,{plugins:a});let y="",N=o||v;const _={},k=new g.__emitter(g);!function(){const e=[];for(let t=N;t!==w;t=t.parent)t.className&&e.unshift(t.className);e.forEach(e=>k.openNode(e))}();let M="",O=0,A=0,L=0,j=!1;try{for(N.matcher.considerAll();;){L++,j?j=!1:N.matcher.considerAll(),N.matcher.lastIndex=A;const e=N.matcher.exec(n);if(!e)break;const t=x(n.substring(A,e.index),e);A=e.index+t}return x(n.substr(A)),k.closeAllNodes(),k.finalize(),y=k.toHTML(),{relevance:Math.floor(O),value:y,language:e,illegal:!1,emitter:k,top:N}}catch(B){if(B.message&&B.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:B.message,context:n.slice(A-100,A+100),mode:B.mode},sofar:y,relevance:0,value:U(n),emitter:k};if(s)return{illegal:!1,relevance:0,value:U(n),emitter:k,language:e,top:N,errorRaised:B};throw B}}function p(e,n){n=n||g.languages||Object.keys(t);const i=function(e){const t={relevance:0,emitter:new g.__emitter(g),value:U(e),illegal:!1,top:c};return t.emitter.addText(e),t}(e),r=n.filter(R).filter(k).map(t=>f(t,e,!1));r.unshift(i);const a=r.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(R(e.language).supersetOf===t.language)return 1;if(R(t.language).supersetOf===e.language)return-1}return 0}),[s,o]=a,l=s;return l.second_best=o,l}const m={"before:highlightElement":({el:e})=>{g.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result:e})=>{g.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},b=/^(<[^>]+>|\t)+/gm,E={"after:highlightElement":({result:e})=>{g.tabReplace&&(e.value=e.value.replace(b,e=>e.replace(/\t/g,g.tabReplace)))}};function x(e){let t=null;const i=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=g.languageDetectRe.exec(t);if(n){const t=R(n[1]);return t||(H(l.replace("{}",n[1])),H("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find(e=>d(e)||R(e))}(e);if(d(i))return;M("before:highlightElement",{el:e,language:i}),t=e;const r=t.textContent,a=i?h(r,{language:i,ignoreIllegals:!0}):p(r);M("after:highlightElement",{el:e,result:a,text:r}),e.innerHTML=a.value,function(e,t,i){const r=t?n[t]:i;e.classList.add("hljs"),r&&e.classList.add(r)}(e,i,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const w=()=>{w.called||(w.called=!0,$("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(x))};let v=!1;function N(){"loading"!==document.readyState?document.querySelectorAll("pre code").forEach(x):v=!0}function R(e){return e=(e||"").toLowerCase(),t[e]||t[n[e]]}function _(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach(e=>{n[e.toLowerCase()]=t})}function k(e){const t=R(e);return t&&!t.disableAutodetect}function M(e,t){const n=e;a.forEach(function(e){e[n]&&e[n](t)})}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){v&&N()},!1),Object.assign(e,{highlight:h,highlightAuto:p,highlightAll:N,fixMarkup:function(e){return $("10.2.0","fixMarkup will be removed entirely in v11.0"),$("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),t=e,g.tabReplace||g.useBR?t.replace(o,e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e):t;var t},highlightElement:x,highlightBlock:function(e){return $("10.7.0","highlightBlock will be removed entirely in v12.0"),$("10.7.0","Please use highlightElement now."),x(e)},configure:function(e){e.useBR&&($("10.3.0","'useBR' will be removed entirely in v11.0"),$("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=z(g,e)},initHighlighting:w,initHighlightingOnLoad:function(){$("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),v=!0},registerLanguage:function(n,i){let r=null;try{r=i(e)}catch(a){if(D("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw a;D(a),r=c}r.name||(r.name=n),t[n]=r,r.rawDefinition=i.bind(null,e),r.aliases&&_(r.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e];for(const t of Object.keys(n))n[t]===e&&delete n[t]},listLanguages:function(){return Object.keys(t)},getLanguage:R,registerAliases:_,requireLanguage:function(e){$("10.4.0","requireLanguage will be removed entirely in v11."),$("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const t=R(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:k,inherit:z,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),a.push(e)},vuePlugin:B(e).VuePlugin}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.7.2";for(const r in y)"object"==typeof y[r]&&i(y[r]);return Object.assign(e,y),e.addPlugin(m),e.addPlugin(T),e.addPlugin(E),e}({});e.exports=G}}]);
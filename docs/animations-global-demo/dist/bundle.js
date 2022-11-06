!function(){"use strict";function e(n,t){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},e(n,t)}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var t=Array.isArray;function r(e){var n=typeof e;return"string"===n||"number"===n}function i(e){return void 0===e||null===e}function o(e){return null===e||!1===e||!0===e||void 0===e}function a(e){return"function"===typeof e}function l(e){return"string"===typeof e}function u(e){return null===e}function c(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var i in n)t[i]=n[i];return t}function s(e){return!u(e)&&"object"===typeof e}var f={},d=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function p(e){return e.substring(2).toLowerCase()}function v(e,n){e.appendChild(n)}function h(e,n,t){u(t)?v(e,n):e.insertBefore(n,t)}function m(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}function g(e,n,t){e.replaceChild(n,t)}function y(e,n){e.removeChild(n)}function b(e){for(var n=0;n<e.length;n++)e[n]()}function k(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function C(e,n){for(var t;e;){if(1521&(t=e.flags))return e.dom;e=k(e,n,t)}return null}function $(e,n){for(var t,r=e.length;void 0!==(t=e.pop());)t((function(){--r<=0&&a(n)&&n()}))}function w(e){for(var n=0;n<e.length;n++)e[n].fn();for(var t=0;t<e.length;t++){var r=e[t];h(r.parent,r.dom,r.next)}e.splice(0,e.length)}function A(e,n,t){do{var r=e.flags;if(1521&r)return void(t&&e.dom.parentNode!==n||y(n,e.dom));var i=e.children;if(4&r&&(e=i.$LI),8&r&&(e=i),8192&r){if(2!==e.childFlags){for(var o=0,a=i.length;o<a;++o)A(i[o],n,!1);return}e=i}}while(e)}function S(e,n){return function(){A(e,n,!0)}}function P(e,n,t){t.componentWillDisappear.length>0?$(t.componentWillDisappear,S(e,n)):A(e,n,!1)}function N(e,n,t,r,i,o,a,l){e.componentWillMove.push({dom:r,fn:function(){4&a?t.componentWillMove(n,i,r):8&a&&t.onComponentWillMove(n,i,r,l)},next:o,parent:i})}function T(e,n,t,r,o){var l,u,c=n.flags;do{var s=n.flags;if(1521&s)return void(i(l)||!a(l.componentWillMove)&&!a(l.onComponentWillMove)?h(t,n.dom,r):N(o,e,l,n.dom,t,r,c,u));var f=n.children;if(4&s)l=n.children,u=n.props,n=f.$LI;else if(8&s)l=n.ref,u=n.props,n=f;else if(8192&s){if(2!==n.childFlags){for(var d=0,p=f.length;d<p;++d)T(e,f[d],t,r,o);return}n=f}}while(n)}function x(e,n,t){if(e.constructor.getDerivedStateFromProps)return c(t,e.constructor.getDerivedStateFromProps(n,t));return t}var I={v:!1},D={componentComparator:null,createVNode:null,renderComplete:null};function F(e,n){e.textContent=n}function E(e,n){return s(e)&&e.event===n.event&&e.data===n.data}function L(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function M(e,n){return!!a(e)&&(e(n),!0)}var U="$";function V(e,n,t,r,i,o,a,l){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===i?null:i,this.props=void 0===o?null:o,this.ref=void 0===a?null:a,this.type=l}function W(e,n,t,r,i,o,a,l){var u=void 0===i?1:i,c=new V(u,r,t,e,a,o,l,n);return 0===u&&z(c,c.children),c}function R(e,n,t){if(4&e)return t;var r=(32768&e?n.render:n).defaultHooks;if(i(r))return t;if(i(t))return r;return L(t,r)}function O(e,n,t){var r=(32768&e?n.render:n).defaultProps;if(i(r))return t;if(i(t))return c(r,null);return L(t,r)}function B(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}function _(e,n,t,r,i){return new V(1,null,null,e=B(e,n),r,O(e,n,t),R(e,n,i),n)}function j(e,n){return new V(1,i(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function K(e,n,t){var r=W(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=q(),r.childFlags=2;break;case 16:r.children=[j(e)],r.childFlags=4}return r}function H(e){var n=e.children,t=e.childFlags;return K(2===t?G(n):n.map(G),t,e.key)}function G(e){var n=-16385&e.flags,t=e.props;if(14&n&&!u(t)){var r=t;for(var i in t={},r)t[i]=r[i]}if(0===(8192&n))return new V(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return H(e)}function q(){return j("",null)}function Q(e,n,i,a){for(var c=e.length;i<c;i++){var s=e[i];if(!o(s)){var f=a+U+i;if(t(s))Q(s,n,0,f);else{if(r(s))s=j(s,f);else{var d=s.key,p=l(d)&&d[0]===U;(81920&s.flags||p)&&(s=G(s)),s.flags|=65536,p?d.substring(0,a.length)!==a&&(s.key=a+d):u(d)?s.key=f:s.key=a+d}n.push(s)}}}}function X(e){switch(e){case"svg":return 32;case"input":return 64;case"select":return 256;case"textarea":return 128;case"$F":return 8192;default:return 1}}function z(e,n){var i,a=1;if(o(n))i=n;else if(r(n))a=16,i=n;else if(t(n)){for(var c=n.length,s=0;s<c;++s){var f=n[s];if(o(f)||t(f)){i=i||n.slice(0,s),Q(n,i,s,"");break}if(r(f))(i=i||n.slice(0,s)).push(j(f,U+s));else{var d=f.key,p=(81920&f.flags)>0,v=u(d),h=l(d)&&d[0]===U;p||v||h?(i=i||n.slice(0,s),(p||h)&&(f=G(f)),(v||h)&&(f.key=U+s),i.push(f)):i&&i.push(f),f.flags|=65536}}a=0===(i=i||n).length?1:8}else(i=n).flags|=65536,81920&n.flags&&(i=G(n)),a=2;return e.children=i,e.childFlags=a,e}function Z(e){if(o(e)||r(e))return j(e,null);if(t(e))return K(e,0,null);return 16384&e.flags?G(e):e}var J="http://www.w3.org/1999/xlink",Y="http://www.w3.org/XML/1998/namespace",ee={"xlink:actuate":J,"xlink:arcrole":J,"xlink:href":J,"xlink:role":J,"xlink:show":J,"xlink:title":J,"xlink:type":J,"xml:base":Y,"xml:lang":Y,"xml:space":Y};function ne(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var te=ne(0),re=ne(null),ie=ne(!0);function oe(e,n){var t=n.$EV;return t||(t=n.$EV=ne(null)),t[e]||1===++te[e]&&(re[e]=me(e)),t}function ae(e,n){var t=n.$EV;t&&t[e]&&(0===--te[e]&&(document.removeEventListener(p(e),re[e]),re[e]=null),t[e]=null)}function le(e,n,t,r){if(a(t))oe(e,r)[e]=t;else if(s(t)){if(E(n,t))return;oe(e,r)[e]=t}else ae(e,r)}function ue(e){return a(e.composedPath)?e.composedPath()[0]:e.target}function ce(e,n,t,r){var i=ue(e);do{if(n&&i.disabled)return;var o=i.$EV;if(o){var a=o[t];if(a&&(r.dom=i,a.event?a.event(a.data,e):a(e),e.cancelBubble))return}i=i.parentNode}while(!u(i))}function se(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function fe(){return this.defaultPrevented}function de(){return this.cancelBubble}function pe(e){var n={dom:document};return e.isDefaultPrevented=fe,e.isPropagationStopped=de,e.stopPropagation=se,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function ve(e){return function(n){if(0!==n.button)return void n.stopPropagation();ce(n,!0,e,pe(n))}}function he(e){return function(n){ce(n,!1,e,pe(n))}}function me(e){var n="onClick"===e||"onDblClick"===e?ve(e):he(e);return document.addEventListener(p(e),n),n}function ge(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}function ye(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var i=n.toLowerCase();e[i]&&e[i](t)}}function be(e,n){var t=function(t){var r=this.$V;if(!r)return;var i=r.props||f,o=r.dom;if(l(e))ye(i,e,t);else for(var u=0;u<e.length;++u)ye(i,e[u],t);if(a(n)){var c=this.$V,s=c.props||f;n(s,o,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function ke(e,n,t){var r="$"+n,i=e[r];if(i){if(i[1].wrapped)return;e.removeEventListener(i[0],i[1]),e[r]=null}a(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function Ce(e){return"checkbox"===e||"radio"===e}var $e=be("onInput",Pe),we=be(["onClick","onChange"],Pe);function Ae(e){e.stopPropagation()}function Se(e,n){Ce(n.type)?(ke(e,"change",we),ke(e,"click",Ae)):ke(e,"input",$e)}function Pe(e,n){var t=e.type,r=e.value,o=e.checked,a=e.multiple,l=e.defaultValue,u=!i(r);t&&t!==n.type&&n.setAttribute("type",t),i(a)||a===n.multiple||(n.multiple=a),i(l)||u||(n.defaultValue=l+""),Ce(t)?(u&&(n.value=r),i(o)||(n.checked=o)):u&&n.value!==r?(n.defaultValue=r,n.value=r):i(o)||(n.checked=o)}function Ne(e,n){if("option"===e.type)Te(e,n);else{var t=e.children,r=e.flags;if(4&r)Ne(t.$LI,n);else if(8&r)Ne(t,n);else if(2===e.childFlags)Ne(t,n);else if(12&e.childFlags)for(var i=0,o=t.length;i<o;++i)Ne(t[i],n)}}function Te(e,n){var r=e.props||f,o=e.dom;o.value=r.value,r.value===n||t(n)&&-1!==n.indexOf(r.value)?o.selected=!0:i(n)&&i(r.selected)||(o.selected=r.selected||!1)}Ae.wrapped=!0;var xe=be("onChange",De);function Ie(e){ke(e,"change",xe)}function De(e,n,t,r){var o=Boolean(e.multiple);i(e.multiple)||o===n.multiple||(n.multiple=o);var a=e.selectedIndex;if(-1===a&&(n.selectedIndex=-1),1!==r.childFlags){var l=e.value;"number"===typeof a&&a>-1&&n.options[a]&&(l=n.options[a].value),t&&i(l)&&(l=e.defaultValue),Ne(r,l)}}var Fe,Ee,Le=be("onInput",Ve),Me=be("onChange");function Ue(e,n){ke(e,"input",Le),n.onChange&&ke(e,"change",Me)}function Ve(e,n,t){var r=e.value,o=n.value;if(i(r)){if(t){var a=e.defaultValue;i(a)||a===o||(n.defaultValue=a,n.value=a)}}else o!==r&&(n.defaultValue=r,n.value=r)}function We(e,n,t,r,i,o){64&e?Pe(r,t):256&e?De(r,t,i,n):128&e&&Ve(r,t,i),o&&(t.$V=n)}function Re(e,n,t){64&e?Se(n,t):256&e?Ie(n):128&e&&Ue(n,t)}function Oe(e){return e.type&&Ce(e.type)?!i(e.checked):!i(e.value)}function Be(e){e&&!M(e,null)&&e.current&&(e.current=null)}function _e(e,n,t){e&&(a(e)||void 0!==e.current)&&t.push((function(){M(e,n)||void 0===e.current||(e.current=n)}))}function je(e,n,t){Ke(e,t),P(e,n,t)}function Ke(e,n){var t,r=e.flags,o=e.children;if(481&r){t=e.ref;var l=e.props;Be(t);var c=e.childFlags;if(!u(l))for(var s=Object.keys(l),p=0,v=s.length;p<v;p++){var h=s[p];ie[h]&&ae(h,e.dom)}12&c?He(o,n):2===c&&Ke(o,n)}else if(o)if(4&r){a(o.componentWillUnmount)&&o.componentWillUnmount();var m=n;a(o.componentWillDisappear)&&(m=new d,Xe(n,o,o.$LI.dom,r,void 0)),Be(e.ref),o.$UN=!0,Ke(o.$LI,m)}else if(8&r){var g=n;if(!i(t=e.ref)){var y=null;a(t.onComponentWillUnmount)&&(y=C(e,!0),t.onComponentWillUnmount(y,e.props||f)),a(t.onComponentWillDisappear)&&(g=new d,Xe(n,t,y=y||C(e,!0),r,e.props))}Ke(o,g)}else 1024&r?je(o,e.ref,n):8192&r&&12&e.childFlags&&He(o,n)}function He(e,n){for(var t=0,r=e.length;t<r;++t)Ke(e[t],n)}function Ge(e,n){return function(){if(n)for(var t=0;t<e.length;t++)A(e[t],n,!1)}}function qe(e,n,t){t.componentWillDisappear.length>0?$(t.componentWillDisappear,Ge(n,e)):e.textContent=""}function Qe(e,n,t,r){He(t,r),8192&n.flags?P(n,e,r):qe(e,t,r)}function Xe(e,n,t,r,i){e.componentWillDisappear.push((function(e){4&r?n.componentWillDisappear(t,e):8&r&&n.onComponentWillDisappear(t,i,e)}))}function ze(e){var n=e.event;return function(t){n(e.data,t)}}function Ze(e,n,t,r){if(s(t)){if(E(n,t))return;t=ze(t)}ke(r,p(e),t)}function Je(e,n,t){if(i(n))return void t.removeAttribute("style");var r,o,a=t.style;if(l(n))return void(a.cssText=n);if(i(e)||l(e))for(r in n)o=n[r],a.setProperty(r,o);else{for(r in n)(o=n[r])!==e[r]&&a.setProperty(r,o);for(r in e)i(n[r])&&a.removeProperty(r)}}function Ye(e,n,t,r,o){var a=e&&e.__html||"",l=n&&n.__html||"";a!==l&&(i(l)||ge(r,l)||(u(t)||(12&t.childFlags?He(t.children,o):2===t.childFlags&&Ke(t.children,o),t.children=null,t.childFlags=1),r.innerHTML=l))}function en(e,n,t,r,o,a,l,u){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":r.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":r[e]=!!t;break;case"defaultChecked":case"value":case"volume":if(a&&"value"===e)break;var c=i(t)?"":t;r[e]!==c&&(r[e]=c);break;case"style":Je(n,t,r);break;case"dangerouslySetInnerHTML":Ye(n,t,l,r,u);break;default:ie[e]?le(e,n,t,r):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?Ze(e,n,t,r):i(t)?r.removeAttribute(e):o&&ee[e]?r.setAttributeNS(ee[e],e,t):r.setAttribute(e,t)}}function nn(e,n,t,r,i,o){var a=!1,l=(448&n)>0;for(var u in l&&(a=Oe(t))&&Re(n,r,t),t)en(u,null,t[u],r,i,a,null,o);l&&We(n,e,r,t,!0,a)}function tn(e,n,t){var r=Z(e.render(n,e.state,t)),i=t;return a(e.getChildContext)&&(i=c(t,e.getChildContext())),e.$CX=i,r}function rn(e,n,t,r,i,o){var l=new n(t,r),c=l.$N=Boolean(n.getDerivedStateFromProps||l.getSnapshotBeforeUpdate);if(l.$SVG=i,l.$L=o,e.children=l,l.$BS=!1,l.context=r,l.props===f&&(l.props=t),c)l.state=x(l,t,l.state);else if(a(l.componentWillMount)){l.$BR=!0,l.componentWillMount();var s=l.$PS;if(!u(s)){var d=l.state;if(u(d))l.state=s;else for(var p in s)d[p]=s[p];l.$PS=null}l.$BR=!1}return l.$LI=tn(l,t,r),l}function on(e,n){var t=e.props||f;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function an(e,n,t,r,i,o,a){var l=e.flags|=16384;481&l?sn(e,n,t,r,i,o,a):4&l?dn(e,n,t,r,i,o,a):8&l?pn(e,n,t,r,i,o,a):16&l?cn(e,n,i):8192&l?un(e,t,n,r,i,o,a):1024&l&&ln(e,t,n,i,o,a)}function ln(e,n,t,r,i,o){an(e.children,e.ref,n,!1,null,i,o);var a=q();cn(a,t,r),e.dom=a.dom}function un(e,n,t,r,i,o,a){var l=e.children,u=e.childFlags;12&u&&0===l.length&&(u=e.childFlags=2,l=e.children=q()),2===u?an(l,t,n,r,i,o,a):fn(l,t,n,r,i,o,a)}function cn(e,n,t){var r=e.dom=document.createTextNode(e.children);u(n)||h(n,r,t)}function sn(e,n,t,r,o,a,l){var c=e.flags,s=e.props,f=e.className,d=e.childFlags,p=e.dom=m(e.type,r=r||(32&c)>0),v=e.children;if(i(f)||""===f||(r?p.setAttribute("class",f):p.className=f),16===d)F(p,v);else if(1!==d){var g=r&&"foreignObject"!==e.type;2===d?(16384&v.flags&&(e.children=v=G(v)),an(v,p,t,g,null,a,l)):8!==d&&4!==d||fn(v,p,t,g,null,a,l)}u(n)||h(n,p,o),u(s)||nn(e,c,s,p,r,l),_e(e.ref,p,a)}function fn(e,n,t,r,i,o,a){for(var l=0;l<e.length;++l){var u=e[l];16384&u.flags&&(e[l]=u=G(u)),an(u,n,t,r,i,o,a)}}function dn(e,n,t,r,i,o,l){var u=rn(e,e.type,e.props||f,t,r,o),c=l;a(u.componentDidAppear)&&(c=new d),an(u.$LI,n,u.$CX,r,i,o,c),mn(e.ref,u,o,l)}function pn(e,n,t,r,o,l,u){var c=e.ref,s=u;!i(c)&&a(c.onComponentDidAppear)&&(s=new d),an(e.children=Z(on(e,t)),n,t,r,o,l,s),yn(e,l,u)}function vn(e){return function(){e.componentDidMount()}}function hn(e,n,t,r,i){e.componentDidAppear.push((function(){4&r?n.componentDidAppear(t):8&r&&n.onComponentDidAppear(t,i)}))}function mn(e,n,t,r){_e(e,n,t),a(n.componentDidMount)&&t.push(vn(n)),a(n.componentDidAppear)&&hn(r,n,n.$LI.dom,4,void 0)}function gn(e,n){return function(){e.onComponentDidMount(C(n,!0),n.props||f)}}function yn(e,n,t){var r=e.ref;i(r)||(M(r.onComponentWillMount,e.props||f),a(r.onComponentDidMount)&&n.push(gn(r,e)),a(r.onComponentDidAppear)&&hn(t,r,C(e,!0),8,e.props))}function bn(e,n,t,r,i,o,a){Ke(e,a),0!==(n.flags&e.flags&1521)?(an(n,null,r,i,null,o,a),g(t,n.dom,e.dom)):(an(n,t,r,i,C(e,!0),o,a),P(e,t,a))}function kn(e,n,t,r,i,o,a,l){var u=n.flags|=16384;e.flags!==u||e.type!==n.type||e.key!==n.key||2048&u?16384&e.flags?bn(e,n,t,r,i,a,l):an(n,t,r,i,o,a,l):481&u?Sn(e,n,r,i,u,a,l):4&u?In(e,n,t,r,i,o,a,l):8&u?Dn(e,n,t,r,i,o,a,l):16&u?Fn(e,n):8192&u?wn(e,n,t,r,i,a,l):An(e,n,r,a,l)}function Cn(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:F(t,n))}function $n(e,n){e.textContent!==n&&(e.textContent=n)}function wn(e,n,t,r,i,o,a){var l=e.children,u=n.children,c=e.childFlags,s=n.childFlags,f=null;12&s&&0===u.length&&(s=n.childFlags=2,u=n.children=q());var d=0!==(2&s);if(12&c){var p=l.length;(8&c&&8&s||d||!d&&u.length>p)&&(f=C(l[p-1],!1).nextSibling)}Nn(c,s,l,u,t,r,i,f,e,o,a)}function An(e,n,t,r,i){var a=e.ref,l=n.ref,u=n.children;if(Nn(e.childFlags,n.childFlags,e.children,u,a,t,!1,null,e,r,i),n.dom=e.dom,a!==l&&!o(u)){var c=u.dom;y(a,c),v(l,c)}}function Sn(e,n,t,r,o,a,l){var u,c=n.dom=e.dom,s=e.props,d=n.props,p=!1,v=!1;if(r=r||(32&o)>0,s!==d){var h=s||f;if((u=d||f)!==f)for(var m in(p=(448&o)>0)&&(v=Oe(u)),u){var g=h[m],y=u[m];g!==y&&en(m,g,y,c,r,v,e,l)}if(h!==f)for(var b in h)i(u[b])&&!i(h[b])&&en(b,h[b],null,c,r,v,e,l)}var k=n.children,C=n.className;e.className!==C&&(i(C)?c.removeAttribute("class"):r?c.setAttribute("class",C):c.className=C),4096&o?$n(c,k):Nn(e.childFlags,n.childFlags,e.children,k,c,t,r&&"foreignObject"!==n.type,null,e,a,l),p&&We(o,n,c,u,!1,v);var $=n.ref,w=e.ref;w!==$&&(Be(w),_e($,c,a))}function Pn(e,n,t,r,i,o,a){Ke(e,a),fn(n,t,r,i,C(e,!0),o,a),P(e,t,a)}function Nn(e,n,t,r,i,o,a,l,u,c,s){switch(e){case 2:switch(n){case 2:kn(t,r,i,o,a,l,c,s);break;case 1:je(t,i,s);break;case 16:Ke(t,s),F(i,r);break;default:Pn(t,r,i,o,a,c,s)}break;case 1:switch(n){case 2:an(r,i,o,a,l,c,s);break;case 1:break;case 16:F(i,r);break;default:fn(r,i,o,a,l,c,s)}break;case 16:switch(n){case 16:Cn(t,r,i);break;case 2:qe(i,t,s),an(r,i,o,a,l,c,s);break;case 1:qe(i,t,s);break;default:qe(i,t,s),fn(r,i,o,a,l,c,s)}break;default:switch(n){case 16:He(t,s),F(i,r);break;case 2:Qe(i,u,t,s),an(r,i,o,a,l,c,s);break;case 1:Qe(i,u,t,s);break;default:var f=0|t.length,d=0|r.length;0===f?d>0&&fn(r,i,o,a,l,c,s):0===d?Qe(i,u,t,s):8===n&&8===e?Ln(t,r,i,o,a,f,d,l,u,c,s):En(t,r,i,o,a,f,d,l,c,s)}}}function Tn(e,n,t,r,i){i.push((function(){e.componentDidUpdate(n,t,r)}))}function xn(e,n,t,r,i,o,l,u,s,f){var d=e.state,p=e.props,v=Boolean(e.$N),h=a(e.shouldComponentUpdate);if(v&&(n=x(e,t,n!==d?c(d,n):n)),l||!h||h&&e.shouldComponentUpdate(t,n,i)){!v&&a(e.componentWillUpdate)&&e.componentWillUpdate(t,n,i),e.props=t,e.state=n,e.context=i;var m=null,g=tn(e,t,i);v&&a(e.getSnapshotBeforeUpdate)&&(m=e.getSnapshotBeforeUpdate(p,d)),kn(e.$LI,g,r,e.$CX,o,u,s,f),e.$LI=g,a(e.componentDidUpdate)&&Tn(e,p,d,m,s)}else e.props=t,e.state=n,e.context=i}function In(e,n,t,r,i,o,l,s){var d=n.children=e.children;if(u(d))return;d.$L=l;var p=n.props||f,v=n.ref,h=e.ref,m=d.state;if(!d.$N){if(a(d.componentWillReceiveProps)){if(d.$BR=!0,d.componentWillReceiveProps(p,r),d.$UN)return;d.$BR=!1}u(d.$PS)||(m=c(m,d.$PS),d.$PS=null)}xn(d,m,p,t,r,i,!1,o,l,s),h!==v&&(Be(h),_e(v,d,l))}function Dn(e,n,t,r,o,l,u,c){var s=!0,d=n.props||f,p=n.ref,v=e.props,h=!i(p),m=e.children;if(h&&a(p.onComponentShouldUpdate)&&(s=p.onComponentShouldUpdate(v,d)),!1!==s){h&&a(p.onComponentWillUpdate)&&p.onComponentWillUpdate(v,d);var g=Z(on(n,r));kn(m,g,t,r,o,l,u,c),n.children=g,h&&a(p.onComponentDidUpdate)&&p.onComponentDidUpdate(v,d)}else n.children=m}function Fn(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}function En(e,n,t,r,i,o,a,l,u,c){for(var s,f,d=o>a?a:o,p=0;p<d;++p)s=n[p],f=e[p],16384&s.flags&&(s=n[p]=G(s)),kn(f,s,t,r,i,l,u,c),e[p]=s;if(o<a)for(p=d;p<a;++p)16384&(s=n[p]).flags&&(s=n[p]=G(s)),an(s,t,r,i,l,u,c);else if(o>a)for(p=d;p<o;++p)je(e[p],t,c)}function Ln(e,n,t,r,i,o,a,l,u,c,s){var f,d,p=o-1,v=a-1,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=G(g)),kn(m,g,t,r,i,l,c,s),e[h]=g,++h>p||h>v)break e;m=e[h],g=n[h]}for(m=e[p],g=n[v];m.key===g.key;){if(16384&g.flags&&(n[v]=g=G(g)),kn(m,g,t,r,i,l,c,s),e[p]=g,v--,h>--p||h>v)break e;m=e[p],g=n[v]}}if(h>p){if(h<=v)for(d=(f=v+1)<a?C(n[f],!0):l;h<=v;)16384&(g=n[h]).flags&&(n[h]=g=G(g)),++h,an(g,t,r,i,d,c,s)}else if(h>v)for(;h<=p;)je(e[h++],t,s);else Mn(e,n,r,o,a,p,v,h,t,i,l,u,c,s)}function Mn(e,n,t,r,i,o,a,l,u,c,s,f,d,p){var v,h,m=0,g=0,y=l,b=l,k=o-l+1,$=a-l+1,A=new Int32Array($+1),S=k===r,P=!1,N=0,x=0;if(i<4||(k|$)<32)for(g=y;g<=o;++g)if(v=e[g],x<$){for(l=b;l<=a;l++)if(h=n[l],v.key===h.key){if(A[l-b]=g+1,S)for(S=!1;y<g;)je(e[y++],u,p);N>l?P=!0:N=l,16384&h.flags&&(n[l]=h=G(h)),kn(v,h,u,t,c,s,d,p),++x;break}!S&&l>a&&je(v,u,p)}else S||je(v,u,p);else{var I={};for(g=b;g<=a;++g)I[n[g].key]=g;for(g=y;g<=o;++g)if(v=e[g],x<$)if(void 0!==(l=I[v.key])){if(S)for(S=!1;g>y;)je(e[y++],u,p);A[l-b]=g+1,N>l?P=!0:N=l,16384&(h=n[l]).flags&&(n[l]=h=G(h)),kn(v,h,u,t,c,s,d,p),++x}else S||je(v,u,p);else S||je(v,u,p)}if(S)Qe(u,f,e,p),fn(n,u,t,c,s,d,p);else if(P){var D=Vn(A);for(l=D.length-1,g=$-1;g>=0;g--)0===A[g]?(16384&(h=n[N=g+b]).flags&&(n[N]=h=G(h)),an(h,u,t,c,(m=N+1)<i?C(n[m],!0):s,d,p)):l<0||g!==D[l]?T(f,h=n[N=g+b],u,(m=N+1)<i?C(n[m],!0):s,p):l--;p.componentWillMove.length>0&&w(p.componentWillMove)}else if(x!==$)for(g=$-1;g>=0;g--)0===A[g]&&(16384&(h=n[N=g+b]).flags&&(n[N]=h=G(h)),an(h,u,t,c,(m=N+1)<i?C(n[m],!0):s,d,p))}var Un=0;function Vn(e){var n=0,t=0,r=0,i=0,o=0,a=0,l=0,u=e.length;for(u>Un&&(Un=u,Fe=new Int32Array(u),Ee=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=Fe[i]]<n){Ee[t]=r,Fe[++i]=t;continue}for(o=0,a=i;o<a;)e[Fe[l=o+a>>1]]<n?o=l+1:a=l;n<e[Fe[o]]&&(o>0&&(Ee[t]=Fe[o-1]),Fe[o]=t)}o=i+1;var c=new Int32Array(o);for(a=Fe[o-1];o-- >0;)c[o]=a,a=Ee[a],Fe[o]=0;return c}function Wn(e,n,t,r){var o=[],l=new d,u=n.$V;I.v=!0,i(u)?i(e)||(16384&e.flags&&(e=G(e)),an(e,n,r,!1,null,o,l),n.$V=e,u=e):i(e)?(je(u,n,l),n.$V=null):(16384&e.flags&&(e=G(e)),kn(u,e,n,r,!1,null,o,l),u=n.$V=e),b(o),$(l.componentDidAppear),I.v=!1,a(t)&&t(),a(D.renderComplete)&&D.renderComplete(u,n)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var Rn=[],On="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(e){window.setTimeout(e,0)},Bn=!1;function _n(e,n,t,r){var o=e.$PS;if(a(n)&&(n=n(o?c(e.state,o):e.state,e.props,e.context)),i(o))e.$PS=n;else for(var l in n)o[l]=n[l];if(e.$BR)a(t)&&e.$L.push(t.bind(e));else{if(!I.v&&0===Rn.length)return Hn(e,r),void(a(t)&&t.call(e));if(-1===Rn.indexOf(e)&&Rn.push(e),r&&(e.$F=!0),Bn||(Bn=!0,On(Kn)),a(t)){var u=e.$QU;u||(u=e.$QU=[]),u.push(t)}}}function jn(e){for(var n=e.$QU,t=0;t<n.length;++t)n[t].call(e);e.$QU=null}function Kn(){var e;for(Bn=!1;e=Rn.shift();)if(!e.$UN){var n=e.$F;e.$F=!1,Hn(e,n),e.$QU&&jn(e)}}function Hn(e,n){if(n||!e.$BR){var t=e.$PS;e.$PS=null;var r=[],i=new d;I.v=!0,xn(e,c(e.state,t),e.props,C(e.$LI,!0).parentNode,e.context,e.$SVG,n,null,r,i),b(r),$(i.componentDidAppear),I.v=!1}else e.state=e.$PS,e.$PS=null}var Gn=function(){function e(e,n){this.state=null,this.props=void 0,this.context=void 0,this.displayName=void 0,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$SSR=void 0,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=e||f,this.context=n||f}var n=e.prototype;return n.forceUpdate=function(e){if(this.$UN)return;_n(this,{},e,!0)},n.setState=function(e,n){if(this.$UN)return;this.$BS||_n(this,e,n,!1)},n.render=function(e,n,t){return null},e}();function qn(e){return void 0===e||null===e}function Qn(e){return"string"===typeof e}function Xn(e){return void 0===e}Gn.defaultProps=null;var zn={onComponentDidAppear:1,onComponentDidMount:1,onComponentDidUpdate:1,onComponentShouldUpdate:1,onComponentWillDisappear:1,onComponentWillMount:1,onComponentWillUnmount:1,onComponentWillUpdate:1};function Zn(e,n,t){var r,i,o=null,a=null,l=null,u=0,c=arguments.length-2;if(1===c)r=t;else if(c>1)for(r=[];c-- >0;)r[c]=arguments[c+2];if(!Qn(e)){if(u=2,Xn(r)||(n||(n={}),n.children=r),!qn(n))for(var s in i={},n)"key"===s?a=n.key:"ref"===s?o=n.ref:1===zn[s]?(o||(o={}),o[s]=n[s]):i[s]=n[s];return _(u,e,i,a,o)}if(u=X(e),!qn(n))for(var f in i={},n)"className"===f||"class"===f?l=n[f]:"key"===f?a=n.key:"children"===f&&Xn(r)?r=n.children:"ref"===f?o=n.ref:("contenteditable"===f&&(u|=4096),i[f]=n[f]);if(8192&u)return K(1===c?[r]:r,0,a);return W(u,e,l,r,0,i,a,o)}function Jn(e){return void 0===e||null===e}function Yn(e){return""!==e}function et(e){return e.split(" ").filter(Yn)}function nt(e,n){for(var t=et(n),r=0;r<t.length;r++)e.classList.add(t[r])}function tt(e,n){for(var t=et(n),r=0;r<t.length;r++)e.classList.remove(t[r])}function rt(){return document.body.clientHeight}function it(e){e.style||e.removeAttribute("style")}function ot(e){var n=e.style.getPropertyValue("display"),t="none"===window.getComputedStyle(e).getPropertyValue("display");t&&e.style.setProperty("display","block");var r=e.getBoundingClientRect();return t&&(e.style.setProperty("display",n),it(e)),{height:r.height,width:r.width,x:r.x,y:r.y}}function at(e,n,t,r,i){void 0===r&&(r=1),void 0===i&&(i=1),1!==r||1!==i?(e.style.transformOrigin="0 0",e.style.transform="translate("+n+"px, "+t+"px) scale("+r+", "+i+")"):e.style.transform="translate("+n+"px, "+t+"px)"}function lt(e){e.style.transform="",e.style.transformOrigin=""}function ut(e,n,t){e.style.width=n+"px",e.style.height=t+"px"}function ct(e){e.style.width=e.style.height=""}function st(e){for(var n=0,t=0,r=0;r<e.length;r++){var i=e[r];if(!i)continue;var o=window.getComputedStyle(i),a=o.getPropertyValue("transition-duration").split(","),l=o.getPropertyValue("transition-delay").split(","),u=o.getPropertyValue("transition-property").split(",");for(var c in u){var s=c.trim();if("-"===s[0]){var f=s.split("-").splice(2).join("-");s.indexOf(f)>=0&&n--}}for(var d=0,p=0;p<a.length;p++){var v=a[p],h=l[p],m=parseFloat(v)+parseFloat(h);m>d&&(d=m)}n+=a.length,d>t&&(t=d)}return{maxDuration:t,nrofTransitions:n}}var ft,dt=function(){if("undefined"===typeof document)return"";var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var t in n)if(void 0!==e[t])return n[t]}();function pt(e,n,t){"IMG"!==n.nodeName||n.complete?setTimeout((function(){return e({target:n,timeout:!0})}),0===t?0:Math.round(1e3*t)+100):n.addEventListener("load",(function(){setTimeout((function(){return e({target:n,timeout:!0})}),0===t?0:Math.round(1e3*t)+100)}))}function vt(e,n){var t=e[0],r=st(e),i=r.maxDuration,o=r.nrofTransitions,a=!1,l=function r(i){if(!i||a)return;if(!i.timeout){for(var l=!1,u=0;u<e.length;u++)if(void 0!==e[u]&&i.target===e[u]){l=!0;break}if(!l)return;if(--o>0)return}a=!0,t.removeEventListener(dt,r,!1),"function"===typeof n&&n()};t.addEventListener(dt,l,!1),pt(l,t,i)}!function(e){e[e.INITIALIZE=0]="INITIALIZE",e[e.MEASURE=1]="MEASURE",e[e.SET_START_STATE=2]="SET_START_STATE",e[e.ACTIVATE_TRANSITIONS=3]="ACTIVATE_TRANSITIONS",e[e.REGISTER_LISTENERS=4]="REGISTER_LISTENERS",e[e.ACTIVATE_ANIMATION=5]="ACTIVATE_ANIMATION",e[e.length=6]="length"}(ft||(ft={}));var ht={};function mt(){var e=!1;for(var n in ht)--ht[n].ticks<0?delete ht[n]:e=!0;e&&requestAnimationFrame(mt)}var gt=[],yt=[],bt=0,kt=0;function Ct(){kt=0;var e=yt;yt=[];for(var n=0;n<e.length;n++)e[n](5)}function $t(){bt=0;var e=gt;gt=[];for(var n=0;n<6;n++){var t=n;if(5===t)yt=yt.concat(e),0===kt&&(kt=requestAnimationFrame(Ct));else{3===t&&rt();for(var r=0;r<e.length;r++)e[r](t)}}}function wt(e){gt.push(e),0===bt&&(bt=requestAnimationFrame($t))}function At(e,n){var t;if(Jn(e)||"object"!==typeof e){var r=(e||"inferno-animation")+n;t={active:r+"-active",end:r+"-end",start:r}}else t=e;return t}function St(e,n){return function(){ct(e),tt(e,n.active+" "+n.end)}}function Pt(e,n,t,r,i,o){switch(e){case 0:return l=n,void(void 0!==(u=i)?l.style.setProperty("display",u):(l.style.removeProperty("display"),it(l)));case 1:if("IMG"!==n.tagName||n.complete){var a=ot(n);r.x=a.x,r.y=a.y,r.width=a.width,r.height=a.height}else rt();return;case 2:return Jn(o)||0===r.width||0===r.height||at(n,o.x-r.x,o.y-r.y,o.width/r.width,o.height/r.height),void nt(n,t.start);case 3:return void nt(n,t.active);case 4:return void vt([n],St(n,t));case 5:return Jn(o)||0===r.width||0===r.height||lt(n),ut(n,r.width,r.height),tt(n,t.start),void nt(n,t.end)}var l,u}function Nt(e,n,t,r,i){switch(e){case 1:return ut(n,i.width,i.height),void nt(n,r.start);case 3:return void nt(n,r.active);case 4:return void vt([n],t);case 5:return nt(n,r.end),tt(n,r.start),void ct(n)}}var Tt={onComponentDidAppear:function(e,n){var t,r,i,o,a,l=At(n.animation,"-enter"),u={},c=(r="none",(i=(t=e).style.getPropertyValue("display"))!==r&&t.style.setProperty("display",r),i),s=void 0===n.globalAnimationKey?null:(o=n.globalAnimationKey,void 0!==(a=ht[o])&&delete ht[o],a);wt((function(n){return Pt(n,e,l,u,c,s)}))},onComponentWillDisappear:function(e,n,t){var r,i,o=At(n.animation,"-leave"),a=ot(e);wt((function(n){return Nt(n,e,t,o,a)})),void 0!==n.globalAnimationKey&&(r=n.globalAnimationKey,(i=a).ticks=5,ht[r]=i,null===mt&&requestAnimationFrame(mt),e.style.setProperty("visibility","hidden"))}};function xt(){return Zn("div",{className:"logo"},Zn("img",{width:"120px",height:"120px",src:"inferno-logo.svg"}))}function It(){return Zn("h2",{className:"payoff"},"Inferno is a blazingly fast framework.")}function Dt(e){var n=e.onClick;return Zn("div",{className:"Page"},[Zn("div",{className:"Menu"},Zn("div",{className:"body"},[Zn("h3",null,"Page 1")])),Zn("div",{className:"content"},[Zn("div",{className:"Hero"},[Zn(xt,{globalAnimationKey:"main-logo",animation:"AnimateLogo"}),Zn(It,{globalAnimationKey:"payoff",animation:"AnimateLogo"})]),Zn("button",{onClick:n,children:"Click here"})])])}function Ft(e){var n=e.onClick;return Zn("div",{className:"Page"},[Zn("div",{className:"Menu"},[Zn(xt,{globalAnimationKey:"main-logo",animation:"AnimateLogo"}),Zn("div",{className:"body"},[Zn(It,{globalAnimationKey:"payoff",animation:"AnimateLogo"}),Zn("h3",null,"Page 2")])]),Zn("div",{className:"content"},[Zn("button",{onClick:n,children:"Click here"})])])}xt.defaultHooks=Tt,It.defaultHooks=Tt;var Et=function(t){var r,i;function o(){var e;return(e=t.call(this)||this).state={page:0},e.didClick=e.didClick.bind(n(e)),e}i=t,(r=o).prototype=Object.create(i.prototype),r.prototype.constructor=r,e(r,i);var a=o.prototype;return a.didClick=function(e){e.preventDefault(),this.setState({page:++this.state.page%2})},a.render=function(){return Zn("div",null,0===this.state.page?Zn(Dt,{onClick:this.didClick}):Zn(Ft,{onClick:this.didClick}))},o}(Gn);document.addEventListener("DOMContentLoaded",(function(){var e,n,t,r=document.querySelector("#App1");e=Zn(Et,{description:"Each card <li> animates height and opacity on add. The image and body of each card animates using the card animation CSS-classes but with different transitions. The card inherits AnimatedComponet which is only aware of the card animation. The child animations need to be finished when the card animations are finished."}),void 0===n&&(n=null),void 0===t&&(t=f),Wn(e,r,n,t)}))}();

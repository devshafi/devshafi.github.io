(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),l=n(2725),c=n(3462),f=n(1018),i=n(7190),s=n(1210),d=n(8684);var p="undefined"!==typeof u.default.useTransition,v={};function y(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var h=u.default.forwardRef((function(e,t){var n,o=e.href,h=e.as,b=e.children,g=e.prefetch,m=e.passHref,C=e.replace,_=e.shallow,O=e.scroll,x=e.locale,M=e.onClick,j=e.onMouseEnter,E=e.legacyBehavior,w=void 0===E?!0!==Boolean(!1):E,k=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=b,!w||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var L=!1!==g,R=r(p?u.default.useTransition():[],2)[1],P=u.default.useContext(c.RouterContext),N=u.default.useContext(f.AppRouterContext);N&&(P=N);var I,A=u.default.useMemo((function(){var e=r(a.resolveHref(P,o,!0),2),t=e[0],n=e[1];return{href:t,as:h?a.resolveHref(P,h):n||t}}),[P,o,h]),T=A.href,z=A.as,U=u.default.useRef(T),B=u.default.useRef(z);w&&(I=u.default.Children.only(n));var D=w?I&&"object"===typeof I&&I.ref:t,H=r(i.useIntersection({rootMargin:"200px"}),3),K=H[0],S=H[1],F=H[2],Z=u.default.useCallback((function(e){B.current===z&&U.current===T||(F(),B.current=z,U.current=T),K(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[z,D,T,F,K]);u.default.useEffect((function(){var e=S&&L&&a.isLocalURL(T),t="undefined"!==typeof x?x:P&&P.locale,n=v[T+"%"+z+(t?"%"+t:"")];e&&!n&&y(P,T,z,{locale:t})}),[z,T,S,x,L,P]);var q={ref:Z,onClick:function(e){w||"function"!==typeof M||M(e),w&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,l,c,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var i=function(){t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:l})};f?f(i):i()}}(e,P,T,z,C,_,O,x,N?R:void 0)},onMouseEnter:function(e){w||"function"!==typeof j||j(e),w&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),a.isLocalURL(T)&&y(P,T,z,{priority:!0})}};if(!w||m||"a"===I.type&&!("href"in I.props)){var W="undefined"!==typeof x?x:P&&P.locale,G=P&&P.isLocaleDomain&&s.getDomainLocale(z,W,P.locales,P.domainLocales);q.href=G||d.addBasePath(l.addLocale(z,W,P&&P.defaultLocale))}return w?u.default.cloneElement(I,q):u.default.createElement("a",Object.assign({},k,q),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!a,i=o.useRef(),s=r(o.useState(!1),2),d=s[0],p=s[1],v=r(o.useState(null),2),y=v[0],h=v[1];o.useEffect((function(){if(a){if(i.current&&(i.current(),i.current=void 0),f||d)return;return y&&y.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},c.push(n),l.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(y,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[y,f,n,t,d]);var b=o.useCallback((function(){p(!1)}),[]);return[h,d,b]};var o=n(7294),u=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r};var u=o.default.createContext(null);t.AppRouterContext=u;var a=o.default.createContext(null);t.AppTreeContext=a;var l=o.default.createContext(null);t.FullAppTreeContext=l},1664:function(e,t,n){e.exports=n(8418)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return f}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function f(e){return function(t){return r.createElement(i,a({attr:a({},e.attr)},t),c(e.child))}}function i(e){var t=function(t){var n,o=e.attr,u=e.size,c=e.title,f=l(e,["attr","size","title"]),i=u||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==u?r.createElement(u.Consumer,null,(function(e){return t(e)})):t(o)}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(91)),i={id:"why",title:"Why Docker and Kubernetes?",sidebar_label:"Why Docker and Kubernetes?",slug:"/why"},s={unversionedId:"why",id:"why",isDocsHomePage:!1,title:"Why Docker and Kubernetes?",description:"So, why bet the farm on Docker and Kubernetes?",source:"@site/docs/why.md",slug:"/why",permalink:"/docs/why",editUrl:"https://github.com/getkuby/kuby-core/edit/master/docs/why.md",version:"current",sidebar_label:"Why Docker and Kubernetes?",sidebar:"sidebar",previous:{title:"Raison d'Etre",permalink:"/docs/raison-detre"},next:{title:"Quick Start Guide",permalink:"/docs/"}},c=[{value:"Why Docker",id:"why-docker",children:[]},{value:"Why Kubernetes",id:"why-kubernetes",children:[]}],u={rightToc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"So, why bet the farm on Docker and Kubernetes?"),Object(a.b)("h3",{id:"why-docker"},"Why Docker"),Object(a.b)("p",null,'When Docker came on the scene in 2013 it was seen as a game-changer. Applications that used to be deployed onto hand-provisioned servers can now be bundled up into neat little packages and transferred between computers in their entirety. Since the whole application - dependencies, operating system components, assets, code, etc - can be passed around as a single artifact, Docker images curtail the need for manually provisioned servers and eliminate a whole class of "works on my machine" problems.'),Object(a.b)("h3",{id:"why-kubernetes"},"Why Kubernetes"),Object(a.b)("p",null,"Kubernetes has taken the ops world by storm. It's resilient to failure, portable across a variety of cloud providers, and backed by industry-leading organizations like the CNCF. Kubernetes configuration is portable enough to be used, without modification, on just about any Kubernetes cluster, making migrations not only feasible, but easy. Many cloud providers like Google GCP, Amazon AWS, Microsoft Azure, DigitalOcean, and Linode support Kubernetes. Most of these providers will manage the Kubernetes cluster for you, and in some cases will even provide it free of charge (you pay only for the compute resources)."),Object(a.b)("p",null,"\"Sure,\" I hear you saying, \"but Kubernetes is really complicated, and I just have a simple web app! Surely there's a simpler way?\" You're right, of course. Kubernetes was originally designed by Google to manage their infrastructure, and you probably don't have Google-sized problems to worry about. That said, I'm a firm believer in Kubernetes' viability for applications of all sizes and types. Kubernetes is very much the \"batteries included\" orchestration layer like Rails is for web applications. It is fast becoming the lingua franca of orchestration, and there's no reason large and small web apps alike can't make use of its awesome feature set."))}l.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,y=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return r?o.a.createElement(y,s(s({ref:t},u),{},{components:r})):o.a.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
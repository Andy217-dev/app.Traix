(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{16536:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return A}});let i=n(11887),r=n(79766),o=n(27573),a=r._(n(7653)),l=i._(n(96630)),d=n(34324),s=n(26951),u=n(26046);n(19484);let c=n(24812);function f(e){return"/"===e[0]?e.slice(1):e}let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},g=new Set,m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let h=new Map([["default",function(e){let{config:t,src:n,width:i,quality:r}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:(0,c.normalizePathTrailingSlash)(t.path)+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+(r||75)}],["imgix",function(e){let{config:t,src:n,width:i,quality:r}=e,o=new URL(""+t.path+f(n)),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString()),o.href}],["cloudinary",function(e){let{config:t,src:n,width:i,quality:r}=e,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return""+t.path+o+f(n)}],["akamai",function(e){let{config:t,src:n,width:i}=e;return""+t.path+f(n)+"?imwidth="+i}],["custom",function(e){let{src:t}=e;throw Error('Image with src "'+t+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}]]);function y(e){return void 0!==e.default}function b(e){let{config:t,src:n,unoptimized:i,layout:r,width:o,quality:a,sizes:l,loader:d}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n,i){let{deviceSizes:r,allSizes:o}=e;if(i&&("fill"===n||"responsive"===n)){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,r,l),c=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,i)=>d({config:t,src:n,quality:a,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:d({config:t,src:n,quality:a,width:s[c]})}}function w(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function v(e){var t;let n=(null==(t=e.config)?void 0:t.loader)||"default",i=h.get(n);if(i)return i(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '+d.VALID_LOADERS.join(", ")+". Received: "+n)}function x(e,t,n,i,r,o){e&&e.src!==m&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentNode&&(g.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){let{naturalWidth:t,naturalHeight:n}=e;r.current({naturalWidth:t,naturalHeight:n})}}))}let _=e=>{let{imgAttributes:t,heightInt:n,widthInt:i,qualityInt:r,layout:l,className:d,imgStyle:s,blurStyle:u,isLazy:c,placeholder:f,loading:p,srcString:g,config:m,unoptimized:h,loader:y,onLoadingCompleteRef:w,setBlurComplete:v,setIntersection:_,onLoad:A,onError:S,isVisible:j,noscriptSizes:k,...O}=e;return p=c?"lazy":p,(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{...O,...t,decoding:"async","data-nimg":l,className:d,style:{...s,...u},ref:(0,a.useCallback)(e=>{_(e),(null==e?void 0:e.complete)&&x(e,g,l,f,w,v)},[_,g,l,f,w,v]),onLoad:e=>{x(e.currentTarget,g,l,f,w,v),A&&A(e)},onError:e=>{"blur"===f&&v(!0),S&&S(e)}}),(c||"blur"===f)&&(0,o.jsx)("noscript",{children:(0,o.jsx)("img",{...O,loading:p,decoding:"async","data-nimg":l,style:s,className:d,...b({config:m,src:g,unoptimized:h,layout:l,width:i,quality:r,sizes:k,loader:y})})})]})};function A(e){var t;let n,{src:i,sizes:r,unoptimized:c=!1,priority:f=!1,loading:h,lazyRoot:x=null,lazyBoundary:A,className:S,quality:j,width:k,height:O,style:P,objectFit:z,objectPosition:I,onLoadingComplete:C,placeholder:E="empty",blurDataURL:M,...R}=e,U=(0,a.useContext)(u.ImageConfigContext),D=(0,a.useMemo)(()=>{let e=p||U||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[U]),L=r?"responsive":"intrinsic";"layout"in R&&(R.layout&&(L=R.layout),delete R.layout);let N=v;if("loader"in R){if(R.loader){let e=R.loader;N=t=>{let{config:n,...i}=t;return e(i)}}delete R.loader}let T="";if("object"==typeof(t=i)&&(y(t)||void 0!==t.src)){let e=y(i)?i.default:i;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(M=M||e.blurDataURL,T=e.src,(!L||"fill"!==L)&&(O=O||e.height,k=k||e.width,!e.height||!e.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e))}let W=!f&&("lazy"===h||void 0===h);((i="string"==typeof i?i:T).startsWith("data:")||i.startsWith("blob:"))&&(c=!0,W=!1),"undefined"!=typeof window&&g.has(i)&&(W=!1),D.unoptimized&&(c=!0);let[q,H]=(0,a.useState)(!1),[B,G,V]=(0,s.useIntersection)({rootRef:x,rootMargin:A||"200px",disabled:!W}),F=!W||G,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},$={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q=!1,X=w(k),K=w(O),Y=w(j),Z=Object.assign({},P,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:z,objectPosition:I}),ee="blur"!==E||q?{}:{backgroundSize:z||"cover",backgroundPosition:I||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'+M+'")'};if("fill"===L)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if(void 0!==X&&void 0!==K){let e=K/X,t=isNaN(e)?"100%":""+100*e+"%";"responsive"===L?(J.display="block",J.position="relative",Q=!0,$.paddingTop=t):"intrinsic"===L?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Q=!0,$.maxWidth="100%",n="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"+X+"%27%20height=%27"+K+"%27/%3e"):"fixed"===L&&(J.display="inline-block",J.position="relative",J.width=X,J.height=K)}let et={src:m,srcSet:void 0,sizes:void 0};F&&(et=b({config:D,src:i,unoptimized:c,layout:L,width:X,quality:Y,sizes:r,loader:N}));let en=i,ei={imageSrcSet:et.srcSet,imageSizes:et.sizes,crossOrigin:R.crossOrigin,referrerPolicy:R.referrerPolicy},er="undefined"==typeof window?a.default.useEffect:a.default.useLayoutEffect,eo=(0,a.useRef)(C),ea=(0,a.useRef)(i);(0,a.useEffect)(()=>{eo.current=C},[C]),er(()=>{ea.current!==i&&(V(),ea.current=i)},[V,i]);let el={isLazy:W,imgAttributes:et,heightInt:K,widthInt:X,qualityInt:Y,layout:L,className:S,imgStyle:Z,blurStyle:ee,loading:h,config:D,unoptimized:c,placeholder:E,loader:N,srcString:en,onLoadingCompleteRef:eo,setBlurComplete:H,setIntersection:B,isVisible:F,noscriptSizes:r,...R};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{style:J,children:[Q?(0,o.jsx)("span",{style:$,children:n?(0,o.jsx)("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:n}):null}):null,(0,o.jsx)(_,{...el})]}),f?(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",as:"image",href:et.srcSet?void 0:et.src,...ei},"__nimg-"+et.src+et.srcSet+et.sizes)}):null]})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},35908:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return i}});let i=n(11887)._(n(7653)).default.createContext({})},80977:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||n&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},96630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return m},defaultHead:function(){return c}});let i=n(11887),r=n(79766),o=n(27573),a=r._(n(7653)),l=i._(n(53964)),d=n(35908),s=n(2764),u=n(80977);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(19484);let p=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,i={};return r=>{let o=!0,a=!1;if(r.key&&"number"!=typeof r.key&&r.key.indexOf("$")>0){a=!0;let t=r.key.slice(r.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(r.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=r.props[t],n=i[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),i[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let m=function(e){let{children:t}=e,n=(0,a.useContext)(d.AmpStateContext),i=(0,a.useContext)(s.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:g,headManager:i,inAmpMode:(0,u.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},26046:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let i=n(11887)._(n(7653)),r=n(34324),o=i.default.createContext(r.imageConfigDefault)},34324:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return i}});let n=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},53964:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let i=n(7653),r="undefined"==typeof window,o=r?()=>{}:i.useLayoutEffect,a=r?()=>{}:i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}if(r){var d;null==t||null==(d=t.mountedInstances)||d.add(e.children),l()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},70110:function(e,t,n){e.exports=n(16536)}}]);
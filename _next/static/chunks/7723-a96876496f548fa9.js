"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7723],{90206:function(e,t,r){r.d(t,{u:function(){return n}});function n(e,[t,r]){return Math.min(r,Math.max(t,e))}},21004:function(e,t,r){r.d(t,{gm:function(){return l}});var n=r(7653);let o=(0,n.createContext)(void 0);function l(e){let t=(0,n.useContext)(o);return e||t||"ltr"}},86705:function(e,t,r){r.d(t,{LW:function(){return U},bU:function(){return Y},fC:function(){return B},l_:function(){return K}});var n=r(17610),o=r(7653),l=r(78378),i=r(65622),a=r(99933),u=r(94492),c=r(523),s=r(21004),d=r(81523),f=r(90206),p=r(46196);let v="ScrollArea",[m,h]=(0,a.b)(v),[w,g]=m(v),b=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,type:i="hover",dir:a,scrollHideDelay:c=600,...d}=e,[f,p]=(0,o.useState)(null),[v,m]=(0,o.useState)(null),[h,g]=(0,o.useState)(null),[b,E]=(0,o.useState)(null),[y,S]=(0,o.useState)(null),[C,x]=(0,o.useState)(0),[P,T]=(0,o.useState)(0),[R,D]=(0,o.useState)(!1),[L,_]=(0,o.useState)(!1),M=(0,u.e)(t,e=>p(e)),W=(0,s.gm)(a);return(0,o.createElement)(w,{scope:r,type:i,dir:W,scrollHideDelay:c,scrollArea:f,viewport:v,onViewportChange:m,content:h,onContentChange:g,scrollbarX:b,onScrollbarXChange:E,scrollbarXEnabled:R,onScrollbarXEnabledChange:D,scrollbarY:y,onScrollbarYChange:S,scrollbarYEnabled:L,onScrollbarYEnabledChange:_,onCornerWidthChange:x,onCornerHeightChange:T},(0,o.createElement)(l.WV.div,(0,n.Z)({dir:W},d,{ref:M,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":P+"px",...e.style}})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,children:i,...a}=e,c=g("ScrollAreaViewport",r),s=(0,o.useRef)(null),d=(0,u.e)(t,s,c.onViewportChange);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(l.WV.div,(0,n.Z)({"data-radix-scroll-area-viewport":""},a,{ref:d,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,o.createElement)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},i)))}),y="ScrollAreaScrollbar",S=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,i=g(y,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:u}=i,c="horizontal"===e.orientation;return(0,o.useEffect)(()=>(c?a(!0):u(!0),()=>{c?a(!1):u(!1)}),[c,a,u]),"hover"===i.type?(0,o.createElement)(C,(0,n.Z)({},l,{ref:t,forceMount:r})):"scroll"===i.type?(0,o.createElement)(x,(0,n.Z)({},l,{ref:t,forceMount:r})):"auto"===i.type?(0,o.createElement)(P,(0,n.Z)({},l,{ref:t,forceMount:r})):"always"===i.type?(0,o.createElement)(T,(0,n.Z)({},l,{ref:t})):null}),C=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=g(y,e.__scopeScrollArea),[u,c]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=a.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),c(!0)},n=()=>{t=window.setTimeout(()=>c(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[a.scrollArea,a.scrollHideDelay]),(0,o.createElement)(i.z,{present:r||u},(0,o.createElement)(P,(0,n.Z)({"data-state":u?"visible":"hidden"},l,{ref:t})))}),x=(0,o.forwardRef)((e,t)=>{var r,l;let{forceMount:a,...u}=e,c=g(y,e.__scopeScrollArea),s="horizontal"===e.orientation,d=Z(()=>v("SCROLL_END"),100),[f,v]=(r="hidden",l={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,o.useReducer)((e,t)=>{let r=l[e][t];return null!=r?r:e},r));return(0,o.useEffect)(()=>{if("idle"===f){let e=window.setTimeout(()=>v("HIDE"),c.scrollHideDelay);return()=>window.clearTimeout(e)}},[f,c.scrollHideDelay,v]),(0,o.useEffect)(()=>{let e=c.viewport,t=s?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t];r!==n&&(v("SCROLL"),d()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[c.viewport,s,v,d]),(0,o.createElement)(i.z,{present:a||"hidden"!==f},(0,o.createElement)(T,(0,n.Z)({"data-state":"hidden"===f?"hidden":"visible"},u,{ref:t,onPointerEnter:(0,p.M)(e.onPointerEnter,()=>v("POINTER_ENTER")),onPointerLeave:(0,p.M)(e.onPointerLeave,()=>v("POINTER_LEAVE"))})))}),P=(0,o.forwardRef)((e,t)=>{let r=g(y,e.__scopeScrollArea),{forceMount:l,...a}=e,[u,c]=(0,o.useState)(!1),s="horizontal"===e.orientation,d=Z(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;c(s?e:t)}},10);return F(r.viewport,d),F(r.content,d),(0,o.createElement)(i.z,{present:l||u},(0,o.createElement)(T,(0,n.Z)({"data-state":u?"visible":"hidden"},a,{ref:t})))}),T=(0,o.forwardRef)((e,t)=>{let{orientation:r="vertical",...l}=e,i=g(y,e.__scopeScrollArea),a=(0,o.useRef)(null),u=(0,o.useRef)(0),[c,s]=(0,o.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=k(c.viewport,c.content),f={...l,sizes:c,onSizesChange:s,hasThumb:!!(d>0&&d<1),onThumbChange:e=>a.current=e,onThumbPointerUp:()=>u.current=0,onThumbPointerDown:e=>u.current=e};function p(e,t){return function(e,t,r,n="ltr"){let o=N(r),l=t||o/2,i=r.scrollbar.paddingStart+l,a=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),u=r.content-r.viewport;return z([i,a],"ltr"===n?[0,u]:[-1*u,0])(e)}(e,u.current,c,t)}return"horizontal"===r?(0,o.createElement)(R,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=H(i.viewport.scrollLeft,c,i.dir);a.current.style.transform=`translate3d(${e}px, 0, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=p(e,i.dir))}})):"vertical"===r?(0,o.createElement)(D,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=H(i.viewport.scrollTop,c);a.current.style.transform=`translate3d(0, ${e}px, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=p(e))}})):null}),R=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:l,...i}=e,a=g(y,e.__scopeScrollArea),[c,s]=(0,o.useState)(),d=(0,o.useRef)(null),f=(0,u.e)(t,d,a.onScrollbarXChange);return(0,o.useEffect)(()=>{d.current&&s(getComputedStyle(d.current))},[d]),(0,o.createElement)(M,(0,n.Z)({"data-orientation":"horizontal"},i,{ref:f,sizes:r,style:{bottom:0,left:"rtl"===a.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===a.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":N(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(a.viewport){let n=a.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&a.viewport&&c&&l({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:I(c.paddingLeft),paddingEnd:I(c.paddingRight)}})}}))}),D=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:l,...i}=e,a=g(y,e.__scopeScrollArea),[c,s]=(0,o.useState)(),d=(0,o.useRef)(null),f=(0,u.e)(t,d,a.onScrollbarYChange);return(0,o.useEffect)(()=>{d.current&&s(getComputedStyle(d.current))},[d]),(0,o.createElement)(M,(0,n.Z)({"data-orientation":"vertical"},i,{ref:f,sizes:r,style:{top:0,right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":N(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(a.viewport){let n=a.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&a.viewport&&c&&l({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:I(c.paddingTop),paddingEnd:I(c.paddingBottom)}})}}))}),[L,_]=m(y),M=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,sizes:i,hasThumb:a,onThumbChange:s,onThumbPointerUp:d,onThumbPointerDown:f,onThumbPositionChange:v,onDragScroll:m,onWheelScroll:h,onResize:w,...b}=e,E=g(y,r),[S,C]=(0,o.useState)(null),x=(0,u.e)(t,e=>C(e)),P=(0,o.useRef)(null),T=(0,o.useRef)(""),R=E.viewport,D=i.content-i.viewport,_=(0,c.W)(h),M=(0,c.W)(v),W=Z(w,10);function A(e){P.current&&m({x:e.clientX-P.current.left,y:e.clientY-P.current.top})}return(0,o.useEffect)(()=>{let e=e=>{let t=e.target;(null==S?void 0:S.contains(t))&&_(e,D)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[R,S,D,_]),(0,o.useEffect)(M,[i,M]),F(S,W),F(E.content,W),(0,o.createElement)(L,{scope:r,scrollbar:S,hasThumb:a,onThumbChange:(0,c.W)(s),onThumbPointerUp:(0,c.W)(d),onThumbPositionChange:M,onThumbPointerDown:(0,c.W)(f)},(0,o.createElement)(l.WV.div,(0,n.Z)({},b,{ref:x,style:{position:"absolute",...b.style},onPointerDown:(0,p.M)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),P.current=S.getBoundingClientRect(),T.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",E.viewport&&(E.viewport.style.scrollBehavior="auto"),A(e))}),onPointerMove:(0,p.M)(e.onPointerMove,A),onPointerUp:(0,p.M)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=T.current,E.viewport&&(E.viewport.style.scrollBehavior=""),P.current=null})})))}),W="ScrollAreaThumb",A=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=_(W,e.__scopeScrollArea);return(0,o.createElement)(i.z,{present:r||a.hasThumb},(0,o.createElement)(O,(0,n.Z)({ref:t},l)))}),O=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,style:i,...a}=e,c=g(W,r),s=_(W,r),{onThumbPositionChange:d}=s,f=(0,u.e)(t,e=>s.onThumbChange(e)),v=(0,o.useRef)(),m=Z(()=>{v.current&&(v.current(),v.current=void 0)},100);return(0,o.useEffect)(()=>{let e=c.viewport;if(e){let t=()=>{if(m(),!v.current){let t=V(e,d);v.current=t,d()}};return d(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[c.viewport,m,d]),(0,o.createElement)(l.WV.div,(0,n.Z)({"data-state":s.hasThumb?"visible":"hidden"},a,{ref:f,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...i},onPointerDownCapture:(0,p.M)(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;s.onThumbPointerDown({x:r,y:n})}),onPointerUp:(0,p.M)(e.onPointerUp,s.onThumbPointerUp)}))});function I(e){return e?parseInt(e,10):0}function k(e,t){let r=e/t;return isNaN(r)?0:r}function N(e){let t=k(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-r)*t,18)}function H(e,t,r="ltr"){let n=N(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,i=t.content-t.viewport,a=(0,f.u)(e,"ltr"===r?[0,i]:[-1*i,0]);return z([0,i],[0,l-n])(a)}function z(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}(e,t)=>{let{__scopeScrollArea:r,...i}=e,a=g("ScrollAreaCorner",r),[u,c]=(0,o.useState)(0),[s,d]=(0,o.useState)(0),f=!!(u&&s);return F(a.scrollbarX,()=>{var e;let t=(null===(e=a.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;a.onCornerHeightChange(t),d(t)}),F(a.scrollbarY,()=>{var e;let t=(null===(e=a.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;a.onCornerWidthChange(t),c(t)}),f?(0,o.createElement)(l.WV.div,(0,n.Z)({},i,{ref:t,style:{width:u,height:s,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}})):null};let V=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=r.left!==l.left,a=r.top!==l.top;(i||a)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function Z(e,t){let r=(0,c.W)(e),n=(0,o.useRef)(0);return(0,o.useEffect)(()=>()=>window.clearTimeout(n.current),[]),(0,o.useCallback)(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function F(e,t){let r=(0,c.W)(t);(0,d.b)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}let B=b,K=E,U=S,Y=A},92218:function(e,t,r){let n,o;r.d(t,{VY:function(){return eY},ZA:function(){return eX},JO:function(){return eU},ck:function(){return e$},eT:function(){return eq},fC:function(){return eB},i4:function(){return eg},B4:function(){return eK}});var l=r(17610),i=r(7653),a=r(3458),u=r(90206),c=r(46196),s=r(99933),d=r(94492),f=r(8828),p=r(21004),v=r(78378),m=r(523),h=r(22139);let w="dismissableLayer.update",g=(0,i.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),b=(0,i.forwardRef)((e,t)=>{var r;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:a,onPointerDownOutside:u,onFocusOutside:s,onInteractOutside:f,onDismiss:p,...b}=e,S=(0,i.useContext)(g),[C,x]=(0,i.useState)(null),P=null!==(r=null==C?void 0:C.ownerDocument)&&void 0!==r?r:null==globalThis?void 0:globalThis.document,[,T]=(0,i.useState)({}),R=(0,d.e)(t,e=>x(e)),D=Array.from(S.layers),[L]=[...S.layersWithOutsidePointerEventsDisabled].slice(-1),_=D.indexOf(L),M=C?D.indexOf(C):-1,W=S.layersWithOutsidePointerEventsDisabled.size>0,A=M>=_,O=function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,m.W)(e),n=(0,i.useRef)(!1),o=(0,i.useRef)(()=>{});return(0,i.useEffect)(()=>{let e=e=>{if(e.target&&!n.current){let n={originalEvent:e};function l(){y("dismissableLayer.pointerDownOutside",r,n,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=l,t.addEventListener("click",o.current,{once:!0})):l()}else t.removeEventListener("click",o.current);n.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,r]),{onPointerDownCapture:()=>n.current=!0}}(e=>{let t=e.target,r=[...S.branches].some(e=>e.contains(t));!A||r||(null==u||u(e),null==f||f(e),e.defaultPrevented||null==p||p())},P),I=function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,m.W)(e),n=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e=e=>{e.target&&!n.current&&y("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}(e=>{let t=e.target;[...S.branches].some(e=>e.contains(t))||(null==s||s(e),null==f||f(e),e.defaultPrevented||null==p||p())},P);return(0,h.e)(e=>{M!==S.layers.size-1||(null==a||a(e),!e.defaultPrevented&&p&&(e.preventDefault(),p()))},P),(0,i.useEffect)(()=>{if(C)return o&&(0===S.layersWithOutsidePointerEventsDisabled.size&&(n=P.body.style.pointerEvents,P.body.style.pointerEvents="none"),S.layersWithOutsidePointerEventsDisabled.add(C)),S.layers.add(C),E(),()=>{o&&1===S.layersWithOutsidePointerEventsDisabled.size&&(P.body.style.pointerEvents=n)}},[C,P,o,S]),(0,i.useEffect)(()=>()=>{C&&(S.layers.delete(C),S.layersWithOutsidePointerEventsDisabled.delete(C),E())},[C,S]),(0,i.useEffect)(()=>{let e=()=>T({});return document.addEventListener(w,e),()=>document.removeEventListener(w,e)},[]),(0,i.createElement)(v.WV.div,(0,l.Z)({},b,{ref:R,style:{pointerEvents:W?A?"auto":"none":void 0,...e.style},onFocusCapture:(0,c.M)(e.onFocusCapture,I.onFocusCapture),onBlurCapture:(0,c.M)(e.onBlurCapture,I.onBlurCapture),onPointerDownCapture:(0,c.M)(e.onPointerDownCapture,O.onPointerDownCapture)}))});function E(){let e=new CustomEvent(w);document.dispatchEvent(e)}function y(e,t,r,{discrete:n}){let o=r.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&o.addEventListener(e,t,{once:!0}),n?(0,v.jH)(o,l):o.dispatchEvent(l)}var S=r(60307);let C="focusScope.autoFocusOnMount",x="focusScope.autoFocusOnUnmount",P={bubbles:!1,cancelable:!0},T=(0,i.forwardRef)((e,t)=>{let{loop:r=!1,trapped:n=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=e,[c,s]=(0,i.useState)(null),f=(0,m.W)(o),p=(0,m.W)(a),h=(0,i.useRef)(null),w=(0,d.e)(t,e=>s(e)),g=(0,i.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,i.useEffect)(()=>{if(n){function e(e){if(g.paused||!c)return;let t=e.target;c.contains(t)?h.current=t:L(h.current,{select:!0})}function t(e){if(g.paused||!c)return;let t=e.relatedTarget;null===t||c.contains(t)||L(h.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let r=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&L(c)});return c&&r.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),r.disconnect()}}},[n,c,g.paused]),(0,i.useEffect)(()=>{if(c){_.add(g);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(C,P);c.addEventListener(C,f),c.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let r=document.activeElement;for(let n of e)if(L(n,{select:t}),document.activeElement!==r)return}(R(c).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&L(c))}return()=>{c.removeEventListener(C,f),setTimeout(()=>{let t=new CustomEvent(x,P);c.addEventListener(x,p),c.dispatchEvent(t),t.defaultPrevented||L(null!=e?e:document.body,{select:!0}),c.removeEventListener(x,p),_.remove(g)},0)}}},[c,f,p,g]);let b=(0,i.useCallback)(e=>{if(!r&&!n||g.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[n,l]=function(e){let t=R(e);return[D(t,e),D(t.reverse(),e)]}(t);n&&l?e.shiftKey||o!==l?e.shiftKey&&o===n&&(e.preventDefault(),r&&L(l,{select:!0})):(e.preventDefault(),r&&L(n,{select:!0})):o===t&&e.preventDefault()}},[r,n,g.paused]);return(0,i.createElement)(v.WV.div,(0,l.Z)({tabIndex:-1},u,{ref:w,onKeyDown:b}))});function R(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function D(e,t){for(let r of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(r,{upTo:t}))return r}function L(e,{select:t=!1}={}){if(e&&e.focus){var r;let n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&(r=e)instanceof HTMLInputElement&&"select"in r&&t&&e.select()}}let _=(o=[],{add(e){let t=o[0];e!==t&&(null==t||t.pause()),(o=M(o,e)).unshift(e)},remove(e){var t;null===(t=(o=M(o,e))[0])||void 0===t||t.resume()}});function M(e,t){let r=[...e],n=r.indexOf(t);return -1!==n&&r.splice(n,1),r}var W=r(17321),A=r(32623),O=r(95152),I=r(37256),k=r(55918),N=r(81523),H=r(35032);let z="Popper",[V,Z]=(0,s.b)(z),[F,B]=V(z),K=(0,i.forwardRef)((e,t)=>{let{__scopePopper:r,virtualRef:n,...o}=e,a=B("PopperAnchor",r),u=(0,i.useRef)(null),c=(0,d.e)(t,u);return(0,i.useEffect)(()=>{a.onAnchorChange((null==n?void 0:n.current)||u.current)}),n?null:(0,i.createElement)(v.WV.div,(0,l.Z)({},o,{ref:c}))}),U="PopperContent",[Y,X]=V(U),$=(0,i.forwardRef)((e,t)=>{var r,n,o,a,u,c,s,f;let{__scopePopper:p,side:h="bottom",sideOffset:w=0,align:g="center",alignOffset:b=0,arrowPadding:E=0,avoidCollisions:y=!0,collisionBoundary:S=[],collisionPadding:C=0,sticky:x="partial",hideWhenDetached:P=!1,updatePositionStrategy:T="optimized",onPlaced:R,...D}=e,L=B(U,p),[_,M]=(0,i.useState)(null),W=(0,d.e)(t,e=>M(e)),[k,z]=(0,i.useState)(null),V=(0,H.t)(k),Z=null!==(r=null==V?void 0:V.width)&&void 0!==r?r:0,F=null!==(n=null==V?void 0:V.height)&&void 0!==n?n:0,K="number"==typeof C?C:{top:0,right:0,bottom:0,left:0,...C},X=Array.isArray(S)?S:[S],$=X.length>0,q={padding:K,boundary:X.filter(j),altBoundary:$},{refs:Q,floatingStyles:ee,placement:et,isPositioned:er,middlewareData:en}=(0,A.YF)({strategy:"fixed",placement:h+("center"!==g?"-"+g:""),whileElementsMounted:(...e)=>(0,O.Me)(...e,{animationFrame:"always"===T}),elements:{reference:L.anchor},middleware:[(0,I.cv)({mainAxis:w+F,alignmentAxis:b}),y&&(0,I.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===x?(0,I.dr)():void 0,...q}),y&&(0,I.RR)({...q}),(0,I.dp)({...q,apply:({elements:e,rects:t,availableWidth:r,availableHeight:n})=>{let{width:o,height:l}=t.reference,i=e.floating.style;i.setProperty("--radix-popper-available-width",`${r}px`),i.setProperty("--radix-popper-available-height",`${n}px`),i.setProperty("--radix-popper-anchor-width",`${o}px`),i.setProperty("--radix-popper-anchor-height",`${l}px`)}}),k&&(0,A.x7)({element:k,padding:E}),G({arrowWidth:Z,arrowHeight:F}),P&&(0,I.Cp)({strategy:"referenceHidden",...q})]}),[eo,el]=J(et),ei=(0,m.W)(R);(0,N.b)(()=>{er&&(null==ei||ei())},[er,ei]);let ea=null===(o=en.arrow)||void 0===o?void 0:o.x,eu=null===(a=en.arrow)||void 0===a?void 0:a.y,ec=(null===(u=en.arrow)||void 0===u?void 0:u.centerOffset)!==0,[es,ed]=(0,i.useState)();return(0,N.b)(()=>{_&&ed(window.getComputedStyle(_).zIndex)},[_]),(0,i.createElement)("div",{ref:Q.setFloating,"data-radix-popper-content-wrapper":"",style:{...ee,transform:er?ee.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:es,"--radix-popper-transform-origin":[null===(c=en.transformOrigin)||void 0===c?void 0:c.x,null===(s=en.transformOrigin)||void 0===s?void 0:s.y].join(" ")},dir:e.dir},(0,i.createElement)(Y,{scope:p,placedSide:eo,onArrowChange:z,arrowX:ea,arrowY:eu,shouldHideArrow:ec},(0,i.createElement)(v.WV.div,(0,l.Z)({"data-side":eo,"data-align":el},D,{ref:W,style:{...D.style,animation:er?void 0:"none",opacity:null!==(f=en.hide)&&void 0!==f&&f.referenceHidden?0:void 0}}))))}),q={top:"bottom",right:"left",bottom:"top",left:"right"};function j(e){return null!==e}let G=e=>({name:"transformOrigin",options:e,fn(t){var r,n,o,l,i;let{placement:a,rects:u,middlewareData:c}=t,s=(null===(r=c.arrow)||void 0===r?void 0:r.centerOffset)!==0,d=s?0:e.arrowWidth,f=s?0:e.arrowHeight,[p,v]=J(a),m={start:"0%",center:"50%",end:"100%"}[v],h=(null!==(n=null===(o=c.arrow)||void 0===o?void 0:o.x)&&void 0!==n?n:0)+d/2,w=(null!==(l=null===(i=c.arrow)||void 0===i?void 0:i.y)&&void 0!==l?l:0)+f/2,g="",b="";return"bottom"===p?(g=s?m:`${h}px`,b=`${-f}px`):"top"===p?(g=s?m:`${h}px`,b=`${u.floating.height+f}px`):"right"===p?(g=`${-f}px`,b=s?m:`${w}px`):"left"===p&&(g=`${u.floating.width+f}px`,b=s?m:`${w}px`),{data:{x:g,y:b}}}});function J(e){let[t,r="center"]=e.split("-");return[t,r]}let Q=e=>{let{__scopePopper:t,children:r}=e,[n,o]=(0,i.useState)(null);return(0,i.createElement)(F,{scope:t,anchor:n,onAnchorChange:o},r)};var ee=r(47178),et=r(1403),er=r(3336),en=r(27130),eo=r(59242);let el=[" ","Enter","ArrowUp","ArrowDown"],ei=[" ","Enter"],ea="Select",[eu,ec,es]=function(e){let t=e+"CollectionProvider",[r,n]=(0,s.b)(t),[o,l]=r(t,{collectionRef:{current:null},itemMap:new Map}),a=e+"CollectionSlot",u=i.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=l(a,r),u=(0,d.e)(t,o.collectionRef);return i.createElement(f.g7,{ref:u},n)}),c=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,n=i.useRef(null),l=i.useRef(new Map).current;return i.createElement(o,{scope:t,itemMap:l,collectionRef:n},r)},Slot:u,ItemSlot:i.forwardRef((e,t)=>{let{scope:r,children:n,...o}=e,a=i.useRef(null),u=(0,d.e)(t,a),s=l(c,r);return i.useEffect(()=>(s.itemMap.set(a,{ref:a,...o}),()=>void s.itemMap.delete(a))),i.createElement(f.g7,{[p]:"",ref:u},n)})},function(t){let r=l(e+"CollectionConsumer",t);return i.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},n]}(ea),[ed,ef]=(0,s.b)(ea,[es,Z]),ep=Z(),[ev,em]=ed(ea),[eh,ew]=ed(ea),eg=(0,i.forwardRef)((e,t)=>{let{__scopeSelect:r,disabled:n=!1,...o}=e,a=ep(r),u=em("SelectTrigger",r),s=u.disabled||n,f=(0,d.e)(t,u.onTriggerChange),p=ec(r),[m,h,w]=eZ(e=>{let t=p().filter(e=>!e.disabled),r=t.find(e=>e.value===u.value),n=eF(t,e,r);void 0!==n&&u.onValueChange(n.value)}),g=()=>{s||(u.onOpenChange(!0),w())};return(0,i.createElement)(K,(0,l.Z)({asChild:!0},a),(0,i.createElement)(v.WV.button,(0,l.Z)({type:"button",role:"combobox","aria-controls":u.contentId,"aria-expanded":u.open,"aria-required":u.required,"aria-autocomplete":"none",dir:u.dir,"data-state":u.open?"open":"closed",disabled:s,"data-disabled":s?"":void 0,"data-placeholder":ez(u.value)?"":void 0},o,{ref:f,onClick:(0,c.M)(o.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,c.M)(o.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(g(),u.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,c.M)(o.onKeyDown,e=>{let t=""!==m.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||h(e.key),(!t||" "!==e.key)&&el.includes(e.key)&&(g(),e.preventDefault())})})))}),eb=(0,i.forwardRef)((e,t)=>{let{__scopeSelect:r,className:n,style:o,children:a,placeholder:u="",...c}=e,s=em("SelectValue",r),{onValueNodeHasChildrenChange:f}=s,p=void 0!==a,m=(0,d.e)(t,s.onValueNodeChange);return(0,N.b)(()=>{f(p)},[f,p]),(0,i.createElement)(v.WV.span,(0,l.Z)({},c,{ref:m,style:{pointerEvents:"none"}}),ez(s.value)?(0,i.createElement)(i.Fragment,null,u):a)}),eE=(0,i.forwardRef)((e,t)=>{let{__scopeSelect:r,children:n,...o}=e;return(0,i.createElement)(v.WV.span,(0,l.Z)({"aria-hidden":!0},o,{ref:t}),n||"▼")}),ey="SelectContent",eS=(0,i.forwardRef)((e,t)=>{let r=em(ey,e.__scopeSelect),[n,o]=(0,i.useState)();return((0,N.b)(()=>{o(new DocumentFragment)},[]),r.open)?(0,i.createElement)(eP,(0,l.Z)({},e,{ref:t})):n?(0,a.createPortal)((0,i.createElement)(eC,{scope:e.__scopeSelect},(0,i.createElement)(eu.Slot,{scope:e.__scopeSelect},(0,i.createElement)("div",null,e.children))),n):null}),[eC,ex]=ed(ey),eP=(0,i.forwardRef)((e,t)=>{let{__scopeSelect:r,position:n="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:a,onPointerDownOutside:u,side:s,sideOffset:p,align:v,alignOffset:m,arrowPadding:h,collisionBoundary:w,collisionPadding:g,sticky:E,hideWhenDetached:y,avoidCollisions:C,...x}=e,P=em(ey,r),[R,D]=(0,i.useState)(null),[L,_]=(0,i.useState)(null),M=(0,d.e)(t,e=>D(e)),[W,A]=(0,i.useState)(null),[O,I]=(0,i.useState)(null),k=ec(r),[N,H]=(0,i.useState)(!1),z=(0,i.useRef)(!1);(0,i.useEffect)(()=>{if(R)return(0,en.Ry)(R)},[R]),(0,S.EW)();let V=(0,i.useCallback)(e=>{let[t,...r]=k().map(e=>e.ref.current),[n]=r.slice(-1),o=document.activeElement;for(let r of e)if(r===o||(null==r||r.scrollIntoView({block:"nearest"}),r===t&&L&&(L.scrollTop=0),r===n&&L&&(L.scrollTop=L.scrollHeight),null==r||r.focus(),document.activeElement!==o))return},[k,L]),Z=(0,i.useCallback)(()=>V([W,R]),[V,W,R]);(0,i.useEffect)(()=>{N&&Z()},[N,Z]);let{onOpenChange:F,triggerPointerDownPosRef:B}=P;(0,i.useEffect)(()=>{if(R){let e={x:0,y:0},t=t=>{var r,n,o,l;e={x:Math.abs(Math.round(t.pageX)-(null!==(r=null===(n=B.current)||void 0===n?void 0:n.x)&&void 0!==r?r:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(l=B.current)||void 0===l?void 0:l.y)&&void 0!==o?o:0))}},r=r=>{e.x<=10&&e.y<=10?r.preventDefault():R.contains(r.target)||F(!1),document.removeEventListener("pointermove",t),B.current=null};return null!==B.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",r,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r,{capture:!0})}}},[R,F,B]),(0,i.useEffect)(()=>{let e=()=>F(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[F]);let[K,U]=eZ(e=>{let t=k().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),n=eF(t,e,r);n&&setTimeout(()=>n.ref.current.focus())}),Y=(0,i.useCallback)((e,t,r)=>{let n=!z.current&&!r;(void 0!==P.value&&P.value===t||n)&&(A(e),n&&(z.current=!0))},[P.value]),X=(0,i.useCallback)(()=>null==R?void 0:R.focus(),[R]),$=(0,i.useCallback)((e,t,r)=>{let n=!z.current&&!r;(void 0!==P.value&&P.value===t||n)&&I(e)},[P.value]),q="popper"===n?eR:eT;return(0,i.createElement)(eC,{scope:r,content:R,viewport:L,onViewportChange:_,itemRefCallback:Y,selectedItem:W,onItemLeave:X,itemTextRefCallback:$,focusSelectedItem:Z,selectedItemText:O,position:n,isPositioned:N,searchRef:K},(0,i.createElement)(eo.Z,{as:f.g7,allowPinchZoom:!0},(0,i.createElement)(T,{asChild:!0,trapped:P.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,c.M)(o,e=>{var t;null===(t=P.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()})},(0,i.createElement)(b,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:a,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>P.onOpenChange(!1)},(0,i.createElement)(q,(0,l.Z)({role:"listbox",id:P.contentId,"data-state":P.open?"open":"closed",dir:P.dir,onContextMenu:e=>e.preventDefault()},x,q===eR?{side:s,sideOffset:p,align:v,alignOffset:m,arrowPadding:h,collisionBoundary:w,collisionPadding:g,sticky:E,hideWhenDetached:y,avoidCollisions:C}:{},{onPlaced:()=>H(!0),ref:M,style:{display:"flex",flexDirection:"column",outline:"none",...x.style},onKeyDown:(0,c.M)(x.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||U(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=k().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let r=e.target,n=t.indexOf(r);t=t.slice(n+1)}setTimeout(()=>V(t)),e.preventDefault()}})}))))))}),eT=(0,i.forwardRef)((e,t)=>{let{__scopeSelect:r,onPlaced:n,...o}=e,a=em(ey,r),c=ex(ey,r),[s,f]=(0,i.useState)(null),[p,m]=(0,i.useState)(null),h=(0,d.e)(t,e=>m(e)),w=ec(r),g=(0,i.useRef)(!1),b=(0,i.useRef)(!0),{viewport:E,selectedItem:y,selectedItemText:S,focusSelectedItem:C}=c,x=(0,i.useCallback)(()=>{if(a.trigger&&a.valueNode&&s&&p&&E&&y&&S){let e=a.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),r=a.valueNode.getBoundingClientRect(),o=S.getBoundingClientRect();if("rtl"!==a.dir){let n=o.left-t.left,l=r.left-n,i=e.left-l,a=e.width+i,c=Math.max(a,t.width),d=window.innerWidth-10,f=(0,u.u)(l,[10,d-c]);s.style.minWidth=a+"px",s.style.left=f+"px"}else{let n=t.right-o.right,l=window.innerWidth-r.right-n,i=window.innerWidth-e.right-l,a=e.width+i,c=Math.max(a,t.width),d=window.innerWidth-10,f=(0,u.u)(l,[10,d-c]);s.style.minWidth=a+"px",s.style.right=f+"px"}let l=w(),i=window.innerHeight-20,c=E.scrollHeight,d=window.getComputedStyle(p),f=parseInt(d.borderTopWidth,10),v=parseInt(d.paddingTop,10),m=parseInt(d.borderBottomWidth,10),h=f+v+c+parseInt(d.paddingBottom,10)+m,b=Math.min(5*y.offsetHeight,h),C=window.getComputedStyle(E),x=parseInt(C.paddingTop,10),P=parseInt(C.paddingBottom,10),T=e.top+e.height/2-10,R=y.offsetHeight/2,D=f+v+(y.offsetTop+R);if(D<=T){let e=y===l[l.length-1].ref.current;s.style.bottom="0px";let t=p.clientHeight-E.offsetTop-E.offsetHeight;s.style.height=D+Math.max(i-T,R+(e?P:0)+t+m)+"px"}else{let e=y===l[0].ref.current;s.style.top="0px";let t=Math.max(T,f+E.offsetTop+(e?x:0)+R);s.style.height=t+(h-D)+"px",E.scrollTop=D-T+E.offsetTop}s.style.margin="10px 0",s.style.minHeight=b+"px",s.style.maxHeight=i+"px",null==n||n(),requestAnimationFrame(()=>g.current=!0)}},[w,a.trigger,a.valueNode,s,p,E,y,S,a.dir,n]);(0,N.b)(()=>x(),[x]);let[P,T]=(0,i.useState)();(0,N.b)(()=>{p&&T(window.getComputedStyle(p).zIndex)},[p]);let R=(0,i.useCallback)(e=>{e&&!0===b.current&&(x(),null==C||C(),b.current=!1)},[x,C]);return(0,i.createElement)(eD,{scope:r,contentWrapper:s,shouldExpandOnScrollRef:g,onScrollButtonChange:R},(0,i.createElement)("div",{ref:f,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:P}},(0,i.createElement)(v.WV.div,(0,l.Z)({},o,{ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}}))))}),eR=(0,i.forwardRef)((e,t)=>{let{__scopeSelect:r,align:n="start",collisionPadding:o=10,...a}=e,u=ep(r);return(0,i.createElement)($,(0,l.Z)({},u,a,{ref:t,align:n,collisionPadding:o,style:{boxSizing:"border-box",...a.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[eD,eL]=ed(ey,{}),[e_,eM]=ed("SelectGroup"),eW=(0,i.forwardRef)((e,t)=>{let{__scopeSelect:r,...n}=e,o=(0,W.M)();return(0,i.createElement)(e_,{scope:r,id:o},(0,i.createElement)(v.WV.div,(0,l.Z)({role:"group","aria-labelledby":o},n,{ref:t})))}),eA="SelectItem",[eO,eI]=ed(eA),ek=(0,i.forwardRef)((e,t)=>{let{__scopeSelect:r,value:n,disabled:o=!1,textValue:a,...u}=e,s=em(eA,r),f=ex(eA,r),p=s.value===n,[m,h]=(0,i.useState)(null!=a?a:""),[w,g]=(0,i.useState)(!1),b=(0,d.e)(t,e=>{var t;return null===(t=f.itemRefCallback)||void 0===t?void 0:t.call(f,e,n,o)}),E=(0,W.M)(),y=()=>{o||(s.onValueChange(n),s.onOpenChange(!1))};if(""===n)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,i.createElement)(eO,{scope:r,value:n,disabled:o,textId:E,isSelected:p,onItemTextChange:(0,i.useCallback)(e=>{h(t=>{var r;return t||(null!==(r=null==e?void 0:e.textContent)&&void 0!==r?r:"").trim()})},[])},(0,i.createElement)(eu.ItemSlot,{scope:r,value:n,disabled:o,textValue:m},(0,i.createElement)(v.WV.div,(0,l.Z)({role:"option","aria-labelledby":E,"data-highlighted":w?"":void 0,"aria-selected":p&&w,"data-state":p?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1},u,{ref:b,onFocus:(0,c.M)(u.onFocus,()=>g(!0)),onBlur:(0,c.M)(u.onBlur,()=>g(!1)),onPointerUp:(0,c.M)(u.onPointerUp,y),onPointerMove:(0,c.M)(u.onPointerMove,e=>{if(o){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,c.M)(u.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=f.onItemLeave)||void 0===t||t.call(f)}}),onKeyDown:(0,c.M)(u.onKeyDown,e=>{var t;(null===(t=f.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(ei.includes(e.key)&&y()," "===e.key&&e.preventDefault())})}))))}),eN="SelectItemText",eH=(0,i.forwardRef)((e,t)=>{let{__scopeSelect:r,className:n,style:o,...u}=e,c=em(eN,r),s=ex(eN,r),f=eI(eN,r),p=ew(eN,r),[m,h]=(0,i.useState)(null),w=(0,d.e)(t,e=>h(e),f.onItemTextChange,e=>{var t;return null===(t=s.itemTextRefCallback)||void 0===t?void 0:t.call(s,e,f.value,f.disabled)}),g=null==m?void 0:m.textContent,b=(0,i.useMemo)(()=>(0,i.createElement)("option",{key:f.value,value:f.value,disabled:f.disabled},g),[f.disabled,f.value,g]),{onNativeOptionAdd:E,onNativeOptionRemove:y}=p;return(0,N.b)(()=>(E(b),()=>y(b)),[E,y,b]),(0,i.createElement)(i.Fragment,null,(0,i.createElement)(v.WV.span,(0,l.Z)({id:f.textId},u,{ref:w})),f.isSelected&&c.valueNode&&!c.valueNodeHasChildren?(0,a.createPortal)(u.children,c.valueNode):null)});function ez(e){return""===e||void 0===e}(e,t)=>{let{__scopeSelect:r,onAutoScroll:n,...o}=e,a=ex("SelectScrollButton",r),u=(0,i.useRef)(null),s=ec(r),d=(0,i.useCallback)(()=>{null!==u.current&&(window.clearInterval(u.current),u.current=null)},[]);return(0,i.useEffect)(()=>()=>d(),[d]),(0,N.b)(()=>{var e;let t=s().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[s]),(0,i.createElement)(v.WV.div,(0,l.Z)({"aria-hidden":!0},o,{ref:t,style:{flexShrink:0,...o.style},onPointerDown:(0,c.M)(o.onPointerDown,()=>{null===u.current&&(u.current=window.setInterval(n,50))}),onPointerMove:(0,c.M)(o.onPointerMove,()=>{var e;null===(e=a.onItemLeave)||void 0===e||e.call(a),null===u.current&&(u.current=window.setInterval(n,50))}),onPointerLeave:(0,c.M)(o.onPointerLeave,()=>{d()})}))};let eV=(0,i.forwardRef)((e,t)=>{let{value:r,...n}=e,o=(0,i.useRef)(null),a=(0,d.e)(t,o),u=(0,et.D)(r);return(0,i.useEffect)(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(u!==r&&t){let n=new Event("change",{bubbles:!0});t.call(e,r),e.dispatchEvent(n)}},[u,r]),(0,i.createElement)(er.T,{asChild:!0},(0,i.createElement)("select",(0,l.Z)({},n,{ref:a,defaultValue:r})))});function eZ(e){let t=(0,m.W)(e),r=(0,i.useRef)(""),n=(0,i.useRef)(0),o=(0,i.useCallback)(e=>{let o=r.current+e;t(o),function e(t){r.current=t,window.clearTimeout(n.current),""!==t&&(n.current=window.setTimeout(()=>e(""),1e3))}(o)},[t]),l=(0,i.useCallback)(()=>{r.current="",window.clearTimeout(n.current)},[]);return(0,i.useEffect)(()=>()=>window.clearTimeout(n.current),[]),[r,o,l]}function eF(e,t,r){var n;let o=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,l=(n=Math.max(r?e.indexOf(r):-1,0),e.map((t,r)=>e[(n+r)%e.length]));1===o.length&&(l=l.filter(e=>e!==r));let i=l.find(e=>e.textValue.toLowerCase().startsWith(o.toLowerCase()));return i!==r?i:void 0}eV.displayName="BubbleSelect";let eB=e=>{let{__scopeSelect:t,children:r,open:n,defaultOpen:o,onOpenChange:l,value:a,defaultValue:u,onValueChange:c,dir:s,name:d,autoComplete:f,disabled:v,required:m}=e,h=ep(t),[w,g]=(0,i.useState)(null),[b,E]=(0,i.useState)(null),[y,S]=(0,i.useState)(!1),C=(0,p.gm)(s),[x=!1,P]=(0,ee.T)({prop:n,defaultProp:o,onChange:l}),[T,R]=(0,ee.T)({prop:a,defaultProp:u,onChange:c}),D=(0,i.useRef)(null),L=!w||!!w.closest("form"),[_,M]=(0,i.useState)(new Set),A=Array.from(_).map(e=>e.props.value).join(";");return(0,i.createElement)(Q,h,(0,i.createElement)(ev,{required:m,scope:t,trigger:w,onTriggerChange:g,valueNode:b,onValueNodeChange:E,valueNodeHasChildren:y,onValueNodeHasChildrenChange:S,contentId:(0,W.M)(),value:T,onValueChange:R,open:x,onOpenChange:P,dir:C,triggerPointerDownPosRef:D,disabled:v},(0,i.createElement)(eu.Provider,{scope:t},(0,i.createElement)(eh,{scope:e.__scopeSelect,onNativeOptionAdd:(0,i.useCallback)(e=>{M(t=>new Set(t).add(e))},[]),onNativeOptionRemove:(0,i.useCallback)(e=>{M(t=>{let r=new Set(t);return r.delete(e),r})},[])},r)),L?(0,i.createElement)(eV,{key:A,"aria-hidden":!0,required:m,tabIndex:-1,name:d,autoComplete:f,value:T,onChange:e=>R(e.target.value),disabled:v},void 0===T?(0,i.createElement)("option",{value:""}):null,Array.from(_)):null))},eK=eb,eU=eE,eY=eS,eX=eW,e$=ek,eq=eH},1403:function(e,t,r){r.d(t,{D:function(){return o}});var n=r(7653);function o(e){let t=(0,n.useRef)({value:e,previous:e});return(0,n.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}}]);
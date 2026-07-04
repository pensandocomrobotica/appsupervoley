(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fy={exports:{}},Yl={},py={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),yw=Symbol.for("react.portal"),_w=Symbol.for("react.fragment"),vw=Symbol.for("react.strict_mode"),Ew=Symbol.for("react.profiler"),ww=Symbol.for("react.provider"),Tw=Symbol.for("react.context"),Iw=Symbol.for("react.forward_ref"),Sw=Symbol.for("react.suspense"),Aw=Symbol.for("react.memo"),kw=Symbol.for("react.lazy"),Mp=Symbol.iterator;function Cw(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var my={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gy=Object.assign,yy={};function Yi(t,e,n){this.props=t,this.context=e,this.refs=yy,this.updater=n||my}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _y(){}_y.prototype=Yi.prototype;function Jh(t,e,n){this.props=t,this.context=e,this.refs=yy,this.updater=n||my}var Zh=Jh.prototype=new _y;Zh.constructor=Jh;gy(Zh,Yi.prototype);Zh.isPureReactComponent=!0;var Fp=Array.isArray,vy=Object.prototype.hasOwnProperty,ed={current:null},Ey={key:!0,ref:!0,__self:!0,__source:!0};function wy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vy.call(e,r)&&!Ey.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Lo,type:t,key:s,ref:o,props:i,_owner:ed.current}}function Rw(t,e){return{$$typeof:Lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lo}function xw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jp=/\/+/g;function Qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xw(""+t.key):e.toString(36)}function $a(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Lo:case yw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Qu(o,0):r,Fp(i)?(n="",t!=null&&(n=t.replace(jp,"$&/")+"/"),$a(i,e,n,"",function(h){return h})):i!=null&&(td(i)&&(i=Rw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Qu(s,l);o+=$a(s,e,n,u,i)}else if(u=Cw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Qu(s,l++),o+=$a(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ea(t,e,n){if(t==null)return t;var r=[],i=0;return $a(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Pw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},qa={transition:null},Nw={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:qa,ReactCurrentOwner:ed};function Ty(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Ea,forEach:function(t,e,n){Ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ea(t,function(){e++}),e},toArray:function(t){return Ea(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Yi;ee.Fragment=_w;ee.Profiler=Ew;ee.PureComponent=Jh;ee.StrictMode=vw;ee.Suspense=Sw;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nw;ee.act=Ty;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ed.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)vy.call(e,u)&&!Ey.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Lo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:Tw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ww,_context:t},t.Consumer=t};ee.createElement=wy;ee.createFactory=function(t){var e=wy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:Iw,render:t}};ee.isValidElement=td;ee.lazy=function(t){return{$$typeof:kw,_payload:{_status:-1,_result:t},_init:Pw}};ee.memo=function(t,e){return{$$typeof:Aw,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};ee.unstable_act=Ty;ee.useCallback=function(t,e){return dt.current.useCallback(t,e)};ee.useContext=function(t){return dt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return dt.current.useEffect(t,e)};ee.useId=function(){return dt.current.useId()};ee.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return dt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};ee.useRef=function(t){return dt.current.useRef(t)};ee.useState=function(t){return dt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return dt.current.useTransition()};ee.version="18.3.1";py.exports=ee;var te=py.exports;const nd=gw(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dw=te,bw=Symbol.for("react.element"),Vw=Symbol.for("react.fragment"),Ow=Object.prototype.hasOwnProperty,Lw=Dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mw={key:!0,ref:!0,__self:!0,__source:!0};function Iy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ow.call(e,r)&&!Mw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bw,type:t,key:s,ref:o,props:i,_owner:Lw.current}}Yl.Fragment=Vw;Yl.jsx=Iy;Yl.jsxs=Iy;fy.exports=Yl;var p=fy.exports,bc={},Sy={exports:{}},Rt={},Ay={exports:{}},ky={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var Y=B.length;B.push(Q);e:for(;0<Y;){var ge=Y-1>>>1,ue=B[ge];if(0<i(ue,Q))B[ge]=Q,B[Y]=ue,Y=ge;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],Y=B.pop();if(Y!==Q){B[0]=Y;e:for(var ge=0,ue=B.length,oe=ue>>>1;ge<oe;){var fe=2*(ge+1)-1,Ve=B[fe],Pt=fe+1,pt=B[Pt];if(0>i(Ve,Y))Pt<ue&&0>i(pt,Ve)?(B[ge]=pt,B[Pt]=Y,ge=Pt):(B[ge]=Ve,B[fe]=Y,ge=fe);else if(Pt<ue&&0>i(pt,Y))B[ge]=pt,B[Pt]=Y,ge=Pt;else break e}}return Q}function i(B,Q){var Y=B.sortIndex-Q.sortIndex;return Y!==0?Y:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,_=3,C=!1,N=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=B)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function V(B){if(P=!1,k(B),!N)if(n(u)!==null)N=!0,yr(j);else{var Q=n(h);Q!==null&&Tt(V,Q.startTime-B)}}function j(B,Q){N=!1,P&&(P=!1,I(y),y=-1),C=!0;var Y=_;try{for(k(Q),g=n(u);g!==null&&(!(g.expirationTime>Q)||B&&!A());){var ge=g.callback;if(typeof ge=="function"){g.callback=null,_=g.priorityLevel;var ue=ge(g.expirationTime<=Q);Q=t.unstable_now(),typeof ue=="function"?g.callback=ue:g===n(u)&&r(u),k(Q)}else r(u);g=n(u)}if(g!==null)var oe=!0;else{var fe=n(h);fe!==null&&Tt(V,fe.startTime-Q),oe=!1}return oe}finally{g=null,_=Y,C=!1}}var F=!1,E=null,y=-1,w=5,T=-1;function A(){return!(t.unstable_now()-T<w)}function R(){if(E!==null){var B=t.unstable_now();T=B;var Q=!0;try{Q=E(!0,B)}finally{Q?S():(F=!1,E=null)}}else F=!1}var S;if(typeof v=="function")S=function(){v(R)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,Xt=ze.port2;ze.port1.onmessage=R,S=function(){Xt.postMessage(null)}}else S=function(){b(R,0)};function yr(B){E=B,F||(F=!0,S())}function Tt(B,Q){y=b(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){N||C||(N=!0,yr(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var Y=_;_=Q;try{return B()}finally{_=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=_;_=B;try{return Q()}finally{_=Y}},t.unstable_scheduleCallback=function(B,Q,Y){var ge=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ge+Y:ge):Y=ge,B){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Y+ue,B={id:f++,callback:Q,priorityLevel:B,startTime:Y,expirationTime:ue,sortIndex:-1},Y>ge?(B.sortIndex=Y,e(h,B),n(u)===null&&B===n(h)&&(P?(I(y),y=-1):P=!0,Tt(V,Y-ge))):(B.sortIndex=ue,e(u,B),N||C||(N=!0,yr(j))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var Q=_;return function(){var Y=_;_=Q;try{return B.apply(this,arguments)}finally{_=Y}}}})(ky);Ay.exports=ky;var Fw=Ay.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jw=te,Ct=Fw;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cy=new Set,io={};function Gr(t,e){Vi(t,e),Vi(t+"Capture",e)}function Vi(t,e){for(io[t]=e,t=0;t<e.length;t++)Cy.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,Uw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Up={},Bp={};function Bw(t){return Vc.call(Bp,t)?!0:Vc.call(Up,t)?!1:Uw.test(t)?Bp[t]=!0:(Up[t]=!0,!1)}function zw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $w(t,e,n,r){if(e===null||typeof e>"u"||zw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var rd=/[\-:]([a-z])/g;function id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rd,id);Qe[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rd,id);Qe[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rd,id);Qe[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function sd(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($w(e,n,i,r)&&(n=null),r||i===null?Bw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),hi=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Ry=Symbol.for("react.provider"),xy=Symbol.for("react.context"),ad=Symbol.for("react.forward_ref"),Lc=Symbol.for("react.suspense"),Mc=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),Py=Symbol.for("react.offscreen"),zp=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=zp&&t[zp]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Yu;function Vs(t){if(Yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||""}return`
`+Yu+t}var Xu=!1;function Ju(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function qw(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=Ju(t.type,!1),t;case 11:return t=Ju(t.type.render,!1),t;case 1:return t=Ju(t.type,!0),t;default:return""}}function Fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case di:return"Fragment";case hi:return"Portal";case Oc:return"Profiler";case od:return"StrictMode";case Lc:return"Suspense";case Mc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xy:return(t.displayName||"Context")+".Consumer";case Ry:return(t._context.displayName||"Context")+".Provider";case ad:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ld:return e=t.displayName||null,e!==null?e:Fc(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return Fc(t(e))}catch{}}return null}function Ww(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fc(e);case 8:return e===od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ny(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hw(t){var e=Ny(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=Hw(t))}function Dy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ny(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jc(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function by(t,e){e=e.checked,e!=null&&sd(t,"checked",e,!1)}function Uc(t,e){by(t,e);var n=ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bc(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bc(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function Si(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Os(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Vy(t,e){var n=ar(e.value),r=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Oy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Oy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,Ly=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function so(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kw=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){Kw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function My(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function Fy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=My(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Gw=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qc(t,e){if(e){if(Gw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hc=null;function ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kc=null,Ai=null,ki=null;function Kp(t){if(t=jo(t)){if(typeof Kc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=tu(e),Kc(t.stateNode,t.type,e))}}function jy(t){Ai?ki?ki.push(t):ki=[t]:Ai=t}function Uy(){if(Ai){var t=Ai,e=ki;if(ki=Ai=null,Kp(t),e)for(t=0;t<e.length;t++)Kp(e[t])}}function By(t,e){return t(e)}function zy(){}var Zu=!1;function $y(t,e,n){if(Zu)return t(e,n);Zu=!0;try{return By(t,e,n)}finally{Zu=!1,(Ai!==null||ki!==null)&&(zy(),Uy())}}function oo(t,e){var n=t.stateNode;if(n===null)return null;var r=tu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Gc=!1;if(In)try{var As={};Object.defineProperty(As,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Gc=!1}function Qw(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ws=!1,hl=null,dl=!1,Qc=null,Yw={onError:function(t){Ws=!0,hl=t}};function Xw(t,e,n,r,i,s,o,l,u){Ws=!1,hl=null,Qw.apply(Yw,arguments)}function Jw(t,e,n,r,i,s,o,l,u){if(Xw.apply(this,arguments),Ws){if(Ws){var h=hl;Ws=!1,hl=null}else throw Error(M(198));dl||(dl=!0,Qc=h)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(Qr(t)!==t)throw Error(M(188))}function Zw(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gp(i),t;if(s===r)return Gp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Wy(t){return t=Zw(t),t!==null?Hy(t):null}function Hy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hy(t);if(e!==null)return e;t=t.sibling}return null}var Ky=Ct.unstable_scheduleCallback,Qp=Ct.unstable_cancelCallback,eT=Ct.unstable_shouldYield,tT=Ct.unstable_requestPaint,Pe=Ct.unstable_now,nT=Ct.unstable_getCurrentPriorityLevel,cd=Ct.unstable_ImmediatePriority,Gy=Ct.unstable_UserBlockingPriority,fl=Ct.unstable_NormalPriority,rT=Ct.unstable_LowPriority,Qy=Ct.unstable_IdlePriority,Xl=null,nn=null;function iT(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:aT,sT=Math.log,oT=Math.LN2;function aT(t){return t>>>=0,t===0?32:31-(sT(t)/oT|0)|0}var Sa=64,Aa=4194304;function Ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ls(l):(s&=o,s!==0&&(r=Ls(s)))}else o=n&~i,o!==0?r=Ls(o):s!==0&&(r=Ls(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function lT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=lT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Yc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yy(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function cT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function Xy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jy,dd,Zy,e_,t_,Xc=!1,ka=[],Qn=null,Yn=null,Xn=null,ao=new Map,lo=new Map,Un=[],hT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yp(t,e){switch(t){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=jo(e),e!==null&&dd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dT(t,e,n,r,i){switch(e){case"focusin":return Qn=ks(Qn,t,e,n,r,i),!0;case"dragenter":return Yn=ks(Yn,t,e,n,r,i),!0;case"mouseover":return Xn=ks(Xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ao.set(s,ks(ao.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,lo.set(s,ks(lo.get(s)||null,t,e,n,r,i)),!0}return!1}function n_(t){var e=Cr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=qy(n),e!==null){t.blockedOn=e,t_(t.priority,function(){Zy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hc=r,n.target.dispatchEvent(r),Hc=null}else return e=jo(n),e!==null&&dd(e),t.blockedOn=n,!1;e.shift()}return!0}function Xp(t,e,n){Wa(t)&&n.delete(e)}function fT(){Xc=!1,Qn!==null&&Wa(Qn)&&(Qn=null),Yn!==null&&Wa(Yn)&&(Yn=null),Xn!==null&&Wa(Xn)&&(Xn=null),ao.forEach(Xp),lo.forEach(Xp)}function Cs(t,e){t.blockedOn===e&&(t.blockedOn=null,Xc||(Xc=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,fT)))}function uo(t){function e(i){return Cs(i,t)}if(0<ka.length){Cs(ka[0],t);for(var n=1;n<ka.length;n++){var r=ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qn!==null&&Cs(Qn,t),Yn!==null&&Cs(Yn,t),Xn!==null&&Cs(Xn,t),ao.forEach(e),lo.forEach(e),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)n_(n),n.blockedOn===null&&Un.shift()}var Ci=Nn.ReactCurrentBatchConfig,ml=!0;function pT(t,e,n,r){var i=ce,s=Ci.transition;Ci.transition=null;try{ce=1,fd(t,e,n,r)}finally{ce=i,Ci.transition=s}}function mT(t,e,n,r){var i=ce,s=Ci.transition;Ci.transition=null;try{ce=4,fd(t,e,n,r)}finally{ce=i,Ci.transition=s}}function fd(t,e,n,r){if(ml){var i=Jc(t,e,n,r);if(i===null)cc(t,e,r,gl,n),Yp(t,r);else if(dT(i,t,e,n,r))r.stopPropagation();else if(Yp(t,r),e&4&&-1<hT.indexOf(t)){for(;i!==null;){var s=jo(i);if(s!==null&&Jy(s),s=Jc(t,e,n,r),s===null&&cc(t,e,r,gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cc(t,e,r,null,n)}}var gl=null;function Jc(t,e,n,r){if(gl=null,t=ud(r),t=Cr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gl=t,null}function r_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nT()){case cd:return 1;case Gy:return 4;case fl:case rT:return 16;case Qy:return 536870912;default:return 16}default:return 16}}var Hn=null,pd=null,Ha=null;function i_(){if(Ha)return Ha;var t,e=pd,n=e.length,r,i="value"in Hn?Hn.value:Hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ha=i.slice(t,1<r?1-r:void 0)}function Ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function Jp(){return!1}function xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:Jp,this.isPropagationStopped=Jp,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},md=xt(Xi),Fo=Se({},Xi,{view:0,detail:0}),gT=xt(Fo),tc,nc,Rs,Jl=Se({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(tc=t.screenX-Rs.screenX,nc=t.screenY-Rs.screenY):nc=tc=0,Rs=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),Zp=xt(Jl),yT=Se({},Jl,{dataTransfer:0}),_T=xt(yT),vT=Se({},Fo,{relatedTarget:0}),rc=xt(vT),ET=Se({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),wT=xt(ET),TT=Se({},Xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IT=xt(TT),ST=Se({},Xi,{data:0}),em=xt(ST),AT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=CT[t])?!!e[t]:!1}function gd(){return RT}var xT=Se({},Fo,{key:function(t){if(t.key){var e=AT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(t){return t.type==="keypress"?Ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PT=xt(xT),NT=Se({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=xt(NT),DT=Se({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),bT=xt(DT),VT=Se({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),OT=xt(VT),LT=Se({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MT=xt(LT),FT=[9,13,27,32],yd=In&&"CompositionEvent"in window,Hs=null;In&&"documentMode"in document&&(Hs=document.documentMode);var jT=In&&"TextEvent"in window&&!Hs,s_=In&&(!yd||Hs&&8<Hs&&11>=Hs),nm=" ",rm=!1;function o_(t,e){switch(t){case"keyup":return FT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function UT(t,e){switch(t){case"compositionend":return a_(e);case"keypress":return e.which!==32?null:(rm=!0,nm);case"textInput":return t=e.data,t===nm&&rm?null:t;default:return null}}function BT(t,e){if(fi)return t==="compositionend"||!yd&&o_(t,e)?(t=i_(),Ha=pd=Hn=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return s_&&e.locale!=="ko"?null:e.data;default:return null}}var zT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zT[t.type]:e==="textarea"}function l_(t,e,n,r){jy(r),e=yl(e,"onChange"),0<e.length&&(n=new md("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ks=null,co=null;function $T(t){v_(t,0)}function Zl(t){var e=gi(t);if(Dy(e))return t}function qT(t,e){if(t==="change")return e}var u_=!1;if(In){var ic;if(In){var sc="oninput"in document;if(!sc){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),sc=typeof sm.oninput=="function"}ic=sc}else ic=!1;u_=ic&&(!document.documentMode||9<document.documentMode)}function om(){Ks&&(Ks.detachEvent("onpropertychange",c_),co=Ks=null)}function c_(t){if(t.propertyName==="value"&&Zl(co)){var e=[];l_(e,co,t,ud(t)),$y($T,e)}}function WT(t,e,n){t==="focusin"?(om(),Ks=e,co=n,Ks.attachEvent("onpropertychange",c_)):t==="focusout"&&om()}function HT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(co)}function KT(t,e){if(t==="click")return Zl(e)}function GT(t,e){if(t==="input"||t==="change")return Zl(e)}function QT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:QT;function ho(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lm(t,e){var n=am(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=am(n)}}function h_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function d_(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function YT(t){var e=d_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h_(n.ownerDocument.documentElement,n)){if(r!==null&&_d(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lm(n,s);var o=lm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XT=In&&"documentMode"in document&&11>=document.documentMode,pi=null,Zc=null,Gs=null,eh=!1;function um(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eh||pi==null||pi!==cl(r)||(r=pi,"selectionStart"in r&&_d(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gs&&ho(Gs,r)||(Gs=r,r=yl(Zc,"onSelect"),0<r.length&&(e=new md("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function Ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},oc={},f_={};In&&(f_=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function eu(t){if(oc[t])return oc[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in f_)return oc[t]=e[n];return t}var p_=eu("animationend"),m_=eu("animationiteration"),g_=eu("animationstart"),y_=eu("transitionend"),__=new Map,cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){__.set(t,e),Gr(e,[t])}for(var ac=0;ac<cm.length;ac++){var lc=cm[ac],JT=lc.toLowerCase(),ZT=lc[0].toUpperCase()+lc.slice(1);dr(JT,"on"+ZT)}dr(p_,"onAnimationEnd");dr(m_,"onAnimationIteration");dr(g_,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(y_,"onTransitionEnd");Vi("onMouseEnter",["mouseout","mouseover"]);Vi("onMouseLeave",["mouseout","mouseover"]);Vi("onPointerEnter",["pointerout","pointerover"]);Vi("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));function hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Jw(r,e,void 0,t),t.currentTarget=null}function v_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;hm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;hm(i,l,h),s=u}}}if(dl)throw t=Qc,dl=!1,Qc=null,t}function _e(t,e){var n=e[sh];n===void 0&&(n=e[sh]=new Set);var r=t+"__bubble";n.has(r)||(E_(e,t,2,!1),n.add(r))}function uc(t,e,n){var r=0;e&&(r|=4),E_(n,t,r,e)}var xa="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[xa]){t[xa]=!0,Cy.forEach(function(n){n!=="selectionchange"&&(eI.has(n)||uc(n,!1,t),uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xa]||(e[xa]=!0,uc("selectionchange",!1,e))}}function E_(t,e,n,r){switch(r_(e)){case 1:var i=pT;break;case 4:i=mT;break;default:i=fd}n=i.bind(null,e,n,t),i=void 0,!Gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Cr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}$y(function(){var h=s,f=ud(n),g=[];e:{var _=__.get(t);if(_!==void 0){var C=md,N=t;switch(t){case"keypress":if(Ka(n)===0)break e;case"keydown":case"keyup":C=PT;break;case"focusin":N="focus",C=rc;break;case"focusout":N="blur",C=rc;break;case"beforeblur":case"afterblur":C=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=_T;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=bT;break;case p_:case m_:case g_:C=wT;break;case y_:C=OT;break;case"scroll":C=gT;break;case"wheel":C=MT;break;case"copy":case"cut":case"paste":C=IT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=tm}var P=(e&4)!==0,b=!P&&t==="scroll",I=P?_!==null?_+"Capture":null:_;P=[];for(var v=h,k;v!==null;){k=v;var V=k.stateNode;if(k.tag===5&&V!==null&&(k=V,I!==null&&(V=oo(v,I),V!=null&&P.push(po(v,V,k)))),b)break;v=v.return}0<P.length&&(_=new C(_,N,null,n,f),g.push({event:_,listeners:P}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",_&&n!==Hc&&(N=n.relatedTarget||n.fromElement)&&(Cr(N)||N[Sn]))break e;if((C||_)&&(_=f.window===f?f:(_=f.ownerDocument)?_.defaultView||_.parentWindow:window,C?(N=n.relatedTarget||n.toElement,C=h,N=N?Cr(N):null,N!==null&&(b=Qr(N),N!==b||N.tag!==5&&N.tag!==6)&&(N=null)):(C=null,N=h),C!==N)){if(P=Zp,V="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=tm,V="onPointerLeave",I="onPointerEnter",v="pointer"),b=C==null?_:gi(C),k=N==null?_:gi(N),_=new P(V,v+"leave",C,n,f),_.target=b,_.relatedTarget=k,V=null,Cr(f)===h&&(P=new P(I,v+"enter",N,n,f),P.target=k,P.relatedTarget=b,V=P),b=V,C&&N)t:{for(P=C,I=N,v=0,k=P;k;k=ai(k))v++;for(k=0,V=I;V;V=ai(V))k++;for(;0<v-k;)P=ai(P),v--;for(;0<k-v;)I=ai(I),k--;for(;v--;){if(P===I||I!==null&&P===I.alternate)break t;P=ai(P),I=ai(I)}P=null}else P=null;C!==null&&dm(g,_,C,P,!1),N!==null&&b!==null&&dm(g,b,N,P,!0)}}e:{if(_=h?gi(h):window,C=_.nodeName&&_.nodeName.toLowerCase(),C==="select"||C==="input"&&_.type==="file")var j=qT;else if(im(_))if(u_)j=GT;else{j=HT;var F=WT}else(C=_.nodeName)&&C.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(j=KT);if(j&&(j=j(t,h))){l_(g,j,n,f);break e}F&&F(t,_,h),t==="focusout"&&(F=_._wrapperState)&&F.controlled&&_.type==="number"&&Bc(_,"number",_.value)}switch(F=h?gi(h):window,t){case"focusin":(im(F)||F.contentEditable==="true")&&(pi=F,Zc=h,Gs=null);break;case"focusout":Gs=Zc=pi=null;break;case"mousedown":eh=!0;break;case"contextmenu":case"mouseup":case"dragend":eh=!1,um(g,n,f);break;case"selectionchange":if(XT)break;case"keydown":case"keyup":um(g,n,f)}var E;if(yd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else fi?o_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(s_&&n.locale!=="ko"&&(fi||y!=="onCompositionStart"?y==="onCompositionEnd"&&fi&&(E=i_()):(Hn=f,pd="value"in Hn?Hn.value:Hn.textContent,fi=!0)),F=yl(h,y),0<F.length&&(y=new em(y,t,null,n,f),g.push({event:y,listeners:F}),E?y.data=E:(E=a_(n),E!==null&&(y.data=E)))),(E=jT?UT(t,n):BT(t,n))&&(h=yl(h,"onBeforeInput"),0<h.length&&(f=new em("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=E))}v_(g,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=oo(t,n),s!=null&&r.unshift(po(t,s,i)),s=oo(t,e),s!=null&&r.push(po(t,s,i))),t=t.return}return r}function ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=oo(n,s),u!=null&&o.unshift(po(n,u,l))):i||(u=oo(n,s),u!=null&&o.push(po(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tI=/\r\n?/g,nI=/\u0000|\uFFFD/g;function fm(t){return(typeof t=="string"?t:""+t).replace(tI,`
`).replace(nI,"")}function Pa(t,e,n){if(e=fm(e),fm(t)!==e&&n)throw Error(M(425))}function _l(){}var th=null,nh=null;function rh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ih=typeof setTimeout=="function"?setTimeout:void 0,rI=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,iI=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(t){return pm.resolve(null).then(t).catch(sI)}:ih;function sI(t){setTimeout(function(){throw t})}function hc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);uo(e)}function Jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ji=Math.random().toString(36).slice(2),en="__reactFiber$"+Ji,mo="__reactProps$"+Ji,Sn="__reactContainer$"+Ji,sh="__reactEvents$"+Ji,oI="__reactListeners$"+Ji,aI="__reactHandles$"+Ji;function Cr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mm(t);t!==null;){if(n=t[en])return n;t=mm(t)}return e}t=n,n=t.parentNode}return null}function jo(t){return t=t[en]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function tu(t){return t[mo]||null}var oh=[],yi=-1;function fr(t){return{current:t}}function Ee(t){0>yi||(t.current=oh[yi],oh[yi]=null,yi--)}function me(t,e){yi++,oh[yi]=t.current,t.current=e}var lr={},ot=fr(lr),_t=fr(!1),Mr=lr;function Oi(t,e){var n=t.type.contextTypes;if(!n)return lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function vl(){Ee(_t),Ee(ot)}function gm(t,e,n){if(ot.current!==lr)throw Error(M(168));me(ot,e),me(_t,n)}function w_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,Ww(t)||"Unknown",i));return Se({},n,r)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Mr=ot.current,me(ot,t),me(_t,_t.current),!0}function ym(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=w_(t,e,Mr),r.__reactInternalMemoizedMergedChildContext=t,Ee(_t),Ee(ot),me(ot,t)):Ee(_t),me(_t,n)}var mn=null,nu=!1,dc=!1;function T_(t){mn===null?mn=[t]:mn.push(t)}function lI(t){nu=!0,T_(t)}function pr(){if(!dc&&mn!==null){dc=!0;var t=0,e=ce;try{var n=mn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,nu=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),Ky(cd,pr),i}finally{ce=e,dc=!1}}return null}var _i=[],vi=0,wl=null,Tl=0,Dt=[],bt=0,Fr=null,gn=1,yn="";function Sr(t,e){_i[vi++]=Tl,_i[vi++]=wl,wl=t,Tl=e}function I_(t,e,n){Dt[bt++]=gn,Dt[bt++]=yn,Dt[bt++]=Fr,Fr=t;var r=gn;t=yn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-Ht(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function vd(t){t.return!==null&&(Sr(t,1),I_(t,1,0))}function Ed(t){for(;t===wl;)wl=_i[--vi],_i[vi]=null,Tl=_i[--vi],_i[vi]=null;for(;t===Fr;)Fr=Dt[--bt],Dt[bt]=null,yn=Dt[--bt],Dt[bt]=null,gn=Dt[--bt],Dt[bt]=null}var kt=null,At=null,we=!1,qt=null;function S_(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,At=Jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,At=null,!0):!1;default:return!1}}function ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lh(t){if(we){var e=At;if(e){var n=e;if(!_m(t,e)){if(ah(t))throw Error(M(418));e=Jn(n.nextSibling);var r=kt;e&&_m(t,e)?S_(r,n):(t.flags=t.flags&-4097|2,we=!1,kt=t)}}else{if(ah(t))throw Error(M(418));t.flags=t.flags&-4097|2,we=!1,kt=t}}}function vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Na(t){if(t!==kt)return!1;if(!we)return vm(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rh(t.type,t.memoizedProps)),e&&(e=At)){if(ah(t))throw A_(),Error(M(418));for(;e;)S_(t,e),e=Jn(e.nextSibling)}if(vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=Jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=kt?Jn(t.stateNode.nextSibling):null;return!0}function A_(){for(var t=At;t;)t=Jn(t.nextSibling)}function Li(){At=kt=null,we=!1}function wd(t){qt===null?qt=[t]:qt.push(t)}var uI=Nn.ReactCurrentBatchConfig;function xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Da(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Em(t){var e=t._init;return e(t._payload)}function k_(t){function e(I,v){if(t){var k=I.deletions;k===null?(I.deletions=[v],I.flags|=16):k.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=nr(I,v),I.index=0,I.sibling=null,I}function s(I,v,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<v?(I.flags|=2,v):k):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,k,V){return v===null||v.tag!==6?(v=vc(k,I.mode,V),v.return=I,v):(v=i(v,k),v.return=I,v)}function u(I,v,k,V){var j=k.type;return j===di?f(I,v,k.props.children,V,k.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Fn&&Em(j)===v.type)?(V=i(v,k.props),V.ref=xs(I,v,k),V.return=I,V):(V=el(k.type,k.key,k.props,null,I.mode,V),V.ref=xs(I,v,k),V.return=I,V)}function h(I,v,k,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==k.containerInfo||v.stateNode.implementation!==k.implementation?(v=Ec(k,I.mode,V),v.return=I,v):(v=i(v,k.children||[]),v.return=I,v)}function f(I,v,k,V,j){return v===null||v.tag!==7?(v=br(k,I.mode,V,j),v.return=I,v):(v=i(v,k),v.return=I,v)}function g(I,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return v=vc(""+v,I.mode,k),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wa:return k=el(v.type,v.key,v.props,null,I.mode,k),k.ref=xs(I,null,v),k.return=I,k;case hi:return v=Ec(v,I.mode,k),v.return=I,v;case Fn:var V=v._init;return g(I,V(v._payload),k)}if(Os(v)||Ss(v))return v=br(v,I.mode,k,null),v.return=I,v;Da(I,v)}return null}function _(I,v,k,V){var j=v!==null?v.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return j!==null?null:l(I,v,""+k,V);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case wa:return k.key===j?u(I,v,k,V):null;case hi:return k.key===j?h(I,v,k,V):null;case Fn:return j=k._init,_(I,v,j(k._payload),V)}if(Os(k)||Ss(k))return j!==null?null:f(I,v,k,V,null);Da(I,k)}return null}function C(I,v,k,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(k)||null,l(v,I,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case wa:return I=I.get(V.key===null?k:V.key)||null,u(v,I,V,j);case hi:return I=I.get(V.key===null?k:V.key)||null,h(v,I,V,j);case Fn:var F=V._init;return C(I,v,k,F(V._payload),j)}if(Os(V)||Ss(V))return I=I.get(k)||null,f(v,I,V,j,null);Da(v,V)}return null}function N(I,v,k,V){for(var j=null,F=null,E=v,y=v=0,w=null;E!==null&&y<k.length;y++){E.index>y?(w=E,E=null):w=E.sibling;var T=_(I,E,k[y],V);if(T===null){E===null&&(E=w);break}t&&E&&T.alternate===null&&e(I,E),v=s(T,v,y),F===null?j=T:F.sibling=T,F=T,E=w}if(y===k.length)return n(I,E),we&&Sr(I,y),j;if(E===null){for(;y<k.length;y++)E=g(I,k[y],V),E!==null&&(v=s(E,v,y),F===null?j=E:F.sibling=E,F=E);return we&&Sr(I,y),j}for(E=r(I,E);y<k.length;y++)w=C(E,I,y,k[y],V),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?y:w.key),v=s(w,v,y),F===null?j=w:F.sibling=w,F=w);return t&&E.forEach(function(A){return e(I,A)}),we&&Sr(I,y),j}function P(I,v,k,V){var j=Ss(k);if(typeof j!="function")throw Error(M(150));if(k=j.call(k),k==null)throw Error(M(151));for(var F=j=null,E=v,y=v=0,w=null,T=k.next();E!==null&&!T.done;y++,T=k.next()){E.index>y?(w=E,E=null):w=E.sibling;var A=_(I,E,T.value,V);if(A===null){E===null&&(E=w);break}t&&E&&A.alternate===null&&e(I,E),v=s(A,v,y),F===null?j=A:F.sibling=A,F=A,E=w}if(T.done)return n(I,E),we&&Sr(I,y),j;if(E===null){for(;!T.done;y++,T=k.next())T=g(I,T.value,V),T!==null&&(v=s(T,v,y),F===null?j=T:F.sibling=T,F=T);return we&&Sr(I,y),j}for(E=r(I,E);!T.done;y++,T=k.next())T=C(E,I,y,T.value,V),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),v=s(T,v,y),F===null?j=T:F.sibling=T,F=T);return t&&E.forEach(function(R){return e(I,R)}),we&&Sr(I,y),j}function b(I,v,k,V){if(typeof k=="object"&&k!==null&&k.type===di&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case wa:e:{for(var j=k.key,F=v;F!==null;){if(F.key===j){if(j=k.type,j===di){if(F.tag===7){n(I,F.sibling),v=i(F,k.props.children),v.return=I,I=v;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Fn&&Em(j)===F.type){n(I,F.sibling),v=i(F,k.props),v.ref=xs(I,F,k),v.return=I,I=v;break e}n(I,F);break}else e(I,F);F=F.sibling}k.type===di?(v=br(k.props.children,I.mode,V,k.key),v.return=I,I=v):(V=el(k.type,k.key,k.props,null,I.mode,V),V.ref=xs(I,v,k),V.return=I,I=V)}return o(I);case hi:e:{for(F=k.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===k.containerInfo&&v.stateNode.implementation===k.implementation){n(I,v.sibling),v=i(v,k.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=Ec(k,I.mode,V),v.return=I,I=v}return o(I);case Fn:return F=k._init,b(I,v,F(k._payload),V)}if(Os(k))return N(I,v,k,V);if(Ss(k))return P(I,v,k,V);Da(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,k),v.return=I,I=v):(n(I,v),v=vc(k,I.mode,V),v.return=I,I=v),o(I)):n(I,v)}return b}var Mi=k_(!0),C_=k_(!1),Il=fr(null),Sl=null,Ei=null,Td=null;function Id(){Td=Ei=Sl=null}function Sd(t){var e=Il.current;Ee(Il),t._currentValue=e}function uh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ri(t,e){Sl=t,Td=Ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(Td!==t)if(t={context:t,memoizedValue:e,next:null},Ei===null){if(Sl===null)throw Error(M(308));Ei=t,Sl.dependencies={lanes:0,firstContext:t}}else Ei=Ei.next=t;return e}var Rr=null;function Ad(t){Rr===null?Rr=[t]:Rr.push(t)}function R_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ad(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jn=!1;function kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function x_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,Ad(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function Ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hd(t,n)}}function wm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,r){var i=t.updateQueue;jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=h=u=null,l=s;do{var _=l.lane,C=l.eventTime;if((r&_)===_){f!==null&&(f=f.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,P=l;switch(_=e,C=n,P.tag){case 1:if(N=P.payload,typeof N=="function"){g=N.call(C,g,_);break e}g=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=P.payload,_=typeof N=="function"?N.call(C,g,_):N,_==null)break e;g=Se({},g,_);break e;case 2:jn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[l]:_.push(l))}else C={eventTime:C,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=C,u=g):f=f.next=C,o|=_;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;_=l,l=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=g}}function Tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Uo={},rn=fr(Uo),go=fr(Uo),yo=fr(Uo);function xr(t){if(t===Uo)throw Error(M(174));return t}function Cd(t,e){switch(me(yo,e),me(go,t),me(rn,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$c(e,t)}Ee(rn),me(rn,e)}function Fi(){Ee(rn),Ee(go),Ee(yo)}function P_(t){xr(yo.current);var e=xr(rn.current),n=$c(e,t.type);e!==n&&(me(go,t),me(rn,n))}function Rd(t){go.current===t&&(Ee(rn),Ee(go))}var Te=fr(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function xd(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var Qa=Nn.ReactCurrentDispatcher,pc=Nn.ReactCurrentBatchConfig,jr=0,Ie=null,Oe=null,Ue=null,Cl=!1,Qs=!1,_o=0,cI=0;function et(){throw Error(M(321))}function Pd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Nd(t,e,n,r,i,s){if(jr=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qa.current=t===null||t.memoizedState===null?pI:mI,t=n(r,i),Qs){s=0;do{if(Qs=!1,_o=0,25<=s)throw Error(M(301));s+=1,Ue=Oe=null,e.updateQueue=null,Qa.current=gI,t=n(r,i)}while(Qs)}if(Qa.current=Rl,e=Oe!==null&&Oe.next!==null,jr=0,Ue=Oe=Ie=null,Cl=!1,e)throw Error(M(300));return t}function Dd(){var t=_o!==0;return _o=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ie.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Ft(){if(Oe===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Ue===null?Ie.memoizedState:Ue.next;if(e!==null)Ue=e,Oe=t;else{if(t===null)throw Error(M(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ue===null?Ie.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function vo(t,e){return typeof e=="function"?e(t):e}function mc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((jr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ie.lanes|=f,Ur|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Gt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Ur|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function N_(){}function D_(t,e){var n=Ie,r=Ft(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,bd(O_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Eo(9,V_.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(M(349));jr&30||b_(n,e,i)}return i}function b_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V_(t,e,n,r){e.value=n,e.getSnapshot=r,L_(e)&&M_(t)}function O_(t,e,n){return n(function(){L_(e)&&M_(t)})}function L_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function M_(t){var e=An(t,1);e!==null&&Kt(e,t,1,-1)}function Im(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},e.queue=t,t=t.dispatch=fI.bind(null,Ie,t),[e.memoizedState,t]}function Eo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function F_(){return Ft().memoizedState}function Ya(t,e,n,r){var i=Zt();Ie.flags|=t,i.memoizedState=Eo(1|e,n,void 0,r===void 0?null:r)}function ru(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Pd(r,o.deps)){i.memoizedState=Eo(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Eo(1|e,n,s,r)}function Sm(t,e){return Ya(8390656,8,t,e)}function bd(t,e){return ru(2048,8,t,e)}function j_(t,e){return ru(4,2,t,e)}function U_(t,e){return ru(4,4,t,e)}function B_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function z_(t,e,n){return n=n!=null?n.concat([t]):null,ru(4,4,B_.bind(null,e,t),n)}function Vd(){}function $_(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function q_(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function W_(t,e,n){return jr&21?(Gt(n,e)||(n=Yy(),Ie.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function hI(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=pc.transition;pc.transition={};try{t(!1),e()}finally{ce=n,pc.transition=r}}function H_(){return Ft().memoizedState}function dI(t,e,n){var r=tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},K_(t))G_(e,n);else if(n=R_(t,e,n,r),n!==null){var i=ht();Kt(n,t,r,i),Q_(n,e,r)}}function fI(t,e,n){var r=tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(K_(t))G_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Gt(l,o)){var u=e.interleaved;u===null?(i.next=i,Ad(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=R_(t,e,i,r),n!==null&&(i=ht(),Kt(n,t,r,i),Q_(n,e,r))}}function K_(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function G_(t,e){Qs=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Q_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hd(t,n)}}var Rl={readContext:Mt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},pI={readContext:Mt,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:Sm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ya(4194308,4,B_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ya(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dI.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:Im,useDebugValue:Vd,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Im(!1),e=t[0];return t=hI.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=Zt();if(we){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Be===null)throw Error(M(349));jr&30||b_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sm(O_.bind(null,r,s,t),[t]),r.flags|=2048,Eo(9,V_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=Be.identifierPrefix;if(we){var n=yn,r=gn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mI={readContext:Mt,useCallback:$_,useContext:Mt,useEffect:bd,useImperativeHandle:z_,useInsertionEffect:j_,useLayoutEffect:U_,useMemo:q_,useReducer:mc,useRef:F_,useState:function(){return mc(vo)},useDebugValue:Vd,useDeferredValue:function(t){var e=Ft();return W_(e,Oe.memoizedState,t)},useTransition:function(){var t=mc(vo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:N_,useSyncExternalStore:D_,useId:H_,unstable_isNewReconciler:!1},gI={readContext:Mt,useCallback:$_,useContext:Mt,useEffect:bd,useImperativeHandle:z_,useInsertionEffect:j_,useLayoutEffect:U_,useMemo:q_,useReducer:gc,useRef:F_,useState:function(){return gc(vo)},useDebugValue:Vd,useDeferredValue:function(t){var e=Ft();return Oe===null?e.memoizedState=t:W_(e,Oe.memoizedState,t)},useTransition:function(){var t=gc(vo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:N_,useSyncExternalStore:D_,useId:H_,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ch(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=tr(t),s=wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Kt(e,t,i,r),Ga(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=tr(t),s=wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Kt(e,t,i,r),Ga(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=tr(t),i=wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,r),e!==null&&(Kt(e,t,r,n),Ga(e,t,r))}};function Am(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ho(n,r)||!ho(i,s):!0}function Y_(t,e,n){var r=!1,i=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=vt(e)?Mr:ot.current,r=e.contextTypes,s=(r=r!=null)?Oi(t,i):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function km(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function hh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},kd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=vt(e)?Mr:ot.current,i.context=Oi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ch(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&iu.enqueueReplaceState(i,i.state,null),Al(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ji(t,e){try{var n="",r=e;do n+=qw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yI=typeof WeakMap=="function"?WeakMap:Map;function X_(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pl||(Pl=!0,Th=r),dh(t,e)},n}function J_(t,e,n){n=wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dh(t,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=NI.bind(null,t,e,n),e.then(t,t))}function Rm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,Zn(n,e,1))),n.lanes|=1),t)}var _I=Nn.ReactCurrentOwner,yt=!1;function ct(t,e,n,r){e.child=t===null?C_(e,null,n,r):Mi(e,t.child,n,r)}function Pm(t,e,n,r,i){n=n.render;var s=e.ref;return Ri(e,i),r=Nd(t,e,n,r,s,i),n=Dd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(we&&n&&vd(e),e.flags|=1,ct(t,e,r,i),e.child)}function Nm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Z_(t,e,s,r,i)):(t=el(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(o,r)&&t.ref===e.ref)return kn(t,e,i)}return e.flags|=1,t=nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Z_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ho(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,kn(t,e,i)}return fh(t,e,n,r,i)}function ev(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Ti,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Ti,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(Ti,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(Ti,St),St|=r;return ct(t,e,i,n),e.child}function tv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fh(t,e,n,r,i){var s=vt(n)?Mr:ot.current;return s=Oi(e,s),Ri(e,i),n=Nd(t,e,n,r,s,i),r=Dd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(we&&r&&vd(e),e.flags|=1,ct(t,e,n,i),e.child)}function Dm(t,e,n,r,i){if(vt(n)){var s=!0;El(e)}else s=!1;if(Ri(e,i),e.stateNode===null)Xa(t,e),Y_(e,n,r),hh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Mt(h):(h=vt(n)?Mr:ot.current,h=Oi(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&km(e,o,r,h),jn=!1;var _=e.memoizedState;o.state=_,Al(e,r,o,i),u=e.memoizedState,l!==r||_!==u||_t.current||jn?(typeof f=="function"&&(ch(e,n,f,r),u=e.memoizedState),(l=jn||Am(e,n,l,r,_,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,x_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:zt(e.type,l),o.props=h,g=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=vt(n)?Mr:ot.current,u=Oi(e,u));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||_!==u)&&km(e,o,r,u),jn=!1,_=e.memoizedState,o.state=_,Al(e,r,o,i);var N=e.memoizedState;l!==g||_!==N||_t.current||jn?(typeof C=="function"&&(ch(e,n,C,r),N=e.memoizedState),(h=jn||Am(e,n,h,r,_,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return ph(t,e,n,r,s,i)}function ph(t,e,n,r,i,s){tv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ym(e,n,!1),kn(t,e,s);r=e.stateNode,_I.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mi(e,t.child,null,s),e.child=Mi(e,null,l,s)):ct(t,e,l,s),e.memoizedState=r.state,i&&ym(e,n,!0),e.child}function nv(t){var e=t.stateNode;e.pendingContext?gm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gm(t,e.context,!1),Cd(t,e.containerInfo)}function bm(t,e,n,r,i){return Li(),wd(i),e.flags|=256,ct(t,e,n,r),e.child}var mh={dehydrated:null,treeContext:null,retryLane:0};function gh(t){return{baseLanes:t,cachePool:null,transitions:null}}function rv(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Te,i&1),t===null)return lh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=au(o,r,0,null),t=br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gh(n),e.memoizedState=mh,t):Od(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return vI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=nr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=nr(l,s):(s=br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mh,r}return s=t.child,t=s.sibling,r=nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Od(t,e){return e=au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ba(t,e,n,r){return r!==null&&wd(r),Mi(e,t.child,null,n),t=Od(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=yc(Error(M(422))),ba(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=au({mode:"visible",children:r.children},i,0,null),s=br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Mi(e,t.child,null,o),e.child.memoizedState=gh(o),e.memoizedState=mh,s);if(!(e.mode&1))return ba(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=yc(s,r,void 0),ba(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),Kt(r,t,i,-1))}return Bd(),r=yc(Error(M(421))),ba(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=DI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=Jn(i.nextSibling),kt=e,we=!0,qt=null,t!==null&&(Dt[bt++]=gn,Dt[bt++]=yn,Dt[bt++]=Fr,gn=t.id,yn=t.overflow,Fr=e),e=Od(e,r.children),e.flags|=4096,e)}function Vm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),uh(t.return,e,n)}function _c(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function iv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vm(t,n,e);else if(t.tag===19)Vm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_c(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_c(e,!0,n,null,s);break;case"together":_c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function EI(t,e,n){switch(e.tag){case 3:nv(e),Li();break;case 5:P_(e);break;case 1:vt(e.type)&&El(e);break;case 4:Cd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(Il,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?rv(t,e,n):(me(Te,Te.current&1),t=kn(t,e,n),t!==null?t.sibling:null);me(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,ev(t,e,n)}return kn(t,e,n)}var sv,yh,ov,av;sv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yh=function(){};ov=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xr(rn.current);var s=null;switch(n){case"input":i=jc(t,i),r=jc(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=zc(t,i),r=zc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_l)}qc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(io.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(io.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};av=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ps(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wI(t,e,n){var r=e.pendingProps;switch(Ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return vt(e.type)&&vl(),tt(e),null;case 3:return r=e.stateNode,Fi(),Ee(_t),Ee(ot),xd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(Ah(qt),qt=null))),yh(t,e),tt(e),null;case 5:Rd(e);var i=xr(yo.current);if(n=e.type,t!==null&&e.stateNode!=null)ov(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return tt(e),null}if(t=xr(rn.current),Na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[mo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Ms.length;i++)_e(Ms[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":$p(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Wp(r,s),_e("invalid",r)}qc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Pa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Pa(r.textContent,l,t),i=["children",""+l]):io.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ta(r),qp(r,s,!0);break;case"textarea":Ta(r),Hp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Oy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[mo]=r,sv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wc(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ms.length;i++)_e(Ms[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":$p(t,r),i=jc(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Wp(t,r),i=zc(t,r),_e("invalid",t);break;default:i=r}qc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Fy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ly(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&so(t,u):typeof u=="number"&&so(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(io.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&sd(t,s,u,o))}switch(n){case"input":Ta(t),qp(t,r,!1);break;case"textarea":Ta(t),Hp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Si(t,!!r.multiple,s,!1):r.defaultValue!=null&&Si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)av(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=xr(yo.current),xr(rn.current),Na(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:Pa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return tt(e),null;case 13:if(Ee(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&At!==null&&e.mode&1&&!(e.flags&128))A_(),Li(),e.flags|=98560,s=!1;else if(s=Na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[en]=e}else Li(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else qt!==null&&(Ah(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Le===0&&(Le=3):Bd())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return Fi(),yh(t,e),t===null&&fo(e.stateNode.containerInfo),tt(e),null;case 10:return Sd(e.type._context),tt(e),null;case 17:return vt(e.type)&&vl(),tt(e),null;case 19:if(Ee(Te),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ps(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kl(t),o!==null){for(e.flags|=128,Ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Ui&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return tt(e),null}else 2*Pe()-s.renderingStartTime>Ui&&n!==1073741824&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=Te.current,me(Te,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Ud(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function TI(t,e){switch(Ed(e),e.tag){case 1:return vt(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fi(),Ee(_t),Ee(ot),xd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rd(e),null;case 13:if(Ee(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Te),null;case 4:return Fi(),null;case 10:return Sd(e.type._context),null;case 22:case 23:return Ud(),null;case 24:return null;default:return null}}var Va=!1,it=!1,II=typeof WeakSet=="function"?WeakSet:Set,$=null;function wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function _h(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Om=!1;function SI(t,e){if(th=ml,t=d_(),_d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,_=null;t:for(;;){for(var C;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(C=g.firstChild)!==null;)_=g,g=C;for(;;){if(g===t)break t;if(_===n&&++h===i&&(l=o),_===s&&++f===r&&(u=o),(C=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(nh={focusedElem:t,selectionRange:n},ml=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var P=N.memoizedProps,b=N.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?P:zt(e.type,P),b);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(V){Ce(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return N=Om,Om=!1,N}function Ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&_h(e,n,s)}i=i.next}while(i!==r)}}function su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lv(t){var e=t.alternate;e!==null&&(t.alternate=null,lv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[mo],delete e[sh],delete e[oI],delete e[aI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uv(t){return t.tag===5||t.tag===3||t.tag===4}function Lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(r!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}function wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wh(t,e,n),t=t.sibling;t!==null;)wh(t,e,n),t=t.sibling}var qe=null,$t=!1;function Ln(t,e,n){for(n=n.child;n!==null;)cv(t,e,n),n=n.sibling}function cv(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:it||wi(n,e);case 6:var r=qe,i=$t;qe=null,Ln(t,e,n),qe=r,$t=i,qe!==null&&($t?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&($t?(t=qe,n=n.stateNode,t.nodeType===8?hc(t.parentNode,n):t.nodeType===1&&hc(t,n),uo(t)):hc(qe,n.stateNode));break;case 4:r=qe,i=$t,qe=n.stateNode.containerInfo,$t=!0,Ln(t,e,n),qe=r,$t=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_h(n,e,o),i=i.next}while(i!==r)}Ln(t,e,n);break;case 1:if(!it&&(wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}Ln(t,e,n);break;case 21:Ln(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Ln(t,e,n),it=r):Ln(t,e,n);break;default:Ln(t,e,n)}}function Mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new II),e.forEach(function(r){var i=bI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,$t=!1;break e;case 3:qe=l.stateNode.containerInfo,$t=!0;break e;case 4:qe=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(qe===null)throw Error(M(160));cv(s,o,i),qe=null,$t=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ce(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hv(e,t),e=e.sibling}function hv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),Jt(t),r&4){try{Ys(3,t,t.return),su(3,t)}catch(P){Ce(t,t.return,P)}try{Ys(5,t,t.return)}catch(P){Ce(t,t.return,P)}}break;case 1:Bt(e,t),Jt(t),r&512&&n!==null&&wi(n,n.return);break;case 5:if(Bt(e,t),Jt(t),r&512&&n!==null&&wi(n,n.return),t.flags&32){var i=t.stateNode;try{so(i,"")}catch(P){Ce(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&by(i,s),Wc(l,o);var h=Wc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?Fy(i,g):f==="dangerouslySetInnerHTML"?Ly(i,g):f==="children"?so(i,g):sd(i,f,g,h)}switch(l){case"input":Uc(i,s);break;case"textarea":Vy(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?Si(i,!!s.multiple,C,!1):_!==!!s.multiple&&(s.defaultValue!=null?Si(i,!!s.multiple,s.defaultValue,!0):Si(i,!!s.multiple,s.multiple?[]:"",!1))}i[mo]=s}catch(P){Ce(t,t.return,P)}}break;case 6:if(Bt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ce(t,t.return,P)}}break;case 3:if(Bt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{uo(e.containerInfo)}catch(P){Ce(t,t.return,P)}break;case 4:Bt(e,t),Jt(t);break;case 13:Bt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Fd=Pe())),r&4&&Mm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(it=(h=it)||f,Bt(e,t),it=h):Bt(e,t),Jt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(g=$=f;$!==null;){switch(_=$,C=_.child,_.tag){case 0:case 11:case 14:case 15:Ys(4,_,_.return);break;case 1:wi(_,_.return);var N=_.stateNode;if(typeof N.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(P){Ce(r,n,P)}}break;case 5:wi(_,_.return);break;case 22:if(_.memoizedState!==null){jm(g);continue}}C!==null?(C.return=_,$=C):jm(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=My("display",o))}catch(P){Ce(t,t.return,P)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(P){Ce(t,t.return,P)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Bt(e,t),Jt(t),r&4&&Mm(t);break;case 21:break;default:Bt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uv(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(so(i,""),r.flags&=-33);var s=Lm(t);wh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Lm(t);Eh(t,l,o);break;default:throw Error(M(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AI(t,e,n){$=t,dv(t)}function dv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Va;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||it;l=Va;var h=it;if(Va=o,(it=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Um(i):u!==null?(u.return=o,$=u):Um(i);for(;s!==null;)$=s,dv(s),s=s.sibling;$=i,Va=l,it=h}Fm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Fm(t)}}function Fm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||su(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&uo(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}it||e.flags&512&&vh(e)}catch(_){Ce(e,e.return,_)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function jm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Um(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{su(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{vh(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{vh(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var kI=Math.ceil,xl=Nn.ReactCurrentDispatcher,Ld=Nn.ReactCurrentOwner,Lt=Nn.ReactCurrentBatchConfig,se=0,Be=null,De=null,Ke=0,St=0,Ti=fr(0),Le=0,wo=null,Ur=0,ou=0,Md=0,Xs=null,gt=null,Fd=0,Ui=1/0,pn=null,Pl=!1,Th=null,er=null,Oa=!1,Kn=null,Nl=0,Js=0,Ih=null,Ja=-1,Za=0;function ht(){return se&6?Pe():Ja!==-1?Ja:Ja=Pe()}function tr(t){return t.mode&1?se&2&&Ke!==0?Ke&-Ke:uI.transition!==null?(Za===0&&(Za=Yy()),Za):(t=ce,t!==0||(t=window.event,t=t===void 0?16:r_(t.type)),t):1}function Kt(t,e,n,r){if(50<Js)throw Js=0,Ih=null,Error(M(185));Mo(t,n,r),(!(se&2)||t!==Be)&&(t===Be&&(!(se&2)&&(ou|=n),Le===4&&Bn(t,Ke)),Et(t,r),n===1&&se===0&&!(e.mode&1)&&(Ui=Pe()+500,nu&&pr()))}function Et(t,e){var n=t.callbackNode;uT(t,e);var r=pl(t,t===Be?Ke:0);if(r===0)n!==null&&Qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qp(n),e===1)t.tag===0?lI(Bm.bind(null,t)):T_(Bm.bind(null,t)),iI(function(){!(se&6)&&pr()}),n=null;else{switch(Xy(r)){case 1:n=cd;break;case 4:n=Gy;break;case 16:n=fl;break;case 536870912:n=Qy;break;default:n=fl}n=Ev(n,fv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fv(t,e){if(Ja=-1,Za=0,se&6)throw Error(M(327));var n=t.callbackNode;if(xi()&&t.callbackNode!==n)return null;var r=pl(t,t===Be?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dl(t,r);else{e=r;var i=se;se|=2;var s=mv();(Be!==t||Ke!==e)&&(pn=null,Ui=Pe()+500,Dr(t,e));do try{xI();break}catch(l){pv(t,l)}while(!0);Id(),xl.current=s,se=i,De!==null?e=0:(Be=null,Ke=0,e=Le)}if(e!==0){if(e===2&&(i=Yc(t),i!==0&&(r=i,e=Sh(t,i))),e===1)throw n=wo,Dr(t,0),Bn(t,r),Et(t,Pe()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!CI(i)&&(e=Dl(t,r),e===2&&(s=Yc(t),s!==0&&(r=s,e=Sh(t,s))),e===1))throw n=wo,Dr(t,0),Bn(t,r),Et(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Ar(t,gt,pn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=Fd+500-Pe(),10<e)){if(pl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ih(Ar.bind(null,t,gt,pn),e);break}Ar(t,gt,pn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kI(r/1960))-r,10<r){t.timeoutHandle=ih(Ar.bind(null,t,gt,pn),r);break}Ar(t,gt,pn);break;case 5:Ar(t,gt,pn);break;default:throw Error(M(329))}}}return Et(t,Pe()),t.callbackNode===n?fv.bind(null,t):null}function Sh(t,e){var n=Xs;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=gt,gt=n,e!==null&&Ah(e)),t}function Ah(t){gt===null?gt=t:gt.push.apply(gt,t)}function CI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~Md,e&=~ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function Bm(t){if(se&6)throw Error(M(327));xi();var e=pl(t,0);if(!(e&1))return Et(t,Pe()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var r=Yc(t);r!==0&&(e=r,n=Sh(t,r))}if(n===1)throw n=wo,Dr(t,0),Bn(t,e),Et(t,Pe()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,gt,pn),Et(t,Pe()),null}function jd(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Ui=Pe()+500,nu&&pr())}}function Br(t){Kn!==null&&Kn.tag===0&&!(se&6)&&xi();var e=se;se|=1;var n=Lt.transition,r=ce;try{if(Lt.transition=null,ce=1,t)return t()}finally{ce=r,Lt.transition=n,se=e,!(se&6)&&pr()}}function Ud(){St=Ti.current,Ee(Ti)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rI(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Ed(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vl();break;case 3:Fi(),Ee(_t),Ee(ot),xd();break;case 5:Rd(r);break;case 4:Fi();break;case 13:Ee(Te);break;case 19:Ee(Te);break;case 10:Sd(r.type._context);break;case 22:case 23:Ud()}n=n.return}if(Be=t,De=t=nr(t.current,null),Ke=St=e,Le=0,wo=null,Md=ou=Ur=0,gt=Xs=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rr=null}return t}function pv(t,e){do{var n=De;try{if(Id(),Qa.current=Rl,Cl){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cl=!1}if(jr=0,Ue=Oe=Ie=null,Qs=!1,_o=0,Ld.current=null,n===null||n.return===null){Le=1,wo=e,De=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var _=f.alternate;_?(f.updateQueue=_.updateQueue,f.memoizedState=_.memoizedState,f.lanes=_.lanes):(f.updateQueue=null,f.memoizedState=null)}var C=Rm(o);if(C!==null){C.flags&=-257,xm(C,o,l,s,e),C.mode&1&&Cm(s,h,e),e=C,u=h;var N=e.updateQueue;if(N===null){var P=new Set;P.add(u),e.updateQueue=P}else N.add(u);break e}else{if(!(e&1)){Cm(s,h,e),Bd();break e}u=Error(M(426))}}else if(we&&l.mode&1){var b=Rm(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),xm(b,o,l,s,e),wd(ji(u,l));break e}}s=u=ji(u,l),Le!==4&&(Le=2),Xs===null?Xs=[s]:Xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=X_(s,u,e);wm(s,I);break e;case 1:l=u;var v=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(er===null||!er.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=J_(s,l,e);wm(s,V);break e}}s=s.return}while(s!==null)}yv(n)}catch(j){e=j,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function mv(){var t=xl.current;return xl.current=Rl,t===null?Rl:t}function Bd(){(Le===0||Le===3||Le===2)&&(Le=4),Be===null||!(Ur&268435455)&&!(ou&268435455)||Bn(Be,Ke)}function Dl(t,e){var n=se;se|=2;var r=mv();(Be!==t||Ke!==e)&&(pn=null,Dr(t,e));do try{RI();break}catch(i){pv(t,i)}while(!0);if(Id(),se=n,xl.current=r,De!==null)throw Error(M(261));return Be=null,Ke=0,Le}function RI(){for(;De!==null;)gv(De)}function xI(){for(;De!==null&&!eT();)gv(De)}function gv(t){var e=vv(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?yv(t):De=e,Ld.current=null}function yv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TI(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,De=null;return}}else if(n=wI(n,e,St),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Le===0&&(Le=5)}function Ar(t,e,n){var r=ce,i=Lt.transition;try{Lt.transition=null,ce=1,PI(t,e,n,r)}finally{Lt.transition=i,ce=r}return null}function PI(t,e,n,r){do xi();while(Kn!==null);if(se&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cT(t,s),t===Be&&(De=Be=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oa||(Oa=!0,Ev(fl,function(){return xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=ce;ce=1;var l=se;se|=4,Ld.current=null,SI(t,n),hv(n,t),YT(nh),ml=!!th,nh=th=null,t.current=n,AI(n),tT(),se=l,ce=o,Lt.transition=s}else t.current=n;if(Oa&&(Oa=!1,Kn=t,Nl=i),s=t.pendingLanes,s===0&&(er=null),iT(n.stateNode),Et(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Pl)throw Pl=!1,t=Th,Th=null,t;return Nl&1&&t.tag!==0&&xi(),s=t.pendingLanes,s&1?t===Ih?Js++:(Js=0,Ih=t):Js=0,pr(),null}function xi(){if(Kn!==null){var t=Xy(Nl),e=Lt.transition,n=ce;try{if(Lt.transition=null,ce=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,Nl=0,se&6)throw Error(M(331));var i=se;for(se|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Ys(8,f,s)}var g=f.child;if(g!==null)g.return=f,$=g;else for(;$!==null;){f=$;var _=f.sibling,C=f.return;if(lv(f),f===h){$=null;break}if(_!==null){_.return=C,$=_;break}$=C}}}var N=s.alternate;if(N!==null){var P=N.child;if(P!==null){N.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ys(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var v=t.current;for($=v;$!==null;){o=$;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,$=k;else e:for(o=v;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:su(9,l)}}catch(j){Ce(l,l.return,j)}if(l===o){$=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,$=V;break e}$=l.return}}if(se=i,pr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Xl,t)}catch{}r=!0}return r}finally{ce=n,Lt.transition=e}}return!1}function zm(t,e,n){e=ji(n,e),e=X_(t,e,1),t=Zn(t,e,1),e=ht(),t!==null&&(Mo(t,1,e),Et(t,e))}function Ce(t,e,n){if(t.tag===3)zm(t,t,n);else for(;e!==null;){if(e.tag===3){zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=ji(n,t),t=J_(e,t,1),e=Zn(e,t,1),t=ht(),e!==null&&(Mo(e,1,t),Et(e,t));break}}e=e.return}}function NI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ke&n)===n&&(Le===4||Le===3&&(Ke&130023424)===Ke&&500>Pe()-Fd?Dr(t,0):Md|=n),Et(t,e)}function _v(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=ht();t=An(t,e),t!==null&&(Mo(t,e,n),Et(t,n))}function DI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_v(t,n)}function bI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),_v(t,n)}var vv;vv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,EI(t,e,n);yt=!!(t.flags&131072)}else yt=!1,we&&e.flags&1048576&&I_(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xa(t,e),t=e.pendingProps;var i=Oi(e,ot.current);Ri(e,n),i=Nd(null,e,r,t,i,n);var s=Dd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,El(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kd(e),i.updater=iu,e.stateNode=i,i._reactInternals=e,hh(e,r,t,n),e=ph(null,e,r,!0,s,n)):(e.tag=0,we&&s&&vd(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=OI(r),t=zt(r,t),i){case 0:e=fh(null,e,r,t,n);break e;case 1:e=Dm(null,e,r,t,n);break e;case 11:e=Pm(null,e,r,t,n);break e;case 14:e=Nm(null,e,r,zt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),fh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Dm(t,e,r,i,n);case 3:e:{if(nv(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,x_(t,e),Al(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(M(423)),e),e=bm(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(M(424)),e),e=bm(t,e,r,n,i);break e}else for(At=Jn(e.stateNode.containerInfo.firstChild),kt=e,we=!0,qt=null,n=C_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Li(),r===i){e=kn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return P_(e),t===null&&lh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,rh(r,i)?o=null:s!==null&&rh(r,s)&&(e.flags|=32),tv(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&lh(e),null;case 13:return rv(t,e,n);case 4:return Cd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mi(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Pm(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(Il,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!_t.current){e=kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=wn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),uh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),uh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ri(e,n),i=Mt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),Nm(t,e,r,i,n);case 15:return Z_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Xa(t,e),e.tag=1,vt(r)?(t=!0,El(e)):t=!1,Ri(e,n),Y_(e,r,i),hh(e,r,i,n),ph(null,e,r,!0,t,n);case 19:return iv(t,e,n);case 22:return ev(t,e,n)}throw Error(M(156,e.tag))};function Ev(t,e){return Ky(t,e)}function VI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new VI(t,e,n,r)}function zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OI(t){if(typeof t=="function")return zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ad)return 11;if(t===ld)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case di:return br(n.children,i,s,e);case od:o=8,i|=8;break;case Oc:return t=Ot(12,n,e,i|2),t.elementType=Oc,t.lanes=s,t;case Lc:return t=Ot(13,n,e,i),t.elementType=Lc,t.lanes=s,t;case Mc:return t=Ot(19,n,e,i),t.elementType=Mc,t.lanes=s,t;case Py:return au(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ry:o=10;break e;case xy:o=9;break e;case ad:o=11;break e;case ld:o=14;break e;case Fn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function br(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function au(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=Py,t.lanes=n,t.stateNode={isHidden:!1},t}function vc(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function Ec(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ec(0),this.expirationTimes=ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $d(t,e,n,r,i,s,o,l,u){return t=new LI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(s),t}function MI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function wv(t){if(!t)return lr;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(vt(n))return w_(t,n,e)}return e}function Tv(t,e,n,r,i,s,o,l,u){return t=$d(n,r,!0,t,i,s,o,l,u),t.context=wv(null),n=t.current,r=ht(),i=tr(n),s=wn(r,i),s.callback=e??null,Zn(n,s,i),t.current.lanes=i,Mo(t,i,r),Et(t,r),t}function lu(t,e,n,r){var i=e.current,s=ht(),o=tr(i);return n=wv(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zn(i,e,o),t!==null&&(Kt(t,i,o,s),Ga(t,i,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function FI(){return null}var Iv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wd(t){this._internalRoot=t}uu.prototype.render=Wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));lu(t,e,null,null)};uu.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){lu(null,t,null,null)}),e[Sn]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=e_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&n_(t)}};function Hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qm(){}function jI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=bl(o);s.call(h)}}var o=Tv(e,r,t,0,null,!1,!1,"",qm);return t._reactRootContainer=o,t[Sn]=o.current,fo(t.nodeType===8?t.parentNode:t),Br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=bl(u);l.call(h)}}var u=$d(t,0,!1,null,null,!1,!1,"",qm);return t._reactRootContainer=u,t[Sn]=u.current,fo(t.nodeType===8?t.parentNode:t),Br(function(){lu(e,u,n,r)}),u}function hu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=bl(o);l.call(u)}}lu(e,o,t,i)}else o=jI(n,e,t,i,r);return bl(o)}Jy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ls(e.pendingLanes);n!==0&&(hd(e,n|1),Et(e,Pe()),!(se&6)&&(Ui=Pe()+500,pr()))}break;case 13:Br(function(){var r=An(t,1);if(r!==null){var i=ht();Kt(r,t,1,i)}}),qd(t,1)}};dd=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=ht();Kt(e,t,134217728,n)}qd(t,134217728)}};Zy=function(t){if(t.tag===13){var e=tr(t),n=An(t,e);if(n!==null){var r=ht();Kt(n,t,e,r)}qd(t,e)}};e_=function(){return ce};t_=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Kc=function(t,e,n){switch(e){case"input":if(Uc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=tu(r);if(!i)throw Error(M(90));Dy(r),Uc(r,i)}}}break;case"textarea":Vy(t,n);break;case"select":e=n.value,e!=null&&Si(t,!!n.multiple,e,!1)}};By=jd;zy=Br;var UI={usingClientEntryPoint:!1,Events:[jo,gi,tu,jy,Uy,jd]},Ns={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BI={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||FI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{Xl=La.inject(BI),nn=La}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UI;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(M(200));return MI(t,e,null,n)};Rt.createRoot=function(t,e){if(!Hd(t))throw Error(M(299));var n=!1,r="",i=Iv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$d(t,1,!1,null,null,n,!1,r,i),t[Sn]=e.current,fo(t.nodeType===8?t.parentNode:t),new Wd(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Wy(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Br(t)};Rt.hydrate=function(t,e,n){if(!cu(e))throw Error(M(200));return hu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Hd(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Iv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Tv(e,null,t,1,n??null,i,!1,s,o),t[Sn]=e.current,fo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new uu(e)};Rt.render=function(t,e,n){if(!cu(e))throw Error(M(200));return hu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!cu(t))throw Error(M(40));return t._reactRootContainer?(Br(function(){hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};Rt.unstable_batchedUpdates=jd;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cu(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return hu(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function Sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sv)}catch(t){console.error(t)}}Sv(),Sy.exports=Rt;var zI=Sy.exports,Wm=zI;bc.createRoot=Wm.createRoot,bc.hydrateRoot=Wm.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Av=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=te.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>te.createElement("svg",{ref:u,...qI,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Av("lucide",i),...l},[...o.map(([h,f])=>te.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(t,e)=>{const n=te.forwardRef(({className:r,...i},s)=>te.createElement(WI,{ref:s,iconNode:e,className:Av(`lucide-${$I(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=Re("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=Re("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=Re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=Re("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=Re("ClipboardPaste",[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=Re("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=Re("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=Re("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=Re("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=Re("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=Re("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=Re("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XI=Re("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=Re("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=Re("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=Re("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=Re("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JI=Re("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZI=Re("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=Re("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=Re("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=Re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Hm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},n1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let _=(l&15)<<2|h>>6,C=h&63;u||(C=64,o||(_=64)),r.push(n[f],n[g],n[_],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):n1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new r1;const _=s<<2|l>>4;if(r.push(_),h!==64){const C=l<<4&240|h>>2;if(r.push(C),g!==64){const N=h<<6&192|g;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class r1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i1=function(t){const e=xv(t);return Pv.encodeByteArray(e,!0)},Vl=function(t){return i1(t).replace(/\./g,"")},Nv=function(t){try{return Pv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=()=>s1().__FIREBASE_DEFAULTS__,a1=()=>{if(typeof process>"u"||typeof Hm>"u")return;const t=Hm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},l1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nv(t[1]);return e&&JSON.parse(e)},fu=()=>{try{return o1()||a1()||l1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dv=t=>{var e,n;return(n=(e=fu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},u1=t=>{const e=Dv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bv=()=>{var t;return(t=fu())===null||t===void 0?void 0:t.config},Vv=t=>{var e;return(e=fu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vl(JSON.stringify(n)),Vl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function d1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function f1(){var t;const e=(t=fu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function p1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function m1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function g1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y1(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _1(){return!f1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v1(){try{return typeof indexedDB=="object"}catch{return!1}}function E1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=w1,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bo.prototype.create)}}class Bo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?T1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,l,r)}}function T1(t,e){return t.replace(I1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const I1=/\{\$([^}]+)}/g;function S1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ol(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Km(s)&&Km(o)){if(!Ol(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Km(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function A1(t,e){const n=new k1(t,e);return n.subscribe.bind(n)}class k1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");C1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wc),i.error===void 0&&(i.error=wc),i.complete===void 0&&(i.complete=wc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return t&&t._delegate?t._delegate:t}class zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new c1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(P1(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:x1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x1(t){return t===kr?void 0:t}function P1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new R1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const D1={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},b1=re.INFO,V1={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},O1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=V1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yd{constructor(e){this.name=e,this._logLevel=b1,this._logHandler=O1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?D1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const L1=(t,e)=>e.some(n=>t instanceof n);let Gm,Qm;function M1(){return Gm||(Gm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F1(){return Qm||(Qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ov=new WeakMap,Ch=new WeakMap,Lv=new WeakMap,Tc=new WeakMap,Xd=new WeakMap;function j1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ov.set(n,t)}).catch(()=>{}),Xd.set(e,t),e}function U1(t){if(Ch.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ch.set(t,e)}let Rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function B1(t){Rh=t(Rh)}function z1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ic(this),e,...n);return Lv.set(r,e.sort?e.sort():[e]),rr(r)}:F1().includes(t)?function(...e){return t.apply(Ic(this),e),rr(Ov.get(this))}:function(...e){return rr(t.apply(Ic(this),e))}}function $1(t){return typeof t=="function"?z1(t):(t instanceof IDBTransaction&&U1(t),L1(t,M1())?new Proxy(t,Rh):t)}function rr(t){if(t instanceof IDBRequest)return j1(t);if(Tc.has(t))return Tc.get(t);const e=$1(t);return e!==t&&(Tc.set(t,e),Xd.set(e,t)),e}const Ic=t=>Xd.get(t);function q1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(rr(o.result),u.oldVersion,u.newVersion,rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const W1=["get","getKey","getAll","getAllKeys","count"],H1=["put","add","delete","clear"],Sc=new Map;function Ym(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sc.get(e))return Sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=H1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||W1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Sc.set(e,s),s}B1(t=>({...t,get:(e,n,r)=>Ym(e,n)||t.get(e,n,r),has:(e,n)=>!!Ym(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function G1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xh="@firebase/app",Xm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Yd("@firebase/app"),Q1="@firebase/app-compat",Y1="@firebase/analytics-compat",X1="@firebase/analytics",J1="@firebase/app-check-compat",Z1="@firebase/app-check",eS="@firebase/auth",tS="@firebase/auth-compat",nS="@firebase/database",rS="@firebase/data-connect",iS="@firebase/database-compat",sS="@firebase/functions",oS="@firebase/functions-compat",aS="@firebase/installations",lS="@firebase/installations-compat",uS="@firebase/messaging",cS="@firebase/messaging-compat",hS="@firebase/performance",dS="@firebase/performance-compat",fS="@firebase/remote-config",pS="@firebase/remote-config-compat",mS="@firebase/storage",gS="@firebase/storage-compat",yS="@firebase/firestore",_S="@firebase/vertexai-preview",vS="@firebase/firestore-compat",ES="firebase",wS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="[DEFAULT]",TS={[xh]:"fire-core",[Q1]:"fire-core-compat",[X1]:"fire-analytics",[Y1]:"fire-analytics-compat",[Z1]:"fire-app-check",[J1]:"fire-app-check-compat",[eS]:"fire-auth",[tS]:"fire-auth-compat",[nS]:"fire-rtdb",[rS]:"fire-data-connect",[iS]:"fire-rtdb-compat",[sS]:"fire-fn",[oS]:"fire-fn-compat",[aS]:"fire-iid",[lS]:"fire-iid-compat",[uS]:"fire-fcm",[cS]:"fire-fcm-compat",[hS]:"fire-perf",[dS]:"fire-perf-compat",[fS]:"fire-rc",[pS]:"fire-rc-compat",[mS]:"fire-gcs",[gS]:"fire-gcs-compat",[yS]:"fire-fst",[vS]:"fire-fst-compat",[_S]:"fire-vertex","fire-js":"fire-js",[ES]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map,IS=new Map,Nh=new Map;function Jm(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zi(t){const e=t.name;if(Nh.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Nh.set(e,t);for(const n of Ll.values())Jm(n,t);for(const n of IS.values())Jm(n,t);return!0}function Jd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new Bo("app","Firebase",SS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=wS;function Mv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ph,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ir.create("bad-app-name",{appName:String(i)});if(n||(n=bv()),!n)throw ir.create("no-options");const s=Ll.get(i);if(s){if(Ol(n,s.options)&&Ol(r,s.config))return s;throw ir.create("duplicate-app",{appName:i})}const o=new N1(i);for(const u of Nh.values())o.addComponent(u);const l=new AS(n,r,o);return Ll.set(i,l),l}function Fv(t=Ph){const e=Ll.get(t);if(!e&&t===Ph&&bv())return Mv();if(!e)throw ir.create("no-app",{appName:t});return e}function sr(t,e,n){var r;let i=(r=TS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}zi(new zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="firebase-heartbeat-database",CS=1,So="firebase-heartbeat-store";let Ac=null;function jv(){return Ac||(Ac=q1(kS,CS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(So)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),Ac}async function RS(t){try{const n=(await jv()).transaction(So),r=await n.objectStore(So).get(Uv(t));return await n.done,r}catch(e){if(e instanceof Dn)Cn.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Zm(t,e){try{const r=(await jv()).transaction(So,"readwrite");await r.objectStore(So).put(e,Uv(t)),await r.done}catch(n){if(n instanceof Dn)Cn.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function Uv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=1024,PS=30*24*60*60*1e3;class NS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=PS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=eg(),{heartbeatsToSend:r,unsentEntries:i}=DS(this._heartbeatsCache.heartbeats),s=Vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Cn.warn(n),""}}}function eg(){return new Date().toISOString().substring(0,10)}function DS(t,e=xS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return v1()?E1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tg(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(t){zi(new zr("platform-logger",e=>new K1(e),"PRIVATE")),zi(new zr("heartbeat",e=>new NS(e),"PRIVATE")),sr(xh,Xm,t),sr(xh,Xm,"esm2017"),sr("fire-js","")}VS("");var OS="firebase",LS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(OS,LS,"app");function Zd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Bv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MS=Bv,zv=new Bo("auth","Firebase",Bv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new Yd("@firebase/auth");function FS(t,...e){Ml.logLevel<=re.WARN&&Ml.warn(`Auth (${Zi}): ${t}`,...e)}function tl(t,...e){Ml.logLevel<=re.ERROR&&Ml.error(`Auth (${Zi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw ef(t,...e)}function sn(t,...e){return ef(t,...e)}function $v(t,e,n){const r=Object.assign(Object.assign({},MS()),{[e]:n});return new Bo("auth","Firebase",r).create(e,{appName:t.name})}function Tn(t){return $v(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ef(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zv.create(t,...e)}function G(t,e,...n){if(!t)throw ef(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tl(e),new Error(e)}function Rn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jS(){return ng()==="http:"||ng()==="https:"}function ng(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jS()||m1()||"connection"in navigator)?navigator.onLine:!0}function BS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=d1()||g1()}get(){return US()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=new $o(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gr(t,e,n,r,i={}){return Wv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=zo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return p1()||(h.referrerPolicy="no-referrer"),qv.fetch()(Hv(t,t.config.apiHost,n,l),h)})}async function Wv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zS),e);try{const i=new WS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ma(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw $v(t,f,h);Qt(t,f)}}catch(i){if(i instanceof Dn)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function qo(t,e,n,r,i={}){const s=await gr(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Hv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tf(t.config,i):`${t.config.apiScheme}://${i}`}function qS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),$S.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}function rg(t){return t!==void 0&&t.enterprise!==void 0}class HS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function KS(t,e){return gr(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function Kv(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QS(t,e=!1){const n=lt(t),r=await n.getIdToken(e),i=nf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Zs(kc(i.auth_time)),issuedAtTime:Zs(kc(i.iat)),expirationTime:Zs(kc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function nf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nv(n);return i?JSON.parse(i):(tl("Failed to decode base64 JWT payload"),null)}catch(i){return tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ig(t){const e=nf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&YS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ao(t,Kv(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Gv(s.providerUserInfo):[],l=ZS(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new bh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function JS(t){const e=lt(t);await Fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Gv(t){return t.map(e=>{var{providerId:n}=e,r=Zd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t,e){const n=await Wv(t,{},async()=>{const r=zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Hv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",qv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tA(t,e){return gr(t,"POST","/v2/accounts:revokeToken",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ig(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=ig(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QS(this,e)}reload(){return JS(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await Ao(this,GS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,C=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:V,isAnonymous:j,providerData:F,stsTokenManager:E}=n;G(k&&E,e,"internal-error");const y=Pi.fromJSON(this.name,E);G(typeof k=="string",e,"internal-error"),Mn(g,e.name),Mn(_,e.name),G(typeof V=="boolean",e,"internal-error"),G(typeof j=="boolean",e,"internal-error"),Mn(C,e.name),Mn(N,e.name),Mn(P,e.name),Mn(b,e.name),Mn(I,e.name),Mn(v,e.name);const w=new vn({uid:k,auth:e,email:_,emailVerified:V,displayName:g,isAnonymous:j,photoURL:N,phoneNumber:C,tenantId:P,stsTokenManager:y,createdAt:I,lastLoginAt:v});return F&&Array.isArray(F)&&(w.providerData=F.map(T=>Object.assign({},T))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pi;i.updateFromServerResponse(n);const s=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Gv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Pi;l.updateFromIdToken(r);const u=new vn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new Map;function En(t){Rn(t instanceof Function,"Expected a class definition");let e=sg.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qv.type="NONE";const og=Qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ni(En(og),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||En(og);const o=nl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const g=vn._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ni(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ni(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(t0(e))return"Blackberry";if(n0(e))return"Webos";if(Xv(e))return"Safari";if((e.includes("chrome/")||Jv(e))&&!e.includes("edge/"))return"Chrome";if(e0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yv(t=at()){return/firefox\//i.test(t)}function Xv(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jv(t=at()){return/crios\//i.test(t)}function Zv(t=at()){return/iemobile/i.test(t)}function e0(t=at()){return/android/i.test(t)}function t0(t=at()){return/blackberry/i.test(t)}function n0(t=at()){return/webos/i.test(t)}function rf(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nA(t=at()){var e;return rf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rA(){return y1()&&document.documentMode===10}function r0(t=at()){return rf(t)||e0(t)||n0(t)||t0(t)||/windows phone/i.test(t)||Zv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t,e=[]){let n;switch(t){case"Browser":n=ag(at());break;case"Worker":n=`${ag(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t,e={}){return gr(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=6;class aA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lg(this),this.idTokenSubscription=new lg(this),this.beforeStateQueue=new iA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kv(this,{idToken:e}),r=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Tn(this));const n=e?lt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sA(this),n=new aA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xr(t){return lt(t)}class lg{constructor(e){this.auth=e,this.observer=null,this.addObserver=A1(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uA(t){pu=t}function s0(t){return pu.loadJS(t)}function cA(){return pu.recaptchaEnterpriseScript}function hA(){return pu.gapiScript}function dA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fA="recaptcha-enterprise",pA="NO_RECAPTCHA";class mA{constructor(e){this.type=fA,this.auth=Xr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{KS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new HS(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;rg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(pA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&rg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=cA();u.length!==0&&(u+=l),s0(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function ug(t,e,n,r=!1){const i=new mA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Vh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ug(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ug(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t,e){const n=Jd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ol(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function yA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _A(t,e,n){const r=Xr(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=o0(e),{host:o,port:l}=vA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),EA()}function o0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vA(t){const e=o0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cg(o)}}}function cg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function wA(t,e){return gr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e){return qo(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function SA(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends sf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vh(e,n,"signInWithPassword",TA);case"emailLink":return IA(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vh(e,r,"signUpPassword",wA);case"emailLink":return SA(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t,e){return qo(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="http://localhost";class $r extends sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $r(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Di(e,n)}buildRequest(){const e={requestUri:AA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CA(t){const e=Fs(js(t)).link,n=e?Fs(js(e)).deep_link_id:null,r=Fs(js(t)).deep_link_id;return(r?Fs(js(r)).link:null)||r||n||e||t}class of{constructor(e){var n,r,i,s,o,l;const u=Fs(js(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,g=kA((i=u.mode)!==null&&i!==void 0?i:null);G(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=CA(e);try{return new of(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.providerId=es.PROVIDER_ID}static credential(e,n){return ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=of.parseLink(n);return G(r,"argument-error"),ko._fromEmailAndCode(e,r.code,r.tenantId)}}es.PROVIDER_ID="password";es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends a0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Wo{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Wo{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Wo{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e){return qo(t,"POST","/v1/accounts:signUp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vn._fromIdTokenResponse(e,r,i),o=hg(r);return new qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hg(r);return new qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,jl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new jl(e,n,r,i)}}function l0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jl._fromErrorAndOperation(t,s,e,r):s})}async function xA(t,e,n=!1){const r=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(Tn(r));const i="reauthenticate";try{const s=await Ao(t,l0(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=nf(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),qr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t,e,n=!1){if(tn(t.app))return Promise.reject(Tn(t));const r="signIn",i=await l0(t,r,e),s=await qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function NA(t,e){return u0(Xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(t){const e=Xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DA(t,e,n){if(tn(t.app))return Promise.reject(Tn(t));const r=Xr(t),o=await Vh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&c0(t),u}),l=await qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function bA(t,e,n){return tn(t.app)?Promise.reject(Tn(t)):NA(lt(t),es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&c0(t),r})}function VA(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function OA(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function LA(t,e,n,r){return lt(t).onAuthStateChanged(e,n,r)}function MA(t){return lt(t).signOut()}const Ul="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=1e3,jA=10;class d0 extends h0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=r0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}d0.type="LOCAL";const UA=d0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0 extends h0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}f0.type="SESSION";const p0=f0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await BA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=af("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function $A(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function qA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HA(){return m0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="firebaseLocalStorageDb",KA=1,Bl="firebaseLocalStorage",y0="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gu(t,e){return t.transaction([Bl],e?"readwrite":"readonly").objectStore(Bl)}function GA(){const t=indexedDB.deleteDatabase(g0);return new Ho(t).toPromise()}function Oh(){const t=indexedDB.open(g0,KA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bl,{keyPath:y0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bl)?e(r):(r.close(),await GA(),e(await Oh()))})})}async function dg(t,e,n){const r=gu(t,!0).put({[y0]:e,value:n});return new Ho(r).toPromise()}async function QA(t,e){const n=gu(t,!1).get(e),r=await new Ho(n).toPromise();return r===void 0?null:r.value}function fg(t,e){const n=gu(t,!0).delete(e);return new Ho(n).toPromise()}const YA=800,XA=3;class _0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return m0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mu._getInstance(HA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qA(),!this.activeServiceWorker)return;this.sender=new zA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oh();return await dg(e,Ul,"1"),await fg(e,Ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gu(i,!1).getAll();return new Ho(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_0.type="LOCAL";const JA=_0;new $o(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t,e){return e?En(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends sf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ek(t){return u0(t.auth,new lf(t),t.bypassAuthState)}function tk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),PA(n,new lf(t),t.bypassAuthState)}async function nk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),xA(n,new lf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ek;case"linkViaPopup":case"linkViaRedirect":return nk;case"reauthViaPopup":case"reauthViaRedirect":return tk;default:Qt(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new $o(2e3,1e4);class Ii extends v0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ii.currentPopupAction&&Ii.currentPopupAction.cancel(),Ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rk.get())};e()}}Ii.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="pendingRedirect",rl=new Map;class sk extends v0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const r=await ok(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ok(t,e){const n=uk(e),r=lk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ak(t,e){rl.set(t._key(),e)}function lk(t){return En(t._redirectPersistence)}function uk(t){return nl(ik,t.config.apiKey,t.name)}async function ck(t,e,n=!1){if(tn(t.app))return Promise.reject(Tn(t));const r=Xr(t),i=ZA(r,e),o=await new sk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=10*60*1e3;class dk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!E0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(pg(e))}saveEventToCache(e){this.cachedEventUids.add(pg(e)),this.lastProcessedEventTime=Date.now()}}function pg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function E0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return E0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e={}){return gr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gk=/^https?/;async function yk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pk(t);for(const n of e)try{if(_k(n))return}catch{}Qt(t,"unauthorized-domain")}function _k(t){const e=Dh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gk.test(n))return!1;if(mk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new $o(3e4,6e4);function mg(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ek(t){return new Promise((e,n)=>{var r,i,s;function o(){mg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mg(),n(sn(t,"network-request-failed"))},timeout:vk.get()})}if(!((i=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=on().gapi)===null||s===void 0)&&s.load)o();else{const l=dA("iframefcb");return on()[l]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},s0(`${hA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw il=null,e})}let il=null;function wk(t){return il=il||Ek(t),il}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=new $o(5e3,15e3),Ik="__/auth/iframe",Sk="emulator/auth/iframe",Ak={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ck(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tf(e,Sk):`https://${t.config.authDomain}/${Ik}`,r={apiKey:e.apiKey,appName:t.name,v:Zi},i=kk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zo(r).slice(1)}`}async function Rk(t){const e=await wk(t),n=on().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Ck(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ak,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=on().setTimeout(()=>{s(o)},Tk.get());function u(){on().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pk=500,Nk=600,Dk="_blank",bk="http://localhost";class gg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vk(t,e,n,r=Pk,i=Nk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},xk),{width:r.toString(),height:i.toString(),top:s,left:o}),h=at().toLowerCase();n&&(l=Jv(h)?Dk:n),Yv(h)&&(e=e||bk,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[C,N])=>`${_}${C}=${N},`,"");if(nA(h)&&l!=="_self")return Ok(e||"",l),new gg(null);const g=window.open(e||"",l,f);G(g,t,"popup-blocked");try{g.focus()}catch{}return new gg(g)}function Ok(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="__/auth/handler",Mk="emulator/auth/handler",Fk=encodeURIComponent("fac");async function yg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zi,eventId:i};if(e instanceof a0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",S1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Wo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Fk}=${encodeURIComponent(u)}`:"";return`${jk(t)}?${zo(l).slice(1)}${h}`}function jk({config:t}){return t.emulator?tf(t,Mk):`https://${t.authDomain}/${Lk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="webStorageSupport";class Uk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=p0,this._completeRedirectFn=ck,this._overrideRedirectResult=ak}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yg(e,n,r,Dh(),i);return Vk(e,o,af())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yg(e,n,r,Dh(),i);return $A(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Rk(e),r=new dk(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cc,{type:Cc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cc];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return r0()||Xv()||rf()}}const Bk=Uk;var _g="@firebase/auth",vg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qk(t){zi(new zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i0(t)},h=new lA(r,i,s,u);return yA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zi(new zr("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new zk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(_g,vg,$k(t)),sr(_g,vg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=5*60,Hk=Vv("authIdTokenMaxAge")||Wk;let Eg=null;const Kk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hk)return;const i=n==null?void 0:n.token;Eg!==i&&(Eg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gk(t=Fv()){const e=Jd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gA(t,{popupRedirectResolver:Bk,persistence:[JA,UA,p0]}),r=Vv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Kk(s.toString());OA(n,o,()=>o(n.currentUser)),VA(n,l=>o(l))}}const i=Dv("auth");return i&&_A(n,`http://${i}`),n}function Qk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Qk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qk("Browser");var wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vr,w0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.D=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(T,A,R){for(var S=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)S[ze-2]=arguments[ze];return y.prototype[A].apply(T,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,w){w||(w=0);var T=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)T[A]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(A=0;16>A;++A)T[A]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],A=E.g[2];var R=E.g[3],S=y+(R^w&(A^R))+T[0]+3614090360&4294967295;y=w+(S<<7&4294967295|S>>>25),S=R+(A^y&(w^A))+T[1]+3905402710&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(w^R&(y^w))+T[2]+606105819&4294967295,A=R+(S<<17&4294967295|S>>>15),S=w+(y^A&(R^y))+T[3]+3250441966&4294967295,w=A+(S<<22&4294967295|S>>>10),S=y+(R^w&(A^R))+T[4]+4118548399&4294967295,y=w+(S<<7&4294967295|S>>>25),S=R+(A^y&(w^A))+T[5]+1200080426&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(w^R&(y^w))+T[6]+2821735955&4294967295,A=R+(S<<17&4294967295|S>>>15),S=w+(y^A&(R^y))+T[7]+4249261313&4294967295,w=A+(S<<22&4294967295|S>>>10),S=y+(R^w&(A^R))+T[8]+1770035416&4294967295,y=w+(S<<7&4294967295|S>>>25),S=R+(A^y&(w^A))+T[9]+2336552879&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(w^R&(y^w))+T[10]+4294925233&4294967295,A=R+(S<<17&4294967295|S>>>15),S=w+(y^A&(R^y))+T[11]+2304563134&4294967295,w=A+(S<<22&4294967295|S>>>10),S=y+(R^w&(A^R))+T[12]+1804603682&4294967295,y=w+(S<<7&4294967295|S>>>25),S=R+(A^y&(w^A))+T[13]+4254626195&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(w^R&(y^w))+T[14]+2792965006&4294967295,A=R+(S<<17&4294967295|S>>>15),S=w+(y^A&(R^y))+T[15]+1236535329&4294967295,w=A+(S<<22&4294967295|S>>>10),S=y+(A^R&(w^A))+T[1]+4129170786&4294967295,y=w+(S<<5&4294967295|S>>>27),S=R+(w^A&(y^w))+T[6]+3225465664&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^w&(R^y))+T[11]+643717713&4294967295,A=R+(S<<14&4294967295|S>>>18),S=w+(R^y&(A^R))+T[0]+3921069994&4294967295,w=A+(S<<20&4294967295|S>>>12),S=y+(A^R&(w^A))+T[5]+3593408605&4294967295,y=w+(S<<5&4294967295|S>>>27),S=R+(w^A&(y^w))+T[10]+38016083&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^w&(R^y))+T[15]+3634488961&4294967295,A=R+(S<<14&4294967295|S>>>18),S=w+(R^y&(A^R))+T[4]+3889429448&4294967295,w=A+(S<<20&4294967295|S>>>12),S=y+(A^R&(w^A))+T[9]+568446438&4294967295,y=w+(S<<5&4294967295|S>>>27),S=R+(w^A&(y^w))+T[14]+3275163606&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^w&(R^y))+T[3]+4107603335&4294967295,A=R+(S<<14&4294967295|S>>>18),S=w+(R^y&(A^R))+T[8]+1163531501&4294967295,w=A+(S<<20&4294967295|S>>>12),S=y+(A^R&(w^A))+T[13]+2850285829&4294967295,y=w+(S<<5&4294967295|S>>>27),S=R+(w^A&(y^w))+T[2]+4243563512&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^w&(R^y))+T[7]+1735328473&4294967295,A=R+(S<<14&4294967295|S>>>18),S=w+(R^y&(A^R))+T[12]+2368359562&4294967295,w=A+(S<<20&4294967295|S>>>12),S=y+(w^A^R)+T[5]+4294588738&4294967295,y=w+(S<<4&4294967295|S>>>28),S=R+(y^w^A)+T[8]+2272392833&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^w)+T[11]+1839030562&4294967295,A=R+(S<<16&4294967295|S>>>16),S=w+(A^R^y)+T[14]+4259657740&4294967295,w=A+(S<<23&4294967295|S>>>9),S=y+(w^A^R)+T[1]+2763975236&4294967295,y=w+(S<<4&4294967295|S>>>28),S=R+(y^w^A)+T[4]+1272893353&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^w)+T[7]+4139469664&4294967295,A=R+(S<<16&4294967295|S>>>16),S=w+(A^R^y)+T[10]+3200236656&4294967295,w=A+(S<<23&4294967295|S>>>9),S=y+(w^A^R)+T[13]+681279174&4294967295,y=w+(S<<4&4294967295|S>>>28),S=R+(y^w^A)+T[0]+3936430074&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^w)+T[3]+3572445317&4294967295,A=R+(S<<16&4294967295|S>>>16),S=w+(A^R^y)+T[6]+76029189&4294967295,w=A+(S<<23&4294967295|S>>>9),S=y+(w^A^R)+T[9]+3654602809&4294967295,y=w+(S<<4&4294967295|S>>>28),S=R+(y^w^A)+T[12]+3873151461&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^w)+T[15]+530742520&4294967295,A=R+(S<<16&4294967295|S>>>16),S=w+(A^R^y)+T[2]+3299628645&4294967295,w=A+(S<<23&4294967295|S>>>9),S=y+(A^(w|~R))+T[0]+4096336452&4294967295,y=w+(S<<6&4294967295|S>>>26),S=R+(w^(y|~A))+T[7]+1126891415&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~w))+T[14]+2878612391&4294967295,A=R+(S<<15&4294967295|S>>>17),S=w+(R^(A|~y))+T[5]+4237533241&4294967295,w=A+(S<<21&4294967295|S>>>11),S=y+(A^(w|~R))+T[12]+1700485571&4294967295,y=w+(S<<6&4294967295|S>>>26),S=R+(w^(y|~A))+T[3]+2399980690&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~w))+T[10]+4293915773&4294967295,A=R+(S<<15&4294967295|S>>>17),S=w+(R^(A|~y))+T[1]+2240044497&4294967295,w=A+(S<<21&4294967295|S>>>11),S=y+(A^(w|~R))+T[8]+1873313359&4294967295,y=w+(S<<6&4294967295|S>>>26),S=R+(w^(y|~A))+T[15]+4264355552&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~w))+T[6]+2734768916&4294967295,A=R+(S<<15&4294967295|S>>>17),S=w+(R^(A|~y))+T[13]+1309151649&4294967295,w=A+(S<<21&4294967295|S>>>11),S=y+(A^(w|~R))+T[4]+4149444226&4294967295,y=w+(S<<6&4294967295|S>>>26),S=R+(w^(y|~A))+T[11]+3174756917&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~w))+T[2]+718787259&4294967295,A=R+(S<<15&4294967295|S>>>17),S=w+(R^(A|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var w=y-this.blockSize,T=this.B,A=this.h,R=0;R<y;){if(A==0)for(;R<=w;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<y;)if(T[A++]=E.charCodeAt(R++),A==this.blockSize){i(this,T),A=0;break}}else for(;R<y;)if(T[A++]=E[R++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var w=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=w&255,w/=256;for(this.u(E),E=Array(16),y=w=0;4>y;++y)for(var T=0;32>T;T+=8)E[w++]=this.g[y]>>>T&255;return E};function s(E,y){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;for(var w=[],T=!0,A=E.length-1;0<=A;A--){var R=E[A]|0;T&&R==y||(w[A]=R,T=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return b(h(-E));for(var y=[],w=1,T=0;E>=w;T++)y[T]=E/w|0,w*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return b(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),T=g,A=0;A<E.length;A+=8){var R=Math.min(8,E.length-A),S=parseInt(E.substring(A,A+R),y);8>R?(R=h(Math.pow(y,R)),T=T.j(R).add(h(S))):(T=T.j(w),T=T.add(h(S)))}return T}var g=u(0),_=u(1),C=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();for(var E=0,y=1,w=0;w<this.g.length;w++){var T=this.i(w);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(P(this))return"-"+b(this).toString(E);for(var y=h(Math.pow(E,6)),w=this,T="";;){var A=V(w,y).g;w=I(w,A.j(y));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=A,N(w))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=I(this,E),P(E)?-1:N(E)?0:1};function b(E){for(var y=E.g.length,w=[],T=0;T<y;T++)w[T]=~E.g[T];return new o(w,~E.h).add(_)}t.abs=function(){return P(this)?b(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0,A=0;A<=y;A++){var R=T+(this.i(A)&65535)+(E.i(A)&65535),S=(R>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);T=S>>>16,R&=65535,S&=65535,w[A]=S<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function I(E,y){return E.add(b(y))}t.j=function(E){if(N(this)||N(E))return g;if(P(this))return P(E)?b(this).j(b(E)):b(b(this).j(E));if(P(E))return b(this.j(b(E)));if(0>this.l(C)&&0>E.l(C))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,w=[],T=0;T<2*y;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<E.g.length;A++){var R=this.i(T)>>>16,S=this.i(T)&65535,ze=E.i(A)>>>16,Xt=E.i(A)&65535;w[2*T+2*A]+=S*Xt,v(w,2*T+2*A),w[2*T+2*A+1]+=R*Xt,v(w,2*T+2*A+1),w[2*T+2*A+1]+=S*ze,v(w,2*T+2*A+1),w[2*T+2*A+2]+=R*ze,v(w,2*T+2*A+2)}for(T=0;T<y;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=y;T<2*y;T++)w[T]=0;return new o(w,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function k(E,y){this.g=E,this.h=y}function V(E,y){if(N(y))throw Error("division by zero");if(N(E))return new k(g,g);if(P(E))return y=V(b(E),y),new k(b(y.g),b(y.h));if(P(y))return y=V(E,b(y)),new k(b(y.g),y.h);if(30<E.g.length){if(P(E)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var w=_,T=y;0>=T.l(E);)w=j(w),T=j(T);var A=F(w,1),R=F(T,1);for(T=F(T,2),w=F(w,2);!N(T);){var S=R.add(T);0>=S.l(E)&&(A=A.add(w),R=S),T=F(T,1),w=F(w,1)}return y=I(E,A.j(y)),new k(A,y)}for(A=g;0<=E.l(y);){for(w=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(w),S=R.j(y);P(S)||0<S.l(E);)w-=T,R=h(w),S=R.j(y);N(R)&&(R=_),A=A.add(R),E=I(E,S)}return new k(A,E)}t.A=function(E){return V(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)&E.i(T);return new o(w,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)|E.i(T);return new o(w,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)^E.i(T);return new o(w,this.h^E.h)};function j(E){for(var y=E.g.length+1,w=[],T=0;T<y;T++)w[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(w,E.h)}function F(E,y){var w=y>>5;y%=32;for(var T=E.g.length-w,A=[],R=0;R<T;R++)A[R]=0<y?E.i(R+w)>>>y|E.i(R+w+1)<<32-y:E.i(R+w);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,w0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Vr=o}).apply(typeof wg<"u"?wg:typeof self<"u"?self:typeof window<"u"?window:{});var Fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var T0,Us,I0,sl,Lh,S0,A0,k0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fa=="object"&&Fa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var x=a[m];if(!(x in d))break e;d=d[x]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,m=!1,x={next:function(){if(!m&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,m),a.apply(c,x)}}return function(){return a.apply(c,arguments)}}function _(a,c,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function C(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function N(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,x,D){for(var U=Array(arguments.length-2),de=2;de<arguments.length;de++)U[de-2]=arguments[de];return c.prototype[x].apply(m,U)}}function P(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function b(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const x=a.length||0,D=m.length||0;a.length=x+D;for(let U=0;U<D;U++)a[x+U]=m[U]}else a.push(m)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var j=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function F(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(d in m)a[d]=m[d];for(let D=0;D<w.length;D++)d=w[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function S(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ze{constructor(){this.h=this.g=null}add(c,d){const m=Xt.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Xt=new I(()=>new yr,a=>a.reset());class yr{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Tt,B=!1,Q=new ze,Y=()=>{const a=l.Promise.resolve(void 0);Tt=()=>{a.then(ge)}};var ge=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){R(d)}var c=Xt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Ve(a,c){if(oe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{V(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ve.aa.h.call(this)}}N(Ve,oe);var Pt={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pt="closure_listenable_"+(1e6*Math.random()|0),Pu=0;function ti(a,c,d,m,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=x,this.key=++Pu,this.da=this.fa=!1}function _r(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function hn(a){this.src=a,this.g={},this.h=0}hn.prototype.add=function(a,c,d,m,x){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var U=jt(a,c,m,x);return-1<U?(c=a[U],d||(c.fa=!1)):(c=new ti(c,this.src,D,!!m,x),c.fa=d,a.push(c)),c};function vr(a,c){var d=c.type;if(d in a.g){var m=a.g[d],x=Array.prototype.indexOf.call(m,c,void 0),D;(D=0<=x)&&Array.prototype.splice.call(m,x,1),D&&(_r(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function jt(a,c,d,m){for(var x=0;x<a.length;++x){var D=a[x];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==m)return x}return-1}var os="closure_lm_"+(1e6*Math.random()|0),as={};function Zo(a,c,d,m,x){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Zo(a,c[D],d,m,x);return null}return d=na(d),a&&a[pt]?a.K(c,d,h(m)?!!m.capture:!1,x):Nu(a,c,d,!1,m,x)}function Nu(a,c,d,m,x,D){if(!c)throw Error("Invalid event type");var U=h(x)?!!x.capture:!!x,de=ls(a);if(de||(a[os]=de=new hn(a)),d=de.add(c,d,m,U,D),d.proxy)return d;if(m=Du(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)fe||(x=U),x===void 0&&(x=!1),a.addEventListener(c.toString(),m,x);else if(a.attachEvent)a.attachEvent(ta(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Du(){function a(d){return c.call(a.src,a.listener,d)}const c=bu;return a}function ea(a,c,d,m,x){if(Array.isArray(c))for(var D=0;D<c.length;D++)ea(a,c[D],d,m,x);else m=h(m)?!!m.capture:!!m,d=na(d),a&&a[pt]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=jt(D,d,m,x),-1<d&&(_r(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=ls(a))&&(c=a.g[c.toString()],a=-1,c&&(a=jt(c,d,m,x)),(d=-1<a?c[a]:null)&&ni(d))}function ni(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[pt])vr(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(ta(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=ls(c))?(vr(d,a),d.h==0&&(d.src=null,c[os]=null)):_r(a)}}}function ta(a){return a in as?as[a]:as[a]="on"+a}function bu(a,c){if(a.da)a=!0;else{c=new Ve(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&ni(a),a=d.call(m,c)}return a}function ls(a){return a=a[os],a instanceof hn?a:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function na(a){return typeof a=="function"?a:(a[us]||(a[us]=function(c){return a.handleEvent(c)}),a[us])}function Fe(){ue.call(this),this.i=new hn(this),this.M=this,this.F=null}N(Fe,ue),Fe.prototype[pt]=!0,Fe.prototype.removeEventListener=function(a,c,d,m){ea(this,a,c,d,m)};function z(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new oe(c,a);else if(c instanceof oe)c.target=c.target||a;else{var x=c;c=new oe(m,a),T(c,x)}if(x=!0,d)for(var D=d.length-1;0<=D;D--){var U=c.g=d[D];x=K(U,m,!0,c)&&x}if(U=c.g=a,x=K(U,m,!0,c)&&x,x=K(U,m,!1,c)&&x,d)for(D=0;D<d.length;D++)U=c.g=d[D],x=K(U,m,!1,c)&&x}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)_r(d[m]);delete a.g[c],a.h--}}this.F=null},Fe.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Fe.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function K(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,D=0;D<c.length;++D){var U=c[D];if(U&&!U.da&&U.capture==d){var de=U.listener,$e=U.ha||U.src;U.fa&&vr(a.i,U),x=de.call($e,m)!==!1&&x}}return x&&!m.defaultPrevented}function pe(a,c,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Xe(a){a.g=pe(()=>{a.g=null,a.i&&(a.i=!1,Xe(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Nt extends ue{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Xe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(a){ue.call(this),this.h=a,this.g={}}N(mt,ue);var cs=[];function ra(a){F(a.g,function(c,d){this.g.hasOwnProperty(d)&&ni(c)},a),a.g={}}mt.prototype.N=function(){mt.aa.N.call(this),ra(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hs=l.JSON.stringify,ia=l.JSON.parse,HE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Vu(){}Vu.prototype.h=null;function Hf(a){return a.h||(a.h=a.i())}function Kf(){}var ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ou(){oe.call(this,"d")}N(Ou,oe);function Lu(){oe.call(this,"c")}N(Lu,oe);var Er={},Gf=null;function sa(){return Gf=Gf||new Fe}Er.La="serverreachability";function Qf(a){oe.call(this,Er.La,a)}N(Qf,oe);function fs(a){const c=sa();z(c,new Qf(c))}Er.STAT_EVENT="statevent";function Yf(a,c){oe.call(this,Er.STAT_EVENT,a),this.stat=c}N(Yf,oe);function ut(a){const c=sa();z(c,new Yf(c,a))}Er.Ma="timingevent";function Xf(a,c){oe.call(this,Er.Ma,a),this.size=c}N(Xf,oe);function ps(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function ms(){this.g=!0}ms.prototype.xa=function(){this.g=!1};function KE(a,c,d,m,x,D){a.info(function(){if(a.g)if(D)for(var U="",de=D.split("&"),$e=0;$e<de.length;$e++){var ae=de[$e].split("=");if(1<ae.length){var Je=ae[0];ae=ae[1];var Ze=Je.split("_");U=2<=Ze.length&&Ze[1]=="type"?U+(Je+"="+ae+"&"):U+(Je+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+c+`
`+d+`
`+U})}function GE(a,c,d,m,x,D,U){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+c+`
`+d+`
`+D+" "+U})}function ri(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+YE(a,d)+(m?" "+m:"")})}function QE(a,c){a.info(function(){return"TIMEOUT: "+c})}ms.prototype.info=function(){};function YE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var x=m[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<x.length;U++)x[U]=""}}}}return hs(d)}catch{return c}}var oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mu;function aa(){}N(aa,Vu),aa.prototype.g=function(){return new XMLHttpRequest},aa.prototype.i=function(){return{}},Mu=new aa;function bn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zf}function Zf(){this.i=null,this.g="",this.h=!1}var ep={},Fu={};function ju(a,c,d){a.L=1,a.v=ha(dn(c)),a.m=d,a.P=!0,tp(a,null)}function tp(a,c){a.F=Date.now(),la(a),a.A=dn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),mp(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Zf,a.g=bp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new Nt(_(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(cs[0]=x.toString()),x=cs);for(var D=0;D<x.length;D++){var U=Zo(d,x[D],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),fs(),KE(a.i,a.u,a.A,a.l,a.R,a.m)}bn.prototype.ca=function(a){a=a.target;const c=this.M;c&&fn(a)==3?c.j():this.Y(a)},bn.prototype.Y=function(a){try{if(a==this.g)e:{const Ze=fn(this.g);var c=this.g.Ba();const oi=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||Tp(this.g)))){this.J||Ze!=4||c==7||(c==8||0>=oi?fs(3):fs(2)),Uu(this);var d=this.g.Z();this.X=d;t:if(np(this)){var m=Tp(this.g);a="";var x=m.length,D=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),gs(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(D&&c==x-1)});m.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,GE(this.i,this.u,this.A,this.l,this.R,Ze,d),this.o){if(this.T&&!this.K){t:{if(this.g){var de,$e=this.g;if((de=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(de)){var ae=de;break t}}ae=null}if(d=ae)ri(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bu(this,d);else{this.o=!1,this.s=3,ut(12),wr(this),gs(this);break e}}if(this.P){d=!0;let Ut;for(;!this.J&&this.C<U.length;)if(Ut=XE(this,U),Ut==Fu){Ze==4&&(this.s=4,ut(14),d=!1),ri(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==ep){this.s=4,ut(15),ri(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else ri(this.i,this.l,Ut,null),Bu(this,Ut);if(np(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||U.length!=0||this.h.h||(this.s=1,ut(16),d=!1),this.o=this.o&&d,!d)ri(this.i,this.l,U,"[Invalid Chunked Response]"),wr(this),gs(this);else if(0<U.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Ku(Je),Je.M=!0,ut(11))}}else ri(this.i,this.l,U,null),Bu(this,U);Ze==4&&wr(this),this.o&&!this.J&&(Ze==4?xp(this.j,this):(this.o=!1,la(this)))}else pw(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),wr(this),gs(this)}}}catch{}finally{}};function np(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function XE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Fu:(d=Number(c.substring(d,m)),isNaN(d)?ep:(m+=1,m+d>c.length?Fu:(c=c.slice(m,m+d),a.C=m+d,c)))}bn.prototype.cancel=function(){this.J=!0,wr(this)};function la(a){a.S=Date.now()+a.I,rp(a,a.I)}function rp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ps(_(a.ba,a),c)}function Uu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(QE(this.i,this.A),this.L!=2&&(fs(),ut(17)),wr(this),this.s=2,gs(this)):rp(this,this.S-a)};function gs(a){a.j.G==0||a.J||xp(a.j,a)}function wr(a){Uu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,ra(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Bu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||zu(d.h,a))){if(!a.K&&zu(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ya(d),ma(d);else break e;Hu(d),ut(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=ps(_(d.Za,d),6e3));if(1>=op(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ir(d,11)}else if((a.K||d.g==a)&&ya(d),!v(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let ae=x[c];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const Je=ae[3];Je!=null&&(d.la=Je,d.j.info("VER="+d.la));const Ze=ae[4];Ze!=null&&(d.Aa=Ze,d.j.info("SVER="+d.Aa));const oi=ae[5];oi!=null&&typeof oi=="number"&&0<oi&&(m=1.5*oi,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ut=a.g;if(Ut){const va=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var D=m.h;D.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&($u(D,D.h),D.h=null))}if(m.D){const Gu=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Gu&&(m.ya=Gu,ye(m.I,m.D,Gu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var U=a;if(m.qa=Dp(m,m.J?m.ia:null,m.W),U.K){ap(m.h,U);var de=U,$e=m.L;$e&&(de.I=$e),de.B&&(Uu(de),la(de)),m.g=U}else Cp(m);0<d.i.length&&ga(d)}else ae[0]!="stop"&&ae[0]!="close"||Ir(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Ir(d,7):Wu(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}fs(4)}catch{}}var JE=class{constructor(a,c){this.g=a,this.map=c}};function ip(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function op(a){return a.h?1:a.g?a.g.size:0}function zu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function $u(a,c){a.g?a.g.add(c):a.h=c}function ap(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}ip.prototype.cancel=function(){if(this.i=lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return P(a.i)}function ZE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function ew(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function up(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=ew(a),m=ZE(a),x=m.length,D=0;D<x;D++)c.call(void 0,m[D],d&&d[D],a)}var cp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),x=null;if(0<=m){var D=a[d].substring(0,m);x=a[d].substring(m+1)}else D=a[d];c(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Tr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tr){this.h=a.h,ua(this,a.j),this.o=a.o,this.g=a.g,ca(this,a.s),this.l=a.l;var c=a.i,d=new vs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),hp(this,d),this.m=a.m}else a&&(c=String(a).match(cp))?(this.h=!1,ua(this,c[1]||"",!0),this.o=ys(c[2]||""),this.g=ys(c[3]||"",!0),ca(this,c[4]),this.l=ys(c[5]||"",!0),hp(this,c[6]||"",!0),this.m=ys(c[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}Tr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(_s(c,dp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(_s(c,dp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(_s(d,d.charAt(0)=="/"?iw:rw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",_s(d,ow)),a.join("")};function dn(a){return new Tr(a)}function ua(a,c,d){a.j=d?ys(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ca(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function hp(a,c,d){c instanceof vs?(a.i=c,aw(a.i,a.h)):(d||(c=_s(c,sw)),a.i=new vs(c,a.h))}function ye(a,c,d){a.i.set(c,d)}function ha(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ys(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function _s(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,nw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var dp=/[#\/\?@]/g,rw=/[#\?:]/g,iw=/[#\?]/g,sw=/[#\?@]/g,ow=/#/g;function vs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Vn(a){a.g||(a.g=new Map,a.h=0,a.i&&tw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=vs.prototype,t.add=function(a,c){Vn(this),this.i=null,a=ii(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function fp(a,c){Vn(a),c=ii(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function pp(a,c){return Vn(a),c=ii(a,c),a.g.has(c)}t.forEach=function(a,c){Vn(this),this.g.forEach(function(d,m){d.forEach(function(x){a.call(c,x,m,this)},this)},this)},t.na=function(){Vn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const x=a[m];for(let D=0;D<x.length;D++)d.push(c[m])}return d},t.V=function(a){Vn(this);let c=[];if(typeof a=="string")pp(this,a)&&(c=c.concat(this.g.get(ii(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Vn(this),this.i=null,a=ii(this,a),pp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function mp(a,c,d){fp(a,c),0<d.length&&(a.i=null,a.g.set(ii(a,c),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const D=encodeURIComponent(String(m)),U=this.V(m);for(m=0;m<U.length;m++){var x=D;U[m]!==""&&(x+="="+encodeURIComponent(String(U[m]))),a.push(x)}}return this.i=a.join("&")};function ii(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function aw(a,c){c&&!a.j&&(Vn(a),a.i=null,a.g.forEach(function(d,m){var x=m.toLowerCase();m!=x&&(fp(this,m),mp(this,x,d))},a)),a.j=c}function lw(a,c){const d=new ms;if(l.Image){const m=new Image;m.onload=C(On,d,"TestLoadImage: loaded",!0,c,m),m.onerror=C(On,d,"TestLoadImage: error",!1,c,m),m.onabort=C(On,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=C(On,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function uw(a,c){const d=new ms,m=new AbortController,x=setTimeout(()=>{m.abort(),On(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(x),D.ok?On(d,"TestPingServer: ok",!0,c):On(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),On(d,"TestPingServer: error",!1,c)})}function On(a,c,d,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(d)}catch{}}function cw(){this.g=new HE}function hw(a,c,d){const m=d||"";try{up(a,function(x,D){let U=x;h(x)&&(U=hs(x)),c.push(m+D+"="+encodeURIComponent(U))})}catch(x){throw c.push(m+"type="+encodeURIComponent("_badmap")),x}}function da(a){this.l=a.Ub||null,this.j=a.eb||!1}N(da,Vu),da.prototype.g=function(){return new fa(this.l,this.j)},da.prototype.i=function(a){return function(){return a}}({});function fa(a,c){Fe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(fa,Fe),t=fa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Es(this):ws(this),this.readyState==3&&gp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Es(this))},t.Qa=function(a){this.g&&(this.response=a,Es(this))},t.ga=function(){this.g&&Es(this)};function Es(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ws(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function yp(a){let c="";return F(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function qu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=yp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ye(a,c,d))}function ke(a){Fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ke,Fe);var dw=/^https?$/i,fw=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mu.g(),this.v=this.o?Hf(this.o):Hf(Mu),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){_p(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)d.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fw,c,void 0))||m||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of d)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){_p(this,D)}};function _p(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,vp(a),pa(a)}function vp(a){a.A||(a.A=!0,z(a,"complete"),z(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,z(this,"complete"),z(this,"abort"),pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pa(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ep(this):this.bb())},t.bb=function(){Ep(this)};function Ep(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)pe(a.Ea,0,a);else if(z(a,"readystatechange"),fn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=U===0){var x=String(a.D).match(cp)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),m=!dw.test(x?x.toLowerCase():"")}d=m}if(d)z(a,"complete"),z(a,"success");else{a.m=6;try{var D=2<fn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",vp(a)}}finally{pa(a)}}}}function pa(a,c){if(a.g){wp(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||z(a,"ready");try{d.onreadystatechange=m}catch{}}}function wp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),ia(c)}};function Tp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pw(a){const c={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(v(a[m]))continue;var d=A(a[m]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[x]||[];c[x]=D,D.push(d)}E(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Ip(a){this.Aa=0,this.i=[],this.j=new ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ts("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ts("baseRetryDelayMs",5e3,a),this.cb=Ts("retryDelaySeedMs",1e4,a),this.Wa=Ts("forwardChannelMaxRetries",2,a),this.wa=Ts("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ip(a&&a.concurrentRequestLimit),this.Da=new cw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ip.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){ut(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Dp(this,null,this.W),ga(this)};function Wu(a){if(Sp(a),a.G==3){var c=a.U++,d=dn(a.I);if(ye(d,"SID",a.K),ye(d,"RID",c),ye(d,"TYPE","terminate"),Is(a,d),c=new bn(a,a.j,c),c.L=2,c.v=ha(dn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=bp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),la(c)}Np(a)}function ma(a){a.g&&(Ku(a),a.g.cancel(),a.g=null)}function Sp(a){ma(a),a.u&&(l.clearTimeout(a.u),a.u=null),ya(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ga(a){if(!sp(a.h)&&!a.s){a.s=!0;var c=a.Ga;Tt||Y(),B||(Tt(),B=!0),Q.add(c,a),a.B=0}}function mw(a,c){return op(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ps(_(a.Ga,a,c),Pp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new bn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=kp(this,x,c),d=dn(this.I),ye(d,"RID",a),ye(d,"CVER",22),this.D&&ye(d,"X-HTTP-Session-Id",this.D),Is(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(yp(D)))+"&"+c:this.m&&qu(d,this.m,D)),$u(this.h,x),this.Ua&&ye(d,"TYPE","init"),this.P?(ye(d,"$req",c),ye(d,"SID","null"),x.T=!0,ju(x,d,null)):ju(x,d,c),this.G=2}}else this.G==3&&(a?Ap(this,a):this.i.length==0||sp(this.h)||Ap(this))};function Ap(a,c){var d;c?d=c.l:d=a.U++;const m=dn(a.I);ye(m,"SID",a.K),ye(m,"RID",d),ye(m,"AID",a.T),Is(a,m),a.m&&a.o&&qu(m,a.m,a.o),d=new bn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=kp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),$u(a.h,d),ju(d,m,c)}function Is(a,c){a.H&&F(a.H,function(d,m){ye(c,m,d)}),a.l&&up({},function(d,m){ye(c,m,d)})}function kp(a,c,d){d=Math.min(a.i.length,d);var m=a.l?_(a.l.Na,a.l,a):null;e:{var x=a.i;let D=-1;for(;;){const U=["count="+d];D==-1?0<d?(D=x[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let de=!0;for(let $e=0;$e<d;$e++){let ae=x[$e].g;const Je=x[$e].map;if(ae-=D,0>ae)D=Math.max(0,x[$e].g-100),de=!1;else try{hw(Je,U,"req"+ae+"_")}catch{m&&m(Je)}}if(de){m=U.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function Cp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Tt||Y(),B||(Tt(),B=!0),Q.add(c,a),a.v=0}}function Hu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ps(_(a.Fa,a),Pp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Rp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ps(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),ma(this),Rp(this))};function Ku(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Rp(a){a.g=new bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=dn(a.qa);ye(c,"RID","rpc"),ye(c,"SID",a.K),ye(c,"AID",a.T),ye(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(c,"TO",a.ja),ye(c,"TYPE","xmlhttp"),Is(a,c),a.m&&a.o&&qu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ha(dn(c)),d.m=null,d.P=!0,tp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ma(this),Hu(this),ut(19))};function ya(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function xp(a,c){var d=null;if(a.g==c){ya(a),Ku(a),a.g=null;var m=2}else if(zu(a.h,c))d=c.D,ap(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=a.B;m=sa(),z(m,new Xf(m,d)),ga(a)}else Cp(a);else if(x=c.s,x==3||x==0&&0<c.X||!(m==1&&mw(a,c)||m==2&&Hu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),x){case 1:Ir(a,5);break;case 4:Ir(a,10);break;case 3:Ir(a,6);break;default:Ir(a,2)}}}function Pp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Ir(a,c){if(a.j.info("Error code "+c),c==2){var d=_(a.fb,a),m=a.Xa;const x=!m;m=new Tr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ua(m,"https"),ha(m),x?lw(m.toString(),d):uw(m.toString(),d)}else ut(2);a.G=0,a.l&&a.l.sa(c),Np(a),Sp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Np(a){if(a.G=0,a.ka=[],a.l){const c=lp(a.h);(c.length!=0||a.i.length!=0)&&(b(a.ka,c),b(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Dp(a,c,d){var m=d instanceof Tr?dn(d):new Tr(d);if(m.g!="")c&&(m.g=c+"."+m.g),ca(m,m.s);else{var x=l.location;m=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var D=new Tr(null);m&&ua(D,m),c&&(D.g=c),x&&ca(D,x),d&&(D.l=d),m=D}return d=a.D,c=a.ya,d&&c&&ye(m,d,c),ye(m,"VER",a.la),Is(a,m),m}function bp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ke(new da({eb:d})):new ke(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vp(){}t=Vp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function _a(){}_a.prototype.g=function(a,c){return new It(a,c)};function It(a,c){Fe.call(this),this.g=new Ip(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new si(this)}N(It,Fe),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Wu(this.g)},It.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=hs(a),a=d);c.i.push(new JE(c.Ya++,a)),c.G==3&&ga(c)},It.prototype.N=function(){this.g.l=null,delete this.j,Wu(this.g),delete this.g,It.aa.N.call(this)};function Op(a){Ou.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}N(Op,Ou);function Lp(){Lu.call(this),this.status=1}N(Lp,Lu);function si(a){this.g=a}N(si,Vp),si.prototype.ua=function(){z(this.g,"a")},si.prototype.ta=function(a){z(this.g,new Op(a))},si.prototype.sa=function(a){z(this.g,new Lp)},si.prototype.ra=function(){z(this.g,"b")},_a.prototype.createWebChannel=_a.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,k0=function(){return new _a},A0=function(){return sa()},S0=Er,Lh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oa.NO_ERROR=0,oa.TIMEOUT=8,oa.HTTP_ERROR=6,sl=oa,Jf.COMPLETE="complete",I0=Jf,Kf.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,Us=Kf,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,T0=ke}).apply(typeof Fa<"u"?Fa:typeof self<"u"?self:typeof window<"u"?window:{});const Tg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Yd("@firebase/firestore");function Ds(){return Wr.logLevel}function W(t,...e){if(Wr.logLevel<=re.DEBUG){const n=e.map(uf);Wr.debug(`Firestore (${ts}): ${t}`,...n)}}function xn(t,...e){if(Wr.logLevel<=re.ERROR){const n=e.map(uf);Wr.error(`Firestore (${ts}): ${t}`,...n)}}function $i(t,...e){if(Wr.logLevel<=re.WARN){const n=e.map(uf);Wr.warn(`Firestore (${ts}): ${t}`,...n)}}function uf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function he(t,e){t||X()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class Xk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jk{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new C0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new rt(e)}}class Zk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Zk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){he(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new tC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=rC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function qi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Me(0,0))}static max(){return new J(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Co?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Co{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const iC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Co{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return iC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ve.fromString(e))}static fromName(e){return new H(ve.fromString(e).popFirst(5))}static empty(){return new H(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ve(e.slice()))}}function sC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new ur(i,H.empty(),e)}function oC(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(J.min(),H.empty(),-1)}static max(){return new ur(J.max(),H.empty(),-1)}}function aC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==lC)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function cC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Go(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cf.oe=-1;function yu(t){return t==null}function zl(t){return t===0&&1/t==-1/0}function hC(t){return typeof t=="number"&&Number.isInteger(t)&&!zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ja(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ja(this.root,e,this.comparator,!1)}getReverseIterator(){return new ja(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ja(this.root,e,this.comparator,!0)}}class ja{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sg(this.data.getIterator())}getIteratorFrom(e){return new Sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new Ge(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new P0("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const dC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(he(!!t),typeof t=="string"){let e=0;const n=dC.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function df(t){const e=t.mapValue.fields.__previous_value__;return hf(e)?df(e):e}function Ro(t){const e=cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua={mapValue:{}};function Kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hf(t)?4:mC(t)?9007199254740991:pC(t)?10:11:X()}function cn(t,e){if(t===e)return!0;const n=Kr(t);if(n!==Kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=cr(i.timestampValue),l=cr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Hr(i.bytesValue).isEqual(Hr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),l=xe(s.doubleValue);return o===l?zl(o)===zl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return qi(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ig(o)!==Ig(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!cn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Po(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function Wi(t,e){if(t===e)return 0;const n=Kr(t),r=Kr(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ag(t.timestampValue,e.timestampValue);case 4:return Ag(Ro(t),Ro(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Hr(s),u=Hr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=le(l[h],u[h]);if(f!==0)return f}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(xe(s.latitude),xe(o.latitude));return l!==0?l:le(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return kg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const g=s.fields||{},_=o.fields||{},C=(l=g.value)===null||l===void 0?void 0:l.arrayValue,N=(u=_.value)===null||u===void 0?void 0:u.arrayValue,P=le(((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:kg(C,N)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ua.mapValue&&o===Ua.mapValue)return 0;if(s===Ua.mapValue)return 1;if(o===Ua.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const _=le(u[g],f[g]);if(_!==0)return _;const C=Wi(l[u[g]],h[f[g]]);if(C!==0)return C}return le(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function Ag(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=cr(t),r=cr(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function kg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Wi(n[i],r[i]);if(s)return s}return le(n.length,r.length)}function Hi(t){return Mh(t)}function Mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mh(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function Cg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fh(t){return!!t&&"integerValue"in t}function ff(t){return!!t&&"arrayValue"in t}function Rg(t){return!!t&&"nullValue"in t}function xg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ol(t){return!!t&&"mapValue"in t}function pC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ns(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ol(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=eo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ol(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ol(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ns(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(eo(this.value))}}function N0(t){const e=[];return ns(t.fields,(n,r)=>{const i=new He([n]);if(ol(r)){const s=N0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new st(e,0,J.min(),J.min(),J.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new st(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new st(e,2,n,J.min(),J.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,J.min(),J.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.position=e,this.inclusive=n}}function Pg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Wi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ng(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n="asc"){this.field=e,this.dir=n}}function gC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{}class be extends D0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _C(e,n,r):n==="array-contains"?new wC(e,r):n==="in"?new TC(e,r):n==="not-in"?new IC(e,r):n==="array-contains-any"?new SC(e,r):new be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vC(e,r):new EC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wi(n,this.value)):n!==null&&Kr(this.value)===Kr(n)&&this.matchesComparison(Wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends D0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Yt(e,n)}matches(e){return b0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function b0(t){return t.op==="and"}function V0(t){return yC(t)&&b0(t)}function yC(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function jh(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+Hi(t.value);if(V0(t))return t.filters.map(e=>jh(e)).join(",");{const e=t.filters.map(n=>jh(n)).join(",");return`${t.op}(${e})`}}function O0(t,e){return t instanceof be?function(r,i){return i instanceof be&&r.op===i.op&&r.field.isEqual(i.field)&&cn(r.value,i.value)}(t,e):t instanceof Yt?function(r,i){return i instanceof Yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&O0(o,i.filters[l]),!0):!1}(t,e):void X()}function L0(t){return t instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${Hi(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(L0).join(" ,")+"}"}(t):"Filter"}class _C extends be{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class vC extends be{constructor(e,n){super(e,"in",n),this.keys=M0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class EC extends be{constructor(e,n){super(e,"not-in",n),this.keys=M0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function M0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class wC extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ff(n)&&Po(n.arrayValue,this.value)}}class TC extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class IC extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Po(this.value.arrayValue,n)}}class SC extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Po(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Dg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new AC(t,e,n,r,i,s,o)}function pf(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),yu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hi(r)).join(",")),e.ue=n}return e.ue}function mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!O0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ng(t.startAt,e.startAt)&&Ng(t.endAt,e.endAt)}function Uh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function kC(t,e,n,r,i,s,o,l){return new rs(t,e,n,r,i,s,o,l)}function gf(t){return new rs(t)}function bg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function F0(t){return t.collectionGroup!==null}function to(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new No(s,r))}),n.has(He.keyField().canonicalString())||e.ce.push(new No(He.keyField(),r))}return e.ce}function an(t){const e=Z(t);return e.le||(e.le=CC(e,to(t))),e.le}function CC(t,e){if(t.limitType==="F")return Dg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new No(i.field,s)});const n=t.endAt?new $l(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $l(t.startAt.position,t.startAt.inclusive):null;return Dg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bh(t,e){const n=t.filters.concat([e]);return new rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zh(t,e,n){return new rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _u(t,e){return mf(an(t),an(e))&&t.limitType===e.limitType}function j0(t){return`${pf(an(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>L0(i)).join(", ")}]`),yu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Hi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Hi(i)).join(",")),`Target(${r})`}(an(t))}; limitType=${t.limitType})`}function vu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of to(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Pg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,to(r),i)||r.endAt&&!function(o,l,u){const h=Pg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,to(r),i))}(t,e)}function RC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function U0(t){return(e,n)=>{let r=!1;for(const i of to(t)){const s=xC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xC(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Wi(u,h):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ns(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return x0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=new Ae(H.comparator);function Pn(){return PC}const B0=new Ae(H.comparator);function Bs(...t){let e=B0;for(const n of t)e=e.insert(n.key,n);return e}function z0(t){let e=B0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return no()}function $0(){return no()}function no(){return new is(t=>t.toString(),(t,e)=>t.isEqual(e))}const NC=new Ae(H.comparator),DC=new Ge(H.comparator);function ne(...t){let e=DC;for(const n of t)e=e.add(n);return e}const bC=new Ge(le);function VC(){return bC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zl(e)?"-0":e}}function q0(t){return{integerValue:""+t}}function OC(t,e){return hC(e)?q0(e):yf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this._=void 0}}function LC(t,e,n){return t instanceof ql?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hf(s)&&(s=df(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Do?H0(t,e):t instanceof bo?K0(t,e):function(i,s){const o=W0(i,s),l=Vg(o)+Vg(i.Pe);return Fh(o)&&Fh(i.Pe)?q0(l):yf(i.serializer,l)}(t,e)}function MC(t,e,n){return t instanceof Do?H0(t,e):t instanceof bo?K0(t,e):n}function W0(t,e){return t instanceof Wl?function(r){return Fh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ql extends Eu{}class Do extends Eu{constructor(e){super(),this.elements=e}}function H0(t,e){const n=G0(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class bo extends Eu{constructor(e){super(),this.elements=e}}function K0(t,e){let n=G0(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class Wl extends Eu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Vg(t){return xe(t.integerValue||t.doubleValue)}function G0(t){return ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function FC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Do&&i instanceof Do||r instanceof bo&&i instanceof bo?qi(r.elements,i.elements,cn):r instanceof Wl&&i instanceof Wl?cn(r.Pe,i.Pe):r instanceof ql&&i instanceof ql}(t.transform,e.transform)}class jC{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function al(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wu{}function Q0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _f(t.key,ln.none()):new Qo(t.key,t.data,ln.none());{const n=t.data,r=Vt.empty();let i=new Ge(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Jr(t.key,r,new Wt(i.toArray()),ln.none())}}function UC(t,e,n){t instanceof Qo?function(i,s,o){const l=i.value.clone(),u=Lg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(i,s,o){if(!al(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Lg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Y0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ro(t,e,n,r){return t instanceof Qo?function(s,o,l,u){if(!al(s.precondition,o))return l;const h=s.value.clone(),f=Mg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(s,o,l,u){if(!al(s.precondition,o))return l;const h=Mg(s.fieldTransforms,u,o),f=o.data;return f.setAll(Y0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return al(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function BC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=W0(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function Og(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qi(r,i,(s,o)=>FC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qo extends wu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jr extends wu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Y0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lg(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,MC(o,l,n[i]))}return r}function Mg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,LC(s,o,e))}return r}class _f extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zC extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&UC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Q0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&qi(this.mutations,e.mutations,(n,r)=>Og(n,r))&&qi(this.baseMutations,e.baseMutations,(n,r)=>Og(n,r))}}class vf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=function(){return NC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,ie;function HC(t){switch(t){default:return X();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function X0(t){if(t===void 0)return xn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ne.OK:return O.OK;case Ne.CANCELLED:return O.CANCELLED;case Ne.UNKNOWN:return O.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return O.INTERNAL;case Ne.UNAVAILABLE:return O.UNAVAILABLE;case Ne.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ne.NOT_FOUND:return O.NOT_FOUND;case Ne.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ne.ABORTED:return O.ABORTED;case Ne.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ne.DATA_LOSS:return O.DATA_LOSS;default:return X()}}(ie=Ne||(Ne={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=new Vr([4294967295,4294967295],0);function Fg(t){const e=KC().encode(t),n=new w0;return n.update(e),new Uint8Array(n.digest())}function jg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Vr([n,r],0),new Vr([i,s],0)]}class Ef{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zs(`Invalid padding: ${n}`);if(r<0)throw new zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Vr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Vr.fromNumber(r)));return i.compare(GC)===1&&(i=new Vr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Fg(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ef(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Fg(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Yo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Tu(J.min(),i,new Ae(le),Pn(),ne())}}class Yo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yo(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class J0{constructor(e,n){this.targetId=e,this.me=n}}class Z0{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ug{constructor(){this.fe=0,this.ge=zg(),this.pe=Ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Yo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=zg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class QC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pn(),this.qe=Bg(),this.Qe=new Ae(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Uh(s))if(r===0){const o=new H(s.path);this.Ue(n,o,st.newNoDocument(o,J.min()))}else he(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Hr(r).toUint8Array()}catch(u){if(u instanceof P0)return $i("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ef(o,i,s)}catch(u){return $i(u instanceof zs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Uh(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,st.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Tu(e,n,this.Qe,this.ke,r);return this.ke=Pn(),this.qe=Bg(),this.Qe=new Ae(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ug,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ge(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ug),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Bg(){return new Ae(H.comparator)}function zg(){return new Ae(H.comparator)}const YC={asc:"ASCENDING",desc:"DESCENDING"},XC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JC={and:"AND",or:"OR"};class ZC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $h(t,e){return t.useProto3Json||yu(e)?e:{value:e}}function Hl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eR(t,e){return Hl(t,e.toTimestamp())}function un(t){return he(!!t),J.fromTimestamp(function(n){const r=cr(n);return new Me(r.seconds,r.nanos)}(t))}function wf(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function tE(t){const e=ve.fromString(t);return he(oE(e)),e}function Wh(t,e){return wf(t.databaseId,e.path)}function Rc(t,e){const n=tE(e);if(n.get(1)!==t.databaseId.projectId)throw new q(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(rE(n))}function nE(t,e){return wf(t.databaseId,e)}function tR(t){const e=tE(t);return e.length===4?ve.emptyPath():rE(e)}function Hh(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rE(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $g(t,e,n){return{name:Wh(t,e),fields:n.value.mapValue.fields}}function nR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(he(f===void 0||typeof f=="string"),Ye.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ye.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:X0(h.code);return new q(f,h.message||"")}(o);n=new Z0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rc(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):J.min(),l=new Vt({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ll(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rc(t,r.document),s=r.readTime?un(r.readTime):J.min(),o=st.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ll([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rc(t,r.document),s=r.removedTargetIds||[];n=new ll([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new WC(i,s),l=r.targetId;n=new J0(l,o)}}return n}function rR(t,e){let n;if(e instanceof Qo)n={update:$g(t,e.key,e.value)};else if(e instanceof _f)n={delete:Wh(t,e.key)};else if(e instanceof Jr)n={update:$g(t,e.key,e.data),updateMask:dR(e.fieldMask)};else{if(!(e instanceof zC))return X();n={verify:Wh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ql)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Wl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:eR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function iR(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(J.min())&&(o=un(s)),new jC(o,i.transformResults||[])}(n,e))):[]}function sR(t,e){return{documents:[nE(t,e.path)]}}function oR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=nE(t,i);const s=function(h){if(h.length!==0)return sE(Yt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:ui(_.field),direction:uR(_.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=$h(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function aR(t){let e=tR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const _=iE(g);return _ instanceof Yt&&V0(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(_=>function(N){return new No(ci(N.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(g){let _;return _=typeof g=="object"?g.value:g,yu(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(g){const _=!!g.before,C=g.values||[];return new $l(C,_)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const _=!g.before,C=g.values||[];return new $l(C,_)}(n.endAt)),kC(e,i,o,s,l,"F",u,h)}function lR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ci(n.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ci(n.unaryFilter.field);return be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ci(n.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(n.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return be.create(ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>iE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function uR(t){return YC[t]}function cR(t){return XC[t]}function hR(t){return JC[t]}function ui(t){return{fieldPath:t.canonicalString()}}function ci(t){return He.fromServerFormat(t.fieldPath)}function sE(t){return t instanceof be?function(n){if(n.op==="=="){if(xg(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NAN"}};if(Rg(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xg(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NAN"}};if(Rg(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(n.field),op:cR(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(i=>sE(i));return r.length===1?r[0]:{compositeFilter:{op:hR(n.op),filters:r}}}(t):X()}function dR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function oE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,i,s=J.min(),o=J.min(),l=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.ct=e}}function pR(t){const e=aR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(){this.un=new gR}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ur.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class gR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ki(0)}static kn(){return new Ki(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.changes=new is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ro(r.mutation,i,Wt.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Bs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Pn();const o=no(),l=function(){return no()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Jr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ro(f.mutation,h,f.mutation.getFieldMask(),Me.now())):o.set(h.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new _R(f,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=no();let i=new Ae((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Wt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=$0();f.forEach(_=>{if(!s.has(_)){const C=Q0(n.get(_),r.get(_));C!==null&&g.set(_,C),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):F0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Pr());let l=-1,u=s;return o.next(h=>L.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:l,changes:z0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Bs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Bs();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(g,_){return new rs(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,_)=>{o=o.insert(g,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,st.newInvalidDocument(f)))});let l=Bs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&ro(f.mutation,h,Wt.empty(),Me.now()),vu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:pR(i.bundledQuery),readTime:un(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.overlays=new Ae(H.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Pr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Pr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Pr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qC(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.Tr=new Ge(je.Er),this.dr=new Ge(je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new ve([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new ve([])),r=new je(n,e),i=new je(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||le(e.wr,n.wr)}static Ar(e,n){return le(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ge(je.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $C(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(le);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new je(new H(s),0);let l=new Ge(le);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new je(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.Mr=e,this.docs=function(){return new Ae(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||aC(oC(f),r)<=0||(i.has(f.key)||vu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AR(this)}getSize(e){return L.resolve(this.size)}}class AR extends yR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.persistence=e,this.Nr=new is(n=>pf(n),mf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Tf,this.targetCount=0,this.kr=Ki.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ki(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new cf(0),this.Kr=!1,this.Kr=!0,this.$r=new TR,this.referenceDelegate=e(this),this.Ur=new kR(this),this.indexManager=new mR,this.remoteDocumentCache=function(i){return new SR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new fR(n),this.Gr=new ER(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new IR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new RR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class RR extends uC{constructor(e){super(),this.currentSequenceNumber=e}}class If{constructor(e){this.persistence=e,this.Jr=new Tf,this.Yr=null}static Zr(e){return new If(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Sf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return _1()?8:cC(at())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new xR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ds()<=re.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Ds()<=re.DEBUG&&W("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ds()<=re.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(n))):L.resolve())}Yi(e,n){if(bg(n))return L.resolve(null);let r=an(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zh(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,zh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return bg(n)||i.isEqual(J.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(Ds()<=re.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),li(n)),this.rs(e,o,n,sC(i,-1)).next(l=>l))})}ts(e,n){let r=new Ge(U0(e));return n.forEach((i,s)=>{vu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ds()<=re.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",li(n)),this.Ji.getDocumentsMatchingQuery(e,n,ur.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ae(le),this._s=new is(s=>pf(s),mf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function DR(t,e,n,r){return new NR(t,e,n,r)}async function aE(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function bR(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,_=g.keys();let C=L.resolve();return _.forEach(N=>{C=C.next(()=>f.getEntry(u,N)).next(P=>{const b=h.docVersions.get(N);he(b!==null),P.version.compareTo(b)<0&&(g.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function lE(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function VR(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const _=i.get(g);if(!_)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let C=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?C=C.withResumeToken(Ye.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,r)),i=i.insert(g,C),function(P,b,I){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(_,C,f)&&l.push(n.Ur.updateTargetData(s,C))});let u=Pn(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(OR(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function OR(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function LR(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function MR(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Kh(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Go(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function qg(t,e,n){const r=Z(t);let i=J.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=Z(u),_=g._s.get(f);return _!==void 0?L.resolve(g.os.get(_)):g.Ur.getTargetData(h,f)}(r,o,an(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ne())).next(l=>(FR(r,RC(e),l),{documents:l,Ts:s})))}function FR(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Wg{constructor(){this.activeTargetIds=VC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jR{constructor(){this.so=new Wg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Wg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba=null;function xc(){return Ba===null?Ba=function(){return 268435456+Math.round(2147483648*Math.random())}():Ba++,"0x"+Ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class $R extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=xc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw $i("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ts}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=BR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=xc();return new Promise((o,l)=>{const u=new T0;u.setWithCredentials(!0),u.listenOnce(I0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case sl.NO_ERROR:const f=u.getResponseJson();W(nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case sl.TIMEOUT:W(nt,`RPC '${e}' ${s} timed out`),l(new q(O.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const g=u.getStatus();if(W(nt,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_==null?void 0:_.error;if(C&&C.status&&C.message){const N=function(b){const I=b.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(I)>=0?I:O.UNKNOWN}(C.status);l(new q(N,C.message))}else l(new q(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(O.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(nt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);W(nt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=xc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=k0(),l=A0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(nt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let _=!1,C=!1;const N=new zR({Io:b=>{C?W(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(_||(W(nt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),_=!0),W(nt,`RPC '${e}' stream ${i} sending:`,b),g.send(b))},To:()=>g.close()}),P=(b,I,v)=>{b.listen(I,k=>{try{v(k)}catch(V){setTimeout(()=>{throw V},0)}})};return P(g,Us.EventType.OPEN,()=>{C||(W(nt,`RPC '${e}' stream ${i} transport opened.`),N.yo())}),P(g,Us.EventType.CLOSE,()=>{C||(C=!0,W(nt,`RPC '${e}' stream ${i} transport closed`),N.So())}),P(g,Us.EventType.ERROR,b=>{C||(C=!0,$i(nt,`RPC '${e}' stream ${i} transport errored:`,b),N.So(new q(O.UNAVAILABLE,"The operation could not be completed")))}),P(g,Us.EventType.MESSAGE,b=>{var I;if(!C){const v=b.data[0];he(!!v);const k=v,V=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(V){W(nt,`RPC '${e}' stream ${i} received error:`,V);const j=V.status;let F=function(w){const T=Ne[w];if(T!==void 0)return X0(T)}(j),E=V.message;F===void 0&&(F=O.INTERNAL,E="Unknown error status: "+j+" with message "+V.message),C=!0,N.So(new q(F,E)),g.close()}else W(nt,`RPC '${e}' stream ${i} received:`,v),N.bo(v)}}),P(l,S0.STAT_EVENT,b=>{b.stat===Lh.PROXY?W(nt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Lh.NOPROXY&&W(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){return new ZC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new uE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qR extends cE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=nR(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?un(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Hh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Uh(u)?{documents:sR(s,u)}:{query:oR(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=eE(s,o.resumeToken);const h=$h(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Hl(s,o.snapshotVersion.toTimestamp());const h=$h(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=lR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Hh(this.serializer),n.removeTarget=e,this.a_(n)}}class WR extends cE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=iR(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Hh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>rR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(O.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,qh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class KR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Zr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.L_.add(4),await Xo(h),h.q_.set("Unknown"),h.L_.delete(4),await Su(h)}(this))})}),this.q_=new KR(r,i)}}async function Su(t){if(Zr(t))for(const e of t.B_)await e(!0)}async function Xo(t){for(const e of t.B_)await e(!1)}function hE(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Rf(n)?Cf(n):ss(n).r_()&&kf(n,e))}function Af(t,e){const n=Z(t),r=ss(n);n.N_.delete(e),r.r_()&&dE(n,e),n.N_.size===0&&(r.r_()?r.o_():Zr(n)&&n.q_.set("Unknown"))}function kf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ss(t).A_(e)}function dE(t,e){t.Q_.xe(e),ss(t).R_(e)}function Cf(t){t.Q_=new QC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ss(t).start(),t.q_.v_()}function Rf(t){return Zr(t)&&!ss(t).n_()&&t.N_.size>0}function Zr(t){return Z(t).L_.size===0}function fE(t){t.Q_=void 0}async function QR(t){t.q_.set("Online")}async function YR(t){t.N_.forEach((e,n)=>{kf(t,e)})}async function XR(t,e){fE(t),Rf(t)?(t.q_.M_(e),Cf(t)):t.q_.set("Unknown")}async function JR(t,e,n){if(t.q_.set("Online"),e instanceof Z0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kl(t,r)}else if(e instanceof ll?t.Q_.Ke(e):e instanceof J0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await lE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Ye.EMPTY_BYTE_STRING,f.snapshotVersion)),dE(s,u);const g=new Gn(f.target,u,h,f.sequenceNumber);kf(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Kl(t,r)}}async function Kl(t,e,n){if(!Go(e))throw e;t.L_.add(1),await Xo(t),t.q_.set("Offline"),n||(n=()=>lE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Su(t)})}function pE(t,e){return e().catch(n=>Kl(t,n,e))}async function Au(t){const e=Z(t),n=hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ZR(e);)try{const i=await LR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ex(e,i)}catch(i){await Kl(e,i)}mE(e)&&gE(e)}function ZR(t){return Zr(t)&&t.O_.length<10}function ex(t,e){t.O_.push(e);const n=hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function mE(t){return Zr(t)&&!hr(t).n_()&&t.O_.length>0}function gE(t){hr(t).start()}async function tx(t){hr(t).p_()}async function nx(t){const e=hr(t);for(const n of t.O_)e.m_(n.mutations)}async function rx(t,e,n){const r=t.O_.shift(),i=vf.from(r,e,n);await pE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Au(t)}async function ix(t,e){e&&hr(t).V_&&await async function(r,i){if(function(o){return HC(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();hr(r).s_(),await pE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Au(r)}}(t,e),mE(t)&&gE(t)}async function Kg(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.L_.add(3),await Xo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Su(n)}async function sx(t,e){const n=Z(t);e?(n.L_.delete(2),await Su(n)):e||(n.L_.add(2),await Xo(n),n.q_.set("Unknown"))}function ss(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new qR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:QR.bind(null,t),Ro:YR.bind(null,t),mo:XR.bind(null,t),d_:JR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Rf(t)?Cf(t):t.q_.set("Unknown")):(await t.K_.stop(),fE(t))})),t.K_}function hr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new WR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:tx.bind(null,t),mo:ix.bind(null,t),f_:nx.bind(null,t),g_:rx.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Au(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new xf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pf(t,e){if(xn("AsyncQueue",`${e}: ${t}`),Go(t))return new q(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Bs(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.W_=new Ae(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Gi(e,n,bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_u(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ax{constructor(){this.queries=Qg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=Qg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(O.ABORTED,"Firestore shutting down"))}}function Qg(){return new is(t=>j0(t),_u)}async function lx(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new ox,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Pf(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Nf(n)}async function ux(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function cx(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Nf(n)}function hx(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Nf(t){t.Y_.forEach(e=>{e.next()})}var Gh,Yg;(Yg=Gh||(Gh={})).ea="default",Yg.Cache="cache";class dx{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Gh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.key=e}}class _E{constructor(e){this.key=e}}class fx{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=U0(e),this.Ra=new bi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Gg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const _=i.get(f),C=vu(this.query,g)?g:null,N=!!_&&this.mutatedKeys.has(_.key),P=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let b=!1;_&&C?_.data.isEqual(C.data)?N!==P&&(r.track({type:3,doc:C}),b=!0):this.ga(_,C)||(r.track({type:2,doc:C}),b=!0,(u&&this.Aa(C,u)>0||h&&this.Aa(C,h)<0)&&(l=!0)):!_&&C?(r.track({type:0,doc:C}),b=!0):_&&!C&&(r.track({type:1,doc:_}),b=!0,(u||h)&&(l=!0)),b&&(C?(o=o.add(C),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(C,N){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return P(C)-P(N)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Gi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Gg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new _E(r))}),this.da.forEach(r=>{e.has(r)||n.push(new yE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Gi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class px{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mx{constructor(e){this.key=e,this.va=!1}}class gx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new is(l=>j0(l),_u),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(H.comparator),this.Na=new Map,this.La=new Tf,this.Ba={},this.ka=new Map,this.qa=Ki.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function yx(t,e,n=!0){const r=SE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await vE(r,e,n,!0),i}async function _x(t,e){const n=SE(t);await vE(n,e,!0,!1)}async function vE(t,e,n,r){const i=await MR(t.localStore,an(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await vx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&hE(t.remoteStore,i),l}async function vx(t,e,n,r,i){t.Ka=(g,_,C)=>async function(P,b,I,v){let k=b.view.ma(I);k.ns&&(k=await qg(P.localStore,b.query,!1).then(({documents:E})=>b.view.ma(E,k)));const V=v&&v.targetChanges.get(b.targetId),j=v&&v.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(k,P.isPrimaryClient,V,j);return Jg(P,b.targetId,F.wa),F.snapshot}(t,g,_,C);const s=await qg(t.localStore,e,!0),o=new fx(e,s.Ts),l=o.ma(s.documents),u=Yo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Jg(t,n,h.wa);const f=new px(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function Ex(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!_u(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Kh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Af(r.remoteStore,i.targetId),Qh(r,i.targetId)}).catch(Ko)):(Qh(r,i.targetId),await Kh(r.localStore,i.targetId,!0))}async function wx(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Af(n.remoteStore,r.targetId))}async function Tx(t,e,n){const r=xx(t);try{const i=await function(o,l){const u=Z(o),h=Me.now(),f=l.reduce((C,N)=>C.add(N.key),ne());let g,_;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=Pn(),P=ne();return u.cs.getEntries(C,f).next(b=>{N=b,N.forEach((I,v)=>{v.isValidDocument()||(P=P.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,N)).next(b=>{g=b;const I=[];for(const v of l){const k=BC(v,g.get(v.key).overlayedDocument);k!=null&&I.push(new Jr(v.key,k,N0(k.value.mapValue),ln.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,I,l)}).next(b=>{_=b;const I=b.applyToLocalDocumentSet(g,P);return u.documentOverlayCache.saveOverlays(C,b.batchId,I)})}).then(()=>({batchId:_.batchId,changes:z0(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ae(le)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Jo(r,i.changes),await Au(r.remoteStore)}catch(i){const s=Pf(i,"Failed to persist write");n.reject(s)}}async function EE(t,e){const n=Z(t);try{const r=await VR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?he(o.va):i.removedDocuments.size>0&&(he(o.va),o.va=!1))}),await Jo(n,r,e)}catch(r){await Ko(r)}}function Xg(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const _ of g.j_)_.Z_(l)&&(h=!0)}),h&&Nf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ix(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ae(H.comparator);o=o.insert(s,st.newNoDocument(s,J.min()));const l=ne().add(s),u=new Tu(J.min(),new Map,new Ae(le),o,l);await EE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Df(r)}else await Kh(r.localStore,e,!1).then(()=>Qh(r,e,n)).catch(Ko)}async function Sx(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await bR(n.localStore,e);TE(n,r,null),wE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jo(n,i)}catch(i){await Ko(i)}}async function Ax(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(he(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);TE(r,e,n),wE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Jo(r,i)}catch(i){await Ko(i)}}function wE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function TE(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Qh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||IE(t,r)})}function IE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Af(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Df(t))}function Jg(t,e,n){for(const r of n)r instanceof yE?(t.La.addReference(r.key,e),kx(t,r)):r instanceof _E?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||IE(t,r.key)):X()}function kx(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Df(t))}function Df(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(ve.fromString(e)),r=t.qa.next();t.Na.set(r,new mx(n)),t.Oa=t.Oa.insert(n,r),hE(t.remoteStore,new Gn(an(gf(n.path)),r,"TargetPurposeLimboResolution",cf.oe))}}async function Jo(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=Sf.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>L.forEach(h,_=>L.forEach(_.$i,C=>f.persistence.referenceDelegate.addReference(g,_.targetId,C)).next(()=>L.forEach(_.Ui,C=>f.persistence.referenceDelegate.removeReference(g,_.targetId,C)))))}catch(g){if(!Go(g))throw g;W("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const C=f.os.get(_),N=C.snapshotVersion,P=C.withLastLimboFreeSnapshotVersion(N);f.os=f.os.insert(_,P)}}}(r.localStore,s))}async function Cx(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await aE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(O.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jo(n,r.hs)}}function Rx(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function SE(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=EE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ix.bind(null,e),e.Ca.d_=cx.bind(null,e.eventManager),e.Ca.$a=hx.bind(null,e.eventManager),e}function xx(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ax.bind(null,e),e}class Gl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Iu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return DR(this.persistence,new PR,e.initialUser,this.serializer)}Ga(e){return new CR(If.Zr,this.serializer)}Wa(e){return new jR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gl.provider={build:()=>new Gl};class Yh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cx.bind(null,this.syncEngine),await sx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ax}()}createDatastore(e){const n=Iu(e.databaseInfo.databaseId),r=function(s){return new $R(s)}(e.databaseInfo);return function(s,o,l,u){return new HR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new GR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xg(this.syncEngine,n,0),function(){return Hg.D()?new Hg:new UR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const g=new gx(i,s,o,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Xo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Yh.provider={build:()=>new Yh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=R0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await aE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Dx(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Kg(e.remoteStore,i)),t._onlineComponents=e}async function Dx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;$i("Error using user provided cache. Falling back to memory cache: "+n),await Nc(t,new Gl)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Nc(t,new Gl);return t._offlineComponents}async function AE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Zg(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Zg(t,new Yh))),t._onlineComponents}function bx(t){return AE(t).then(e=>e.syncEngine)}async function ey(t){const e=await AE(t),n=e.eventManager;return n.onListen=yx.bind(null,e.syncEngine),n.onUnlisten=Ex.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_x.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=wx.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e,n){if(!n)throw new q(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Vx(t,e,n,r){if(e===!0&&r===!0)throw new q(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ny(t){if(!H.isDocumentKey(t))throw new q(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ry(t){if(H.isDocumentKey(t))throw new q(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ku(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ku(t);throw new q(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Yk;switch(r.type){case"firstParty":return new eC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ty.get(n);r&&(W("ComponentProvider","Removing Datastore"),ty.delete(n),r.terminate())}(this),Promise.resolve()}}function Ox(t,e,n,r={}){var i;const s=(t=Lr(t,Cu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=rt.MOCK_USER;else{l=h1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new rt(h)}t._authCredentials=new Xk(new C0(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ei(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class or extends ei{constructor(e,n,r){super(e,n,gf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new H(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function Lx(t,e,...n){if(t=lt(t),CE("collection","path",e),t instanceof Cu){const r=ve.fromString(e,...n);return ry(r),new or(t,null,r)}{if(!(t instanceof wt||t instanceof or))throw new q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return ry(r),new or(t.firestore,null,r)}}function bf(t,e,...n){if(t=lt(t),arguments.length===1&&(e=R0.newId()),CE("doc","path",e),t instanceof Cu){const r=ve.fromString(e,...n);return ny(r),new wt(t,null,new H(r))}{if(!(t instanceof wt||t instanceof or))throw new q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return ny(r),new wt(t.firestore,t instanceof or?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new uE(this,"async_queue_retry"),this.Vu=()=>{const r=Pc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Or;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Go(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=xf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function oy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Vo extends Cu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new sy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sy(e),this._firestoreClient=void 0,await e}}}function Mx(t,e){const n=typeof t=="object"?t:Fv(),r=typeof t=="string"?t:"(default)",i=Jd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=u1("firestore");s&&Ox(i,...s)}return i}function RE(t){if(t._terminated)throw new q(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Fx(t),t._firestoreClient}function Fx(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new fC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,kE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Nx(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qi(Ye.fromBase64String(e))}catch(n){throw new q(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qi(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=/^__.*__$/;class Ux{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qo(e,this.data,n,this.fieldTransforms)}}function PE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Mf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ql(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(PE(this.Cu)&&jx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Bx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Iu(e)}Qu(e,n,r,i=!1){return new Mf({Cu:e,methodName:n,qu:r,path:He.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function NE(t){const e=t._freezeSettings(),n=Iu(t._databaseId);return new Bx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zx(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);VE("Data must be an object, but it was:",o,r);const l=DE(r,o);let u,h;if(s.merge)u=new Wt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const _=qx(e,g,n);if(!o.contains(_))throw new q(O.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Hx(f,_)||f.push(_)}u=new Wt(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new Ux(new Vt(l),u,h)}function $x(t,e,n,r=!1){return Ff(n,t.Qu(r?4:3,e))}function Ff(t,e){if(bE(t=lt(t)))return VE("Unsupported field value:",e,t),DE(t,e);if(t instanceof xE)return function(r,i){if(!PE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ff(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Me.fromDate(r);return{timestampValue:Hl(i.serializer,s)}}if(r instanceof Me){const s=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hl(i.serializer,s)}}if(r instanceof Of)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qi)return{bytesValue:eE(i.serializer,r._byteString)};if(r instanceof wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Lf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return yf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ku(r)}`)}(t,e)}function DE(t,e){const n={};return x0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ns(t,(r,i)=>{const s=Ff(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function bE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Of||t instanceof Qi||t instanceof wt||t instanceof xE||t instanceof Lf)}function VE(t,e,n){if(!bE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ku(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function qx(t,e,n){if((e=lt(e))instanceof Vf)return e._internalPath;if(typeof e=="string")return OE(t,e);throw Ql("Field path arguments must be of type string or ",t,!1,void 0,n)}const Wx=new RegExp("[~\\*/\\[\\]]");function OE(t,e,n){if(e.search(Wx)>=0)throw Ql(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vf(...e.split("."))._internalPath}catch{throw Ql(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ql(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(O.INVALID_ARGUMENT,l+t+u)}function Hx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Kx extends LE{data(){return super.data()}}function jf(t,e){return typeof e=="string"?OE(t,e):e instanceof Vf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uf{}class ME extends Uf{}function Qx(t,e,...n){let r=[];e instanceof Uf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof zf).length,l=s.filter(u=>u instanceof Bf).length;if(o>1||o>0&&l>0)throw new q(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Bf extends ME{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bf(e,n,r)}_apply(e){const n=this._parse(e);return FE(e._query,n),new ei(e.firestore,e.converter,Bh(e._query,n))}_parse(e){const n=NE(e.firestore);return function(s,o,l,u,h,f,g){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ly(g,f);const C=[];for(const N of g)C.push(ay(u,s,N));_={arrayValue:{values:C}}}else _=ay(u,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ly(g,f),_=$x(l,o,g,f==="in"||f==="not-in");return be.create(h,f,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class zf extends Uf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)FE(o,u),o=Bh(o,u)}(e._query,n),new ei(e.firestore,e.converter,Bh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $f extends ME{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $f(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new No(s,o)}(e._query,this._field,this._direction);return new ei(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new rs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Yx(t,e="asc"){const n=e,r=jf("orderBy",t);return $f._create(r,n)}function ay(t,e,n){if(typeof(n=lt(n))=="string"){if(n==="")throw new q(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!F0(e)&&n.indexOf("/")!==-1)throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!H.isDocumentKey(r))throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cg(t,new H(r))}if(n instanceof wt)return Cg(t,n._key);throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ku(n)}.`)}function ly(t,e){if(!Array.isArray(t)||t.length===0)throw new q(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Xx{convertValue(e,n="none"){switch(Kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ns(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>xe(o.doubleValue));return new Lf(s)}convertGeoPoint(e){return new Of(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=df(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ro(e));default:return null}}convertTimestamp(e){const n=cr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);he(oE(r));const i=new xo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jE extends LE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ul extends jE{data(e={}){return super.data(e)}}class Zx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new $s(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ul(this._firestore,this._userDataWriter,r.key,r,new $s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new $s(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new $s(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:eP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class UE extends Xx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function tP(t,e,n){t=Lr(t,wt);const r=Lr(t.firestore,Vo),i=Jx(t.converter,e);return zE(r,[zx(NE(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ln.none())])}function nP(t){return zE(Lr(t.firestore,Vo),[new _f(t._key,ln.none())])}function BE(t,...e){var n,r,i;t=lt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||oy(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(oy(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[o+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,h,f;if(t instanceof wt)h=Lr(t.firestore,Vo),f=gf(t._key.path),u={next:g=>{e[o]&&e[o](rP(h,t,g))},error:e[o+1],complete:e[o+2]};else{const g=Lr(t,ei);h=Lr(g.firestore,Vo),f=g._query;const _=new UE(h);u={next:C=>{e[o]&&e[o](new Zx(h,_,g,C))},error:e[o+1],complete:e[o+2]},Gx(t._query)}return function(_,C,N,P){const b=new Px(P),I=new dx(C,b,N);return _.asyncQueue.enqueueAndForget(async()=>lx(await ey(_),I)),()=>{b.Za(),_.asyncQueue.enqueueAndForget(async()=>ux(await ey(_),I))}}(RE(h),f,l,u)}function zE(t,e){return function(r,i){const s=new Or;return r.asyncQueue.enqueueAndForget(async()=>Tx(await bx(r),i,s)),s.promise}(RE(t),e)}function rP(t,e,n){const r=n.docs.get(e._key),i=new UE(t);return new jE(t,i,e._key,r,new $s(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ts=i})(Zi),zi(new zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Vo(new Jk(r.getProvider("auth-internal")),new nC(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),sr(Tg,"4.7.3",e),sr(Tg,"4.7.3","esm2017")})();const iP={apiKey:"COLE_AQUI_SUA_API_KEY",authDomain:"COLE_AQUI_SEU_PROJETO.firebaseapp.com",projectId:"COLE_AQUI_SEU_PROJETO_ID",storageBucket:"COLE_AQUI_SEU_PROJETO.appspot.com",messagingSenderId:"COLE_AQUI_SEU_SENDER_ID",appId:"COLE_AQUI_SEU_APP_ID"},$E=Mv(iP),za=Gk($E),Ru=Mx($E),sP=["pensandocomrobotica@gmail.com"];function oP(t){return!!t&&sP.includes(t.toLowerCase())}function bs(t,e){return e?oP(e)?!0:!!t&&!!t.createdBy&&t.createdBy===e:!1}const Nr={super8:{key:"super8",label:"Super 8",players:8,courts:2,rounds:7,resting:0,duration:"2h a 2h30",desc:"Modelo normal do Super 8. São sete jogos com duplas e adversários alternados a cada jogo."},super10:{key:"super10",label:"Super 10",players:10,courts:2,rounds:9,resting:2,duration:"2h15 a 2h45",desc:"Adaptação do Super 8 para 10 jogadores. São nove jogos em 2 quadras fixas; a cada rodada, 2 jogadores revezam o descanso para manter duplas e adversários sempre alternados."},super12:{key:"super12",label:"Super 12",players:12,courts:3,rounds:11,resting:0,duration:"2h30 a 3h",desc:"Isso aqui é loucura!! São 11 jogos com duplas e adversários alternados a cada jogo."}},qE=[{key:"vitoria",label:"Vitória"},{key:"games_favor",label:"Games a favor"},{key:"saldo_games",label:"Saldo de games"}],Xh=[{key:"vitoria",label:"Vitória"},{key:"games_favor",label:"Games a favor"},{key:"saldo_games",label:"Saldo de games"},{key:"confronto_direto",label:"Confronto Direto"}];function aP(t){const e=[...t];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e}function lP(t,e){const n=[];for(let r=0;r<t.length;r+=e)n.push(t.slice(r,r+e));return n}function uy(t){return Array.from({length:t},()=>new Array(t).fill(0))}function uP({numPlayers:t,numCourts:e,numRounds:n,resting:r}){const i=Array.from({length:t},(h,f)=>f),s=uy(t),o=uy(t),l=new Array(t).fill(0),u=[];for(let h=0;h<n;h++){let f=[],g=i;if(r>0){f=[...i].sort((I,v)=>l[I]-l[v]||Math.random()-.5).slice(0,r),f.forEach(I=>l[I]+=1);const b=new Set(f);g=i.filter(I=>!b.has(I))}let _=1/0,C=null;for(let P=0;P<600;P++){const b=aP(g),I=lP(b,4);let v=0;const k=[];for(const V of I){if(V.length<4)continue;const[j,F,E,y]=V,w=[[[j,F],[E,y]],[[j,E],[F,y]],[[j,y],[F,E]]];let T=null,A=1/0;for(const[R,S]of w){const ze=s[R[0]][R[1]]*10+s[S[0]][S[1]]*10+o[R[0]][S[0]]+o[R[0]][S[1]]+o[R[1]][S[0]]+o[R[1]][S[1]];ze<A&&(A=ze,T=[R,S])}v+=A,k.push(T)}v<_&&(_=v,C=k)}const N=C.map(([P,b],I)=>(s[P[0]][P[1]]++,s[P[1]][P[0]]++,s[b[0]][b[1]]++,s[b[1]][b[0]]++,P.forEach(v=>b.forEach(k=>{o[v][k]++,o[k][v]++})),{court:I+1,teamA:P,teamB:b,scoreA:null,scoreB:null}));u.push({roundNumber:h+1,resting:f,matches:N})}return u}function qf(t){const e=t.players.map(n=>({id:n.id,name:n.name,wins:0,played:0,gf:0,ga:0}));return t.rounds.forEach(n=>{n.matches.forEach(r=>{if(r.scoreA==null||r.scoreB==null)return;[...r.teamA,...r.teamB].forEach(s=>e[s].played+=1),r.teamA.forEach(s=>{e[s].gf+=r.scoreA,e[s].ga+=r.scoreB}),r.teamB.forEach(s=>{e[s].gf+=r.scoreB,e[s].ga+=r.scoreA}),r.scoreA>r.scoreB?r.teamA.forEach(s=>e[s].wins+=1):r.scoreB>r.scoreA&&r.teamB.forEach(s=>e[s].wins+=1)})}),e.forEach(n=>n.saldo=n.gf-n.ga),e}function cP(t,e,n){let r=0,i=0;return t.rounds.forEach(s=>{s.matches.forEach(o=>{if(o.scoreA==null||o.scoreB==null)return;const l=o.teamA.includes(e),u=o.teamB.includes(e),h=o.teamA.includes(n),f=o.teamB.includes(n);if(!(l&&f||u&&h))return;const _=l?"A":"B",C=o.scoreA>o.scoreB?"A":o.scoreB>o.scoreA?"B":null;C&&(C===_?r+=1:i+=1)})}),{winsA:r,winsB:i}}function cy(t,e){return e==="vitoria"?t.wins:e==="games_favor"?t.gf:e==="saldo_games"?t.saldo:0}function Wf(t,e,n,r){const i=[n,...r.filter(s=>s!==n)];return[...t].sort((s,o)=>{for(const l of i){if(l==="confronto_direto"){const{winsA:f,winsB:g}=cP(e,s.id,o.id);if(f!==g)return g-f;continue}const u=cy(s,l),h=cy(o,l);if(h!==u)return h-u}return 0})}function WE(t,e){const n=t.teamA.map(s=>e.players[s].name).join(" / "),r=t.teamB.map(s=>e.players[s].name).join(" / "),i=t.scoreA!=null&&t.scoreB!=null?`
_Placar: ${t.scoreA} x ${t.scoreB}_`:"";return`🎾 *Quadra ${t.court}*
${n}
🆚
${r}${i}`}function hP(t,e){const n=t.rounds[e],r=[];return r.push(`🏖️ *${t.name}*`),r.push(`${t.typeLabel} · Rodada ${n.roundNumber} de ${t.rounds.length}`),r.push(""),n.matches.forEach((i,s)=>{r.push(WE(i,t)),s<n.matches.length-1&&r.push("")}),n.resting.length>0&&(r.push(""),r.push(`_Descansando: ${n.resting.map(i=>t.players[i].name).join(", ")}_`)),r.join(`
`)}function dP(t){const e=[];return e.push(`🏖️ *${t.name}*`),e.push(`${t.typeLabel} · ${t.rounds.length} rodadas`),t.rounds.forEach(n=>{e.push(""),e.push(`━━━ *Rodada ${n.roundNumber}* ━━━`),n.matches.forEach(r=>{e.push(""),e.push(WE(r,t))}),n.resting.length>0&&(e.push(""),e.push(`_Descansando: ${n.resting.map(r=>t.players[r].name).join(", ")}_`))}),e.join(`
`)}function fP(t,e){const n=[];return n.push(`🏆 *${t.name}*`),n.push(`${t.typeLabel} · Classificação`),n.push(""),e.forEach((r,i)=>{const s=i===0?"🥇":i===1?"🥈":i===2?"🥉":`${i+1}º`;n.push(`${s} *${r.name}* — ${r.wins}V | ${r.gf}TP | ${r.saldo>=0?"+":""}${r.saldo}SP`)}),n.push(""),n.push("_J=Jogos · V=Vitórias · TP=Total de Pontos · SP=Saldo de Pontos_"),n.join(`
`)}const xu="tournaments";async function Dc(t){try{await tP(bf(Ru,xu,t.id),t)}catch(e){throw console.error("saveTournament falhou:",e),e}}async function pP(t){try{await nP(bf(Ru,xu,t))}catch(e){throw console.error("deleteTournament falhou:",e),e}}function mP(t){const e=Qx(Lx(Ru,xu),Yx("createdAt","desc"));return BE(e,n=>t(n.docs.map(r=>r.data())),n=>console.error("subscribeTournamentsList falhou:",n))}function hy(t,e){return BE(bf(Ru,xu,t),n=>e(n.exists()?n.data():null),n=>console.error("subscribeTournament falhou:",n))}const dy=()=>p.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&family=DM+Mono:wght@500&display=swap');

    .tp-root { font-family:'Inter',sans-serif; background:#0E4B5A; min-height:100vh; color:#16262B; }
    .tp-shell { max-width:480px; margin:0 auto; min-height:100vh; background:#F3E7C9; display:flex; flex-direction:column; }
    .tp-topbar { background:#0E4B5A; padding:20px 20px 28px; color:#F3E7C9; position:relative; overflow:hidden; }
    .tp-topbar::after { content:''; position:absolute; bottom:0; left:0; right:0; height:14px; background:
      radial-gradient(circle at 10px 0, transparent 9px, #F3E7C9 10px) repeat-x; background-size:20px 14px; }
    .tp-eyebrow { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:.14em; text-transform:uppercase; opacity:.75; }
    .tp-title { font-family:'Archivo Black',sans-serif; font-size:30px; line-height:1.05; margin-top:6px; }
    .tp-sub { font-size:14px; opacity:.85; margin-top:6px; }
    .tp-body { flex:1; padding:20px; padding-bottom:48px; }

    .tp-back { display:inline-flex; align-items:center; gap:6px; background:none; border:none; color:#F3E7C9; font-size:14px; font-weight:600; padding:0; margin-bottom:14px; cursor:pointer; }

    .tp-card { background:#FFFFFF; border-radius:18px; padding:18px; margin-bottom:16px; box-shadow:0 2px 0 rgba(16,38,43,.06); border:1px solid rgba(16,38,43,.08); }
    .tp-card-title { font-family:'Archivo Black',sans-serif; font-size:16px; color:#0E4B5A; margin-bottom:12px; }

    .tp-menu-btn { width:100%; display:flex; align-items:center; gap:14px; background:#FFFFFF; border:2px solid #0E4B5A; border-radius:16px; padding:18px 16px; margin-bottom:14px; cursor:pointer; text-align:left; transition:transform .12s ease; }
    .tp-menu-btn:active { transform:scale(.98); }
    .tp-menu-icon { width:42px; height:42px; border-radius:12px; background:#0E4B5A; color:#F3E7C9; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    .tp-menu-label { font-family:'Archivo Black',sans-serif; font-size:16px; color:#0E4B5A; }
    .tp-menu-desc { font-size:12.5px; color:#54666B; margin-top:2px; }

    .tp-type-card { border:2px solid #D8CBA3; background:#FFFDF6; border-radius:16px; padding:16px; margin-bottom:12px; cursor:pointer; }
    .tp-type-card.active { border-color:#E85D3F; background:#FFF3EE; }
    .tp-type-name { font-family:'Archivo Black',sans-serif; font-size:17px; color:#0E4B5A; }
    .tp-type-meta { display:flex; gap:16px; margin-top:10px; }
    .tp-type-meta-item { display:flex; flex-direction:column; align-items:center; gap:4px; font-family:'DM Mono',monospace; font-size:13px; color:#0E4B5A; }
    .tp-type-desc { font-size:13px; color:#54666B; margin-top:10px; line-height:1.45; }

    .tp-input { width:100%; border:2px solid #D8CBA3; background:#FFFDF6; border-radius:12px; padding:12px 14px; font-size:15px; color:#16262B; font-family:'Inter',sans-serif; }
    .tp-input:focus { outline:none; border-color:#0E4B5A; }
    .tp-label { font-size:12.5px; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:#54666B; margin-bottom:6px; display:block; }

    .tp-chip { display:inline-flex; align-items:center; gap:6px; border:2px solid #D8CBA3; background:#FFFDF6; border-radius:999px; padding:9px 16px; font-size:14px; font-weight:600; color:#0E4B5A; cursor:pointer; margin:0 8px 8px 0; }
    .tp-chip.selected { background:#0E4B5A; border-color:#0E4B5A; color:#F3E7C9; }
    .tp-chip-row { display:flex; flex-wrap:wrap; }

    .tp-tiebreak-item { display:flex; align-items:center; justify-content:space-between; background:#FFFDF6; border:1px solid #D8CBA3; border-radius:10px; padding:8px 12px; margin-bottom:8px; font-size:14px; }
    .tp-tiebreak-num { font-family:'DM Mono',monospace; color:#E85D3F; font-weight:700; margin-right:8px; }
    .tp-remove-btn { background:none; border:none; color:#54666B; cursor:pointer; }

    .tp-btn { width:100%; border:none; border-radius:14px; padding:15px; font-family:'Archivo Black',sans-serif; font-size:15px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; }
    .tp-btn-primary { background:#E85D3F; color:#FFFDF6; }
    .tp-btn-primary:disabled { background:#D8CBA3; color:#8A7F63; cursor:not-allowed; }
    .tp-btn-outline { background:transparent; border:2px solid #0E4B5A; color:#0E4B5A; }
    .tp-btn-ghost { background:#F3E7C9; color:#0E4B5A; }

    .tp-player-row { display:flex; align-items:center; gap:10px; margin-bottom:10px; }
    .tp-player-num { font-family:'DM Mono',monospace; font-size:13px; color:#8A7F63; width:20px; }

    .tp-progress-wrap { display:flex; gap:5px; margin-bottom:16px; }
    .tp-progress-dot { flex:1; height:6px; border-radius:3px; background:#D8CBA3; }
    .tp-progress-dot.done { background:#4FA89B; }
    .tp-progress-dot.current { background:#E85D3F; }

    .tp-round-tabs { display:flex; overflow-x:auto; border-bottom:2px solid #D8CBA3; margin-bottom:18px; -webkit-overflow-scrolling:touch; }
    .tp-round-tab { flex:0 0 auto; padding:10px 18px 12px; font-family:'DM Mono',monospace; font-size:17px; color:#B9AE8C; cursor:pointer; border-bottom:3px solid transparent; margin-bottom:-2px; }
    .tp-round-tab.active { color:#0E4B5A; font-weight:700; border-bottom-color:#0E4B5A; }
    .tp-round-tab.done { color:#4FA89B; }
    .tp-round-tab.active.done { color:#0E4B5A; }

    .tp-round-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
    .tp-round-title { font-family:'Archivo Black',sans-serif; font-size:19px; color:#0E4B5A; }
    .tp-round-nav-btn { background:#0E4B5A; color:#F3E7C9; border:none; border-radius:10px; width:38px; height:38px; display:flex; align-items:center; justify-content:center; cursor:pointer; }
    .tp-round-nav-btn:disabled { opacity:.3; cursor:not-allowed; }

    .tp-resting { background:#FFF3EE; border:1px dashed #E85D3F; border-radius:12px; padding:10px 14px; font-size:13px; color:#9A3A24; margin-bottom:14px; }

    .tp-court-card { background:#FFFFFF; border-radius:16px; padding:14px; margin-bottom:14px; border:1px solid rgba(16,38,43,.1); }
    .tp-court-label { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#4FA89B; font-weight:700; margin-bottom:10px; }
    .tp-team-row { display:flex; align-items:center; justify-content:space-between; padding:6px 0; }
    .tp-team-names { font-size:14.5px; font-weight:600; color:#16262B; line-height:1.35; flex:1; }
    .tp-score-input { width:52px; text-align:center; border:2px solid #D8CBA3; border-radius:10px; padding:8px 0; font-family:'DM Mono',monospace; font-size:17px; font-weight:700; color:#0E4B5A; }
    .tp-score-input:disabled { background:#F0EAD9; color:#8A7F63; border-color:#E7DFC6; }
    .tp-vs-divider { display:flex; align-items:center; gap:8px; margin:4px 0; }
    .tp-vs-line { flex:1; border-top:1px dashed #D8CBA3; }
    .tp-vs-text { font-family:'DM Mono',monospace; font-size:11px; color:#8A7F63; }

    .tp-list-item { background:#FFFFFF; border-radius:14px; padding:14px 16px; margin-bottom:10px; border:1px solid rgba(16,38,43,.1); display:flex; align-items:center; gap:10px; }
    .tp-list-delete-btn { background:none; border:none; color:#B5443A; padding:6px; border-radius:8px; cursor:pointer; display:flex; align-items:center; flex-shrink:0; }
    .tp-list-delete-btn:hover { background:#FDEBEB; }
    .tp-btn-delete-link { width:100%; background:none; border:none; color:#B5443A; font-size:13.5px; font-weight:700; padding:12px; margin-top:4px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; }
    .tp-list-name { font-weight:700; font-size:15px; color:#0E4B5A; }
    .tp-list-meta { font-size:12px; color:#54666B; margin-top:2px; }
    .tp-badge { font-family:'DM Mono',monospace; font-size:11px; padding:4px 10px; border-radius:999px; font-weight:700; }
    .tp-badge-progress { background:#FFF3EE; color:#E85D3F; }
    .tp-badge-ready { background:#FFF8E1; color:#B8860B; }
    .tp-badge-done { background:#E7F3EE; color:#2F8464; }

    .tp-modal-overlay { position:fixed; inset:0; background:rgba(16,38,43,.55); display:flex; align-items:center; justify-content:center; z-index:50; padding:24px; }
    .tp-modal-card { background:#FFFDF6; border-radius:18px; padding:24px; max-width:340px; width:100%; }
    .tp-modal-title { font-family:'Archivo Black',sans-serif; font-size:19px; color:#0E4B5A; margin-bottom:10px; }
    .tp-modal-text { font-size:14px; color:#54666B; line-height:1.5; margin-bottom:20px; }
    .tp-modal-actions { display:flex; gap:10px; }

    .tp-standings-table { width:100%; border-collapse:collapse; }
    .tp-standings-table th { font-family:'DM Mono',monospace; font-size:10.5px; text-transform:uppercase; color:#8A7F63; text-align:center; padding:8px 4px; border-bottom:2px solid #0E4B5A; }
    .tp-standings-table th:first-child, .tp-standings-table td:first-child { text-align:left; }
    .tp-standings-table td { padding:10px 4px; font-size:13.5px; text-align:center; border-bottom:1px solid #EEE2C6; }
    .tp-pos { font-family:'Archivo Black',sans-serif; color:#E85D3F; }
    .tp-pos-1 { color:#C9962C; }

    .tp-empty { text-align:center; padding:40px 20px; color:#54666B; }
    .tp-error-banner { display:flex; align-items:center; justify-content:space-between; gap:10px; background:#FDEBEB; color:#9A2F2F; border-bottom:2px solid #E85D3F; padding:12px 16px; font-size:13px; }
    .tp-error-btn { background:none; border:1px solid #9A2F2F; color:#9A2F2F; border-radius:8px; padding:5px 10px; font-size:12.5px; font-weight:700; cursor:pointer; display:flex; align-items:center; }

    .tp-auth-bar { display:flex; align-items:center; justify-content:space-between; background:#FFFDF6; border:1px solid #D8CBA3; border-radius:12px; padding:10px 14px; font-size:12.5px; color:#54666B; margin-bottom:18px; }
    .tp-auth-link { background:none; border:none; color:#0E4B5A; font-weight:700; font-size:12.5px; cursor:pointer; display:flex; align-items:center; gap:5px; }
    .tp-auth-notice { display:flex; align-items:center; gap:8px; background:#FFF8E1; border:1px dashed #C9962C; color:#8A6A0E; border-radius:12px; padding:10px 14px; font-size:12.5px; margin-bottom:16px; }
    .tp-auth-form-input { width:100%; border:2px solid #D8CBA3; background:#FFFDF6; border-radius:12px; padding:12px 14px 12px 42px; font-size:15px; color:#16262B; font-family:'Inter',sans-serif; }
    .tp-auth-form-group { position:relative; margin-bottom:14px; }
    .tp-auth-form-group svg { position:absolute; left:14px; top:50%; transform:translateY(-50%); color:#8A7F63; }
    .tp-auth-toggle { display:flex; background:#EEE2C6; border-radius:12px; padding:4px; margin-bottom:20px; }
    .tp-auth-toggle button { flex:1; border:none; background:none; padding:10px; border-radius:9px; font-weight:700; font-size:13.5px; color:#8A7F63; cursor:pointer; }
    .tp-auth-toggle button.active { background:#0E4B5A; color:#F3E7C9; }
    .tp-auth-error { background:#FDEBEB; color:#9A2F2F; border-radius:10px; padding:10px 14px; font-size:13px; margin-bottom:14px; }
    .tp-legend { display:flex; flex-wrap:wrap; gap:6px 14px; font-size:12px; color:#54666B; margin:10px 2px 18px; }
    .tp-legend strong { color:#0E4B5A; font-family:'DM Mono',monospace; margin-right:3px; }
    .tp-spin { animation: tp-spin-anim 1s linear infinite; }
    @keyframes tp-spin-anim { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  `});function gP(){const[t,e]=te.useState("home"),[n,r]=te.useState(!0),[i,s]=te.useState([]),[o,l]=te.useState(null),[u,h]=te.useState(0),[f,g]=te.useState("tracking"),[_,C]=te.useState(!1),[N,P]=te.useState(!1),[b,I]=te.useState(null),[v,k]=te.useState(!1),[V,j]=te.useState(null),[F,E]=te.useState(null),[y,w]=te.useState(null),T=nd.useRef(null),[A,R]=te.useState(null),[S,ze]=te.useState(!0),[Xt,yr]=te.useState("login"),[Tt,B]=te.useState({email:"",password:""}),[Q,Y]=te.useState(null),[ge,ue]=te.useState(!1),oe=!!A,[fe,Ve]=te.useState({name:"",type:null,victoryCondition:"vitoria",tiebreakers:["saldo_games","confronto_direto"],playerNames:[]}),[Pt,pt]=te.useState(""),[Pu,ti]=te.useState(!1),[_r,hn]=te.useState("");te.useEffect(()=>{const z=LA(za,K=>{R(K),ze(!1)});return()=>z()},[]),te.useEffect(()=>{const z=mP(K=>{s(K),r(!1)});return()=>z()},[]);const vr=(z,K)=>{g(K),E(null),w({id:z,mode:K}),T.current&&(T.current(),T.current=null),l(null),T.current=hy(z,pe=>{if(!pe){E("Não foi possível abrir esse torneio agora.");return}E(null),l(pe)}),h(0),e(K==="results"?"results":"tracking")},jt=()=>{T.current&&(T.current(),T.current=null),e("home"),l(null),pt(""),ti(!1),hn(""),Ve({name:"",type:null,victoryCondition:"vitoria",tiebreakers:["saldo_games","confronto_direto"],playerNames:[]})},os=()=>{if(!oe){e("auth");return}const K=new Date().toLocaleDateString("pt-BR");pt(""),ti(!1),hn(""),Ve({name:`Torneio de Praia - ${K}`,type:null,victoryCondition:"vitoria",tiebreakers:["saldo_games","confronto_direto"],playerNames:[]}),e("new-type")},as=z=>{Ve(K=>({...K,type:z,playerNames:[]}))},Zo=z=>{Ve(K=>K.tiebreakers.includes(z)?{...K,tiebreakers:K.tiebreakers.filter(pe=>pe!==z)}:{...K,tiebreakers:[...K.tiebreakers,z]})},Nu=()=>{const z=Pt.trim();if(!z)return;const K=Nr[fe.type];fe.playerNames.length>=K.players||(Ve(pe=>({...pe,playerNames:[...pe.playerNames,z]})),pt(""))},Du=z=>{Ve(K=>({...K,playerNames:K.playerNames.filter((pe,Xe)=>Xe!==z)}))},ea=()=>{const z=Nr[fe.type],K=_r.split(/[\n,;]+/).map(pe=>pe.trim()).filter(pe=>pe.length>0);Ve(pe=>{const Xe=[...pe.playerNames,...K].slice(0,z.players);return{...pe,playerNames:Xe}}),hn(""),ti(!1)},ni=fe.type&&fe.playerNames.length===Nr[fe.type].players&&fe.playerNames.every(z=>z.trim().length>0),ta=async()=>{if(!ni||!oe)return;C(!0);const z=Nr[fe.type],K=fe.playerNames.map((Nt,mt)=>({id:mt,name:Nt.trim()})),pe=uP({numPlayers:z.players,numCourts:z.courts,numRounds:z.rounds,resting:z.resting}),Xe={id:`t_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name:fe.name.trim()||`Torneio ${z.label}`,type:fe.type,typeLabel:z.label,victoryCondition:fe.victoryCondition,tiebreakers:fe.tiebreakers,players:K,rounds:pe,status:"in_progress",createdAt:Date.now(),createdBy:(A==null?void 0:A.email)||null};try{await Dc(Xe)}catch{C(!1),E("Não foi possível criar o torneio. Verifique sua conexão e tente novamente.");return}T.current&&(T.current(),T.current=null),T.current=hy(Xe.id,Nt=>{Nt&&l(Nt)}),l(Xe),h(0),C(!1),e("tracking")},bu=te.useCallback(async(z,K,pe,Xe)=>{oe&&l(Nt=>{if(!Nt||Nt.status==="closed")return Nt;const mt=JSON.parse(JSON.stringify(Nt)),cs=Xe===""?null:Math.max(0,parseInt(Xe,10)||0);pe==="A"?mt.rounds[z].matches[K].scoreA=cs:mt.rounds[z].matches[K].scoreB=cs;const ra=mt.rounds.every(hs=>hs.matches.every(ia=>ia.scoreA!=null&&ia.scoreB!=null));return mt.status=ra?"completed":"in_progress",Dc(mt),mt})},[oe]),ls=te.useCallback(async()=>{oe&&(l(z=>{if(!z)return z;if(!bs(z,A==null?void 0:A.email))return E("Só quem criou este torneio (ou o administrador geral) pode encerrá-lo."),z;const K=JSON.parse(JSON.stringify(z)),pe=qf(K),Xe=Wf(pe,K,K.victoryCondition,K.tiebreakers);return K.status="closed",K.closedAt=Date.now(),K.finalStandings=Xe,Dc(K),K}),P(!1))},[oe,A]),us=async()=>{const z=Tt.email.trim(),K=Tt.password;if(!z||!K){Y("Preencha e-mail e senha.");return}if(K.length<6){Y("A senha precisa ter pelo menos 6 caracteres.");return}Y(null),ue(!0);try{Xt==="signup"?await DA(za,z,K):await bA(za,z,K),B({email:"",password:""}),e("home")}catch(pe){Y({"auth/email-already-in-use":"Esse e-mail já tem uma conta. Tente entrar em vez de cadastrar.","auth/invalid-email":"E-mail inválido.","auth/weak-password":"Senha muito fraca (mínimo 6 caracteres).","auth/user-not-found":"Não existe conta com esse e-mail.","auth/wrong-password":"Senha incorreta.","auth/invalid-credential":"E-mail ou senha incorretos.","auth/too-many-requests":"Muitas tentativas. Aguarde um pouco e tente de novo."}[pe.code]||"Não foi possível concluir. Tente novamente.")}ue(!1)},na=async()=>{await MA(za),jt()},Fe=async()=>{if(!(!b||!oe)){if(!bs(b,A==null?void 0:A.email)){E("Só quem criou este torneio (ou o administrador geral) pode excluí-lo."),I(null);return}k(!0);try{await pP(b.id),o&&o.id===b.id&&jt()}catch{E("Não foi possível excluir o torneio agora. Verifique se você tem permissão ou tente novamente.")}k(!1),I(null)}};return n||S?p.jsxs("div",{className:"tp-root",children:[p.jsx(dy,{}),p.jsx("div",{className:"tp-shell",style:{alignItems:"center",justifyContent:"center"},children:p.jsx(To,{className:"tp-spin",size:28,color:"#0E4B5A"})})]}):p.jsxs("div",{className:"tp-root",children:[p.jsx(dy,{}),p.jsxs("div",{className:"tp-shell",children:[F&&p.jsxs("div",{className:"tp-error-banner",children:[p.jsx("span",{children:F}),p.jsxs("div",{style:{display:"flex",gap:8},children:[y&&p.jsx("button",{className:"tp-error-btn",onClick:()=>vr(y.id,y.mode),children:"Tentar novamente"}),p.jsx("button",{className:"tp-error-btn",onClick:()=>E(null),children:p.jsx(Rv,{size:14})})]})]}),t==="home"&&p.jsx(yP,{index:i,onNew:os,onTracking:()=>e("list-tracking"),onResults:()=>e("list-results"),onOpenRecent:z=>vr(z,"tracking"),user:A,onGoAuth:()=>e("auth"),onLogout:na}),t==="auth"&&p.jsx(_P,{mode:Xt,setMode:yr,form:Tt,setForm:B,error:Q,submitting:ge,onSubmit:us,onBack:jt}),t==="new-type"&&p.jsx(vP,{draft:fe,setDraft:Ve,chooseType:as,onBack:jt,onNext:()=>e("new-rules")}),t==="new-rules"&&p.jsx(EP,{draft:fe,setDraft:Ve,toggleTiebreak:Zo,onBack:()=>e("new-type"),onNext:()=>e("new-players")}),t==="new-players"&&p.jsx(wP,{draft:fe,newPlayerName:Pt,setNewPlayerName:pt,addPlayer:Nu,removePlayer:Du,pasteMode:Pu,setPasteMode:ti,pasteText:_r,setPasteText:hn,pastePlayers:ea,canGenerate:ni,generating:_,onBack:()=>e("new-rules"),onGenerate:ta}),(t==="list-tracking"||t==="list-results")&&p.jsx(TP,{index:i,mode:t==="list-tracking"?"tracking":"results",onOpen:vr,onBack:jt,isAdmin:oe,canDelete:z=>bs(z,A==null?void 0:A.email),onRequestDelete:z=>I({id:z.id,name:z.name,createdBy:z.createdBy})}),t==="tracking"&&o&&p.jsx(IP,{tournament:o,roundIdx:u,setRoundIdx:h,updateScore:bu,onBack:jt,onResults:()=>e("results"),onRequestClose:()=>P(!0),onExport:z=>j(z),isAdmin:oe,onGoAuth:()=>e("auth"),canManage:bs(o,A==null?void 0:A.email),onRequestDelete:()=>I({id:o.id,name:o.name,createdBy:o.createdBy})}),(t==="tracking"||t==="results")&&!o&&!F&&p.jsx("div",{className:"tp-body",style:{display:"flex",justifyContent:"center",paddingTop:60},children:p.jsx(To,{className:"tp-spin",size:26,color:"#0E4B5A"})}),t==="results"&&o&&p.jsx(SP,{tournament:o,onBack:jt,onTracking:()=>e("tracking"),onRequestClose:()=>P(!0),onExport:z=>j(z),isAdmin:oe,onGoAuth:()=>e("auth"),canManage:bs(o,A==null?void 0:A.email),onRequestDelete:()=>I({id:o.id,name:o.name,createdBy:o.createdBy})}),N&&o&&p.jsx(AP,{tournament:o,onCancel:()=>P(!1),onConfirm:ls}),b&&p.jsx(kP,{name:b.name,deleting:v,onCancel:()=>I(null),onConfirm:Fe}),V&&o&&p.jsx(CP,{tournament:o,request:V,onClose:()=>j(null)})]})]})}function Oo({status:t}){return t==="closed"?p.jsx("span",{className:"tp-badge tp-badge-done",children:"Encerrado"}):t==="completed"?p.jsx("span",{className:"tp-badge tp-badge-ready",children:"Pronto p/ encerrar"}):p.jsx("span",{className:"tp-badge tp-badge-progress",children:"Em andamento"})}function yP({index:t,onNew:e,onTracking:n,onResults:r,onOpenRecent:i,user:s,onGoAuth:o,onLogout:l}){return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"tp-topbar",children:[p.jsx("div",{className:"tp-eyebrow",children:"Rei & Rainha da Areia"}),p.jsxs("div",{className:"tp-title",children:["Torneio de",p.jsx("br",{}),"Praia"]}),p.jsx("div",{className:"tp-sub",children:"Super 8 · Super 10 · Super 12"})]}),p.jsxs("div",{className:"tp-body",children:[p.jsx("div",{className:"tp-auth-bar",children:s?p.jsxs(p.Fragment,{children:[p.jsxs("span",{children:[p.jsx(Gd,{size:15,style:{verticalAlign:-2,marginRight:5}}),"Organizador: ",s.email]}),p.jsxs("button",{className:"tp-auth-link",onClick:l,children:[p.jsx(QI,{size:14})," Sair"]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("span",{children:[p.jsx(Kd,{size:15,style:{verticalAlign:-2,marginRight:5}}),"Modo visitante"]}),p.jsxs("button",{className:"tp-auth-link",onClick:o,children:[p.jsx(du,{size:14})," Entrar como organizador"]})]})}),p.jsxs("button",{className:"tp-menu-btn",onClick:e,children:[p.jsx("div",{className:"tp-menu-icon",children:p.jsx(XI,{size:20})}),p.jsxs("div",{children:[p.jsx("div",{className:"tp-menu-label",children:"Novo torneio"}),p.jsx("div",{className:"tp-menu-desc",children:s?"Configure regras, duplas e jogadores":"Requer login de organizador"})]})]}),p.jsxs("button",{className:"tp-menu-btn",onClick:n,children:[p.jsx("div",{className:"tp-menu-icon",children:p.jsx(Cv,{size:20})}),p.jsxs("div",{children:[p.jsx("div",{className:"tp-menu-label",children:"Acompanhamento"}),p.jsx("div",{className:"tp-menu-desc",children:"Gerencie vários torneios e lance placares"})]})]}),p.jsxs("button",{className:"tp-menu-btn",onClick:r,children:[p.jsx("div",{className:"tp-menu-icon",children:p.jsx(Qd,{size:20})}),p.jsxs("div",{children:[p.jsx("div",{className:"tp-menu-label",children:"Resultados"}),p.jsx("div",{className:"tp-menu-desc",children:"Classificação e histórico de torneios"})]})]}),t.length>0&&p.jsxs("div",{style:{marginTop:28},children:[p.jsx("div",{className:"tp-label",children:"Torneios recentes"}),t.slice(0,3).map(u=>p.jsxs("div",{className:"tp-list-item",style:{cursor:"pointer"},onClick:()=>i(u.id),children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"tp-list-name",children:u.name}),p.jsx("div",{className:"tp-list-meta",children:u.typeLabel})]}),p.jsx(Oo,{status:u.status})]},u.id))]})]})]})}function _P({mode:t,setMode:e,form:n,setForm:r,error:i,submitting:s,onSubmit:o,onBack:l}){return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"tp-topbar",children:[p.jsxs("button",{className:"tp-back",onClick:l,children:[p.jsx(Yr,{size:16})," Início"]}),p.jsx("div",{className:"tp-eyebrow",children:"Área do organizador"}),p.jsx("div",{className:"tp-title",style:{fontSize:26},children:t==="signup"?"Criar conta":"Entrar"}),p.jsx("div",{className:"tp-sub",children:"Só é preciso login para criar torneios, lançar placares e encerrar"})]}),p.jsxs("div",{className:"tp-body",children:[p.jsxs("div",{className:"tp-auth-toggle",children:[p.jsx("button",{className:t==="login"?"active":"",onClick:()=>e("login"),children:"Já tenho conta"}),p.jsx("button",{className:t==="signup"?"active":"",onClick:()=>e("signup"),children:"Criar conta"})]}),i&&p.jsx("div",{className:"tp-auth-error",children:i}),p.jsxs("div",{className:"tp-auth-form-group",children:[p.jsx(YI,{size:17}),p.jsx("input",{className:"tp-auth-form-input",type:"email",placeholder:"seu@email.com",value:n.email,onChange:u=>r(h=>({...h,email:u.target.value}))})]}),p.jsxs("div",{className:"tp-auth-form-group",children:[p.jsx(GI,{size:17}),p.jsx("input",{className:"tp-auth-form-input",type:"password",placeholder:"Senha (mínimo 6 caracteres)",value:n.password,onChange:u=>r(h=>({...h,password:u.target.value})),onKeyDown:u=>u.key==="Enter"&&o()})]}),p.jsxs("button",{className:"tp-btn tp-btn-primary",onClick:o,disabled:s,children:[s?p.jsx(To,{size:18,className:"tp-spin"}):p.jsx(du,{size:18}),s?"Aguarde...":t==="signup"?"Criar conta":"Entrar"]}),p.jsx("div",{className:"tp-list-meta",style:{marginTop:16,textAlign:"center"},children:t==="signup"?"Ao criar uma conta você já se torna organizador(a), podendo criar e gerenciar torneios.":'Ainda não tem conta? Toque em "Criar conta" acima.'})]})]})}function vP({draft:t,setDraft:e,chooseType:n,onBack:r,onNext:i}){return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"tp-topbar",children:[p.jsxs("button",{className:"tp-back",onClick:r,children:[p.jsx(Yr,{size:16})," Início"]}),p.jsx("div",{className:"tp-eyebrow",children:"Passo 1 de 3"}),p.jsx("div",{className:"tp-title",style:{fontSize:24},children:"Novo torneio"}),p.jsx("div",{className:"tp-sub",children:"Escolha o formato"})]}),p.jsxs("div",{className:"tp-body",children:[p.jsx("div",{className:"tp-label",children:"Nome do torneio"}),p.jsx("input",{className:"tp-input",style:{marginBottom:18},value:t.name,onChange:s=>e(o=>({...o,name:s.target.value})),placeholder:"Ex: Torneio de Praia - Sábado"}),Object.values(Nr).map(s=>p.jsxs("div",{className:`tp-type-card ${t.type===s.key?"active":""}`,onClick:()=>n(s.key),children:[p.jsxs("div",{className:"tp-type-name",children:[s.label," Individual"]}),p.jsxs("div",{className:"tp-type-meta",children:[p.jsxs("div",{className:"tp-type-meta-item",children:[p.jsx(e1,{size:16}),s.players]}),p.jsxs("div",{className:"tp-type-meta-item",children:[p.jsx(t1,{size:16}),s.courts]}),p.jsxs("div",{className:"tp-type-meta-item",children:["⏱ ",s.duration]})]}),p.jsx("div",{className:"tp-type-desc",children:s.desc})]},s.key)),p.jsx("div",{style:{height:8}}),p.jsxs("button",{className:"tp-btn tp-btn-primary",disabled:!t.type,onClick:i,children:["Continuar ",p.jsx(kv,{size:18})]})]})]})}function EP({draft:t,setDraft:e,toggleTiebreak:n,onBack:r,onNext:i}){var s;return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"tp-topbar",children:[p.jsxs("button",{className:"tp-back",onClick:r,children:[p.jsx(Yr,{size:16})," Voltar"]}),p.jsx("div",{className:"tp-eyebrow",children:"Passo 2 de 3"}),p.jsx("div",{className:"tp-title",style:{fontSize:24},children:"Condições de vitória"}),p.jsxs("div",{className:"tp-sub",children:[(s=Nr[t.type])==null?void 0:s.label," · defina os critérios"]})]}),p.jsxs("div",{className:"tp-body",children:[p.jsxs("div",{className:"tp-card",children:[p.jsx("div",{className:"tp-card-title",children:"Selecione a condição de vitória"}),p.jsx("div",{className:"tp-chip-row",children:qE.map(o=>p.jsxs("div",{className:`tp-chip ${t.victoryCondition===o.key?"selected":""}`,onClick:()=>e(l=>({...l,victoryCondition:o.key})),children:[t.victoryCondition===o.key&&p.jsx(Bi,{size:14})," ",o.label]},o.key))})]}),p.jsxs("div",{className:"tp-card",children:[p.jsx("div",{className:"tp-card-title",children:"Selecione os desempates"}),p.jsx("div",{className:"tp-chip-row",children:Xh.map(o=>p.jsxs("div",{className:`tp-chip ${t.tiebreakers.includes(o.key)?"selected":""}`,onClick:()=>n(o.key),children:[t.tiebreakers.includes(o.key)&&p.jsx(Bi,{size:14})," ",o.label]},o.key))}),t.tiebreakers.length>0&&p.jsxs("div",{style:{marginTop:14},children:[p.jsx("div",{className:"tp-label",children:"Ordem dos desempates"}),t.tiebreakers.map((o,l)=>{const u=Xh.find(h=>h.key===o);return p.jsxs("div",{className:"tp-tiebreak-item",children:[p.jsxs("span",{children:[p.jsxs("span",{className:"tp-tiebreak-num",children:[l+1,"."]}),u.label]}),p.jsx("button",{className:"tp-remove-btn",onClick:()=>n(o),children:p.jsx(Rv,{size:16})})]},o)})]})]}),p.jsxs("button",{className:"tp-btn tp-btn-primary",onClick:i,children:["Continuar ",p.jsx(kv,{size:18})]})]})]})}function wP({draft:t,newPlayerName:e,setNewPlayerName:n,addPlayer:r,removePlayer:i,pasteMode:s,setPasteMode:o,pasteText:l,setPasteText:u,pastePlayers:h,canGenerate:f,generating:g,onBack:_,onGenerate:C}){const N=Nr[t.type],P=t.playerNames.length,b=Math.round(P/N.players*100),I=P>=N.players;return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"tp-topbar",children:[p.jsxs("button",{className:"tp-back",onClick:_,children:[p.jsx(Yr,{size:16})," Voltar"]}),p.jsx("div",{className:"tp-eyebrow",children:"Passo 3 de 3"}),p.jsx("div",{className:"tp-title",style:{fontSize:24},children:"Jogadores"}),p.jsxs("div",{className:"tp-sub",children:["(",P,"/",N.players,")"]})]}),p.jsxs("div",{className:"tp-body",children:[p.jsx("div",{style:{height:8,borderRadius:4,background:"#D8CBA3",marginBottom:18,overflow:"hidden"},children:p.jsx("div",{style:{height:"100%",width:`${b}%`,background:"#0E4B5A",transition:"width .2s ease"}})}),!I&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"tp-card",style:{display:"flex",gap:10,alignItems:"center",padding:12},children:[p.jsx("input",{className:"tp-input",placeholder:`Nome do jogador ${P+1}`,value:e,onChange:v=>n(v.target.value),onKeyDown:v=>v.key==="Enter"&&r()}),p.jsx("button",{onClick:r,style:{background:"#0E4B5A",color:"#F3E7C9",border:"none",borderRadius:12,width:46,height:46,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:p.jsx(ZI,{size:20})})]}),p.jsxs("button",{className:"tp-btn tp-btn-ghost",style:{marginBottom:16},onClick:()=>o(v=>!v),children:[p.jsx(HI,{size:17})," ",s?"Cancelar":"Colar lista de jogadores"]}),s&&p.jsxs("div",{className:"tp-card",children:[p.jsx("div",{className:"tp-label",children:"Cole os nomes (um por linha ou separados por vírgula)"}),p.jsx("textarea",{className:"tp-input",style:{minHeight:120,resize:"vertical",fontFamily:"'Inter',sans-serif",marginBottom:12},placeholder:`Thalita
Bárbara
Gabriela
...`,value:l,onChange:v=>u(v.target.value)}),p.jsxs("button",{className:"tp-btn tp-btn-primary",onClick:h,disabled:!l.trim(),children:[p.jsx(Bi,{size:17})," Adicionar à lista"]})]})]}),p.jsx("div",{className:"tp-card",style:{padding:P?"6px 18px":0},children:t.playerNames.map((v,k)=>p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0",borderBottom:k<P-1?"1px solid #EEE2C6":"none"},children:[p.jsxs("span",{style:{fontSize:15,color:"#16262B"},children:[p.jsxs("span",{style:{fontFamily:"'DM Mono',monospace",color:"#8A7F63",marginRight:10},children:[k+1,"."]}),v]}),p.jsx("button",{onClick:()=>i(k),style:{background:"#E85D3F",color:"#FFFDF6",border:"none",borderRadius:10,width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:p.jsx(JI,{size:16})})]},k))}),p.jsxs("button",{className:"tp-btn tp-btn-primary",disabled:!f||g,onClick:C,children:[g?p.jsx(To,{size:18,className:"tp-spin"}):p.jsx(Qd,{size:18}),g?"Gerando rodadas...":"Criar torneio"]})]})]})}function TP({index:t,mode:e,onOpen:n,onBack:r,canDelete:i,onRequestDelete:s}){const o=t.filter(u=>u.status!=="closed"),l=t.filter(u=>u.status==="closed");return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"tp-topbar",children:[p.jsxs("button",{className:"tp-back",onClick:r,children:[p.jsx(Yr,{size:16})," Início"]}),p.jsx("div",{className:"tp-title",style:{fontSize:24},children:e==="tracking"?"Acompanhamento":"Resultados"}),p.jsx("div",{className:"tp-sub",children:e==="tracking"?"Selecione um torneio para lançar placares":"Selecione um torneio para ver a classificação"})]}),p.jsxs("div",{className:"tp-body",children:[t.length===0&&p.jsx("div",{className:"tp-empty",children:'Nenhum torneio criado ainda. Toque em "Novo torneio" na tela inicial.'}),o.length>0&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"tp-label",children:"Torneios ativos"}),o.map(u=>p.jsxs("div",{className:"tp-list-item",children:[p.jsxs("div",{style:{flex:1,cursor:"pointer"},onClick:()=>n(u.id,e),children:[p.jsx("div",{className:"tp-list-name",children:u.name}),p.jsx("div",{className:"tp-list-meta",children:u.typeLabel})]}),p.jsx(Oo,{status:u.status}),i(u)&&p.jsx("button",{className:"tp-list-delete-btn",onClick:h=>{h.stopPropagation(),s(u)},children:p.jsx(Io,{size:15})})]},u.id))]}),l.length>0&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"tp-label",style:{marginTop:o.length>0?20:0},children:"Histórico (encerrados)"}),l.map(u=>p.jsxs("div",{className:"tp-list-item",children:[p.jsxs("div",{style:{flex:1,cursor:"pointer"},onClick:()=>n(u.id,"results"),children:[p.jsx("div",{className:"tp-list-name",children:u.name}),p.jsxs("div",{className:"tp-list-meta",children:[u.typeLabel,u.closedAt?` · ${new Date(u.closedAt).toLocaleDateString("pt-BR")}`:""]})]}),p.jsx(Oo,{status:u.status}),i(u)&&p.jsx("button",{className:"tp-list-delete-btn",onClick:h=>{h.stopPropagation(),s(u)},children:p.jsx(Io,{size:15})})]},u.id))]})]})]})}function IP({tournament:t,roundIdx:e,setRoundIdx:n,updateScore:r,onBack:i,onResults:s,onRequestClose:o,onExport:l,isAdmin:u,onGoAuth:h,onRequestDelete:f,canManage:g}){const _=t.rounds[e];t.rounds.length;const C=t.status==="closed",N=C||!u;return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"tp-topbar",children:[p.jsxs("button",{className:"tp-back",onClick:i,children:[p.jsx(Yr,{size:16})," Início"]}),p.jsx("div",{className:"tp-eyebrow",children:t.name}),p.jsx("div",{className:"tp-title",style:{fontSize:24},children:"Jogos"}),p.jsx("div",{className:"tp-sub",children:p.jsx(Oo,{status:t.status})})]}),p.jsxs("div",{className:"tp-body",children:[C&&p.jsx("div",{className:"tp-resting",style:{borderColor:"#4FA89B",background:"#E7F3EE",color:"#2F8464"},children:"Este torneio está encerrado. Os placares ficam salvos apenas para consulta e não podem mais ser alterados."}),!C&&!u&&p.jsxs("div",{className:"tp-auth-notice",children:[p.jsx(Kd,{size:16}),p.jsx("span",{children:"Você está vendo como visitante."}),p.jsxs("button",{className:"tp-auth-link",onClick:h,children:[p.jsx(du,{size:14})," Entrar para lançar placares"]})]}),p.jsx("div",{className:"tp-round-tabs",children:t.rounds.map((P,b)=>{const I=P.matches.every(v=>v.scoreA!=null&&v.scoreB!=null);return p.jsx("div",{className:`tp-round-tab ${b===e?"active":""} ${I?"done":""}`,onClick:()=>n(b),children:P.roundNumber},b)})}),_.resting.length>0&&p.jsxs("div",{className:"tp-resting",children:["Descansando nesta rodada: ",_.resting.map(P=>t.players[P].name).join(", ")]}),_.matches.map((P,b)=>p.jsxs("div",{className:"tp-court-card",children:[p.jsxs("div",{className:"tp-court-label",style:{textAlign:"center",fontFamily:"'Archivo Black',sans-serif",fontSize:16,color:"#0E4B5A",letterSpacing:0},children:["Quadra ",P.court]}),p.jsxs("div",{className:"tp-team-row",children:[p.jsx("div",{className:"tp-team-names",children:P.teamA.map(I=>t.players[I].name).join(" / ")}),p.jsx("input",{className:"tp-score-input",type:"number",min:"0",placeholder:"?",disabled:N,value:P.scoreA==null?"":P.scoreA,onChange:I=>r(e,b,"A",I.target.value)})]}),p.jsxs("div",{className:"tp-vs-divider",children:[p.jsx("div",{className:"tp-vs-line"}),p.jsx("span",{className:"tp-vs-text",children:"VS"}),p.jsx("div",{className:"tp-vs-line"})]}),p.jsxs("div",{className:"tp-team-row",children:[p.jsx("div",{className:"tp-team-names",children:P.teamB.map(I=>t.players[I].name).join(" / ")}),p.jsx("input",{className:"tp-score-input",type:"number",min:"0",placeholder:"?",disabled:N,value:P.scoreB==null?"":P.scoreB,onChange:I=>r(e,b,"B",I.target.value)})]})]},b)),p.jsxs("button",{className:"tp-btn tp-btn-outline",onClick:s,style:{marginTop:8,marginBottom:10},children:[p.jsx(Qd,{size:18})," Ver classificação"]}),p.jsxs("div",{style:{display:"flex",gap:10,marginBottom:C||!u?0:10},children:[p.jsxs("button",{className:"tp-btn tp-btn-ghost",style:{flex:1},onClick:()=>l({mode:"round",roundIdx:e}),children:[p.jsx(kh,{size:17})," Rodada"]}),p.jsxs("button",{className:"tp-btn tp-btn-ghost",style:{flex:1},onClick:()=>l({mode:"full"}),children:[p.jsx(kh,{size:17})," Torneio"]})]}),!C&&g&&p.jsxs("button",{className:"tp-btn tp-btn-ghost",onClick:o,style:{marginBottom:10},children:[p.jsx(Bi,{size:18})," Encerrar torneio"]}),!C&&u&&!g&&p.jsxs("div",{className:"tp-auth-notice",children:[p.jsx(Gd,{size:16}),p.jsx("span",{children:"Só quem criou este torneio (ou o admin geral) pode encerrá-lo."})]}),g&&p.jsxs("button",{className:"tp-btn-delete-link",onClick:f,children:[p.jsx(Io,{size:15})," Excluir torneio"]})]})]})}function SP({tournament:t,onBack:e,onTracking:n,onRequestClose:r,onExport:i,isAdmin:s,onGoAuth:o,onRequestDelete:l,canManage:u}){var g;const h=t.status==="closed",f=h&&t.finalStandings?t.finalStandings:Wf(qf(t),t,t.victoryCondition,t.tiebreakers);return p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"tp-topbar",children:[p.jsxs("button",{className:"tp-back",onClick:e,children:[p.jsx(Yr,{size:16})," Início"]}),p.jsx("div",{className:"tp-eyebrow",children:t.typeLabel}),p.jsx("div",{className:"tp-title",style:{fontSize:22},children:t.name}),p.jsxs("div",{className:"tp-sub",style:{display:"flex",alignItems:"center",gap:10},children:[p.jsx(Oo,{status:t.status}),h&&t.closedAt&&p.jsxs("span",{children:["Encerrado em ",new Date(t.closedAt).toLocaleDateString("pt-BR")]})]})]}),p.jsxs("div",{className:"tp-body",children:[p.jsx("div",{className:"tp-card",style:{padding:8},children:p.jsxs("table",{className:"tp-standings-table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"#"}),p.jsx("th",{children:"Jogador"}),p.jsx("th",{children:"J"}),p.jsx("th",{children:"V"}),p.jsx("th",{children:"TP"}),p.jsx("th",{children:"SP"})]})}),p.jsx("tbody",{children:f.map((_,C)=>p.jsxs("tr",{children:[p.jsx("td",{className:`tp-pos ${C===0?"tp-pos-1":""}`,children:C+1}),p.jsx("td",{children:_.name}),p.jsx("td",{children:_.played}),p.jsx("td",{children:_.wins}),p.jsx("td",{children:_.gf}),p.jsx("td",{children:_.saldo})]},_.id))})]})}),p.jsxs("div",{className:"tp-legend",children:[p.jsxs("span",{children:[p.jsx("strong",{children:"J"})," Jogos"]}),p.jsxs("span",{children:[p.jsx("strong",{children:"V"})," Vitórias"]}),p.jsxs("span",{children:[p.jsx("strong",{children:"TP"})," Total de Pontos"]}),p.jsxs("span",{children:[p.jsx("strong",{children:"SP"})," Saldo de Pontos"]})]}),p.jsxs("div",{className:"tp-list-meta",style:{marginBottom:16},children:["Critérios: ",(g=qE.find(_=>_.key===t.victoryCondition))==null?void 0:g.label," · Desempates: ",t.tiebreakers.map(_=>{var C;return(C=Xh.find(N=>N.key===_))==null?void 0:C.label}).join(" → ")]}),p.jsxs("button",{className:"tp-btn tp-btn-ghost",onClick:()=>i({mode:"standings"}),style:{marginBottom:10},children:[p.jsx(kh,{size:18})," Compartilhar classificação"]}),!h&&s&&p.jsxs("button",{className:"tp-btn tp-btn-outline",onClick:n,style:{marginBottom:10},children:[p.jsx(Cv,{size:18})," Lançar placares"]}),!h&&u&&p.jsxs("button",{className:"tp-btn tp-btn-ghost",onClick:r,style:{marginBottom:10},children:[p.jsx(Bi,{size:18})," Encerrar torneio"]}),!h&&s&&!u&&p.jsxs("div",{className:"tp-auth-notice",children:[p.jsx(Gd,{size:16}),p.jsx("span",{children:"Só quem criou este torneio (ou o admin geral) pode encerrá-lo."})]}),!h&&!s&&p.jsxs("div",{className:"tp-auth-notice",children:[p.jsx(Kd,{size:16}),p.jsx("span",{children:"Visitante: só visualização."}),p.jsxs("button",{className:"tp-auth-link",onClick:o,children:[p.jsx(du,{size:14})," Entrar como organizador"]})]}),u&&p.jsxs("button",{className:"tp-btn-delete-link",onClick:l,children:[p.jsx(Io,{size:15})," Excluir torneio"]})]})]})}function AP({tournament:t,onCancel:e,onConfirm:n}){const r=t.rounds.reduce((o,l)=>o+l.matches.length,0),i=t.rounds.reduce((o,l)=>o+l.matches.filter(u=>u.scoreA!=null&&u.scoreB!=null).length,0),s=i<r;return p.jsx("div",{className:"tp-modal-overlay",onClick:e,children:p.jsxs("div",{className:"tp-modal-card",onClick:o=>o.stopPropagation(),children:[p.jsx("div",{className:"tp-modal-title",children:"Encerrar torneio?"}),p.jsx("div",{className:"tp-modal-text",children:s?`Ainda faltam ${r-i} de ${r} jogos com placar lançado. Ao encerrar, a classificação atual será registrada como resultado final e os placares não poderão mais ser editados.`:"Todos os jogos já têm placar lançado. Ao encerrar, a classificação será registrada como resultado final e os placares não poderão mais ser editados."}),p.jsxs("div",{className:"tp-modal-actions",children:[p.jsx("button",{className:"tp-btn tp-btn-outline",onClick:e,style:{flex:1},children:"Cancelar"}),p.jsx("button",{className:"tp-btn tp-btn-primary",onClick:n,style:{flex:1},children:"Encerrar"})]})]})})}function kP({name:t,deleting:e,onCancel:n,onConfirm:r}){return p.jsx("div",{className:"tp-modal-overlay",onClick:n,children:p.jsxs("div",{className:"tp-modal-card",onClick:i=>i.stopPropagation(),children:[p.jsxs("div",{className:"tp-modal-title",children:['Excluir "',t,'"?']}),p.jsx("div",{className:"tp-modal-text",children:"Essa ação apaga o torneio (jogadores, rodadas, placares e classificação) permanentemente e não pode ser desfeita. Ele deixa de aparecer para todo mundo, inclusive no histórico."}),p.jsxs("div",{className:"tp-modal-actions",children:[p.jsx("button",{className:"tp-btn tp-btn-outline",onClick:n,style:{flex:1},disabled:e,children:"Cancelar"}),p.jsxs("button",{className:"tp-btn tp-btn-primary",style:{flex:1,background:"#B5443A"},onClick:r,disabled:e,children:[e?p.jsx(To,{size:17,className:"tp-spin"}):p.jsx(Io,{size:17})," ",e?"Excluindo...":"Excluir"]})]})]})})}function CP({tournament:t,request:e,onClose:n}){const[r,i]=te.useState(!1),s=nd.useRef(null);let o="",l="Compartilhar";if(e.mode==="round")o=hP(t,e.roundIdx),l=`Rodada ${t.rounds[e.roundIdx].roundNumber}`;else if(e.mode==="full")o=dP(t),l="Torneio completo";else if(e.mode==="standings"){const h=t.status==="closed"&&t.finalStandings?t.finalStandings:Wf(qf(t),t,t.victoryCondition,t.tiebreakers);o=fP(t,h),l="Classificação"}const u=async()=>{try{await navigator.clipboard.writeText(o),i(!0)}catch{try{const h=s.current;h.focus(),h.select(),document.execCommand("copy"),i(!0)}catch{i(!1)}}setTimeout(()=>i(!1),2e3)};return p.jsx("div",{className:"tp-modal-overlay",onClick:n,children:p.jsxs("div",{className:"tp-modal-card",style:{maxWidth:400},onClick:h=>h.stopPropagation(),children:[p.jsxs("div",{className:"tp-modal-title",children:["Exportar: ",l]}),p.jsx("div",{className:"tp-modal-text",children:"Copie e cole no grupo do WhatsApp."}),p.jsx("textarea",{ref:s,readOnly:!0,value:o,style:{width:"100%",minHeight:220,maxHeight:320,border:"2px solid #D8CBA3",borderRadius:12,padding:12,fontSize:13.5,fontFamily:"'DM Mono',monospace",color:"#16262B",background:"#FFFDF6",marginBottom:14,resize:"vertical"}}),p.jsxs("div",{className:"tp-modal-actions",children:[p.jsx("button",{className:"tp-btn tp-btn-outline",onClick:n,style:{flex:1},children:"Fechar"}),p.jsxs("button",{className:"tp-btn tp-btn-primary",onClick:u,style:{flex:1},children:[r?p.jsx(Bi,{size:17}):p.jsx(KI,{size:17})," ",r?"Copiado!":"Copiar"]})]})]})})}bc.createRoot(document.getElementById("root")).render(p.jsx(nd.StrictMode,{children:p.jsx(gP,{})}));

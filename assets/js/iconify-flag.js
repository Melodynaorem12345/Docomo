/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.1.0
*/
var Iconify=function(e){"use strict";var n=Object.freeze({left:0,top:0,width:16,height:16}),t=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),r=Object.freeze(Object.assign({},n,t)),i=Object.freeze(Object.assign({},r,{body:"",hidden:!1}));function o(e,n){var r=function(e,n){var t={};!e.hFlip!=!n.hFlip&&(t.hFlip=!0),!e.vFlip!=!n.vFlip&&(t.vFlip=!0);var r=((e.rotate||0)+(n.rotate||0))%4;return r&&(t.rotate=r),t}(e,n);for(var o in i)o in t?o in e&&!(o in r)&&(r[o]=t[o]):o in n?r[o]=n[o]:o in e&&(r[o]=e[o]);return r}function a(e,n,t){var r=e.icons,i=e.aliases||Object.create(null),a={};function c(e){a=o(r[e]||i[e],a)}return c(n),t.forEach(c),o(e,a)}function c(e,n){var t=[];if("object"!=typeof e||"object"!=typeof e.icons)return t;e.not_found instanceof Array&&e.not_found.forEach((function(e){n(e,null),t.push(e)}));var r=function(e,n){var t=e.icons,r=e.aliases||Object.create(null),i=Object.create(null);return(n||Object.keys(t).concat(Object.keys(r))).forEach((function e(n){if(t[n])return i[n]=[];if(!(n in i)){i[n]=null;var o=r[n]&&r[n].parent,a=o&&e(o);a&&(i[n]=[o].concat(a))}return i[n]})),i}(e);for(var i in r){var o=r[i];o&&(n(i,a(e,i,o)),t.push(i))}return t}var u=/^[a-z0-9]+(-[a-z0-9]+)*$/,f=function(e,n,t,r){void 0===r&&(r="");var i=e.split(":");if("@"===e.slice(0,1)){if(i.length<2||i.length>3)return null;r=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){var o=i.pop(),a=i.pop(),c={provider:i.length>0?i[0]:r,prefix:a,name:o};return n&&!s(c)?null:c}var u=i[0],f=u.split("-");if(f.length>1){var d={provider:r,prefix:f.shift(),name:f.join("-")};return n&&!s(d)?null:d}if(t&&""===r){var l={provider:r,prefix:"",name:u};return n&&!s(l,t)?null:l}return null},s=function(e,n){return!!e&&!(""!==e.provider&&!e.provider.match(u)||!(n&&""===e.prefix||e.prefix.match(u))||!e.name.match(u))},d=Object.assign({},{provider:"",aliases:{},not_found:{}},n);function l(e,n){for(var t in n)if(t in e&&typeof e[t]!=typeof n[t])return!1;return!0}function v(e){if("object"!=typeof e||null===e)return null;var n=e;if("string"!=typeof n.prefix||!e.icons||"object"!=typeof e.icons)return null;if(!l(e,d))return null;var t=n.icons;for(var r in t){var o=t[r];if(!r.match(u)||"string"!=typeof o.body||!l(o,i))return null}var a=n.aliases||Object.create(null);for(var c in a){var f=a[c],s=f.parent;if(!c.match(u)||"string"!=typeof s||!t[s]&&!a[s]||!l(f,i))return null}return n}var p=Object.create(null);function h(e,n){var t=p[e]||(p[e]=Object.create(null));return t[n]||(t[n]=function(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}(e,n))}function g(e,n){return v(n)?c(n,(function(n,t){t?e.icons[n]=t:e.missing.add(n)})):[]}function b(e,n){var t=[];return("string"==typeof e?[e]:Object.keys(p)).forEach((function(e){("string"==typeof e&&"string"==typeof n?[n]:Object.keys(p[e]||{})).forEach((function(n){var r=h(e,n);t=t.concat(Object.keys(r.icons).map((function(t){return(""!==e?"@"+e+":":"")+n+":"+t})))}))})),t}var m=!1;function y(e){var n="string"==typeof e?f(e,!0,m):e;if(n){var t=h(n.provider,n.prefix),r=n.name;return t.icons[r]||(t.missing.has(r)?null:void 0)}}function x(e,n){var t=f(e,!0,m);return!!t&&function(e,n,t){try{if("string"==typeof t.body)return e.icons[n]=Object.assign({},t),!0}catch(e){}return!1}(h(t.provider,t.prefix),t.name,n)}function j(e,n){if("object"!=typeof e)return!1;if("string"!=typeof n&&(n=e.provider||""),m&&!n&&!e.prefix){var t=!1;return v(e)&&(e.prefix="",c(e,(function(e,n){n&&x(e,n)&&(t=!0)}))),t}var r=e.prefix;return!!s({provider:n,prefix:r,name:"a"})&&!!g(h(n,r),e)}function w(e){return!!y(e)}function O(e){var n=y(e);return n?Object.assign({},r,n):null}var S=Object.freeze({width:null,height:null}),E=Object.freeze(Object.assign({},S,t)),I=/(-?[0-9.]*[0-9]+[0-9.]*)/g,k=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function C(e,n,t){if(1===n)return e;if(t=t||100,"number"==typeof e)return Math.ceil(e*n*t)/t;if("string"!=typeof e)return e;var r=e.split(I);if(null===r||!r.length)return e;for(var i=[],o=r.shift(),a=k.test(o);;){if(a){var c=parseFloat(o);isNaN(c)?i.push(o):i.push(Math.ceil(c*n*t)/t)}else i.push(o);if(void 0===(o=r.shift()))return i.join("");a=!a}}function M(e,n){var t=Object.assign({},r,e),i=Object.assign({},E,n),o={left:t.left,top:t.top,width:t.width,height:t.height},a=t.body;[t,i].forEach((function(e){var n,t=[],r=e.hFlip,i=e.vFlip,c=e.rotate;switch(r?i?c+=2:(t.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),t.push("scale(-1 1)"),o.top=o.left=0):i&&(t.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),t.push("scale(1 -1)"),o.top=o.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4){case 1:n=o.height/2+o.top,t.unshift("rotate(90 "+n.toString()+" "+n.toString()+")");break;case 2:t.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:n=o.width/2+o.left,t.unshift("rotate(-90 "+n.toString()+" "+n.toString()+")")}c%2==1&&(o.left!==o.top&&(n=o.left,o.left=o.top,o.top=n),o.width!==o.height&&(n=o.width,o.width=o.height,o.height=n)),t.length&&(a='<g transform="'+t.join(" ")+'">'+a+"</g>")}));var c,u,f=i.width,s=i.height,d=o.width,l=o.height;null===f?c=C(u=null===s?"1em":"auto"===s?l:s,d/l):(c="auto"===f?d:f,u=null===s?C(c,l/d):"auto"===s?l:s);var v={},p=function(e,n){(function(e){return"unset"===e||"undefined"===e||"none"===e})(n)||(v[e]=n.toString())};return p("width",c),p("height",u),v.viewBox=o.left.toString()+" "+o.top.toString()+" "+d.toString()+" "+l.toString(),{attributes:v,body:a}}var T=/\sid="(\S+)"/g,A="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16),F=0;function L(e,n){void 0===n&&(n=A);for(var t,r=[];t=T.exec(e);)r.push(t[1]);if(!r.length)return e;var i="suffix"+(16777216*Math.random()|Date.now()).toString(16);return r.forEach((function(t){var r="function"==typeof n?n(t):n+(F++).toString(),o=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+r+i+"$3")})),e=e.replace(new RegExp(i,"g"),"")}var P={local:!0,session:!0},N={local:new Set,session:new Set},z=!1;var _="iconify2",D="iconify",R="iconify-count",$="iconify-version",q=36e5;function U(e,n){try{return e.getItem(n)}catch(e){}}function V(e,n,t){try{return e.setItem(n,t),!0}catch(e){}}function H(e,n){try{e.removeItem(n)}catch(e){}}function Q(e,n){return V(e,R,n.toString())}function G(e){return parseInt(U(e,R))||0}var J="undefined"==typeof window?{}:window;function B(e){var n=e+"Storage";try{if(J&&J[n]&&"number"==typeof J[n].length)return J[n]}catch(e){}P[e]=!1}function K(e,n){var t=B(e);if(t){var r=U(t,$);if(r!==_){if(r)for(var i=G(t),o=0;o<i;o++)H(t,D+o.toString());return V(t,$,_),void Q(t,0)}for(var a=Math.floor(Date.now()/q)-168,c=function(e){var r=D+e.toString(),i=U(t,r);if("string"==typeof i){try{var o=JSON.parse(i);if("object"==typeof o&&"number"==typeof o.cached&&o.cached>a&&"string"==typeof o.provider&&"object"==typeof o.data&&"string"==typeof o.data.prefix&&n(o,e))return!0}catch(e){}H(t,r)}},u=G(t),f=u-1;f>=0;f--)c(f)||(f===u-1?(u--,Q(t,u)):N[e].add(f))}}function W(){if(!z)for(var e in z=!0,P)K(e,(function(e){var n=e.data,t=h(e.provider,n.prefix);if(!g(t,n).length)return!1;var r=n.lastModified||-1;return t.lastModifiedCached=t.lastModifiedCached?Math.min(t.lastModifiedCached,r):r,!0}))}function X(e,n){switch(e){case"local":case"session":P[e]=n;break;case"all":for(var t in P)P[t]=n}}var Y=Object.create(null);function Z(e,n){Y[e]=n}function ee(e){return Y[e]||Y[""]}function ne(e){var n;if("string"==typeof e.resources)n=[e.resources];else if(!((n=e.resources)instanceof Array&&n.length))return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}for(var te=Object.create(null),re=["https://api.simplesvg.com","https://api.unisvg.com"],ie=[];re.length>0;)1===re.length||Math.random()>.5?ie.push(re.shift()):ie.push(re.pop());function oe(e,n){var t=ne(n);return null!==t&&(te[e]=t,!0)}function ae(e){return te[e]}te[""]=ne({resources:["https://api.iconify.design"].concat(ie)});var ce=function(){var e;try{if("function"==typeof(e=fetch))return e}catch(e){}}();var ue={prepare:function(e,n,t){var r=[],i=function(e,n){var t,r=ae(e);if(!r)return 0;if(r.maxURL){var i=0;r.resources.forEach((function(e){var n=e;i=Math.max(i,n.length)}));var o=n+".json?icons=";t=r.maxURL-i-r.path.length-o.length}else t=0;return t}(e,n),o="icons",a={type:o,provider:e,prefix:n,icons:[]},c=0;return t.forEach((function(t,u){(c+=t.length+1)>=i&&u>0&&(r.push(a),a={type:o,provider:e,prefix:n,icons:[]},c=t.length),a.icons.push(t)})),r.push(a),r},send:function(e,n,t){if(ce){var r=function(e){if("string"==typeof e){var n=ae(e);if(n)return n.path}return"/"}(n.provider);switch(n.type){case"icons":var i=n.prefix,o=n.icons.join(",");r+=i+".json?"+new URLSearchParams({icons:o}).toString();break;case"custom":var a=n.uri;r+="/"===a.slice(0,1)?a.slice(1):a;break;default:return void t("abort",400)}var c=503;ce(e+r).then((function(e){var n=e.status;if(200===n)return c=501,e.json();setTimeout((function(){t(function(e){return 404===e}(n)?"abort":"next",n)}))})).then((function(e){"object"==typeof e&&null!==e?setTimeout((function(){t("success",e)})):setTimeout((function(){404===e?t("abort",e):t("next",c)}))})).catch((function(){t("next",c)}))}else t("abort",424)}};function fe(e,n){e.forEach((function(e){var t=e.loaderCallbacks;t&&(e.loaderCallbacks=t.filter((function(e){return e.id!==n})))}))}var se=0;var de={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function le(e,n,t,r){var i,o=e.resources.length,a=e.random?Math.floor(Math.random()*o):e.index;if(e.random){var c=e.resources.slice(0);for(i=[];c.length>1;){var u=Math.floor(Math.random()*c.length);i.push(c[u]),c=c.slice(0,u).concat(c.slice(u+1))}i=i.concat(c)}else i=e.resources.slice(a).concat(e.resources.slice(0,a));var f,s=Date.now(),d="pending",l=0,v=null,p=[],h=[];function g(){v&&(clearTimeout(v),v=null)}function b(){"pending"===d&&(d="aborted"),g(),p.forEach((function(e){"pending"===e.status&&(e.status="aborted")})),p=[]}function m(e,n){n&&(h=[]),"function"==typeof e&&h.push(e)}function y(){d="failed",h.forEach((function(e){e(void 0,f)}))}function x(){p.forEach((function(e){"pending"===e.status&&(e.status="aborted")})),p=[]}function j(){if("pending"===d){g();var r=i.shift();if(void 0===r)return p.length?void(v=setTimeout((function(){g(),"pending"===d&&(x(),y())}),e.timeout)):void y();var o={status:"pending",resource:r,callback:function(n,t){!function(n,t,r){var o="success"!==t;switch(p=p.filter((function(e){return e!==n})),d){case"pending":break;case"failed":if(o||!e.dataAfterTimeout)return;break;default:return}if("abort"===t)return f=r,void y();if(o)return f=r,void(p.length||(i.length?j():y()));if(g(),x(),!e.random){var a=e.resources.indexOf(n.resource);-1!==a&&a!==e.index&&(e.index=a)}d="completed",h.forEach((function(e){e(r)}))}(o,n,t)}};p.push(o),l++,v=setTimeout(j,e.rotate),t(r,n,o.callback)}}return"function"==typeof r&&h.push(r),setTimeout(j),function(){return{startTime:s,payload:n,status:d,queriesSent:l,queriesPending:p.length,subscribe:m,abort:b}}}function ve(e){var n=Object.assign({},de,e),t=[];function r(){t=t.filter((function(e){return"pending"===e().status}))}var i={query:function(e,i,o){var a=le(n,e,i,(function(e,n){r(),o&&o(e,n)}));return t.push(a),a},find:function(e){return t.find((function(n){return e(n)}))||null},setIndex:function(e){n.index=e},getIndex:function(){return n.index},cleanup:r};return i}function pe(){}var he=Object.create(null);function ge(e,n,t){var r,i;if("string"==typeof e){var o=ee(e);if(!o)return t(void 0,424),pe;i=o.send;var a=function(e){if(!he[e]){var n=ae(e);if(!n)return;var t={config:n,redundancy:ve(n)};he[e]=t}return he[e]}(e);a&&(r=a.redundancy)}else{var c=ne(e);if(c){r=ve(c);var u=ee(e.resources?e.resources[0]:"");u&&(i=u.send)}}return r&&i?r.query(n,i,t)().abort:(t(void 0,424),pe)}function be(e,n){function t(t){var r;if(P[t]&&(r=B(t))){var i,o=N[t];if(o.size)o.delete(i=Array.from(o).shift());else if(!Q(r,(i=G(r))+1))return;var a={cached:Math.floor(Date.now()/q),provider:e.provider,data:n};return V(r,D+i.toString(),JSON.stringify(a))}}z||W(),n.lastModified&&!function(e,n){var t=e.lastModifiedCached;if(t&&t>=n)return t===n;if(e.lastModifiedCached=n,t)for(var r in P)K(r,(function(t){var r=t.data;return t.provider!==e.provider||r.prefix!==e.prefix||r.lastModified===n}));return!0}(e,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&delete(n=Object.assign({},n)).not_found,t("local")||t("session"))}function me(){}function ye(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout((function(){e.iconsLoaderFlag=!1,function(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout((function(){e.pendingCallbacksFlag=!1;var n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(n.length){var t=!1,r=e.provider,i=e.prefix;n.forEach((function(n){var o=n.icons,a=o.pending.length;o.pending=o.pending.filter((function(n){if(n.prefix!==i)return!0;var a=n.name;if(e.icons[a])o.loaded.push({provider:r,prefix:i,name:a});else{if(!e.missing.has(a))return t=!0,!0;o.missing.push({provider:r,prefix:i,name:a})}return!1})),o.pending.length!==a&&(t||fe([e],n.id),n.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),n.abort))}))}})))}(e)})))}var xe=function(e,n){var t,r=function(e,n,t){void 0===n&&(n=!0),void 0===t&&(t=!1);var r=[];return e.forEach((function(e){var i="string"==typeof e?f(e,n,t):e;i&&r.push(i)})),r}(e,!0,("boolean"==typeof t&&(m=t),m)),i=function(e){var n={loaded:[],missing:[],pending:[]},t=Object.create(null);e.sort((function(e,n){return e.provider!==n.provider?e.provider.localeCompare(n.provider):e.prefix!==n.prefix?e.prefix.localeCompare(n.prefix):e.name.localeCompare(n.name)}));var r={provider:"",prefix:"",name:""};return e.forEach((function(e){if(r.name!==e.name||r.prefix!==e.prefix||r.provider!==e.provider){r=e;var i=e.provider,o=e.prefix,a=e.name,c=t[i]||(t[i]=Object.create(null)),u=c[o]||(c[o]=h(i,o)),f={provider:i,prefix:o,name:a};(a in u.icons?n.loaded:""===o||u.missing.has(a)?n.missing:n.pending).push(f)}})),n}(r);if(!i.pending.length){var o=!0;return n&&setTimeout((function(){o&&n(i.loaded,i.missing,i.pending,me)})),function(){o=!1}}var a,c,u=Object.create(null),s=[];return i.pending.forEach((function(e){var n=e.provider,t=e.prefix;if(t!==c||n!==a){a=n,c=t,s.push(h(n,t));var r=u[n]||(u[n]=Object.create(null));r[t]||(r[t]=[])}})),i.pending.forEach((function(e){var n=e.provider,t=e.prefix,r=e.name,i=h(n,t),o=i.pendingIcons||(i.pendingIcons=new Set);o.has(r)||(o.add(r),u[n][t].push(r))})),s.forEach((function(e){var n=e.provider,t=e.prefix;u[n][t].length&&function(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout((function(){e.iconsQueueFlag=!1;var n,t=e.provider,r=e.prefix,i=e.iconsToLoad;delete e.iconsToLoad,i&&(n=ee(t))&&n.prepare(t,r,i).forEach((function(n){ge(t,n,(function(t){if("object"!=typeof t)n.icons.forEach((function(n){e.missing.add(n)}));else try{var r=g(e,t);if(!r.length)return;var i=e.pendingIcons;i&&r.forEach((function(e){i.delete(e)})),be(e,t)}catch(e){console.error(e)}ye(e)}))}))})))}(e,u[n][t])})),n?function(e,n,t){var r=se++,i=fe.bind(null,t,r);if(!n.pending.length)return i;var o={id:r,icons:n,callback:e,abort:i};return t.forEach((function(e){(e.loaderCallbacks||(e.loaderCallbacks=[])).push(o)})),i}(n,i,s):me},je=function(e){return new Promise((function(n,t){var i="string"==typeof e?f(e,!0):e;i?xe([i||e],(function(o){if(o.length&&i){var a=y(i);if(a)return void n(Object.assign({},r,a))}t(e)})):t(e)}))};function we(e,n){var t=Object.assign({},e);for(var r in n){var i=n[r],o=typeof i;r in S?(null===i||i&&("string"===o||"number"===o))&&(t[r]=i):o===typeof t[r]&&(t[r]="rotate"===r?i%4:i)}return t}var Oe=Object.assign({},E,{inline:!1}),Se="iconify-inline",Ee="iconifyData"+Date.now(),Ie=[];function ke(e){for(var n=0;n<Ie.length;n++){var t=Ie[n];if(("function"==typeof t.node?t.node():t.node)===e)return t}}function Ce(e,n){void 0===n&&(n=!1);var t=ke(e);return t?(t.temporary&&(t.temporary=n),t):(t={node:e,temporary:n},Ie.push(t),t)}function Me(){return Ie}var Te=null,Ae={childList:!0,subtree:!0,attributes:!0};function Fe(e){if(e.observer){var n=e.observer;n.pendingScan||(n.pendingScan=setTimeout((function(){delete n.pendingScan,Te&&Te(e)})))}}function Le(e,n){if(e.observer){var t=e.observer;if(!t.pendingScan)for(var r=0;r<n.length;r++){var i=n[r];if(i.addedNodes&&i.addedNodes.length>0||"attributes"===i.type&&void 0!==i.target[Ee])return void(t.paused||Fe(e))}}}function Pe(e,n){e.observer.instance.observe(n,Ae)}function Ne(e){var n=e.observer;if(!n||!n.instance){var t="function"==typeof e.node?e.node():e.node;t&&window&&(n||(n={paused:0},e.observer=n),n.instance=new window.MutationObserver(Le.bind(null,e)),Pe(e,t),n.paused||Fe(e))}}function ze(){Me().forEach(Ne)}function _e(e){if(e.observer){var n=e.observer;n.pendingScan&&(clearTimeout(n.pendingScan),delete n.pendingScan),n.instance&&(n.instance.disconnect(),delete n.instance)}}function De(e){var n=null!==Te;Te!==e&&(Te=e,n&&Me().forEach(_e)),n?ze():function(e){var n=document;n.readyState&&"loading"!==n.readyState?e():n.addEventListener("DOMContentLoaded",e)}(ze)}function Re(e){(e?[e]:Me()).forEach((function(e){if(e.observer){var n=e.observer;if(n.paused++,!(n.paused>1)&&n.instance)n.instance.disconnect()}else e.observer={paused:1}}))}function $e(e){if(e){var n=ke(e);n&&Re(n)}else Re()}function qe(e){(e?[e]:Me()).forEach((function(e){if(e.observer){var n=e.observer;if(n.paused&&(n.paused--,!n.paused)){var t="function"==typeof e.node?e.node():e.node;if(!t)return;n.instance?Pe(e,t):Ne(e)}}else Ne(e)}))}function Ue(e){if(e){var n=ke(e);n&&qe(n)}else qe()}function Ve(e,n){void 0===n&&(n=!1);var t=Ce(e,n);return Ne(t),t}function He(e){var n=ke(e);n&&(_e(n),function(e){Ie=Ie.filter((function(n){return e!==n&&e!==("function"==typeof n.node?n.node():n.node)}))}(e))}var Qe=/[\s,]+/;var Ge=["width","height"],Je=["inline","hFlip","vFlip"];function Be(e){var n=e.getAttribute("data-icon"),t="string"==typeof n&&f(n,!0);if(!t)return null;var r=Object.assign({},Oe,{inline:e.classList&&e.classList.contains(Se)});Ge.forEach((function(n){var t=e.getAttribute("data-"+n);t&&(r[n]=t)}));var i=e.getAttribute("data-rotate");"string"==typeof i&&(r.rotate=function(e,n){void 0===n&&(n=0);var t=e.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(""===t){var i=parseInt(e);return isNaN(i)?0:r(i)}if(t!==e){var o=0;switch(t){case"%":o=25;break;case"deg":o=90}if(o){var a=parseFloat(e.slice(0,e.length-t.length));return isNaN(a)?0:(a/=o)%1==0?r(a):0}}return n}(i));var o=e.getAttribute("data-flip");"string"==typeof o&&function(e,n){n.split(Qe).forEach((function(n){switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}(r,o),Je.forEach((function(n){var t="data-"+n,i=function(e,n){return e===n||"true"===e||""!==e&&"false"!==e&&null}(e.getAttribute(t),t);"boolean"==typeof i&&(r[n]=i)}));var a=e.getAttribute("data-mode");return{name:n,icon:t,customisations:r,mode:a}}function Ke(e,n){var t=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(var r in n)t+=" "+r+'="'+n[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+e+"</svg>"}function We(e){var n=new Set(["iconify"]);return["provider","prefix"].forEach((function(t){e[t]&&n.add("iconify--"+e[t])})),n}function Xe(e,n,t,r){var i=e.classList;if(r){var o=r.classList;Array.from(o).forEach((function(e){i.add(e)}))}var a=[];return n.forEach((function(e){i.contains(e)?t.has(e)&&a.push(e):(i.add(e),a.push(e))})),t.forEach((function(e){n.has(e)||i.remove(e)})),a}function Ye(e,n,t){var r=e.style;(t||[]).forEach((function(e){r.removeProperty(e)}));var i=[];for(var o in n)r.getPropertyValue(o)||(i.push(o),r.setProperty(o,n[o]));return i}function Ze(e,n,t){var r;try{r=document.createElement("span")}catch(n){return e}var i=n.customisations,o=M(t,i),a=e[Ee],c=Ke(L(o.body),Object.assign({},{"aria-hidden":"true",role:"img"},o.attributes));r.innerHTML=c;for(var u=r.childNodes[0],f=e.attributes,s=0;s<f.length;s++){var d=f.item(s),l=d.name;"class"===l||u.hasAttribute(l)||u.setAttribute(l,d.value)}var v=Xe(u,We(n.icon),new Set(a&&a.addedClasses),e),p=Ye(u,i.inline?{"vertical-align":"-0.125em"}:{},a&&a.addedStyles),h=Object.assign({},n,{status:"loaded",addedClasses:v,addedStyles:p});return u[Ee]=h,e.parentNode&&e.parentNode.replaceChild(u,e),u}var en={display:"inline-block"},nn={"background-color":"currentColor"},tn={"background-color":"transparent"},rn={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},on={"-webkit-mask":nn,mask:nn,background:tn};for(var an in on){var cn=on[an];for(var un in rn)cn[an+"-"+un]=rn[un]}function fn(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}var sn=!1;function dn(){sn||(sn=!0,setTimeout((function(){sn&&(sn=!1,ln())})))}function ln(e,n){void 0===n&&(n=!1);var t=Object.create(null);function i(e,n){var r=e.provider,i=e.prefix,o=e.name,a=h(r,i),c=a.icons[o];if(c)return{status:"loaded",icon:c};if(a.missing.has(o))return{status:"missing"};if(n&&!function(e){var n=h(e.provider,e.prefix).pendingIcons;return!(!n||!n.has(e.name))}(e)){var u=t[r]||(t[r]=Object.create(null));(u[i]||(u[i]=new Set)).add(o)}return{status:"loading"}}(e?[e]:Me()).forEach((function(e){var t="function"==typeof e.node?e.node():e.node;if(t&&t.querySelectorAll){var o=!1,a=!1;(function(e){var n=[];return e.querySelectorAll("svg.iconify, i.iconify, span.iconify, i.iconify-inline, span.iconify-inline").forEach((function(e){var t=e[Ee]||"svg"!==e.tagName.toLowerCase()?Be(e):null;t&&n.push({node:e,props:t})})),n})(t).forEach((function(e){var n,t=e.node,r=e.props,a=t[Ee];if(!a){var u=i(r.icon,!0),f=u.status,s=u.icon;return s?void c(t,r,s):(o=o||"loading"===f,void(t[Ee]=Object.assign({},r,{status:f})))}if(function(e,n){if(e.name!==n.name||e.mode!==n.mode)return!0;var t=e.customisations,r=n.customisations;for(var i in Oe)if(t[i]!==r[i])return!0;return!1}(a,r)){if(!(n=i(r.icon,a.name!==r.name)).icon)return o=o||"loading"===n.status,void Object.assign(a,Object.assign({},r,{status:n.status}))}else{if("loading"!==a.status)return;if(!(n=i(r.icon,!1)).icon)return void(a.status=n.status)}c(t,r,n.icon)})),e.temporary&&!o?He(t):n&&o?Ve(t,!0):a&&e.observer&&qe(e)}function c(n,t,i){if(a||(a=!0,Re(e)),"SVG"!==n.tagName.toUpperCase()){var o=t.mode,c="mask"===o||"bg"!==o&&("style"===o?-1!==i.body.indexOf("currentColor"):null);if("boolean"==typeof c)return void function(e,n,t,r){var i=n.customisations,o=M(t,i),a=o.attributes,c=e[Ee],u=Ke(o.body,Object.assign({},a,{width:t.width+"",height:t.height+""})),f=Xe(e,We(n.icon),new Set(c&&c.addedClasses)),s='url("data:image/svg+xml,'+(l=u,l.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")+'")'),d=Object.assign({},{"--svg":s,width:fn(a.width),height:fn(a.height)},en,r?nn:tn);var l;i.inline&&(d["vertical-align"]="-0.125em");var v=Ye(e,d,c&&c.addedStyles),p=Object.assign({},n,{status:"loaded",addedClasses:f,addedStyles:v});e[Ee]=p}(n,t,Object.assign({},r,i),c)}Ze(n,t,i)}}));var o=function(e){var n=t[e],r=function(t){var r=n[t];xe(Array.from(r).map((function(n){return{provider:e,prefix:t,name:n}})),dn)};for(var i in n)r(i)};for(var a in t)o(a)}function vn(e,n,t){void 0===t&&(t=!1);var r=y(e);if(!r)return null;var i=f(e),o=we(Oe,n||{}),a=Ze(document.createElement("span"),{name:e,icon:i,customisations:o},r);return t?a.outerHTML:a}function pn(){return"3.1.0"}function hn(e,n){return vn(e,n,!1)}function gn(e,n){return vn(e,n,!0)}function bn(e,n){var t=y(e);return t?M(t,we(Oe,n||{})):null}function mn(e){e?function(e){var n=ke(e);n?ln(n):ln({node:e,temporary:!0},!0)}(e):ln()}if("undefined"!=typeof document&&"undefined"!=typeof window){!function(){if(document.documentElement)return Ce(document.documentElement);Ie.push({node:function(){return document.documentElement}})}();var yn=window;if(void 0!==yn.IconifyPreload){var xn=yn.IconifyPreload,jn="Invalid IconifyPreload syntax.";"object"==typeof xn&&null!==xn&&(xn instanceof Array?xn:[xn]).forEach((function(e){try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!j(e))&&console.error(jn)}catch(e){console.error(jn)}}))}setTimeout((function(){De(ln),ln()}))}function wn(e,n){X(e,!1!==n)}function On(e){X(e,!0)}if(Z("",ue),"undefined"!=typeof document&&"undefined"!=typeof window){W();var Sn=window;if(void 0!==Sn.IconifyProviders){var En=Sn.IconifyProviders;if("object"==typeof En&&null!==En)for(var In in En){var kn="IconifyProviders["+In+"] is invalid.";try{var Cn=En[In];if("object"!=typeof Cn||!Cn||void 0===Cn.resources)continue;oe(In,Cn)||console.error(kn)}catch(e){console.error(kn)}}}}var Mn={getAPIConfig:ae,setAPIModule:Z,sendAPIQuery:ge,setFetch:function(e){ce=e},getFetch:function(){return ce},listAPIProviders:function(){return Object.keys(te)}},Tn={_api:Mn,addAPIProvider:oe,loadIcons:xe,loadIcon:je,iconExists:w,getIcon:O,listIcons:b,addIcon:x,addCollection:j,replaceIDs:L,calculateSize:C,buildIcon:M,getVersion:pn,renderSVG:hn,renderHTML:gn,renderIcon:bn,scan:mn,observe:Ve,stopObserving:He,pauseObserver:$e,resumeObserver:Ue,enableCache:wn,disableCache:On};return e._api=Mn,e.addAPIProvider=oe,e.addCollection=j,e.addIcon=x,e.buildIcon=M,e.calculateSize=C,e.default=Tn,e.disableCache=On,e.enableCache=wn,e.getIcon=O,e.getVersion=pn,e.iconExists=w,e.listIcons=b,e.loadIcon=je,e.loadIcons=xe,e.observe=Ve,e.pauseObserver=$e,e.renderHTML=gn,e.renderIcon=bn,e.renderSVG=hn,e.replaceIDs=L,e.resumeObserver=Ue,e.scan=mn,e.stopObserving=He,Object.defineProperty(e,"__esModule",{value:!0}),e}({});if("object"==typeof exports)try{for(var key in exports.__esModule=!0,exports.default=Iconify,Iconify)exports[key]=Iconify[key]}catch(e){}try{void 0===self.Iconify&&(self.Iconify=Iconify)}catch(e){}
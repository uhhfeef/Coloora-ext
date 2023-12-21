/*! For license information please see eyedropper.bundle.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var n,r={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(n){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new I(r||[]);return a(i,"_invoke",{value:T(t,n,c)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var p="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function w(){}function x(){}var E={};f(E,l,(function(){return this}));var L=Object.getPrototypeOf,C=L&&L(L(P([])));C&&C!==o&&i.call(C,l)&&(E=C);var k=x.prototype=b.prototype=Object.create(E);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(o,a,c,l){var s=h(e[o],e,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==t(f)&&i.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):n.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,l)}))}l(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}})}function T(t,e,r){var o=p;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=j(c,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var s=h(t,e,r);if("normal"===s.type){if(o=r.done?v:y,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=v,r.method="throw",r.arg=s.arg)}}}function j(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=x,a(k,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},_(S.prototype),f(S.prototype,s,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new S(d(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),f(k,u,"Generator"),f(k,l,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=P,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)}))}}var o,i="https://coloora-400822.et.r.appspot.com/send-analytics";function a(){return c.apply(this,arguments)}function c(){return(c=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o){t.next=2;break}return t.abrupt("return",o);case 2:return t.next=4,chrome.storage.local.get("clientId");case 4:if(n=t.sent,o=n.clientId){t.next=11;break}return o=self.crypto.randomUUID(),console.log("generated clientid"),t.next=11,chrome.storage.local.set({clientId:o});case 11:return console.log(o),t.abrupt("return",o);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,e){return s.apply(this,arguments)}function s(){return(s=r(e().mark((function t(n,r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("inside gaanalytics"),t.next=3,a();case 3:if("a1e0c334-cbc9-43bf-8de0-16d4a4f89ab7"===(o=t.sent)){t.next=27;break}return t.prev=5,t.t0=fetch,t.t1=i,t.t2={"Content-Type":"application/json"},t.t3=JSON,t.next=12,a();case 12:t.t4=t.sent,t.t5=n,t.t6={id:r},t.t7={client_id:t.t4,event_name:t.t5,event_params:t.t6},t.t8=t.t3.stringify.call(t.t3,t.t7),t.t9={method:"POST",headers:t.t2,body:t.t8},(0,t.t0)(t.t1,t.t9),console.log("event sent"),t.next=25;break;case 22:t.prev=22,t.t10=t.catch(5),console.error("Error sending data to Flask server:",t.t10);case 25:t.next=29;break;case 27:return console.log("demo user, event not sent"),t.abrupt("return");case 29:case"end":return t.stop()}}),t,null,[[5,22]])})))).apply(this,arguments)}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(){f=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new I(r||[]);return o(a,"_invoke",{value:T(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var p="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function w(){}function x(){}var E={};s(E,a,(function(){return this}));var L=Object.getPrototypeOf,C=L&&L(L(P([])));C&&C!==n&&r.call(C,a)&&(E=C);var k=x.prototype=b.prototype=Object.create(E);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var l=h(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==u(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function T(e,n,r){var o=p;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=j(c,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var s=h(e,n,r);if("normal"===s.type){if(o=r.done?v:y,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=v,r.method="throw",r.arg=s.arg)}}}function j(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(u(e)+" is not iterable")}return w.prototype=x,o(k,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=s(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},_(S.prototype),s(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(d(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),s(k,l,"Generator"),s(k,a,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function d(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function h(){var t;return t=f().mark((function t(e){var n,r,o,i,a;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("inside extract"),t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.text();case 6:if(r=t.sent,o=new DOMParser,i=o.parseFromString(r,"text/html"),!((a=i.querySelectorAll("img")).length>0)){t.next=17;break}if(console.log("imgElements",a),!navigator.platform.includes("Mac")){t.next=16;break}return t.abrupt("return",a[1].src);case 16:return t.abrupt("return",a[0].src);case 17:throw new Error("No images found");case 18:case"end":return t.stop()}}),t)})),h=function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){d(i,r,o,a,c,"next",t)}function c(t){d(i,r,o,a,c,"throw",t)}a(void 0)}))},h.apply(this,arguments)}function p(t,e,n,r,o){t&&(t.match(/\.(jpeg|jpg|gif|png)(\?|$)/)?(e(n,r),o(t)):function(t){return h.apply(this,arguments)}(t).then((function(t){e(n,r),o(t)})).catch((function(t){console.error("Failed to extract direct image URL:",t)})))}function y(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=m(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function m(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var g=1;function b(t,e){var n=document.createElement("input");n.className="category-title-input",n.type="text",n.value=t.innerText,e.replaceChild(n,t),n.focus(),n.select(),n.addEventListener("blur",(function(){t.innerText=n.value||"Default",e.replaceChild(t,n)})),n.addEventListener("keypress",(function(t){"Enter"===t.key&&n.blur()}))}function w(t){var e="New Category",n=function(t){var e=document.createElement("div");e.className="category-container";var n=document.createElement("div");n.className="category-title",n.innerText=t,n.addEventListener("dblclick",(function(){b(n,e)})),e.appendChild(n);var r=document.createElement("div");return r.style.display="grid",r.style.gridTemplateColumns="repeat(5, 40px)",r.style.gridAutoRows="40px",r.id="".concat(t.toLowerCase().replace(/\s+/g,"-"),"-color-boxes"),e.appendChild(r),e}(e);n.id=e.toLowerCase().replace(/\s+/g,"-");var r=n.querySelector("div");r.addEventListener("dblclick",(function(){b(r,n)})),t.appendChild(n)}function x(t){!function(t,e,n){console.log("inside imageanalysis.js"),console.log("Sending image URL to Flask API:",t),fetch("https://coloora-400822.et.r.appspot.com/fetch-image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageURL:t})}).then((function(t){return t.json()})).then((function(t){t.success&&t.dataURL?function(t,e,n){var r=new Image;r.src=t,r.onload=function(){!function(t,e){var n=t.naturalWidth/t.naturalHeight,r=window.innerHeight/2,o=document.getElementById(e);t.height=t.naturalHeight>r?r:t.naturalHeight,t.width=t.height*n,o.style.width="".concat(t.width,"px"),o.style.height="".concat(t.height,"px"),o.innerHTML="";var i=document.createElement("div");i.id="image",i.appendChild(t),o.appendChild(i)}(r,e),function(t,e){document.getElementById(e).style.height="".concat(t.height,"px"),t.addEventListener("wheel",L)}(r,n)}}(t.dataURL,"imageContainer","colorBoxesContainer"):n("Image analysis failed: "+t.error)})).catch((function(t){n("Network error: "+t.message)}))}(t,0,(function(t){console.error(t)}))}function E(){var t=document.getElementById("imageContainer"),e=document.createElement("div");e.className="pixel-display",document.body.appendChild(e);var n=!1;function r(t,n){var r=document.createElement("canvas");r.width=n.width,r.height=n.height;var o=r.getContext("2d");o.drawImage(n,0,0,n.width,n.height);var i=t.offsetX,a=t.offsetY,c=o.getImageData(i,a,1,1).data,l="rgb(".concat(c[0],", ").concat(c[1],", ").concat(c[2],")");e.style.backgroundColor=l,e.style.left="".concat(t.pageX+10,"px"),e.style.top="".concat(t.pageY-30,"px"),e.style.visibility="visible"}function o(t){"expand"===t?e.animate([{transform:"scale(.8)",opacity:1},{transform:"scale(1.2)",opacity:1},{transform:"scale(1)",opacity:1}],{duration:100,easing:"ease-out"}):"shrink"===t&&e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(0.8)",opacity:.5}],{duration:100,easing:"ease-out"}).finished.then((function(){e.style.visibility="hidden"}))}t.addEventListener("mousedown",(function(t){n=!0;var e=t.target;e instanceof HTMLImageElement&&(r(t,e),o("expand"))})),document.addEventListener("mouseup",(function(){n=!1,o("shrink")})),t.addEventListener("mousemove",(function(t){if(n){var e=t.target;e instanceof HTMLImageElement&&r(t,e)}})),t.addEventListener("mouseleave",(function(){e.style.visibility="hidden"})),t.addEventListener("click",(function(t){l("created_color_box","eyedropperContainer");var e=t.target;if(e instanceof HTMLImageElement){var n=document.createElement("canvas");n.width=e.width,n.height=e.height;var r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);var o=t.offsetX,i=t.offsetY,a=r.getImageData(o,i,1,1).data;console.log(a);var c="rgb(".concat(a[0],", ").concat(a[1],", ").concat(a[2],")"),s=function(t){var e,n,r=t.match(/\d+/g).map(Number),o=(n=3,function(t){if(Array.isArray(t))return t}(e=r)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(t){s=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,n)||m(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return"#"+((1<<24)+(o[0]<<16)+(o[1]<<8)+o[2]).toString(16).slice(1)}(c),u=document.createElement("div");u.className="color-box-container";var f=document.createElement("input");f.className="color-box",f.type="color",f.value=s,f.style.backgroundColor=c;var d=document.querySelectorAll("#colorBoxesContainer > .category-container"),h=d[d.length-1].lastChild;f.addEventListener("input",(function(){this.style.backgroundColor=this.value})),f.addEventListener("contextmenu",(function(t){t.preventDefault(),f.animate([{transform:"scale(1)",opacity:1},{transform:"scale(1.1)",opacity:1},{transform:"scale(0.8)",opacity:0}],{duration:150,easing:"ease-out"}).onfinish=function(){h.removeChild(u),l("removed_color_box","eyedropperContainer")}})),u.appendChild(f),h.appendChild(u),colorBoxesContainer.scrollTop=colorBoxesContainer.scrollHeight,f.animate([{transform:"scale(0.8)",opacity:0},{transform:"scale(1.1)",opacity:1},{transform:"scale(1)",opacity:1}],{duration:300,easing:"ease-out"}),console.log(c),u.addEventListener("mouseenter",(function(){this.style.transform="scale(0.8)"})),u.addEventListener("mouseleave",(function(){this.style.transform="scale(1)"})),u.addEventListener("click",(function(t){console.log("Color box container clicked"),l("clicked_color_box","eyedropperContainer")}))}}))}function L(t){t.preventDefault(),(t.deltaY||t.detail||t.wheelDelta)<0?g*=1.1:g/=1.1,g=Math.max(1,Math.min(g,1/0));var e=this.getBoundingClientRect(),n=(t.clientX-e.left)/e.width,r=(t.clientY-e.top)/e.height;this.style.transformOrigin="".concat(100*n,"% ").concat(100*r,"%"),this.style.transform="scale(".concat(g,")")}chrome.runtime.onMessage.addListener((function(t,e,n){var r;"toggleEyedropper"===t.action&&(console.log("inside chrome runtime message listener"),r=document.getElementById("eyedropperContainer"),console.log("inside toggle"),r?r.style.visibility="visible":(function(){console.log("Initializing UI...");var t=document.createElement("div");t.className="coloora-container",t.id="eyedropperContainer";var e=document.createElement("button");e.className="close-button",e.innerText="X",e.onclick=function(){document.body.removeChild(t)},t.appendChild(e);var n=document.createElement("div");n.className="image-input-container";var r=document.createElement("div");r.id="imageContainer",n.appendChild(r),r.textContent="Drag and drop image URL here",r.addEventListener("dragstart",(function(t){t.preventDefault()})),r.addEventListener("dragover",(function(t){t.preventDefault(),r.style.backgroundColor="rgba(128, 128, 128, 0.5)",r.style.border="2px dashed #ccc"})),r.addEventListener("dragleave",(function(t){r.style.backgroundColor="transparent",r.style.borderColor="#ccc",r.style.border="none"})),r.addEventListener("drop",(function(t){if(t.preventDefault(),r.style.backgroundColor="transparent",t.dataTransfer.types.includes("text/uri-list")){var e=t.dataTransfer.getData("text/uri-list");console.log("Dropped URL:",e),r.innerHTML='<div style="position: relative; max-width: 100%; max-height: 150px;">\n                    <img src="'.concat(e,'" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">\n                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.5); color: white; font-size: 1em;">\n                        Loading...\n                    </div>\n                </div>'),p(e,l,"loaded_image_eyedropper","eyedropperContainer",x)}else if(t.dataTransfer.types.includes("text/html")){var n=t.dataTransfer.getData("text/html"),o=(new DOMParser).parseFromString(n,"text/html"),i=o.querySelector("img")?o.querySelector("img").src:null;i&&(console.log("Extracted Image URL from HTML:",i),r.innerHTML='<div style="position: relative; max-width: 100%; max-height: 150px;">\n                <img src="'.concat(url,'" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">\n                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.5); color: white; font-size: 1em;">\n                    Loading...\n                </div>\n            </div>'),p(url,l,"loaded_image_eyedropper","eyedropperContainer",x))}else if(t.dataTransfer.types.includes("text/plain")){var c=t.dataTransfer.getData("text/plain");console.log("Extracted URL from text:",c),r.innerHTML='<div style="position: relative; max-width: 100%; max-height: 150px;">\n            <img src="'.concat(c,'" alt="Dropped Image" style="max-width: 100%; max-height: 150px;">\n            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.5); color: white; font-size: 1em;">\n                Loading...\n            </div>\n        </div>'),p(c,l,"loaded_image_eyedropper","eyedropperContainer",x)}a.style.opacity="1",r.style.border="none";var s=r.querySelector("img");s&&s.addEventListener("mousedown",(function(t){t.preventDefault()}))}));var o=document.createElement("label");o.className="label",o.innerText="Click to pick, right click to delete\nZoom in and out with mouse wheel",n.appendChild(o),t.appendChild(n);var i=document.createElement("div");i.className="color-container",t.appendChild(i);var a=document.createElement("div");a.className="color-boxes-container",a.id="colorBoxesContainer",i.appendChild(a),w(a);var c=document.createElement("button");c.className="label-button",c.id="greyscaleButton",c.innerText="◐",a.appendChild(c),c.addEventListener("click",(function(){var t;"grayscale(100%)"===(t=document.getElementById("image")).style.filter?t.style.filter="":t.style.filter="grayscale(100%)",l("greyscale_clicked","eyedropperContainer")}));var s=document.createElement("button");s.className="label-button",s.innerText="📋",s.style.fontSize="16px",s.style.bottom="20px",s.style.right="40px",a.appendChild(s),s.addEventListener("click",(function(){l("copy_palette_clicked","eyedropperContainer"),s.innerText="✅",function(){var t=document.getElementById("colorBoxesContainer"),e=t.getElementsByClassName("category-container"),n=t.scrollHeight,r=document.createElement("canvas");r.width=200,r.height=n;var o,i=r.getContext("2d"),a=0,c=y(e);try{for(c.s();!(o=c.n()).done;){var l=o.value,s=l.querySelector("div").innerText;i.fillStyle="#000",i.font="16px Arial",i.fillText(s,0,a+16),a+=30;var u,f=l.querySelectorAll('div[id$="-color-boxes"] > div > input'),d=0,h=y(f);try{for(h.s();!(u=h.n()).done;){var p=u.value.style.backgroundColor;i.fillStyle=p,i.fillRect(d,a,40,40),(d+=40)+40>r.width&&(d=0,a+=40)}}catch(t){h.e(t)}finally{h.f()}a+=60}}catch(t){c.e(t)}finally{c.f()}r.toBlob((function(t){var e=new ClipboardItem({"image/png":t});navigator.clipboard.write([e]).then((function(){return console.log("Color boxes with category names copied as image to clipboard")})).catch((function(t){return console.error("Error copying image to clipboard",t)}))}))}(),setTimeout((function(){s.innerText="📋"}),1500)}));var u=document.createElement("button");u.className="label-button",u.id="addCategoryButton",u.innerText="+",u.style.fontSize="20px",u.style.bottom="20px",u.style.right="20px",u.onclick=function(){w(a),l("added_category","addCategoryButton")},a.appendChild(u),document.body.appendChild(t),function(t){var e,n,r,o,i=!1;function a(a){if(i){var c=a.clientX-e,l=a.clientY-n;t.style.left="".concat(r+c,"px"),t.style.top="".concat(o+l,"px")}}function c(){window.removeEventListener("mousemove",a),document.removeEventListener("mouseup",c),i=!1}t.addEventListener("mousedown",(function(l){"img"!==l.target.tagName.toLowerCase()&&(i=!0,e=l.clientX,n=l.clientY,r=t.getBoundingClientRect().left+t.offsetWidth/2,o=t.getBoundingClientRect().top,window.addEventListener("mousemove",a),document.addEventListener("mouseup",c))}))}(t),E()}(),l("custom_palette_loaded","eyedropperContainer")))}))})();
//# sourceMappingURL=eyedropper.bundle.js.map
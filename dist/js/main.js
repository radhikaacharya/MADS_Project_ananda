!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a=n(7),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=i.default},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0,n(9)(r,a),r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(s);n(1);var d=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.something=!1,e}return i(t,e),o(t,[{key:"render",value:function(){return'\n      <div class="container" id="ad-container">\n        <canvas id="canvas" width="320" height="480"></canvas>\n        <div id="ctLayer"></div>\n        <video width="320" height="480" id="video" muted controls playsinline>\n          <source src="https://rmarepo.richmediaads.com/3794/custom/Ananda_World_Cup/1.0/video/win.mp4" type="video/mp4">\n          Your browser does not support the video tag.\n        </video>\n      </div>\n    '}},{key:"style",value:function(){return["\n      body {\n        margin: 0;\n      }\n    "]}},{key:"events",value:function(){var e=this;this.loadJS("https://code.createjs.com/createjs-2015.11.26.min.js").then(function(){var t=window.document.getElementById("video"),n=window.document.getElementById("canvas"),r=window.document.getElementById("ctLayer");r.addEventListener("click",function(){e.linkOpener("https://www.ananda.com.mm/?utm_source=AdsMy_Display&utm_medium=Banner&utm_campaign=World_Cup_Top_Up&utm_content=Rich_Media"),e.tracker("CTR","link"),t.pause(),r.style.display="none"}),t.onplay=function(){r.style.display="block"};for(var a=["iphone","ipod","ipad"],i=!1,o=0;o<a.length;o+=1)window.navigator.userAgent.toLowerCase().indexOf(a[o])>-1&&(i=!0);i||(t.muted=!1),window.game.init(),window.game.win=function(){n.style.display="none",t.style.display="block",r.style.display="block",t.play(),window.ad.tracker("E","play")}})}}]),t}(c.default);window.ad=new d,window.addEventListener("message",function(e){"closeExpandable"==e.data.auth.type&&window.document.getElementById("video").pause()},!1)},function(e,t,n){t=e.exports=n(4)(!1),t.push([e.i,"#ad-container,#canvas,#rma-widget,#video{width:320px;height:480px}#video{z-index:1}#ctLayer,#video{display:none;position:absolute;top:0;left:0}#ctLayer{z-index:10;width:320px;height:480px}",""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),a={json:(0,r.getParameterByName)("json"),custTracker:(0,r.getParameterByName)("custTracker"),fet:(0,r.getParameterByName)("fet"),ct:(0,r.getParameterByName)("ct"),cte:(0,r.getParameterByName)("cte"),tags:(0,r.getParameterByName)("tags"),pgId:(0,r.getParameterByName)("pgId"),preview:(0,r.getParameterByName)("preview"),md5:(0,r.getParameterByName)("md5")};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){var n=e,r=0;n.style.display=t||window.getComputedStyle(n,null).getPropertyValue("display")||"block",n.style.opacity=0,n.style.filter="";var a=+new Date,i=void 0;!function e(){r+=(new Date-a)/400,n.style.opacity=r,n.style.filter="alpha(opacity="+(100*r|0)+")",a=+new Date,r<1?i=window.requestAnimationFrame&&requestAnimationFrame(e)||setTimeout(e,16):(window.cancelAnimationFrame&&cancelAnimationFrame(i)||clearTimeout(i),n.style.display=t||window.getComputedStyle(n,null).getPropertyValue("display")||"block")}()},a=function(e){var t=e,n=1;t.style.opacity=1,t.style.filter="alpha(opacity="+(100*n|1)+")";var r=+new Date,a=void 0;!function e(){n-=(new Date-r)/400,t.style.opacity=n,t.style.filter="alpha(opacity="+(100*n|0)+")",r=+new Date,n<=0?(window.cancelAnimationFrame&&cancelAnimationFrame(a)||clearTimeout(a),t.style.display="none"):a=window.requestAnimationFrame&&requestAnimationFrame(e)||setTimeout(e,16)}()},i=function(e,t,n){a(e),r(t,n.display)};t.default=null,t.fadeIn=r,t.fadeOut=a,t.fadeOutIn=i},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),o=function(e){return e&&e.__esModule?e:{default:e}}(i),s=function(){function e(){var t=this;if(r(this,e),this.body=document.getElementsByTagName("body")[0],this.head=document.getElementsByTagName("head")[0],this.googleApiKey="AIzaSyCFHn5MNIYN-lGyTDTUYRAJM2fEKvHm-nE",this.path=void 0!==window.rma?window.rma.customize.src||"":"",!o.default.json&&window.rma&&window.rma.customize&&window.rma.customize.json&&0!==Object.keys(window.rma.customize.json).length?this.json=window.rma.customize.json:o.default.json&&0!==Object.keys(o.default.json).length?this.json=o.default.json:this.json=this.resolve("./data.json"),this.fetTracked=!1,!o.default.fet&&window.rma?this.fet="string"==typeof window.rma.fet?[window.rma.fet]:window.rma.fet:o.default.fet?this.fet="string"==typeof o.default.fet?[o.default.fet]:o.default.fet:this.fet=[],!o.default.custTracker&&window.rma?this.custTracker=window.rma.customize.custTracker:o.default.custTracker?this.custTracker=o.default.custTracker:this.custTracker=[],!o.default.ct&&window.rma?this.ct="string"==typeof window.rma.ct?[window.rma.ct]:window.rma.ct:o.default.ct?this.ct="string"==typeof o.default.ct?[o.default.ct]:o.default.ct:this.ct=[],!o.default.cte&&window.rma?this.cte="string"==typeof window.rma.cte?[window.rma.cte]:window.rma.cte:o.default.cte?this.cte="string"==typeof o.default.cte?[o.default.cte]:o.default.cte:this.cte=[],o.default.pgId&&void 0!==o.default.pgId&&"undefined"!==o.default.pgId)this.pgId=o.default.pgId;else{var n=function(e){var t=(Math.random().toString(16)+"000000000").substr(2,8);return e?"-"+t.substr(0,4)+"-"+t.substr(4,4):t};this.pgId=""+n()+n(!0)+n(!0)+n()}!o.default.tags&&window.rma?(this.leadTags=this.leadTagsProcess(window.rma.tags),this.tags=this.processTags(window.rma.tags)):o.default.tags?(this.leadTags=this.leadTagsProcess(o.default.tags),this.tags=this.processTags(o.default.tags)):(this.leadTags="",this.tags=""),this.id=this.generateUniqueId(),this.tracked=[],this.trackedEngagementType=[],this.engagementTypeExclude=[],this.firstEngagementTracked=!1,this.content=document.getElementById("rma-widget");for(var a=0;a<this.custTracker.length;a+=1)-1!==this.custTracker[a].indexOf("{2}")&&(this.custTracker[a]=this.custTracker[a].replace("{2}","{{type}}"));this.elems={};var i=function(){"string"!=typeof t.json||0!==t.json.indexOf("./")&&0!==t.json.indexOf("https://")&&0!==t.json.indexOf("http://")?(o.default.json&&(t.userId=o.default.json.userId,t.studioId=o.default.json.id,t.data=o.default.json,t.leadData={leadGenEle:o.default.json.leadGenEle}),t.loadAd()):t.loadJS(t.json).then(function(){json_data&&(t.userId=json_data.userId,t.studioId=json_data.id,t.data=json_data,t.leadData={leadGenEle:json_data.leadGenEle}),t.loadAd()})};o.default.preview?window.addEventListener("message",function(e){var n=e.data.data;void 0!==e.data.auth&&"preview"===e.data.auth&&(t.data=n.data,t.leadData=n.leadgen,t.userId=n.userId,t.studioId=n.studioId,setTimeout(function(){t.loadAd()},1))}):o.default.md5&&"undefined"!==o.default.md5&&void 0!==o.default.md5?this.loadJS("https://cdn.richmediaads.com/studio-full/"+o.default.md5+".json?pgId"+this.pgId).then(function(){try{t.userId=data_studiofull.userId,t.studioId=data_studiofull.id,t.data=data_studiofull.tab1.componentContent[34].data.raw.property,t.leadData=data_studiofull.tab1.componentContent[34].data.raw.leadgen,t.loadAd()}catch(e){i()}}):i()}return a(e,[{key:"loadAd",value:function(){var e=this,t=new MutationObserver(function(n){n.forEach(function(n){n.target===e.content&&(e.content.querySelectorAll("*").forEach(function(t){t.id&&(e.elems[t.id]=t)}),e.postRender&&e.postRender(),e.events(),t.disconnect())})}),n={childList:!0};t.observe(this.content,n),this.content.innerHTML=this.render().replace(/src="/g,'src="'+this.path),this.loadCSS("body{padding:0;margin:0;}");var r=this.style();"string"==typeof r?this.loadCSS(r):r.forEach(function(t){return e.loadCSS(t)})}},{key:"resolve",value:function(e){return this.path?this.path+e:e}},{key:"generateUniqueId",value:function(){return+new Date}},{key:"processTags",value:function(e){var t=e||this.tags,n="";return Object.keys(t).forEach(function(e){t[e]&&(t[e]=encodeURIComponent(t[e]),n+="&"+e+"="+t[e])}),n}},{key:"leadTagsProcess",value:function(e){var t="";return Object.keys(e).forEach(function(n){e[n]&&(t+=e[n]+",")}),t.slice(0,-1)}},{key:"linkOpener",value:function(e){var t=e;void 0!==t&&""!==t&&(void 0!==this.ct&&""!==this.ct&&0!==this.ct.length&&(t=this.ct+encodeURIComponent(t),this.url=t),"undefined"!=typeof mraid?mraid.open(t):window.open(t),void 0!==this.cte&&""!==this.cte&&this.imageTracker(this.cte))}},{key:"tracker",value:function(e,t,n,r){var a=this,i=t.name||n||t,o=r;if("E"===e&&!this.fetTracked&&this.fet){for(var s=0;s<this.fet.length;s+=1){var c=document.createElement("img");c.src=decodeURIComponent(this.fet[s]),c.style.display="none",this.body.appendChild(c)}this.fetTracked=!0}if(void 0!==this.custTracker&&""!==this.custTracker&&-1===this.tracked.indexOf(i))for(var d=0;d<this.custTracker.length;d+=1)if(0===d||!t.exclude){var u=document.createElement("img");void 0===o&&(o="");var l=this.custTracker[d].replace("{{rmatype}}",t.name||t);l=l.replace("{{rmavalue}}",o),-1!==this.trackedEngagementType.indexOf(e)||-1!==this.engagementTypeExclude.indexOf(e)?l=l.replace("tt={{rmatt}}",""):(l=l.replace("{{rmatt}}",e),this.trackedEngagementType.push(e)),this.firstEngagementTracked||"E"!==e||"tilt_landscape"===t||(l+="&ty=E",this.firstEngagementTracked=!0),"yt_play"==t?l+="&tv=VP":"yt_play_100"==t&&(l+="&tv=VC"),Object.keys(this.tags).map(function(e){return a.tags[e]}),u.src=l+this.tags+"&"+this.id,u.style.display="none",this.body.appendChild(u),this.tracked.push(i)}}},{key:"imageTracker",value:function(e){for(var t=0;t<e.length;t+=1){var n=document.createElement("img");n.src=e[t],n.style.display="none",this.body.appendChild(n)}}},{key:"loadJS",value:function(e){var t=this;return new Promise(function(n,r){try{var a=document.createElement("script");a.src=e,t.head.appendChild(a),a.onload=function(){n(!0)}}catch(e){r(e)}})}},{key:"generateShortUrl",value:function(e){var t=this;return new Promise(function(n,r){if(t.shortUrl)n(JSON.stringify({id:t.shortUrl}));else try{var a=new XMLHttpRequest;a.open("POST","https://www.googleapis.com/urlshortener/v1/url?key="+t.googleApiKey),a.setRequestHeader("content-type","application/json"),a.onreadystatechange=function(){4===a.readyState&&200===a.status&&n(a.responseText)},a.send(JSON.stringify({longUrl:e}))}catch(e){r(e)}})}},{key:"loadCSS",value:function(e){var t=this;return new Promise(function(n,r){try{if(0===e.indexOf("http")){var a=document.createElement("link");a.href=e,a.setAttribute("type","text/css"),a.setAttribute("rel","stylesheet"),t.head.appendChild(a)}else{var i=e.replace(/(<br>)|(\n)|(      )/gm,""),o=document.createElement("style");o.innerText=i,t.head.appendChild(o)}n(!0)}catch(e){r(e)}})}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){var n=t,r=e;n||(n=window.location.href),r=r.replace(/[[\]]/g,"\\$&");var a=new RegExp("[?&]"+r+"(=([^&#]*)|&|#|$)"),i=a.exec(n);if(!i)return null;if(!i[2])return"";try{return JSON.parse(decodeURIComponent(i[2].replace(/\+/g," ")))}catch(e){return decodeURIComponent(i[2].replace(/\+/g," "))}};t.default=null,t.getParameterByName=r},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=h[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(u(r.parts[i],t))}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(u(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:o}}}}function a(e,t){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],o=t.base?i[0]+t.base:i[0],s=i[1],c=i[2],d=i[3],u={css:s,media:c,sourceMap:d};r[o]?r[o].parts.push(u):n.push(r[o]={id:o,parts:[u]})}return n}function i(e,t){var n=y(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",d(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",d(t,e.attrs),i(e,t),t}function d(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,r,a,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var d=g++;n=v||(v=s(t)),r=l.bind(null,n,d,!1),a=l.bind(null,n,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n,t),a=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),a=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}function l(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,a=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||i)&&(r=b(r)),a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),y=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),v=null,g=0,w=[],b=n(10);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=a(e,t);return r(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var s=n[o],c=h[s.id];c.refs--,i.push(c)}e&&r(a(e,t),t);for(var o=0;o<i.length;o++){var c=i[o];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete h[c.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a))return e;var i;return i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);
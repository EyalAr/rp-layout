!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.RPLayout=e():t.RPLayout=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),o=i(r);n(18),n(22),t.exports=o["default"]},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(2),a=i(u),s=n(9),l=i(s),f=n(11),c=i(f),h=n(12),d=i(h),p=n(14),v=i(p),g=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?.5:arguments[0],n=arguments.length<=1||void 0===arguments[1]?d["default"].MODE_HORIZONTAL:arguments[1];r(this,t);var i=(0,c["default"])("div");(0,l["default"])(i,d["default"].CONTAINER_CLASS),(0,a["default"])(i,"position","relative"),this.container=i,this.els={},this.autoUpdate=!0,this.pair=new v["default"](null,this,e,n),this.pair.addToDom()}return o(t,[{key:"getPair",value:function(){return this.pair}},{key:"update",value:function(){var t=this;this.pair.engine.getLayout().forEach(function(e){var n=e.id,i=e.x,r=e.y,o=e.width,u=e.height;(0,a["default"])(t.els[n],{top:100*r+"%",left:100*i+"%",width:100*o+"%",height:100*u+"%"})})}},{key:"getNestedPanels",value:function(){var t=this,e=this.pair.engine.toJSON(),n=function i(e){"string"==typeof e.A?e.A=t.els[e.A]:i(e.A),"string"==typeof e.B?e.B=t.els[e.B]:i(e.B)};return n(e),e}}]),t}();Object.assign(g,d["default"]),e["default"]=g},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=i(r);e["default"]=o["default"]},function(t,e,n){function i(t,e,n){var i=l[e];if("undefined"==typeof i&&(i=o(e)),i){if(void 0===n)return t.style[i];t.style[i]=f(i,n)}}function r(t,e){for(var n in e)e.hasOwnProperty(n)&&i(t,n,e[n])}function o(t){var e=s(t),n=a(e);return l[e]=l[t]=l[n]=n,n}function u(){2===arguments.length?"string"==typeof arguments[1]?arguments[0].style.cssText=arguments[1]:r(arguments[0],arguments[1]):i(arguments[0],arguments[1],arguments[2])}var a=n(4),s=n(5),l={"float":"cssFloat"},f=n(8);t.exports=u,t.exports.set=u,t.exports.get=function(t,e){return Array.isArray(e)?e.reduce(function(e,n){return e[n]=i(t,n||""),e},{}):i(t,e||"")}},function(t,e){var n=null,i=["Webkit","Moz","O","ms"];t.exports=function(t){n||(n=document.createElement("div"));var e=n.style;if(t in e)return t;for(var r=t.charAt(0).toUpperCase()+t.slice(1),o=i.length;o>=0;o--){var u=i[o]+r;if(u in e)return u}return!1}},function(t,e,n){function i(t){return r(t).replace(/\s(\w)/g,function(t,e){return e.toUpperCase()})}var r=n(6);t.exports=i},function(t,e,n){function i(t){return r(t).replace(/[\W_]+(.|$)/g,function(t,e){return e?" "+e:""}).trim()}var r=n(7);t.exports=i},function(t,e){function n(t){return o.test(t)?t.toLowerCase():u.test(t)?(i(t)||t).toLowerCase():a.test(t)?r(t).toLowerCase():t.toLowerCase()}function i(t){return t.replace(s,function(t,e){return e?" "+e:""})}function r(t){return t.replace(l,function(t,e,n){return e+" "+n.toLowerCase().split("").join(" ")})}t.exports=n;var o=/\s/,u=/[\W_]/,a=/([a-z][A-Z]|[A-Z][a-z])/,s=/[\W_]+(.|$)/g,l=/(.)([A-Z]+)/g},function(t,e){var n={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};t.exports=function(t,e){return"number"!=typeof e||n[t]?e:e+"px"}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),o=i(r);e["default"]=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return(0,o["default"])(t).add(n.join(" "))}},function(t,e){function n(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1}function i(t){if(!(this instanceof i))return new i(t);t||(t={}),t.nodeType&&(t={el:t}),this.opts=t,this.el=t.el||document.body,"object"!=typeof this.el&&(this.el=document.querySelector(this.el))}t.exports=function(t){return new i(t)},i.prototype.add=function(t){var e=this.el;if(e){if(""===e.className)return e.className=t;var i=e.className.split(" ");return n(i,t)>-1?i:(i.push(t),e.className=i.join(" "),i)}},i.prototype.remove=function(t){var e=this.el;if(e&&""!==e.className){var i=e.className.split(" "),r=n(i,t);return r>-1&&i.splice(r,1),e.className=i.join(" "),i}},i.prototype.has=function(t){var e=this.el;if(e){var i=e.className.split(" ");return n(i,t)>-1}},i.prototype.toggle=function(t){var e=this.el;e&&(this.has(t)?this.remove(t):this.add(t))}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){return document.createElement(t)}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(13),o=i(r);e["default"]={MODE_HORIZONTAL:0,MODE_VERTICAL:1,BEZIER_LINEAR:(0,o["default"])(0,0,1,1),BEZIER_EASE:(0,o["default"])(.25,.1,.25,1),BEZIER_EASE_IN:(0,o["default"])(.42,0,1,1),BEZIER_EASE_OUT:(0,o["default"])(0,0,.58,1),BEZIER_EASE_IN_OUT:(0,o["default"])(.42,0,.58,1),BEZIER_ACCELERATE:(0,o["default"])(0,0,1,0),CONTAINER_CLASS:"rpl-container"}},function(t,e){"use strict";function n(t,e){return 1-3*e+3*t}function i(t,e){return 3*e-6*t}function r(t){return 3*t}function o(t,e,o){return((n(e,o)*t+i(e,o))*t+r(e))*t}function u(t,e,o){return 3*n(e,o)*t*t+2*i(e,o)*t+r(e)}function a(t,e,n,i,r){var u,a,s=0;do a=e+(n-e)/2,u=o(a,i,r)-t,u>0?n=a:e=a;while(Math.abs(u)>c&&++s<h);return a}function s(t,e,n,i){for(var r=0;r<l;++r){var a=u(e,n,i);if(0===a)return e;var s=o(e,n,i)-t;e-=s/a}return e}var l=4,f=.001,c=1e-7,h=10,d=11,p=1/(d-1),v="function"==typeof Float32Array;t.exports=function(t,e,n,i){function r(e){for(var i=0,r=1,o=d-1;r!==o&&l[r]<=e;++r)i+=p;--r;var c=(e-l[r])/(l[r+1]-l[r]),h=i+c*p,v=u(h,t,n);return v>=f?s(e,h,t,n):0===v?h:a(e,i,i+p,t,n)}if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");var l=v?new Float32Array(d):new Array(d);if(t!==e||n!==i)for(var c=0;c<d;++c)l[c]=o(c*p,t,n);return function(u){return t===e&&n===i?u:0===u?0:1===u?1:o(r(u),e,i)}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(2),a=i(u),s=n(9),l=i(s),f=n(11),c=i(f),h=n(15),d=i(h),p=n(16),v=i(p),g=n(12),y=i(g),m=n(17),A=i(m),w=function(){function t(e,n,i,o){r(this,t),this.A=(0,c["default"])("div"),this.B=(0,c["default"])("div"),this.horizontal=o===y["default"].MODE_HORIZONTAL,this.engine=new A["default"](e?e.engine:null,i,o),this.domManager=n,(0,a["default"])(this.A,"position","absolute"),(0,a["default"])(this.B,"position","absolute"),(0,l["default"])(this.A,"rpl-panel-A"),(0,l["default"])(this.B,"rpl-panel-B")}return o(t,[{key:"addToDom",value:function(){this.domManager.els[this.engine.A]=this.A,this.domManager.els[this.engine.B]=this.B,(0,d["default"])(this.domManager.container,this.A),(0,d["default"])(this.domManager.container,this.B)}},{key:"split",value:function(e,n,i){var r=e?"A":"B",o=this.domManager,u=this.engine;(0,v["default"])(o.container,this[r]),delete o.els[u[r]];var a=new t(this,o,n,i);return u[r]=a.engine,this[r]=a,a.addToDom(),o.autoUpdate&&o.update(),a}},{key:"splitA",value:function(t,e){return this.split(!0,t,e)}},{key:"splitB",value:function(t,e){return this.split(!1,t,e)}},{key:"splitLeft",value:function(t,e){if(this.horizontal)return this.splitA(t,e);throw Error("pair is not horizontal")}},{key:"splitRight",value:function(t,e){if(this.horizontal)return this.splitB(t,e);throw Error("pair is not horizontal")}},{key:"splitTop",value:function(t,e){if(this.horizontal)throw Error("pair is not horizontal");return this.splitA(t,e)}},{key:"splitBottom",value:function(t,e){if(this.horizontal)throw Error("pair is not horizontal");return this.splitB(t,e)}},{key:"vSplitLeft",value:function(t){return this.splitLeft(t,y["default"].MODE_VERTICAL)}},{key:"vSplitRight",value:function(t){return this.splitRight(t,y["default"].MODE_VERTICAL)}},{key:"vSplitTop",value:function(t){return this.splitTop(t,y["default"].MODE_VERTICAL)}},{key:"vSplitBottom",value:function(t){return this.splitBottom(t,y["default"].MODE_VERTICAL)}},{key:"hSplitLeft",value:function(t){return this.splitLeft(t,y["default"].MODE_HORIZONTAL)}},{key:"hSplitRight",value:function(t){return this.splitRight(t,y["default"].MODE_HORIZONTAL)}},{key:"hSplitTop",value:function(t){return this.splitTop(t,y["default"].MODE_HORIZONTAL)}},{key:"hSplitBottom",value:function(t){return this.splitBottom(t,y["default"].MODE_HORIZONTAL)}},{key:"setRatio",value:function(t){this.engine.setRatio(t),this.domManager.autoUpdate&&this.domManager.update()}},{key:"setMode",value:function(t){this.engine.setMode(t),this.horizontal=t===y["default"].MODE_HORIZONTAL,this.domManager.autoUpdate&&this.domManager.update()}},{key:"left",get:function(){return this.horizontal?this.A:void 0}},{key:"right",get:function(){return this.horizontal?this.B:void 0}},{key:"top",get:function(){return this.horizontal?void 0:this.A}},{key:"bottom",get:function(){return this.horizontal?void 0:this.B}}]),t}();Object.assign(w,y["default"]),e["default"]=w},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.forEach(function(e){return t.appendChild(e)})}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.forEach(function(e){return t.removeChild(e)})}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){return t.map(function(t){var n=t.id,i=t.x,r=t.y,o=t.width,u=t.height;return o*=e.width,u*=e.height,i*=e.width,r*=e.height,i+=e.x,r+=e.y,{id:n,x:i,y:r,width:o,height:u}})}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(12),s=i(a),l=function(){return Math.random().toString(36).substr(2)},f=function(){function t(e){var n=arguments.length<=1||void 0===arguments[1]?.5:arguments[1],i=arguments.length<=2||void 0===arguments[2]?s["default"].MODE_HORIZONTAL:arguments[2];r(this,t),this.horizontal=i===s["default"].MODE_HORIZONTAL,this.ratio=n,this.parent=e,this.A=l(),this.B=l()}return u(t,[{key:"setRatio",value:function(t){if(t<0||t>1)throw new Error("ratio must be between 0 and 1");this.ratio=t}},{key:"setMode",value:function(t){this.horizontal=t===s["default"].MODE_HORIZONTAL}},{key:"getAbsoluteWidth",value:function(){return this.parent?this.parent.horizontal?this.parent.getAbsoluteWidth()*(this.parent.A===this?this.parent.ratio:1-this.parent.ratio):this.parent.getAbsoluteWidth():1}},{key:"getAbsoluteHeight",value:function(){return this.parent?this.parent.horizontal?this.parent.getAbsoluteHeight():this.parent.getAbsoluteHeight()*(this.parent.A===this?this.parent.ratio:1-this.parent.ratio):1}},{key:"getAbsoluteLeft",value:function(){return this.parent?this.parent.horizontal?this.parent.getAbsoluteLeft()+(this.parent.A===this?0:this.parent.ratio*this.parent.getAbsoluteWidth()):this.parent.getAbsoluteLeft():0}},{key:"getAbsoluteTop",value:function(){return this.parent?this.parent.horizontal?this.parent.getAbsoluteTop():this.parent.getAbsoluteTop()+(this.parent.A===this?0:this.parent.ratio*this.parent.getAbsoluteHeight()):0}},{key:"getLayout",value:function(){var e={x:0,y:0,width:this.horizontal?this.ratio:1,height:this.horizontal?1:this.ratio},n={x:this.horizontal?this.ratio:0,y:this.horizontal?0:this.ratio,width:this.horizontal?1-this.ratio:1,height:this.horizontal?1:1-this.ratio},i=[];return this.A instanceof t?i.push.apply(i,o(this.A.getLayout(),e)):(e.id=this.A,i.push(e)),this.B instanceof t?i.push.apply(i,o(this.B.getLayout(),n)):(n.id=this.B,i.push(n)),i}},{key:"toJSON",value:function(){return{mode:this.horizontal?s["default"].MODE_HORIZONTAL:s["default"].MODE_VERTICAL,ratio:this.ratio,A:this.A instanceof t?this.A.toJSON():this.A,B:this.B instanceof t?this.B.toJSON():this.B}}}],[{key:"fromJSON",value:function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1],i=new t(n,e.ratio,e.mode);return i.A="string"==typeof e.A?e.A:t.fromJSON(e.A,i),i.B="string"==typeof e.B?e.B:t.fromJSON(e.B,i),i}}]),t}();Object.assign(f,s["default"]),e["default"]=f},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(19),o=i(r),u=n(12),a=i(u),s=n(14),l=i(s),f=function(){};l["default"].prototype.animate=function(t,e){function n(){o["default"].cancel(c),s.autoUpdate=l,r(d)}var i=this,r=arguments.length<=2||void 0===arguments[2]?f:arguments[2],u=arguments.length<=3||void 0===arguments[3]?a["default"].BEZIER_LINEAR:arguments[3],s=this.domManager,l=s.autoUpdate;s.autoUpdate=!0;var c,h=e,d=0,p=Date.now(),v=this.engine.ratio,g=t-v,y=function m(){var r=Date.now()-p;p+=r,h-=r,d+=r;var a=h<=0?t:v+u(d/e)*g;i.setRatio(a),h>0?c=(0,o["default"])(m):n()};return c=(0,o["default"])(y),n}},function(t,e,n){(function(e){for(var i=n(20),r="undefined"==typeof window?e:window,o=["moz","webkit"],u="AnimationFrame",a=r["request"+u],s=r["cancel"+u]||r["cancelRequest"+u],l=0;!a&&l<o.length;l++)a=r[o[l]+"Request"+u],s=r[o[l]+"Cancel"+u]||r[o[l]+"CancelRequest"+u];if(!a||!s){var f=0,c=0,h=[],d=1e3/60;a=function(t){if(0===h.length){var e=i(),n=Math.max(0,d-(e-f));f=n+e,setTimeout(function(){var t=h.slice(0);h.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(f)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return h.push({handle:++c,callback:t,cancelled:!1}),c},s=function(t){for(var e=0;e<h.length;e++)h[e].handle===t&&(h[e].cancelled=!0)}}t.exports=function(t){return a.call(r,t)},t.exports.cancel=function(){s.apply(r,arguments)},t.exports.polyfill=function(){r.requestAnimationFrame=a,r.cancelAnimationFrame=s}}).call(e,function(){return this}())},function(t,e,n){(function(e){(function(){var n,i,r;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-r)/1e6},i=e.hrtime,n=function(){var t;return t=i(),1e9*t[0]+t[1]},r=n()):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(e,n(21))},function(t,e){function n(t){if(s===setTimeout)return setTimeout(t,0);try{return s(t,0)}catch(e){try{return s.call(null,t,0)}catch(e){return s.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function r(){d&&c&&(d=!1,c.length?h=c.concat(h):p=-1,h.length&&o())}function o(){if(!d){var t=n(r);d=!0;for(var e=h.length;e;){for(c=h,h=[];++p<e;)c&&c[p].run();p=-1,e=h.length}c=null,d=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function a(){}var s,l,f=t.exports={};!function(){try{s=setTimeout}catch(t){s=function(){throw new Error("setTimeout is not defined")}}try{l=clearTimeout}catch(t){l=function(){throw new Error("clearTimeout is not defined")}}}();var c,h=[],d=!1,p=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];h.push(new u(t,e)),1!==h.length||d||n(o)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=a,f.addListener=a,f.once=a,f.off=a,f.removeListener=a,f.removeAllListeners=a,f.emit=a,f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(14),o=i(r),u=function(){return!0};o["default"].prototype.clickAndResize=function(t){var e=this,n=arguments.length<=1||void 0===arguments[1]?u:arguments[1],i=this.domManager,r=i.autoUpdate;t.addEventListener("mousedown",function(t){i.autoUpdate=!0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",function(t){i.autoUpdate=r,window.removeEventListener("mousemove",o)})});var o=function(t){var i=e.horizontal?t.clientX:t.clientY,r=e.domManager.container.getBoundingClientRect(),o=e.engine[e.horizontal?"getAbsoluteLeft":"getAbsoluteTop"]()*r[e.horizontal?"width":"height"]+r[e.horizontal?"left":"top"],u=e.engine[e.horizontal?"getAbsoluteWidth":"getAbsoluteHeight"]()*r[e.horizontal?"width":"height"],a=(i-o)/u;a<0&&(a=0),a>1&&(a=1),n(a)&&e.setRatio(a)}}}])});
//# sourceMappingURL=index.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){return o(r)||n(r)||t(r)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(r,e){if(r){if("string"==typeof r)return a(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(r,e):void 0}}function n(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function o(r){if(Array.isArray(r))return a(r)}function a(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var c=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],i=0,s=4,u=2048,f=document.querySelector(".button"),l=document.querySelectorAll(".field-cell"),d=document.querySelector(".game-score"),v=document.querySelector(".message-start"),m=document.querySelector(".message-lose"),y=document.querySelector(".message-win");function h(){for(var r=[],e=0;e<s;e++)for(var t=0;t<s;t++)c[e][t]||r.push({row:e,col:t});if(r.length>0){var n=r[Math.floor(Math.random()*r.length)],o=n.row,a=n.col;c[o][a]=Math.random()<.9?2:4}}function b(){for(var r=0;r<s;r++)for(var e=0;e<s;e++){var t=c[r][e],n=l[r*s+e];n.innerHTML=0===t?"":t,n.className="field-cell ".concat(0!==t?"field-cell--".concat(t):"")}d.innerHTML=i}function g(r){return r.filter(function(r){return 0!==r})}function L(r){var e=r;e=g(e);for(var t=0;t<e.length;t++)e[t]===e[t+1]&&(e[t]*=2,e[t+1]=0,i+=e[t]),e[t]===u&&y.classList.remove("hidden");for(e=g(e);e.length<s;)e.push(0);return e}function w(r,e){return JSON.stringify(r)===JSON.stringify(e)}function p(){for(var e=!1,t=0;t<s;t++){var n=c[t],o=r(n);n=L(n),c[t]=n,e||w(o,n)||(e=!0)}return e}function S(){for(var e=!1,t=0;t<s;t++){var n=c[t],o=r(n);n.reverse(),(n=L(n)).reverse(),c[t]=n,e||w(o,n)||(e=!0)}return e}function A(){for(var e=!1,t=0;t<s;t++){var n=[c[0][t],c[1][t],c[2][t],c[3][t]],o=r(n);n=L(n);for(var a=0;a<s;a++)c[a][t]=n[a];e||w(o,n)||(e=!0)}return e}function M(){for(var e=!1,t=0;t<s;t++){var n=[c[0][t],c[1][t],c[2][t],c[3][t]],o=r(n);n.reverse(),(n=L(n)).reverse();for(var a=0;a<s;a++)c[a][t]=n[a];e||w(o,n)||(e=!0)}return e}function q(){for(var r=0;r<s;r++)for(var e=0;e<s;e++){if(0===c[r][e])return!1;if(e<s-1&&c[r][e]===c[r][e+1]||r<s-1&&c[r][e]===c[r+1][e])return!1}return!0}function k(){document.body.style.overflow="hidden"}function O(){document.body.style.overflow="auto"}f.addEventListener("click",function(){f.classList.contains("start")?(f.classList.remove("start"),f.classList.add("restart"),f.innerHTML="Restart",v.classList.add("hidden"),k(),h(),h(),b()):f.classList.contains("restart")&&(y.classList.add("hidden"),m.classList.add("hidden"),c=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],i=0,k(),h(),h(),b())}),document.addEventListener("keyup",function(r){var e=!1;switch(r.code){case"ArrowRight":e=S();break;case"ArrowLeft":e=p();break;case"ArrowUp":e=A();break;case"ArrowDown":e=M()}e&&(h(),b(),q()&&(m.classList.remove("hidden"),O()))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.cbad745b.js.map
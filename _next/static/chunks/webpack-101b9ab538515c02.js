!function(){"use strict";var e,t,n,r,c,o,f,u,i,a={},d={};function b(e){var t=d[e];if(void 0!==t)return t.exports;var n=d[e]={id:e,loaded:!1,exports:{}},r=!0;try{a[e].call(n.exports,n,n.exports,b),r=!1}finally{r&&delete d[e]}return n.loaded=!0,n.exports}b.m=a,b.amdO={},e=[],b.O=function(t,n,r,c){if(n){c=c||0;for(var o=e.length;o>0&&e[o-1][2]>c;o--)e[o]=e[o-1];e[o]=[n,r,c];return}for(var f=1/0,o=0;o<e.length;o++){for(var n=e[o][0],r=e[o][1],c=e[o][2],u=!0,i=0;i<n.length;i++)f>=c&&Object.keys(b.O).every(function(e){return b.O[e](n[i])})?n.splice(i--,1):(u=!1,c<f&&(f=c));if(u){e.splice(o--,1);var a=r();void 0!==a&&(t=a)}}return t},b.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return b.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},b.t=function(e,r){if(1&r&&(e=this(e)),8&r||"object"==typeof e&&e&&(4&r&&e.__esModule||16&r&&"function"==typeof e.then))return e;var c=Object.create(null);b.r(c);var o={};t=t||[null,n({}),n([]),n(n)];for(var f=2&r&&e;"object"==typeof f&&!~t.indexOf(f);f=n(f))Object.getOwnPropertyNames(f).forEach(function(t){o[t]=function(){return e[t]}});return o.default=function(){return e},b.d(c,o),c},b.d=function(e,t){for(var n in t)b.o(t,n)&&!b.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},b.f={},b.e=function(e){return Promise.all(Object.keys(b.f).reduce(function(t,n){return b.f[n](e,t),t},[]))},b.u=function(e){return 8764===e?"static/chunks/8764-5fc3bc28d2e57d89.js":"static/chunks/"+(9510===e?"ad24f9cf":e)+"."+({119:"8a93228e7a3e4b56",430:"67aa5148e32fa43b",1022:"258ea1f6a3207145",1102:"633646e880d86f8d",1331:"57feaee4bc2ec6c8",1391:"2022fec3a8e12ef0",2112:"6a0eb92bc8541882",2738:"c47358dd9bb48e09",2895:"a48ca0d48758e34e",3033:"d56076c2fd61958a",3354:"6e81a52aff3e9fe5",3376:"f39554f5fecd9dd2",3521:"67340785a26e534f",4726:"bee0a88a8d1ac927",5373:"44b7722ec2d73c30",5529:"9a7698688176863e",5625:"708a320ab2179abd",5764:"06fa30bd98b84d38",5811:"76aaea80d45c3c82",5883:"e4477e9126daa625",6118:"a933bff88a09cadc",6370:"7acfa153e9b02369",6704:"ceb44295591c335c",6939:"b3f8981c9e601b71",7096:"5432dc37729227a5",7185:"a74436f7a110637f",7564:"0ac65fa213a67913",7652:"f7077b85b34c80e1",8048:"6dfe3b2759b9e194",8061:"74f566713989ca63",8754:"09f7ca3c20de3edb",9088:"a34356a3add4b3e1",9146:"ffaa862ccd58a211",9343:"f7137b03b2100296",9510:"b3b51c734592b359",9552:"b0264f6b8f5d84b0",9586:"bf3d8b0101b68b09",9849:"fddccc2c10bb3730"})[e]+".js"},b.miniCssF=function(e){return"static/css/5e9271cea51f86ec.css"},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},c="_N_E:",b.l=function(e,t,n,o){if(r[e]){r[e].push(t);return}if(void 0!==n)for(var f,u,i=document.getElementsByTagName("script"),a=0;a<i.length;a++){var d=i[a];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==c+n){f=d;break}}f||(u=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,b.nc&&f.setAttribute("nonce",b.nc),f.setAttribute("data-webpack",c+n),f.src=b.tu(e)),r[e]=[t];var l=function(t,n){f.onerror=f.onload=null,clearTimeout(s);var c=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),c&&c.forEach(function(e){return e(n)}),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),u&&document.head.appendChild(f)},b.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},b.tt=function(){return void 0===o&&(o={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("nextjs#bundler",o))),o},b.tu=function(e){return b.tt().createScriptURL(e)},b.p="https://cs492-web3.github.io/votechain-dapp//_next/",f={2272:0},b.f.j=function(e,t){var n=b.o(f,e)?f[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(2272!=e){var r=new Promise(function(t,r){n=f[e]=[t,r]});t.push(n[2]=r);var c=b.p+b.u(e),o=Error();b.l(c,function(t){if(b.o(f,e)&&(0!==(n=f[e])&&(f[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",o.name="ChunkLoadError",o.type=r,o.request=c,n[1](o)}},"chunk-"+e,e)}else f[e]=0}},b.O.j=function(e){return 0===f[e]},u=function(e,t){var n,r,c=t[0],o=t[1],u=t[2],i=0;if(c.some(function(e){return 0!==f[e]})){for(n in o)b.o(o,n)&&(b.m[n]=o[n]);if(u)var a=u(b)}for(e&&e(t);i<c.length;i++)r=c[i],b.o(f,r)&&f[r]&&f[r][0](),f[r]=0;return b.O(a)},(i=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(u.bind(null,0)),i.push=u.bind(null,i.push.bind(i)),b.nc=void 0}();
(function(t){function e(e){for(var n,a,u=e[0],s=e[1],l=e[2],c=0,f=[];c<u.length;c++)a=u[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},r={app:0},i=[];function u(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-11af3b38":"68431cd1"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o={"chunk-11af3b38":1};a[t]?e.push(a[t]):0!==a[t]&&o[t]&&e.push(a[t]=new Promise((function(e,o){for(var n="css/"+({}[t]||t)+"."+{"chunk-11af3b38":"9d3d2068"}[t]+".css",r=s.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===r))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],c=l.getAttribute("data-href");if(c===n||c===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],p.parentNode.removeChild(p),o(i)},p.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=u(t);var f=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(p);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,o[1](f)}r[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("router-view")},r=[],i={name:"App"},u=i,s=o("2877"),l=Object(s["a"])(u,a,r,!1,null,null,null),c=l.exports,f=(o("d3b7"),o("8c4f"));n["a"].use(f["a"]);var p=new f["a"]({mode:"history",routes:[{path:"/",name:"Home",component:function(){return o.e("chunk-11af3b38").then(o.bind(null,"bb51"))}}]}),h=o("2f62"),d={hostname:"https://programming-quotes-api.herokuapp.com"},m=(o("c740"),o("4160"),o("c975"),o("a434"),o("159b"),o("bc3a")),g=o.n(m),b=o("d63f"),v=o.n(b),y={images:["https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2593&q=80","https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80","https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80","https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80","https://images.unsplash.com/photo-1477244075012-5cc28286e465?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80","https://images.unsplash.com/29/night-square.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2559&q=80"],liveImage:"",allQuotes:[],allStringQuotes:[],liveQuote:null,paginatedQuotes:[],pageQuoteCount:20,bestMatchVote:4,leastMatchVote:1},Q={},w={setAllQuotes:function(t,e){t.allQuotes=e,e.forEach((function(e){t.allStringQuotes.push(e.en)}))},setPaginatedQuotes:function(t,e){t.paginatedQuotes=e},setLiveQuote:function(t,e){t.liveQuote=e,t.liveImage=t.images[Math.floor(Math.random()*t.images.length)]}},x={getAllQuotes:function(t){var e=t.commit;g.a.get(O.state.endpoints.baseUrl+"/quotes").then((function(t){e("setAllQuotes",t.data)})).catch((function(t){console.log(t)}))},updateLiveQuote:function(t,e){var o=t.commit;o("setLiveQuote",e),window.scrollTo(0,0)},getPaginatedQuotes:function(t,e){var o=t.commit;g.a.get(O.state.endpoints.baseUrl+"/quotes/page/"+e).then((function(t){o("setPaginatedQuotes",t.data),o("setLiveQuote",t.data[Math.floor(Math.random()*t.data.length)])})).catch((function(t){console.log(t)}))},postQuoteNewVote:function(t,e){var o=t.commit;g.a.post(O.state.endpoints.baseUrl+"/quotes/vote",JSON.stringify(e)).then((function(t){y.allStringQuotes.splice(y.allStringQuotes.indexOf(y.liveQuote.en),1);var n=v.a.findBestMatch(y.liveQuote.en,y.allStringQuotes);if(e.newVote>=y.bestMatchVote)o("setLiveQuote",y.allQuotes[y.allQuotes.findIndex((function(t){return t.en===n.bestMatch.target}))]);else if(e.newVote<=y.leastMatchVote){var a=1,r=0;n.ratings.forEach((function(t,e){a>=n.ratings[e].rating&&(a=n.ratings[e].rating,r=e)})),o("setLiveQuote",y.allQuotes[y.allQuotes.findIndex((function(t){return t.en===n.ratings[r].target}))])}else o("setLiveQuote",y.allQuotes[Math.floor(Math.random()*y.allQuotes.length)])})).catch((function(t){console.log(t)}))}},M={state:y,mutations:w,actions:x,getters:Q};n["a"].use(h["a"]);var O=new h["a"].Store({state:{endpoints:{baseUrl:d.hostname}},mutations:{},actions:{},modules:{quotes:M}}),j=o("f309");n["a"].use(j["a"]);var E=new j["a"]({});n["a"].config.productionTip=!1;var S=o("d63f");n["a"].use(S),new n["a"]({router:p,store:O,vuetify:E,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.087c0448.js.map
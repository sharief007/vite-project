if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const f=e=>s(e,t),c={module:{uri:t},exports:o,require:f};i[t]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-21cf6f63.css",revision:null},{url:"assets/index-accfeda0.js",revision:null},{url:"index.html",revision:"d20eebcadcbc4e9dc114917d021cb41b"},{url:"registerSW.js",revision:"d74f393edc2818fef294e6f67b1234f6"},{url:"webrtc.html",revision:"dd54fd89fb4f6e3edbdbb125b204c64a"},{url:"favicon.ico",revision:"ae21a1e0976ea68fa22f1b5607a3a0a2"},{url:"icon.png",revision:"a477d0b91829165e7fc0ec6879c27651"},{url:"manifest.webmanifest",revision:"034232f493d41342dff036aea50d96d6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

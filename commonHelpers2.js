import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as o,l as a}from"./assets/vendor-ceec3c52.js";const m=document.querySelector("iframe"),e=new o(m),t="videoplayer-current-time";e.on("timeupdate",a(r=>{localStorage.setItem(t,JSON.stringify(r.seconds))},2e3));const s=localStorage.getItem(t);e.setCurrentTime(JSON.parse(s));
//# sourceMappingURL=commonHelpers2.js.map
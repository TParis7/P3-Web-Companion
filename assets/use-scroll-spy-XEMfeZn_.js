import{c as v}from"./createLucideIcon-DkVGHPr-.js";import{y as l}from"./chunk-4N6VE7H7-DPxeA9do.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],g=v("Download",f),o=140;function E(n,r){const[a,u]=l.useState(n[0]??"");return l.useEffect(()=>{if(!r||typeof window>"u")return;function e(){const t=window.innerHeight,w=document.documentElement.scrollHeight-t,i=Math.max(0,w-window.scrollY),m=i>=t?o:o+(t-o)*(1-i/t);let c=n[0]??"";for(const s of n){const d=document.getElementById(s);d&&d.getBoundingClientRect().top-m<=0&&(c=s)}u(c)}return e(),window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[r]),a}export{g as D,E as u};

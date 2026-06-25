import{c as i}from"./createLucideIcon-DkVGHPr-.js";import{u as e}from"./spinner-BzgZQMTL.js";import{N as p,W as o,V as r,p as s,x as a,G as c}from"./demo-data-I3J8DX-N.js";import{i as n}from"./demo-mode-u_CtnNs9.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],F=i("Calendar",y);async function m(t){return n()?p(t):(await o(r(s),t)).listOpportunities}function q(t){return e({queryKey:["opportunities",t],queryFn:()=>m(t)})}async function d(t){return n()?{nextToken:null,items:a()}:(await o(r(c),t)).getMe.opportunities}function x(t){return e({queryKey:["for-you-opportunities",t],queryFn:()=>d(t)})}export{F as C,q as a,x as u};

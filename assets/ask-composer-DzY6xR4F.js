import{y as l,v as t}from"./chunk-4N6VE7H7-DPxeA9do.js";import{B as p}from"./button-meqP5ZR3.js";import{u as y,T as h}from"./questions-query-DZrAYsul.js";import{a as f}from"./demo-mode-BUjsb5pu.js";import{q as i}from"./demo-data-CKB_UeE9.js";import{c as r}from"./createLucideIcon-DkVGHPr-.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],b=r("Globe",v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],k=r("Lock",g);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],N=r("ShieldCheck",j),n=[{value:i.Public,label:"Public",icon:b,note:"A vetted mentor replies with a public video — your info stays private."},{value:i.Private,label:"Ask my mentor",icon:k,note:"Goes privately to your mentor — only the two of you see it."}];function _({rows:u=3}){const[o,c]=l.useState(""),[a,d]=l.useState(i.Public),s=y(),m=n.find(e=>e.value===a)??n[0];function x(){const e=o.trim();e&&s.mutate({input:{question:e,additionalDetails:"",type:a}},{onSuccess:()=>c("")})}return t.jsxs("div",{children:[t.jsx("div",{className:"mb-3 inline-flex rounded-full border bg-secondary/60 p-0.5",children:n.map(e=>t.jsxs("button",{type:"button",onClick:()=>d(e.value),className:f("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium text-xs transition-colors",a===e.value?"bg-card text-foreground shadow-sm":"text-muted-foreground hover:text-foreground"),children:[t.jsx(e.icon,{className:"size-3.5"})," ",e.label]},e.value))}),t.jsx(h,{className:"resize-y",onChange:e=>c(e.target.value),placeholder:"What's on your mind? Ask anything about careers, college, or your next step…",rows:u,value:o}),t.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3",children:[t.jsxs("span",{className:"flex items-center gap-1.5 text-[11px] text-muted-foreground/70",children:[t.jsx(N,{className:"size-3.5 text-emerald-600/70"}),m.note]}),t.jsx(p,{disabled:!o.trim()||s.isPending,onClick:x,children:s.isPending?"Sending…":"Get a video answer"})]}),s.isError?t.jsx("p",{className:"mt-2 text-destructive text-sm",role:"alert",children:"Couldn't submit your question. Please try again."}):null]})}export{_ as A,b as G,k as L};

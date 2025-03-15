import{_ as g,h as k,i as j,j as b,k as V,c as l,l as c,a as e,b as r,u as x,w as n,f as w,r as y,o,t as u,d,F as p,e as v}from"./index-D7_-p6PJ.js";import{p as B}from"./project-BvwDoDwJ.js";import{S as a}from"./ScrollReveal-DeZ7wiLw.js";import{g as C}from"./index-Df-ynJq3.js";const H={key:0,class:"project-detail"},D={class:"hero-section"},L=["src","alt"],M={class:"hero-overlay"},N={class:"project-title"},R={class:"content-container"},A={class:"project-links"},F=["href"],I=["href"],S={class:"project-section"},P={class:"description"},T={class:"project-section"},z={class:"technologies"},E={class:"project-section"},U={class:"features-list"},Z={class:"back-button-container"},q={__name:"ProjectDetail",setup(G){const h=b(),f=V(),t=k(null);return j(()=>{const _=parseInt(h.params.id);t.value=B.find(s=>s.id===_),t.value||f.push({name:"not-found"})}),(_,s)=>{const m=y("router-link");return t.value?(o(),l("div",H,[e("div",D,[e("img",{src:x(C)(t.value.image),alt:t.value.title,class:"hero-image"},null,8,L),e("div",M,[r(a,null,{default:n(()=>[e("h1",N,u(t.value.title),1)]),_:1})])]),e("div",R,[r(a,null,{default:n(()=>[e("div",A,[t.value.github?(o(),l("a",{key:0,href:t.value.github,target:"_blank",class:"link-button github"},s[0]||(s[0]=[e("svg",{class:"icon",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1),d(" Voir le code ")]),8,F)):c("",!0),t.value.demo?(o(),l("a",{key:1,href:t.value.demo,target:"_blank",class:"link-button demo"},s[1]||(s[1]=[e("svg",{class:"icon",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"})],-1),d(" Voir la démo ")]),8,I)):c("",!0)])]),_:1}),r(a,null,{default:n(()=>[e("section",S,[s[2]||(s[2]=e("h2",null,"Description",-1)),e("p",P,u(t.value.longDescription),1)])]),_:1}),r(a,null,{default:n(()=>[e("section",T,[s[3]||(s[3]=e("h2",null,"Technologies utilisées",-1)),e("div",z,[(o(!0),l(p,null,v(t.value.technologies,i=>(o(),l("span",{key:i,class:"tech-badge"},u(i),1))),128))])])]),_:1}),t.value.features?(o(),w(a,{key:0},{default:n(()=>[e("section",E,[s[4]||(s[4]=e("h2",null,"Fonctionnalités principales",-1)),e("ul",U,[(o(!0),l(p,null,v(t.value.features,i=>(o(),l("li",{key:i},u(i),1))),128))])])]),_:1})):c("",!0)]),r(a,null,{default:n(()=>[e("div",Z,[r(m,{to:"/projects",class:"back-button"},{default:n(()=>s[5]||(s[5]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),e("polyline",{points:"12 19 5 12 12 5"})],-1),d(" Retour aux projets ")])),_:1})])]),_:1})])):c("",!0)}}},W=g(q,[["__scopeId","data-v-3b8606fc"]]);export{W as default};

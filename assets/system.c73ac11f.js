var S=Object.defineProperty,h=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var m=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))A.call(t,n)&&m(e,n,t[n]);return e},y=(e,t)=>h(e,T(t));import $ from"./BasicSetting.91608375.js";import z from"./RevealSetting.e7ca8392.js";import D from"./EmailSetting.c86cfb04.js";import{_ as R,d as V,i as w,aZ as L,I as i,o as s,g as E,a as u,q as a,M as N,a2 as I,c,z as g,a4 as B,cV as q,a5 as _,cv as J,J as M,aa as Z,ab as j}from"./index.1257e8b0.js";const x=[{name:"\u57FA\u672C\u8BBE\u7F6E",desc:"\u7CFB\u7EDF\u5E38\u89C4\u8BBE\u7F6E",key:1},{name:"\u663E\u793A\u8BBE\u7F6E",desc:"\u7CFB\u7EDF\u663E\u793A\u8BBE\u7F6E",key:2},{name:"\u90AE\u4EF6\u8BBE\u7F6E",desc:"\u7CFB\u7EDF\u90AE\u4EF6\u8BBE\u7F6E",key:3}],G=V({components:{BasicSetting:$,RevealSetting:z,EmailSetting:D},setup(){const e=w({type:1,typeTitle:"\u57FA\u672C\u8BBE\u7F6E"});function t(n){e.type=n.key,e.typeTitle=n.name}return y(d({},L(e)),{switchType:t,typeTabList:x})}});function H(e,t,n,K,O,P){const f=J,p=M,r=Z,F=i("BasicSetting"),k=i("RevealSetting"),C=i("EmailSetting"),v=j;return s(),E("div",null,[u(v,{"x-gap":24},{default:a(()=>[u(r,{span:"6"},{default:a(()=>[u(p,{bordered:!1,size:"small",class:"proCard"},{default:a(()=>[(s(!0),E(N,null,I(e.typeTabList,o=>(s(),c(f,{class:q(["thing-cell",{"thing-cell-on":e.type===o.key}]),key:o.key,onClick:Q=>e.switchType(o)},{header:a(()=>[g(B(o.name),1)]),description:a(()=>[g(B(o.desc),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1}),u(r,{span:"18"},{default:a(()=>[u(p,{bordered:!1,size:"small",title:e.typeTitle,class:"proCard"},{default:a(()=>[e.type===1?(s(),c(F,{key:0})):_("",!0),e.type===2?(s(),c(k,{key:1})):_("",!0),e.type===3?(s(),c(C,{key:2})):_("",!0)]),_:1},8,["title"])]),_:1})]),_:1})])}var te=R(G,[["render",H],["__scopeId","data-v-339bd47b"]]);export{te as default};

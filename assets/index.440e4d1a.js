var F=(t,n,u)=>new Promise((d,m)=>{var p=a=>{try{o(u.next(a))}catch(s){m(s)}},_=a=>{try{o(u.throw(a))}catch(s){m(s)}},o=a=>a.done?d(a.value):Promise.resolve(a.value).then(p,_);o((u=u.apply(t,n)).next())});import{T as B,B as w}from"./TableAction.3aeeaebf.js";import{u as x,d as I,g as N}from"./menu.6cfe7cca.js";import{L as h,eW as R,N as v,aJ as M,_ as O,d as S,r as y,i as k,u as V,o as q,c as A,q as i,J,a as c,p as l,K as $,G,z as U,aI as z}from"./index.1257e8b0.js";import L from"./CreateDrawer.3b4940de.js";import"./propTypes.c047a88a.js";import"./componentSetting.9cb0737a.js";import"./index.esm.2ecd0768.js";import"./Popconfirm.2f3d4e90.js";import"./index.a357f5ef.js";const P=[{title:"\u6743\u9650ID",key:"entId",width:400},{title:"\u6743\u9650\u540D\u79F0",key:"entName"},{title:"\u56FE\u6807",key:"menuIcon",render(t){return h(v,{component:R(t.menuIcon),size:24})}},{title:"\u8DEF\u5F84",key:"menuUri"},{title:"\u7EC4\u4EF6\u540D\u79F0",key:"componentName"},{title:"\u7C7B\u578B",key:"entType"},{title:"\u72B6\u6001",key:"state",render(t){return h(M,{onUpdateValue:n=>H(t,n),checkedValue:1,uncheckedValue:0,value:t.state},{checked(){return"\u542F\u7528"},unchecked(){return"\u7981\u7528"}})}},{title:"\u6392\u5E8F",key:"entSort"},{title:"\u4FEE\u6539\u65F6\u95F4",key:"updatedAt",width:180}];function H(t,n){t.state=n,x(t).then(()=>{window.$message.success("\u64CD\u4F5C\u6210\u529F")}).catch(u=>{console.log(u)})}const K=U(" \u65B0\u589E "),W=S({setup(t){const n=y("MGR"),u=k([{label:"\u8FD0\u8425\u5E73\u53F0",value:"MGR"},{label:"\u5546\u6237\u7CFB\u7EDF",value:"MCH"}]);let d=[];function m(){return F(this,null,function*(){const e=yield N(n.value);return d=p(JSON.parse(JSON.stringify(e))),e})}function p(e){return e?e.filter(r=>(r.children=p(r.children).length>0?p(r.children):void 0,r.entType!=="PB")):[]}const _=y();function o(){_.value&&_.value.reload()}const a=k({title:"\u64CD\u4F5C",key:"action",fixed:"right",align:"center",width:120,render(e){return h(B,{style:"button",actions:[{label:"\u4FEE\u6539",type:"primary",quaternary:!0,onClick:C.bind(null,e),ifShow:()=>!0},{label:"\u5220\u9664",type:"error",quaternary:!0,popConfirm:{title:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",confirm:T.bind(null,e)}}]})}}),s=y();function g(){s.value.init(void 0,d)}function C(e){s.value.init(e,d)}const E=V();function T(e){I(e.entId).then(()=>{E.success("\u5220\u9664\u6210\u529F"),o()})}return(e,r)=>{const b=z,D=J;return q(),A(D,null,{default:i(()=>[c(l(w),{columns:l(P),request:m,"row-key":f=>f.entId,pagination:!1,ref_key:"actionRef",ref:_,actionColumn:l(a),"scroll-x":1700},{tableTitle:i(()=>[c(l(G),{type:"primary",onClick:g},{icon:i(()=>[c(l(v),null,{default:i(()=>[c(l($))]),_:1})]),default:i(()=>[K]),_:1})]),toolbar:i(()=>[c(b,{class:"select",value:n.value,"onUpdate:value":[r[0]||(r[0]=f=>n.value=f),o],options:l(u)},null,8,["value","options"])]),_:1},8,["columns","row-key","actionColumn"]),c(L,{ref_key:"createDrawerRef",ref:s,sysType:n.value,onRefresh:o},null,8,["sysType"])]),_:1})}}});var oe=O(W,[["__scopeId","data-v-7aaf5d3d"]]);export{oe as default};

import{h as r,_ as b,d as v,i as B,u as k,bw as A,f as F,o as _,c as p,q as e,J as $,a as t,g as V,a2 as D,M as T,m as w,z as N,bZ as q,H as K,G as L,eL as M,eK as P,A as U,B as G,bY as z}from"./index.1257e8b0.js";function H(){return r.request({url:"sysConfigs/applicationConfig",method:"GET"})}function J(n){return r.request({url:"sysConfigs/applicationConfig",method:"PUT",data:n})}const S=v({name:"SysConfig",setup(){const n=B([]);function u(){n.length=0,H().then(o=>{n.push(...o)})}const c=k(),i=A();function l(){i.warning({title:"\u8B66\u544A",content:"\u786E\u8BA4\u4FEE\u6539\u5E94\u7528\u914D\u7F6E\u5417?",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{const o={};n.forEach(s=>{o[s.configKey]=s.configVal}),J(o).then(()=>{c.success("\u4FEE\u6539\u6210\u529F"),u()})}})}return F(()=>{u()}),{formArray:n,confirm:l}}}),Y={style:{"text-align":"center"}},Z=N("\u786E\u8BA4\u66F4\u65B0");function j(n,u,c,i,l,o){const s=U,f=G,m=z,g=q,d=K,y=L,h=M,E=P,C=$;return _(),p(C,null,{default:e(()=>[t(E,{type:"line",animated:""},{default:e(()=>[t(h,{tab:"\u5E94\u7528\u914D\u7F6E",style:{padding:"10px"},name:"config"},{default:e(()=>[t(d,null,{default:e(()=>[t(g,{"label-placement":"top",column:2},{default:e(()=>[(_(!0),V(T,null,D(n.formArray,a=>(_(),p(m,{key:a.configKey,label:`${a.configName}:`},{default:e(()=>[t(f,{style:{width:"90%"}},{default:e(()=>[t(s,{type:a.type==="text"?"text":"textarea",value:a.configVal,"onUpdate:value":x=>a.configVal=x},null,8,["type","value","onUpdate:value"])]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),w("div",Y,[t(y,{type:"primary",style:{"text-align":"center"},onClick:n.confirm},{default:e(()=>[Z]),_:1},8,["onClick"])])]),_:1})]),_:1})]),_:1})}var O=b(S,[["render",j]]);export{O as default};

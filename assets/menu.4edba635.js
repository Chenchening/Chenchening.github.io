var U=(T,A,c)=>new Promise((y,F)=>{var m=_=>{try{i(c.next(_))}catch(v){F(v)}},p=_=>{try{i(c.throw(_))}catch(v){F(v)}},i=_=>_.done?y(_.value):Promise.resolve(_.value).then(m,p);i((c=c.apply(T,A)).next())});import{g as ee}from"./menu.6cfe7cca.js";import{d as ue,r as o,u as te,e as ne,i as ae,f as le,o as E,g as K,m as f,a as e,q as u,p as t,X as oe,f6 as se,z as d,a4 as w,a0 as _e,c as R,aO as ie,a5 as pe,f7 as I,J as de,N as ce,G as re,a_ as fe,a9 as me,A as Fe,D as ve,eR as ge,aa as he,bx as be,B as ye,ah as De,ai as Be,H as Ce,ab as Ee}from"./index.1257e8b0.js";import Ae from"./CreateDrawer.3b4940de.js";import"./index.a357f5ef.js";const xe={class:"n-layout-page-header"},ke=d(" \u9875\u9762\u6570\u636E\u4E3A Mock \u793A\u4F8B\u6570\u636E\uFF0C\u975E\u771F\u5B9E\u6570\u636E\u3002 "),we=d(" \u6DFB\u52A0\u83DC\u5355 "),Te={class:"flex items-center"},Me={class:"flex items-center"},Oe={class:"w-full menu"},ze={class:"py-3 menu-list"},Ue={key:0,class:"flex items-center justify-center py-4"},Ke=d(" \u4ECE\u83DC\u5355\u5217\u8868\u9009\u62E9\u4E00\u9879\u540E\uFF0C\u8FDB\u884C\u7F16\u8F91"),Re=d("\u5F53\u524D\u7A97\u53E3"),Ie=d("\u65B0\u7A97\u53E3"),Ne=d("\u4FDD\u5B58\u4FEE\u6539"),Se=d("\u91CD\u7F6E"),Ge=ue({setup(T){const A={label:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"},path:{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u5F84",trigger:"blur"}},c=o(null),y=o(),F=te();let m=o([]),p=o([]);const i=o([]),_=o(!0),v=o(!1),x=o(!1),g=o(""),k=o(""),M=o(""),N=ne(()=>!m.value.length),S=o([{label:"\u6DFB\u52A0\u9876\u7EA7\u83DC\u5355",key:"home",disabled:!1},{label:"\u6DFB\u52A0\u5B50\u83DC\u5355",key:"son",disabled:N}]),l=ae({type:1,label:"",subtitle:"",path:"",auth:"",openType:1});function j(n){M.value=n==="home"?"\u6DFB\u52A0\u9876\u680F\u83DC\u5355":`\u6DFB\u52A0\u5B50\u83DC\u5355\uFF1A${g.value}`,L()}function L(){const{openDrawer:n}=y.value;n()}function V(n){if(n.length){const a=I(t(i),n[0]);m.value=n,g.value=a.label,Object.assign(l,a),x.value=!0}else x.value=!1,m.value=[],g.value=""}function q(){const n=I(t(i),m.value[0]);Object.assign(l,n)}function $(){c.value.validate(n=>{n?F.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):F.error("\u62B1\u6B49\uFF0C\u60A8\u6CA1\u6709\u8BE5\u6743\u9650")})}function G(){p.value.length?p.value=[]:p.value=t(i).map(n=>n.key)}le(()=>U(this,null,function*(){const n=yield ee("MGR"),a=n.list.map(h=>h.key);Object.assign(l,a),i.value=n.list,_.value=!1}));function H(n){p.value=n}return(n,a)=>{const h=de,D=ce,B=re,J=fe,C=me,b=Fe,P=ve,X=ge,O=he,Q=be,r=ye,z=De,W=Be,Y=Ce,Z=Ee;return E(),K("div",null,[f("div",xe,[e(h,{bordered:!1,title:"\u83DC\u5355\u6743\u9650\u7BA1\u7406"},{default:u(()=>[ke]),_:1})]),e(Z,{class:"mt-4",cols:"1 s:1 m:1 l:3 xl:3 2xl:3",responsive:"screen","x-gap":12},{default:u(()=>[e(O,{span:"1"},{default:u(()=>[e(h,{segmented:{content:!0},bordered:!1,size:"small"},{header:u(()=>[e(C,null,{default:u(()=>[e(J,{trigger:"hover",onSelect:j,options:S.value},{default:u(()=>[e(B,{type:"info",ghost:"","icon-placement":"right"},{icon:u(()=>[f("div",Te,[e(D,{size:"14"},{default:u(()=>[e(t(oe))]),_:1})])]),default:u(()=>[we]),_:1})]),_:1},8,["options"]),e(B,{type:"info",ghost:"","icon-placement":"left",onClick:G},{icon:u(()=>[f("div",Me,[e(D,{size:"14"},{default:u(()=>[e(t(se))]),_:1})])]),default:u(()=>[d(" \u5168\u90E8"+w(t(p).length?"\u6536\u8D77":"\u5C55\u5F00")+" ",1)]),_:1})]),_:1})]),default:u(()=>[f("div",Oe,[e(b,{type:"input",value:k.value,"onUpdate:value":a[0]||(a[0]=s=>k.value=s),placeholder:"\u8F93\u5165\u83DC\u5355\u540D\u79F0\u641C\u7D22"},{suffix:u(()=>[e(D,{size:"18",class:"cursor-pointer"},{default:u(()=>[e(t(_e))]),_:1})]),_:1},8,["value"]),f("div",ze,[_.value?(E(),K("div",Ue,[e(P,{size:"medium"})])):(E(),R(X,{key:1,"block-line":"",cascade:"",checkable:"","virtual-scroll":!0,pattern:k.value,data:i.value,expandedKeys:t(p),style:{"max-height":"650px",overflow:"hidden"},"onUpdate:selectedKeys":V,"onUpdate:expandedKeys":H},null,8,["pattern","data","expandedKeys"]))])])]),_:1})]),_:1}),e(O,{span:"2"},{default:u(()=>[e(h,{segmented:{content:!0},bordered:!1,size:"small"},{header:u(()=>[e(C,null,{default:u(()=>[e(D,{size:"18"},{default:u(()=>[e(t(ie))]),_:1}),f("span",null,"\u7F16\u8F91\u83DC\u5355"+w(g.value?`\uFF1A${g.value}`:""),1)]),_:1})]),default:u(()=>[e(Q,{type:"info",closable:""},{default:u(()=>[Ke]),_:1}),x.value?(E(),R(Y,{key:0,model:t(l),rules:A,ref_key:"formRef",ref:c,"label-placement":"left","label-width":100,class:"py-4"},{default:u(()=>[e(r,{label:"\u7C7B\u578B",path:"type"},{default:u(()=>[f("span",null,w(t(l).type===1?"\u4FA7\u8FB9\u680F\u83DC\u5355":""),1)]),_:1}),e(r,{label:"\u6807\u9898",path:"label"},{default:u(()=>[e(b,{placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",value:t(l).label,"onUpdate:value":a[1]||(a[1]=s=>t(l).label=s)},null,8,["value"])]),_:1}),e(r,{label:"\u526F\u6807\u9898",path:"subtitle"},{default:u(()=>[e(b,{placeholder:"\u8BF7\u8F93\u5165\u526F\u6807\u9898",value:t(l).subtitle,"onUpdate:value":a[2]||(a[2]=s=>t(l).subtitle=s)},null,8,["value"])]),_:1}),e(r,{label:"\u8DEF\u5F84",path:"path"},{default:u(()=>[e(b,{placeholder:"\u8BF7\u8F93\u5165\u8DEF\u5F84",value:t(l).path,"onUpdate:value":a[3]||(a[3]=s=>t(l).path=s)},null,8,["value"])]),_:1}),e(r,{label:"\u6253\u5F00\u65B9\u5F0F",path:"openType"},{default:u(()=>[e(W,{value:t(l).openType,"onUpdate:value":a[4]||(a[4]=s=>t(l).openType=s),name:"openType"},{default:u(()=>[e(C,null,{default:u(()=>[e(z,{value:1},{default:u(()=>[Re]),_:1}),e(z,{value:2},{default:u(()=>[Ie]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),e(r,{label:"\u83DC\u5355\u6743\u9650",path:"auth"},{default:u(()=>[e(b,{placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\uFF0C\u591A\u4E2A\u6743\u9650\u7528\uFF0C\u5206\u5272",value:t(l).auth,"onUpdate:value":a[5]||(a[5]=s=>t(l).auth=s)},null,8,["value"])]),_:1}),e(r,{path:"auth",style:{"margin-left":"100px"}},{default:u(()=>[e(C,null,{default:u(()=>[e(B,{type:"primary",loading:v.value,onClick:$},{default:u(()=>[Ne]),_:1},8,["loading"]),e(B,{onClick:q},{default:u(()=>[Se]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])):pe("",!0)]),_:1})]),_:1})]),_:1}),e(Ae,{ref_key:"createDrawerRef",ref:y,title:M.value},null,8,["title"])])}}});export{Ge as default};

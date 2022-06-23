var re=Object.defineProperty,ie=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var Z=(e,l,o)=>l in e?re(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,k=(e,l)=>{for(var o in l||(l={}))ce.call(l,o)&&Z(e,o,l[o]);if(Y)for(var o of Y(l))fe.call(l,o)&&Z(e,o,l[o]);return e},J=(e,l)=>ie(e,de(l));var _=(e,l,o)=>new Promise((m,c)=>{var g=s=>{try{a(o.next(s))}catch(y){c(y)}},n=s=>{try{a(o.throw(s))}catch(y){c(y)}},a=s=>s.done?m(s.value):Promise.resolve(s.value).then(g,n);a((o=o.apply(e,l)).next())});import{p as i,O as X,Q as K,T as pe,U as ne,V as x,W as me,d as _e,X as ge,Y as ye,Z as be,$ as ve,a0 as Be,a1 as Oe,r as F,i as ke,e as C,w as oe,f as we,_ as Fe,I as M,o as p,c as b,q as r,a as v,g as H,a2 as Q,M as q,n as ee,a3 as N,z as T,a4 as j,a5 as I,a6 as Pe,a7 as Ve,a8 as he,N as Se,a9 as Ce,aa as Ue,G as Me,ab as Ne,H as Te,ac as je,ad as te,ae as Re,af as De,F as Ee,ag as ze,ah as Ie,ai as $e,B as Ae,aj as Ge,ak as We,al as Le,am as He}from"./index.1257e8b0.js";import{s as Qe,p as W}from"./propTypes.c047a88a.js";function qe(e){return e==="NInput"?"\u8BF7\u8F93\u5165":["NPicker","NSelect","NCheckbox","NRadio","NSwitch","NDatePicker","NTimePicker"].includes(e)?"\u8BF7\u9009\u62E9":""}function Xe({emit:e,getProps:l,formModel:o,getSchema:m,formElRef:c,defaultFormModel:g,loadingSub:n,handleFormValues:a}){function s(){return _(this,null,function*(){var u;return(u=i(c))==null?void 0:u.validate()})}function y(u){return _(this,null,function*(){u&&u.preventDefault(),n.value=!0;const{submitFunc:O}=i(l);if(O&&X(O)){yield O();return}if(!!i(c))try{yield s(),n.value=!1,e("submit",o);return}catch(V){n.value=!1;return}})}function P(){return _(this,null,function*(){var u;yield(u=i(c))==null?void 0:u.restoreValidation()})}function R(){return _(this,null,function*(){const{resetFunc:u,submitOnReset:O,clearOnReset:B}=i(l);if(u&&X(u)&&(yield u()),!i(c))return;Object.keys(o).forEach(U=>{o[U]=B?"":i(g)[U]||null}),yield P();const w=a(K(i(o)));e("reset",w),O&&(yield y())})}function D(){return i(c)?a(K(i(o))):{}}function E(u){return _(this,null,function*(){const O=i(m).map(B=>B.field).filter(Boolean);Object.keys(u).forEach(B=>{const V=u[B];O.includes(B)&&(o[B]=V)})})}return{handleSubmit:y,validate:s,resetFields:R,getFieldsValue:D,clearValidate:P,setFieldsValue:E}}function Ye({defaultFormModel:e,getSchema:l,formModel:o}){function m(g){if(!pe(g))return{};const n={};for(const a of Object.entries(g)){let[,s]=a;const[y]=a;!y||ne(s)&&s.length===0||X(s)||x(s)||(me(s)&&(s=s.trim()),Qe(n,y,s))}return n}function c(){const g=i(l),n={};g.forEach(a=>{const{defaultValue:s}=a;x(s)||(n[a.field]=s,o[a.field]=s)}),e.value=n}return{handleFormValues:m,initDefault:c}}const Ze={labelWidth:{type:[Number,String],default:80},schemas:{type:[Array],default:()=>[]},layout:{type:String,default:"inline"},inline:{type:Boolean,default:!1},size:{type:String,default:"medium"},labelPlacement:{type:String,default:"left"},isFull:{type:Boolean,default:!0},showActionButtonGroup:W.bool.def(!0),showResetButton:W.bool.def(!0),resetButtonOptions:Object,showSubmitButton:W.bool.def(!0),submitButtonOptions:Object,showAdvancedButton:W.bool.def(!0),submitButtonText:{type:String,default:"\u67E5\u8BE2"},resetButtonText:{type:String,default:"\u91CD\u7F6E"},gridProps:{type:Object,default:{cols:"1 s:2 m:3 l:4 xl:5 xxl:6"}},giProps:Object,baseGridStyle:{type:Object},collapsed:{type:Boolean,default:!1},collapsedRows:{type:Number,default:1},submitOnReset:{type:Boolean,default:!0},clearOnReset:{type:Boolean,default:!1}};const Je=_e({name:"BasicUpload",components:{DownOutlined:ge,UpOutlined:ye,QuestionCircleOutlined:be,LBTextUp:ve,SearchOutlined:Be,HistoryOutlined:Oe},props:k({},Ze),emits:["reset","submit","register"],setup(e,{emit:l,attrs:o}){const m=F({}),c=ke({}),g=F({}),n=F(null),a=F(null),s=F(!0),y=F(!1),P=F(!1),R=C(()=>Object.assign({size:e.size,type:"primary"},e.submitButtonOptions)),D=C(()=>Object.assign({size:e.size,type:"default"},e.resetButtonOptions));function E(d){var S;const h=(S=d.componentProps)!=null?S:{},z=d.component;return k({clearable:!0,placeholder:qe(i(z))},h)}const u=C(()=>{const d=k(k({},e),i(g)),h={rules:{}};return(d.schemas||[]).forEach(S=>{S.rules&&ne(S.rules)&&(h.rules[S.field]=S.rules)}),k(k({},d),i(h))}),O=C(()=>{const{layout:d}=i(u);return d==="inline"}),B=C(()=>{const{gridProps:d}=i(u);return J(k({},d),{collapsed:O.value?s.value:!1,responsive:"screen"})}),V=C(()=>k(k(k({},o),e),i(u))),w=C(()=>{const d=i(n)||i(u).schemas;for(const h of d){const{defaultValue:z}=h;z&&(h.defaultValue=z)}return d}),{handleFormValues:U,initDefault:$}=Ye({defaultFormModel:m,getSchema:w,formModel:c}),{handleSubmit:A,validate:L,resetFields:G,getFieldsValue:t,clearValidate:f,setFieldsValue:le}=Xe({emit:l,getProps:u,formModel:c,getSchema:w,formElRef:a,defaultFormModel:m,loadingSub:y,handleFormValues:U});function se(){s.value=!s.value}function ae(d){return _(this,null,function*(){g.value=he(i(g)||{},d)})}const ue={getFieldsValue:t,setFieldsValue:le,resetFields:G,validate:L,clearValidate:f,setProps:ae,submit:A};return oe(()=>w.value,d=>{d!=null&&d.length&&($(),P.value=!0)},{deep:!0}),we(()=>{$(),l("register",ue)}),{formElRef:a,formModel:c,getGrid:B,getProps:u,getBindValue:V,getSchema:w,getSubmitBtnOptions:R,getResetBtnOptions:D,handleSubmit:A,resetFields:G,loadingSub:y,isInline:O,getComponentProps:E,unfoldToggle:se}}});function Ke(e,l,o,m,c,g){const n=M("QuestionCircleOutlined"),a=Se,s=De,y=Ee,P=Ce,R=ze,D=Ie,E=$e,u=M("LBTextUp"),O=Ae,B=Ue,V=M("SearchOutlined"),w=Me,U=M("HistoryOutlined"),$=M("DownOutlined"),A=M("UpOutlined"),L=Ne,G=Te;return p(),b(G,N(e.getBindValue,{model:e.formModel,ref:"formElRef",style:{padding:"15px 0 0 0"},"show-feedback":!1}),{default:r(()=>[v(L,Pe(Ve(e.getGrid)),{default:r(()=>[(p(!0),H(q,null,Q(e.getSchema,t=>(p(),b(B,N(t.giProps,{key:t.field,style:{padding:"15px 0"}}),{default:r(()=>[v(O,{label:t.label,path:t.field,labelWidth:t.labelWidth},je({default:r(()=>[t.slot?te(e.$slots,t.slot,{key:0,model:e.formModel,field:t.field,value:e.formModel[t.field]},void 0,!0):t.component==="NCheckbox"?(p(),b(R,{key:1,value:e.formModel[t.field],"onUpdate:value":f=>e.formModel[t.field]=f},{default:r(()=>[v(P,null,{default:r(()=>[(p(!0),H(q,null,Q(t.componentProps.options,f=>(p(),b(y,{key:f.value,value:f.value,label:f.label},null,8,["value","label"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):t.component==="NRadioGroup"?(p(),b(E,{key:2,value:e.formModel[t.field],"onUpdate:value":f=>e.formModel[t.field]=f},{default:r(()=>[v(P,null,{default:r(()=>[(p(!0),H(q,null,Q(t.componentProps.options,f=>(p(),b(D,{key:f.value,value:f.value},{default:r(()=>[T(j(f.label),1)]),_:2},1032,["value"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):t.component==="LBTextUp"?(p(),b(u,N({key:3,modelValue:e.formModel[t.field],"onUpdate:modelValue":f=>e.formModel[t.field]=f},e.getComponentProps(t)),null,16,["modelValue","onUpdate:modelValue"])):(p(),b(Re(t.component),N({key:4,style:{width:"90%"}},e.getComponentProps(t),{value:e.formModel[t.field],"onUpdate:value":f=>e.formModel[t.field]=f,class:{isFull:t.isFull!=!1&&e.getProps.isFull}}),null,16,["value","onUpdate:value","class"])),t.suffix?te(e.$slots,t.suffix,{key:5,model:e.formModel,field:t.field,value:e.formModel[t.field]},void 0,!0):I("",!0)]),_:2},[t.labelMessage?{name:"label",fn:r(()=>[T(j(t.label)+" ",1),v(s,{trigger:"hover",style:ee(t.labelMessageStyle)},{trigger:r(()=>[v(a,{size:"18",class:"cursor-pointer text-gray-400"},{default:r(()=>[v(n)]),_:1})]),default:r(()=>[T(" "+j(t.labelMessage),1)]),_:2},1032,["style"])])}:void 0]),1032,["label","path","labelWidth"])]),_:2},1040))),128)),e.getProps.showActionButtonGroup?(p(),b(B,{key:0,style:{padding:"15px 0"},span:e.isInline?1:24,suffix:!!e.isInline},{default:r(({overflow:t})=>[v(P,{align:"center",justify:e.isInline?"end":"start",style:ee({"margin-left":`${e.isInline?12:e.getProps.labelWidth}px`})},{default:r(()=>[e.getProps.showSubmitButton?(p(),b(w,N({key:0},e.getSubmitBtnOptions,{onClick:e.handleSubmit,loading:e.loadingSub}),{icon:r(()=>[v(a,null,{default:r(()=>[v(V)]),_:1})]),default:r(()=>[T(" "+j(e.getProps.submitButtonText),1)]),_:1},16,["onClick","loading"])):I("",!0),e.getProps.showResetButton?(p(),b(w,N({key:1},e.getResetBtnOptions,{onClick:e.resetFields}),{icon:r(()=>[v(a,null,{default:r(()=>[v(U)]),_:1})]),default:r(()=>[T(" "+j(e.getProps.resetButtonText),1)]),_:1},16,["onClick"])):I("",!0),e.isInline&&e.getProps.showAdvancedButton?(p(),b(w,{key:2,type:"primary",text:"","icon-placement":"right",onClick:e.unfoldToggle},{icon:r(()=>[t?(p(),b(a,{key:0,size:"14",class:"unfold-icon"},{default:r(()=>[v($)]),_:1})):(p(),b(a,{key:1,size:"14",class:"unfold-icon"},{default:r(()=>[v(A)]),_:1}))]),default:r(()=>[T(" "+j(t?"\u5C55\u5F00":"\u6536\u8D77"),1)]),_:2},1032,["onClick"])):I("",!0)]),_:2},1032,["justify","style"])]),_:1},8,["span","suffix"])):I("",!0)]),_:3},16)]),_:3},16,["model"])}var nt=Fe(Je,[["render",Ke],["__scopeId","data-v-50ac5fec"]]);function ot(e){const l=F(null),o=F(!1);function m(){return _(this,null,function*(){const n=i(l);return n||console.error("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),yield Le(),n})}function c(n){Ge(()=>{l.value=null,o.value=null}),!(i(o)&&We()&&n===i(l))&&(l.value=n,o.value=!0,oe(()=>e,()=>{e&&n.setProps(He(e))},{immediate:!0,deep:!0}))}return[c,{setProps:n=>_(this,null,function*(){yield(yield m()).setProps(n)}),resetFields:()=>_(this,null,function*(){m().then(n=>_(this,null,function*(){yield n.resetFields()}))}),clearValidate:n=>_(this,null,function*(){yield(yield m()).clearValidate(n)}),getFieldsValue:()=>{var n;return(n=i(l))==null?void 0:n.getFieldsValue()},setFieldsValue:n=>_(this,null,function*(){yield(yield m()).setFieldsValue(n)}),submit:()=>_(this,null,function*(){return(yield m()).submit()}),validate:n=>_(this,null,function*(){return(yield m()).validate(n)})}]}export{nt as B,ot as u};

import{_ as T,r as O,M as be,G as Z,aa as z,ak as E,j as g,l as s,a6 as u,a7 as b,aT as Y,o as _,a1 as B,af as le,ag as ie,aU as Ce,aV as R,aW as H,I as re,ar as Se,aX as xe,J as j,B as $e,A as ue,C as Ie,E as Oe,Y as Be,aY as Ve,a4 as de,aZ as ce,ab as De,K as Te,P as Me,a2 as D,ac as ne,a0 as h,H as r,F as P,ae,a8 as I}from"./modules-7f822252.js";import{_ as J,cr as Ae,cs as pe,ct as Pe,cu as fe,cv as je,cw as ze,cx as Ee,cy as se,b5 as Ue,bc as Ne,A as Fe,cz as Le}from"./page-activity-47fd7e18.js";import{P as Re}from"./page-login-9b1a4d04.js";const ve=e=>(le("data-v-3492f60f"),e=e(),ie(),e),Ze={class:"dialog"},qe={class:"dialog-main"},Ge=ve(()=>s("div",{class:"dialog-main-content"},null,-1)),Ke=ve(()=>s("div",{style:{width:"30px",height:"30px"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",viewBox:"0 0 60 60",fill:"none"},[s("path",{d:"M30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57Z",stroke:"white","stroke-width":"4","stroke-linejoin":"round"}),s("path",{d:"M43 17L17 43",stroke:"white","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M17 17L43 43",stroke:"white","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),We=[Ke],Ye=T({__name:"Dialog",props:{show:{type:Boolean,default:!1},type:{type:String,default:"info"},showCancel:{type:Boolean,default:!0},cancelText:{type:String,default:"å–æ¶ˆ"},showConfirm:{type:Boolean,default:!0},confirmText:{type:String,default:"ç¡®è®¤"},title:{type:String,default:""},code:{type:String,default:""},desc:{type:[String,Function],default:""},showClose:{type:Boolean,default:!0},maskClose:{type:Boolean,default:!0},time:{type:Number,default:0}},emits:["update:show","cancel","confirm"],setup(e,{emit:o}){const n=e,a=O(n.time!==0),t=O(!1),p=()=>{n.maskClose&&(t.value=!1)},v=()=>{t.value=!1},l=()=>{o("update:show",!1)},d=be({time:n.time*1e3,onFinish(){a.value=!1}});return Z(()=>n.show,i=>{t.value=i,i&&n.time!==0&&d.start()}),(i,y)=>z((_(),g("div",Ze,[s("div",{class:"dialog-bg",onClick:p}),u(Y,{name:"dialogIn",onAfterLeave:l,"enter-active-class":"dialogIn-enter-active","leave-active-class":"dialogIn-leave-active",persisted:""},{default:b(()=>[z(s("div",qe,[Ge,e.showClose?(_(),g("div",{key:0,class:"dialog-main-close",onClick:v},We)):B("v-if",!0)],512),[[E,t.value]])]),_:1})],512)),[[E,{show:e.show}]])}});const He=J(Ye,[["__scopeId","data-v-3492f60f"],["__file","/var/lib/jenkins/workspace/web-å°åº¦-bigmumbai-webnew/src/components/Dialog/Dialog.vue"]]),Je=e=>{const o=H(),{cancel:n,confirm:a,close:t,...p}=e,v=document.createElement("div");let l;const d=Ce(He,{...p,onCancel:n,onConfirm:a,"onUpdate:show"(){var i;d.component&&(d.component.props.show=!1),t==null||t(),(i=l==null?void 0:l.unmount)==null||i.call(l)}});return l={isUnmounted:!1,vm:d,open(){var i;document.body.appendChild(v),R(d,v),(i=d.component)!=null&&i.props&&(d.component.props.show=!0),d.appContext=(o==null?void 0:o.appContext)||null},unmount(){var i,y;(i=d.component)!=null&&i.isUnmounted||(l.isUnmounted=!0,R(null,v),(y=v==null?void 0:v.parentNode)==null||y.removeChild(v))}},l},Xe=Je;let Qe=100;function ye(e){const o=H();o&&Object.assign(o.proxy,e)}function et(){const e=re({show:!1}),o=t=>{e.show=t},n=t=>{t&&Object.assign(e,t,{transitionAppear:!0}),o(!0)},a=()=>o(!1);return ye({open:n,close:a,toggle:o}),{open:n,close:a,state:e,toggle:o}}function tt(e){var p;const o=H(),n=u(e);n.appContext=(o==null?void 0:o.appContext)||null;const a=document.createElement("div");return document.body.appendChild(a),R(n,a),{instance:((p=n.component)==null?void 0:p.proxy)||{},unmount(){R(null,a),document.body.removeChild(a)}}}const ot=()=>++Qe;function me(e){const o=O(!1);return Z(e,n=>{n&&(o.value=n)},{immediate:!0}),n=>()=>o.value?n():null}function nt(e,{args:o=[],done:n,canceled:a}){if(e){const t=e.apply(null,o);Ae(t)?t.then(p=>{p?n():a&&a()}).catch(pe):t?n():a?a():n()}else n()}const he=Symbol(),at={show:Boolean,zIndex:Number,role:String,duration:{type:Number,default:1},className:{type:String},lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0},transition:String,tabindex:Number,customStyle:Object};function st(){return Se(he,{close:()=>{}})}const lt=T({props:at,setup(e,{emit:o,slots:n}){const a=O(),t=me(()=>e.show||!e.lazyRender),p=l=>{e.lockScroll&&je(l,!0)},v=t(()=>{var d;const l=Object.assign(ze(e.zIndex),e.customStyle);return z(u("div",{ref:a,style:l,class:[e.className,"popup-overlay"]},[(d=n.default)==null?void 0:d.call(n)]),[[E,e.show]])});return fe("touchmove",p,{target:a}),()=>u(Y,{name:e.transition||"fade",appear:!0},{default:v})}}),it={show:Boolean,zIndex:Number,teleport:{type:[String,Object],default:"body"},duration:{type:Number},lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0},overlay:{type:Boolean,default:!1},transitionAppear:{type:Boolean,default:!0},content:Function,transition:String,destroyOnClose:{type:Boolean,default:!0},beforeClose:Function,overlayStyle:Object,closeOnClickOverlay:{type:Boolean,default:!1}},rt=Object.assign({},it,{position:{type:String,default:""},safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean,safeArea:Boolean,overlayClass:String,closeOnPopstate:Boolean}),ut=T({inheritAttrs:!1,props:rt,emits:["open","close","opened","closed","keydown","update:show","clickOverlay"],setup(e,{emit:o,attrs:n,slots:a}){let t,p;const v=xe(document.body),l=O(),d=O(!1),i=O(),y=me(()=>e.show||!e.lazyRender),k=j(()=>{const m={zIndex:l.value};if(Pe(e.duration)){const C=e.position==="center"?"animationDuration":"transitionDuration";m[C]=`${e.duration}m`}return m}),V=()=>{t||(t=!0,v.value=!0,l.value=e.zIndex!==void 0?+e.zIndex:ot(),d.value=!0,o("open"))},x=()=>{t&&nt(e.beforeClose,{done(){t=!1,o("close"),o("update:show",!1),v.value=!1,e.destroyOnClose&&(d.value=!1)}})},U=()=>o("opened"),q=()=>o("closed"),G=m=>o("keydown",m),N=m=>{o("clickOverlay",m),e.closeOnClickOverlay&&x()};Z(()=>e.show,m=>{m&&!t&&(V(),n.tabindex===0&&$e(()=>{var C;(C=i.value)==null||C.focus()})),!m&&t&&x()}),ye({popupRef:i}),fe("popstate",()=>{e.closeOnPopstate&&(x(),p=!1)}),ue(()=>{e.show&&V()}),Ie(()=>{p&&(o("update:show",!0),p=!1)}),Oe(()=>{e.show&&e.teleport&&(x(),p=!0)}),Be(he,{close:x});const K=y(()=>{const{position:m,safeAreaInsetTop:C,safeAreaInsetBottom:S}=e,$=e.content||a.default||pe;return z(u("div",ce({ref:i,style:k.value,role:"dialog",tabindex:0,class:["popup",m==="center"?"popup-center":null,{"van-safe-area-top":C,"van-safe-area-bottom":S}],onKeydown:G},n),[d.value&&$()]),[[E,e.show]])}),M=()=>{if(e.overlay)return u(lt,{show:e.show,class:e.overlayClass,zIndex:l.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:N},{default:a["overlay-content"]})},F=()=>{const{position:m,transition:C,transitionAppear:S}=e,$=m==="center"?"fade":`popup-slide-${m}`;return u(Y,{name:C||$,appear:S,onAfterEnter:U,onAfterLeave:q},{default:K})};return()=>e.teleport?u(Ve,{to:e.teleport},{default:()=>[M(),F()]}):u(de,null,[M(),F()])}}),dt={overlay:!0,teleport:"body",position:"center",transition:"van-fade"};let L=[],ct=!0;function pt(e){const{onClosed:o,...n}=e;return tt({setup(){const{state:t,toggle:p}=et();return()=>u(ut,ce(t,n,{"onUpdate:show":p}),null)}}).instance}function ft(e){if(!L.length||ct){const o=pt(e);L.push(o)}return L[L.length-1]}function vt(e={}){const o=Object.assign({},dt,e);return ft(o)}const X=e=>(le("data-v-954f2fdf"),e=e(),ie(),e),yt={class:"security"},mt={class:"security-header"},ht=X(()=>s("span",{class:"security-header-left"},null,-1)),wt={key:0},_t={key:1},gt=X(()=>s("span",{class:"security-header-right"},null,-1)),kt={class:"security-content"},bt={key:0},Ct={class:"security-hit"},St={key:1},xt={class:"security-hit"},$t={key:2},It={class:"security-hit"},Ot={key:3},Bt={class:"security-tip"},Vt={key:1},Dt={class:"security-btns"},Tt={class:"security-footer"},Mt=X(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",viewBox:"0 0 60 60",fill:"none"},[s("path",{d:"M30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57Z",stroke:"white","stroke-width":"4","stroke-linejoin":"round"}),s("path",{d:"M43 17L17 43",stroke:"white","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M17 17L43 43",stroke:"white","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),At=[Mt],Pt=T({__name:"index",props:{type:{type:String,default:"",required:!0},code:{type:String,default:"",required:!0},codeType:{type:Number,required:!0},phone:{type:String,default:""},showType:{type:String,default:"auth"}},emits:["update:type","update:code","confirm"],setup(e,{emit:o}){const n=e,{type:a,code:t,phone:p}=De(n,o),{t:v}=Te(),{close:l}=st(),d=Me(),{verifyList:i,verifyModal:y,verifyActive:k,openVerify:V,onSelectVerify:x,userInfo:U,isOpenForgetPasswordSMSState:q}=Ee(),{getEmailCode:G,isCount:N,seconds:K}=se({time:300,codeType:n.codeType}),{isCount:M,seconds:F,getSMSCode:m}=se({time:120,codeType:n.codeType}),C=j(()=>t.value?k.value.value==="pwd"?!(t.value.length>=8):t.value.length!==6:!0),S=j(()=>n.showType==="phone"),$=j(()=>S.value?{}:k.value),Q=j(()=>{var c,f;return p.value||((f=(c=U.value)==null?void 0:c.verifyMethods)==null?void 0:f.mobile)}),we=()=>{l(),d.push({name:"rpwd"})},ee=()=>{l(),d.push({name:"CustomerService"})},_e=async()=>{o("confirm",{type:a,code:t})};return Z(k,()=>{a.value=k.value.value}),ue(()=>{S.value||(a.value=k.value.value)}),(c,f)=>{var te,oe;const A=D("van-button"),W=D("van-field"),ge=D("van-picker"),ke=D("van-popup");return _(),g("div",yt,[s("div",mt,[ht,ne(c.$slots,"header",{},()=>[S.value?(_(),g("h5",wt,h(r(v)("SMSVerify")),1)):(_(),g("h5",_t,h(r(k).title),1))],!0),gt]),s("div",kt,[$.value.value==="mobile"||S.value?(_(),g("div",bt,[s("div",Ct,[s("p",null,h(c.$t("tipVerifyIdentityForFundSafety")),1),s("span",null,h(c.$t("tip6digitVeriCode",[`${r(Ue)(Q.value)} 6`])),1)]),u(W,{center:"",type:"digit",placeholder:c.$t("phEnterVerificationCode"),maxlength:6,modelValue:r(t),"onUpdate:modelValue":f[1]||(f[1]=w=>P(t)?t.value=w:null)},{button:b(()=>[u(A,{class:"security-code",disabled:r(M),size:"small",type:"primary",onClick:f[0]||(f[0]=w=>r(m)(Q.value))},{default:b(()=>[I(h(r(M)?`${r(F)}S`:c.$t("send")),1)]),_:1},8,["disabled"])]),_:1},8,["placeholder","modelValue"])])):B("v-if",!0),$.value.value==="email"?(_(),g("div",St,[s("div",xt,[s("p",null,h(c.$t("tipVerifyIdentityForFundSafety")),1),s("span",null,h(c.$t("tipemaildigitVeriCode",[r(Ne)(((oe=(te=r(U))==null?void 0:te.verifyMethods)==null?void 0:oe.email)||"")])),1)]),u(W,{center:"",type:"digit",maxlength:6,modelValue:r(t),"onUpdate:modelValue":f[3]||(f[3]=w=>P(t)?t.value=w:null),placeholder:c.$t("phEnterVerificationCode")},{button:b(()=>[u(A,{class:"security-code",disabled:r(N),size:"small",type:"primary",onClick:f[2]||(f[2]=w=>r(G)())},{default:b(()=>[I(h(r(N)?`${r(K)}S`:c.$t("send")),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue","placeholder"])])):B("v-if",!0),$.value.value==="google"?(_(),g("div",$t,[s("div",It,[s("p",null,h(c.$t("openauthenticator")),1),s("p",null,h(c.$t("verificationcodegoogle")),1)]),u(W,{center:"",clearable:"",maxlength:6,modelValue:r(t),"onUpdate:modelValue":f[4]||(f[4]=w=>P(t)?t.value=w:null),type:"number",placeholder:c.$t("PgoogleVerification")},null,8,["modelValue","placeholder"])])):B("v-if",!0),$.value.value==="pwd"?(_(),g("div",Ot,[u(Re,{value:r(t),"onUpdate:value":f[5]||(f[5]=w=>P(t)?t.value=w:null),label:c.$t("withdrawDialogDesc2"),maxlength:32},null,8,["value","label"]),s("div",Bt,[r(q)?(_(),g("p",{key:0,onClick:we},h(c.$t("withdrawDialogDesc4")),1)):(_(),g("p",Vt)),s("div",{onClick:ee},h(c.$t("withdrawDialogDesc5")),1)])])):B("v-if",!0),s("div",Dt,[S.value?B("v-if",!0):z((_(),ae(A,{key:0,onClick:r(V)},{default:b(()=>[I(h(c.$t("otherverificationmethods")),1)]),_:1},8,["onClick"])),[[E,$.value.value!=="pwd"]]),u(A,{type:"primary",disabled:C.value,onClick:_e},{default:b(()=>[I(h(c.$t("confirmAdd")),1)]),_:1},8,["disabled"]),S.value?(_(),ae(A,{key:1,onClick:ee},{default:b(()=>[I(h(c.$t("contactServicer")),1)]),_:1})):B("v-if",!0)])]),s("div",Tt,[ne(c.$slots,"footer",{},()=>[s("span",{onClick:f[6]||(f[6]=(...w)=>r(l)&&r(l)(...w))},At)],!0)]),u(ke,{teleport:"body",show:r(y),"onUpdate:show":f[8]||(f[8]=w=>P(y)?y.value=w:null),"lazy-render":!0,round:"",position:"bottom"},{default:b(()=>[u(ge,{onCancel:f[7]||(f[7]=w=>y.value=!1),onConfirm:r(x),columns:r(i)},null,8,["onConfirm","columns"])]),_:1},8,["show"])])}}});const jt=J(Pt,[["__scopeId","data-v-954f2fdf"],["__file","/var/lib/jenkins/workspace/web-å°åº¦-bigmumbai-webnew/src/components/SecurityDialog/index.vue"]]),zt=T({__name:"index",setup(e){const o=T({render(){return u("div",null,[I("Test")])}}),{open:n}=Xe({title:"æœªç»‘å®šé“¶è¡Œå¡æˆ–æ”¯ä»˜å®åœ°å€",desc:"æ‚¨è¿˜æœªç»‘å®šé“¶è¡Œå¡æˆ–æ”¯ä»˜å®åœ°å€ï¼Œè¯·å…ˆç»‘å®š",confirmText:"ç»‘å®š"}),a=re({phone:"111111",code:""}),t=O(),p=vt({content:()=>u(jt,{showType:"phone",code:a.code,"onUpdate:code":i=>a.code=i,phone:a.phone,"onUpdate:phone":i=>a.phone=i},null)}),v=()=>{n()},l=()=>{p.open()},d=async i=>{const y=new FormData;y.append("files",i.file),await Fe(Le(y))};return(i,y)=>{const k=D("van-button"),V=D("van-uploader");return _(),g(de,null,[u(r(o)),u(k,{onClick:v},{default:b(()=>[I("æµ‹è¯•")]),_:1}),u(k,{onClick:l},{default:b(()=>[I("æµ‹è¯•2")]),_:1}),u(V,{modelValue:t.value,"onUpdate:modelValue":y[0]||(y[0]=x=>t.value=x),accept:"image/*","max-count":1,"after-read":d},null,8,["modelValue"])],64)}}}),Et=J(zt,[["__file","/var/lib/jenkins/workspace/web-å°åº¦-bigmumbai-webnew/src/views/test/index.vue"]]),Lt=Object.freeze(Object.defineProperty({__proto__:null,default:Et},Symbol.toStringTag,{value:"Module"}));export{jt as S,Lt as i,vt as u};
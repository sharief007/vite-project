import{r as t,v as g,x as p,z as k,q as c,a as u,o as x,h as b,e as r,w as i,A as w,G as A,f as d,t as B}from"./index-980b67d4.js";const C={class:"d-flex flex-column align-center justify-center",style:{height:"100vh"}},V={__name:"AuthView",setup(R){const e=t(!1),o=t(""),s=t(""),n=t(!0),v=g(),f=()=>{w(c(),new A)};return p(()=>{k(c()).then(a=>{n.value=!1,a&&(s.value="success",o.value="Authentication Successful.",e.value=!0,v.push({name:"main"}))}).catch(a=>{n.value=!1,s.value="red",o.value=`${a.code} - Authentication failed`,e.value=!0})}),(a,l)=>{const h=u("v-btn"),m=u("v-snackbar");return x(),b("div",C,[r(h,{color:"red",class:"ma-2","prepend-icon":"mdi-google",width:"300",onClick:f,disabled:n.value},{default:i(()=>[d("SignIn with Google")]),_:1},8,["disabled"]),r(m,{"model-value":e.value,"onUpdate:modelValue":l[0]||(l[0]=_=>e.value=_),color:s.value,variant:"tonal"},{default:i(()=>[d(B(o.value),1)]),_:1},8,["model-value","color"])])}}};export{V as default};
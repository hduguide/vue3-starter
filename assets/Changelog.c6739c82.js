import{a}from"./index.9c408d77.js";import{d as e,z as s,p as o,a as t,o as n,c as d,w as r,b as c}from"./vendor.85d8f943.js";var l=e({name:"Changelog",setup(){const e=s(null),o=s(!1);return{userInfo:e,loading:o,getUserInfo:()=>{o.value=!0,a.get("/users/XPoet").then((a=>{console.log("response: ",a.data),e.value=a.data,o.value=!1})).catch((a=>{o.value=!1,console.error(a)}))}}}});const g=r();o("data-v-6d8cde3e");const i={class:"axios-container page-container"},v=c("div",{class:"page-title"},"Changelog Page",-1),p=c("div",{class:"page-title"},"TO DO",-1);t();const u=g(((a,e,s,o,t,r)=>(n(),d("div",i,[v,p]))));l.render=u,l.__scopeId="data-v-6d8cde3e";export default l;

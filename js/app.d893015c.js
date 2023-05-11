(function(){"use strict";var e={7670:function(e,t,a){var n=a(9242),r=a(3396);const o={id:"app"};function s(e,t,a,n,s,i){const c=(0,r.up)("router-view"),l=(0,r.up)("custom-cursor");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(c),(0,r.Wm)(l)])}var i=a(7139);function c(e,t,a,n,o,s){return(0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(["g-cursor",{"g-cursor_hover":o.hover},{"g-cursor_hide":o.hideCursor}])},[(0,r._)("div",{style:(0,i.j5)(s.cursorCircle),class:"g-cursor__circle"},null,4),(0,r._)("div",{class:"g-cursor__point",ref:"point",style:(0,i.j5)(s.cursorPoint)},null,4)],2)}const l={data(){return{xChild:0,yChild:0,xParent:0,yParent:0,hover:!1,hideCursor:!0,circleColor:"#fff"}},computed:{cursorCircle(){return`transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`},cursorPoint(){return`transform: translateX(${this.xChild-3}px) translateY(${this.yChild-3}px) translateZ(0) translate3d(0, 0, 0);`}},methods:{moveCursor(e){this.xChild=e.clientX,this.yChild=e.clientY,setTimeout((()=>{this.xParent=e.clientX-9.5,this.yParent=e.clientY-9.5}),100)}},mounted(){document.addEventListener("mousemove",this.moveCursor),document.addEventListener("mouseleave",(()=>{this.hideCursor=!0})),document.addEventListener("mouseenter",(()=>{this.hideCursor=!1}))}},u=()=>{(0,n.sj)((e=>({"4046901a":e.circleColor})))},d=l.setup;l.setup=d?(e,t)=>(u(),d(e,t)):u;var m=l,p=a(89);const v=(0,p.Z)(m,[["render",c]]);var f=v,h={components:{customCursor:f}};const b=(0,p.Z)(h,[["render",s]]);var _=b,y=a(2483);const g=e=>((0,r.dD)("data-v-40e806e8"),e=e(),(0,r.Cn)(),e),x={id:"home"},k=g((()=>(0,r._)("div",{class:"double-click-info"}," Double click to see content ",-1))),w={class:"container"},C={class:"tiles cursorHover"},S=["onClick"],D=["onClick"],M={class:"text"};function P(e,t,a,n,o,s){return(0,r.wg)(),(0,r.iD)("div",x,[k,(0,r._)("div",w,[(0,r._)("div",C,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.menus,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:(0,i.C_)(["title",o.activeMenu==t+1?"active disable":""]),onClick:e=>o.activeMenu==t+1?o.activeMenu=-1:o.activeMenu=t+1},[(0,r._)("div",{onClick:a=>s.openUrl(e,t),class:"title-content"},[(0,r._)("div",{class:"num",style:(0,i.j5)(`color:${o.colors[t]}`)},"0"+(0,i.zw)(t+1)+".",5),(0,r._)("div",M,(0,i.zw)(e.name),1)],8,D)],10,S)))),128))])])])}a(7658);var T={data(){return{activeMenu:-1,menus:[{name:"About",router:"about"},{name:"Skills",router:"skills"},{name:"Experience",router:"experience"},{name:"Contact",router:"contact"}],colors:["#1f2831","#1f2831","#1f2831","#1f2831"]}},methods:{openUrl(e,t){this.activeMenu==t+1&&setTimeout((()=>{this.$router.push({name:e.router})}),500)}}};const j=(0,p.Z)(T,[["render",P],["__scopeId","data-v-40e806e8"]]);var O=j;const E={id:"about"},W=(0,r.uE)('<div class="box" data-v-1a9a2b3e><div class="block" data-v-1a9a2b3e><span style="--i:0;" data-v-1a9a2b3e></span><span style="--i:1;" data-v-1a9a2b3e></span><span style="--i:2;" data-v-1a9a2b3e></span><span style="--i:3;" data-v-1a9a2b3e></span></div><div class="text" data-v-1a9a2b3e><span style="--i:0;" data-text="Aykhan" data-v-1a9a2b3e>Aykhan</span><span style="--i:1;" data-text="Sadigov" data-v-1a9a2b3e>Sadİgov</span><span style="--i:2;" data-text="Frontend" data-v-1a9a2b3e>Frontend</span><span style="--i:3;" data-text="Developer" data-v-1a9a2b3e>Developer</span></div></div>',1),q={key:0,class:"about-me"};function I(e,t,a,o,s,i){return(0,r.wg)(),(0,r.iD)("div",E,[W,(0,r.Wm)(n.uT,null,{default:(0,r.w5)((()=>[s.showText?((0,r.wg)(),(0,r.iD)("div",q," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta iaculis bibendum. Quisque pharetra efficitur nulla, quis pharetra risus mattis laoreet. Sed eleifend vehicula nisl. Sed quis nulla vitae velit fermentum mollis. Integer eu elit eu elit rutrum pretium id id urna. Phasellus a augue magna. Sed sapien sem, vehicula sed risus eget, aliquam venenatis risus. Pellentesque dapibus velit massa, sit amet iaculis lacus blandit vitae. Morbi sit amet tortor vitae nisl placerat consequat. Morbi enim dolor, semper at tortor vel, elementum posuere orci. ")):(0,r.kq)("",!0)])),_:1})])}const U={data(){return{showText:!1,changePosition:"40%"}},mounted(){setTimeout((()=>{this.changePosition="6rem"}),1e3),setTimeout((()=>{this.showText=!0}),3e3)}},Y=()=>{(0,n.sj)((e=>({"40448cee":e.changePosition})))},Z=U.setup;U.setup=Z?(e,t)=>(Y(),Z(e,t)):Y;var $=U;const F=(0,p.Z)($,[["render",I],["__scopeId","data-v-1a9a2b3e"]]);var L=F;const A=e=>((0,r.dD)("data-v-001f2bc2"),e=e(),(0,r.Cn)(),e),J={id:"about"},X=A((()=>(0,r._)("div",{class:"skills"},"Skills",-1))),z={class:"container"},B=A((()=>(0,r._)("div",{class:"title-border"},null,-1))),H={class:"title-content"},N={class:"name"},R={class:"bar"},G={class:"bar-bg"},K={class:"bar-text"};function Q(e,t,a,n,o,s){return(0,r.wg)(),(0,r.iD)("div",J,[X,(0,r._)("div",z,[(0,r._)("div",{class:"card",onMousemove:t[0]||(t[0]=(...e)=>s.cardMouseMove&&s.cardMouseMove(...e))},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.itemsFunc,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"title"},[B,(0,r._)("div",H,[(0,r._)("div",N,(0,i.zw)(e.name),1),(0,r._)("div",R,[(0,r._)("div",G,[(0,r._)("div",{class:"bar-front",style:(0,i.j5)(`width:${e.performance||0}%;`)},null,4)]),(0,r._)("div",K,(0,i.zw)(e.performance||0)+" %",1)])])])))),128))],32)])])}var V={data(){return{items:[{name:"HTML",performance:50},{name:"JavaScript",performance:50},{name:"CSS",performance:50},{name:"Scss/Sass",performance:50},{name:"VueJS",performance:50},{name:"NuxtJS",performance:50},{name:"Tailwind",performance:50},{name:"Bootstrap",performance:50},{name:"Ajax",performance:50},{name:"AngularJS",performance:50},{name:"ReactJS",performance:50},{name:"jQuery",performance:50},{name:"TypeScript",performance:50},{name:"ES5/ES6",performance:50},{name:"REST",performance:50},{name:"JSON",performance:50},{name:"Git",performance:50},{name:"npm",performance:50}]}},computed:{itemsFunc(){let e=this.items,t=e.sort(((e,t)=>e.performance<t.performance?1:-1));return t}},methods:{cardMouseMove(e){for(const t of document.getElementsByClassName("title")){const a=t.getBoundingClientRect(),n=e.clientX-a.left,r=e.clientY-a.top;t.style.setProperty("--mouse-x",`${n}px`),t.style.setProperty("--mouse-y",`${r}px`)}}}};const ee=(0,p.Z)(V,[["render",Q],["__scopeId","data-v-001f2bc2"]]);var te=ee;const ae=e=>((0,r.dD)("data-v-58bf5c59"),e=e(),(0,r.Cn)(),e),ne={id:"experience"},re=ae((()=>(0,r._)("button",null,"asd",-1)));function oe(e,t,a,n,o,s){return(0,r.wg)(),(0,r.iD)("div",ne,[re,(0,r.Uk)(" Experience ")])}var se={};const ie=(0,p.Z)(se,[["render",oe],["__scopeId","data-v-58bf5c59"]]);var ce=ie;const le={id:"contact"},ue={style:{"--i":"-3","--clr":"#1877f2"},"data-text":"Facebook"},de={href:"#"},me={style:{"--i":"-2","--clr":"#24d366"},"data-text":"Whatsapp"},pe={href:"#"},ve={style:{"--i":"-1","--clr":"#1da1f2"},"data-text":"Twitter"},fe={href:"#"},he={style:{"--i":"0","--clr":"#c32aa3"},"data-text":"Instagram"},be={href:"#"},_e={style:{"--i":"1","--clr":"#ff0000"},"data-text":"Youtube"},ye={href:"#"},ge={style:{"--i":"2","--clr":"#0a66c2"},"data-text":"Linkedin"},xe={href:"#"};function ke(e,t,a,n,o,s){const i=(0,r.up)("fa");return(0,r.wg)(),(0,r.iD)("div",le,[(0,r._)("ul",null,[(0,r._)("li",ue,[(0,r._)("a",de,[(0,r._)("span",null,[(0,r.Wm)(i,{icon:["fab","facebook"]})]),(0,r.Uk)("Facebook")])]),(0,r._)("li",me,[(0,r._)("a",pe,[(0,r._)("span",null,[(0,r.Wm)(i,{icon:["fab","whatsapp"]})]),(0,r.Uk)("Whatsapp")])]),(0,r._)("li",ve,[(0,r._)("a",fe,[(0,r._)("span",null,[(0,r.Wm)(i,{icon:["fab","twitter"]})]),(0,r.Uk)("Twitter")])]),(0,r._)("li",he,[(0,r._)("a",be,[(0,r._)("span",null,[(0,r.Wm)(i,{icon:["fab","instagram"]})]),(0,r.Uk)("Instagram")])]),(0,r._)("li",_e,[(0,r._)("a",ye,[(0,r._)("span",null,[(0,r.Wm)(i,{icon:["fab","youtube"]})]),(0,r.Uk)("Youtube")])]),(0,r._)("li",ge,[(0,r._)("a",xe,[(0,r._)("span",null,[(0,r.Wm)(i,{icon:["fab","linkedin"]})]),(0,r.Uk)("Linkedin")])])])])}var we={};const Ce=(0,p.Z)(we,[["render",ke],["__scopeId","data-v-8c8b9a4e"]]);var Se=Ce;const De=[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:L},{path:"/skills",name:"skills",component:te},{path:"/experience",name:"experience",component:ce},{path:"/contact",name:"contact",component:Se}],Me=(0,y.p7)({history:(0,y.PO)("/aykhan-sadigov/"),routes:De});var Pe=Me,Te=a(65),je=(0,Te.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),Oe=a(7749),Ee=a(3494),We=a(8539),qe=a(4551);Ee.vI.add(We.mRB,qe.vnX),(0,n.ri)(_).component("fa",Oe.GN).use(je).use(Pe).mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,s=n[0],i=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(c)var u=c(a)}for(t&&t(n);l<s.length;l++)o=s[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkayxansadiqov"]=self["webpackChunkayxansadiqov"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(7670)}));n=a.O(n)})();
//# sourceMappingURL=app.d893015c.js.map
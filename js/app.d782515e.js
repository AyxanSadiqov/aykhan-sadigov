(function(){"use strict";var e={4705:function(e,t,a){var n=a(9242),s=a(3396);const i={id:"app"};function r(e,t,a,n,r,o){const c=(0,s.up)("router-view"),d=(0,s.up)("custom-cursor");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(c),(0,s.Wm)(d)])}var o=a(7139);function c(e,t,a,n,i,r){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["g-cursor",{"g-cursor_hover":i.hover},{"g-cursor_hide":r.hideCursor}])},[(0,s._)("div",{style:(0,o.j5)(r.cursorCircle),class:"g-cursor__circle"},null,4),(0,s._)("div",{class:"g-cursor__point",ref:"point",style:(0,o.j5)(r.cursorPoint)},null,4)],2)}const d={data(){return{xChild:0,yChild:0,xParent:0,yParent:0,hover:!1,circleColor:"#fff"}},computed:{cursorCircle(){return`transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`},cursorPoint(){return`transform: translateX(${this.xChild-3}px) translateY(${this.yChild-3}px) translateZ(0) translate3d(0, 0, 0);`},hideCursor(){return this.$store.state.hideCursor}},methods:{moveCursor(e){this.xChild=e.clientX,this.yChild=e.clientY,setTimeout((()=>{this.xParent=e.clientX-9.5,this.yParent=e.clientY-9.5}),100)}},mounted(){document.addEventListener("mousemove",this.moveCursor),document.addEventListener("mouseleave",(()=>{this.$store.commit("hideCursor",!0)})),document.addEventListener("mouseenter",(()=>{this.$store.commit("hideCursor",!1)}))}},l=()=>{(0,n.sj)((e=>({26013311:e.circleColor})))},u=d.setup;d.setup=u?(e,t)=>(l(),u(e,t)):l;var v=d,m=a(89);const p=(0,m.Z)(v,[["render",c]]);var h=p,f={components:{customCursor:h}};const k=(0,m.Z)(f,[["render",r]]);var y=k,_=a(2483);const w=e=>((0,s.dD)("data-v-6ac8ab71"),e=e(),(0,s.Cn)(),e),g={id:"home"},b=w((()=>(0,s._)("div",{class:"double-click-info"}," Double click to see content ",-1))),C={class:"container"},x={id:"tilesId",class:"tiles cursorHover"},I=["onClick"],S={class:"title-content"},T={class:"text"};function j(e,t,a,n,i,r){return(0,s.wg)(),(0,s.iD)("div",g,[b,(0,s._)("div",C,[(0,s._)("div",x,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.menus,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:(0,o.C_)(["title",i.activeMenu==t+1?"active disable":""]),onClick:a=>r.openUrl(e,t)},[(0,s._)("div",S,[(0,s._)("div",{class:"num",style:(0,o.j5)(`color:${i.colors[t]}`)},"0"+(0,o.zw)(t+1)+".",5),(0,s._)("div",T,(0,o.zw)(e.name),1)])],10,I)))),128))])])])}a(7658);var D={data(){return{activeMenu:-1,menus:[{name:"About",router:"about"},{name:"Skills",router:"skills"},{name:"Experience",router:"experience"},{name:"Contact",router:"contact"}],colors:["#1f2831","#1f2831","#1f2831","#1f2831"]}},mounted(){document.addEventListener("click",this.documentClick)},beforeUnmount(){document.removeEventListener("click",this.documentClick)},methods:{documentClick(e){let t=document.getElementById("tilesId"),a=e.target;t===a||t.contains(a)||setTimeout((()=>{this.activeMenu=-1}),200)},openUrl(e,t){this.activeMenu==t+1?(this.activeMenu=-1,setTimeout((()=>{this.$router.push({name:e.router})}),500)):this.activeMenu=t+1}}};const E=(0,m.Z)(D,[["render",j],["__scopeId","data-v-6ac8ab71"]]);var M=E;const U=e=>((0,s.dD)("data-v-18d67ce4"),e=e(),(0,s.Cn)(),e),P={id:"about"},W=(0,s.uE)('<div class="box" data-v-18d67ce4><div class="block" data-v-18d67ce4><span style="--i:0;" data-v-18d67ce4></span><span style="--i:1;" data-v-18d67ce4></span><span style="--i:2;" data-v-18d67ce4></span><span style="--i:3;" data-v-18d67ce4></span></div><div class="text" data-v-18d67ce4><span style="--i:0;" data-text="Aykhan" data-v-18d67ce4>Aykhan</span><span style="--i:1;" data-text="Sadigov" data-v-18d67ce4>Sadİgov</span><span style="--i:2;" data-text="Frontend" data-v-18d67ce4>Frontend</span><span style="--i:3;" data-text="Developer" data-v-18d67ce4>Developer</span></div></div>',1),L={class:"about-me"},$=U((()=>(0,s._)("span",null,"start-up",-1))),F=U((()=>(0,s._)("span",null,"midsize company",-1))),O=U((()=>(0,s._)("br",null,null,-1))),J=U((()=>(0,s._)("br",null,null,-1))),A=U((()=>(0,s._)("a",{href:"https://www.edusisco.net/",target:"_blank"},"Edusisco",-1))),Z=U((()=>(0,s._)("br",null,null,-1))),Y=U((()=>(0,s._)("br",null,null,-1)));function B(e,t,a,i,r,o){return(0,s.wg)(),(0,s.iD)("div",P,[W,(0,s.Wm)(n.uT,null,{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("div",L,[(0,s.Uk)(" After I entered the computer engineering department in 2015, I met programming and I did many projects to improve myself during the academic year. An online blood donation system that I have developed as a graduation project and with enthusiasm. I've worked with django for a few years, but then I found that my comfort zone was when developing front-end. Fast forward to the present and I had the privilege of developing software for a "),$,(0,s.Uk)(" and a "),F,(0,s.Uk)(". "),O,J,(0,s.Uk)(" My main focus these days is developing the new product we started at "),A,(0,s.Uk)(". In my free time I make an effort to read new articles about the technologies I deal with. And I'm a big "),(0,s._)("span",{id:"star-wars",onClick:t[0]||(t[0]=e=>o.playSound())},"star wars"),(0,s.Uk)(" fan. I've been following the newly released movies and series. "),Z,Y,(0,s.Uk)(" When I'm not at the computer, I usually play table tennis and hang out with my friends. ")],512),[[n.F8,r.showText]])])),_:1})])}const H={data(){return{showText:!1,changePosition:"40%",replayTime:6}},methods:{playSound(){if(Number(this.replayTime)<=0&&(this.replayTime=6),this.replayTime<6)return;const e=new Audio(a(6917));e.play();let t=setInterval((()=>{this.replayTime<=.1&&clearInterval(t),this.replayTime=(this.replayTime-.1).toFixed(1)}),100)}},mounted(){setTimeout((()=>{this.changePosition="6rem"}),1e3),setTimeout((()=>{this.showText=!0;var e=document.getElementById("star-wars");e.addEventListener("mouseenter",(()=>{this.$store.commit("hideCursor",!0)})),e.addEventListener("mouseleave",(()=>{this.$store.commit("hideCursor",!1)}))}),3e3)}},z=()=>{(0,n.sj)((e=>({"3af04623":e.changePosition})))},N=H.setup;H.setup=N?(e,t)=>(z(),N(e,t)):z;var X=H;const R=(0,m.Z)(X,[["render",B],["__scopeId","data-v-18d67ce4"]]);var G=R;const V=e=>((0,s.dD)("data-v-2e58ac84"),e=e(),(0,s.Cn)(),e),q={id:"about"},K=V((()=>(0,s._)("div",{class:"skills"},"Skills",-1))),Q={class:"container"},ee=V((()=>(0,s._)("div",{class:"title-border"},null,-1))),te={class:"title-content"},ae={class:"name"},ne={class:"bar"},se={class:"bar-bg"},ie={class:"bar-text"};function re(e,t,a,n,i,r){return(0,s.wg)(),(0,s.iD)("div",q,[K,(0,s._)("div",Q,[(0,s._)("div",{class:"card",onMousemove:t[0]||(t[0]=(...e)=>r.cardMouseMove&&r.cardMouseMove(...e))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.itemsFunc,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:"title"},[ee,(0,s._)("div",te,[(0,s._)("div",ae,(0,o.zw)(e.name),1),(0,s._)("div",ne,[(0,s._)("div",se,[(0,s._)("div",{class:"bar-front",style:(0,o.j5)(`width:${e.performance||0}%;`)},null,4)]),(0,s._)("div",ie,(0,o.zw)(e.performance||0)+" %",1)])])])))),128))],32)])])}var oe={data(){return{items:[{name:"HTML",performance:50},{name:"JavaScript",performance:50},{name:"CSS",performance:50},{name:"Scss/Sass",performance:50},{name:"VueJS",performance:50},{name:"NuxtJS",performance:50},{name:"Tailwind",performance:50},{name:"Bootstrap",performance:50},{name:"Ajax",performance:50},{name:"AngularJS",performance:50},{name:"ReactJS",performance:50},{name:"jQuery",performance:50},{name:"TypeScript",performance:50},{name:"ES5/ES6",performance:50},{name:"REST",performance:50},{name:"JSON",performance:50},{name:"Git",performance:50},{name:"npm",performance:50}]}},mounted(){document.addEventListener("click",(function(e){if(3===e.detail){var t=document.getElementsByClassName("title-content");for(let e=0;e<t.length;e++)t[e].classList.contains("blendMode")?t[e].classList.remove("blendMode"):t[e].classList.add("blendMode")}}))},computed:{itemsFunc(){let e=this.items,t=e.sort(((e,t)=>e.performance<t.performance?1:-1));return t}},methods:{cardMouseMove(e){for(const t of document.getElementsByClassName("title")){const a=t.getBoundingClientRect(),n=e.clientX-a.left,s=e.clientY-a.top;t.style.setProperty("--mouse-x",`${n}px`),t.style.setProperty("--mouse-y",`${s}px`)}}}};const ce=(0,m.Z)(oe,[["render",re],["__scopeId","data-v-2e58ac84"]]);var de=ce;const le=e=>((0,s.dD)("data-v-4a080dcd"),e=e(),(0,s.Cn)(),e),ue={id:"experience"},ve={class:"all"},me={class:"each"},pe=le((()=>(0,s._)("div",{class:"work-time"},"Feb 2022 - Present",-1))),he={class:"work"},fe={class:"company-name"},ke=le((()=>(0,s._)("div",{class:"status"},"Frontend Developer",-1))),ye=le((()=>(0,s._)("div",{class:"about-work"}," Developments and maintance were made in an online platform project where teachers create different types of tests and present them to their students for all programs in high school, including mathematics, science, social and Turkish. ",-1))),_e={class:"projects"},we={href:"https://www.edusisco.net/",target:"_blank"},ge=le((()=>(0,s._)("div",{class:"work-skills"},[(0,s._)("div",{class:"skills"},"Vue.js"),(0,s._)("div",{class:"skills"},"JavaScript"),(0,s._)("div",{class:"skills"},"Tailwind")],-1))),be={class:"each"},Ce=le((()=>(0,s._)("div",{class:"work-time"},"Sep 2020 - Jan 2022",-1))),xe={class:"work"},Ie={class:"company-name"},Se=le((()=>(0,s._)("div",{class:"status"},"Full Stack Developer",-1))),Te=le((()=>(0,s._)("div",{class:"about-work"}," All frontend-development and maintenance of the project, admin panel and personal site of the project, where a chain store can sell online in a district in Turkey, was done by me. It has also been involved or developed in many projects undertaken by the company. ",-1))),je={class:"projects"},De={href:"https://www.gunkaysanalmarket.com/",target:"_blank"},Ee=(0,s.uE)('<div class="work-skills" data-v-4a080dcd><div class="skills" data-v-4a080dcd>JQuery</div><div class="skills" data-v-4a080dcd>Vanilla JS</div><div class="skills" data-v-4a080dcd>Vue.js</div><div class="skills" data-v-4a080dcd>HTML</div><div class="skills" data-v-4a080dcd>CSS</div><div class="skills" data-v-4a080dcd>SCSS</div><div class="skills" data-v-4a080dcd>PHP</div></div>',1),Me={class:"each"},Ue=le((()=>(0,s._)("div",{class:"work-time"},"June 2017 - Sep 2017",-1))),Pe={class:"work"},We={class:"company-name"},Le=(0,s.uE)('<div class="status" data-v-4a080dcd>Intern</div><div class="about-work" data-v-4a080dcd> Making Turkey map according to province information and applications Building Inventory Tracking System. </div><div class="work-skills" data-v-4a080dcd><div class="skills" data-v-4a080dcd>Python</div><div class="skills" data-v-4a080dcd>Django</div><div class="skills" data-v-4a080dcd>HTML</div><div class="skills" data-v-4a080dcd>CSS</div><div class="skills" data-v-4a080dcd>JavaScript</div></div>',3);function $e(e,t,a,n,i,r){const o=(0,s.up)("fa");return(0,s.wg)(),(0,s.iD)("div",ue,[(0,s._)("div",ve,[(0,s._)("div",me,[pe,(0,s._)("div",he,[(0,s._)("div",fe,[(0,s.Uk)(" Edusisco Education and Information Technologies "),(0,s.Wm)(o,{icon:["fa","chevron-right"],class:"icon"})]),ke,ye,(0,s._)("div",_e,[(0,s._)("a",we,[(0,s.Wm)(o,{icon:["fa","link"],class:"icon"}),(0,s.Uk)(" Edusisco")])]),ge])]),(0,s._)("div",be,[Ce,(0,s._)("div",xe,[(0,s._)("div",Ie,[(0,s.Uk)(" ZDC Informatics "),(0,s.Wm)(o,{icon:["fa","chevron-right"],class:"icon"})]),Se,Te,(0,s._)("div",je,[(0,s._)("a",De,[(0,s.Wm)(o,{icon:["fa","link"],class:"icon"}),(0,s.Uk)(" Gunkay")])]),Ee])]),(0,s._)("div",Me,[Ue,(0,s._)("div",Pe,[(0,s._)("div",We,[(0,s.Uk)(" GRID Technology "),(0,s.Wm)(o,{icon:["fa","chevron-right"],class:"icon"})]),Le])])])])}var Fe={};const Oe=(0,m.Z)(Fe,[["render",$e],["__scopeId","data-v-4a080dcd"]]);var Je=Oe;const Ae={id:"contact"},Ze={style:{"--i":"-3","--clr":"#1877f2"},"data-text":"Facebook"},Ye={href:"#"},Be={style:{"--i":"-2","--clr":"#24d366"},"data-text":"Whatsapp"},He={href:"#"},ze={style:{"--i":"-1","--clr":"#1da1f2"},"data-text":"Twitter"},Ne={href:"#"},Xe={style:{"--i":"0","--clr":"#c32aa3"},"data-text":"Instagram"},Re={href:"#"},Ge={style:{"--i":"1","--clr":"#ff0000"},"data-text":"Youtube"},Ve={href:"#"},qe={style:{"--i":"2","--clr":"#0a66c2"},"data-text":"Linkedin"},Ke={href:"#"};function Qe(e,t,a,n,i,r){const o=(0,s.up)("fa");return(0,s.wg)(),(0,s.iD)("div",Ae,[(0,s._)("ul",null,[(0,s._)("li",Ze,[(0,s._)("a",Ye,[(0,s._)("span",null,[(0,s.Wm)(o,{icon:["fab","facebook"]})]),(0,s.Uk)("Facebook")])]),(0,s._)("li",Be,[(0,s._)("a",He,[(0,s._)("span",null,[(0,s.Wm)(o,{icon:["fab","whatsapp"]})]),(0,s.Uk)("Whatsapp")])]),(0,s._)("li",ze,[(0,s._)("a",Ne,[(0,s._)("span",null,[(0,s.Wm)(o,{icon:["fab","twitter"]})]),(0,s.Uk)("Twitter")])]),(0,s._)("li",Xe,[(0,s._)("a",Re,[(0,s._)("span",null,[(0,s.Wm)(o,{icon:["fab","instagram"]})]),(0,s.Uk)("Instagram")])]),(0,s._)("li",Ge,[(0,s._)("a",Ve,[(0,s._)("span",null,[(0,s.Wm)(o,{icon:["fab","youtube"]})]),(0,s.Uk)("Youtube")])]),(0,s._)("li",qe,[(0,s._)("a",Ke,[(0,s._)("span",null,[(0,s.Wm)(o,{icon:["fab","linkedin"]})]),(0,s.Uk)("Linkedin")])])])])}var et={};const tt=(0,m.Z)(et,[["render",Qe],["__scopeId","data-v-d317f2de"]]);var at=tt;const nt=[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:G},{path:"/skills",name:"skills",component:de},{path:"/experience",name:"experience",component:Je},{path:"/contact",name:"contact",component:at}],st=(0,_.p7)({history:(0,_.PO)("/aykhan-sadigov/"),routes:nt});var it=st,rt=a(65),ot=(0,rt.MT)({state:{hideCursor:!0},getters:{},mutations:{hideCursor:(e,t)=>e.hideCursor=t},actions:{hideCursor:({commit:e},t)=>e("hideCursor",t)},modules:{}}),ct=a(7749),dt=a(3494),lt=a(8539),ut=a(4551);dt.vI.add(lt.mRB,ut.vnX),(0,n.ri)(y).component("fa",ct.GN).use(ot).use(it).mount("#app")},6917:function(e,t,a){e.exports=a.p+"media/darth-vader.64cfe857.mp3"}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,i){if(!n){var r=1/0;for(l=0;l<e.length;l++){n=e[l][0],s=e[l][1],i=e[l][2];for(var o=!0,c=0;c<n.length;c++)(!1&i||r>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(o=!1,i<r&&(r=i));if(o){e.splice(l--,1);var d=s();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,s,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/aykhan-sadigov/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,r=n[0],o=n[1],c=n[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(c)var l=c(a)}for(t&&t(n);d<r.length;d++)i=r[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(l)},n=self["webpackChunkayxansadiqov"]=self["webpackChunkayxansadiqov"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4705)}));n=a.O(n)})();
//# sourceMappingURL=app.d782515e.js.map
(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7d32cf69"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(t),i=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,n[1](a)}o[t]=void 0}};var s=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("MHeader"),n("router-view")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Menu",{attrs:{mode:"horizontal",theme:t.theme1,"active-name":"1"}},[n("MenuItem",{attrs:{name:"1",to:"/"}},[n("Icon",{attrs:{type:"md-home"}}),t._v("\n    首页\n    ")],1),n("MenuItem",{attrs:{name:"2",to:"/user"}},[n("Icon",{attrs:{type:"ios-contact"}}),t._v("\n    个人简介\n    ")],1),n("MenuItem",{attrs:{name:"3",to:"/profile"}},[n("Icon",{attrs:{type:"ios-bug"}}),t._v("\n    擅长技能\n    ")],1),t.isMobile?t._e():n("MenuItem",{staticStyle:{float:"right"},attrs:{name:"4",to:"https://github.com/itzj86/blog",target:"_blank"}},[n("Icon",{attrs:{type:"logo-github",size:"20",title:"Power by github and vue and iview and swiper"}})],1)],1)},c=[],u={name:"MHeader",data:function(){return{theme1:"dark"}},computed:{isMobile:function(){var t=navigator.userAgent.toLowerCase();return!!/(iphone|android)/.test(t)||(console.log(navigator.userAgent.toLowerCase()),!1)}},created:function(){}},s=u,l=n("2877"),p=Object(l["a"])(s,a,c,!1,null,null,null),f=p.exports,d={name:"App",components:{MHeader:f}},h=d,m=(n("034f"),Object(l["a"])(h,o,i,!1,null,null,null)),g=m.exports,v=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Pswiper",{style:t.style})],1)},b=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[n("swiper-slide",{staticStyle:{background:"#00800005"}},[n("div",{staticStyle:{"text-align":"center",height:"100%",display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},[n("h1",{staticStyle:{color:"rgb(1, 110, 74)"}},[t._v("来自一个程序员")]),n("h1",{staticStyle:{color:"rgb(1, 110, 74)"}},[t._v("一个不一样的生活自述")]),n("h1",{staticStyle:{color:"rgb(1, 110, 74)"}},[t._v("https://www.zhoujun.vip")])])]),n("swiper-slide",{staticStyle:{background:"#0000ff17"}},[n("div",{staticStyle:{"text-align":"center",height:"100%",display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},[n("h1",{staticStyle:{"font-size":"80px",color:"rgb(170, 126, 4)"}},[n("Icon",{attrs:{type:"logo-html5"}}),n("Icon",{attrs:{type:"logo-css3"}}),n("Icon",{attrs:{type:"logo-python"}}),n("Icon",{attrs:{type:"logo-javascript"}})],1),n("h1",{staticStyle:{color:"rgb(104, 89, 3)"}},[t._v("可以给我发邮件")]),n("h1",{staticStyle:{color:"rgb(104, 89, 3)"}},[t._v("进行项目外包洽谈")]),n("h1",{staticStyle:{color:"rgb(104, 89, 3)"}},[n("Icon",{attrs:{type:"ios-at-outline"}}),t._v(" : 87538812@qq.com")],1)])]),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)},_=[],S=(n("dfa4"),n("7212")),j={name:"Pswiper",data:function(){return{swiperOption:{autoplay:!0,loop:!0,pagination:{el:".swiper-pagination"}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},components:{swiper:S["swiper"],swiperSlide:S["swiperSlide"]},mounted:function(){}},x=j,O=Object(l["a"])(x,w,_,!1,null,null,null),M=O.exports,I={name:"home",data:function(){return{style:{height:this.docHeight+"px"}}},components:{Pswiper:M},created:function(){this.style={height:document.documentElement.clientHeight-60+"px"}},mounted:function(){console.log(this.docHeight)}},P=I,k=(n("cccb"),Object(l["a"])(P,y,b,!1,null,null,null)),E=k.exports;r["default"].use(v["a"]);var H=new v["a"]({routes:[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),$=n("e069"),z=n.n($);n("dcad");r["default"].config.productionTip=!1,r["default"].use(z.a),new r["default"]({router:H,render:function(t){return t(g)}}).$mount("#app")},"64a9":function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("d563"),o=n.n(r);o.a},d563:function(t,e,n){}});
//# sourceMappingURL=app.2658208d.js.map
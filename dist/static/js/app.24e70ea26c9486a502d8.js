webpackJsonp([4],{FseA:function(n,i){},Yksi:function(n,i){},mUtA:function(n,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=e("7+uW"),a={render:function(){var n=this.$createElement,i=this._self._c||n;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var l=e("VU/8")({name:"App"},a,!1,function(n){e("piOD")},null,null).exports,s=e("/ocq");t.a.use(s.a);var p=new s.a({routes:[{path:"/",name:"index",meta:{title:"首页"},component:()=>e.e(2).then(e.bind(null,"tcAm"))},{path:"/weixin-loading",name:"weixin-loading",meta:{title:"仿微信加载样式"},component:()=>e.e(0).then(e.bind(null,"Rfho"))},{path:"/type-one-loading",name:"type-one-loading",meta:{title:"加载样式-01"},component:()=>e.e(1).then(e.bind(null,"dzkY"))}]});var o={weixin:'\n  <div class=" flex-item flex align-center">\n    <div class="weixin-loading__wrapper">\n      <p class="weixin-loading-p weixin-loading-p_1"></p>\n      <p class="weixin-loading-p weixin-loading-p_2"></p>\n      <p class="weixin-loading-p weixin-loading-p_3"></p>\n      <p class="weixin-loading-p weixin-loading-p_4"></p>\n      <p class="weixin-loading-p weixin-loading-p_5"></p>\n      <p class="weixin-loading-p weixin-loading-p_6"></p>\n      <p class="weixin-loading-p weixin-loading-p_7"></p>\n      <p class="weixin-loading-p weixin-loading-p_8"></p>\n      <p class="weixin-loading-p weixin-loading-p_9"></p>\n      <p class="weixin-loading-p weixin-loading-p_10"></p>\n      <p class="weixin-loading-p weixin-loading-p_11"></p>\n      <p class="weixin-loading-p weixin-loading-p_12"></p>\n    </div>\n  </div>\n  <p class="weixin-loading__title flex-item flex align-center">\n    <span class="common-loading__span">加载中...</span>\n  </p>\n',type_one:'\n  <div class=" flex-item flex align-center">\n    <div class="type-one-loading__wrapper">\n      <p class="type-one-loading-p type-one-loading-p_1"></p>\n      <p class="type-one-loading-p type-one-loading-p_2"></p>\n      <p class="type-one-loading-p type-one-loading-p_3"></p>\n      <p class="type-one-loading-p type-one-loading-p_4"></p>\n      <p class="type-one-loading-p type-one-loading-p_5"></p>\n      <p class="type-one-loading-p type-one-loading-p_6"></p>\n      <p class="type-one-loading-p type-one-loading-p_7"></p>\n      <p class="type-one-loading-p type-one-loading-p_8"></p>\n      <p class="type-one-loading-p type-one-loading-p_9"></p>\n    </div>\n  </div>\n  <p class="type-one-loading__title flex-item flex align-center">\n    <span class="common-loading__span">加载中...</span>\n  </p>\n'};var d=class{constructor(n={}){this.option=Object.assign({type:"weixin",title:"加载中..."},n),this.instance=null,this.title=null,this.display="block",this.included(o,this.option.type)}open(n,i){n=n||this.option.title,i=i||this.option.type,this.included(o,i),console.log("open");let e=`.${i}-loading`;if(this.instance=document.querySelectorAll(e)[0],this.instance){if("open"==this.instance.dataset.state)return;this.instance.dataset.state="open",this.instance.style.display=this.display}else this.instance=document.createElement("div"),this.instance.className=`${i}-loading flex flex-colmun align-center`,this.instance.innerHTML=this.getHTML(o,i),this.title=this.instance.querySelectorAll(".common-loading__span")[0],this.title.innerHTML=n,document.body.appendChild(this.instance),console.log(window.getComputedStyle(this.instance,null).display),this.display=window.getComputedStyle(this.instance,null).display}close(){console.log("close"),this.instance.dataset.state="close",this.instance.style.display="none"}included(n,i){n[i.replace("-","_")]||console.warn("没有该类型!")}getHTML(n,i){return n[i.replace("-","_")]}},c={name:"weixin-loading",props:{title:{type:String,default:"加载中..."}}},g={render:function(){var n=this.$createElement,i=this._self._c||n;return i("div",{staticClass:"weixin-loading flex flex-colmun align-center"},[this._m(0),this._v(" "),i("p",{staticClass:"weixin-loading__title flex-item flex align-center"},[i("span",{staticClass:"common-loading__span"},[this._v(this._s(this.title))])])])},staticRenderFns:[function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",{staticClass:" flex-item flex align-center"},[e("div",{staticClass:"weixin-loading__wrapper"},[e("p",{staticClass:"weixin-loading-p weixin-loading-p_1"}),n._v(" "),e("p",{staticClass:"weixin-loading-p weixin-loading-p_2"}),n._v(" "),e("p",{staticClass:"weixin-loading-p weixin-loading-p_3"}),n._v(" "),e("p",{staticClass:"weixin-loading-p weixin-loading-p_4"}),n._v(" "),e("p",{staticClass:"weixin-loading-p weixin-loading-p_5"}),n._v(" "),e("p",{staticClass:"weixin-loading-p weixin-loading-p_6"}),n._v(" "),e("p",{staticClass:"weixin-loading-p weixin-loading-p_7"}),n._v(" "),e("p",{staticClass:"weixin-loading-p weixin-loading-p_8"}),n._v(" "),e("p",{staticClass:"weixin-loading-p weixin-loading-p_9"}),n._v(" "),e("p",{staticClass:"weixin-loading-p weixin-loading-p_10"}),n._v(" "),e("p",{staticClass:"weixin-loading-p weixin-loading-p_11"}),n._v(" "),e("p",{staticClass:"weixin-loading-p weixin-loading-p_12"})])])}]};var _=e("VU/8")(c,g,!1,function(n){e("FseA")},"data-v-2f43012a",null).exports,r={name:"type-one-loading",props:{title:{type:String,default:"加载中..."}}},x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",{staticClass:"type-one-loading flex flex-colmun align-center"},[e("div",{staticClass:" flex-item flex align-center"},[e("div",{staticClass:"type-one-loading__wrapper"},[e("p",{staticClass:"type-one-loading-p type-one-loading-p_1"}),n._v(" "),e("p",{staticClass:"type-one-loading-p type-one-loading-p_2"}),n._v(" "),e("p",{staticClass:"type-one-loading-p type-one-loading-p_3"}),n._v(" "),e("p",{staticClass:"type-one-loading-p type-one-loading-p_4"}),n._v(" "),e("p",{staticClass:"type-one-loading-p type-one-loading-p_5"}),n._v(" "),e("p",{staticClass:"type-one-loading-p type-one-loading-p_6"}),n._v(" "),e("p",{staticClass:"type-one-loading-p type-one-loading-p_7"}),n._v(" "),e("p",{staticClass:"type-one-loading-p type-one-loading-p_8"}),n._v(" "),e("p",{staticClass:"type-one-loading-p type-one-loading-p_9"})])]),n._v(" "),e("p",{staticClass:"type-one-loading__title flex-item flex align-center"},[e("span",{staticClass:"common-loading__span"},[n._v("加载中...")])])])}]};var w=e("VU/8")(r,x,!1,function(n){e("Yksi")},"data-v-76a54ef2",null).exports;const y=[_,w],u=(n,i={})=>{if(u.installed)return;let e=new d;n.prototype.$loading=e,y.map(i=>(n.component(i.name,i),i))};"undefined"!=typeof window&&window.Vue&&u(window.Vue);var v={version:"1.0.0",install:u,weixinLoading:_,typeOneLoading:w};t.a.use(v),t.a.config.productionTip=!1,new t.a({el:"#app",router:p,components:{App:l},template:"<App/>"})},piOD:function(n,i){}},["mUtA"]);
//# sourceMappingURL=app.24e70ea26c9486a502d8.js.map
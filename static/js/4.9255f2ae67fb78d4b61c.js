webpackJsonp([4],{Oe5v:function(t,a){},heM5:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("lVgt"),n=e.n(s),i={name:"MemberCenter",data:function(){return{balance:0}},computed:{currentPhoneNumber:function(){return this.$route.query.phoneNumber}},created:function(){this.init()},methods:{init:function(){this.$route.query.phoneNumber?this.countBalance():(alert("请先登录"),this.$router.push({name:"LoginPage"}))},goRechargePage:function(){this.$router.push({name:"RechargeDetail",query:{phoneNumber:this.currentPhoneNumber}})},goMyOrder:function(){this.$router.push({name:"MyOrder",query:{phoneNumber:this.currentPhoneNumber}})},countBalance:function(){for(var t=this.$route.query.phoneNumber,a=(n.a.rechargeData||{})[t]||[],e=0,s=0;s<a.length;s++){e+=a[s].amount}for(var i=(n.a.orderData||{})[t]||[],r=0,o=0;o<i.length;o++){var c=i[o];"余额"===c.payType&&(r+=c.totalPrice)}var l=e-r;this.balance=l||0},logout:function(){this.$router.push({name:"HomePage"})}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"member-center"},[e("van-nav-bar",{attrs:{title:"会员中心"}}),t._v(" "),e("div",{staticClass:"div-header"}),t._v(" "),e("div",{staticClass:"div-content"},[e("div",{staticClass:"div-card-box"},[e("div",{staticClass:"div-card-box-line"},[e("span",{staticClass:"span-line-label"},[t._v("手机号")]),t._v(" "),e("span",{staticClass:"span-line-value"},[t._v(t._s(t.currentPhoneNumber))])]),t._v(" "),e("div",{staticClass:"div-card-box-line"},[e("span",{staticClass:"span-line-label"},[t._v("余额")]),t._v(" "),e("span",{staticClass:"span-line-value"},[t._v("￥"+t._s(t.balance))])])]),t._v(" "),e("div",{staticClass:"div-card-box"},[e("div",{staticClass:"div-card-box-line",on:{click:t.goMyOrder}},[e("span",{staticClass:"span-line-label"},[t._v("我的订单")]),t._v(" "),e("span",{staticClass:"span-line-icon"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"}})])])]),t._v(" "),e("div",{staticClass:"div-card-box-line",on:{click:t.goRechargePage}},[e("span",{staticClass:"span-line-label"},[t._v("充值明细")]),t._v(" "),e("span",{staticClass:"span-line-icon"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"}})])])])]),t._v(" "),e("div",{staticClass:"div-button-bar"},[e("van-button",{staticClass:"button-logout",attrs:{plain:"",type:"danger"},on:{click:t.logout}},[t._v("退出登录")])],1)]),t._v(" "),e("div",{staticClass:"div-footer"},[t._v("岩归正传茶叶")])],1)},staticRenderFns:[]};var o=e("VU/8")(i,r,!1,function(t){e("Oe5v")},"data-v-801cb700",null);a.default=o.exports}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-142322fc"],{"3c76":function(t,e,n){},"96bf":function(t,e,n){t.exports=n.p+"static/img/departmentInfo.93e7e985.jpg"},ad32:function(t,e,n){"use strict";n("3c76")},fddb:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"con"},[r("p",{staticClass:"title"},[t._v("当前位置:"),r("i",{on:{click:function(e){return t.$router.push({path:"/home"})}}},[t._v("首页")]),t._v(">科室详情")]),r("div",{staticClass:"department-con"},[r("div",{staticClass:"departmentcon-title"},[r("h1",[t._v(t._s(t.departmentInfo.departmentName))]),r("div",{staticClass:"swiper departmentFengmian",staticStyle:{position:"relative"}},[r("img",{attrs:{src:n("96bf"),alt:""}}),r("p",{staticStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)","font-size":"0.5rem",color:"#666"}},[t._v(t._s(t.departmentInfo.departmentName))])]),r("div",{staticClass:"text-info"},[r("div",{domProps:{innerHTML:t._s(t.departmentInfo.departmentContent)}})])]),r("div",{staticClass:"doctor-list"},[r("h1",[t._v("相关专家")]),r("div",{staticClass:"ly_experts_carousel"},[r("div",{staticClass:"ly_experts_box"},[r("div",{ref:"caseSwiper",staticClass:"swiper-container",staticStyle:{height:"100%"}},[r("div",{staticClass:"swiper-wrapper"},t._l(t.expertsList,(function(e){return r("div",{key:e.id,staticClass:"swiper-slide",staticStyle:{width:"3.55rem",padding:"0 0.2rem","box-sizing":"border-box"},on:{click:function(n){return t.$router.push({path:"/doctorInfo/"+e.id})}}},[r("div",{staticClass:"ly_swiper_image"},[r("img",{attrs:{src:e.pic,alt:""}})]),r("p",[t._v(t._s(e.dockerName))]),r("p",[t._v(t._s(e.dockerTit))])])})),0)])])])])])])},s=[],a=n("5530"),i=n("1da1"),c=(n("96cf"),n("365c")),o=n("2f62"),p=(n("a7a3"),n("b619")),d={name:"departmentInfo",data:function(){return{departmentInfo:{}}},mounted:function(){this.getDepartmentInfo(this.$route.query.id),this.getDepartmentDoctor(this.$route.query.id)},methods:{getDepartmentInfo:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["b"])(t);case 2:r=n.sent,200===r.code&&(e.departmentInfo=r.data);case 4:case"end":return n.stop()}}),n)})))()},getDepartmentDoctor:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={pageNum:1,pageSize:10,departmentInfoId:t},n.next=3,e.$store.dispatch("experts/getExpertsList",r);case 3:case"end":return n.stop()}}),n)})))()}},computed:Object(a["a"])({},Object(o["b"])("experts",["expertsList"])),watch:{expertsList:function(){var t=this;this.$nextTick((function(){new p["a"](t.$refs.caseSwiper,{slidesPerView:2,autoplay:{delay:2e3,disableOnInteraction:!0}})}))}}},u=d,l=(n("ad32"),n("2877")),f=Object(l["a"])(u,r,s,!1,null,"58f4bd80",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-142322fc.bb7046f4.js.map
<template>
  </div>
  <div class="layout-main">
    <div class="layout-2-wrap">
      <div class="top">
        <div class="container">
          <img class="img-block" src="@/assets/images/keshi.jpg" alt="">
          <div class="depart-tabs-wrap wow fadeInUp">

            <ul class="link-tabs-list alt-department clearfix">
              <li class="item fl active">
                <a href="" class="box">
                  <div class="item-box">
                    <div class="i-img alt-4"></div>
                    <p class="text">全部科室</p>
                  </div>
                </a>
              </li>

            </ul>
          </div>  </div>
      </div>
      <div class="layout-2-content">
        <div class="container">
          <div class="d-container clearfix">
            <div class="left fl wow fadeInLeft">
              <div class="mz-side-links-list">
                <div class="title-box">
                  <p class="text2">
                    <span class="span1">就医指南</span><span class="span2">Guide to seeking medical</span>
                  </p>
                </div>
                <div class="body-box">
                  <ul>
                    <li class="b-item" @click="$router.push({path:'/medicalguide'})">
                      <a  class="block">
                        <p class="text-link">就医指南</p>
                      </a>
                    </li>
                    <li class="b-item " @click="$router.push({path:'/hospitallayout'})">
                      <a  class="block">
                        <p class="text-link">医院地址</p>
                      </a>
                    </li>
                    <li class="b-item ">
                      <a  class="block">
                        <p class="text-link" @click="$router.push({path:'/health'})">健康体检</p>
                      </a>
                    </li>
                    <li class="b-item ">
                      <a  class="block">
                        <p class="text-link" @click="$router.push({path:'/appointment'})">预约挂号</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>      </div>
            <div class="right fr wow fadeInRight">
              <ul class="r-content clearfix">

                <li class="r-item fl" v-for="item in departmentList" :key="item.id" @click="$router.push({path:`/departmentDetail/${item.id}`})">
                  <a class="block">
                    <div class="box">
                      <div class="b-img alt-yj-1">
                        <img style="height: 60%;width: 60%;margin-top: 20%;margin-left: 20%;" :src="item.pic">
                      </div>
                      <div class="box-info">
                        <p class="text1 alt-333 ft-18 lh-1 mb-10">{{item.departmentName}}</p>
                        <div class="text2 js-text-ov">
                          <p v-html="item.departmentContent"></p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>    	<!-- 页面中心内容 -->
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "department",
  mounted() {
    new this.$wow.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0
    }).init();
    this.getDepartmentList()
  },
  methods:{
    // 获取科室列表
    getDepartmentList(){
      let query = {
        pageNum: 1,
        pageSize: 30
      }
      this.$store.dispatch('department/getDepartmentList',query)
    }
  },
  computed:{
    ...mapState('department',['departmentList'])
  }
}
</script>

<style scoped>
.layout-2-wrap .layout-2-content .d-container .right { padding-left: 10px; }

.layout-2-wrap .layout-2-content .d-container .right .r-item { width: 50%; padding: 0 0 20px 20px; }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box { position: relative; height: 130px; border: 1px solid #E7E7E7; padding-left: 130px; }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img { position: absolute; left: 0; top: 0; width: 130px; height: 100%; border-right: 1px solid #E7E7E7; background-position: center center; background-repeat: no-repeat; }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-1 { background-image: url("~@/assets/ks-z-1.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-2 { background-image: url("~@/assets/ks-z-2.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-3 { background-image: url("~@/assets/ks-z-3.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-4 { background-image: url("~@/assets/ks-z-4.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-5 { background-image: url("~@/assets/ks-z-5.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-6 { background-image: url("~@/assets/ks-z-6.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-7 { background-image: url("~@/assets/ks-z-7.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-8 { background-image: url("~@/assets/ks-z-8.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-yj-1 { background-image: url("~@/assets/ks-yj-1.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-yj-2 { background-image: url("~@/assets/ks-yj-2.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-yj-3 { background-image: url("~@/assets/ks-yj-3.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-yj-4 { background-image: url("~@/assets/ks-yj-4.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-qj-1 { background-image: url("~@/assets/ks-qj-1.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-qj-2 { background-image: url("~@/assets/ks-qj-2.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-qj-3 { background-image: url("~@/assets/ks-qj-3.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-qj-4 { background-image: url("~@/assets/ks-qj-3.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-qj-5 { background-image: url("~@/assets/ks-qj-5.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-qj-6 { background-image: url("~@/assets/ks-qj-6.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-qj-7 { background-image: url("~@/assets/ks-qj-7.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-qj-8 { background-image: url("~@/assets/ks-qj-8.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .b-img.alt-qj-9 { background-image: url("~@/assets/ks-qj-9.png"); }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .box-info { height: 100%; overflow: hidden; padding-left: 20px; padding-top: 20px; padding-right: 20px; padding-bottom: 16px; }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .box-info .text1 { white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }

.layout-2-wrap .layout-2-content .d-container .right .r-item .box .box-info .text2 p { font-size: 14px; font-weight: 400; color: #666; line-height: 22px; word-break: break-all; -o-text-overflow: ellipsis; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; overflow: hidden; height: 64px; }

</style>

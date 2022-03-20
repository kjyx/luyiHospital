<template>
  <div class="layout-2-wrap">
    <div class="top">
      <div class="container">
        <div class="ksjs-banner">
          <div style="position: absolute;top: 125px;left: 100px;font-size: 35px;color: #fff;font-weight: 600;">
           {{departmentDetailList.departmentName}}             </div>
          <img class="img-block" src="@/assets/images/department01.jpg" alt="">
        </div>
        <div class="depart-tabs-wrap wow fadeInUp">

          <ul class="link-tabs-list clearfix alt-department-ks">
            <li class="item fl active">
              <a class="box">
                <div class="item-box">
                  <div class="i-img alt-1"></div>
                  <p class="text">科室介绍</p>
                </div>
              </a>
            </li>
            <li class="item fl" @click="$router.push({path:`/experts/${departmentDetailList.id}`})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-5"></div>
                  <p class="text">专家教授</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="layout-2-content">
      <div class="container">
        <div class="ks-container clearfix">
          <div class="left fl wow fadeInLeft">
            <div class="common-left-content">
              <p class="common-title-icon alt-ksjs mb-18">
                科室介绍<span>Section introduction</span>
              </p>
              <div class="common-fwb-content-wrap">
                <p v-html="departmentDetailList.departmentContent">
                  </p>
              </div>
            </div>
          </div>

          <div class="mz-side-links-list" style="float: right;width: 300px;">
            <div class="title-box">
              <p class="text2">
                <span class="span1">就医指南</span>
                <span class="span2">Guide to seeking medical</span>
              </p>
            </div>
            <div class="body-box">
              <ul>
                <li class="b-item" @click="$router.push({path:'/medicalguide'})">
                  <a class="block">
                    <p class="text-link">就医指南</p>
                  </a>
                </li>
                <li class="b-item" @click="$router.push({path:'/hospitallayout'})">
                  <a class="block">
                    <p class="text-link">医院地址</p>
                  </a>
                </li>
                <li class="b-item ">
                  <a class="block">
                    <p class="text-link" @click="$router.push({path:'/health'})">健康体检</p>
                  </a>
                </li>
                <li class="b-item ">
                  <a class="block">
                    <p class="text-link" @click="$router.push({path:'/appointment'})">预约挂号</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>    	<!-- 页面中心内容 -->
</template>

<script>
import {reqDepartmentDetail} from "@/api";

export default {
  name: "departmentDetail",
  data(){
    return{
      departmentDetailList: {}
    }
  },
  mounted() {
    this.getDepartmentDetail()
  },
  methods:{
    async getDepartmentDetail(){
      const result = await reqDepartmentDetail(this.$route.params.id)
      if (result.code === 200) {
        this.departmentDetailList = result.data
      }
    },
  }

}
</script>

<style scoped>

.ksjs-banner { position: relative; overflow: hidden; }

.ksjs-banner .ksjs-all-menu--btn { position: absolute; right: 30px; top: 30px; width: 118px; height: 38px; background-color: #023E7D; background-image: url("~@/assets/ks-icon-menu.png"); background-repeat: no-repeat; background-position: 17px center; border-radius: 19px; padding-left: 39px; font-size: 16px; color: #fff; line-height: 38px; cursor: pointer; }

.ksjs-banner .ksjs-all-menu--wrap { position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 2; opacity: 0; -webkit-transform: translateY(-40px); -moz-transform: translateY(-40px); -ms-transform: translateY(-40px); -o-transform: translateY(-40px); transform: translateY(-40px); overflow: hidden; visibility: hidden; -webkit-transition: all 0.3s; -o-transition: all 0.3s; -moz-transition: all 0.3s; transition: all 0.3s; }

.ksjs-banner .ksjs-all-menu--wrap.active { opacity: 1; -webkit-transform: translateY(0); -moz-transform: translateY(0); -ms-transform: translateY(0); -o-transform: translateY(0); transform: translateY(0); visibility: visible; }

.ksjs-banner .menu-close { position: absolute; right: 30px; top: 30px; z-index: 12; width: 20px; height: 20px; cursor: pointer; -webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg); }

.ksjs-banner .menu-close::after, .ksjs-banner .menu-close::before { content: ""; position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #fff; }

.ksjs-banner .menu-close::after { width: 1px; height: 100%; }

.ksjs-banner .menu-close::before { width: 100%; height: 1px; }

.ksjs-banner .menu-mask { position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 2; background-color: #000; opacity: 0.8; }

.ksjs-banner .ksjs-menu--list { position: relative; z-index: 5; padding-top: 75px; }

.ksjs-banner .ksjs-menu--list .ksjs-menu--item { display: inline-block; vertical-align: top; padding-left: 39px; }

.ksjs-banner .ksjs-menu--list .ksjs-menu--item a { display: block; font-size: 14px; color: #fff; line-height: 34px; }

.ksjs-banner .ksjs-menu--list .ksjs-menu--item a:hover { color: #E38523; text-decoration: underline; }
</style>

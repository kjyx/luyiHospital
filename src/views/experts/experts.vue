<template>
  <div class="layout-2-wrap">
    <div class="top">
      <div class="container">
        <div class="ksjs-banner" style="position: relative;">
          <div style="position: absolute;top: 125px;left: 100px;font-size: 35px;color: #fff;font-weight: 600;">
            {{ departmentDetailList.departmentName }}
          </div>
          <img class="img-block" src="@/assets/images/department01.jpg" alt=""/>
          <div class="ksjs-all-menu--wrap js-ksjs-menu">
            <!-- <div class="menu-close js-ksjs-close"></div> -->
            <div class="menu-mask"></div>
          </div>
        </div>
        <div class="depart-tabs-wrap wow fadeInUp">
          <ul class="link-tabs-list clearfix alt-department-ks">
            <li class="item fl " @click="$router.push({path:`/departmentDetail/${$route.params.id}`})">
              <a class="box">
                <div class="item-box">
                  <div class="i-img alt-1"></div>
                  <p class="text">科室介绍</p>
                </div>
              </a>
            </li>
            <li class="item fl active">
              <a class="box">
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
              <div class="ks-zjjs-wrap">
                <div class="ks-zjjs-leader">
                  <p class="common-title-icon alt-ksjs-kszj mb-29">
                    科室专家<span>Department experts</span>
                  </p>
                  <ul class="ks-zjjs-experts--list">
                    <li class="ks-zjjs-experts--list_item" v-for="item in expertsInfo" :key="item.id"
                        @click="bounced(item.id)">
                      <div class="ks-zjjs-box">
                        <div class="ks-zjjs-box--imgwrap">
                          <img :src="item.pic" alt=""/>
                        </div>
                        <div class="ks-zjjs-box--info">
                          <p class="box-info--title">{{ item.dockerName }}</p>
                          <div class="box-info--ground">
                            <label class="ground--label">职称</label>
                            <p class="ground--text text-ov1">{{ item.dockerTit }}</p>
                          </div>
                          <div class="box-info--ground">
                            <label class="ground--label">医疗特长</label>
                            <p class="ground--text text-ov1">
                              {{ item.dockerMedical }}
                            </p>
                          </div>
                        </div>
                        <div class="ks-zjjs-leader--content">
                          <div style="height: 100%;">
                            <p style="height: 100%;" v-html="item.dockerContent">
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <el-dialog
              :visible.sync="dialogShow"
              width="0px"
              custom-class="dialog-img"
              :show-close="false"
              top="0"
          >
            <div class="doctor-info-main">
              <div class="box-top">
                <div class="user-pic">
                  <div class="pic">
                    <el-image
                        :src="`${doctorInfo.pic}`"
                        fit="contain"
                        style="height: 255px;width: 206px;display: flex;justify-content: center;align-items: center"
                        lazy
                    >
                      <div slot=error>
                        <p style="color: #ccc;">正在加载...</p>
                      </div>
                    </el-image>
                  </div>
                  <p>{{ doctorInfo.dockerName }} {{ doctorInfo.dockerMedical }}</p>
                </div>
                <div class="right">
                  <p>医师简介</p>
                  <p>鹿邑心脑血管</p>
                  <div></div>
                </div>
              </div>
              <article>
                <div class="title">
                  <h1>Lu Yi Heart Head Blood-Vessel</h1>
                  <h3>开诊科室:{{ doctorInfo.dockerMedical }}</h3>
                  <h3>职务/职称:{{ doctorInfo.dockerTit }}</h3>
                </div>
                <p v-html="doctorInfo.dockerContent">
                </p>
              </article>
            </div>
          </el-dialog>
          <div class="right  fr wow fadeInRight alt-pl-30">
            <div class="mz-side-links-list">
              <div class="title-box">
                <p class="text2">
                      <span class="span1">就医指南</span
                      ><span class="span2">Guide to seeking medical</span>
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
    </div>
  </div>
</template>

<script>
import {reqDepartmentDetail, reqExpertsStyleList} from "@/api";
import mixin from '@/mixin/expertsInfo'

export default {
  name: "experts",
  mixins: [mixin],
  data() {
    return {
      expertsInfo: [],
      departmentDetailList: {}
    }
  },
  mounted() {
    this.getExperts(this.$route.params.id)
    this.getDepartmentDetail()
  },
  methods: {
    async getExperts(id) {
      let query = {
        pageNum: 1,
        pageSize: 10,
        departmentInfoId: id
      }
      const result = await reqExpertsStyleList(query)
      if (result.data.records.length > 0) {
        this.expertsInfo = result.data.records
      } else {
        query.departmentInfoId = null
        const result1 = await reqExpertsStyleList(query)
        this.expertsInfo = result1.data.records
      }

    },
    async getDepartmentDetail() {
      const result = await reqDepartmentDetail(this.$route.params.id)
      if (result.code === 200) {
        this.departmentDetailList = result.data
      }
    },
  }
}
</script>

<style scoped lang="less">
.ks-zjjs-wrap .ks-zjjs-box {
  position: relative;
  padding-left: 220px;
  overflow: hidden;
  position: relative
}

.ks-zjjs-wrap .ks-zjjs-box .ks-zjjs-box--imgwrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 220px;
  height: 100%;
}

.ks-zjjs-wrap .ks-zjjs-box .ks-zjjs-box--imgwrap img {
  display: block;
  width: 100%;
}

.ks-zjjs-wrap .ks-zjjs-box .ks-zjjs-box--info {
  padding-left: 24px;
}

.ks-zjjs-wrap .ks-zjjs-box .ks-zjjs-box--info .box-info--title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  line-height: 1;
  margin-bottom: 26px;
}

.ks-zjjs-wrap .ks-zjjs-box .ks-zjjs-box--info .box-info--ground {
  position: relative;
  margin-bottom: 14px;
  padding-left: 75px;
}

.ks-zjjs-wrap .ks-zjjs-box .ks-zjjs-box--info .box-info--ground .ground--label {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 14px;
  color: #666;
  line-height: 1;
}

.ks-zjjs-wrap .ks-zjjs-box .ks-zjjs-box--info .box-info--ground .ground--text {
  font-size: 14px;
  color: #333;
  line-height: 1;
}

.ks-zjjs-leader {
  border-bottom: 1px solid #D5D5D5;
  margin-bottom: 30px;
  position: relative
}

.ks-zjjs-leader .ks-zjjs-leader--content {
  position: relative;
  margin: 23px 20px;
  height: 160px;
  overflow: hidden;
}

.ks-zjjs-leader .ks-zjjs-leader--content.open {
  height: auto;
}

.ks-zjjs-leader .ks-zjjs-leader--content .togglet-btn {
  position: absolute;
  right: 0;
  bottom: 8px;
  display: none;
  font-size: 14px;
  line-height: 1;
  color: #094689;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
  cursor: pointer;
}

.ks-zjjs-leader .ks-zjjs-leader--content .togglet-btn.open {
  display: block;
}

.ks-zjjs-leader .ks-zjjs-leader--content p, .ks-zjjs-leader .ks-zjjs-leader--content div {
  font-size: 14px;
  font-weight: 400;
  color: #666;
  line-height: 28px;
}


.ks-zjjs-experts--list_item .ks-zjjs-leader--content {
  position: relative;
  margin: 10px 20px;
  height: 170px;
  overflow: hidden;
}

.ks-zjjs-experts--list_item .ks-zjjs-leader--content.open {
  height: auto;
}

.ks-zjjs-experts--list_item .ks-zjjs-leader--content p, .ks-zjjs-leader .ks-zjjs-leader--content div {
  font-size: 14px;
  font-weight: 400;
  color: #666;
  line-height: 28px;
}

.ks-zjjs-experts--list_item .togglet-btn {
  position: fixed;
  right: 0;
  font-size: 14px;
  line-height: 1;
  color: #094689;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
  cursor: pointer;
}

.ks-zjjs-experts--list_item .togglet-btn.open {
  display: block;
}


.ks-zjjs-experts--list_item {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #D5D5D5;
}

.ks-zjjs-experts--list_item:last-child {
  border-bottom: none;
}

.ks-zjjs-leader .togglet-btn {
  position: absolute;
  right: 0;
  bottom: 8px;
  font-size: 14px;
  line-height: 1;
  color: #094689;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
  cursor: pointer;
}

.ks-zjjs-leader .togglet-btn.open {
  display: block;
}

.doctor-info-main {
  color: black;
  box-shadow: 0 0 5px #ccc;
  border-radius: 15px;
  width: 1340px;
  //height: 850px;
  background-color: #fff;
  transform: translate(-50%, 0);
  padding: 70px 30px 0 80px;

  .box-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;

    .user-pic {
      width: 205px;
      height: 280px;

      p {
        font-weight: bold;
        text-align: center;
      }
    }

    .right {
      padding: 35px 65px 0 0;
      text-align: right;

      p:nth-of-type(1) {
        font-weight: bold;
        margin-bottom: 20px;
      }

      p:nth-of-type(2) {
        color: #6c8088;
        font-size: 17px;
        margin-bottom: 19px;
      }

      div {
        float: right;
        width: 54px;
        height: 3px;
        background-color: #6c8088;
      }
    }
  }

  article {
    .title {

      h1 {
        font-size: 37px;
        color: #dce4e4;
        margin-bottom: 50px;
      }

      h3 {
        margin-bottom: 20px;

      }

    }

    p {
      font-size: 16px;
      display: inline-block;
      line-height: 62px;
      /*border-bottom: 1px dashed #dce4e4;*/
      text-decoration: underline;
      text-underline-offset: 15px;
      text-decoration-style: dashed;
      text-decoration-color: #dce4e4;
    }
  }
}
</style>

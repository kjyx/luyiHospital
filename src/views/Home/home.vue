<template>
  <div class="index-wrap">
    <div class="index-top">
      <div class="swiper-container swiper-index-banner" ref="floor1Swiper" style="height: 100%">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in swiperList" :key="item.id">
            <img class="img-block" :src="item.pic" alt="">
          </div>
        </div>
        <div class="pagination-index" style="display: flex;justify-content: center;z-index: 10;"></div>
      </div>
      <div class="index-top-tabs wow fadeInUp">
        <div class="container">
          <ul class="i-t-list clearfix" style="display: flex; justify-content: center">
            <li class="i-item" @click="$router.push({path:'/hospitalProfile'})">
              <a>
                <div class="i-box">
                  <img src="~@/assets/zjch.png" alt="">
                  <p class="text">走进我们</p>
                </div>
              </a>
            </li>
            <li class="i-item" @click="$router.push({path:'/hospitallayout'})">
              <a>
                <div class="i-box">
                  <img src="~@/assets/jyzn.png" alt="">
                  <p class="text">就医指南</p>
                </div>
              </a>
            </li>
            <li class="i-item" @click="$router.push({path:'/department'})">
              <a>
                <div class="i-box">
                  <img src="~@/assets/ksjs.png" alt="">
                  <p class="text">科室介绍</p>
                </div>
              </a>
            </li>
            <li class="i-item" @click="$router.push({path:'/allexperts'})">
              <a>
                <div class="i-box">
                  <img src="~@/assets/images/fengcai-icon.png" alt="" style="width: 46px;height: 46px;">
                  <p class="text">专家风采</p>
                </div>
              </a>
            </li>
            <li class="i-item" @click="$router.push({path:'/medicalequipment'})">
              <a>
                <div class="i-box">
                  <img src="~@/assets/images/yiliaoqixie.png" alt="" style="width: 46px;height: 46px;">
                  <p class="text">医疗设备</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="index-new">
      <div class="container clearfix">
        <div class="left wow fadeInLeft">
          <div class="l-top clearfix">
            <p class="m-text-title fl">
              医院新闻<span>Hospital news</span>
            </p>
            <a @click="$router.push({path:'/hospitalNews'})" class="alt-more fr active">更多</a>
          </div>
          <div class="l-middle clearfix">
            <div class="left fl">
              <div class="swiper-container swiper-index-new" ref="floor2Swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="item in swiperNewsList" :key="item.id"
                       @click="$router.push({path:`/newsInfo/${item.id}`})">
                    <a class="block">
                      <img :src="item.pic" alt="">
                    </a>
                  </div>
                </div>
                <div class="pagination"></div>
              </div>
              <div class="l-swiper-info" id="js-l-swiper-info">
                <p class="text text-ov2" :class="{'active': current === index}" v-for="(item,index) in swiperNewsList"
                   :key="item.id" @click="$router.push({path:`/newsInfo/${item.id}`})"><a>{{ item.newsTitle }}</a></p>
              </div>
            </div>
            <div class="right fr">
              <div class="l-m-r-box">
                <ul class="l-m-rlist">
                  <li class="l-m-ritem clearfix" v-for="item in allNewsList" :key="item.id"
                      @click="$router.push({path:`/newsInfo/${item.id}`})">
                    <a target="_blank" class="clearfix">
                      <div class="left fl">
                        <p class="text1">{{ filters.formatTimer(item.createDate) }}</p>
                        <p class="text2">{{ filters1.formatTimer(item.createDate) }}</p>
                      </div>
                      <div class="right fr">
                        <p class="text1">
                          {{ item.newsTitle }} </p>
                        <div class="text2">
                          <p>
                            {{ item.newsDescription }} </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="l-footer clearfix">
            <div class="left">
              <div class="pos-c alt-w100" style="display: flex;justify-content: center;">
                <img class="l-img" src="~@/assets/images/xueshidongtai.png" alt="" style="width: 30%">
                <p class="text">学术动态<br><span>Hospital news</span></p>
              </div>
            </div>
            <div class="right">
              <ul class="l-f-r-box">
                <li class="item clearfix" v-for="item in Notice" :key="item.id"
                    @click="$router.push({path:`/newsInfo/${item.id}`})">
                  <a class="block"><p class="text ft14 alt-333 fl">
                    {{ item.newsTitle }} </p>
                    <p class="text ft14 alt-666 fr">2022-01-17</p></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right wow fadeInRight">
          <div class="r-box">
            <div class="r-b-top">
              <p class="text alt-333 ft18">
                医院公告<span class="alt-999 ft16">Announcement</span>
              </p>
              <a class="text2 alt-999 ft14">更多</a>
            </div>
            <div class="r-b-content">
              <ul>
                <li style="cursor: pointer" class="item" v-for="item in DynamicAndNotice" :key="item.id"
                    @click="$router.push({path:`/newsInfo/${item.id}`})">
                  <a class="block">
                    <p class="text1 text-ov2 ft14 alt-333">{{ item.newsTitle }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div style="cursor: pointer" class="dzby-f-box1 mt-30" @click="$router.push({path:'/recruitment'})">
            <a class="block">
            </a>
          </div>
          <div style="cursor: pointer" class="dzby-f-box mt-30" @click="$router.push({path:'/hospitalNews?id=2'})">
            <a class="block">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="index-zjfc wow fadeInUp">
      <div class="container" style="position: relative">
        <div class="i-zjfc-top">
          <p class="m-text-title zj">专家风采<span>Expert</span></p>
        </div>
        <div class="i-zjfc-pic-wrap">
          <div class="swiper-container swiper-index-zj" ref="floor3Swiper">
            <div class="swiper-wrapper">

              <div class="swiper-slide" v-for="item in expertsStyle" :key="item.id" style="cursor: pointer"
                   @click="bounced(item.id)">
                <div class="box">
                  <div class="item-box">
                    <div class="item-box--wrap">
                      <div class="item-box--wrap_img">
                        <img :src='item.pic'>
                      </div>
                      <div class="item-box--wrap_info">
                        <p class="text1">{{ item.dockerName }} <span>/ {{ item.dockerTit }}</span></p>
                        <p class="text2 text-ov3" v-html="item.dockerContent"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="swiper-button-next" style="position: absolute; right: -65px;top: 155px; color: #bbb;"></div>
        <div class="swiper-button-prev" style="position: absolute; left: -65px;top: 155px; color: #bbb"></div>
      </div>
      <div class="index-fot-wrap wow fadeInUp">
        <div class="container">
          <ul class="i-fot-list clearfix">

            <li class="item fl" @click="$router.push({path:'/Statement'})">
              <a class="block">
                <div class="box">
                  <div class="item-box">
                    <img src="~@/assets/it1.png" alt="">
                    <p class="text alt-333 ft16">院长致辞</p>
                    <p class="text alt-666 ft11">President's speech</p>
                  </div>
                </div>
              </a>
            </li>

            <li class="item fl" @click="$router.push({path:'/medicalguide'})">
              <a class="block">
                <div class="box">
                  <div class="item-box">
                    <img src="~@/assets/it2.png" alt="">
                    <p class="text alt-333 ft16">就医指南</p>
                    <p class="text alt-666 ft11">Medical guide</p>
                  </div>
                </div>
              </a>
            </li>

            <li class="item fl" @click="$router.push({path:'/health'})">
              <a class="block">
                <div class="box">
                  <div class="item-box">
                    <img src="~@/assets/it3.png" alt="">
                    <p class="text alt-333 ft16">体检须知</p>
                    <p class="text alt-666 ft11">
                      Physical examination instructions
                    </p>
                  </div>
                </div>
              </a>
            </li>

            <li class="item fl" @click="$router.push({path:'/hospitallayout'})">
              <a class="block">
                <div class="box">
                  <div class="item-box">
                    <img src="~@/assets/it4.png" alt="">
                    <p class="text alt-333 ft16">来院地图</p>
                    <p class="text alt-666 ft11">Map of Laiyuan</p>
                  </div>
                </div>
              </a>
            </li>

            <li class="item fl" @click="$router.push({path:'/recruitment'})">
              <a class="block">
                <div class="box">
                  <div class="item-box">
                    <img src="~@/assets/it5.png" alt="">
                    <p class="text alt-333 ft16">在线预约</p>
                    <p class="text alt-666 ft11">Online booking</p>
                  </div>
                </div>
              </a>
            </li>

            <li class="item fl" @click="$router.push({path:'/honor'})">
              <a  class="block">
                <div class="box">
                  <div class="item-box">
                    <img src="~@/assets/it6.png" alt="">
                    <p class="text alt-333 ft16">医院荣誉</p>
                    <p class="text alt-666 ft11">Hospital honor</p>
                  </div>
                </div>
              </a>
            </li>

            <li class="item fl" @click="$router.push({path:'/department'})">
              <a  class="block">
                <div class="box">
                  <div class="item-box">
                    <img src="~@/assets/it7.png" alt="">
                    <p class="text alt-333 ft16">科室中心</p>
                    <p class="text alt-666 ft11">Department Center</p>
                  </div>
                </div>
              </a>
            </li>

            <li class="item fl" @click="$router.push({path:'/hospitalNews?id=2'})">
              <a  class="block">
                <div class="box">
                  <div class="item-box">
                    <img src="~@/assets/it2.png" alt="">
                    <p class="text alt-333 ft16"> 医院新闻</p>
                    <p class="text alt-666 ft11">Hospital news</p>
                  </div>
                </div>
              </a>
            </li>

          </ul>
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
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import {mapGetters, mapState} from "vuex";
import mixin from '@/mixin/expertsInfo'
import {reqSwiperList} from "@/api";

export default {
  name: "home",
  mixins: [mixin],
  data() {
    return {
      mySwiper: {},
      current: 0,
      filters: {
        formatTimer: (value) => {
          let date = new Date(value);
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          return d;
        }
      },
      filters1: {
        formatTimer: (value) => {
          let date = new Date(value);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          return y + "-" + MM;
        }
      },
      swiperList: [],
    }
  },

  mounted() {
    new this.$wow.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0
    }).init();
    this.getSwiperNewsList()
    this.getDynamic()
    this.getAcademicInfo()
    this.getEXpertsStyle()
    this.getSWiperList()
  },
  methods: {
    // 轮播医院新闻
    getSwiperNewsList() {
      let query = {
        typeId: 2,
        pageNum: 1,
        pageSize: 4
      }
      this.$store.dispatch('news/getAllNewsList', query)
    },

    // 获取医院公告
    getDynamic() {
      let query = {
        typeId: 3,
        pageNum: 1,
        pageSize: 4
      }
      this.$store.dispatch("news/getDynamicAndNotice", query)
    },

    // 学术动态
    getAcademicInfo() {
      let query = {
        typeId: 6,
        pageNum: 1,
        pageSize: 3
      }
      this.$store.dispatch("news/getNotice", query)
    },

    // 专家风采
    getEXpertsStyle() {
      let query = {
        pageNum: 1,
        pageSize: 10,
        departmentInfoId: null
      }
      this.$store.dispatch('experts/getExpertsStyle', query)
    },
    // 轮播图
   async getSWiperList() {
     let query = {
       pageNum: 1,
       typeId: 2,
       pageSize: 10
     }
      let swiperImg = sessionStorage.getItem('swiperImg')
        if (swiperImg != null) {
          this.swiperList = JSON.parse(swiperImg)
        }else {
          const result = await reqSwiperList(query)
          this.swiperList = result.data.records
          sessionStorage.setItem('swiperImg', JSON.stringify(result.data.records))
        }
    }
  },

  computed: {
    // 数据
    ...mapGetters('news', ["swiperNewsList"]),
    ...mapState('news', ["DynamicAndNotice", "allNewsList", "Notice"]),
    ...mapState('experts', ["expertsStyle"])
  },

  watch: {
    "swiperNewsList": {
      handler() {
        this.$nextTick(() => {
          // 保存this
          let a = this
          new Swiper(this.$refs.floor2Swiper, {
            centeredSlides: true,
            // loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.pagination',
              // 点击小圆点切换图片
              clickable: true
            },
            autoplay: {
              delay: 5000,
              disableOnInteraction: true,
            },
            // 切换轮播图 内容跟着一起切换
            on: {
              slideChangeTransitionStart: function () {
                a.current = this.activeIndex
              },
            },
          });
        })
      }
    },
    "expertsStyle": {
      handler() {
        this.$nextTick(() => {
          this.mySwiper = new Swiper(this.$refs.floor3Swiper, {
            // centeredSlides: true,
            loop: true, // 循环模式选项
            slidesPerView: 2,
            slidesPerGroup: 2,
            speed: 1200,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              delay: 5000,
              disableOnInteraction: true,
            },
          });
        })
      }
    },
    swiperList() {
      this.$nextTick(() => {
        new Swiper(this.$refs.floor1Swiper, {
          centeredSlides: true,
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.pagination-index',
            // 点击小圆点切换图片
            clickable: true
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: true,
          },
        });
      })
    }
  }
}
</script>

<style scoped lang="less">
.index-top {
  position: relative;
}

.index-top > img {
  display: block;
  width: 100%;
  height: 100%
}

.index-top .index-top-tabs {
  position: relative;
  margin-top: -68px;
  z-index: 10;
}

.index-top .index-top-tabs .i-item {
  float: left;
  width: 20%;
  height: 136px;
  cursor: pointer;
  background-position: center center;
  background-repeat: no-repeat;
  -o-background-size: 100% 100%;
  background-size: 100% 100%;
  text-align: center;
}

.index-top .index-top-tabs .i-item > a {
  display: block;
  width: 100%;
  height: 100%;
}

.index-top .index-top-tabs .i-item:nth-child(odd) {
  background-image: url("~@/assets/images/homeTabeimg.jpg");
}

.index-top .index-top-tabs .i-item:nth-child(even) {
  background-image: url("~@/assets/images/homeTabeimg.jpg");
}

.index-top .index-top-tabs .i-item .i-box {
  display: block;
  padding-top: 23px;
}

.index-top .index-top-tabs .i-item .i-box .text {
  font-size: 18px;
  color: #fff;
  margin-top: 20px;
  line-height: 18px;
}

.index-new {
  padding-top: 29px;
}

.index-new .left {
  float: left;
  width: 838px;
}

.index-new .left .l-top {
  margin-bottom: 27px;
}

.index-new .left .l-middle .left {
  width: 362px;
}

.index-new .left .l-middle .left .swiper-index-new {
  height: 240px;
}

.index-new .left .l-middle .left .swiper-index-new img {
  display: block;
  width: 100%;
}

.index-new .left .l-middle .left .l-swiper-info {
  width: 361px;
  height: 88px;
  background: #EDEEF3;
  padding: 24px 16px;
  overflow: hidden;
}

.index-new .left .l-middle .left .l-swiper-info .text {
  display: none;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  line-height: 22px;
  height: 44px;
  overflow: hidden;
}

.index-new .left .l-middle .left .l-swiper-info .text a {
  color: #333;
}

.index-new .left .l-middle .left .l-swiper-info .text.active {
  display: block;
}

.index-new .left .l-middle .right {
  width: 476px;
  padding-left: 18px;
}

.index-new .left .l-middle .right .l-m-r-box {
  height: auto;
  overflow: hidden;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem {
  margin-bottom: 25px;
  cursor: pointer;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem > a {
  display: block;
  width: 100%;
  height: 100%;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem:last-child {
  margin-bottom: 0;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem .left {
  width: 83px;
  height: 63px;
  background: #EDEEF3;
  text-align: center;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem .left .text1 {
  font-size: 28px;
  line-height: 1;
  color: #333;
  margin-bottom: 6px;
  margin-top: 10px;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem .left .text2 {
  font-size: 14px;
  font-weight: 300;
  color: #666;
  line-height: 1;
  opacity: 0.5;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem .right {
  width: 373px;
  padding-left: 15px;
  height: 63px;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem .right .text1 {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  line-height: 1;
  margin-bottom: 10px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem .right .text2 {
  height: 40px;
  overflow: hidden;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem .right .text2 p {
  font-size: 14px;
  font-weight: 300;
  color: #666;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem:hover .left, .index-new .left .l-middle .right .l-m-r-box .l-m-ritem.active .left {
  background: url("~@/assets/rlbg.png") no-repeat center center;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem:hover .left .text2, .index-new .left .l-middle .right .l-m-r-box .l-m-ritem:hover .left .text1, .index-new .left .l-middle .right .l-m-r-box .l-m-ritem.active .left .text2, .index-new .left .l-middle .right .l-m-r-box .l-m-ritem.active .left .text1 {
  color: #fff;
}

.index-new .left .l-middle .right .l-m-r-box .l-m-ritem:hover .right .text1, .index-new .left .l-middle .right .l-m-r-box .l-m-ritem.active .right .text1 {
  color: #023E7D;
}

.index-new .left .l-footer {
  margin-top: 30px;
  height: 102px;
  background-image: -webkit-linear-gradient(left, #EDEEF3, #fff);
  background-image: -moz-linear-gradient(left, #EDEEF3, #fff);
  background-image: -o-linear-gradient(left, #EDEEF3, #fff);
  background-image: linear-gradient(to right, #EDEEF3, #fff);
  border: 1px solid #E6E6E6;
}

.index-new .left .l-footer .left {
  position: relative;
  width: 190px;
  border-right: 1px solid #E6E6E6;
  height: 100%;
  text-align: center;
}

.index-new .left .l-footer .left .text, .index-new .left .l-footer .left .l-img {
  display: inline-block;
  vertical-align: middle;
}

.index-new .left .l-footer .left .text {
  font-size: 18px;
  color: #333;
  line-height: 1;
  text-align: left;
  padding-left: 14px;
}

.index-new .left .l-footer .left .text span {
  font-size: 14px;
  line-height: 1;
  color: #999;
  margin-top: 6px;
}

.index-new .left .l-footer .right {
  width: 640px;
  height: 100%;
  padding: 7px 15px;
}

.index-new .left .l-footer .right .l-f-r-box .text {
  padding: 7px 0;
  line-height: 1;
}

.index-new .right {
  float: right;
  width: 362px;
  padding-left: 22px;
}

.index-new .right .r-box {
  width: 340px;
  height: 240px;
  background: #FFFFFF;
  border: 1px solid #E6E6E6;
}

.index-new .right .r-box .r-b-top {
  position: relative;
  height: 50px;
  border-bottom: 1px solid #E6E6E6;
}

.index-new .right .r-box .r-b-top .text {
  line-height: 50px;
  height: 50px;
  padding-left: 22px;
}

.index-new .right .r-box .r-b-top .text span {
  margin-left: 5px;
}

.index-new .right .r-box .r-b-top .text2 {
  position: absolute;
  right: 0;
  top: 0;
  height: 50px;
  line-height: 50px;
  width: 57px;
  border-left: 1px solid #E6E6E6;
  text-align: center;
  cursor: pointer;
}

.index-new .right .r-box .r-b-content {
  padding: 0 20px;
}

.index-new .right .r-box .r-b-content .item {
  padding: 15px 0;
  padding-left: 14px;
  background: url("~~@/assets/icon-rj.png") no-repeat left 19px;
  border-bottom: 1px dashed #E6E6E6;
}

.index-new .right .r-box .r-b-content .item:last-child {
  border-bottom: none;
}

.index-new .right .r-box .r-b-content .item .text1 {
  font-size: 14px;
  line-height: 1;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  -webkit-line-clamp: 0;
}

.index-zjfc {
  margin-top: 30px;
  background: url("~~@/assets/images/footer1beijing.jpg") no-repeat center center;
  -o-background-size: 100% 100%;
  background-size: 100% 100%;
  padding: 30px 0 35px 0;
}

.index-zjfc .i-zjfc-top {
  position: relative;
}

.index-zjfc .i-zjfc-top .swiper-index-zj-btn {
  position: absolute;
  right: 0;
  top: 0;
}

.index-zjfc .i-zjfc-top .swiper-index-zj-btn p {
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}

.index-zjfc .i-zjfc-pic-wrap {
  margin-top: 29px;
}

.index-zjfc .swiper-index-zj {
  height: 220px;
  margin-left: -13px;
  margin-right: -13px;
}

.index-zjfc .swiper-index-zj .swiper-slide {
  height: 100%;
}

.index-zjfc .swiper-index-zj .box {
  padding-left: 13px;
  padding-right: 13px;
  height: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
}

.index-zjfc .swiper-index-zj .box a {
  height: 100%;
}

.index-zjfc .swiper-index-zj .item-box {
  height: 100%;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.12);
  background: #fff;
  padding: 8px;
}

.index-zjfc .swiper-index-zj .item-box .item-box--wrap {
  position: relative;
  height: 100%;
  padding-left: 232px;
}

.index-zjfc .swiper-index-zj .item-box .item-box--wrap .item-box--wrap_img {
  position: absolute;
  left: 0;
  top: 0;
  width: 232px;
  height: 174px;
  overflow: hidden;
  text-align: center;
  line-height: 174px;
}

.index-zjfc .swiper-index-zj .item-box .item-box--wrap .item-box--wrap_img img {
  max-width: 100%;
  max-height: 100%;
}

.index-zjfc .swiper-index-zj .item-box .item-box--wrap .item-box--wrap_info {
  padding-left: 20px;
}

.index-zjfc .swiper-index-zj .item-box .item-box--wrap .item-box--wrap_info .text1 {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  line-height: 24px;
  padding-top: 16px;
  margin-bottom: 10px;
}

.index-zjfc .swiper-index-zj .item-box .item-box--wrap .item-box--wrap_info .text1 span {
  font-size: 14px;
  font-weight: 400;
  color: #666;
  line-height: 24px;
}

.index-zjfc .swiper-index-zj .item-box .item-box--wrap .item-box--wrap_info .text2 {
  font-size: 14px;
  font-weight: 400;
  color: #666;
  line-height: 24px;
  height: 72px;
  overflow: hidden;
}

.index-zjfc .swiper-index-zj .item-box .item-box--wrap .item-box--wrap_info .text3 {
  width: 102px;
  height: 33px;
  border: 1px solid #DFDFDF;
  margin-right: auto;
  margin-top: 15px;
  font-size: 12px;
  color: #A0A0A0;
  line-height: 33px;
  text-align: center;
  text-transform: uppercase;
}

.index-fot-wrap {
  padding-top: 25px;
  padding-bottom: 18px;
}

.index-fot-wrap .i-fot-list {
  margin-left: -6px;
  margin-right: -6px;
}

.index-fot-wrap .i-fot-list .item {
  width: 25%;
  padding: 0 6px 12px 6px;
}

.index-fot-wrap .i-fot-list .item .box {
  -o-background-size: cover;
  background-size: cover;
  height: 92px;
  cursor: pointer;
  position: relative;
  padding: 21px 0 21px 100px;
  background: url("~@/assets/images/fenleibeijing.jpg") no-repeat left top;
}

.index-fot-wrap .i-fot-list .item .box .item-box > img {
  position: absolute;
  left: 36px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.index-fot-wrap .i-fot-list .item .box .item-box .text {
  padding: 5px 0;
  line-height: 1;
  text-transform: uppercase;
}

.pagination-index {
  position: absolute;
  left: 50%;
  bottom: 70px;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
}

/deep/ .swiper-button-prev {
  position: absolute;
  left: -10px;
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

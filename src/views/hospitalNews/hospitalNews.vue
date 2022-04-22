<template>
  <div class="layout-main">
    <div class="dynamic-wrap">
      <div class="top">
        <div class="container">
          <div class="title-wrap">
            <p class="m-text-title">{{ newsTitle }}<span>Hospital news</span></p>
          </div>
          <div class="top-info-wrap clearfix">
            <div class="left fl wow fadeInLeft">
              <div class="l-s-pic-wrap">
                <div class="swiper-container swiper-index-new" ref="newsSwiper">
                  <div class="swiper-wrapper" ref="swiper">
                    <div class="swiper-slide" v-for="(item,index) in swiperList" :key="item.id"
                         @click="$router.push({path:`/newsInfo/${item.id}`})">
                      <img :src="item.pic" alt="" style="width: 100%;height: 100%;"/>
                    </div>
                  </div>
                  <div class="tabs-list">
                    <ul class="clearfix" id="js-tabs">
                      <li class="item alt-1 " :class="{'active': index === current}"
                          v-for="(item3,index) in swiperList" :key="item3.id" @click="switchChange(index)" ref="li">
                        <div class="box">
                          <p class="text1">{{ filters.formatTimer(item3.createDate) }}</p>
                          <p class="text2">{{ filters1.formatTimer(item3.createDate) }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="l-info-wrap" id="js-info">
                <a class="block info-cont " v-for="(item2,index) in swiperList" :key="item2.id"
                   :class="{'active': current === index}" @click="$router.push({path:`/newsInfo/${item.id}`})">
                  <p class="text1">{{ item2.newsTitle }}</p>
                  <div class="text2" style="font-size: 15px;padding-top: 10px">{{ item2.newsDescription }}</div>
                </a>
              </div>
            </div>
            <div class="right fr wow fadeInRight">
              <div class="r-box-wrap">
                <div class="r-top clearfix" id="js-dt-tabs">
                  <div class="text" :class="{'active': current1 === 6}" @click="getDynamicAndNotice(6)">
                    <p>学术动态</p>
                  </div>
                  <div class="text" :class="{'active': current1 === 3}" @click="getDynamicAndNotice(3)">
                    <p>医院通告</p>
                  </div>
                </div>
                <div class="r-content" id="js-dt-content">
                  <ul class="r-list active">
                    <li class="item" v-for="item in DynamicAndNotice" :key="item.id"
                        @click="$router.push({path:`/newsInfo/${item.id}`})">
                      <a class="block">
                        <p class="text1">{{ item.newsTitle }}</p>
                        <p class="text2">{{ filterss3.formatTimer(item.createDate) }}</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-content">
        <div class="container">
          <ul class="d-content-list wow fadeInUp">
            <li class="item" v-for="item in allNewsList" :key="item.id"
                @click="$router.push({path:`/newsInfo/${item.id}`})">
              <a target="_blank" class="block">
                <div class="box clearfix">
                  <div class="left">
                    <div class="images" style="width: 100%;height: 100%;">
                      <img :src="item.pic" alt="" style="width: 100%;height: 100%">
                    </div>
                    <div class="tips">
                      <p class="text1">{{ filters.formatTimer(item.createDate) }}</p>
                      <p class="text2">{{ filters1.formatTimer(item.createDate) }}</p>
                    </div>
                  </div>
                  <div class="right">
                    <p class="text1">{{ item.newsTitle }}</p>
                    <div class="text2 text-ov5">
                      <p v-html="item.newsContent"></p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <el-pagination
          style="margin: 50px 0"
          align="center"
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="pageParmise.pageSize"
          :current-page="pageParmise.pageNum"
          @current-change="getNewsPagination"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import 'swiper/css/swiper.css'
import {mapState} from 'vuex'
import {reqNewsList} from "@/api";

export default {
  name: "hospitalNews",
  data() {
    return {
      pageParmise: {
        typeId: 2,
        pageNum: 1,
        pageSize: 5
      },
      swiperList: [],
      current: 0,
      // 右侧 tab
      current1: 6,
      newsTitle: '',
      // 切割时间
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
      filterss3: {
        formatTimer: (value) => {
          let date = new Date(value);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          return y + "-" + MM + '-' + d;
        }
      }
    }

  },
  mounted() {
    // 获取新闻信息
    this.getNewsList(this.$route.query.id)
    // 新闻分类title
    this.subNavTitle(this.$route.query.id)
    // 学生数动态and新闻通稿
    this.getDynamicAndNotice(this.current1)
    this.swiperNewsList(this.$route.query.id)
    new this.$wow.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0
    }).init();
  },
  methods: {
    // 获取新闻信息
    getNewsList(id) {
      this.pageParmise.typeId = id
      this.$store.dispatch('news/getAllNewsList', this.pageParmise)
    },

    async swiperNewsList(id) {
      this.pageParmise.typeId = id
      const result = await reqNewsList(this.pageParmise)
      if (result.code === 200) {
        this.swiperList = result.data.records
      }
    },
    // 轮播图切换
    switchChange(index) {
      this.current = index
      let swiper = this.$refs.swiper
      let swiperWidth = swiper.offsetWidth
      swiper.style.transform = `translate3d(${-(index) * swiperWidth}px,0,0)`
      swiper.style.transitionDuration = '1000ms'
    },

    // 新闻title
    subNavTitle(id) {
      switch (id) {
        case "2": {
          this.newsTitle = '医院新闻'
          break
        }
        case "3": {
          this.newsTitle = '医院通告'
          break
        }
        case "4": {
          this.newsTitle = '护理风采'
          break
        }
        case "5": {
          this.newsTitle = '招标采购'
          break
        }
        case "6": {
          this.newsTitle = '学术动态'
          break
        }
      }
    },

    // 右侧 动态跟通告
    getDynamicAndNotice(id) {
      this.current1 = id
      let query = {
        typeId: id,
        pageNum: 1,
        pageSize: 5
      }
      this.$store.dispatch('news/getDynamicAndNotice', query)
    },

    getNewsPagination(page = 1) {
      this.pageParmise.pageNum = page
      this.getNewsList(this.$route.query.id)
      window.scrollTo(0, 800)
    }

  },
  watch: {
    'swiperList': {
      handler() {
        this.$nextTick(() => {
          let a = this
          new Swiper(this.$refs.newsSwiper, {
            centeredSlides: true,
            // loop: true, // 循环模式选项
            // 如果需要分页器=
            observer: true,
            observeParents: true,
            speed: 1000,
            autoplay: {
              delay: 2000,
              // disableOnInteraction: true,
            },
            on: {
              slideChangeTransitionStart: function () {
                a.current = this.activeIndex
              },
            },
          });
        })
      }
    },

    // 在当前组件监听路由参数  只要参数一变 就调用函数传递参数发送请求
    '$route.query.id'() {
      this.subNavTitle(this.$route.query.id)
      this.getNewsList(this.$route.query.id)
      this.swiperNewsList(this.$route.query.id)
      // this.getSwiperNewsList(this.$route.query.id)
    },
  },

  computed: {
    // 全部新闻
    ...mapState('news', ["allNewsList", "total", "DynamicAndNotice"]),
  }

}
</script>

<style scoped>
.dynamic-wrap .top {
  background: url("~~@/assets/images/newsbeijing.jpg") no-repeat center center;
  -o-background-size: cover;
  background-size: cover;
  padding-bottom: 30px;
}

.dynamic-wrap .title-wrap {
  padding: 19px 0;
}

.dynamic-wrap .top-info-wrap {
  height: 550px;
}

.dynamic-wrap .top-info-wrap .left {
  width: 830px;
  height: 100%;
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap {
  height: 374px;
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .swiper-index-new {
  height: 100%;
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item {
  float: left;
  width: 100px;
  height: 76px;
  margin-right: 2px;
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.active {
  background: #fff !important;
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.active .box .text1 {
  color: #2358C0;
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.active .box .text2 {
  color: #2358C0;
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.alt-1 {
  background: #2358c0;
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.alt-2 {
  background: rgba(35, 88, 192, 0.8);
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.alt-3 {
  background: rgba(35, 88, 192, 0.7);
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.alt-4 {
  background: rgba(35, 88, 192, 0.6);
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.alt-5 {
  background: rgba(35, 88, 192, 0.3);
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item .box {
  text-align: center;
  cursor: pointer;
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item .box .text1 {
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  line-height: 1;
  margin-bottom: 6px;
  margin-top: 10px;
}

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item .box .text2 {
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  line-height: 1;
  opacity: 0.5;
}

.dynamic-wrap .top-info-wrap .left .l-info-wrap {
  height: 176px;
  background: #fff;
  padding: 34px;
}

.dynamic-wrap .top-info-wrap .left .l-info-wrap .info-cont {
  display: none;
}

.dynamic-wrap .top-info-wrap .left .l-info-wrap .info-cont.active {
  display: block;
}

.dynamic-wrap .top-info-wrap .left .l-info-wrap .text1 {
  font-size: 24px;
  font-weight: 500;
  color: #333;
  line-height: 39px;
}

.dynamic-wrap .top-info-wrap .left .l-info-wrap .text2 p {
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 24px;
  word-break: break-all;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
  height: 72px;
}

.dynamic-wrap .top-info-wrap .right {
  width: 340px;
  height: 100%;
  background: #fff;
}

.dynamic-wrap .top-info-wrap .right .r-top {
  position: relative;
  height: 56px;
}

.dynamic-wrap .top-info-wrap .right .r-top:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  background: #0C4482;
  z-index: 2;
}

.dynamic-wrap .top-info-wrap .right .r-top .text {
  float: left;
  width: 50%;
  padding-top: 4px;
  height: 100%;
  background: #0C4482;
}

.dynamic-wrap .top-info-wrap .right .r-top .text.active {
  background: #fff;
}

.dynamic-wrap .top-info-wrap .right .r-top .text.active > p {
  color: #0C4482;
}

.dynamic-wrap .top-info-wrap .right .r-top .text > p {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  line-height: 52px;
  text-align: center;
  cursor: pointer;
}

.dynamic-wrap .top-info-wrap .right .r-content {
  padding: 0 20px;
}

.dynamic-wrap .top-info-wrap .right .r-content .r-list {
  display: none;
}

.dynamic-wrap .top-info-wrap .right .r-content .r-list.active {
  display: block;
}

.dynamic-wrap .top-info-wrap .right .r-content .item {
  padding: 18px 0;
  border-bottom: 1px dashed #D5D5D5;
  padding-left: 15px;
  background: url("~~@/assets/icon-rj.png") no-repeat left 28px;
}

.dynamic-wrap .top-info-wrap .right .r-content .item:last-child {
  border-bottom: none;
}

.dynamic-wrap .top-info-wrap .right .r-content .item .text1 {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  line-height: 20px;
  margin-bottom: 9px;
  height: 40px;
  overflow: hidden;
  word-break: break-all;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.dynamic-wrap .top-info-wrap .right .r-content .item .text2 {
  font-size: 14px;
  font-weight: 400;
  color: #999;
  line-height: 1;
}

.dynamic-wrap .d-content {
  background: #fff;
}

.dynamic-wrap .d-content .item {
  padding: 30px 0;
  border-bottom: 1px solid #D5D5D5;
}

.dynamic-wrap .d-content .item .left {
  position: relative;
  float: left;
  width: 320px;
  height: 200px;
  overflow: hidden;
}

.dynamic-wrap .d-content .item .left .tips {
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: 81px;
  height: 75px;
  background: rgba(35, 88, 192, 0.7);
  text-align: center;
}

.dynamic-wrap .d-content .item .left .tips .text1 {
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  margin-top: 5px;
}

.dynamic-wrap .d-content .item .left .tips .text2 {
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  line-height: 24px;
  opacity: 0.5;
}

.dynamic-wrap .d-content .item .right {
  float: right;
  width: 880px;
  padding-left: 30px;
  padding-top: 19px;
  max-height: 180px;
  overflow: hidden;
}

.dynamic-wrap .d-content .item .right .text1 {
  font-size: 20px;
  font-weight: 500;
  color: #333;
  line-height: 1;
  margin-bottom: 25px;
}

.dynamic-wrap .d-content .item .right .text2 p {
  font-size: 14px;
  font-weight: 400;
  color: #666;
  line-height: 24px;
  word-break: break-all;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

/* detail */
.dy-detail-wrap {
  padding: 14px 0 30px 0;
}

.dy-detail-wrap .bream-wrap {
  margin-bottom: 30px;
}

.dy-detail-wrap .bream-wrap li.item {
  float: left;
  font-size: 14px;
  color: #999;
  margin-right: 5px;
}

.dy-detail-wrap .bream-wrap li.item a {
  font-size: 14px;
  color: #999;
}

.dy-detail-wrap .bream-wrap li.item a.active {
  color: #0C4482;
}

.dy-detail-wrap .dy-d-content .left {
  float: left;
  width: 340px;
  border: 1px solid #E6E6E6;
  background: #fff;
}

.dy-detail-wrap .dy-d-content .left .top {
  padding: 19px;
  border-bottom: 1px solid #E6E6E6;
}

.dy-detail-wrap .dy-d-content .left .top .text span {
  display: inline-block;
  vertical-align: bottom;
  font-size: 14px;
  color: #999;
  line-height: 1;
  text-transform: uppercase;
}

.dy-detail-wrap .dy-d-content .left .top .text span.span1 {
  font-size: 18px;
  color: #666;
  line-height: 1;
  margin-right: 6px;
}

.dy-detail-wrap .dy-d-content .left .left-content {
  padding: 0 20px;
}

.dy-detail-wrap .dy-d-content .left .left-content .r-list {
  display: none;
}

.dy-detail-wrap .dy-d-content .left .left-content .r-list.active {
  display: block;
}

.dy-detail-wrap .dy-d-content .left .left-content .item {
  padding: 18px 0;
  border-bottom: 1px dashed #D5D5D5;
  padding-left: 15px;
  background: url("~~@/assets/icon-rj.png") no-repeat left 28px;
}

.dy-detail-wrap .dy-d-content .left .left-content .item:last-child {
  border-bottom: none;
}

.dy-detail-wrap .dy-d-content .left .left-content .item .text1 {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  line-height: 20px;
  margin-bottom: 9px;
}

.dy-detail-wrap .dy-d-content .left .left-content .item .text2 {
  font-size: 14px;
  font-weight: 400;
  color: #999;
  line-height: 1;
}

.dy-detail-wrap .dy-d-content .right {
  float: right;
  width: 830px;
}

.dy-detail-wrap .dy-d-content .right .top {
  padding-bottom: 25px;
  border-bottom: 1px solid #E6E6E6;
  margin-bottom: 19px;
}

.dy-detail-wrap .dy-d-content .right .top .text-title {
  font-size: 24px;
  font-weight: 400;
  color: #333;
  line-height: 32px;
  margin-bottom: 10px;
}

.dy-detail-wrap .dy-d-content .right .top .text-2 {
  font-size: 14px;
  font-weight: 400;
  color: #999;
  line-height: 24px;
  padding-left: 19px;
  background: url("~~@/assets/time.png") no-repeat left center;
}

.dy-detail-wrap .dy-d-content .right .r-content {
  margin-bottom: 26px;
}

.dy-detail-wrap .dy-d-content .right .r-content .text p {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  line-height: 26px;
  text-indent: 14px;
  margin-bottom: 10px;
}

.dy-detail-wrap .dy-d-content .right .r-content img {
  margin-bottom: 10px;
}

</style>

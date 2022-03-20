<template>
  <div class="layout-main">
    <div class="dy-detail-wrap">
      <div class="container">
        <div class="bream-wrap">
          <ul class="clearfix">
            <li class="item"><a >长海动态</a></li>
            <li class="item">></li>
            <li class="item"><a >医院新闻</a ></li>
            <li class="item">></li>
            <li class="item"><a class="active">新闻详情</a></li>
          </ul>
        </div>
        <div class="dy-d-content clearfix">
          <div class="left wow fadeInLeft">
            <div class="top">
              <p class="text">
                <span class="span1">最新新闻</span> <span>Latest news</span>
              </p>
            </div>
            <div class="left-content">
              <ul class="r-list active">
                <li class="item" v-for="item in allNewsList" :key="item.id" @click="$router.push({path:`/newsInfo/${item.id}`})">
                  <a target="_blank"  class="block">
                    <p class="text1">
                      {{item.newsTitle}}          </p>
                    <p class="text2">{{filterss.formatTimer(item.createDate)}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>      <div class="right wow fadeInRight">
          <div class="top">
            <p class="text-title">
              {{newsInfo.newsTitle}}          </p>
            <p class="text-2">发表时间:{{filterss.formatTimer(newsInfo.createDate)}}</p>
          </div>
          <div class="r-content" v-html="newsInfo.newsContent">
          </div>
          <div class="pre-next-page-box clearfix">
            <div class="item fl prev-btn" >

              <a target="_blank"  class="block" @click="shangyipian">
                <div class="box">
                  <p class="text" >
                    上一篇: {{previousNewsInfo.newsTitle}}</p>
                </div>
              </a>
            </div>
            <div class="item fr next-btn" @click="xiayiye">
              <a target="_blank" class="block">
                <div class="box">
                  <p class="text">
                    下一篇: {{nextArticleNewsInfo.newsTitle}}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <!-- 页面中心内容 -->
  </div>
</template>

<script>
import {reqNewsInfo} from "@/api";
import {mapState} from "vuex";
export default {
  name: "newsInfo",
  data(){
    return{
      newsInfo:{},
      filterss:{
        formatTimer: (value) => {
          let date = new Date(value);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          return y + "-" + MM + '-' + d;
        }
      },
      previousNewsInfo:{},
      nextArticleNewsInfo:{}
    }
  },
  mounted() {
    this.getNewsInfo(this.$route.params.id)
    this.newestNewsList()
    this.Previous(this.$route.params.id - 1)
    this.nextArticle(Number(this.$route.params.id) + 1)
  },
  methods:{
    // 新闻详情
    async getNewsInfo(id) {
      const result = await reqNewsInfo(id)
      if(result.code === 200){
        this.newsInfo = result.data
      }
    },

    // 获取最新新闻
    newestNewsList(){
      let query = {
        typeId: null,
        pageNum: 1,
        pageSize: 5
      }
      this.$store.dispatch("news/getAllNewsList",query)
    },

    // 获取是上一篇新闻title
    async Previous(id){
      console.log(id)
        const result = await reqNewsInfo(id)
        if(result.code === 200){
          this.previousNewsInfo = result.data
        }
    },

    // 获取下一篇
    async nextArticle(id){
      console.log(id)
      const result = await reqNewsInfo(id)
      if(result.code === 200){
        this.nextArticleNewsInfo = result.data
      }
    },

    //点击上一篇进行判断
    shangyipian(){
      if(this.$route.params.id <= 2){
        this.$route.params.id = String(2)
      }else {
        this.$router.push({path:`/newsInfo/${this.$route.params.id - 1}`})
      }
    },


    // 点击下一页进行判断
    xiayiye(){
      if (Number(this.$route.params.id) >=this.total+1) {
        this.$route.params.id = this.total + 1
      }else {
       this.$router.push({path:`/newsInfo/${Number(this.$route.params.id) + 1}`})
      }
    }
  },
  computed:{
    ...mapState('news',["allNewsList","total"])
  },
  watch:{
    '$route.params.id'(){
      this.getNewsInfo(this.$route.params.id)
      this.Previous(this.$route.params.id - 1)
      this.nextArticle(Number(this.$route.params.id) + 1)
    }
  }
}
</script>

<style scoped>
.dynamic-wrap .top { background: url("~@/assets/dy-bg.png") no-repeat center center; -o-background-size: cover; background-size: cover; padding-bottom: 30px; }

.dynamic-wrap .title-wrap { padding: 19px 0; }

.dynamic-wrap .top-info-wrap { height: 550px; }

.dynamic-wrap .top-info-wrap .left { width: 830px; height: 100%; }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap { height: 374px; }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .swiper-index-new { height: 100%; }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list { position: absolute; left: 0; bottom: 0; width: 100%; z-index: 1; }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item { float: left; width: 100px; height: 76px; margin-right: 2px; }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.active { background: #fff !important; }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.active .box .text1 { color: #2358C0; }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.active .box .text2 { color: #2358C0; }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.alt-1 { background: #2358c0; }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.alt-2 { background: rgba(35, 88, 192, 0.8); }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.alt-3 { background: rgba(35, 88, 192, 0.7); }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.alt-4 { background: rgba(35, 88, 192, 0.6); }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item.alt-5 { background: rgba(35, 88, 192, 0.3); }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item .box { text-align: center; cursor: pointer; }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item .box .text1 { font-size: 32px; font-weight: 400; color: #fff; line-height: 1; margin-bottom: 6px; margin-top: 10px; }

.dynamic-wrap .top-info-wrap .left .l-s-pic-wrap .tabs-list .item .box .text2 { font-size: 14px; font-weight: 300; color: #fff; line-height: 1; opacity: 0.5; }

.dynamic-wrap .top-info-wrap .left .l-info-wrap { height: 176px; background: #fff; padding: 34px; }

.dynamic-wrap .top-info-wrap .left .l-info-wrap .info-cont { display: none; }

.dynamic-wrap .top-info-wrap .left .l-info-wrap .info-cont.active { display: block; }

.dynamic-wrap .top-info-wrap .left .l-info-wrap .text1 { font-size: 24px; font-weight: 500; color: #333; line-height: 39px; }

.dynamic-wrap .top-info-wrap .left .l-info-wrap .text2 p { font-size: 16px; font-weight: 400; color: #666; line-height: 24px; word-break: break-all; -o-text-overflow: ellipsis; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; overflow: hidden; -webkit-box-orient: vertical; height: 72px; }

.dynamic-wrap .top-info-wrap .right { width: 340px; height: 100%; background: #fff; }

.dynamic-wrap .top-info-wrap .right .r-top { position: relative; height: 56px; }

.dynamic-wrap .top-info-wrap .right .r-top:after { content: ""; position: absolute; left: 0; top: 0; width: 100%; height: 4px; background: #0C4482; z-index: 2; }

.dynamic-wrap .top-info-wrap .right .r-top .text { float: left; width: 50%; padding-top: 4px; height: 100%; background: #0C4482; }

.dynamic-wrap .top-info-wrap .right .r-top .text.active { background: #fff; }

.dynamic-wrap .top-info-wrap .right .r-top .text.active > p { color: #0C4482; }

.dynamic-wrap .top-info-wrap .right .r-top .text > p { font-size: 18px; font-weight: 400; color: #fff; line-height: 52px; text-align: center; cursor: pointer; }

.dynamic-wrap .top-info-wrap .right .r-content { padding: 0 20px; }

.dynamic-wrap .top-info-wrap .right .r-content .r-list { display: none; }

.dynamic-wrap .top-info-wrap .right .r-content .r-list.active { display: block; }

.dynamic-wrap .top-info-wrap .right .r-content .item { padding: 18px 0; border-bottom: 1px dashed #D5D5D5; padding-left: 15px; background: url("~@/assets/icon-rj.png") no-repeat left 28px; }

.dynamic-wrap .top-info-wrap .right .r-content .item:last-child { border-bottom: none; }

.dynamic-wrap .top-info-wrap .right .r-content .item .text1 { font-size: 14px; font-weight: 400; color: #333; line-height: 20px; margin-bottom: 9px; height: 40px; overflow: hidden; word-break: break-all; -o-text-overflow: ellipsis; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; overflow: hidden; -webkit-box-orient: vertical; }

.dynamic-wrap .top-info-wrap .right .r-content .item .text2 { font-size: 14px; font-weight: 400; color: #999; line-height: 1; }

.dynamic-wrap .d-content { background: #fff; }

.dynamic-wrap .d-content .item { padding: 30px 0; border-bottom: 1px solid #D5D5D5; }

.dynamic-wrap .d-content .item .left { position: relative; float: left; width: 320px;height:200px; overflow: hidden; }

.dynamic-wrap .d-content .item .left .tips { position: absolute; left: 10px; bottom: 10px; width: 81px; height: 75px; background: rgba(35, 88, 192, 0.7); text-align: center; }

.dynamic-wrap .d-content .item .left .tips .text1 { font-size: 32px; font-weight: 400; color: #fff; margin-top: 5px; }

.dynamic-wrap .d-content .item .left .tips .text2 { font-size: 14px; font-weight: 300; color: #fff; line-height: 24px; opacity: 0.5; }

.dynamic-wrap .d-content .item .right { float: right; width: 880px; padding-left: 30px; padding-top: 19px; max-height: 180px; overflow: hidden; }

.dynamic-wrap .d-content .item .right .text1 { font-size: 20px; font-weight: 500; color: #333; line-height: 1; margin-bottom: 25px; }

.dynamic-wrap .d-content .item .right .text2 p { font-size: 14px; font-weight: 400; color: #666; line-height: 24px; word-break: break-all; -o-text-overflow: ellipsis; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 5; overflow: hidden; -webkit-box-orient: vertical; }

/* detail */
.dy-detail-wrap { padding: 14px 0 30px 0; }

.dy-detail-wrap .bream-wrap { margin-bottom: 30px; }

.dy-detail-wrap .bream-wrap li.item { float: left; font-size: 14px; color: #999; margin-right: 5px; }

.dy-detail-wrap .bream-wrap li.item a { font-size: 14px; color: #999; }

.dy-detail-wrap .bream-wrap li.item a.active { color: #0C4482; }

.dy-detail-wrap .dy-d-content .left { float: left; width: 340px; border: 1px solid #E6E6E6; background: #fff; }

.dy-detail-wrap .dy-d-content .left .top { padding: 19px; border-bottom: 1px solid #E6E6E6; }

.dy-detail-wrap .dy-d-content .left .top .text span { display: inline-block; vertical-align: bottom; font-size: 14px; color: #999; line-height: 1; text-transform: uppercase; }

.dy-detail-wrap .dy-d-content .left .top .text span.span1 { font-size: 18px; color: #666; line-height: 1; margin-right: 6px; }

.dy-detail-wrap .dy-d-content .left .left-content { padding: 0 20px; }

.dy-detail-wrap .dy-d-content .left .left-content .r-list { display: none; }

.dy-detail-wrap .dy-d-content .left .left-content .r-list.active { display: block; }

.dy-detail-wrap .dy-d-content .left .left-content .item { padding: 18px 0; border-bottom: 1px dashed #D5D5D5; padding-left: 15px; background: url("~@/assets/icon-rj.png") no-repeat left 28px; }

.dy-detail-wrap .dy-d-content .left .left-content .item:last-child { border-bottom: none; }

.dy-detail-wrap .dy-d-content .left .left-content .item .text1 { font-size: 14px; font-weight: 400; color: #333; line-height: 20px; margin-bottom: 9px; }

.dy-detail-wrap .dy-d-content .left .left-content .item .text2 { font-size: 14px; font-weight: 400; color: #999; line-height: 1; }

.dy-detail-wrap .dy-d-content .right { float: right; width: 830px; }

.dy-detail-wrap .dy-d-content .right .top { padding-bottom: 25px; border-bottom: 1px solid #E6E6E6; margin-bottom: 19px; }

.dy-detail-wrap .dy-d-content .right .top .text-title { font-size: 24px; font-weight: 400; color: #333; line-height: 32px; margin-bottom: 10px; }

.dy-detail-wrap .dy-d-content .right .top .text-2 { font-size: 14px; font-weight: 400; color: #999; line-height: 24px; padding-left: 19px; background: url("~@/assets/time.png") no-repeat left center; }

.dy-detail-wrap .dy-d-content .right .r-content { margin-bottom: 26px; }

.dy-detail-wrap .dy-d-content .right .r-content .text p { font-size: 14px; font-weight: 400; color: #333; line-height: 26px; text-indent: 14px; margin-bottom: 10px; }

.dy-detail-wrap .dy-d-content .right .r-content img { margin-bottom: 10px; }
</style>

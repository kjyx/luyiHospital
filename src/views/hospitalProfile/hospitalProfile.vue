<template>
  <div class="layout-main" style="min-height: 1400px">
    <div class="overview-wrap">
      <div class="container">
        <div class="ov-baner-wrap">
          <img class="img-block" src="@/assets/images/gaikuang.jpg" alt="" />
          <div class="ov-ban-tabs wow fadeInUp">
            <ul class="link-tabs-list alt-survey clearfix">
              <li class="item fl  active " >
                <a  class="box">
                  <div class="item-box">
                    <div class="i-img alt-1"></div>
                    <p class="text">医院简介</p>
                  </div>
                </a>
              </li>
              <li class="item fl " @click="$router.push({path:'/honor'})">
                <a class="box">
                  <div class="item-box">
                    <div class="i-img alt-2"></div>
                    <p class="text">荣誉历程</p>
                  </div>
                </a>
              </li>
              <li class="item fl " @click="$router.push({path:'/Statement'})">
                <a  class="box">
                  <div class="item-box">
                    <div class="i-img alt-3"></div>
                    <p class="text">院长致辞</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="ov-content-wrap  wow fadeInUp">
          <h2 class="title">医院概况</h2>
          <div class="text" v-for="item in aboutMe" :key="item.id">
            <div>
              <img class="fr" src="~@/assets/images/jianjie.jpg" alt="" style="width: 50%;" />
              <p v-html="item.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqAboutMe} from "@/api";

export default {
  name: "yygk",
  data(){
    return{
      aboutMe:[]
    }
  },
  mounted() {
    new this.$wow.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0
    }).init();
    this.getAboutMe()
  },
  methods:{
    // 关于我们
    async getAboutMe() {
      let query = {
        pageNum: 1,
        pageSize: 10,
        typeId: null
      }
      let getAbout = sessionStorage.getItem('about')
      if (getAbout != null) {
        this.aboutMe = JSON.parse(getAbout)
      }else {
        const result = await reqAboutMe(query)
        if(result.code === 200){
          this.aboutMe = result.data.records
          sessionStorage.setItem('about',JSON.stringify(result.data.records))
        }
      }
    }
  }
}
</script>

<style scoped>
.overview-wrap { margin-top: 30px; }

.overview-wrap .ov-content-wrap { margin-top: 50px; }

.overview-wrap .ov-content-wrap .title { font-size: 39px; font-weight: 600; color: #333333; line-height: 36px; margin-bottom: 29px; }

.overview-wrap .ov-content-wrap .text p { font-size: 16px; color: #333; line-height: 30px; margin-bottom: 60px; }

.overview-wrap .ov-content-wrap .text img { padding-left: 36px; padding-bottom: 24px; }
</style>

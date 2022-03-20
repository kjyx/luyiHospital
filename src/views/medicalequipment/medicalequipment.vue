<template>
  <div class="layout-2-wrap">
    <div class="top">
      <div class="container">
        <img class="img-block" src="@/assets/images/shebei.jpg" alt="">
        <div class="depart-tabs-wrap wow fadeInUp">
          <ul class="link-tabs-list clearfix alt-jyzn-tb style1">
            <li class="item fl  active ">
              <a class="box">
                <div class="item-box">
                  <div class="i-img alt-6"></div>
                  <p class="text">医疗设备</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
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
                  <li class="b-item" @click="$router.push({path:'/hospitallayout'})">
                    <a  class="block">
                      <p class="text-link">医院布局</p>
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
            </div>
          </div>
          <div class="right  fr wow fadeInRight alt-pl-30">
            <div class="common-right-content" >
              <ul>
                <li v-for="item in medicalEquipmentList">
                  <img :src="item.pic" alt="">
                  <p style="text-align: center;padding-top: 10px;font-size: 20px;">{{item.medicalName}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <el-pagination
            align="center"
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="medicalEquipmentQuery.pageSize"
            :current-page="medicalEquipmentQuery.pageNum"
            @current-change="MedicalEquipmentPagenum"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {reqMedicalEquipment} from "@/api";
export default {
  name: "medicalequipment",
  data(){
    return{
      medicalEquipmentList:[],
      medicalEquipmentQuery:{
        pageNum:1,
        pageSize:6
      },
      total:0
    }
  },
  mounted() {
    this.getMedicalEquipment()
    new this.$wow.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0
    }).init();
  },
  methods:{
    // 医疗器械
    async getMedicalEquipment(){
      const result = await reqMedicalEquipment(this.medicalEquipmentQuery)
      if (result.code === 200) {
        this.medicalEquipmentList = result.data.records
        this.total = result.data.total
      }
    },
    MedicalEquipmentPagenum(pagenum = 1){
      this.medicalEquipmentQuery.pageNum = pagenum
      this.getMedicalEquipment()
      window.scrollTo(0,200)
    }
  }
}
</script>

<style scoped lang="less">
.common-right-content{
  //background-color: pink;
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    min-height: 600px;
    li{
      width: 47%;
      height: 400px;
      margin-bottom: 100px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

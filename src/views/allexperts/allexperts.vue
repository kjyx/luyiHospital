<template>
  <div class="layout-2-wrap">
    <div class="top">
      <div class="container">
        <img class="img-block" src="@/assets/images/zhuanjiajieshao.jpg" alt="" />
      </div>
    </div>
    <div class="layout-2-content">
      <div class="container">
        <div class="ks-container clearfix">
          <div class="right  fl wow fadeInLeft alt-pl-30">
            <div class="ks-side-links-list">
              <div class="title-box">
                <p class="text">
                  <span class="span1">科室</span>
                  <span class="span2">Department</span>
                </p>
              </div>
              <div class="ks-side-table">
                <table class="ks">
                  <tbody>
                  <tr v-for="(item,index) in departmentList" :key="item.id" @click="$router.push({path:`/departmentDetail/${item.id}`})">
                    <td>
                      <a>{{item.departmentName}}</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="left fr wow fadeInRight">
            <div class="common-left-content">
              <p class="common-title-icon alt-zjfc mb-9">
                专家教授<span>Expert Professor</span>
              </p>
              <ul class="zjfc-wrap-list">
                <li class="zjfc-wrap-list--item" v-for="item in expertsStyle" :key="item.id" @click="bounced(item.id)">
                  <div class="ks-zjjs-box" style="position: relative;  overflow: hidden;padding-left: 0;height: 100%;">
                    <div class="ks-zjjs-box--imgwrap">
                      <img :src="item.pic" alt="" />
                    </div>
                    <div class="ks-zjjs-box--info" style="    padding-left: 230px;">
                      <p class="box-info--title">{{item.dockerName}}</p>
                      <div class="box-info--ground">
                        <label class="ground--label">职称</label>
                        <p class="ground--text text-ov1">{{item.dockerTit}}</p>
                      </div>
                      <div class="box-info--ground">
                        <label class="ground--label">所属科室</label>
                        <p class="ground--text text-ov1">
                          {{item.dockerMedical}}                            </p>
                      </div>
                      <div class="ks-zjjs-leader--content">
                        <div>
                          <p v-html="item.dockerContent">
                          </p>
                        </div>
                      </div>
                      <p class="togglet-btn1">「点击查看详情」</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-pagination
        style="margin: 50px 0"
        align="center"
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="expertsQuery.pageSize"
        :current-page="expertsQuery.pageNum"
        @current-change="getAllexperts"
    >
    </el-pagination>
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
                <div slot = error>
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
            <h3>开诊科室:{{ doctorInfo.dockerMedical  }}</h3>
            <h3>职务/职称:{{ doctorInfo.dockerTit  }}</h3>
          </div>
          <p v-html="doctorInfo.dockerContent">
          </p>
        </article>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from "vuex";
import mixin from '@/mixin/expertsInfo'
export default {
  name: "allExperts",
  mixins:[mixin],
  data(){
    return{
      expertsQuery:{
        pageNum:1,
        pageSize:10,
        departmentInfoId:null
      },
    }
  },
  mounted() {
    this.getAllexperts()
    this.getDepartment()
  },
  methods:{
    getAllexperts(pagenum = 1){
      this.expertsQuery.pageNum = pagenum
      this.$store.dispatch('experts/getExpertsStyle',this.expertsQuery)
      window.scrollTo(0,200)
    },
    getDepartment(){
      let query = {
        pageNum: 1,
        pageSize: 20
      }
      this.$store.dispatch("department/getDepartmentList",query)
    }
  },
  computed:{
    ...mapState('experts',['expertsStyle',"total"]),
    ...mapState('department',['departmentList'])
  }
}
</script>

<style scoped lang="less">
.zjfc-wrap-list .zjfc-wrap-list--item { padding: 20px 0; border-bottom: 1px solid #D5D5D5; }

.zjfc-wrap-list .ks-zjjs-box { position: relative;  overflow: hidden;min-height: 310px; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--imgwrap { position: absolute; left: 0; top: 0; width: 220px; height: 300px;overflow: hidden; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--imgwrap img { display: block; width: 100%; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--info {padding-left: 230px;min-height: 300px;}

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--info .box-info--title { font-size: 18px; font-weight: bold; color: #333; line-height: 1; margin-bottom: 26px; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--info .box-info--ground { position: relative; margin-bottom: 14px; padding-left: 75px; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--info .box-info--ground.alt-nomb { margin-bottom: 0; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--info .box-info--ground .ground--label { position: absolute; left: 0; top: 0; font-size: 14px; color: #666; line-height: 1; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--info .box-info--ground .ground--text { font-size: 14px; color: #333; line-height: 1; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--info .box-info--ground .ground--text.alt-style1 { color: #094689; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--info .box-info--desc { margin-top: 8px; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--info .box-info--desc p, .zjfc-wrap-list .ks-zjjs-box .ks-zjjs-box--info .box-info--desc div { font-size: 14px; color: #666; line-height: 28px; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; height: 56px; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-leader--content { position: relative; margin: 10px 0; height: 160px; overflow: hidden; }

.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-leader--content.open { height: auto; }

.zjfc-wrap-list .ks-zjjs-box .togglet-btn { position: absolute; right: 0; bottom: 2px; font-size: 14px; line-height: 1; color: #094689; background-color: #fff; box-shadow: 0 0 5px rgba(255, 255, 255, 0.6); cursor: pointer; }
.zjfc-wrap-list .ks-zjjs-box .togglet-btn.open { display: block; }
.zjfc-wrap-list .ks-zjjs-box .ks-zjjs-leader--content p, .zjfc-wrap-list .ks-zjjs-box .ks-zjjs-leader--content div {font-size: 14px;font-weight: 400;color: #666;line-height: 28px;}
.doctor-info-main {
  color: black;
  box-shadow: 0 0 5px #ccc;
  border-radius: 15px;
  width: 1340px;
//height: 850px;
  background-color: #fff;
  transform: translate(-50%,0);
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
.right{
  padding: 35px 65px 0 0;
  text-align: right;
p:nth-of-type(1){
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
  text-decoration:underline;
  text-underline-offset:15px;
  text-decoration-style:dashed;
  text-decoration-color:#dce4e4;
}
}
}
</style>

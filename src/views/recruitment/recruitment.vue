<template>
  <div class="layout-2-wrap">
    <div class="top">
      <div class="container">
        <img class="img-block" src="@/assets/images/yuyueliuyan.png" alt="">
        <div class="depart-tabs-wrap wow fadeInUp">
          <ul class="link-tabs-list clearfix alt-jyzn-tb style1">
            <li class="item fl  active ">
              <a class="box">
                <div class="item-box">
                  <div class="i-img alt-6"></div>
                  <p class="text">预约留言</p>
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
                </ul>
              </div>
            </div>
          </div>
          <div class="right  fr wow fadeInRight alt-pl-30">
            <div class="common-right-content">
              <div class="center">
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                  <el-form-item
                      label="姓名"
                      prop="userName"
                      :rules="[ { required: true, message: '姓名不能为空'},{pattern:/^(?:[\u4e00-\u9fa5·]{2,16})$/,message: '请输入正确的姓名'}]">
                    <el-input type="name" v-model="numberValidateForm.userName" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item
                      label="电话"
                      prop="tel"
                      :rules="[{ required: true, message: '电话不能为空'},{pattern:/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,message: '请输入正确的手机号'}]">
                    <el-input type="tel" v-model="numberValidateForm.tel" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item
                      label="留言"
                      prop="content"
                      :rules="[{ required: true, message: '留言不能为空'}]">
                    <el-input type="textarea"  rows="10" cols="30" v-model="numberValidateForm.content" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqOrder} from "@/api";
import { Message } from 'element-ui';
export default {
  name: "medicalequipment",
  data() {
    return {
      numberValidateForm: {
        userName:'',
        tel:null,
        content:''
      }
    };
  },
  methods: {
     submitForm(formName) {
      this.$refs[formName].validate( async(valid) => {
        if (valid) {
         const result = await reqOrder(this.numberValidateForm)
          if (result.code === 200) {
            Message({
              message: '提交成功',
              type: 'success'
            });
            this.numberValidateForm.userName = ''
            this.numberValidateForm.tel = ''
            this.numberValidateForm.content = ''
          }
        } else {
          Message.error('请填写正确信息');
          return false;
        }
      });
    },
  },

  mounted() {
    new this.$wow.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0
    }).init();
  },
}
</script>

<style scoped lang="less">
.common-right-content {
  .center {
    width: 800px;
    height: 500px;
    //background-color: pink;
  }
}
</style>

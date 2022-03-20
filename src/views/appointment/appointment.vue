<template>
  <div class="layout-2-wrap">
    <div class="top">
      <div class="container">
        <img class="img-block" src="@/assets/images/zhinan.jpg" alt="">
        <div class="depart-tabs-wrap wow fadeInUp">
          <ul class="link-tabs-list clearfix alt-jyzn-tb style1">
            <li class="item fl   " @click="$router.push({path:'/hospitallayout'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-6"></div>
                  <p class="text">医院地址</p>
                </div>
              </a>
            </li>
            <li class="item fl active" >
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-4"></div>
                  <p class="text">预约挂号</p>
                </div>
              </a>
            </li>
            <li class="item fl" @click="$router.push({path:'/medicalguide'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-1"></div>
                  <p class="text">就医指南</p>
                </div>
              </a>
            </li>
            <li class="item fl" @click="$router.push({path:'/health'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-5"></div>
                  <p class="text">健康体检</p>
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
                  <li class="b-item active">
                    <a  class="block">
                      <p class="text-link" @click="$router.push({path:'/appointment'})">预约挂号</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>      </div>
          <div class="right  fr wow fadeInRight alt-pl-30">
            <div class="yygh-r-content">
              <div class="yy-wrap">
                <ul class="clearfix">
                  <li class="item fl">
                    <div class="box alt-1">
                      <div class="box-item clearfix">
                        <img class="fl" src="@/assets/images/weixinyuyue.png" alt="">
                        <div class="info fl">
                          <p class="text1">【微信】预约</p>
                          <p class="text2">
                            关注“鹿邑心脑血管医院”微信公众号
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <p class="title-yygh alt-6 mb-18">
                电话预约<span>Making telephone appointments</span>
              </p>
              <div class="dhyy-wrap">
                <div class="text alt-1">预约电话：</div>
                <div class="text alt-2">400-1855969</div>
              </div>
              <p class="title-yygh alt-7 mb-11">
                网上预约<span>Online booking</span>
              </p>
              <div class="online-wrap">
                <a href="http://www.lyxnxgyy.com/#/recruitment" class="text">http://www.lyxnxgyy.com/#/recruitment</a href="http://www.lyxnxgyy.com/#/recruitment">
              </div>
              <p class="title-yygh alt-2 mb-18">
                现场预约 <span>The scene to make an appointment</span>
              </p>
              <div class="now-wrap">
                <table>
                  <tbody>
                  <tr>
                    <td>
                      <div class="box">
                        <img class="img1" src="@/assets/yygh-xc-1-bg.png" alt="">
                        <img class="img2" src="@/assets/yygh-xc-1.png" alt="">
                        <p>门诊一楼预约中心预约</p>
                      </div>
                    </td>
                    <td>
                      <div class="box">
                        <img class="img1" src="@/assets/yygh-xc-2-bg.png" alt="">
                        <img class="img2" src="@/assets/yygh-xc-2.png" alt="">
                        <p>各楼层自助机预约</p>
                      </div>
                    </td>
                    <td>
                      <div class="box">
                        <img class="img1" src="@/assets/yygh-xc-3-bg.png" alt="">
                        <img class="img2" src="@/assets/yygh-xc-3.png" alt="">
                        <p>各专家诊室预约</p>
                      </div>
                    </td>
                    <td>
                      <div class="box">
                        <img class="img1" src="@/assets/yygh-xc-4-bg.png" alt="">
                        <img class="img2" src="@/assets/yygh-xc-4.png" alt="">
                        <p>住院病人复诊预约</p>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Appointment",
  mounted() {
    new this.$wow.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0
    }).init();
  }
}
</script>

<style scoped>
.yygh-r-content .yy-wrap { margin-left: -10px; margin-right: -10px; margin-bottom: 28px; }

.yygh-r-content .yy-wrap .item { width: 50%; padding: 0 10px; }

.yygh-r-content .yy-wrap .item .box { height: 198px; background-repeat: no-repeat; background-position: center center; padding: 25px; }

.yygh-r-content .yy-wrap .item .box.alt-1 { background-image: url("~@/assets/yygh-wx-bg.png"); }

.yygh-r-content .yy-wrap .item .box.alt-2 { background-image: url("~@/assets/yygh-zfb-bg.png"); }

.yygh-r-content .yy-wrap .item .box .box-item img { width: 148px; }

.yygh-r-content .yy-wrap .item .box .box-item .info { width: 252px; padding-left: 25px; padding-top: 28px; }

.yygh-r-content .yy-wrap .item .box .box-item .info .text1 { font-size: 16px; font-weight: bold; color: #333; line-height: 1; margin-bottom: 16px; }

.yygh-r-content .yy-wrap .item .box .box-item .info .text2 { font-size: 14px; font-weight: 400; color: #666; line-height: 22px; }

.yygh-r-content .phone-yy-wrap { margin-bottom: 33px; }

.yygh-r-content .phone-yy-wrap table { border-spacing: 0; border-collapse: collapse; width: 100%; max-width: 100%; }

.yygh-r-content .phone-yy-wrap table td, .yygh-r-content .phone-yy-wrap table th { border: 1px solid #E7E7E7; }

.yygh-r-content .phone-yy-wrap table td { height: 246px; text-align: center; width: 25%; }

.yygh-r-content .phone-yy-wrap table .box { font-size: 14px; font-weight: 400; color: #333; line-height: 20px; text-align: center; }

.yygh-r-content .phone-yy-wrap table .box p { height: 40px; overflow: hidden; }

.yygh-r-content .phone-yy-wrap table .box img { margin-bottom: 16px; }

.yygh-r-content .dhyy-wrap { margin-bottom: 35px; }

.yygh-r-content .dhyy-wrap div.text { display: inline-block; vertical-align: middle; }

.yygh-r-content .dhyy-wrap div.text.alt-1 { font-size: 14px; font-weight: 400; color: #666; line-height: 20px; }

.yygh-r-content .dhyy-wrap div.text.alt-2 { font-size: 36px; font-weight: bold; color: #023E7D; line-height: 20px; }

.yygh-r-content .online-wrap { margin-bottom: 35px; }

.yygh-r-content .online-wrap .text { display: inline-block; vertical-align: middle; font-size: 14px; font-weight: 400; text-decoration: underline; color: #094689; line-height: 20px; }

.yygh-r-content .online-wrap .text1 { display: inline-block; vertical-align: middle; font-size: 14px; font-weight: 400; color: #094689; }

.yygh-r-content .now-wrap table { border-spacing: 0; border-collapse: collapse; width: 100%; max-width: 100%; }

.yygh-r-content .now-wrap table td, .yygh-r-content .now-wrap table th { border: 1px solid #E7E7E7; }

.yygh-r-content .now-wrap table td { height: 178px; text-align: center; width: 25%; }

.yygh-r-content .now-wrap table .box { font-size: 14px; font-weight: 400; color: #333; line-height: 20px; text-align: center; }

.yygh-r-content .now-wrap table .box img { display: block; margin-left: auto; margin-right: auto; }

.yygh-r-content .now-wrap table .box .img2 { margin-top: -23px; }

.yygh-r-content .now-wrap table .box p { position: relative; padding-top: 30px; }

.yygh-r-content .now-wrap table .box p::before { content: ""; position: absolute; left: 50%; top: 10px; width: 8px; height: 8px; background: #fff; border: 1px solid #094689; border-radius: 50%; margin-left: -4px; }

</style>

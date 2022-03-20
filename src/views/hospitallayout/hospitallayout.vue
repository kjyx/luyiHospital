<template>
  <div class="layout-2-wrap">
    <div class="top">
      <div class="container">
        <img class="img-block" src="@/assets/images/zhinan.jpg" alt="">
        <div class="depart-tabs-wrap wow fadeInUp">
          <ul class="link-tabs-list clearfix alt-jyzn-tb style1">
            <li class="item fl  active ">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-6"></div>
                  <p class="text">医院地址</p>
                </div>
              </a>
            </li>
            <li class="item fl " @click="$router.push({path:'/appointment'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-4"></div>
                  <p class="text">预约挂号</p>
                </div>
              </a>
            </li>
            <li class="item fl " @click="$router.push({path:'/medicalguide'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-1"></div>
                  <p class="text">就医指南</p>
                </div>
              </a>
            </li>
            <li class="item fl " @click="$router.push({path:'/health'})">
              <a  class="box">
                <div class="item-box">
                  <div class="i-img alt-5"></div>
                  <p class="text">健康体检</p>
                </div>
              </a>
            </li>
          </ul>            </div>
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
                  <li class="b-item active" @click="$router.push({path:'/hospitallayout'})">
                    <a  class="block">
                      <p class="text-link">医院地址</p>
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
            </div>              </div>
          <div class="right  fr wow fadeInRight alt-pl-30">
            <div class="common-right-content">
              <div class="yy-layout-wrap">
                <p class="yy-layout-title alt-3 mb-24">
                  医院地址地图<span>Changhai Map</span>
                </p>
                <div class="yy-layout-box" id="container">
                </div>
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
  name: "hospitalLayout",
  mounted() {
    new this.$wow.WOW({
      live: true,
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0
    }).init();
    this.init()
  },
  methods:{
    init(){
      var map = new BMapGL.Map('container');
      var point = new BMapGL.Point(115.351619,34.015187);
      map.centerAndZoom(point, 17);

      var marker = new BMapGL.Marker(point);
      var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
      map.addControl(zoomCtrl);
      map.addOverlay(marker);
      var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
      map.addControl(scaleCtrl);
// 创建信息窗口
      var opts = {
        width: 200,
        height: 100,
        title: '鹿邑心脑血管医院'
      };
      var infoWindow = new BMapGL.InfoWindow('地址：周口市鹿邑县杨湖口镇田傅元村加油站旁', opts);
// 点标记添加点击事件
      marker.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point); // 开启信息窗口
      });
    }
  }
}
</script>

<style scoped>
.yy-layout-wrap .yy-layout-title { font-size: 16px; font-weight: bold; color: #333333; line-height: 20px; padding-left: 27px; background-repeat: no-repeat; background-position: left center; }

.yy-layout-wrap .yy-layout-title.alt-1 { background-image: url("~@/assets/layout-icon1.png"); }

.yy-layout-wrap .yy-layout-title.alt-2 { background-image: url("~@/assets/layout-icon2.png"); }

.yy-layout-wrap .yy-layout-title.alt-3 { background-image: url("~@/assets/layout-icon3.png"); }

.yy-layout-wrap .yy-layout-title span { font-size: 14px; font-weight: 400; color: #999; line-height: 20px; margin-left: 5px; }

.yy-layout-wrap .yy-layout-box { padding: 30px; border: 1px solid #E7E7E7; height: 600px}

.yy-layout-wrap .yy-layout-box img { display: block; width: 100%; }

.yy-layout-wrap .yy-layout-route { padding-left: 28px; border-bottom: 1px solid #E7E7E7; padding-bottom: 15px; margin-bottom: 36px; }

.yy-layout-wrap .yy-layout-route .route-item { float: left; width: 50%; }

.yy-layout-wrap .yy-layout-route .route-item p { display: inline-block; vertical-align: middle; }

.yy-layout-wrap .yy-layout-route .route-item .text1 { font-size: 14px; color: #666666; line-height: 32px; margin-bottom: 20px; }

.yy-layout-wrap .yy-layout-route .route-item .text2 { font-size: 14px; font-weight: bold; color: #094689; line-height: 32px; height: 32px; background-color: #F5F7FA; border-radius: 16px; overflow: hidden; padding-left: 15px; padding-right: 15px; margin-bottom: 20px; }

</style>

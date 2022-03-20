<template>
  <div class="layout-header">
    <div class="header-top" style="height: 155px">
      <img src="~@/assets/images/homeTop.png" alt="" style="height: 100%;"/>
      <div class="top-logo">
        <div class="container" style="display: flex;justify-content: space-between; align-items: center">
          <img src="~@/assets/images/logo.png" alt="" style="width: 22% ; height: 90px;"
               @click="$router.push({path:'/home'})"/>
          <img src="~@/assets/images/002.png" alt="" style="height: 90px;">
        </div>
      </div>
    </div>

    <div class="nav">
      <div class="container">
        <ul class="nav-bar clearfix" ref="ul">
          <li  class="item  active" @click="$router.push({path:'/home'})" ref="home">
            <a>首页</a>
          </li>
          <li class="item" ref="hospitalProfile">
            <a @click="$router.push({path:'/hospitalProfile'})" >医院概况</a>
            <ul class="subnav-list">
              <li class="subitem" @click="$router.push({path:'/hospitalProfile'})"><a class="block">医院简介</a></li>
              <li class="subitem" @click="$router.push({path:'/honor'})"><a class="block">医院荣誉</a></li>
              <li class="subitem" @click="$router.push({path:'/Statement'})"><a class="block">院长致辞</a></li>
            </ul>
          </li>
          <li class="item " @click="$router.push({path:'/allexperts'})"><a target="_blank">专家风采</a></li>
          <li class="item" ref="hospitalNews">
            <a @click="$router.push({path:'/hospitalNews?id=2'})">医院动态</a>
            <ul class="subnav-list">
              <li class="subitem" @click="$router.push({path:'/hospitalNews?id=2'})"><a class="block">医院新闻</a></li>
              <li class="subitem"><a @click="$router.push({path:'/hospitalNews?id=3'})" class="block">医院通告</a></li>
<!--              <li class="subitem" @click="$router.push({path:'/hospitalNews?id=4'})"><a target="_blank" class="block">护理风采</a></li>-->
              <li class="subitem" @click="$router.push({path:'/hospitalNews?id=6'})"><a class="block">学术动态</a></li>
            </ul>
          </li>
          <li class="item " >
            <a  @click="$router.push({path:'/hospitallayout'})">就医指南</a>
            <ul class="subnav-list">
              <li class="subitem" @click="$router.push({path:'/hospitallayout'})"><a target="_blank" class="block">医院布局</a></li>
              <li class="subitem" @click="$router.push({path:'/appointment'})"><a target="_blank"  class="block">预约挂号</a>
              </li>
              <li class="subitem" @click="$router.push({path:'/medicalguide'})"><a target="_blank"  class="block">就医指南</a></li>
              <li class="subitem" @click="$router.push({path:'/health'})"><a target="_blank"  class="block">健康体检</a></li>
            </ul>
          </li>
          <li class="item " ref="department">
            <a @click="$router.push({path:'/medicalequipment'})">医疗设备</a>
          </li>
          <li class="item " ref="department">
            <a @click="$router.push({path:'/department'})">科室介绍</a>
            <ul class="subnav-list">
              <li class="subitem" @click="$router.push({path:'/department'})"><a class="block"><span>全部科室</span></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      let ul = this.$refs.ul.childNodes
      ul.forEach(item => {
        item.addEventListener('click', () => {
          ul.forEach(item => {
            item.className = 'item'
          })
          item.className = 'item active'
        })
      })
    })
  },
  methods:{

  },
  watch: {
    $route: {
      handler(to, form) {
        let home = this.$refs.home
        let hospitalProfile = this.$refs.hospitalProfile
        let department = this.$refs.department
        let hospitalNews = this.$refs.hospitalNews
        let ul = this.$refs.ul.childNodes
        switch (to.path) {
          case '/home': {
            ul.forEach(item => {
              item.className = 'item'
            })
            home.className = 'item active'
            break
          }
          case '/hospitalProfile': {
            ul.forEach(item => {
              item.className = 'item'
            })
            hospitalProfile.className = 'item active'
            break
          }
          case '/department': {
            ul.forEach(item => {
              item.className = 'item'
            })
            department.className = 'item active'
            break
          }
          case '/hospitalNews': {
            ul.forEach(item => {
              item.className = 'item'
            })
            hospitalNews.className = 'item active'
            break
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.header-top {
  position: relative;
}

.header-top > img {
  display: block;
  width: 100%;
}

.header-top .top-logo {
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
}

.header-top .top-logo img {
  display: block;
}

.nav {
  box-shadow: 0px 1px 0px 0px #e7e7e7;
}

.nav-bar {
  display: flex;
  justify-content: center;
}

.nav-bar .item {
  position: relative;
  float: left;
  width: 12.5%;
  cursor: pointer;
}

.nav-bar .item:hover > a, .nav-bar .item.active > a {
  color: #fff;
  /*background-image: url("../src/assets/navbg.png");*/
}

.nav-bar .item:hover .subnav-list {
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  opacity: 1;
  visibility: visible;
}

.nav-bar .item > a {
  display: block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  color: #333;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.nav-bar .item .subnav-list {
  position: absolute;
  left: 50%;
  top: 100%;
  min-width: 100%;
  background: white;
  box-shadow: 0px 0px 9px 0px rgba(51, 51, 51, 0.1);
  z-index: 10;
  -webkit-transform: translate(-50%, 20px);
  -moz-transform: translate(-50%, 20px);
  -ms-transform: translate(-50%, 20px);
  -o-transform: translate(-50%, 20px);
  transform: translate(-50%, 20px);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.nav-bar .item .subnav-list .subitem > a {
  height: 47px;
  font-size: 16px;
  color: #999;
  line-height: 47px;
  text-align: center;
}

.nav-bar .item .subnav-list .subitem > a > span {
  display: initial;
  white-space: nowrap;
  padding: 0 15px;
}

.nav-bar .item .subnav-list .subitem:hover, .nav-bar .item .subnav-list .subitem .active {
  background: #E5EBF2;
}

.nav-bar .item .subnav-list .subitem:hover > a, .nav-bar .item .subnav-list .subitem.active > a {
  font-weight: bold;
  color: #023E7D;
}

</style>

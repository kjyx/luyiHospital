import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 重写 push 与 replace 解决重复点击报错
// 先把原型上的push方法 和 replace方法 保  存一份
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location,resolve,reject){
  if(resolve && reject){
    originPush.call(this,location,resolve,reject)
  }else {
    originPush.call(this,location,()=>{ },()=>{ })
  }
}
VueRouter.prototype.replace = function (location,resolve,reject){
  if(resolve && reject){
    originReplace.call(this,location,resolve,reject)
  }else {
    originReplace.call(this,location,()=>{},()=>{})
  }
}

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'Home',
    component:() => import('@/views/Home/home'),
    meta:{
      title: "鹿邑心脑血管医院",
    }
  },
    // 医院简介
  {
    path:'/hospitalProfile',
    name:'HospitalProfile',
    component:() => import('@/views/hospitalProfile/hospitalProfile'),
    meta:{
      title: "医院简介-鹿邑心脑血管医院",
    }
  },
    // 医院新闻
  {
    path:'/hospitalNews',
    name:'hospitalNews',
    component:() => import('@/views/hospitalNews/hospitalNews'),
    meta:{
      title: "医院新闻-鹿邑心脑血管医院",
    }
  },
    // 新闻详情
  {
    path:'/newsInfo/:id?',
    naem:'newsInfo',
    component:()=> import('@/views/newsInfo/newsInfo'),
    meta:{
      title: "新闻详情-鹿邑心脑血管医院",
    }
  },
    // 荣誉
  {
    path:'/honor',
    name:'Honor',
    component:() => import('@/views/Honor/honor'),
    meta:{
      title: "医院荣誉-鹿邑心脑血管医院",
    }
  },
  // 院长致辞
  {
    path:'/Statement',
    name:'Statement',
    component:() => import('@/views/Statement/Statement'),
    meta:{
      title: "院长致辞-鹿邑心脑血管医院",
    }
  },
  // 科室介绍
  {
    path:'/department',
    naem:'Department',
    component:()=> import('@/views/department/department'),
    meta:{
      title: "科室介绍-鹿邑心脑血管医院",
    }
  },
  // 科室详情
  {
    path:'/departmentDetail/:id?',
    naem:'departmentDetail',
    component:()=> import('@/views/departmentDetail/departmentDetail'),
    meta:{
      title: "科室详情-鹿邑心脑血管医院",
    }
  },
  // 专家教授
  {
    path:'/experts/:id?',
    naem:'experts',
    component:()=> import('@/views/experts/experts'),
    meta:{
      title: "专家教授-鹿邑心脑血管医院",
    }
  },
  // 医院布局
  {
    path:'/hospitallayout',
    naem:'hospitallayout',
    component:()=> import('@/views/hospitallayout/hospitallayout'),
    meta:{
      title: "医院布局-鹿邑心脑血管医院",
    }
  },
  // 预约挂号
  {
    path:'/appointment',
    naem:'appointment',
    component:()=> import('@/views/appointment/appointment'),
    meta:{
      title: "预约挂号-鹿邑心脑血管医院",
    }
  },
    // 就医指南
  {
    path:'/medicalguide',
    naem:'medicalguide',
    component:()=> import('@/views/medicalguide/medicalguide'),
    meta:{
      title: "就医指南-鹿邑心脑血管医院",
    }
  },
  // 健康体检
  {
    path:'/health',
    naem:'health',
    component:()=> import('@/views/health/health'),
    meta:{
      title: "健康体检-鹿邑心脑血管医院",
    }
  },
  // 专家风采
  {
    path:'/allexperts',
    naem:'allexperts',
    component:()=> import('@/views/allexperts/allexperts'),
    meta:{
      title: "专家风采-鹿邑心脑血管医院",
    }
  },
    // 医疗器械
  {
    path:'/medicalequipment',
    naem:'medicalequipment',
    component:()=> import('@/views/medicalequipment/medicalequipment'),
    meta:{
      title: "医疗器械-鹿邑心脑血管医院",
    }
  },
  {
    path:'/recruitment',
    naem:'recruitment',
    component:()=> import('@/views/recruitment/recruitment'),
    meta:{
      title: "预约留言-鹿邑心脑血管医院",
    }
  }
]

const router = new VueRouter({
  routes,
  // 跳转页面到顶部
  scrollBehavior () {
      return { x: 0, y: 0 }
  }
})

  router.beforeEach((to, from, next)=>{
    if(typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        window.location.href = './mobile/dist/index.html'
      }else {
        next()
      }
    }
    if(to.meta.title){
      document.title=to.meta.title
    }else {
      next()
    }

    if (to.name === '后台') {
      window.location.href = 'http://admin.lyxnxgyy.com/'
    }
})

export default router

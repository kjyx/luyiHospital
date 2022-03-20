import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../public/common.css'
// element-ui 按需引入
import {Pagination,Dialog,Image,Form,FormItem,Button,Input} from "element-ui";
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Image)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)
// 引入动画
// 全局组件
import  wow from 'wowjs'
import 'wowjs/css/libs/animate.css'
Vue.prototype.$wow = wow
Vue.config.productionTip = false
new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 新闻仓库
import news from "@/store/news";
// 专家仓库
import experts from '@/store/experts'
// 科室仓库
import department from "@/store/department";
export default new Vuex.Store({
  modules:{
    news,
    experts,
    department
  }
})

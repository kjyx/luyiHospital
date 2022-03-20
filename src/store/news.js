import { reqNewsList } from '@/api'

const actions = {
    // 新闻
    async getAllNewsList({commit},data){
       const result = await reqNewsList(data)
        if(result.code === 200){
            commit('GRTALLNEWSLIST',result.data)
        }
    },
    // 学术动态跟医院通告
    async getDynamicAndNotice({commit},data){
       const result = await reqNewsList(data)
        if(result.code === 200){
            commit('GETDYNAMICANDBOTICE',result.data.records)
        }
    },

    // 单独获取学术动态
    async getNotice({commit},data){
        const result = await reqNewsList(data)
        if(result.code === 200){
            commit('GETNOTICE',result.data.records)
        }
    }
}

const mutations = {
    GRTALLNEWSLIST(state,data){
        state.allNewsList = data.records
        state.total = data.total
    },
    GETDYNAMICANDBOTICE(state,data){
        state.DynamicAndNotice = data
    },
    GETNOTICE(state,data){
        state.Notice = data
    }
}

const state = {
    // 医院新闻列表
    allNewsList:[],
    total:0,
    // 医院动态and通告
    DynamicAndNotice:[],
    // 动态
    Notice:[]
}

const getters = {
    // 计算轮播图的展示数量
    swiperNewsList(){
        return state.allNewsList.slice(0,5)
    }

}

export default {
    namespaced:true, // 命名空间
    actions,
    mutations,
    state,
    getters
}


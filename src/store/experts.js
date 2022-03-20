import {reqExpertsStyleList} from "@/api";

const actions = {
    async getExpertsStyle({commit},data){
      const result = await reqExpertsStyleList(data)
        console.log(result)
        if(result.code === 200){
            commit('GETEXPERTSSTYLE',result.data)
        }
    }
}

const mutations = {
    GETEXPERTSSTYLE(state,data){
        state.expertsStyle = data.records
        state.total = data.total
    }
}

const state = {
    expertsStyle:[],
    total:0
}

const getters = {


}

export default {
    namespaced:true, // 命名空间
    actions,
    mutations,
    state,
    getters
}


import {reqDepartmentList} from "@/api";

const actions = {
    async getDepartmentList({commit},data){
       const result =  await reqDepartmentList(data)
        if(result.code === 200){
            commit('GETDEPARTMENTLIST',result.data.records)
        }
    }
}

const mutations = {
    GETDEPARTMENTLIST(state,data){
        state.departmentList = data
    }
}

const state = {
    departmentList:[]
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

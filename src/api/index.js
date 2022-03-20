import requests from './request'
// 医院新闻
export const reqNewsList = (data) => requests({
    url: '/news/getPage',
    method: 'post',
    data
})

// 专家
export const reqExpertsStyleList = (data) =>requests({
    url:'/docker/getPage',
    method:'post',
    data
})
// 专家详情
export const reqExpertsStyleInfo = (id) => requests({
    url:`/docker/getById/${id}`,
    method:'get'
})

// 科室
export const reqDepartmentList = (data) =>requests({
    url: '/department/getPage',
    method:'post',
    data
})

// 新闻详情
export const reqNewsInfo = (id) => requests({
    url: `/news/getById/${id}`,
    method:'get'
})

// 科室详情
export const reqDepartmentDetail = (id) =>requests({
    url:`/department/getById/${id}`,
    method:'get'
})

// 轮播图接口
export const reqSwiperList = (data) => requests({
    url:'/banner/getPage',
    method:'post',
    data
})

// 医院简介
export const reqAboutMe = (data) =>requests({
    url:'/des/getPage',
    method:'post',
    data
})

// 医疗器械
export const reqMedicalEquipment = (data) =>requests({
    url:'/med/getPage',
    method:'post',
    data
})

// 预约
export const reqOrder = (data) =>requests({
    url:'/meg/insert',
    method:'post',
    data
})


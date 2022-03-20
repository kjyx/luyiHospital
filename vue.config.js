
module.exports = {
    assetsDir: 'static',
    parallel: false,
    publicPath: './',
    lintOnSave:false,
    // 配置代理服务器
    devServer:{
        proxy:{
            '/erupt-api':{
                target:'http://182.160.8.76:8033',
            }
        }
    },
}

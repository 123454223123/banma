// 这个文件时全局的ajax请求封装文件, 所有的ajax请求都要放在这个文件中执行

// 导入ajax请求插件 axios
import axios from "axios"

// 定义全局唯一的基础代理路径
var baseUrl = "/myGet"

// 封装一个通用的请求函数
function ajax_get(url, params={}){
    return new Promise(resolve=>{
        axios.get(url, { params }).then(res=>{
            resolve(res.data)
        })
    })
}

// 定义一个post请求方法
function ajax_post(url, params={}){
    return new Promise(resolve=>{
        axios.post(url, params ).then(res=>{
            resolve(res)
        })
    })
}


//--------------------------------------------------------------首页
// 定义请求页面ID
var getId = ()=> ajax_get(baseUrl + "/m1/cms/nav")
// 定义请求首页数据 和二级页数据
var getIndexList = params => ajax_get(baseUrl + "/m1/cms/page/detail", params)
// 定义请求首页酒店信息
var getIndexHotel = params => ajax_post(baseUrl + "/m1/product/list/by_ids", params)
// 定义请求轮播图数据                                   
var getLunBoDetail = params => ajax_get(baseUrl + "/m1/product/detail", params)
//  定义请求目的地数据
var getDiZhi = params => ajax_get(baseUrl + "/m1/area/group")
//  定义目的地二级页数据 
var getDiZhiDetail = params => ajax_get(baseUrl + "/m1/product/list", params)
//  定义目的地二级页分类标题
var getDiZhiTypes = params => ajax_get(baseUrl + "/m1/product/list/type", params)
//  定义目的地分类筛选
var getDiZhiXuan = params => ajax_get(baseUrl + "/m1/page/product/filter", params)
//  定义发现页面数据
var getFaXian = params => ajax_get(baseUrl + "/article/list", params)
//  定义发现页面详情
var getFaXianDetail = params => ajax_get(baseUrl + "/article/detail", params)
//  定义定制私人定制
var getSiRen = params => ajax_get(baseUrl + "/m1/cms/customize")
//  定义定制企业定制
var getQiYe = params => ajax_get(baseUrl + "/m1/enterprise_customize/page")
//  定义定制师信息
var getDingZhiShi = params => ajax_get(baseUrl + "/m1/get_dzs", params)
//  定义热门搜索页面
var getHotSearch = params => ajax_get(baseUrl + "/page/keywords")
// 获取手机验证码
var getPhoneYzm = params => ajax_get(baseUrl + "/m1/user/send_code",params)
//  验证码登录注册
var getYzmZhu = params => ajax_post(baseUrl + "/login/register",params)
//  搜索结果查询
var getSearchList = params => ajax_get(baseUrl + "/m1/product/list",params)
export {
    getId,
    getIndexList,
    getIndexHotel,
    getLunBoDetail,
    getDiZhi,
    getDiZhiDetail,
    getDiZhiTypes,
    getDiZhiXuan,
    getFaXian,
    getFaXianDetail,
    getSiRen,
    getQiYe,
    getDingZhiShi,
    getHotSearch,
    getPhoneYzm,
    getYzmZhu,
    getSearchList
}





// 导出封装的函数
// module.exports = {}    require()   node导入导出
// ES6模块化导出
// export default { }     import obj from "ajax.js"

// import {  } from "ajax.js" 导出时不加default, 导入就可以使用按需解构导入


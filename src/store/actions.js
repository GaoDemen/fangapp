import axios from "../https/htpps";
import types from "./mutation-types";
import states from "./state.js";
import qs from "qs"
const actions = {

    // 轮播图
    setBannerList(context,data){
        axios.HttpPost('/index?opt=1000')
            .then((data) => {
                context.commit('SET_BANNER_LIST', data)
        })
    },

    // 房源列表
    setHouseList(context,data){
        axios.HttpPost('/index?opt=300',{
            'type':1,
            "distance":800,
            "currPage":1,
            "pageSize":20,
            "longitude":"",
            "latitude":"",
            "currPage":1,
            "pageSize":10,
            "province":'',
            "city":''            
        }).then((data) => {
            context.commit('SET_HOUSE_LIST', data)
        })
    },    

    // 房源详情
    setHouseDetail(context,type){
        axios.HttpPost('/index?opt=301',{
            'id':type.id,
            }).then(function (data) {
                console.log(data)
                context.commit('SET_HOUSE_DETAIL', data)
        });
    },

    // 获取个人信息
    setUserInfo(context,type){
        axios.HttpPost('/index?opt=200',{
            "userId":type,
        }).then(function (response) {
            context.commit('SET_USER_INFO', response.data)
        });
    },

    // 获取身份证信息
    setIdCard(context,type){
        axios.HttpPost('/index?opt=203',{
            "userId":type,
        }).then(function (response) {
            context.commit('SET_ID_CARD', response.data)
        });
    },    

    // 获取账单列表
    setOrderBill(context,type){
        axios.HttpPost('/index?opt=402',{
            "order_id":type.order_id,
            "landlord_id":type.landlord_id,
            "user_id":type.user_id
        }).then(function (response) {
            context.commit('SET_ORDER_BILL', response.data)
        });
    }, 

    // 我的收藏列表
    setLikeList(context,type){
        axios.HttpPost('/index?opt=206',{
            "userId":type.userId,
            // "currPage":1,
            // "pageSize":10
        }).then(function (response) {
            context.commit('SET_LIKE_LISE', response.data)
        });
    }, 

    // 订单列表 -1取消，1未签约，2待签约，3签约
    setOrder(context,type){
        axios.HttpPost('/index?opt=401',{
            "order_id":type.order_id,
            "landlord_id":type.landlord_id,
            "user_id":type.user_id, 
            "type":type.type,
        }).then(function (response) {
            context.commit('SEND_ORDER', response.data)
        });
    },     

}
export default actions;
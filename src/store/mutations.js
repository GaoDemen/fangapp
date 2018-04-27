import state from "./state"
import types from "./mutation-types"
import url from "../https/config"
const mutations = {
    [types.SET_BANNER_LIST] (state,data){
        state.bannerList = data.data
    },
    [types.SET_HOUSE_LIST] (state,data){
        state.houseList = data.data
    }, 
    [types.SET_HOUSE_DETAIL] (state,data){
        state.houseDetailList = data.data
    },         
    [types.SET_USER_INFO](state,data){
        state.userInfo = data
    }, 
    [types.SET_ID_CARD](state,data){
        state.cardId = data
    },  
    [types.SET_ORDER_BILL](state,data){
        state.orderBill = data
    },    
    [types.SET_LIKE_LISE](state,data){
        state.likeList = data
    },
    [types.SEND_ORDER](state,data){
        state.orderList = data
    },
    [types.SET_PROVINCE](state,data){

        state.provinceList[0].values = data
    }, 
    [types.SET_CITY](state,data){
        state.cityList[0].values = data
    }, 
    [types.SET_COUNTY](state,data){
        state.countyList[0].values = data
    },          
}

export default mutations;
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
}

export default mutations;
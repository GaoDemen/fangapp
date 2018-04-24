import state from "./state";

const getters = { 
    getBannerList(state){
        return state.bannerList
    },
    getHouseList(state){
        return state.houseList
    },
    getHouseDetailList(state){
        return state.houseDetailList
    },
    getUserInfo(state){
        return state.userInfo
    },
    getCardId(state){
        return state.cardId
    },    
    getOrderBill(state){
        return state.orderBill
    },
    getLikeList(state){
        return state.likeList
    },   
    getOrderList(state){
        return state.orderList
    },  
    
}

export default getters;
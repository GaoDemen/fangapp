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
    }
}

export default getters;
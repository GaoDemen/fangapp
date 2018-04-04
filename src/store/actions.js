import axios from "../https/htpps";
import types from "./mutation-types";
import states from "./state.js";
import qs from "qs"
const actions = {

    // 轮播图
    setBannerList(context,data){
        axios.HttpGet('/index?opt=1000')
            .then((data) => {
                context.commit('SET_BANNER_LIST', data)
        })
    },

    // 房源列表
    setHouseList(context,data){
        axios.HttpGet('/index?opt=300',{
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
        axios.HttpGet('/index?opt=301',{
                    'id':type.id,
            }).then(function (data) {
                console.log(data)
                context.commit('SET_HOUSE_DETAIL', data)
        });
    },


}
export default actions;
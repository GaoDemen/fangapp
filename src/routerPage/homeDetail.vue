<template>
  <div class="homeDetail">
    <!-- <banner></banner> -->
    <mt-swipe class="swipe" :auto="0" >
        <mt-swipe-item v-for="item in getHouseDetailList.housePictures" :key="item.id"><img :src="`${http}${item.picture}`" alt=""></mt-swipe-item>
    </mt-swipe>    
    <div class="homeDetail_list">
        <div class="home_info">
            <h4> 房源信息 </h4>
            <ul>
            <li>
                <p> 编号：{{ getHouseDetailList.houseInfoVo.houseNo }} </p>
                <p> 户型：{{ getHouseDetailList.houseInfoVo.houseTypeRoomCount }}室{{ getHouseDetailList.houseInfoVo.houseTypeHallCount }}厅{{ getHouseDetailList.houseInfoVo.houseTypeToiletCount }}卫 </p>
            </li>
            <li>
                <p> 面积：{{ getHouseDetailList.houseInfoVo.houseArea }}m*m </p>
                <p> 楼层：{{ getHouseDetailList.houseInfoVo.houseFloor }}/{{ getHouseDetailList.houseInfoVo.houseFloorMax }}层 </p>
            </li>
            <li>
                <p> {{ getHouseDetailList.houseInfoVo.addressArea }} </p>
                <p> {{ getHouseDetailList.houseInfoVo.isBrandApartment == true?"品牌公寓":"普通公寓" }}-{{ getHouseDetailList.houseInfoVo.rentType == 1?"整租":"合租" }} </p>
            </li>
            <li>
                <p class="houseRental"> {{ getHouseDetailList.houseInfoVo.houseRental }}元/月 </p>
                <p>  押一付一  </p>
            </li>
            </ul>
        </div>

        <div>
            <h4> 地理位置 </h4> 
            <p class="loaction"> <img src="../assets/image/dw.png" alt=""> <span> {{ getHouseDetailList.houseInfoVo.addressArea }}{{ getHouseDetailList.houseInfoVo.addressInfo }} </span> </p>
            <loaction-map  class="loaction_map" v-bind:data="getHouseDetailList.houseInfoVo">  </loaction-map>
        </div> 
        <!-- <div class="home_pz">
            <h4> 房源配置 </h4> 
            <ul>
                <li> <img src="https://png.icons8.com/ios/288/home-filled.png" alt=""> <p> 空调 </p> </li>
                <li> <img src="https://png.icons8.com/ios/288/home-filled.png" alt=""> <p> 床 </p> </li>
                <li> <img src="https://png.icons8.com/ios/288/home-filled.png" alt=""> <p> 书桌 </p> </li>
                <li> <img src="https://png.icons8.com/ios/288/home-filled.png" alt=""> <p> 衣柜 </p> </li>
                <li> <img src="https://png.icons8.com/ios/288/home-filled.png" alt=""> <p> 卫生间 </p> </li>
            </ul>
        </div>
        
        <div class="home_bz">
            <h4> 平台保障 </h4> 
            <ul>
                <li> <img src="https://png.icons8.com/ios/288/home-filled.png" alt=""> 真实房源 </li>
                <li> <img src="https://png.icons8.com/ios/288/home-filled.png" alt=""> 房东认证 </li>
                <li> <img src="https://png.icons8.com/ios/288/home-filled.png" alt=""> 支付保障 </li>
            </ul>
        </div>

        <div class="home_dl">
            <h4> 代理商信息 <span> 全部房源 </span></h4> 
            <ul>
                <li> <span> 真实房源 </span> <span> 预约回电 </span> <span> 保证接听 </span> </li>
                <li> <span> 闪电维修 </span> <span> 管家服务 </span> <span> 保洁服务 </span> </li>
            </ul>
        </div> -->
        
        <!-- <div>
            <h4> 同小区房源 </h4> 
            <house-list v-for="item in getHouseList" :key="item.id" v-bind:data="item"></house-list>
        </div>

        <div>
            <h4> 相似房源 </h4> 
            <house-list v-for="item in getHouseList" :key="item.id" v-bind:data="item"></house-list>
        </div>

        <div>
            <p> 房间有问题？<span> 投诉 </span> </p>
        </div> -->

    </div>
    <div class="footer">
        <div class="foooter_sc" @click="setLikeHouse()">
            <img src="../assets/image/sc.png" alt="">
            <span> 收藏 </span>
        </div>
        <a class="appointment one" @click="showModel()" > 预约看房 </a>
        <!-- href="tel:1" getHouseDetailList.houseInfoVo.ownershipNumber -->
        <a class="appointment two"> 联系房东 </a>
    </div>
    <!-- <model v-bind:data="popupVisible"></model> -->
  </div>
</template>

<script>
// import banner from "../components/banner"
import houseList from "../components/houseList"
import loactionMap from "../components/loactionMap"
// import model from "../components/model"
import { mapGetters , mapActions } from "vuex"
import { Toast } from "mint-ui"
import qs from "qs"
export default {
    name: 'homeDetail',
    data(){
        return{
            popupVisible:false,
        }
    },
    components:{
        // banner,
        houseList,
        loactionMap,
        // model
    },
    created(){
    //   console.log(this.$route.query.id)  
        this.setHouseDetail({id:this.$route.query.id})
    },
    computed:{
        ...mapGetters([
            "getHouseList",
            "getHouseDetailList"
        ])
    },
    methods:{
        ...mapActions([
            "setHouseDetail"
        ]),
        showModel(){
           this.popupVisible = true  
        },
        setLikeHouse(){
            const that = this;
            console.log(this.$utils.getUrlKey('userId'))
            if(this.$utils.getUrlKey('userId') == null || this.$utils.getUrlKey('userId') == undefined || this.$utils.getUrlKey('userId') == ""){
                Toast({
                    message: '请您先登录，在预约哦',
                    iconClass: 'icon icon-err'
                });
            }else{
                
                this.$axios.post(
                    `${that.http}/index?opt=207`,
                    qs.stringify(
                    {
                        "userId":this.$utils.getUrlKey('userId'),
                        "houseId":this.$utils.getUrlKey('id'),
                        "remark":"备注"
                    }
                    )).then(function (response) {
                        if(response.data.success == true){
                            Toast({
                                message: response.data.msg,
                                iconClass: 'icon icon-suc'
                            });
                        }else{
                            Toast({
                                message: response.data.msg,
                                iconClass: 'icon icon-err'
                            });
                        }

                    }).catch(function (error) {
                
                    });
                }

            },
    }
}
</script>

<style scoped>
.appointment{
    position: absolute;
    right: 0.15rem;
    top: 50%;
    font-size: 0.14rem;
    color: #ffffff;
    transform: translateY(-50%);
    background:#4784ff ;
    padding: 0.05rem 0.15rem;
    border-radius: 0.05rem;
}
.one{
    right: 1.15rem;
}
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 0.5rem;
    width: 100%;
    background: #f8f8f8 ;
    z-index: 9999;
    padding: 0 0.15rem;
    box-sizing: border-box;
    z-index: 1;
}
.foooter_sc{
    display: flex;
    height: 100%;
    align-items: center;
}
.foooter_sc img{
    width: 0.4rem;
}
.foooter_sc span{
    font-size: 0.14rem;
    color: #888888;
}
.homeDetail_list{
    background: #f8f8f8;
}
.homeDetail_list div h4{
    font-size: 0.18rem;
    font-weight: 500;
    margin: 0 0 0.15rem 0;
}
.homeDetail_list div p{
    font-size: 0.14rem;
}
.homeDetail_list>div{
    margin-bottom: 0.15rem;
    padding: 0.15rem;
    background: #ffffff;
}
.home_info li{
    display: flex;
}
.home_info li p:nth-of-type(1){
    flex: 3;
    color: #888888;
    font-size: 0.14rem;
    line-height: 0.4rem;
}
.home_info li p:nth-of-type(2){
    flex: 2;
    color: #888888;
    font-size: 0.14rem;
    line-height: 0.4rem;
}
.home_pz ul{
    display: flex;
}
.home_pz li{
    flex: 1;
    text-align: center;
}
.home_pz img{
    width: 0.4rem;
}
.home_bz ul{
    display: flex;
}
.home_bz ul li{
    flex: 1;
    text-align: center;
    font-size: 0.14rem;
}
.home_bz ul li img{
    width: 0.25rem;
    height: 0.25rem;
}
.home_dl ul li{
    display: flex;
}
.home_dl ul li span{
    flex: 1;
    text-align: center;
    font-size: 0.14rem;
}

  .swipe{
    height: 2.5rem;
  }
  .swipe img{
    width: 100%;
    height: 2.5rem;
  }
  .loaction_map{
      height: 1.5rem;
  }
    .loaction{
      display: flex;
      align-items: center;
      font-size: 0.14rem;
      margin-bottom: 0.1rem;
    }
    .loaction img{
      width: 0.25rem;
      margin-right: 0.1rem
    }
    .loaction span{
      color: #666;
    } 
  
</style>

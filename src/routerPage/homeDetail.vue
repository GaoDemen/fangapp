<template>
  <div class="homeDetail">
    <banner></banner>
    <div class="homeDetail_list">
        <div class="home_info">
            <h4> 房源信息 </h4>
            <ul>
            <li>
                <p> 编号：89757 </p>
                <p> 户型：1室1厅1卫 </p>
            </li>
            <li>
                <p> 面积：40m </p>
                <p> 楼层：2/18层 </p>
            </li>
            <li>
                <p> 福田区-安华工业区 </p>
                <p> 酒店式公寓-整租 </p>
            </li>
            <li>
                <p> 6000元/月 押二付一 </p>
                <p> 明细 </p>
            </li>
            </ul>
            <div>

            </div>
        </div>

        <div>
            <h4> 地理位置 </h4> 
            <div>  </div>
        </div> 
        <div class="home_pz">
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
        </div>
        
        <div>
            <h4> 同小区房源 </h4> 
            <house-list></house-list>
        </div>

        <div>
            <h4> 相似房源 </h4> 
            <house-list></house-list>
        </div>

        <div>
            <p> 房间有问题？<span> 投诉 </span> </p>
        </div>

    </div>
  </div>
</template>

<script>
import banner from "../components/banner"
import houseList from "../components/houseList"

export default {
    name: 'homeDetail',
    components:{
        banner,
        houseList
    }
}
</script>

<style scoped>
.homeDetail_list{
    
    background: #efefef;
}
.homeDetail_list div h4{
    font-size: 0.2rem;
    color: #333;
    font-weight: 100;
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
.home_info li p{
    flex: 1;
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
</style>

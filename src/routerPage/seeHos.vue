<template>
  <div class="seeHos">
    <!-- <ul class="see_housHistory">
      <li> 
        <h4> 看房行程 </h4>
        <p> 共2个看房行程哟 </p>
      </li>
      <li> 
        <p> <span> 历史 </span>  <img src="../assets/image/more.png" alt=""></p>
      </li>
    </ul> -->
    <div class="tosee" v-for="item in getHouseList">
      <p class="time"> <img src="../assets/image/time.png" alt="">  <span>  2018-01-10 08:00 </span> </p>
      <div class="map">
        <loaction-map class="loactionMap"  :key="item.id" v-bind:data="item"></loaction-map>
      </div>
      <p class="house_d"> <span> <b> 6100元/月   </b> 福田区-安华工业-1室1厅1厨1卫 </span> <span> <img src="../assets/image/more.png" alt=""> </span> </p>
      <div class="btn"> <div> <a> 联系房东 </a> </div>  <div>  <a> 导航一下 </a> </div>  </div>
    </div>
  </div>
</template>

<script>
import loactionMap from "../components/loactionMap"
import { mapGetters } from "vuex"
export default {
  name: 'seeHos',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    loactionMap
  },
  computed:{
    ...mapGetters([
      "getHouseList"
    ])
  }
}
</script>
<style  scoped>
  .seeHos{
    background: #ffffff;
    padding: 0 0.15rem ;
  }
  .see_housHistory{
    font-size: 0.14rem;
    display: flex;
    padding:0.15rem 0;
    background: #ffffff;
  }
  .see_housHistory>li{
    flex: 1;
  }
  .see_housHistory>li h4{
    font-weight: normal;
    font-size: 0.18rem;
  }
  .see_housHistory>li p{
    color: #999;
  }
  .see_housHistory>li:nth-child(2) p{
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .see_housHistory>li:nth-child(2) img{
    width: 0.21rem;
  }
  .loactionMap{
    height: 2rem;
  }
  .tosee{
    padding: 0.15rem 0;
    background: #ffffff;
    border-bottom: 0.01rem solid #efefef;
  }
  .time{
    display: flex;
    align-items: center;
    margin-bottom: 0.1rem;
  }
  .time span{
    color: #999999;
    font-size: 0.14rem;
  }
  .time img{
    width: 0.2rem;
    margin-right: 0.1rem;
  }
  .house_d{
    display: flex;
    margin-top: 0.1rem;
  }
  .house_d span:nth-child(1){
    flex: 5;
  }
  .house_d span:nth-child(2){
    flex: 1;
  }
  .house_d span{
    font-size: 0.14rem;
    color: #999;
  }
  .house_d span b{
    font-weight: normal;
    color: #4784ff;
    margin-right: 0.1rem;
  }
  .house_d span img{
    width: 0.21rem;
    float: right;
  }
  .btn{
    display: flex;
  }
  .btn div{
    display: block;
    flex: 1;
    margin-top: 0.15rem;
  }
  .btn a{
    display: block;
    font-size: 0.14rem;
    color: #555555;
    width: 1.2rem;
    text-align: center;
    padding: 0.05rem 0;
    margin: 0 auto;
    border: 0.01rem solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 0.08rem;
  }
</style>

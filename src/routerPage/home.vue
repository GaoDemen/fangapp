<template>
  <div class="home">
    <banner></banner>
    <ul>
      <li> <img  src="../assets/image/1.jpg"> <p> 地图找房 </p> </li>
      <li> <img  src="../assets/image/2.jpg" @click="gopage('/findHouse')"> <p> 月付找房 </p> </li>
      <li> <img  src="../assets/image/3.jpg" @click="gopage('/findHouse')"> <p> 整租 </p> </li>
      <li> <img  src="../assets/image/4.jpg" @click="gopage('/findHouse')"> <p> 合租 </p> </li>
    </ul>
    <h2> 热门房源 </h2>
    <house-list v-for="item in getHouseList" :key="item.id" v-bind:data="item"></house-list>
  </div>
</template>

<script>
import banner from "../components/banner"
import houseList from "../components/houseList"
import { mapGetters } from "vuex"
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  },
  components:{
    banner,
    houseList
  },
  computed:{
    ...mapGetters([
      "getHouseList"
    ])
  },
  methods:{
    gopage(url){
      this.$router.push({path: url})
    }
  }

}
</script>
<style scoped>
  .home{
    background: #f8f8f8;
  }
  .home h2{
      font-size: 0.2rem;
      padding: 0.15rem 0.15rem 0;
      background: #ffffff;
      font-weight: normal;
      font-size: 0.18rem;
    }
  .home ul{
    display: block;
    display: flex;
    background: #ffffff;
    margin-bottom: 0.15rem;
  }
  .home ul li{
    flex: 1;
    text-align: center;
    position: relative;
    height: 1.3rem;
  }
  .home ul li img{
    width: 0.6rem;
    height: 0.6rem;
    display:block;
    position: absolute;
    left: 50%;
    top: 0.2rem;
    transform: translateX(-50%);
  }
  .home ul li p{
    font-size: 0.16rem;
    color: #666;
    position: absolute;
    bottom: 0.2rem;
    width: 100%;
  }
</style>

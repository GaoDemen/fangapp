<template>
  <div class="home">
    <banner></banner>
    <ul>
      <li> <img  src="https://png.icons8.com/ios/288/home-filled.png"> <p> 地图找房 </p> </li>
      <li> <img  src="https://png.icons8.com/ios/288/home-filled.png" @click="gopage('/findHouse')"> <p> 月付找房 </p> </li>
      <li> <img  src="https://png.icons8.com/ios/288/home-filled.png" @click="gopage('/findHouse')"> <p> 整租 </p> </li>
      <li> <img  src="https://png.icons8.com/ios/288/home-filled.png" @click="gopage('/findHouse')"> <p> 合租 </p> </li>
    </ul>
    <h2> 热门房源 </h2>
    <house-list></house-list>
  </div>
</template>

<script>
import banner from "../components/banner"
import houseList from "../components/houseList"
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
  methods:{
    gopage(url){
      this.$router.push({path: url})
    }
  }

}
</script>
<style scoped>
  .home h2{
        font-size: 0.2rem;
        margin: 0.15rem 0;
        padding: 0 0.15rem;
    }
  .home ul{
    display: block;
    display: flex;
  }
  .home ul li{
    flex: 1;
    text-align: center;
  }
  .home ul li img{
    width: 0.5rem;
    height: 0.5rem;
  }
  .home ul li p{
    font-size: 0.16rem;
  }
</style>

<template>
  <div class="houseList">
      
      <ul>
          <li v-for="i in 2" @click="gopage('/homeDetail')"> 
              <img src="http://image.mgzf.com/mogoroom/2017-04/mogoApp/0/0/0/0_1491127185063.jpg!pc.list" alt=""> 
              <div class="houseDetil">
                  <p class="title"> 福田区-安华工业区 </p>
                  <p> 1室1厅1卫-40m*m </p>
                  <p>距1号线白石洲293米 </p>
                  <p> 酒店式公寓 整租 </p>
                  <span> 6100 元/月</span>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'houseList',
  data () {
    return {
      msg: ''
    }
  },
   methods:{
    gopage(url){
        
      this.$router.push({path: url})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .houseList{
        padding: 0.15rem;
    }

    .houseList ul li{
        display: flex;
        margin-bottom: 0.15rem;
        position: relative;
    }
    .houseList ul li img{
        width: 1.2rem;
        height: 0.8rem;
    }
    .houseDetil{
        margin-left: 0.15rem;
        
    }
    .houseDetil p{
        font-size: 0.14rem;
        color: #999999;
    }
    .houseDetil .title{
        font-size: 0.16rem;
        color: #333;
    }
    .houseDetil span{
        position: absolute;
        right: 0rem;
        font-size: 0.16rem;
        bottom: 0;
    }
</style>

<template>
  <div class="houseList">
      
      <ul>
          <li @click="gopage('/homeDetail',data.id)"> 
              <img :src="`${http}${data.housePicture}`" alt=""> 
              <div class="houseDetil">
                  <p class="title"> {{ data.addressArea }} </p>
                  <p> {{ data.houseTypeRoomCount }}室{{ data.houseTypeHallCount }}厅{{ data.houseTypeToiletCount }}卫{{ data.houseTypeKitchenCount }}厨 </p>
                  <!-- <p>距1号线白石洲293米 </p> -->
                  <!-- <p> {{ rentType == 1?'整租':'合租' }} </p> -->
                  <p> 面积 {{ data.houseArea }}m*m  </p>
              </div>
              <span class="houseRental"> {{ data.houseRental }} 元/月</span>
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
    props:{
        data:[Object]  
    },
    methods:{
    gopage(url,id){
        this.$router.push({path: url,query:{ id : id}})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .houseList{
        padding:0 0.15rem;
        background: #ffffff;
    }

    .houseList ul li{
        display: flex;
        padding: 0.15rem 0;
        position: relative;
        border-bottom: 0.01rem solid #f0f0f0;
    }
    .houseList ul li img{
        width: 1.4rem;
        height: 1rem;
    }
    .houseDetil{
        margin-left: 0.15rem;
        /* padding: 0.125rem 0; */
    }
    .houseDetil p{
        font-size: 0.14rem;
        color: #999999;
        line-height: 0.25rem;
    }
    .houseDetil .title{
        font-size: 0.18rem;
        color: #333;
    }
    .houseRental{
        position: absolute;
        right: 0rem;
        font-size: 0.16rem;
        bottom: 0.15rem;
        color: #4784ff;
    }
</style>

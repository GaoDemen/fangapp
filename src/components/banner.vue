<template>
  <div class="banner">
    <mt-swipe :auto="0" >
        <mt-swipe-item v-for="item in getBannerList" :key="item.id"><img :src="`${http}${item.imageUrl}`" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'banner',
  data () {
    return {
      msg: '',
    }
  },
  computed:{
    ...mapGetters([
      "getBannerList"
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner{
    height: 2.5rem;
  }
  .banner img{
    width: 100%;
    height: 2.5rem;
  }
</style>

<template>
  <div class="banner">
    <mt-swipe :auto="2000">
        <mt-swipe-item><img src="../assets/image/house.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/image/house.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/image/house.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .banner{
        height: 2rem;
    }
</style>

<template>
  <div id="router">
    <mt-tabbar>
      <mt-tab-item id="首页" @click.native="gopage('/home')">
        <img slot="icon" src="https://png.icons8.com/ios/288/home-filled.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="找房" @click.native="gopage('/seeHos')">
        <img slot="icon" src="https://png.icons8.com/ios/288/home-filled.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="gopage('/me')">
        <img slot="icon" src="https://png.icons8.com/ios/288/home-filled.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'router',
  methods:{
    gopage(url){
      this.$router.push({path: url})
    },
  }
}
</script>

<style>

</style>
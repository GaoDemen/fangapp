<template>
  <div id="router">
    <!-- <mt-tabbar>
      <mt-tab-item id="首页" @click.native="gopage('/home')">
        <img slot="icon" src="../assets/image/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="找房" @click.native="gopage('/seeHos')">
        <img slot="icon" src="../assets/image/find.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="gopage('/me')">
        <img slot="icon" src="../assets/image/me.png">
        我的
      </mt-tab-item>
    </mt-tabbar> -->
    <router-view/>
    <div class="mint-tabbar-spac"></div>
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
  .mint-tabbar{
    position: fixed;
    bottom: 0;
    z-index: 99999;
  }
  .mint-tabbar-spac{
    height: 0.55rem;
  }
</style>
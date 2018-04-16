<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: 'App',
  created(){
    this.setBannerList();
    this.setHouseList()
  },
  methods:{
    ...mapActions([
        "setBannerList",
        "setHouseList"
    ])
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  font-size: 0.16rem;
  /* letter-spacing: 0.02rem;
  text-indent: 0.05rem; */
}
html,body{
  height: 100%;
}
ul li{
  list-style: none;
}
#app{
  min-height: 100%;
  background: #f8f8f8;
}
.amap-copyright{
  display: none !important;
}
</style>

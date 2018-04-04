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
}
ul li{
  list-style: none;
}

</style>

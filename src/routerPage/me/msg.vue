<template>
  <div id="msg">
      <me-list v-bind:data="msg"></me-list>
  </div>
</template>

<script>
import meList from "../../components/meList"
export default {
  name: 'msg',
  data () {
    return {
      msg: [
            {"title":"消息助手"},
            {"title":"租约管理"},
            {"title":"售后服务"},
           ]
    }
  }, 
  components:{
      meList
  },  
  methods:{
   
  }
}
</script>

<style scoped>

</style>
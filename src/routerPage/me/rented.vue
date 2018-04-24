<template>
  <div id="rented">
    <house-list v-for="item in getLikeList" :key="item.id" v-bind:data="item"></house-list>
  </div>
</template>

<script>
import houseList from "../../components/houseList"
import { mapGetters } from "vuex"
export default {
  name: 'rented',
  components:{
    houseList
  },
  computed:{
    ...mapGetters([
        "getLikeList"
    ])
  },  
  methods:{
   
  }
}
</script>

<style scoped>

</style>
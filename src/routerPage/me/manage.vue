<template>
    <div id="manage">
        <div class="manage">
            <div class="manage_ht"> 使用电子合同，保证租约 </div>
            <ul class="manage_qy">
                <li class="active"> 未签约 </li>
                <li> 签约 </li>
            </ul>
        </div>
        <house-list v-for="item in getHouseList" :key="item.id" v-bind:data="item"></house-list>
    </div>
</template>

<script>
import houseList from "../../components/houseList"
import { mapGetters } from "vuex"
export default {
  name: 'manage',
  components:{
    houseList
  },
  computed:{
    ...mapGetters([
        "getHouseList"
    ])
  },
  methods:{
   
  }
}
</script>

<style scoped>
    .manage{
        padding: 0.15rem 0.15rem 0;
        background: #ffffff;
        margin-bottom: 0.15rem;
    }
    .manage_ht{
        background: #4784ff ;
        padding: 0.15rem 0;
        text-align: center;
        color: #ffffff;
        margin:0 0 0.1rem 0;
        border-radius: 0.05rem;
    }
    .manage_qy{
        display: flex;
    }
    .manage_qy li{
        flex: 1;
        text-align: center;
        color: #666666;
        position: relative;
        padding: 0.15rem;
    }
    .manage_qy .active{
        color: #4784ff;
    }
    .active::after{
        content: '';
        position: absolute;
        width: 0.25rem;
        height: 0.02rem;
        background: #4784ff ;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
<template>
  <div id="msg">
    <ul class="msg_status">
      <li @click="changeClass(1)" :class="{ active: showNumber==1 }"> 未收 </li>
      <li @click="changeClass(2)" :class="{ active: showNumber==2 }"> 已收 </li>
      <li @click="changeClass(3)" :class="{ active: showNumber==3 }"> 待收 </li>
    </ul>  
    <ul class="msg_list">
      <li v-for="item in getOrderBill" v-if="item.status == showNumber"> 
        <div>
          <p class="order"> 订单号：<span> {{ item.orderId }} </span>  </p>
          <p class="time"> 时间：<span> {{ item.repaymentTime | timeFormat }} </span>   </p>
          <p class="mony"> 金额：<span> {{ item.repaymentCorpus }}元 </span>   </p>
        </div>
        <div>
          <span v-if="item.status == 1"> 未收 </span>
          <span v-if="item.status == 2"> 已收 </span>
          <span v-if="item.status == 3"> 待收 </span>
          
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex"
import meList from "../../components/meList"
export default {
  name: 'msg',
  data () {
    return {
      showNumber:1,
    }
  }, 
  created(){
    this.setOrderBill({
      "order_id":'',
      "landlord_id":this.$utils.getUrlKey("userId"),
      "user_id":''
    })
  },
  components:{
      
  },
  computed:{
    ...mapGetters([
      "getOrderBill"
    ])
  },  
  methods:{
    ...mapActions([
      "setOrderBill"
    ]),
    changeClass(index){
      this.showNumber = index
    }
  }
}
</script>

<style scoped>
  .msg_status{
    display: flex;
  }
  .msg_status li{
    flex: 1;
    text-align: center;
    padding: 0.15rem 0;
    background: #ffffff;
    position: relative;
  }
  .active{
    color:#4784ff ;
  }
  .active::after {
    content: '';
    position: absolute;
    width: 0.25rem;
    height: 0.02rem;
    background: #4784ff;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .msg_list{
    margin-top: 0.15rem;
  }
  .msg_list li{
    background: #ffffff;
    padding: 0.15rem;
    margin-top: 0.15rem;
    display: flex;
  }
  .msg_list li div:nth-child(1){
    flex: 1;
  }
  .msg_list li div:nth-child(1) p{
    line-height: 0.3rem;
  }
  .msg_list li div:nth-child(2){
    display: flex;
    align-items: center;
    color: #999999;
  }
  .order span{
    color: #666666;
  }
  .time span{
    color: #666666;
  }
  .mony span{
    color: #4784ff;
    font-size: 0.18rem;
  }
</style>
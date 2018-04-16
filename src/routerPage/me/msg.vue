<template>
  <div id="msg">
    <ul class="msg_status">
      <li class="active"> 已收 </li>
      <li> 待收 </li>
      <li> 未收 </li>
    </ul>  
    <ul class="msg_list">
      <li v-for="i in 8"> 
        <div>
          <p class="order"> 订单号：<span> 20180315624792 </span>  </p>
          <p class="time"> 时间：<span> 2015/8/13 </span>   </p>
          <p class="mony"> 金额：<span> 888元 </span>   </p>
        </div>
        <div>
          已收
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import meList from "../../components/meList"
export default {
  name: 'msg',
  data () {
    return {

    }
  }, 
  components:{
      
  },  
  methods:{
   
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
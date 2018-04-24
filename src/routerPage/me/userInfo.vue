<template>
  <div id="userInfo">
    <div class="user_img">
        <img :src="`${http}${getUserInfo.headImage}`"  alt="">
        <p> {{ getUserInfo.userName }} </p>
    </div>  
    <ul class="user_main">
        <li> 
            <p> 手机 </p>
            <p> {{ getUserInfo.mobile }} <img src="" alt=""> <img src="../../assets/image/more.png" alt=""> </p>
        </li>
        <li> 
            <p> 邮箱 </p>
            <p> {{ getUserInfo.email }} <img src="" alt=""> <img src="../../assets/image/more.png" alt=""> </p>
        </li>
        <li> 
            <p> 卡号 </p>
            <p> {{ getUserInfo.paymentAccount }} <img src="" alt=""> <img src="../../assets/image/more.png" alt=""> </p>
        </li>
        <li> 
            <p> 身份证 </p>
            <p> {{ getCardId.identityNumber }} <img src="" alt=""> <img src="../../assets/image/more.png" alt=""> </p>
        </li>        
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: 'userInfo',
  data () {
    return {
      msg: []
    }
  },
  computed:{
    ...mapGetters([
        "getUserInfo",
        "getCardId"
    ])
  },
  components:{
      
  },
  methods:{
   
  }
}
</script>

<style scoped>
    .user_img{
        background: #ffffff;
        text-align: center;
        padding: 0.6rem 0 ;
    }
    .user_img img{
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.6rem;
    }
    .user_main{
        margin-top: 0.15rem;
    }
    .user_main li{
        display: flex;
        background: #ffffff;
        padding: 0.15rem;
        margin-top: 0.05rem;
    }
    .user_main img{
        width: 0.25rem;
    }

    .user_main li p:nth-child(1){
      flex: 1;
    }
    .user_main li p:nth-child(2){
      display: flex;
      align-items: center;
      color: #666666;
      font-size: 0.14rem;
    }

</style>
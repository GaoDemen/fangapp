<template>
  <div id="userInfo">
    <div class="user_img">
        <img src="../../assets/image/user.jpg" alt="">
        <p> 少年程咬金 </p>
    </div>  
    <ul class="user_main">
        <li> 
            <p> 手机 </p>
            <p> 13797417875 <img src="" alt=""> <img src="../../assets/image/more.png" alt=""> </p>
        </li>
        <li> 
            <p> 邮箱 </p>
            <p> 123@foxmail.com <img src="" alt=""> <img src="../../assets/image/more.png" alt=""> </p>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'userInfo',
  data () {
    return {
      msg: []
    }
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
    }

</style>
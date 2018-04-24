<template>
  <div class="me">
    <div class="user"@click="pageGo('/userInfo')"> 
      <div class="user_info">
       <img :src="`${http}${getUserInfo.headImage}`" alt=""> 
       <p> {{ getUserInfo.userName }}  </p>
      </div>
      <div class="change_admin">
        切换为租户
      </div>
    </div>

    <ul>
      <li @click="pageGo('/send')"> 发布房源 <img src="../assets/image/fbfy.png" alt="">  </li>
      <li @click="pageGo('/seeHos')"> 预约列表 <img src="../assets/image/yylb.png" alt="">  </li>
      <li @click="pageGo('/rented')"> 我的收藏 <img src="../assets/image/yz.png" alt="">  </li>
      <li @click="pageGo('/msg')"> 账单管理 <img src="../assets/image/xx.png" alt="">  </li>
      <li @click="pageGo('/pay')"> 支付房租 <img src="../assets/image/zffz.png" alt="">  </li>
      <li @click="pageGo('/manage')"> 租约管理 <img src="../assets/image/zygl.png" alt="">  </li>
      <li @click="pageGo('/set')"> 设置 <img src="../assets/image/sz.png" alt="">  </li>
    </ul>
  </div>
</template>

<script>
import { mapActions , mapGetters } from "vuex"
export default {
  name: 'me',
  data () {
    return {
      msg: ''
    }
  },

  computed:{
    ...mapGetters([
      "getUserInfo"
    ])
  },
  methods:{
    pageGo(name){
      this.$router.push({path:name,query:{ 'userId': this.$utils.getUrlKey("userId") }})
    }
  }
}
</script>
<style scoped>
  .me{
    background: #f8f8f8;
  }
  .me ul{
    padding: 0 0.15rem;
    background: #ffffff;
  }
  .me ul li{
    font-size: 0.16rem;
    padding: 0.2rem;
    color: #333333;
    border-bottom: 0.01rem solid #efefef;
    font-weight: 500;
  }
  .me ul li:last-child{
    border:none;
  }
  .me ul li img{
    float: right;
    width: 0.3rem;
    height: 0.3rem;
  }
  .user{
    padding: 0.15rem;
    background:#4784ff ;
    height: 1.8rem;
    margin-bottom: 0.15rem;
    position: relative;
  }
  .user_info{
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .user p{
    font-size: 0.16rem;
    line-height: 0.5rem;
    color: #f8f8f8f8;
    margin-left: 0.15rem;
  }
  .user img{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.8rem;
    margin-left: 0.2rem;
  }
  .change_admin{
    position: absolute;
    right: 0.35rem;
    background: #f8f8f8;
    opacity: 0.3;
    padding:0.02rem 0.1rem;
    border-radius: 0.05rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.12rem;
  }
</style>

<template>
  <div id="set">
      <me-list v-bind:data="msg"></me-list>
      <div class="login_out"> <span> 退出登录 </span>  </div>
  </div>
</template>

<script>
import meList from "../../components/meList"
export default {
  name: 'set',
  data () {
    return {
      msg: [
            // {"title":"绑定手机"},
            // {"title":"绑定邮箱"},
            {"title":"重置登录密码"},
            // {"title":"重置支付密码"},
            {"title":"常见问题"},
            {"title":"意见提交"},
            {"title":"关于"},
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
    .login_out{
        position: fixed;
        padding: 0.1rem 0.15rem;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
    }
    .login_out span{
        display: block;
        background: #ffffff;
        text-align: center;
        color: #4784ff;
        padding: 0.15rem 0;
        border-radius: 0.08rem;
    }
</style>
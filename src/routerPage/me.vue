<template>
  <div class="me">
     <div class="user"> 
       <p> 137***7671  <img src="http://image.mgzf.com/mogoroom/2017-04/mogoApp/0/0/0/0_1491127185063.jpg!pc.list" alt=""></p>
     </div>
     <ul>
      <li> 发布房源 <img src="http://image.mgzf.com/mogoroom/2017-04/mogoApp/0/0/0/0_1491127185063.jpg!pc.list" alt="">  </li>
      <li> 预约列表 <img src="http://image.mgzf.com/mogoroom/2017-04/mogoApp/0/0/0/0_1491127185063.jpg!pc.list" alt="">  </li>
      <li> 已租 <img src="http://image.mgzf.com/mogoroom/2017-04/mogoApp/0/0/0/0_1491127185063.jpg!pc.list" alt="">  </li>
      <li> 消息 <img src="http://image.mgzf.com/mogoroom/2017-04/mogoApp/0/0/0/0_1491127185063.jpg!pc.list" alt="">  </li>
      <li> 支付房租 <img src="http://image.mgzf.com/mogoroom/2017-04/mogoApp/0/0/0/0_1491127185063.jpg!pc.list" alt="">  </li>
      <li> 租约管理 <img src="http://image.mgzf.com/mogoroom/2017-04/mogoApp/0/0/0/0_1491127185063.jpg!pc.list" alt="">  </li>
      <li> 设置 <img src="http://image.mgzf.com/mogoroom/2017-04/mogoApp/0/0/0/0_1491127185063.jpg!pc.list" alt="">  </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped>
  .me ul{
    padding: 0.15rem;
  }
  .me ul li{
    font-size: 0.16rem;
    padding: 0.1rem;
    border-bottom: 0.01rem solid #efefef;
  }
  .me ul li img{
    float: right;
    width: 0.2rem;
    height: 0.2rem;
  }
  .user{
    padding: 0.15rem;
  }
  .user p{
    font-size: 0.18rem;
    line-height: 0.5rem;
  }
  .user img{
    float: right;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
  }
</style>

<template>
  <div id="meList">
    <ul class="melist">
        <li v-for="item in data"> 
            <p> {{ item.title }} </p>
            <p> <span> {{ item.name }} </span> <img src="../assets/image/more.png" alt=""> </p>    
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'meList',
  props:{
      data:[Array]
  },
  methods:{
    
  }
}
</script>

<style scoped>
    .melist li{
        display: flex;
        background: #ffffff;
        padding: 0.15rem;
        margin-bottom: 0.08rem;
    }
    .melist li p{
        flex: 1;
    }
    .melist li p:nth-child(2){
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .melist li img{
        width: 0.25rem;
    }
    .melist li p{
        color: #666666;
    }
</style>
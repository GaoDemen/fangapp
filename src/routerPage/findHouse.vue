<template>
  <div class="findHouse">
    <div class="findHouse_type">
        <div> 区域地铁 </div>
        <div> 价格 </div>
        <div> 排列顺序 </div>
        <div> 更多顺序 </div>
    </div>
    <house-list></house-list>
  </div>
</template>

<script>
import houseList from "../components/houseList"
export default {
    name: 'findHouse',
    data(){
        return{
            value:''
        }
    },
    components:{
        houseList
    },
}
</script>

<style>
.findHouse_type{
    display: flex;
}
.findHouse_type div{
    flex: 1;
    font-size: 0.14rem;
    color: #999;
    text-align: center;
    padding: 0.15rem 0;
}
</style>

<template>
  <div id="model">
    <mt-popup
        v-model="data"
        popup-transition="popup-fade">
            <span @click="hideModel()"> 关闭 {{ data }} </span>
    </mt-popup>      
    
  </div>
</template>

<script>
import { Toast , Popup} from "mint-ui"
export default {
    name: 'model',
    data(){
        return{
            popupVisible:false,
        }
    },
    props:{
        data:Boolean,
    },
    methods:{
        hideModel(){
            this.data = false
        }
    }
}
</script>

<style>
    .v-modal{
        background: #ffffff;
        opacity: 1;
    }
</style>
<template>
    <div id="vueRadio">
        <div class="addressProvince" @click="showData()">
            <span class="title"> {{ data.name }} </span>
            <span class="choseModul"> {{ initData }} </span>
            <img class="city_more" src="../assets/image/more.png" alt="">
        </div>
  
        <mt-popup v-model="dataBoolean" position="bottom">
            <mt-picker :slots="data.data" valueKey="name" @change="onDataChange"></mt-picker>
        </mt-popup>

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "model",
    data() {
        return {
            dataBoolean: false,
            initData:'',
            // data:[{
            //     values: ['是', '否'],
            // }]
            
        };
    },
    props: {
        data:Object,
    },
    created() {
  
    },
    computed: {
     
    },
    methods: {
        showData(){
            this.dataBoolean = !this.dataBoolean
        },
        onDataChange(picker, values){
            if(values[0] !== undefined){
                this.initData = values[0].name
                // console.log(values)
                this.$emit("sendData",values[0].index)
            }
           
        }
    }  
};
</script>

<style>
.mint-popup-bottom {
    width: 100%;
}
.addressProvince,
.addressCity,
.addressCounty {
    background: #ffffff;
    display: flex;
    padding: 0 10px;
    min-height: 48px;
    align-items: center;
    position: relative;
    /* border-bottom: 1px solid #d9d9d9; */
}
#vueRadio .title {
    width: 105px;
}
.choseModul {
    flex: 1;
    color: #888888;
}
.mint-cell-wrapper {
    background-size: 0;
}
.city_more {
    width: 0.2rem;
}
</style>
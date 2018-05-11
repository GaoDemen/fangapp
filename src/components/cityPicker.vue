<template>
    <div id="cityPicker">
        <div class="addressProvince" @click="showProvince()">
            <span class="title"> 省 </span>
            <span class="choseModul"> {{ address.addressprovince }} </span>
            <img class="city_more" src="../assets/image/more.png" alt="">
        </div>
        <div class="addressCity" @click="showCity()">
            <span class="title"> 市 </span>
            <span class="choseModul"> {{ address.addresscity }} </span>
            <img class="city_more" src="../assets/image/more.png" alt="">
        </div>
        <div class="addressCounty" @click="showCounty()">
            <span class="title"> 区 </span>
            <span class="choseModul"> {{ address.addresscounty }} </span>
            <img class="city_more" src="../assets/image/more.png" alt="">
        </div>

        <mt-popup v-model="province" position="bottom">
            <mt-picker :slots="getProvince" valueKey="name" @change="onProvinceChange"></mt-picker>
        </mt-popup>
        <mt-popup v-model="city" position="bottom">
            <mt-picker :slots="getCity" valueKey="name" @change="onCityChange"></mt-picker>
        </mt-popup>
        <mt-popup v-model="county" position="bottom">
            <mt-picker :slots="getCounty" valueKey="name" @change="onCountyChange"></mt-picker>
        </mt-popup>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "model",
    data() {
        return {
            province: false,
            city: false,
            county: false,
            address: {
                addressprovince: "",
                addresscity: "",
                addresscounty: ""
            }
        };
    },
    props: {
        // address:{
        //    addressprovince:666,
        //    addresscity:'' ,
        //    addresscounty:''
        // }
    },
    created() {
        this.setProvince();
    },
    computed: {
        ...mapGetters(["getProvince", "getCity", "getCounty"])
    },
    methods: {
        ...mapActions(["setProvince", "setCity", "setCounty"]),
        showProvince() {
            this.province = !this.province;
        },
        showCity() {
            this.city = !this.city;
        },
        showCounty() {
            this.county = !this.county;
        },
        onProvinceChange(picker, values) {
            if (values[0] !== undefined) {
                this.address.addressprovince = values[0].name;
                this.setCity({
                    region_type: 1,
                    parent_id: values[0].regionId
                });
               
            }
        },
        onCityChange(picker, values) {
            if (values[0] !== undefined) {
                this.address.addresscity = values[0].name;
                this.setCounty({
                    region_type: 2,
                    parent_id: values[0].regionId
                });
               
            }
        },
        onCountyChange(picker, values) {
            if (values[0] !== undefined) {
                this.address.addresscounty = values[0].name;
                this.$emit("sendData",this.address);
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
#cityPicker .title {
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
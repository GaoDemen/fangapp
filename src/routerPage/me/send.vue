<template>
    <div id="send">
        <card-input v-bind:data="{'name':'基本信息'}"> </card-input>
        <mt-field label="标题" placeholder="请输入房源标题" v-model="from.title"></mt-field>
        <city-picker v-on:sendData="sethouseCity"></city-picker>
        <mt-field label="详细地址" placeholder="请输入详细地址" v-model="from.addressInfo"></mt-field>
        <mt-field label="小区楼盘" placeholder="请输入小区楼盘" v-model="from.addressHousingEstate"></mt-field>
        <mt-field label="所属片区" placeholder="请输入所属片区" v-model="from.addressArea"></mt-field>
        <!-- 品牌公寓 -->
        <vue-radio v-on:sendData="setisBrandApartment" v-bind:data="isBrandApartment"></vue-radio>
        <mt-field label="公寓名称" placeholder="请输入房源标题" v-model="from.brandApartmentName"></mt-field>
        <!-- 房屋类型 -->
        <vue-radio v-on:sendData="sethouseType" v-bind:data="houseType"></vue-radio>
        <card-input v-bind:data="{'name':'房屋户型'}"> </card-input>
        <mt-field label="卧室" placeholder="请输入卧室" v-model="from.houseTypeRoomCount"></mt-field>
        <mt-field label="客厅" placeholder="请输入客厅" v-model="from.houseTypeHallCount"></mt-field>
        <mt-field label="厨房" placeholder="请输入厨房" v-model="from.houseTypeKitchenCount"></mt-field>
        <mt-field label="卫生间" placeholder="请输入卫生间" v-model="from.houseTypeToiletCount"></mt-field>
        <mt-field label="阳台" placeholder="请输入阳台" v-model="from.houseTypeBalconyCount"></mt-field>

        <card-input v-bind:data="{'name':'房屋位置'}"> </card-input>
        <mt-field label="房屋楼层" placeholder="请输入房源标题" v-model="from.houseFloor"></mt-field>
        <mt-field label="房屋总楼层" placeholder="请输入房源标题" v-model="from.houseFloorMax"></mt-field>
        <mt-field label="房源面积" placeholder="请输入房源标题" v-model="from.houseArea"></mt-field>
        <mt-field label="房屋朝向" placeholder="请输入房源标题" v-model="from.houseTowards"></mt-field>
        <!-- <mt-field label="装修程度" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
        <vue-radio v-on:sendData="setdecorationType" v-bind:data="decorationType"></vue-radio>

        <mt-field label="附属设施" placeholder="请输入房源标题" v-model="from.ancillaryFacilities"></mt-field>
        <mt-field label="公寓公约" placeholder="请输入房源标题" v-model="from.apartmentConvention"></mt-field>
        <mt-field label="附近交通" placeholder="请输入房源标题" v-model="from.traffic"></mt-field>
        <mt-field label="详情描述" placeholder="请输入房源标题" v-model="from.houseContent"></mt-field>

        <card-input v-bind:data="{'name':'房屋租赁'}"> </card-input>
        <!-- <mt-field label="租赁方式" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
        <vue-radio v-on:sendData="setrentType" v-bind:data="rentType"></vue-radio>
        <mt-field label="租赁期限(起)" placeholder="请输入房源标题" type="date" v-model="from.rentPeroidMin"></mt-field>
        <mt-field label="租赁期限(止)" placeholder="请输入房源标题" type="date" v-model="from.rentPeroidMax"></mt-field>
        <mt-field label="房子租金" placeholder="请输入房源标题" v-model="from.houseRental"></mt-field>
        <mt-field label="房子押金" placeholder="请输入房源标题" v-model="from.houseDeposit"></mt-field>
        <!-- <mt-field label="提供发票" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
        <vue-radio v-on:sendData="setisInvoice" v-bind:data="isInvoice"></vue-radio>
        <!-- <mt-field label="付租方式" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
        <vue-radio v-on:sendData="setpayType" v-bind:data="payType"></vue-radio>
        <!-- <mt-field label="优惠类型" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
        <vue-radio v-on:sendData="setdiscountType" v-bind:data="discountType"></vue-radio>
        <mt-field label="优惠值" placeholder="请输入房源标题" v-model="from.discountValue"></mt-field>
        <mt-field label="包含费用" placeholder="请输入房源标题" v-model="from.title"></mt-field>
        <mt-field label="租人自付" placeholder="请输入房源标题" v-model="from.title"></mt-field>
        <mt-field label="租人代付" placeholder="请输入房源标题" v-model="from.title"></mt-field>
        <!-- <mt-field label="合同编辑" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
        <vue-radio v-bind:data="heton"></vue-radio>

        <card-input v-bind:data="{'name':'权属电话'}"> </card-input>
        <mt-field label="联系人" placeholder="请输入房源标题" v-model="from.contacts"></mt-field>
        <mt-field label="联系电话" placeholder="请输入房源标题" v-model="from.contactsPhone"></mt-field>
        <!-- <mt-field label="房东产权人关系" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
        <vue-radio v-on:sendData="setlandlordOwnershipRelation" v-bind:data="landlordOwnershipRelation"></vue-radio>
        <mt-field label="权属编号" placeholder="请输入房源标题" v-model="from.ownershipNumber"></mt-field>

        <card-input v-bind:data="{'name':'房子图片'}"> </card-input>
        <upload v-model="from.housePicture"></upload>

        <card-input v-bind:data="{'name':'权属证明'}"> </card-input>
        <upload v-model="from.ownershipCertificate"></upload>

        <card-input v-bind:data="{'name':'租凭合同'}"> </card-input>
        <upload v-model="from.leaseContract"></upload>

        <card-input v-bind:data="{'name':'代理委托书'}"> </card-input>
        <upload v-model="from.agentAuthorization"></upload>
        <div class="btn" @click="sendHouse()">
            <mt-button type="primary">发布房源</mt-button>
        </div>

    </div>
</template>

<script>
import cityPicker from "../../components/cityPicker";
import vueRadio from "../../components/vueRadio";
import cardInput from "../../components/cardInput";
import upload from "../../components/upload";
import { Toast } from 'mint-ui';
import qs from "qs";
export default {
    name: "send",
    data() {
        return {
            isBrandApartment: {
                name: "品牌公寓",
                data: [
                    {
                        values: [
                            { name: "是", index: true },
                            { name: "否", index: false }
                        ]
                    }
                ]
            },
            houseType: {
                name: "房屋类型",
                data: [
                    {
                        values: [
                            { name: "住宅", index: 1 },
                            { name: "sohu公寓", index: 2 },
                            { name: "外口公寓", index: 3 },
                            { name: "商办公寓", index: 4 }
                        ]
                    }
                ]
            },
            decorationType: {
                name: "装修程度",
                data: [
                    {
                        values: [
                            { name: "豪装", index: 1 },
                            { name: "精装", index: 2 },
                            { name: "简装", index: 3 }
                        ]
                    }
                ]
            },
            rentType: {
                name: "租赁方式",
                data: [
                    {
                        values: [
                            { name: "整租", index: 1 },
                            { name: "合租", index: 2 }
                        ]
                    }
                ]
            },
            isInvoice: {
                name: "提供发票",
                data: [
                    {
                        values: [
                            { name: "是", index: true },
                            { name: "否", index: false }
                        ]
                    }
                ]
            },
            payType: {
                name: "付租方式",
                data: [
                    {
                        values: [
                            { name: "月付", index: 1 },
                            { name: "季付", index: 2 },
                            { name: "半年付", index: 3 },
                            { name: "年付", index: 4 },
                            { name: "一次性付", index: 4 }
                        ]
                    }
                ]
            },
            discountType: {
                name: "优惠类型",
                data: [
                    {
                        values: [
                            { name: "无优惠", index: 1 },
                            { name: "租金打折", index: 2 },
                            { name: "减少金额", index: 3 }
                        ]
                    }
                ]
            },
            heton: {
                name: "合同编辑",
                data: [
                    {
                        values: [
                            { name: "租金", index: 1 },
                            { name: "其他金额", index: 2 },
                            { name: "不允许", index: 3 }
                        ]
                    }
                ]
            },
            landlordOwnershipRelation: {
                name: "房东产权人关系",
                data: [
                    {
                        values: [
                            { name: "同一人", index: 1 },
                            { name: "代理关系", index: 2 },
                            { name: "二房东", index: 3 }
                        ]
                    }
                ]
            },

            from: {
                landlordId: "" /** 房东ID **/,
                title: "" /** 标题 **/,
                houseNo: "" /** 房源编号，唯一 **/,
                addressProvince: "" /** 省 **/,
                addressProvinceid: "" /** 省 **/,
                provinceid: "" /** 省 **/,
                addressCity: "" /** 市 **/,
                addressCityid: "" /** 市 **/,
                cityid: "" /** 市 **/,
                addressCounty: "" /** 县 **/,
                addressCountyid: "" /** 县 **/,
                countyid: "" /** 县 **/,
                addressInfo: "" /** 房源地址 **/,
                addressHousingEstate: "" /** 小区楼盘 **/,
                addressArea: "" /** 所属片区 **/,
                addressLongitude: "" /** 经度 **/,
                addressLatitude: "" /** 纬度 **/,
                isBrandApartment: "" /** 是否是品牌公寓 **/,
                brandApartmentName: "" /** 品牌公寓名称 **/,
                houseType:
                    "" /** 房屋类型，1住宅，2sohu公寓， 3外口公寓，4商办公寓 **/,
                houseFloor: "" /** 房源楼层 **/,
                houseFloorMax: "" /** 房屋最高楼层 **/,
                houseArea: "" /** 房源面积(m*m) **/,
                houseTowards: "" /** 房屋朝向 **/,
                decorationType: "" /** 装修程度：1豪装  2精装  3简装 **/,
                ancillaryFacilities: "" /** 附属设施 **/,
                apartmentConvention: "" /** 公寓公约 **/,
                rentType: "" /** 租赁方式（1：整租，2：合租） **/,
                rentPeroidMin: "" /** 租赁期限-起租 **/,
                rentPeroidMax: "" /** 租赁期限-止租 **/,
                payType:
                    "" /** 付租方式，1月付  2季付  3半年付  4年付 5一次性付 **/,
                discountType: "" /** 优惠类型,0无优惠，1租金打折,2减少金额 **/,
                discountValue: "" /** 优惠值 **/,
                houseRental: "" /** 房子租金 **/,
                houseDeposit: "" /** 押金 **/,
                traffic: "" /** 附近交通 **/,
                houseContent: "" /** 详情描述 **/,
                isInvoice: "" /** 是否提供发票 **/,
                createTime: "" /** 创建时间 **/,
                contacts: "" /** 看房联系人 **/,
                contactsPhone: "" /** 看房联系电话 **/,
                houseTypeRoomCount: "" /** 户型-室 **/,
                houseTypeHallCount: "" /** 户型-厅 **/,
                houseTypeKitchenCount: "" /** 户型-厨房 **/,
                houseTypeToiletCount: "" /** 户型-卫 **/,
                houseTypeBalconyCount: "" /** 户型-阳台 **/,
                landlordOwnershipRelation:
                    "" /** 房东产权人关系（1：同一人，2：代理关系，3：二房东） **/,
                ownershipNumber: "" /** 权属编号 **/,
                payFees: [1, 2, 3] /** 其它费用**/,
                landlordPayFees: [1, 2, 3] /** 承租人自付费用**/,
                renterPayFees: [4, 5, 6] /** 出租人代付费用**/,
                houseStatus:
                    "" /** 房子租赁状态，0，发布中，1招租中，2已租赁，3已到期 **/,
                housePicture: [], // 房子图片
                ownershipCertificate: [], //权属证明(多个用“,”分割）
                leaseContract: [], //权属证明(多个用“,”分割）
                agentAuthorization: [] //代理人委托书(多个用“,”分割）
            }
        };
    },
    components: {
        cityPicker,
        vueRadio,
        cardInput,
        upload
    },
    methods: {
        setisBrandApartment(somedata) {
            this.from.isBrandApartment = somedata;
        },
        sethouseType(somedata) {
            this.from.houseType = somedata;
        },
        setdecorationType(somedata) {
            this.from.decorationType = somedata;
        },
        setrentType(somedata) {
            this.from.rentType = somedata;
        },
        setisInvoice(somedata) {
            this.from.isInvoice = somedata;
        },
        setpayType(somedata) {
            this.from.payType = somedata;
        },
        setdiscountType(somedata) {
            this.from.discountType = somedata;
        },
        setlandlordOwnershipRelation(somedata) {
            this.from.landlordOwnershipRelation = somedata;
        },
        sethouseCity(somedata) {
            this.from.addressProvince = somedata.addressprovince;
            this.from.addressCity = somedata.addresscity;
            this.from.addressCounty = somedata.addresscounty;
        },
        sendHouse() {
            const that = this;
            const type = this.from;
            this.$axios
                .post(
                    `${that.http}/index?opt=302`,
                    qs.stringify({
                        landlordId: this.$utils.getUrlKey(
                            "userId"
                        ) /** 房东ID **/,
                        title: type.title /** 标题 **/,
                        // "houseNo": 1, /** 房源编号，唯一 **/
                        addressProvince: type.addressProvince /** 省 **/,
                        addressCity: type.addressCity /** 市 **/,
                        addressCounty: type.addressCounty /** 县 **/,
                        addressInfo: type.addressInfo /** 房源地址 **/,
                        addressHousingEstate:
                            type.addressHousingEstate /** 小区楼盘 **/,
                        addressArea: type.addressArea /** 所属片区 **/,
                        addressLongitude: type.addressLongitude /** 经度 **/,
                        addressLatitude: type.addressLatitude /** 纬度 **/,
                        isBrandApartment:
                            type.isBrandApartment /** 是否是品牌公寓 **/,
                        brandApartmentName:
                            type.brandApartmentName /** 品牌公寓名称 **/,
                        houseType:
                            type.houseType /** 房屋类型，1住宅，2sohu公寓， 3外口公寓，4商办公寓 **/,
                        houseFloor: type.houseFloor /** 房源楼层 **/,
                        houseFloorMax: type.houseFloorMax /** 房屋最高楼层 **/,
                        houseArea: type.houseArea /** 房源面积(m*m) **/,
                        houseTowards: type.houseTowards /** 房屋朝向 **/,
                        decorationType:
                            type.decorationType /** 装修程度：1豪装  2精装  3简装 **/,
                        ancillaryFacilities:
                            type.ancillaryFacilities /** 附属设施 **/,
                        apartmentConvention:
                            type.apartmentConvention /** 公寓公约 **/,
                        rentType:
                            type.rentType /** 租赁方式（1：整租，2：合租） **/,
                        rentPeroidMin: type.rentPeroidMin /** 租赁期限-起租 **/,
                        rentPeroidMax: type.rentPeroidMax /** 租赁期限-止租 **/,
                        payType:
                            type.payType /** 付租方式，1月付  2季付  3半年付  4年付 5一次性付 **/,
                        discountType:
                            type.discountType /** 优惠类型,0无优惠，1租金打折,2减少金额 **/,
                        discountValue: type.discountValue /** 优惠值 **/,
                        houseRental: type.houseRental /** 房子租金 **/,
                        houseDeposit: type.houseDeposit /** 押金 **/,
                        traffic: type.traffic /** 附近交通 **/,
                        houseContent: type.houseContent /** 详情描述 **/,
                        isInvoice: type.isInvoice /** 是否提供发票 **/,
                        // "createTime": type.createTime, /** 创建时间 **/
                        contacts: type.contacts /** 看房联系人 **/,
                        contactsPhone: type.contactsPhone /** 看房联系电话 **/,
                        houseTypeRoomCount:
                            type.houseTypeRoomCount /** 户型-室 **/,
                        houseTypeHallCount:
                            type.houseTypeHallCount /** 户型-厅 **/,
                        houseTypeKitchenCount:
                            type.houseTypeKitchenCount /** 户型-厨房 **/,
                        houseTypeToiletCount:
                            type.houseTypeToiletCount /** 户型-卫 **/,
                        houseTypeBalconyCount:
                            type.houseTypeBalconyCount /** 户型-阳台 **/,
                        landlordOwnershipRelation:
                            type.landlordOwnershipRelation /** 房东产权人关系（1：同一人，2：代理关系，3：二房东） **/,
                        ownershipNumber: type.ownershipNumber /** 权属编号 **/,
                        payFees: type.payFees.toString() /** 其它费用**/,
                        landlordPayFees: type.landlordPayFees.toString() /** 承租人自付费用**/,
                        renterPayFees: type.renterPayFees.toString() /** 出租人代付费用**/,
                        // "houseStatus": type.houseStatus, /** 房子租赁状态，0，发布中，1招租中，2已租赁，3已到期 **/
                        housePicture: type.housePicture.toString(), // 房子图片
                        ownershipCertificate: type.ownershipCertificate.toString(), //权属证明(多个用“,”分割）
                        leaseContract: type.leaseContract.toString(), //权属证明(多个用“,”分割）
                        agentAuthorization: type.agentAuthorization.toString() //代理人委托书(多个用“,”分割）
                    })
                )
                .then(function(response) {
                    Toast({
                        message: response.data.msg,
                        iconClass: "icon icon-suc"
                    });
                })
                .catch(function(error) {
                    Toast({
                        message: response.data.msg,
                        iconClass: "icon icon-err"
                    });
                });
        }
    }
};
</script>

<style scoped>
#send .cardInput:nth-child(1) {
    margin-top: 0;
}
.btn {
    padding: 0 10px;
    background: #ffffff;
    margin-bottom: 10px;
    margin-top: 20px;
}
.mint-button--normal {
    width: 100%;
    margin-top: 10px;
}
</style>
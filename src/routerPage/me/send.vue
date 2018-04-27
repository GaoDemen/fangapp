<template>
  <div id="send">
    <card-input v-bind:data="{'name':'基本信息'}"> </card-input>
    <mt-field label="标题" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <city-picker></city-picker>
    <mt-field label="详细地址" placeholder="请输入详细地址" v-model="from.title"></mt-field>
    <mt-field label="小区楼盘" placeholder="请输入小区楼盘" v-model="from.title"></mt-field>
    <mt-field label="所属片区" placeholder="请输入所属片区" v-model="from.title"></mt-field>
    <!-- 品牌公寓 -->
    <vue-radio v-on:sendData="setisBrandApartment" v-bind:data="isBrandApartment"></vue-radio>
    <mt-field label="公寓名称" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <!-- 房屋类型 -->
    <vue-radio v-on:sendData="sethouseType" v-bind:data="houseType"></vue-radio>
    <card-input v-bind:data="{'name':'房屋户型'}"> </card-input>
    <mt-field label="卧室" placeholder="请输入卧室" v-model="from.title"></mt-field>
    <mt-field label="客厅" placeholder="请输入客厅" v-model="from.title"></mt-field>
    <mt-field label="厨房" placeholder="请输入厨房" v-model="from.title"></mt-field>
    <mt-field label="卫生间" placeholder="请输入卫生间" v-model="from.title"></mt-field>
    <mt-field label="阳台" placeholder="请输入阳台" v-model="from.title"></mt-field>

    <card-input v-bind:data="{'name':'房屋位置'}"> </card-input>
    <mt-field label="房屋楼层" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <mt-field label="房源面积" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <mt-field label="房屋朝向" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <!-- <mt-field label="装修程度" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
    <vue-radio v-on:sendData="setdecorationType" v-bind:data="decorationType"></vue-radio>

    <mt-field label="附属设施" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <mt-field label="公寓公约" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <mt-field label="附近交通" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <mt-field label="详情描述" placeholder="请输入房源标题" v-model="from.title"></mt-field>

    <card-input v-bind:data="{'name':'房屋租赁'}"> </card-input>
    <!-- <mt-field label="租赁方式" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
    <vue-radio v-on:sendData="setrentType" v-bind:data="rentType"></vue-radio>
    <mt-field label="租赁期限(起)" placeholder="请输入房源标题" type="date" v-model="from.title"></mt-field>
    <mt-field label="租赁期限(止)" placeholder="请输入房源标题" type="date" v-model="from.title"></mt-field>
    <mt-field label="房子租金" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <!-- <mt-field label="提供发票" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
    <vue-radio v-on:sendData="setisInvoice" v-bind:data="isInvoice"></vue-radio>
    <!-- <mt-field label="付租方式" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
    <vue-radio v-on:sendData="setpayType" v-bind:data="payType"></vue-radio>
    <!-- <mt-field label="优惠类型" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
    <vue-radio v-on:sendData="setdiscountType" v-bind:data="discountType"></vue-radio>
    <mt-field label="优惠值" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <mt-field label="包含费用" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <mt-field label="租人自付" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <mt-field label="租人代付" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <!-- <mt-field label="合同编辑" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
    <vue-radio v-bind:data="heton"></vue-radio>

    <card-input v-bind:data="{'name':'权属电话'}"> </card-input>
    <mt-field label="联系人" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <mt-field label="联系电话" placeholder="请输入房源标题" v-model="from.title"></mt-field>
    <!-- <mt-field label="房东产权人关系" placeholder="请输入房源标题" v-model="from.title"></mt-field> -->
    <vue-radio v-on:sendData="setlandlordOwnershipRelation" v-bind:data="landlordOwnershipRelation"></vue-radio>
    <mt-field label="权属编号" placeholder="请输入房源标题" v-model="from.title"></mt-field>



    <card-input v-bind:data="{'name':'房子图片'}"> </card-input>
    <upload></upload>

    <card-input v-bind:data="{'name':'权属证明'}"> </card-input>
    <upload></upload>

    <card-input v-bind:data="{'name':'租凭合同'}"> </card-input>
    <upload></upload>

    <card-input v-bind:data="{'name':'代理委托书'}"> </card-input>
    <upload></upload>

  </div>
</template>

<script>
import cityPicker from "../../components/cityPicker";
import vueRadio from "../../components/vueRadio";
import cardInput from "../../components/cardInput";
import upload from "../../components/upload";
export default {
    name: "send",
    data() {
        return {
            isBrandApartment: {
                name: "品牌公寓",
                data: [
                    {
                        values: ["是", "否"]
                    }
                ]
            },
            houseType: {
                name: "房屋类型",
                data: [
                    {
                        values: ["住宅", "sohu公寓", "外口公寓", "商办公寓"]
                    }
                ]
            },
            decorationType: {
                name: "装修程度",
                data: [
                    {
                        values: ["豪装", "精装", "简装"]
                    }
                ]
            },
            rentType: {
                name: "租赁方式",
                data: [
                    {
                        values: ["整租", "合租"]
                    }
                ]
            },
            isInvoice: {
                name: "提供发票",
                data: [
                    {
                        values: ["是", "否"]
                    }
                ]
            },
            payType: {
                name: "付租方式",
                data: [
                    {
                        values: ["月付", "季付", "半年付", "年付", "一次性付"]
                    }
                ]
            },
            discountType: {
                name: "优惠类型",
                data: [
                    {
                        values: ["无优惠", "租金打折", "减少金额"]
                    }
                ]
            },
            heton: {
                name: "合同编辑",
                data: [
                    {
                        values: ["租金", "其他金额", "不允许"]
                    }
                ]
            },
            landlordOwnershipRelation: {
                name: "房东产权人关系",
                data: [
                    {
                        values: ["同一人", "代理关系", "二房东"]
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
                payFees: [] /** 其它费用**/,
                landlordPayFees: [] /** 承租人自付费用**/,
                renterPayFees: [] /** 出租人代付费用**/,
                houseStatus:
                    "" /** 房子租赁状态，0，发布中，1招租中，2已租赁，3已到期 **/,
                housePicture: "", // 房子图片
                ownershipCertificate: "", //权属证明(多个用“,”分割）
                leaseContract: "", //权属证明(多个用“,”分割）
                agentAuthorization: "" //代理人委托书(多个用“,”分割）
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
        }
    }
};
</script>

<style scoped>
#send .cardInput:nth-child(1) {
    margin-top: 0;
}
</style>
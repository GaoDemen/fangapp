<template>
    <div class="amap-page-container" >
      <el-amap :zoom="zoom" :center="[data.addressLongitude, data.addressLatitude]" class="amap-demo">
        <el-amap-marker vid="component-marker" :position="[data.addressLongitude, data.addressLatitude]"  ></el-amap-marker>
      </el-amap>
    </div>
  </template>

  <style >


  </style>

  <script>

    export default {
      name: 'amap-page',

      data() {
        return {
          zoom: 14
        };
      },
      props:{
        data:[Object]
      },
      methods: {

      }
    };
</script>

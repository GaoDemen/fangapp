<template>
    <div class="upload">

        <ul class="imgList">
            <li v-for="url in imgFiles">
                <img v-bind:src="`${http}${url}`" alt="">
            </li>
            <li class="uploadBtn">
                <img src="../assets/image/icon-add.png" alt="">
                <input class="file" type="file" accept="image/jpeg,image/png" v-on:change="upload($event)"> 
            </li>
        </ul>
    </div>
</template>

<script>
import lrz from "lrz";
import { Indicator,Toast } from 'mint-ui';
export default {
    name: "upload",
    props: {
        value: {
            type: Array
        }
    },
    watch: {
        imgFiles(newValue) {
            this.$emit("input", newValue);
        }
    },
    data() {
        return {
            imgFiles: []
        };
    },

    methods: {
        upload(event) {
            const that = this;
            const file = event.target.files[0];
            const fd = new FormData();
            console.log(file);
            console.log("压缩前：" + file.size);
            lrz(file, { width: 300 }).then(function(rest) {
                rest.file["name"] = "ic_ga-brnn.png";

                console.log(rest);
                console.log("压缩前后：" + rest.file.size);

                if (rest.file.size > 1024000) {
                    Toast({
                        message: "图片太大（温馨提示：不能超过１Ｍ哟）",
                        iconClass: "icon icon-err"
                    });
                } else {
                    if (rest.file) {
                      
                        Indicator.open("正在上传...");
                      
                        fd.append("imgFile", rest.file, file.name);
                       
                        that.$axios
                            .post(`${that.http}/global/imgupload`, fd, {
                                method: "post",
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                }
                            })
                            .then(res => {
                                Indicator.close();
                                if (res.data.code === 0) {
                                    that.imgFiles.push(res.data.url);

                                    // that.$Message.success("");
                                    Toast({
                                        message: "上传成功",
                                        iconClass: "icon icon-suc"
                                    });
                                } else {
                                    Toast({
                                        message: "上传失败",
                                        iconClass: "icon icon-err"
                                    });
                                }
                            })
                            .catch(error => {
                                Indicator.close();
                                Toast({
                                    message: "上传失败",
                                    iconClass: "icon icon-err"
                                });
                            });
                    }
                }
            });
        }
    }
};
</script>

<style scoped>
.uploadBtn {
    position: relative;
}
.upload{
    background: #ffffff;
}
.file {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}
.imgList {
    width: 100%;
    padding: 0 10px;
    overflow: hidden;
}
.imgList li {
    width: 30%;
    padding: 0.1rem;
    float: left;
    height: 1rem;
    box-sizing: border-box;
    margin: 0.1rem 0;
}
.imgList li img {
    width: 100%;
    height: 1rem;
}
.imgList .uploadBtn img{
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

</style>

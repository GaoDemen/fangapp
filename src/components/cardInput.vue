<template>
    <div class="cardInput">
        <p class="title"> {{ data.name }} </p>
    </div>
</template>

<script>
export default {
    name: "model",
    data() {
        return {};
    },
    props: {
        data: Object
    },
    methods: {}
};
</script>

<style scoped>
.cardInput{
    background: #ffffff;
    margin-top: 0.2rem;
}
.title {
    text-align: center;
    font-size: 0.16rem;
    line-height: 48px;
}
</style>
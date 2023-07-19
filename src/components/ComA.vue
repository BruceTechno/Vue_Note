<script>
export default{
    methods:{
        switchPage() {
            //fetch .....

            ///跳轉頁面
            this.$router.push("/watch")
        }
    }
}
</script>

<template>
    <div>
        <h2>元件AAA</h2>
        <button type="button" @click="switchPage">跳轉</button>
    </div>
</template>

<style></style>
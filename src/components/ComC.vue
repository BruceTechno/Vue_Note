<script>
import ComD from "../components/ComD.vue"
export default{
    components:{
        ComD,
    }
}
</script>

<template>
    <div class="com-c">
        <h2>元件C</h2>
        <ComD />
    </div>
</template>

<style>
.com-c{
    width: 50vw;
    height: 50vh;
    border: 1px solid black;
    text-align: center;
}
</style>
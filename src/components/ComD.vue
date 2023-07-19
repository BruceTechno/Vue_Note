<script>
export default{
    inject:["injectText"]
}
</script>

<template>
    <div class="com-d">
        <h2>元件D</h2>
        <p>{{ injectText }}</p>
    </div>
</template>

<style scoped>
.com-d{
    width: 60%;
    height: 60%;
    border: 1px solid black;
    text-align: center;
    margin: 0 auto;
}

</style>
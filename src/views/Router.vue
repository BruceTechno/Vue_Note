<script>
import { RouterLink,RouterView } from 'vue-router';

</script>

<template>
    <div>
        <h2>vue-Router</h2>
        <p>現在路由: {{ this.$route.path }}</p>
        <RouterLink to="/router/com-a">元件A</RouterLink>
        <RouterLink to="/router/com-b">元件B</RouterLink>
        
        <div class="wrap">
            <RouterView />
        </div>
    </div>
</template>

<style>
.wrap{
    border: 1px solid black;
}
</style>
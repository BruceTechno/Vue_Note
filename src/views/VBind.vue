<script>
export default{
    data() {
        return{
            imgUrl:"../../未命名123123.png",
            redBoo:false,
            lgBoo:false,
            classArr:['link']
        }
    }
}
</script>

<template>
    
    <h2>v-bind</h2>        
    <img v-bind:src="imgUrl" alt="img">
     <!-- V-model => 標籤 值 -->
    <!-- V-bind 綁HTML標籤 [屬性] -->
    <!-- 角括號裡面的叫做標籤<input id =""> -->
    <!-- 屬性 id class name value -->

    <!-- v-bind class裡面放{} -->
    <h2>v-bind : class{}</h2>
    <div>
        <input type="checkbox" id="red" value="true" v-model="redBoo">
        <label for="red">紅色</label>
    </div>
    <div>
        <input  type="checkbox" id="lg" value="true" v-model="lgBoo">
        <label for="lg">放大</label>
    </div>
    <!--  大括號裡面放class:判斷式    -->
    <p v-bind:class="{red:redBoo,lg:lgBoo}">湖人總冠軍</p>


    <!-- v-bind class裡面放[] -->
    <h2>v-bind : class[]</h2>
    <div>
        <input type="checkbox" id="red" value="red" v-model="classArr">
        <label for="red">紅色</label>
    </div>
    <div>
        <input  type="checkbox" id="lg" value="lg" v-model="classArr">
        <label for="lg">放大</label>
    </div>
    <p v-bind:class="classArr">湖人總冠軍</p>


</template>

<style scoped>
.red{
    color: rgb(199, 96, 199);
}

.lg{
    font-size: 6rem;
}
.link{
    cursor: pointer;
}
</style>
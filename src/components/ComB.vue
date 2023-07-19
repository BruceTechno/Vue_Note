<script>
export default {
    data() {
        return{
            text: null
        }
    },
    methods :{
        push(){
            console.log(this.text);

            //跳轉帶資料
            this.$router.push({
                name:"routerProps",
                params:{
                    propText:this.text
                }
            })

        }
    }
}
</script>

<template>
    <div>
        <h2>元件BBB</h2>
        <input type="text" v-model="text">
        <button type="button" @click="push">傳送</button>
    </div>
</template>

<style></style>
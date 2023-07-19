<script>
export default{
    data() {
        return {
            text:null,
        }
    },
    methods:{
        call(par) {
            console.log(par);
        },
        callChange() {
            console.log("text:"+this.text);
        }
    },
    // 測試LocalStorage
    mounted(){
        const account = localStorage.getItem("account")
        const pwd = localStorage.getItem("pwd");
        console.log(account,pwd)
    }
}
</script>

<template>
   
    <h2>v-on</h2>    
            <!-- -v-on:click=  -->
    <button type="button" v-on:click="call('歐拉歐拉歐拉歐拉')">click</button>

    <input type="text" v-model="text" @change="callChange">
</template>

<style>
</style>
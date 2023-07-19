<script>
export default{
    components:{
        
    },
    // 要接收資料的接口
    props:["propText","propTitle"],
    data() {
        return {
            inputText:""
        }
    },
    methods:{
        push() {
            console.log(this.inputText);
            //會有兩個參數 1.執行的方法 2.方法帶入的參數
            this.$emit("callOutside",this.inputText)
        }
    }
}

</script>

<template>
   <div class="child">
    <h2>這是子層{{ propTitle }}</h2>       
    <p>{{ propText }}</p> 
    <input type="text" v-model="inputText">
    <button type="button" @click="push">click</button>
</div>
</template>

<style>
.child{
    border: 1px solid black;
    padding: 2rem;
    text-align: center;
}

</style>
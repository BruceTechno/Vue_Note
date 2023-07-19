<script>
export default{
    data() {
        return{
            point:0,
            money:0,
        }
    },
    methods:{
        clickCookie(){
            this.point +=1;
        }
    },
    // 只要監控的變數有變動，方法就會跟著執行一次
    watch:{
        point(){
            this.money = this.point * 10;
        }
    },
    // 會產生一個專門拿來渲染的變數 ， 純粹顯示用
    computed:{
        // 一個 選示用的變數
        usd(){
            //return 是他的值
            return (this.money / 30.7).toFixed(2) ;
        }
    }
}
</script>

<template>
    <div>
        <h2>Watch / Computed</h2>
        <p>分數:{{point}}</p>
        <p>金錢:NT${{money}}</p>
        <p>美金:USD{{usd}}</p>
        <div class="coockie" @click="clickCookie">
            <div class="choco choco1"></div>
            <div class="choco choco2"></div>
            <div class="choco choco3"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.coockie{
    width: 100px;
    height: 100px;
    background-color: #9f8c6f;
    border-radius: 50px;
    position: relative;
    cursor: pointer;
    transition:0.3s;

    &:hover{
        scale:1.05;
    }
    &:active{
        scale:0.95;
    }
    .choco{
        width: 15px;
        height: 15px;
        background-color: #3c2e2a;
        border-radius: 7px;
        position: absolute;
    }
    .choco1{
        top:18px;
        left: 35px;
    }
    .choco2{
        top:60px;
        left: 60px;

    }
    .choco3{
        top:70px;
        left: 16px;

    }
}
</style>
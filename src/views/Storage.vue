<script>
export default {
data() {
    return{
        account:null,
        pwd:null
    }
},
methods:{
    login(){
        console.log(this.account);
        console.log(this.pwd);
        localStorage.setItem("account",this.account)
        localStorage.setItem("pwd",this.pwd)

        Sess
        localStorage.setItem("account",this.account)
        localStorage.setItem("pwd",this.pwd)
    }
}

}
</script>

<template>
    
    <h2>Local Storage / Session Storage </h2>
    <p>SessionStorage 瀏覽器關掉之後 資料就會消失</p>
    <p>LocalStorage 瀏覽器關掉之後 資料還會存在</p>
    <input type="text" v-model="account">
    <br>
    <input type="password" v-model="pwd">
    <br>
    <button type="button" @click="login" >Login</button>
</template>

<style></style>
<script>
import {RouterLink} from "vue-router";
import {mapState,mapActions} from "pinia";
import indexStore from "../stores/indexStore";
export default{
    methods:{
 // mapActions => 取的是pinia裡面actions的資料       
 // ...為淺層拷貝 //1.自己的資料 2.要取用的方法
        ...mapActions(indexStore,["updateLocation"])
    },
// mapState => 取的是pinia裡面 state getter的資料           
    computed:{
        ...mapState(indexStore,["location","getLocation"])
    }
}
    
    // this.$router.push("/")
</script>

<template>
    <header>
        <RouterLink class="link" :class="{local:location === 1}" to="/" >v-model</RouterLink>
        <RouterLink class="link" :class="{local:location === 2}" to="/v-text" >v-text</RouterLink>
        <RouterLink class="link" to="/v-for" >v-for</RouterLink>
        <RouterLink class="link" to="/v-if-v-show" >v-if-v-show</RouterLink>
        <RouterLink class="link" to="/v-bind" >v-bind</RouterLink>
        <RouterLink class="link" to="/v-on" >v-on</RouterLink>
        <RouterLink class="link" to="/props" >props</RouterLink>
        <RouterLink class="link" to="/emit" >emit</RouterLink>
        <RouterLink class="link" to="/watch" >watch</RouterLink>
        <RouterLink class="link" to="/router" >router</RouterLink>
        <RouterLink class="link" to="/routerProps" >router-props</RouterLink>
        <br>
        <RouterLink class="link" to="/provideAndInject" >provide and inject</RouterLink>
        <RouterLink class="link" to="/slot" >slot</RouterLink>
        <RouterLink class="link" to="/file-reader" >File Reader</RouterLink>
        <RouterLink class="link" to="/storage" >Storage</RouterLink>
        
        <p>{{ location }}</p>
        <p>{{ getLocation }}</p>
    </header>
</template>

<style lang="scss" scoped>
    header{
        width: 100vw;
        padding: 1rem 4rem;
        background-color: #41b782;
        font-size: 2rem
       
    }
    .link{
            text-decoration: none;
            color: white;
            cursor: pointer;
            transition: 0.3s;
            margin: 0 1rem;

            &:hover{
                color: aquamarine;
            }
        }
    .local{
        color: #41b782;
        background-color: white;
        border-radius: 6px;
    }
</style>
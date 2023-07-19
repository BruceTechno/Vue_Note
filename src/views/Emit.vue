<script>
import ChildView from "../components/Child.vue"
export default {
    components: {
        ChildView
    },
    data() {
        return{
            insideText:"",
            fetchData:""
        }
    },
    methods:{
        getInfo(params) {
            console.log("外層"+params);
            this.insideText = params;
        }
    },

    beforeCreate() {
        
    },

    created(){

    },
    beforeMount() {

    },
    mounted(){
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => {
            console.dir(data.results)
            this.fetchData = data.results[0].name;
        })
    },
    beforeUnmount() {

    },
    unmounted() {

    }
}
</script>

<template>
    <div>
        <h2>Emit: 元件溝通 子傳父</h2>
        <h3>子元件傳出來的{{insideText}}</h3>
        <h3>子元件傳出來的{{fetchData}}</h3>
        <ChildView 
            :propTitle="'Emit練習'"
            :propText="'this.$emit()'"
            @callOutside="getInfo"
        />
    </div>
</template>

<style>
</style>
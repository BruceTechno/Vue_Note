<script>
import ComC from "../components/ComC.vue"

export default{
    components:{
        ComC,
        
    },
    data(){
        return{
            text:"一路向下"
        }
    },
    provide(){
        return{
            injectText:this.text,
        }
    }
}


</script>

<template>
    <div>
        <h2>Provide and Inject</h2>
        <ComC />
    </div>
</template>

<style></style>
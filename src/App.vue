<script >
import {RouterView} from "vue-router"
import HeaderView from "./components/Header.vue"
import { onUpdated } from "vue"
export default{
  components:{
    HeaderView
  },
  data() {
    return{
      isShow:true
    }
  },
  mounted() {
  console.log(this.$route.path)
  },
  updated() {
    
  },
}
</script>


<template>
  <HeaderView v-if="isShow"/>
  <div class="container">
    <RouterView />
  </div>
  
</template>

<style scoped>
  .container{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

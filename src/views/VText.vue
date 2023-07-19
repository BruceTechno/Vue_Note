<script>
import { mapActions } from "pinia"
import indexStore from "../stores/indexStore"
export default {
  data() {
    return {
      text: "v-text",
    
    }
  },
  methods:{
    ...mapActions(indexStore,["updateLocation"])
  },
  mounted() {
    this.updateLocation(2);
  }
}
</script>

<template>
    <div>
        <h1>v-text</h1>
        <!-- 一樣的 -->
        <p>{{ text }}</p>
        <p v-text="text"></p>
    </div>        
</template>

<style>

</style>
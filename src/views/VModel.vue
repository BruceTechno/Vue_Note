<script>
import { mapActions } from "pinia"
import indexStore from "../stores/indexStore"

export default {
  data() {
    return {
      text: null,
      meals: [],
      drink: ""
    }
  },
  methods:{
    ...mapActions(indexStore,["updateLocation"])
  },
  mounted() {
    this.updateLocation(1);
  }
}
</script>

<template>
  <h2>Input:text</h2>
  <p>{{ text }}</p>
  <!-- 修飾符 lazy-->
  <small>v-model.lazy的效果</small>
  <input type="text" v-model.lazy="text">
  <br>

  <!--修飾符 trim 做表單做email-->
  <small>v-model.trim的效果</small>
  <input type="text" v-model.trim.lazy="text">
  <br>

  <!-- 修飾符 number-->
  <small>v-model.number的效果 抓出來的值直接是數字</small>
  <input type="number" v-model.number="text">

  <hr>

  <!-- Check Box -->
  <h2>input : checkbox</h2>
  <p>{{ meals }}</p>

  <div>
    <input type="checkbox" id="breakfast" value="早餐" v-model="meals">
    <label for="breakfast">早餐</label>
  </div>

  <div>
    <input type="checkbox" id="lunch" value="午餐" v-model="meals">
    <label for="lunch">午餐</label>
  </div>

  <div>
    <input type="checkbox" id="dinner" value="晚餐" v-model="meals">
    <label for="dinner">晚餐</label>
  </div>

  <!-- RADIO -->
  <h2>Input : radio</h2>
  <p>{{ drink }}</p>
<div>
  <input type="radio" name="drink" id="milktea" value="奶茶" v-model="drink">
    <label for="milktea">奶茶</label>

    <input type="radio" name="drink" id="greentea" value="綠茶" v-model="drink">
    <label for="greentea">綠茶</label>

    <input type="radio" name="drink" id="oolong" value="烏龍茶" v-model="drink">
    <label for="oolong">烏龍茶</label>

  </div>
  
</template>

<style></style>
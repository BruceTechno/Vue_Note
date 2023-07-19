<script>
export default {
    data() {
        return {
            car: false,
            house: false,
            car2: false,
            house2: false,
            car3: "沒車",
            house3:"沒房",
            car4:false,
            house4:false
        }
    }
}

</script>

<template>
    <h2>v-if</h2>
    <p>小明:</p>
    <div>
        <input type="checkbox" id="car" value="true" v-model="car">
        <label for="有車">有車</label>
    </div>

    <div>
        <input type="checkbox" id="house" value="true" v-model="house">
        <label for="有房">有房</label>
    </div>

    <div>
        <h2 v-if="car">小明有車</h2>
        <h2 v-if="house">小明有房</h2>
    </div>
    <br>

    <!-- v-if / v-else -->
    <p>小明:</p>
    <div>
        <input type="checkbox" id="car" value="true" v-model="car2">
        <label for="有車">有車</label>
    </div>

    <div>
        <input type="checkbox" id="house" value="true" v-model="house2">
        <label for="有房">有房</label>
    </div>
    <div>
        <h2 v-if="car2">小明有車</h2>
        <h2 v-else>小明沒車</h2>

        <h2 v-if="house2">小明有房</h2>
        <h2 v-else>小明沒房</h2>

    </div>
    <br>

    <!-- v-if / v-else-if / v-else -->
    <p>小明:</p>
    <div>
      <select name="car3" id="car3" v-model="car3">
        <option value="沒車">沒車</option>
        <option value="TOYOTA">TOYOTA</option>
        <option value="BENZ">BENZ</option>
        <option value="BMW">BMW</option>
      </select>
    </div>

    <div>
        <select name="house3" id="house3" v-model="house3">
        <option value="沒房">沒房</option>
        <option value="好窄">好窄</option>
        <option value="豪宅">豪宅</option>
      </select>
    </div>
    <div>
        <h2 v-if="car3 == '沒車'">小明沒車</h2>
        <h2 v-else-if="car3 == 'TOYOTA'">小明開TOYOTA</h2>
        <h2 v-else-if="car3 == 'BENZ'">小明開BENZ</h2>
        
        <h2 v-if="house3 == '沒房'">小明沒房</h2>
        <h2 v-else-if="house3 == '好窄'">小明住好窄</h2>

        <h2 v-else-if="house3 == '豪宅'">小明住豪宅</h2>

    </div>
    <br>

    <!-- v-show -->
 <h2>v-show</h2>
    <p>小明:</p>
    <div>
        <input type="checkbox" id="car4" value="true" v-model="car4">
        <label for="car4">有車</label>
    </div>

    <div>
        <input type="checkbox" id="house4" value="true" v-model="house4">
        <label for="house4">有房</label>
    </div>

    <div>
        <h2 v-show="car4">小明有車</h2>
        <h2 v-show="house4">小明有房</h2>
    </div>
    <br>

</template>

<style></style>

<script>
import ChildView from "../components/Child.vue"
export default {
    components: {
        ChildView
    },
    data() {
        return{
            text:"外層的資料",
            text2:"外層的資料",
            text3:"外層的資料"
        }
    }
}
</script>

<template>
    <div>
        <h2>Props:元件溝通_父傳子</h2>
        <ChildView :propText="text" :propTitle="'第一個'" />
        <ChildView :propText="text2" :propTitle="'第二個'"  />
        <ChildView :propText="text3" :propTitle="'第三個'" />

        
    </div>
</template>

<style></style>
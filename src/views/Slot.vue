<script>
import Modal from "../components/Modal.vue"
export default{
    components:{
        Modal,
    },
    data() {
        return{
            isShow:false,
            text:null,
        }
    },
    methods:{
        switchModal() {
            this.isShow = !this.isShow
        }
    }
}
</script>

<template>
    <div>
        <h2>Slot</h2>
        <input type="text" v-model="text">
        <button type="button" @click="switchModal">Click</button>
        <Modal v-if="isShow" @clickToClose="switchModal">
        <h2>{{ text }}</h2>
        </Modal>
    </div>
</template>

<style lang="scss">


</style>
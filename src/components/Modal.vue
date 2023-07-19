<!-- //彈跳視窗 -->

<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        close(){
            this.$emit("clickToClose")
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="modal">
            <i class="fa-solid fa-xmark" @click="close"></i>
            <h2>Modal</h2>
            <!-- 在Modal上面開一個洞 -->
            <slot></slot>
        </div>

        <div class="bg">

        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal{
        width: 50vw;
        height: 50vh;
        background-color: white;
        z-index: 1;
        border-radius: 0.5rem;
        position: relative;
        display: flex;
        flex-direction: column;
         align-items: center;

        i{
            position: absolute;
            top:10px;
            right: 10px;
            cursor: pointer;
        }
    }    
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        background-color: black;
        opacity: 0.8;
        z-index: -1;
    }

}
</style>
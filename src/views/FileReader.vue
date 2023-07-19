<script>
export default {
    data() {
        return {
            img: null
        }
    },
    methods: {
        getImg(e) {
            console.log(e);
            const img = e.target.files[0]

            const reader = new FileReader();
            reader.readAsDataURL(img)
            reader.onload = (e) => {
                this.img = e.target.result;
                console.log(this.img)
            }

        }
    }
}
</script>

<template>
    
    <h2>File Reader</h2>
    <input type="file" @change="getImg">
    <img :src="img" alt="img">
   

</template>

<style></style>
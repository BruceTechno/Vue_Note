<script>
export default{
    data() {
        return {
            paoMian:["康師父","雙響砲","維力","來一客","花雕雞"],
            paoMian2:[
                {
                    name:"康師父",
                    price: 300,
                    na:1459
                },
                {
                    name:"雙響砲",
                    price:10,
                    na:1650
                },
                {
                    name:"維力",
                    price:25,
                    na:1350
                },
                {
                    name:"來一客",
                    price:30,
                    na:1150
                },
                {
                    name:"花雕雞",
                    price:59,
                    na:3000
                },
            ]
        }
    }
}
</script>

<template>
    <h2>v-for</h2>

<ul>
    <li v-for="item in paoMian" :key="item">{{ item }}</li>
</ul>
<div class="divbox1">
<div v-for="(item,index) in paoMian2" class="divbox" :key="index">
    <p>名次: {{index+1}}</p>
    <p>泡麵名稱: {{ item.name }}</p>
    <p>價錢: {{item.price}}人民幣</p>
    <p>鈉含量: {{ item.na }}mg</p>
</div>
</div>
</template>

<style>
.divbox{
    display: flex;
}
.divbox1{
    justify-content: start;

}

</style>
<template>

    <div class="nav-bar van-hairline--top" >
        <ul class="nav-list">
           <router-link class="nav-list-item active " to="home">
            <i></i>
            <span>首页</span>
           </router-link>
           <router-link class="nav-list-item active " to="category">
            <i></i>
            <span>分类</span>
           </router-link>
           <router-link class="nav-list-item active " to="cart">
            <i></i>
            <span>购物车</span>
           </router-link>
           <router-link class="nav-list-item active " to="user">
            <i></i>
            <span>我的</span>
           </router-link>
           
        </ul>
    </div>
</template>



<script setup>
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import {useCartStore} from '@/stores/cart'
    import {getLocal} from '@/common/utils'
    const route = useRouter();
    const cart = useCartStore();
    onMounted(()=>{
        const token = getLocal('token')
        const path = route.path
        if(token&&!['/home','category'].includes(path)){
            cart.updateCart()
        }
    })
</script>

<style lang="less" scoped>

</style>
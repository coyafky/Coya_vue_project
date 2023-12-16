


<template>
  <div>
    <div id="app">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import { RouterView } from 'vue-router';
    const router= useRouter();

    const state = reactive({
      transitionName: 'slide-right',
    });

    router.beforeEach((to,from) => {
      if(to.meta.index>from.meta.index){
        state.transitionName = 'slide-left'
      }else if(to.meta.index<from.meta.index){
        state.transitionName = 'slide-right'
      }
      else{
        state.transitionName = '' // slide-none 同级无过渡效果
      }
    })

</script>
    
<style lang="scss" scoped>

  html,body{
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;

  }
  #app{
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
  }

  .router-view{
    width: 100%;
    height: auto;
    position: absolute;
    top:0;
    bottom: 0;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
    

  }
  .slide-right-enter-active{
    opacity: 0;
    transform: translate3d(-100%,0,0);
  }
  .slide-right-leave-active{
    opacity: 0;
    transform: translate3d(100%,0,0);
  }

  .slde-left-enter{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slde-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .van-badge-fixed{
    z-index: 1000
  }

</style>
<template>
    <div ref="wrapper" class="scroll-wrapper">
        <slot></slot>
    </div>
</template>


<script>
import BScroll from 'better-scroll' // 导入这个组件
export default {
    // 滚动的时候会触发scrool事件，会截留
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },

        scrollX: {
            type: Boolean,
            default: false
        },

        scrollData: {
            type: Array,
            default: null
        },
        // 是否派发滚动到底部的事件，用于上拉加载
        pullup: {
            type: Boolean,
            default: false
        },
        pulldown: {
            type: Boolean,
            default: false
        },
        beforeScroll: {
            type: Boolean,
            default: false
        },
        refreshDelay: {
            type: Number,
            default: 20
        },
        mounted() {
            // 在 DOM 渲染完毕后初始化 better-scroll
            this.$nextTick(() => {
                this.initScroll()
            })
        },

        updated() {
            this.bs.refresh()
        },
        methods: {
            initScroll() {
                // better-scroll 初始化
                this.bs = new BScroll(this.$refs.wrapper, {
                    probeType: 3,
                    click: true
                })
                this.bs.on('scroll', () => {
                    console.log('scrolling-')
                })
                this.bs.on('scrollEnd', () => {
                    console.log('scrollingEnd')
                })
            }
        }
    
    }
}
</script>

<style lang="less" scoped>
  .scroll-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    touch-action: pan-y;
  }
</style>









</>
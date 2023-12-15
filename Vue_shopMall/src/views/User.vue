<template>
    <div class="user-box">
       <van-skeleton title:avatar="true" :row="3" :loading="state.loading">
        <div class="user-info">
            <div class="info">
                <!-- 图片 -->
                <img src="" alt="">
                <div class="user-desc">
                    <span>
                        昵称{{ state.user.nickName }}

                    </span>
                    <span>
                        登录名 {{ state.user.loginName }}
                    </span>

                    <span class ="name">
                        个性签名{{ state.user.introduceSign }}
                    </span>
                </div>
            </div>
        </div>
    </van-skeleton>

    <ul class="user-list">
        <li class="van-hair-bottom" @click="goTo('/order')">
            <span>
                我的订单
            </span>
            <van-icon name="arrow" />

        </li>
        <li class="van-hair-bottom" @click="goTo('/order')">
            <span>
                账号管理
            </span>
            <van-icon name="arrow" />

        </li>
        <li class="van-hair-bottom" @click="goTo('/order')">
            <span>
                地址管理
            </span>
            <van-icon name="arrow" />

        </li>
        <li @click ="goTo('/about')">
            <span>
                关于我们
            </span>
        </li>
    </ul>

    <nav-bar>

    </nav-bar>
    </div>


</template>

<script setup>
    

</script>
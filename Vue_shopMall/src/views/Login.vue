


<template>
    <div class="login">
        <s-header :name="type == 'login' ? '登录' : '注册'" :back="'/home'"></s-header>
        <img class="logo" src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="">
        <div v-if="state.type == 'login'" class="login-body login">
            <van-form @submit="onSubmit">
                <van-field v-model="state.username" name="username" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />


                <van-field v-model="state.password" type="password" name="password1" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]">


                </van-field>

                <van-field center clearable label="验证码" placeholder="请输入验证码" v-model="state.verify">
                    <template #button>
                        <vue-img-verify ref="verifyRef" />
                    </template>>

                </van-field>
                <div style="margin: 16px;">
                    <div class="link-login" @click="toggle('login')">已有登录账号</div>
                    <van-button round block color="#1baeae" native-type="submit">注册</van-button>
                </div>
            </van-form>


        </div>
    </div>
</template>

<script setup>
import { ref ,reactive} from 'vue'
import sHeader from '@/components/SimpleHeader.vue';
import VueImageVerify from '@/components/VueImageVerify.vue';
import {login,register} from '@/service/user'
import {setLocal} from '@/common/utils'
import md5 from 'js-md5'
import { showSuccessToast, showFailToast } from 'vant'

const verifyRef = ref(null);

const state = reactive({
    username: '',
    password: '',
    username1 :'',
    password1 : '',
    type : 'login',
    imgCode: '',
    verify:''
})

// 切换登录，注册2种模式

const toggle = (v) => {
    state.type = v
    state.verify='';
}

// 提交注册or登录表单

const onSubmit = async (values) =>{
    state.imgCode = verifyRef.values.state.imgCode||'';
    if(state.verify.toLowerCase()!=state.imgCode.toLowerCase()){
        showFailToast('验证码错误');
        return;
    }
    if(state.type=='login'){
        const {data} = await loginc ({
            "loginName":values.username,
            "passwordMd5":md5(values.password)
        })
        setLocal('token',data);
        //需要刷新页面，否则axios.js文件里的token不会被重置
        window.location.href ='/'
    }
    else{
        await register({
            'loginName':values.username,
            'password':(values.password),

        })
        showSuccessToast('注册成功');
        style.type='login';
        style.verify='';

    }
}
</script>



<style lang="less">
  .login {
    .logo {
      width: 120px;
      height: 120px;
      display: block;
      margin: 80px auto 20px;
    }
    .login-body {
      padding: 0 20px;
    }
    .login {
      .link-register {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        display: inline-block;
      }
    }
    .register {
      .link-login {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        display: inline-block;
      }
    }
    .verify-bar-area {
      margin-top: 24px;
      .verify-left-bar {
        border-color: #1baeae;
      }
      .verify-move-block {
        background-color: #1baeae;
        color: #fff;
      }
    }
    .verify {
      >div {
        width: 100%;
      }
      display: flex;
      justify-content: center;
      .cerify-code-panel {
        margin-top: 16px;
      }
      .verify-code {
        width: 40%!important;
        float: left!important;
      }
      .verify-code-area {
        float: left!important;
        width: 54%!important;
        margin-left: 14px!important;
        .varify-input-code {
          width: 90px;
          height: 38px!important;
          border: 1px solid #e9e9e9;
          padding-left: 10px;
          font-size: 16px;
        }
        .verify-change-area {
          line-height: 44px;
        }
      }
    }
  }
</style>

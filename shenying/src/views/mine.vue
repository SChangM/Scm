<template>
<div id="yingyuan">
            <Header title="我的神影"></Header>
        <div id="content">
            <form>
                <table>
                    <tr><td><input type="text" v-model="user" placeholder="账号/手机号/邮箱"></td></tr>
                    <tr><td><input type="password" v-model="pwd" placeholder="请输入您的密码"></td></tr>
                    <tr><td><input type="submit" @click="denglu()" value="登录"></td></tr>
                    <tr><td><span>立即注册</span><span>找回密码</span></td></tr>
                </table>
            </form>
        </div>
        <div id="dibu">
            <Foot></Foot>
        </div>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Foot from '../components/Footer.vue'
export default {
    data() {
        return {
            user:'',
            pwd:''
        }
    },
    components:{
        Header,Foot
    },
    methods: {
        denglu:function(){
            if(this.user=='' || this.pwd==''){
                alert("请填写账号或密码");
                return false;
            }else if(this.user!='123' || this.pwd!='123'){
                alert("请填写正确的账号或密码");
                this.user='';
                this.pwd='';
                return false;
            }else{
                alert("登录成功");
                this.$router.push({
                    path:'/movie'
                })
            }
        }
    },
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    form,table{
        width: 100%;
    }
    table input{
        width: 100%;
        height: 3rem;
        border: none;
        padding-left: 0.5rem;
        box-sizing: border-box;
        border-bottom:1px dashed;
        font-size: 1.1rem;
    }
    table>tr:nth-of-type(3) input{
        border: none;
        margin-top: 0.5rem;
        background: red;
        color: white;
        font-size: 1.2rem;
    }
    table>tr:nth-of-type(4) span:last-of-type{
        float: right;
    }
    #content{
        height: 40rem;
    }
    
    #dibu{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>
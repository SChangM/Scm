// 神影电影
<template>
    <div id="shen">
        <div id="top">
        <Head title="神影电影"></Head>
            <ul>
                <router-link to="/movie/movie_address" tag="li">北京<i class="fa fa-caret-down"></i></router-link>
                <router-link to="/movie/movie_hot" tag="li">正在热映</router-link>
                <router-link to="/movie/movie_jijiang" tag="li">即将上映</router-link>
                <router-link to="/movie/movie_sousuo" tag="li"><i class="fa fa-search"></i></router-link>
            </ul>
        </div>
        <div id="content">
            <router-view/>
        </div>
        <div id="dibu">
            <Foot></Foot>
        </div>
        
    </div>
</template>

<script>
import Head from '../components/Header.vue'
import Foot from '../components/Footer.vue'
export default {
    components:{
        Head,
        Foot
    },
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        display: flex;
    }
    ul>li{
        flex: 1;
        text-align: center;
        list-style: none;
    }
    .router-link-exact-active{
        border-bottom: 3px solid red;
    }
    #dibu{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>
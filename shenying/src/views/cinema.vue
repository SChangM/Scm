<template>
    <div id="yingyuan">
        <div id="top">
            <Header title="神影影院"></Header>
            <ul>
                <li>全城 <i class="fa fa-caret-down"></i></li>
                <li>品牌 <i class="fa fa-caret-down"></i></li>
                <li>特色 <i class="fa fa-caret-down"></i></li>
            </ul>
        </div>
        <div id="content">
            <div v-for="item in items" :key="item.id">
                <div id="left">
                    <p>{{item.name}}<span> {{item.price}}</span></p>
                    <p>{{item.address}}</p>
                    <p><span v-for="list in item.tese" :key="list.id">{{list}}</span></p>
                </div>
                <div id="right">{{item.juli}}</div>
            </div>
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
            items:[{
                name:"大地影院延庆金锣湾店",
                price:"38.5元起",
                address:"延庆区北街39号H座首层",
                tese:["小吃","折扣卡"],
                juli:">100km"
            },
            {
                name:"燕山影剧院",
                price:"37.5元起",
                address:"房山区燕山岗南路3号",
                tese:["小吃","折扣卡"],
                juli:">100km"
            },
            {
                name:"万达影城昌平保利光魔店",
                price:"37.9元起",
                address:"昌平区鼓楼南街佳莲时代广场",
                tese:["小吃","折扣卡"],
                juli:">80km"
            },
            {
                name:"门头沟影剧院",
                price:"30.9元起",
                address:"门头沟区新桥大街12号",
                tese:["小吃","折扣卡"],
                juli:">110km"
            }]
        }
    },
    components:{
        Header,Foot
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #top{
        width: 100%;
        height: 6rem;
    }
    #top>ul{
        height: 100%;
        display: flex;
    }
    #top>ul>li{
        flex: 1;
        line-height: 3rem;
        text-align: center;
        list-style: none;
        font-size: 1rem;
    }
    #content{
        height: 40rem;
    }
    #content>div{
       display: flex;
       border-top: 1px dashed gray;
       padding: 1rem 1.5rem;
    }
    #content>div:last-of-type{
        border-bottom:  1px dashed gray;
    }
    #left{
        flex: 9;
    }
    #left>p{
        line-height: 2rem;
    }
    #left>p:first-of-type{
        font-size: 1rem;
        font-weight: 600;
    }
    #left>p:first-of-type>span{
        color: rgb(177, 145, 145);
        font-weight: 500;
        font-size: 1.2rem;
    }
    #left>p:last-of-type>span{
        border: 1px dashed;
        padding: 0.2rem 0.5rem;
    }
    #right{
        flex: 1;
        margin-top: 2rem;
    }
    #dibu{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>
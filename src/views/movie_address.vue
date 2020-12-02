<template>
    <div id="city">
        <div id="left">
            <div>
                <p>热门城市</p>
                <ul class="hot">
                    <div v-for="item in items" :key="item.id">{{item}}</div>
                </ul>
            </div>
            <div>
                <div v-for="(ls,index) in list" :key="ls.id">
                    <p>{{ls}}</p>
                    <ul  v-for="lt in list2[index]" :key="lt.id">
                        <div v-for="a in lt" :key="a.id">{{a}}</div>
                    </ul>
                </div>
            </div>
        </div>
        <div id="right">
            <div v-for="lis in list" :key="lis.id">{{lis}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items:["北京","上海","天津","合肥","郑州"],
            list:["A","B","C","D","E"],
            list2:[
                {
                    name:["阿克苏","安康","安庆"]
                },
                {
                    name:["白山","白城","宝鸡"]
                },
                {
                    name:["沧州","长春","昌吉"]
                },{
                    name:["大理","大连","大庆"]
                },{
                    name:["鄂尔多斯","恩施","鄂州"]
                }
            ]
        }
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
    #city{
        width: 100%;
        display: flex;
        /* padding-left: 2rem; */
        box-sizing: border-box;
        background: rgb(233, 228, 228);
    }
    #city>#left{
        flex: 16;
    }
    #left>div:first-of-type>p{
        padding-left: 0.5rem;
        height: 2rem;
        line-height: 2rem;
        background: rgb(211, 203, 203);
    }
    #city>#right{
        flex:1;
        text-align: center;
        padding-top: 40%;
        background: white;
    }
    .hot{
        width: 100%;
    }
    .hot>div{
        display: inline-block;
        text-align: center;
        width: 5rem;
        height: 2rem;
        line-height: 2rem;
        margin-left: 1rem;
        margin-top: 1rem;
        border: 1px dashed;
        background: white;
    }
    #left>div{
        width: 100%;
        margin-top: 1rem;
    }
    #left>div:last-of-type p{
        height: 2rem;
        line-height: 2rem;
        padding-left:0.5rem; 
        background: rgb(211, 203, 203);
    }
    #left>div ul{
        padding-left: 0.5rem;
    }
    ul>div{
        margin:1rem;
    }
</style>
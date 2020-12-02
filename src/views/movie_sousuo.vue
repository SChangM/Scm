<template>
    <div id="sousuo">
        <div id="top">
            <i class="fa fa-search"></i><input type="search">
        </div>
        <div id="buttom">
            <p>电影/电视剧/综艺</p>
            <div>
                <div class="left"><img src='../assets/image/001.png'/></div>
                <div class="center">
                    <h2>机械师2</h2>
                    <p>剧情、喜剧、犯罪</p>
                    <p>2020-6-30</p>
                </div>
                <div class="right">
                    <span>8.9</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #top{
        width: 100%;
        height: 5rem;
        line-height: 2.6rem;
        background: rgb(175, 170, 170);
        position: relative;
        text-align: center;
    }
    #top>i{
        position: absolute;
        top: 38%;
        left:2rem;
    }
    #top>input{
        width:90%;
        height: 2rem;
        padding-left: 2rem;
        margin-top: 1.5rem;
        border: 0.5px dashed rgb(211, 211, 219);
    }
    #buttom>p{
        height: 2rem;
        line-height: 2rem;
        padding-left: 1rem;
        box-sizing: border-box;
        color: gray;
        border: 1px dashed rgb(150, 144, 144);
    }
    #buttom>div{
        width: 100%;
        height: 8rem;;
        display: flex;
        padding-top:1rem; 
        border: 1px dashed rgb(150, 144, 144);
    }
     h2{
        font-size: 1.2rem;
        margin-top: -0.1rem;
    }
    .left{
        flex: 2;
        text-align: right;
    }
    .left>img{
        width: 80%;
        height: 90%;
    }
    .center{
        flex: 4;
        padding-left: 0.6rem;
    }
    .center>p{
        height: 10%;
        font-size: 0.8rem;
    }
    .right{
        flex: 2;
        text-align: center;
        color: gray;
    }
</style>
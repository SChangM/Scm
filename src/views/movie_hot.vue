<template>
    <div id="hot">
       <div>
           <div class="left"><img src='../assets/image/001.png'/></div>
           <div class="center">
               <h2>机械师2：复活</h2>
               <p>观众评：<span class="ping">8.9</span></p>
               <p>主演:杰森.斯坦森 杰西卡.阿尔...</p>
               <p>今天50家影院放映800场</p>
           </div>
           <div class="right">
               <button>购票</button>
           </div>
       </div>
       <div>
           <div class="left"><img src='../assets/image/002.png'/></div>
           <div class="center">
               <h2>敢死队</h2>
               <p>观众评：<span class="ping">8.7</span></p>
               <p>主演:希尔维斯特.史泰龙 杰森...</p>
               <p>今天50家影院放映750场</p>
           </div>
           <div class="right">
               <button>购票</button>
           </div>
       </div>
       <div>
           <div class="left"><img src='../assets/image/003.png'/></div>
           <div class="center">
               <h2>最后的巫师猎人</h2>
               <p>观众评：<span class="ping">8.4</span></p>
               <p>主演:范.迪塞尔 萝丝.莱斯利...</p>
               <p>今天50家影院放映600场</p>
           </div>
           <div class="right">
               <button>购票</button>
           </div>
       </div>
       <div>
           <div class="left"><img src='../assets/image/004.png'/></div>
           <div class="center">
               <h2>饥饿游戏3</h2>
               <p>观众评：<span class="ping">7.6</span></p>
               <p>主演:詹妮弗.劳伦斯 乔什.哈尔...</p>
               <p>今天50家影院放映550场</p>
           </div>
           <div class="right">
               <button>购票</button>
           </div>
       </div>
       <div>
           <div class="left"><img src='../assets/image/005.png'/></div>
           <div class="center">
               <h2>钢铁骑士</h2>
               <p>观众评：<span class="ping">7.3</span></p>
               <p>主演:杰森.斯坦森 杰西卡.阿尔...</p>
               <p>今天50家影院放映500场</p>
           </div>
           <div class="right">
               <button>购票</button>
           </div>
       </div>
    </div>
</template>

<style scoped>
    .ping{
        color: rgba(23, 97, 235, 0.829);
    }
    #hot{
        width: 100%;
        font-size: 16px;
    }
    #hot>div{
        width: 100%;
        height: 8.7rem;
       display: flex;
       border-top: 1px dashed;
       padding-top: 1rem;
    }
    #hot>div:last-of-type{
        border-bottom: 1px dashed;
    }
    .left{
        flex: 2;
        text-align: right;
    }
    h2{
        font-size: 1.2rem;
        margin-top: -0.1rem;
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
    }
    .right>button{
        width: 4rem;
        height: 1.5rem;
        background: red;
        border: none;
        color: white;
        margin-top: 2rem;
    }
</style>
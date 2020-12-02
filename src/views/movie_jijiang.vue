<template>
    <div id="hot">
       <div>
           <div class="left"><img src='../assets/image/007.png'/></div>
           <div class="center">
               <h2>佐罗和麦克斯</h2>
               <p>46465人想看</p>
               <p>主演:杰森.斯坦森 杰西卡.阿尔...</p>
               <p>未来30天内上映</p>
           </div>
           <div class="right">
               <button>预售</button>
           </div>
       </div>
       <div>
           <div class="left"><img src='../assets/image/008.png'/></div>
           <div class="center">
               <h2>废材特工</h2>
               <p>46465人想看</p>
               <p>主演:希尔维斯特.史泰龙 杰森...</p>
               <p>未来30天内上映</p>
           </div>
           <div class="right">
               <button>预售</button>
           </div>
       </div>
       <div>
           <div class="left"><img src='../assets/image/009.png'/></div>
           <div class="center">
               <h2>凤凰城遗忘录</h2>
               <p>46465人想看</p>
               <p>主演:范.迪塞尔 萝丝.莱斯利...</p>
               <p>未来30天内上映</p>
           </div>
           <div class="right">
               <button>预售</button>
           </div>
       </div>
       <div>
           <div class="left"><img src='../assets/image/010.png'/></div>
           <div class="center">
               <h2>新灰姑娘</h2>
               <p>46465人想看</p>
               <p>主演:詹妮弗.劳伦斯 乔什.哈尔...</p>
               <p>未来30天内上映</p>
           </div>
           <div class="right">
               <button>预售</button>
           </div>
       </div>
       <div>
           <div class="left"><img src='../assets/image/011.png'/></div>
           <div class="center">
               <h2>鲨卷风4：四度觉醒</h2>
               <p>46465人想看</p>
               <p>主演:杰森.斯坦森 杰西卡.阿尔...</p>
               <p>未来30天内上映</p>
           </div>
           <div class="right">
               <button>预售</button>
           </div>
       </div>
    </div>
</template>
<style scoped>
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
        padding-left: 0.3rem;
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
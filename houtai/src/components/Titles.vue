<template>
    <div id="title">
        <div id="left"><span>{{title}}</span></div>
        <div id="right">
            <button><i class="el-icon-refresh"></i>刷新</button>
            <button @click="location='history.go(-1)'">返回</button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
      title:{
          default:'页面标题'
      }  
    },
}
</script>
<style scoped>
    #title{
        width: 100%;
        height: 40px;
        display: flex;
       background: white;
       line-height: 40px;
    }
    #left{
        flex: 1;
        text-align: left;
        margin-left: 10px;
         
    }
    #left>span{
        border-left: 5px solid blue;
        padding-left: 10px;
        font-weight: 800;
        color: gray
    }
    #right{
        flex: 1;
        text-align: right;
        margin-right: 10px;
    }
    #right>button{
        width: 80px;
        height: 30px;
        background: white;
        border: 1px solid rgb(230, 210, 175);
    }
</style>
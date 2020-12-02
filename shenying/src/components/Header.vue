<template>
    <div id="header">
        <h1>{{title}}</h1>
    </div>
</template>

<style>
    #header{
        width: 100%;
        height: 3rem;
        background: red;
        color: white;
        text-align: center;
        line-height: 3rem;
    }
</style>

<script>
export default {
    props:{
        title:{
            default:'神影电影'
        }
    }
}
</script>
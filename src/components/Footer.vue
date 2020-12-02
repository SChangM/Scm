<template>
    <div id="footer">
        <div>
            <router-link to="/movie">
                <i class="fa fa-film"></i>
                <p>电影</p>
            </router-link>
        </div>
        <div>
            <router-link to="/cinema">
                <i class="fa fa-youtube"></i>
                <p>影院</p>
            </router-link>
        </div>
        <div>
            <router-link to="/mine">
                <i class="fa fa-user-circle"></i>
                <p>我的</p>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
    #footer{
        width :100%;
        padding-top: 0.5rem;
        display:flex;
        background: white;
        border: 1px dashed gray;
    }
    #footer>div{
        flex: 1;
        text-align: center;
    }
    #footer>div>a{
        text-decoration: none;
    }
    .router-link-active{
        color: red;
    }
</style>
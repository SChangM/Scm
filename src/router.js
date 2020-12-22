import Vue from 'vue'
import Router from 'vue-router'
import login from './components/Login.vue'
import shouye from './components/Shouye.vue'
import gailan from './views/Gailan.vue'
import ruku from './views/Ruku.vue'
import chuku from './views/Chuku.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: 'login'
        },
        {
            path: '/Login',
            name: 'login',
            component: login
        },
        {
            path: '/shouye',
            name: 'shouye',
            component: shouye,
            children: [{
                    path: '/shouye',
                    redirect: '/shouye/gailan'
                },
                {
                    path: '/shouye/gailan',
                    name: 'gailan',
                    component: gailan
                },
                {
                    path: '/shouye/ruku',
                    name: 'ruku',
                    component: ruku
                },
                {
                    path: '/shouye/chuku',
                    name: 'chuku',
                    component: chuku
                },
                {
                    path: '/shouye/pandian',
                    name: 'pandian',
                    component: () =>
                        import ('./views/Pandian.vue')
                },
                {
                    path: '/shouye/taizhang',
                    name: 'taizhang',
                    component: () =>
                        import ('./views/Cankutaizhang.vue')
                },
                {
                    path: '/shouye/yujing',
                    name: 'yujing',
                    component: () =>
                        import ('./views/Kucunyujing.vue')
                },
                {
                    path: '/shouye/qingdan',
                    name: 'qingdan',
                    component: () =>
                        import ('./views/Kucunqingdan.vue')
                },
                {
                    path: '/shouye/jizhang',
                    name: 'jizhang',
                    component: () =>
                        import ('./views/Caiwujizhang.vue')
                },
                {
                    path: '/shouye/yiku',
                    name: 'yiku',
                    component: () =>
                        import ('./views/Yiku.vue')
                },
                {
                    path: '/shouye/baosun',
                    name: 'baosun',
                    component: () =>
                        import ('./views/Baosun.vue')
                },
                {
                    path: '/shouye/diaobo',
                    name: 'diaobo',
                    component: () =>
                        import ('./views/Diaobo.vue')
                },
                {
                    path: '/shouye/caigouguanli',
                    name: 'caigouguanli',
                    component: () =>
                        import ('./views/Caigouguanli.vue')
                },
                {
                    path: '/shouye/caigoutuihuo',
                    name: 'caigoutuihuo',
                    component: () =>
                        import ('./views/Caigoutuihuo.vue')
                },
                {
                    path: '/shouye/xiaoshouguanli',
                    name: 'xiaoshouguanli',
                    component: () =>
                        import ('./views/Xiaoshouguanli.vue')
                },
                {
                    path: '/shouye/xiaoshoutuihuo',
                    name: 'xiaoshoutuihuo',
                    component: () =>
                        import ('./views/Xiaoshoutuihuo.vue')
                },
                {
                    path: '/shouye/caiwuleibie',
                    name: 'caiwuleibie',
                    component: () =>
                        import ('./views/Caiwuleibie.vue')
                },
                {
                    path: '/shouye/yingshou',
                    name: 'yingshou',
                    component: () =>
                        import ('./views/Yingshou.vue')
                },
                {
                    path: '/shouye/yingfu',
                    name: 'yingfu',
                    component: () =>
                        import ('./views/Yingfu.vue')
                },
                {
                    path: '/shouye/kechu',
                    name: 'kechu',
                    component: () =>
                        import ('./views/Kechu.vue')
                },
                {
                    path: '/shouye/qichu',
                    name: 'qichu',
                    component: () =>
                        import ('./views/Qichu.vue')
                },
                {
                    path: '/shouye/rongliang',
                    name: 'rongliang',
                    component: () =>
                        import ('./views/Rongliang.vue')
                },
                {
                    path: '/shouye/canguan',
                    name: 'canguan',
                    component: () =>
                        import ('./views/Canguan.vue')
                },
                {
                    path: '/shouye/kuweiguan',
                    name: 'kuweiguan',
                    component: () =>
                        import ('./views/Kuweiguan.vue')
                },
                {
                    path: '/shouye/sheguan',
                    name: 'sheguan',
                    component: () =>
                        import ('./views/Sheguan.vue')
                },
                {
                    path: '/shouye/jiliang',
                    name: 'jiliang',
                    component: () =>
                        import ('./views/Jiliang.vue')
                },
                {
                    path: '/shouye/gongyingguan',
                    name: 'gongyingguan',
                    component: () =>
                        import ('./views/Gongyingguan.vue')
                },
                {
                    path: '/shouye/kehuguan',
                    name: 'kehuguan',
                    component: () =>
                        import ('./views/Kehuguan.vue')
                },
                {
                    path: '/shouye/chanpinlei',
                    name: 'chanpinlei',
                    component: () =>
                        import ('./views/Chanpinlei.vue')
                },
                {
                    path: '/shouye/chanpinguan',
                    name: 'chanpinguan',
                    component: () =>
                        import ('./views/Chanpinguan.vue')
                },
                {
                    path: '/shouye/chengyunguan',
                    name: 'chengyunguan',
                    component: () =>
                        import ('./views/Chengyunguan.vue')
                },
                {
                    path: '/shouye/user',
                    name: 'user',
                    component: () =>
                        import ('./views/User.vue')
                },
                {
                    path: '/shouye/juese',
                    name: 'juese',
                    component: () =>
                        import ('./views/Juese.vue')
                },
                {
                    path: '/shouye/bumen',
                    name: 'bumen',
                    component: () =>
                        import ('./views/Bumen.vue')
                },
                {
                    path: '/shouye/quanxian',
                    name: 'quanxian',
                    component: () =>
                        import ('./views/Quanxian.vue')
                },
                {
                    path: '/shouye/ziyuan',
                    name: 'ziyuan',
                    component: () =>
                        import ('./views/Ziyuan.vue')
                },
            ]
        },

    ]
})
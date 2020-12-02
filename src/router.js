import Vue from 'vue'
import Router from 'vue-router'
import movie from './views/movie.vue'
import hot from './views/movie_hot.vue'
import address from './views/movie_address.vue'
import sousuo from './views/movie_sousuo.vue'
import jijiang from './views/movie_jijiang.vue'
import cinema from './views/cinema.vue'
import mine from './views/mine.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: 'movie'
        },
        {
            path: '/movie',
            name: 'movie',
            component: movie,
            children: [{
                    path: '/movie',
                    redirect: 'movie_hot'
                },
                {
                    path: '/movie/movie_hot',
                    name: 'hot',
                    component: hot
                },
                {
                    path: '/movie/movie_address',
                    name: address,
                    component: address
                },
                {
                    path: '/movie/movie_jijiang',
                    name: jijiang,
                    component: jijiang
                },
                {
                    path: '/movie/movie_sousuo',
                    name: sousuo,
                    component: sousuo
                }
            ]
        },
        {
            path: '/cinema',
            name: cinema,
            component: cinema
        },
        {
            path: '/mine',
            name: mine,
            component: mine
        }

    ]
})
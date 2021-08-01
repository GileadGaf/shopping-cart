import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/Home.vue'
import about from '../pages/About.vue'
import cart from '../pages/cart';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/cart',
        component: cart
    }
]

const router = new VueRouter({
    routes
})

export default router
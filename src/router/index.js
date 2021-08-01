import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import home from '../pages/Home.vue'
import about from '../pages/About.vue'
import cart from '../pages/cart';
=======
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
>>>>>>> main

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
<<<<<<< HEAD
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/cart',
        component: cart
=======
        path: '/About',
        name: 'About',
        component: About
>>>>>>> main
    }
]

const router = new VueRouter({
    routes
})

export default router
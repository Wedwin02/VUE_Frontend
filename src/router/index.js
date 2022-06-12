import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
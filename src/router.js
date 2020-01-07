import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

const routes = [
    { path: '/', component: Home },
    { path: '/todos', component: () => import('./views/Todos.vue') }
]

export default new Router({
    mode: 'history',
    routes
})

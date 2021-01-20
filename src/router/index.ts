import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router"
import Body from '../views/Body.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Body',
        component: Body
    },
]

const router = createRouter({
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
    routes
})

export default router
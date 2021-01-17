import { RouteRecordRaw, createWebHistory, createRouter } from 'vue-router'
import Body from '../views/Body.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Body',
        component: Body
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/MainView.vue'

import blog from './blog';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        { path: '/blog',  ...blog },
        {
            path: '/cama',
            component: null
        }, {
            path: '/camaq',
            component: () => import('@/components/Header.vue')
        }
    ]
})

export default router

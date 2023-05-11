import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/MainView.vue'

import blog from './blog';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:lang([a-z]{2})?',
            name: 'home',
            component: HomeView
        },
        { path: '/:lang([a-z]{2})?/blog',  ...blog },
    ]
})

export default router

import {createRouter, createWebHistory} from 'vue-router'

import blog from './blog';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:lang([a-z]{2})?',
            name: 'home',
            component: () => import("./../views/MainView.vue")
        },
        { path: '/:lang([a-z]{2})?/blog',  ...blog },
    ]
})

export default router

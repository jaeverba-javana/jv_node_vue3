import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainView.vue'
import ThemeToggler from "@/components/ThemeToggler.vue";

import { defineAsyncComponent } from "vue";

/*const asyncHome = defineAsyncComponent(() => {
  return new Promise({
    resolve()
  })
})

defineAsyncComponent({
            loader: () => import('@/components/ContactMe.vue'),
            loadingComponent: ThemeToggler,
            delay: 4000
          })*/

const asyncHome = defineAsyncComponent(() =>
  import('@/components/ContactMe.vue')
)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, {
      path: '/blog',
      // name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/BlogView.vue'),
      children: [
        {
          path: '',
          name: 'Blog - inicio',
          component: () => import('@/components/ContactMe.vue')
        }, {
          path: 'pala',
          component: () => import('@/components/HeaderNav.vue')

        }
      ]
    }
  ]
})

export default router

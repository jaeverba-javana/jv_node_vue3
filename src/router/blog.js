export default {
    component: () => import('@/views/BlogView.vue'),
    children: [
        {
            path: '',
            name: 'Blog - inicio',
            component: () => import('@/views/blog/MainBlogView.vue')
        }, {
            path: 'pala',
            component: () => import('@/components/HeaderNav.vue')
        }
    ]
}
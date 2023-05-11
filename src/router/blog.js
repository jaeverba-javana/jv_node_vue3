let plus = {}

export default {
    name: 'blog',
    component: () => import('@/views/BlogView.vue'),
    children: [
        {
            path: '',
            name: 'Blog - inicio',
            component: () => import('@/views/blog/MainBlogView.vue')
        }, {
            path: 'post/:postId',
            name: 'post',
            component: () => import('@/views/blog/PostBlogView.vue')
        }
    ]
}
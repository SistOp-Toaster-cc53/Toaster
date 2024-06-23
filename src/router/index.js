import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../iam/pages/login.component.vue'),
            props: true,
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../social/pages/home.component.vue'),
            props: true,
        },
        {
            path: '/',
            redirect: 'home'
        },
        {
            path:'/profile',
            name:'profile',
            component:()=>import('../profile/pages/profile.component.vue'),
            props:true,
        }
    ]
})

export default router
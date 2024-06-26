import { createRouter, createWebHistory } from 'vue-router'
import {authenticationGuard} from "../iam/services/authentication.guard.js";
import SignInComponent from "../iam/pages/sign-in.component.vue";
import SignUpComponent from "../iam/pages/sign-up.component.vue";
import HomeComponent from "../social/pages/home.component.vue";
import ProfileComponent from "../profile/pages/profile.component.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/sign-in', name: '/sign-in', component: SignInComponent, props: true, },
        { path: '/sign-up', name: 'sign-up', component: SignUpComponent, props: true, },
        { path: '/home', name: 'home', component: HomeComponent, props: true, },
        { path: '/profile', name:'profile', component: ProfileComponent, props:true, },
        { path: '/', redirect: 'login' },
    ]
})

router.beforeEach((to, from, next) => {
    let baseTitle = 'Toaster Social Media Platform';
    document.title = `${baseTitle} | ${to.meta['title']}}`;
    // Call the authentication guard
    authenticationGuard(to, from, next);
});

export default router
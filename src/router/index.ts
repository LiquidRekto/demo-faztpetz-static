import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginView from '@/views/auth/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from './auth.guard'
import HomeView from '@/views/main/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/auth',
            component: MainLayout,
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: LoginView
                }
            ]
        },
        {
            path: '',
            //beforeEnter: authGuard,
            redirect: 'home',
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: HomeView
                }
            ]
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }
    ]
})

export default router
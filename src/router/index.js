import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Users.vue'
import AppLayout from '../components/AppLayout.vue'
import store from '../store'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/app',
        },
        {
            path: '/app',
            redirect: '/dashboard',
            name: 'home',
            component: () => import('../components/AppLayout.vue'), meta: {
                requiresAuth: true
            }
            , children: [
                {
                    path: '/dashboard',
                    name: 'app.dashboard',
                    component: () => import('../views/Dashboard.vue')
                },
                {
                    path: '/about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('../views/AboutView.vue')
                },
                {
                    path: '/users',
                    name: 'users',
                    // route level code-splitting
                    // this generates a separate chunk (users.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('../views/Users.vue')
                },
                {
                    path: '/frendRequest',
                    name: 'frendRequest',
                    // route level code-splitting
                    // this generates a separate chunk (frendRequest.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('../views/freindsRequest.vue')
                },

            ]
        },

        {
            path: '/signin',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/auth/signin.vue')
        }
        , {
            path: '/register',
            name: 'reg',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/auth/reg.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'login' })
    } else if (to.meta.requiresGuest && store.state.user.token) {
        next({ name: 'app.dashboard' })
    } else {
        next();
    }

})

export default router

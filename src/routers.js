import SignIn from "./components/Signin.vue";
import HomePage from "./components/Homepage.vue";
import { createRouter, createWebHistory} from "vue-router";

const routes=[
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignIn',
        component: SignIn,
        path: '/signin'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
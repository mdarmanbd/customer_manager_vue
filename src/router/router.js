
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Customers from '../components/Customers.vue';
import About from '../components/About.vue';

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/Customers',
        component:Customers
    },
    {
        path:'/About',
        component:About
    }
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
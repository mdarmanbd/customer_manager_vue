
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Customers from '../components/Customers.vue';
import About from '../components/About.vue';
import ViewCustomer from '../components/ViewCustomer.vue';

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
        path:'/Customers/:id',
        component: ViewCustomer
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
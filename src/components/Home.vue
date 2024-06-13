<script setup>
import {ref, computed, watch} from 'vue'
import { store } from '../store/store';
import router from '../router/router';
import LoginForm from './LoginForm.vue';

const addCustomersParse = JSON.parse(localStorage.getItem('addCustomers'))
const customers = ref(addCustomersParse)
const searchCustomer = ref('');


const isShowDemoCustomer = () =>{
    let isShow = true
    if(addCustomersParse){
        isShow = false
    }else{
        isShow = true
    }
    return isShow
    
}

const filteredCustomers = computed(() => {
  const searchValue = searchCustomer.value.toLowerCase();
  return customers.value.filter(customer => 
    customer.firstName.toLowerCase().includes(searchValue)
  );
});


const addCustomers = () => {
    router.push('/Customers')
}


</script>

<template>
    <div class="bg-gray-50 h-screen">
        <!-- {{ searchCustomer }} -->
        <div class="w-[850px] m-auto pt-14">
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold text-gray-700">Customers</h3>
                    <button @click="addCustomers()" class="cursor-pointer text-sm bg-gray-200 block items-center py-1.5 px-3 text-gray-800 font-medium rounded ">Add Customers</button>
            </div>
            <input v-model="searchCustomer" type="text" class="w-full focus:outline-none mt-8 bg-gray-200 broder text-sm font-normal border-gray-100 px-2 py-2" placeholder="Enter Last Name">
            
            <table class="table-auto w-full text-left mt-5">
                <thead>
                    <tr class="[&>*]:text-gray-700 [&>*]:text-base [&>*]:font-medium border-b border-gray-400">
                        <th class="pb-1">First Name</th>
                        <th class="pb-1">Amout</th>
                        <th class="pb-1">Location</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-if="isShowDemoCustomer()">
                        <td class="pl-2 border-b border-gray-300 py-2 text-sm font-normal text-gray-800">Hello World</td>
                        <td class="border-b border-gray-300 py-2 text-sm font-normal text-gray-800">Hello World</td>
                        <td class="border-b border-gray-300 py-2 text-sm font-normal text-gray-800">Hello World</td>
                        <td class="border-b border-gray-300 py-2 flex justify-center m-auto ">
                            <button class="text-sm bg-gray-200 block items-center py-0.5 px-2 text-gray-800 font-medium rounded cursor-pointer">
                                Demo
                            </button>
                        </td>
                    </tr>
                    <tr v-for="(customer,index) in filteredCustomers" :key="customer.id" >
                        <td class="pl-2 border-b border-gray-300 py-2 text-sm font-normal text-gray-800">{{ customer.firstName }}</td>
                        <td class="border-b border-gray-300 py-2 text-sm font-normal text-gray-800">{{ customer.amount }}</td>
                        <td class="border-b border-gray-300 py-2 text-sm font-normal text-gray-800">{{ customer.address }}</td>
                        <td class="border-b border-gray-300 py-2 flex justify-center pb-2">
                            <router-link :to="`/Customers/${customer.id}`">
                                <button @click="store.coustomerView(index)" class="text-sm bg-gray-200 block items-center py-0.5 px-2 text-gray-800 font-medium rounded cursor-pointer">
                                    View
                                </button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

   <LoginForm></LoginForm>
</template>


<style scoped>

    tr:nth-child(even){
        background-color: #f1f1f1;
    }
    tr:nth-child(od){
        background-color: #fff;
    }

</style>

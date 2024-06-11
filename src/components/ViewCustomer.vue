<script setup>
import { ref } from 'vue';
import{useRoute} from 'vue-router'
import router from '../router/router'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const route = useRoute()
const routeId = route.params.id
const index = routeId - 1
const addCustomersParse = JSON.parse(localStorage.getItem('addCustomers'))
const customer = ref( addCustomersParse[index] || {}) 
const isEditPageShow = ref(false)

// const toasterNotification = (massage,type) => {
//         toast(massage, {
//             type: type,
//             autoClose: 1000,
//             transition: toast.TRANSITIONS.BOUNCE,
//             position: toast.POSITION.TOP_RIGHT,
//             toastStyle: {
//                 fontSize: '14px',
//                 color: 'green',
//             },
//         })

//     }

const editCustomer = () => {
    isEditPageShow.value = true
}

const backToCustomer = () =>{
    isEditPageShow.value = false
}
const submitButton = () => {
    addCustomersParse[index] = customer.value;
    localStorage.setItem('addCustomers', JSON.stringify(addCustomersParse));
    // toasterNotification('Successfuly edit', 'success')
    router.push('/')
   
}
</script>

<template>
    <div class="bg-gray-50 ">
        
        <div class="w-[850px] m-auto pt-5 h-screen">
            <router-link v-if="!isEditPageShow" to="/" class="block pb-3">
              <button class="bg-gray-200 py-1 px-3 text-gray-800 text-sm font-medium">
                Back
              </button>  
            </router-link>
            <div v-if="isEditPageShow" class="pb-3">
                <button @click="backToCustomer()" class="bg-gray-200 py-1 px-3 text-gray-800 text-sm font-medium">
                    Back
                </button> 
            </div>
            <div class="flex items-center justify-between pt-6">
                <h3 class="text-base font-semibold text-gray-600">{{ customer.firstName }}</h3>
                <div class="flex gap-3">
                    <button @click="editCustomer()" class="bg-cyan-700 py-1 px-2 text-white text-sm font-medium">Edit</button>
                    <button @click="deleteCustomer()" class="bg-red-700 py-1 px-2 text-white text-sm font-medium">Delete</button>
                </div>
            </div>
            <div v-if="!isEditPageShow" class="mt-10">
                <h4 class="text-gray-600 font-normal text-base pb-2">
                    Amout : <span class="font-medium">{{ customer.amount }}</span> 
                </h4>
                <h4 class="text-gray-600 font-normal text-base pb-2">
                    Email : <span class="font-medium">{{ customer.email }}</span> 
                </h4>
                <h4 class="text-gray-600 font-normal text-base pb-2">
                    Phone : <span class="font-medium">{{ customer.phone }}</span> 
                </h4>
                <h4 class="text-gray-600 font-normal text-base pb-2"> 
                    Address : <span class="font-medium">{{ customer.address }}</span> 
                </h4>
            </div>
            <form v-if="isEditPageShow" @submit.prevent="submitButton()" class="mt-5">
                <div class="flex items-center">
                    <label class="text-sm text-gray-800 font-medium block w-[100px]">First Name: </label>
                    <input v-model="customer.firstName" type="text" required class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="First name">
                </div>
                <div class="flex items-center mt-3">
                    <label class="text-sm text-gray-800 font-medium w-[100px] block ">Last Name: </label>
                    <input v-model="customer.lastName" type="text" class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="Last name">
                </div>

                <div class="flex items-center mt-3">
                    <label class="text-sm text-gray-800 font-medium w-[100px] block ">Amount: </label>
                    <input v-model="customer.amount" required type="number" class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="Amout">
                </div>

                <p class="text-sm text-gray-900 font-bold my-4">Customers Contact</p>

                <div class="flex items-center">
                    <label class="text-sm text-gray-800 font-medium w-[100px] block ">Email: </label>
                    <input v-model="customer.email" type="email" required class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="example@.com">
                </div>
                
                <div class="flex items-center mt-3">
                    <label class="text-sm text-gray-800 font-medium block w-[100px]">Phone: </label>
                    <input v-model="customer.phone" type="number" required class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="Phone">
                </div>

                <p class="text-sm text-gray-900 font-bold my-4">Customers Location</p>

                <div class="flex items-center">
                    <label class="text-sm text-gray-800 font-medium block w-[100px]">Address: </label>
                    <input v-model="customer.address" type="text" class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="Address">
                </div>
                <div class="flex items-center mt-3">
                    <label class="text-sm text-gray-800 font-medium block w-[100px]">City: </label>
                    <input v-model="customer.city" type="text" class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="City">
                </div>
                <div class="flex items-center mt-3">
                    <label class="text-sm text-gray-800 font-medium block w-[100px]">State: </label>
                    <input v-model="customer.state" type="text" class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="State">
                </div>
                
                <button type="submit" class="mt-3 text-sm bg-cyan-600 block items-center py-1.5 px-3 text-white font-normal rounded cursor-pointer">
                    Submit
                </button>
            </form>
        </div>
    </div>
    
</template>

<style scoped>

</style>
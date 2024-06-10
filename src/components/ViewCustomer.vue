<script setup>
import{useRoute} from 'vue-router'

const route = useRoute()
const routeId = route.params.id
const index = routeId - 1
const addCustomersParse = JSON.parse(localStorage.getItem('addCustomers'))
const customer = addCustomersParse[index] 

</script>

<template>
    <div class="bg-gray-50 ">
        
        <div class="w-[850px] m-auto pt-5 h-screen">
            <router-link to="/" class="block pb-3">
              <button class="bg-gray-200 py-1 px-3 text-gray-800 text-sm font-medium">
                Back
              </button>  
            </router-link>
            <div class="flex items-center justify-between">
                <h3 class="text-base font-medium text-gray-600">{{ customer.firstName }}</h3>
                <div class="flex gap-3">
                    <button class="bg-cyan-700 py-1 px-2 text-white text-sm font-medium">Edit</button>
                    <button class="bg-red-700 py-1 px-2 text-white text-sm font-medium">Delet</button>
                </div>
            </div>
            <div class="mt-2">
                <h4 class="text-gray-600 font-normal text-base pb-2">
                    Amout : <span class="font-medium">{{ customer.amout }}</span> 
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
        </div>
    </div>
    
</template>

<style scoped>

</style>
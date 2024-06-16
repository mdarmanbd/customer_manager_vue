<script setup>
import {ref, reactive} from 'vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

let lastUsedId = JSON.parse(localStorage.getItem('lastUsedId')) || 0;
const addCustomersParse = JSON.parse(localStorage.getItem('addCustomers')) || []
const addCustomers = reactive(addCustomersParse)

const firstName = ref('')
const lastName = ref('')
const amount = ref()
const email = ref('')
const phone = ref()
const address = ref()
const city = ref()
const state = ref()
// const count = ref(1)
const isPhoneNumerError = ref(false)
const uploadImage = ref(null)

const onFileChange = (event) => {
   const file = event.target.files[0]

   if(file.type.startsWith('image/')){
    const reader = new FileReader()
    reader.onload = (event) => {
        uploadImage.value =  event.target.result
    }
    reader.readAsDataURL(file);
   }else{
    uploadImage.value = null
   }
    
}

const toasterNotification = (massage,type) => {
    toast(massage, {
            type: type,
            autoClose: 1000,
            transition: toast.TRANSITIONS.BOUNCE,
            position: toast.POSITION.TOP_RIGHT,
            toastStyle: {
                fontSize: '14px',
                color: 'green',
            },
        })
}

const submitButton = () => {
    const regexPhone = /^\d{2}$/;
    if(regexPhone.test(phone.value)){
        toasterNotification('Successfuly add a customers','success')
        isPhoneNumerError.value = false
        lastUsedId++;
        addCustomers.push({
            // addCustomers.length +1
            id: lastUsedId,
            firstName: firstName.value,
            lastName: lastName.value,
            image: uploadImage.value,
            amount: amount.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            city: city.value,
            state: state.value
        })
        localStorage.setItem('lastUsedId', JSON.stringify(lastUsedId));
        localStorage.setItem('addCustomers', JSON.stringify(addCustomers))

        firstName.value = ''
        lastName.value = ''
        uploadImage.value = null,
        amount.value = 
        email.value = ''
        phone.value = 
        address.value = ''
        city.value = ''
        state.value = ''

    }else{
        isPhoneNumerError.value = true
    }
    

    
}

</script>

<template>
    <div class="bg-gray-50 ">
        <div class="w-[850px] m-auto ">
            <router-link to="/" class="block pt-2 pb-3">
                <button class="bg-gray-200 py-1 px-3 text-gray-800 text-sm font-medium">
                    Back
                </button>
            </router-link>
            <h3 class="text-lg font-semibold text-gray-700 ">Add Customers</h3>
            <div class="bg-gray-100 py-2 px-4 mt-3 ">
                <!-- <p>{{ addCustomers }}</p> -->
                <p class="text-sm text-gray-900 font-bold my-3">Customers info</p>
                <form @submit.prevent="submitButton()">
                    <div class="grid grid-cols-4">
                        <div class="col-span-3">
                            <div class="flex items-center">
                                <label class="text-sm text-gray-800 font-medium block w-[100px]">First Name: </label>
                                <input v-model="firstName" type="text" required class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="First name">
                            </div>
                            <div class="flex items-center mt-3">
                                <label class="text-sm text-gray-800 font-medium w-[100px] block ">Last Name: </label>
                                <input v-model="lastName" type="text" class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="Last name">
                            </div>
                            <div class="flex items-center mt-3">
                                <label class="text-sm text-gray-800 font-medium w-[100px] block ">Amount: </label>
                                <input v-model="amount" required type="number" class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="Amout">
                            </div>

                        </div>
                        <div class="  bg-red-300">
                            
                            <div v-if="uploadImage" class=" ">
                                <img :src="uploadImage" class="m-auto border border-gray-500 w-[110px] h-[110px]" alt="Image Preview" />
                            </div>
                            <input type="file" @change="onFileChange" class="text-xs text-center" accept="image/*" />
                        </div>
                    </div>

                    <p class="text-sm text-gray-900 font-bold my-4">Customers Contact</p>

                    <div class="flex items-center">
                        <label class="text-sm text-gray-800 font-medium w-[100px] block ">Email: </label>
                        <input v-model="email" type="email" required class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="example@.com">
                    </div>
                    
                    <div class="flex items-center mt-3">
                        <label class="text-sm text-gray-800 font-medium block w-[100px]">Phone: </label>
                        <input v-model="phone" type="number" required :class="isPhoneNumerError ? 'border border-red-300' : '' " class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="Phone">
                    </div>

                    <p class="text-sm text-gray-900 font-bold my-4">Customers Location</p>

                    <div class="flex items-center">
                        <label class="text-sm text-gray-800 font-medium block w-[100px]">Address: </label>
                        <input v-model="address" type="text" class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="Address">
                    </div>
                    <div class="flex items-center mt-3">
                        <label class="text-sm text-gray-800 font-medium block w-[100px]">City: </label>
                        <input v-model="city" type="text" class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="City">
                    </div>
                    <div class="flex items-center mt-3">
                        <label class="text-sm text-gray-800 font-medium block w-[100px]">State: </label>
                        <input v-model="state" type="text" class="focus:outline focus:outline-gray-400 text-sm font-normal w-full py-1 pl-2 bg-gray-200" placeholder="State">
                    </div>
                    
                    <button type="submit" class="mt-3 text-sm bg-cyan-600 block items-center py-1.5 px-3 text-white font-normal rounded cursor-pointer">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped>



</style>
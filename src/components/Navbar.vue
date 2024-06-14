<script setup>
import { ref } from 'vue';
import { store } from '../store/store';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const isAuthenticationParse = JSON.parse(localStorage.getItem('isAuthentication'))
const isAuthentication = ref(isAuthenticationParse)

const toasterNotification = (massage,type) => {
  toast(massage, {
          type: type,
          autoClose: 1000,
          transition: toast.TRANSITIONS.BOUNCE,
          position: toast.POSITION.TOP_RIGHT,
          toastStyle: {
              fontSize: '14px',
              color: 'yellow',
          },
      })
}

const logOut = () => {
    isAuthentication.value = false
    localStorage.setItem('isAuthentication', JSON.stringify(isAuthentication.value))
    toasterNotification('successfuly log out', 'warning')
}

</script>

<template>
    <div :class="store.isModalOpen ? 'bg-gray-100 bg-opacity-50 transition':'bg-gray-100'" class=" sticky top-0 z-50">
        <div class="flex items-center w-[850px] m-auto py-2">
            <ul class="[&>li]:text-gray-800 flex space-x-5 [&>*]:text-sm [&>*]:font-rubik [&>*]:font-medium">
                <li >
                    <a href="#">Customers</a>
                </li>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/About">About</router-link>
                </li>
            </ul>
            <div v-if="!isAuthentication" @click="store.login()" class="cursor-pointer ml-auto block text-gray-800 hover:text-black font-rubik font-medium">
                Log in
            </div>
            <div v-if="isAuthentication" @click="logOut()" class="cursor-pointer ml-auto block text-gray-800 hover:text-black font-rubik font-medium">
                Log out
            </div>
        </div>
    </div>
    
</template>


<style scoped>

</style>

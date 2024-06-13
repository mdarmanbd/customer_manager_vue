<script setup>
import { ref } from 'vue';
import { store } from '../store/store';



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
            <div @click="store.login()" class="cursor-pointer ml-auto block text-gray-800 hover:text-black font-rubik font-medium">
                Log in
            </div>
        </div>
    </div>
    
</template>


<style scoped>

</style>

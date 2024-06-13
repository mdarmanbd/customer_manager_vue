  
<script setup>
import {ref} from 'vue'
import {store} from '../store/store'
import { onClickOutside } from '@vueuse/core';

const modal = ref(null);
 onClickOutside(modal, ()=>(store.isModalOpen = false))

 const submitButton = () =>{
    console.log('hello')
 }

</script>

<template>
  <div class="">
   
    <Teleport to="body">
      <Transition name="modal">
        <div @click="outsideClick()" v-if="store.isModalOpen" class="fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 flex justify-center items-center">
          <div class="modal m-auto bg-white shadow rounded" ref="modal">
            <button @click="store.isModalOpen = false " class="bg-gray-200 float-right mt-2 py-0.5 px-4 text-black font-normal text-lg me-4 ">
                close
            </button>
            <div class="absolute w-full block top-12 px-8">
                <h3 class="text-gray-800 text-base font-semibold text-center mb-1">Log in</h3>
                <p class="text-gray-600 text-sm font-medium text-center mb-5">Enter your account details below</p>
                <form @submit.prevent="submitButton()" >
                    <label class="block text-gray-800 text-sm font-medium pb-2">Email:</label>
                    <input type="text" class="bg-gray-100 w-full focus:outline-none py-0.5 pl-2 text-gray-800 text-base font-normal">
                    
                    <label class=" text-gray-800 text-sm font-medium mt-4 pb-2 block">Password:</label>
                    <input type="text" class="bg-gray-100 w-full focus:outline-none py-0.5 pl-2 text-gray-800 text-base font-normal ">

                    <label class=" text-gray-800 text-sm font-medium mt-4 pb-2 block">Confirm password:</label>
                    <input type="text" class="bg-gray-100 w-full focus:outline-none py-0.5 pl-2 text-gray-800 text-base font-normal ">

                    <button type="submit" class="w-full bg-gray-200 text-center py-2 text-gray-800 text-sm font-bold mt-6 ">
                        Log in
                    </button>
                    <p class="mt-4 text-sm font-normal text-blue-500 text-center"> <span class="text-gray-700">Don't have an account ?</span> <br> Sign up forgot your password?</p>
                </form>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>

.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
  /* transform:scale(0.9) */

}


.modal {
  position: fixed;
  z-index: 999;
  top: 10%;
  width: 400px;
  height: 450px;
  /* transform: translateY(-15%); */
  /* background: rgb(208, 247, 208); */
}
</style>
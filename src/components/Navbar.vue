<script setup>



</script>

<template>
    <div class="bg-gray-100 ">
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
            <div class="ml-auto block text-gray-800 hover:text-black font-rubik font-medium">
                Log in
            </div>
        </div>
    </div>
    
</template>


<style scoped>

</style>

<script setup>



</script>

<template>
    <div class="bg-gray-50">
        <div class="w-[850px] m-auto h-screen overflow-y-auto pt-14">
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold text-gray-700">Customers</h3>
                <router-link to="/Customers">
                    <button class="text-sm bg-gray-200 block items-center py-1.5 px-3 text-gray-800 font-medium rounded cursor-pointer">Add Customers</button>
                </router-link>
                
            </div>
            <input class="w-full focus:outline-none mt-8 bg-gray-100 broder text-sm font-normal border-gray-100 px-2 py-2" type="text" placeholder="Enter Last Name">
            
            <table class="table-auto w-full text-left mt-5">
                <thead>
                    <tr class="[&>*]:text-gray-700 [&>*]:text-base [&>*]:font-medium border-b border-gray-400">
                        <th class="pb-1">First Name</th>
                        <th class="pb-1">Last Name</th>
                        <th class="pb-1">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="pl-2 border-b border-gray-300 py-2 text-sm font-normal text-gray-800">Hello World</td>
                        <td class="border-b border-gray-300 py-2 text-sm font-normal text-gray-800">Hello World</td>
                        <td class="border-b border-gray-300 py-2 text-sm font-normal text-gray-800">Hello World</td>
                        <td class="border-b border-gray-300 py-2 flex justify-center m-auto ">
                            <button class="text-sm bg-gray-200 block items-center py-0.5 px-2 text-gray-800 font-medium rounded cursor-pointer">
                                View
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
       
    </div>
   
</template>


<style scoped>
 tr:nth-child(even) {
        background-color: #ebebeb;
    }
    tr:nth-child(od) {
        background-color: #fff;
    }
</style>

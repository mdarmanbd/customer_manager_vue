
<script setup>
import { ref } from 'vue';


const previewImage = ref(null);
const onFileChange = (event) => {
  const file = event.target.files[0];
  if ( file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    previewImage.value = null;
  }
};


const uploadImage = () => {
 localStorage.setItem('uploadImage', previewImage.value)
}

const uploadImageParse = (localStorage.getItem('uploadImage'))

</script>



<template>
  <div class="w-[500px] m-auto">
    <input type="file" @change="onFileChange" accept="image/*" />
    <div v-if="previewImage" class="border border-green-500 w-[100px] ">
      <img :src="previewImage" class="w-full" alt="Image Preview" />
    </div>
    <img :src="uploadImageParse">
    <button @click="uploadImage()" class="bg-green-300">Upload Image</button>
  </div>
</template>

<template>
    <div class="w-41 h-full h-min-96 m-2 p-2 md:p-4 border-1 border-gray-400 rounded-md
     drop-shadow-2xl bg-transparent  hover:border-1 hover:drop-shadow-2xl hover:border-white
     hover:bg-sky-900 ease-in duration-150 ">
    <img :src="testimonial.avator" alt="Avatar" class="avatar">
          <h2 class=" uppercase font-bold p-3 text-2xl">{{ testimonial.name }}</h2>
          <h3 class=" uppercase text-blue-300  font-bold text-sm">{{ testimonial.association }}</h3>
          <div class=" flex justify-center items-center mb-4">
            <a target="blank" href="https://mail.google.com/" class="text-blue-300 italic">
              {{ testimonial.contact }}
            </a>
            <div v-for="Social in testimonial.social" :key="Social.id">
              <a target="blank" v-if="Social.name === 'Linkdin'" :href="Social.url ">
                <em class="fa fa-linkedin text-md pl-2"></em></a>
            </div>
          </div>
          <div class=" md:p-4 text-center">
               <p class="text-white ">{{ testimonial.testimonial }}</p>
          </div>

    </div>

  </template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Testimonial } from '@/types/Testimonial';

export default defineComponent({

  props: {
    testimonial: {
      type: Object as () => Testimonial,
      required: true,
    },
  },
});
</script>

<style scoped>
.avatar {
  vertical-align: middle;
  align-content: center;
  margin: auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
@media screen and (max-width: 500) {
  .avatar {
  vertical-align: middle;
  align-content: center;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
  }

</style>

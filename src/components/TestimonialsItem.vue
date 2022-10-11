<template>
    <div class="w-41 h-full h-min-96 m-2 p-4 border-2 border-gray-400 rounded-md
     drop-shadow-2xl ">
    <img :src="testimonial.avator" alt="Avatar" class="avatar">
          <h2 class=" uppercase font-bold p-3 text-2xl">{{ testimonial.name }}</h2>
          <h3 class=" uppercase text-blue-300 font-bold text-sm">{{ testimonial.association }}</h3>
          <div class=" p-4 text-center">
          <!-- <p class="text-white ">Testimonial: {{ testimonial.testimonial }}</p> -->
          <p class=" text-white" >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Iure veritatis aliquid nostrum provident omnis qui fuga amet eos asperiores
            Iure veritatis aliquid nostrum provident omnis qui fuga amet eos asperiores
            Iure veritatis aliquid nostrum provident omnis qui fuga amet eos asperiores
            Iure veritatis aliquid nostrum provident omnis qui fuga amet eos asperiores
            explicabo.</p>
          </div>
          <div class=" flex justify-center items-center">
           <a target="blank" href="https://mail.google.com/" class="text-blue-300 italic">
            {{ testimonial.contact }}
          </a>
            <div v-for="Social in testimonial.social" :key="Social.id">
              <a target="blank" v-if="Social.name === 'Linkdin'" :href="Social.url ">
                <i class="fa fa-linkedin text-md pl-2"></i></a>

            </div>
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
</style>

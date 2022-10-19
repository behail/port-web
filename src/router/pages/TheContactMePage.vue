<template>
  <section class=" border-1 border-gray-400 block md:flex md:justify-between rounded-md
   mt-2 md:mt-14 ml-0  md:ml-40 drop-shadow-lg">
    <div class="p-1 md:p-2 pb-2 md:pb-4 w-2/2 md:w-1/2 ">
      <h3 class=" uppercase font-bold text-2xl m-2 md:m-10">Contact Me!</h3>
      <div class=" mt-5 md:mt-32 text-sm md:text-3xl">
        <em class="fa fa-envelope text-pinksh pr-0 md:pr-3 mr-0"></em>
        <span class="pl-0 ml-1 md:ml-2 p-1 md:p-2 text-white text-xl md:text-3xl">
          angbehailu@gmail.com</span>
          <p class=" p-1 md:p-2 pl-14 md:pl-24 text-white text-xl md:text-3xl">
            hbehailu1234@gmail.com</p>
      </div>
      <div class=" text-md md:text-3xl mt-2 md:mt-4">
        <i class="fa fa-phone text-pinksh" aria-hidden="true"></i>
          <a class="pl-2 md:pl-6 pr-12 md:pr-20 p-2 text-white text-xl md:text-3xl"
          href="tel:+251 900-650-493">
            +251 900-650-493</a>
      </div>
      <div class=" flex justify-center mb-4 md:mb-0 mt-8 md:mt-24 items-center">
        <div>
          <a href="https://github.com/behail" target="blank">
            <em class="fa fa-github text-2xl hover:text-white hover:rotate-90"></em></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/behailu-mesganaw-706390118" target="blank">
            <em class="fa fa-linkedin pl-4 text-2xl hover:text-white"></em></a>
        </div>
        <div>
          <a href="https://twitter.com/behailuM1234?t=jLc4FfeSwsyTzh7UVkHrDw&s=09" target="blank">
            <em class="fa fa-twitter pl-4 text-2xl hover:text-white"></em></a>
        </div>
      </div>
    </div>

    <div class=" w-2/2 md:w-1/2">
      <TheForm />
    </div>
  </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheForm from '@/components/TheForm.vue';

export default defineComponent({
  components: {
    TheForm,
  },
});
</script>

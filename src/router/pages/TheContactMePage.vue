<template>
  <section class=" border-1 border-white flex justify-between rounded-md
   mt-20 ml-40 drop-shadow-lg">
    <div class="p-2 pb-4 w-1/2 ">
      <h3 class=" uppercase font-bold text-2xl m-10">Contact Me!</h3>
      <div class="mt-32 text-3xl">
        <em class="fa fa-envelope text-pinksh pr-10">
        <span class="pl-8 p-2 text-white">angbehailu@gmail.com</span>
        <p class=" p-2 pl-24 text-white">hbehailu1234@gmail.com</p>
      </em>
    </div>
      <div class="text-3xl mt-4">
        <i class="fa fa-phone text-pinksh" aria-hidden="true"></i>
          <a class="pl-8 pr-20 p-2 text-white" href="tel:+251 900-650-493">+251 900-650-493</a>
      </div>
      <div class=" flex justify-center mt-24 items-center">
        <div>
          <a href="https://github.com/behail" target="blank">
            <em class="fa fa-github text-2xl"></em></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/behailu-mesganaw-706390118" target="blank">
            <em class="fa fa-linkedin pl-4 text-2xl"></em></a>
        </div>
        <div>
          <a href="https://twitter.com/behailuM1234?t=jLc4FfeSwsyTzh7UVkHrDw&s=09" target="blank">
            <em class="fa fa-twitter pl-4 text-2xl"></em></a>
        </div>
      </div>
    </div>

    <div class=" w-1/2">
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

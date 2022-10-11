<template>
  <section class=" bg-pinksh rounded-r-md">
    <form @submit.prevent="submitHandler" class="w-21 md:w-43 p-3" >
      <div class="md:flex md:items-center justify-start mt-0 md:mt-6">
        <div class="text-white text-md md:text-xl font-light md:font-semibold p-1 mr-1">
          <label for="first-name" >First Name</label>
        </div>
        <div class=" md:w-25">
          <input class=" w-full rounded-md p-1 md:p-2 mt-0 m-1 md:m-2
          hover:bg-sky-200 focus:outline-none
          focus:ring-1 focus:ring-sky-200 focus:border-sky-200 text-darkBlue text-md md:text-lg"
          type="text" id="first-name" name="first-name" placeholder="Your name.."
            v-model="firstName">
        </div>
      </div>
      <div class="md:flex items-center justify-start mt-4 md:mt-2">
        <div class="text-white md:text-xl font-semibold p-1 mr-1">
          <label for="last-name">Last Name</label>
        </div>
        <div class=" md:w-25">
          <input class=" w-full rounded-md p-1 md:p-2 mt-0 m-1 md:m-2 hover:bg-sky-200
          focus:outline-none
          focus:ring-1 focus:ring-sky-200 focus:border-sky-200 text-darkBlue text-lg"
           type="text" id="last-name" name="last-name" placeholder="Your last name.."
          v-model="lastName">
        </div>
      </div>
      <div class="md:flex items-center justify-end mt-4 md:mt-2 md:mr-14">
        <div class="text-white font-semibold text-xl p-1">
          <label for="user-name" class="text-white">Email</label>
        </div>
        <div class="md:w-25">
          <input class=" w-full rounded-md p-1 md:p-2 mt-0 m-1 md:m-2 hover:bg-sky-200
          focus:outline-none
          focus:ring-1 focus:ring-sky-200 focus:border-sky-200 text-darkBlue text-lg"
           type="text" id="user-name" name="email" placeholder="emal@address.com"
          v-model="userName">
        </div>
      </div>
      <div class="md:flex justify-end mt-4 md:mt-2 md:mr-14">
        <div class="text-white text-xl font-semibold p-1">
          <label for="message">Message</label>
        </div>
        <div class="md:w-25">
          <textarea class=" w-full rounded-md p-1 md:p-2 mt-0 m-1 md:m-2 resize-none
          hover:bg-sky-200 focus:outline-none
          focus:ring-1 focus:ring-sky-200 focus:border-sky-200 text-darkBlue text-lg"
          id="message" name="message" placeholder="Write your message here.."
          v-model="message"
          style="height:200px"></textarea>
        </div>
      </div>
      <br class="hidden md:block">
        <button class="p-3 pl-10 md:pl-52 pr-10 md:pr-52 rounded-md drop-shadow-md md:m-2
        hover:bg-darkBlue bg-pinksh border-white border-2 hover:border-transparent text-white
          uppercase text-lg font-semibold">Send</button>
  </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const firstName = ref<string>('');
    const lastName = ref<string>('');
    const userName = ref<string>('');
    const message = ref<string>('');

    const formData = () => ({
      firstName: firstName.value,
      lastName: lastName.value,
      userName: userName.value,
      message: message.value,
    });
    const submitHandler = () => {
      console.log('data', formData());
      firstName.value = '';
      lastName.value = '';
      userName.value = '';
      message.value = '';
    };
    return {
      submitHandler, firstName, lastName, userName, message,
    };
  },
});
</script>

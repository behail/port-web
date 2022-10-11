<template>
  <section class=" bg-pinksh rounded-r-md">
    <!-- <h2>Reach out Me</h2> -->
    <!-- <form @submit.prevent="submitHandler">
      <label for="first-name">First Name</label>
      <input id="first-name" placeholder="Behailu" v-model="firstName" />
      <label for="last-name">Last Name</label>
      <input id="last-name" placeholder="Mesganaw" v-model="lastName" />
      <label for="user-name">User Name</label>
      <input
        id="user-name"
        placeholder="user-name@gmail.com"
        v-model="userName"
      />
      <label>Message</label>
      <textarea cols="6" maxlength="300" v-model="message"></textarea>
      <button>Send</button>
    </form> -->
    <form @submit.prevent="submitHandler" class=" w-43 p-3" >
      <div class="flex items-center justify-between">
        <div class="text-white text-2xl p-1">
          <label for="first-name" >First Name</label>
        </div>
        <div class=" w-23">
          <input class=" w-full rounded-md p-4 m-2 hover:bg-sky-200 focus:outline-none
          focus:ring-1 focus:ring-sky-200 focus:border-sky-200 text-darkBlue text-lg"
          type="text" id="first-name" name="first-name" placeholder="Your name.."
            v-model="firstName">
        </div>
      </div>
      <div class="flex items-center justify-between mt-2">
        <div class="text-white text-2xl p-1">
          <label for="last-name">Last Name</label>
        </div>
        <div class=" w-23">
          <input class=" w-full rounded-md p-4 m-2 hover:bg-sky-200 focus:outline-none
          focus:ring-1 focus:ring-sky-200 focus:border-sky-200 text-darkBlue text-lg"
           type="text" id="last-name" name="last-name" placeholder="Your last name.."
          v-model="lastName">
        </div>
      </div>
      <div class="flex items-center justify-between mt-2">
        <div class="text-white text-2xl p-1">
          <label for="user-name" class="text-white">Email</label>
        </div>
        <div class="w-23">
          <input class=" w-full rounded-md p-4 m-2 hover:bg-sky-200 focus:outline-none
          focus:ring-1 focus:ring-sky-200 focus:border-sky-200 text-darkBlue text-lg"
           type="text" id="user-name" name="email" placeholder="emal@address.com"
          v-model="userName">
        </div>
      </div>
      <div class="flex justify-between mt-2">
        <div class="text-white text-2xl p-1">
          <label for="message">Message</label>
        </div>
        <div class="w-23">
          <textarea class=" w-full rounded-md p-2 m-2 resize-none
          hover:bg-sky-200 focus:outline-none
          focus:ring-1 focus:ring-sky-200 focus:border-sky-200 text-darkBlue text-lg"
          id="message" name="message" placeholder="Write your message here.."
          v-model="message"
          style="height:200px"></textarea>
        </div>
      </div>
      <br>
        <button class="p-3 pl-8 pr-8 rounded-md drop-shadow-md m-2
        hover:bg-darkBlue bg-pinksh border-white border-1 text-white
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

<style scoped>
   .container {
    /* border-radius: 5px; */
    /* background-color: rgb(249 198 17); */
  }

  /* input[type=text], textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
  } */

  /* label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  } */

  /* input[type=submit] {
    background-color: #1E293B;
    background-color: transparent;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  } */

  /* input[type=submit]:hover {
    background-color: #45a049;
  } */

  /* .col-25 {
    float: left;
    width: 25%;
    margin-top: 6px;
  } */

  /* .col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
  } */

  /* Clear floats after the columns */
  /* .row:after {
    content: "";
    display: table;
    clear: both;
  } */

  /* Responsive layout - when the screen is less than 600px wide, make the two
  columns stack on top of each other instead of next to each other */
  /* @media screen and (max-width: 600px) {
    .col-25, .col-75, input[type=submit] {
      width: 100%;
      margin-top: 0;
    }
  } */
  </style>

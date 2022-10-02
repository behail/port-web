<template>
  <h2>Reach out Me</h2>
  <form @submit.prevent="submitHandler">
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
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    let firstName = ref<string>("");
    let lastName = ref<string>("");
    let userName = ref<string>("");
    let message = ref<string>("");

    const formData = () => {
      return {
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value,
        message: message.value,
      };
    };
    const submitHandler = () => {
      console.log("data", formData());
      firstName.value = "";
      lastName.value = "";
      userName.value = "";
      message.value = "";
    };
    return { submitHandler, firstName, lastName, userName, message };
  },
});
</script>

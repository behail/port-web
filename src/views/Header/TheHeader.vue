<template>
  <div class="the-header ">
    <router-link to="/">
      <img src="../../assets/bm.jpeg" alt="BM_Photo" class="w-24 h-24 rounded-full mx-auto"/>
    </router-link>
    <router-link to="/education">Education</router-link>
    <router-link to="/experience">Experience</router-link>
    <router-link to="/skills">Skills</router-link>
    <router-link to="/contact">Contact Me</router-link>
    <router-link to="/testimonials">Testimonials</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.the-header {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
a {
  padding: 1rem 1rem;
  text-decoration-line: none;
  color: #2c3e50;
  font-weight: bold;
}
/* img {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin: auto;
  left: 0rem;
} */
p {
  display: flex;
  flex-direction: column;
}
</style>

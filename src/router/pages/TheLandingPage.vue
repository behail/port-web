<template>
  <h2>{{ name }}</h2>
  <h3>{{ profession }}</h3>
  <p v-for="skill in topSkills" :key="skill">{{ skill }}</p>
  <a v-for="social in socials" :key="social">{{ social }}</a>
</template>

<script setup lang="ts">
import { /*defineComponent,*/ ref } from "vue";

const name = ref("Behailu Misganaw");
const profession = ref("Web Developer");
const topSkills = ref<string[]>([
  "ReactJs",
  "VueJs",
  "Typescript",
  "HTML5",
  "TailWind",
]);
const socials = ref<string[]>(["Linkdin", "Github"]);
//Profession, description, top skills, social icons(social, always open on new window)

// export default defineComponent({});
</script>

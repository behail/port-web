<template>
  <the-card>
  <figure class="md:flex bg-slate-100 rounded-tl-xl rounded-tr-xl p-8 md:p-0 dark:bg-slate-800">
      <img class="md:w-50 md:h-70 md:rounded-tr-lg rounded-full w-48 mx-auto"
            src="../../assets/bm.jpeg" alt="">

      <div class="p-8 md:p-20 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium text-white">
            I Am Front End developer with industry experience building websites and web
            applications.Skilled in Front-End software development, Software Testing, React, ES6,
            Typescript,and Vue3. Strong engineering professional with a Bachelors focused in
            Electrical and Computer Engineering from Bahir Dar University.
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">
            {{ name }}
          </div>
          <div class="text-slate-700 dark:text-slate-500">
            <h3>{{ profession }}</h3>
          </div>
        </figcaption>
        <div class="flex justify-center">
          <img class="rounded-full w-12 h-12 p-2" src="../../assets/vue.png" alt="vue.js" />
          <img class="rounded-full w-12 h-12 p-2" src="../../assets/react.png" alt="vue.js" />
          <img class="rounded-full w-12 h-12 p-2" src="../../assets/ts.png" alt="vue.js" />
          <img class="rounded-full w-12 h-12 p-2" src="../../assets/js.png" alt="vue.js" />
          <img class="rounded-full w-12 h-12 p-2" src="../../assets/html.png" alt="vue.js" />
          <img class="rounded-full w-12 h-12 p-2" src="../../assets/css.png" alt="vue.js" />
        </div>
        <h1 class="text-white text-center font-bold text-2xl">Skills</h1>
      </div>
    </figure>
    <div >
      <!-- <p class="inline text-slate-700 dark:text-slate-500 pl-6 pr-6"
        v-for="skill in topSkills" :key="skill">{{ skill }}</p> -->
          <a class="inline text-slate-500 dark:text-slate-500 p-6"
            v-for="social in socials" :key="social">{{ social }}</a>
    </div>
</the-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TheCard from '@/views/Card/TheCard.vue';

export default defineComponent({
  components: { TheCard },
  setup() {
    const name = ref('Behailu Misganaw');
    const profession = ref('Web Developer');
    const topSkills = ref<string[]>([
      'ReactJs',
      'VueJs',
      'Typescript',
      'HTML5',
      'TailWind',
    ]);
    const socials = ref<string[]>(['Linkdin', 'Github']);

    return {
      name, profession, topSkills, socials,
    };
  },
});
// Profession, description, top skills, social icons(social, always open on new window)

// export default defineComponent({});
</script>

<style scoped>
.container {
  display: flex;
}
/* img {
  border-radius: 1rem;
  width: auto;
  height: auto;
}
div {
  display: inline;
  background-color: darkgray;
}
.summary {
  display: flex;
} */
</style>

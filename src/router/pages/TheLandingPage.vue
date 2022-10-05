<template>
  <figure class="md:flex bg-slate-800 p-8 md:p-0 dark:bg-slate-800">
      <img class="p-12 md:w-50 md:h-70 md:rounded-tr-lg rounded-full w-48 mx-auto"
            src="../../assets/bm.jpeg" alt="">
      <div class="p-8 md:p-20 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium text-white pt-28 pb-2">
            HI THERE! I'M</p> <p class="text-pinksh uppercase italic text-xl pb-4">
            <strong>{{ name }}</strong></p>
             <p class="text-white text-lg"> A <strong>{{profession}}</strong> passionate about
              creating interactive applications and experiences on the web.
            </p>
        </blockquote>
        <Carousel :autoplay="4000" :itemsToShow="3" :wrap-around="true" class="w-96 pt-12">
            <Slide class="p-2 m-2" v-for="item in items" :key="item.title">
              <img class="rounded-full w-10 h-10 p-1" :src="item.icon"
              alt="vue.js" />
              <p class="text-white">{{item.title}}</p>
            </Slide>
          </Carousel>
        <!-- <div class="flex justify-center text-white">
          <i class="fa fa-cog fa-spin fa-3x fa-fw" ></i>
        </div> -->
        <h1 class="text-white text-center font-bold text-2xl">Skills</h1>
      </div>
    </figure>
    <div class="text-white">
        <a class="inline p-6"
          v-for="social in socials" :key="social" :href="social.url" target="_blank">{{ social.name }}</a>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

// import TheCard from '@/views/Card/TheCard.vue';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const name = ref('Behailu Mesganaw');
    const profession = ref('Frontend Web Developer');
    const topSkills = ref<string[]>([
      'ReactJs',
      'VueJs',
      'Typescript',
      'HTML5',
      'TailWind',
    ]);
    const socials = ref<object[]>([{ url: 'https://www.linkedin.com/in/behailu-mesganaw-706390118', name: 'Linkdin' },
      { url: 'https://github.com/behail', name: 'Github' }]);
    const imageSrc: string = '../../assets/css.png';
    const items = [
      { title: 'Vue', icon: require('../../assets/vue.png') },
      { title: 'React', icon: require('../../assets/react.png') },
      { title: 'TypeScript', icon: require('../../assets/ts.png') },
      { title: 'JavaScript', icon: require('../../assets/js.png') },
      { title: 'HTML', icon: require('../../assets/html.png') },
      { title: 'CSS', icon: require('../../assets/css.png') },
    ];
    return {
      name, profession, topSkills, socials, imageSrc, items,
    };
  },
});
// Profession, description, top skills, social icons(social, always open on new window)

// export default defineComponent({});
</script>

<style scoped>
.container {
  display: flex;
  height: 48rem;
  padding-top: 4rem;
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

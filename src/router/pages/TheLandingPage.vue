<template>
  <div class="w-full">
  <figure class="md:flex md:p-10 p-0">
      <img class="  ml-10 p-8 md:p-12 md:w-37 md:h-50 md:rounded-tr-lg
      rounded-full w-80 mx-auto mt-12"
            src="../../assets/icons/bm1.png" alt="" />
      <div class="p-0 md:p-20 text-center md:text-left space-y-0 md:space-y-4">
        <blockquote class="p-2 pt-0 md:pt-28 pb-2">
          <p class="text-lg font-medium text-white">
            HI THERE! I'M</p> <p class="text-pinksh uppercase italic text-xl pb-4">
            <strong>{{ name }}</strong></p>
             <p class="text-white text-lg"> A <strong>{{profession}}</strong> passionate about
              creating interactive applications and experiences on the web.
            </p>
        </blockquote>
        <div class="flex justify-start w-50 h-auto ">
          <a href="../../assets/pdf/vue_cert.pdf"
          class="  bg-pinksh text-white font-semibold hover:bg-white hover:text-pinksh
           uppercase px-8 py-2 border-1 border-white rounded-md">
            Resume</a>
        </div>
        <!-- <pdfViewer :fileUrl="`../../assets/pdf/BM_CV_Oct.pdf`" /> -->
        <Carousel :autoplay="4000" :itemsToShow="3" :wrap-around="true"
        class=" pl-6 w-52 md:w-96 pt-12">
            <Slide class="p-2 pl-3" v-for="item in items" :key="item.title">
              <img class="rounded-full w-5 md:w-10 h-5 md:h-10 p-1" :src="item.icon"
              alt="vue.js" />
              <p class="text-white text-sm pr-3">{{item.title}}</p>
            </Slide>
          </Carousel>
        <div class="flex justify-end">
          <h1 class="text-slate-500 text-center font-light uppercase text-xs
          md:text-sm pr-1">Skills</h1>
          <div class="flex justify-center text-slate-500 pr-2">
            <em class="fa fa-cog fa-spin fa-1x" ></em>
          </div>
        </div>

      </div>
    </figure>

    <div class="text-white flex flex-row justify-center items-center align-bottom
     mr-0 mt-24 md:mt-0 w-full">
      <p class=" uppercase text-xs text-slate-500 italic">Reach out to me on</p>
        <a class=" pl-2 uppercase font-light text-gray-400 text-sm underline hover:text-pinksh"
          v-for="social in socials" :key="social" :href="social.url" target="_blank">
          {{ social.name }}</a>
    </div>
  </div>
</template>

<script  lang="ts">
import { defineComponent, ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import pdfViewer from '../../components/pdfViewer.vue';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Auto-play',
  components: {
    Carousel,
    Slide,
    pdfViewer,
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
    const imageSrc: string = '../../assets/icons/css.png';
    const items = [
      { title: 'Vue', icon: require('../../assets/icons/vue.png') },
      { title: 'React', icon: require('../../assets/icons/react.png') },
      { title: 'TypeScript', icon: require('../../assets/icons/ts.png') },
      { title: 'JavaScript', icon: require('../../assets/icons/js.png') },
      { title: 'HTML', icon: require('../../assets/icons/html.png') },
      { title: 'CSS', icon: require('../../assets/icons/css.png') },
    ];
    return {
      name, profession, topSkills, socials, imageSrc, items,
    };
  },
});

</script>

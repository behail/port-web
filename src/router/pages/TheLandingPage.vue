<template>
  <div>
    <figure class="lg:flex md:p-10 p-0">
      <img
        class="ml-6 p-2 md:p-12 md:w-37 md:h-30  rounded-full w-60 mx-auto mt-0"
        src="https://lh5.googleusercontent.com/ACRzPIluAc9Su2E5KeBThAlR8SXmzNoZ8dXpnu8H8yPCqsQXF8WOSUysfR5-qKQUQdY=w2400"
        alt=""
      />
      <div class="p-0 md:p-20 text-center md:text-left space-y-0 md:space-y-4">
        <blockquote class="p-0 mr-4 pt-0 md:pt-2 pb-10">
          <p class="text-lg font-medium text-white">HELLO! I'M</p>
          <p class="text-pinksh uppercase italic text-xl pb-4">
            <strong>{{ name }}</strong>
          </p>
          <p class="text-white text-lg">
            A <strong>{{ profession }}</strong> passionate about creating
            interactive applications and experiences on the web.
          </p>
        </blockquote>
        <div class="flex justify-center md:justify-start w-50 h-auto ml-16">
          <button class="bg-pinksh text-white font-semibold hover:bg-white
            hover:text-pinksh uppercase px-8 py-2 border-1 border-white rounded-md
            ease-in duration-150" @click="showResume = true">Resume</button>
         <the-modal v-if="showResume" :title="`Resume`" >
           <template #default>
             <iframe title="resume"
               src="https://drive.google.com/file/d/13dwEWvuH4bb2Okxwqd6Vpdm5g3ow-rNi/preview"
                allow="autoplay"
                class=" w-full"
                target="blank"
              ></iframe>
           </template>
           <template #action>
             <button @click="showResume = false"
             class="bg-pinksh text-white font-semibold hover:bg-white
             hover:text-pinksh uppercase px-8 py-2 border-1 border-pinksh rounded-md
             ease-in duration-150 ">Close</button>
           </template>
        </the-modal>
        </div>
        <Carousel
          :autoplay="4000"
          :itemsToShow="3"
          :wrap-around="true"
          class="px-4 w-72 md:w-96 pt-12"
        >
          <Slide class="p-2 pl-4" v-for="item in items" :key="item.title">
            <em v-if="item.icon !== ''" class="rounded-full p-1 text-3xl"
             :class='item.icon' :style="{color: item.bgColor}"></em>
              <img v-else
              class="rounded-full w-10 h-10 p-1"
              :src="typescript"
              alt="Typescript"
            />
            <p class="text-white text-sm pr-3">{{ item.title }}</p>
          </Slide>
        </Carousel>
        <div class="flex justify-end">
          <h1
            class="text-slate-500 text-center font-light uppercase text-xs md:text-sm pr-1"
          >
            Skills
          </h1>
          <div class="flex justify-center text-slate-500 pr-2">
            <em class="fa fa-cog fa-spin fa-1x"></em>
          </div>
        </div>
      </div>
    </figure>

    <div
      class="text-white flex flex-row justify-center items-center bottom-0 w-full mt-6 md:mt-0"
    >
      <p class="uppercase text-xs text-slate-500 italic">Reach out to me on</p>
      <a
        class=" uppercase font-light text-gray-400 text-sm underline hover:text-pinksh
        ease-in duration-100 pl-2"
        v-for="social in socials"
        :key="social"
        :href="social.url"
        target="_blank"
      >
        {{ social.name }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
// import pdfViewer from '../../components/pdfViewer.vue';
import 'vue3-carousel/dist/carousel.css';
import TheModal from '@/views/Modal/TheModal.vue';

export default defineComponent({
  name: 'Auto-play',
  components: {
    Carousel,
    Slide,
    TheModal,
    // pdfViewer,
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
    const socials = ref<object[]>([
      {
        url: 'https://www.linkedin.com/in/behailu-mesganaw-706390118',
        name: 'Linkdin',
      },
      { url: 'https://github.com/behail', name: 'Github' },
    ]);
    const items = [
      { title: 'Vue', icon: 'fab fa-vuejs', bgColor: '#41B883' },
      { title: 'React', icon: 'fab fa-react', bgColor: '#61DBFB' },
      { title: 'TypeScript', icon: '', bgColor: '' },
      { title: 'JavaScript', icon: 'fab fa-js-square', bgColor: '#F0DB4F' },
      { title: 'HTML', icon: 'fab fa-html5', bgColor: '#e34c26' },
      { title: 'CSS', icon: 'fab fa-css3', bgColor: '#264de4' },
    ];
    const typescript = require('../../assets/icons/ts.png');
    const showResume = ref<boolean>(false);
    return {
      name,
      profession,
      topSkills,
      socials,
      items,
      typescript,
      showResume,
    };
  },
});
</script>

<style scoped>
iframe{
  height: 66vh;
}

@media (max-width: 768px)  {
  iframe{
  height: 63vh;
}

}
</style>

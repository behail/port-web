<template>
  <div>
    <Carousel :autoplay="4000" :itemsToShow="1" :wrap-around="true"
    snapAlign='center'
      class=" w-72 md:w-500 md:m-24 md:ml-96 bg-transparent pt-6 md:pt-12
      rounded-md drop-shadow-2xl ">
          <Slide v-for="Skill in Skills" :key="Skill.id">
                <SkillsItem :skill="Skill" />
              </Slide>
          </Carousel>
              <div class="flex">
                <section>
                    <div class="content md:ml-16">
                      <h2 class=" top-64 md:top-24 left-32 md:left-80">React JS</h2>
                      <h2 class=" top-64 md:top-24 left-32 md:left-80">React JS</h2>
                    </div>
                  </section>
                  <section>
                    <div class="content ml-32">
                      <h2 class=" bottom-72 md:bottom-auto md:top-60
                      left-20 md:left-72">
                        Vue JS</h2>
                      <h2 class=" bottom-72 md:bottom-auto md:top-60 left-20 md:left-72">Vue JS</h2>
                    </div>
                  </section>
                  <section>
                    <div class="content md:ml-36">
                      <h2 class=" bottom-60 md:bottom-auto md:top-96 md:left-80">JavaScript</h2>
                      <h2 class=" bottom-60 md:bottom-auto md:top-96 md:left-80">JavaScript</h2>
                    </div>
                  </section>
                  <section>
                    <div class="content md:ml-40">
                      <h2 class=" pr-40 bottom-48 md:bottom-auto md:top-60 md:right-0">
                        Typescript</h2>
                      <h2 class=" pr-40 bottom-48 md:bottom-auto md:top-60 md:right-0">
                        Typescript</h2>
                    </div>
                  </section>
                  <section>
                    <div class="content ml-32">
                      <h2 class=" bottom-52 md:bottom-auto md:left-96">HTML</h2>
                      <h2 class=" bottom-52 md:bottom-auto md:left-96">HTML</h2>
                    </div>
                  </section>
                  <section>
                    <div class="content">
                      <h2 class=" md:right-72 ml-0 md:ml-auto top-64 md:top-96">Jest</h2>
                      <h2 class=" md:right-72 ml-0 md:ml-auto top-64 md:top-96">Jest</h2>
                    </div>
                  </section>
                  <section>
                    <div class="content md:ml-32">
                      <h2 class=" pr-36 bottom-72 md:bottom-auto md:pr-28" >Git/Github</h2>
                      <h2 class=" pr-36 bottom-72 md:bottom-auto md:pr-28">Git/Github</h2>
                    </div>
                  </section>
                  <section>
                    <div class="content md:ml-40">
                      <h2 class=" left-24 md:left-auto bottom-36 md:bottom-auto md:right-60">
                        VS Code</h2>
                      <h2 class=" left-24 md:left-auto bottom-36 md:bottom-auto md:right-60">
                        VS Code</h2>
                    </div>
                  </section>
                  <section>
                    <div class="content md:ml-40">
                      <h2 class=" left-28 bottom-0  md:left-auto md:top-72 md:right-52">
                        Tailwind CSS</h2>
                      <h2 class=" left-28 bottom-0 md:left-auto  md:top-72 md:right-52">
                        Tailwind CSS</h2>
                    </div>
                  </section>
                  <section>
                    <div class="content md:ml-40">
                      <h2 class=" left-32 bottom-6 md:top-48 md:right-2">Vanilla Extract Css</h2>
                      <h2 class="left-32 bottom-6 md:top-48 md:right-2">Vanilla Extract Css</h2>
                    </div>
                  </section>
                  <section>
                    <div class="content md:ml-40">
                      <h2 class=" left-72 bottom-0 md:top-24 md:right-52">Vue Test Utils</h2>
                      <h2 class="left-72 bottom-0 md:top-24 md:right-52">Vue Test Utils</h2>
                    </div>
                  </section>
              </div>
    </div>
    </template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Carousel, Slide } from 'vue3-carousel';
import SkillsItem from '@/components/SkillsItem.vue';
import { Skill } from '@/types/Expereince';

export default defineComponent({
  components: {
    SkillsItem,
    Carousel,
    Slide,
  },
  setup() {
    const Skills = reactive<Skill[]>([
      { id: uuidv4(), name: 'React JS', level: 90 },
      { id: uuidv4(), name: 'Vue JS', level: 95 },
      { id: uuidv4(), name: 'JavaScript', level: 97 },
      { id: uuidv4(), name: 'Typescript', level: 85 },
      { id: uuidv4(), name: 'Vanilla Extract Css', level: 80 },
      { id: uuidv4(), name: 'Tailwind CSS', level: 85 },
      { id: uuidv4(), name: 'HTML', level: 95 },
      { id: uuidv4(), name: 'Jest', level: 80 },
      { id: uuidv4(), name: 'Vue Test Utils', level: 80 },
      { id: uuidv4(), name: 'Git/Github', level: 97 },
      { id: uuidv4(), name: 'VS Code', level: 97 },
    ]);
    return { Skills };
  },
});
</script>

<style scoped>
*{
  overflow-x: hidden;
}
  .content {
    /* position: absolute; */
    width: 100%;
  }

  .content h2 {
    color: #fff;
    font-size: 2em;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .content h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 0.5px rgb(249 198 17);
  }

  .content h2:nth-child(2) {
    color: rgb(249 198 17);
    animation: animate 4s ease-in-out infinite;
  }

  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }

    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }

  </style>
 
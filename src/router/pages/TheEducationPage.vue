<template>
   <div class=" p-2 ">
     <section class="max-w-screen"  v-for="Education in EducationData" :key="Education.id">
       <EducationItem :educationProps="Education"/>
     </section>
     <section>
      <button @click="showOtherCertificates = true"
      class="fixed bottom-0  md:right-0 border-2 border-pinksh
      p-1 md:p-2 pl-2 md:pl-4 pr-2 md:pr-4
      hover:bg-white hover:border-white hover:text-darkBlue
      m-4 uppercase font-bold border-r-1 border-l-1">
      Other Certificates</button>
      <the-modal v-if="showOtherCertificates" :title="`Other Certificates`" >
        <template #default>
          <Carousel
          :autoplay="4000"
          :itemsToShow="1"
          :wrap-around="true"
          class="px-4 w-full h-fit"
        >
          <Slide class="p-2 pl-4" v-for="certificate in otherCertificates" :key="certificate.url">
              <img
              :src="certificate.url"
              :alt="certificate.name"
              class=" w-full h-61"
            />
          </Slide>
        </Carousel>
        </template>
        <template #action>
          <button @click="showOtherCertificates = false"
                  class=" p-2 md:p-6 pt-1 md:pt-2 pb-1 md:pb-2 border-2 m-2  ml-auto items-end
                border-darkBlue rounded-md hover:bg-pinksh hover:border-white hover:text-white">
                Close</button>
        </template>
      </the-modal>
     </section>
   </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Carousel, Slide } from 'vue3-carousel';
import EducationItem from '@/components/EducationItem.vue';
import Education from '@/types/Education';
import TheModal from '@/views/Modal/TheModal.vue';

export default defineComponent({
  components: {
    EducationItem,
    TheModal,
    Carousel,
    Slide,
  },
  setup() {
    const showOtherCertificates = ref<boolean>(false);
    const EducationData: Education[] = [
      {
        id: uuidv4(),
        name: 'Vue',
        detail: 'Vue – The Complete Guide (incl. Router & Composition API)',
        institution: 'Udemy',
        type: 'Certificate',
        file: 'https://udemy-certificate.s3.amazonaws.com/image/UC-17f9dc1a-aa3b-42f4-8b56-6b162b0eb938.jpg',
        startDate: new Date('07-08-2022'),
        endDate: new Date('10-6-2022'),
      },
      {
        id: uuidv4(),
        name: 'React',
        detail: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        institution: 'Udemy',
        type: 'Certificate',
        file: 'https://udemy-certificate.s3.amazonaws.com/image/UC-856e6e2f-98e4-4fef-981e-2e426cf49ee3.jpg',
        startDate: new Date('04-10-2021'),
        endDate: new Date('07-28-2021'),
      },
      {
        id: uuidv4(),
        name: 'JavaScript',
        detail: 'JavaScript - The Complete Guide 2022 (Beginner + Advanced) ',
        institution: 'Udemy',
        type: 'Certificate',
        file: 'https://udemy-certificate.s3.amazonaws.com/image/UC-827b773b-5fb7-48c5-bf46-2275156cd262.jpg',
        startDate: new Date('3-10-2021'),
        endDate: new Date('06-12-2021'),
      },
      {
        id: uuidv4(),
        name: 'Electrical and Computer Engineering',
        detail: 'BSc. In Electrical and Computer Engineering',
        institution: 'Bahir Dar University',
        type: 'Degree',
        file: 'https://lh3.googleusercontent.com/ZwEtXmbboCrIXa01meemLMpb-RWosh1PDs_yF5qih9u_2YL9riwGbXA-xJM5qM4beHk=w2400',
        startDate: new Date('10-10-2010'),
        endDate: new Date('6-29-2015'),
        gpa: 3.6,
        maxPoint: 4,
      },

    ];
    const otherCertificates: object[] = [
      { name: 'TonneyElumelu', url: 'https://lh3.googleusercontent.com/dg2ZKWweO8S5XdEvysoOwUxw-4zQUswV5XGnZesw_f8KlytKutjNbIlY7ZodPrfOa-4=w2400' },
      { name: 'ICAST 2015', url: 'https://lh6.googleusercontent.com/oT4JQXYg-VWpBdp9ZQMYEfQuFc3zA7dmsqgrsdc7JONECifgC_r8U6kczcO0xzZAPQ4=w2400' },
      { name: 'nivercity Ceftficate', url: 'https://lh5.googleusercontent.com/Gy8qWxo8N_fzgfLfeuCT_kCdb3SxC78cNs_twO-GgGw46ZHvlDOn7wstA7K_YiVyMo4=w2400' },
      { name: 'BDU Industry Leakage', url: 'https://lh6.googleusercontent.com/TxNhgYB6b8PpvGqJXel0OMoHLGufH6fnM7Rg8kdlpLhPpvTMydaqzFS3QDXjgoyPSu8=w2400' },
    ];
    return { EducationData, showOtherCertificates, otherCertificates };
  },
});
</script>
<style scoped>

</style>

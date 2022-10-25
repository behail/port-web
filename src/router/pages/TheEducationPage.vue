<template>
   <div class=" p-2 ">
     <section class="max-w-screen"  v-for="Education in EducationData" :key="Education.id">
       <EducationItem :educationProps="Education"/>
     </section>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import EducationItem from '@/components/EducationItem.vue';
import Education from '@/types/Education';

export default defineComponent({
  components: {
    EducationItem,
  },
  setup() {
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
        file: require('../../assets/img/degree.png'),
        startDate: new Date('10-10-2010'),
        endDate: new Date('6-29-2015'),
        gpa: 3.6,
        maxPoint: 4,
      },

    ];
    return { EducationData };
  },
});
</script>

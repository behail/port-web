<template>
  <div class="grid grid-cols-1 md:grid-cols-2 p-4 md:p-24 w-4/4 md:w-3/4 m-auto">
    <section  v-for="Education in EducationData" :key="Education.id">
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
        name: 'BSc. In Electrical and Computer Engineering',
        institution: 'Bahir Dar University',
        type: 'Degree',
        file: 'TODO',
        startDate: new Date('10-10-2010'),
        endDate: new Date('10-10-2015'),
        gpa: 3.6,
        maxPoint: 4,
      },
      {
        id: uuidv4(),
        name: 'JavaScript - The Complete Guide 2022 (Beginner + Advanced) ',
        institution: 'Udemy',
        type: 'Certificate',
        file: 'TODO',
        startDate: new Date('10-8-2021'),
        endDate: new Date('10-10-2021'),
      },
      {
        id: uuidv4(),
        name: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        institution: 'Udemy',
        type: 'Certificate',
        file: 'TODO',
        startDate: new Date('10-10-2021'),
        endDate: new Date('10-12-2021'),
      },
      {
        id: uuidv4(),
        name: 'Vue – The Complete Guide (incl. Router & Composition API)',
        institution: 'Udemy',
        type: 'Certificate',
        file: 'TODO',
        startDate: new Date('10-10-2021'),
        endDate: new Date('10-12-2021'),
      },
    ];
    return { EducationData };
  },
});
</script>

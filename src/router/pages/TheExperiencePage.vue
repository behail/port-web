<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 m-auto md:m-12 mt-8 lg:ml-72 md:ml-40">
    <section  v-for="Expereince in Expereinces" :key="Expereince.id">
      <ExpereinceItem :ExpereinceItem="Expereince"/>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Expereince } from '@/types/Expereince';
import ExpereinceItem from '@/components/ExpereinceItem.vue';

export default defineComponent({
  components: {
    ExpereinceItem,
  },
  setup() {
    const Expereinces = reactive<Expereince[]>([{
      id: uuidv4(),
      startDate: new Date('10-21-2021'),
      companyName: 'Uplancer Agency',
      position: 'Frontend Web Developer',
      rolDescription:
        'Responsible for Frontend development of the Sale Presentation App. Used Vue3 to develop the application, Vuex for app-wide state management.',
      location: 'US, Columbus',
      type: 'Full-time',
      base: 'Remote',
      skills: [
        {
          id: uuidv4(),
          name: 'Vue3',
          level: 95,
        },
        {
          id: uuidv4(),
          name: 'Tailwind',
          level: 95,
        },
        {
          id: uuidv4(),
          name: 'Jest',
          level: 97,
        },
        {
          id: uuidv4(),
          name: 'VTU',
          level: 80,
        },
        {
          id: uuidv4(),
          name: 'JavaScript',
          level: 97,
        },
        {
          id: uuidv4(),
          name: 'GitHub',
          level: 95,
        },
      ],
      project: [
        {
          id: uuidv4(),
          name: 'Sale Presentation App',
          description: 'Responsible for Frontend development of the Sale Presentation App. Used Vue3 to develop the application, Vuex for app-wide state management',
        },
        {
          id: uuidv4(),
          name: 'Inventory Exchange',
          description: 'Responsible for writing google sheet matcher logic for Inventory Exchange application between multiple stores with typescript.',
        },
      ],
      currentlyWorking: true,
    }, {
      id: uuidv4(),
      startDate: new Date('5-3-2019'),
      enddate: new Date('8-31-2019'),
      companyName: 'Pioneering Programmers',
      position: 'React JS Developer',
      rolDescription:
        'Software Development (React JS, Typescript, Vanilla extract), Debugging and fixing issues reported by QA & Client, Carry out quality assurance tests.',
      location: 'US, TX',
      type: 'Contract',
      base: 'Remote',
      skills: [
        {
          id: uuidv4(),
          name: 'React.js',
          level: 95,
        },
        {
          id: uuidv4(),
          name: 'TypeScript',
          level: 96,
        },
        {
          id: uuidv4(),
          name: 'Vanilla Ex',
          level: 90,
        },
        {
          id: uuidv4(),
          name: 'HTML5',
          level: 90,
        },
        {
          id: uuidv4(),
          name: 'GitHub',
          level: 90,
        },
        {
          id: uuidv4(),
          name: 'Bit Cloud',
          level: 70,
        },
      ],
      project: [
        {
          id: uuidv4(),
          name: 'Auditor Application System',
          description: 'Responsible for the development of the Auditor Application System',
        },
      ],
      currentlyWorking: false,
    }, {
      id: uuidv4(),
      startDate: new Date('10-21-2019'),
      enddate: new Date('2-21-2021'),
      companyName: 'Epana Technologies',
      position: 'Frontend Web Developer',
      rolDescription:
        'Cooperate with designers to create clean interfaces and simple, intuitive interactions and experiences, Develop project concepts and maintain optimal workflow, Work with senior developers to manage large, complex design projects for corporate clients,Complete detailed programming and development tasks for front-end websites',
      location: 'Ethiopia, Addis Ababa',
      type: 'Part-time',
      base: 'On-site',
      skills: [
        {
          id: uuidv4(),
          name: 'React.js',
          level: 95,
        },
        {
          id: uuidv4(),
          name: 'JavaScript',
          level: 96,
        },
        {
          id: uuidv4(),
          name: 'CSS',
          level: 90,
        },
        {
          id: uuidv4(),
          name: 'HTML',
          level: 90,
        },
        {
          id: uuidv4(),
          name: 'GitHub',
          level: 90,
        },
        {
          id: uuidv4(),
          name: 'Managment',
          level: 90,
        },
      ],
      project: [
        {
          id: uuidv4(),
          name: 'Entertainment Web App',
          description: 'Responsible for Designing, developing and organize the implementation of the Shega Entertainment web application and website',
        },
        {
          id: uuidv4(),
          name: 'Company website',
          description: 'Responsible for designing and developing the company website.',
        },

      ],
      currentlyWorking: false,
    }, {
      id: uuidv4(),
      startDate: new Date('9-21-2015'),
      enddate: new Date('3-21-2019'),
      companyName: 'Dventus Technologies',
      position: 'Electrical Engineer',
      rolDescription:
        'Electronics Design (PCB design), Embedded System design and testing, Carry out quality assurance tests',
      location: 'Ethiopia, Addis Ababa',
      type: 'Full-time',
      base: 'On-site',
      skills: [
        {
          id: uuidv4(),
          name: 'Altium',
          level: 95,
        },
        {
          id: uuidv4(),
          name: 'PCB Design',
          level: 96,
        },
        {
          id: uuidv4(),
          name: 'CCS',
          level: 90,
        },
      ],
      project: [
        {
          id: uuidv4(),
          name: 'Smart Meter Design',
          description: 'Single Phase Smart Electric Meter, PLC communication',
        },
        {
          id: uuidv4(),
          name: 'PLC Range extender',
          description: 'Single Phase Smart Electric Meter, PLC communication',
        },
      ],
      currentlyWorking: false,
    }]);
    return { Expereinces };
  },
});
</script>

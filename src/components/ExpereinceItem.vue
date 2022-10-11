<template>
    <the-card>
      <div class="flip-card w-72 sm:w-80 md:w-96 h-80 bg-transparent drop-shadow-md
      border-1 border-gray-400 rounded-md m-2 md:m-4">
        <div class="flip-card-inner relative w-full h-full text-center ">
          <div class="flip-card-front absolute w-full h-full bg-transparent text-white rounded-md
          ">
            <div class="flex justify-between pl-2 pr-2 p-1 md:p2 m-1 md:m-2 mb-1 md:mb-4
             font-medium text-pinksh ">
              <p class=" uppercase text-sm">{{startDate}}</p>
              <p class=" uppercase text-sm">{{enddate}}</p>
            </div>
            <div class="pl-2 pr-2 font-bold text-sm uppercase flex
            justify-start align-middle items-center">
              <p class="pl-1 pr-1 md:pl-2 md:pr-2">Position</p>
              <p class="text-xs md:text-lg text-pinksh">{{ ExpereinceData.position }}</p>
            </div>
            <div class="pl-2 pr-2 font-bold text-sm uppercase flex justify-start
            align-middle items-center">
              <p class="pl-1 pr-1 md:pl-2 md:pr-2">Compan</p>
              <p class="text-md md:text-xl text-pinksh">{{ ExpereinceData.companyName }}</p>
            </div>
            <div class="pl-2 pr-2 font-bold text-sm uppercase flex justify-start
            align-middle items-center">
              <p class="pl-1 pr-1 md:pl-2 md:pr-2">Location</p>
              <p class="text-md text-pinksh">{{ ExpereinceData.location }}</p>
            </div>
            <div class="pl-2 p-2 font-bold text-sm uppercase flex justify-start
            align-middle items-center">
              <p class="pl-1 pr-1 md:pl-2 md:pr-2">Base</p>
              <p class=" text-xs text-pinksh">{{ ExpereinceData.base }}</p>
            </div>
            <div class="bg-pinksh flex items-start justify-between pl-2 pr-2 p-0 m-0 mt-8 mb-3">
              <p class="text-darkBlue border-r-4 p-2 text-base md:text-xl uppercase font-bold">
                Projects</p>
              <div class="flex flex-col justify-start items-start p-3 text-sm font-semibold
               md:text-lg">
                <div  v-for="project in ExpereinceData.project"
                :key="project?.id">
                    <h4>{{ project?.name }}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-back absolute w-full h-full bg-darkBlue text-white rounded-md
          text-center">
            <p class="bg-pinksh text-darkBlue uppercase font-bold text-4xl rounded-t-sm pt-3 m-0
             ">Skills</p>
            <GoogleChart :skills="ExpereinceData.skills" class="flex justify-center items-center" />
          </div>
        </div>
      </div>
    </the-card>
  </template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { Expereince, Skill, Project } from '@/types/Expereince';
import GoogleChart from '@/components/GoogleChart.vue';

export default defineComponent({
  components: {
    GoogleChart,
  },
  props: {
    ExpereinceItem: {
      type: Object as () => Expereince,
      required: true,
    },
  },
  setup(props) {
    const skillsProps: Skill[] = [];
    for (let i = 0; i <= props.ExpereinceItem.skills.length; i++) {
      skillsProps.push(props.ExpereinceItem.skills[i]);
    }
    const propjectProps: Project[] = [];
    for (let j = 0; j <= props.ExpereinceItem.project.length; j++) {
      propjectProps.push(props.ExpereinceItem.project[j]);
    }

    const ExpereinceData = reactive<Expereince>({
      id: props.ExpereinceItem.id,
      startDate: props.ExpereinceItem.startDate,
      companyName: props.ExpereinceItem.companyName,
      position: props.ExpereinceItem.position,
      rolDescription: props.ExpereinceItem.rolDescription,
      location: props.ExpereinceItem.location,
      type: props.ExpereinceItem.type,
      base: props.ExpereinceItem.base,
      skills: skillsProps,
      project: propjectProps,
      currentlyWorking: props.ExpereinceItem.currentlyWorking,
    });
    const startDate = `${ExpereinceData.startDate.getMonth()}-${ExpereinceData.startDate.getFullYear()}`;
    const enddate = props.ExpereinceItem.currentlyWorking ? 'Present' : `${props.ExpereinceItem?.enddate?.getMonth()}-${props.ExpereinceItem?.enddate?.getFullYear()}`;

    return { ExpereinceData, startDate, enddate };
  },
});
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
}
.flip-card-inner {
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-back {
  transform: rotateY(180deg);
}
</style>

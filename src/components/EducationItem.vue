<template>
      <div class=" ml-0 md:ml-20 mt-0 md:mt-4 mb-16 p-2 w-full items-center">
        <div class="flex justify-center p-0 ml-0 md:ml-16 mt-6 mb-4 md:m-4
        border-t-1 border-b-1 border-white">
          <div class=" flex  course-name"
          v-for="name in courseName" :key="name">
            <span class="text-pinksh md:p-1 pt-2 pb-2 font-semibold
             md:font-bold text-sm md:text-4xl uppercase">{{name}}</span>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="font-bold text-sm uppercase">
            <p class="text-xs md:text-lg text-pinksh">{{ EducationItem.institution }}</p>
          </div>
          <div class="font-bold text-sm uppercase">
            <p class="text-xs md:text-lg text-pinksh">{{ EducationItem.detail }}</p>
          </div>
          <h3 class=" m-2 uppercase">{{ EducationItem.type }}</h3>
          <p v-if="EducationItem.gpa">{{ score() }}</p>
          <div class="flex justify-between m-2 uppercase">
            <p class=" mr-2 text-md">Duration</p>
            <p>{{ duration }}</p>
          </div>
          <button @click="showCertificateTriger()"
          class=" p-2 md:p-4 pl-4 md:pl-10 pr-4 md:pr-10 m-2 border-gray-400 border-1
          rounded-md bg-transparent hover:font-bold text-white
          hover:bg-white hover:text-darkBlue uppercase ease-in duration-150">
            Certificate</button>
            <teleport to="body">
              <div class=" bg-slate-100" v-if="showCertificate">
                <pdfViewer @colse-modal="colseModal()" :fileUrl="EducationItem.file" />
              </div>
            </teleport>
        </div>
      </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent, reactive, ref,
} from 'vue';
import Education from '@/types/Education';
import pdfViewer from './pdfViewer.vue';

export default defineComponent({
  components: {
    pdfViewer,
  },
  props: {
    educationProps: {
      type: Object as () => Education,
      required: true,
    },
  },
  emits: ['colse-modal'],
  setup(props) {
    const EducationItem = reactive<Education>({
      id: props.educationProps.id,
      name: props.educationProps.name,
      detail: props.educationProps.detail,
      institution: props.educationProps.institution,
      type: props.educationProps.type,
      file: props.educationProps.file,
      startDate: props.educationProps.startDate,
      endDate: props.educationProps.endDate,
      gpa: props.educationProps.gpa,
      maxPoint: props.educationProps.maxPoint,
    });
    function score() { return `GPA: ${EducationItem.gpa}/${EducationItem.maxPoint}`; }
    const dateParser = (date: Date) => new Date(date).getFullYear();
    const courseName = [];
    for (let i = 0; i <= EducationItem.name.length; i++) {
      courseName.push(EducationItem.name[i]);
    }
    const showCertificate = ref<boolean>(false);
    const showCertificateTriger = function () { showCertificate.value = true; };
    const colseModal = function () {
      showCertificate.value = false;
    };
    const duration = computed(() => `${EducationItem.startDate?.getMonth()}/${EducationItem.startDate?.getFullYear()} - 
      ${EducationItem.endDate?.getMonth()}/${EducationItem.endDate?.getFullYear()}`);
    return {
      EducationItem,
      score,
      dateParser,
      courseName,
      showCertificate,
      showCertificateTriger,
      colseModal,
      duration,
    };
  },
});
</script>

<style scoped>
.course-name {
  position: relative;
}
.course-name span {
  position: relative;
  animation: flip 3s infinite;
  animation-delay: calc(.5s * var(--i))
}
@keyframes flip {
  0%,80% {
    transform: rotate(360deg);
  }
}
</style>

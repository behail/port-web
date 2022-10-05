<template>
    <the-card>
        <h1>{{ EducationItem.name }}</h1>
        <h2>{{ EducationItem.institution }}</h2>
        <h3>Level: {{ EducationItem.type }}</h3>
        <p>{{ score() }}</p>
        <p>Start Date:{{ dateParser(EducationItem.startDate) }}</p>
        <p>End Date:{{ dateParser(EducationItem.endDate) }}</p>
        <p>Certificate</p>
    </the-card>
  </template>

<script lang="ts">
import {
  defineComponent, reactive,
} from 'vue';
import Education from '@/types/Education';
import TheCard from '@/views/Card/TheCard.vue';

export default defineComponent({
  components: {
    TheCard,
  },
  props: {
    educationProps: {
      type: Object as () => Education,
      required: true,
    },
  },
  setup(props) {
    const EducationItem = reactive<Education>({
      id: props.educationProps.id,
      name: props.educationProps.name,
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

    return {
      EducationItem, score, dateParser,
    };
  },
});
</script>

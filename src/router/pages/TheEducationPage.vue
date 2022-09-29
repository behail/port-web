<template>
  <h1>{{ Education.name }}</h1>
  <h2>{{ Education.institution }}</h2>
  <h3>Level: {{ studyType }}</h3>
  <p>{{ score() }}</p>
  <p>Start Date:{{ dateParser(Education.startTime) }}</p>
  <p>End Date:{{ dateParser(Education.endDate) }}</p>
  <p>Certificate</p>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Education from "@/types/Education";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
  setup() {
    const Education = reactive<Education>({
      id: uuidv4(),
      name: "Electrical and Conputer Engineering",
      institution: "Bahir Dar University",
      type: "Degree",
      file: "Will be uploaded",
      startTime: new Date("10-10-2000"),
      endDate: new Date("10/5/2015"),
      gpa: 3.6,
      maxPoint: 4,
    });
    const score = () => {
      return `GPA: ${Education.gpa}/${Education.maxPoint}`;
    };
    const dateParser = (date: Date) => {
      return new Date(date).getFullYear();
    };
    const studyType: string = Education.type;

    return { Education, score, dateParser, studyType };
  },
});
</script>

<template>
  <div v-for="Skill in Skills" :key="Skill.id">
    <h3>{{ Skill.name }}</h3>
    <h4>{{ Skill.level }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { Skill } from "@/types/Expereince";
import { v4 as uuidv4 } from "uuid";
export default defineComponent({
  setup() {
    const Skills = reactive<Skill[]>([
      { id: uuidv4(), name: "React JS", level: 95 },
      { id: uuidv4(), name: "Vue JS", level: 95 },
      { id: uuidv4(), name: "JavaScript", level: 95 },
      { id: uuidv4(), name: "Typescript", level: 95 },
      { id: uuidv4(), name: "Vanilla Extract Css", level: 95 },
      { id: uuidv4(), name: "Tailwind CSS", level: 95 },
      { id: uuidv4(), name: "HTML", level: 95 },
      { id: uuidv4(), name: "Jest", level: 95 },
      { id: uuidv4(), name: "Vue Test Utils", level: 95 },
      { id: uuidv4(), name: "Git/Github", level: 95 },
      { id: uuidv4(), name: "Visual Studio Code", level: 95 },
    ]);
    return { Skills };
  },
});
</script>

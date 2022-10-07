<template>
  <div class="grid grid-cols-3">
    <div v-for="Skill in Skills" :key="Skill.id">
      <SkillsItem :skill="Skill" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import SkillsItem from '@/components/SkillsItem.vue';
import { Skill } from '@/types/Expereince';

export default defineComponent({
  components: {
    SkillsItem,
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
      { id: uuidv4(), name: 'Visual Studio Code', level: 97 },
    ]);
    return { Skills };
  },
});
</script>

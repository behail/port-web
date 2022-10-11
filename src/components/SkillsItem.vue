<template>
      <div>
        <h3 class=" pr-14 uppercase text-2xl font-bold">{{ skill.name }}</h3>
        <TheDonut :level="skill.level"/>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Skill } from '@/types/Expereince';
import TheDonut from './TheDonut.vue';

export default defineComponent({
  components: {
    TheDonut,
  },
  props: {
    skill: {
      type: Object as () => Skill,
      required: true,
    },
  },
});
</script>

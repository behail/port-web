<template>
    <!-- <the-card> -->
      <div>
        <h3>{{ skill.name }}</h3>
        <h4>{{ skill.level }}</h4>
        <TheDonut :level="skill.level"/>
      </div>
    <!-- </the-card> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Skill } from '@/types/Expereince';
import TheDonut from './TheDonut.vue';
import TheCard from '@/views/Card/TheCard.vue';

export default defineComponent({
  components: {
    TheDonut,
    TheCard,
  },
  props: {
    skill: {
      type: Object as () => Skill,
      required: true,
    },
  },
});
</script>

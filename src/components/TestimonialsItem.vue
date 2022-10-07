<template>
  <the-card>
    <img src="../assets/bm.jpeg" alt="Avatar" class="avatar">
          <h2>{{ testimonial.name }}</h2>
          <h3>{{ testimonial.association }}</h3>
          <p class="text-white ">Testimonial: {{ testimonial.testimonial }}</p>
          <h5>Email:{{ testimonial.contact }}</h5>
            <div v-for="Social in testimonial.social" :key="Social.id">
                <h5>{{ Social.name }}:{{ Social.url }}</h5>
            </div>
  </the-card>
  </template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Testimonial } from '@/types/Testimonial';
import TheCard from '@/views/Card/TheCard.vue';

export default defineComponent({
  components: {
    TheCard,
  },
  props: {
    testimonial: {
      type: Object as () => Testimonial,
      required: true,
    },
  },
});
</script>

<style scoped>
.avatar {
  vertical-align: middle;
  align-content: center;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>

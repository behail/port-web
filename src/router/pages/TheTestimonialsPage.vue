<template>
  <section class="grid grid-cols-3 m-auto">
    <div v-for="Testimonial in Testimonials" :key="Testimonial.id">
      <TestimonialsItem :testimonial="Testimonial" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Testimonial } from '@/types/Testimonial';
import TestimonialsItem from '@/components/TestimonialsItem.vue';

export default defineComponent({
  components: {
    TestimonialsItem,
  },
  setup() {
    const Testimonial1 = reactive<Testimonial>({
      id: uuidv4(),
      name: 'Melaku Asefa',
      contact: 'melaku@assefa.com',
      association: 'Colleague',
      testimonial: 'He is Excellent',
      social: [
        {
          id: uuidv4(),
          name: 'Linkdin',
          url: 'www.linkdin.com',
        },
        {
          id: uuidv4(),
          name: 'github',
          url: 'www.github.com',
        },
      ],
    });
    const Testimonial2 = reactive<Testimonial>({
      id: uuidv4(),
      name: 'Huy',
      contact: 'huy@uplancer.com',
      association: 'Manager',
      testimonial: 'He is Excellent',
      social: [
        {
          id: uuidv4(),
          name: 'Linkdin',
          url: 'www.linkdin.com',
        },
        {
          id: uuidv4(),
          name: 'github',
          url: 'www.github.com',
        },
      ],
    });
    const Testimonial3 = reactive<Testimonial>({
      id: uuidv4(),
      name: 'Fasil Endalikachew',
      contact: 'fasil@endalk.com',
      association: 'Colleague',
      testimonial: 'He is Excellent',
      social: [
        {
          id: uuidv4(),
          name: 'Linkdin',
          url: 'www.linkdin.com',
        },
        {
          id: uuidv4(),
          name: 'github',
          url: 'www.github.com',
        },
      ],
    });
    const Testimonial4 = reactive<Testimonial>({
      id: uuidv4(),
      name: 'Tedla Ababu',
      contact: 'tedla@ababu.com',
      association: 'Prevous Manager',
      testimonial: 'He is Excellent',
      social: [
        {
          id: uuidv4(),
          name: 'Linkdin',
          url: 'www.linkdin.com',
        },
        {
          id: uuidv4(),
          name: 'github',
          url: 'www.github.com',
        },
      ],
    });
    const Testimonial5 = reactive<Testimonial>({
      id: uuidv4(),
      name: 'Thomas Koepkae',
      contact: 'tomas@kopkea.com',
      association: 'Prevous Manager',
      testimonial: 'He is Excellent',
      social: [
        {
          id: uuidv4(),
          name: 'Linkdin',
          url: 'www.linkdin.com',
        },
        {
          id: uuidv4(),
          name: 'github',
          url: 'www.github.com',
        },
      ],
    });
    const Testimonials = [
      Testimonial1,
      Testimonial2,
      Testimonial3,
      Testimonial4,
      Testimonial5,
    ];
    return { Testimonials };
  },
});
</script>

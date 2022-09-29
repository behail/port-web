<template>
  <div v-for="Testimonial in Testimonials" :key="Testimonial.id">
    <h2>{{ Testimonial.name }}</h2>
    <h3>{{ Testimonial.association }}</h3>
    <p>Testimonial: {{ Testimonial.testimonial }}</p>
    <h5>{{ Testimonial.contact }}</h5>
    <ul v-for="Social in Testimonial.social" :key="Social.id">
      <li>
        <h5>{{ Social.name }}</h5>
        <h6>{{ Social.url }}</h6>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { Testimonial } from "@/types/Testimonial";
import { v4 as uuidv4 } from "uuid";

export default defineComponent({
  setup() {
    const Testimonial1 = reactive<Testimonial>({
      id: uuidv4(),
      name: "Melaku Asefa",
      contact: "melaku@assefa.com",
      association: "Colleague",
      testimonial: "He is Excellent",
      social: [
        {
          id: uuidv4(),
          name: "Linkdin",
          url: "www.linkdin.com",
        },
        {
          id: uuidv4(),
          name: "github",
          url: "www.github.com",
        },
      ],
    });
    const Testimonial2 = reactive<Testimonial>({
      id: uuidv4(),
      name: "Huy",
      contact: "huy@uplancer.com",
      association: "Manager",
      testimonial: "He is Excellent",
      social: [
        {
          id: uuidv4(),
          name: "Linkdin",
          url: "www.linkdin.com",
        },
        {
          id: uuidv4(),
          name: "github",
          url: "www.github.com",
        },
      ],
    });
    const Testimonial3 = reactive<Testimonial>({
      id: uuidv4(),
      name: "Fasil Endalikachew",
      contact: "fasil@endalk.com",
      association: "Colleague",
      testimonial: "He is Excellent",
      social: [
        {
          id: uuidv4(),
          name: "Linkdin",
          url: "www.linkdin.com",
        },
        {
          id: uuidv4(),
          name: "github",
          url: "www.github.com",
        },
      ],
    });
    const Testimonial4 = reactive<Testimonial>({
      id: uuidv4(),
      name: "Tedla Ababu",
      contact: "tedla@ababu.com",
      association: "Prevous Manager",
      testimonial: "He is Excellent",
      social: [
        {
          id: uuidv4(),
          name: "Linkdin",
          url: "www.linkdin.com",
        },
        {
          id: uuidv4(),
          name: "github",
          url: "www.github.com",
        },
      ],
    });
    const Testimonial5 = reactive<Testimonial>({
      id: uuidv4(),
      name: "Thomas Koepkae",
      contact: "tomas@kopkea.com",
      association: "Prevous Manager",
      testimonial: "He is Excellent",
      social: [
        {
          id: uuidv4(),
          name: "Linkdin",
          url: "www.linkdin.com",
        },
        {
          id: uuidv4(),
          name: "github",
          url: "www.github.com",
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

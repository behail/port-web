<template>
  <Carousel  :breakpoints="breakpoints"
  class="w-80 md:w-70 ml-0 md:ml-32 mt-10 md:mt-36 h-auto
  hover:border-1 hover:border-white hover:rounded-md"
  :autoplay="4000" :itemsToShow="1.5" :wrap-around="true"
  :pauseAutoplayOnHover="true"
     >
        <Slide v-for="Testimonial in Testimonials" :key="Testimonial.id">
          <TestimonialsItem :testimonial="Testimonial" />
        </Slide>
  </Carousel>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { Testimonial } from '@/types/Testimonial';
import TestimonialsItem from '@/components/TestimonialsItem.vue';

export default defineComponent({
  components: {
    TestimonialsItem,
    Carousel,
    Slide,
  },
  setup() {
    const Testimonial1 = reactive<Testimonial>({
      id: uuidv4(),
      name: 'Melaku Asefa',
      contact: 'melaku@uplancer.io',
      association: 'Colleague',
      testimonial: 'I’m an Experienced Full Stack web developer. I know Behailu since 2015 He is one of the deciplined hard worker coulluege that I have know in my career. He is a quick learner, determined to achieve the the goal of the company. I had a chance to work with him on-site and remote. He was honest and responsive, good on communicating with the team.',
      avator: require('../../assets/icons/mele.jpeg'),
      social: [
        {
          id: uuidv4(),
          name: 'Linkdin',
          url: 'https://www.linkedin.com/in/melakuzewduasefa',
        },
        // {
        //   id: uuidv4(),
        //   name: 'Github',
        //   url: 'www.github.com',
        // },
      ],
    });
    // const Testimonial2 = reactive<Testimonial>({
    //   id: uuidv4(),
    //   name: 'Huy',
    //   contact: 'huy@uplancer.com',
    //   association: 'Manager',
    //   testimonial: 'He is Excellent',
    //   social: [
    //     {
    //       id: uuidv4(),
    //       name: 'Linkdin',
    //       url: 'https://www.linkedin.com/',
    //     },
    //     {
    //       id: uuidv4(),
    //       name: 'Github',
    //       url: 'www.github.com',
    //     },
    //   ],
    // });
    const Testimonial3 = reactive<Testimonial>({
      id: uuidv4(),
      name: 'Fasil Endalikachew',
      contact: 'sonofendalkachew@gmail.com',
      association: 'Former Colleague',
      testimonial: `
      I’m an Experienced Software Engineer with Master's degree in computer engineering.

I know Behailu since 2015 , we were colleuge and I know him he is a hard worker, team player and self-motivated. 
I had an opportunity to work with him at two different companies and am amazed by his dedication and motivation. I’m confident he is competent for any challenge in the development world.  
      `,
      avator: require('../../assets/icons/fasil.jpeg'),
      social: [
        {
          id: uuidv4(),
          name: 'Linkdin',
          url: 'https://www.linkedin.com/in/fasile-endalkachew-073890120',
        },
        // {
        //   id: uuidv4(),
        //   name: 'Github',
        //   url: 'www.github.com',
        // },
      ],
    });
    const Testimonial4 = reactive<Testimonial>({
      id: uuidv4(),
      name: 'Tedla Ababu',
      contact: 'abc_all_over_africa@yahoo.com',
      association: 'Former Colleague',
      testimonial: `
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Iure veritatis aliquid nostrum provident omnis qui fuga amet eos asperiores
            Iure veritatis aliquid nostrum provident omnis qui fuga amet eos asperiores
            Iure veritatis aliquid nostrum provident omnis qui fuga amet eos asperiores
            Iure veritatis aliquid nostrum provident omnis qui fuga amet eos asperiores
            explicabo.
      `,
      avator: require('../../assets/icons/td.jpeg'),
      social: [
        {
          id: uuidv4(),
          name: 'Linkdin',
          url: 'https://www.linkedin.com/in/tedla-ababu-35278241',
        },
        // {
        //   id: uuidv4(),
        //   name: 'Github',
        //   url: 'www.github.com',
        // },
      ],
    });
    const Testimonial5 = reactive<Testimonial>({
      id: uuidv4(),
      name: 'Thomas Koepkae',
      contact: 'thomas.koepke@gmail.com',
      association: 'Former Colleague',
      testimonial: `I’m a General Manager at Fosera Manufacturing. 
      I know Behailu when he work as a production Manager. 
      He has displayed a level of technical understanding, 
      detail-love and analytical thinking. He has the for us 
      Important ability of self motivation and self-organization and has 
      demonstrated quick apprehension and ability to learn new topics.`,
      avator: require('../../assets/icons/tom.jpeg'),
      social: [
        {
          id: uuidv4(),
          name: 'Linkdin',
          url: 'https://www.linkedin.com/in/thomas-k%C3%B6pke-8b1518a',
        },
        // {
        //   id: uuidv4(),
        //   name: 'Github',
        //   url: 'www.github.com',
        // },
      ],
    });
    const Testimonials = [
      Testimonial1,
      // Testimonial2,
      Testimonial3,
      Testimonial4,
      Testimonial5,
    ];
    return { Testimonials };
  },
  data() {
    return {
      // corousel
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 1.5,
        },
      },
    };
  },
});
</script>

<style scoped>

</style>

<template>
  <the-card>
    <h3>Contact Me!</h3>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nemo. Accusamus quidem
        totam officia iste dolor quibusdam earum aliquid optio sit, modi reiciendis asperiores
        maxime rem autem et illum! Necessitatibus voluptatibus autem enim pariatur provident
        inventore! Veritatis, enim! Impedit deleniti eaque perspiciatis fugit explicabo illum
        voluptatibus inventore laboriosam fugiat perferendis!</p>
    </div>
    <div>
      <div><a>Linkdin</a></div>
      <div><a>Github</a></div>
      <div><a>Tweeter</a></div>
    </div>
  </the-card>
  <the-card>
    <TheForm />
  </the-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheForm from '@/components/TheForm.vue';
import TheCard from '@/views/Card/TheCard.vue';

export default defineComponent({
  components: {
    TheForm,
    TheCard,
  },
});
</script>

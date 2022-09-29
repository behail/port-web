<template>
  <h3>Contact Me!</h3>
  <TheForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheForm from "@/components/TheForm.vue";
export default defineComponent({
  components: {
    TheForm,
  },
});
</script>

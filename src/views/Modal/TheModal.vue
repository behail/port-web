<template>
  <div></div>
  <dialog open>
    <header class="bg-pinksh">
      <slot name="header">
        <h2 class="uppercase flex justify-center text-3xl">{{ title }}</h2>
      </slot>
    </header>
    <section>
      <slot> </slot>
    </section>
    <section>
      <slot name="action"> </slot>
    </section>
  </dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false,
    },
  },
});
</script>
<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 2vh;
  left: 5%;
  width: 90%;
  height: 90vh;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
  padding-bottom: 0%;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
@media (max-width: 1200px) {
  dialog {
    height: 85vh;
    top: 4vh;
  }
}
</style>

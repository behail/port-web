<template>
  <section>
    <the-side-bar></the-side-bar>
    <div>
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheSideBar from "@/views/SideBar/TheSidebar.vue";

export default defineComponent({
  components: { TheSideBar },
});
</script>
<style>
body {
  background-color: #1e293b;
  font-family: "ABeeZee", serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(249 198 17);
}
section {
  display: flex;
}
.route-enter-active {
  animation: fadeIn 1s ease-in;
}
.route-leave-active {
  animation: moveUp 1s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes moveUp {
  from {
    transform: translateY(0px);
    scale: 1;
    opacity: 1;
  }
  to {
    transform: translateY(-400px);
    scale: 0.5;
    opacity: 0;
  }
}
</style>
